import { HiArrowUpRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  
  const location = useLocation();

  const getClassNameByPath = (path) => location.pathname === path ? "bg-primary border border-border/50 font-medium" : "text-secondary-text";

  return (
    <>
        <a
            href="https://pawangrg.com.np"
            target="_blank"
            className="bg-primary text-secondary-text flex items-center justify-center gap-2 py-3 text-sm decoration-accent/50 hover:underline w-full"
        >
            <span>Visit my personal website</span>
            <HiArrowUpRight className="text-accent translate-y-px" />
        </a>
        <nav className="sticky top-0 bg-secondary px-8 py-3 flex flex-row justify-between items-center gap-4 border-b border-t border-border/30 w-full">
            <Link to="/" className="font-kumbh gap-1 flex text-lg">
              <span className="text-accent">Endux</span>
              <span>Blogs</span>
            </Link>
            <div className="flex flex-row gap-2">
              <Link to="/" className={`px-4 py-2 rounded-md ${getClassNameByPath("/")}`}>Home</Link>
              <Link to="/blog" className={`px-4 py-2 rounded-md ${getClassNameByPath("/blog")}`}>Blog</Link>
              <Link to="/about" className={`px-4 py-2 rounded-md ${getClassNameByPath("/about")}`}>About</Link>
            </div>
            <a href="mailto:pg.pawangurung@gmail.com" className="button">Contact Me</a>
        </nav>
    </>
  )
}

export default Navbar