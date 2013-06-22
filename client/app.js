//Initializer for our app
//
//Set cookie options
// 14 seems like a good time to keep the cookie around
window.COOKIE_OPTIONS = {
    path: '/',
    expires: 14
};
// require secure cookies if the protocol is https
if (window.location.protocol === "https:") {
    window.COOKIE_OPTIONS.secure = true;
}
//Set up requirejs
require.config({
    paths: {
        'jquery': 'lib/jquery/jquery.min',
        'underscore': 'lib/underscore/underscore-min',
        'backbone': 'lib/backbone/backbone-min',
        'keymaster': 'lib/keymaster/keymaster.min',
        'jquery.cookie': 'lib/jquery.cookie/jquery.cookie',
        'text': 'lib/requirejs-text/text',
        'moment': 'lib/moment/moment',
        'codemirror': 'lib/codemirror/lib/codemirror'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        backbone:{
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        },
        'keymaster': {
            exports: 'key'
        },
        'codemirror': {
            exports: 'CodeMirror'
        },
        'jquery.cookie': ['jquery']
    }
});
//Bootstrap our main application, and start
require(['main']);