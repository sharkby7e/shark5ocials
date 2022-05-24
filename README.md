# shark5ocials

## Description

A Backend API for an underwater themed Social Media website. Users can access a RESTful API, through various endpoints to add friends,
thoughts, and reactions to thoughts. New users can add themselves to database, and add friends, and react to thoughts.

## Table of contents

- [Preview](#preview)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact/Questions](#questions)
- [Summary](#summary-and-learning-points)

## Preview

This application is not deployed, please click the link below to view a video of the application functioning.

Alternatively, you can [install](#installation) this application on your own machine and try it yourself.

[Click to view the application video demo](https://drive.google.com/file/d/1PrAbEcrk6SI0zVeDzEsG3exu6PINchGt/view)

## Technologies Employed

| Techlogy      | Implementation/Use    |
| ------------- | --------------------- |
| Node.js       | JavaScript runtime    |
| NPM           | Manage node packages  |
| express       | server                |
| mongodb       | noSQL db              | 
| mongoose      | ODM                   |


## Installation

To install this application, clone the repository

```
git@github.com:sharkby7e/shark5ocials.git
```

navigate into the directory, and then run the following command

```
npm i
```

## Usage

Then to start the application, run:

```
npm start
```

### Key API Endpoints
```
GET  api/users - get all Users
POST api/users - new User
POST api/users/:userId/friends/:friendId - add friend

GET  api/thoughts - get all thoughts
POST api/thoughts - new Thought
POST api/thoughts/:thoughtId/reactions - new Reaction
```
For other endpoints, please refer to:

[thoughtRoutes](./routes/api/thoughtRoutes.js)

[userRoutes](./routes/api/userRoutes.js)

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Questions?

Please contact me at:

sgquin@gmail.com

Alternatively, visit my github:

https://www.github.com/sharkby7e

## Summary and Learning Points

An introduction to mongoose ODM in order to use the NoSQL database, MONGODB.
A different approach to organizing data, MongoDB provides flexibility for data, as data 
does not need to conform to certain schema. It also prevents the need to do complicated migrations 
when data fields need to change. I feel like the cost was a level of order/I felt lost at times,
when even going one or two levels deep into documents referring to each other. I think i definitely
prefer the SQL databases we've been working with. 
