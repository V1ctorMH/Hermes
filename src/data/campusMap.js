export const locations = [
  { id: 1, name: "Entrada Principal" },
  { id: 2, name: "Bloco A" },
  { id: 3, name: "Biblioteca" },
  { id: 4, name: "Banheiro Acessível" }
];

export const routes = [
  {
    from: 1,
    to: 3,
    mode: "wheelchair",
    time: 6,
    steps: [
      { text: "Saia da Entrada Principal", distance: 40 },
      { text: "Siga pela rampa lateral", distance: 25 },
      { text: "Passe pelo corredor acessível", distance: 60 },
      { text: "Chegue à Biblioteca", distance: 10 }
    ],
    warnings: ["Rampa com inclinação moderada"],
    path: [
      { x: "55%", y: "72%" },
      { x: "46%", y: "72%" },
      { x: "50%", y: "48%" },
      { x: "52%", y: "48%" }
    ]
  }
];
