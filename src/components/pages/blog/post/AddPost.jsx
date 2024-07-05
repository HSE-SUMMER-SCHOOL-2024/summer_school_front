import style from "./addPost.module.css"
import Input from "../../../gineric/input/Input.jsx";
import Button from "../../../gineric/Button/Button.jsx";
import {createPost, getAllPosts} from "../../../../api/userApi.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setPostAction} from "../../../../store/postReducers.js";

// eslint-disable-next-line react/prop-types,no-unused-vars
const AddPost = ({value, setValue}) => {

  const [postTitle, setPostTitle] = useState("")
  const [postText, setPostText] = useState("")

  const dispatch = useDispatch()

  const click = () => {
    console.log(postTitle, postText)
    createPost(postTitle, postText).then((data) => {
      console.log(data)
      dispatch(setPostAction(data))
      getAllPosts().then((posts) => {
        setValue(posts)
      })
    })
  }

  return (
    <div className={style.addPost}>
      <Input text="Название"
             type='input'
             value={postTitle}
             setValue={setPostTitle}
      />
      <Input text="Текст"
             type='input'
             value={postText}
             setValue={setPostText}
      />
      <Button text="Опубликовать" onClick={click}/>
    </div>
  )
}

export default AddPost