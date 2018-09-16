import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { SearchCourseTile } from '../../containers/SearchCourseTile/SearchCourseTile'

import { 
  Radio, Checkbox,
  Dropdown
} from 'semantic-ui-react'

import {
  TopBanner, AboveHeader,
  HeaderText, Page,
  FilterColumn, CourseColumn,
  SearchColumnTitle, SearchColumnRow,
  FilterTitle, FilterSeparator,
  PriceInputs,
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
    const locations = [
      {
        key: "NA",
        value: "NA",
        text: "North America"
      }, {
        key: "SA",
        value: "SA",
        text: "South America"
      }, {
        key: "EU",
        value: "EU",
        text: "Europe"
      }, {
        key: "AS",
        value: "AS",
        text: "Asia"
      }, {
        key: "AU",
        value: "AU",
        text: "Australia"
      }, {
        key: "AF",
        value: "AF",
        text: "Africa"
      }, {
        key: "AC",
        value: "AC",
        text: "Antarctica"
      }
    ]

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
            <Radio name="Radio" style={{ marginTop: "20px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)", fontSize: "14px" }}>Up to 24 hours</label>}/>
            <Radio name="Radio" style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Up to 3 days</label>} />
            <Radio name="Radio" style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Up to 7 days</label>} />
            <Radio name="Radio" style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Any</label>} />
            <FilterSeparator />
            <FilterTitle>
              Price Range
            </FilterTitle>
            <PriceInputs placeholder="Minimum Price" style={{ marginTop: "10px" }} />
            <PriceInputs placeholder="Maximum Price" />
            <FilterSeparator />
            <FilterTitle>
              Status
            </FilterTitle>
            <Checkbox style={{ marginTop: "20px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Online</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Offline</label>} />
            <FilterSeparator />
            <FilterTitle>
              Style
            </FilterTitle>
            <Checkbox style={{ marginTop: "20px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Versatile</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Minimalist</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Elegant</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>3 Dimension</label>} />
            <FilterSeparator />
            <FilterTitle>
              File Format
            </FilterTitle>
            <Checkbox style={{ marginTop: "20px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>JPG</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>PNG</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>PDF</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>SVG</label>} />
            <FilterSeparator />
            <FilterTitle>
              Seller Level
            </FilterTitle>
            <Checkbox style={{ marginTop: "20px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Level 1</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Level 2</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Top Rated Seller</label>} />
            <FilterSeparator />
            <FilterTitle>
              Seller Language
            </FilterTitle>
            <Checkbox style={{ marginTop: "20px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>English</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Spanish</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Portugese</label>} />
            <Checkbox style={{ marginTop: "10px" }} label={<label style={{ color: "rgba(20, 41, 61, 0.65)" }}>Indonesian</label>} />
            <FilterSeparator />
            <FilterTitle>
              Seller Location
            </FilterTitle>
            <Dropdown style={{ marginTop: "20px", width: "250px" }} placeholder='Location' fluid multiple search selection options={locations} />
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