import React, { memo, useEffect, useState } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string;
  iconName?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/xanguineLogoRedBlackHoriz.svg',
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}: AppLogoProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const isSvg = src?.toLowerCase().endsWith('.svg');

  useEffect(() => {
    if (!isSvg) {
      setSvgContent(null);
      return;
    }

    fetch(src)
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(text => {
        // Strip doctype and XML declarations
        const cleaned = text
          .replace(/^<\!DOCTYPE[^>]*>/, '')
          .replace(/^<\?xml[^>]*>/, '');
        setSvgContent(cleaned);
      })
      .catch(() => setSvgContent(null));
  }, [src, isSvg]);

  const containerClassName = [
    'flex items-center',
    onClick && 'cursor-pointer hover:opacity-80 transition-opacity',
    className
  ].filter(Boolean).join(' ');

  // Inline SVG with cleaned content
  if (isSvg && svgContent) {
    return (
      <div className={containerClassName} onClick={onClick}>
        <div
          style={{ height: size }}
          className="flex-shrink-0"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>
    );
  }

  // Fall back to AppImage or icon for non-SVG
  return (
    <div className={containerClassName} onClick={onClick}>
      {src ? (
        <AppImage
          src={src}
          alt="Logo"
          height={size}
          className="flex-shrink-0"
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;