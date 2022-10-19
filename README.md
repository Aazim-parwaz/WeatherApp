# SIMPLE WEATHER APP

## Table of Contents

1. [Introduction](#Introduction)
2. [Asynchronous Node.js](#Async_node)
3. [Web Server](#Web_server)
 

## introduction

<a name="introduction"></a>

WEATHER APP is the nodejs application developed by Aazim Parwaz. The App uses HTML, CSS, JAVASCRIPT, HANDLEBARS in the frontend and Express.js ans postman-request module in the backend. The form takes the city name and displays the current temperature in degree Celsius.
This is the minimalistic information that we use out of JSON data after Calling the API.
We can further extract data of  humidity, wind speed, minimum temperature, maximum temperature etc. The handlebars help us to render dynamic information and reuse the template.


## Asynchronous Node.js

<a name="Async_node"></a>

The APP works with Asynchronous Node.js. HTTP requests are made with Error handling. Two 
modules are created using callback Abstraction: 1) FORECAST 2)GEOCODE. These modules are
customized for our need. 


## Web Server

<a name="Web_server"></a>

Express.js creates web-server with node.js. We create the routes and serve the dynamic pages with templating. We need to set template engine to use handlebars.

