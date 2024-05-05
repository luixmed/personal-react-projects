import { useSelector } from "react-redux";
import { PostsListStyled } from "./PostsListStyles";
import { getAllPosts } from "./postsSlice";
import PostItem from "./PostItem";

function PostsList() {
  const posts = useSelector(getAllPosts);

  return (
    <PostsListStyled>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </PostsListStyled>
  );
}

export default PostsList;
