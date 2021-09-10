all: deps build

build:
	./node_modules/stylus/bin/stylus -w s/style.styl -o s/style.css

serve:
	jekyll serve --watch --config _config.yml,_config-dev.yml

deps:
	which bundle || gem install bundler
	bundle check || bundle install
	npm install

.PHONY: all build serve deps
