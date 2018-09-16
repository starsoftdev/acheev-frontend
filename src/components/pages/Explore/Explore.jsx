import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { SearchCourseTile } from '../../containers/SearchCourseTile/SearchCourseTile'

import { Radio } from 'semantic-ui-react'

import {
  TopBanner, AboveHeader,
  HeaderText, Page,
  FilterColumn, CourseColumn,
  SearchColumnTitle, SearchColumnRow,
  FilterTitle
} from './ExploreStyle'

const heroImg = require('../../../assets/hero-image.png')

class Explore extends React.Component {
  constructor(props) {
    super(props)

  }

  renderCourseTiles = () => {
    let array = [
      {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }, {
        img: heroImg,
        authorImg: heroImg,
        author: "Author from props",
        title: "The title of the course is recieved from the props",
        rating: "3.7",
        price: "450"
      }
    ]

    return (
      array.map((item, i) => {
        return(
          <div 
            key={i}
            style={{ marginRight: "30px", marginBottom: "30px" }}
          >
            <SearchCourseTile
              img={item.img}
              authorImg={item.authorImg}
              author={item.author}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          </div>
        )
      })

    )
  }

  render() {
    return (
      <div>
        <Header />
        <TopBanner>
          <AboveHeader>
            <span style={{ color: "#ffffff", margin: "auto" }}>Number</span> searches were found from filtering
          </AboveHeader>
          <HeaderText>
            Search From Props
          </HeaderText>
        </TopBanner>
        <Page>
          <FilterColumn>
            <FilterTitle>
              Delivery Time
            </FilterTitle>
              <Radio name="Radio" label="Up to 24 hours" style={{ color: "rgba(20, 41, 61, 0.65) !important" }}/>
              <Radio name="Radio" label="Up to 3 days" />
              <Radio name="Radio" label="Up to 7 days" />
              <Radio name="Radio" label="Any" />
          </FilterColumn>
          <CourseColumn>
            <SearchColumnTitle>
              Search Filter Result
            </SearchColumnTitle> 
            <SearchColumnRow>
              {this.renderCourseTiles()}
            </SearchColumnRow>
          </CourseColumn>
        </Page>
        <Footer />
      </div>
    )
  }
}

export default Explore