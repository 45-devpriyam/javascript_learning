//Stack(Primitive) and heap(Non Primitive)
//stack example
let firstperson = "Aman";
let secondperson = firstperson;
console.log(secondperson);

secondperson = "Rahul";
console.log(firstperson);
console.log(secondperson)

//Heap example (It works on reference model)

let userone = {
    name: "Aman"
}
let usertwo = userone
console.log(usertwo);

usertwo.name = "Rahul"
console.log(userone);
console.log(usertwo);





