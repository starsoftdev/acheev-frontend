
import styled from 'styled-components';

export default const GridPanelContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(${props=>props.columns?: 12}, ${props=>props.columnSize?: "1fr"});
  grid-template-rows: none;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-gap: 10px;
  justify-items: start;
  align-items: center;

  padding: 10px;
  border-style: solid;
  border-color: rgb(201, 76, 76);
  
`

const GridItemContainer = styled.div`

  border-style: solid;
  border-color: rgb(201, 76, 76);

`
