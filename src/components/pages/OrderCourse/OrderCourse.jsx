import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { UnownedCourseTileWrapper } from '../../containers/UnownedCourseTileWrapper/UnownedCourseTileWrapper';

import { Accordion, Icon, Dropdown } from 'semantic-ui-react'

import {
  stars, starsWithNumOfReviews,
  starsWithNoNumber
} from '../../../consts/functions'

import {
  OrderCourseContainer, ProfileColumn,
  ProfileTile, ProfilePhoto,
  ProfileName, ProfileTagLine,
  ScaledStars, ProfileButton,
  ProfileSeparator, ProfileAttributeRow,
  ProfileAttributeKey, ProfileAttributeValue,
  BelowProfileTile, TitleSpan,
  BelowProfileSeparator, DescriptionContainer,
  ServiceContainer, ServiceContainerText,
  ServiceContainerHeader, ServiceContainerSubText,
  ServiceContainerPrice, ServiceContainerArrow,
  VerifiedRow, VerifiedRowText,
  CourseColumn, CourseHeader,
  CourseHeaderTitle, CourseHeaderReviewHolder,
  CourseHeaderReviewText, CourseHeaderSubtext,
  MainImage, ImagePreviewHolder,
  ImagePreview, Title,
  SubscriptionTileSideLeft, SubscriptionTileSideRight,
  SubscriptionTileMiddle, SubscriptionTileHolder,
  SubscriptionTileTitle, SubscriptionTilePrice,
  SubscriptionTileSubtextOne, SubscriptionTileSubtextTwo,
  SubscriptionTileCheckRow, SubscriptionTileCheckRowText,
  SubscriptionTileDurationAndDelivery, SubscriptionTileButtonBlue,
  SubscriptionTileButtonClear, AboutTitle,
  AboutDescriptionContainer, AboutBriefDescription,
  AboutFullDescription, AccordionPadding,
  ReviewHeaderContainer, ReviewTitle,
  CourseTileTitle, CourseContainer,
  LowerBody, ScaledCourse,
  ThreeReviewContainer, LeftReviewBlock,
  MiddleReviewBlock, RightReviewBlock,
  ReviewBlockTitle, DetailedReviewRow,
  ReviewPersonPic, ReviewText,
  DetailedReviewTitle, ReviewDescription,
  ShrinkStars, TimeSinceReview,
  ReviewTopContainer, ReviewDivider
} from './OrderCourseStyle'

const heroImg = require('../../../assets/hero-image.png')

class OrderCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  renderCreatorsOtherGigs = () => {
    return (
      <CourseContainer>
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
        </ScaledCourse>
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
        </ScaledCourse>
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
        </ScaledCourse>
      </CourseContainer>
    )
  }

  renderRecommended = () => {
    return (
      <CourseContainer>
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
        </ScaledCourse>
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
        </ScaledCourse>
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
        </ScaledCourse>
      </CourseContainer>
    )
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div>
        <Header />
          <OrderCourseContainer>
            <ProfileColumn>
              <ProfileTile>
                <ProfilePhoto img={heroImg} />
                <ProfileName>
                  Name from props
                </ProfileName>
                <ProfileTagLine>
                  Tagline from props
                </ProfileTagLine>
                <ScaledStars>
                  {starsWithNumOfReviews(4, 234)}
                </ScaledStars>
                <ProfileButton>
                  Contact Me
                </ProfileButton>
                <ProfileSeparator />
                <ProfileAttributeRow>
                  <ProfileAttributeKey>
                  <Icon name='point' />From
                  </ProfileAttributeKey>
                  <ProfileAttributeValue>
                    Location from props
                  </ProfileAttributeValue>
                </ProfileAttributeRow>
                <ProfileAttributeRow>
                  <ProfileAttributeKey>
                  <Icon name='user' /> Member Since
                  </ProfileAttributeKey>
                  <ProfileAttributeValue>
                    Year from props
                  </ProfileAttributeValue>
                </ProfileAttributeRow>
                <ProfileAttributeRow>
                  <ProfileAttributeKey>
                  <Icon name='clock' /> Avg. Response Time
                  </ProfileAttributeKey>
                  <ProfileAttributeValue>
                    Time from props
                  </ProfileAttributeValue>
                </ProfileAttributeRow>
                <ProfileAttributeRow>
                  <ProfileAttributeKey>
                  <Icon name='paper plane' /> Recent Delivery
                  </ProfileAttributeKey>
                  <ProfileAttributeValue>
                    About 'time from props'
                  </ProfileAttributeValue>
                </ProfileAttributeRow>
              </ProfileTile>
              <BelowProfileTile>
                <TitleSpan>
                  Pro Verified In
                </TitleSpan>
                <VerifiedRow>
                  <i class="fa fa-check-circle"></i><VerifiedRowText>From props</VerifiedRowText>
                </VerifiedRow>
                <VerifiedRow>
                  <i class="fa fa-check-circle"></i><VerifiedRowText>From props</VerifiedRowText>
                </VerifiedRow>
                <VerifiedRow>
                  <i class="fa fa-check-circle"></i><VerifiedRowText>From props</VerifiedRowText>
                </VerifiedRow>
                <BelowProfileSeparator />
                <TitleSpan>
                  Description
                </TitleSpan>
                <DescriptionContainer>
                  Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props.
                </DescriptionContainer>
                <BelowProfileSeparator />
                <TitleSpan>
                  Other "Category from props" Services I Offer
                </TitleSpan>
                <ServiceContainer>
                  <ServiceContainerText>
                    <ServiceContainerHeader>
                      Service From Props
                    </ServiceContainerHeader>
                    <ServiceContainerSubText>
                      Starting At <ServiceContainerPrice>$PR.OP</ServiceContainerPrice>
                    </ServiceContainerSubText>
                  </ServiceContainerText>
                  <ServiceContainerArrow>
                    <i class="fa fa-arrow-right fa-2x"></i>
                  </ServiceContainerArrow>
                </ServiceContainer>
                <ServiceContainer>
                  <ServiceContainerText>
                    <ServiceContainerHeader>
                      Service From Props
                    </ServiceContainerHeader>
                    <ServiceContainerSubText>
                      Starting At <ServiceContainerPrice>$PR.OP</ServiceContainerPrice>
                    </ServiceContainerSubText>
                  </ServiceContainerText>
                  <ServiceContainerArrow>
                    <i class="fa fa-arrow-right fa-2x"></i>
                  </ServiceContainerArrow>
                </ServiceContainer>
                <ServiceContainer>
                  <ServiceContainerText>
                    <ServiceContainerHeader>
                      Service From Props
                    </ServiceContainerHeader>
                    <ServiceContainerSubText>
                      Starting At <ServiceContainerPrice>$PR.OP</ServiceContainerPrice>
                    </ServiceContainerSubText>
                  </ServiceContainerText>
                  <ServiceContainerArrow>
                    <i class="fa fa-arrow-right fa-2x"></i>
                  </ServiceContainerArrow>
                </ServiceContainer>
              </BelowProfileTile>
            </ProfileColumn>
            <CourseColumn>
              <CourseHeader>
                <CourseHeaderTitle>
                  Course Title From Props
                </CourseHeaderTitle>
                <CourseHeaderReviewHolder>
                  <CourseHeaderReviewText>
                    Review From Props
                  </CourseHeaderReviewText>
                  <span className="fa fa-star checked fa-2x"></span>
                </CourseHeaderReviewHolder>
              </CourseHeader>
              <CourseHeaderSubtext>
                Subtext from props
              </CourseHeaderSubtext>
              <MainImage img={heroImg} />
              <ImagePreviewHolder>
                <ImagePreview img={heroImg} />
                <ImagePreview img={heroImg} />
                <ImagePreview img={heroImg} />
                <ImagePreview img={heroImg} />
                <ImagePreview img={heroImg} />
              </ImagePreviewHolder>
              <Title>
                Subscriptions
              </Title>
              <SubscriptionTileHolder>
                <SubscriptionTileSideLeft>
                  <SubscriptionTileTitle>
                    Premium
                  </SubscriptionTileTitle>
                  <SubscriptionTilePrice>
                    $1,200
                  </SubscriptionTilePrice>
                  <SubscriptionTileSubtextOne>
                    3 MONTHS 90 DAYS 5 POSTS/WEEK
                  </SubscriptionTileSubtextOne>
                  <SubscriptionTileSubtextTwo>
                    All from props
                  </SubscriptionTileSubtextTwo>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileDurationAndDelivery>
                    Duration from props
                  </SubscriptionTileDurationAndDelivery>
                  <SubscriptionTileDurationAndDelivery>
                    Delivery time from props
                  </SubscriptionTileDurationAndDelivery>
                  <SubscriptionTileButtonClear>Submit</SubscriptionTileButtonClear>
                </SubscriptionTileSideLeft>
                <SubscriptionTileMiddle>
                  <SubscriptionTileTitle>
                      Standard
                  </SubscriptionTileTitle>
                  <SubscriptionTilePrice>
                    $400
                  </SubscriptionTilePrice>
                  <SubscriptionTileSubtextOne>
                    30 DAYS 7 POSTS/WEEK
                  </SubscriptionTileSubtextOne>
                  <SubscriptionTileSubtextTwo>
                    All from props
                  </SubscriptionTileSubtextTwo>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileDurationAndDelivery>
                    Duration from props
                  </SubscriptionTileDurationAndDelivery>
                  <SubscriptionTileDurationAndDelivery>
                    Delivery time from props
                  </SubscriptionTileDurationAndDelivery>
                  <SubscriptionTileButtonBlue>Submit</SubscriptionTileButtonBlue>
                </SubscriptionTileMiddle>
                <SubscriptionTileSideRight>
                  <SubscriptionTileTitle>
                    Basic
                  </SubscriptionTileTitle>
                  <SubscriptionTilePrice>
                    $300
                  </SubscriptionTilePrice>
                  <SubscriptionTileSubtextOne>
                    BASIC 30 DAYS 3 POSTS/WEEK
                  </SubscriptionTileSubtextOne>
                  <SubscriptionTileSubtextTwo>
                    All from props
                  </SubscriptionTileSubtextTwo>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileCheckRow>
                    <i className="fa fa-check-circle" style={{ color: "#2da3f2" }}></i><SubscriptionTileCheckRowText>Info Props</SubscriptionTileCheckRowText>
                  </SubscriptionTileCheckRow>
                  <SubscriptionTileDurationAndDelivery>
                    Duration from props
                  </SubscriptionTileDurationAndDelivery>
                  <SubscriptionTileDurationAndDelivery>
                    Delivery time from props
                  </SubscriptionTileDurationAndDelivery>
                  <SubscriptionTileButtonClear>Submit</SubscriptionTileButtonClear>
                </SubscriptionTileSideRight>
              </SubscriptionTileHolder>
              <AboutTitle>
                About This Gig
              </AboutTitle>
              <AboutDescriptionContainer>
                <AboutBriefDescription>
                  This Gig is for 1 x month as your Digital Marketing Manager.<br /><br />
                  I pride the success of my business on offering my clients a clear and straightforward approach to online marketing that gets solid results<br /><br />

                  Keep your social media pages up to date with captivating posts that make potential customers engage with your business
                </AboutBriefDescription>
                <AboutFullDescription>
                WHAT CAN YOU EXPECT:<br />

                  - 1 months of Social Media Marketing done for you<br />
                  - Posts by a graphic designer<br />
                  - Posts by a Content writer, on brand and on point<br />
                  - Promoting your brand, products/services/promotional content<br />
                  - Post Types: Images<br />
                  - Posts are optimized with hashtags & business information<br />
                  - Facebook, Twitter, LinkedIn, Pinterest, Google+, Instagram<br />
                  - Creation/Optimisation of Social Media Pages<br />
                  - Drive traffic to your website/lead generation<br />
                  - Leverage Brand Authority & Awareness<br />
                  - Posts scheduled days of your choice<br />
                  - Dashboard to track your return on investment<br /><br />

                  Choose from 3 Gigs<br />
                  - 3 Days a week<br />
                  - 7 Days a week<br />
                  - 5 days a week (3 months in advance)
                </AboutFullDescription>
              </AboutDescriptionContainer>
              <AboutTitle>
                Frequently Asked Questions
              </AboutTitle>
              <AccordionPadding>
                <Accordion fluid styled>
                  <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Question From Props
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <p>
                      Answer From Props
                    </p>
                  </Accordion.Content>

                  <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Question From Props
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <p>
                      Answer From Props
                    </p>
                  </Accordion.Content>

                  <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Question from props
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Here is the
                    </p>
                    <p>
                     Answer from props
                    </p>
                  </Accordion.Content>
                </Accordion>
              </AccordionPadding>
              <ReviewHeaderContainer>
                <ReviewTitle>
                  Reviews
                </ReviewTitle>
                <div style={{ display: 'inline-flex'}}>
                  {stars(4)}
                  <Dropdown text='Most Recent' style={{ marginLeft: '15px', marginRight: '40px' }}>
                    <Dropdown.Menu>
                      <Dropdown.Item text='Most Helpful' />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ReviewHeaderContainer>
              <ThreeReviewContainer>
                <LeftReviewBlock>
                  {starsWithNoNumber(4)}
                  <ReviewBlockTitle>
                    Seller Communication
                  </ReviewBlockTitle>
                </LeftReviewBlock>
                <MiddleReviewBlock>
                  {starsWithNoNumber(4)}
                  <ReviewBlockTitle>
                    Service As Described
                  </ReviewBlockTitle>
                </MiddleReviewBlock>
                <RightReviewBlock>
                  {starsWithNoNumber(4)}
                  <ReviewBlockTitle>
                    Would Recommend
                  </ReviewBlockTitle>
                </RightReviewBlock>
              </ThreeReviewContainer>
              <DetailedReviewRow>
                <ReviewPersonPic img={heroImg} />
                <ReviewText>
                  <ReviewTopContainer>
                    <div style={{ display: "inherit" }}>
                    <DetailedReviewTitle>
                      Title from props
                    </DetailedReviewTitle>
                    <ShrinkStars>{stars(4)}</ShrinkStars>
                    </div>
                    <TimeSinceReview>Props days ago</TimeSinceReview>
                  </ReviewTopContainer>
                  <ReviewDescription>
                    Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props.
                  </ReviewDescription>
                </ReviewText>
              </DetailedReviewRow>
              <ReviewDivider />
              <DetailedReviewRow>
                <ReviewPersonPic img={heroImg} />
                <ReviewText>
                  <ReviewTopContainer>
                    <div style={{ display: "inherit" }}>
                    <DetailedReviewTitle>
                      Title from props
                    </DetailedReviewTitle>
                    <ShrinkStars>{stars(4)}</ShrinkStars>
                    </div>
                    <TimeSinceReview>Props days ago</TimeSinceReview>
                  </ReviewTopContainer>
                  <ReviewDescription>
                    Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props.
                  </ReviewDescription>
                </ReviewText>
              </DetailedReviewRow>
              <ReviewDivider />
              <DetailedReviewRow>
                <ReviewPersonPic img={heroImg} />
                <ReviewText>
                  <ReviewTopContainer>
                    <div style={{ display: "inherit" }}>
                    <DetailedReviewTitle>
                      Title from props
                    </DetailedReviewTitle>
                    <ShrinkStars>{stars(4)}</ShrinkStars>
                    </div>
                    <TimeSinceReview>Props days ago</TimeSinceReview>
                  </ReviewTopContainer>
                  <ReviewDescription>
                    Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props. Description from props.
                  </ReviewDescription>
                </ReviewText>
              </DetailedReviewRow>
              <ReviewDivider />
            </CourseColumn>
          </OrderCourseContainer>
          <LowerBody>
            <CourseTileTitle>
              Other Gigs By Props.Author
            </CourseTileTitle>
            {this.renderCreatorsOtherGigs()}
            <CourseTileTitle>
              Recommended For You In Props.Category
            </CourseTileTitle>
            {this.renderRecommended()}
          </LowerBody>
        <Footer />
      </div>
    )
  }
}

export default OrderCourse