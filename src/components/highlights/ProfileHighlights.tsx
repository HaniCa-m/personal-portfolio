export default function ProfileHighlights() {
  return (
    <section className="my-24 mx-32 grid grid-cols-2 gap-10 ">
      <div className="relative inline-block">
        <img
          className="rounded-3xl border-1 border-slate-900 block"
          src="/public/img/image.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000319]/100 to-transparent rounded-b-xl"></div>
        <div className="absolute bottom-11 left-10 text-white max-w-[400px]">
          <p className="text-[28px] font-bold mb-2">
            Collaboration fuels creativity, <br />I build through connection and
            clarity.
          </p>
        </div>
        <svg
          className="absolute top-[100px] left-[210px]"
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
        <div className="absolute top-[120px] left-[100px] w-28 h-7 bg-[#D1ACFF] rounded-b-full rounded-l-full"></div>
        <svg
          className="absolute bottom-[175px] right-[155px]"
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
        <div className="absolute bottom-[150px] right-[40px] w-30 h-7 bg-[#F6F056] rounded-b-full rounded-r-full"></div>
      </div>
      <div className="grid grid-rows-2">
        <div className="relative w-[580px] h-[230px] rounded-3xl overflow-hidden  border-1 border-indigo-950 flex items-start justify-start px-7 py-12">
        <img
          src="/public/img/section input.png"
          alt="world map"
          className="absolute top-24 bottom-0 left-0 w-full h-full object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-[linear-gradient(345deg,#37394a_0%,transparent_50%)] opacity-70"></div>
        <h2 className="relative z-10 bottom-6 text-white text-[26px] font-bold max-w-[390px] leading-snug">
          No matter the time zone, I stay connected and responsive.
        </h2>
        <span className="absolute bottom-[60px] left-[60px] bg-[#0b0b2a]/70 text-white px-4 py-1 rounded-xl text-sm border border-[#1a1b3c]">
          USA
        </span>

        <span className="absolute bottom-[40px] left-1/2 -translate-x-1/2 bg-[#0b0b2a]/70 text-white px-4 py-1 rounded-xl text-sm border border-[#1a1b3c]">
          Germany
        </span>

        <span className="absolute bottom-[90px] right-[80px] bg-[#0b0b2a]/70 text-white px-4 py-1 rounded-xl text-sm border border-[#1a1b3c]">
          Russia
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 items-center w-[580px] h-[230px] rounded-3xl overflow-hidden border-1 border-indigo-950">
        {/* Left Side */}
        <div className="ml-7">
          <p className="text-gray-300 mb-2">I constantly try to improve</p>
          <h2 className="text-white text-4xl font-bold">My tech stack</h2>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#11122B] text-white p-4 rounded-xl text-center">
            ReactJS
          </div>
          <div className="bg-[#11122B] text-white p-4 rounded-xl text-center">
            VueJS
          </div>
          <div className="bg-[#11122B] text-white p-4 rounded-xl text-center">
            Express
          </div>
          <div className="bg-[#11122B] text-white p-4 rounded-xl text-center">
            NuxtJS
          </div>
          <div className="bg-[#11122B] text-white p-4 rounded-xl text-center">
            Typescript
          </div>
          <div className="bg-[#11122B] text-white p-4 rounded-xl text-center">
            GraphQL
          </div>
        </div>
      </div>
      </div>

      
    </section>
  );
}
