import React from 'react';
import Header from '../../../components/header/Header';
import video from '../../../assets/video/bg.mp4';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen w-full overflow-hidden">
    {/* Video Background */}
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-0"
      src={video}
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="relative z-10">
      <Header />
      {children}
    </div>
  </div>
);

export default Layout; 