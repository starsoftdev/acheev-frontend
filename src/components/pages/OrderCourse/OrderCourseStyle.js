import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

export const OrderCourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-wrap: none;
  background-color: #f8f8fb;
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  margin-left: 135px;
  padding-bottom: 20px;
  margin-right: 30px;
`;

export const ProfileTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  padding-bottom: 20px;
`;

export const ProfilePhoto = styled.div`
  margin-top: 30px;
  height: 120px;
  width: 120px;
  background-image: url('${props => props.img}');
  border-radius: 100%;
`;

export const ProfileName = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
  margin-top: 20px;
`;

export const ProfileTagLine = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
  margin-top: 15px;
`;

export const ScaledStars = styled.div`
  margin-top: 20px;
  zoom: 1.25;
  -moz-transform: scale(0.5);
`;

export const ProfileButton = styled(Button)`
  width: 290px;
  height: 50px;
  border-radius: 5px;
  background-image: linear-gradient(95deg, #2da2f2, #006494) !important;
  color: white !important;
  margin-top: 35px !important;
`;

export const ProfileSeparator = styled.div`
  width: 330px;
  height: 2px;
  opacity: 0.15;
  border: solid 1px #14293d;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const ProfileAttributeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const ProfileAttributeKey = styled.span`
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const ProfileAttributeValue = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;

export const BelowProfileTile = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  width: 370px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const TitleSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-bottom: 30px;
  width: 100%;
`;

export const VerifiedRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  color: rgba(20, 41, 61, 0.65);
  margin-bottom: 10px;
`;

export const VerifiedRowText = styled.span`
  position: relative;
  bottom: 1px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
  padding-left: 12px;
`;

export const DescriptionContainer = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
`;

export const BelowProfileSeparator = styled.span`
  width: 330px;
  height: 2px;
  opacity: 0.15;
  border: solid 1px #14293d;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ServiceContainer = styled.div`
  height: 58px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

export const ServiceContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ServiceContainerHeader = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const ServiceContainerSubText = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.5);
`;

export const ServiceContainerPrice = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2da3f2;
`;

export const ServiceContainerArrow = styled.div`
  padding-top: 8px;
  margin-right: 22px;
  color: black;
`;

export const CourseColumn = styled.div`
  width: 770px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  display: flex;
  flex-direction: column;
`;

export const CourseHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  justify-content: space-between;
  margin-top: 30px;
`;

export const CourseHeaderTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const CourseHeaderReviewHolder = styled.div`
  margin-right: 40px;
`;

export const CourseHeaderReviewText = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: right;
  color: rgba(20, 41, 61, 0.65);
  position: relative;
  bottom: 6px;
  margin-right: 10px;
`;

export const CourseHeaderSubtext = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
  margin-top: 12px;
  margin-left: 40px;
`;

export const MainImage = styled.div`
  background-image: url('${props => props.img}');
  width: 100%;
  height: 400px;
  margin-top: 20px;
`

export const ImagePreviewHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImagePreview = styled.div`
  background-image: url('${props => props.img}');
  width: 154px;
  height: 100px;
  margin: auto;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-left: 40px;
  margin-top: 100px;
`;

export const SubscriptionTileHolder = styled.div`
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubscriptionTileSideLeft = styled.div`
  width: 240px;
  height: 391px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubscriptionTileSideRight = styled.div`
  width: 240px;
  height: 391px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  border-left: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubscriptionTileMiddle = styled.div`
  width: 250px;
  height: 420px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubscriptionTileTitle = styled.span`
  margin-top: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
`;

export const SubscriptionTilePrice = styled.span`
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
`;

export const SubscriptionTileSubtextOne = styled.span`
  opacity: 0.5;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
  margin-top: 25px;
`;

export const SubscriptionTileSubtextTwo = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0.5;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
`;

export const SubscriptionTileCheckRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const SubscriptionTileCheckRowText = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-left: 5px;
`;

export const SubscriptionTileDurationAndDelivery = styled.span`
  margin-top: 10px;
  opacity: 0.5;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
`;

export const SubscriptionTileButtonBlue = styled(Button)`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background-image: linear-gradient(97deg, #2da2f2, #006494) !important;
  margin-top: 15px !important;
  color: white !important;
`;

export const SubscriptionTileButtonClear = styled(Button)`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px rgba(20, 41, 61, 0.43) !important;
  background-color: white !important;
  margin-top: 15px !important;
  color: #2da3f2 !important;
`;

export const AboutTitle = styled.span`
  margin-top: 90px;
  margin-left: 40px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const AboutDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AboutBriefDescription = styled.p`
  margin-left: 40px;
  width: 260px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
`;

export const AboutFullDescription = styled.p`
  margin-left: 30px;
  width: 400px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
`;

export const AccordionPadding = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;