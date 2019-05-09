// CODE here for your Lambda Classes


// Base Class
class Person {
    constructor(about) {
        this.name = about.name;
        this.age = about.age;
        this.location = about.location;
        this.gender = about.gender
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// Child Class
 class Instructor extends Person {
    constructor(instructorAbout) {
        super(Instructorabout);
        this.specialty = instructorAbout.specialty;
        this.favLanguage = instructorAbout.specialty;
        this.catchPhrase = instructorAbout.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
}
