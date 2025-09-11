import { FaGithub, FaLinkedin } from "react-icons/fa";

const ICON_COLOR = "#9F7C19";

const SocialIcons = ({ resumeLink }) => {
  return (
    <div className="SocialIcons flex gap-4">
      <a
        href="https://github.com/dakotafabro"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: ".25rem" }}
        title="Visit Dakota's GitHub"
      >
        <FaGithub size={30} color={ICON_COLOR} className="social-icon-link" />
      </a>
      <a
        href="https://www.linkedin.com/in/dakotafabro"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: ".25rem" }}
        title="Visit Dakota's LinkedIn"
      >
        <FaLinkedin size={30} color={ICON_COLOR} className="social-icon-link" />
      </a>
      <a
        href="https://calendly.com/dakotafabrodev/30min"
        target="_blank"
        rel="noopener noreferrer"
        title="See Dakota's Calendly"
      >
        <svg
          className="social-icon-link"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={ICON_COLOR}
          viewBox="0 0 24 24"
        >
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
        </svg>
      </a>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 resume-download"
        title="Download Dakota's Resume"
      >
        <svg
          className="social-icon-link"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={ICON_COLOR}
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
          <path d="M12 12v4.17l-1.59-1.58L9 16l3 3 3-3-1.41-1.41L13 16.17V12h-1z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
