# Software Developer Folio ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developer-portfolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/saadpasta/developer-portfolio)  [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/86c52691ca3c46e4bf887d704c196824)](https://www.codacy.com/manual/saadpasta/developerFolio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=saadpasta/developerFolio&amp;utm_campaign=Badge_Grade)

## A clean, beautiful and responsive portfolio template for Developers!


<p align="center"> 
  <kbd>
<img src="src/assests/images/portfolio.gif"></img>
  </kbd>
</p>


Just change `src/portfolio.js` to get your personal portfolio . Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).


If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an [pull request](https://github.com/saadpasta/developerFolio/pulls).


## Sections 
✔️ Summary and About me\
✔️ Skills \
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me

To view a live example, **[click here](https://saadpasta.github.io/)**


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

```
## Github Setup For Open Source Projects

### Generate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) `Make sure you don't select any scope just generate a simple token`

Copy the token and open Chrome Developer Console to convert your token to base64 so github do not revert your token when you push your token to git

```bash
# Open your Chrome Developer Console console paste the token inside btoa
$ btoa("YOUR GITHUB TOKEN")
```

Copy your converted token and paste it in `/src/portfolio.js`

```javascript
  const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */
  
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};
```


## Change and customize every section according to your need.

### To Change website content go to `/src/portfolio.js` & modify it as per your need.

#### Using Emojis

For adding emoji 😃 into the texts in Portfolio.js, use the `emoji()` function and pass the text you need as an argument. This would help in keeping Emojis compatible across different browsers and platforms.

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

const openSource = { .... } 

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

#### Adding Twitter Timeline to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)

## Deployment 📦 
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY. 

You could also deploy it directly with Netlify by linking your own repo.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)



## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details




## For the Future 
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/saadpasta/developerFolio/pulls).

- Connect with LinkedIn to get Summary, Skills, Education and Experience

- Move to Gatsby

- Enable Dark Mode

- Add More Sections and Move to Multi Page


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt=""/><br /><sub><b>Saad Pasta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Documentation">📖</a> <a href="#design-saadpasta" title="Design">🎨</a> <a href="#maintenance-saadpasta" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://facebook.com/9inpachi"><img src="https://avatars2.githubusercontent.com/u/36920441?v=4" width="100px;" alt=""/><br /><sub><b>Fawad Ali</b></sub></a><br /><a href="#ideas-9inpachi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=9inpachi" title="Code">💻</a></td>
    <td align="center"><a href="https://dasunnavoda.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/5556085?v=4" width="100px;" alt=""/><br /><sub><b>Dasun Navoda</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IamDZN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/kartik918"><img src="https://avatars1.githubusercontent.com/u/48270786?v=4" width="100px;" alt=""/><br /><sub><b>Kartik Choudhary</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=kartik918" title="Code">💻</a> <a href="#design-kartik918" title="Design">🎨</a> <a href="#ideas-kartik918" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://brian.teeman.net"><img src="https://avatars3.githubusercontent.com/u/1296369?v=4" width="100px;" alt=""/><br /><sub><b>Brian Teeman</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=brianteeman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rajkumaar.co.in"><img src="https://avatars1.githubusercontent.com/u/37476886?v=4" width="100px;" alt=""/><br /><sub><b>Rajkumar S</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=rajkumaar23" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/viveksharmaui"><img src="https://avatars1.githubusercontent.com/u/28563357?v=4" width="100px;" alt=""/><br /><sub><b>Slim Coder</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://naveen.syrusdark.website"><img src="https://avatars1.githubusercontent.com/u/49693820?v=4" width="100px;" alt=""/><br /><sub><b>Naveen M K</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=naveen521kk" title="Code">💻</a></td>
    <td align="center"><a href="http://msayyaf.com"><img src="https://avatars3.githubusercontent.com/u/22149734?v=4" width="100px;" alt=""/><br /><sub><b>Mohamed Sayyaf</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=msayyaf1" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?v=4" width="100px;" alt=""/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=ashutosh1919" title="Code">💻</a></td>
    <td align="center"><a href="https://www.upwork.com/freelancers/~01d10c23d4ffe3c658"><img src="https://avatars0.githubusercontent.com/u/8683960?v=4" width="100px;" alt=""/><br /><sub><b>Rizwan Jamal ⚡️</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Rizwanjamal" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

