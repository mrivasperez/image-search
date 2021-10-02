import React, { Component } from "react";

export class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // create reference to image to get the properties of the image dynamically
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // get the height of image when the page is updated after getting image
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // get height of each ImageList
    const imageHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imageHeight / 10);
    // set the spans in the state object
    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
