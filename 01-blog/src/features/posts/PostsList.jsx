import { useSelector } from "react-redux";
import { PostsListStyled } from "./PostsListStyles";
import { getPosts } from "./postsSlice";
import PostItem from "./PostItem";

function PostsList() {
  const posts = useSelector(getPosts);

  return (
    <PostsListStyled>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </PostsListStyled>
  );
}

export default PostsList;
