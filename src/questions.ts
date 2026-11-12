export interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  { id: 1, category: 'Allmänt', question: 'Vad betyder Taekwondo?', answer: 'Tae = fot/spark, Kwon = hand/slag, Do = vägen/konsten' },
  { id: 2, category: 'Allmänt', question: 'Vad heter träningslokalen?', answer: 'Dojang' },
  { id: 3, category: 'Allmänt', question: 'Vad heter dräkten?', answer: 'Dobok' },
  { id: 4, category: 'Allmänt', question: 'Vad heter bältet?', answer: 'Ti' },
  { id: 5, category: 'Kommandon', question: 'Vad betyder Charyeot?', answer: 'Givakt' },
  { id: 6, category: 'Kommandon', question: 'Vad betyder Kyeongnye?', answer: 'Buga / hälsa' },
  { id: 7, category: 'Kommandon', question: 'Vad betyder Junbi?', answer: 'Redo / gör er beredda' },
  { id: 8, category: 'Kommandon', question: 'Vad betyder Sijak?', answer: 'Börja' },
  { id: 9, category: 'Kommandon', question: 'Vad betyder Baro?', answer: 'Tillbaka till utgångsläget' },
  { id: 10, category: 'Räkna', question: 'Räkna till 5 på koreanska', answer: 'Hana, dul, set, net, daseot' },
  { id: 11, category: 'Räkna', question: 'Räkna 6–10 på koreanska', answer: 'Yeoseot, ilgop, yeodeol, ahop, yeol' },
  { id: 12, category: 'Tekniker', question: 'Vad heter rak framåtspark?', answer: 'Ap chagi' },
  { id: 13, category: 'Tekniker', question: 'Vad heter cirkelspark?', answer: 'Dollyeo chagi' },
  { id: 14, category: 'Tekniker', question: 'Vad heter lågt block?', answer: 'Arae makgi' },
  { id: 15, category: 'Tekniker', question: 'Vad heter mellanblock?', answer: 'Momtong makgi' },
];