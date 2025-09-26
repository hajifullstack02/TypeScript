//typescript 
//Enum
//Enum is a kind of special class which represents the group of the constant value.
//By default enum start to initilize the variable with the 0 and then it will increase the count.


enum employee_Name_1{
        Haji,
        Raj,
        Naveen,
        Naresh
}

console.log("Haji number is : " + employee_Name_1.Haji);    //0
console.log("Raj number is : " + employee_Name_1.Raj);     //1

console.log("Naveen number is : " + employee_Name_1.Naveen);    //2
console.log("Naresh number is : " + employee_Name_1.Naresh);     //3

enum  custom_nums_1{
    Haji =1001,
    Raj=1002,
    Naveen=1003,
    Naresh=1004,
}

console.log("Haji number is : " + custom_nums_1.Haji);    //0
console.log("Raj number is : " + custom_nums_1.Raj);     //1

console.log("Naveen number is : " + custom_nums_1.Naveen);    //2
console.log("Naresh number is : " + custom_nums_1.Naresh);     //3


//