import Header from "../../templates/Header.jsx";
import "./blog.css";
import {useState} from "react";
import {getAllPosts} from "../../../api/userApi.js";
import Post from "./post/Post.jsx";
import {useSelector} from "react-redux";
import AddPost from "./post/AddPost.jsx";

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

  const isAuth = useSelector(state => state.user.isAuth)
  const user = useSelector(state => state.user)
  console.log(user)
  const addPost = isAuth ? <AddPost value={posts} setValue={setPosts}/> : <></>

  return (
    <div>
      <Header/>

      <div className="blog">
        {addPost}

        <h1 style={{
          marginTop: "30px"
        }}>Блог</h1>

        {arr}
      </div>
    </div>)
}

export default Blog