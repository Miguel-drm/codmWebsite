import React from 'react';

const FriendLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-2xl mx-auto p-8 bg-black/70 rounded-xl shadow-lg mt-32">
    {children}
  </div>
);

export default FriendLayout; 