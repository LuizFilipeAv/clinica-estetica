import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { Header } from './components/Header';
import { Treatments } from './components/Treatments';
import { Booking } from './components/Booking';
import { useMotion } from './hooks/useMotion';
import { questions } from './data';

export default function App() {
  const [chosenTreatment, setChosenTreatment] = useState('primeiro-encontro');
  useMotion();
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="hero-shell" id="inicio">
      <Header />
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading"><span>Sua beleza.</span><em>No seu tempo.</em></h1>
          <div className="hero-portrait"><img src="/images/retrato.png" alt="Retrato editorial de uma mulher com expressão tranquila e pele natural" width="1120" height="1400" fetchPriority="high" /></div>
          <div className="hero-caption"><svg className="tiny-flower" aria-hidden="true" viewBox="0 0 40 40"><path d="M20 2v36M2 20h36M7 7l26 26M7 33 33 7" fill="none" stroke="currentColor" strokeWidth="1" /></svg><p>Um olhar para o que<br />faz você ser <em>você.</em></p><a href="#cuidados">Explore os cuidados <ArrowDown size={17} /></a></div>
          <a className="hero-circle" href="#agendar"><ArrowUpRight size={27} strokeWidth={1.2} /><span>Seu momento<br />começa aqui</span></a>
          <span className="hero-side-note">ESTÉTICA COM SENSIBILIDADE</span>
        </section>
        <div className="hero-bottom"><span>Beleza natural. Cuidado com intenção.</span><a href="#salvia">Conheça a Sálvia <ArrowDown size={14} /></a></div>
        <section className="philosophy section-pad" id="salvia" aria-labelledby="philosophy-heading">
          <div className="philosophy-mark" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none"><path d="M40 68V39m0 8C15 47 12 26 12 16c19 0 28 12 28 31Zm0-10c0-20 12-29 28-29 0 17-8 29-28 29Z" stroke="currentColor" strokeWidth="1" /></svg></div>
          <h2 id="philosophy-heading" data-reveal>Você não precisa ser outra.<br />Precisa de um tempo <em>para você.</em></h2>
          <div className="philosophy-bottom" data-reveal><p>Acreditamos em uma beleza que não pede licença para ser natural. Na Sálvia, o cuidado começa na escuta, respeita a sua individualidade e acompanha o seu ritmo.</p><a className="text-link" href="#espaco">Um pouco do nosso universo <ArrowUpRight size={18} /></a></div>
        </section>
        <Treatments onChoose={setChosenTreatment} />
        <section className="ritual-banner" aria-label="Nossa filosofia de cuidado"><div className="ritual-line"><span>Respire.</span><span>Desacelere.</span><em>Sinta-se.</em><svg aria-hidden="true" viewBox="0 0 40 40"><path d="M20 2v36M2 20h36M7 7l26 26M7 33 33 7" fill="none" stroke="currentColor" strokeWidth="1" /></svg></div></section>
        <section className="space section-pad" id="espaco" aria-labelledby="space-heading">
          <div className="space-copy" data-reveal><h2 id="space-heading">Lá fora, o mundo.<br />Aqui, <em>você.</em></h2><p>Luz que acolhe. Texturas que convidam ao toque. Um ambiente pensado para fazer do seu cuidado a melhor pausa do dia.</p><p>Da primeira conversa ao último detalhe, a proposta é a mesma: fazer você se sentir à vontade para ser quem é.</p><a className="text-link" href="#agendar">Reserve um tempo para você <ArrowUpRight size={18} /></a><span className="space-disclaimer">Ambiente ilustrativo da nossa clínica fictícia.</span></div>
          <figure className="space-image" data-reveal><img src="/images/espaco.png" alt="Espaço fictício da Sálvia, com maca em linho, madeira natural e luz suave" width="1536" height="1024" loading="lazy" /><figcaption>O cuidado também está no espaço.</figcaption></figure>
        </section>
        <section className="faq section-pad" aria-labelledby="faq-heading"><div data-reveal><h2 id="faq-heading">Antes da<br /><em>sua pausa.</em></h2><p>Para você chegar com tranquilidade.</p></div><div className="faq-list">{questions.map(({question, answer}) => <details key={question}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div></section>
        <Booking selectedTreatment={chosenTreatment} onChangeTreatment={setChosenTreatment} />
      </main>
      <footer className="footer section-pad"><div className="footer-top"><a className="wordmark" href="#inicio" aria-label="Sálvia, voltar ao início">sálvia<span>ESTÉTICA & BEM-ESTAR</span></a><p>O essencial é se sentir bem.<br /><em>O resto floresce.</em></p><a className="back-top" href="#inicio" aria-label="Voltar ao início"><ArrowUpRight size={25} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sálvia · Projeto de portfólio</span><span>Clínica fictícia. Imagens ilustrativas.</span><a href="#agendar">Experimente o agendamento <ArrowRight size={14} /></a></div></footer>
    </div>
  </>;
}
