import { PostItemStyled } from "./PostItemStyles";

function PostItem({ post }) {
  const { title, content, author } = post;

  return (
    <PostItemStyled>
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{author}</span>
      </article>
    </PostItemStyled>
  );
}

export default PostItem;
