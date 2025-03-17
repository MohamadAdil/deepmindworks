"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

// JSON Data for Header
const headerData = {
  brand: "Expand at lg",
  links: [
    { name: "Home", href: "/" },
    { name: "Link", href: "/link" },
    {
      name: "Dropdown", submenu: [
        { name: "Action", href: "/action" },
        { name: "Another Action", href: "/another-action" },
        { name: "Something Else", href: "/something-else" }
      ]
    }
  ]
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">{headerData.brand}</Link>
          <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {headerData.links.map((link, index) => (
                <li key={index} className={`nav-item ${link.submenu ? "dropdown" : ""}`}>
                  {link.submenu ? (
                    <>
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        {link.name}
                      </a>
                      <ul className="dropdown-menu">
                        {link.submenu.map((sublink, subIndex) => (
                          <li key={subIndex}>
                            <Link className="dropdown-item" href={sublink.href}>{sublink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link className="nav-link" href={link.href}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
