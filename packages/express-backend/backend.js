// backend.js
import express from "express";
import cors from "cors";
import userServices from "./models/user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const findUserById = (id) => {
  return userServices.findUserById(id);
};

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  userServices
    .getUsers(name, job)
    .then((r) => {
      return { users_list: r };
    })
    .then((users) => res.status(200).send(users))
    .catch((error) => {
      console.log(error);
    });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  findUserById(id)
    .then((user) => {
      if (!user) return res.status(404).send("Resource not found");
      else return res.send(user);
    })
    .catch((error) => {
      if (error.name === "CastError") return res.status(400).send("Invalid ID");
      console.error(error);
      return res.status(500).send("Server error");
    });
});

const addUser = (user) => {
  return userServices.addUser(user);
};

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd)
    .then((user) => res.status(201).json(user))
    .catch((error) => {
      if (error.name === "CastError") return res.status(400).send("Invalid ID");
      console.log(error);
      return res.status(500).send("Server error");
    });
});

const deleteUser = (id) => {
  return userServices.deleteUser(id);
};

app.delete("/users/:id", (req, res) => {
  const userToDelete = req.params.id;
  deleteUser(userToDelete)
    .then((user) => {
      if (!user) return res.status(404).send("Resource not found");
      else return res.status(204).end();
    })
    .catch((error) => {
      if (error.name === "CastError") return res.status(400).send("Invalid ID");
      console.log(error);
      return res.status(500).send("Server error");
    });
});
