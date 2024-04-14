// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored #y any student in the class. The highest marks must then we displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks

const marks = [75, 82, 90, 88, 79]; 

let highestMarks = marks[0]; 

marks.forEach(mark => {
    highestMarks = mark > highestMarks ? mark : highestMarks;
});

console.log("The highest marks is: " + highestMarks);
