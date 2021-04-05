import Container from "../UI/Container";

import chefLeftPng from "../../assets/chef-left.png";
import Title from "../UI/Title";

function NewsLetter() {
  return (
    <section className="py-8 bg-gray-100 flex justify-center items-center">
      <Container>
        <div className="w-full flex items-center justify-center md:justify-between flex-col-reverse md:flex-row">
          <div className="max-w-xs mt-8">
            <img src={chefLeftPng} alt="Newsletter" />
          </div>
          <article className="w-full max-w-3xl">
            <Title title="Stay on top of the platform news"/>
            <p className="max-w-2xl text-center text-base text-gray-700 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <div className="w-full max-w-sm mx-auto">
              <input className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent border-green-500 border-2 mb-3 text-base text-gray-500 placeholder-gray-500 f" type="email" placeholder="Your best email" />
              <button className="w-full block py-2 px-3 rounded hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 bg-green-500 text-white font-semibold text-center text-lg mx-auto">Receive news</button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default NewsLetter;