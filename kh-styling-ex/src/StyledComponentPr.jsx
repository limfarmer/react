import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const BttBox = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 15%;
`;
const ShowBox = styled.div`
  width: 100%;
  height: 70%;
  background: ${(props) => props.color || "white"};
  border-radius: 18px;
`;

const Btt = styled.button`
  background: ${(props) => props.color || "green"};
  width: 33%;
  height: 80%;
  border: 0.8px rgb(175, 175, 175);
  color: white;
`;

const StyledComponentPr = () => {
  const [colors, setColor] = useState("green");

  return (
    <>
      <Container>
        <BttBox>
          <Btt color="green" onClick={() => setColor("green")}>
            green
          </Btt>
          <Btt color="orange" onClick={() => setColor("orange")}>
            orange
          </Btt>
          <Btt color="purple" onClick={() => setColor("purple")}>
            purple
          </Btt>
        </BttBox>
        <ShowBox color={colors}></ShowBox>
      </Container>
    </>
  );
};
export default StyledComponentPr;
