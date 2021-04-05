import Container from "../UI/Container";

import chefPng from "../../assets/chef-1.png";

function Banner() {
  return (
    <main className="w-full pt-8 h-full flex justify-center items-center">
      <Container>
        <div className="h-screen w-full flex items-center justify-center md:justify-between flex-col md:flex-row">
          <article className="max-w-3xl sm:mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 font-bold text-green-600">
              With our patform, search for the best chefs in the world.
              </h1>
            <p className="max-w-2xl text-center text-base text-gray-600 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="block py-2 px-3 rounded hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 bg-yellow-500 text-white font-semibold text-center text-lg mx-auto">
              Get Started
            </button>
          </article>
          <div className="max-w-xs">
            <img src={chefPng} alt="Chef image" />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Banner;