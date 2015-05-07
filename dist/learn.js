'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

// class

var Project = (function () {
	function Project(name) {
		_classCallCheck(this, Project);

		this.name = name;
	}

	_createClass(Project, [{
		key: 'start',
		value: function start() {

			return 'Project ' + this.name + ' starting';
		}
	}]);

	return Project;
})();

var WebProject = (function (_Project) {
	function WebProject(name, technologies) {
		_classCallCheck(this, WebProject);

		_get(Object.getPrototypeOf(WebProject.prototype), 'constructor', this).call(this, name);

		this.technologies = technologies;
	}

	_inherits(WebProject, _Project);

	_createClass(WebProject, [{
		key: 'info',
		value: function info() {

			return this.name + ' uses ' + this.technologies;
		}
	}]);

	return WebProject;
})(Project);

var webJournal = new WebProject('Frontend Journal', 'Javascript');

var output1 = webJournal.start();

var output2 = webJournal.info();

console.log(output1);
console.log(output2);