import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import '../Css/Aboutus.css';

const Team = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

  return (
    <>
      <div className="heading">
        <h1 className="team-h1">Meet Our Team</h1>
        <p className="team-p">Get to know the faces behind the website</p>
      </div>

      <div className="team-container">
        {/* Team member 1 details starts */}
        <div
          className="member"
          onMouseOver={() => {
            setIsHover1(true);
          }}
          onMouseLeave={() => {
            setIsHover1(false);
          }}
        >
          <div className="img">
            <img
              src="https://res.cloudinary.com/dm9axcf83/image/upload/v1711617429/vedhas_naik_abtsie.jpg"
              alt="member1"
            />
          </div>

          <h2 className="member-name">Vedhas Naik</h2>
          <p className="position">Full-Stack Web3 Developer</p>
          <hr className="hr" />
          <p className={isHover1 ? "contribution-none" : "contribution"}>
            <li>Team Leader</li>
            <li>Smart Contract</li>
            <li>Integration</li>
          </p>

          <p className={isHover1 ? "social" : "social-none"}>
            <a href="https://www.instagram.com/vedhas_1201/" className="icon-a">
              <AiFillInstagram className="icon-social" />
            </a>
            <a href="https://github.com/NaikVedhas" className="icon-a">
              <IoLogoGithub className="icon-social" />
            </a>
            <a
              href="https://www.linkedin.com/in/vedhas-naik-005378253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTjV5vZLCSmmmNhiC1OEZyw%3D%3D"
              className="icon-a"
            >
              <IoLogoLinkedin className="icon-social" />
            </a>
            <a
              href="https://x.com/NaikVedhas58616?t=8h08Xbvh3GMAlb9y-SOmuQ&s=08"
              className="icon-a"
            >
              <FaSquareXTwitter className="icon-social" />
            </a>
          </p>
        </div>
        {/* Team member 1 details ends */}

        {/* Team member 2 details starts */}
        <div
          className="member"
          onMouseOver={() => {
            setIsHover2(true);
          }}
          onMouseLeave={() => {
            setIsHover2(false);
          }}
        >
          <div className="img">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/641/623/small_2x/avatar-of-a-cute-little-boy-isolated-illustration-in-cartoon-style-vector.jpg"
              alt="member2"
            />
          </div>
          <h2 className="member-name">Dwij Sawant</h2>
          <p className="position">Full-Stack Web3 Developer</p>
          <hr className="hr" />
          <p className={isHover2 ? "contribution-none" : "contribution"}>
            <li>Smart Contract</li>
            <li>Integration</li>
          </p>
          <p className={isHover2 ? "social" : "social-none"}>
            <a href="https://www.instagram.com/dwij_sawant/" className="icon-a">
              <AiFillInstagram className="icon-social" />
            </a>
            <a href="https://github.com/DwijSawant" className="icon-a">
              <IoLogoGithub className="icon-social" />
            </a>
            <a
              href="https://www.linkedin.com/in/dwij-sawant-06b777195/"
              className="icon-a"
            >
              <IoLogoLinkedin className="icon-social" />
            </a>
            <a
              href="https://www.linkedin.com/in/dwij-sawant-06b777195/"
              className="icon-a"
            >
              <FaSquareXTwitter className="icon-social" />
            </a>
          </p>
        </div>
        {/* Team member 2 details ends */}

        {/* Team member 3 details starts */}
        <div
          className="member"
          onMouseOver={() => {
            setIsHover3(true);
          }}
          onMouseLeave={() => {
            setIsHover3(false);
          }}
        >
          <div className="img">
            <img
              src="https://res.cloudinary.com/dm9axcf83/image/upload/v1711618939/aastha-profile-img_m2csce.jpg"
              alt="member3"
            />
          </div>

          <h2 className="member-name">Aastha Mhatre</h2>
          <p className="position">Front-End Developer</p>
          <hr className="hr" />
          <p className={isHover3 ? "contribution-none" : "contribution"}>
            <li>Front-End</li>
            <li>UI Design</li>
          </p>
          <p className={isHover3 ? "social" : "social-none"}>
            <a href="https://www.instagram.com/aastha_2675/" className="icon-a">
              <AiFillInstagram className="icon-social" />
            </a>
            <a href="https://github.com/Aastha2675" className="icon-a">
              <IoLogoGithub className="icon-social" />
            </a>
            <a
              href="https://www.linkedin.com/in/aastha-mhatre-3226722b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="icon-a"
            >
              <IoLogoLinkedin className="icon-social" />
            </a>
            <a
              href="https://x.com/AasthaMhatre?t=YxEVqip8ExYRDolX16OCEg&s=08"
              className="icon-a"
            >
              <FaSquareXTwitter className="icon-social" />
            </a>
          </p>
        </div>
        {/* Team member 3 details ends */}

        {/* Team member 4 details starts */}
        <div
          className="member"
          onMouseOver={() => {
            setIsHover4(true);
          }}
          onMouseLeave={() => {
            setIsHover4(false);
          }}
        >
          <div className="img">
            <img
              src="https://res.cloudinary.com/dm9axcf83/image/upload/v1711617342/nisarga_kale_vqv3pv.jpg"
              alt="member4"
            />
          </div>

          <h2 className="member-name">Nisarga Kale</h2>
          <p className="position">Front-End Developer</p>
          <hr className="hr" />
          <p className={isHover4 ? "contribution-none" : "contribution"}>
            <li>Front-End</li>
            <li>UI Design</li>
          </p>
          <p className={isHover4 ? "social" : "social-none"}>
            <a
              href="https://www.instagram.com/nisargakale/?next=%2F"
              className="icon-a"
            >
              <AiFillInstagram className="icon-social" />
            </a>
            <a href="https://github.com/nisargakale2107" className="icon-a">
              <IoLogoGithub className="icon-social" />
            </a>
            <a
              href="https://www.linkedin.com/in/nisarga-kale-a35627258/"
              className="icon-a"
            >
              <IoLogoLinkedin className="icon-social" />
            </a>
            <a
              href="https://twitter.com/nisarga18225?t=I0jCpcD4nTHblz8CPJ8cIQ&s=03"
              className="icon-a"
            >
              <FaSquareXTwitter className="icon-social" />
            </a>
          </p>
        </div>
        {/* Team member 4 details ends */}
      </div>

      <div className="footer">
        Copyright &copy; 2024 Ethereal Elite. All rights reserved.
      </div>
    </>
  );
};

export default Team;
