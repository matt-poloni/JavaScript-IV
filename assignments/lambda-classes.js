// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
};

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
  changeGrade(student) {
    let change = (Math.random() * 2) - 1;
    change > 0 ?
      change = Math.ceil((100-student.grade)*change) :
      change = Math.ceil(student.grade*change);
    student.grade += change;
    return change;
  }
};

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = Math.ceil(Math.random() * 100);
  }
  listsSubjects() {
    this.favSubjects.forEach(function(subject) {console.log(subject)});
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
};

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
};

// Object Creation

// Generic People
const jill = new Person({
  name: 'Jill',
  location: 'East Hillside',
  age: 20,
  gender: 'female',
});
const jack = new Person({
  name: 'Jack',
  location: 'South Hillside',
  age: 19,
  gender: 'male',
});
console.log('===Generic People===');
jill.speak();
console.log(jill.gender);
jack.speak();
console.log(jack.age);

// Instructors
const josh = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 30,
  gender: 'male',
  specialty: 'Front-End',
  favLanguage: 'Javascript',
  catchPhrase: `I can't type today`,
});
const jen = new Instructor({
  name: 'Jen',
  location: 'Colorado',
  age: 42,
  gender: 'female',
  specialty: 'User Experience',
  favLanguage: 'Python',
  catchPhrase: 'You can do this',
});


// Students
const matt = new Student ({
  name: 'Matt',
  location: 'Florida',
  age: 31,
  gender: 'male',
  previousBackground: 'Self-Taught',
  className: 'Web 18',
  favSubjects: [
    'Responsive Design',
    'Preprocessors',
    'Javascript'
  ],
});
const martha = new Student ({
  name: 'Martha',
  location: 'Georgia',
  age: 26,
  gender: 'female',
  previousBackground: 'Junior Front-End Developer',
  className: 'UX 3',
  favSubjects: [
    'Design Theory',
    'Prototyping',
    'Quantitative User Research'
  ],
});

// Project Managers
const nick = new ProjectManager ({
  name: 'Nick',
  age: 23,
  location: 'Unknown',
  gender: 'male',
  specialty: 'Codewars',
  favLanguage: 'Javascript',
  catchPhrase: 'Awesome',
  gradClassName: 'Web 18',
  favInstructor: josh,
});
const nora = new ProjectManager ({
  name: 'Nora',
  age: 32,
  location: 'New Zealand',
  gender: 'female',
  specialty: 'Quantitative User Research',
  favLanguage: 'Julia',
  catchPhrase: `Don't make the user think`,
  gradClassName: 'UX 3',
  favInstructor: jen,
});

console.log('===Generic People===');
jill.speak();
console.log(jill.gender);
jack.speak();
console.log(jack.age);

console.log('===Instructors===');
josh.demo('pseudoclassical prototypal inheritance');
console.log(josh.catchPhrase);
jen.grade(matt,'Javascript Fundamentals');
console.log(jen.specialty);
console.log(jen.favLanguage);

console.log('===Students===');
matt.listsSubjects();
matt.PRAssignment('Javascript IV');
console.log(matt.previousBackground);
martha.sprintChallenge(martha.favSubjects[0]);
console.log(martha.className);

console.log('===Project Managers===');
nick.debugsCode(matt,'classical inheritance');
console.log(nick.gradClassName);
console.log(nick.favInstructor.name);
nora.standUp('ux3_nora');

console.log('===Stretch 1 & 2===');
console.log(matt.grade);
console.log(nick.changeGrade(matt));
console.log(matt.grade);