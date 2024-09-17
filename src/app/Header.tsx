import React from "react";
import "./Header.css"; // Pastikan Anda membuat file CSS ini

const Header: React.FC = () => {
  return (
    <header className="header">
      <div
        className="logo-left"
        onClick={() => window.open("https://uhnsugriwa.ac.id/")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://res.cloudinary.com/dr8dzahhw/image/upload/v1724736625/rclimerx96mykamipbrg.png" alt="Logo Left" />
      </div>
      <div className="title">
        <h1
          onClick={() => window.open("https://web-bem-fda-official.vercel.app/")}
          style={{ cursor: "pointer" }}
        >
          <img src="https://res.cloudinary.com/dr8dzahhw/image/upload/v1724736453/qxa0eckzsqmvqvs2ycsa.png" alt="BEM FDA" className="icon-bem" />
          BEM FDA OFFICIAL
        </h1>
      </div>
      <div
        className="logo-right"
        onClick={() => window.open("https://www.instagram.com/orkemas_fda/")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://res.cloudinary.com/dr8dzahhw/image/upload/v1724736600/hfk5zbffcfgh5p0dcwqa.png" alt="Logo Right" />
      </div>
    </header>
  );
};

export default Header;
