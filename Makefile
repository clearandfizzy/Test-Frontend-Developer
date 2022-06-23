BOX_REACTJS=test-frontend

# HELP
# This will output the help for each task
## thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
#.PHONY: help
#
help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
#
#.DEFAULT_GOAL := help
#
## DOCKER TASKS
bootstrap:
	make build
	docker-compose exec ${BOX_REACTJS} bash -c "cd /app/my-app && yarn run global install firebase-tools"
#	docker-compose exec ${BOX_REACTJS} bash -c "yarn create react-app my-app"

start: ## Build the environment.
	docker-compose up -d

start-app: ## start the react server
	make start
#	docker-compose exec ${BOX_REACTJS} bash -c "cd /app/my-app && yarn global add firebase-tools"
	docker-compose exec ${BOX_REACTJS} bash -c "cd /app/my-app && yarn run start"

build: ## Build the environment.
	make start
	docker-compose exec ${BOX_REACTJS} bash -c "cd /app/my-app && yarn run build:local"
	@echo "Please wait..." && echo "✔ Ready"

install: ## Build the environment.
	@echo "Please wait..." && echo "✔ Ready"

destroy: ## Destroy and clean the environment.
	make stop
	docker-compose down --rmi local --volumes --remove-orphans

destroy-hard: ## Destroy and clean the environment.
	make stop
	docker-compose down --rmi all --volumes --remove-orphans

stop: ## Stops/pause the environment.
	docker-compose stop
	
	@echo "Please wait..." && echo "✔ Completed"

refresh: ## Refresh the environment without loosing images nor volumes.
	docker-compose down
	docker-compose up -d --build
	@echo "Please wait..." && echo "✔ Ready"

permissions:
	@echo "Please wait..." && echo "✔ Ready"

test:
	@make start
	@docker-compose exec ${BOX_REACTJS} bash -c "\
			cd /app/my-app && \
			yarn run eslint && \
			yarn run test"
login:
	docker-compose exec ${BOX_REACTJS} bash

login-reactjs:
	docker-compose exec ${BOX_REACTJS} bash

login-node:
	docker-compose exec ${BOX_REACTJS} bash


