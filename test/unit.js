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

    // let inviteStatus;
    // try {
    //   inviteStatus = await node.fetchDidCommInviteStatus(inviteid);
    //   assert.fail();
    // } catch(e) {
    //   // this is expected since invite not accepted by student 
    // }
    // assert.notExists(inviteStatus);

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
