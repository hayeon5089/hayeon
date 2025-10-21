import svgPaths from "./svg-r7ntrkgggs";
import imgRectangle1 from "figma:asset/6dd32d82bd2ff0f775e3172dc731d5fabfc01677.png";
import imgThumbnail from "figma:asset/5575fb112802aa4408f44687e2534a89f2ce8e6b.png";
import imgThumbnail1 from "figma:asset/4ec02444a5dfcdc6431ce570fb0a38aed503f3d1.png";
import imgThumbnail2 from "figma:asset/910ea4cbe55f9fe589f5f28c89bc5de2afe2bdaa.png";
import imgThumbnail3 from "figma:asset/c8cebb0b1d3981eee69b797345b1e834e0480ed2.png";
import imgThumbnail4 from "figma:asset/0f90430c168c7c85e8ec4499ad2f96e60b88c03f.png";
import imgThumbnail5 from "figma:asset/b6277ede1f1da0032036ae1480fbd037ff95bac6.png";
import img21 from "figma:asset/5d74f3982ae603969df1db6b4360e4c0068fa85b.png";

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold gap-[11px] items-start leading-[0] not-italic relative shrink-0 text-center text-white w-full">
      <div className="flex flex-col h-[49px] justify-center lowercase relative shrink-0 text-[32px] w-full">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col h-[150px] justify-center relative shrink-0 text-[72px] uppercase w-full">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet,</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#ffcc00] box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 w-[187px]">
      <div className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white uppercase">
        <p className="leading-[normal] whitespace-pre">TELL ME MORE</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[40px]" data-name="Component 2">
      <div className="absolute bg-[#ffcc00] inset-0 rounded-[15px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex gap-[19px] inset-0 items-center">
      <div className="bg-[#d9d9d9] rounded-[15px] shrink-0 size-[15px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 3">
      <Frame21 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex gap-[19px] inset-0 items-center">
      <div className="bg-[#d9d9d9] rounded-[15px] shrink-0 size-[15px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 4">
      <Frame37 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[46px] items-center relative shrink-0">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[81px] inset-[26.71%_16.15%_16.05%_16.15%] items-center">
      <Frame19 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function SlideImage() {
  return (
    <div className="absolute h-[760px] left-0 top-0 w-[1920px]" data-name="SLIDE IMAGE">
      <div className="absolute inset-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-black inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle1} />
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function About() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center overflow-visible p-0 relative shrink-0" data-name="ABOUT">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">ABOUT</p>
      </div>
    </button>
  );
}

function SubMenuComponent() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB01</p>
      </div>
    </div>
  );
}

function SubMenuComponent1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB02</p>
      </div>
    </div>
  );
}

function SubMenuComponent2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB03</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffcc00] h-[145px] opacity-0 relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] h-[145px] items-center p-[20px] relative w-full">
          <SubMenuComponent />
          <SubMenuComponent1 />
          {[...Array(2).keys()].map((_, i) => (
            <SubMenuComponent2 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[98px]">
      <About />
      <Frame3 />
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="ABOUT">
      <button className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">PORTFOLIO</p>
      </button>
    </div>
  );
}

function SubMenuComponent4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB01</p>
      </div>
    </div>
  );
}

function SubMenuComponent5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB02</p>
      </div>
    </div>
  );
}

function SubMenuComponent6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB03</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ffcc00] h-[145px] opacity-0 relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] h-[145px] items-center p-[20px] relative w-full">
          <SubMenuComponent4 />
          <SubMenuComponent5 />
          {[...Array(2).keys()].map((_, i) => (
            <SubMenuComponent6 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[179px] items-start relative shrink-0 w-[98px]">
      <About1 />
      <Frame4 />
    </div>
  );
}

function About2() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center overflow-visible p-0 relative shrink-0" data-name="ABOUT">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">CONTACT</p>
      </div>
    </button>
  );
}

function SubMenuComponent8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB01</p>
      </div>
    </div>
  );
}

function SubMenuComponent9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB02</p>
      </div>
    </div>
  );
}

