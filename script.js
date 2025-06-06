function loadUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function registerUser(username, password) {
  const users = loadUsers();
  if (users.find(u => u.username === username)) {
    return false; // user exists
  }
  users.push({ username, password });
  saveUsers(users);
  return true;
}

function validateUser(username, password) {
  const users = loadUsers();
  return users.find(u => u.username === username && u.password === password);
}

function setCurrentUser(username) {
  localStorage.setItem('currentUser', username);
}

function getCurrentUser() {
  return localStorage.getItem('currentUser');
}

function logout() {
  localStorage.removeItem('currentUser');
}

// ---- Settings persistence ----
function setSelectedPair(pair) {
  localStorage.setItem('selectedPair', pair);
}

function getSelectedPair() {
  return localStorage.getItem('selectedPair') || 'BTCUSDT';
}

// ---- Price fetching helpers ----
async function fetchBinancePrice(pair) {

  const url = `https://corsproxy.io/https://api.binance.com/api/v3/ticker/price?symbol=${pair}`;
  const res = await fetch(url);
  const data = await res.json();
  return parseFloat(data.price);
}

async function fetchBybitPrice(pair) {

  const url = `https://corsproxy.io/https://api.bybit.com/v5/market/tickers?category=spot&symbol=${pair}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.result && data.result.list && data.result.list.length > 0) {
    return parseFloat(data.result.list[0].lastPrice);
  }
  throw new Error('Pair not found');
}
