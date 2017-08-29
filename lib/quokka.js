'use babel';

import path from 'path';
import atom from 'atom';

class Quokka {
  activate() {
    setImmediate(() => {
      this._plugin = require('quokka-atom');
      this._plugin.activate({
        atom: atom,
        extendedCoreClient: require(`quokka-atom${!process.env.quokkaDebug ? '/build/extension/dist' : ''}/wallaby/client`),
        atomViews: require('atom-space-pen-views'),
        statusBar: this._statusBar,
        packagePath: path.join(__dirname, '..')
      });
    });
  }

  deactivate() {
    this._plugin && this._plugin.deactivate();
  }

  statusBar(control) {
    this._statusBar = control;
  }
}

export default new Quokka();