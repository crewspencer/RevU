const app = require("express")();

const PORT = process.env.PORT || 3001;

app.get("", (req, res) => {
  res.sendFile("/index.html");
});

app.listen(PORT, () => {
  console.log(`Current Mobile Offerwall Running on Port ${PORT}`);
});
