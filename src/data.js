

const region = [
  {
    id: 1,
    url: "https://drive.google.com/uc?export=view&id=1CHdBwTRPQjwoxzXB449HV0KXUhe2WS5w",
    name: "MARMARA REGION",
    text: "Located in northwestern Turkey,bordered by Greece and the Aegean sea to the west.",
    places: ["Assos", "Troy", "A.Smintheion"],
    mapp: (
      <iframe
        src="https://my.atlistmaps.com/map/0ea3388c-6c38-4168-9a18-d6ace5dbc720?share=true"
        allow="geolocation"
        width="100%"
        height="280px"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 2,
    url: "https://drive.google.com/uc?export=view&id=11X47RjTORCcLFV0DzPo-ZNiZuvWFwmG_",
    name: "AEGEAN REGION",
    text: "Located in western Turkey,bordered by the Aegean Sea to the west,the Aegean Region has the longest coastline.",
    places: [
      "Pergamon",
      "Ephesus",
      "Miletus",
      "Priene",
      "Didyma",
      "Laodikeia",
      "Hierapolis",
      "Cnidus",
      "Sardes",
      "Aizanoi",
      "Aphrodisias",
    ],
    mapp: (
      <iframe
        src="https://my.atlistmaps.com/map/991c7b1c-5a51-463d-b44d-58c0104aa10b?share=true"
        allow="geolocation"
        width="100%"
        height="220px"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 3,
    url: "https://drive.google.com/uc?export=view&id=1WhEbyQ-vG7MaF50giFJc92Tbd8EoWS1q",
    name: "MEDITERRANEAN  REGION",
    text: "Bordered by the Aegean  to the west,the Central Anatolia to the north, Syria to the southeast, and the Mediterranean Sea to the south",
    places: [
      "Myria",
      "Aspendos",
      "Perga",
      "Kaunos",
      "Letoon",
      "Xanthos",
      "Patara",
      "Tlos",
      "Sagalassos",
    ],
    mapp: (
      <iframe
        src="https://my.atlistmaps.com/map/d8f21474-4435-410a-a7d9-00539e63fa9b?share=true"
        allow="geolocation"
        width="100%"
        height="250px"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    ),
  },
];

export default region;
