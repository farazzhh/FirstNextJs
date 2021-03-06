const Footer = () => {
    return (
      <footer className="navbar h-24 w-screen border shadow-sm px-8">
        <div className="container mx-auto flex justify-between items-center h-full">
          <h1 className="">
            <a href="#" className="text-shadow ">
              NextApp
            </a>
          </h1>

          <p className="text-shadow text-sm font-light">
            Copyright 2021 Farazzhh
          </p>
          <a href="https://github.com/farazzhh" target="blank"  className="text-shadow">
            myGithub
          </a>
        </div>
      </footer>
    );
}
 
export default Footer;