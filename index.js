const express = require("express");
const bodyParser = require("body-parser");

const dummyData = require("./MOCK_DATA.json");
const app = express();
const PORT = 3001;
const blogPost = [];

// body-parser is a middleware of the server
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes..
app.get("/blogs", (request, response) => {
  return response.status(200).json({
    data: dummyData,
    success: true,
  });
});

// app.post("/blogs", (request, response) => {
//   blogPost.push({
//     id: Math.floor(Math.random * 100),
//     name: request.body.name,
//     course: request.body.course,
//   });
//   return response.status(201).json({
//     status: true,
//   });
// });

// i am using a random generated json data to get request..

app.get("/blogs/:id", (request, response) => {
  const result = dummyData.filter((data) => data.id == request.params.id);
  return response.status(200).json({
    data: result,
  });
});

app.delete("/blogs/:id", (request, response) => {
  const result = dummyData.filter((data) => {
    data.id == request.params.id;
  });
  dummyData.pop(result);
  return response.status(200).json({
    data: true,
  });
});

// Server listen PORT
app.listen(PORT, () => {
  console.log("Server running in port ", PORT);
});
