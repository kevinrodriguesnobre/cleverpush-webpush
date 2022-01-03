const PORT = process.env.PORT || 5000
const express = require('express')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get(("/"), (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT)