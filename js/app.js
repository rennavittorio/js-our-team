//prototype object
const person = {

    firstName: 'name',
    lastName: 'surname',
    jobRole: 'job',
    profileImg: './img',

}

//MLS 0
let companyEmployees = [

    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        jobRole: 'Founder & CEO',
        profileImg: './assets/wayne-barnett-founder-ceo.jpg',
    
    },

    {
        firstName: 'Angela',
        lastName: 'Caroll',
        jobRole: 'Chief Editor',
        profileImg: './assets/angela-caroll-chief-editor.jpg',
    
    },

    {
        firstName: 'Walter',
        lastName: 'Gordon',
        jobRole: 'Office Manager',
        profileImg: './assets/walter-gordon-office-manager.jpg',
    
    },

    {
        firstName: 'Angela',
        lastName: 'Lopez',
        jobRole: 'Social Media Manager',
        profileImg: './assets/angela-lopez-social-media-manager.jpg',
    
    },

    {
        firstName: 'Scott',
        lastName: 'Estrada',
        jobRole: 'Developer',
        profileImg: './assets/scott-estrada-developer.jpg',
    
    },

    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        jobRole: 'Graphic Designer',
        profileImg: './assets/barbara-ramos-graphic-designer.jpg',
    
    },

]

console.log('company team:', companyEmployees);

//MLS 1
//stamp in console dati per ogni membro del team
// for (let i = 0; i < companyEmployees.length; i++){

//     for (let key in companyEmployees[i]){
//         console.log(companyEmployees[i][key]);
//     }


// }

//MLS 2
//stamp in DOM dati per ogni membro del team
let stampTestEl = document.querySelector('.stamp-test');

for (let i = 0; i < companyEmployees.length; i++){

    let currentEmployee = companyEmployees[i];
    let fullName = currentEmployee.firstName + ' ' + currentEmployee.lastName;
    let jobRole = currentEmployee.jobRole
    let profileImg = currentEmployee.profileImg;

    let employeeCard = `
    <div> current employee name is ${fullName}, is the ${jobRole}, and has got this funny face: ${profileImg} </div>
    `;

    stampTestEl.innerHTML += employeeCard;

}