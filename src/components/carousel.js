import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function carousel() {
  return (
    <Carousel style={{marginBottom: '10px'}}>
      <Carousel.Item>
        <img style={{width :'100%', height :'500px'}} src='https://www.simplehelp.net/images/wuwp/uw-wallpaper01.jpg' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width :'100%', height :'500px', backgroundSize : 'cover'}} src='https://c4.wallpaperflare.com/wallpaper/826/586/471/ultrawide-space-blue-nature-wallpaper-preview.jpg' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width :'100%', height :'500px', backgroundSize : 'cover'}} src='https://i.redd.it/h4i2n38yuqgb1.jpg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;