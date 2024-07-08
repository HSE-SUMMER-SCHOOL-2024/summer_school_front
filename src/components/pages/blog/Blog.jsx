import Header from "../../templates/Header.jsx";
import "./blog.css";
import {useState} from "react";
import {getAllPosts} from "../../../api/userApi.js";
import Post from "./post/Post.jsx";
import {useSelector} from "react-redux";
import AddPost from "./post/AddPost.jsx";
import Search from "./search/Search.jsx";

const Blog = () => {

    const [posts, setPosts] = useState([])

    const searchString = useSelector(state => state.post.searchString)

    useState(() => {
        console.log(searchString)
      getAllPosts(searchString || '').then(data => {
        setPosts(data)
        console.log(data)
      })
    }, [searchString])

  const arr = []
  for (let i = posts.length - 1; i >= 0; i--) {
    arr.push(
      <Post title={posts[i].title}
            author={posts[i].userId}
            text={posts[i].text}
            comments={["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestib\n" +
            "\n"]}/>
    )
  }

  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <div>
      <Header/>

      <div className="blog">


        <div>
          <div>
            <h1 style={{
              marginTop: "30px"
            }}>Создание поста</h1>

            {isAuth ? <AddPost value={posts} setValue={setPosts}/> : <></>}
          </div>
        </div>


        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            marginTop:'40px',
          }}
        >
          <h1 style={{
            margin: 0,
          }}>Блог</h1>
          <Search/>
        </div>


        {arr}
      </div>
    </div>)
}

export default Blog