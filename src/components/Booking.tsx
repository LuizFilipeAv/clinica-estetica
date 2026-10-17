import { useMemo, useRef, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories, treatments } from '../data';
import { isValidSelection, nextBookingDays, timeSlots } from '../booking';

type Props = { selectedTreatment: string; onChangeTreatment: (id: string) => void };

export function Booking({ selectedTreatment, onChangeTreatment }: Props) {
  const days = useMemo(() => nextBookingDays(new Date()), []);
  const [page, setPage] = useState(0);
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [confirmation, setConfirmation] = useState<{ treatment: string; day: string; time: string } | null>(null);
  const [error, setError] = useState('');
  const confirmRef = useRef<HTMLHeadingElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  // A new service chosen from the catalogue replaces the prior demo result.
  const isConfirmed = confirmation?.treatment === selectedTreatment;
  const currentDay = days.find((item) => item.value === day);
  const treatment = treatments.find((item) => item.id === selectedTreatment)!;
  const complete = isValidSelection(day, time, days);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!complete) { setError('Escolha um dia e um horário para continuar.'); return; }
    const freshDays = nextBookingDays(new Date());
    if (!isValidSelection(day, time, freshDays)) { setError('Esse dia já passou. Recarregue a página para ver novas datas.'); return; }
    setConfirmation({ treatment: selectedTreatment, day: currentDay!.full, time });
    requestAnimationFrame(() => confirmRef.current?.focus());
  };

  return <section id="agendar" className="booking section-pad" aria-labelledby="booking-heading">
    <div className="booking-intro" data-reveal>
      <h2 id="booking-heading">Um tempo seu.<br /><em>Do seu jeito.</em></h2>
      <p>Às vezes, tudo o que você precisa<br />é reservar um momento para você.</p>
      <div className="booking-message"><span className="booking-leaf" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M10 33C10 13 20 5 34 5c0 16-8 25-24 25M10 30 25 15" stroke="currentColor" strokeWidth="1.2" /></svg></span><p>Escolha um cuidado, encontre seu horário<br />e experimente a jornada Sálvia.</p></div>
      <p className="demo-note">Este é um agendamento demonstrativo.<br />Nenhum dado é coletado e nenhuma reserva é feita.</p>
    </div>
    <div className="booking-panel">
      {isConfirmed && confirmation ? <div className="booking-confirmation">
        <span className="confirmation-check"><Check size={28} strokeWidth={1.2} /></span>
        <h3 ref={confirmRef} tabIndex={-1}>Sua pausa está <em>desenhada.</em></h3>
        <p>Veja como seria o seu momento Sálvia:</p>
        <dl><div><dt>Cuidado</dt><dd>{treatment.name}</dd></div><div><dt>Dia</dt><dd>{confirmation.day}</dd></div><div><dt>Horário</dt><dd>{confirmation.time} · {treatment.duration}</dd></div></dl>
        <p className="confirmation-note">Simulação concluída. Este horário não foi reservado. A Sálvia é uma clínica fictícia criada para portfólio.</p>
        <button className="text-link reset-booking" onClick={() => { setConfirmation(null); setDay(''); setTime(''); setPage(0); requestAnimationFrame(() => selectRef.current?.focus()); }}><ArrowLeft size={16} />Experimentar outro cuidado</button>
      </div> : <form onSubmit={submit}>
        <label className="field-label" htmlFor="care-select">Seu cuidado</label>
        <div className="select-wrap"><select ref={selectRef} id="care-select" value={selectedTreatment} onChange={(event) => { onChangeTreatment(event.target.value); setConfirmation(null); setError(''); }}>
          {categories.map((category) => <optgroup label={category.name} key={category.id}>{treatments.filter((item) => item.category === category.id).map((item) => <option value={item.id} key={item.id}>{item.name} · {item.duration}</option>)}</optgroup>)}
        </select><ChevronDown size={17} aria-hidden="true" /></div>
        <fieldset className="day-fieldset"><legend>Um dia para desacelerar</legend><div className="date-navigation"><span aria-live="polite">{days[page * 5].day} {days[page * 5].month} — {days[page * 5 + 4].day} {days[page * 5 + 4].month}</span><div><button type="button" aria-label="Dias anteriores" disabled={page === 0} onClick={() => { setPage(0); setDay(''); setTime(''); }}><ChevronLeft size={17} /></button><button type="button" aria-label="Próximos dias" disabled={page === 1} onClick={() => { setPage(1); setDay(''); setTime(''); }}><ChevronRight size={17} /></button></div></div>
          <div className="date-options">{days.slice(page * 5, page * 5 + 5).map((item) => <label key={item.value} className="date-option"><input type="radio" name="day" value={item.value} checked={day === item.value} onChange={() => { setDay(item.value); setTime(''); setError(''); }} aria-label={item.full} /><span><small>{item.weekday}</small><strong>{item.day}</strong><small>{item.month}</small></span></label>)}</div>
        </fieldset>
        <fieldset className="time-fieldset" disabled={!day}><legend>Seu melhor horário</legend><div className="time-options">{timeSlots.map((slot) => <label className="time-option" key={slot}><input type="radio" name="time" value={slot} checked={time === slot} onChange={() => { setTime(slot); setError(''); }} /><span>{slot}</span></label>)}</div></fieldset>
        <p className="booking-hint" aria-live="polite">{!day ? 'Escolha um dia para ver os horários demonstrativos.' : !time ? 'Agora escolha o melhor horário para você.' : `${currentDay?.day} de ${currentDay?.month}, às ${time}. Tudo pronto para simular.`}</p>
        {error && <p className="booking-error" role="alert">{error}</p>}
        <button type="submit" className="submit-booking" disabled={!complete}>Simular agendamento <ArrowRight size={19} /></button>
        <p className="form-disclaimer">Horários fictícios · Sem cadastro · Sem compromisso</p>
      </form>}
    </div>
  </section>;
}
