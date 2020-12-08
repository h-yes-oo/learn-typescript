class PersonClass {
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const coco = new PersonClass('coco',12);
console.log(coco.age);
//console.log(coco.name);