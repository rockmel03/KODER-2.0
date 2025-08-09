import { useState } from "react";
import { Play, Plus, ChevronDown } from "lucide-react";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Image */}
      <div className="aspect-video w-64 rounded-md overflow-hidden bg-muted">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* Hover Content */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-80 bg-card rounded-md shadow-2xl border border-border">
          {/* Image */}
          <div className="aspect-video w-full rounded-t-md overflow-hidden">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button size="sm" className="rounded-full w-8 h-8 p-0">
                  <Play className="w-4 h-4 fill-current" />
                </button>
                <button
                  variant="outline"
                  size="sm"
                  className="rounded-full w-8 h-8 p-0"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                variant="outline"
                size="sm"
                className="rounded-full w-8 h-8 p-0"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Movie Info */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-sm">
                {movie.title}
              </h3>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className="border border-border px-1 rounded text-xs">
                  {movie.rating}
                </span>
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.genre}</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {movie.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
