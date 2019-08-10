let n1: number = 10
let n2: number = 5
let n3: number = 9
let n4: number = 11

 //let media: number = (nota1 +nota2+ nota3 ) /3 //

//let fmedia =function(nota1:number,nota2:number,nota3:number):number  {
 
//return (nota1 + nota2 +nota3) /3
//}
 
let fmedia =(nota1:number,nota2:number,nota3:number) => (nota1+nota2+nota3)/3

console.log(`A media é ${fmedia(n1,n2,n3)}`)