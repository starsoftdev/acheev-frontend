import { React } from 'react';
import styled from 'styled-components';
import { media } from '../../containers/common/styles'

export const ProfilePanelContainer= styled.div`
  display: grid;
  background-color: #eaeaea;
  justify-items: center;
  align-items: start;
  grid-template-rows: auto;


  ${media.extraSmall`
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
    grid-template-areas:
      "topLeft"
      "bottomLeft"
      "main";
  `};

  ${media.small`
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
    grid-template-areas:
      "topLeft"
      "bottomLeft"
      "main";
  `};

  ${media.medium`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    padding: 2em;
    grid-template-areas:
      "topLeft main"
      "bottomLeft main";

  `};

  ${media.large`
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    padding: 3em;
    grid-template-areas:
      "topLeft main main"
      "bottomLeft main main";
  `};


`

const Panel = styled.div`
  border: solid 1px #eaeaea;
  border-radius: 0.3em;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`
export const ProfileTopLeftPanel = styled(Panel)`
  width: 100%;
  max-width: 30em;
  grid-area: topLeft;
  ${media.large`
    justify-self: end;
  `};
`

export const ProfileBottomLeftPanel = styled(Panel)`
  width: 100%;
  max-width: 30em;
  grid-area: bottomLeft;
  ${media.large`
    justify-self: end;
  `};
`

export const ProfileMainPanel = styled(Panel)`
    width: 100%;
    grid-area: main;
    ${media.small`
      max-width: 30em;
    `};

    ${media.large`
      max-width: 60em;
      justify-self: start;
    `};
`
