const app = require("express")();

const PORT = process.env.PORT || 3001;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(PORT, () => {
  console.log(`Current Mobile Offerwall Running on Port ${PORT}`);
});
