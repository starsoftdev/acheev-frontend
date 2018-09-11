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

export const TabsBelowVideo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  width 80%;
`;

export const ProjectTabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectTabItem = styled.span`
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
  margin-right: 40px;
  padding-bottom: 40px;
`;

export const CourseModifierTabContainer = styled.div`
  border-radius: 1px;
  background-color: rgba(248, 248, 251, 0.25);
  border: solid 1px rgba(53, 61, 85, 0.15);
  margin-right: 24px;
  padding: 3px 8px 3px 8px;
  position: relative;
  top: -10px;
  height: 35px;
`;

export const CourseModifierTabs = styled.span`
  width: 103px;
  height: 20px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;
