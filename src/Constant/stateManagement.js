const operations = {};

export const subscribe = (eventName, callbackFunction) => {
  operations[eventName]
    ? operations[eventName].push(callbackFunction)
    : (operations[eventName] = [callbackFunction]);
};

export const publish = (eventName) => {
  if (operations[eventName]) {
    operations[eventName].forEach((callbackFunction) => callbackFunction());
  }
};

export const unsubscribe = (eventName, callbackFunction) => {
  if (operations[eventName]) {
    let index = operations[eventName].indexOf(callbackFunction);
    operations[eventName].splice(index, index + 1);
  }
};
