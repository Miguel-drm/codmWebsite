import ProfileLayout from './layouts/ProfileLayout';

const Profile = () => (
  <ProfileLayout
    ingameName="Miguelito"
    name="-----"
    age={'-----'}
    uid="1234567890"
    role="Sniper/Shotgun"
    profileImage="https://randomuser.me/api/portraits/men/32.jpg"
  >
    <div className="flex flex-col gap-2 items-center">
      <div className="w-full mt-4">
        <h3 className="text-lg font-semibold text-white mb-1">Bio</h3>
        <p className="text-white/70">I am a full-stack developer specializing in React, Node.js, and UI/UX design. I enjoy building responsive, user-friendly applications and collaborating with creative teams.</p>
      </div>
    </div>
  </ProfileLayout>
);

export default Profile; 