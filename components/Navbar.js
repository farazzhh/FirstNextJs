const Navbar = () => {
    return (
      <nav className="navbar h-24 w-screen border">
        <div className="container mx-auto flex justify-between items-center h-full">
          <h1 className="font-black ">
            <a href="#" className="text-shadow-lg">
              NextApp
            </a>
          </h1>
          <div className="nav-menu flex gap-4 text-gray-600">
            <a
              href="#"
              className="hover:text-red-900 transition-all duration-500 ease-in-out p-1"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-red-900 transition-all duration-500 ease-in-out p-1"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-red-900 transition-all duration-500 ease-in-out p-1"
            >
              myNextApp
            </a>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;