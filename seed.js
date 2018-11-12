const { db } = require('./models');
const {Vegetable} = require('./models');
const {Gardener} = require('./models');
const {Plot} = require('./models');

// const veggies = Vegetable.bulkcreate([{name: 'Tomato', color: 'red', planted_on: 2/26/18}, {name: 'carrot', color: 'orange', planted_on: 10/22/18}]);

const v1 = Vegetable.create({name: 'Tomato', color: 'red', planted_on: 2/26/18});



db.sync({ force: true })
  .then(() => {
    return Promise.all([
      Vegetable.bulkcreate([{name: 'Tomato', color: 'red', planted_on: 2/26/18}, {name: 'carrot', color: 'orange', planted_on: 10/22/18}], {returning: true})
    ])
  })
  .then(() => {
    console.log('Database synced!');
  })
  .catch(err => {
    console.log('Disaster! Something went wrong!');
    console.log(err);
  })
  .finally(() => {
    db.close();
  });
