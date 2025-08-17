import { usePosts } from "../context/PostContext";
import { useAppContext } from "../context/AppContext";
import PostCard from "../components/PostCard";

export default function Home() {
  const { posts: blogPosts } = usePosts();

  const { isDarkMode } = useAppContext();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div>
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Stories</h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
