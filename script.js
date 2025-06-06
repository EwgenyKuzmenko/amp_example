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
