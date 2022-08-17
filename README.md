# Hi, I'm Sinan

*and this is my portfolio: [sinany.me](sinany.me)*

I forked this project from [developerFolio](https://github.com/saadpasta/developerFolio) and heavily customized it for my own use.

## Development Instructions

`make serve-dev` runs a development server

`make build` compiles the site to static assets for production.

Change `src/portfolio.js` to change the text on the website. The color scheme
can be found in `src/_globalColor.scss`

Netlify automatically deploys HEAD on the `sinan` branch, which I configured as
the default branch. The `master` branch follows upstream, even though it
receives few updates.

### Using Emojis

To add emoji 😃 into strings in `src/portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This helps keep emojis compatible across different browsers and platforms.

# Parts of previous README that I haven't deleted yet

#### Customize Lottie Animations

You can choose a Lottie and download it in json format from from sites like [this](https://lottiefiles.com/). In `src/assets/lottie`, replace the Lottie json file you want to alter with the same file name. If you want to change the Lottie options, go to `src/components/displayLottie/DisplayLottie.js` and change the `defaultOptions` object, you can refer [react-lottie docs](https://www.npmjs.com/package/react-lottie) for more info on the `defaultOptions` object.

## Technologies Used

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)
