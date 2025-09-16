"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ScienceContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={ref} className="relative w-full min-h-[600px] md:h-[756px] bg-calm overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Main background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute -left-16 -top-32 w-full h-full scale-110"
            width="1440"
            height="756"
            viewBox="0 0 1440 756"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M1193.97 -155.789C1263.1 -166.484 1321.54 -104.661 1306.91 -36.252L1278.3 97.4922V97.5C1264.25 163.115 1222.26 218.544 1165.4 252.322C1103.67 288.991 1017.28 343.419 943.033 401.43C954.589 440.48 981.502 475.001 1021.45 494.97L1021.45 494.974L1226.64 597.582L1230.62 599.593C1398.69 685.494 1504.64 858.371 1504.64 1047.37V1247.33C1504.64 1319.12 1437.24 1371.89 1367.53 1354.59L986.64 1260.17C859.361 1228.61 759.563 1137.1 714.322 1020.25C669.572 1135.85 571.427 1226.64 446.104 1259.13L441.998 1260.17L61.1045 1354.6L61.0938 1354.6C-8.58277 1371.84 -76 1319.14 -76 1247.33V1047.37C-75.9997 856.884 31.619 682.775 202 597.582L407.188 494.974L407.198 494.967C447.162 475.002 474.065 440.496 485.602 401.471C416.267 347.302 336.329 296.254 275.804 259.872L263.232 252.354C206.348 218.545 164.346 163.117 150.33 97.5215L121.73 -36.2158L121.101 -39.4189C108.933 -106.519 166.6 -166.323 234.671 -155.75L465.854 -119.893L465.861 -119.89C515.501 -112.174 562.687 -93.0596 603.692 -64.0391L607.694 -61.1611C655.183 -26.465 691.668 19.939 714.323 72.5605C737.612 18.4573 775.508 -29.0756 824.941 -64.0723L824.944 -64.0752C865.95 -93.0957 913.136 -112.211 962.775 -119.926L962.782 -119.929L1193.96 -155.789H1193.97ZM899.479 437.229C869.443 463.345 844.057 488.917 825.904 512.732C825.135 513.742 824.379 514.747 823.636 515.75C823.111 516.458 822.594 517.164 822.083 517.868C821.279 518.977 820.49 520.081 819.719 521.181C818.83 522.449 817.963 523.712 817.118 524.969C816.395 526.045 815.689 527.116 815 528.184C813.839 529.982 812.725 531.767 811.66 533.54C803.919 546.434 797.03 558.949 790.9 571.086C789.659 573.545 788.449 575.988 787.269 578.416C786.784 579.412 786.304 580.406 785.83 581.397C767.854 618.969 757.139 652.789 750.716 682.91C750.451 684.153 750.193 685.39 749.942 686.621C749.747 687.578 749.558 688.532 749.371 689.481C747.969 696.621 746.803 703.544 745.834 710.254C745.556 712.176 745.294 714.08 745.048 715.967C744.654 718.98 744.298 721.948 743.978 724.871C743.709 727.319 743.466 729.737 743.243 732.122C742.81 736.763 742.457 741.286 742.172 745.69C742.154 745.97 742.138 746.25 742.12 746.528C742.001 748.413 741.893 750.276 741.796 752.117C741.614 755.582 741.469 758.97 741.352 762.281C741.102 769.342 740.978 776.052 740.894 782.413C740.883 783.221 740.875 784.023 740.865 784.819C740.831 787.632 740.801 790.375 740.77 793.048V878.36C740.77 1034.82 847.458 1171.17 999.373 1208.83L1380.27 1303.26L1380.27 1303.26C1416.58 1312.27 1451.74 1284.78 1451.74 1247.33V1047.37C1451.74 876.916 1355.44 721.122 1202.98 644.889L1202.97 644.886L997.789 542.276C951.223 518.998 917.816 480.921 899.631 437.099C899.581 437.142 899.53 437.186 899.479 437.229ZM529.007 437.136C510.831 480.945 477.424 519.004 430.85 542.273L430.853 542.276L225.665 644.886C73.2041 721.118 -23.0973 876.915 -23.0977 1047.37V1247.33C-23.0976 1284.76 12.0364 1312.24 48.3711 1303.26L429.265 1208.83C581.182 1171.17 687.868 1034.86 687.868 878.36V793.591H687.867V793.336C687.215 737.659 687.758 651.498 616.977 533.573C599.289 504.118 568.071 471.085 529.007 437.136ZM1255.17 -47.3164C1262.05 -79.4695 1234.59 -108.551 1202.07 -103.524L1202.07 -103.521L970.894 -67.6602L970.89 -67.6641C929.332 -61.2033 889.831 -45.1993 855.508 -20.9082C783.614 29.9898 740.866 112.578 740.77 200.666V553.097C748.181 538.009 756.639 522.413 766.302 506.319L766.305 506.316C793.41 461.176 842.711 414.054 896.8 370.577L896.803 370.574C896.854 370.533 896.905 370.492 896.956 370.451L931.148 342.968L931.303 343.783C1002.97 289.872 1081.53 240.618 1138.38 206.851L1140.48 205.587C1184.38 178.765 1215.96 135.962 1226.57 86.4248L1255.17 -47.3164ZM226.557 -103.488C194.579 -108.458 167.44 -80.3562 173.165 -48.7852L173.465 -47.2803L202.064 86.4688L202.068 86.4717C212.81 136.744 245.226 180.121 290.266 206.891C347.068 240.649 425.635 289.893 497.301 343.796L497.462 342.947L531.842 370.577C584.241 412.696 632.144 458.236 659.729 502.081L662.337 506.316C671.997 522.407 680.457 538.001 687.867 553.086V200.692L687.833 196.566C686.459 110.038 643.931 29.2373 573.129 -20.8652C538.805 -45.1575 499.304 -61.1675 457.744 -67.6279L226.563 -103.484L226.557 -103.488Z"
              fill="url(#paint0_linear_343_129)"
            />
            <defs>
              <linearGradient id="paint0_linear_343_129" x1="714" y1="1357" x2="714" y2="-157" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3A5261" stopOpacity="0"/>
                <stop offset="0.5" stopColor="#3A5261" stopOpacity="0.7"/>
                <stop offset="1" stopColor="#3A5261" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Blurred circle */}
        <div
          className="absolute w-[868px] h-[868px] rounded-full bg-calm left-1/2 transform -translate-x-1/2 -top-14"
          style={{ filter: 'blur(200px)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 py-12 md:py-16">
        <div className="w-full max-w-[443px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white text-center font-outfit text-[48px] md:text-[80px] font-normal leading-[100%] tracking-[-0.96px] md:tracking-[-1.6px] mb-8 md:mb-10"
          >
            Let&apos;s talk.
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            {/* Name fields row */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* First Name */}
              <div className="flex h-14 px-3 py-3 flex-col justify-between flex-1 rounded-lg bg-white/5">
                <label
                  htmlFor="firstName"
                  className="text-white font-outfit text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-none outline-none text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50"
                />
              </div>

              {/* Last Name */}
              <div className="flex h-14 px-3 py-3 flex-col justify-between flex-1 rounded-lg bg-white/5">
                <label
                  htmlFor="lastName"
                  className="text-white font-outfit text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-none outline-none text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex h-14 px-3 py-3 flex-col justify-between rounded-lg bg-white/5">
              <label
                htmlFor="email"
                className="text-white font-outfit text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-none outline-none text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50"
              />
            </div>

            {/* Phone */}
            <div className="flex h-14 px-3 py-3 flex-col justify-between rounded-lg bg-white/5">
              <label
                htmlFor="phone"
                className="text-white font-outfit text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-none outline-none text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50"
              />
            </div>

            {/* Comments */}
            <div className="flex h-[124px] px-3 py-3 flex-col rounded-lg bg-white/5">
              <label
                htmlFor="comments"
                className="text-white font-outfit text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase mb-2"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-transparent border-none outline-none text-white font-outfit text-[16px] font-normal leading-[120%] tracking-[-0.32px] placeholder-white/50 resize-none"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-7 rounded-full bg-white text-slate font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-white/90 transition-all duration-300 mt-2"
            >
              Send
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
