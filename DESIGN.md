---
name: Sálvia
description: Cuidado estético imaginado com leveza e ritmo editorial.
colors:
  olive: "#687052"
  cream: "#f6f0e5"
  deep: "#343a2b"
  muted: "#636952"
  line: "#d3d3c3"
  sage: "#e1e4d8"
  treatment-surface: "#eeeee4"
  ritual-surface: "#d9ddcf"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(100px, 12.6vw, 190px)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(36px, 4.35vw, 68px)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "14px"
    lineHeight: 1.8
  accent:
    fontFamily: "Cormorant Garamond Variable, Georgia, serif"
    fontWeight: 400
spacing:
  gutter: "clamp(24px, 5vw, 88px)"
  section: "100px"
  mobile-section: "68px"
rounded:
  square: "0"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    padding: "18px 20px"
  button-primary-hover:
    backgroundColor: "{colors.olive}"
  button-outline:
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    padding: "17px 24px"
---

# Design System: Sálvia

## Overview

**Creative North Star: "Beleza sem pressa"**

Uma linguagem editorial serena combina campos amplos de cor, fotografia e tipografia generosa. A identidade é própria e em português; a referência de estilo e movimento escolhida para o projeto é a MOOI Clinic. O produto é uma demonstração fictícia, e a interface explicita esse limite.

**Key Characteristics:**

- Oliva, creme e verde profundo em grandes superfícies planas.
- Manrope leve com pausas em Cormorant Garamond itálica.
- Fotografias amplas, divisórias finas e ações claras.

## Colors

O oliva apagado é a cor principal; neutros quentes e verdes suaves sustentam o conteúdo.

### Primary
- **Oliva** (`#687052`): abertura, transições de ação e detalhes gráficos.

### Neutral
- **Creme** (`#f6f0e5`): fundos claros e texto sobre fundos escuros.
- **Verde profundo** (`#343a2b`): texto principal, rodapé e ação preenchida.
- **Verde discreto** (`#636952`): texto secundário.
- **Linha** (`#d3d3c3`): divisórias de conteúdo.
- **Sálvia** (`#e1e4d8`), **tratamentos** (`#eeeee4`) e **ritual** (`#d9ddcf`): campos tonais distintos.

## Typography

**Display e corpo:** Manrope Variable, com fallback sans-serif. **Acento:** Cormorant Garamond Variable, Georgia, serif, geralmente itálica. O contraste entre uma sans leve e a serifada expressiva marca as pausas da mensagem.

### Hierarchy
- **Display:** peso 300, `clamp(100px, 12.6vw, 190px)`, entrelinha `0.98`; título principal no desktop. No celular usa `clamp(54px, 13.4vw, 100px)`.
- **Headline:** peso 400, `clamp(36px, 4.35vw, 68px)`, entrelinha `1.14`; títulos de seção.
- **Body:** 14px e entrelinha `1.8` como base, com ajustes locais para conteúdo e navegação.
- **Acento:** serifada em itálico no complemento de títulos, textos e marca.

## Layout

As seções usam margem horizontal `clamp(24px, 5vw, 88px)` e espaçamento vertical de 100px na base, 80px até 1050px e 68px até 760px. Composições de duas colunas passam a uma coluna no celular. A abertura sobrepõe retrato e tipografia; a navegação vira menu compacto até 760px.

## Elevation & Depth

As superfícies são planas, sem vocabulário de sombras. A profundidade vem da fotografia, da sobreposição controlada na abertura e da alternância entre campos tonais.

## Shapes

Retângulos de cantos retos definem fotografias, campos e botões; linhas finas organizam listas e ações. Círculos contornados aparecem em chamadas e no retorno ao topo.

## Components

### Buttons
- A ação principal é retangular, verde profunda com texto creme e padding `18px 20px`; no hover muda para oliva. O estado desabilitado usa superfície clara e texto mais discreto.
- A navegação oferece ação contornada; links de texto usam linha inferior e ampliam discretamente o espaço da seta no hover.
- Foco visível usa contorno de 2px, com afastamento; manter os estados de teclado.

### Seletores e campos
- O select usa fundo transparente e contorno fino. Datas e horários são opções retangulares com borda; a escolha ativa fica verde profunda com texto creme, e recebe contorno de foco próprio.
- Em telas de até 767px, o select usa 16px para facilitar a interação móvel.

### Navegação e listas
- No desktop, marca e links compartilham uma linha com divisória inferior; no celular, um menu escuro se expande sob o cabeçalho.
- Tratamentos e perguntas usam linhas divisórias e indicadores de expansão. O seletor de categoria destaca o item ativo com linha inferior.

### Movimento
- A entrada do título e do retrato, revelações e mudanças discretas de imagem usam `cubic-bezier(.16, 1, .3, 1)`; a preferência por movimento reduzido desativa animações e transições.

## Do's and Don'ts

### Do:
- **Do** combinar títulos leves e trechos serifados com espaço generoso.
- **Do** preservar o foco visível e a indicação de que o agendamento é simulado.
- **Do** usar fotografias ilustrativas de origem documentada.

### Don't:
- **Don't** apresentar imagens ou dados fictícios como prova de uma clínica real.
- **Don't** copiar as fotografias da referência visual.
