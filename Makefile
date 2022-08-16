.PHONY: deps serve-dev serve-prod
deps:
	npm install

build: deps
	npm build

serve-dev: deps
	npm start

serve-prod:
	docker build -t developerfolio:latest . \
	docker run -t -p 3000:3000 developerfolio:latest
