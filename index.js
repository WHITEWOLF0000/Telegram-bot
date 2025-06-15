const TelegramBot = require('node-telegram-bot-api');
const token = '7639811735:AAHOM0_SFuHPc17Fazj3dUYjn6QQvy8xyKY'; // Tokeningni shu yerga yoz
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
    [{ text: "🍰 Desertlar", callback_data: 'dessert_menu' }],
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
  return {
    inline_keyboard: [
      [
        { text: "➖", callback_data: 'decrease_gamb1' },
        { text: `${count}`, callback_data: 'count_gamb1' },
        { text: "➕", callback_data: 'increase_gamb1' }
      ],
      [
        { text: "✅ Buyurtma qilish", callback_data: 'order_gamb1' }
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

const dogMenu = {
  inline_keyboard: [
    [{ text: "🌭 Oddiy - 56.000so'm", callback_data: 'item_dog_1' }],
    [{ text: "🌭 Dvoynoy - 56.000so'm", callback_data: 'item_dog_2' }],
    [{ text: "🌭 Tovuqli - 56.000so'm", callback_data: 'item_dog_3' }],
    [{ text: "🌭 Kolbasali - 56.000so'm", callback_data: 'item_dog_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

const friMenu = {
  inline_keyboard: [
    [{ text: "🍟 Narxi - 10.000 so'm", callback_data: 'item_fri_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};

const kfcMenu = {
  inline_keyboard: [
    [{ text: "🍗 Oddiy - 56.000so'm", callback_data: 'item_kfc_1' }],
    [{ text: "🍗 Achchiq - 56.000so'm", callback_data: 'item_kfc_2' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_fastfood' }],
  ],
};


const drinksMenu = {
  inline_keyboard: [
    [{ text: "🥤 Cola", callback_data: 'cola_menu' }],
    [{ text: "🥤 Pepsi", callback_data: 'pepsi_menu' }],
    [{ text: "🥤 Fanta", callback_data: 'fanta_menu' }],
    [{ text: "🥤 Mojito", callback_data: 'mojito_menu' }],       
    [{ text: "🍋 Limonli choy", callback_data: 'lemontea_menu' }],
    [{ text: "☕ Kofe", callback_data: 'coffee_menu' }],
    [{ text: "🫖 Qora-Choy", callback_data: 'blacktea_menu' }],
    [{ text: "🫖 Ko'k-Choy", callback_data: 'greentea_menu' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_submenu' }],
  ],
};

const colaMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_cola_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_cola_2' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_cola_3' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_cola_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

const pepsiMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_pepsi_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_pepsi_2' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_pepsi_3' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_pepsi_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

const fantaMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_fanta_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_fanta_2' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_fanta_3' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_fanta_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

const mojitoMenu = {
  inline_keyboard: [
    [{ text: "🥤 0.5l - 56.000so'm", callback_data: 'item_mojito_1' }],
    [{ text: "🥤 1l - 56.000so'm", callback_data: 'item_mojito_2' }],
    [{ text: "🥤 1.5l - 56.000so'm", callback_data: 'item_mojito_3' }],
    [{ text: "🥤 2l - 56.000so'm", callback_data: 'item_mojito_4' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
  ],
};

const lemonteaMenu = {
  inline_keyboard: [
    [{ text: "🍋 Bir finjon - 56.000so'm", callback_data: 'item_lemontea_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }]
  ]
};


const coffeeMenu = {
  inline_keyboard: [
    [{ text: "☕ Bir finjon - 56.000so'm", callback_data: 'item_coffe_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
    ],
};

const blackteaMenu = {
  inline_keyboard: [
    [{ text: "🫖 Bir finjon - 56.000so'm", callback_data: 'item_blacktea_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
    ],
};

const greenteaMenu = {
  inline_keyboard: [
    [{ text: "🫖 Bir finjon - 56.000so'm", callback_data: 'item_greentea_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_drinks' }],
    ],
};

const dessertMenu = {
  inline_keyboard: [
    [{ text: "🍩 Ponchik", callback_data: 'donut_menu' }],
    [{ text: "🍰 Tort", callback_data: 'cake_menu' }],
    [{ text: "🍮 Puding", callback_data: 'pudding_menu' }],
    [{ text: "🧁 Kapkeyk", callback_data: 'cupcake_menu' }],
    [{ text: "🥧 Pirog", callback_data: 'pie_menu' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_submenu' }]
  ],
};

const donutMenu = {
  inline_keyboard: [
    [{ text: "🍩 Bir donasi - 56.000so'm", callback_data: 'item_donut_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_dessertMenu' }],
    ],
};

const cakeMenu = {
  inline_keyboard: [
    [{ text: "🍰 Bir bo'lagi - 56.000so'm", callback_data: 'item_cake_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_dessertMenu' }],
    ],
};

const puddingMenu = {
  inline_keyboard: [
    [{ text: "🍮 Bir donasi - 56.000so'm", callback_data: 'item_pudding_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_dessertMenu' }],
    ],
};

const cupcakeMenu = {
  inline_keyboard: [
    [{ text: "🧁 Bir donasi - 56.000so'm", callback_data: 'item_cupcake_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_dessertMenu' }],
    ],
};

const pieMenu = {
  inline_keyboard: [
    [{ text: "🥧 Bir bo'lagi - 56.000so'm", callback_data: 'item_pie_1' }],
    [{ text: "⬅️ Ortga", callback_data: 'back_to_dessertMenu' }],
    ],
};

bot.setMyCommands([
  { command: '/start', description: 'Botni ishga tushirish' },
  { command: '/menu', description: 'Menu bilan tanishish' },
  { command: '/location', description: 'Cafemizning joylashuvi' },
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
  return bot.sendLocation(chatId, 40.2276, 71.7780, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📍 Google Maps orqali ko‘rish", url: "https://www.google.com/maps/place/Book+Cafe+Chust/@40.9984505,71.2316133,19z/data=!4m12!1m5!3m4!2zNDDCsDEzJzM5LjQiTiA3McKwNDYnNDAuOSJF!8m2!3d40.2276111!4d71.7780278!3m5!1s0x38a4d5006b6f449b:0xcef9b8f6bb6684ce!8m2!3d40.9983414!4d71.2318241!16s%2Fg%2F11y3xp06jl?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" }]
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

    case 'dessert_menu':
      return bot.editMessageText("🍰 Desertlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: dessertMenu,
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
      return bot.sendMessage(chatId, `🍔 Oddiy Gamburger buyurtma qilindi! Soni: ${userState[chatId].count}`);

    case 'lavash_menu':
      return bot.editMessageText("🌯 Lavashlar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: lavashMenu,
      });

    case 'pizza_menu':
      return bot.editMessageText("🍕 Pizzalar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: pizzaMenu,
      });

    case 'dog_menu':
      return bot.editMessageText("🌭 Hot-doglar:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: dogMenu,
      });

    case 'fri_menu':
      return bot.editMessageText("🍟 Kartoshka-Fri:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: friMenu,
      });

    case 'kfc_menu':
      return bot.editMessageText("🍗 KFC:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: kfcMenu,
      });

    case 'cola_menu':
      return bot.editMessageText("🥤 Cola:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: colaMenu,
      });

    case 'pepsi_menu':
      return bot.editMessageText("🥤 Pepsi:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: pepsiMenu,
      });

    case 'fanta_menu':
      return bot.editMessageText("🥤 Fanta:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: fantaMenu,
      });

    case 'mojito_menu':
      return bot.editMessageText("🥤 Mojito:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: mojitoMenu,
      });

    case 'lemontea_menu':
      return bot.editMessageText("🍋 Limonli choy:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: lemonteaMenu,
      });

    case 'coffee_menu':
      return bot.editMessageText("☕ Kofe:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: coffeeMenu,
      });

    case 'blacktea_menu':
      return bot.editMessageText("🫖 Qora-Choy:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: blackteaMenu,
      });

    case 'greentea_menu':
      return bot.editMessageText("🫖 Ko'k-Choy:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: greenteaMenu,
      });

    case 'donut_menu':
      return bot.editMessageText("🍩 Ponchik:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: donutMenu,
      });

    case 'cake_menu':
      return bot.editMessageText("🍰 Tort:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: cakeMenu,
      });

    case 'pudding_menu':
      return bot.editMessageText("🍮 Puding:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: puddingMenu,
      });

    case 'cupcake_menu':
      return bot.editMessageText("🧁 Kapkeyk:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: cupcakeMenu,
      });

    case 'pie_menu':
      return bot.editMessageText("🥧 Pirog:", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: pieMenu,
      });

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

