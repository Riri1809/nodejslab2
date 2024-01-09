const express = require("express");
const morgan = require("morgan");
const pug = require("pug")



const app = express();
const PORT = 3010;

//middleware
app.use(morgan("dev"));
app.use(express.static("public"));

//setting views
app.set("views", "./views");
app.set("view engine", "pug");


//routes
app.get("/", (req, res) => {
    res.render("view1.pug", {
        title: "Home page"
    });
});

app.get("/about", (req, res) => {
    res.render("view2.pug", {
        title: "About page"
    });
});

app.get('/download-file', (req, res) => {
    res.download('./public/doc/swe.pdf')
});
// listening 
app.listen(PORT, () => {
    console.log(`the server is running on port:${PORT}`)
});