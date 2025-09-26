//tuple  : A tuple is nothting but a named Array.
var employeeDetails = [1, "Haji", 24, false];
console.log(employeeDetails[0]); //1
console.log(employeeDetails[1]); //haji 
console.log(employeeDetails[2]); //24
console.log(employeeDetails[3]); //false 
var employeeDetails_2 = [8142, "bahadur", true];
console.log(employeeDetails_2[0]); // 8142
console.log(employeeDetails_2[1]); //bahadur
console.log(employeeDetails_2[2]); //true
var employeeDetails_3 = ["helo", "world", true];
console.log(employeeDetails_3[0]); // hello
console.log(employeeDetails_3[1]); //world
console.log(employeeDetails_3[2]); //true
////array destructuring
var [studentID, studentName, studentAge] = [215, "Ali", 14];
console.log(studentID); //215
console.log(studentName); //Ali
console.log(studentAge); //14
var employee = {
    employerName: 'sham',
    age: 25
};
console.log(employee.employerName); //sham
console.log(employee.age); //25
//object destructuring
//ex
var { employerName, age } = employee;
console.log(employerName);
console.log(age);
var personalinfo = { pname: 'John', age: 20, loc: "bengolore" };
var { pname, age, loc } = personalinfo;
console.log(pname);
console.log(age);
console.log(loc);
// for object 
var cusomer_deails = { cusname: "john", age: 30, loc: "bengolore" };
console.log(cusomer_deails.cusname); //john
console.log(cusomer_deails.age); //30
console.log(cusomer_deails.loc); //"bengoroe"
var obj = {
    studentId: 101
};
//this is best practice
var obj1 = {
    "studentId": 102
};
var obj2 = {
    "studentId": 103,
    "location": "Hyd"
};
//we can use set the last key as a optional ?
var obj3 = {
    "studentId": 1,
    "location": "mumboi"
};
