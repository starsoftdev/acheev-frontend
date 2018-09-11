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

export const CourseDetails = styled.div`
  background-color: white;
  padding-left: 135px;
  padding-right: 135px;
  display: flex;
  flex-direction: row;
  width: 100%
  padding-bottom: 100px;
`;

export const CourseDetailsIntroHowItWorks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-left: 20px;
  margin-top: 50px;
`;

export const SectionBody = styled.div`
  width: 770px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.07;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
  margin-top: 20px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export const StudentReviews = styled.span`
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const AboutInstructor = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const Separator = styled.div`
  width: 300px;
  height: 0.1px;
  opacity: 0.15;
  border: solid 1px #353d55;
  margin-left: 35px;
`;

export const InstructorName = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-top: 30px;
  margin-left: 35px;
`;

export const InstructorDetails = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.07;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
  margin-top: 20px;
  margin-left: 35px;
  margin-bottom: 30px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 35px;
  margin-top: 25px;
`;

export const SkillTile = styled.div`
  border-radius: 1px;
  background-color: rgba(248, 248, 251, 0.25);
  border: solid 1px rgba(53, 61, 85, 0.15);
  padding: 3px 8px 3px 8px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const SkillTileText = styled.span`
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #14293d;
`;

export const RelatedClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
  padding-left: 155px;
  padding-right: 155px;
`;

export const RelatedClassesHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RelatedClassesTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const ViewAll = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;

export const CourseHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 100px;
`