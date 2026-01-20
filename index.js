const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// startuj serwer TYLKO gdy uruchamiasz ten plik bezpośrednio (npm start)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("Listening on", port));
}

module.exports = app;