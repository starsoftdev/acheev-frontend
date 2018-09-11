import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 480px;
  background-image: linear-gradient(108deg, #2da2f2, #006494);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StudentsWatching = styled.span`
  height: 22px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 50px;
`;

export const Title = styled.span`
  width: 975px;
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
`;

export const AttributesRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Attribute = styled.div`
  height: 22px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 0.65);
  margin-right: 22px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #f8f8fb;
`;

export const CoursePlayerAndPlaylist = styled.div`
  width: 1170px;
  height: 500px;
  border-radius: 2px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: none;
  margin-top: -210px;
`;

export const CoursePlayer = styled.div`
  width: 875px;
  height: 500px;
  border-radius: 2px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: none;
  background-image: url('${props => props.img}')
`;

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  
`;