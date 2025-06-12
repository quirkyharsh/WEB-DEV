import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();

    let dayType = "a weekday"
    let advice = "it's time to work hard"

    if (day === 0 || day === 6){
        dayType = "a weekend";
        advice = "it's time to relax";
    }

    res.render("index.ejs", {dayType: dayType, advice: advice});
})