function SubMenuComponent10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[69px]" data-name="SUB MENU-Component">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center">
        <p className="leading-[1.5]">SUB03</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ffcc00] h-[145px] opacity-0 relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] h-[145px] items-center p-[20px] relative w-full">
          <SubMenuComponent8 />
          <SubMenuComponent9 />
          {[...Array(2).keys()].map((_, i) => (
            <SubMenuComponent10 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[98px]">
      <About2 />
      <Frame5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[34px] h-[19px] items-start relative shrink-0">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[323px] top-[62px] w-[1287px]" data-name="MENU">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[50px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">FIGMA</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[158px] items-center leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black w-full">
        <p className="leading-[normal]">ABOUT</p>
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#555555] text-[16px] w-full">
        <p className="leading-[normal]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3aec3e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c4aad00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgProfile() {
  return (
    <div className="bg-[#ffcc00] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[2px] relative rounded-[65px] shrink-0 size-[130px]" data-name="gg:profile">
      <Group />
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">PROFILE</p>
      </div>
      <div className="-webkit-box css-y3ibhl flex-col font-['Inter:Regular',_sans-serif] font-normal h-[63px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] w-full">
        <p className="leading-[normal]">{`Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse `}</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 grow h-[305px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] h-[305px] items-center min-w-inherit px-[20px] py-0 relative w-full">
          <GgProfile />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[34.665px] relative shrink-0 w-[33.333px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 35">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p13d62580} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteProfileLine() {
  return (
    <div className="bg-[#ffcc00] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[65px] shrink-0 size-[130px]" data-name="mingcute:profile-line">
      <Group1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">PROFILE</p>
      </div>
      <div className="-webkit-box css-y3ibhl flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] w-full">
        <p className="leading-[normal]">{`Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse `}</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 grow h-[305px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] h-[305px] items-center min-w-inherit px-[20px] py-0 relative w-full">
          <MingcuteProfileLine />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3aec3e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c4aad00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgProfile1() {
  return (
    <div className="bg-[#ffcc00] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[2px] relative rounded-[65px] shrink-0 size-[130px]" data-name="gg:profile">
      <Group4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">PROFILE</p>
      </div>
      <div className="-webkit-box css-y3ibhl flex-col font-['Inter:Regular',_sans-serif] font-normal h-[63px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] w-full">
        <p className="leading-[normal]">{`Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in voluptate velit esse `}</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 grow h-[305px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] h-[305px] items-center min-w-inherit px-[20px] py-0 relative w-full">
          <GgProfile1 />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[20px] items-start px-0 py-[50px] relative shrink-0 w-full">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function About3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[60px] h-[823px] items-start left-[310px] px-0 py-[100px] top-[760px] w-[1300px]" data-name="ABOUT">
      <Frame24 />
      <Frame31 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-center w-[1300px]">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black w-full">
        <p className="leading-[normal]">PORTFOLIO</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[56px] justify-center relative shrink-0 text-[#555555] text-[16px] w-full">
        <p className="leading-[normal]">{`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum `}</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative shrink-0 size-[420px]" data-name="thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">DESIGN 01</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[580px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumbnail />
      <Frame39 />
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative shrink-0 size-[420px]" data-name="thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumbnail1} />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">DESIGN 01</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[580px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumbnail1 />
      <Frame41 />
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative shrink-0 size-[420px]" data-name="thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumbnail2} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">DESIGN 01</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[580px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumbnail2 />
      <Frame44 />
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative shrink-0 size-[420px]" data-name="thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumbnail3} />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">DESIGN 01</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[580px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumbnail3 />
      <Frame45 />
    </div>
  );
}

function Thumbnail4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative shrink-0 size-[420px]" data-name="thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumbnail4} />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">DESIGN 01</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[580px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumbnail4 />
      <Frame46 />
    </div>
  );
}

function Thumbnail5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative shrink-0 size-[420px]" data-name="thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ffcc00] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgThumbnail5} />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex flex-col items-center leading-[0] not-italic px-0 py-[25px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black w-full">
        <p className="leading-[normal]">DESIGN 01</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[60px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#555555] text-[16px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] h-[580px] items-center px-[20px] py-0 relative shrink-0 w-[420px]">
      <Thumbnail5 />
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[20px] items-start px-0 py-[50px] relative shrink-0 w-full">
      <Frame38 />
      <Frame40 />
      <Frame42 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="absolute bg-[rgba(255,204,0,0.1)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[310px] px-0 py-[100px] top-[1548px]" data-name="PORTFOLIO">
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col items-center leading-[0] left-[2.5px] not-italic text-center text-white top-[50px] w-[1295px]">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[40px] w-full">
        <p className="leading-[normal]">CONTACT US</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[56px] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[158px] ml-0 mt-0 w-[563px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center ml-[21px] mt-[82.16px] not-italic relative text-[16px] text-black translate-y-[-50%] w-[528px]">
        <p className="leading-[normal]">MEMO</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col h-[158px] items-start ml-0 mt-[200.5px] relative w-[583px]" data-name="Component 9">
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[53px] ml-0 mt-0 w-[563px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center ml-[21px] mt-[27.5px] not-italic relative text-[16px] text-black translate-y-[-50%] w-[528px]">
        <p className="leading-[normal]">YOUR PHONE NUMBER?</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-[134px] relative w-[583px]" data-name="Component 8">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[53px] ml-0 mt-0 w-[563px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center ml-[21px] mt-[27.5px] not-italic relative text-[16px] text-black translate-y-[-50%] w-[528px]">
        <p className="leading-[normal]">YOUR ADRESS?</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-[67px] relative w-[583px]" data-name="Component 7">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[53px] ml-0 mt-0 w-[563px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center ml-[21px] mt-[27.5px] not-italic relative text-[16px] text-black translate-y-[-50%] w-[528px]">
        <p className="leading-[normal]">YOUR NAME?</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-0 relative w-[583px]" data-name="Component 6">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[53px] ml-0 mt-0 relative w-[563px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 563 53">
          <path d="M0 0H563V53H0V0Z" fill="var(--fill-0, #FFCC00)" id="Rectangle 6" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center ml-[285px] mt-[27.5px] not-italic relative text-[16px] text-black text-center translate-x-[-50%] translate-y-[-50%] w-[528px]">
        <p className="leading-[normal]">SEND</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-[372.5px] relative w-[583px]" data-name="Component 6">
      <Group8 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Component9 />
      <Component8 />
      <Component7 />
      <Component6 />
      <Component10 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[435px] overflow-auto relative shrink-0 w-[460px]">
      <div className="absolute h-[657px] left-[-265px] top-[-81.5px] w-[894px]" data-name="캡처 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img21} />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex gap-[44px] items-start left-[98.5px] top-[175px]">
      <Group3 />
      <Frame36 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[740px] relative shrink-0 w-[1300px]">
      <Frame49 />
      <Frame43 />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[10px] h-[969px] items-center justify-center left-[6px] px-0 py-[100px] top-[3187px] w-[1917px]" data-name="CONTACT">
      <Frame50 />
    </div>
  );
}

function FootSns() {
  return (
    <div className="absolute left-[calc(41.667%+93px)] size-[45px] top-[4195px]" data-name="foot-sns">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="foot-sns">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 8" r="22.5" />
          <path d={svgPaths.p720ad00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FootSns1() {
  return (
    <div className="absolute left-[calc(41.667%+144px)] size-[45px] top-[4195px]" data-name="foot-sns">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="foot-sns">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 8" r="22.5" />
          <path d={svgPaths.pf377b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FootSns2() {
  return (
    <div className="absolute left-[calc(50%+35px)] size-[45px] top-[4195px]" data-name="foot-sns">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="foot-sns">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 8" r="22.5" />
          <path d={svgPaths.pc5a8d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[calc(41.667%+93px)] top-[4195px]">
      <FootSns />
      <FootSns1 />
      <FootSns2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-[310px] top-[4193px]" data-name="FOOTER">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[49px] justify-center leading-[0] left-[310px] not-italic text-[16px] text-black top-[4217.5px] translate-y-[-50%] w-[360px]">
        <p className="leading-[normal]">COPYRIGHT © YOUR WEBSITE 2025</p>
      </div>
      <Group14 />
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(83.333%-60.5px)] text-[#212529] text-[14.4px] text-center text-nowrap top-[4217px] translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="leading-[21.6px] whitespace-pre">{`Privacy      Policy`}</p>
      </div>
    </div>
  );
}

export default function Desktop1() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <SlideImage />
      <Menu />
      <About3 />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}