import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar h-24 w-screen border shadow-sm px-8">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="font-bold ">
          <Link href="/">
            <a className="text-shadow">NextApp</a>
          </Link>
        </h1>
        <div className="nav-menu flex gap-4 text-gray-600 font-light">
          <Link href="/">
            <a className="hover:text-red-900 transition-all duration-500 ease-in-out text-shadow p-1">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:text-red-900 transition-all duration-500 ease-in-out text-shadow p-1">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-red-900 transition-all duration-500 ease-in-out text-shadow p-1">
              myNextApp
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
