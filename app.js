const port = process.argv[2] || 8080;

persist(() => {
  server.listen(port, () => {
    console.log(`Current Mobile Offerwall Running on Port ${port}`);
  });
});
