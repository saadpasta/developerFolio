.PHONY: deps serve-dev serve-prod resume

deps:
	npm install

build: deps
	npm run build

dev: deps
	npm start

prod:
	docker build -t developerfolio:latest . \
	docker run -t -p 3000:3000 developerfolio:latest

resume:
	pdflatex resume/resume.tex
