const db = {
  user: [
    { id: 1, name: "Carlos", age: 25 },
    { id: 2, name: "Maria", age: 30 },
  ],
};

function list(tabla) {
  return db[tabla];
}
function get(tabla, id) {
  let col = list(tabla);
  return col.filter(item.id === id)[0] || null;
}
function upsert(tabla, data) {
  db[collection].push(data);
}
function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
