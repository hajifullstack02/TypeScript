// datatype decaleration to variables
var student_name = "haji";
student_name = "naveen";
//  student_name         = 2222     //Type 'number' is not assignable to type 'string'
console.log(student_name);
var student_age = 22;
student_age = 25;
// student_age        = "2222 "  //Type 'string' is not assignable to type 'number'.
console.log(student_age);
var student_status = false;
student_status = true;
//  student_status         ="haji"      //Type 'string' is not assignable to type 'boolean'
console.log(student_status);
var student_condition = "healthly";
student_condition = 232;
console.log(student_condition);
var student_update1 = student_condition; //any type can assignable to anyother type also
console.log(student_update1);
var student_behavior = "good";
student_behavior = true;
console.log(student_behavior);
//var student_update:string =student_behavior;  //Type 'unknown' is not assignable to type 'string'
//arrays
var student_names = ["haji", "naveen", "raj"];
student_names.push("naresh");
console.log(student_names);
var student_ages = [23, 24, 25];
student_ages.push(21);
console.log(student_ages);
var student_clg = ["haji", "bahadur"];
//student_clg.push("vamsi");    //Property 'push' does not exist on type 'readonly string[]'.
