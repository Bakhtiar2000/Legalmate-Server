const { PORT } = require("./src/secret");
const connectMongoDb = require("./src/MongoConfig/connectMongoDb");
connectMongoDb();
const app = require("./src/app");

// Running Server
try {
  app.listen(PORT, async () => {
    console.log(`Server Running - http://localhost:${PORT}`);
  });

} catch (error) {
  console.log(error.message)
}
