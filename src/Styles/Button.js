import styled from "styled-components";

const Button = styled.button`
  cursor:pointer;
  background: ${props => props.primary ? "#5AC06C" : "white"};
  color: ${props => props.primary ? "white" : "#5AC06C"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5AC06C;
  border-radius: 3px;
`;

export default Button;