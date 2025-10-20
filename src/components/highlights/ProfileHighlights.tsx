export default function ProfileHighlights() {
  return (
    <section className="my-24 mx-6 sm:mx-12 lg:mx-32 grid grid-cols-1 xl:grid-cols-2 gap-10">
      {/* Left Side */}
      <div className="relative inline-block w-full">
        <img
          className="rounded-3xl border border-slate-900 block w-full h-auto"
          src="/public/img/image.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000319]/100 to-transparent rounded-b-xl"></div>
        <div className="absolute bottom-8 left-6 sm:bottom-11 sm:left-10 text-white max-w-[400px] px-2">
          <p className="text-lg sm:text-[28px] font-bold mb-2 leading-snug">
            Collaboration fuels creativity, <br />
            I build through connection and clarity.
          </p>
        </div>
        <svg
          className="hidden sm:block absolute top-[60px] sm:top-[100px] left-[120px] sm:left-[210px]"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 16 16"
        >
          <path
            fill="#D1ACFF"
            d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694L.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
          />
        </svg>
        <div className="hidden sm:block absolute top-[90px] sm:top-[120px] left-[60px] sm:left-[100px] w-20 sm:w-28 h-5 sm:h-7 bg-[#D1ACFF] rounded-b-full rounded-l-full"></div>
        <svg
          className="hidden sm:block absolute bottom-[120px] sm:bottom-[175px] right-[80px] sm:right-[155px]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#F6F056"
            fillRule="evenodd"
            d="M4.38 3.075a1 1 0 0 0-1.305 1.306l7 17a1 1 0 0 0 1.844.013l2.685-6.265a1 1 0 0 1 .525-.525l6.265-2.685a1 1 0 0 0-.013-1.844z"
            clipRule="evenodd"
          />
        </svg>
        <div className="hidden sm:block absolute bottom-[110px] sm:bottom-[150px] right-[30px] sm:right-[40px] w-24 sm:w-30 h-5 sm:h-7 bg-[#F6F056] rounded-b-full rounded-r-full"></div>
      </div>

      {/* Right Side */}
      <div className="grid grid-rows-2 gap-6">
        {/* Top Box */}
        <div className="relative w-full h-[200px] sm:h-[230px] rounded-3xl overflow-hidden border border-indigo-950 flex items-start justify-start px-5 sm:px-7 py-8 sm:py-12">
          <img
            src="/public/img/section input.png"
            alt="world map"
            className="absolute top-24 bottom-0 left-0 w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(345deg,#37394a_0%,transparent_50%)] opacity-70"></div>
          <h2 className="relative z-10 text-white text-lg sm:text-[26px] font-bold max-w-[390px] leading-snug">
            No matter the time zone, I stay connected and responsive.
          </h2>
          <span className="absolute bottom-[50px] sm:bottom-[60px] left-[40px] sm:left-[60px] bg-[#0b0b2a]/70 text-white px-3 sm:px-4 py-1 rounded-xl text-xs sm:text-sm border border-[#1a1b3c]">
            USA
          </span>
          <span className="absolute bottom-[35px] sm:bottom-[40px] left-1/2 -translate-x-1/2 bg-[#0b0b2a]/70 text-white px-3 sm:px-4 py-1 rounded-xl text-xs sm:text-sm border border-[#1a1b3c]">
            Germany
          </span>
          <span className="absolute bottom-[80px] sm:bottom-[90px] right-[60px] sm:right-[80px] bg-[#0b0b2a]/70 text-white px-3 sm:px-4 py-1 rounded-xl text-xs sm:text-sm border border-[#1a1b3c]">
            Russia
          </span>
        </div>

        {/* Bottom Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center w-full h-auto sm:h-[230px] rounded-3xl overflow-hidden border border-indigo-950 p-5 sm:p-0">
          {/* Left Side */}
          <div className="ml-0 sm:ml-7 text-center sm:text-left">
            <p className="text-gray-300 mb-2 text-sm sm:text-base">I constantly try to improve</p>
            <h2 className="text-white text-2xl sm:text-4xl font-bold">My tech stack</h2>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-[#11122B] text-white p-3 sm:p-4 rounded-xl text-center">ReactJS</div>
            <div className="bg-[#11122B] text-white p-3 sm:p-4 rounded-xl text-center">VueJS</div>
            <div className="bg-[#11122B] text-white p-3 sm:p-4 rounded-xl text-center">Express</div>
            <div className="bg-[#11122B] text-white p-3 sm:p-4 rounded-xl text-center">NuxtJS</div>
            <div className="bg-[#11122B] text-white p-3 sm:p-4 rounded-xl text-center">Typescript</div>
            <div className="bg-[#11122B] text-white p-3 sm:p-4 rounded-xl text-center">GraphQL</div>
          </div>
        </div>
      </div>
    </section>
  );
}
