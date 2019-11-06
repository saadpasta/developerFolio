# Software Developer Folio ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developer-portfolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/saadpasta/developer-portfolio)  [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## A clean, beautiful and responsive portfolio template for Developers!


<p align="center"> 
  <kbd>
<img src="src/assests/images/portfolio.gif"></img>
  </kbd>
</p>


Feel free to use it as-is or customize it as much as you want. 

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).


If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an [pull request](https://github.com/saadpasta/developerFolio/pulls).


## Sections 
✔️ Summary and About me\
✔️ Skills \
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Contact me

To view a live example, **[click here](https://saadpasta.github.io/)**


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

---

## How To Use 🔧

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/username/developerFolio

# Go into the repository
$ cd developerFolio

# Install dependencies
$ npm install

```
## Github Setup For Open Source Projects

### Genrate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

Copy the token and open your developer console to convert your token to base64 so github do not revert your token when you push your token to git

```bash
# Open your developer console paste the token inside btoa
$ btoa("YOUR GITHUB TOKEN")
```

Copy your converted token and paste it in `/src/containers/project/Project.js`

```javascript
  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob("YOUR CONVERTED GITHUB TOKEN")}`
          }
        });
      }
    });
```

Change username to your github username to get your projects 

```javascript
    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "your github username") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })

```

## Change and customize every section according to your need. 

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 


## Deployment 📦 
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY



## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details




## For the Future 
If you can help us with these. Please don't hesitate to open an [pull request](https://github.com/saadpasta/developerFolio/pulls).

- Connect with LinkedIn to get Summary, Skills, Education and Experience

- Move to Gatasby

- Add More Sections and Move to Multi Page

- Move all the details to config so any one can change the details from there so they don't have to find the file and change it there

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt="Saad Pasta"/><br /><sub><b>Saad Pasta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Documentation">📖</a> <a href="#design-saadpasta" title="Design">🎨</a> <a href="#maintenance-saadpasta" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

