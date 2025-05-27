import http from "http";
import fs from "fs"

const server = http.createServer((req, res) => {
  if(req.url==="/") {
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("home")
  } else if (req.url==="/posts") {
    const posts=fs.readFileSync("posts.json","utf8")
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(posts)
  }

});

server.listen(4040, "localhost", () => {
  console.log("Server is running on http://localhost:4040");
});
