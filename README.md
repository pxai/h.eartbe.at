h.eartbe.at
===========================
Simple project showing the implementation of a MEAN application:
- MongoDB
- Express
- Angular.js
- Node.js

Including several technologies such as:
- bootstrap
- passport
- grunt

Instalation
=================
## Prerequisites
- MongoDB server
- Internet connection is needed to install libraries
First you need to download dependencies
```
  $ npm install
```

Everything should be ok

Starting
=========
First check application config in src/config/default.json and set them according
to your preferences. By default the app will try to connect to a local MongoDB instance

## Import database to MongoDB
On the console, inside the project folder just type:
```
  $ cd database
  $ mongorestore
```
## Starting MongoDB
In a development environment just try
In Linux
```
  $ mongod --smallfiles --syslog --fork --noauth
```
In Windows
```
  c:\ mongod --smallfiles --syslog --fork --noauth
```

Git repository
===========
You can download sourcecode from:
[https://github.com/pxai/h.eartbe.at.git]
