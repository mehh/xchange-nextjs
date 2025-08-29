"use client";

// Image assets for the homes page
const heroImage = "https://api.builder.io/api/v1/image/assets/TEMP/b906bf7e4e11682059cc94ec5b0726e05038bc9d?width=3200";
const buildImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/a3075adb0eac99bbb0f379e65bc5e4aa575e94ef?width=838";
const buildImage2 = "https://api.builder.io/api/v1/image/assets/TEMP/aec4fd675755cbf4e9f60757135b7a3c9237876b?width=842";
const buildImage3 = "https://api.builder.io/api/v1/image/assets/TEMP/132792466899c8813b6212edfb3405d4cf74182a?width=838";
const homeImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/12e175392bcc8459ce8b26bd384c5226349a36f7?width=840";
const safetyImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/d899118f6b35b4b8fabf086c13b9567e9d89bbc7?width=1468";
const safetyImage2 = "https://api.builder.io/api/v1/image/assets/TEMP/b74b6b66928d06561417bd6ae64bebf3a5d26b9b?width=1122";
const safetyImage3 = "https://api.builder.io/api/v1/image/assets/TEMP/275b65631c6f6eda0ae0b690aad4b9c68db73dee?width=812";
const aboveBeyondImage = "https://api.builder.io/api/v1/image/assets/TEMP/a54c7fca1704a99c68708f24340079ca0f08ba12?width=1436";
const healthBackgroundImage = "https://api.builder.io/api/v1/image/assets/TEMP/40510e61585f305691d28447e5e69acffec496c3?width=2880";

