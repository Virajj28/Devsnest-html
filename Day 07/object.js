
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
    var library = [ 
            { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
            { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
            { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
        ]; 
    library.forEach(item => console.log(item));

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.      
    var dim = {
        r : 2,
        h : 10,
        vol ()  {
            var pi = 3.142;
            return (pi*this.r*this.r*this.h).toFixed(4);
        }
    };
    console.log(dim.vol());

//6. Write a JavaScript program to sort an array of JavaScript objects.
var library = [ 
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }
]; 

    console.log(
        library.sort (function (a,b)
        {
            return a.libraryID - b.libraryID;
        })
    )