import {assert} from 'chai';

import '../src/dbp-starter-activity';
import '../src/vc4sm-frontend.js';

suite('dbp-starter-activity basics', () => {
  let node;

  suiteSetup(async () => {
    node = document.createElement('dbp-starter-activity');
    document.body.appendChild(node);
    await node.updateComplete;
  });

  suiteTeardown(() => {
    node.remove();
  });

  test('should render', () => {
    assert(!!node.shadowRoot);
  });
});
