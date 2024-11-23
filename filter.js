
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

const odlEnough = people.filter(person => person.age >= 21);
console.log(odlEnough);
const test = people.filter(person => console.log(person));

const paul = people.filter(person => person.name === 'Paul');
console.log(paul);


// Complex Filtering
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 5 },
            { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 0 },
            { name: 'html', yrsExperience: 4 },
            { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 1 },
            { name: 'css', yrsExperience: 5 },
        ]
    },
];

const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0;
});

console.log(candidates.map(n => n.name));

const candidatesNames = candidates.map(n => n.name);
console.log(candidatesNames);