require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const globalErrHandler = require("./middlewares/globalHander");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const globalErrHandler = require("./middlewares/globalHandler");
// const commentRoutes = reqire("./routes/comments/comment");

require("./config/dbConnect");

const app = express();

//middlewares
//--------
app.use(express.json()); //pass incoming data

//session config
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URL,
      ttl: 24 * 60 * 60, //1day
    }),
  })
);
//users route
//--------
app.use("/api/v1/users", userRoutes);

//--------
//posts route
//--------
app.use("/api/v1/posts", postRoutes);
//--------
//comeents
//--------
app.use("/api/v1/comments", commentRoutes);
//Error handler middlewares
app.use(globalErrHandler);
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
