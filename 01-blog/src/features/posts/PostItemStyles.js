import styled from "styled-components";

export const PostItemStyled = styled.li`
  /* Box */
  padding: 1.6rem 2.4rem;

  /* Style */
  background-color: #666;
  border-radius: 7px;

  article {
    /* Box */
    height: 100%;

    /* Layout */
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-size: 2.2rem;
    }

    p {
      color: #ddd;
      line-height: 1.5;
    }

    span {
      color: #ccc;
      font-size: 1.4rem;
      font-style: italic;

      align-self: flex-end;
      margin-top: auto;
    }
  }
`;
