const express = require("express");
const app = express();
const cors = require("cors");

const controller = require("./controller");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// app.get("/users", (req, res) => {
//   controller.getUsers((users) => res.send(users));
// });

// app.get("/user", (req, res) => {
//   const id = req.query.id;
//   controller.getUserById(id, (user) => {
//     res.send(user);
//   });
// });

app.get("/users", (req, res) => {
  controller.getUsers(req, res, (next) => {
    res.send();
  });
});

app.post("/createUser", (req, res) => {
  controller.createUser(req.body, (callback) => {
    res.send("Successfully Added");
  });
});

app.post("/updateUser", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

app.delete("/deleteUser", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send("Successfully Deleted" + callback);
  });
});

module.exports = app;
