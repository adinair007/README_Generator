//--Returns a license badge based on which license is passed in--
//--If there is no license, returns an empty string--
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return " ";
  }
}
//--Returns the license link--
//--If there is no license, return an empty string--
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return " ";
  }
}

//--Returns the license section of README--
//--If there is no license, return an empty string--
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
    ##[License](#table-of-contents)
    This application has the following license:
    ${renderLicenseLink(license)}
    `;
  } else {
    return " ";
  }
}

//--Generates markdown for README--
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Description](#desccription)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

${renderLicenseLink(data.license)}

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Useage](#table-of-contents)
  ${data.instructions}

${renderLicenseSection(data.license)}
  
  ## [Contributing](#table-of-contents)
  ${data.contributing}

  ## [Tests](#table-of-contents)
  ${data.testing}

  ## [Questions](#table-of-contents)
  For any questions, contact me at :
    [Github: (https://github.com/${data.username})]
    [Email: ${data.email}](mailto:${data.email})  

`;
};

module.exports = generateMarkdown;
