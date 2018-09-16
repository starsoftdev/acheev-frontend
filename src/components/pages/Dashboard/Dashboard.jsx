import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import { Icon } from 'semantic-ui-react'

import { starsWithNumOfReviews } from '../../../consts/functions'

import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

import {
  Page, Banner,
  BannerText, TopRow,
  ProfileColumnWrapper, EditProfileButton,
  BalanceAndOrderStatsColumn, BalanceContainer,
  Title, MoneyRow,
  MoneyRowWorking, MoneyRowPriceDollars,
  MoneyRowPriceCents, MoneyRowPrice,
  MoneyDescriptor, MoneyRowSeparator,
  MoneyDescriptorSubtext, BalanceBar,
  BalancePrice, WithdrawButton,
  StatsContainer, TitleContainer,
  ViewAll, OrderJobRow,
  OrderJobContainer, GrayRow,
  GrayRowContainer, GrayRowTitle,
  GrayRowRight, GrayRowRightText
} from './DashboardStyle'

import {
  ProfileTile, ProfilePhoto,
  ProfileName, ProfileTagLine,
  ScaledStars, ProfileSeparator,
  ProfileAttributeRow, ProfileAttributeKey,
  ProfileAttributeValue,
} from '../OrderCourse/OrderCourseStyle'

const heroImg = require('../../../assets/hero-image.png')

ReactChartkick.addAdapter(Chart)

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <Banner>
          <BannerText>Dashboard</BannerText>
        </Banner>
        <Page>
          <TopRow>
            <ProfileColumnWrapper>
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
                <EditProfileButton>
                  Edit Your Profile
                </EditProfileButton>
              </ProfileTile>
            </ProfileColumnWrapper>
            <BalanceAndOrderStatsColumn>
              <BalanceContainer>
                <Title>
                  Balance
                </Title>
                <MoneyRow>
                  <MoneyRowWorking>
                    <MoneyRowPrice>
                      <MoneyRowPriceDollars>$"PROPS"</MoneyRowPriceDollars>
                      <MoneyRowPriceCents>.props</MoneyRowPriceCents>
                    </MoneyRowPrice>
                    <MoneyDescriptor>
                      Working
                    </MoneyDescriptor>
                  </MoneyRowWorking>
                  <MoneyRowSeparator />
                  <MoneyRowWorking>
                    <MoneyRowPrice>
                      <MoneyRowPriceDollars>$"PROPS"</MoneyRowPriceDollars>
                      <MoneyRowPriceCents>.props</MoneyRowPriceCents>
                    </MoneyRowPrice>
                    <MoneyDescriptor>
                      Available
                    </MoneyDescriptor>
                    <MoneyDescriptorSubtext>Earning + <span style={{ color: "#2da3f2", fontWeight: "bold" }}>Top-Up</span></MoneyDescriptorSubtext>
                  </MoneyRowWorking>
                  <MoneyRowSeparator />
                  <MoneyRowWorking>
                    <MoneyRowPrice>
                      <MoneyRowPriceDollars>$"PROPS"</MoneyRowPriceDollars>
                      <MoneyRowPriceCents>.props</MoneyRowPriceCents>
                    </MoneyRowPrice>
                    <MoneyDescriptor>
                      Pending
                    </MoneyDescriptor>
                  </MoneyRowWorking>
                </MoneyRow>
                <BalanceBar>
                  <BalancePrice>
                    Total Balance: <span style={{ color: "#2da3f2" }}>$PROPS<span style={{ color: "rgba(45, 163, 242, 0.5)"}}>.pr</span></span>
                  </BalancePrice>
                  <WithdrawButton>
                    Withdraw Balance
                  </WithdrawButton>
                </BalanceBar>
              </BalanceContainer>
              <StatsContainer>
                <TitleContainer>
                  <Title>
                    Order Statistics
                  </Title>
                  <ViewAll>
                    View All
                  </ViewAll>
                </TitleContainer>
                <div style={{ marginTop: "20px" }}>
                  <LineChart data={[["2018-09-12 00:00:00 UTC", 5], ["2018-09-13 00:00:00 UTC", 6], ["2018-09-14 00:00:00 UTC", 2]]} height="300px" />
                </div>
              </StatsContainer>
            </BalanceAndOrderStatsColumn>
          </TopRow>
          <OrderJobRow>
            <OrderJobContainer>
              <TitleContainer>
                <Title>
                  My Orders
                </Title>
                <ViewAll>
                  View All
                </ViewAll>
              </TitleContainer>
              <GrayRowContainer>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
              </GrayRowContainer>
            </OrderJobContainer>
            <OrderJobContainer>
              <TitleContainer>
                <Title>
                  My Jobs
                </Title>
                <ViewAll>
                  View All
                </ViewAll>
              </TitleContainer>
              <GrayRowContainer>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
                <GrayRow>
                  <GrayRowTitle>From Props</GrayRowTitle>
                  <GrayRowRight>
                    <GrayRowRightText>Status from props</GrayRowRightText>
                    <GrayRowRightText>$from props</GrayRowRightText>
                    <Icon name="arrow right" style={{ color: "#737373", fontSize: "14px" }}/>
                  </GrayRowRight>
                </GrayRow>
              </GrayRowContainer>
            </OrderJobContainer>
          </OrderJobRow>
        </Page>
        <Footer />
      </div>
    )
  }
}

export default Dashboard

