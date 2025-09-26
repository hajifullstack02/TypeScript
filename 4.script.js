//typescript 
//Enum
//Enum is a kind of special class which represents the group of the constant value.
//By default enum start to initilize the variable with the 0 and then it will increase the count.
var employee_Name_1;
(function (employee_Name_1) {
    employee_Name_1[employee_Name_1["Haji"] = 0] = "Haji";
    employee_Name_1[employee_Name_1["Raj"] = 1] = "Raj";
    employee_Name_1[employee_Name_1["Naveen"] = 2] = "Naveen";
    employee_Name_1[employee_Name_1["Naresh"] = 3] = "Naresh";
})(employee_Name_1 || (employee_Name_1 = {}));
console.log("Haji number is : " + employee_Name_1.Haji); //0
console.log("Raj number is : " + employee_Name_1.Raj); //1
console.log("Naveen number is : " + employee_Name_1.Naveen); //2
console.log("Naresh number is : " + employee_Name_1.Naresh); //3
var custom_nums_1;
(function (custom_nums_1) {
    custom_nums_1[custom_nums_1["Haji"] = 1001] = "Haji";
    custom_nums_1[custom_nums_1["Raj"] = 1002] = "Raj";
    custom_nums_1[custom_nums_1["Naveen"] = 1003] = "Naveen";
    custom_nums_1[custom_nums_1["Naresh"] = 1004] = "Naresh";
})(custom_nums_1 || (custom_nums_1 = {}));
console.log("Haji number is : " + custom_nums_1.Haji); //0
console.log("Raj number is : " + custom_nums_1.Raj); //1
console.log("Naveen number is : " + custom_nums_1.Naveen); //2
console.log("Naresh number is : " + custom_nums_1.Naresh); //3
//
