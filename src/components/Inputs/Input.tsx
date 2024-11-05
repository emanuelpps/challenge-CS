import { forwardRef } from "react";
import styled from "styled-components";

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
  ({ value, onChange, placeholder }: any, ref: any) => {
    return (
      <StyledInput
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
);
