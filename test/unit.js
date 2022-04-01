import {assert} from 'chai';

import '../src/did-auth';
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
    assert(!!node.shadowRoot);
  });
});
