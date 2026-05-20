import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import Penthouse_Casablanca from '../../assets/Penthouse_Casablanca.webp'
import penthouse_generic from '../../assets/penthouse_generic.webp'
import Penthouse_New_York from '../../assets/Penthouse_New_York.webp'
import Penthouse_Sydney from '../../assets/Penthouse_Sydney.webp'
import Penthouse_Singapore from '../../assets/Penthouse_Singapore.webp'
import Penthouse_Stockholm from '../../assets/Penthouse_Stockholm.webp'
import Penthouse_Vancouver from '../../assets/Penthouse_Vancouver.webp'


const Hero = () => {
  const [heroImage, setHeroImage] = useState(Penthouse_Casablanca);

  // Cycle through background images every 5 seconds
  useEffect(() => {
    const images = [
      Penthouse_Casablanca,
      penthouse_generic,
      Penthouse_New_York,
      Penthouse_Sydney,
      Penthouse_Singapore,
      Penthouse_Stockholm,
      Penthouse_Vancouver
    ];

    const pickRandomIndex = (excludeIndex) => {
      if (images.length <= 1) return 0;
      let nextIndex = Math.floor(Math.random() * images.length);
      while (nextIndex === excludeIndex) {
        nextIndex = Math.floor(Math.random() * images.length);
      }
      return nextIndex;
    };

    let currentIndex = pickRandomIndex(-1);
    setHeroImage(images[currentIndex]);

    const interval = setInterval(() => {
      currentIndex = pickRandomIndex(currentIndex);
      setHeroImage(images[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[600px] flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative container text-center text-white space-y-8">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, x: -200 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Invest and Trade in Real Estate with Cryptocurrency
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Own fractional shares of premium properties through NFTs. Start investing with as little as $10.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero