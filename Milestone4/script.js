var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var profilePictureElement = document.getElementById('profile-Picture');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var fatherNameElement = document.getElementById('father-Name');
    var cnicElement = document.getElementById('CNIC');
    var dobElement = document.getElementById('DOB');
    var casteElement = document.getElementById('caste');
    var domicileElement = document.getElementById('domicile-Distt');
    var religionElement = document.getElementById('religion');
    var countryElement = document.getElementById('country');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var computerSkillsElement = document.getElementById('computer-Skills');
    var communicationSkillsElement = document.getElementById('communication-Skills');
    var languagesElement = document.getElementById('languages');
    if (nameElement && profilePictureElement && emailElement && phoneElement && addressElement && fatherNameElement && cnicElement && dobElement && casteElement && domicileElement
        && religionElement && countryElement && educationElement && experienceElement && computerSkillsElement && communicationSkillsElement && languagesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var fatherName = fatherNameElement.value;
        var cnic = cnicElement.value;
        var dob = dobElement.value;
        var caste = casteElement.value;
        var domicile = domicileElement.value;
        var religion = religionElement.value;
        var country = countryElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var computerSkills = computerSkillsElement.value;
        var communication = communicationSkillsElement.value;
        var languages = languagesElement.value;
        //profile Picture
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // resume output
        var resumeOutput = "\n            <div id=\"content-box\">\n            <div id=\"personal-info-box\">\n                <div id=\"name-info\">\n                    <h2>Name:<br> ".concat(name_1, "</h2>\n                    ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" id=\"profilePicture\">") : '', "\n                </div>\n                \n                <br><hr><br>\n                <h1>Contact Info</h1><br>\n                <div id=\"contact-info\">\n                    <p>Email: ").concat(email, "</p><br>\n                    <p>Mobile: ").concat(phone, "</p><br>\n                    <p>Address: ").concat(address, " </p>\n                </div>\n                <br><hr><br>\n                <div>\n                    <h1>Personal Info</h1><br>\n                    <table>\n                        <tr>\n                            <td>Father Name:</td>\n                            <td>").concat(fatherName, "</td>\n                        </tr>\n                        <tr>\n                            <td>CNIC:</td>\n                            <td>").concat(cnic, "</td>\n                        </tr>\n                        <tr>\n                            <td>DOB:</td>\n                            <td>").concat(dob, "</td>\n                        </tr>\n                        <tr>\n                            <td>Caste:</td>\n                            <td>").concat(caste, "</td>\n                        </tr>\n                        \n                        <tr>\n                            <td>Domicile Disttrict:</td>\n                            <td>").concat(domicile, "</td>\n                        </tr>\n                        <tr>\n                            <td>Religon:</td>\n                            <td>").concat(religion, "</td>\n                        </tr>\n                        <tr>\n                            <td>Nationality:</td>\n                            <td>").concat(country, "</td>\n                        </tr>\n                    </table>\n                </div>\n                \n            </div>\n            <div id=\"education-info-box\">\n                <br><br>\n                <hr>\n                <h1>Education</h1>\n                <hr><br>\n                <div>\n                    <p>").concat(education, "</p>\n                </div>\n                <br><br>\n                <hr>\n                <h1>Experience</h1>\n                <hr><br>\n                <div>\n                    <p>").concat(experience, "</p>\n                </div>\n                <br><br>\n                <hr>\n                <h1>Skills</h1>\n                <hr><br>\n                <div>\n                    <h3>Computer Skills:</h3>\n                    <p>").concat(computerSkills, "</p>\n                </div>\n                <br><br>\n                <div>\n                    <h3>Communication:</h3>\n                    <p>").concat(communication, "</p>\n                </div>\n                <br><br>\n                <div>\n                    <h3>Languages:</h3>\n                    <p>").concat(languages, "</p>\n                </div>\n                <br><br>\n                <hr>\n                <h1>Career Objectives</h1>\n                <hr>\n                <br>\n                <div>\n                    <p>Seeking a challenging opportunity where I will be able to utilize my strong organizational skills, \n                        educational background, \n                        and ability to work well with people, \n                        which will allow me to grow personally and professionally. \n                        I am self-motivated and able to work both independently.\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('One or more output elements are missing');
    }
});
