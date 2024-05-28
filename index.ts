//tuples type

let trafficLight : string[] = ["green" , "yellow" , "red"]; //ok

let tuples : [string, boolean, number] = ["sabahat", false, 20] //ok

let tuples1 : [string, boolean, number, undefined, null] = ["Hello", undefined] //error

//because type 'undefined' is not assinabe to type boolean

tuples.push(404) //ok