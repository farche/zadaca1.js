let MassMark =182;
let heightMark =1.73;
let MassJohn =92;
let heightJohn = 1.76;



let BMIMark=0;
let BMIMJohn =0;

BMIMark=MassMark /  (heightMark + heightMark)
BMIMark=MassJohn /  (heightJohn + heightJohn)

console.log(parseInt(BMIMark));
console.log(parseInt(BMIMJohn));

document.write(parseInt(BMIMark));

let MarkHigherBMI=false;
if (BMIMark> BMIMJohn) {
    MarkHigherBMI=true;
}

if (MarkHigherBMI==true){
    console.log ("Mark has a higer BMI than John.")
} else {
    console.log("John has a higher BMI than Mark")
}

    

