"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

// Header Data
const headerData = {
  brand: "Expand at lg",
  links: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Services",
      submenu: [
        { name: "Web Development", href: "/web-development" },
        { name: "Another Action", href: "/another-action" },
        { name: "Something Else", href: "/something-else" },
      ],
    },
    { name: "Contact Us", href: "/contact-us" },
  ],
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            {headerData.brand}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} color="white" />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              {headerData.links.map((link, index) =>
                link.submenu ? (
                  <li
                    key={index}
                    className="nav-item dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link.name}
                    </a>
                    <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                      {link.submenu.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <Link className="dropdown-item" href={sublink.href}>
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index} className="nav-item">
                    <Link className="nav-link" href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
