import * as React from 'react'

class BaseImage extends React.Component {
  constructor(props) {
    super(props)
    this.src = props.src
    this.alt = props.alt
    this.title = props.title
  }

  render() {
    return <img src={this.src} alt={this.alt} title={this.title || this.alt} />
  }
}

export default BaseImage;