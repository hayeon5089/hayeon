import { useState } from 'react';
import svgPaths from './imports/svg-r7ntrkgggs';
import imgHero from 'figma:asset/6dd32d82bd2ff0f775e3172dc731d5fabfc01677.png';
import imgPortfolio1 from 'figma:asset/5575fb112802aa4408f44687e2534a89f2ce8e6b.png';
import imgPortfolio2 from 'figma:asset/4ec02444a5dfcdc6431ce570fb0a38aed503f3d1.png';
import imgPortfolio3 from 'figma:asset/910ea4cbe55f9fe589f5f28c89bc5de2afe2bdaa.png';
import imgPortfolio4 from 'figma:asset/c8cebb0b1d3981eee69b797345b1e834e0480ed2.png';
import imgPortfolio5 from 'figma:asset/0f90430c168c7c85e8ec4499ad2f96e60b88c03f.png';
import imgPortfolio6 from 'figma:asset/b6277ede1f1da0032036ae1480fbd037ff95bac6.png';
import imgMap from 'figma:asset/5d74f3982ae603969df1db6b4360e4c0068fa85b.png';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menuItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const portfolioItems = [
    { image: imgPortfolio1, title: 'DESIGN 01' },
    { image: imgPortfolio2, title: 'DESIGN 01' },
    { image: imgPortfolio3, title: 'DESIGN 01' },
    { image: imgPortfolio4, title: 'DESIGN 01' },
    { image: imgPortfolio5, title: 'DESIGN 01' },
    { image: imgPortfolio6, title: 'DESIGN 01' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[760px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imgHero} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-[62px] left-[323px] right-[310px] flex justify-between items-start z-10">
          <div className="font-semibold text-[50px] text-white leading-normal">
            FIGMA
          </div>
          
          <div className="flex gap-[34px]">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button 
                  onClick={() => scrollToSection(item.href)}
                  className="font-semibold text-[16px] text-white leading-normal"
                >
                  {item.name}
                </button>
                
                {/* Submenu */}
                <div 
                  className={`absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 bg-[#ffcc00] rounded-[6px] p-[20px] flex flex-col gap-[11px] min-w-[98px] text-center transition-opacity ${
                    hoveredMenu === item.name ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {['SUB01', 'SUB02', 'SUB03', 'SUB03'].map((sub, idx) => (
                    <div key={idx} className="font-medium text-[12px] text-black leading-[1.5]">
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[67.7%] flex flex-col items-center gap-[81px] z-5">
          <div className="w-full flex flex-col items-center gap-[11px]">
            <p className="font-semibold text-[32px] text-white text-center lowercase leading-normal">
              Lorem ipsum dolor sit amet
            </p>
            <h1 className="font-semibold text-[72px] text-white text-center uppercase leading-normal">
              Lorem ipsum dolor sit amet,
            </h1>
          </div>
          
          <button className="bg-[#ffcc00] text-white font-extrabold text-[16px] uppercase px-[10px] py-[10px] w-[187px] h-[48px] rounded-[6px]">
            TELL ME MORE
          </button>
          
          {/* Slide Indicators */}
          <div className="flex gap-[46px] items-center">
            <div 
              onClick={() => setActiveSlide(0)}
              className={`${activeSlide === 0 ? 'w-[40px] bg-[#ffcc00]' : 'w-[15px] bg-[#d9d9d9]'} h-[15px] rounded-[15px] cursor-pointer transition-all`}
            />
            <div 
              onClick={() => setActiveSlide(1)}
              className={`${activeSlide === 1 ? 'w-[40px] bg-[#ffcc00]' : 'w-[15px] bg-[#d9d9d9]'} h-[15px] rounded-[15px] cursor-pointer transition-all`}
            />
            <div 
              onClick={() => setActiveSlide(2)}
              className={`${activeSlide === 2 ? 'w-[40px] bg-[#ffcc00]' : 'w-[15px] bg-[#d9d9d9]'} h-[15px] rounded-[15px] cursor-pointer transition-all`}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-[100px] px-[310px]">
        <div className="text-center mb-[60px]">
          <h2 className="font-bold text-[40px] text-black leading-normal">ABOUT</h2>
          <p className="font-normal text-[16px] text-[#555555] leading-normal">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>

        <div className="flex flex-wrap gap-[20px] py-[50px]">
          {[0, 1, 2].map((idx) => (
            <div key={idx} className="flex-1 min-w-[250px] flex flex-col items-center gap-[14px] px-[20px]">
              <div className="w-[130px] h-[130px] bg-[#ffcc00] rounded-[65px] flex items-center justify-center p-[2px]">
                <svg className="w-[44px] h-[44px]" fill="none" viewBox="0 0 44 44">
                  <path clipRule="evenodd" d={svgPaths.p3aec3e00} fill="black" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c4aad00} fill="black" fillRule="evenodd" />
                </svg>
              </div>
              
              <div className="py-[25px] text-center">
                <h3 className="font-bold text-[30px] text-black leading-normal mb-0">PROFILE</h3>
                <p className="font-normal text-[16px] text-[#555555] leading-normal h-[63px] overflow-hidden line-clamp-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-[100px] px-[310px] bg-[rgba(255,204,0,0.1)]">
        <div className="text-center mb-[50px]">
          <h2 className="font-bold text-[40px] text-black leading-normal">PORTFOLIO</h2>
          <p className="font-normal text-[16px] text-[#555555] leading-normal">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </p>
        </div>

        <div className="flex flex-wrap gap-[20px] py-[50px]">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="w-[420px] flex flex-col gap-[14px] px-[20px]">
              <div className="w-[420px] h-[420px] bg-[#ffcc00] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="py-[25px] text-center">
                <h3 className="font-bold text-[30px] text-black leading-normal mb-0">
                  {item.title}
                </h3>
                <p className="font-normal text-[16px] text-[#555555] leading-normal h-[60px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Duis aute irure dolor in reprehenderit in voluptate
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-[100px] bg-black">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-[75px]">
            <h2 className="font-bold text-[40px] text-white leading-normal">CONTACT US</h2>
            <p className="font-normal text-[16px] text-white leading-normal">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>

          <div className="flex gap-[44px]">
            <form className="flex-1 flex flex-col gap-[14px]">
              <input 
                type="text" 
                placeholder="YOUR NAME?" 
                className="bg-white p-[20px] text-[16px] text-black"
              />
              <input 
                type="text" 
                placeholder="YOUR ADRESS?" 
                className="bg-white p-[20px] text-[16px] text-black"
              />
              <input 
                type="tel" 
                placeholder="YOUR PHONE NUMBER?" 
                className="bg-white p-[20px] text-[16px] text-black"
              />
              <textarea 
                placeholder="MEMO" 
                rows={6}
                className="bg-white p-[20px] text-[16px] text-black resize-none"
              />
              <button 
                type="submit"
                className="bg-[#ffcc00] p-[20px] text-[16px] text-black"
              >
                SEND
              </button>
            </form>

            <div className="w-[460px] h-[435px] overflow-hidden">
              <img 
                src={imgMap} 
                alt="Map" 
                className="w-[894px] h-[657px] -ml-[265px] -mt-[81.5px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-[20px] px-[310px] bg-white">
        <div className="flex items-center justify-between relative">
          <div className="text-[16px] text-black">
            COPYRIGHT © YOUR WEBSITE 2025
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-[51px]">
            {/* Facebook */}
            <a href="#" className="w-[45px] h-[45px]">
              <svg viewBox="0 0 45 45" fill="none">
                <circle cx="22.5" cy="22.5" r="22.5" fill="black"/>
                <path d={svgPaths.pf377b80} fill="white"/>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="#" className="w-[45px] h-[45px]">
              <svg viewBox="0 0 45 45" fill="none">
                <circle cx="22.5" cy="22.5" r="22.5" fill="black"/>
                <path d={svgPaths.p720ad00} fill="white"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="w-[45px] h-[45px]">
              <svg viewBox="0 0 45 45" fill="none">
                <circle cx="22.5" cy="22.5" r="22.5" fill="black"/>
                <path d={svgPaths.pc5a8d00} fill="white"/>
              </svg>
            </a>
          </div>
          
          <div className="text-[14.4px] text-[#212529] uppercase tracking-wide">
            PRIVACY      POLICY
          </div>
        </div>
      </footer>
    </div>
  );
}
