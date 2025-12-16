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
priority: 1,
steps: [
"Saia pela Entrada Principal",
"Siga pela rampa lateral",
"Passe pelo corredor acessível",
"Chegue à Biblioteca"
],
warnings: ["Rampa com inclinação moderada"]
},
{
from: 1,
to: 3,
mode: "wheelchair",
time: 8,
priority: 2,
steps: [
"Contorne o estacionamento",
"Utilize a rampa principal",
"Acesse a Biblioteca pela entrada lateral"
],
warnings: []
}
];