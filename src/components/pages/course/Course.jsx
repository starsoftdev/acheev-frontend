import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

class Course extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Course