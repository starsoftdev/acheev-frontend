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