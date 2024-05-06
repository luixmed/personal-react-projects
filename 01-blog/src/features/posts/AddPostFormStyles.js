import styled from "styled-components";

export const AddPostFormStyled = styled.section`
  /* Box */
  padding: 1.6rem 2.4rem;

  /* Style */
  background-color: #444;
  h2 {
    font-size: 3rem;
    text-transform: uppercase;

    margin-bottom: 2.4rem;
  }

  form {
    /* Layout */
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    div {
      display: grid;
      grid-template-columns: 8rem 1fr;
    }
  }

  input,
  select {
    color: #333;
    font-family: inherit;
    font-size: 1.6rem;

    padding: 0.8rem;
  }

  textarea {
    color: #444;
    font-family: inherit;
    font-size: 1.6rem;

    padding: 1rem;
  }

  button {
    align-self: center;

    color: #fff4e6;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;

    padding: 1rem 2rem;
    border: none;
    border-radius: 10rem;

    background-color: #e67700;
  }
`;
