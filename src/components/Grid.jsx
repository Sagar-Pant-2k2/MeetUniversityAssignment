import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  height: 400px;
  width: 400px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  background-color: aliceblue;
  /* gap: 5px;  */
`;

export default ({children})=>{
    return <Grid>{children}</Grid>
}