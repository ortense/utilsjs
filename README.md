# Utilsjs

[![travis build](https://img.shields.io/travis/astesio/utilsjs.svg?style=flat-square)](https://travis-ci.org/astesio/utilsjs)
[![codecov](https://img.shields.io/codecov/c/github/astesio/utilsjs.svg?style=flat-square)](https://codecov.io/gh/astesio/utilsjs)
[![code climate](https://img.shields.io/codeclimate/github/astesio/utilsjs.svg?style=flat-square)](https://codeclimate.com/github/astesio/utilsjs)
[![version](https://img.shields.io/npm/v/utilsjs.svg?style=flat-square)](https://www.npmjs.com/package/utilsjs)
[![downloads](https://img.shields.io/npm/dm/utilsjs.svg?style=flat-square)](https://www.npmjs.com/package/utilsjs)
[![MIT License](https://img.shields.io/npm/l/utilsjs.svg?style=flat-square)](https://www.npmjs.com/package/utilsjs)

## Introduction

This project was born with the intention of solving code duplication problems between my microservices. I could have solved these problems in several ways without having to open this project, but I decided to leave it open because I imagine that other people should have the same problems. So I created a very simple open source project.

##### Motivation

JavaScript is a great programming language, and offers us many benefits in our lives as developer but as you already know no programming language will solve all your problems with native resources. The ideia is using only recurse native language avoiding to the maximum third-party libraries.

##### Why that ? My answer is simple.

Javascirpt has a commiter that homologates its functionalities and once homologated in we are sure that it will not be irretrievable to leave the lingaugem for a good time of years. A clear example is the console.log (), is in the language since javascirpt is javascript. Hashsah

## Features

###### Array
* isValidEmail

###### Boolean
* isEmpty

###### Date
* isEmpty

###### Number
* isNumber `return a boolean true when you pass a number, string number or string empty`

###### Object
* isEmpty

###### String
* isEmpty `return a boolean true if a string is empty`
* isNotEmpty `otherwise isEmpty return a boolean true if string not empty`
* isValidEmail `return a boolean true if an email is valid`


## Getting Started

* Install: `npm install utilsjs --save`
* Inside your project you need import library: `const utilsjs = require('utilsjs')`.
* After imported you can call that following ways: `utilsjs.string.isValidEmail('astesiojose@gmail.com')`.
Here you can see after keyword `utilsjs` you need called type you need valid dot name functionality.
Today I have the follwing types `(array, boolean, date, number, object and string)`

## License

MIT