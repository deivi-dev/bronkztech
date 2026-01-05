import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import googleLogo from "../../assets/google.svg";
import githubLogo from "../../assets/github.svg";
import { Menu, Smartphone } from "lucide-react";
import { MobileSideBar } from "./MobileSidebar.tsx";
import { renderNavItems } from "./navItems.tsx";
import { Modal } from "../modal/Modal.tsx";

const Header = () => {
  const accountName = "";
  const accountEmail = "";
  const accountIcon = "";

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const privacePolicy = (
    <>
      By continuing, you agree to our Terms of Service and acknowledge our{" "}
      <a href="">Privacy Policy</a>. Your account lets you save and share your
      experiments.
    </>
  );

  const phoneLogin = (
    <>
      <div className="phoneLogin">
        <Smartphone size={16} className="iconPhone" />
        <p>Continue with phone number</p>
      </div>
    </>
  );

  const googleLogin = (
    <>
      <div className="googleLogin">
        <img className="accountAvatar" src={accountIcon} alt="Account avatar" />

        <div className="googleText">
          <span className="primaryAccount">Continue as {accountName}</span>
          <br />
          <span className="secondayAccount">{accountEmail}</span>
        </div>

        <img className="googleLogo" src={googleLogo} alt="Google logo" />
      </div>
    </>
  );

  const githubLogin = (
    <>
      <div className="githubLogin">
        <img className="githubLogo" src={githubLogo} alt="Github icon" />
        <p>Continue with Github</p>
      </div>
    </>
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <button
          type="button"
          className="mobileMenuBtn"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        <a href="https://bronkztech.com.br" className="menuLogo no-decoration">
          <img src={logo} alt="Bronkz logo" />
          <span className="logoTitle">Bronkztech</span>
        </a>

        <div className="itemsNavbar">
          <ul>{renderNavItems(16)}</ul>

          <button type="button" className="navBtn loginBtn">
            Login
          </button>
          <button
            type="button"
            className="navBtn registerBtn"
            onClick={() => setModalOpen(true)}
          >
            Register
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div className="sidebarOverlay" onClick={() => setMenuOpen(false)} />
          <MobileSideBar onClose={() => setMenuOpen(false)} />
        </>
      )}

      <Modal
        isOpen={modalOpen}
        title="Create your account"
        description={privacePolicy}
        content1={phoneLogin}
        content2={googleLogin}
        content3={githubLogin}
      />
    </>
  );
};

export { Header };
