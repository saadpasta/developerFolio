# Software Developer Folio ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developerFolio/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/saadpasta/developerFolio)](https://github.com/saadpasta/developerFolio/stargazers)  [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors) 

## A clean, beautiful and responsive portfolio template for Developers!


<p align="center"> 
  <kbd>
<img src="https://user-images.githubusercontent.com/49693820/81296489-999abf00-908f-11ea-9442-75e8f0ecf65d.gif"></img>
  </kbd>
</p>


Just change `src/portfolio.js` to get your personal portfolio . Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).


If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an [pull request](https://github.com/saadpasta/developerFolio/pulls).


## Sections 
✔️ Summary and About me\
✔️ Skills\
✔️ Work Experience\
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me\
✔️ Twitter Timeline\
✔️ Github Profile

To view a live example, **[click here](https://developerfolio.js.org/)**


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands 

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -p 3000:3000 developerfolio:latest
```


## How To Use 🔧

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
$ cd developerFolio

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

## Github Setup For Open Source Projects

Generate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) `Make sure you don't select any scope just generate a simple token`

1. Create a file called .env in the root directory of your project, check the base file

Note: Instead of creating a .env file, you can just run this command "cp env.example .env" inside the root directory 

```bash
- DeveloperFolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your github token like this.

```javascript
 // .env
  REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
```

Set `showGithubProfile` to true or false to show Contact Profile using Github, defaults to false.

Note: Open Source Projects section only show pinned itens of your Github. If you are seeing [this](https://i.imgur.com/Hj6mu1K.png), please follow this
[Instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

If the above method by any chance fails, visit the [wiki page](https://github.com/saadpasta/developerFolio/wiki/Github-Setup-For-Open-Source-Projects).

## Change and customize every section according to your need.

#### Personalize page content in `/src/portfolio.js` & modify it as per your need.

```javascript
/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Saad",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀"),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7"
};


const skillsSection = { .... }

const techStack = { .... }

const workExperience = { .... } 

const openSource = { .... } 

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Adding Twitter Time line to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.

## Deployment 📦 
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Configuring GitHub Actions
- Using the Personal Access Token you placed in the `.env` file earlier create a [repository secret](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) called `OPEN_SOURCE_TOKEN` where the value matches the token value from the `.env` file in your local workspace.
- When you are done with the configuration, we highly recommend to read through the [Github Actions Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) docs.

#### Deploying to Github Pages

This section guides you to deploy your portfolio on Github pages.

- Navigate to `package.json` and enter your domain name instead of `https://developerfolio.js.org/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/developerFolio`, add the same to the homepage section of `package.json`. 

- In short you can also add `/devloperFolio` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly. 

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).


## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)

## License 📄

This project is licensed under the GPL-3.0 License - see the [LICENSE](./LICENSE) file for details



## For the Future 
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/saadpasta/developerFolio/pulls).

- Connect with LinkedIn to get Summary, Skills, Education and Experience

- Move to Gatsby

- Enable Dark Mode

- Add More Sections

## Project Maintainers 🚧

