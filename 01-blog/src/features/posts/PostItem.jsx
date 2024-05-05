import { PostItemStyled } from "./PostItemStyles";

function PostItem({ post }) {
  const { title, content } = post;

  return (
    <PostItemStyled>
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
      </article>
    </PostItemStyled>
  );
}

export default PostItem;
