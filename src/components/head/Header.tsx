import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative w-full min-h-[700px] flex flex-col items-center text-center px-4 sm:px-6 md:px-10">

      <div className="w-full justify-center pt-6 sm:pt-8 md:pt-10">
        <Navbar  />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center mt-10 sm:mt-14 md:mt-16">
        <p className="text-[#E4ECFF] text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 sm:mb-4">
          Where Design Meets Code
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
          Building the bridge between <br className="hidden sm:block" />
          <span className="text-[#C5A8FF]">imagination and function</span>
        </h1>

        <p className="text-[#E4ECFF] text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-[90%] sm:max-w-[600px]">
          Hey! I’m Hani, a React Front-End Developer based in Iran.
        </p>

        <a
          href="#"
          className="inline-block bg-[#1a1b2e]/60 border border-[#2f2f44] text-[#E4ECFF] px-6 sm:px-8 py-2 sm:py-3 rounded-2xl backdrop-blur-md hover:bg-[#2f2f44]/60 transition-all duration-300 text-sm sm:text-base"
        >
          See my work →
        </a>
      </div>
    </header>
  );
}
