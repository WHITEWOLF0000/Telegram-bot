const TelegramBot = require('node-telegram-bot-api');
const token = '7608078996:AAFhMffkUDcBSC9m_27MWc33C-cYjuHpVtg'; 
const bot = new TelegramBot(token, { polling: true });

const userState = {}; 

const mainMenu = {
  inline_keyboard: [
    [{ text: "🍽 Menu", callback_data: 'open_menu' }],
  ],
};

const subMenu = {
  inline_keyboard: [
    [{ text: "🌭 Fast futlar", callback_data: 'fast_food_menu' }],
    [{ text: "🥤 Ichimliklar", callback_data: 'drinks_menu' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_main' }],
  ],
};

const fastFoodMenu = {
  inline_keyboard: [
    [{ text: "🍔 Gamburger", callback_data: 'gamburger_menu' }],
    [{ text: "🌯 Lavash", callback_data: 'lavash_menu' }],
    [{ text: "🍕 Pizza", callback_data: 'pizza_menu' }],
    [{ text: "🌭 Hot-dog", callback_data: 'dog_menu' }],
    [{ text: "🍟 Kartoshka-Fri", callback_data: 'fri_menu' }],
    [{ text: "🍗 KFC", callback_data: 'kfc_menu' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_submenu' }],
  ],
};

const gamburgerMenu = {
  inline_keyboard: [
    [{ text: "🍔 Oddiy - 56.000so'm", callback_data: 'item_gamb_1' }],
    [{ text: "🧀 Pishloqli - 56.000so'm", callback_data: 'item_gamb_2' }],
    [{ text: "🌶 Achchiq - 56.000so'm", callback_data: 'item_gamb_3' }],
    [{ text: "🍔 Katta - 56.000so'm", callback_data: 'item_gamb_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

function getGamb1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_gamb1' },
        { text: `${count}`, callback_data: 'count_gamb1' },
        { text: "➕", callback_data: 'increase_gamb1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_gamb1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'gamburger_menu' }
      ]
    ]
  };
}

function getGamb2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_gamb2' },
        { text: `${count}`, callback_data: 'count_gamb2' },
        { text: "➕", callback_data: 'increase_gamb2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_gamb2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'gamburger_menu' }
      ]
    ]
  };
}

function getGamb3Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_gamb3' },
        { text: `${count}`, callback_data: 'count_gamb3' },
        { text: "➕", callback_data: 'increase_gamb3' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_gamb3' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'gamburger_menu' }
      ]
    ]
  };
}

function getGamb4Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_gamb4' },
        { text: `${count}`, callback_data: 'count_gamb4' },
        { text: "➕", callback_data: 'increase_gamb4' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_gamb4' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'gamburger_menu' }
      ]
    ]
  };
}

const lavashMenu = {
  inline_keyboard: [
    [{ text: "🥩 Mol go‘shtli - 56.000so'm", callback_data: 'item_lavash_1' }],
    [{ text: "🍗 Tovuq go‘shtli - 56.000so'm", callback_data: 'item_lavash_2' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

function getLavash1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_lavash1' },
        { text: `${count}`, callback_data: 'count_lavash1' },
        { text: "➕", callback_data: 'increase_lavash1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_lavash1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'lavash_menu' }
      ]
    ]
  };
}

function getLavash2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_lavash2' },
        { text: `${count}`, callback_data: 'count_lavash2' },
        { text: "➕", callback_data: 'increase_lavash2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_lavash2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'lavash_menu' }
      ]
    ]
  };
}

const pizzaMenu = {
  inline_keyboard: [
    [{ text: "🍕 Margarita - 56.000so'm", callback_data: 'item_pizza_1' }],
    [{ text: "🍕 Pepperoni - 56.000so'm", callback_data: 'item_pizza_2' }],
    [{ text: "🍕 Tovuqli - 56.000so'm", callback_data: 'item_pizza_3' }],
    [{ text: "🍕 Kolbasali - 56.000so'm", callback_data: 'item_pizza_4' }],
    [{ text: "🍕 Family - 56.000so'm", callback_data: 'item_pizza_5' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

function getPizza1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pizza1' },
        { text: `${count}`, callback_data: 'count_pizza1' },
        { text: "➕", callback_data: 'increase_pizza1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pizza1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pizza_menu' }
      ]
    ]
  };
}

