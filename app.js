/* app.js */


// require express
const app = require("express");

// fake posts to simulate database
const posts =[
  {
    id: 1,
    author: "John",
    title: "Templating with EJS",
    body: "Blog post number 1"
  },
  {
    id: 2,
    author: "Drake",
    title: "Express: Starting from the bottom",
    body: "Blog post number 2"
  },
  {
    id: 3,
    author: "Emma",
    title: "Streams",
    body: "Blog post number 3"
  },
  {
    id: 4,
    author: "Cody",
    title: "Events",
    body: "Blog post number 4"
  }
]

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // render home.ejs with the list of posts
  res.render("home", {posts: posts})
});

// blog post
app.get("/post/:id", (req, res) => {
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the post.ejs template with post content
  res.render("post", {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

// port 8080 local host?
app.listen(8080);

console.log("listening on port 8080");
