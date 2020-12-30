import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Our Services</a>
          </Link>
        </li>
        <li>
          <Link href="/industries">
            <a>Industries</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
