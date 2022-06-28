# National Bootcamp - Week Nine Project Brief

For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. Specifically, it might be good to focus on how to enhance the remote experience of a bootcamper, or what can help them with the vast amount of learning there is to do as a new developer. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

- A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
- A presentation, complete with how you worked as a team and a demonstration of the project

Your project application might include the following:

- Include a user experience created in React
- Build a REST API which is used by your front-end
- Be supported by a Postgresql database with multiple tables
- Be built and managed in an agile way
- Utilise testing for ensuring robust code

Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.

Click the link to see the [Project Guidelines](https://github.com/SchoolOfCode/project-guidelines/blob/master/project-week.md)

## Features

Allows data to be exchanged between Heroku database and React front-end.
Scripts for initial set-up and edit of database.
Express.js routing

## Skills & Tech

- Node.js
- Express
- Cors
- PostgreSQL
- Heroku
- Postman

## File Structure

``` MD
project
│   README.md
│       
│
└───db
│   │  index.js 
│   │  
│   │
│   └───scripts
│       │   createTable.js
│       │   deleteTable.js
│       │   populateTable.js
│   
└───models
|    │   
|    │  resources.js
|    
|
|---node-modules
|
|
|
|--- routes
|       | 
|       |   index.js
|       |   plan.md
|
|--- .env
|
|--- .gitignore
|
|--- app.js
|
|--- package-lock.json
|
|---package.json

```

## Scripts

- start
- dev
- test
- db:createTable
- db:deleteTable
- db:populateTable
