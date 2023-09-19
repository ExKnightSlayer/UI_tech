import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about" >
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            harum tempore nulla minima neque, perferendis officiis iure
            consectetur iusto consequatur facere. Dignissimos necessitatibus eos
            id doloremque rem veniam, eligendi a? Maxime, obcaecati! Minima quas
            totam iste, qui eos, fuga et, ipsa repellat ex in culpa sit rerum
            iusto dignissimos libero. Qui enim, deleniti porro hic, harum
            nostrum error consectetur assumenda accusamus, corrupti eveniet
            excepturi laudantium. Dignissimos laborum officia recusandae
            obcaecati quidem culpa minima repellat, in et quae facilis, quia
            modi eligendi autem quo rerum officiis magni dolorum ad nisi neque
            facere! Officiis voluptate illo beatae doloribus dolores. Eos quos
            provident suscipit dicta repellat quidem, quam minima consequatur
            molestias molestiae deleniti sint enim quibusdam quia at modi
            ratione in consectetur qui! Adipisci officiis doloremque nostrum
            consequuntur.
          </p>
        </div>
      </div>

      <div className="home4" id="brands" >
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay:"0.3s"}} >
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s"}} >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{animationDelay:"0.7s"}} >
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

            <div style={{animationDelay:"1s"}} >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>

          <article></article>
        </div>
      </div>
    </>
  );
};

export default Home;
