requirejs.config({
	baseUrl : 'resources/js/lib',
	paths: {
        jquery: 'jquery',
        'jasmine': 'jasmine',
        'jasmine-html': 'jasmine-html',
        spec: '../tests/'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});
require(['jquery', 'jasmine-html'], function ($, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('../tests/calculator-test');



    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});
