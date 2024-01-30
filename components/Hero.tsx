"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Quick clicks, happy trips. One tap away.
                
            </h1>

            <p className="hero__subtitle">
                Skip the paperwork, grab the keys! Our booking process is a breeze.
            </p>

            <CustomButton
              title="Find Your Car"
              containerStyles="bg-white text-black rounded-full mt-10"
              handleClick={handleScroll} 
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            <div className="hero__image-overlay" />
            
        </div>
    </div>
  )
}

export default Hero