import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                     LinkedIn<FaLinkedin style={{color: "rgb(0, 119, 181)"}} size={30} />
                </>
            ),
            href: "https://ng.linkedin.com/in/precious-ebere-838a68263",
            style: "rounded-tr-md"
        },
        {
            id:2,
            child: (
                <>
                     Github<FaGithub style={{color: "white"}} size={30} />
                </>
            ),
            href: "https://github.com/preshbrown"
        },
        {
            id:3,
            child: (
                <>
                     Twitter<FaTwitter style={{color: "rgb(29, 161, 242)"}} size={30} />
                </>
            ),
            href: "twitter.com/E_presh27840?t=MxxOIBw4M7xwDGftGxEFqQ&s=09"
        },
        {
            id:4,
            child: (
                <>
                     Mail<HiOutlineMail style={{color: "red"}} size={30} />
                </>
            ),
            href: "mailto:preciousebere090@gmail.com"
        },
        {
            id:5,
            child: (
                <>
                     Facebook<FaFacebook style={{color: "rgb(66, 103, 178)"}} size={30} />
                </>
            ),
            href: "https://www.facebook.com/precious.brown.98892?mibextid=ZbWKwL"
        },
        {
            id:6,
            child: (
                <>
                     Resume<BsFillPersonLinesFill style={{color: "white"}} size={30} />
                </>
            ),
            href: "/EberePreciousDaniel.pdf",
            style: "rounded-br-md",
            download:true
        },
    ]



  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(link => (
                <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + link.style }>
                <a 
                  href={link.href}
                  className="flex justify-between items-center w-full text-white" 
                  download={link.download}
                  target="_blank"
                  rel="noreferrer"
                  >
                    {link.child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks