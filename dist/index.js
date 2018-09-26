(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.sleep = factory());
}(this, (function () { 'use strict';

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return sleep;

})));
