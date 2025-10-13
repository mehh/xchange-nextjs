import type { FC } from "react";

const VideoSection: FC = () => {
  // YouTube default embed per client request
  const embedUrl =
    "https://www.youtube.com/embed/8DItdKtQXww?si=rgNwbzWqGqZ2VT6a";

  return (
    <section className="w-full bg-off-white py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="max-w-[1000px] mx-auto text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="font-outfit text-verdant text-[clamp(22px,4.5vw,40px)] font-normal leading-[120%] tracking-[-0.6px]">
            The xchange in action.
          </h2>
        </div>

        {/* Responsive video wrapper (16:9) */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-black" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
