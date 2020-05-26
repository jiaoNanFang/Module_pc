/**
 *  防抖 _debounce
 */
export function _debounce(fn, delay) {

  var delay = delay || 200;
  var timer;
  return function () {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}
/**
 *  节流 _debounce
 */
export function _throttle(fn, interval) {
  var last;
  var timer;
  var interval = interval || 200;
  return function () {
    var th = this;
    var args = arguments;
    var now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(th, args);
      }, interval);
    } else {
      last = now;
      fn.apply(th, args);
    }
  }
}


/**
 *  秒数 转 HH:MM:SS
 */
export function _changeTimeBySecond(second) {
  var hourTime = 0;
  var minuteTime = 0;
  var secondTime = 0;
  if (second > 60) {  //如果秒数大于60
    minuteTime = Math.floor(second / 60);
    secondTime = Math.floor(second % 60);
    if (minuteTime >= 60) {  //如果分钟大于60
      hourTime = Math.floor(minuteTime / 60);
      minuteTime = Math.floor(minuteTime % 60);
    } else {
      hourTime = 0;
    }
  } else {
    hourTime = 0;
    minuteTime = 0;
    if (second == 60) {  //如果秒数等于60
      minuteTime = 1;
      secondTime = 0;
    } else {
      secondTime = second;
    }
  }
  var timeResult = _addZero(hourTime) + ':' +_addZero(minuteTime) + ':' + _addZero(secondTime);
  return timeResult;
}
export function _addZero(time) {
    let str = time;
    if (time < 10) {
      str = '0' + time;
    }
    return str;
  }

/**
 *  秒数转 MM：SS
 */
export function _timeFormat(number) {
  var minute = parseInt(number / 60);
  var second = parseInt(number % 60);
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;
  return minute + ":" + second;
}

