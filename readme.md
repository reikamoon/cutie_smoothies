# Cutie Smoothies :strawberry:
by reikamoon :ribbon:

Time: 4-7 Hours

## Table of Contents
* [About Cutie Smoothies](#about)
* [Heroku Link](#heroku-link)
* [Key Features](#Key-Features)
* [Recipe for Cutie Smoothies](#Recipe-for-Cutie-Smoothies)
* [Future Features](#Future-Features)
* [Installation](#installation)

## About
Cutie:strawberry:Smoothies is a website for creating, browsing, and sharing smoothie recipes.

## Heroku Link
* [Live Heroku Link](https://cutie-smoothies.herokuapp.com/)

## Features
Users can:
* Create Smoothie Recipes :strawberry:
* Browse Smoothie Recipes :banana:
* Edit Smoothie Recipes :peach:
* Delete Smoothie Recipes :watermelon:
* Share Smoothie Recipes :cherries:


## Recipe for Cutie Smoothies
Built with:
* Node.js :green_apple:<br>
I chose node.js because it is what I am comfortable with, and has a lot of tools to work with. I also enjoy the event-based model that node.js uses. Node.js is helpful for event-based, real-time applications, like chat apps.
* Express :tangerine:<br>
I chose express because it is what I am comfortable with, and it is easy to configure and customize, and allows various middleware such as method override, which I used for the delete and edit routes.
* Handlebars :melon:<br>
Handlebars is the template engine I used for this project. I chose handlebars because of its easy syntax and how similar it is to HTML & Jinja.
* Postgres/Sequelize :honey_pot:<br>
I chose Postgres/Sequelize because heroku discontinued support for MongoDB last year, and I am fairly comfortable with postgres, as it is easy to edit models and attributes and migrate the db to heroku.

## Future Features
* Implement Search + filters (ex: search by tags, search by rating)
* Add images to recipes (adding the imgURL to the Smoothie model's attributes)

## Installation
1. Clone the repo <br>
`git clone https://github.com/reikamoon/cutie_smoothies.git`
2. In the repo folder, install necessary ingredients (NPM packages) <br>
`npm i`
3. Run nodemon <br>
`nodemon app.js`
