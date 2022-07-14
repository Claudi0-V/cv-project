import { Link } from "react-router-dom";

const Header = ({ step }) => {
  return (
    <header>
      <Link to="/" className="resume-header-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 6v4h4V6H7zm0 6v2h10v-2H7zm0 4v2h10v-2H7zm6-9v2h4V7h-4z"
            style={{ fill: "#0476D0" }}
          />
        </svg>
        <span>Resume Generator</span>
      </Link>
      <Link to="/cv" className="preview green-button">
        Preview
      </Link>
    </header>
  );
};

export default Header;
