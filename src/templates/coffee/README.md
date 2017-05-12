Your new [testx](http://testx.io/testx) project
====================

## Prerequisites
Install [protractor](http://www.protractortest.org/) (may need to run as root/administrator):

	npm install -g protractor

Update the local chrome and firefox selenium drivers using webdriver-manager (comes with protractor):

	webdriver-manager update

## Install dependencies
Install all dependencies. In the project directory do:

	npm install

## Run
From within the project directory:

	protractor conf.coffee

or

	npm run test-local

### Run with [Docker](https://www.docker.com/)
This method is recommended when executing your tests as part of a continuous integration pipeline. When using Docker you do not need protractor installed on your machine (or the CI server), but of course you need Docker.

  	npm test

## Next steps
Check the [testx documentation](http://testx.io/testx) documentation to find out where to go from here.
