import React from 'react';

interface MetallicLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const MetallicLogo: React.FC<MetallicLogoProps> = ({ size = 'md', animated = true, className = '' }) => {
  // Size mapping
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    // Mobile: fit to screen width, capped at 500px. 
    // Desktop: Larger fixed sizes to ensure text fits on one line without wrapping.
    xl: 'w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] md:w-[650px] md:h-[650px] md:max-w-none md:max-h-none lg:w-[800px] lg:h-[800px]',
  };

  const mainTextSizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
    // Mobile: Adjusted to prevent cutoff (3xl/5xl). 
    // Desktop: Scaled to fit new larger container sizes (6xl/7xl).
    xl: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl',
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${sizeClasses[size]} ${className}`}>
      {/* Outer Decorative Circle - Metallic Gradient Border */}
      <div className={`absolute inset-0 rounded-full border-[1px] md:border-2 opacity-80`}
           style={{
             background: 'linear-gradient(135deg, #cfcfcf 0%, #ffffff 50%, #9e9e9e 100%) border-box',
             WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
           }}
      />
      
      {/* Inner Thin Line (Echo) */}
      <div className="absolute inset-2 md:inset-4 rounded-full border border-gray-300/30"></div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center z-10 text-center w-full px-4">
        
        {/* Top Decoration */}
        <div className={`mb-4 w-px h-8 bg-gradient-to-b from-transparent via-gray-400 to-gray-800 ${size === 'sm' ? 'hidden' : ''}`}></div>

        {/* Main Logo Text - whitespace-nowrap prevents single letter wrapping */}
        <h1 
  className={`font-cinzel font-medium ${
    animated ? 'text-metallic' : 'text-gray-600'
  } drop-shadow-sm whitespace-nowrap leading-none`}
  style={{
    fontSize: size === 'xl' ? 'clamp(28px, 8vw, 72px)' : undefined,
  }}
>
  MOMENTORY
</h1>

        

        {/* Underline - Metallic Shimmer */}
        <div className="relative mt-2 md:mt-4 w-1/2 h-[1px] md:h-[2px] bg-gray-300 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-full h-full animate-[shine_3s_infinite]"></div>
        </div>
        
         {/* Bottom Decoration */}
         <div className={`mt-6 w-px h-8 bg-gradient-to-t from-transparent via-gray-400 to-gray-800 ${size === 'sm' ? 'hidden' : ''}`}></div>
      </div>
    </div>
  );
};

export default MetallicLogo;