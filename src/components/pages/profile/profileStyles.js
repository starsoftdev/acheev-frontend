import { React } from 'react';
import styled from 'styled-components';



export const ProfileContentsContainer= styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  column-gap: 50px;
  grid-row-gap: 50px;
  background-color: #eaeaea;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "brief detail"
    "summary detail"
`

export const ProfileContentsBriefContainer = styled.div`
  border-style: solid;
  border-color: rgb(201, 76, 76);
  grid-area: brief;
`

export const ProfileContentsSummaryContainer = styled.div`
  border-style: solid;
  border-color: rgb(201, 76, 76);
  grid-area: summary;
`

export const ProfileContentsDetailContainer = styled.div`
    border-style: solid;
    border-color: rgb(201, 76, 76);
    grid-area: detail;
`
