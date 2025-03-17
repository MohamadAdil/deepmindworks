"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

// JSON Data for Footer
const footerData = {
  address: "17504 Carlton Cuevas Rd, Gulfport, MS, 39503",
  phone: "001123456789",
  email: "info@example.com",
  workingHours: "Mon-Fri 8:30am - 6:30pm",
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about-us" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact-us" }
  ],
  callCenter: "1-800-555-500"
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Where To Find Us</h5>
            <p><MapPin size={16} /> {footerData.address}</p>
            <p><Phone size={16} /> {footerData.phone} ({footerData.workingHours})</p>
            <p><Mail size={16} /> {footerData.email}</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              {footerData.quickLinks.map((link, index) => (
                <li key={index}><Link href={link.href}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Call Center</h5>
            <p>{footerData.callCenter}</p>
            <p>and get a free estimate</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
