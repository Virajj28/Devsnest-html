
//1. Write a JavaScript program to list the properties of a JavaScript object.
    var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
    console.log(Object.getOwnPropertyNames(student))

// 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
    var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
    console.log(student)
    delete student.rollno;
    console.log(student)

//3. Write a JavaScript program to get the length of a JavaScript object
    var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
    console.log(Object.keys(student).length)

//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

//6. Write a JavaScript program to sort an array of JavaScript objects.