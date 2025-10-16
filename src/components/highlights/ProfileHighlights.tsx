export default function ProfileHighlights() {
  return (
    <section>
      <div className="my-24 mx-32">
        <div className="relative inline-block">
          <img
            className="rounded-3xl border-1 border-slate-900 h-[541px] w-[689px] block"
            src="/public/img/image.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000319]/100 to-transparent rounded-b-xl"></div>
          <div className="absolute bottom-11 left-10 text-white max-w-[400px]">
            <p className="text-[28px] font-bold mb-2">
              Collaboration fuels creativity, <br />
              I build through connection and clarity.
            </p>
          </div>
          <svg className="absolute top-[100px] left-[210px]" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#D1ACFF" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694L.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/></svg>
          <div className="absolute top-[120px] left-[100px] w-28 h-7 bg-[#D1ACFF] rounded-b-full rounded-l-full"></div>
          <svg className="absolute bottom-[166px] right-[176px]"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F6F056" fill-rule="evenodd" d="M4.38 3.075a1 1 0 0 0-1.305 1.306l7 17a1 1 0 0 0 1.844.013l2.685-6.265a1 1 0 0 1 .525-.525l6.265-2.685a1 1 0 0 0-.013-1.844z" clip-rule="evenodd"/></svg>
          <div className="absolute bottom-[140px] right-[60px] w-30 h-7 bg-[#F6F056] rounded-b-full rounded-r-full"></div>
        </div>
      </div>
    </section>
  );
}
