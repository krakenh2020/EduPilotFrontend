import {assert} from 'chai';

import {DidAuth} from '../src/did-auth';
import '../src/issue-diploma';
import '../src/issue-grades';
import '../src/vc4sm-frontend.js';

suite('did-auth', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('did-auth');
    document.body.appendChild(node);
    await node.updateComplete;

    node.entryPointUrl = 'https://kraken-edu-api.iaik.tugraz.at';
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('assert tests are working', () => {
    assert(true);
  });

  test('should be instance of DidAuth', () => {
    assert.instanceOf(node, DidAuth);
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
    console.log('shadowRoot1:', node.shadowRoot);
  });

  test('DidAuth class should have properties', () => {
    let properties = DidAuth.properties;
    //console.log('properties:', properties);
    assert.isNotNull(properties);
  });

  test('should be able to reach API', () => {
    let entryPointUrl = node.entryPointUrl;
    console.log('entryPointUrl:', entryPointUrl);
    assert.isNotNull(entryPointUrl);
  });

  test('should fetch an invite from server', async () => {
    let html1 = node.render();
    assert.isNotEmpty(html1);

    await node.connectedCallback();
    //let invite = await node.fetchDidCommInvite();
    let invite = node.didCommInvite;
    assert.isNotNull(invite);
    assert.isNotEmpty(invite, 'received empty/no invite from API');
    console.log('invite:', invite);

    const inviteJson = JSON.parse(invite);
    assert.isNotNull(inviteJson);
    assert.isNotEmpty(inviteJson);
    console.log('inviteJson:', inviteJson);

    const inviteid = inviteJson.invitation['@id'];
    assert.isNotEmpty(inviteid, 'invite has no @ID');
    console.log('inviteid:', inviteid);


    let inviteStatus;
    try {
      inviteStatus = await node.fetchDidCommInviteStatus(inviteid);
      assert.fail();
    } catch(e) {
      // this is expected since invite not accepted by student 
      console.log('invite not accepted by student');
    }
    assert.notExists(inviteStatus);


    let student_receive_invite = await node.httpGetAsync('https://kraken.iaik.tugraz.at/connections/receive-invitation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inviteJson.invitation),
    });
    assert.isNotEmpty(student_receive_invite);
    assert.isNotEmpty(student_receive_invite.connection_id);
    console.log('student_receive_invite', student_receive_invite);

    await new Promise(r => setTimeout(r, 2000));

    let student_accept_invite = await node.httpGetAsync('https://kraken.iaik.tugraz.at/connections/' + student_receive_invite.connection_id + '/accept-invitation', {
      method: 'POST'
    });
    assert.isNotEmpty(student_accept_invite);
    console.log('student_accept_invite', student_accept_invite);

    await new Promise(r => setTimeout(r, 2000));

    assert.isTrue(node.authenticated, 'Student agent still not authenticated (invite not accepted)');


    // await node.onCopy(event);

    let html2 = node.render();
    assert.isNotEmpty(html2);
  });
});



suite('issue-diploma', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('issue-diploma');
    document.body.appendChild(node);
    await node.updateComplete;

    node.entryPointUrl = 'https://kraken-edu-api.iaik.tugraz.at';
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('should have DID connection', () => {
    const myDID = sessionStorage.getItem('did-comm-MyDID');
    const theirDID = sessionStorage.getItem('did-comm-TheirDID');

    assert.isNotEmpty(myDID, 'No wallet app connected?');
    assert.isNotEmpty(theirDID, 'No wallet app connected?');
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
  });

  test('should display diplomas', async () => {
    let items = await node.fetchDiplomas();
    assert.isNotNull(items, 'no diplomas loaded for issuing ...');
    console.log('items', items);
  });

  test('should export diploma', async () => {
    
    assert.isFalse(node.exporting);

    await node.export('/diplomas/bsc1');

    await new Promise(r => setTimeout(r, 1000));
    assert.isFalse(node.exporting, 'cred offer already accepted by student');


    let student_get_offers = await node.httpGetAsync('https://kraken.iaik.tugraz.at/issuecredential/actions');
    assert.isNotEmpty(student_get_offers);
    console.log('student_get_offers', student_get_offers);

    student_get_offers.actions.forEach(async action => 
      await node.httpGetAsync('https://kraken.iaik.tugraz.at/issuecredential/' + action.PIID + '/accept-offer', { method: 'POST'})
      );

    await new Promise(r => setTimeout(r, 3000));
    assert.isTrue(node.exporting, 'cred offer not yet accepted by student');
    assert.isNotEmpty(node.exportingId);
  });
});



suite('issue-grades', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('issue-grades');
    document.body.appendChild(node);
    await node.updateComplete;

    node.entryPointUrl = 'https://kraken-edu-api.iaik.tugraz.at';
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('should have DID connection', () => {
    const myDID = sessionStorage.getItem('did-comm-MyDID');
    const theirDID = sessionStorage.getItem('did-comm-TheirDID');

    assert.isNotEmpty(myDID, 'No wallet app connected?');
    assert.isNotEmpty(theirDID, 'No wallet app connected?');
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
  });

  test('should display grades', async () => {
    let items = await node.fetchCourseGrades();
    assert.isNotNull(items, 'no grades loaded for issuing ...');
    console.log('items', items);
  });

  test('should export grade', async () => {
    
    assert.isFalse(node.exporting);

    await node.export('/course-grades/hcivc');

    await new Promise(r => setTimeout(r, 1000));
    assert.isFalse(node.exporting, 'cred offer already accepted by student');


    let student_get_offers = await node.httpGetAsync('https://kraken.iaik.tugraz.at/issuecredential/actions');
    assert.isNotEmpty(student_get_offers);
    console.log('student_get_offers', student_get_offers);

    student_get_offers.actions.forEach(async action => 
      await node.httpGetAsync('https://kraken.iaik.tugraz.at/issuecredential/' + action.PIID + '/accept-offer', { method: 'POST'})
      );

    await new Promise(r => setTimeout(r, 3000));
    assert.isTrue(node.exporting, 'cred offer not yet accepted by student');
    assert.isNotEmpty(node.exportingId);
  });
});
