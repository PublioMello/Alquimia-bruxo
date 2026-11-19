import { FORM_URL, adicionais, beneficios, planos } from "../data/consultoria.js";
import "./Pages.css";

// Página completa da consultoria (texto de theheisenberg.com.br/consultoria).
export default function Consultoria() {
  return (
    <div className="page">
      <section>
        <p className="lead">Você treina há anos.</p>
        <p>Já gastou uma nota com hormônios.</p>
        <p>E continua olhando no espelho com aquela sensação:</p>
        <blockquote>"Caralh#! eu já deveria estar muito melhor que isso."</blockquote>
        <p>Existe um detalhe nessa história que quase ninguém comenta.</p>
        <p>
          Às vezes, o problema não é só o resultado que demora a aparecer. É que
          você nem consegue levar adiante o que começou.
        </p>
      </section>

      <section>
        <p>O cara encontra um protocolo na internet.</p>
        <p>
          Ou recebe uma recomendação genérica de alguém que parece entender do
          assunto.
        </p>
        <p>
          Começa cheio de expectativa. Quer crescer. Quer finalmente ver o
          físico mudar.
        </p>
        <p>Até que aparecem os problemas:</p>
        <ul className="problems">
          <li>
            <strong>A acne aparece.</strong> Queria tirar a camisa com
            confiança. Agora pensa duas vezes antes de colocar uma regata.
          </li>
          <li>
            <strong>O cabelo começa a ir embora.</strong> Justamente quando o
            objetivo era melhorar a aparência.
          </li>
          <li>
            <strong>A libido cai.</strong> Conhece uma mulher interessante, mas,
            em vez de aproveitar o momento, começa a se preocupar se vai
            conseguir ter uma ereção.
          </li>
          <li>
            <strong>O exame bagunça.</strong> O sangue grosso, o colesterol
            alterado, ou a pressão alta, começam a tirar o sono.
          </li>
        </ul>
        <p>
          E aquilo que parecia o caminho para um shape foda vira mais uma
          experiência frustrante.
        </p>
        <p>
          Ele interrompe o uso. O físico regride. Fica sem saber o que
          aconteceu. E, algum tempo depois, volta a procurar outra receita.
        </p>
        <p>
          Mais uma tentativa. Mais uma expectativa. Mais uma vez sem entender
          direito o que estava fazendo.
        </p>
      </section>

      <section>
        <h2>E sabe o que me deixa puto?</h2>
        <p>
          É a visão simplista sobre hormônios. Tratam como se fosse uma receita
          de bolo.
        </p>
        <p className="lead">
          A receita é genérica, mas as consequências são individuais.
        </p>
      </section>

      <section>
        <h2>ALQUIMIA™</h2>
        <p>
          Foi pensando nisso que construí a ALQUIMIA™: uma consultoria hormonal
          individual, com protocolo personalizado e acompanhamento durante todo
          o processo.
        </p>
        <p>
          Aqui, o físico importa. Mas sua saúde, libido, disposição, aparência e
          vida fora da academia também entram na equação.
        </p>
      </section>

      <section>
        <h2>Como funciona?</h2>
        <p>Você mostra o seu cenário:</p>
        <ul className="checklist">
          <li>Seu histórico de uso de hormônios.</li>
          <li>Seus exames.</li>
          <li>Seus objetivos.</li>
          <li>E os colaterais que estão te tirando o sono.</li>
        </ul>
        <p>Nós avaliamos o conjunto antes de definir a estratégia.</p>
        <p>
          Nada de entregar protocolo genérico. Nada de tratar colaterais como
          troféus.
        </p>
      </section>

      <section>
        <h2>O que você recebe</h2>
        <ul className="checklist">
          {beneficios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Planos</h2>
        <div className="prices">
          {planos.map((plano) => (
            <div key={plano.nome} className="price-card">
              <span className="price-card__name">{plano.nome}</span>
              <span className="price-card__value">{plano.preco}</span>
            </div>
          ))}
        </div>

        <h3>Adicional</h3>
        <ul className="price-list">
          {adicionais.map((item) => (
            <li key={item.nome}>
              <span>{item.nome}</span>
              <span>{item.preco}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta">
        <p className="lead">Você quer um shape foda.</p>
        <p>Mas não quer carregar um monte de colateral.</p>
        <p>Se você se identificou com essa situação, preencha o formulário:</p>
        <a href={FORM_URL} target="_blank" rel="noreferrer" className="button">
          Clique aqui
        </a>
      </section>
    </div>
  );
}
