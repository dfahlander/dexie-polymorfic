(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('dexie')) :
    typeof define === 'function' && define.amd ? define(['dexie'], factory) :
    (global.Dexie = global.Dexie || {}, global.Dexie.Observable = factory(global.Dexie));
}(this, (function (Dexie) {
  'use strict';

  function Polymorphic (db) {
  } 

  // Register addon:
  Dexie.Polymorphic = Polymorphic;
  Dexie.addons.push(Polymorphic);

  return Polymorphic;
})));
