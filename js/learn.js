// class
class Project {

	constructor(name) {
	
		this.name = name;

	}

	start() {
	
		return 'Project ' + this.name + ' starting';
	
	}

}

var project = new Project('Journal');

var output = project.start();

console.log(output);
