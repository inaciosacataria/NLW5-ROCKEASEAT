import express, { request, response } from "express";

const app = express();

//requisicao get
app.get("/", (request, response) => {
    return response.json(
        {
            message: "Hello NLW 05"
        }
    );
});


// post
app.post("/info", (request, response) => {
    return response.json(
        {
            message: "info saved"
        }
    );
});

app.listen(
    3333,
    () => console.log(
        "Server is running on port 3333"
    )
);

