// function to generate markdown for README
const bashStart = "```bash";
const bashEnd = "````";
function generateMarkdown(data) {
  return `# <img src="https://media.giphy.com/media/3og0INs7kEnoBYDGNi/giphy.gif" width="30px"> ${data.title} <img src="https://media.giphy.com/media/3og0INs7kEnoBYDGNi/giphy.gif" width="30px">
![anything](https://img.shields.io/badge/license-${data.license}-${data.color})

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Preview Website](#preview-website)
* [How to Use](#how-to-use)
* [Contributing](#contributing)
* [License](#mit-license)


## Description

${data.description}

## Installation

Clone this repo by using:

${bashStart}
git clone ${data.installation}
${bashEnd}

Next check to make sure there weren't any problems:
${bashStart}
git status
${bashEnd}

If there are no problems you are ready to add it:

${bashStart}
git add .
${bashEnd}

Now that the repo is cloned you can preview the website. Open the cloned repo folder in Visual Studio.

If you have the shortcut installed:

${bashStart}
code .
${bashEnd}

Open the index.html file.

Then right click anywhere in the html file and select "Open in Default Browser":

![screenshot](https://ashlynimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-27+at+3.27.50+PM.png)


### <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/4_grande.png?v=1571606116" width="20px"/> You are now able to preview the website! <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/4_grande.png?v=1571606116" width="20px"/>


## Preview Website

Website URL: 
https://ashlynmarie22.github.io/Weather_Dashboard/ 

![screenshot2](https://ashlynimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-09-16+at+12.43.59+AM.png)


## How to Use:
${data.usage}

## Contributing:
${data.contributing}

## Testing:
${data.tests}

## Questions?:
If you have questions regarding ${data.title}, contact me at: ${data.questions}

---

`;
}

module.exports = generateMarkdown;
