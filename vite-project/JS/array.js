const products = [
  {
    name: "Call Of Duty : Modern Warfare 2 (PS5, Series X/S)",
    price: "$69.99",
    image:
      "https://assets-prd.ignimgs.com/2022/05/24/call-of-duty-modern-warfare-2-button-02-1653417394041.jpg",
    compatible: ["PS5", "PS4", "Xbox Series X/S"],
  },
  {
    name: "God of War : Ragnarök (PS5, 4)",
    price: "$69.99",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    compatible: ["PS5", "PS4"],
  },
  {
    name: "Twitch Gift Card",
    price: "$50.00",
    image:
      "data:image/jpeg;base64,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",
    compatible: ["PC"],
  },
  {
    name: "Apex Legends Gift Card (1000 Coins)",
    price: "$9.99",
    image:
      "https://image.api.playstation.com/vulcan/img/cfn/11307q1I_WSCDJBTaNXJWWbRy1u1AiXDpJ6e3P1sPopcAOZYMMjQukSyYMzKTaM7x0xMX64DQVuy8aT1CgHdw1ZMk1wYI9lQ.png",
    compatible: [
      "PC",
      "PS5",
      "PS4",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
  },
  {
    name: "Mario Plus Rabbids Sparks of Hope",
    price: "$59.99",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-plus-rabbids-kingdom-battle-switch/herov2",
    compatible: ["Nintendo Switch"],
  },
  {
    name: "Sonic Frontiers",
    price: " $59.99",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/capsule_616x353.jpg?t=1670238185",
    compatible: ["Xbox Series X/S", "PS5", "PS4", "Nintendo Switch"],
  },
  {
    name: "Gotham Knights",
    price: "$69.99",
    image:
      "https://cdn1.epicgames.com/offer/05057ec2d5ea43c3b0701cc1518e0577/EGS_GothamKnights_WarnerBrosGamesMontreal_S2_1200x1600-5a46b442e57afa637f013bbc09fe5487",
    compatible: ["Xbox Series X/S", "PS5"],
  },
];

export { products };
