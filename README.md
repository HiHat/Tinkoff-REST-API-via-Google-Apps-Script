TinkoffApp
========

Обёртка Tinkoff API V2 на Google Apps Script

Обёртку можно использовать как в виде файла добавлемого в исходный код проекта, так и в виде подключаемой библиотеки

## TinkoffAppV2.gs

### Как использовать файл

1. Добавьте содержимое файла TinkoffAppV2.gs в свой проект
2. Получите API токен в [кабинете Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)
3. Пользуйтесь
```javascript
function myFunction() {

  // Создаём API
  var tAPI = new TinkoffAppV2({
    token: '1234567890', // укажите здесь свой токен
    logging: true, // Опционально - показывать в логах запросы и ответы
    mode: 'sandbox' // Опционально - для работы с песочницей
  });
 
  // Используем API v2
  var my_balance = tAPI.portfolioCurrencies(); // например, получаем валютные активы
}
```

## Библиотека TinkoffApp (не реализован переход на API V2!!!)

### Ключ библиотеки

```
1uEtkgmmDPIQJ607pToZJX-0R2xa3g2hEw2Jx3KZmUni93T7FH2Vf4th1
```

### Версии

[https://script.google.com/macros/library/versions/d/1uEtkgmmDPIQJ607pToZJX-0R2xa3g2hEw2Jx3KZmUni93T7FH2Vf4th1](https://script.google.com/macros/library/versions/d/1uEtkgmmDPIQJ607pToZJX-0R2xa3g2hEw2Jx3KZmUni93T7FH2Vf4th1)

### Как использовать библиотеку

1. Подключите библиотеку `TinkoffApp` к своему проекту - [Инструкция](https://developers.google.com/apps-script/guide_libraries?hl=ru)
2. Получите API токен в [кабинете Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)
3. Пользуйтесь
```javascript
function myFunction() {

  // Создаём API
  var tAPI = TinkoffApp.auth({
    token: '1234567890', // укажите здесь свой токен
    logging: true, // Опционально - показывать в логах запросы и ответы
    mode: 'sandbox' // Опционально - для работы с песочницей
  });
 
  // Используем API
  var my_balance = tAPI.portfolioCurrencies(); // например, получаем валютные активы
}
```

#### Описание

Все методы аналогичны указанным в официальной документации по API v2 - https://tinkoff.github.io/investAPI/swagger-ui/

##### Методы

InstrumentsService
```javascript
```

MarketDataService
```javascript
```

OperationsService
```javascript
- .GetPortfolio(accountId) // Получение портфеля клиента
```

OrdersService
```javascript
- .GetOrders(accountId) // Получение списка активных заявок по счету
```

StopOrdersService
```javascript
```

UsersService
```javascript
- .GetAccounts() // Метод получения счетов пользователя
- .GetInfo() // Метод получения информации о пользователе
```

SandboxService
```javascript
```
