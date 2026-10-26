'use strict';

// id связывает карточку, страницу товара и обе формы заявки.
const products = [
  {
    "id": "keyboard-compact",
    "category": "keyboards",
    "name": "Клавиатура Compact",
    "price": 2490,
    "badge": "Новинка",
    "badgeClass": "bg-success",
    "short": "Компактная клавиатура для небольшого рабочего стола.",
    "description": "Компактная проводная клавиатура без цифрового блока. Занимает меньше места на столе и подходит для конспектов, программирования и ежедневной работы.",
    "specs": [
      [
        "Подключение",
        "USB-C, проводное"
      ],
      [
        "Формат",
        "Без цифрового блока"
      ],
      [
        "Особенности",
        "Тихие мембранные клавиши"
      ]
    ]
  },
  {
    "id": "keyboard-classic",
    "category": "keyboards",
    "name": "Клавиатура Classic",
    "price": 1990,
    "badge": "Хит",
    "badgeClass": "bg-warning text-dark",
    "short": "Полноразмерная модель с отдельным цифровым блоком.",
    "description": "Полноразмерная клавиатура для дома и учёбы. Отдельный цифровой блок удобен для работы с таблицами и расчётами, а привычная раскладка помогает быстро начать работу.",
    "specs": [
      [
        "Подключение",
        "USB-A, проводное"
      ],
      [
        "Формат",
        "Полноразмерная"
      ],
      [
        "Особенности",
        "Цифровой блок, регулируемые ножки"
      ]
    ]
  },
  {
    "id": "keyboard-pro",
    "category": "keyboards",
    "name": "Клавиатура Pro",
    "price": 5490,
    "badge": "Для работы",
    "badgeClass": "bg-secondary",
    "short": "Механическая модель с подсветкой и съёмным кабелем.",
    "description": "Механическая клавиатура с подсветкой для длительной работы за компьютером. Съёмный кабель упрощает переноску, а компактный формат оставляет больше места для мыши.",
    "specs": [
      [
        "Подключение",
        "USB-C, проводное"
      ],
      [
        "Формат",
        "Компактная механическая"
      ],
      [
        "Особенности",
        "Подсветка, съёмный кабель"
      ]
    ]
  },
  {
    "id": "mouse-wireless",
    "category": "mice",
    "name": "Мышь Wireless",
    "price": 1490,
    "badge": "Хит",
    "badgeClass": "bg-warning text-dark",
    "short": "Беспроводная мышь для ноутбука и повседневных задач.",
    "description": "Лёгкая беспроводная мышь с USB-приёмником. Подходит для занятий, работы с документами и поездок с ноутбуком; освобождает стол от лишних проводов.",
    "specs": [
      [
        "Подключение",
        "Беспроводное, USB-приёмник"
      ],
      [
        "Чувствительность",
        "1600 DPI"
      ],
      [
        "Особенности",
        "Питание от одной батарейки AA"
      ]
    ]
  },
  {
    "id": "mouse-silent",
    "category": "mice",
    "name": "Мышь Silent",
    "price": 1190,
    "badge": "Новинка",
    "badgeClass": "bg-success",
    "short": "Тихие кнопки для занятий в библиотеке или дома.",
    "description": "Компактная мышь с тихими основными кнопками. Удобна для работы в общих помещениях и для вечерних занятий; симметричная форма подходит для разных вариантов хвата.",
    "specs": [
      [
        "Подключение",
        "USB-A, проводное"
      ],
      [
        "Чувствительность",
        "1200 DPI"
      ],
      [
        "Особенности",
        "Тихие кнопки, симметричная форма"
      ]
    ]
  },
  {
    "id": "mouse-gaming",
    "category": "mice",
    "name": "Мышь Gaming",
    "price": 2990,
    "badge": "Скидка",
    "badgeClass": "bg-danger",
    "short": "Настраиваемая чувствительность и дополнительные кнопки.",
    "description": "Проводная мышь с переключением чувствительности и боковыми кнопками. Подходит для игр и задач, в которых важны быстрые действия и точное управление курсором.",
    "specs": [
      [
        "Подключение",
        "USB-A, проводное"
      ],
      [
        "Чувствительность",
        "До 6400 DPI"
      ],
      [
        "Особенности",
        "Боковые кнопки, подсветка"
      ]
    ]
  },
  {
    "id": "headphones-wired",
    "category": "headphones",
    "name": "Наушники Wired",
    "price": 1990,
    "badge": "Для учёбы",
    "badgeClass": "bg-secondary",
    "short": "Проводная гарнитура с микрофоном для онлайн-занятий.",
    "description": "Полноразмерная гарнитура с микрофоном для лекций, видеозвонков и общения. Мягкие амбушюры и регулируемое оголовье помогают удобно разместить наушники.",
    "specs": [
      [
        "Подключение",
        "Разъём 3,5 мм"
      ],
      [
        "Конструкция",
        "Полноразмерные, закрытые"
      ],
      [
        "Особенности",
        "Микрофон, регулируемое оголовье"
      ]
    ]
  },
  {
    "id": "headphones-wireless",
    "category": "headphones",
    "name": "Наушники Wireless",
    "price": 3990,
    "badge": "Новинка",
    "badgeClass": "bg-success",
    "short": "Беспроводная модель со складной конструкцией.",
    "description": "Беспроводные наушники для музыки, прогулок и занятий. Складная конструкция удобна для переноски, а встроенный микрофон позволяет отвечать на звонки.",
    "specs": [
      [
        "Подключение",
        "Bluetooth"
      ],
      [
        "Конструкция",
        "Накладные, складные"
      ],
      [
        "Особенности",
        "Встроенный микрофон, зарядка USB-C"
      ]
    ]
  },
  {
    "id": "headphones-studio",
    "category": "headphones",
    "name": "Наушники Studio",
    "price": 5990,
    "badge": "Для музыки",
    "badgeClass": "bg-secondary",
    "short": "Полноразмерные наушники со съёмным кабелем.",
    "description": "Проводные полноразмерные наушники для внимательного прослушивания музыки и работы со звуком. Закрытая конструкция и мягкие амбушюры обеспечивают удобную посадку.",
    "specs": [
      [
        "Подключение",
        "Разъём 3,5 мм"
      ],
      [
        "Конструкция",
        "Полноразмерные, закрытые"
      ],
      [
        "Особенности",
        "Съёмный кабель, адаптер 6,3 мм"
      ]
    ]
  }
];
const categoryNames = { keyboards: 'Клавиатуры', mice: 'Мыши', headphones: 'Наушники' };
const productById = new Map(products.map(product => [product.id, product]));
const requestedId = new URLSearchParams(window.location.search).get('product');
const requestedProduct = productById.get(requestedId);
const formatPrice = price => new Intl.NumberFormat('ru-RU').format(price) + ' руб.';

