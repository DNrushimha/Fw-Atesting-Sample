const { startVideo, stopVideo } = require('cypress-video-recorder');

describe('My Cypress Test', () => {
    before(() => {
        startVideo();
    });

    it('should perform some actions', () => {
        // Your test code here
    });

    after(() => {
        stopVideo();
    });
});
