import styled from 'styled-components';

export const PositiveReviewCircle = styled.div`
  width: 50px;
  height: 50px;
  background-image: linear-gradient(116deg, #2da2f2, #006494);
  box-shadow: 0 3px 10px 0 rgba(45, 162, 242, 0.5);
  border-radius: 100%;
  text-align: center;
  margin-right: 35px;
`;

export const NegativeReviewCircle = styled.div`
  width: 50px;
  height: 50px;
  background-image: linear-gradient(315deg, #ffa7ab, #ff6e73);
  border-radius: 100%;
  text-align: center;
  margin-right: 35px;
`;

export const ReviewRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewBody = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.07;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
`;

export const ReviewAuthor = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.07;
  letter-spacing: normal;
  color: #14293d;
`;