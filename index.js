import http from "http";
import fs from "fs";
import url from "url";
import slugify from "slugify";

// const str=slugify("hellO",{lower:true})
// console.log(str)
const posts = fs.readFileSync("posts.json", "utf8");
const server = http.createServer((req, res) => {
  const { id } = url.parse(req.url, true).query;
  const { pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home");
  } else if (pathname === "/posts") {
    if (id) {
      const post = JSON.parse(posts).find(
        (post) => post.id == Number(id)
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(post));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(posts);
  }
});

server.listen(4040, "localhost", () => {
  console.log("Server is running on http://localhost:4040");
});
