const nameElem = document.getElementById("name") as HTMLInputElement;
const profilePicElem = document.getElementById("profilePicture") as HTMLInputElement;
const emailElem = document.getElementById("email-Input") as HTMLInputElement;
const phoneNumber = document.getElementById("phone-Number") as HTMLInputElement;
const buttonElem = document.getElementById("printBtn") as HTMLButtonElement;
const addressElem = document.getElementById("address") as HTMLInputElement;
const fatherName = document.getElementById("father-Name") as HTMLInputElement;
const CNICElem = document.getElementById("CNIC") as HTMLInputElement;
const dobElem = document.getElementById("DOB") as HTMLInputElement;
const casteElem = document.getElementById("caste") as HTMLInputElement;
const domicileElem = document.getElementById("domicile-Distt") as HTMLInputElement
const religionElem = document.getElementById("religion") as HTMLInputElement
const countryElem = document.getElementById("country") as HTMLInputElement
const eduElem = document.getElementById("education") as HTMLInputElement;
const expELem = document.getElementById("experience") as HTMLInputElement;
const computerELem = document.getElementById("computer-Skills") as HTMLInputElement
const communicationElem = document.getElementById("communication-Skills") as HTMLInputElement
const languagesElem = document.getElementById("languages") as HTMLInputElement

const printName = document.getElementById("print-Name") as HTMLOutputElement;
const printProfilePic = document.getElementById("profilePicture") as HTMLOutputElement;
const printEmail = document.getElementById("print-Email") as HTMLOutputElement;
const printPhone = document.getElementById("print-Phone") as HTMLOutputElement;
const printaddress = document.getElementById("print-Address") as HTMLOutputElement;
const printFN = document.getElementById("print-FN") as HTMLOutputElement;
const printCNIC = document.getElementById("print-CNIC") as HTMLOutputElement;
const printDOB = document.getElementById("print-DOB") as HTMLOutputElement;
const printCaste = document.getElementById("print-Caste") as HTMLOutputElement;
const printDomicile = document.getElementById("print-Distt") as HTMLOutputElement;
const printReligion = document.getElementById("print-Religion") as HTMLOutputElement;
const printCountry = document.getElementById("print-Country") as HTMLOutputElement;
const printEdu = document.getElementById("print-Edu") as HTMLOutputElement;
const printExp = document.getElementById("print-Exp") as HTMLOutputElement;
const printComputerSkills = document.getElementById("print-Computer-Skills") as HTMLOutputElement;
const printCommunicationSkills = document.getElementById("print-Communication-Skills") as HTMLOutputElement;
const printLanguages = document.getElementById("print-Languages") as HTMLOutputElement;

buttonElem.addEventListener("click", (): void => {
    
    printName.textContent = nameElem.value;
    printEmail.textContent = emailElem.value;
    printPhone.textContent = phoneNumber.value;
    printaddress.textContent = addressElem.value;
    printFN.textContent = fatherName.value;
    printCNIC.textContent = CNICElem.value;
    printDOB.textContent = dobElem.value.toString();
    printCaste.textContent = casteElem.value;
    printDomicile.textContent = domicileElem.value;
    printReligion.textContent = religionElem.value;
    printCountry.textContent = countryElem.value;
    printEdu.textContent = eduElem.value;
    printExp.textContent = expELem.value;
    printComputerSkills.textContent = computerELem.value;
    printCommunicationSkills.textContent = communicationElem.value;
    printLanguages.textContent = languagesElem.value;
    
})
