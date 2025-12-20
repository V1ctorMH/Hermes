export const locations = [
  { id: 1, name: "Entrada Principal" },
  { id: 2, name: "Bloco A" },
  { id: 3, name: "Biblioteca" },
  { id: 4, name: "Banheiro Acessível" },
  { id: 5, name: "Cantina" },
  { id: 6, name: "Laboratórios" },
  { id: 7, name: "Bloco B" },
  { id: 8, name: "Auditório" }
];

export const routes = [
  {
    id: 1,
    from: 1,
    to: 3,
    type: "accessible",
    time: 6,
    steps: [
      { text: "Saia da Entrada Principal", distance: 40 },
      { text: "Siga pela rampa lateral", distance: 25 },
      { text: "Passe pelo corredor acessível", distance: 60 },
      { text: "Chegue à Biblioteca", distance: 10 }
    ],
    warnings: ["Rampa com inclinação moderada", "Porta automática com sensor sensível"],
    path: [
      { x: "12%", y: "72%" },
      { x: "28%", y: "72%" },
      { x: "28%", y: "48%" },
      { x: "52%", y: "48%" }
    ]
  },
  {
    id: 2,
    from: 1,
    to: 2,
    type: "accessible",
    time: 5,
    steps: [
      { text: "Saia da Entrada Principal", distance: 30 },
      { text: "Siga pela calçada acessível", distance: 50 },
      { text: "Chegue ao Bloco A", distance: 15 }
    ],
    warnings: ["Área com piso irregular"],
    path: [
      { x: "12%", y: "72%" },
      { x: "30%", y: "65%" },
      { x: "42%", y: "58%" }
    ]
  },
  {
    id: 3,
    from: 2,
    to: 4,
    type: "accessible",
    time: 3,
    steps: [
      { text: "Saia do Bloco A", distance: 15 },
      { text: "Siga pelo corredor adaptado", distance: 25 },
      { text: "Chegue ao Banheiro Acessível", distance: 10 }
    ],
    warnings: ["Porta do banheiro pode travar ocasionalmente"],
    path: [
      { x: "42%", y: "58%" },
      { x: "48%", y: "54%" },
      { x: "50%", y: "52%" }
    ]
  },
  {
    id: 4,
    from: 3,
    to: 5,
    type: "accessible",
    time: 4,
    steps: [
      { text: "Saia da Biblioteca", distance: 20 },
      { text: "Siga pela passarela acessível", distance: 45 },
      { text: "Chegue à Cantina", distance: 15 }
    ],
    warnings: ["Área com grande circulação de pessoas", "Passarela estreita em horários de pico"],
    path: [
      { x: "52%", y: "48%" },
      { x: "60%", y: "52%" },
      { x: "68%", y: "56%" }
    ]
  },
  {
    id: 5,
    from: 5,
    to: 6,
    type: "accessible",
    time: 5,
    steps: [
      { text: "Saia da Cantina", distance: 20 },
      { text: "Siga pela rota sinalizada", distance: 55 },
      { text: "Chegue aos Laboratórios", distance: 20 }
    ],
    warnings: ["Trecho estreito", "Porta pesada no corredor principal"],
    path: [
      { x: "68%", y: "56%" },
      { x: "72%", y: "50%" },
      { x: "78%", y: "44%" }
    ]
  },
  {
    id: 6,
    from: 2,
    to: 6,
    type: "shortest",
    time: 3,
    steps: [
      { text: "Saia do Bloco A", distance: 25 },
      { text: "Corte pelo pátio interno", distance: 40 },
      { text: "Chegue aos Laboratórios", distance: 15 }
    ],
    warnings: ["Escadas no trajeto", "Superfície escorregadia em dias de chuva"],
    path: [
      { x: "42%", y: "58%" },
      { x: "60%", y: "48%" },
      { x: "78%", y: "44%" }
    ]
  },
  {
    id: 7,
    from: 7,
    to: 8,
    type: "accessible",
    time: 4,
    steps: [
      { text: "Saia do Bloco B", distance: 20 },
      { text: "Siga pelo corredor principal", distance: 30 },
      { text: "Chegue ao Auditório", distance: 10 }
    ],
    warnings: ["Porta do auditório pode estar trancada", "Área com pouca iluminação à noite"],
    path: [
      { x: "80%", y: "60%" },
      { x: "85%", y: "55%" },
      { x: "90%", y: "50%" }
    ]
  }
];
