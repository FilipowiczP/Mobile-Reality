import style from "../../styles/home.module.scss";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";

const Home = () => {
  return (
    <main className={style.main}>
      <section className={style.section1}>
        <h1>Kilka słów o nas</h1>
        <h2>Czyli kim jesteśmy i dokąd zmierzamy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          consectetur earum praesentium recusandae architecto eligendi ullam
          exercitationem et error culpa perspiciatis, velit, voluptates numquam,
          iure quam! Sed, temporibus vel. Exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          nesciunt cumque culpa, rerum facilis deleniti similique saepe libero
          dolores sequi alias placeat a consequatur, blanditiis, eveniet
          repellat odit voluptatum doloremque.
        </p>
        <Button>
          <Link to="/list" className={style.link}>
            Zobacz więcej
          </Link>
        </Button>
      </section>
      <section className={style.section2}>
        <div className={style.box}>
          <div className={style.backgroundImage1}></div>
          <div className={style.backgroundImage2}></div>
        </div>
        <div className={style.box}>
          <div className={style.backgroundImage3}></div>
          <div className={style.backgroundImage4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ut, impedit vel nostrum temporibus quidem culpa
              praesentium, debitis repellendus dicta omnis voluptas vero iste
              dolor voluptatum enim facere quisquam at!
            </p>
          </div>
        </div>
      </section>
      <section className={style.section3}>
        <div className={style.background}></div>
        <p>Budowa domów</p>
        <p>Budowa bram wjazdowych</p>
        <p>Wykończenie wnętrz</p>
        <p>Altany ogrodowe</p>
        <p>Kamienne elementy architektury</p>
        <p>Remonty</p>
      </section>

      <section className={style.section4}>
        <h1>Nasza oferta</h1>
        <h2>Dowiedz się co możemy tobie zaoferować</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem labore
          veniam, cupiditate et facilis magni quasi, tempora deserunt aliquam
          officiis necessitatibus error soluta, fugiat numquam sed nihil nemo
          molestiae aliquid!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore modi
          unde placeat aspernatur hic assumenda itaque repellat molestias
          inventore tenetur totam neque culpa sed corporis explicabo fuga quo,
          incidunt fugiat!
        </p>
        <Button>
          <Link to="/list" className={style.link}>
            Zobacz więcej
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default Home;
