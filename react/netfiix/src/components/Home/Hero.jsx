import { Play, Info } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://m.media-amazon.com/images/M/MV5BY2VjYTc3ZDYtOWUyNC00Nzk2LWJhNDItMDA2ZmY3Y2ExYzMyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-16">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Stranger Things
          </h1>
          <p className="text-lg md:text-xl text-muted-white max-w-md">
            When a young boy disappears, his mother, a police chief and his
            friends must confront terrifying supernatural forces in order to get
            him back.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center bg-white text-zinc-900 hover:bg-white/90 px-8 py-3 text-lg font-semibold rounded transition-colors">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Play
            </button>
            <button className="flex items-center bg-secondary text-secondary-white hover:bg-secondary/80 px-8 py-3 text-lg font-semibold rounded transition-colors">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
