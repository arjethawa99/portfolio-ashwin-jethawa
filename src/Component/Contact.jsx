import { FaFacebook, FaGithub , FaInstagram, FaLinkedin } from "react-icons/fa"

const SocialMediaIcons = () => {
    
    return (
        <div className="main-container-contact">
            {/* Heading */}
            <div className="headline">
                <h1 className="fade-in">Get in Touch</h1>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
                {[
                    { icon: FaFacebook, link: "https://facebook.com" },
                    { icon: FaInstagram, link: "https://instagram.com" },
                    { icon: FaLinkedin, link: "https://linkedin.com" },
                    { icon: FaGithub , link: "https://github.com/" },
                ].map(({ icon: Icon, link }, index) => (
                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon bounce"
                        style={{ animationDelay: `${index * 0.2}s` }} // Delays bounce animation for each icon
                    >
                        <Icon size={40} />
                    </a>
                ))}
                <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                        alt="LeetCode"
                        className="leetcode-icon"
                    />
                </a>
            </div>
        </div>
    );
};

export default SocialMediaIcons;
