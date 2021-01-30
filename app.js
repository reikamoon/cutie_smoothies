// Initialize express
const express = require('express')
const app = express()

//handlebars
const handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(handlebars),
});

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
const models = require('./db/models');

// The following line must appear AFTER const app = express() and before routes!
app.use(bodyParser.urlencoded({ extended: true }));


// MOCK ARRAY OF SMOOTHIES
var smoothies = [

  { name: "Strawberry Banana Smoothie", rating: "4.8", link: "https://www.gimmesomeoven.com/strawberry-banana-smoothie-recipe/#tasty-recipes-65184", preptime: "5 minutes", servings: "2", desc: "The classic strawberry banana smoothie recipe is hard to beat. It’s sweet, it’s fresh, it’s good for you, and it’s always tasty.", ingredient1: "2 cups of frozen strawberries", ingredient2: "1 fresh banana, peeled" , ingredient3: "1 Cup of Milk", ingredient4: "1 Cup of Ice", ingredient5: "", instructions: "", tag1: "Strawberry", tag2: "Banana", tag3: "Dairy"},

  { name: "Mango Smoothie", rating: "4.9", link: "", preptime: "3 minutes", servings: "2", desc: "A cold, creamy mango smoothie is the best summertime smoothie recipe. And it only takes three minutes to whip up!", ingredient1: "2 fresh mangoes", ingredient2: "1 banana" , ingredient3: "1/2 cup of milk", ingredient4: "1/2 cup of yogurt", ingredient5: "", instructions: "Blend ingredients", tag1: "Mango", tag2: "Banana", tag3: "Dairy"},
]


// INDEX
app.get('/', (req, res) => {
  res.render('smoothies-index', { smoothies: smoothies });
})

// NEW
app.get('/smoothies/new', (req, res) => {
  res.render('smoothies-new', {});
})

// CREATE
app.post('/smoothies', (req, res) => {
  console.log(req.body);
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})
