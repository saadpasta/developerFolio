.PHONY: deps serve-dev serve-prod resume

deps:
	npm install

build: deps
	npm run build

serve-dev: deps
	npm start

serve-prod:
	docker build -t developerfolio:latest . \
	docker run -t -p 3000:3000 developerfolio:latest

resume:
	pdflatex resume/resume.tex
	cp resume/{resume,Sinan_Yumurtaci_Resume}.pdf
