import { useState } from "react";

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

  const toggleButton = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative grid place-items-center bg-var md:hidden">
      <button
        type="button"
        onClick={toggleButton}
        className="w-[9.35rem] bg-[var(--clr-card-bgk)] flex gap-2 items-center p-1 border border-[var(--clr-tags-hover)] rounded-xl"
      >
        <div className="p-2 border border-[var(--clr-tags-hover)] bg-[var(--clr-tags)] rounded-lg">
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
        <div className="text-left mr-3">
          <p>Menu</p>
          <p className="font-bold capitalize">home</p>
        </div>
        {/* <svg
          width="20px"
          height="20px"
          strokeWidth="1.1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M8 14.5714L6.17716 12.8354C5.53522 12.224 4.51329 12.2705 3.92953 12.9377V12.9377C3.40196 13.5406 3.41749 14.4453 3.96544 15.0298L9.90739 21.3679C10.2855 21.7712 10.8127 22 11.3655 22C12.4505 22 14.2343 22 16 22C18.4 22 20 20 20 18C20 18 20 18 20 18C20 18 20 11.1429 20 9.42859"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17 9.99995C17 9.99995 17 9.87483 17 9.42852C17 7.1428 20 7.1428 20 9.42852"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14 9.99998C14 9.99998 14 9.17832 14 8.2857C14 5.99998 17 5.99998 17 8.2857C17 8.50885 17 9.2054 17 9.42855C17 9.87487 17 9.99998 17 9.99998"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11 10.0001C11 10.0001 11 8.61584 11 7.50005C11 5.21434 14 5.21434 14 7.50005C14 7.50005 14 7.50005 14 7.50005C14 7.50005 14 8.06261 14 8.28577C14 9.17839 14 10.0001 14 10.0001"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 14.5714V3.5C8 2.67157 8.67157 2 9.5 2V2C10.3284 2 11 2.67056 11 3.49899C11 4.68968 11 6.34156 11 7.5C11 8.61578 11 10 11 10"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg> */}
      </button>
      <div
        className={`mobile_menu absolute w-[9.35rem]  top-14 left-0  ${openMenu ? "block" : "hidden"}`}
      >
        <ul className="p-1 flex flex-col w-full  border border-[var(--clr-tags-hover)] rounded-xl bg-[var(--clr-card-bgk)]">
          {links.map((link) => (
            <li
              key={link.name}
              className="flex items-center p-2 w-full hover:bg-[var(--clr-tags)] transition-all rounded-md"
            >
              <a href={link.link} className="capitalize w-full">
                {link.name}
              </a>
              <div className="h-2 w-2 rounded-full bg-slate-400"></div>
            </li>
          ))}
          <li className="p-2 w-full border-b-[1px] border-[var(--clr-tags)]">
            <h3>Our Socials</h3>
          </li>
          <li className="flex items-center p-2 w-full hover:bg-[var(--clr-tags)] transition-all rounded-md">
            <a href="/" className="capitalize w-full">
              Instagram
            </a>
            <svg
              width="18px"
              height="18px"
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
          </li>
          <li className="flex items-center p-2 w-full hover:bg-[var(--clr-tags)] transition-all rounded-md">
            <a href="/" className="capitalize w-full">
              Twitter
            </a>
            <svg
              width="18px"
              height="18px"
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
          </li>
        </ul>
      </div>
    </div>
  );
}
