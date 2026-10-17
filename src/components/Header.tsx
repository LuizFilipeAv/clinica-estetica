import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [ ['Cuidados', '#cuidados'], ['A Sálvia', '#salvia'], ['Nosso espaço', '#espaco'] ];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Sálvia, início">sálvia<span>ESTÉTICA & BEM-ESTAR</span></a>
      <nav aria-label="Navegação principal" ref={navRef} id="main-nav" className={open ? 'navigation is-open' : 'navigation'}>
        {links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}
        <a className="nav-book" href="#agendar" onClick={() => setOpen(false)}>Agendar um momento <ArrowUpRight size={17} /></a>
      </nav>
      <button ref={menuButton} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
