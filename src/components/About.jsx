import React from "react"

const About = () => {
  return (
    <div
       name="about"
       className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
            </p>
        </div>

        <p className="text-xl mt-10">
            I'm a FULL STACK WEB DEVELOPER! I work at the intersection of curiosity, reasoning and imagination, which guide me to uncover insights, creating engaging, optimized and stand out web applications. Building interactive CLIENT and SERVER-SIDE web applications has always been a longstanding ambition of mine, am adept at handling muiltiple projects in a fast paced environment. Excellent at time management, organization, problem solving and meeting dead lines.<br />
            As for code; I like to dig in with JAVASCRIPT, Animations (React-Transition-Group), and nerd out in REACT. 
        </p>

        <p className="mt-6 text-xl">
            Besides coding; I'm also passionate about R&B Musics, Anime Sketches and am a big Football fan. Check out other contents and my social pages for more info about me.
        </p>

        <p className="mt-6 text-xl">
            Reach out and say "Hey!".  I look forward to hearing from you!
        </p>
        <h5 className="mt-7 text-2xl font-signature">Stay awesome!</h5>
        </div>
    </div>
  )
}

export default About