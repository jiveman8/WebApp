import React, { Component, PropTypes } from "react";

export default class ImageHandler extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    kind_of_ballot_item: PropTypes.string,
    sizeClassName: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.state = { error: false };
  }

  brokenLink (){
    this.setState({error: true});
  }

  render () {
    let this_class = this.props.className || null;
    let alt = this.props.alt || "icon";
    let replacementClass = "";
    let sizeClassName = this.props.sizeClassName || "";
    if (this.props.kind_of_ballot_item === "CANDIDATE") {
      replacementClass = "icon-main icon-icon-person-placeholder-6-1";
    } else if (this.props.kind_of_ballot_item === "MEASURE" || this.props.kind_of_ballot_item === "OFFICE"){
      return <i className="search-image__filler" />;
    } else {
      replacementClass = "icon-main icon-icon-org-placeholder-6-2";
    }

    const image = this.state.error || this.props.imageUrl === "" ?
      <i className={sizeClassName + replacementClass} /> :
      <img className={sizeClassName + this_class} src={this.props.imageUrl} alt={alt}
           onError={this.brokenLink.bind(this)} />;

    return image;
  }

}
