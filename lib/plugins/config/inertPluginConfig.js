'use strict';

const VO = require('foundry-vo');

class InertPluginConfig extends VO {

    constructor(config) {
        super();
        this._addProperties(config);
    }

    get enabled() { return this.get('enabled'); }

}

module.exports = InertPluginConfig;