(function () {
  try {
    const types = {
      Array,
      ArrayBuffer,
      Boolean,
      DataView,
      Date,
      Error,
      Float32Array,
      Float64Array,
      Function,
      Int16Array,
      Int32Array,
      Int8Array,
      Map,
      Math,
      Number,
      Object,
      Promise,
      RegExp,
      Set,
      String,
      Symbol,
      TypeError,
      Uint16Array,
      Uint32Array,
      Uint8Array,
      Uint8ClampedArray,
      WeakMap,
      WeakSet,
      clearInterval,
      clearTimeout,
      isFinite,
      parseFloat,
      parseInt,
      setInterval,
      setTimeout,
    };
    Object.assign(global, types);
  } catch (err) {
    console.error("set lodash polyfill failed", err);
  }
})();
