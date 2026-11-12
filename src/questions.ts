export interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  // 10 Kup
  { id: 1, category: '10 Kup', question: 'Vad betyder Taekwon-Do?', answer: 'Foten och handens väg' },
  { id: 2, category: '10 Kup', question: 'Vad är Taekwon-Do?', answer: 'Koreanskt självförsvar' },
  { id: 3, category: '10 Kup', question: 'Från vilket land kommer Taekwon-Do?', answer: 'Korea' },
  { id: 4, category: '10 Kup', question: 'Vad betyder Chagi?', answer: 'Spark' },
  { id: 5, category: '10 Kup', question: 'Vad betyder Jirugi?', answer: 'Slag' },
  { id: 6, category: '10 Kup', question: 'Vad betyder Makgi?', answer: 'Blockering' },

  // 9 Kup
  { id: 7, category: '9 Kup', question: 'Vad betyder Annun sogi?', answer: 'Sittställning' },
  { id: 8, category: '9 Kup', question: 'Vad betyder Gunnun sogi?', answer: 'Gåställning' },
  { id: 9, category: '9 Kup', question: 'Vad betyder Gunnun junbi sogi?', answer: 'Gå redo-ställning' },
  { id: 10, category: '9 Kup', question: 'Vad betyder Niunja sogi?', answer: 'L-ställning' },

  // 8 Kup
  { id: 11, category: '8 Kup', question: 'Vad heter han som grundade Taekwon-Do?', answer: 'General Choi Hong Hi' },
  { id: 12, category: '8 Kup', question: 'Vad betyder Dollyo chagi?', answer: 'Rundgående spark' },
  { id: 13, category: '8 Kup', question: 'Vad betyder Bakkat palmok?', answer: 'Yttre underarmsblockering' },
  { id: 14, category: '8 Kup', question: 'Vad betyder Chon-Ji?', answer: 'Himmel och jord' },
  { id: 15, category: '8 Kup', question: 'Förklara normal motion', answer: 'Två tekniker med varsin vågrörelse' },
  { id: 16, category: '8 Kup', question: 'Förklara continuous motion', answer: 'Två tekniker med varsin vågrörelse, ihopsatta' },
  { id: 17, category: '8 Kup', question: 'Hur bred är en Annun sogi?', answer: '1,5 axelbredd, mätt på insidan av fötterna' },

  // 7 Kup
  { id: 18, category: '7 Kup', question: 'Vad betyder Yop chagi?', answer: 'Sidspark' },
  { id: 19, category: '7 Kup', question: 'Vad betyder Twimyo ap chagi?', answer: 'Hoppande/flygande framspark' },
  { id: 20, category: '7 Kup', question: 'Vad betyder Dan-Gun?', answer: 'Dan-Gun var Koreas grundare år 2333 före Kristus' },
  { id: 21, category: '7 Kup', question: 'Vad betyder Sun sonkut tulgi?', answer: 'Vertikal fingertoppstick' },
  { id: 22, category: '7 Kup', question: 'Vem var Do-San?', answer: 'En patriot och frihetskämpe (Ahn Chang Ho)' },
  { id: 23, category: '7 Kup', question: 'Förklara fast motion', answer: 'Två tekniker på 1½ vågrörelse' },
];