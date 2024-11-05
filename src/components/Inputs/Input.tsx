import { forwardRef } from "react";
import styled from "styled-components";
import { NameInput } from "../../Types/types";

const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 0.5rem;
  ::placeholder {
    color: gray;
  }
`;

export const Input = forwardRef(
  ({ onChange, placeholder, value }: NameInput) => {
    return (
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        required
      />
    );
  }
);
