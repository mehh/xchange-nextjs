"use client";

import ContactForm from "./ContactForm";

interface LetsTalkSectionProps {
  backgroundClass?: string; // e.g., "bg-calm" or any Tailwind class
  title?: string;
}

export default function LetsTalkSection({ backgroundClass = "bg-calm", title = "Let's talk." }: LetsTalkSectionProps) {
  return (
    <section className={`relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[756px] ${backgroundClass} overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Main background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute -left-16 md:-left-20 -top-24 md:-top-28 w-full h-full"
            width="1440"
            height="756"
            viewBox="0 0 1440 756"
            fill="none"
            aria-hidden
          >
            <path
              opacity="0.2"
              d="M1193.97 -155.789C1263.1 -166.484 1321.54 -104.661 1306.91 -36.252L1278.3 97.4922V97.5C1264.25 163.115 1222.26 218.544 1165.4 252.322C1103.67 288.991 1017.28 343.419 943.033 401.43C954.589 440.48 981.502 475.001 1021.45 494.97L1021.45 494.974L1226.64 597.582L1230.62 599.593C1398.69 685.494 1504.64 858.371 1504.64 1047.37V1247.33C1504.64 1319.12 1437.24 1371.89 1367.53 1354.59L986.64 1260.17C859.361 1228.61 759.563 1137.1 714.322 1020.25C669.572 1135.85 571.427 1226.64 446.104 1259.13L441.998 1260.17L61.1045 1354.6L61.0938 1354.6C-8.58277 1371.84 -76 1319.14 -76 1247.33V1047.37C-75.9997 856.884 31.619 682.775 202 597.582L407.188 494.974L407.198 494.967C447.162 475.002 474.065 440.496 485.602 401.471C416.267 347.302 336.329 296.254 275.804 259.872L263.232 252.354C206.348 218.545 164.346 163.117 150.33 97.5215L121.73 -36.2158L121.101 -39.4189C108.933 -106.519 166.6 -166.323 234.671 -155.75L465.854 -119.893L465.861 -119.89C515.501 -112.174 562.687 -93.0596 603.692 -64.0391L607.694 -61.1611C655.183 -26.465 691.668 19.939 714.323 72.5605C737.612 18.4573 775.508 -29.0756 824.941 -64.0723L824.944 -64.0752C865.95 -93.0957 913.136 -112.211 962.775 -119.926L962.782 -119.929L1193.96 -155.789H1193.97Z"
              fill="url(#paint0_linear_contact)"
            />
            <defs>
              <linearGradient id="paint0_linear_contact" x1="714" y1="1357" x2="714" y2="-157" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3A5261" stopOpacity="0"/>
                <stop offset="0.5" stopColor="#3A5261" stopOpacity="0.7"/>
                <stop offset="1" stopColor="#3A5261" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Blurred circle */}
        <div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[868px] lg:h-[868px] rounded-full left-1/2 transform -translate-x-1/2 -top-8 md:-top-14"
          style={{ filter: "blur(200px)", background: "var(--Calm)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 py-16">
        <ContactForm title={title} />
      </div>
    </section>
  );
}
