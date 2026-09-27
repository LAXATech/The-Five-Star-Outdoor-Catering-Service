import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-[#C5A059]"></span>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-[#C5A059]"></span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-heading font-normal tracking-tight ${
          dark ? 'text-white' : 'text-[#1C1917]'
        } leading-[1.2] mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#D6D3D1]' : 'text-[#57534E]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
