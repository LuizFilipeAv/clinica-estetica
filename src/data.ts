export type Category = 'facial' | 'corporal' | 'rituais';
export type Treatment = { id: string; name: string; detail: string; duration: string; category: Category };

export const categories: { id: Category; name: string }[] = [
  { id: 'facial', name: 'Cuidados faciais' },
  { id: 'corporal', name: 'Cuidados corporais' },
  { id: 'rituais', name: 'Rituais de bem-estar' },
];

export const treatments: Treatment[] = [
  { id: 'limpeza', name: 'Limpeza de pele', detail: 'Um ritual de atenção à sua pele. Higienização delicada e cuidado personalizado, em uma pausa só sua.', duration: '60 minutos', category: 'facial' },
  { id: 'hidratacao', name: 'Hidratação facial', detail: 'Texturas leves, toque suave e tempo para cuidar. Uma experiência pensada para valorizar o conforto da sua pele.', duration: '50 minutos', category: 'facial' },
  { id: 'massagem-facial', name: 'Massagem facial', detail: 'Movimentos suaves que convidam a desacelerar. Um encontro entre cuidado com o rosto e bem-estar.', duration: '40 minutos', category: 'facial' },
  { id: 'massagem', name: 'Massagem relaxante', detail: 'Uma pausa no ritmo do dia. Toques acolhedores, ambiente tranquilo e atenção ao seu conforto.', duration: '60 minutos', category: 'corporal' },
  { id: 'ritual-corporal', name: 'Ritual de hidratação', detail: 'Cuidado da cabeça aos pés, com texturas envolventes e um momento para se reconectar com você.', duration: '50 minutos', category: 'corporal' },
  { id: 'esfoliacao', name: 'Esfoliação corporal', detail: 'Um ritual delicado de renovação sensorial, com atenção individual e hidratação ao final.', duration: '45 minutos', category: 'corporal' },
  { id: 'ritual-salvia', name: 'Ritual Sálvia', detail: 'Nosso convite a estar presente: cuidado facial e massagem relaxante em uma experiência completa.', duration: '90 minutos', category: 'rituais' },
  { id: 'pausa', name: 'Pausa essencial', detail: 'Um encontro breve com a tranquilidade. Massagem facial e um momento de silêncio para renovar o dia.', duration: '40 minutos', category: 'rituais' },
  { id: 'primeiro-encontro', name: 'Primeiro encontro', detail: 'Tudo começa com uma conversa. Um tempo para conhecer suas preferências e imaginar uma rotina de cuidado.', duration: '30 minutos', category: 'rituais' },
];

export const questions = [
  { question: 'Por onde começar meu cuidado?', answer: 'Na experiência Sálvia, o primeiro passo é uma conversa sobre suas preferências e sua rotina. Você pode explorar os cuidados acima ou escolher “Primeiro encontro” no agendamento demonstrativo.' },
  { question: 'Como funciona a primeira visita?', answer: 'A proposta é receber você com calma, escutar o que procura e apresentar as possibilidades de cuidado. Esta clínica é fictícia: a jornada foi criada para demonstrar o funcionamento de um site profissional.' },
  { question: 'Posso combinar diferentes cuidados?', answer: 'O catálogo ilustrativo inclui rituais que combinam experiências faciais e corporais. Em um atendimento real, a definição de qualquer cuidado deve ser feita com um profissional habilitado.' },
  { question: 'Este site aceita agendamentos reais?', answer: 'Não. A Sálvia é uma marca fictícia criada para portfólio. Os serviços, a clínica e os horários são demonstrativos. Nenhum dado é enviado e nenhuma reserva real é realizada.' },
];
