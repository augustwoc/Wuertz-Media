import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full fixed z-[1] top-0 shadow-lg p-3">
      <Link href="/">
        <h1 className="font-bold sm:text-xl text-sm cursor-pointer">
          WUERTZ MEDIA
        </h1>
      </Link>
      <Link href="/about-us">
        <p className="font-medium sm:text-xl text-sm cursor-pointer hover:text-slate-100 transition">
          About us
        </p>
      </Link>
      <a href="https://calendly.com/wuertzmedia/60-minute-meeting?back=1&month=2022-11">
        <div className="sm:text-lg text-md bg-white pr-8 pl-8 pt-2 pb-2 rounded-md text-black font-medium flex items-cente hover:bg-slate-100 transition">
          <p>Book a Call</p>
          <div className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
