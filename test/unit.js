import {assert} from 'chai';

import '../src/did-auth';
import '../src/issue-diploma';
import '../src/issue-grades';
import '../src/vc4sm-frontend.js';

suite('did-auth basics', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('did-auth');
    document.body.appendChild(node);
    await node.updateComplete;
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('assert tests are working', () => {
    assert(true);
  });

  test('should render', () => {
    assert.isNotNull(node.shadowRoot);
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
