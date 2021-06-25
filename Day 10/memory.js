
let doublearr=["A", "B", "C", "D", "E", "F","A", "B", "C", "D", "E", "F"];

random =(item)=>{
    return Math.floor(Math.random()*item.length)
}
    
let set=document.querySelector('.main');
for(let i=0;i<12;i++){
    const newDiv = document.createElement(`div`);
    newDiv.className= 'child';
    newDiv.style.margin="5px";
    newDiv.innerHTML=doublearr[random(doublearr)];
    newDiv.style.backgroundColor= "black";
    set.append(newDiv);
}

let first;
let second;
let count=0;
let correct=0;
let chill=document.querySelectorAll('.child');
chill.forEach(element => {
    element.addEventListener('click',()=>{
        element.classList.add("unhide");
        count++;
        moves.innerHTML=count;
        if(count%2!=0){
            first=element;
        }else{
            if(first.innerHTML!=element.innerHTML){
                first.classList.remove("unhide");
                element.classList.remove("unhide");
                console.log("NO");
            }
            else{
                correct++;
                console.log("correct");
            }
        }
        correct.innerHTML=correct;
    })
});
