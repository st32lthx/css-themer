var postcss = require('postcss');
var expect  = require('chai').expect;

var themer = require('../');

var test = function (input, output, opts, done) {
    postcss([ themer(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-themer', function () {

     // Write tests here

    it('replaces amin with the black hex.', function (done) {
        test('a{ color: aminx }', 'a{ color: #000 }', { }, done);
    });

});
