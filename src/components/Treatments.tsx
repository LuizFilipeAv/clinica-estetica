import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Minus, Plus } from 'lucide-react';
import { categories, treatments, type Category } from '../data';

export function Treatments({ onChoose }: { onChoose: (id: string) => void }) {
  const [category, setCategory] = useState<Category>('facial');
  const [selected, setSelected] = useState('limpeza');
  const visible = treatments.filter((treatment) => treatment.category === category);

  return <section className="treatments section-pad" id="cuidados" aria-labelledby="treatments-heading">
    <div className="section-heading" data-reveal>
      <h2 id="treatments-heading">Pequenos cuidados.<br /><em>Um novo sentir.</em></h2>
      <p>Um olhar atento para cada detalhe seu.<br />Encontre o cuidado que combina com o seu momento.</p>
    </div>
    <div className="category-picker" role="group" aria-label="Categorias de cuidados">
      {categories.map((item) => <button key={item.id} aria-pressed={category === item.id} onClick={() => { setCategory(item.id); setSelected(treatments.find((t) => t.category === item.id)!.id); }}>{item.name}<ArrowUpRight size={16} /></button>)}
    </div>
    <div className="treatment-layout">
      <div className="treatment-image" data-reveal>
        <img key={category} src={category === 'corporal' ? '/images/espaco.webp' : '/images/facial.webp'} srcSet={category === 'corporal' ? '/images/espaco-small.webp 720w, /images/espaco.webp 1440w' : '/images/facial-small.webp 720w, /images/facial.webp 1440w'} sizes="(max-width: 760px) 100vw, 50vw" alt={category === 'corporal' ? 'Ambiente ilustrativo com maca e iluminação natural' : 'Fotografia ilustrativa de uma massagem facial delicada'} width="1536" height="1024" loading="lazy" />
        <span className="image-note">Cuidar é um gesto de presença.</span>
      </div>
      <div className="treatment-list">
        {visible.map((item) => <article key={item.id} className={selected === item.id ? 'treatment-item selected' : 'treatment-item'}>
          <h3><button aria-expanded={selected === item.id} aria-controls={`detail-${item.id}`} onClick={() => setSelected(selected === item.id ? '' : item.id)}>{item.name}{selected === item.id ? <Minus size={20} /> : <Plus size={20} />}</button></h3>
          <div id={`detail-${item.id}`} className="treatment-detail" hidden={selected !== item.id}>
            <p>{item.detail}</p>
            <span className="duration">{item.duration} de cuidado</span>
            <a href="#agendar" className="text-link" onClick={() => onChoose(item.id)}>Quero esse cuidado <ArrowRight size={17} /></a>
          </div>
        </article>)}
        <p className="treatment-footnote">Cada experiência começa com uma escuta.<br />Cada cuidado, com você.</p>
      </div>
    </div>
  </section>;
}

