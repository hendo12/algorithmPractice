const countStudents = function(students, sandwiches) {
	let anyStudentWantsTopSandwich = students.indexOf(sandwiches[0]) !== -1;

	while(anyStudentWantsTopSandwich) {
		let currentStudentWantsSandwich = students[0] === sandwiches[0];

		if(currentStudentWantsSandwich) {
			students.shift();
			sandwiches.shift();
		} else {
			students.push(students.shift());
		}

		anyStudentWantsTopSandwich = students.indexOf(sandwiches[0]) !== -1;
	}

	let studentsUnableToEat = students.length;

	return studentsUnableToEat;
}

// Runtime: 72 ms, faster than 94.58% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
// Memory Usage: 38.7 MB, less than 30.72% of JavaScript online submissions for Number of Students Unable to Eat Lunch.