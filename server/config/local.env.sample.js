'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'sticky-secret',

  FACEBOOK_ID:      '119590025043593',
  FACEBOOK_SECRET:  '755d2ee40c8675e50d8d8984d8556e77',

  TWITTER_ID:       'YpGy8yhQO2nJccsfblmOk7vLh',
  TWITTER_SECRET:   'XXgtIhu6TtgIF18Do2tS3a2iiCLlCiW6ffWAvH01HdPbhWiqWV',

  GOOGLE_ID:        '9260197397-9mn9akojaidf55buucplnmqa5kprleao.apps.googleusercontent.com',
  GOOGLE_SECRET:    'Ti4TKFAJVrA8qlDDWA9pYjgT',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
