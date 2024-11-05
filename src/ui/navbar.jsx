import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "UpComing",
      path: "/upcoming",
    },
    {
      name: "Shows",
      path: "/shows",
    },
    {
      name: "Account",
      path: "/account",
    },
  ];
  return (
    <header className="py-12 px-[95px]">
      <div className="flex items-center justify-between">
        <h2 className="font-[BlackChancery] text-[32px] first-letter:text-6xl first-letter:text-blue-900">
          Reel Review
        </h2>

        <nav className=" flex items-center gap-16">
          {links.map((link, index) => (
            <Link className="text-3xl" key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        <form action="">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="search movies..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
