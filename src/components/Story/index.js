import Container from "../UI/Container";
import Title from "../UI/Title";

import chefRightPng from "../../assets/chef-right.png";
import slide0 from "../../assets/slide-0.jpg";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
import SliderImages from "../UI/SliderImages";

function Story() {
  return (
    <section className="py-8 bg-white flex justify-center items-center">
      <Container>
        <div className="w-full flex items-center justify-center lg:justify-between flex-col lg:flex-row">
          <article className="max-w-3xl">
            <Title title="See what our best bosses are doing"/>
            <p className="max-w-2xl text-center text-base text-gray-700 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <div className="max-w-xs mx-auto">
              <img src={chefRightPng} alt="Chefs stories" />
            </div>
          </article>
          <div className="max-w-full w-full mt-8 md:max-w-md">
           <SliderImages 
              images={[slide0, slide1, slide2, slide3, slide4]}
            />
          </div>      
        </div>
      </Container>
    </section>
  )   
}

export default Story;