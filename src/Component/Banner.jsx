import React from 'react'
import cvpdf from '../assets/AshwinJethawaResume (2)-2 (2).pdf'
const Banner = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = cvpdf;
        link.download = "Ashwin-Jethawa-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id="Home">
            <div>
                <div className="container">
                    <div className="Greeting-Container">
                        <h1>Ashwin Jethawa</h1>
                        <h5>AEM Developer/ AEM EDS Developer <br />
                        /Frontend Developer /Web Developer</h5>
                        <button onClick={()=>{handleDownload()}}> Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner