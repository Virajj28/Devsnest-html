//1
    console.log(is_array('w3resource'));
    console.log(is_array([1, 2, 4, 0]));

    function is_array(input){
        return Array.isArray(input);
    }

//2
    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));

    function array_Clone(input){
        return input.slice(1,3)
    }

//3


//4
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join(","))
    console.log(myColor.join(" "))

//5

