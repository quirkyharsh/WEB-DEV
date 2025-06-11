import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);;
})

app.get("/", (req,res) => {
    res.send("hello,mihika");
})

app.get("/about", (req,res) => {
    res.send("about,mihika");
})

app.get("/contact", (req,res) => {
    res.send("contact,mihika");
})