const url = require('url');
const adress = '';
const parseUrl = url.parse(adress, true);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.query);
console.log(parseUrl.query.month);