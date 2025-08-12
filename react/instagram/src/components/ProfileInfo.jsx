import { formatNumber } from "../utils/formatNumber";

const ProfileInfo = ({ profileData }) => {
  return (
    <div className="px-4 py-8 md:flex md:items-start md:gap-8 md:mb-8">
      <div className="md:flex-shrink-0 md:w-1/3">
        <img
          src={profileData.profileImage}
          alt={profileData.fullName}
          className="md:w-32 md:h-32 rounded-full border-4 border-gray-200 object-cover md:mx-auto"
        />
      </div>

      <div className="space-y-2 md:flex-1 md:min-w-0 md:mt-0 md:ml-8">
        <div className="md:flex md:items-center md:gap-4 md:mb-4">
          <h2 className="md:text-xl md:font-light">{profileData.username}</h2>
          {profileData.isVerified && (
            <span className="md:text-blue-500 md:text-sm">✓</span>
          )}
          <div className="md:flex md:gap-2">
            <button className="bg-blue-500 text-white px-6 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600">
              {profileData.isFollowing ? "Following" : "Follow"}
            </button>
            <button className="border border-gray-300 px-6 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-50">
              Message
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="md:flex md:gap-8 md:mb-4">
          <span>
            <strong>{formatNumber(profileData.posts)}</strong> posts
          </span>
          <span>
            <strong>{formatNumber(profileData.followers)}</strong> followers
          </span>
          <span>
            <strong>{formatNumber(profileData.following)}</strong> following
          </span>
        </div>

        {/* Bio */}
        <div>
          <h3 className="md:font-semibold md:mb-1">{profileData.fullName}</h3>
          <p className="md:text-sm md:whitespace-pre-line">{profileData.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
