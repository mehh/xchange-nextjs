"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const yAxisLabels = [
  { value: "40", top: 5 },
  { value: "35", top: 76 },
  { value: "30", top: 147 },
  { value: "25", top: 217 },
  { value: "20", top: 287 },
  { value: "15", top: 359 },
  { value: "10", top: 429 },
  { value: "5", top: 501 },
  { value: "0", top: 571 }
];

const chartLines = [
  {
    color: "#FF0000",
    label: "Exhaled CO₂ from lung",
    strokeDasharray: "11.17 17.86"
  },
  {
    color: "#14619D", 
    label: "XChange = 87% of actual end tidal value",
    strokeDasharray: "11.17 17.86"
  },
  {
    color: "#595959",
    label: "SuperNO₂VA Et = 78% of actual end tidal value", 
    strokeDasharray: "11.17 17.86"
  },
  {
    color: "#42A5BB",
    label: "Cannula = 54% of actual end tidal value",
    strokeDasharray: "11.17 17.86"
  }
];

export default function EtCO2ChartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full bg-[#F7F6F3] py-16 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Title and Superior info row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-slate font-outfit text-[28px] md:text-[40px] font-normal leading-[130%] tracking-[-0.56px] md:tracking-[-0.8px] max-w-[648px]"
          >
            XChange Provides More Consistent and Reliable EtCO₂ Sampling
          </motion.h2>
          {/* Superior EtCO2 info box - responsive width */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-[451px] md:ml-auto"
          >
            <h3 className="text-slate font-outfit text-[22px] md:text-[28px] font-normal leading-[130%] tracking-[-0.44px] md:tracking-[-0.56px] mb-4 md:mb-6">
              Superior EtCO₂ Sampling Capability
            </h3>
            <p className="text-slate font-outfit text-[14px] md:text-[16px] font-normal leading-[130%] tracking-[-0.28px] md:tracking-[-0.32px] opacity-60">
              - Greater consistency in trace display due to ability to maintain seal<br/>
              - Higher accuracy and reliability of readings throughout procedure
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-2 lg:order-1 flex flex-col justify-between w-full lg:w-[229px] pt-6 lg:pt-10 h-auto lg:h-[588px]"
          >
            <div className="flex flex-col gap-8">
              {chartLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex flex-col gap-1"
                >
                  <div
                    className="font-outfit text-[16px] md:text-[18px] font-normal leading-[120%]"
                    style={{ color: line.color }}
                  >
                    {line.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-slate font-outfit text-[18px] font-normal leading-[120%] opacity-80 text-left"
            >
              mmHg CO₂
            </motion.div>
          </motion.div>

          {/* Chart container */}
          <div className="order-1 lg:order-2 relative pb-4 flex justify-center">
            <div className="relative min-w-[940px] w-[940px] h-[588px] overflow-visible mx-0">
            {/* Y-axis labels */}
            {yAxisLabels.map((label, index) => (
              <motion.div
                key={label.value}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 0.3, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                className="absolute text-slate font-outfit text-[20px] font-normal leading-[100%] tracking-[-0.4px] text-right"
                style={{ top: `${label.top}px`, left: "-27px", width: "36px" }}
              >
                {label.value}
              </motion.div>
            ))}

            {/* Grid lines */}
            <div className="absolute left-[18px] top-[22px] w-[882px] h-[566px] opacity-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.0 + i * 0.05 }}
                  className="absolute w-[882px] h-px bg-slate origin-left"
                  style={{ top: `${i * 71}px` }}
                />
              ))}
            </div>

            {/* Chart lines - using the exact SVG paths from the design */}
            <div className="absolute left-[18px] top-0">
              {/* Red dashed line (Exhaled CO2) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                width="883" 
                height="3" 
                viewBox="0 0 883 3" 
                className="absolute top-10"
              >
                <motion.path
                  d="M0.0898438 1.49316L882.136 1.49324"
                  stroke="#FF0000"
                  strokeWidth="1.11651"
                  strokeDasharray="11.17 17.86"
                  fill="none"
                />
              </motion.svg>

              {/* Red solid line (actual data) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 3, delay: 1.2, ease: "easeOut" }}
                width="827"
                height="551"
                viewBox="0 0 827 551"
                className="absolute top-10 left-[9px]"
              >
                <motion.path
                  d="M0.912109 549.701H28.3134L31.1677 477.154L36.3054 374.956L40.8723 332.689L48.8643 302.408L51.7186 275.282L92.8205 105.583L95.6748 73.41H99.1L111.659 16.0027H118.509L122.505 1.49316H131.639L135.635 16.0027H139.631L143.627 58.2696L147.052 134.602L151.048 294.207L157.899 473.369L163.036 521.313L169.316 536.454H179.02L182.445 549.701H330.298V535.192L332.582 532.038L341.144 370.54L343.999 332.689L350.849 302.408L353.703 262.034L357.699 260.772L370.258 203.996L374.254 202.734L378.25 171.823L394.234 104.322L397.66 74.0409H401.656L411.36 31.1431L414.785 29.8814L421.065 2.75486H437.62L441.616 16.6336L445.041 45.6526L449.608 135.864L453.604 337.105L454.746 427.317L463.308 515.005L470.73 535.192H488.426L491.281 549.701L666.534 548.44L674.526 485.986L686.515 334.582L693.936 298.623L697.361 275.282L736.75 103.691L740.175 74.0409L744.171 72.7792L753.876 31.1431L757.301 29.8814L760.726 16.6336L764.151 15.3719L767.006 2.12401H780.706L784.131 16.6336H788.128L797.261 415.961L806.966 521.313H816.67V537.084H826.375"
                  stroke="#FF0000"
                  strokeWidth="1.11651"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.svg>

              {/* Blue dashed line (XChange) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                width="876" 
                height="2" 
                viewBox="0 0 876 2"
                className="absolute top-[116px]"
              >
                <motion.path
                  d="M0.952148 0.686035H875.182"
                  stroke="#14619D"
                  strokeWidth="1.11651"
                  strokeDasharray="11.17 17.86"
                  fill="none"
                />
              </motion.svg>

              {/* Blue solid line (XChange data) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 3, delay: 1.8, ease: "easeOut" }}
                width="817"
                height="476"
                viewBox="0 0 817 476"
                className="absolute top-[115px] left-[10px]"
              >
                <motion.path
                  d="M1.03027 474.701L17.8943 455.442L20.1429 458.549L27.4506 450.472L40.9419 286.459L44.3147 280.246L49.3739 236.758L54.4331 229.924L56.6817 201.967L60.0545 198.24L63.9894 178.359L70.735 169.04L80.2913 121.203L84.2263 114.369L98.8418 59.6982L110.085 16.2099L116.83 13.1035L119.641 14.3461L126.386 6.89092L130.884 9.99723L139.316 46.0304L147.185 183.951L149.996 343.615L158.428 441.153H163.487L165.736 457.306L172.482 444.881H176.416L179.227 469.11L188.221 460.412L192.718 465.382L200.026 456.064L202.275 459.791L207.334 457.306L212.393 460.412L215.766 457.306L219.139 466.004L221.949 460.412L230.381 464.14L234.879 455.442L239.376 456.685L244.997 454.2H248.37L251.743 458.549L259.05 460.412L265.796 463.519L267.482 469.11L272.542 464.14L275.914 469.11L282.66 467.246L287.719 455.442L291.092 457.927L292.216 461.655L295.589 463.519L298.4 466.004L306.27 461.655L312.453 453.578L318.075 473.459L321.447 457.927L324.82 453.578L339.436 274.034L348.43 218.12L351.241 229.303L363.607 169.662L368.667 177.738L377.099 121.203L381.034 119.339L388.341 97.5952L390.59 74.6085L393.401 77.7148L401.271 39.8178L404.081 30.4989L408.016 35.469L413.638 7.51218L415.886 9.37597L420.945 1.29956L424.318 13.7248L427.129 2.54209L437.809 39.8178L443.993 187.678L446.804 352.313L452.987 400.771L457.484 441.774L465.354 445.502H470.975L474.91 450.472L479.969 447.366L482.78 466.004L489.526 461.655L493.461 452.336L498.52 461.655L503.017 455.442L507.514 459.17L510.325 456.685L519.319 457.927L526.627 469.11L530 447.366L533.372 469.11L536.745 462.897L539.556 464.761L546.864 447.987L551.361 457.927L554.733 459.791L558.106 457.927L560.917 456.685L566.538 472.216L569.911 461.655H574.97L581.154 464.761L585.089 464.14H589.024L595.769 456.064L599.142 472.216L602.515 454.2L607.012 456.685L609.261 467.868H613.196L614.882 471.595L621.065 457.927L625.563 461.655L630.622 454.821L637.929 459.791L642.427 463.519L646.924 454.2L652.545 470.353L655.356 467.868L673.906 297.642L679.527 280.868L687.96 215.635L696.392 195.133L705.386 159.1L708.196 153.509L711.569 129.901L714.942 135.492L719.439 118.097L725.623 95.7314L728.433 62.1833L731.806 75.2298L737.99 42.3029L745.859 39.8178L751.481 21.8012L755.416 2.54209L757.664 15.5886L765.534 2.54209L768.907 6.89092L772.28 21.8012L775.653 26.1501L784.085 331.19L790.268 408.226L793.079 434.941L798.7 428.728L801.511 443.017L807.132 459.791L809.943 444.26L816.126 461.655"
                  stroke="#14619D"
                  strokeWidth="1.11651"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.svg>

              {/* Gray dashed line (SuperNO2VA) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 2.1, ease: "easeOut" }}
                width="883"
                height="2"
                viewBox="0 0 883 2"
                className="absolute top-[181px]"
              >
                <motion.path
                  d="M0.952148 1.4436H882.998"
                  stroke="#595959"
                  strokeWidth="1.11651"
                  strokeDasharray="11.17 17.86"
                  fill="none"
                />
              </motion.svg>

              {/* Gray solid line (SuperNO2VA data) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 3, delay: 2.4, ease: "easeOut" }}
                width="840"
                height="418"
                viewBox="0 0 840 418"
                className="absolute top-[178px] left-[10px]"
              >
                <motion.path
                  d="M1.125 409.118L3.96162 409.746L7.36556 394.671L14.1734 407.234L17.5774 397.811L20.414 399.068L34.0298 249.569L37.4337 243.288L44.2416 198.69L47.6455 207.484L60.694 158.488L64.6652 157.232L67.5019 122.056L70.9058 128.337L74.8771 120.172L77.7137 101.327L81.6849 98.8147L87.9255 67.4075L93.5987 49.8195L98.7046 46.6787L101.541 39.141L104.945 24.0656L107.782 22.1811L111.186 13.3871L114.022 10.2464L116.859 11.5027H121.398L124.802 5.22123L127.638 20.2967L134.446 36.6284L135.581 51.7039L144.658 299.821L154.302 394.671L158.274 385.877L161.11 407.234L167.918 382.108L173.591 404.093H180.399L183.803 409.746L187.774 397.811L191.178 407.234L197.419 399.068L207.631 405.349L211.035 394.671L214.439 396.555L217.843 407.234L221.247 409.746L224.65 395.299L227.487 405.977L231.458 393.414L234.295 399.696L237.699 397.183L242.237 401.58H247.343L250.747 394.671L254.719 399.068L257.555 407.862L260.392 400.324L267.767 408.49L271.171 405.977L275.71 409.118L277.979 417.284L284.787 394.042L287.623 399.068L294.431 402.208L298.97 397.811L301.239 393.414L304.643 404.721H308.614L312.018 406.605L314.288 412.887L317.124 402.837L321.095 400.952L334.711 250.826L338.682 247.057L343.788 204.971L354 168.539L356.837 167.282L361.375 151.579L364.779 161.629L368.183 135.247L371.02 125.197L374.424 123.312L378.395 106.352L385.203 90.0207L388.04 64.8949L391.444 63.6386L394.28 64.8949L397.684 32.8596L401.088 35.3722L406.761 24.0656L411.3 15.8997L414.704 19.0404L418.108 5.84937L421.512 15.8997L427.185 7.10566L431.724 26.5781L434.56 32.2314L440.801 120.172L444.772 297.308L458.388 394.671L464.628 402.208L468.032 393.414L471.436 404.721L478.244 382.108L481.081 409.746L485.052 401.58L491.86 395.927L495.264 410.374L498.668 407.862L501.504 402.837L504.341 407.862L511.149 398.44L517.389 402.208L521.361 389.017L525.332 405.977L528.169 397.811L535.544 405.977L541.784 395.927L544.621 394.671L548.025 410.374H551.429L554.265 400.324L558.237 401.58L565.045 398.44L571.852 407.862L575.256 393.414L578.66 394.671L581.497 416.028L585.468 394.671L591.141 414.143L594.545 397.811L598.517 402.837L605.325 390.902L607.594 414.143L611.565 408.49L614.402 415.399L618.94 402.208H621.777L624.046 411.631L628.585 410.374L632.556 397.811L635.96 407.862L638.797 406.605L642.201 401.58L645.605 405.977L647.874 404.093L651.278 409.746L655.249 397.183L658.653 392.786L665.461 347.56L669.432 307.359L672.269 290.399L675.105 243.288L678.509 235.75L681.913 240.147L683.615 220.047L685.884 202.459L691.558 176.705L694.962 183.614L698.366 167.282L702.337 173.564L705.741 138.388L715.385 125.825L718.789 103.84L728.434 71.1764L732.405 75.5734L734.674 45.4225L738.646 37.2566H741.482L745.453 30.9751L748.857 32.2314L751.694 19.0404L755.098 12.759L757.935 16.5278L761.338 0.824219L765.31 14.0152H768.714L772.118 20.2967L775.522 34.744L778.358 71.1764L781.762 140.9L785.733 303.59L795.378 385.877H798.782L802.186 375.826L807.292 392.158H812.398L815.234 414.771L818.071 407.862H821.475L828.85 400.952L832.821 403.465L835.658 402.208L839.062 413.515"
                  stroke="#595959"
                  strokeWidth="1.11651"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.svg>

              {/* Cyan dashed line (Cannula) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 2.7, ease: "easeOut" }}
                width="883"
                height="2"
                viewBox="0 0 883 2"
                className="absolute top-[291px]"
              >
                <motion.path
                  d="M0.0898438 0.70874H882.136"
                  stroke="#42A5BB"
                  strokeWidth="1.11651"
                  strokeDasharray="11.17 17.86"
                  fill="none"
                />
              </motion.svg>

              {/* Cyan solid line (Cannula data) */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 3, delay: 3.0, ease: "easeOut" }}
                width="833"
                height="300"
                viewBox="0 0 833 300"
                className="absolute top-[291px] left-[11px]"
              >
                <motion.path
                  d="M1.43213 298.701H5.9985L8.28169 291.14L12.2773 293.03L15.702 284.208L19.1268 292.4L25.9764 284.839L28.8304 292.4L32.8259 239.469L45.9543 161.333H49.379L52.233 148.731L56.7994 139.909L59.0826 129.197L62.5074 135.498L65.9321 118.485L76.2065 101.471L79.6313 54.2115H86.4808L89.3348 25.2256H103.034L105.888 27.116L112.737 15.7737L119.587 23.9654L123.012 1.28076L125.866 4.4314L129.861 1.28076L136.14 15.7737L140.136 8.8423L145.844 53.5814L152.122 172.676L153.264 217.415L161.255 263.414H165.251L170.388 278.537L179.521 279.797L187.512 291.77L189.795 287.359L193.791 291.77L197.215 291.14L200.64 286.099L202.923 294.921L206.348 287.359L210.344 289.249L213.198 281.058L220.047 296.181L222.901 286.729L233.176 291.77L237.171 282.948L241.738 282.318L244.591 294.29L247.445 296.181L250.299 287.359L254.866 288.619L257.149 291.77L261.715 287.359L265.14 291.14L269.707 289.249L271.419 291.14L274.844 281.058L279.41 294.921L283.976 290.51L288.543 289.88L290.826 285.469L294.251 295.551L299.959 290.51L300.53 287.359H307.379L313.087 285.469H317.653L320.507 296.181L325.645 294.29H328.499L330.782 285.469L332.494 281.058L339.344 208.593L344.481 175.826L347.906 177.717L351.901 154.402L354.755 145.58L358.18 148.101L361.605 137.388L365.03 136.128L368.454 126.046L371.879 54.2115L378.158 53.5814L382.153 25.2256H404.415L408.41 18.2942H415.26L418.684 8.21217L422.109 14.5135L428.959 8.21217L432.384 14.5135L435.808 3.17115L438.662 2.54102L446.083 39.7186L450.078 73.7455L454.074 159.443L454.645 184.018L460.923 243.88L465.49 281.688L468.915 276.017L472.339 281.688L475.764 279.167L479.189 284.208L485.468 270.976L492.888 293.66L498.596 277.907L502.592 289.88L506.587 287.359H509.441L512.295 283.578L515.72 297.441L519.715 286.099L521.999 287.359L525.994 282.318L529.99 298.701L531.702 289.88L538.552 280.428L543.118 287.359L547.114 289.249L549.397 291.77L552.822 279.797L556.817 291.14L559.671 287.359L565.95 291.77L569.375 286.729L576.224 287.359L581.932 279.167L585.928 287.989H589.923L593.919 282.948L596.773 291.14L600.769 276.017L603.623 286.099L608.189 289.249L613.897 282.948L616.751 287.359L621.317 282.948L627.025 282.318L628.738 289.249L633.875 278.537L636.729 289.249L645.862 292.4L654.423 279.167L657.277 290.51L660.131 281.688L666.981 291.14L673.831 259.003L677.255 253.962L687.53 173.306L690.954 168.895L694.379 172.676L697.233 54.8417L703.512 54.2115L707.508 25.2256H730.339L734.335 18.2942H741.185L744.609 13.8833L748.034 17.034L750.888 16.4038L754.313 12.6231L761.162 22.7051L764.587 6.32179L768.012 3.17115L772.008 9.47243H777.716L782.282 8.8423L784.565 19.5545L789.131 22.7051L796.552 168.895L805.685 260.264L810.822 276.647L815.388 277.277L818.813 289.88L825.092 269.715L828.516 286.729L831.941 291.77"
                  stroke="#42A5BB"
                  strokeWidth="1.11651"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.svg>
            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