export default function Homes() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[500px] lg:min-h-[700px] bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[500px] lg:min-h-[700px] px-4">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Precision Engineered,<br />
            High Performance Homes
          </h1>
        </div>
      </section>

      {/* A Predictable Way to Build */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                A Predictable<br />
                Way to Build
              </h2>
              <div className="w-11 h-11 rounded-full border-2 border-black flex items-center justify-center" >
                <svg className="w-5 h-5 rotate-90" fill="none" viewBox="0 0 16 21">
                  <path d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                ADVANCED MANUFACTURING
              </h3>
              <div className="text-sm lg:text-base leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                <p>We use a repeatable process for high-performance, prefabricated homes at scale. We standardize assemblies, materials, and designs to reliably produce world-class quality homes in less than 16 weeks.</p>
                <p>Our technology and software transforms your home into a detailed manufacturing order ready for production. Each home is made with cutting-edge materials and processes that aren't readily available to local builders. It's built to last with a precision-engineered steel frame resistant to mold, rot, and termites. As a result, you get a home with less worry and less maintenance—now and in the future.</p>
              </div>
            </div>
          </div>

          {/* Manufacturing Images Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <img src={buildImage1} alt="Manufacturing process 1" className="w-full aspect-[4/3] object-cover" />
            <img src={buildImage2} alt="Manufacturing process 2" className="w-full aspect-[4/3] object-cover" />
            <img src={buildImage3} alt="Manufacturing process 3" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* WE ARE */}
      <section className="bg-[#595E48] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 text-center">
          <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
            WE ARE
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            The Very Best at One Thing
          </h2>
          <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu.
          </p>
        </div>
      </section>

      {/* Tmod Two */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
            2,500 SQ FT DUPLEX
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Tmod Two
          </h2>
          <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-16" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <img src={homeImage1} alt="Tmod home view 1" className="w-full aspect-[2/3] object-cover" />
            <img src={homeImage1} alt="Tmod home view 2" className="w-full aspect-[2/3] object-cover" />
            <img src={homeImage1} alt="Tmod home view 3" className="w-full aspect-[2/3] object-cover" />
          </div>
        </div>
      </section>

      {/* Safety for the Future */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Safety for<br />
                the Future
              </h2>
              <div className="text-sm lg:text-base leading-relaxed mb-8" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                <p>Weather has become unpredictable, and it's not the same climate we grew up with. The next several decades will bring cold temperatures to warm climates and excessive water to dry regions. Being ready–at home–for these weather variations is the safest way to protect yourself. Our homes are built for any climate using a standardized production system. They will shield you from Category-5 hurricanes, heat waves, freezing temperatures, and even earthquakes. When there are wildfires, the home will be safe. Embers cannot enter an attic–we use flat roofs��or enter the crawlspace–it's internally ventilated–and the metal frame will not deform until temperatures are 700º C / 1292º F, making it a Class-A fire-rated home. Having one universal building code for residential homes will keep people safe.</p>
              </div>
              <img src={safetyImage2} alt="Safety feature 2" className="w-full aspect-square object-cover" />
            </div>
            
            <div className="space-y-6">
              <img src={safetyImage1} alt="Safety feature 1" className="w-full aspect-[4/3] object-cover" />
              <img src={safetyImage3} alt="Safety feature 3" className="w-1/2 aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                ENVIRONMENTALLY RESPONSIBLE
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Each Tmod home is built to last 100 years, significantly reducing the environmental impact. Using high-quality materials and product design-based science, your home will require less maintenance, won't begin to rot in a matter of years, and will consume a fraction of the energy a typical home uses each year – for the lifetime of the home.
              </p>
            </div>
            <div className="relative px-8 before:absolute before:left-0 before:top-0 before:bottom-8 before:w-px before:bg-black after:absolute after:right-0 after:top-0 after:bottom-8 after:w-px after:bg-black">
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                READY FOR MOTHER NATURE
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                We crafted every square foot using material science for unparalleled performance to build the ultimate climate-resilient home. Recycled light-gauge steel strikes the perfect balance of being resistant to mold, rot, insects, and fires. While the airtight and waterproof liquid membrane wrap the entire home in one continuous seal to reduce temperature change. And the double-layered insulation further prevents extreme climates from entering the home. You can take this home almost anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                BENEATH THE SURFACE
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                The most climate-resilient home pushes the limits of Passive House Standards. Robotic automation increases the precision and speed of production. Building science ensures each home is created for durability and to improve the health of the occupants. And an intelligent home operating system connects it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Above and Beyond */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Above and<br />
                Beyond
              </h2>
              <div className="text-sm lg:text-base leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                <p>A health-promoting home is crucial to your mental and physical well-being. But what about your connection to the outdoors?</p>
                <p>Our homes are designed to make it easier to see nature, use the sun's natural light to illuminate your home, and step outside to enjoy the weather. This is what's called a biophilic design.</p>
              </div>
            </div>
            <div>
              <img src={aboveBeyondImage} alt="Above and Beyond" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Health Statistics */}
      <section className="bg-[#595E48] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
            HOW YOUR HOME IS CONFIGURED DIRECTLY IMPACTS YOUR HEALTH
          </h3>
          <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-16" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Most people don't realize the magnitude of a home's contribution as a positive influence on our daily lives. And while people invest in their personal future in many ways, few investments pay off more than a healthy lifestyle promoted by a healthy home. From the quality of the air we breathe to the water we drink, cook, and bathe with, we've used our background as building scientists to design a home with systems we can rely on to provide a positively healthier living experience.
          </p>
          
          <div className="border-t border-white/30 pt-12 lg:pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>97%</div>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Effective at capturing airborne particles–dust, pollen, and mold spores–between 3-10 microns
                </p>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>90%</div>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Effective at capturing airborne particles–CO2, NOx, SOx, and metals–between 3‑10 microns
                </p>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>99.9%</div>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Of viruses and bacteria killed in water with in-line UV (ultraviolet light) filtration
                </p>
              </div>
            </div>
            
            <button className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 lg:px-12 py-3 lg:py-4 text-lg font-medium text-white hover:bg-white hover:text-[#595E48] transition-colors" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Learn more about our health & sustainability standards
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
