import styled, { css } from "styled-components";
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.inverted &&
    css`
      background-color: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background-color: white;
        color: black;
      }
    `};
  // & : 현재의 버튼 의미
  // + : 인접 버튼
  // & + button 현재 + 다음버튼을 선택
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <>
      <Box color="orangered">
        <Button>안녕하세요.</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </>
  );
};
export default StyledComponent;
