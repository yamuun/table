clean:
	rm -rf ./lib/

build-es:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:es

build-umd:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

prepublish:
	$(MAKE) clean

	$(MAKE) build-umd

	$(MAKE) build-es

	cp ./flow-typed/index.js.flow ./lib/index.js.flow

	cp ./styles/ ./lib/styles/
