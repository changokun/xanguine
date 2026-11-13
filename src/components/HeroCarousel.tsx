import React from 'react';
import AppImage from './ui/AppImage';
import { useLanguage } from './LanguageProvider';

const slideSrcs: string[] = [
  '/assets/images/hero-portugal-small-business.png',
  'https://img.rocket.new/generatedImages/rocket_gen_img_4a91987b4-1794578976344.png',
  'https://images.unsplash.com/photo-1677078610152-8a627d8ced8d',
  'https://img.rocket.new/generatedImages/rocket_gen_img_4d085ea73-1794578976113.png',
  'https://img.rocket.new/generatedImages/rocket_gen_img_46905834e-1794578976535.png',
  'https://img.rocket.new/generatedImages/rocket_gen_img_4c85862a8-1794578977302.png',
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const slides = slideSrcs.map((src, i) => ({ src, alt: t.hero.slides?.[i] ?? '' }));
  const track = [...slides, ...slides];

  return (
    <div className="absolute inset-0 overflow-hidden" role="region" aria-label={t.hero.carouselLabel}>
      <div className="hero-carousel-track flex h-full w-max">
        {track?.map((s, i) => (
          <div
            key={`${s?.src}-${i}`}
            className="relative h-full w-screen shrink-0 md:w-[50vw] lg:w-[33.3333vw]"
            aria-hidden={i >= slides.length}
          >
            <AppImage
              src={s?.src}
              alt={s?.alt}
              fill
              priority={i < 3}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}