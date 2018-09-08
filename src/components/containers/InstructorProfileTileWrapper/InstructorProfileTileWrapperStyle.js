import styled from 'styled-components';

export const InstructorTile = styled.div`
  width: 350px;
  height: 435px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InstructorImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-image: url('${props => props.backgroundImg}');
  margin-top: 30px;
`;

export const InstructorName = styled.span`
  margin-top: 20px;
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
`;

export const InstructorSpecialties = styled.span`
  margin-top: 15px;
  height: 22px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
  padding-bottom: 3em;
`;

export const StudentsAndCoursesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-top: 3em;
`;

export const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudentNumber = styled.span`
  width: 150px;
  height: 22px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.92;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
`;

export const StudentNumberLabel = styled.span`
  width: 150px;
  height: 22px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
`;

export const NumberOfCourses = styled.span`
  width: 150px;
  height: 22px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.92;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
`;

export const NumberOfCoursesLabel = styled.span`
  width: 150px;
  height: 22px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
`;