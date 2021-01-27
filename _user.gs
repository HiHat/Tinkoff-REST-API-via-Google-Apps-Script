class User { // Получении информации по брокерским счетам
  constructor(token) {
    this.token = token;
  }
  Accounts() {
    var data = userAccounts(this.token);
    function userAccounts(token) { // Получение брокерских счетов клиента
      var obj = {
        method: 'GET',
        path: 'user/accounts'
      }
      return tinkoffApi_(obj, token);
    }
    return data;
  }
}

