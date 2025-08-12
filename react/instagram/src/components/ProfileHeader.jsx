import { MoreHorizontal } from "lucide-react";

const ProfileHeader = ({ username }) => {
  return (
    <div className="border-b border-gray-300 px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{username}</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreHorizontal size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
