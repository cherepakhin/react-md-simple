/**
 * Форматирование даты в виде '2012-01-26' в '26.01.2012'
 * @param  {Date} ddate [description]
 * @return {string}     дата в виде dd.mm.yyyy
 */
export let formatDate = function (ddate) {
  ddate = new Date(Date.parse(ddate));
  /*  if (typeof (ddate) == 'string') {
    }
  */
  var year = ddate.getFullYear();
  var month = (1 + ddate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = ddate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return day + '.' + month + '.' + year;
};

export let dateFormatter = new Intl.DateTimeFormat('ru');

export const getHeaderForJSON = function (json) {
// let - Областью видимости переменных, объявленных ключевым словом let,
// является блок, в котором они объявлены, и все его подблоки.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
  let body = '';
  if (json != '') {
    body = JSON.stringify(json);
  }

  return {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: body
  };
};

export const formatMoney = function (num) {
  let c = 0;
  let d = '.';
  let t = ' ';
  let n = num;
  let j = 0;
  c = isNaN(c = Math.abs(c)) ? 2 : c;
  d = d == undefined ? '.' : d;
  t = t == undefined ? ',' : t;
  let s = n < 0 ? '-' : '';
  let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
  j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

export const strToDecimal = function (str) {
  // return parseFloat(str).toFixed(2);
  let d = +str;
  return d;
};

export const strToDate = function (str) {
  let ret = new Date().toISOString().slice(0, 10);
  if (str != undefined) {
    ret = str.slice(0, 10);
  }

  return ret;
};
