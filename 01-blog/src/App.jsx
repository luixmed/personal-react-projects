import { AppStyled } from "./AppStyled";
import { GlobalStyles } from "./GlobalStyles";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <h2>Posts</h2>
        <PostsList />
      </AppStyled>
    </>
  );
}

export default App;
