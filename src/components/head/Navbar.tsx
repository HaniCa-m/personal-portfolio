export default function Navbar() {
  return (
    <>
      {/* نورها — به صورت absolutely positioned نسبت به کل صفحه */}
      <img
        src="/img/spotlight.png"
        alt="left light"
        className="absolute top-0 left-0 w-[60vw] sm:w-[45vw] md:w-[40vw] max-w-[600px] opacity-80 pointer-events-none select-none"
      />
      <img
        src="/img/spotlight (1).png"
        alt="right light"
        className="absolute top-0 right-0 w-[60vw] sm:w-[45vw] md:w-[40vw] max-w-[600px] opacity-80 pointer-events-none select-none"
      />

      {/* نوبار اصلی */}
      <nav className="absolute top-[74px] left-1/2 -translate-x-1/2 z-10 justify-center gap-8 hidden sm:flex">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </nav>
    </>
  );
}
