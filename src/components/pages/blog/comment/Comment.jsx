import Title2 from "../../../gineric/title2/Title2.jsx";
import style from "./comment.module.css"

const Comment = (comments) => {
  const arr = []
  for (let i = 0; i < comments.comments.length; i++) {
    arr.push(<div className={style.comment}><p>{comments.comments[i]}</p></div>)
  }

  return (
    <div className={style.comments}>
      <Title2 title={'Комментарии'}/>
      {arr}
    </div>
  );
};

export default Comment