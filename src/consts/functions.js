import React from 'react'

export const stars = (rating) => {
  if (rating === 5) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="star-rating">5.0</span>
      </div>
    )
  }
  if (rating === 4) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="star-rating">4.0</span>
      </div>
    )
  }
  if (rating === 3) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="star-rating">3.0</span>
      </div>
    )
  }
  if (rating === 2) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="star-rating">2.0</span>
      </div>
    )
  }
  if (rating === 1) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="fa fa-star fa-lg"></span>
        <span className="star-rating">1.0</span>
      </div>
    )
  }
  if (rating === 0) {
    return (
      <div>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="star-rating">0</span>
      </div>
    )
  }
}

export const starsWithNumOfReviews = (rating, reviews) => {
  if (rating === 5) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          </div>
        <span className="star-rating" style={{ marginTop: "5px" }}>5.0 ({reviews} reviews)</span>
      </div>
    )
  }
  if (rating === 4) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
        </div>
        <span className="star-rating" style={{ marginTop: "5px" }}>4.0 ({reviews} reviews)</span>
      </div>
    )
  }
  if (rating === 3) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
        </div>
        <span className="star-rating" style={{ marginTop: "5px" }}>3.0 ({reviews} reviews)</span>
      </div>
    )
  }
  if (rating === 2) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
        </div>
        <span className="star-rating" style={{ marginTop: "5px" }}>2.0 ({reviews} reviews)</span>
      </div>
    )
  }
  if (rating === 1) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <span className="fa fa-star checked fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
          <span className="fa fa-star fa-lg"></span>
        </div>
        <span className="star-rating" style={{ marginTop: "5px" }}>1.0 ({reviews} reviews)</span>
      </div>
    )
  }
  if (rating === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <span className="star-rating" style={{ marginTop: "5px" }}>0 ({reviews} reviews)</span>
      </div>      
    )
  }
}

export const starsWithNoNumber = (rating) => {
  if (rating === 5) {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 4) {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 3) {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 2) {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 1) {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
      </div>
    )
  }
  if (rating === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
}

export const starsWithNoNumberOrStyling = (rating) => {
  if (rating === 5) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 4) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 3) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 2) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
  if (rating === 1) {
    return (
      <div>
        <span className="fa fa-star checked fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
        <span className="fa fa-star fa-lg" style={{ fontSize: "25px", paddingRight: "5px" }} ></span>
      </div>
    )
  }
  if (rating === 0) {
    return (
      <div>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
        <span className="fa fa-star" style={{ fontSize: "25px", paddingRight: "5px" }}></span>
      </div>
    )
  }
}