import { React } from 'react';
import styled from 'styled-components';
import { media } from '../../containers/common/mixins'

export const ProfilePanelContainer= styled.div`
  display: grid;
  background-color: #eaeaea;
  justify-items: center;
  align-items: start;
  justify-content: center;
  grid-template-rows: auto;

  ${media.extraSmall`
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
    grid-column-gap: 0em;
    grid-template-areas:
      "topLeft"
      "bottomLeft"
      "main";
    padding: 0em;
  `};

  ${media.small`
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
    grid-column-gap: 0em;
    grid-template-areas:
      "topLeft"
      "bottomLeft"
      "main";
    padding: 1em;
  `};

  ${media.medium`
    grid-template-columns: 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-areas:
      "topLeft"
      "bottomLeft"
      "main"
    margin: 2em;
  `};

  ${media.large`
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-areas:
      "topLeft main"
      "bottomLeft main";
  `};

    padding: 4em;

`

const Panel = styled.div`
  border: solid 1px #eaeaea;
  border-radius: 0.3em;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);

  ${media.extraSmall`
    justify-self: center;
  `};

`

export const ProfileTopLeftPanel = styled(Panel)`
  width: 100%;
  max-width: 30em;
  grid-area: topLeft;

  ${media.large`
    justify-self: right;
  `};

`

export const ProfileBottomLeftPanel = styled(Panel)`
  width: 100%;
  max-width: 30em;
  grid-area: bottomLeft;

  ${media.large`
    justify-self: right;
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
      justify-self: left;
    `};
`
