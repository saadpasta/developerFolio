
Software Developer Folio ⚡️￼

￼

￼

A clean, beautiful and responsive portfolio template for Developers!
￼

Just change src/portfolio.js to get your personal portfolio . Feel free to use it as-is or customize it as much as you want.

But if you want to contribute and make this much better for other developer have a look at Issues .

If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an pull request .

Sections

✔️ Summary and About me
✔️ Skills
✔️ Work Experience
✔️ Open Source Projects Connected with Github
✔️ Big Projects
✔️ Achievements And Certifications
✔️ Blogs
✔️ Talks
✔️ Podcast
✔️ Contact me
✔️ Twitter Timeline
✔️ Github Profile

To view a live example, click here

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need Git and Node.js (which comes with npm ) installed on your computer or use Docker .

node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher



Docker Commands

1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -p 3000:3000 developerfolio:latest



How To Use

From your command line, clone and run developerFolio:

# Clone this repository
$ git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
$ cd developerFolio

# Install dependencies
$ npm install

#Start's development server
$ npm start



Github Setup For Open Source Projects

Generate a Github personal access token using these Instructions  Make sure you don't select any scope just generate a simple token 
1. Create a file called .env in the root directory of your project, check the base file

Note: Instead of creating a .env file, you can just run this command "cp env.example .env" inside the root directory

- DeveloperFolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json



1. Inside the .env file, add key REACT_APP_GITHUB_TOKEN and assign your github token like this.


 // .env
  REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"



Set showGithubProfile to true or false to show Contact Profile using Github, defaults to false.

Note: Open Source Projects section only show pinned items of your Github. If you are seeing it as show below

￼

Please follow these Instructions .

If the above method by any chance fails, visit the wiki page .

Change and customize every section according to your need.

Personalize page content in /src/portfolio.js & modify it as per your need.

/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Saad",
  subTitle: emoji("A passionate Full Stack Software Developer "),
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




Using Emojis

For adding emoji into the texts in Portfolio.js , use the emoji() function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

Adding Twitter Time line to your Page

Insert your Twitter username in portfolio.js to show your recent activity on your page.

const twitterDetails = {
  userName : "Your Twitter Username"
};



Note: Don't use @ symbol when adding username.

Deployment

When you are done with the setup, you should host your website online. We highly recommend to read through the Deploying on Github Pages docs for React.

Configuring GitHub Actions
• Using the Personal Access Token you placed in the .env file earlier create a repository secret called OPEN_SOURCE_TOKEN where the value matches the token value from the .env file in your local workspace.
• When you are done with the configuration, we highly recommend to read through the Github Actions Configuring a workflow docs.

Deploying to Github Pages

This section guides you to deploy your portfolio on Github pages.
• 
Navigate to package.json and enter your domain name instead of https://developerfolio.js.org/ in homepage variable. For example, if you want your site to be https://<your-username>.github.io/developerFolio , add the same to the homepage section of package.json .

• 
In short you can also add /devloperFolio to package.json as both are exactly same. Upon doing so, you tell create-react-app to add the path assets accordingly.

• 
Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a CNAME file to the public/ folder.

• 
Follow through the guide to setup GitHub pages from the official CRA docs here .

Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

￼

For more information, read hosting on Netlify .

Technologies used ️
• React
• graphql
• apollo-boost
• react-twitter-embed
• react-easy-emoji
• react-headroom
• color-thief

Illustrations
• UnDraw

License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details

For the Future

If you can help us with these. Please don't hesitate to open a pull request .
• 
Connect with LinkedIn to get Summary, Skills, Education and Experience

• 
Move to Gatsby

• 
Enable Dark Mode

• 
Add More Sections

Project Maintainers
￼￼

Contributors ✨

Thanks goes to these wonderful people ( emoji key ):
￼￼￼￼￼

$
