export function equalObjects(object1, object2) {
  if (JSON.stringify(object1) === JSON.stringify(object2)) {
    return true;
  }
  return false;
}

export function itemToDelete(itemIndex, items) {
  let counter = 0;
  let found = -1;
  const itemsList = items;
  itemsList.forEach((item) => {
    if (item.index === itemIndex) {
      found = counter;
    }
    counter += 1;
  });

  return itemsList[found];
}

export function objectIsfilled(data, items) {
  let isFilled = true;

  if (!Object.prototype.hasOwnProperty.call(data, 'name') ||
      !Object.prototype.hasOwnProperty.call(data, 'surname')) {
    return !isFilled;
  }

  if (data.name.length === 0 || data.surname.length === 0) {
    return !isFilled;
  }

  items.forEach((item) => {
    if (item.name.toLowerCase() === data.name.toLowerCase() &&
      item.surname.toLowerCase() === data.surname.toLowerCase()
    ) {
      isFilled = false;
    }
  });

  return isFilled;
}
