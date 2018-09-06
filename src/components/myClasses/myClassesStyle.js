import { React } from 'react';
import styled from 'styled-components';

export const TopBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(97deg, #2da2f2, #006494);
  align-items: center;
  height: 12.5em;
`;

export const TabHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  margin-top: auto;
`;

export const CourseHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f8f8fb;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const BannerHeader = styled.h1`
  color: white;
  margin-top: auto;
`;

export const TabItem = styled.span`
  color: rgba(255, 255, 255, 0.65);
`;