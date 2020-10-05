function generateREADME(data) {
    if (data.license = "Apache License 2.0") {
        data.license = '![Apache License Badge](https://img.shields.io/badge/license-Apache-blue)'
    } else if (data.license = "GNU GPLv3") {
        data.license = '![GNU GPLv3 License Badge](https://img.shields.io/badge/license-GPL%20(%3E%3D%202)-blue)'
    } else if (data.license = "MIT") {
        data.license = '![MIT License Badge](https://img.shields.io/badge/license-MIT-green)'
    } else if (data.license = "ISC License") {
        data.license = '![ISC License Badge](https://img.shields.io/badge/license-MIT-%23373737)'
    } else {
        data.license = "This project doesn't have any licensing information."
    }
    return `
# ${data.projectTitle}

## Description 
${data.description}

### License Info
${data.license}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [FAQ](#faq)


## Installation<a name="installation"></a>

${data.install}


## Usage<a name="usage"></a>

${data.usage}

## Contributing<a name="contributing"></a>

${data.contributors}

## Tests<a name="tests"></a>

${data.testing}

## Frequently Asked Questions<a name="faq"></a>

*Q: How do I contact the author of this repo?*
**Their name is ${data.name} and you can see more of their projects on [Github](https://github.com/${data.github}). Their username is ${data.github} and you can email them [here](mailto:${data.email})**

*Q: Do I need to contact their author before using this repo?*
**As long as you follow their usage guidelines and licensing requirements, you will be fine. If you have any questions, however, the author is available to contact!**
`;
}

module.exports = generateREADME;