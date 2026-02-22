import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Shukrani Nkulu Kayumba | Full-Stack Web Developer",
    name: "Shukrani Nkulu Kayumba",
    role: "Full-Stack Web Developer",
    tagline: "Building structured and maintainable web applications with Node.js, Express.js, and EJS"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About | Shukrani Nkulu Kayumba",
    name: "Shukrani Nkulu Kayumba"
  });
});

app.get("/skills", (req, res) => {
  res.render("skills", {
    title: "Skills | Shukrani Nkulu Kayumba",
    name: "Shukrani Nkulu Kayumba"
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    title: "Projects | Shukrani Nkulu Kayumba",
    name: "Shukrani Nkulu Kayumba"
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact | Shukrani Nkulu Kayumba",
    name: "Shukrani Nkulu Kayumba"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});