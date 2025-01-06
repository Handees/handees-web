import Image from "next/image";

import handeeLogo from "@/public/svg/logo.svg";
import handeePhoneFlat from "@/public/png/handees-phone-flat.png";
import handeePhoneSide from "@/public/png/handees-phone-side.png";
import phoneBg from "@/public/png/phone-bg.png";
import phoneBgLg from "@/public/png/phone-bg-lg.png";

import ig from "@/public/svg/ig.svg";
import heroBg from "@/public/svg/hero-bg.svg";

import curvedLine1 from "@/public/svg/curve-line-1.svg";
import curvedLine2 from "@/public/svg/curve-line-2.svg";
import curvedLine3 from "@/public/svg/curve-line-3.svg";
import curvedLine4 from "@/public/svg/curve-line-4.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-dvh font-outfit relative"
      style={{
        background: "linear-gradient(180deg, #14161C 0%, #000000 100%)",
      }}
    >
      <div
        className="decor-ellipse absolute top-0 left-0 right-0 w-full h-[244px] rounded-b-full blur-[150px] lg:left-10 lg:right-10 lg:w-auto lg:h-[20vh]"
        style={{
          background:
            "linear-gradient(0deg, rgba(115, 184, 187, 0.5) 0%, rgba(65, 141, 244, 0) 92.47%)",
        }}
      ></div>

      <nav className="text-white flex justify-between items-center px-5 py-10 relative z-10 mx-auto ml:px-[100px] lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center">
          <Image className="mr-2" src={handeeLogo} alt="handee logo" />
          <h1 className="font-cabin font-bold text-lg leading-[21.8px]">
            Handee
          </h1>
        </div>
        <div
          className="p-[1px] rounded-full"
          style={{
            background:
              "conic-gradient(from 180.41deg at 50% 94%, #2FD0D7 0deg, #F2F2F2 178.69deg, #418DF4 342.67deg, #2FD0D7 360deg)",
            boxShadow:
              "0px 3px 2px 0px #FFFFFF1A inset, 0px -2px 4px 0px #73B8BB1A inset, 0px 4px 32px -4px #73B8BB3B",
          }}
        >
          <Link
            href="https://forms.gle/d1h4WiZHMv8RPivx6"
            className="py-2 px-4 rounded-full bg-[#14161c] block"
          >
            Join our waitlist
          </Link>
        </div>
      </nav>
      <main className="relative z-10 text-white">
        <Image
          src={heroBg}
          alt=""
          className="absolute top-0 left-0 w-full lg:hidden"
        />
        <div className="absolute top-0 left-0 w-full hidden lg:block">
          <Image
            className="absolute top-0 left-0 w-full"
            src={curvedLine1}
            alt=""
          />
          <Image
            className="absolute top-[100px] left-0 w-full"
            src={curvedLine2}
            alt=""
          />
          <Image
            className="absolute top-[160px] left-0 w-full"
            src={curvedLine3}
            alt=""
          />
          <Image
            className="absolute top-[190px] left-0 w-full"
            src={curvedLine4}
            alt=""
          />
        </div>
        <section className="px-5 relative z-10 max-w-[520px] mx-auto lg:max-w-[unset]">
          <div className="flex max-w-[300px] items-center p-1 mx-auto bg-[#fff]/[0.1] border-white border-[1px] rounded-full">
            <div className="p-2 bg-[#14161c] rounded-full w-[40%] text-center">
              <h2 className="text-xs font-medium">Coming soon🔥</h2>
            </div>
            <div className="text-xs font-medium block grow text-center">
              Face ID clock-in verification
            </div>
          </div>
          <h1 className="font-bold text-2xl text-[28px] text-center capitalize my-5 max-w-[350px] mx-auto lg:text-[64px] lg:leading-[79px] lg:max-w-[872px]">
            expert craftsmanship delivered to your doorstep
          </h1>
          <p className="text-sm text-[#cecece] text-center max-w-[350px] mx-auto mb-10 lg:text-xl lg:max-w-[680px]">
            Connect with skilled artisans for a wide range of home services,
            from plumbing to painting. Book appointments, track progress, and
            pay securely, all in one place.
          </p>
          <form className="">
            {/* <input
              type="email"
              placeholder="Enter your email"
              className="w-full font-outfit py-4 px-10 rounded-full mb-5 text-sm font-medium text-[#434343]"
            /> */}
            <div
              className="p-[1px] rounded-full max-w-[500px] mx-auto"
              style={{
                background:
                  "conic-gradient(from 180.41deg at 50% 94%, #2FD0D7 0deg, #F2F2F2 178.69deg, #418DF4 342.67deg, #2FD0D7 360deg)",
                boxShadow:
                  "0px 3px 2px 0px #FFFFFF1A inset, 0px -2px 4px 0px #73B8BB1A inset, 0px 4px 32px -4px #73B8BB3B",
              }}
            >
              <Link
                href="https://forms.gle/d1h4WiZHMv8RPivx6"
                className="py-4 px-10 rounded-full block text-center w-full bg-[#14161c]"
              >
                Join our waitlist
              </Link>
            </div>
          </form>
        </section>
        <section className="px-5 mt-32 pb-20 relative overflow-hidden ">
          <Image
            src={phoneBg}
            alt=""
            className="absolute top-0 left-0 w-full h-full lg:hidden"
          />
          <div className="lg:max-w-[1114px] lg:mx-auto lg:relative">
            <Image
              src={phoneBgLg}
              alt=""
              className="absolute top-0 left-0 w-full h-full hidden lg:block"
            />
            <div className="max-w-[353px] h-[445px] mx-auto relative lg:max-w-[460px] lg:h-[580px]">
              <Image
                src={handeePhoneFlat}
                alt="handee app"
                className="absolute top-0 left-0 w-[200px] lg:w-[265px]"
              />
              <Image
                src={handeePhoneSide}
                alt="handee app"
                className="absolute bottom-0 right-0 w-[180px] lg:w-[261px]"
              />
            </div>
          </div>
        </section>
        <footer className="px-5 pb-10 w-full relative z-10 bg-transparent max-w-[520px] mx-auto ml:px-0 ml:max-w-none">
          <div
            className="py-[1px] relative lg:max-w-7xl lg:mx-auto after:content[''] after:hidden after:absolute after:-left-[1px] after:top-0 after:h-full after:w-[2px] after:bg-[#020202] before:content[''] before:absolute before:-right-[1px] before:top-0 before:h-full before:w-[2px] before:bg-[#020202] before:hidden xlf:after:block xlf:before:block"
            style={{
              background:
                "conic-gradient(from 180.41deg at 50% 94%, #2FD0D7 0deg, #F2F2F2 178.69deg, #418DF4 342.67deg, #2FD0D7 360deg)",
            }}
          >
            <div className="w-full py-9 bg-[#020202] ml:flex ml:justify-center ml:items-center ml:px-[100px] ml:py-12 ">
              <div className="ml:flex ml:items-center ml:mr-4">
                <Image
                  className="mx-auto mb-2 ml:mr-2"
                  src={handeeLogo}
                  alt="handee logo"
                />
                <p
                  className="text-xl font-medium text-center my-2 mb-4 bg-clip-text text-transparent max-w-[340px] mx-auto ml:max-w-[unset]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #F68740 0%, #EE4E7C 30%, #4377B2 65%, #14B397 100%)",
                  }}
                >
                  Follow us on our socials to stay updated !
                </p>
              </div>
              <div className="flex justify-center items-center space-x-5 w-auto mx-auto ml:mx-0 lg:mr-0">
                {/* <div className="bg-[#212121] rounded-2xl p-4">
                  <Image src={google} alt="google social media icon" />
                </div>
                <div className="bg-[#212121] rounded-2xl p-4">
                  <Image src={x} alt="x social media icon" />
                </div> */}
                <Link
                  href="https://www.instagram.com/gethandees/"
                  className="bg-[#212121] rounded-2xl p-4 block"
                >
                  <Image src={ig} alt="instagram social media icon" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
