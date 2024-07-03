import Header from "../../templates/Header.jsx";
import "./blog.css";
import {useState} from "react";
import {getAllPosts} from "../../../api/userApi.js";
import Post from "./post/Post.jsx";

const Blog = () => {
  /*const arr = []
  for (let i = 0; i < 50; i++) {
    const comments = []
    for (let j = 0; j < 10; j++) {
      comments.push('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.')
    }
    arr.push(<Post title={`Название${i}`}
                   text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
                   comments={comments}/>)
  }*/

  const [posts, setPosts] = useState([])

  useState(() => {
    getAllPosts().then(data => {
      setPosts(data)
    })
  }, [])
  console.log(posts);
  const arr = []
  for (let i = 0; i < posts.length; i++) {
    arr.push(
      <Post title={posts[i].title}
            author={posts[i].author}
            text={posts[i].text}
            comments={posts[i].comments}/>
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