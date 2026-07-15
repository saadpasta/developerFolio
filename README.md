# Software Developer Folio ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developerFolio/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/saadpasta/developerFolio)](https://github.com/saadpasta/developerFolio/stargazers) [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## A clean, beautiful and responsive portfolio template for Developers!


> ## ⚠️ This project is no longer actively maintained
>
> developerFolio has helped thousands of developers ship their first portfolio, and grew far beyond what I ever expected — thank you to everyone who used it, starred it, and contributed. 🙏
>
> I can no longer keep this repo current — reviewing issues, merging PRs, and updating dependencies. Rather than let it slowly break, I want to point you to something I genuinely like and would build my own portfolio with today:
>
> ### 👉 [**Folify — folify.me**](https://folify.me)
>
> **Folify is a no-code portfolio builder.** Same goal as developerFolio — a clean, responsive developer portfolio — but with no cloning, no editing `portfolio.js`, no GitHub tokens, and no deploy step. Sign up, drag your blocks into place, and you're live in minutes.
>
> - **New to this?** → Start on [Folify](https://folify.me). It's the easiest path to a live portfolio.
> - **Want the code?** → developerFolio still works. See [**Self-hosting (still works)**](#-self-hosting-still-works) below.

---

## ✨ Why Folify

Everything developerFolio gives you — without touching code:

| | developerFolio (this repo) | [Folify](https://folify.me) |
|---|---|---|
| Setup | Clone, edit config, deploy | Sign up and start building |
| Editing | Edit `src/portfolio.js` in code | Drag-and-drop block builder |
| GitHub / Medium data | Manual tokens + `.env` config | Built in, no tokens |
| Hosting | You deploy & maintain it | Hosted for you |
| Your URL | Wherever you deploy | `yourname.folify.me` free, or your own domain |
| Custom domain | Manual DNS + `CNAME` file | Add a DNS record, click **Verify**, automatic HTTPS |
| Updates & fixes | On you | Maintained for you |
| Analytics | Add your own | Built in, privacy-friendly (no cookies) |
| Cost | Free (self-hosted) | Free |

- **Drag-and-drop block builder** — projects, about, skills, experience, blogs, links, a contact form, and more.
- **Free plan** — your portfolio lives at `yourname.folify.me`.
- **Custom domain** — point `yourname.com` at your portfolio with automatic HTTPS.
- **Developer-ready templates** with light/dark themes.
- **Built-in analytics** — visitor counts with no tracking scripts.
- **SEO tools** so your portfolio actually gets found.

### 🚀 Get started with Folify

1. Go to **[folify.me](https://folify.me)** and sign up (free — no credit card).
2. Pick a template and drag in your blocks.
3. Publish. You're live at `yourname.folify.me`.

Docs & help: **[help.folify.me](https://help.folify.me)** · Questions: **support@folify.me**

---

## 🛠 Self-hosting (still works)

This repo is **archived but fully functional**. If you'd rather run developerFolio yourself, everything below still applies — just note that **issues and pull requests are no longer being actively reviewed**, and you'll need to keep dependencies up to date on your own. Feel free to fork and adapt it.

<details>
<summary><b>Click to expand the original setup & customization guide</b></summary>

<br/>

Just change `src/portfolio.js` to get your personal portfolio. Customize the theme with your own color scheme in `src/_globalColor.scss`. Use it as-is or personalize it as much as you want.

### Portfolio Sections

✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Open Source Projects Connected with GitHub\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me\
✔️ Twitter Timeline\
✔️ GitHub Profile

### Getting Started

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed, or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

#### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```

### How To Use

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
cd developerFolio

# Setup default environment variables
# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

### Linking Portfolio to GitHub

Generate a classic GitHub personal access token following these [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) (make sure you don't select any scope, just generate a simple token). If you use [GitHub Actions](#configuring-github-actions-recommended) to deploy, you can skip this section.

1. Create a `.env` file in the root directory of your project (if not done already in [How To Use](#how-to-use)).

> **Note:** Configuring environment variables before deploying is highly recommended, as some components depend on API data.

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

2. Inside the `.env` file, add key `REACT_APP_GITHUB_TOKEN` and assign your GitHub token, and add your username as `GITHUB_USERNAME`:

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
USE_GITHUB_DATA = "true"
```

Set `showGithubProfile` to true or false to show the Contact Profile using GitHub (defaults to false).

> **Warning:** Treat your tokens like passwords and keep them secret. Use tokens as environment variables instead of hardcoding them.

> **Note:** The Open Source Projects section only shows pinned items of your GitHub. Follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile) to pin items. If it still doesn't work, visit the [wiki page](https://github.com/saadpasta/developerFolio/wiki/Github-Setup-For-Open-Source-Projects).

### Linking blogs section to Medium

Optionally, link the blogs section to your Medium account:

```env
// .env
MEDIUM_USERNAME = "YOUR MEDIUM USERNAME"
```

For GitHub Actions, change the `MEDIUM_USERNAME` environment variable in `.github/workflows/deploy.yml`. Set `displayMediumBlogs` to true or false in `portfolio.js` to display fetched Medium blogs (defaults to true).

### Change and customize every section according to your need

Personalize page content in `/src/portfolio.js` & modify it as needed. You'll also need to modify `index.html` to change the title and metadata for accurate SEO.

```javascript
/* Change this file to get your Personal Portfolio */

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

**Resume upload** — upload a pdf to `src/containers/greeting/resume` and rename it to `resume.pdf`.

**Using Emojis** — use the `emoji()` function and pass the text as an argument to keep emojis compatible across browsers and platforms.

**Customize Lottie Animations** — download a Lottie in json format from [LottieFiles](https://lottiefiles.com/). In `src/assets/lottie`, replace the file with the same name. To change options, edit `defaultOptions` in `src/components/displayLottie/DisplayLottie.js` (see [lottie-react docs](https://www.npmjs.com/package/lottie-react)).

**Adding Twitter Timeline** — insert your Twitter username in `portfolio.js` (don't use the `@` symbol):

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```

### Deployment

When you're done, host your website online. We recommend the [Deploying on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Configuring GitHub Actions (Recommended)

Enable GitHub Actions for your repository. The Profile and Repository information from GitHub is created at deploy time, so the site needs to be redeployed to update it. A configurable [CRON Job](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) redeploys your site weekly. You can also trigger it manually with `workflow_dispatch` ([guide](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch)). See the [Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) docs.

#### Deploying to GitHub Pages

- In `package.json`, replace `https://developerfolio.js.org/` in the `homepage` variable with your domain. For `https://<your-username>.github.io/developerFolio`, add that to `homepage`.
- Optionally configure a custom domain by adding a `CNAME` file to the `public/` folder.
- Follow the official CRA [GitHub Pages guide](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Netlify

Host directly with Netlify by linking your repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)

See [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

### Technologies Used

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

### Illustrations

- [UnDraw](https://undraw.co/illustrations)
- [Lottie by Oblikweare](https://lottiefiles.com/oblikweare)

</details>

---

## 🙏 Thank you

To every developer who used developerFolio for their portfolio, every contributor who sent a PR, and everyone who starred the project — thank you. This community made it what it was.

If developerFolio ever helped you land an interview or a job, that always meant the world. I hope [Folify](https://folify.me) does the same for the next wave of developers. 💙

— **Saad Pasta**

## Project Maintainers

<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt=""/><br /><sub><b>Saad Pasta</b></sub></a></td>
    <td align="center"><a href="https://github.com/kartikcho"><img src="https://avatars1.githubusercontent.com/u/48270786?v=4" width="100px;" alt=""/><br /><sub><b>Kartik Choudhary</b></sub></a></td>
    <td align="center"><a href="https://github.com/naveen521kk"><img src="https://avatars1.githubusercontent.com/u/49693820?v=4" width="100px;" alt=""/><br /><sub><b>Naveen M K</b></sub></a></td>
    <td align="center"><a href="http://www.muhammadhasham.com"><img src="https://avatars0.githubusercontent.com/u/17927649?v=4" width="100px;" alt=""/><br /><sub><b>Muhammad Hasham</b></sub></a></td>
  </tr>
</table>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://facebook.com/9inpachi"><img src="https://avatars2.githubusercontent.com/u/36920441?v=4?s=100" width="100px;" alt="Fawad Ali"/><br /><sub><b>Fawad Ali</b></sub></a><br /><a href="#ideas-9inpachi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=9inpachi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dasunnavoda.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/5556085?v=4?s=100" width="100px;" alt="Dasun Navoda"/><br /><sub><b>Dasun Navoda</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IamDZN" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://brian.teeman.net"><img src="https://avatars3.githubusercontent.com/u/1296369?v=4?s=100" width="100px;" alt="Brian Teeman"/><br /><sub><b>Brian Teeman</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=brianteeman" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rajkumaar.co.in"><img src="https://avatars1.githubusercontent.com/u/37476886?v=4?s=100" width="100px;" alt="Rajkumar S"/><br /><sub><b>Rajkumar S</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=rajkumaar23" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/viveksharmaui"><img src="https://avatars1.githubusercontent.com/u/28563357?v=4?s=100" width="100px;" alt="Slim Coder"/><br /><sub><b>Slim Coder</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=viveksharmaui" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://msayyaf.com"><img src="https://avatars3.githubusercontent.com/u/22149734?v=4?s=100" width="100px;" alt="Mohamed Sayyaf"/><br /><sub><b>Mohamed Sayyaf</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=msayyaf1" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?v=4?s=100" width="100px;" alt="Ashutosh Hathidara"/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=ashutosh1919" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.upwork.com/freelancers/~01d10c23d4ffe3c658"><img src="https://avatars0.githubusercontent.com/u/8683960?v=4?s=100" width="100px;" alt="Rizwan Jamal ⚡️"/><br /><sub><b>Rizwan Jamal ⚡️</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Rizwanjamal" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.muhammadhasham.com"><img src="https://avatars0.githubusercontent.com/u/17927649?v=4?s=100" width="100px;" alt="Muhammad Hasham"/><br /><sub><b>Muhammad Hasham</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=MohammadHasham" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sourcerer.io/joshiujjawal22"><img src="https://avatars3.githubusercontent.com/u/44023234?v=4?s=100" width="100px;" alt="UJJAWAL JOSHI"/><br /><sub><b>UJJAWAL JOSHI</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=joshiujjawal22" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/palak-sethi"><img src="https://avatars2.githubusercontent.com/u/51605219?v=4?s=100" width="100px;" alt="Palak Sethi"/><br /><sub><b>Palak Sethi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=palak-sethi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://viniciusbds.github.io/"><img src="https://avatars3.githubusercontent.com/u/34755896?v=4?s=100" width="100px;" alt="Vinicius Barbosa"/><br /><sub><b>Vinicius Barbosa</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=viniciusbds" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bharatkammakatla.github.io"><img src="https://avatars1.githubusercontent.com/u/28840761?v=4?s=100" width="100px;" alt="Bharat Kammakatla"/><br /><sub><b>Bharat Kammakatla</b></sub></a><br /><a href="#design-BharatKammakatla" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bit.ly/garimasingh"><img src="https://avatars2.githubusercontent.com/u/44302373?v=4?s=100" width="100px;" alt="Garima Singh"/><br /><sub><b>Garima Singh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=garimasingh128" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HenryHengZJ"><img src="https://avatars2.githubusercontent.com/u/26460777?v=4?s=100" width="100px;" alt="Henry Heng"/><br /><sub><b>Henry Heng</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=HenryHengZJ" title="Code">💻</a> <a href="#design-HenryHengZJ" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PulkitBanta"><img src="https://avatars2.githubusercontent.com/u/43134750?v=4?s=100" width="100px;" alt="Pulkit Banta"/><br /><sub><b>Pulkit Banta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=PulkitBanta" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3APulkitBanta" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AkshayCHD"><img src="https://avatars1.githubusercontent.com/u/25455546?v=4?s=100" width="100px;" alt="Akshay Kumar"/><br /><sub><b>Akshay Kumar</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AkshayCHD" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3AAkshayCHD" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AmnaEjaz"><img src="https://avatars3.githubusercontent.com/u/14257959?v=4?s=100" width="100px;" alt="Amna Ejaz"/><br /><sub><b>Amna Ejaz</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AmnaEjaz" title="Code">💻</a> <a href="#ideas-AmnaEjaz" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/parasnagpal"><img src="https://avatars0.githubusercontent.com/u/39419139?v=4?s=100" width="100px;" alt="Paras Nagpal"/><br /><sub><b>Paras Nagpal</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=parasnagpal" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sourcerer.io/sparsh-99"><img src="https://avatars0.githubusercontent.com/u/56729873?v=4?s=100" width="100px;" alt="Sparsh Garg"/><br /><sub><b>Sparsh Garg</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=sparsh-99" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://aashutosh.dev"><img src="https://avatars2.githubusercontent.com/u/21199234?v=4?s=100" width="100px;" alt="Aashutosh Rathi"/><br /><sub><b>Aashutosh Rathi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=aashutoshrathi" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://abhishekashyap.studio/"><img src="https://avatars3.githubusercontent.com/u/29458374?v=4?s=100" width="100px;" alt="Abhishek Kashyap"/><br /><sub><b>Abhishek Kashyap</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Aabhishekashyap" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lcsvcn"><img src="https://avatars1.githubusercontent.com/u/6011385?v=4?s=100" width="100px;" alt="Lucas V C Nicolau"/><br /><sub><b>Lucas V C Nicolau</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=lcsvcn" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bradleycherrin.com"><img src="https://avatars0.githubusercontent.com/u/5648785?v=4?s=100" width="100px;" alt="Bradley C. Herrin"/><br /><sub><b>Bradley C. Herrin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=bradleycherrin" title="Documentation">📖</a> <a href="#ideas-bradleycherrin" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.zekinahlecaros.com"><img src="https://avatars0.githubusercontent.com/u/43392346?v=4?s=100" width="100px;" alt="Zekinah Lecaros"/><br /><sub><b>Zekinah Lecaros</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=zekinah" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vandana1499"><img src="https://avatars2.githubusercontent.com/u/29394600?v=4?s=100" width="100px;" alt="unbeat"/><br /><sub><b>unbeat</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=vandana1499" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lARSHADl"><img src="https://avatars3.githubusercontent.com/u/45604332?v=4?s=100" width="100px;" alt="Arshad Ahmed"/><br /><sub><b>Arshad Ahmed</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=lARSHADl" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://xiaohuiliu.me"><img src="https://avatars1.githubusercontent.com/u/33507446?v=4?s=100" width="100px;" alt="Xiaohui Liu"/><br /><sub><b>Xiaohui Liu</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Ergouzii" title="Documentation">📖</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=Ergouzii" title="Code">💻</a> <a href="#design-Ergouzii" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://seungyeon-lee.github.io/"><img src="https://avatars1.githubusercontent.com/u/26589915?v=4?s=100" width="100px;" alt="Seungyeon-Lee"/><br /><sub><b>Seungyeon-Lee</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Seungyeon-Lee" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NajamShehzad"><img src="https://avatars2.githubusercontent.com/u/37629243?v=4?s=100" width="100px;" alt="Najam Shehzad "/><br /><sub><b>Najam Shehzad </b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=NajamShehzad" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.exspiravit.ga/"><img src="https://avatars1.githubusercontent.com/u/22334680?v=4?s=100" width="100px;" alt="Randy Jesus Real Srsen"/><br /><sub><b>Randy Jesus Real Srsen</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Exspiravit" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tamojitdas.netlify.app"><img src="https://avatars0.githubusercontent.com/u/40804626?v=4?s=100" width="100px;" alt="Tamojit Das"/><br /><sub><b>Tamojit Das</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=tamojit-123" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://warengonzaga.com"><img src="https://avatars1.githubusercontent.com/u/15052701?v=4?s=100" width="100px;" alt="Waren Gonzaga"/><br /><sub><b>Waren Gonzaga</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=WarenGonzaga" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.benjaminbourgeois.com"><img src="https://avatars3.githubusercontent.com/u/20949060?v=4?s=100" width="100px;" alt="Benjamin Bourgeois"/><br /><sub><b>Benjamin Bourgeois</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=BourgeoisBenjamin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/keshavjain235"><img src="https://avatars2.githubusercontent.com/u/52530690?v=4?s=100" width="100px;" alt="Keshav Jain"/><br /><sub><b>Keshav Jain</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=keshavjain235" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://hanzla.ga"><img src="https://avatars.githubusercontent.com/u/59178380?v=4?s=100" width="100px;" alt="Hanzla"/><br /><sub><b>Hanzla</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=1hanzla100" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yogeshhrathod"><img src="https://avatars.githubusercontent.com/u/46518134?v=4?s=100" width="100px;" alt="Yogesh Rathod"/><br /><sub><b>Yogesh Rathod</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=yogeshhrathod" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AlKun25"><img src="https://avatars.githubusercontent.com/u/53429438?v=4?s=100" width="100px;" alt="Kunal Mundada"/><br /><sub><b>Kunal Mundada</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=AlKun25" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jayhawk24"><img src="https://avatars.githubusercontent.com/u/38766415?v=4?s=100" width="100px;" alt="Anubhav Gupta"/><br /><sub><b>Anubhav Gupta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=jayhawk24" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://vatsaldavevdwpblog.wordpress.com/"><img src="https://avatars.githubusercontent.com/u/42956495?v=4?s=100" width="100px;" alt="Vatsal Dave"/><br /><sub><b>Vatsal Dave</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=vatsaldaveVD" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.elvisciuffetelli.com"><img src="https://avatars.githubusercontent.com/u/35818757?v=4?s=100" width="100px;" alt="Elvis Ciuffetelli"/><br /><sub><b>Elvis Ciuffetelli</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=elvisciuffetelli" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ScottJellen.com"><img src="https://avatars.githubusercontent.com/u/51421669?v=4?s=100" width="100px;" alt="Scott Jellen"/><br /><sub><b>Scott Jellen</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=SJellen" title="Code">💻</a> <a href="#design-SJellen" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/karthik-mohan-/"><img src="https://avatars.githubusercontent.com/u/25052382?v=4?s=100" width="100px;" alt="Karthik Mohan"/><br /><sub><b>Karthik Mohan</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Akarthikmohan" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mhowell11"><img src="https://avatars.githubusercontent.com/u/62813469?v=4?s=100" width="100px;" alt="mhowell11"/><br /><sub><b>mhowell11</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=mhowell11" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gajanandh"><img src="https://avatars.githubusercontent.com/u/80502737?v=4?s=100" width="100px;" alt="gajanandh"/><br /><sub><b>gajanandh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Agajanandh" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JooHyukKim"><img src="https://avatars.githubusercontent.com/u/61615301?v=4?s=100" width="100px;" alt="JooHyukKim"/><br /><sub><b>JooHyukKim</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=JooHyukKim" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://redheadphone.github.io/"><img src="https://avatars.githubusercontent.com/u/55500003?v=4?s=100" width="100px;" alt="Red Headphone"/><br /><sub><b>Red Headphone</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=RedHeadphone" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/issues?q=author%3ARedHeadphone" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sunitroy2703.github.io"><img src="https://avatars.githubusercontent.com/u/67560900?v=4?s=100" width="100px;" alt="Sunit Roy"/><br /><sub><b>Sunit Roy</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3ASunitRoy2703" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nayabatir1"><img src="https://avatars.githubusercontent.com/u/91016903?v=4?s=100" width="100px;" alt="Atir Nayab"/><br /><sub><b>Atir Nayab</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Anayabatir1" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://thatdevsherry.pk"><img src="https://avatars.githubusercontent.com/u/40890226?v=4?s=100" width="100px;" alt="Shehriyar Qureshi"/><br /><sub><b>Shehriyar Qureshi</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=thatdevsherry" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Rispectech"><img src="https://avatars.githubusercontent.com/u/90450963?v=4?s=100" width="100px;" alt="respectech"/><br /><sub><b>respectech</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Rispectech" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://braydentw.com"><img src="https://avatars.githubusercontent.com/u/47185402?v=4?s=100" width="100px;" alt="Brayden"/><br /><sub><b>Brayden</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3ABraydenTW" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/CanciuCostin"><img src="https://avatars.githubusercontent.com/u/27332434?v=4?s=100" width="100px;" alt="Canciu Costin"/><br /><sub><b>Canciu Costin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=CanciuCostin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SpectralGT"><img src="https://avatars.githubusercontent.com/u/78777556?v=4?s=100" width="100px;" alt="Atharv Singh"/><br /><sub><b>Atharv Singh</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=SpectralGT" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://allishaan.co"><img src="https://avatars.githubusercontent.com/u/59707330?v=4?s=100" width="100px;" alt="Ishan Khandelwal"/><br /><sub><b>Ishan Khandelwal</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Ishan-001" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://slyapustin.com"><img src="https://avatars.githubusercontent.com/u/370774?v=4?s=100" width="100px;" alt="Sergey Lyapustin"/><br /><sub><b>Sergey Lyapustin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=slyapustin" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.cam1pozas.xyz/"><img src="https://avatars.githubusercontent.com/u/89259499?v=4?s=100" width="100px;" alt="Camila Pozas"/><br /><sub><b>Camila Pozas</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=camipozas" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://saiteja13427.github.io"><img src="https://avatars.githubusercontent.com/u/40917760?v=4?s=100" width="100px;" alt="Sai Teja"/><br /><sub><b>Sai Teja</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/issues?q=author%3Asaiteja13427" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Vinitvh"><img src="https://avatars.githubusercontent.com/u/42197888?v=4?s=100" width="100px;" alt="Vinit Hemadri "/><br /><sub><b>Vinit Hemadri </b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Vinitvh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Njong392"><img src="https://avatars.githubusercontent.com/u/81039882?v=4?s=100" width="100px;" alt="Njong Emy"/><br /><sub><b>Njong Emy</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Njong392" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tamal.vercel.app/"><img src="https://avatars.githubusercontent.com/u/72851613?v=4?s=100" width="100px;" alt="Tamal Das "/><br /><sub><b>Tamal Das </b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IAmTamal" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://dunsin.vercel.app"><img src="https://avatars.githubusercontent.com/u/78784850?v=4?s=100" width="100px;" alt="Dunsin"/><br /><sub><b>Dunsin</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=Dun-sin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/muneebahmedayub"><img src="https://avatars.githubusercontent.com/u/65030135?v=4?s=100" width="100px;" alt="Muneeb Ahmed"/><br /><sub><b>Muneeb Ahmed</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=muneebahmedayub" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/qais-attarwala/"><img src="https://avatars.githubusercontent.com/u/52388168?v=4?s=100" width="100px;" alt="Qais Attarwala"/><br /><sub><b>Qais Attarwala</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=KazAttarwala" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->