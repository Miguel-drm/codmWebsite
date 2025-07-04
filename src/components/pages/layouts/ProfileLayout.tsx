import React from 'react';

interface ProfileLayoutProps {
  ingameName: string;
  name: string;
  age: number | string;
  uid: string;
  role: string;
  profileImage?: string;
  children: React.ReactNode;
}

const ProfileLayout = ({ ingameName, name, age, uid, role, profileImage, children }: ProfileLayoutProps) => (
  <div className="max-w-3xl mx-auto mt-24 px-2 sm:px-4">
    <div className="bg-black/70 rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col gap-6 items-center relative overflow-hidden">
      {/* Top section: Avatar + Name/Role */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 w-full">
        {/* Avatar */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-4 border-white/10 bg-gradient-to-tr from-blue-500 to-purple-500">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name + ' profile'}
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />
          ) : (
            <span className="text-5xl text-white/80 font-bold select-none">{name.charAt(0)}</span>
          )}
        </div>
        {/* Name and Role */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 break-words">{ingameName}</h1>
          <p className="text-base sm:text-lg text-white/70">{role}</p>
        </div>
      </div>
      {/* Profile Info */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs text-white/50 uppercase tracking-wider">Name</span>
          <span className="text-white font-semibold break-words">{name}</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs text-white/50 uppercase tracking-wider">UID</span>
          <span className="text-white font-semibold break-words">{uid}</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs text-white/50 uppercase tracking-wider">Age</span>
          <span className="text-white font-semibold">{age}</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs text-white/50 uppercase tracking-wider">Role</span>
          <span className="text-white font-semibold break-words">{role}</span>
        </div>
      </div>
      {/* Profile Details Section */}
      <div className="w-full flex flex-col gap-4 mb-2">
        {children}
      </div>
    </div>
  </div>
);

export default ProfileLayout; 