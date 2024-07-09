import React from "react";
import { FaInstagram } from "react-icons/fa6";
import Questions from "./Questions";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import image1 from "../src/assets/image1.png";

function App() {
  const navigateToInstagram = () => {
    window.location.href = "https://www.instagram.com/multeway/";
  };

  return (
    <div className="bg-purple-800 h-full w-full md:px-36 px-2 ">
      <nav className="text-center text-white  ">
        <div className="inline-block relative">
          <div className="text-5xl font-extrabold my-20">
            Around
            <br />
            <span className="absolute left-0">Me</span>
          </div>
        </div>
      </nav>

      <section className="flex flex-col-reverse md:flex-row md:justify-between ">
        <div>
          <div className="text-white text-5xl ">
            Instant Socializing around you.. <br />
          </div>
          <div className="text-white text-5xl p-4">With the power of AI!</div>

          <div className="text-white p-4">
            <p>
              Discover new friends, explore local communities, and engage in
              meaningful <br />
              connections, all tailored to your unique preference and location.
            </p>
          </div>

          <div className="hidden md:block">
            <button className="rounded-full bg-white p-4">
              Join AroundMe Today
            </button>
          </div>

          <div className="flex m-2">
            <div>
              <button className="bg-gray-400 rounded-md m-2 p-2">
                Download on the <br />
                <span>App Store</span>
              </button>
            </div>
            <div>
              <button className="bg-gray-400 rounded-md m-2 p-2">
                GET IT ON <br />
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
        <img src={image1} alt="" />
      </section>

      <article>
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-3xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-red-400 h-32 md:h-auto" />
          <div className="w-full md:w-1/2 p-10">
            <div className="text-3xl font-bold text-start text-white">
              <h1>
                Shoutout: Amplify Your <br /> Voice
              </h1>
            </div>
            <div className="text-white mt-4">
              <p>
                Need to make an announcement, share an event, or ask <br />
                for recommendations? Use Shoutout to broadcast your <br />
                message to your local community. Whether you're <br />
                organizing a meetup or looking for advice, Shoutout <br />
                ensures your voice is heard.
              </p>
            </div>
            <div>
              <button className="rounded-full bg-white p-4 m-2">
                Join AroundMe Today
              </button>
            </div>
          </div>
        </div>
      </article>

      <article>
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-3xl  flex">
          <div className="w-1/2 bg-red-400" />
          <div className="w-1/2 p-10">
            <div className="text-lg font-bold text-start text-white">
              <h1>
                Chitchat: Real-Time <br />
                Conversations
              </h1>
            </div>
            <div className="text-white mt-4">
              <p>
                Start conversation with new people or catch up with <br />
                friends using Chitchat. This feature allows you to chat in{" "}
                <br />
                real-time, join group discussions, or participate in topic-{" "}
                <br />
                based conversations
              </p>
            </div>
            <div>
              <button className="rounded-full bg-white p-4 m-2">
                Join AroundMe Today
              </button>
            </div>
          </div>
        </div>
      </article>

      <section className="text-center text-white bg-green-300">
        <div className="text-lg">
          AI-Driven Connections : <br />
          <span className="mt-6"> Personalized Social Experience</span>
        </div>
        <div>
          <p>
            At the heart of Multeway is our advanced AI technology that
            Personalizes your social experience. Our AI <br />
            algorithms analyze your preferences, behaviors, and interactions to
            provide tailored recommendations <br />
            for people,events,and activies.
          </p>
        </div>

        <div className="bg-purple-900 p-4 mt-6 ">hello world</div>
      </section>

      {/* <div className="  bg-stone-800 flex justify-around p-24">
        <h1 className="text-white text-5xl font-extrabold">
          Join our Community
        </h1>
        <button
          className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white px-3 py-1 rounded-lg hover:bg-opacity-30 transition duration-300"
          onClick={navigateToInstagram}
        >
          Follow us on Instagram
          <FaInstagram className="ml-2" />
        </button>
      </div> */}

      {/* <div className="text-center text-white h-[60vh]">
        <div className="text-4xl font-bold my-10">
          Download the <br />
          <span className="mt-6">app and jump in</span>
        </div>
      </div> */}

      {/* <section className=" flex items-center justify-center bg-stone-800 text-white p-16 ">
        <div className="p-4 m-4">
          <p className="text-5xl font-extralight ">
            Frequently <br />
            Asked <br />
            Questions
          </p>
        </div>
        <div className="w-1/2 m-4">
          <Questions />
        </div>
      </section> */}

      {/* <footer className="bg-neutral-900">
        <div className="flex items-center justify-center ">
          <h1 className="text-4xl font-bold text-shadow text-white p-8">
            AroundMe
          </h1>
        </div>
        <div className="flex items-center justify-center text-white">
          <ul className="flex flex-row space-x-4 p-6">
            <li>Terms</li>
            <li>Privacy</li>
            <li>About</li>
            <li>Careers</li>
            <li>Creator badge</li>
            <li>Policy for posts boost</li>
            <li>user email verification</li>
          </ul>
        </div>

        <div className="flex items-center justify-center ">
          <div>
            <button className="bg-gray-400 rounded-md m-6 p-2">
              Download on the <br />
              <span>App Store</span>
            </button>
          </div>
          <div>
            <button className="bg-gray-400 rounded-md m-6 p-2">
              GET IT ON <br />
              <span>Google Play</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <a
            href="mailto:hello@aroundme.co.in"
            class="text-white hover:underline"
          >
            hello@aroundme.co.in
          </a>
        </div>

        <div className="flex items-center justify-center text-white space-x-8 p-4 ">
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaXTwitter />
            <span>Twitter</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaLinkedin />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaFacebook />
            <span>Facebook</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaInstagramSquare />
            <span>Instagram</span>
          </div>
        </div>

        <div className="text-center text-gray-500 p-4">
          <p className="text-xl">
            &copy; 2024 aroundme Internet Pvt.Ltd. All Rights Reserved
          </p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
