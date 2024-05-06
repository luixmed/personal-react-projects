import { useState } from "react";
import { AddPostFormStyled } from "./AddPostFormStyles";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { getAllAuthors } from "../authors/authorsSlice";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const authors = useSelector(getAllAuthors);

  const dispatch = useDispatch();

  function handleSavePost() {
    if (!title || !content || !author) return;

    dispatch(addPost(title, content, author));
    setTitle("");
    setContent("");
    setAuthor("");
  }

  return (
    <AddPostFormStyled>
      <h2>Add a new post</h2>
      <form>
        {/* TITLE */}
        <div>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* AUTHOR */}
        <div>
          <label htmlFor="postAuthor">Author</label>
          <select
            id="postAuthor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value=""></option>
            {authors.map((author) => (
              <option key={author.id} value={author.name}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        {/* CONTENT */}
        <div>
          <label htmlFor="postContent">Content</label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
          />
        </div>

        {/* BUTTON */}
        <button
          type="button"
          onClick={handleSavePost}
          disabled={!title || !content || !author}
        >
          Save post
        </button>
      </form>
    </AddPostFormStyled>
  );
}

export default AddPostForm;
