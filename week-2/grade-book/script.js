let students = [];
let studForm = document.getElementById("students-form");
let name = document.getElementById("name");
let grade1 = document.getElementById("grade-1");
let grade2 = document.getElementById("grade-2");
let grade3 = document.getElementById("grade-3");
let list = document.getElementById("students-list");
let total = document.getElementById("total-avg");
let topstudent = document.getElementById("top-stu");
let Failstudents = document.getElementById("Fail-stu");
let search = document.getElementById("search");

studForm.addEventListener("submit", function (event) {
  event.preventDefault();

  students.push({
    id: crypto.randomUUID(),
    name: name.value,
    grades: [Number(grade1.value), Number(grade2.value), Number(grade3.value)],
  });
  console.log(students);
  studForm.reset();
  renderStudents();
});
function renderStudents(studentList = students) {
  students.sort((a, b) => getAverage(b) - getAverage(a));

  list.innerHTML = studentList
    .map((student) => {
      let letter = "";
      let avg = (student.grades[0] + student.grades[1] + student.grades[2]) / 3;
      if (avg <= 100 && avg >= 90) {
        letter = "A";
      } else if (avg < 90 && avg >= 80) {
        letter = "B";
      } else if (avg < 80 && avg >= 70) {
        letter = "C";
      } else if (avg < 70 && avg >= 60) {
        letter = "D";
      } else if (avg < 60 && avg >= 0) {
        letter = "F";
      } else {
        letter = "error";
      }

      return `<li>${student.name} ${avg} ${letter} <button onclick="deleteStu('${student.id}')">Delete</button></li> `;
    })
    .join("");
  if (students.length === 0) {
    total.textContent = "Class average: 0";
    topstudent.textContent = "Top student: none";
    Failstudents.textContent = "Failing students: 0";
    return;
  }

  let sumOfAverages = students.reduce((sum, student) => {
    return sum + getAverage(student);
  }, 0);

  let totalAvg = sumOfAverages / students.length;
  total.textContent = `the class avg is ${totalAvg}`;

  let TopStu = students.reduce((top, stu) => {
    if (getAverage(stu) > getAverage(top)) {
      return stu;
    }
    return top;
  });
  topstudent.textContent = `${TopStu.name} ${getAverage(TopStu)}`;

  let fail = students.filter((f) => {
    return getAverage(f) < 50;
  });
  let failCount = fail.length;
  Failstudents.textContent = `number of fail students is ${failCount}`;
}
function deleteStu(idDelete) {
  students = students.filter((student) => student.id !== idDelete);
  renderStudents();
}

search.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const result = students.filter((student) =>
    student.name.toLowerCase().includes(query),
  );
  renderStudents(result);
});
function getAverage(student) {
  return student.grades.reduce((s, g) => s + g, 0) / student.grades.length;
}
