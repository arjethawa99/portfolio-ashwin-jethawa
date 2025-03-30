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
                    { icon: FaFacebook, link: "https://www.facebook.com/ashwin.jethawa.9?mibextid=ZbWKwL" },
                    { icon: FaInstagram, link: "https://www.instagram.com/er___ashwin45?igsh=cmE2OWNramI0dnBr" },
                    { icon: FaLinkedin, link: "https://www.linkedin.com/in/ashwin-jethawa-195590149" },
                    { icon: FaGithub , link: "https://github.com/arjethawa99" },
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
                    href="https://leetcode.com/u/Ashwin2227/"
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
