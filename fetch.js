fs = require("fs");
const https = require("https");
process = require("process");

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

if (GITHUB_USERNAME === undefined) {
  throw "Github Username was found to be undefined. Please set an Environment variable.";
}

console.log(`fetching profile for ${GITHUB_USERNAME}`);
var data = JSON.stringify({
  query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    isHireable
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
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
});
const default_options = {
  hostname: "api.github.com",
  path: "/graphql",
  port: 443,
  method: "POST",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "Node"
  }
};

const req = https.request(default_options, res => {
  let data = "";

  console.log(`statusCode: ${res.statusCode}`);
  if (res.statusCode != 200) {
    throw "The request to Github didn't suceed. Maybe check Github Token?";
  }

  res.on("data", d => {
    data += d;
  });
  res.on("end", () => {
    fs.writeFile("./public/profile.json", data, function (err) {
      if (err) return console.log(err);
      console.log("saved file to public/profile.json");
    });
  });
});

req.on("error", error => {
  throw error;
});

req.write(data);
req.end();