// Одна HTML-страница показывает разные товары по параметру ?product=... .
if (document.getElementById('product-specs')) {
  const product = requestedProduct || products[0];
  document.title = product.name + ' — Периферия';
  document.querySelectorAll('[data-product-name]').forEach(node => { node.textContent = product.name; });
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = formatPrice(product.price);
  document.getElementById('product-category-label').textContent = categoryNames[product.category];
  const badge = document.getElementById('product-badge');
  badge.className = 'badge ' + product.badgeClass + ' mb-3';
  badge.textContent = product.badge;
  document.getElementById('product-order').href = 'order.html?product=' + encodeURIComponent(product.id);
  document.getElementById('product-back').href = 'catalog.html#' + product.category + '-pane';
  document.getElementById('product-fallback').hidden = !requestedId || Boolean(requestedProduct);
  const rows = [['Категория', categoryNames[product.category]], ['Цена', formatPrice(product.price)], ...product.specs, ['Наличие', 'В наличии']];
  const body = document.getElementById('product-specs');
  body.replaceChildren(...rows.map(([label, value]) => {
    const row = document.createElement('tr');
    const heading = document.createElement('th');
    heading.scope = 'row';
    heading.textContent = label;
    const cell = document.createElement('td');
    cell.textContent = value;
    row.append(heading, cell);
    return row;
  }));
}

// Выбираем в полной форме товар из ссылки. Очистка сохраняет исходный выбор.
const orderSelect = document.getElementById('order-product');
if (orderSelect && requestedProduct) {
  for (const option of orderSelect.options) option.defaultSelected = option.value === requestedProduct.id;
  orderSelect.value = requestedProduct.id;
}

// Bootstrap сообщает, какая кнопка открыла modal, через event.relatedTarget.
const modal = document.getElementById('orderModal');
if (modal) {
  const form = document.getElementById('quick-order-form');
  const select = document.getElementById('modal-product');
  const fullOrderLink = document.getElementById('modal-full-order');
  const updateOrderLink = () => { fullOrderLink.href = 'order.html?product=' + encodeURIComponent(select.value); };
  modal.addEventListener('show.bs.modal', event => {
    form.reset();
    const product = productById.get(event.relatedTarget?.dataset.product) || products[0];
    select.value = product.id;
    updateOrderLink();
  });
  select.addEventListener('change', updateOrderLink);
}

// Прямая ссылка с главной или возврат с товара открывает нужную вкладку.
if (document.getElementById('categoryTabs') && window.bootstrap) {
  const showCategoryFromHash = () => {
    const button = [...document.querySelectorAll('#categoryTabs [data-bs-toggle="tab"]')]
      .find(tab => tab.getAttribute('data-bs-target') === window.location.hash);
    if (button) bootstrap.Tab.getOrCreateInstance(button).show();
  };
  showCategoryFromHash();
  window.addEventListener('hashchange', showCategoryFromHash);
}
