import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from 'styles/Carousel.module.css';
import { getStrapiMedia } from '../utils/api-helpers';

interface CarouselItem {
  attributes: {
    title: string;
    date: string;
    description: string;
    splash: {data: {attributes: {url: string}}};
    slug: string;
  }
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Nextjs is SSR rendering so the initial call to generate HTML is from the server.
  // window object is only available on the client-side so we need to check window != undefined otherwise it will crash
  const [showSingleItem, setShowSingleItem] = useState(typeof window !== "undefined" && window.innerWidth < 700);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const getCarouselItems = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;
    
    return showSingleItem ? [items[currentIndex]] : [items[prevIndex],items[currentIndex], items[nextIndex]];
  };

  // inside useEffect the window is always present
  useEffect(() => {
    const handleResize = () => {
      setShowSingleItem(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const carouselItems = getCarouselItems();

  return (
    <div className={styles.carousel}>
      <div className={styles.slider} >
        {carouselItems.map((item, index) => {
          const imageUrl = getStrapiMedia(
            item.attributes.splash.data?.attributes.url
          );
          const title = item.attributes.title;
          const description = item.attributes.description;
          const slug = item.attributes.slug;
          const date = item.attributes.date;
          console.log(item.attributes);
          
          return (
            <Link href={"/posts/" + slug} key={index} className={styles.card} target="_blank" rel="noopener noreferrer">
              {imageUrl && (
                <Image alt="presentation" src={imageUrl} width="350" height="200" />
              )}
              <div className="py-4">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{date}</h4>
              </div>
            </Link>
          );
      })}
      </div>
      <button className={styles.prev} onClick={prevSlide}>
        &lt;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
