document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const profilePictureElement = document.getElementById('profile-Picture') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const fatherNameElement = document.getElementById('father-Name') as HTMLInputElement;
    const cnicElement = document.getElementById('CNIC') as HTMLInputElement;
    const dobElement = document.getElementById('DOB') as HTMLInputElement;
    const casteElement = document.getElementById('caste') as HTMLInputElement;
    const domicileElement = document.getElementById('domicile-Distt') as HTMLInputElement;
    const religionElement = document.getElementById('religion') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const computerSkillsElement = document.getElementById('computer-Skills') as HTMLInputElement;
    const communicationSkillsElement = document.getElementById('communication-Skills') as HTMLInputElement;
    const languagesElement = document.getElementById('languages') as HTMLInputElement;

    if(nameElement && profilePictureElement && emailElement && phoneElement && addressElement && fatherNameElement && cnicElement && dobElement && casteElement && domicileElement
        && religionElement && countryElement && educationElement && experienceElement && computerSkillsElement && communicationSkillsElement && languagesElement
    ){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const fatherName = fatherNameElement.value;
        const cnic = cnicElement.value;
        const dob = dobElement.value;
        const caste = casteElement.value;
        const domicile = domicileElement.value;
        const religion = religionElement.value;
        const country = countryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const computerSkills = computerSkillsElement.value;
        const communication = communicationSkillsElement.value;
        const languages = languagesElement.value;

        //profile Picture
        const profilePictureFile = profilePictureElement.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // resume output
        const resumeOutput = 
        `
            <div id="content-box">
            <div id="personal-info-box">
                <div id="name-info">
                    <h2>Name:<br> ${name}</h2>
                    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" id="profilePicture">` : ''}
                </div>
                
                <br><hr><br>
                <h1>Contact Info</h1><br>
                <div id="contact-info">
                    <p>Email: ${email}</p><br>
                    <p>Mobile: ${phone}</p><br>
                    <p>Address: ${address} </p>
                </div>
                <br><hr><br>
                <div>
                    <h1>Personal Info</h1><br>
                    <table>
                        <tr>
                            <td>Father Name:</td>
                            <td>${fatherName}</td>
                        </tr>
                        <tr>
                            <td>CNIC:</td>
                            <td>${cnic}</td>
                        </tr>
                        <tr>
                            <td>DOB:</td>
                            <td>${dob}</td>
                        </tr>
                        <tr>
                            <td>Caste:</td>
                            <td>${caste}</td>
                        </tr>
                        
                        <tr>
                            <td>Domicile Disttrict:</td>
                            <td>${domicile}</td>
                        </tr>
                        <tr>
                            <td>Religon:</td>
                            <td>${religion}</td>
                        </tr>
                        <tr>
                            <td>Nationality:</td>
                            <td>${country}</td>
                        </tr>
                    </table>
                </div>
                
            </div>
            <div id="education-info-box">
                <br><br>
                <hr>
                <h1>Education</h1>
                <hr><br>
                <div>
                    <p>${education}</p>
                </div>
                <br><br>
                <hr>
                <h1>Experience</h1>
                <hr><br>
                <div>
                    <p>${experience}</p>
                </div>
                <br><br>
                <hr>
                <h1>Skills</h1>
                <hr><br>
                <div>
                    <h3>Computer Skills:</h3>
                    <p>${computerSkills}</p>
                </div>
                <br><br>
                <div>
                    <h3>Communication:</h3>
                    <p>${communication}</p>
                </div>
                <br><br>
                <div>
                    <h3>Languages:</h3>
                    <p>${languages}</p>
                </div>
                <br><br>
                <hr>
                <h1>Career Objectives</h1>
                <hr>
                <br>
                <div>
                    <p>Seeking a challenging opportunity where I will be able to utilize my strong organizational skills, 
                        educational background, 
                        and ability to work well with people, 
                        which will allow me to grow personally and professionally. 
                        I am self-motivated and able to work both independently.
                    </p>
                </div>
            </div>
        </div>

        `;
        const resumeOutputElement = document.getElementById('resumeOutput')
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput;
        }else{
            console.error('The resume output elements are missing');
        }
    }else{
        console.error('One or more output elements are missing');
    }

})