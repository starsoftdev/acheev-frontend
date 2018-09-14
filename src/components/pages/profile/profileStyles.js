import { React } from 'react';
import styled from 'styled-components';
import { media } from '../../containers/common/styles'

export const ProfilePanelContainer= styled.div`
  display: grid;
  background-color: #eaeaea;
  justify-items: center;
  align-items: start;
  grid-template-rows: auto;

  ${media.small`
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
    grid-template-areas:
      "topLeft"
      "bottomLeft"
      "main";
  `};

  ${media.medium`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5em;
    grid-row-gap: 1.5em;
    padding: 3em;
    grid-template-areas:
      "topLeft main"
      "bottomLeft main";

  `};

  ${media.large`
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    padding: 4em;
    grid-template-areas:
      "topLeft main main"
      "bottomLeft main main";
  `};


`

export const ProfileTopLeftPanel = styled.div`
  width: 100%;
  max-width: 30em;
  box-sizing: border-box;
  border: 1px solid blue;
  grid-area: topLeft;
  ${media.large`
    justify-self: end;
  `};
`

export const ProfileBottomLeftPanel = styled.div`
  width: 100%;
  max-width: 30em;
  border-style: solid;
  border: 1px solid blue;
  grid-area: bottomLeft;
  ${media.large`
    justify-self: end;
  `};
`

export const ProfileMainPanel = styled.div`
    width: 100%;
    border-style: solid;
    border: 1px solid blue;
    grid-area: main;

    ${media.small`
      max-width: 30em;
    `};

    ${media.large`
      max-width: 60em;
      justify-self: start;
    `};
`
