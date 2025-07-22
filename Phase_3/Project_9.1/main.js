"use strict"
// **Student Grade Tracker (Array of Objects):** Calculate average grade for each student and find the student with the highest average.

let studentList = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "grades": [85, 90, 78, 92, 88]
  },
  {
    "id": 2,
    "name": "Bob Williams",
    "grades": [70, 75, 82, 68, 73]
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "grades": [95, 88, 90, 92, 98]
  },
  {
    "id": 4,
    "name": "Diana Miller",
    "grades": [78, 85, 80, 88, 82]
  },
  {
    "id": 5,
    "name": "Eve Davis",
    "grades": [60, 65, 70, 58, 62]
  }
]
let avg_list = new Array();
studentList.forEach(student => {
    avg_list.push(avgCal(student));
});
function avgCal (student) {
    let avgGrade = (student.grades).reduce((avgGrade, Grade) => avgGrade + Grade
    , 0); 

    let finalAvg = avgGrade/student.grades.length;
    console.log(`Student : ${student.name} have avg grade ${finalAvg}`);
    return finalAvg;
}
let highest_score = Math.max(...avg_list);
let student_index = avg_list.indexOf(highest_score);
let student_name = studentList[student_index].name;
studentList.forEach(student => {
});
console.log(`highest score is ${Math.max(...avg_list)} of student ${student_name}`);