import React, { Component } from "react";

export class ImageCard extends Component {
  constructor(props) {
    super(props);
    // create reference to image to get the properties of the image
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // get the height of image when the page is updated after getting image
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // get heigh of each ImageList
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
