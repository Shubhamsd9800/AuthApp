const express= require("express");
const app= express();

require("dotenv").config();
const PORT=process.env.PORT || 4000


//cookie-parser- what is this and why we need this

const cookieParser= require("cookie-parser");
app.use(cookieParser());
// middleware(express.json() parser)
app.use(express.json());

const user= require("./routes/user");
//mount
app.use("/api/v1",user);

const connectWithDb=  require("./config/database");
connectWithDb();

app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})