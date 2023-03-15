import styled from "@emotion/styled";

export const Button = styled.div`
  z-index: 99;
  position: relative;
  button {
    padding: 0.7rem;
    border: 0.1rem #fff solid;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    background-color: #bb6569;
    &:hover {
      border: 0.1rem #6c7e05 solid;
      color: #fff;
      background-color: #e5d566;
    }
  }
`;
