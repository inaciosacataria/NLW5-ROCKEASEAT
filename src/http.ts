import express, { request, response } from "express";
import "./database";
import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
})

const http = createServer(app); // criando protocolo https
const io = new Server(http); // criando protocolo Ws

io.on('connection', (socket: Socket) => {
    console.log("sockect conectado", socket.id);
})


app.use(express.json())
app.use(routes);

/*
app.listen(
    3333,
    () => console.log(
        "Server is running on port 3333"
    )
);
*/

export { http, io };