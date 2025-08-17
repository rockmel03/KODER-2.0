import { formatDate } from "../utils/date";
import { Clock, Calendar, Tag } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Post = ({ data: post }) => {
  const { isDarkMode } = useAppContext();

  return post ? (
    <article className="max-w-3xl mx-auto">
      {/* Banner Image */}
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-80 object-cover rounded-lg"
        />
      </div>

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-medium">{post.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar
              className={`h-4 w-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {formatDate(post.date)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock
              className={`h-4 w-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Post Content */}
      <div
        className={`prose prose-lg max-w-none ${
          isDarkMode ? "prose-invert prose-gray" : "prose-gray"
        } prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-base prose-p:leading-relaxed prose-p:mb-4`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  ) : (
    <>Post not found</>
  );
};

export default Post;
