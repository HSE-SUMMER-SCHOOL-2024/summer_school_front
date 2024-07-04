import Header from "../../templates/Header.jsx";
import "./blog.css";
import {useState} from "react";
import {getAllPosts} from "../../../api/userApi.js";
import Post from "./post/Post.jsx";

const Blog = () => {
  const [posts, setPosts] = useState([])

  useState(() => {
    getAllPosts().then(data => {
      setPosts(data)
      console.log(data)
    })
  }, [])

  const arr = []
  for (let i = posts.length - 1; i >= 0; i--) {
    arr.push(
      <Post title={posts[i].title}
            author={posts[i].userId}
            text={posts[i].text}
            comments={["Default comment"]}/>
    )
  }

  return (<div>
    <Header/>

    <div className="blog">
      {arr}
    </div>
  </div>)
}

export default Blog