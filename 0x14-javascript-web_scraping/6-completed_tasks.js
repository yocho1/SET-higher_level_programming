#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const completedByUser = {};

    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.completed) {
        if (!completedByUser[todo.userId]) {
          completedByUser[todo.userId] = 0;
        }
        completedByUser[todo.userId]++;
      }
    }

    console.log(completedByUser);
  }
});