<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt=""/><br /><sub><b>Saad Pasta</b></sub></a></td>
    <td align="center"><a href="https://github.com/kartikcho"><img src="https://avatars1.githubusercontent.com/u/48270786?v=4" width="100px;" alt=""/><br /><sub><b>Kartik Choudhary</b></sub></a></td>
    <td align="center"><a href="https://naveen.syrusdark.website"><img src="https://avatars1.githubusercontent.com/u/49693820?v=4" width="100px;" alt=""/><br /><sub><b>Naveen M K</b></sub></a></td>
  </tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://facebook.com/9inpachi"><img src="https://avatars2.githubusercontent.com/u/36920441?v=4" width="100px;" alt=""/><br /><sub><b>Fawad Ali</b></sub></a><br /><a href="#ideas-9inpachi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=9inpachi" title="Code">💻</a></td>
    <td align="center"><a href="https://dasunnavoda.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/5556085?v=4" width="100px;" alt=""/><br /><sub><b>Dasun Navoda</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IamDZN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://brian.teeman.net"><img src="https://avatars3.githubusercontent.com/u/1296369?v=4" width="100px;" alt=""/><br /><sub><b>Brian Teeman</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=brianteeman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rajkumaar.co.in"><img src="https://avatars1.githubusercontent.com/u/37476886?v=4" width="100px;" alt=""/><br /><sub><b>Rajkumar S</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=rajkumaar23" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/viveksharmaui"><img src="https://avatars1.githubusercontent.com/u/28563357?v=4" width="100px;" alt=""/><br /><sub><b>Slim Coder</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Documentation">📖</a></td>
    <td align="center"><a href="http://msayyaf.com"><img src="https://avatars3.githubusercontent.com/u/22149734?v=4" width="100px;" alt=""/><br /><sub><b>Mohamed Sayyaf</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=msayyaf1" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?v=4" width="100px;" alt=""/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=ashutosh1919" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.upwork.com/freelancers/~01d10c23d4ffe3c658"><img src="https://avatars0.githubusercontent.com/u/8683960?v=4" width="100px;" alt=""/><br /><sub><b>Rizwan Jamal ⚡️</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Rizwanjamal" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.muhammadhasham.com"><img src="https://avatars0.githubusercontent.com/u/17927649?v=4" width="100px;" alt=""/><br /><sub><b>Muhammad Hasham</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=MohammadHasham" title="Code">💻</a></td>
    <td align="center"><a href="https://sourcerer.io/joshiujjawal22"><img src="https://avatars3.githubusercontent.com/u/44023234?v=4" width="100px;" alt=""/><br /><sub><b>UJJAWAL JOSHI</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=joshiujjawal22" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/palak-sethi"><img src="https://avatars2.githubusercontent.com/u/51605219?v=4" width="100px;" alt=""/><br /><sub><b>Palak Sethi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=palak-sethi" title="Code">💻</a></td>
    <td align="center"><a href="https://viniciusbds.github.io/"><img src="https://avatars3.githubusercontent.com/u/34755896?v=4" width="100px;" alt=""/><br /><sub><b>Vinicius Barbosa</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viniciusbds" title="Code">💻</a></td>
    <td align="center"><a href="https://bharatkammakatla.github.io"><img src="https://avatars1.githubusercontent.com/u/28840761?v=4" width="100px;" alt=""/><br /><sub><b>Bharat Kammakatla</b></sub></a><br /><a href="#design-BharatKammakatla" title="Design">🎨</a></td>
    <td align="center"><a href="http://bit.ly/garimasingh"><img src="https://avatars2.githubusercontent.com/u/44302373?v=4" width="100px;" alt=""/><br /><sub><b>Garima Singh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=garimasingh128" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/HenryHengZJ"><img src="https://avatars2.githubusercontent.com/u/26460777?v=4" width="100px;" alt=""/><br /><sub><b>Henry Heng</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=HenryHengZJ" title="Code">💻</a> <a href="#design-HenryHengZJ" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/PulkitBanta"><img src="https://avatars2.githubusercontent.com/u/43134750?v=4" width="100px;" alt=""/><br /><sub><b>Pulkit Banta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=PulkitBanta" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3APulkitBanta" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/AkshayCHD"><img src="https://avatars1.githubusercontent.com/u/25455546?v=4" width="100px;" alt=""/><br /><sub><b>Akshay Kumar</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AkshayCHD" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3AAkshayCHD" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/AmnaEjaz"><img src="https://avatars3.githubusercontent.com/u/14257959?v=4" width="100px;" alt=""/><br /><sub><b>Amna Ejaz</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AmnaEjaz" title="Code">💻</a> <a href="#ideas-AmnaEjaz" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/parasnagpal"><img src="https://avatars0.githubusercontent.com/u/39419139?v=4" width="100px;" alt=""/><br /><sub><b>Paras Nagpal</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=parasnagpal" title="Code">💻</a></td>
    <td align="center"><a href="https://sourcerer.io/sparsh-99"><img src="https://avatars0.githubusercontent.com/u/56729873?v=4" width="100px;" alt=""/><br /><sub><b>Sparsh Garg</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=sparsh-99" title="Code">💻</a></td>
    <td align="center"><a href="http://aashutosh.dev"><img src="https://avatars2.githubusercontent.com/u/21199234?v=4" width="100px;" alt=""/><br /><sub><b>Aashutosh Rathi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=aashutoshrathi" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://abhishekashyap.studio/"><img src="https://avatars3.githubusercontent.com/u/29458374?v=4" width="100px;" alt=""/><br /><sub><b>Abhishek Kashyap</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Aabhishekashyap" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/lcsvcn"><img src="https://avatars1.githubusercontent.com/u/6011385?v=4" width="100px;" alt=""/><br /><sub><b>Lucas V C Nicolau</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=lcsvcn" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bradleycherrin.com"><img src="https://avatars0.githubusercontent.com/u/5648785?v=4" width="100px;" alt=""/><br /><sub><b>Bradley C. Herrin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=bradleycherrin" title="Documentation">📖</a> <a href="#ideas-bradleycherrin" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://www.zekinahlecaros.com"><img src="https://avatars0.githubusercontent.com/u/43392346?v=4" width="100px;" alt=""/><br /><sub><b>Zekinah Lecaros</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=zekinah" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

