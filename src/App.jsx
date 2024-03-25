import React from "react";
import "./App.css";

const sobre = () => {
  return (
    <div className="text-white">
      <div className="mb-[4rem]">
        <p className="text-xl">Olá, eu sou o Carlos</p>
        <p className="text-xl">Desenvolvedor Front-end.</p>
      </div>

      <div className="mt-5 text-center mx-auto">
        <p className="text-xl mb-4">Sobre mim </p>
        <p className="w-[400px] mx-auto">
          Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
          JavaScript, TypeScript, Styled Components, Material UI, laravel e
          consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes
          reutilizáveis. Também possui experiência em projetos gerenciados por
          Metodologias Ágeis, Cursando Analise e Desenvolvimento de Sistema.
        </p>
      </div>
    </div>
  );
};
const projetos = () => (
  <div className="flex">
    <Banner
      title={"E-Commerce 1"}
      img={"/img/loja1.png"}
      href={"https://storeby.vercel.app/"}
    />
    <Banner
      title={"E-Commerce 2"}
      img={"/img/loja2.png"}
      href={"https://e-storex.vercel.app/"}
    />
    <Banner
      title={"Restaurantes"}
      img={"/img/map.png"}
      href={"https://app-maps.vercel.app/"}
    />
  </div>
);
const contato = () => {
  return (
    <div className="flex gap-4 text-white justify-around mb-10">
      <div className="text-center">
        <img
          className="mx-auto rounded-full bg-gray-600 p-4"
          src={"icons/mail.svg"}
          alt=""
        />
        <a href="mailto:carlosdaniel.prog@gmail.com" target="_black" rel="noopener noreferrer">
          <p>E-mail</p>
          <p>carlosdaniel.prog@gmail.com</p>
        </a>
      </div>
      <div className="text-center">
        <img
          className="mx-auto rounded-full bg-gray-600 p-4"
          src={"icons/phone.svg"}
          alt=""
        />
        <a href="https://wa.me/5565992969922" target="_black" rel="noopener noreferrer">
          <p>Telefone</p>
          <p>(65) 99296-9922</p>
        </a>
      </div>
      <div className="text-center">
        <img
          className="mx-auto rounded-full bg-gray-600 p-4"
          src={"icons/linkedin.svg"}
          alt=""
        />
        <a href="https://www.linkedin.com/in/carlos-daniel-alves-dias-27a313112/" target="_black" rel="noopener noreferrer">
          <p>Linkedin</p>
          <p>@carlos-daniel-alves-dias-27a31311</p>
        </a>
      </div>
      <div className="text-center">
        <img
          className="mx-auto rounded-full bg-gray-600 p-4"
          src={"icons/github.svg"}
          alt=""
        />
        <a href="https://github.com/CarlosHxH/" target="_black" rel="noopener noreferrer">
          <p>GitHub</p>
          <p>@CarlosHxH</p>
        </a>
      </div>
    </div>
  );
};
const skils = () => (
  <div className="flex justify-around">
    <div>
      <p className="text-white text-xl">Habilidades</p>
      <section className="hexagon-gallery">
        <img className="hex" src="/icons/php.png" alt="PHP" />
        <img className="hex" src="/icons/java.png" alt="Java" />
        <img className="hex" src="/icons/node.png" alt="NodeJs" />
        <img className="hex" src="/icons/laravel.png" alt="Laravel" />
        <img className="hex" src="/icons/js.png" alt="Javascript" />
        <img className="hex" src="/icons/html5.png" alt="HTML5" />
        <img className="hex" src="/icons/css.png" alt="CSS3" />
        <img className="hex" src="/icons/csharp.png" alt="C#" />
        <img className="hex" src="/icons/react.png" alt="React/Native" />
        <img className="hex" src="/icons/nextjs.png" alt="NextJs" />
        <img className="hex" src="/icons/mysql.png" alt="React/Native" />
        <img className="hex" src="/icons/python.png" alt="Python" />
        <img className="hex" src="/icons/git.png" alt="GIT" />
        <img className="hex" src="/icons/expo.png" alt="Expo" />
        <img className="hex" src="/icons/jquery.png" alt="Jquery" />
        <img className="hex" src="/icons/bootstrap.png" alt="Bootstrap" />
        <img className="hex" src="/icons/api.png" alt="API" />
        <img className="hex" src="/icons/docker.png" alt="Docker" />
      </section>
    </div>
  </div>
);

const Banner = ({ title, img, href }) => (
  <div className="block text-white p-[20px]">
    <div className="hover:scale-125 ease-in duration-300">
      <p className="italic">{title}</p>
      <a className="link" href={href} target="_blank" rel="noopener noreferrer">
        <img src={img} className="w-full" alt="logo" />
      </a>
    </div>
  </div>
);

function App() {
  const [view, setView] = React.useState(sobre);
  return (
    <div className="container-fluid h-dvh w-full bg-slate-800 p-2">
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-xl text-white">
            Carlos D. A. Dias - <code>Developer</code>
          </p>
          <p className="text-xl text-white">FullStack</p>
        </div>

        <div className="text-center w-full mt-[5rem] mx-5">{view}</div>

        <div className="bg-black-500  mt-[5rem] text-white fixed bottom-5 w-full p-4">
          <div className="text-center">
            <a
              className="link"
              href="https://www.linkedin.com/in/carlos-daniel-alves-dias-27a313112/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkdin
            </a>
            &nbsp;|&nbsp;
            <a
              className="link"
              href="https://github.com/CarlosHxH"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          
          <div className="flex justify-around text-white w-full p-4">
            <button
              onClick={() => setView(sobre)}
              className="border p-2 w-1/5 hover:scale-125 ease-in duration-300"
            >
              Sobre mim
            </button>
            <button
              onClick={() => setView(skils)}
              className="border p-2 w-1/5  hover:scale-125 ease-in duration-300"
            >
              Habilidades
            </button>
            <button
              onClick={() => setView(projetos)}
              className="border p-2 w-1/5 hover:scale-125 ease-in duration-300"
            >
              Projetos
            </button>
            <button
              onClick={() => setView(contato)}
              className="border p-2 w-1/5 hover:scale-125 ease-in duration-300"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
