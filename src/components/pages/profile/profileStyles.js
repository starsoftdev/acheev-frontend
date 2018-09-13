import { React } from 'react';
import styled from 'styled-components';

export const ProfilePanelContainer= styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr
  grid-template-rows: auto;
  column-gap: 50px;
  grid-row-gap: 50px;
  padding: 50px;
  background-color: #eaeaea;
  justify-items: center;
  align-items: start;
  grid-template-areas:
    "topLeft main"
    "bottomLeft main"
`

export const ProfileTopLeftPanel = styled.div`
  border-style: solid;
  border-color: rgb(201, 76, 76);
  grid-area: topLeft;
`

export const ProfileBottomLeftPanel = styled.div`
  border-style: solid;
  border-color: rgb(201, 76, 76);
  grid-area: bottomLeft;
`

export const ProfileMainPanel = styled.div`
    border-style: solid;
    border-color: rgb(201, 76, 76);
    grid-area: main;
`
