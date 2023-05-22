import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Bottom = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                  <FaLinkedin style={{backgroundColor : "transparent", color: "rgb(0, 119, 181)"}} size={22} />
                </>
            ),
            href: "https://ng.linkedin.com/in/precious-ebere-838a68263"
        },
        {    
            id:2,
            child: (
                <>
                     <FaGithub style={{backgroundColor : "transparent", color: "white"}} size={22} />
                </>
            ),
            href: "https://github.com/preshbrown"
        },
        {
            id:3,
            child: (
                <>
                     <FaTwitter style={{backgroundColor : "transparent", color: "rgb(29, 161, 242)"}} size={22} />
                </>
            ),
            href: "twitter.com/E_presh27840?t=MxxOIBw4M7xwDGftGxEFqQ&s=09"
        },
        {
            id:4,
            child: (
                <>
                     <HiOutlineMail style={{backgroundColor : "transparent", color: "red"}} size={22} />
                </>
            ),
            href: "mailto:preciousebere090@gmail.com"
        },
        {
            id:5,
            child: (
                <>
                     <FaFacebook style={{backgroundColor : "transparent", color: "rgb(66, 103, 178)"}} size={22} />
                </>
            ),
            href: "https://www.facebook.com/precious.brown.98892?mibextid=ZbWKwL"
        },
        {
            id:6,
            child: (
                <>
                     <BsFillPersonLinesFill style={{ color: "white"}}  size={22} />
                </>
            ),
            href: "/EberePreciousDaniel.pdf",
            style: "text-white",
            download:true
        }
    ]


  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-auto ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  ">

          <ul className="flex flex-row h-auto mt-10 lg:hidden">
            {links.map(link => (
                <li key={link.id} className={"flex justify-between items-center p-0 m-3  "  }>
                <a 
                  href={link.href}
                  className={`flex justify-between items-center w-full `} 
                  download={link.download}
                  target="_blank"
                  rel="noreferrer"
                  >
                    {link.child}
                </a>
            </li>
            ))}
        </ul>

        {/* <hr height="1" width="90%"  className="bg-white-500 " /> */}

        <div style={{borderTop: "1px solid rgba(255, 255, 255, 0.1)"}}
        className=" flex w-full justify-center items-center pt-2  mb-2 mt-5">
           <p className="text-white ">Developed and Coded by <strong><em>Presh</em></strong> &copy;{new Date().getFullYear()}</p>
        </div>
        </div>
    </div>
  )
}

export default Bottom