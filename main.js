const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/get-user", (req, res) => {
  res.json({
    massage: "succes get",
    username: "meymey",
    email: "mey@gmail.com",
    password: 1234,
  });
});
app.delete("/delete-user", (req, res) => {
  res.json({
    message: "succes delete data",
  });
});
app.put("/put-user", function (req, res) {
  const { username, email, password } = req.body;
  res.status(200).json({
    message: "success put user",
    username: username,
    email: email,
    password: password,
  });
});
app.post("/post-user", function (req, res) {
  const { username, email, password } = req.body;

  return res.json({
    message: "lol",
    username: username,
    email: email,
    password: password,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
