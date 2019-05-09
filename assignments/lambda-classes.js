// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    gradeAssignment(student){
        student.grade += (Math.random() * (50 - (-50)) + (-50));
        return `${student.name}'s grade is ${student.grade}.`;
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}.`;  
    }
    graduate(instructor){
        if(this.grade >= 70){
            return `${this.name} has graduated.`;
        }
        else{
            return instructor.gradeAssignment(this);
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClass = attributes.gradClass;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'D-Rock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const wilma = new Student({
    name: 'Wilma',
    location: 'Couchrock',
    previousBackground: 'waitress',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 50
});

const pebbles = new ProjectManager({
    name: 'Pebbles',
    location: 'Bedstone',
    gradClass: 'CS211',
    favInstructor: 'Frankenstein'
});

const bambam = new ProjectManager({
    name: 'BamBam',
    location: 'Toadrock',
    gradClass: 'CS191',
    favInstructor: 'Gazoo'
});


const betty = new Student({
    name: 'Betty',
    location: 'D-Rock',
    previousBackground: 'waitress',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 60
});

const barney = new Student({
    name: 'Barney',
    location: 'D-Rock',
    previousBackground: 'Disco Dancer',
    className: 'CS139',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 50
});

const gazoo = new Student({
    name: 'Gazoo',
    location: 'Mars',
    previousBackground: 'Disc Jockey',
    className: 'Pluto - 3.14',
    favSubjects: ['ReduxL', 'CSS', 'JavaScript'],
    grade: 550
});








console.log(fred);
console.log(wilma);
console.log(pebbles);
console.log(fred.speak());
console.log(betty.speak());
console.log(barney.speak());
console.log(fred.demo("Redux"));
console.log(bambam.grade(wilma, "JavaScript"));
console.log(betty.listSubjects());
console.log(gazoo.PRAssignment("Python"));
console.log(wilma.sprintChallenge("Elm"));
console.log(bambam.demo("HTML"));
console.log(pebbles.grade(wilma, "CSS"));
console.log(pebbles.standUp("CS132"));
console.log(bambam.debugsCode(wilma, "JavaScript"));
console.log(fred.gradeAssignment(gazoo));
console.log(wilma.graduate(fred));