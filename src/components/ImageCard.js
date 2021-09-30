import React, { Component } from "react";

export class ImageCard extends Component {
  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div>
        <img alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
