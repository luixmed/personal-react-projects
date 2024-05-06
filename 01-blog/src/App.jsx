import { AppStyled } from "./AppStyled";
import { GlobalStyles } from "./GlobalStyles";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <AddPostForm />
        <h2>Posts</h2>
        <PostsList />
      </AppStyled>
    </>
  );
}

export default App;
