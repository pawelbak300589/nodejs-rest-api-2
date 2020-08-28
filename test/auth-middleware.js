const expect = require('chai').expect;

const authMiddleware = require('../middleware/is-auth');

describe('Auth middleware', function () {
    it('should throw an error if no authorisation header is present', function () {
        const req = {
            get: function () {
                return null;
            }
        };

        expect(authMiddleware.bind(this, req, {}, () => {
        })).to.throw('Not authenticated.');
    });

    it('should throw an error if authorisation header is only single string', function () {
        const req = {
            get: function () {
                return 'xyz';
            }
        };

        expect(authMiddleware.bind(this, req, {}, () => {
        })).to.throw();
    });
});

