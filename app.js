// Initialize express
const express = require('express')
const app = express()
const methodOverride = require('method-override')

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

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

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


// INDEXS
app.get('/', (req, res) => {
  models.Smoothie.findAll({ order: [['createdAt', 'DESC']] }).then(smoothies => {
    res.render('smoothies-index', { smoothies: smoothies });
  })
})

// NEW
app.get('/smoothies/new', (req, res) => {
  res.render('smoothies-new', {});
})

// CREATE
app.post('/smoothies', (req, res) => {
  models.Smoothie.create(req.body).then(smoothie => {
    // Redirect to events/:id
    res.redirect(`/smoothies/${smoothie.id}`)

  }).catch((err) => {
    console.log(err)
  });
})

// SHOW
app.get('/smoothies/:id', (req, res) => {
  // Search for the event by its id that was passed in via req.params
  models.Smoothie.findByPk(req.params.id).then((smoothie) => {
    // If the id is for a valid event, show it
    res.render('smoothie-show', { smoothie: smoothie })
  }).catch((err) => {
    // if they id was for an event not in our db, log an error
    console.log(err.message);
  })
})

// EDIT
app.get('/smoothies/:id/edit', (req, res) => {
  models.Smoothie.findByPk(req.params.id).then((smoothie) => {
    res.render('smoothies-edit', { smoothie: smoothie });
  }).catch((err) => {
    console.log(err.message);
  })
});

// UPDATE
app.put('/smoothies/:id', (req, res) => {
  models.Smoothie.findByPk(req.params.id).then(smoothie => {
    smoothie.update(req.body).then(smoothie => {
      res.redirect(`/smoothies/${req.params.id}`);
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
});

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})
