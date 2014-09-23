Package.describe({
	summary: "Smart Package for accessing Shapeways API in Meteor",
	version: 0.1.0,
	name: "limemakers:shapeways",
	git: "https://github.com/LimeMakers/meteor-shapeways.git"
});

Npm.depends({
	"shapeways": "1.0.2"
});

Package.on_use(function(api, where) {
	api.add_files(['shapeways.js'], ['server']);

	api.export('shapeways');
});

Package.on_test(function(api) {
	api.use('shapeways');

	api.add_files(['shapeways_tests.js'], ['server']);
});
