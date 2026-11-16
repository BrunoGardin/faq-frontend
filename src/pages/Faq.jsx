import logo from "../assets/logo.svg";
import { Modulo }  from "../components/Modulo1";

function Faq() {
  const faqData = [
    {
      title: "Sobre o Poupacred",
      questions: [
        {
          subtitle: "A Poupacred é confiável?",
          description: "A Poupacred atua desde 2006, em Presidente Prudente/SP, e já atendeu mais de 700 mil trabalhadores. CNPJ 07.899.160/0001-63.<br>A Poupacred possui <b>Certificação de Qualidade FEBRABAN</b> como Correspondente Bancário.<br>Também temos página no Reclame Aqui."
        },
        {
          subtitle: "A Poupacred pede dinheiro, taxa ou senha antes de liberar o crédito?",
          description: "Nunca. A Poupacred nunca pede depósito, taxa antecipada ou senha. Se alguém pedir isso em nome da Poupacred, não pague e fale com a gente pelos canais oficiais."
        }
      ]
    }
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center justify-items-center mt-5 font-display tracking-widest">
        <img src={logo} alt="Logo Poupacred" className="w-24.75 h-13.5" />
        <h1 className="text-6xl text-gray-800 m-5">
          PERGUNTAS FREQUENTES
        </h1>
        <p className="text-gray-800 text-xl">ATENDIMENTO OFICIAL • CRÉDITO DO TRABALHADOR</p>
      </div>
      <Modulo
        props={faqData}
      />
    </div>
    
  );
}

export default Faq;
