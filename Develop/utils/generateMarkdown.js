// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# <img src="https://media.giphy.com/media/3og0INs7kEnoBYDGNi/giphy.gif" width="30px"> ${data.title} <img src="https://media.giphy.com/media/3og0INs7kEnoBYDGNi/giphy.gif" width="30px">
![anything](https://img.shields.io/badge/license-${data.license}-${data.color})
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Preview Website](#preview-website)
* [How to Use](#how-to-use)
* [Known Issues](#known-issues)
* [License](#mit-license)


## Description

This site allows you to search for a specific city to find the current weather and the next five days. It also shows the uv index which is color coded depending on the uv rays strength. The site also saves your search history for quick access. 

## Installation

Clone this repo by using:

```bash
git clone https://github.com/AshlynMarie22/Weather_Dashboard.git
```

Next check to make sure there weren't any problems:

```bash
git status
```

If there are no problems you are ready to add it:

```bash
git add .
```

Now that the repo is cloned you can preview the website. Open the cloned repo folder in Visual Studio.

If you have the shortcut installed:

```bash
code .
```

Open the index.html file.

Then right click anywhere in the html file and select "Open in Default Browser":

![screenshot](https://ashlynimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-27+at+3.27.50+PM.png)


### <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/4_grande.png?v=1571606116" width="20px"/> You are now able to preview the website! <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/4_grande.png?v=1571606116" width="20px"/>


## Preview Website

Website URL: 
https://ashlynmarie22.github.io/Weather_Dashboard/ 

![screenshot2](https://ashlynimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-09-16+at+12.43.59+AM.png)


## How to Use:
1. Type in the city you would like to search for and click enter:

![firststep](https://ashlynimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-09-16+at+12.43.18+AM.png)

2. Continue to search cities for their weather forecast:
![secondstep](https://ashlynimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-09-16+at+1.13.16+AM.png)

3. To revist a city previously viewed, click the city and then click the search button again. 

## Known Issues:
When you click on the city button to revist the weather forecast you must also click the search button again. 


---

`;
}

module.exports = generateMarkdown;
