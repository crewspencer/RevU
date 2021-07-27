const app = require("express")();

const PORT = process.env.PORT || 3001;

app.get("/index.html", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Current Mobile Offerwall Running on Port ${PORT}`);
});
