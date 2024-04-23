import { useState, useEffect, useRef } from "react";

const links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "support",
    link: "/404",
  },
  {
    name: "github",
    link: "/",
  },
];

export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleButton = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative md:hidden flex justify-end">
      <button
        type="button"
        onClick={toggleButton}
        className="border_shadow w-fit bg-[var(--clr-card-bgk)] flex gap-2 items-center p-1 rounded-full"
      >
        <div className="text-[var(--clr-base-text)] p-2 border border-[var(--clr-border-shadow)] hover:bg-[var(--clr-tags)] rounded-full">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20.5 16.7222L12.2914 12.1618C12.1102 12.0612 11.8898 12.0612 11.7086 12.1618L3.5 16.7222"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.52844 7.29363L11.7086 11.8382C11.8898 11.9388 12.1102 11.9388 12.2914 11.8382L20.5 7.27783"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 3L12 12"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 19.5V22"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </button>
      <div
        className={`w-[18rem] absolute top-14 right-0 border_shadow rounded-lg bg-[var(--clr-card-bgk)]  ${openMenu ? "block" : "hidden"}`}
        ref={menuRef}
      >
        <div className="text-left text-base p-4">
          <p className="text-[var(--clr-base-text)] mb-2 text-sm">Menu</p>
          <p className="font-bold capitalize text-[var(--clr-h-text)]">home</p>
        </div>
        <ul className="flex flex-col w-full ">
          <div className="p-[3px] border-y-[0.5px] border-[var(--clr-border-shadow)]">
            {links.map((link) => (
              <li
                key={link.name}
                className=" flex items-center gap-4 p-[13px] w-full hover:bg-[var(--clr-tags)] transition-all rounded-md"
              >
                <img
                  src={`/images/icons/${link.name}-icon.svg`}
                  alt="Icono del link"
                  className="text-[var(--clr-base-text)]"
                />
                <a
                  href={link.link}
                  className="text-base capitalize w-full text-[var(--clr-base-text)]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </div>
          <div className="p-[3px]">
            <li className="text-[var(--clr-base-text)] flex items-center gap-4 p-[13px] w-full hover:bg-[var(--clr-tags)] transition-all rounded-md">
              <svg
                width="22px"
                height="22px"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                ></path>
                <path
                  d="M17.5 6.51L17.51 6.49889"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <a href="/" className="text-base capitalize w-full">
                Instagram
              </a>
            </li>
            <li className="text-[var(--clr-base-text)] flex items-center gap-4 p-[13px] w-full hover:bg-[var(--clr-tags)] transition-all rounded-md">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                ></path>
                <path
                  d="M20 3L4 21"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <a href="/" className="text-base capitalize w-full">
                Twitter
              </a>
            </li>
          </div>
          <div className="p-[3px] border-t-[0.5px] border-t-[var(--clr-border-shadow)]">
            <li className="text-[var(--clr-base-text)] text-base flex items-center gap-4 p-[13px] w-full hover:bg-[var(--clr-tags)] transition-all rounded-md">
              <img src={`/images/icons/arrow-icon.svg`} alt="" />
              <a href="#top" className="w-full">
                Scroll to top
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
