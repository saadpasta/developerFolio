# Hi, I'm Sinan, and [this is my portfolio](https://sinany.me) and
[resume](https://sinany.me/Sinan_Yumurtaci_Resume.pdf)

## Development Instructions

### Resume

`make resume` compiles my resume to using `pdflatex`

Edit the source at [resume.tex](resume/resume.tex)

### Website

`make dev` runs a development server of my portfolio

`make build` compiles the site to static assets for production.

Netlify automatically deploys HEAD on the `sinan` branch, which I configured as
the default branch. The `master` branch follows upstream, even though it
receives few updates.
