# FinTech Management Tool

Financial Management Tool.

## Getting Started

This is a MEAN stack application where TypeScript is present on the stack as a whole.

On this version it enhances the back-end architecture, once it takes OOP architecture along side TypeScript and ES6 and 7 features, this project is taking the great advantage of working with TypeScript on the back-end with Nodejs.  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Nodejs, NPM, TypeScript, GitBash or Linux command line interface, VSCode or your preferred Code Editor - Latest 
```

### Building process

Type Script compiler options are shown as such:

```
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": { "*": ["types/*"] },
        "target": "es5",
        "module": "commonjs",
        "lib": [
            "es6",
            "dom"
        ],
        "declaration": true,
        "listEmittedFiles": true,
        "removeComments": false,
        "stripInternal": true,
        "alwaysStrict": true,
        "noImplicitAny": false,
        "noImplicitThis": true,
        "strictNullChecks": true,
        "outDir": "./"
    },
    "files": [
        "./server/app.ts",
        "./server/tests/app.spec.ts"
    ]
}

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm run init-project
```

## Running the tests

Mocha and Chai are used on the back-end, looking after REST API endpoints.

### Break down into end to end tests

mocha --timeout 10000

### And coding style tests

More to be explored soon.

## Deployment

more to be explored soon.

## Built With

* [TypeScript](https://www.typescriptlang.org/) - TypeScript language
* [Nodejs](https://nodejs.org/en/) - Main environment platform
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Angular](https://angular.io/) - Front-end Framework

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Gitlab](https://gitlab.com/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/). 

## Authors

* **Thiago Lima** - *Initial work* - [Thiago Lima](https://gitlab.com/thiagoblima/weather-app)

See also the list of [contributors](https://gitlab.com/thiagoblima/weather-app) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Used by great companies for grea commannd line tools
* Making better tools for the best user experience
* With love
