import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://i.ibb.co/4sPC32f/image.png",
  "https://i.ibb.co/Dwj7BjP/image-1.png",
  "https://i.ibb.co/k9659RJ/image-6.png",

];

function App() {
  const [index, setIndex] = React.useState(0);


  return (
    <Gallery
      style={{
        background: "white",
        height: "60vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >



        

      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}





    </Gallery>

    
  );

  
}

export default App

class Slider extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
    render() {
      return (
        <div className="color: green">
  
          <div className="m-64"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </div>
  
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />
  
          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    }
  }
  
  
  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }
  
  
  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="position:absolute" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }