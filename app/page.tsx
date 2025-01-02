import Image from "next/image";

import handeeLogo from "@/public/svg/handee.svg";
import handeePhoneFlat from "@/public/png/handees-phone-flat.png";
import handeePhoneSide from "@/public/png/handees-phone-side.png";

import x from "@/public/svg/x.svg";
import ig from "@/public/svg/ig.svg";
import google from "@/public/svg/google.svg";

export default function Home() {
  return (
    <div
      className="min-h-dvh font-outfit relative"
      style={{
        background: "linear-gradient(180deg, #14161C 0%, #000000 100%)",
      }}
    >
      <div
        className="decor-ellipse absolute top-0 left-0 right-0 w-full h-[244px] rounded-b-full blur-[150px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(115, 184, 187, 0.5) 0%, rgba(65, 141, 244, 0) 92.47%)",
        }}
      ></div>

      <nav className="text-white flex justify-between items-center px-5 py-10 relative z-10">
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
          }}
        >
          <button className="py-2 px-4 rounded-full bg-[#14161c]">
            Join our waitlist
          </button>
        </div>
      </nav>
      <main className="relative z-10 text-white">
        <section className="px-5">
          <div className="flex w-[300px] items-center p-1 mx-auto bg-[#fff]/[0.1] border-white border-[1px] rounded-full">
            <div className="p-2 bg-[#14161c] rounded-full w-[40%] text-center">
              <h2 className="text-xs font-medium">Coming soon🔥</h2>
            </div>
            <div className="text-xs font-medium block grow text-center">
              Face ID clock-in verification
            </div>
          </div>
          <h1 className="font-bold text-2xl text-[28px] text-center capitalize my-5 max-w-[350px] mx-auto ">
            expert craftsmanship delivered to your doorstep
          </h1>
          <p className="text-sm text-[#cecece] text-center max-w-[350px] mx-auto mb-10">
            Connect with skilled artisans for a wide range of home services,
            from plumbing to painting. Book appointments, track progress, and
            pay securely, all in one place.
          </p>
          <form className="">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full font-outfit py-4 px-10 rounded-full mb-5 text-sm font-medium text-[#434343]"
            />
            <div
              className="p-[1px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 180.41deg at 50% 94%, #2FD0D7 0deg, #F2F2F2 178.69deg, #418DF4 342.67deg, #2FD0D7 360deg)",
              }}
            >
              <button className="py-4 px-10 rounded-full w-full bg-[#14161c]">
                Join our waitlist
              </button>
            </div>
          </form>
        </section>
        <section className="px-5 mt-32 pb-32">
          <div className="w-full h-[445px] relative">
            <Image
              src={handeePhoneFlat}
              alt="handee app"
              className="absolute top-0 left-0 w-[200px]"
            />
            <Image
              src={handeePhoneSide}
              alt="handee app"
              className="absolute bottom-0 right-0 w-[180px]"
            />
          </div>
        </section>
        <footer className="px-5 pb-10 w-full">
          <div
            className="py-[1px]"
            style={{
              background:
                "conic-gradient(from 180.41deg at 50% 94%, #2FD0D7 0deg, #F2F2F2 178.69deg, #418DF4 342.67deg, #2FD0D7 360deg)",
            }}
          >
            <div className="w-full py-9 bg-[#020202]">
              <Image className="mx-auto" src={handeeLogo} alt="handee logo" />
              <p
                className="text-xl font-medium text-center my-2 mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F68740 0%, #EE4E7C 30%, #4377B2 65%, #14B397 100%)",
                }}
              >
                Follow us on all our socials to stay updated !
              </p>
              <div className="flex justify-between items-center space-x-5 w-[220px] mx-auto">
                <div className="bg-[#212121] rounded-2xl p-4">
                  <Image src={google} alt="google social media icon" />
                </div>
                <div className="bg-[#212121] rounded-2xl p-4">
                  <Image src={x} alt="x social media icon" />
                </div>
                <div className="bg-[#212121] rounded-2xl p-4">
                  <Image src={ig} alt="instagram social media icon" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
