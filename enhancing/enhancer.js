module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {

  if(item.enhancement === 20) {
    return item
  }

  return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {

  if(item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 }
  } else if(item.enhancement > 14 && item.enhancement < 17) {
    return { ...item, durability: item.durability - 10 }
  } else if(item.enhancement > 16) {
    return { ...item, durability: item.durability - 10, enhancement: item.enhancement -1 }
  }

  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
