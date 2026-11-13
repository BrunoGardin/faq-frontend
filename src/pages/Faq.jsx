import logo from "../assets/logo.svg";

function Faq() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center justify-items-center mt-5 font-display tracking-widest">
        <img src={logo} alt="Logo Poupacred" className="w-24.75 h-13.5" />
        <h1 className="text-6xl text-gray-800 m-5">
          PERGUNTAS FREQUENTES
        </h1>
        <p className="text-gray-800 text-xl">ATENDIMENTO OFICIAL • CRÉDITO DO TRABALHADOR</p>
      </div>
    </div>
    
  );
}

export default Faq;
