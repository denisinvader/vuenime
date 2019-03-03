export const isArray = obj => Array.isArray(obj);

export const isObject = obj => (typeof obj === 'object') && !isArray(obj);
