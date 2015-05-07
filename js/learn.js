// following: http://www.frontendjournal.com/javascript-es6-learn-important-features-in-a-few-minutes/
// http://es6-features.org/
// class
class Project {

	constructor(name) {
	
		this.name = name;

	}

	start() {
	
		return 'Project ' + this.name + ' starting';
	
	}

}

class WebProject extends Project {

	constructor(name, technologies) {
	
		super(name);

		this.technologies = technologies;
	
	}

	info() {
	
		return this.name + ' uses ' + this.technologies;
	
	}

}

var webJournal = new WebProject('Frontend Journal', 'Javascript');

var output1 = webJournal.start();

var output2 = webJournal.info();

console.log(output1);
console.log(output2);
