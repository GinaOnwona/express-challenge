const bodyParser = require('body-parser')
const express = require('express')
const app = express ()
const port = 3002
const usersData = require("./users.json");


app.use(bodyParser ())

app.get("/users ",(request,response) => {
    console.log(request)
    response.json(usersData);

})

app.post("/users", (request,response) =>{
    const requestBody = request.body
    console.log(requestBody)
    // array.push(usersData)
    // response.send(usersData)
    usersData.push(requestBody)
    response.send(usersData)

})

app.delete("/users", (request, response) =>{
    const deleteusers = usersData.pop()
    response.json(deleteusers);

})


app.listen(3002, ()=>{
    console.log("My App is running")
})
