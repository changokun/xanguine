import React from 'react';
import AppImage from './ui/AppImage';
import { useLanguage } from './LanguageProvider';

interface Slide {
  src: string;
  objectPosition?: string;
}


const slideSrcs: Slide[] = [
  { src: '/assets/images/hhXTfqvxgKNnGnO6hqu5--3--rdmo8.jpg', objectPosition: '55% 50%' },
  { src: '/assets/images/jC95BkGFQE9ar1h7D9zO--3--zDpIJ.jpg', objectPosition: '55% 50%' },
  { src: '/assets/images/lU2bkC9eMpHn4sSmUZ7j--3--guTs5.jpg', objectPosition: '75% 50%' },
  { src: '/assets/images/tL6t7E6vHNbMejcX6E8m--2--cQdlm.jpg', objectPosition: '55% 50%' },
  { src: '/assets/images/QfyQWh34Vc8QiQhAHjEe--1--xFSTP.jpg', objectPosition: '75% 50%' },
  { src: '/assets/images/XWkr16Gns8FEcLDUxCuv--1--sohil.jpg', objectPosition: '55% 50%' },
  { src: '/assets/images/YHcwcVhF6PNN6EuKDmJb--2--mFsAr.jpg', objectPosition: '66% 50%' }
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const track = [...slideSrcs, ...slideSrcs];

  return (
    <div className="absolute inset-0 overflow-hidden" role="region" aria-label={t.hero.carouselLabel}>
      <div className="hero-carousel-track flex h-full w-max">
        {track?.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className="relative h-full w-screen shrink-0 md:w-[50vw] lg:w-[33.3333vw]"
            aria-hidden={i >= slideSrcs.length}
          >
            <AppImage
              src={slide.src}
              alt=""
              fill
              priority={i < 3}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
              className="object-cover"
              style={{ height: '66vh', objectPosition: slide.objectPosition || '50% 50%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}