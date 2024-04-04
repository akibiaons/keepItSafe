import React, { useState } from "react";

export default function Header() {
  //
  const [isOpen, setIsOpen] = useState(false);
  //
  return (
    <nav className={`${isOpen ? "" : ""}`}>
      {/* Heading text */}
      <div className="flex">
        <h2>K.I.S (Logo)</h2>
        <div>
          <ul>
            <li>About Us</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