function getPizza2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pizza2' },
        { text: `${count}`, callback_data: 'count_pizza2' },
        { text: "➕", callback_data: 'increase_pizza2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pizza2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pizza_menu' }
      ]
    ]
  };
}

function getPizza3Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pizza3' },
        { text: `${count}`, callback_data: 'count_pizza3' },
        { text: "➕", callback_data: 'increase_pizza3' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pizza3' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pizza_menu' }
      ]
    ]
  };
}

function getPizza4Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pizza4' },
        { text: `${count}`, callback_data: 'count_pizza4' },
        { text: "➕", callback_data: 'increase_pizza4' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pizza4' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pizza_menu' }
      ]
    ]
  };
}

function getPizza5Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pizza5' },
        { text: `${count}`, callback_data: 'count_pizza5' },
        { text: "➕", callback_data: 'increase_pizza5' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pizza5' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pizza_menu' }
      ]
    ]
  };
}

const dogMenu = {
  inline_keyboard: [
    [{ text: "🌭 Oddiy - 56.000so'm", callback_data: 'item_dog_1' }],
    [{ text: "🌭 Dvoynoy - 56.000so'm", callback_data: 'item_dog_2' }],
    [{ text: "🌭 Tovuqli - 56.000so'm", callback_data: 'item_dog_3' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

function getDog1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_dog1' },
        { text: `${count}`, callback_data: 'count_dog1' },
        { text: "➕", callback_data: 'increase_dog1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_dog1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'dog_menu' }
      ]
    ]
  };
}

function getDog2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_dog2' },
        { text: `${count}`, callback_data: 'count_dog2' },
        { text: "➕", callback_data: 'increase_dog2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_dog2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'dog_menu' }
      ]
    ]
  };
}

function getDog3Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_dog3' },
        { text: `${count}`, callback_data: 'count_dog3' },
        { text: "➕", callback_data: 'increase_dog3' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_dog3' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'dog_menu' }
      ]
    ]
  };
}

const friMenu = {
  inline_keyboard: [
    [{ text: "🍟 Narxi - 10.000 so'm", callback_data: 'item_fri_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

function getFri1Menu(count) {
  const basePrice = 10000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_fri1' },
        { text: `${count}`, callback_data: 'count_fri1' },
        { text: "➕", callback_data: 'increase_fri1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_fri1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'fri_menu' }
      ]
    ]
  };
}

const kfcMenu = {
  inline_keyboard: [
    [{ text: "🍗 Suyaksiz - 56.000so'm", callback_data: 'item_kfc_1' }],
    [{ text: "🍗 Suyakli - 56.000so'm", callback_data: 'item_kfc_2' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

function getKfc1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_kfc1' },
        { text: `${count}`, callback_data: 'count_kfc1' },
        { text: "➕", callback_data: 'increase_kfc1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_kfc1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'kfc_menu' }
      ]
    ]
  };
}

function getKfc2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_kfc2' },
        { text: `${count}`, callback_data: 'count_kfc2' },
        { text: "➕", callback_data: 'increase_kfc2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_kfc2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'kfc_menu' }
      ]
    ]
  };
}

const drinksMenu = {
  inline_keyboard: [
    [{ text: "🥤 Cola", callback_data: 'cola_menu' }],
    [{ text: "🥤 Pepsi", callback_data: 'pepsi_menu' }],
    [{ text: "🥤 Fanta", callback_data: 'fanta_menu' }],
    [{ text: "🥤 Mohito", callback_data: 'mojito_menu' }],       
    [{ text: "⬅️ Ortga", callback_data: 'back_to_submenu' }],
  ],
};

const colaMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_cola_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_cola_1' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_cola_1' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_cola_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

function getCola1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_cola1' },
        { text: `${count}`, callback_data: 'count_cola1' },
        { text: "➕", callback_data: 'increase_cola1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_cola1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'cola_menu' }
      ]
    ]
  };
}

function getCola2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_cola2' },
        { text: `${count}`, callback_data: 'count_cola2' },
        { text: "➕", callback_data: 'increase_cola2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_cola2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'cola_menu' }
      ]
    ]
  };
}

function getCola3Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_cola3' },
        { text: `${count}`, callback_data: 'count_cola3' },
        { text: "➕", callback_data: 'increase_cola3' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_cola3' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'cola_menu' }
      ]
    ]
  };
}

function getCola4Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_cola4' },
        { text: `${count}`, callback_data: 'count_cola4' },
        { text: "➕", callback_data: 'increase_cola4' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_cola4' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'cola_menu' }
      ]
    ]
  };
}

const pepsiMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_pepsi_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_pepsi_2' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_pepsi_3' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_pepsi_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

function getPepsi1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pepsi1' },
        { text: `${count}`, callback_data: 'count_pepsi1' },
        { text: "➕", callback_data: 'increase_pepsi1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pepsi1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pepsi_menu' }
      ]
    ]
  };
}

function getPepsi2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pepsi2' },
        { text: `${count}`, callback_data: 'count_pepsi2' },
        { text: "➕", callback_data: 'increase_pepsi2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pepsi2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pepsi_menu' }
      ]
    ]
  };
}

function getPepsi3Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pepsi3' },
        { text: `${count}`, callback_data: 'count_pepsi3' },
        { text: "➕", callback_data: 'increase_pepsi3' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pepsi3' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pepsi_menu' }
      ]
    ]
  };
}

function getPepsi4Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_pepsi4' },
        { text: `${count}`, callback_data: 'count_pepsi4' },
        { text: "➕", callback_data: 'increase_pepsi4' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_pepsi4' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'pepsi_menu' }
      ]
    ]
  };
}

const fantaMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_fanta_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_fanta_2' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_fanta_3' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_fanta_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

function getFanta1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_fanta1' },
        { text: `${count}`, callback_data: 'count_fanta1' },
        { text: "➕", callback_data: 'increase_fanta1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_fanta1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'fanta_menu' }
      ]
    ]
  };
}

function getFanta2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_fanta2' },
        { text: `${count}`, callback_data: 'count_fanta2' },
        { text: "➕", callback_data: 'increase_fanta2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_fanta2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'fanta_menu' }
      ]
    ]
  };
}

function getFanta3Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_fanta3' },
        { text: `${count}`, callback_data: 'count_fanta3' },
        { text: "➕", callback_data: 'increase_fanta3' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_fanta3' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'fanta_menu' }
      ]
    ]
  };
}

function getFanta4Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_fanta4' },
        { text: `${count}`, callback_data: 'count_fanta4' },
        { text: "➕", callback_data: 'increase_fanta4' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_fanta4' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'fanta_menu' }
      ]
    ]
  };
}

const mojitoMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_mojito_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_mojito_2' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

function getMojito1Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_mojito1' },
        { text: `${count}`, callback_data: 'count_mojito1' },
        { text: "➕", callback_data: 'increase_mojito1' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_mojito1' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'mojito_menu' }
      ]
    ]
  };
}

function getMojito2Menu(count) {
  const basePrice = 56000;
  const totalPrice = basePrice * count;
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_mojito2' },
        { text: `${count}`, callback_data: 'count_mojito2' },
        { text: "➕", callback_data: 'increase_mojito2' }
      ],
      [
        { text: `🛍 Savatga solish (${totalPrice} so'm)`, callback_data: 'order_mojito2' }
      ],
      [
        { text: "⬅️ Ortga", callback_data: 'mojito_menu' }
      ]
    ]
  };
}

