import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const links = [
    // {
    //   name: "UpComing",
    //   path: "/upcoming",
    // },
    // {
    //   name: "Shows",
    //   path: "/shows",
    // },
    // {
    //   name: "Account",
    //   path: "/account",
    // },
  ];
  
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate({
      pathname:"/search",
      search:`?q=${e.target[0].value}`
    })
  }
  return (
    <div className="py-12 px-5 lg:px-[95px] bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between gap-3">
        <Link to="/" className="text-nowrap font-[BlackChancery] text-[18px] sm:text-[25px] md:text-[32px] first-letter:text-6xl first-letter:text-blue-900">
          Reel Review
        </Link>

        <nav className="flex items-center gap-16 ">
          {links.map((link, index) => (
            <Link className="text-[25px]" key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        <form action="" onSubmit={handleSubmit}>
          <label className="flex items-center gap-2 input input-bordered">
            <input type="text" className="w-full grow" placeholder="search movies..." name="movie-title" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
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
    </div>
  );
};

export default Navbar;
