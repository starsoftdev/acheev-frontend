import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import { Icon } from 'semantic-ui-react'

import { starsWithNumOfReviews } from '../../../consts/functions'

import {
  Page, Banner,
  BannerText, TopRow,
  ProfileColumnWrapper, EditProfileButton,
  BalanceAndOrderStatsColumn, BalanceContainer,
  Title, MoneyRow,
  MoneyRowWorking, MoneyRowPriceDollars,
  MoneyRowPriceCents, MoneyRowPrice,
  MoneyDescriptor, MoneyRowSeparator,
  MoneyDescriptorSubtext
} from './DashboardStyle'

import {
  ProfileTile, ProfilePhoto,
  ProfileName, ProfileTagLine,
  ScaledStars, ProfileSeparator,
  ProfileAttributeRow, ProfileAttributeKey,
  ProfileAttributeValue,
} from '../OrderCourse/OrderCourseStyle'

const heroImg = require('../../../assets/hero-image.png')

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
              </BalanceContainer>
            </BalanceAndOrderStatsColumn>
          </TopRow>
        </Page>
        <Footer />
      </div>
    )
  }
}

export default Dashboard

