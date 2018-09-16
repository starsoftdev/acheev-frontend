import styled from 'styled-components';

export const Tile = styled.div`
  width: 270px;
  height: 343px;
  border-radius: 10px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
`;

export const Image = styled.div`
  width: 268px;
  height: 146px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url('${props => props.Img}')
`;

export const AuthorAndPicRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

export const AuthorPic = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  background-image: url('${props => props.authorImg}')
`;

export const Author = styled.span`
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
  margin-left: 5px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-left: 20px;
  margin-top: 10px;
`;

export const StarRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const Rating = styled.span`
  opacity: 0.5;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`

export const Divider = styled.hr`
  width: 230px;
  opacity: 0.15;
  margin-top: 15px;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  justify-content: space-between;
`;

export const BottomRowLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;