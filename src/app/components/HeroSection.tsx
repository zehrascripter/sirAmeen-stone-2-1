// E:\giaic Q-2\milestone-3\src\app\components\HeroSection.tsx
import Image from 'next/image';
import './HeroSection.css'; // Importing the custom CSS
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
    <section className="hero-section">
      <div className="container">
        <div className="image-container">
          <Image
            src="/images/lady.webp"
            alt="Lady Hero Image"
            width={720}
            height={600}
            className="hero-image"
          />
        </div>
        <div className="content">
          <h1 className="title">
            Before they sold out
            <br className="break" /> 
            readymade outfits
          </h1>
          <p className="description">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify. 
            A skateboard YOLO street art.
          </p>
          <div className="button-group">
            <Link href="/outfits" className="btn-primary">View Outfits</Link>
            <button className="btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>

    <section className="hero-section">
      <div className="container">
       
        <div className="content">
          <h1 className="title">
            Before they sold out
            <br className="break" /> 
            readymade outfits
          </h1>
          <p className="description">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify. 
            A skateboard YOLO street art.
          </p>
          <div className="button-group">
            <Link href="/outfits" className="btn-primary">View Outfits</Link>
            <button className="btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/images/shop.jpeg"
            alt="Lady Hero Image"
            width={720}
            height={600}
            className="hero-image"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
