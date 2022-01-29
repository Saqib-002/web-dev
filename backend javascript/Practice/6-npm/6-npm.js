// PS D:\LANGUAGES\Web Developement\backend javascript> npm --version
// 6.14.13
// PS D:\LANGUAGES\Web Developement\backend javascript> node --version
// v14.17.3

// npm

// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> cd ./6-npm
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> ls


//     Directory: D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm


// Mode                 LastWriteTime         Length Name
// ----                 -------------         ------ ----
// -a----          8/2/2021  10:53 PM            211 6-npm.js

// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (6-npm)
// version: (1.0.0)
// description: this is first ever developed project
// entry point: (6-npm.js)
// test command: 
// git repository:
// keywords: Lucky
// author: Saqib
// license: (ISC)
// About to write to D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm\package.json:

// {
//   "name": "6-npm",
//   "version": "1.0.0",
//   "description": "this is first ever developed project",
//   "main": "6-npm.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [
//     "Lucky"
//   ],
//   "author": "Saqib",
//   "license": "ISC"
// }


// Is this OK? (yes) yes

// after this package.json file will be added


//installing slugify
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm install slugify


// install or uninstall express
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm install express
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm uninstall express


// npm install will install all depedencies
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm install


// to save dev depedencies in dev depedencies are use at time of developement not production time
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm install nodemon --save-dev


// globally install to use in all files in this computer
// You can write npm i nodeman -global
// PS D:\LANGUAGES\Web Developement\backend javascript\Practice\6-npm> npm install nodemon --global

// "nodemon": "~2.0.12" this i use to install latest version
// "nodemon": ">2.0.12" this i use to install latest version
// "nodemon": "^2.0.12" this i use to install exact version


/*
Command                                         Description
npm init                                        Initialize json file
npm install (module name)                       To install module
npm i (module name)                             To install module
npm install (module name) --save-dev            To install dev depedencies module
npm install (module name) --global              To install module globally
npm uninstall (module name)                     To uninstall module
nmp install                                     to install all packages

*/
/*
^2.0.12                ^ this will install the  exactly version that is written
~2.0.12                ~ this will accept the new patch that will coe and install the latest version
>2.0.12                ^ this will install the  latest version 

*/



