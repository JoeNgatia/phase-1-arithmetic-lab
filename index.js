const multiply=(num1, num2) => {
    let result = num1 * num2 +6
    return result

}

let num1=8;
let num2=7;


console.log(multiply(num1,num2))

const random=() =>{
    let randomNum=Math.floor(Math.random()*100) +1
    return randomNum
}

console.log(random())

const mod=(num3,num4) =>{
    return num3/num4;
}

let num3=16
let num4=4

console.log(mod(num3,num4))

const max = (x ,y1 ,w ,t, y2 ,u) => {

    let Num=Math.max(x ,y1, w, t, y2, u);
    return Num
}

let x=10
let y1=20
let w=5
let t=15
let y2=15
let u=19

console.log(max(x,y1,w,t,y2,u))