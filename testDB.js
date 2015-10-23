var db = require('./models');

db.links.create({
  where: {
    url: 'com',
    hash: 'fuck you'
  }
}).then(function(value) {
  console.log(value.get());
});