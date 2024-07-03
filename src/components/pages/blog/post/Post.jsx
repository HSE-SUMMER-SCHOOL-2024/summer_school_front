import styles from './post.module.css';
import Title from "../../../gineric/title/Title.jsx";
import Comment from "../comment/Comment.jsx";

// eslint-disable-next-line react/prop-types
const Post = ({title, text, comments}) => {
  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <Title title={title}/>

        <div>
          <p>{text}</p>
        </div>
      </div>

      <Comment comments={comments}/>
    </div>
  )
}

export default Post