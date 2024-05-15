/**
 * Condition Statement
 * 1. if
 * 2. if ...else
 * 3. switch
 */

/** Looop
 * 1. for
 * 2. for ... of
 * 3. while
 * 
 */
const age = 19;
const state = 'Rivers';
if(age >= 18){
console.log('1. Congratulations!!!! You are qualified to open an account with us')
}

if(age >= 18 && state == 'Ondo'){
    console.log('2. Congratulations!!!! You are qualified to open an account with us')
}

if(age >= 18 || state == 'Lagos'){
console.log('3. Congratulations!!!! You are qualified to open an account with us')
} else {
    console.log('Sorry!!!! You are not qualified to open an account with us')
}

// Switch
switch (state) {
    case 'Lagos':
      {
          console.log('Welcome Lagosians')

      }
        break;
        case 'Ondo':
            console.log('Welcome Ondo Guy');
            break;
        case 'Rivers':
            console.log('Welcome Port Harcourt guy');
        break;

    default:
        break;
}

// LOOPs
const students = [
    {name:'John Doe',age:18},  
    {name:'John Peters}',age:19},  
    {name:'Mark Tim',age:15},  
    {name:'Tom Dick',age:25}, 
    {name:'Jennefer Philip',age:23}, 
    {name:'Victory Nelson',age:16}, 
    {name:'Mattew Doe',age:30}, 
    {name:'Olivia Enos',age:31},
    {name:'Mary Jack',age:19}, 
    {name:'Timothy Max',age:20},
    {name:'Moritz Linsay',age:15},
]
// 1. For loop
let total = 0;
let studentsAbove20 = [];

// for(let i = 0; i < students.length;i++){
//     console.log('student @'+i, ': ', students[i])
//     total += students[i].age;

//     if(students[i].age >20    ){
//         studentsAbove20.push(students[i])
//     }
// }

console.log('average age: ',total/students.length)
console.log('Students older than 20: ',studentsAbove20)
for(let i=1;i<=100;i++){
    console.log(i, 'Is Even: ', i% 2 == 0)
}


// for .. of
for(const student of students){
    console.log('student: ',student)
    total += student.age;

        if(student.age >20    ){
            studentsAbove20.push(student)
        }
}



console.log('average age: ',total/students.length)
console.log('Students older than 20: ',studentsAbove20)

// while
let i=0;
while (i<students.length) {
    console.log('student in while loop: ',students[i]);
    i++;
}