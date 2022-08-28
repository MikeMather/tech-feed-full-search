
export const snakeToCamel = (obj: {[key: string]: any}) => {
  const transform = (str: string): string => str.replace(/(_?_\w)/g, m => {
    return m.length === 3 ? m[2].toUpperCase() : m[1].toUpperCase();
  });
  const newObj: {[key: string]: any} = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      newObj[transform(key)] = snakeToCamel(obj[key]);
    }
    else {
      newObj[transform(key)] = obj[key];
    }
  })
  return newObj;
}

export const camelToSnake = (obj: {[key: string]: any}) => {
  const transform = (str: string): string => str.replace(/([A-Z])/g, m => `_${m[0].toLowerCase()}`);
  const newObj: {[key: string]: any} = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      newObj[transform(key)] = camelToSnake(obj[key]);
    }
    else {
      newObj[transform(key)] = obj[key];
    }
  });
  return newObj;
}