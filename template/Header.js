import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link href="/">
          <a className="navbar-brand">Example Next JS</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${router.pathname === "/" ? "active" : ""}`}
            >
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li
              className={`nav-item disabled ${
                router.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link href="/contact">
                <a className="nav-link disabled">Contact</a>
              </Link>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
