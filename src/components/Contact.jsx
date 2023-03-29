import React from "react";

const Contact = () => {
  return (
    <div name="contact"
         className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contact
                </p>
                <p className="py-6 text-xl">
                    I'm interested in freelance opportunities especially ambitious or large projects.<br />
                    However, if you have other request or questions, don't hesitate to use the form.
                </p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/f46e075c-0d8b-42f3-9062-145f0f596982"
                       method="POST" 
                      className="flex flex-col w-full md:w-1/2">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter your name"
                      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                      />
                      <input 
                      type="text" 
                      name="email"
                      placeholder="Enter your email"
                      className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                      />
                      <textarea 
                       name="message"
                       placeholder="Enter your message"
                       rows="10"
                       className="p-2 bg-transparent border-2 rounded-md text-white focus:ouline-none" />
                       <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's talk
                       </button>
                </form>
            </div>

            <div height="450" className=" w-full">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.9440727165!2d7.037212566636058!3d4.8579063742821464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27f6a53a3cf%3A0x452406c0166550f2!2sRumudara%20500102%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1679670195962!5m2!1sen!2sng"
                //    width="600" 
                   height="450" 
                   className="rounded-2xl border-0 w-full" 
                   style={{zIndex:"0"}}
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
            </div>
        </div>
    </div>

    
  )
}

                  
export default Contact