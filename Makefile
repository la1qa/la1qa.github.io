.PHONY: help install dev build deploy clean commit-deploy

help:
	@echo "Available commands:"
	@echo "  make install              - Install dependencies"
	@echo "  make dev                  - Start development server"
	@echo "  make build                - Build for production"
	@echo "  make deploy               - Deploy to GitHub Pages"
	@echo "  make commit-deploy MSG=\"...\" - Git add, commit, push, and deploy"
	@echo "  make clean                - Remove build artifacts"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

deploy:
	npm run deploy

commit-deploy:
	git add .
	git commit -m "$(MSG)"
	git push
	npm run deploy

clean:
	rm -rf dist node_modules/.cache
