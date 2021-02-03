//smoothies.js

module.exports = function (app, models) {

  // INDEX
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
      // Redirect to smoothies/:id
      res.redirect(`/smoothies/${smoothie.id}`)

    }).catch((err) => {
      console.log(err)
    });
  })

  // SHOW
  app.get('/smoothies/:id', (req, res) => {
    // Search for the smoothie recipe by its id that was passed in via req.params
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

  // DELETE
  app.delete('/smoothies/:id', (req, res) => {
    models.Smoothie.findByPk(req.params.id).then(smoothie => {
      smoothie.destroy();
      res.redirect(`/`);
    }).catch((err) => {
      console.log(err);
    });
  })

}
