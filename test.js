

//class
class Student {
    constructor(name, age){
        this.name = name,
        this.age = age
    } 
}

const Student1 = new Student('isma','27')
const Student2 = new Student('sakina','21')


// exrending the class

class Collage extends Student{
    constructor(name,age,registerNumber ){
        super(name, age);
        this.registerNumber = registerNumber
    }
}


const collage1 = new Collage('ismaila','27','14pusb7047');

console.log(collage1)






