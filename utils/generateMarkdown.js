// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = ""

    switch (license) {
    case 'MIT':
        badge='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n'
    break;
    case 'ISC':
        badge='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n\n'
    break;
    case 'GNU General Public License v3.0':
        badge='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n';
    break;
    case 'Apache 2.0 License':
        badge='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n';
    break;      
    default:
        badge="";
    break;
            }    
    return badge;
  
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license==='None') {
        return ""
    }
    else {
        return `
- [License](#license)
        ` 
    }
  
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license==='None') {
        return ""
    }
    else {
        return `## License
${license}` 
    }
  
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}
    
## Description
${data.description}
            
## Table of Contents
            
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)
            
## Installation
${data.installation}
            
            
## Usage
${data.usage}
            
## Contributions
${data.contributions}
            
## Tests
${data.tests}
            
${renderLicenseSection(data.license)}
            
            
## Questions?
Find me on GitHub: <a href="https://github.com/${data.gitUser}" target="_blank">${data.gitUser}</a>
            
OR
            
Email me at: <a href="mailto:${data.email}" target="_blank">${data.email}</a>
  `;
  }
  
  module.exports = generateMarkdown;