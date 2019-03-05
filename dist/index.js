(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.sleep = factory());
}(this, function () { 'use strict';

  function sleep (ms, returnValue) {
    return new Promise(resolve => setTimeout(() => resolve(returnValue), ms))
  }

  return sleep;

}));
