import logo from "../assets/logo.svg";
import team from "../assets/team.png"
import { Modulo } from "../components/Cards";
import { Pesquisa } from "../components/Filtro";
import { Rodape } from "../components/Rodape";

function Faq() {
  const faqData = [
    {
      tag: "sobre",
      title: "SOBRE A POUPACRED E A SUA SEGURANÇA",
      questions: [
        {
          subtitle: "A Poupacred é confiável?",
          description: (
            <>
              A Poupacred atua desde 2006, em Presidente Prudente/SP, e já
              atendeu mais de 700 mil trabalhadores. CNPJ 07.899.160/0001-63.
              <br />A Poupacred possui <b>
                Certificação de Qualidade FEBRABAN
              </b>{" "}
              como Correspondente Bancário.
              <br />
              Também temos página no Reclame Aqui.
            </>
          ),
        },
        {
          subtitle:
            "A Poupacred pede dinheiro, taxa ou senha antes de liberar o crédito?",
          description: (
            <>
              Nunca. A Poupacred nunca pede depósito, taxa antecipada ou senha.
              <br />
              Se alguém pedir isso em nome da Poupacred, não pague e fale com a
              gente pelos canais oficiais.
            </>
          ),
        },
        {
          subtitle: "Como sei que quem me atende é da Poupacred?",
          description: (
            <>
              Entre em www.poupacred.com.br e digite o número do registro ANEPS
              do atendente. Ele mostra que o atendente é certificado e trabalha
              na Poupacred.
              <br />
              Se tiver dúvida, peça uma chamada de vídeo.
            </>
          ),
        },
        {
          subtitle: "Como falo com o pós-venda?",
          description: (
            <>
              O pós-venda é humano. Fale pelo e-mail
              canaldireto@poupacred.com.br ou pelo WhatsApp (18) 3344-6659.
            </>
          ),
        },
        {
          subtitle: "Qual é o horário de atendimento?",
          description: (
            <>
              De segunda a sexta, das 8h às 18h. Fora desse horário, deixe sua
              mensagem: uma consultora te chama no próximo dia útil.
            </>
          ),
        },
      ],
    },
    {
      tag: "credito",
      title: "ENTENDENDO O CRÉDITO DO TRABALHADOR",
      questions: [
        {
          subtitle: "O que é o Crédito do Trabalhador?",
          description: (
            <>
              É um crédito para quem tem carteira assinada (CLT). O valor vem
              por PIX e a parcela é descontada direto na folha de pagamento, sem
              boleto.
            </>
          ),
        },
        {
          subtitle: "Quem pode contratar?",
          description: (
            <>
              Quem trabalha de carteira assinada. O tempo mínimo de empresa muda
              de banco para banco: alguns aceitam a partir de 3 meses, outros
              pedem 12 meses ou mais. A simulação mostra o que vale para você.
            </>
          ),
        },
        {
          subtitle: "Quanto eu posso pegar?",
          description: (
            <>
              Depende da sua margem: a parte do salário que pode ir para a
              parcela, que é de até 35% do salário. A simulação é individual e a
              margem pode mudar de mês para mês.
            </>
          ),
        },
        {
          subtitle: "Posso ter mais de um contrato?",
          description: (
            <>
              Muitos bancos só permitem 1 contrato por CPF. Por isso vale
              aproveitar bem o valor na hora da simulação.
            </>
          ),
        },
        {
          subtitle: "Preciso ir a algum lugar para contratar?",
          description: (
            <>
              Não. É tudo pelo celular, em poucos minutos, com assinatura
              digital.
            </>
          ),
        },
      ],
    },
    {
      tag: "taxa",
      title: "TAXA, PARCELAS E VALOR",
      questions: [
        {
          subtitle: "Por que a taxa é essa?",
          description: (
            <>
              Todo crédito tem juros. No Crédito do Trabalhador a taxa é fixa e
              fica registrada no contrato: ela não muda depois que você assina.
              No cartão rotativo e no cheque especial, o juro incide sobre o
              saldo que sobra e vira bola de neve.
              <br />
              Consulte as taxas oficiais de cada modalidade no site do Banco
              Central.
            </>
          ),
        },
        {
          subtitle: "A taxa pode mudar depois de assinar?",
          description: (
            <>Não. A taxa é fixa e a parcela é a mesma até o fim do contrato.</>
          ),
        },
        {
          subtitle: "Posso escolher o valor da parcela?",
          description: (
            <>
              A parcela é liberada conforme a sua margem disponível na folha de
              pagamento. Cada banco ainda tem uma margem de segurança. Parcela
              menor, em mais parcelas, pesa menos no mês.
            </>
          ),
        },
        {
          subtitle:
            "Vi uma oferta enorme na Carteira de Trabalho Digital. Por que o valor é menor?",
          description: (
            <>
              As ofertas da Carteira de Trabalho Digital são estimativas
              máximas. O valor real só sai depois da análise do seu CPF e da sua
              margem. Antes de assinar qualquer proposta, confira o valor da
              parcela que será descontada na folha.
            </>
          ),
        },
        {
          subtitle: "Estou só comparando. Pode ser?",
          description: (
            <>
              Pode, e é o certo. Só lembre que cada instituição que consulta o
              seu CPF pode baixar um pouquinho o seu score, e simular em vários
              lugares num prazo curto pesa mais.
            </>
          ),
        },
      ],
    },
    {
      tag: "contratacao",
      title: "CONTRATAÇÃO E PIX",
      questions: [
        {
          subtitle: "Como funciona a contratação?",
          description: (
            <>
              Você faz a simulação, confirma a proposta, assina pelo celular e
              recebe o valor por PIX. Não pedimos depósito nem taxa.
            </>
          ),
        },
        {
          subtitle: "Quando o dinheiro cai na minha conta?",
          description: (
            <>O PIX cai em até 24 horas úteis depois da assinatura.</>
          ),
        },
        {
          subtitle: "Quando começa o desconto?",
          description: (
            <>
              O primeiro desconto segue o ciclo do dia 21 ao dia 20 do mês
              seguinte e costuma levar de 30 a 45 dias depois da assinatura.
            </>
          ),
        },
        {
          subtitle: "O link de assinatura venceu. E agora?",
          description: (
            <>
              O link de assinatura vale 24 horas. Se ainda estiver nesse prazo,
              abra o mesmo link. Se não abrir, fale com a gente que ajudamos na
              hora.
            </>
          ),
        },
        {
          subtitle: "O que é a autorização da consulta?",
          description: (
            <>
              Alguns bancos pedem uma autorização por link para liberar a
              consulta da sua margem. Ela vale por pouco tempo e não é um
              contrato.
            </>
          ),
        },
      ],
    },
    {
      tag: "pagamento",
      title: "PAGAMENTO, AMORTIZAÇÃO E CANCELAMENTO",
      questions: [
        {
          subtitle: "Posso antecipar parcelas ou quitar o contrato?",
          description: (
            <>
              Pode. Você antecipa sempre da última parcela para trás, e o banco
              desconta os juros daquele período.
              <br />
              Para pedir, envie um e-mail para amortizacao@poupacred.com.br com:
              nome completo, CPF, número da proposta ou protocolo, quantidade de
              parcelas que quer amortizar e a data desejada para o vencimento do
              boleto. O retorno vem por e-mail em até 7 dias úteis.
            </>
          ),
        },
        {
          subtitle: "E se o desconto não cair na folha?",
          description: (
            <>
              Você pede o boleto direto ao banco e paga normalmente. O valor da
              parcela é o mesmo.
            </>
          ),
        },
        {
          subtitle: "O que acontece se eu atrasar?",
          description: (
            <>
              A parcela é descontada direto na folha, então o risco de atraso é
              baixo. Se algum mês precisar pagar por boleto e atrasar, entram
              juros e multa, como em qualquer contrato.
            </>
          ),
        },
        {
          subtitle: "Posso cancelar depois de contratar?",
          description: (
            <>
              Pode. Você tem até 7 dias corridos pelo direito de arrependimento.
              É só devolver o valor integral que caiu na sua conta.
            </>
          ),
        },
      ],
    },
    {
      tag: "demissao",
      title: "DEMISSÃO E SEGURO",
      questions: [
        {
          subtitle: "E se eu sair do emprego?",
          description: (
            <>
              O contrato tem seguro, que pode cobrir parcelas em caso de
              demissão sem justa causa, conforme as regras do contrato. Se ficar
              sem emprego CLT, você pode pedir os boletos ao banco e pagar
              avulso, sem atrasar. Peça para ver o que está previsto na sua
              proposta.
            </>
          ),
        },
        {
          subtitle: "O contrato tem seguro?",
          description: (
            <>
              Tem. O contrato inclui o seguro prestamista, que entra no custo
              total do contrato. A cobertura muda conforme o banco e o contrato
              e pode incluir demissão sem justa causa, invalidez e falecimento.
            </>
          ),
        },
      ],
    },
    {
      tag: "privacidade",
      title: "PRIVACIDADE E SEUS DADOS",
      questions: [
        {
          subtitle: "O RH vai saber para que eu quero o dinheiro?",
          description: (
            <>
              Não. O RH não sabe para que você vai usar o dinheiro, nem quanto
              você recebeu, nem a sua análise de crédito. Ele só confirma o
              registro e processa o desconto, como no vale-transporte.
            </>
          ),
        },
        {
          subtitle: "É seguro mandar o meu CPF?",
          description: (
            <>
              O CPF é usado só para consultar a sua margem e fica protegido,
              conforme a LGPD.
            </>
          ),
        },
        {
          subtitle: "A consulta mexe no meu score?",
          description: (
            <>
              A consulta de margem da Poupacred é feita no eSocial, e não no
              Serasa. Já cada instituição que consulta o seu CPF por conta
              própria pode baixar um pouco o seu score.
            </>
          ),
        },
        {
          subtitle: "Quem tem nome sujo pode contratar?",
          description: (
            <>
              Ter o nome sujo não impede a simulação. Como o desconto é na folha
              de pagamento, o banco olha também a sua margem. Não dá para
              garantir aprovação, mas vale fazer a consulta.
            </>
          ),
        },
      ],
    },
    {
      tag: "saque",
      title: "SAQUE-ANIVERSÁRIO DO FGTS",
      questions: [
        {
          subtitle: "O que é o Saque-Aniversário?",
          description: (
            <>
              É uma modalidade do FGTS em que, todo ano, no mês do seu
              aniversário, você recebe uma parte do saldo. A adesão é opcional.
              Quem não adere continua no Saque-Rescisão.
            </>
          ),
        },
        {
          subtitle: "Quanto eu recebo por ano no Saque-Aniversário?",
          description: (
            <>
              Depende do saldo do FGTS, por faixas (fonte: Caixa):
              <br />
              Até R$ 500: 50% do saldo
              <br />
              R$ 500,01 a 1.000: 40% + R$ 50
              <br />
              R$ 1.000,01 a 5.000: 30% + R$ 150
              <br />
              R$ 5.000,01 a 10.000: 20% + R$ 650
              <br />
              R$ 10.000,01 a 15.000: 15% + R$ 1.150
              <br />
              R$ 15.000,01 a 20.000: 10% + R$ 1.900
              <br />
              Acima de R$ 20.000: 5% + R$ 2.900
              <br />
              Exemplo: saldo de R$ 1.000 dá R$ 450 por ano.
            </>
          ),
        },
        {
          subtitle: "O que é a antecipação do Saque-Aniversário?",
          description: (
            <>
              É receber agora esses saques dos próximos anos, usando o seu saldo
              do FGTS como garantia. Cada saque antecipado vai de R$ 100 a R$
              500, e é possível antecipar mais de um saque anual, conforme a
              regra em vigor na contratação (o limite pode mudar). Só uma
              contratação por competência.
            </>
          ),
        },
        {
          subtitle: "Qual a vantagem da antecipação?",
          description: (
            <>
              O dinheiro já é seu. Você resolve a necessidade agora e, no mês
              seguinte, não tem boleto para pagar. A taxa é bem menor que a de
              outros créditos.
            </>
          ),
        },
        {
          subtitle: "O FGTS rende bastante parado?",
          description: (
            <>
              O saldo rende TR + 3% ao ano, mais a distribuição anual de
              resultado do fundo. Costuma render menos do que outras aplicações.
            </>
          ),
        },
        {
          subtitle: "Quais os cuidados antes de aderir?",
          description: (
            <>
              Quem adere ao Saque-Aniversário e é demitido sem justa causa saca
              só a multa; o saldo fica no FGTS. Para voltar ao Saque-Rescisão
              existe um prazo de espera de 25 meses, e só sem antecipação
              contratada. Simular não exige adesão, e quem aderiu depois de
              01/11/2025 só autoriza a consulta de saldo após 90 dias.
            </>
          ),
        },
        {
          subtitle: "Como evitar golpes no FGTS?",
          description: (
            <>
              Use só os canais oficiais da Caixa e o aplicativo FGTS. Nunca
              passe senhas ou dados de acesso em outros sites ou aplicativos. A
              Poupacred nunca pede senha.
            </>
          ),
        },
      ],
    },
    {
      tag: "proposta",
      title: "PROPOSTA NÃO APROVADA E OUTRAS DÚVIDAS",
      questions: [
        {
          subtitle: "Por que minha proposta não foi aprovada?",
          description: (
            <>
              Cada análise considera a sua margem, o seu CPF e as regras de cada
              banco, e isso pode mudar de um mês para o outro. Você pode refazer
              a simulação daqui a 30 dias. Se quiser, peça o aviso: respondendo
              PODE AVISAR, a gente te chama.
            </>
          ),
        },
        {
          subtitle: "Como faço uma reclamação ou elogio?",
          description: (
            <>
              Fale com o nosso setor de qualidade pelo e-mail
              canaldireto@poupacred.com.br ou pelo WhatsApp (18) 3344-6659.
              Também respondemos pela página da Poupacred no Reclame Aqui.
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="lg:w-197 md:w-150 sm:w-100 w-90 max-x-full mx-auto">
      <div className="flex flex-col items-center justify-center justify-items-center mt-5 font-display border-poupa border-b-3">
        <img src={logo} alt="Logo Poupacred" className="w-24.75 h-13.5" />
        <h1 className="text-6xl m-5 cond tracking-widest text-center">
          PERGUNTAS FREQUENTES
        </h1>
        <p className=" text-xl cond tracking-widest text-center">
          ATENDIMENTO OFICIAL • CRÉDITO DO TRABALHADOR
        </p>
        <div>
          <img src={team} alt="Time Poupacred" className="w-197 border-poupa border-b-3 pb-2"/>
        </div>
        <Pesquisa props={faqData} />
        <Modulo props={faqData} />
        <div className="rounded-xl border-poupa border-3 mt-4 p-6 justify-items-start w-full">
          <h2 className="cond text-2xl/10 text-poupa">Não achou a sua dúvida?</h2>
          <p>Atendemos de segunda a sexta, das 8h às 18h. Fora desse horário, deixe sua mensagem: uma<br/>consultora te chama no próximo dia útil.</p><br />
          <p><b>Pós-venda e qualidade:</b> canaldireto@poupacred.com.br · WhatsApp (18) 3344-6659</p>
          <p><b>Site:</b> www.poupacred.com.br</p>
        </div>
        <div className="p-4 mt-4 mb-4 text-sm rounded-xl border border-dashed border-gray-300 bg-neutral-100 justify-items-start w-full">
          <p className="text-zinc-500">Estas respostas são informativas e não garantem aprovação de crédito. Toda proposta está sujeita à análise do banco. A Poupacred nunca pede depósito, taxa antecipada ou senha. As regras do FGTS seguem a Caixa Econômica Federal e podem mudar.</p>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Faq;
