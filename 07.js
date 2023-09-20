const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Avni", 30, "avni@google.com");
addUser("guarav", 25, "guarav@google.com");
console.log(userMap);

updateUser("Avni", 31, "guarav@google.com");
console.log(userMap);

deleteUser("guarav");
console.log(userMap);
