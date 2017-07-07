'use strict';

var expect = require('chai').expect;
var uselessModule = require('../index');

describe('#uselessModule', function () {
    it('should return useless string', function () {
        var result = uselessModule();
        expect(result).to.equal('It\'s useless!');
    });
});