bot.setMyCommands([
  { command: '/start', description: 'Botni ishga tushirish.' },
  { command: '/menu', description: 'Menu bilan tanishish.' },
  { command: '/location', description: 'Cafemizning joylashuvi.' },
  { command: '/basket', description: 'Sizning savatingizdagi mahsulotlar.' },
]);

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '/start') {
    return bot.sendMessage(chatId, `Assalomu alaykum, ${msg.from.first_name} ${msg.from.last_name} Book Cafe botiga xush kelibsiz.`);
  }

  if (msg.text === '/menu') {
    return bot.sendMessage(chatId, "Iltimos, menyudan tanlang:", {
      reply_markup: mainMenu,
    });
  }

  if (msg.text === '/location') {
    return bot.sendLocation(chatId, 40.59202, 71.2323, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "📍 Google Maps orqali ko‘rish", url: "https://www.google.com/maps/place/Oshxona/@40.9885746,71.2299522,19z/data=!4m14!1m7!3m6!1s0x38bb2b345c7fba9d:0x8ecda2f0b822225c!2sCFC+-+Chust+Fried+Chickens!8m2!3d40.9832895!4d71.2325816!16s%2Fg%2F11t9ts12qr!3m5!1s0x38bb2ad1ac936cb9:0x6ac1773b78c97921!8m2!3d40.988569!4d71.2305139!16s%2Fg%2F11c52rrh97?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" }]
        ]
      }
    });
  }
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;

  switch (data) {
    case 'open_menu':
      return bot.editMessageText("📋 Kategoriya menyusi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: subMenu,
      });

    case 'fast_food_menu':
      return bot.editMessageText("🌭 Fast futlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: fastFoodMenu,
      });

    case 'drinks_menu':
      return bot.editMessageText("🥤 Ichimliklar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: drinksMenu,
      });

    case 'gamburger_menu':
      return bot.editMessageText("🍔 Gamburgerlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: gamburgerMenu,
      });

    case 'item_gamb_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍔 Oddiy Gamburger:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getGamb1Menu(1)
      });

    case 'increase_gamb1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_gamb1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_gamb1':
      return bot.sendMessage(chatId, `🍔 Oddiy Gamburger savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_gamb_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🧀 Pishloqli Gamburger:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getGamb2Menu(1)
      });

    case 'increase_gamb2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_gamb2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_gamb2':
      return bot.sendMessage(chatId, `🧀 Pishloqli Gamburger savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_gamb_3':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🌶 Achchiq Gamburger:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getGamb3Menu(1)
      });

    case 'increase_gamb3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_gamb3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_gamb3':
      return bot.sendMessage(chatId, `🌶 Achchiq Gamburger savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_gamb_4':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍔 Katta Gamburger:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getGamb4Menu(1)
      });

    case 'increase_gamb4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_gamb4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getGamb4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_gamb4':
      return bot.sendMessage(chatId, `🍔 Katta Gamburger savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'lavash_menu':
      return bot.editMessageText("🌯 Lavashlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: lavashMenu,
      });

    case 'item_lavash_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥩 Mol go'shtli lavash:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getLavash1Menu(1)
      });

    case 'increase_lavash1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getLavash1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_lavash1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getLavash1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_lavash1':
      return bot.sendMessage(chatId, `🥩 Mol go'shtli lavash savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_lavash_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍗 Tovuq go'shtli lavash:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getLavash2Menu(1)
      });

    case 'increase_lavash2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getLavash2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_lavash2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getLavash2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_lavash2':
      return bot.sendMessage(chatId, `🍗 Tovuq go'shtli lavash savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'pizza_menu':
      return bot.editMessageText("🍕 Pizzalar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: pizzaMenu,
      });

    case 'item_pizza_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍕 Margarita pizza:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPizza1Menu(1)
      });

    case 'increase_pizza1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pizza1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pizza1':
      return bot.sendMessage(chatId, `🍕 Margarita pizza savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pizza_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍕 Pepperoni pizza:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPizza2Menu(1)
      });

    case 'increase_pizza2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pizza2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pizza2':
      return bot.sendMessage(chatId, `🍕 Pepperoni pizza savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pizza_3':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍕 Tovuqli pizza:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPizza3Menu(1)
      });

    case 'increase_pizza3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pizza3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pizza3':
      return bot.sendMessage(chatId, `🍕 Tovuqli pizza savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pizza_4':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍕 Kolbasali pizza:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPizza4Menu(1)
      });

    case 'increase_pizza4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pizza4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pizza4':
      return bot.sendMessage(chatId, `🍕 Kolbasali pizza savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pizza_5':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍕 Family pizza:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPizza5Menu(1)
      });

    case 'increase_pizza5':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza5Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pizza5':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPizza5Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pizza5':
      return bot.sendMessage(chatId, `🍕 Family pizza savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'dog_menu':
      return bot.editMessageText("🌭 Hot-doglar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: dogMenu,
      });

    case 'item_dog_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🌭 Oddiy hot-dogi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getDog1Menu(1)
      });

    case 'increase_dog1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getDog1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_dog1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getDog1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_dog1':
      return bot.sendMessage(chatId, `🌭 Oddiy hot-dogi savatga qo'shildi! Soni: ${userState[chatId].count}`);
//
case 'item_dog_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🌭 Dvoynoy hot-dogi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getDog2Menu(1)
      });

    case 'increase_dog2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getDog2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_dog2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getDog2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

      case 'order_dog2':
      return bot.sendMessage(chatId, `🌭 Dvoynoy hot-dogi savatga qo'shildi! Soni: ${userState[chatId].count}`);
      //
      case 'item_dog_3':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🌭 Tovuqli hot-dogi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getDog3Menu(1)
      });

    case 'increase_dog3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getDog3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_dog3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getDog3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

      case 'order_dog3':
      return bot.sendMessage(chatId, `🌭 Tovuqli hot-dogi savatga qo'shildi! Soni: ${userState[chatId].count}`);
      //
    case 'fri_menu':
      return bot.editMessageText("🍟 Kartoshka-Fri:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: friMenu,
      });

      case 'item_fri_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍟 Kartoshka-Fri:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getFri1Menu(1)
      });

    case 'increase_fri1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFri1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_fri1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFri1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

      case 'order_fri1':
      return bot.sendMessage(chatId, `🍟 Kartoshka-Fri savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'kfc_menu':
      return bot.editMessageText("🍗 KFC:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: kfcMenu,
      });

            case 'item_kfc_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍗 KFC-suyaksiz:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getKfc1Menu(1)
      });

    case 'increase_kfc1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getKfc1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_kfc1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getKfc1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

      case 'order_kfc1':
      return bot.sendMessage(chatId, `🍗 KFC-suyaksiz savatga qo'shildi! Soni: ${userState[chatId].count}`);
//
        case 'item_kfc_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🍗 KFC-suyakli:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getKfc2Menu(1)
      });

    case 'increase_kfc2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getKfc2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_kfc2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getKfc2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );  

      case 'order_kfc2':
      return bot.sendMessage(chatId, `🍗 KFC-suyakli savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'cola_menu':
      return bot.editMessageText("🥤 Cola:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: colaMenu,
      });
      
         case 'item_cola_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Cola 0.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getCola1Menu(1)
      });

    case 'increase_cola1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_cola1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_cola1':
      return bot.sendMessage(chatId, `🥤 Cola 0.5l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_cola_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Cola 1l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getCola2Menu(1)
      });

    case 'increase_cola2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_cola2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_cola2':
      return bot.sendMessage(chatId, `🥤 Cola 1l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_cola_3':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Cola 1.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getCola3Menu(1)
      });

    case 'increase_cola3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_cola3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_cola3':
      return bot.sendMessage(chatId, `🥤 Cola 1.5l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_cola_4':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Cola 2l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getCola4Menu(1)
      });

    case 'increase_cola4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_cola4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getCola4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_cola4':
      return bot.sendMessage(chatId, `🥤 Cola 2l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'pepsi_menu':
      return bot.editMessageText("🥤 Pepsi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: pepsiMenu,
      });

    case 'item_pepsi_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Pepsi 0.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPepsi1Menu(1)
      });

    case 'increase_pepsi1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pepsi1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pepsi1':
      return bot.sendMessage(chatId, `🥤 Pepsi 0.5l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pepsi_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Pepsi 1l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPepsi2Menu(1)
      });

    case 'increase_pepsi2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pepsi2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pepsi2':
      return bot.sendMessage(chatId, `🥤 Pepsi 1l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pepsi_3':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Pepsi 1.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPepsi3Menu(1)
      });

    case 'increase_pepsi3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pepsi3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pepsi3':
      return bot.sendMessage(chatId, `🥤 Pepsi 1.5l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_pepsi_4':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Pepsi 2l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getPepsi4Menu(1)
      });

    case 'increase_pepsi4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_pepsi4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getPepsi4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_pepsi4':
      return bot.sendMessage(chatId, `🥤 Pepsi 2l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'fanta_menu':
      return bot.editMessageText("🥤 Fanta:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: fantaMenu,
      });

    case 'item_fanta_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Fanta 0.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getFanta1Menu(1)
      });

    case 'increase_fanta1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_fanta1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_fanta1':
      return bot.sendMessage(chatId, `🥤 Fanta 0.5l savatga qo'shildi! Soni: ${userState[chatId].count}`);

    case 'item_fanta_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Fanta 1l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getFanta2Menu(1)
      });

    case 'increase_fanta2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_fanta2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'order_fanta2':
      return bot.sendMessage(chatId, `🥤 Fanta 1l savatga qo'shildi! Soni: ${userState[chatId].count}`);  
