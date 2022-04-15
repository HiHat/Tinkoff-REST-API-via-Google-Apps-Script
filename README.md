TinkoffApp v2
=============

Обёртка Tinkoff API V2 на Google Apps Script

Обёртку можно использовать в виде файла добавлемого в исходный код проекта (в виде подключаемой библиотеки, возможно, в будущем).

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

#### Описание

Все методы аналогичны указанным в официальной документации по API v2 - https://tinkoff.github.io/investAPI/swagger-ui/

##### Методы

InstrumentsService
```javascript
```

MarketDataService
```javascript
- .GetLastPrices(figi) // Метод запроса последних цен по инструментам
- .GetOrderBook(figi,depth) // Метод получения стакана по инструменту
```

OperationsService
```javascript
- .GetOperations(accountId,from,to,state,figi) // Метод получения списка операций по счёту
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
