1. Mongo Atlas
2. Mongo Compass
3. ExpressJS: modules/lib
   - npx express-generator --view=hbs
   - npm install 
   - npm install -g nodemon
   - npm install body-parser
     
   - npm install mongoose@6.11.4 --save

   - npm install --save handlebars-dateformat

          view.hbs
          {{ dateFormat dob "DD/MM/YYYY" }}
     
4. (DB) app.js
          const mongoose = require('mongoose');
          mongoose.connect("");
   
          var hbs = require('hbs');
          hbs.registerHelper('dateFormat', require('handlebars-dateformat'))
   
          var bodyParser = require('body-parser');
          app.use(bodyParser.urlencoded({ extended : false}))
6. Route
7. (BE) models
8. (FE) views
9. push to github
10. deploy on render
11. lived.
