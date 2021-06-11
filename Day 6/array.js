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
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));

    function first(i,n){
        if(i==null)
            return 0;
        if(n==null)
            return i[0];
        if(n<0)
            return [];
        return i.slice(0,n)
    }
       

//4
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join(","))
    console.log(myColor.join(" "))

//5
    var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


