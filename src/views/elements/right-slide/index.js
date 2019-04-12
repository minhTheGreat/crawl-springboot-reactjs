import React, { Component } from "react";
import Rightslide from "./rightslide";

class Index extends Component {
  render() {
    var rightslide = [
      {
        id: 1,
        name: "anh1",
        image: '/Flexor/img/right-slide/img20161217122845406.jpg',
        status: true
      },
      {
        id: 2,
        name: "anh2",
        image: "/Flexor/img/right-slide/banner-doc-26.03.2018.jpg",
        status: true
      },
      {
        id: 3,
        name: "anh2",
        image: "/Flexor/img/right-slide/aa4a44d9-534e-4353-9482-ff99721c4592 (1).jpg",
        status: true
      },
      {
        id: 4,
        name: "anh3",
        image: "/Flexor/img/right-slide/banner-quang-cao-banner.png",
        status: true
      },
      {
        id: 5,
        name: "anh4",
        image: "/Flexor/img/right-slide/quang-cao-facebook.gif",
        status: true
      }
    ];

    let elements = rightslide.map((rightslide, index) => {
        let result = '';
        if(rightslide.status){
            result =
                <Rightslide
                    key={rightslide.id}
                    name={rightslide.name}
                    image={rightslide.image}
                >
                </Rightslide>
        }
        return result;
      
    });

    return (
      <div id="content">
        <div className="container">
          {/*Right-Slide*/}
          <div className="right-slide">{elements}</div>
            <div>
                <img alt={this.props.name} src={this.props.image} /><br />
            </div>
        </div>
      </div>
    );
  }
}

export default Index;
