import React, { Component } from 'react';

// import { Instagram, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Navbar from './Navbar';
import Footer from './Footer';

type AppState = {
  currentImageIndex: number;
};

const images = [
  import.meta.env.BASE_URL + 'assets/home img.png',
  import.meta.env.BASE_URL + 'assets/home 2.png',
  import.meta.env.BASE_URL + 'assets/home 3.png',
];

class App extends Component<{}, AppState> {
  timer: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  componentDidMount() {
    this.startAutoScroll();
  }

  componentWillUnmount() {
    this.clearAutoScroll();
  }

  startAutoScroll = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
      }));
    }, 4000);
  };

  clearAutoScroll = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
    }));
    this.resetAutoScroll();
  };

  goToPrevSlide = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex - 1 + images.length) % images.length,
    }));
    this.resetAutoScroll();
  };

  goToSlide = (index: number) => {
    this.setState({ currentImageIndex: index });
    this.resetAutoScroll();
  };

  resetAutoScroll = () => {
    this.clearAutoScroll();
    this.startAutoScroll();
  };

  getImageObjectPosition = () => {
    const { currentImageIndex } = this.state;
    if (currentImageIndex === 0) {
      // home img.png: middle part
      return 'object-[center_40%]';
    }
    if (currentImageIndex === 1) {
      // home 2.png: top part
      return 'object-top';
    }
    if (currentImageIndex === 2) {
      // home 3.png: cut off some from top (adjust 30% as needed)
      return 'object-[center_30%]';
    }
    return '';
  };

  render() {
    const { currentImageIndex } = this.state;
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="min-h-screen bg-white">
                  {/* Hero Image Section */}
                  <div className="w-full h-[calc(100vh-100px)] relative overflow-hidden">
                    <img
                      src={images[currentImageIndex]}
                      alt={`Home Banner ${currentImageIndex + 1}`}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${this.getImageObjectPosition()}`}
                    />
                    {/* Navigation Arrows */}
                    <button
                      onClick={this.goToPrevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={this.goToNextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => this.goToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Product Grid Section */}
                  <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Product 1 */}
                      <div className="group p-4">
                        <Link to="/product/1">
                          <div className="relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                            <img src={import.meta.env.BASE_URL + "assets/1.jpg"} alt="Product 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          </div>
                        </Link>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">Product Name 1</h3>
                          <p className="text-gray-600">LKR 5,000</p>
                        </div>
                      </div>
                      {/* Product 2 */}
                      <div className="group p-4">
                        <Link to="/product/2">
                          <div className="relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                            <img src={import.meta.env.BASE_URL + "assets/2.jpg"} alt="Product 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          </div>
                        </Link>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">Product Name 2</h3>
                          <p className="text-gray-600">LKR 6,000</p>
                        </div>
                      </div>
                      {/* Product 3 */}
                      <div className="group p-4">
                        <Link to="/product/3">
                          <div className="relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                            <img src={import.meta.env.BASE_URL + "assets/3.jpg"} alt="Product 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          </div>
                        </Link>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">Product Name 3</h3>
                          <p className="text-gray-600">LKR 4,500</p>
                        </div>
                      </div>
                      {/* Product 4 */}
                      <div className="group p-4">
                        <Link to="/product/4">
                          <div className="relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                            <img src={import.meta.env.BASE_URL + "assets/4.jpg"} alt="Product 4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          </div>
                        </Link>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">Product Name 4</h3>
                          <p className="text-gray-600">LKR 5,500</p>
                        </div>
                      </div>
                      {/* Product 5 */}
                      <div className="group p-4">
                        <Link to="/product/5">
                          <div className="relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                            <img src={import.meta.env.BASE_URL + "assets/5.jpg"} alt="Product 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          </div>
                        </Link>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-medium">Product Name 5</h3>
                          <p className="text-gray-600">LKR 4,800</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/product/:id" element={<><Navbar /><ProductDetail /></>} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