////////////////////////
         case 'item_fanta_3':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Fanta 1.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getFanta3Menu(1)
      });

    case 'increase_fanta3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_fanta3':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta3Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );  
////////////////////////
         case 'item_fanta_4':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Fanta 2l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getFanta4Menu(1)
      });

    case 'increase_fanta4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_fanta4':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getFanta4Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );  

    case 'mojito_menu':
      return bot.editMessageText("🥤 Mojito:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: mojitoMenu,
      });
      
      case 'item_mojito_1':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Mojito 0.5l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getMojito1Menu(1)
      });

          case 'increase_mojito1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getMojito1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_mojito1':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getMojito1Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );  
////////////////////////      
         case 'item_mojito_2':
      userState[chatId] = { count: 1 };
      return bot.editMessageText("🥤 Mojito 1l:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: getMojito2Menu(1)
      });

    case 'increase_mojito2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = (userState[chatId].count || 1) + 1;
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getMojito2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

    case 'decrease_mojito2':
      if (!userState[chatId]) userState[chatId] = { count: 1 };
      userState[chatId].count = Math.max(1, (userState[chatId].count || 1) - 1);
      return bot.editMessageReplyMarkup(
        { inline_keyboard: getMojito2Menu(userState[chatId].count).inline_keyboard },
        { chat_id: chatId, message_id: messageId }
      );

      case 'back_to_main':
      return bot.editMessageText("Iltimos, menyudan tanlang:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: mainMenu,
      });

    case 'back_to_submenu':
      return bot.editMessageText("📋 Kategoriya menyusi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: subMenu,
      });

    case 'back_to_fastfood':
      return bot.editMessageText("🌭 Fast futlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: fastFoodMenu,
      });

    case 'back_to_drinks':
      return bot.editMessageText("🥤 Ichimliklar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: drinksMenu,
      });

    case 'back_to_dessertMenu':
      return bot.editMessageText("🍰 Desertlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: dessertMenu,
      });

    default:
      return bot.answerCallbackQuery({ callback_query_id: query.id, text: `Tanlov: ${data}` });
  }
});

