class Students {
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor () {
        this.gender = "female";
    }
    getNationality(){
        return this.nationality;
    }
}

class UnderGraduates extends Students implements Iundergrad {
    batch: number;
    GPA: number;

    constructor (batch:number){
        super();
        this.batch = batch;
    }
}

interface Iundergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;
}

var undergrad = new UnderGraduates(5);
undergrad.nationality = "Greek";
console.log(undergrad.getNationality());