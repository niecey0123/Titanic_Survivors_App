const { db } = require('./models');


const resetDb = async () => {
  try {
    db.sync({ force: true }); 
    console.log('Congrads Niecey, your database synced!');
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

resetDb();