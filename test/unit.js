import {assert} from 'chai';

import {DidAuth} from '../src/did-auth';
import '../src/issue-diploma';
import '../src/issue-grades';
import '../src/vc4sm-frontend.js';

suite('did-auth basics', () => {
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
    let invite = await node.fetchDidCommInvite();
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


    let student_accept_invite = await node.httpGetAsync('https://kraken.iaik.tugraz.at/connections/' + student_receive_invite.connection_id + '/accept-invitation', {
      method: 'POST'
    });
    assert.isNotEmpty(student_accept_invite);
    console.log('student_accept_invite', student_accept_invite);

    await new Promise(r => setTimeout(r, 3000));

    try {
      inviteStatus = await node.fetchDidCommInviteStatus(inviteid);
    } catch(e) {
      console.log('invite still not accepted by student: ', e);
      assert.fail();
    }
    assert.isNotEmpty(inviteStatus);
    console.log('inviteStatus', inviteStatus);

  });
});


suite('issue-diploma basics', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('issue-diploma');
    document.body.appendChild(node);
    await node.updateComplete;
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
  });
});


suite('issue-grades basics', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('issue-grades');
    document.body.appendChild(node);
    await node.updateComplete;
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
  });
});
