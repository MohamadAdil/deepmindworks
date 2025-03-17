"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

// Footer Data
const footerData = {
  address: "17504 Carlton Cuevas Rd, Gulfport, MS, 39503",
  phone: "001-123-456-789",
  email: "info@example.com",
  workingHours: "Mon-Fri 8:30 AM - 6:30 PM",
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact-us" },
  ],
  callCenter: "1-800-555-500",
};

export function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4">
            <h5>Where To Find Us</h5>
            <p>
              <MapPin size={16} className="me-2" /> {footerData.address}
            </p>
            <p>
              <Phone size={16} className="me-2" /> {footerData.phone} <br />
              <small>({footerData.workingHours})</small>
            </p>
            <p>
              <Mail size={16} className="me-2" /> {footerData.email}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call Center Section */}
          <div className="col-md-4">
            <h5>Call Center</h5>
            <p className="fs-5">{footerData.callCenter}</p>
            <p>Get a free estimate now!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
