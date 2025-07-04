import React from 'react';

interface GunCardProps {
  image: string;
  name: string;
  children?: React.ReactNode;
}

const GunCard = ({ image, name, children }: GunCardProps) => (
  <div className="bg-black/60 rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer w-full max-w-xs mx-auto">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 object-cover rounded-lg mb-3 border-2 border-white/10 shadow"
    />
    <h3 className="text-lg font-bold text-white mb-2 text-center">{name}</h3>
    {children && <div className="w-full">{children}</div>}
  </div>
);

export default GunCard; 