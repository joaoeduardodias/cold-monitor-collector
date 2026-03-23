var bh = Object.defineProperty;
var xl = (t) => {
  throw TypeError(t);
};
var _h = (t, e, n) => e in t ? bh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var J = (t, e, n) => _h(t, typeof e != "symbol" ? e + "" : e, n), Ca = (t, e, n) => e.has(t) || xl("Cannot " + n);
var Q = (t, e, n) => (Ca(t, e, "read from private field"), n ? n.call(t) : e.get(t)), st = (t, e, n) => e.has(t) ? xl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ze = (t, e, n, r) => (Ca(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), ft = (t, e, n) => (Ca(t, e, "access private method"), n);
import qt from "util";
import xe, { Readable as wh } from "stream";
import Et from "path";
import xr from "http";
import Bt from "https";
import br from "url";
import mn from "fs";
import _r from "crypto";
import $d from "http2";
import Eh from "assert";
import $h from "tty";
import gt from "zlib";
import Uo, { EventEmitter as Sh } from "events";
import zo, { nativeImage as Rh, Tray as Oh, BrowserWindow as wr, Menu as Th, app as Dn, ipcMain as $t } from "electron";
import Ph from "child_process";
import Er from "os";
import Z from "node:path";
import kh from "net";
import Ah from "tls";
import Nh from "buffer";
import { fileURLToPath as jh } from "node:url";
import ee, { existsSync as Ih, readFileSync as Ch } from "node:fs";
import me from "node:process";
import { promisify as Te, isDeepStrictEqual as bl } from "node:util";
import Gt from "node:crypto";
import _l from "node:assert";
import Sd from "node:os";
import "node:events";
import "node:stream";
function Rd(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Lh } = Object.prototype, { getPrototypeOf: Mo } = Object, { iterator: Vs, toStringTag: Od } = Symbol, Gs = /* @__PURE__ */ ((t) => (e) => {
  const n = Lh.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), et = (t) => (t = t.toLowerCase(), (e) => Gs(e) === t), Hs = (t) => (e) => typeof e === t, { isArray: Bn } = Array, Un = Hs("undefined");
function $r(t) {
  return t !== null && !Un(t) && t.constructor !== null && !Un(t.constructor) && De(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Td = et("ArrayBuffer");
function Fh(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Td(t.buffer), e;
}
const Dh = Hs("string"), De = Hs("function"), Pd = Hs("number"), Sr = (t) => t !== null && typeof t == "object", Uh = (t) => t === !0 || t === !1, ds = (t) => {
  if (Gs(t) !== "object")
    return !1;
  const e = Mo(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Od in t) && !(Vs in t);
}, zh = (t) => {
  if (!Sr(t) || $r(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, Mh = et("Date"), qh = et("File"), Bh = et("Blob"), Vh = et("FileList"), Gh = (t) => Sr(t) && De(t.pipe), Hh = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || De(t.append) && ((e = Gs(t)) === "formdata" || // detect form-data instance
  e === "object" && De(t.toString) && t.toString() === "[object FormData]"));
}, Wh = et("URLSearchParams"), [Kh, Jh, Xh, Yh] = ["ReadableStream", "Request", "Response", "Headers"].map(et), Zh = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rr(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), Bn(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    if ($r(t))
      return;
    const a = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = a.length;
    let o;
    for (r = 0; r < i; r++)
      o = a[r], e.call(null, t[o], o, t);
  }
}
function kd(t, e) {
  if ($r(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ad = (t) => !Un(t) && t !== tn;
function po() {
  const { caseless: t, skipUndefined: e } = Ad(this) && this || {}, n = {}, r = (s, a) => {
    const i = t && kd(n, a) || a;
    ds(n[i]) && ds(s) ? n[i] = po(n[i], s) : ds(s) ? n[i] = po({}, s) : Bn(s) ? n[i] = s.slice() : (!e || !Un(s)) && (n[i] = s);
  };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && Rr(arguments[s], r);
  return n;
}
const Qh = (t, e, n, { allOwnKeys: r } = {}) => (Rr(e, (s, a) => {
  n && De(s) ? t[a] = Rd(s, n) : t[a] = s;
}, { allOwnKeys: r }), t), ev = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), tv = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, nv = (t, e, n, r) => {
  let s, a, i;
  const o = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      i = s[a], (!r || r(i, t, e)) && !o[i] && (e[i] = t[i], o[i] = !0);
    t = n !== !1 && Mo(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, rv = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, sv = (t) => {
  if (!t) return null;
  if (Bn(t)) return t;
  let e = t.length;
  if (!Pd(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, av = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Mo(Uint8Array)), iv = (t, e) => {
  const r = (t && t[Vs]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    e.call(t, a[0], a[1]);
  }
}, ov = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, cv = et("HTMLFormElement"), lv = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), wl = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), uv = et("RegExp"), Nd = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Rr(n, (s, a) => {
    let i;
    (i = e(s, a, t)) !== !1 && (r[a] = i || s);
  }), Object.defineProperties(t, r);
}, pv = (t) => {
  Nd(t, (e, n) => {
    if (De(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (De(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, dv = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return Bn(t) ? r(t) : r(String(t).split(e)), n;
}, fv = () => {
}, mv = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function hv(t) {
  return !!(t && De(t.append) && t[Od] === "FormData" && t[Vs]);
}
const vv = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (Sr(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if ($r(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const a = Bn(r) ? [] : {};
        return Rr(r, (i, o) => {
          const c = n(i, s + 1);
          !Un(c) && (a[o] = c);
        }), e[s] = void 0, a;
      }
    }
    return r;
  };
  return n(t, 0);
}, yv = et("AsyncFunction"), gv = (t) => t && (Sr(t) || De(t)) && De(t.then) && De(t.catch), jd = ((t, e) => t ? setImmediate : e ? ((n, r) => (tn.addEventListener("message", ({ source: s, data: a }) => {
  s === tn && a === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), tn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  De(tn.postMessage)
), xv = typeof queueMicrotask < "u" ? queueMicrotask.bind(tn) : typeof process < "u" && process.nextTick || jd, bv = (t) => t != null && De(t[Vs]), E = {
  isArray: Bn,
  isArrayBuffer: Td,
  isBuffer: $r,
  isFormData: Hh,
  isArrayBufferView: Fh,
  isString: Dh,
  isNumber: Pd,
  isBoolean: Uh,
  isObject: Sr,
  isPlainObject: ds,
  isEmptyObject: zh,
  isReadableStream: Kh,
  isRequest: Jh,
  isResponse: Xh,
  isHeaders: Yh,
  isUndefined: Un,
  isDate: Mh,
  isFile: qh,
  isBlob: Bh,
  isRegExp: uv,
  isFunction: De,
  isStream: Gh,
  isURLSearchParams: Wh,
  isTypedArray: av,
  isFileList: Vh,
  forEach: Rr,
  merge: po,
  extend: Qh,
  trim: Zh,
  stripBOM: ev,
  inherits: tv,
  toFlatObject: nv,
  kindOf: Gs,
  kindOfTest: et,
  endsWith: rv,
  toArray: sv,
  forEachEntry: iv,
  matchAll: ov,
  isHTMLForm: cv,
  hasOwnProperty: wl,
  hasOwnProp: wl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Nd,
  freezeMethods: pv,
  toObjectSet: dv,
  toCamelCase: lv,
  noop: fv,
  toFiniteNumber: mv,
  findKey: kd,
  global: tn,
  isContextDefined: Ad,
  isSpecCompliantForm: hv,
  toJSONObject: vv,
  isAsyncFn: yv,
  isThenable: gv,
  setImmediate: jd,
  asap: xv,
  isIterable: bv
};
function q(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
E.inherits(q, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Id = q.prototype, Cd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Cd[t] = { value: t };
});
Object.defineProperties(q, Cd);
Object.defineProperty(Id, "isAxiosError", { value: !0 });
q.from = (t, e, n, r, s, a) => {
  const i = Object.create(Id);
  E.toFlatObject(t, i, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const o = t && t.message ? t.message : "Error", c = e == null && t ? t.code : e;
  return q.call(i, o, c, n, r, s), t && i.cause == null && Object.defineProperty(i, "cause", { value: t, configurable: !0 }), i.name = t && t.name || "Error", a && Object.assign(i, a), i;
};
function Vn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ld = xe.Stream, _v = qt, wv = tt;
function tt() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
_v.inherits(tt, Ld);
tt.create = function(t, e) {
  var n = new this();
  e = e || {};
  for (var r in e)
    n[r] = e[r];
  n.source = t;
  var s = t.emit;
  return t.emit = function() {
    return n._handleEmit(arguments), s.apply(t, arguments);
  }, t.on("error", function() {
  }), n.pauseStream && t.pause(), n;
};
Object.defineProperty(tt.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
tt.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
tt.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
tt.prototype.pause = function() {
  this.source.pause();
};
tt.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(t) {
    this.emit.apply(this, t);
  }).bind(this)), this._bufferedEvents = [];
};
tt.prototype.pipe = function() {
  var t = Ld.prototype.pipe.apply(this, arguments);
  return this.resume(), t;
};
tt.prototype._handleEmit = function(t) {
  if (this._released) {
    this.emit.apply(this, t);
    return;
  }
  t[0] === "data" && (this.dataSize += t[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(t);
};
tt.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var t = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(t));
  }
};
var Ev = qt, Fd = xe.Stream, El = wv, $v = ye;
function ye() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
Ev.inherits(ye, Fd);
ye.create = function(t) {
  var e = new this();
  t = t || {};
  for (var n in t)
    e[n] = t[n];
  return e;
};
ye.isStreamLike = function(t) {
  return typeof t != "function" && typeof t != "string" && typeof t != "boolean" && typeof t != "number" && !Buffer.isBuffer(t);
};
ye.prototype.append = function(t) {
  var e = ye.isStreamLike(t);
  if (e) {
    if (!(t instanceof El)) {
      var n = El.create(t, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      t.on("data", this._checkDataSize.bind(this)), t = n;
    }
    this._handleErrors(t), this.pauseStreams && t.pause();
  }
  return this._streams.push(t), this;
};
ye.prototype.pipe = function(t, e) {
  return Fd.prototype.pipe.call(this, t, e), this.resume(), t;
};
ye.prototype._getNext = function() {
  if (this._currentStream = null, this._insideLoop) {
    this._pendingNext = !0;
    return;
  }
  this._insideLoop = !0;
  try {
    do
      this._pendingNext = !1, this._realGetNext();
    while (this._pendingNext);
  } finally {
    this._insideLoop = !1;
  }
};
ye.prototype._realGetNext = function() {
  var t = this._streams.shift();
  if (typeof t > "u") {
    this.end();
    return;
  }
  if (typeof t != "function") {
    this._pipeNext(t);
    return;
  }
  var e = t;
  e((function(n) {
    var r = ye.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
ye.prototype._pipeNext = function(t) {
  this._currentStream = t;
  var e = ye.isStreamLike(t);
  if (e) {
    t.on("end", this._getNext.bind(this)), t.pipe(this, { end: !1 });
    return;
  }
  var n = t;
  this.write(n), this._getNext();
};
ye.prototype._handleErrors = function(t) {
  var e = this;
  t.on("error", function(n) {
    e._emitError(n);
  });
};
ye.prototype.write = function(t) {
  this.emit("data", t);
};
ye.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
ye.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
ye.prototype.end = function() {
  this._reset(), this.emit("end");
};
ye.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
ye.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
ye.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var t = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(t));
  }
};
ye.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var t = this;
  this._streams.forEach(function(e) {
    e.dataSize && (t.dataSize += e.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
ye.prototype._emitError = function(t) {
  this._reset(), this.emit("error", t);
};
var Dd = {};
const Sv = {
  "application/1d-interleaved-parityfec": {
    source: "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/3gpp-ims+xml": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphal+json": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphalforms+json": {
    source: "iana",
    compressible: !0
  },
  "application/a2l": {
    source: "iana"
  },
  "application/ace+cbor": {
    source: "iana"
  },
  "application/activemessage": {
    source: "iana"
  },
  "application/activity+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-directory+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcost+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcostparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointprop+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointpropparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-error+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamcontrol+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/aml": {
    source: "iana"
  },
  "application/andrew-inset": {
    source: "iana",
    extensions: [
      "ez"
    ]
  },
  "application/applefile": {
    source: "iana"
  },
  "application/applixware": {
    source: "apache",
    extensions: [
      "aw"
    ]
  },
  "application/at+jwt": {
    source: "iana"
  },
  "application/atf": {
    source: "iana"
  },
  "application/atfx": {
    source: "iana"
  },
  "application/atom+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atom"
    ]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomcat"
    ]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomdeleted"
    ]
  },
  "application/atomicmail": {
    source: "iana"
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomsvc"
    ]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dwd"
    ]
  },
  "application/atsc-dynamic-event-message": {
    source: "iana"
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "held"
    ]
  },
  "application/atsc-rdt+json": {
    source: "iana",
    compressible: !0
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsat"
    ]
  },
  "application/atxml": {
    source: "iana"
  },
  "application/auth-policy+xml": {
    source: "iana",
    compressible: !0
  },
  "application/bacnet-xdd+zip": {
    source: "iana",
    compressible: !1
  },
  "application/batch-smtp": {
    source: "iana"
  },
  "application/bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/beep+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/calendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xcs"
    ]
  },
  "application/call-completion": {
    source: "iana"
  },
  "application/cals-1840": {
    source: "iana"
  },
  "application/captive+json": {
    source: "iana",
    compressible: !0
  },
  "application/cbor": {
    source: "iana"
  },
  "application/cbor-seq": {
    source: "iana"
  },
  "application/cccex": {
    source: "iana"
  },
  "application/ccmp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ccxml"
    ]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdfx"
    ]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: [
      "cdmia"
    ]
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: [
      "cdmic"
    ]
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: [
      "cdmid"
    ]
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: [
      "cdmio"
    ]
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: [
      "cdmiq"
    ]
  },
  "application/cdni": {
    source: "iana"
  },
  "application/cea": {
    source: "iana"
  },
  "application/cea-2018+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cellml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cfw": {
    source: "iana"
  },
  "application/city+json": {
    source: "iana",
    compressible: !0
  },
  "application/clr": {
    source: "iana"
  },
  "application/clue+xml": {
    source: "iana",
    compressible: !0
  },
  "application/clue_info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cms": {
    source: "iana"
  },
  "application/cnrp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/coap-group+json": {
    source: "iana",
    compressible: !0
  },
  "application/coap-payload": {
    source: "iana"
  },
  "application/commonground": {
    source: "iana"
  },
  "application/conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cose": {
    source: "iana"
  },
  "application/cose-key": {
    source: "iana"
  },
  "application/cose-key-set": {
    source: "iana"
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cpl"
    ]
  },
  "application/csrattrs": {
    source: "iana"
  },
  "application/csta+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cstadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/csvm+json": {
    source: "iana",
    compressible: !0
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: [
      "cu"
    ]
  },
  "application/cwt": {
    source: "iana"
  },
  "application/cybercash": {
    source: "iana"
  },
  "application/dart": {
    compressible: !0
  },
  "application/dash+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpd"
    ]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpp"
    ]
  },
  "application/dashdelta": {
    source: "iana"
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "davmount"
    ]
  },
  "application/dca-rft": {
    source: "iana"
  },
  "application/dcd": {
    source: "iana"
  },
  "application/dec-dx": {
    source: "iana"
  },
  "application/dialog-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dicom": {
    source: "iana"
  },
  "application/dicom+json": {
    source: "iana",
    compressible: !0
  },
  "application/dicom+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dii": {
    source: "iana"
  },
  "application/dit": {
    source: "iana"
  },
  "application/dns": {
    source: "iana"
  },
  "application/dns+json": {
    source: "iana",
    compressible: !0
  },
  "application/dns-message": {
    source: "iana"
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dbk"
    ]
  },
  "application/dots+cbor": {
    source: "iana"
  },
  "application/dskpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dssc+der": {
    source: "iana",
    extensions: [
      "dssc"
    ]
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdssc"
    ]
  },
  "application/dvcs": {
    source: "iana"
  },
  "application/ecmascript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es",
      "ecma"
    ]
  },
  "application/edi-consent": {
    source: "iana"
  },
  "application/edi-x12": {
    source: "iana",
    compressible: !1
  },
  "application/edifact": {
    source: "iana",
    compressible: !1
  },
  "application/efi": {
    source: "iana"
  },
  "application/elm+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/elm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.cap+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/emergencycalldata.comment+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.deviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.ecall.msd": {
    source: "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.serviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.veds+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emma+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emma"
    ]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emotionml"
    ]
  },
  "application/encaprtp": {
    source: "iana"
  },
  "application/epp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/epub+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "epub"
    ]
  },
  "application/eshop": {
    source: "iana"
  },
  "application/exi": {
    source: "iana",
    extensions: [
      "exi"
    ]
  },
  "application/expect-ct-report+json": {
    source: "iana",
    compressible: !0
  },
  "application/express": {
    source: "iana",
    extensions: [
      "exp"
    ]
  },
  "application/fastinfoset": {
    source: "iana"
  },
  "application/fastsoap": {
    source: "iana"
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fdt"
    ]
  },
  "application/fhir+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fhir+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fido.trusted-apps+json": {
    compressible: !0
  },
  "application/fits": {
    source: "iana"
  },
  "application/flexfec": {
    source: "iana"
  },
  "application/font-sfnt": {
    source: "iana"
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: [
      "pfr"
    ]
  },
  "application/font-woff": {
    source: "iana",
    compressible: !1
  },
  "application/framework-attributes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/geo+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "geojson"
    ]
  },
  "application/geo+json-seq": {
    source: "iana"
  },
  "application/geopackage+sqlite3": {
    source: "iana"
  },
  "application/geoxacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/gltf-buffer": {
    source: "iana"
  },
  "application/gml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gml"
    ]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "gpx"
    ]
  },
  "application/gxf": {
    source: "apache",
    extensions: [
      "gxf"
    ]
  },
  "application/gzip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gz"
    ]
  },
  "application/h224": {
    source: "iana"
  },
  "application/held+xml": {
    source: "iana",
    compressible: !0
  },
  "application/hjson": {
    extensions: [
      "hjson"
    ]
  },
  "application/http": {
    source: "iana"
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: [
      "stk"
    ]
  },
  "application/ibe-key-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pkg-reply+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pp-data": {
    source: "iana"
  },
  "application/iges": {
    source: "iana"
  },
  "application/im-iscomposing+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/index": {
    source: "iana"
  },
  "application/index.cmd": {
    source: "iana"
  },
  "application/index.obj": {
    source: "iana"
  },
  "application/index.response": {
    source: "iana"
  },
  "application/index.vnd": {
    source: "iana"
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ink",
      "inkml"
    ]
  },
  "application/iotp": {
    source: "iana"
  },
  "application/ipfix": {
    source: "iana",
    extensions: [
      "ipfix"
    ]
  },
  "application/ipp": {
    source: "iana"
  },
  "application/isup": {
    source: "iana"
  },
  "application/its+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "its"
    ]
  },
  "application/java-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jar",
      "war",
      "ear"
    ]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: !1,
    extensions: [
      "ser"
    ]
  },
  "application/java-vm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "class"
    ]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "js",
      "mjs"
    ]
  },
  "application/jf2feed+json": {
    source: "iana",
    compressible: !0
  },
  "application/jose": {
    source: "iana"
  },
  "application/jose+json": {
    source: "iana",
    compressible: !0
  },
  "application/jrd+json": {
    source: "iana",
    compressible: !0
  },
  "application/jscalendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "json",
      "map"
    ]
  },
  "application/json-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/json-seq": {
    source: "iana"
  },
  "application/json5": {
    extensions: [
      "json5"
    ]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: !0,
    extensions: [
      "jsonml"
    ]
  },
  "application/jwk+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwk-set+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwt": {
    source: "iana"
  },
  "application/kpml-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/kpml-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ld+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "jsonld"
    ]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lgr"
    ]
  },
  "application/link-format": {
    source: "iana"
  },
  "application/load-control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lost+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lostxml"
    ]
  },
  "application/lostsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lpf+zip": {
    source: "iana",
    compressible: !1
  },
  "application/lxf": {
    source: "iana"
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: [
      "hqx"
    ]
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: [
      "cpt"
    ]
  },
  "application/macwriteii": {
    source: "iana"
  },
  "application/mads+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mads"
    ]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "webmanifest"
    ]
  },
  "application/marc": {
    source: "iana",
    extensions: [
      "mrc"
    ]
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mrcx"
    ]
  },
  "application/mathematica": {
    source: "iana",
    extensions: [
      "ma",
      "nb",
      "mb"
    ]
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mathml"
    ]
  },
  "application/mathml-content+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mathml-presentation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-associated-procedure-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-deregister+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-envelope+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-protection-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-reception-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-schedule+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-user-service-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbox": {
    source: "iana",
    extensions: [
      "mbox"
    ]
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpf"
    ]
  },
  "application/media_control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mscml"
    ]
  },
  "application/merge-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "metalink"
    ]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "meta4"
    ]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mets"
    ]
  },
  "application/mf4": {
    source: "iana"
  },
  "application/mikey": {
    source: "iana"
  },
  "application/mipc": {
    source: "iana"
  },
  "application/missing-blocks+cbor-seq": {
    source: "iana"
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "maei"
    ]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musd"
    ]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mods"
    ]
  },
  "application/moss-keys": {
    source: "iana"
  },
  "application/moss-signature": {
    source: "iana"
  },
  "application/mosskey-data": {
    source: "iana"
  },
  "application/mosskey-request": {
    source: "iana"
  },
  "application/mp21": {
    source: "iana",
    extensions: [
      "m21",
      "mp21"
    ]
  },
  "application/mp4": {
    source: "iana",
    extensions: [
      "mp4s",
      "m4p"
    ]
  },
  "application/mpeg4-generic": {
    source: "iana"
  },
  "application/mpeg4-iod": {
    source: "iana"
  },
  "application/mpeg4-iod-xmt": {
    source: "iana"
  },
  "application/mrb-consumer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mrb-publish+xml": {
    source: "iana",
    compressible: !0
  },
  "application/msc-ivr+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msc-mixer+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msword": {
    source: "iana",
    compressible: !1,
    extensions: [
      "doc",
      "dot"
    ]
  },
  "application/mud+json": {
    source: "iana",
    compressible: !0
  },
  "application/multipart-core": {
    source: "iana"
  },
  "application/mxf": {
    source: "iana",
    extensions: [
      "mxf"
    ]
  },
  "application/n-quads": {
    source: "iana",
    extensions: [
      "nq"
    ]
  },
  "application/n-triples": {
    source: "iana",
    extensions: [
      "nt"
    ]
  },
  "application/nasdata": {
    source: "iana"
  },
  "application/news-checkgroups": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-groupinfo": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-transmission": {
    source: "iana"
  },
  "application/nlsml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/node": {
    source: "iana",
    extensions: [
      "cjs"
    ]
  },
  "application/nss": {
    source: "iana"
  },
  "application/oauth-authz-req+jwt": {
    source: "iana"
  },
  "application/oblivious-dns-message": {
    source: "iana"
  },
  "application/ocsp-request": {
    source: "iana"
  },
  "application/ocsp-response": {
    source: "iana"
  },
  "application/octet-stream": {
    source: "iana",
    compressible: !1,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: [
      "oda"
    ]
  },
  "application/odm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/odx": {
    source: "iana"
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "opf"
    ]
  },
  "application/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogx"
    ]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "omdoc"
    ]
  },
  "application/onenote": {
    source: "apache",
    extensions: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ]
  },
  "application/opc-nodeset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/oscore": {
    source: "iana"
  },
  "application/oxps": {
    source: "iana",
    extensions: [
      "oxps"
    ]
  },
  "application/p21": {
    source: "iana"
  },
  "application/p21+zip": {
    source: "iana",
    compressible: !1
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "relo"
    ]
  },
  "application/parityfec": {
    source: "iana"
  },
  "application/passport": {
    source: "iana"
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xer"
    ]
  },
  "application/pdf": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pdf"
    ]
  },
  "application/pdx": {
    source: "iana"
  },
  "application/pem-certificate-chain": {
    source: "iana"
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pgp"
    ]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: [
      "asc"
    ]
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: [
      "asc",
      "sig"
    ]
  },
  "application/pics-rules": {
    source: "apache",
    extensions: [
      "prf"
    ]
  },
  "application/pidf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pidf-diff+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pkcs10": {
    source: "iana",
    extensions: [
      "p10"
    ]
  },
  "application/pkcs12": {
    source: "iana"
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: [
      "p7m",
      "p7c"
    ]
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: [
      "p7s"
    ]
  },
  "application/pkcs8": {
    source: "iana",
    extensions: [
      "p8"
    ]
  },
  "application/pkcs8-encrypted": {
    source: "iana"
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: [
      "ac"
    ]
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: [
      "cer"
    ]
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: [
      "crl"
    ]
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: [
      "pkipath"
    ]
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: [
      "pki"
    ]
  },
  "application/pls+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pls"
    ]
  },
  "application/poc-settings+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/postscript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ai",
      "eps",
      "ps"
    ]
  },
  "application/ppsp-tracker+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "provx"
    ]
  },
  "application/prs.alvestrand.titrax-sheet": {
    source: "iana"
  },
  "application/prs.cww": {
    source: "iana",
    extensions: [
      "cww"
    ]
  },
  "application/prs.cyn": {
    source: "iana",
    charset: "7-BIT"
  },
  "application/prs.hpub+zip": {
    source: "iana",
    compressible: !1
  },
  "application/prs.nprend": {
    source: "iana"
  },
  "application/prs.plucker": {
    source: "iana"
  },
  "application/prs.rdf-xml-crypt": {
    source: "iana"
  },
  "application/prs.xsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pskcxml"
    ]
  },
  "application/pvd+json": {
    source: "iana",
    compressible: !0
  },
  "application/qsig": {
    source: "iana"
  },
  "application/raml+yaml": {
    compressible: !0,
    extensions: [
      "raml"
    ]
  },
  "application/raptorfec": {
    source: "iana"
  },
  "application/rdap+json": {
    source: "iana",
    compressible: !0
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rdf",
      "owl"
    ]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rif"
    ]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: [
      "rnc"
    ]
  },
  "application/remote-printing": {
    source: "iana"
  },
  "application/reputon+json": {
    source: "iana",
    compressible: !0
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rl"
    ]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rld"
    ]
  },
  "application/rfc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/riscos": {
    source: "iana"
  },
  "application/rlmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rs"
    ]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rapd"
    ]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sls"
    ]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rusd"
    ]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: [
      "gbr"
    ]
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: [
      "mft"
    ]
  },
  "application/rpki-publication": {
    source: "iana"
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: [
      "roa"
    ]
  },
  "application/rpki-updown": {
    source: "iana"
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rsd"
    ]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rss"
    ]
  },
  "application/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "application/rtploopback": {
    source: "iana"
  },
  "application/rtx": {
    source: "iana"
  },
  "application/samlassertion+xml": {
    source: "iana",
    compressible: !0
  },
  "application/samlmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sarif+json": {
    source: "iana",
    compressible: !0
  },
  "application/sarif-external-properties+json": {
    source: "iana",
    compressible: !0
  },
  "application/sbe": {
    source: "iana"
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sbml"
    ]
  },
  "application/scaip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/scim+json": {
    source: "iana",
    compressible: !0
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: [
      "scq"
    ]
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: [
      "scs"
    ]
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: [
      "spq"
    ]
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: [
      "spp"
    ]
  },
  "application/sdp": {
    source: "iana",
    extensions: [
      "sdp"
    ]
  },
  "application/secevent+jwt": {
    source: "iana"
  },
  "application/senml+cbor": {
    source: "iana"
  },
  "application/senml+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "senmlx"
    ]
  },
  "application/senml-etch+cbor": {
    source: "iana"
  },
  "application/senml-etch+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml-exi": {
    source: "iana"
  },
  "application/sensml+cbor": {
    source: "iana"
  },
  "application/sensml+json": {
    source: "iana",
    compressible: !0
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sensmlx"
    ]
  },
  "application/sensml-exi": {
    source: "iana"
  },
  "application/sep+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sep-exi": {
    source: "iana"
  },
  "application/session-info": {
    source: "iana"
  },
  "application/set-payment": {
    source: "iana"
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: [
      "setpay"
    ]
  },
  "application/set-registration": {
    source: "iana"
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: [
      "setreg"
    ]
  },
  "application/sgml": {
    source: "iana"
  },
  "application/sgml-open-catalog": {
    source: "iana"
  },
  "application/shf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "shf"
    ]
  },
  "application/sieve": {
    source: "iana",
    extensions: [
      "siv",
      "sieve"
    ]
  },
  "application/simple-filter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/simple-message-summary": {
    source: "iana"
  },
  "application/simplesymbolcontainer": {
    source: "iana"
  },
  "application/sipc": {
    source: "iana"
  },
  "application/slate": {
    source: "iana"
  },
  "application/smil": {
    source: "iana"
  },
  "application/smil+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "smi",
      "smil"
    ]
  },
  "application/smpte336m": {
    source: "iana"
  },
  "application/soap+fastinfoset": {
    source: "iana"
  },
  "application/soap+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sparql-query": {
    source: "iana",
    extensions: [
      "rq"
    ]
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "srx"
    ]
  },
  "application/spdx+json": {
    source: "iana",
    compressible: !0
  },
  "application/spirits-event+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sql": {
    source: "iana"
  },
  "application/srgs": {
    source: "iana",
    extensions: [
      "gram"
    ]
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "grxml"
    ]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sru"
    ]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ssdl"
    ]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ssml"
    ]
  },
  "application/stix+json": {
    source: "iana",
    compressible: !0
  },
  "application/swid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "swidtag"
    ]
  },
  "application/tamp-apex-update": {
    source: "iana"
  },
  "application/tamp-apex-update-confirm": {
    source: "iana"
  },
  "application/tamp-community-update": {
    source: "iana"
  },
  "application/tamp-community-update-confirm": {
    source: "iana"
  },
  "application/tamp-error": {
    source: "iana"
  },
  "application/tamp-sequence-adjust": {
    source: "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    source: "iana"
  },
  "application/tamp-status-query": {
    source: "iana"
  },
  "application/tamp-status-response": {
    source: "iana"
  },
  "application/tamp-update": {
    source: "iana"
  },
  "application/tamp-update-confirm": {
    source: "iana"
  },
  "application/tar": {
    compressible: !0
  },
  "application/taxii+json": {
    source: "iana",
    compressible: !0
  },
  "application/td+json": {
    source: "iana",
    compressible: !0
  },
  "application/tei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tei",
      "teicorpus"
    ]
  },
  "application/tetra_isi": {
    source: "iana"
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tfi"
    ]
  },
  "application/timestamp-query": {
    source: "iana"
  },
  "application/timestamp-reply": {
    source: "iana"
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: [
      "tsd"
    ]
  },
  "application/tlsrpt+gzip": {
    source: "iana"
  },
  "application/tlsrpt+json": {
    source: "iana",
    compressible: !0
  },
  "application/tnauthlist": {
    source: "iana"
  },
  "application/token-introspection+jwt": {
    source: "iana"
  },
  "application/toml": {
    compressible: !0,
    extensions: [
      "toml"
    ]
  },
  "application/trickle-ice-sdpfrag": {
    source: "iana"
  },
  "application/trig": {
    source: "iana",
    extensions: [
      "trig"
    ]
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttml"
    ]
  },
  "application/tve-trigger": {
    source: "iana"
  },
  "application/tzif": {
    source: "iana"
  },
  "application/tzif-leap": {
    source: "iana"
  },
  "application/ubjson": {
    compressible: !1,
    extensions: [
      "ubj"
    ]
  },
  "application/ulpfec": {
    source: "iana"
  },
  "application/urc-grpsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsheet"
    ]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "td"
    ]
  },
  "application/urc-uisocketdesc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+json": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vemmi": {
    source: "iana"
  },
  "application/vividence.scriptfile": {
    source: "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "1km"
    ]
  },
  "application/vnd.3gpp-prose+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    source: "iana"
  },
  "application/vnd.3gpp.5gnas": {
    source: "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.bsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gmop+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gtpc": {
    source: "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    source: "iana"
  },
  "application/vnd.3gpp.lpp": {
    source: "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-payload": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-signalling": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mid-call+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ngap": {
    source: "iana"
  },
  "application/vnd.3gpp.pfcp": {
    source: "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: [
      "plb"
    ]
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: [
      "psb"
    ]
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: [
      "pvb"
    ]
  },
  "application/vnd.3gpp.s1ap": {
    source: "iana"
  },
  "application/vnd.3gpp.sms": {
    source: "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ussd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.sms": {
    source: "iana"
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: [
      "tcap"
    ]
  },
  "application/vnd.3lightssoftware.imagescal": {
    source: "iana"
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: [
      "pwn"
    ]
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: [
      "aso"
    ]
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: [
      "imp"
    ]
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: [
      "acu"
    ]
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: [
      "atc",
      "acutc"
    ]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "air"
    ]
  },
  "application/vnd.adobe.flash.movie": {
    source: "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: [
      "fcdt"
    ]
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: [
      "fxp",
      "fxpl"
    ]
  },
  "application/vnd.adobe.partial-upload": {
    source: "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdp"
    ]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: [
      "xfdf"
    ]
  },
  "application/vnd.aether.imp": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    source: "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    source: "iana"
  },
  "application/vnd.afpc.foca-charset": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    source: "iana"
  },
  "application/vnd.afpc.modca": {
    source: "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    source: "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    source: "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    source: "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    source: "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    source: "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    source: "iana"
  },
  "application/vnd.age": {
    source: "iana",
    extensions: [
      "age"
    ]
  },
  "application/vnd.ah-barcode": {
    source: "iana"
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: [
      "ahead"
    ]
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: [
      "azf"
    ]
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: [
      "azs"
    ]
  },
  "application/vnd.amadeus+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: [
      "azw"
    ]
  },
  "application/vnd.amazon.mobi8-ebook": {
    source: "iana"
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: [
      "acc"
    ]
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: [
      "ami"
    ]
  },
  "application/vnd.amundsen.maze+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.android.ota": {
    source: "iana"
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "apk"
    ]
  },
  "application/vnd.anki": {
    source: "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: [
      "cii"
    ]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: [
      "fti"
    ]
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: [
      "atx"
    ]
  },
  "application/vnd.apache.arrow.file": {
    source: "iana"
  },
  "application/vnd.apache.arrow.stream": {
    source: "iana"
  },
  "application/vnd.apache.thrift.binary": {
    source: "iana"
  },
  "application/vnd.apache.thrift.compact": {
    source: "iana"
  },
  "application/vnd.apache.thrift.json": {
    source: "iana"
  },
  "application/vnd.api+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.aplextor.warrp+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apothekende.reservation+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpkg"
    ]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: [
      "key"
    ]
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: [
      "m3u8"
    ]
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: [
      "numbers"
    ]
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: [
      "pages"
    ]
  },
  "application/vnd.apple.pkpass": {
    compressible: !1,
    extensions: [
      "pkpass"
    ]
  },
  "application/vnd.arastra.swi": {
    source: "iana"
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: [
      "swi"
    ]
  },
  "application/vnd.artisan+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.artsquare": {
    source: "iana"
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: [
      "iota"
    ]
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: [
      "aep"
    ]
  },
  "application/vnd.autopackage": {
    source: "iana"
  },
  "application/vnd.avalon+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.avistar+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmml"
    ]
  },
  "application/vnd.balsamiq.bmpr": {
    source: "iana"
  },
  "application/vnd.banana-accounting": {
    source: "iana"
  },
  "application/vnd.bbf.usp.error": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bekitzur-stech+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bint.med-content": {
    source: "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.blink-idb-value-wrapper": {
    source: "iana"
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: [
      "mpm"
    ]
  },
  "application/vnd.bluetooth.ep.oob": {
    source: "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    source: "iana"
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: [
      "bmi"
    ]
  },
  "application/vnd.bpf": {
    source: "iana"
  },
  "application/vnd.bpf3": {
    source: "iana"
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: [
      "rep"
    ]
  },
  "application/vnd.byu.uapi+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cab-jscript": {
    source: "iana"
  },
  "application/vnd.canon-cpdl": {
    source: "iana"
  },
  "application/vnd.canon-lips": {
    source: "iana"
  },
  "application/vnd.capasystems-pg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    source: "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    source: "iana"
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdxml"
    ]
  },
  "application/vnd.chess-pgn": {
    source: "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: [
      "mmd"
    ]
  },
  "application/vnd.ciedi": {
    source: "iana"
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: [
      "cdy"
    ]
  },
  "application/vnd.cirpack.isdn-ext": {
    source: "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csl"
    ]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: [
      "cla"
    ]
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: [
      "rp9"
    ]
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: [
      "c11amc"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: [
      "c11amz"
    ]
  },
  "application/vnd.coffeescript": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    source: "iana"
  },
  "application/vnd.collection+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.doc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.next+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.comicbook+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.comicbook-rar": {
    source: "iana"
  },
  "application/vnd.commerce-battelle": {
    source: "iana"
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: [
      "csp"
    ]
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: [
      "cdbcmsg"
    ]
  },
  "application/vnd.coreos.ignition+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: [
      "cmc"
    ]
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: [
      "clkx"
    ]
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: [
      "clkk"
    ]
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: [
      "clkp"
    ]
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: [
      "clkt"
    ]
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: [
      "clkw"
    ]
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wbs"
    ]
  },
  "application/vnd.cryptii.pipe+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.crypto-shade-file": {
    source: "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    source: "iana"
  },
  "application/vnd.cryptomator.vault": {
    source: "iana"
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: [
      "pml"
    ]
  },
  "application/vnd.ctct.ws+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cups-pdf": {
    source: "iana"
  },
  "application/vnd.cups-postscript": {
    source: "iana"
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: [
      "ppd"
    ]
  },
  "application/vnd.cups-raster": {
    source: "iana"
  },
  "application/vnd.cups-raw": {
    source: "iana"
  },
  "application/vnd.curl": {
    source: "iana"
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: [
      "car"
    ]
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: [
      "pcurl"
    ]
  },
  "application/vnd.cyan.dean.root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cybank": {
    source: "iana"
  },
  "application/vnd.cyclonedx+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cyclonedx+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.d3m-dataset": {
    source: "iana"
  },
  "application/vnd.d3m-problem": {
    source: "iana"
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dart"
    ]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: [
      "rdz"
    ]
  },
  "application/vnd.datapackage+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dataresource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: [
      "dbf"
    ]
  },
  "application/vnd.debian.binary-package": {
    source: "iana"
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ]
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uvt",
      "uvvt"
    ]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: [
      "uvx",
      "uvvx"
    ]
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: [
      "uvz",
      "uvvz"
    ]
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: [
      "fe_launch"
    ]
  },
  "application/vnd.desmume.movie": {
    source: "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    source: "iana"
  },
  "application/vnd.dm.delegation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: [
      "dna"
    ]
  },
  "application/vnd.document+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: [
      "mlp"
    ]
  },
  "application/vnd.dolby.mobile.1": {
    source: "iana"
  },
  "application/vnd.dolby.mobile.2": {
    source: "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    source: "iana"
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: [
      "dpg"
    ]
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: [
      "dfac"
    ]
  },
  "application/vnd.drive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: [
      "kpxx"
    ]
  },
  "application/vnd.dtg.local": {
    source: "iana"
  },
  "application/vnd.dtg.local.flash": {
    source: "iana"
  },
  "application/vnd.dtg.local.html": {
    source: "iana"
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: [
      "ait"
    ]
  },
  "application/vnd.dvb.dvbisl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.dvbj": {
    source: "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    source: "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-container+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-generic+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-init+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.pfr": {
    source: "iana"
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: [
      "svc"
    ]
  },
  "application/vnd.dxr": {
    source: "iana"
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: [
      "geo"
    ]
  },
  "application/vnd.dzr": {
    source: "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    source: "iana"
  },
  "application/vnd.ecdis-update": {
    source: "iana"
  },
  "application/vnd.ecip.rlp": {
    source: "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: [
      "mag"
    ]
  },
  "application/vnd.ecowin.filerequest": {
    source: "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    source: "iana"
  },
  "application/vnd.ecowin.series": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    source: "iana"
  },
  "application/vnd.efi.img": {
    source: "iana"
  },
  "application/vnd.efi.iso": {
    source: "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: [
      "nml"
    ]
  },
  "application/vnd.enphase.envoy": {
    source: "iana"
  },
  "application/vnd.eprints.data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: [
      "esf"
    ]
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: [
      "msf"
    ]
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: [
      "qam"
    ]
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: [
      "slt"
    ]
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: [
      "ssf"
    ]
  },
  "application/vnd.ericsson.quickcall": {
    source: "iana"
  },
  "application/vnd.espass-espass+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es3",
      "et3"
    ]
  },
  "application/vnd.etsi.aoc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.asic-e+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.asic-s+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.cug+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvcommand+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvservice+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mcid+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mheg5": {
    source: "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.pstn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.sci+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.simservs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.timestamp-token": {
    source: "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.tsl.der": {
    source: "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.eudora.data": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    source: "iana"
  },
  "application/vnd.exstream-empower+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.exstream-package": {
    source: "iana"
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: [
      "ez2"
    ]
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: [
      "ez3"
    ]
  },
  "application/vnd.f-secure.mobile": {
    source: "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.fastcopy-disk-image": {
    source: "iana"
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: [
      "fdf"
    ]
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: [
      "mseed"
    ]
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: [
      "seed",
      "dataless"
    ]
  },
  "application/vnd.ffsns": {
    source: "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.filmit.zfc": {
    source: "iana"
  },
  "application/vnd.fints": {
    source: "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    source: "iana"
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: [
      "gph"
    ]
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: [
      "ftc"
    ]
  },
  "application/vnd.font-fontforge-sfd": {
    source: "iana"
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: [
      "fm",
      "frame",
      "maker",
      "book"
    ]
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: [
      "fnc"
    ]
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: [
      "ltf"
    ]
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: [
      "fsc"
    ]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: [
      "oas"
    ]
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: [
      "oa2"
    ]
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: [
      "oa3"
    ]
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: [
      "fg5"
    ]
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: [
      "bh2"
    ]
  },
  "application/vnd.fujixerox.art-ex": {
    source: "iana"
  },
  "application/vnd.fujixerox.art4": {
    source: "iana"
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: [
      "ddd"
    ]
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: [
      "xdw"
    ]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: [
      "xbd"
    ]
  },
  "application/vnd.fujixerox.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    source: "iana"
  },
  "application/vnd.fut-misnet": {
    source: "iana"
  },
  "application/vnd.futoin+cbor": {
    source: "iana"
  },
  "application/vnd.futoin+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: [
      "fzs"
    ]
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: [
      "txd"
    ]
  },
  "application/vnd.gentics.grd+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geo+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geocube+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: [
      "ggb"
    ]
  },
  "application/vnd.geogebra.slides": {
    source: "iana"
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: [
      "ggt"
    ]
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: [
      "gex",
      "gre"
    ]
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: [
      "gxt"
    ]
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: [
      "g2w"
    ]
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: [
      "g3w"
    ]
  },
  "application/vnd.gerber": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    source: "iana"
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: [
      "gmx"
    ]
  },
  "application/vnd.google-apps.document": {
    compressible: !1,
    extensions: [
      "gdoc"
    ]
  },
  "application/vnd.google-apps.presentation": {
    compressible: !1,
    extensions: [
      "gslides"
    ]
  },
  "application/vnd.google-apps.spreadsheet": {
    compressible: !1,
    extensions: [
      "gsheet"
    ]
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "kml"
    ]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: !1,
    extensions: [
      "kmz"
    ]
  },
  "application/vnd.gov.sk.e-form+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.gov.sk.e-form+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: [
      "gqf",
      "gqs"
    ]
  },
  "application/vnd.gridmp": {
    source: "iana"
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: [
      "gac"
    ]
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: [
      "ghf"
    ]
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: [
      "gim"
    ]
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: [
      "grv"
    ]
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: [
      "gtm"
    ]
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: [
      "tpl"
    ]
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: [
      "vcg"
    ]
  },
  "application/vnd.hal+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "hal"
    ]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zmm"
    ]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: [
      "hbci"
    ]
  },
  "application/vnd.hc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hcl-bireports": {
    source: "iana"
  },
  "application/vnd.hdt": {
    source: "iana"
  },
  "application/vnd.heroku+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: [
      "les"
    ]
  },
  "application/vnd.hl7cda+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hl7v2+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: [
      "hpgl"
    ]
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: [
      "hpid"
    ]
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: [
      "hps"
    ]
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: [
      "jlt"
    ]
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: [
      "pcl"
    ]
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: [
      "pclxl"
    ]
  },
  "application/vnd.httphone": {
    source: "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: [
      "sfd-hdstx"
    ]
  },
  "application/vnd.hyper+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyper-item+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyperdrive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hzn-3d-crossword": {
    source: "iana"
  },
  "application/vnd.ibm.afplinedata": {
    source: "iana"
  },
  "application/vnd.ibm.electronic-media": {
    source: "iana"
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: [
      "mpy"
    ]
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: [
      "afp",
      "listafp",
      "list3820"
    ]
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: [
      "irm"
    ]
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: [
      "sc"
    ]
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: [
      "icc",
      "icm"
    ]
  },
  "application/vnd.ieee.1905": {
    source: "iana"
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: [
      "igl"
    ]
  },
  "application/vnd.imagemeter.folder+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.imagemeter.image+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: [
      "ivp"
    ]
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: [
      "ivu"
    ]
  },
  "application/vnd.ims.imsccv1p1": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    source: "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informedcontrol.rms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informix-visionary": {
    source: "iana"
  },
  "application/vnd.infotech.project": {
    source: "iana"
  },
  "application/vnd.infotech.project+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.innopath.wamp.notification": {
    source: "iana"
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: [
      "igm"
    ]
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: [
      "xpw",
      "xpx"
    ]
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: [
      "i2g"
    ]
  },
  "application/vnd.intertrust.digibox": {
    source: "iana"
  },
  "application/vnd.intertrust.nncp": {
    source: "iana"
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: [
      "qbo"
    ]
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: [
      "qfx"
    ]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: [
      "rcprofile"
    ]
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "irp"
    ]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: [
      "xpr"
    ]
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: [
      "fcs"
    ]
  },
  "application/vnd.iso11783-10+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: [
      "jam"
    ]
  },
  "application/vnd.japannet-directory-service": {
    source: "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-registration": {
    source: "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-verification": {
    source: "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    source: "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: [
      "rms"
    ]
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: [
      "jisp"
    ]
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: [
      "joda"
    ]
  },
  "application/vnd.jsk.isdn-ngn": {
    source: "iana"
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: [
      "ktz",
      "ktr"
    ]
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: [
      "karbon"
    ]
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: [
      "chrt"
    ]
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: [
      "kfo"
    ]
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: [
      "flw"
    ]
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: [
      "kon"
    ]
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: [
      "kpr",
      "kpt"
    ]
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: [
      "ksp"
    ]
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: [
      "kwd",
      "kwt"
    ]
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: [
      "htke"
    ]
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: [
      "kia"
    ]
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: [
      "kne",
      "knp"
    ]
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: [
      "skp",
      "skd",
      "skt",
      "skm"
    ]
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: [
      "sse"
    ]
  },
  "application/vnd.las": {
    source: "iana"
  },
  "application/vnd.las.las+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lasxml"
    ]
  },
  "application/vnd.laszip": {
    source: "iana"
  },
  "application/vnd.leap+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.liberty-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: [
      "lbd"
    ]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lbe"
    ]
  },
  "application/vnd.logipipe.circuit+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.loom": {
    source: "iana"
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: [
      "123"
    ]
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: [
      "apr"
    ]
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: [
      "pre"
    ]
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: [
      "nsf"
    ]
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: [
      "org"
    ]
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: [
      "scm"
    ]
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: [
      "lwp"
    ]
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: [
      "portpkg"
    ]
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: [
      "mvt"
    ]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.license+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.mdcf": {
    source: "iana"
  },
  "application/vnd.mason+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.maxar.archive.3tz+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.maxmind.maxmind-db": {
    source: "iana"
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: [
      "mcd"
    ]
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: [
      "mc1"
    ]
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: [
      "cdkey"
    ]
  },
  "application/vnd.meridian-slingshot": {
    source: "iana"
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: [
      "mwf"
    ]
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: [
      "mfm"
    ]
  },
  "application/vnd.micro+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: [
      "flo"
    ]
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: [
      "igx"
    ]
  },
  "application/vnd.microsoft.portable-executable": {
    source: "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    source: "iana"
  },
  "application/vnd.miele+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: [
      "mif"
    ]
  },
  "application/vnd.minisoft-hp3000-save": {
    source: "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    source: "iana"
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: [
      "daf"
    ]
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: [
      "dis"
    ]
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: [
      "mbk"
    ]
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: [
      "mqy"
    ]
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: [
      "msl"
    ]
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: [
      "plc"
    ]
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: [
      "txf"
    ]
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: [
      "mpn"
    ]
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: [
      "mpc"
    ]
  },
  "application/vnd.motorola.flexsuite": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    source: "iana"
  },
  "application/vnd.motorola.iprm": {
    source: "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xul"
    ]
  },
  "application/vnd.ms-3mfdocument": {
    source: "iana"
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: [
      "cil"
    ]
  },
  "application/vnd.ms-asf": {
    source: "iana"
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: [
      "cab"
    ]
  },
  "application/vnd.ms-color.iccprofile": {
    source: "apache"
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xls",
      "xlm",
      "xla",
      "xlc",
      "xlt",
      "xlw"
    ]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlam"
    ]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsb"
    ]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsm"
    ]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "xltm"
    ]
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eot"
    ]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: [
      "chm"
    ]
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: [
      "ims"
    ]
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: [
      "lrm"
    ]
  },
  "application/vnd.ms-office.activex+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: [
      "thmx"
    ]
  },
  "application/vnd.ms-opentype": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-outlook": {
    compressible: !1,
    extensions: [
      "msg"
    ]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    source: "apache"
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: [
      "cat"
    ]
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: [
      "stl"
    ]
  },
  "application/vnd.ms-playready.initiator+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ppt",
      "pps",
      "pot"
    ]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppam"
    ]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: [
      "pptm"
    ]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: [
      "sldm"
    ]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppsm"
    ]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "potm"
    ]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-printing.printticket+xml": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-printschematicket+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: [
      "mpp",
      "mpt"
    ]
  },
  "application/vnd.ms-tnef": {
    source: "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    source: "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    source: "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: [
      "docm"
    ]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "dotm"
    ]
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ]
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: [
      "wpl"
    ]
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xps"
    ]
  },
  "application/vnd.msa-disk-image": {
    source: "iana"
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: [
      "mseq"
    ]
  },
  "application/vnd.msign": {
    source: "iana"
  },
  "application/vnd.multiad.creator": {
    source: "iana"
  },
  "application/vnd.multiad.creator.cif": {
    source: "iana"
  },
  "application/vnd.music-niff": {
    source: "iana"
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: [
      "mus"
    ]
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: [
      "msty"
    ]
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: [
      "taglet"
    ]
  },
  "application/vnd.nacamar.ybrid+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ncd.control": {
    source: "iana"
  },
  "application/vnd.ncd.reference": {
    source: "iana"
  },
  "application/vnd.nearst.inv+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nebumind.line": {
    source: "iana"
  },
  "application/vnd.nervana": {
    source: "iana"
  },
  "application/vnd.netfpx": {
    source: "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: [
      "nlu"
    ]
  },
  "application/vnd.nimn": {
    source: "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    source: "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    source: "iana"
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: [
      "ntf",
      "nitf"
    ]
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: [
      "nnd"
    ]
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: [
      "nns"
    ]
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: [
      "nnw"
    ]
  },
  "application/vnd.nokia.catalogs": {
    source: "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.conml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.iptv.config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.isds-radio-presets": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ac"
    ]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: [
      "ngdat"
    ]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: [
      "n-gage"
    ]
  },
  "application/vnd.nokia.ncd": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: [
      "rpst"
    ]
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: [
      "rpss"
    ]
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: [
      "edm"
    ]
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: [
      "edx"
    ]
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: [
      "ext"
    ]
  },
  "application/vnd.ntt-local.content-share": {
    source: "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    source: "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    source: "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: [
      "odc"
    ]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: [
      "otc"
    ]
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: [
      "odb"
    ]
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: [
      "odf"
    ]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: [
      "odft"
    ]
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odg"
    ]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: [
      "otg"
    ]
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: [
      "odi"
    ]
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: [
      "oti"
    ]
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odp"
    ]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: [
      "otp"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ods"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: [
      "ots"
    ]
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odt"
    ]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: [
      "odm"
    ]
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: [
      "ott"
    ]
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: [
      "oth"
    ]
  },
  "application/vnd.obn": {
    source: "iana"
  },
  "application/vnd.ocf+cbor": {
    source: "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oftn.l10n+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.cspg-hexbinary": {
    source: "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.pae.gem": {
    source: "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.spdlist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.ueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.userprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: [
      "xo"
    ]
  },
  "application/vnd.oma-scws-config": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-request": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-response": {
    source: "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.imd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.ltkm": {
    source: "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sgdu": {
    source: "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    source: "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sprov+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.stkm": {
    source: "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-pcc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.dcd": {
    source: "iana"
  },
  "application/vnd.oma.dcdc": {
    source: "iana"
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dd2"
    ]
  },
  "application/vnd.oma.drm.risd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.group-usage-list+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+cbor": {
    source: "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+tlv": {
    source: "iana"
  },
  "application/vnd.oma.pal+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.final-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.groups+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.push": {
    source: "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.xcap-directory+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.omads-email+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-file+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-folder+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omaloc-supl-init": {
    source: "iana"
  },
  "application/vnd.onepager": {
    source: "iana"
  },
  "application/vnd.onepagertamp": {
    source: "iana"
  },
  "application/vnd.onepagertamx": {
    source: "iana"
  },
  "application/vnd.onepagertat": {
    source: "iana"
  },
  "application/vnd.onepagertatp": {
    source: "iana"
  },
  "application/vnd.onepagertatx": {
    source: "iana"
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "obgx"
    ]
  },
  "application/vnd.openblox.game-binary": {
    source: "iana"
  },
  "application/vnd.openeye.oeb": {
    source: "iana"
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: [
      "oxt"
    ]
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osm"
    ]
  },
  "application/vnd.opentimestamps.ots": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pptx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: [
      "sldx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: [
      "ppsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: [
      "potx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xlsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: [
      "xltx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: !1,
    extensions: [
      "docx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: [
      "dotx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oracle.resource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.orange.indata": {
    source: "iana"
  },
  "application/vnd.osa.netdeploy": {
    source: "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: [
      "mgp"
    ]
  },
  "application/vnd.osgi.bundle": {
    source: "iana"
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: [
      "dp"
    ]
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: [
      "esa"
    ]
  },
  "application/vnd.otps.ct-kip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oxli.countgraph": {
    source: "iana"
  },
  "application/vnd.pagerduty+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: [
      "pdb",
      "pqa",
      "oprc"
    ]
  },
  "application/vnd.panoply": {
    source: "iana"
  },
  "application/vnd.paos.xml": {
    source: "iana"
  },
  "application/vnd.patentdive": {
    source: "iana"
  },
  "application/vnd.patientecommsdoc": {
    source: "iana"
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: [
      "paw"
    ]
  },
  "application/vnd.pcos": {
    source: "iana"
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: [
      "str"
    ]
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: [
      "ei6"
    ]
  },
  "application/vnd.piaccess.application-licence": {
    source: "iana"
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: [
      "efif"
    ]
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: [
      "wg"
    ]
  },
  "application/vnd.poc.group-advertisement+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: [
      "plf"
    ]
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: [
      "pbd"
    ]
  },
  "application/vnd.powerbuilder6-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder7": {
    source: "iana"
  },
  "application/vnd.powerbuilder7-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder75": {
    source: "iana"
  },
  "application/vnd.powerbuilder75-s": {
    source: "iana"
  },
  "application/vnd.preminet": {
    source: "iana"
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: [
      "box"
    ]
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: [
      "mgz"
    ]
  },
  "application/vnd.psfs": {
    source: "iana"
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: [
      "qps"
    ]
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: [
      "ptid"
    ]
  },
  "application/vnd.pwg-multiplexed": {
    source: "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.qualcomm.brew-app-res": {
    source: "iana"
  },
  "application/vnd.quarantainenet": {
    source: "iana"
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ]
  },
  "application/vnd.quobject-quoxdocument": {
    source: "iana"
  },
  "application/vnd.radisys.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rainstor.data": {
    source: "iana"
  },
  "application/vnd.rapid": {
    source: "iana"
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: [
      "rar"
    ]
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: [
      "bed"
    ]
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: [
      "mxl"
    ]
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musicxml"
    ]
  },
  "application/vnd.renlearn.rlprint": {
    source: "iana"
  },
  "application/vnd.resilient.logic": {
    source: "iana"
  },
  "application/vnd.restful+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: [
      "cryptonote"
    ]
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: [
      "cod"
    ]
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: [
      "rm"
    ]
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: [
      "rmvb"
    ]
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "link66"
    ]
  },
  "application/vnd.rs-274x": {
    source: "iana"
  },
  "application/vnd.ruckus.download": {
    source: "iana"
  },
  "application/vnd.s3sms": {
    source: "iana"
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: [
      "st"
    ]
  },
  "application/vnd.sar": {
    source: "iana"
  },
  "application/vnd.sbm.cid": {
    source: "iana"
  },
  "application/vnd.sbm.mid2": {
    source: "iana"
  },
  "application/vnd.scribus": {
    source: "iana"
  },
  "application/vnd.sealed.3df": {
    source: "iana"
  },
  "application/vnd.sealed.csf": {
    source: "iana"
  },
  "application/vnd.sealed.doc": {
    source: "iana"
  },
  "application/vnd.sealed.eml": {
    source: "iana"
  },
  "application/vnd.sealed.mht": {
    source: "iana"
  },
  "application/vnd.sealed.net": {
    source: "iana"
  },
  "application/vnd.sealed.ppt": {
    source: "iana"
  },
  "application/vnd.sealed.tiff": {
    source: "iana"
  },
  "application/vnd.sealed.xls": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    source: "iana"
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: [
      "see"
    ]
  },
  "application/vnd.seis+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: [
      "sema"
    ]
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: [
      "semd"
    ]
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: [
      "semf"
    ]
  },
  "application/vnd.shade-save-file": {
    source: "iana"
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: [
      "ifm"
    ]
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: [
      "itp"
    ]
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: [
      "iif"
    ]
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: [
      "ipk"
    ]
  },
  "application/vnd.shootproof+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shopkick+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shp": {
    source: "iana"
  },
  "application/vnd.shx": {
    source: "iana"
  },
  "application/vnd.sigrok.session": {
    source: "iana"
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: [
      "twd",
      "twds"
    ]
  },
  "application/vnd.siren+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: [
      "mmf"
    ]
  },
  "application/vnd.smart.notebook": {
    source: "iana"
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: [
      "teacher"
    ]
  },
  "application/vnd.snesdev-page-table": {
    source: "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fo"
    ]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    source: "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sdkm",
      "sdkd"
    ]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: [
      "dxp"
    ]
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: [
      "sfs"
    ]
  },
  "application/vnd.sqlite3": {
    source: "iana"
  },
  "application/vnd.sss-cod": {
    source: "iana"
  },
  "application/vnd.sss-dtf": {
    source: "iana"
  },
  "application/vnd.sss-ntf": {
    source: "iana"
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: [
      "sdc"
    ]
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: [
      "sda"
    ]
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: [
      "sdd"
    ]
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: [
      "smf"
    ]
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: [
      "sdw",
      "vor"
    ]
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: [
      "sgl"
    ]
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: [
      "smzip"
    ]
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: [
      "sm"
    ]
  },
  "application/vnd.street-stream": {
    source: "iana"
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wadl"
    ]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: [
      "sxc"
    ]
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: [
      "stc"
    ]
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: [
      "sxd"
    ]
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: [
      "std"
    ]
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: [
      "sxi"
    ]
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: [
      "sti"
    ]
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: [
      "sxm"
    ]
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: [
      "sxw"
    ]
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: [
      "sxg"
    ]
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: [
      "stw"
    ]
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: [
      "sus",
      "susp"
    ]
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: [
      "svd"
    ]
  },
  "application/vnd.swiftview-ics": {
    source: "iana"
  },
  "application/vnd.sycle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.syft+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: [
      "sis",
      "sisx"
    ]
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xsm"
    ]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "bdm"
    ]
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xdm"
    ]
  },
  "application/vnd.syncml.dm.notification": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "ddf"
    ]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.syncml.ds.notification": {
    source: "iana"
  },
  "application/vnd.tableschema+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: [
      "tao"
    ]
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: [
      "pcap",
      "cap",
      "dmp"
    ]
  },
  "application/vnd.think-cell.ppttc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tml": {
    source: "iana"
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: [
      "tmo"
    ]
  },
  "application/vnd.tri.onesource": {
    source: "iana"
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: [
      "tpt"
    ]
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: [
      "mxs"
    ]
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: [
      "tra"
    ]
  },
  "application/vnd.truedoc": {
    source: "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    source: "iana"
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: [
      "ufd",
      "ufdl"
    ]
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: [
      "utz"
    ]
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: [
      "umj"
    ]
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: [
      "unityweb"
    ]
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uoml"
    ]
  },
  "application/vnd.uplanet.alert": {
    source: "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.channel": {
    source: "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.list": {
    source: "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.signal": {
    source: "iana"
  },
  "application/vnd.uri-map": {
    source: "iana"
  },
  "application/vnd.valve.source.material": {
    source: "iana"
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: [
      "vcx"
    ]
  },
  "application/vnd.vd-study": {
    source: "iana"
  },
  "application/vnd.vectorworks": {
    source: "iana"
  },
  "application/vnd.vel+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.verimatrix.vcas": {
    source: "iana"
  },
  "application/vnd.veritone.aion+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.veryant.thin": {
    source: "iana"
  },
  "application/vnd.ves.encrypted": {
    source: "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    source: "iana"
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: [
      "vsd",
      "vst",
      "vss",
      "vsw"
    ]
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: [
      "vis"
    ]
  },
  "application/vnd.vividence.scriptfile": {
    source: "iana"
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: [
      "vsf"
    ]
  },
  "application/vnd.wap.sic": {
    source: "iana"
  },
  "application/vnd.wap.slc": {
    source: "iana"
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "wbxml"
    ]
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: [
      "wmlc"
    ]
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: [
      "wmlsc"
    ]
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: [
      "wtb"
    ]
  },
  "application/vnd.wfa.dpp": {
    source: "iana"
  },
  "application/vnd.wfa.p2p": {
    source: "iana"
  },
  "application/vnd.wfa.wsc": {
    source: "iana"
  },
  "application/vnd.windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.wmc": {
    source: "iana"
  },
  "application/vnd.wmf.bootstrap": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    source: "iana"
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: [
      "nbp"
    ]
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: [
      "wpd"
    ]
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: [
      "wqd"
    ]
  },
  "application/vnd.wrq-hp3000-labelled": {
    source: "iana"
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: [
      "stf"
    ]
  },
  "application/vnd.wv.csp+wbxml": {
    source: "iana"
  },
  "application/vnd.wv.csp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.wv.ssp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xacml+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: [
      "xar"
    ]
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: [
      "xfdl"
    ]
  },
  "application/vnd.xfdl.webform": {
    source: "iana"
  },
  "application/vnd.xmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xmpie.cpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.dpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.plan": {
    source: "iana"
  },
  "application/vnd.xmpie.ppkg": {
    source: "iana"
  },
  "application/vnd.xmpie.xlim": {
    source: "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: [
      "hvd"
    ]
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: [
      "hvs"
    ]
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: [
      "hvp"
    ]
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: [
      "osf"
    ]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osfpvg"
    ]
  },
  "application/vnd.yamaha.remote-setup": {
    source: "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: [
      "saf"
    ]
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: [
      "spf"
    ]
  },
  "application/vnd.yamaha.through-ngn": {
    source: "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    source: "iana"
  },
  "application/vnd.yaoweme": {
    source: "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: [
      "cmp"
    ]
  },
  "application/vnd.youtube.yt": {
    source: "iana"
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: [
      "zir",
      "zirz"
    ]
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zaz"
    ]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vxml"
    ]
  },
  "application/voucher-cms+json": {
    source: "iana",
    compressible: !0
  },
  "application/vq-rtcpxr": {
    source: "iana"
  },
  "application/wasm": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wasm"
    ]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wif"
    ]
  },
  "application/webpush-options+json": {
    source: "iana",
    compressible: !0
  },
  "application/whoispp-query": {
    source: "iana"
  },
  "application/whoispp-response": {
    source: "iana"
  },
  "application/widget": {
    source: "iana",
    extensions: [
      "wgt"
    ]
  },
  "application/winhlp": {
    source: "apache",
    extensions: [
      "hlp"
    ]
  },
  "application/wita": {
    source: "iana"
  },
  "application/wordperfect5.1": {
    source: "iana"
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wsdl"
    ]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wspolicy"
    ]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "7z"
    ]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: [
      "abw"
    ]
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: [
      "ace"
    ]
  },
  "application/x-amf": {
    source: "apache"
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: [
      "dmg"
    ]
  },
  "application/x-arj": {
    compressible: !1,
    extensions: [
      "arj"
    ]
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: [
      "aab",
      "x32",
      "u32",
      "vox"
    ]
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: [
      "aam"
    ]
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: [
      "aas"
    ]
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: [
      "bcpio"
    ]
  },
  "application/x-bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: [
      "torrent"
    ]
  },
  "application/x-blorb": {
    source: "apache",
    extensions: [
      "blb",
      "blorb"
    ]
  },
  "application/x-bzip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz"
    ]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz2",
      "boz"
    ]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: [
      "cbr",
      "cba",
      "cbt",
      "cbz",
      "cb7"
    ]
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: [
      "vcd"
    ]
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: [
      "cfs"
    ]
  },
  "application/x-chat": {
    source: "apache",
    extensions: [
      "chat"
    ]
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: [
      "pgn"
    ]
  },
  "application/x-chrome-extension": {
    extensions: [
      "crx"
    ]
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: [
      "cco"
    ]
  },
  "application/x-compress": {
    source: "apache"
  },
  "application/x-conference": {
    source: "apache",
    extensions: [
      "nsc"
    ]
  },
  "application/x-cpio": {
    source: "apache",
    extensions: [
      "cpio"
    ]
  },
  "application/x-csh": {
    source: "apache",
    extensions: [
      "csh"
    ]
  },
  "application/x-deb": {
    compressible: !1
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: [
      "deb",
      "udeb"
    ]
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: [
      "dgc"
    ]
  },
  "application/x-director": {
    source: "apache",
    extensions: [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    source: "apache",
    extensions: [
      "wad"
    ]
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ncx"
    ]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dtb"
    ]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "res"
    ]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: !1,
    extensions: [
      "dvi"
    ]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: [
      "evy"
    ]
  },
  "application/x-eva": {
    source: "apache",
    extensions: [
      "eva"
    ]
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: [
      "bdf"
    ]
  },
  "application/x-font-dos": {
    source: "apache"
  },
  "application/x-font-framemaker": {
    source: "apache"
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: [
      "gsf"
    ]
  },
  "application/x-font-libgrx": {
    source: "apache"
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: [
      "psf"
    ]
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: [
      "pcf"
    ]
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: [
      "snf"
    ]
  },
  "application/x-font-speedo": {
    source: "apache"
  },
  "application/x-font-sunos-news": {
    source: "apache"
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ]
  },
  "application/x-font-vfont": {
    source: "apache"
  },
  "application/x-freearc": {
    source: "apache",
    extensions: [
      "arc"
    ]
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: [
      "spl"
    ]
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: [
      "gca"
    ]
  },
  "application/x-glulx": {
    source: "apache",
    extensions: [
      "ulx"
    ]
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: [
      "gnumeric"
    ]
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: [
      "gramps"
    ]
  },
  "application/x-gtar": {
    source: "apache",
    extensions: [
      "gtar"
    ]
  },
  "application/x-gzip": {
    source: "apache"
  },
  "application/x-hdf": {
    source: "apache",
    extensions: [
      "hdf"
    ]
  },
  "application/x-httpd-php": {
    compressible: !0,
    extensions: [
      "php"
    ]
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: [
      "install"
    ]
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: [
      "iso"
    ]
  },
  "application/x-iwork-keynote-sffkey": {
    extensions: [
      "key"
    ]
  },
  "application/x-iwork-numbers-sffnumbers": {
    extensions: [
      "numbers"
    ]
  },
  "application/x-iwork-pages-sffpages": {
    extensions: [
      "pages"
    ]
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: [
      "jardiff"
    ]
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jnlp"
    ]
  },
  "application/x-javascript": {
    compressible: !0
  },
  "application/x-keepass2": {
    extensions: [
      "kdbx"
    ]
  },
  "application/x-latex": {
    source: "apache",
    compressible: !1,
    extensions: [
      "latex"
    ]
  },
  "application/x-lua-bytecode": {
    extensions: [
      "luac"
    ]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: [
      "lzh",
      "lha"
    ]
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: [
      "run"
    ]
  },
  "application/x-mie": {
    source: "apache",
    extensions: [
      "mie"
    ]
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: [
      "prc",
      "mobi"
    ]
  },
  "application/x-mpegurl": {
    compressible: !1
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: [
      "application"
    ]
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: [
      "lnk"
    ]
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: [
      "wmd"
    ]
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: [
      "wmz"
    ]
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: [
      "xbap"
    ]
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: [
      "mdb"
    ]
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: [
      "obd"
    ]
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: [
      "crd"
    ]
  },
  "application/x-msclip": {
    source: "apache",
    extensions: [
      "clp"
    ]
  },
  "application/x-msdos-program": {
    extensions: [
      "exe"
    ]
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: [
      "exe",
      "dll",
      "com",
      "bat",
      "msi"
    ]
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: [
      "mvb",
      "m13",
      "m14"
    ]
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ]
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: [
      "mny"
    ]
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: [
      "pub"
    ]
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: [
      "scd"
    ]
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: [
      "trm"
    ]
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: [
      "wri"
    ]
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: [
      "nc",
      "cdf"
    ]
  },
  "application/x-ns-proxy-autoconfig": {
    compressible: !0,
    extensions: [
      "pac"
    ]
  },
  "application/x-nzb": {
    source: "apache",
    extensions: [
      "nzb"
    ]
  },
  "application/x-perl": {
    source: "nginx",
    extensions: [
      "pl",
      "pm"
    ]
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: [
      "prc",
      "pdb"
    ]
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: !1,
    extensions: [
      "p12",
      "pfx"
    ]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: [
      "p7b",
      "spc"
    ]
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: [
      "p7r"
    ]
  },
  "application/x-pki-message": {
    source: "iana"
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "rar"
    ]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: [
      "rpm"
    ]
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: [
      "ris"
    ]
  },
  "application/x-sea": {
    source: "nginx",
    extensions: [
      "sea"
    ]
  },
  "application/x-sh": {
    source: "apache",
    compressible: !0,
    extensions: [
      "sh"
    ]
  },
  "application/x-shar": {
    source: "apache",
    extensions: [
      "shar"
    ]
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: !1,
    extensions: [
      "swf"
    ]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: [
      "xap"
    ]
  },
  "application/x-sql": {
    source: "apache",
    extensions: [
      "sql"
    ]
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: !1,
    extensions: [
      "sit"
    ]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: [
      "sitx"
    ]
  },
  "application/x-subrip": {
    source: "apache",
    extensions: [
      "srt"
    ]
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: [
      "sv4cpio"
    ]
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: [
      "sv4crc"
    ]
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: [
      "t3"
    ]
  },
  "application/x-tads": {
    source: "apache",
    extensions: [
      "gam"
    ]
  },
  "application/x-tar": {
    source: "apache",
    compressible: !0,
    extensions: [
      "tar"
    ]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: [
      "tcl",
      "tk"
    ]
  },
  "application/x-tex": {
    source: "apache",
    extensions: [
      "tex"
    ]
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: [
      "tfm"
    ]
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: [
      "texinfo",
      "texi"
    ]
  },
  "application/x-tgif": {
    source: "apache",
    extensions: [
      "obj"
    ]
  },
  "application/x-ustar": {
    source: "apache",
    extensions: [
      "ustar"
    ]
  },
  "application/x-virtualbox-hdd": {
    compressible: !0,
    extensions: [
      "hdd"
    ]
  },
  "application/x-virtualbox-ova": {
    compressible: !0,
    extensions: [
      "ova"
    ]
  },
  "application/x-virtualbox-ovf": {
    compressible: !0,
    extensions: [
      "ovf"
    ]
  },
  "application/x-virtualbox-vbox": {
    compressible: !0,
    extensions: [
      "vbox"
    ]
  },
  "application/x-virtualbox-vbox-extpack": {
    compressible: !1,
    extensions: [
      "vbox-extpack"
    ]
  },
  "application/x-virtualbox-vdi": {
    compressible: !0,
    extensions: [
      "vdi"
    ]
  },
  "application/x-virtualbox-vhd": {
    compressible: !0,
    extensions: [
      "vhd"
    ]
  },
  "application/x-virtualbox-vmdk": {
    compressible: !0,
    extensions: [
      "vmdk"
    ]
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: [
      "src"
    ]
  },
  "application/x-web-app-manifest+json": {
    compressible: !0,
    extensions: [
      "webapp"
    ]
  },
  "application/x-www-form-urlencoded": {
    source: "iana",
    compressible: !0
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: [
      "der",
      "crt",
      "pem"
    ]
  },
  "application/x-x509-ca-ra-cert": {
    source: "iana"
  },
  "application/x-x509-next-ca-cert": {
    source: "iana"
  },
  "application/x-xfig": {
    source: "apache",
    extensions: [
      "fig"
    ]
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: !1,
    extensions: [
      "xpi"
    ]
  },
  "application/x-xz": {
    source: "apache",
    extensions: [
      "xz"
    ]
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ]
  },
  "application/x400-bp": {
    source: "iana"
  },
  "application/xacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xaml"
    ]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xav"
    ]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xca"
    ]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdf"
    ]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xel"
    ]
  },
  "application/xcap-error+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xns"
    ]
  },
  "application/xcon-conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcon-conference-info-diff+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xenc"
    ]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xhtml",
      "xht"
    ]
  },
  "application/xhtml-voice+xml": {
    source: "apache",
    compressible: !0
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml",
      "xsl",
      "xsd",
      "rng"
    ]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dtd"
    ]
  },
  "application/xml-external-parsed-entity": {
    source: "iana"
  },
  "application/xml-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xmpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xop+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xop"
    ]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xpl"
    ]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xsl",
      "xslt"
    ]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xspf"
    ]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ]
  },
  "application/yang": {
    source: "iana",
    extensions: [
      "yang"
    ]
  },
  "application/yang-data+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yin+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "yin"
    ]
  },
  "application/zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "zip"
    ]
  },
  "application/zlib": {
    source: "iana"
  },
  "application/zstd": {
    source: "iana"
  },
  "audio/1d-interleaved-parityfec": {
    source: "iana"
  },
  "audio/32kadpcm": {
    source: "iana"
  },
  "audio/3gpp": {
    source: "iana",
    compressible: !1,
    extensions: [
      "3gpp"
    ]
  },
  "audio/3gpp2": {
    source: "iana"
  },
  "audio/aac": {
    source: "iana"
  },
  "audio/ac3": {
    source: "iana"
  },
  "audio/adpcm": {
    source: "apache",
    extensions: [
      "adp"
    ]
  },
  "audio/amr": {
    source: "iana",
    extensions: [
      "amr"
    ]
  },
  "audio/amr-wb": {
    source: "iana"
  },
  "audio/amr-wb+": {
    source: "iana"
  },
  "audio/aptx": {
    source: "iana"
  },
  "audio/asc": {
    source: "iana"
  },
  "audio/atrac-advanced-lossless": {
    source: "iana"
  },
  "audio/atrac-x": {
    source: "iana"
  },
  "audio/atrac3": {
    source: "iana"
  },
  "audio/basic": {
    source: "iana",
    compressible: !1,
    extensions: [
      "au",
      "snd"
    ]
  },
  "audio/bv16": {
    source: "iana"
  },
  "audio/bv32": {
    source: "iana"
  },
  "audio/clearmode": {
    source: "iana"
  },
  "audio/cn": {
    source: "iana"
  },
  "audio/dat12": {
    source: "iana"
  },
  "audio/dls": {
    source: "iana"
  },
  "audio/dsr-es201108": {
    source: "iana"
  },
  "audio/dsr-es202050": {
    source: "iana"
  },
  "audio/dsr-es202211": {
    source: "iana"
  },
  "audio/dsr-es202212": {
    source: "iana"
  },
  "audio/dv": {
    source: "iana"
  },
  "audio/dvi4": {
    source: "iana"
  },
  "audio/eac3": {
    source: "iana"
  },
  "audio/encaprtp": {
    source: "iana"
  },
  "audio/evrc": {
    source: "iana"
  },
  "audio/evrc-qcp": {
    source: "iana"
  },
  "audio/evrc0": {
    source: "iana"
  },
  "audio/evrc1": {
    source: "iana"
  },
  "audio/evrcb": {
    source: "iana"
  },
  "audio/evrcb0": {
    source: "iana"
  },
  "audio/evrcb1": {
    source: "iana"
  },
  "audio/evrcnw": {
    source: "iana"
  },
  "audio/evrcnw0": {
    source: "iana"
  },
  "audio/evrcnw1": {
    source: "iana"
  },
  "audio/evrcwb": {
    source: "iana"
  },
  "audio/evrcwb0": {
    source: "iana"
  },
  "audio/evrcwb1": {
    source: "iana"
  },
  "audio/evs": {
    source: "iana"
  },
  "audio/flexfec": {
    source: "iana"
  },
  "audio/fwdred": {
    source: "iana"
  },
  "audio/g711-0": {
    source: "iana"
  },
  "audio/g719": {
    source: "iana"
  },
  "audio/g722": {
    source: "iana"
  },
  "audio/g7221": {
    source: "iana"
  },
  "audio/g723": {
    source: "iana"
  },
  "audio/g726-16": {
    source: "iana"
  },
  "audio/g726-24": {
    source: "iana"
  },
  "audio/g726-32": {
    source: "iana"
  },
  "audio/g726-40": {
    source: "iana"
  },
  "audio/g728": {
    source: "iana"
  },
  "audio/g729": {
    source: "iana"
  },
  "audio/g7291": {
    source: "iana"
  },
  "audio/g729d": {
    source: "iana"
  },
  "audio/g729e": {
    source: "iana"
  },
  "audio/gsm": {
    source: "iana"
  },
  "audio/gsm-efr": {
    source: "iana"
  },
  "audio/gsm-hr-08": {
    source: "iana"
  },
  "audio/ilbc": {
    source: "iana"
  },
  "audio/ip-mr_v2.5": {
    source: "iana"
  },
  "audio/isac": {
    source: "apache"
  },
  "audio/l16": {
    source: "iana"
  },
  "audio/l20": {
    source: "iana"
  },
  "audio/l24": {
    source: "iana",
    compressible: !1
  },
  "audio/l8": {
    source: "iana"
  },
  "audio/lpc": {
    source: "iana"
  },
  "audio/melp": {
    source: "iana"
  },
  "audio/melp1200": {
    source: "iana"
  },
  "audio/melp2400": {
    source: "iana"
  },
  "audio/melp600": {
    source: "iana"
  },
  "audio/mhas": {
    source: "iana"
  },
  "audio/midi": {
    source: "apache",
    extensions: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ]
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: [
      "mxmf"
    ]
  },
  "audio/mp3": {
    compressible: !1,
    extensions: [
      "mp3"
    ]
  },
  "audio/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "m4a",
      "mp4a"
    ]
  },
  "audio/mp4a-latm": {
    source: "iana"
  },
  "audio/mpa": {
    source: "iana"
  },
  "audio/mpa-robust": {
    source: "iana"
  },
  "audio/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpga",
      "mp2",
      "mp2a",
      "mp3",
      "m2a",
      "m3a"
    ]
  },
  "audio/mpeg4-generic": {
    source: "iana"
  },
  "audio/musepack": {
    source: "apache"
  },
  "audio/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "oga",
      "ogg",
      "spx",
      "opus"
    ]
  },
  "audio/opus": {
    source: "iana"
  },
  "audio/parityfec": {
    source: "iana"
  },
  "audio/pcma": {
    source: "iana"
  },
  "audio/pcma-wb": {
    source: "iana"
  },
  "audio/pcmu": {
    source: "iana"
  },
  "audio/pcmu-wb": {
    source: "iana"
  },
  "audio/prs.sid": {
    source: "iana"
  },
  "audio/qcelp": {
    source: "iana"
  },
  "audio/raptorfec": {
    source: "iana"
  },
  "audio/red": {
    source: "iana"
  },
  "audio/rtp-enc-aescm128": {
    source: "iana"
  },
  "audio/rtp-midi": {
    source: "iana"
  },
  "audio/rtploopback": {
    source: "iana"
  },
  "audio/rtx": {
    source: "iana"
  },
  "audio/s3m": {
    source: "apache",
    extensions: [
      "s3m"
    ]
  },
  "audio/scip": {
    source: "iana"
  },
  "audio/silk": {
    source: "apache",
    extensions: [
      "sil"
    ]
  },
  "audio/smv": {
    source: "iana"
  },
  "audio/smv-qcp": {
    source: "iana"
  },
  "audio/smv0": {
    source: "iana"
  },
  "audio/sofa": {
    source: "iana"
  },
  "audio/sp-midi": {
    source: "iana"
  },
  "audio/speex": {
    source: "iana"
  },
  "audio/t140c": {
    source: "iana"
  },
  "audio/t38": {
    source: "iana"
  },
  "audio/telephone-event": {
    source: "iana"
  },
  "audio/tetra_acelp": {
    source: "iana"
  },
  "audio/tetra_acelp_bb": {
    source: "iana"
  },
  "audio/tone": {
    source: "iana"
  },
  "audio/tsvcis": {
    source: "iana"
  },
  "audio/uemclip": {
    source: "iana"
  },
  "audio/ulpfec": {
    source: "iana"
  },
  "audio/usac": {
    source: "iana"
  },
  "audio/vdvi": {
    source: "iana"
  },
  "audio/vmr-wb": {
    source: "iana"
  },
  "audio/vnd.3gpp.iufp": {
    source: "iana"
  },
  "audio/vnd.4sb": {
    source: "iana"
  },
  "audio/vnd.audiokoz": {
    source: "iana"
  },
  "audio/vnd.celp": {
    source: "iana"
  },
  "audio/vnd.cisco.nse": {
    source: "iana"
  },
  "audio/vnd.cmles.radio-events": {
    source: "iana"
  },
  "audio/vnd.cns.anp1": {
    source: "iana"
  },
  "audio/vnd.cns.inf1": {
    source: "iana"
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: [
      "uva",
      "uvva"
    ]
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: [
      "eol"
    ]
  },
  "audio/vnd.dlna.adts": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    source: "iana"
  },
  "audio/vnd.dolby.mlp": {
    source: "iana"
  },
  "audio/vnd.dolby.mps": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2x": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2z": {
    source: "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    source: "iana"
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: [
      "dra"
    ]
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: [
      "dts"
    ]
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: [
      "dtshd"
    ]
  },
  "audio/vnd.dts.uhd": {
    source: "iana"
  },
  "audio/vnd.dvb.file": {
    source: "iana"
  },
  "audio/vnd.everad.plj": {
    source: "iana"
  },
  "audio/vnd.hns.audio": {
    source: "iana"
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: [
      "lvp"
    ]
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: [
      "pya"
    ]
  },
  "audio/vnd.nokia.mobile-xmf": {
    source: "iana"
  },
  "audio/vnd.nortel.vbk": {
    source: "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: [
      "ecelp4800"
    ]
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: [
      "ecelp7470"
    ]
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: [
      "ecelp9600"
    ]
  },
  "audio/vnd.octel.sbc": {
    source: "iana"
  },
  "audio/vnd.presonus.multitrack": {
    source: "iana"
  },
  "audio/vnd.qcelp": {
    source: "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    source: "iana"
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: [
      "rip"
    ]
  },
  "audio/vnd.rn-realaudio": {
    compressible: !1
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    source: "iana"
  },
  "audio/vnd.vmx.cvsd": {
    source: "iana"
  },
  "audio/vnd.wave": {
    compressible: !1
  },
  "audio/vorbis": {
    source: "iana",
    compressible: !1
  },
  "audio/vorbis-config": {
    source: "iana"
  },
  "audio/wav": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/wave": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "weba"
    ]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: !1,
    extensions: [
      "aac"
    ]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: [
      "aif",
      "aiff",
      "aifc"
    ]
  },
  "audio/x-caf": {
    source: "apache",
    compressible: !1,
    extensions: [
      "caf"
    ]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: [
      "flac"
    ]
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: [
      "m4a"
    ]
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: [
      "mka"
    ]
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: [
      "m3u"
    ]
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: [
      "wax"
    ]
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: [
      "wma"
    ]
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: [
      "ram",
      "ra"
    ]
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: [
      "rmp"
    ]
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: [
      "ra"
    ]
  },
  "audio/x-tta": {
    source: "apache"
  },
  "audio/x-wav": {
    source: "apache",
    extensions: [
      "wav"
    ]
  },
  "audio/xm": {
    source: "apache",
    extensions: [
      "xm"
    ]
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: [
      "cdx"
    ]
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: [
      "cif"
    ]
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: [
      "cmdf"
    ]
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: [
      "cml"
    ]
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: [
      "csml"
    ]
  },
  "chemical/x-pdb": {
    source: "apache"
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: [
      "xyz"
    ]
  },
  "font/collection": {
    source: "iana",
    extensions: [
      "ttc"
    ]
  },
  "font/otf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "otf"
    ]
  },
  "font/sfnt": {
    source: "iana"
  },
  "font/ttf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttf"
    ]
  },
  "font/woff": {
    source: "iana",
    extensions: [
      "woff"
    ]
  },
  "font/woff2": {
    source: "iana",
    extensions: [
      "woff2"
    ]
  },
  "image/aces": {
    source: "iana",
    extensions: [
      "exr"
    ]
  },
  "image/apng": {
    compressible: !1,
    extensions: [
      "apng"
    ]
  },
  "image/avci": {
    source: "iana",
    extensions: [
      "avci"
    ]
  },
  "image/avcs": {
    source: "iana",
    extensions: [
      "avcs"
    ]
  },
  "image/avif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "avif"
    ]
  },
  "image/bmp": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/cgm": {
    source: "iana",
    extensions: [
      "cgm"
    ]
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: [
      "drle"
    ]
  },
  "image/emf": {
    source: "iana",
    extensions: [
      "emf"
    ]
  },
  "image/fits": {
    source: "iana",
    extensions: [
      "fits"
    ]
  },
  "image/g3fax": {
    source: "iana",
    extensions: [
      "g3"
    ]
  },
  "image/gif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gif"
    ]
  },
  "image/heic": {
    source: "iana",
    extensions: [
      "heic"
    ]
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: [
      "heics"
    ]
  },
  "image/heif": {
    source: "iana",
    extensions: [
      "heif"
    ]
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: [
      "heifs"
    ]
  },
  "image/hej2k": {
    source: "iana",
    extensions: [
      "hej2"
    ]
  },
  "image/hsj2": {
    source: "iana",
    extensions: [
      "hsj2"
    ]
  },
  "image/ief": {
    source: "iana",
    extensions: [
      "ief"
    ]
  },
  "image/jls": {
    source: "iana",
    extensions: [
      "jls"
    ]
  },
  "image/jp2": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jp2",
      "jpg2"
    ]
  },
  "image/jpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpeg",
      "jpg",
      "jpe"
    ]
  },
  "image/jph": {
    source: "iana",
    extensions: [
      "jph"
    ]
  },
  "image/jphc": {
    source: "iana",
    extensions: [
      "jhc"
    ]
  },
  "image/jpm": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpm"
    ]
  },
  "image/jpx": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpx",
      "jpf"
    ]
  },
  "image/jxr": {
    source: "iana",
    extensions: [
      "jxr"
    ]
  },
  "image/jxra": {
    source: "iana",
    extensions: [
      "jxra"
    ]
  },
  "image/jxrs": {
    source: "iana",
    extensions: [
      "jxrs"
    ]
  },
  "image/jxs": {
    source: "iana",
    extensions: [
      "jxs"
    ]
  },
  "image/jxsc": {
    source: "iana",
    extensions: [
      "jxsc"
    ]
  },
  "image/jxsi": {
    source: "iana",
    extensions: [
      "jxsi"
    ]
  },
  "image/jxss": {
    source: "iana",
    extensions: [
      "jxss"
    ]
  },
  "image/ktx": {
    source: "iana",
    extensions: [
      "ktx"
    ]
  },
  "image/ktx2": {
    source: "iana",
    extensions: [
      "ktx2"
    ]
  },
  "image/naplps": {
    source: "iana"
  },
  "image/pjpeg": {
    compressible: !1
  },
  "image/png": {
    source: "iana",
    compressible: !1,
    extensions: [
      "png"
    ]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: [
      "btif"
    ]
  },
  "image/prs.pti": {
    source: "iana",
    extensions: [
      "pti"
    ]
  },
  "image/pwg-raster": {
    source: "iana"
  },
  "image/sgi": {
    source: "apache",
    extensions: [
      "sgi"
    ]
  },
  "image/svg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "svg",
      "svgz"
    ]
  },
  "image/t38": {
    source: "iana",
    extensions: [
      "t38"
    ]
  },
  "image/tiff": {
    source: "iana",
    compressible: !1,
    extensions: [
      "tif",
      "tiff"
    ]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: [
      "tfx"
    ]
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: !0,
    extensions: [
      "psd"
    ]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: [
      "azv"
    ]
  },
  "image/vnd.cns.inf2": {
    source: "iana"
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ]
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: [
      "djvu",
      "djv"
    ]
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: [
      "dwg"
    ]
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: [
      "dxf"
    ]
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: [
      "fbs"
    ]
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: [
      "fpx"
    ]
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: [
      "fst"
    ]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: [
      "mmr"
    ]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: [
      "rlc"
    ]
  },
  "image/vnd.globalgraphics.pgb": {
    source: "iana"
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/vnd.mix": {
    source: "iana"
  },
  "image/vnd.mozilla.apng": {
    source: "iana"
  },
  "image/vnd.ms-dds": {
    compressible: !0,
    extensions: [
      "dds"
    ]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: [
      "mdi"
    ]
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: [
      "wdp"
    ]
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: [
      "npx"
    ]
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: [
      "b16"
    ]
  },
  "image/vnd.radiance": {
    source: "iana"
  },
  "image/vnd.sealed.png": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    source: "iana"
  },
  "image/vnd.svf": {
    source: "iana"
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: [
      "tap"
    ]
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: [
      "vtf"
    ]
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: [
      "wbmp"
    ]
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: [
      "xif"
    ]
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: [
      "pcx"
    ]
  },
  "image/webp": {
    source: "apache",
    extensions: [
      "webp"
    ]
  },
  "image/wmf": {
    source: "iana",
    extensions: [
      "wmf"
    ]
  },
  "image/x-3ds": {
    source: "apache",
    extensions: [
      "3ds"
    ]
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: [
      "ras"
    ]
  },
  "image/x-cmx": {
    source: "apache",
    extensions: [
      "cmx"
    ]
  },
  "image/x-freehand": {
    source: "apache",
    extensions: [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ]
  },
  "image/x-icon": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: [
      "jng"
    ]
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: [
      "sid"
    ]
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: [
      "pcx"
    ]
  },
  "image/x-pict": {
    source: "apache",
    extensions: [
      "pic",
      "pct"
    ]
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: [
      "pnm"
    ]
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: [
      "pbm"
    ]
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: [
      "pgm"
    ]
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: [
      "ppm"
    ]
  },
  "image/x-rgb": {
    source: "apache",
    extensions: [
      "rgb"
    ]
  },
  "image/x-tga": {
    source: "apache",
    extensions: [
      "tga"
    ]
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: [
      "xbm"
    ]
  },
  "image/x-xcf": {
    compressible: !1
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: [
      "xpm"
    ]
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: [
      "xwd"
    ]
  },
  "message/cpim": {
    source: "iana"
  },
  "message/delivery-status": {
    source: "iana"
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    source: "iana"
  },
  "message/feedback-report": {
    source: "iana"
  },
  "message/global": {
    source: "iana",
    extensions: [
      "u8msg"
    ]
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: [
      "u8dsn"
    ]
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: [
      "u8mdn"
    ]
  },
  "message/global-headers": {
    source: "iana",
    extensions: [
      "u8hdr"
    ]
  },
  "message/http": {
    source: "iana",
    compressible: !1
  },
  "message/imdn+xml": {
    source: "iana",
    compressible: !0
  },
  "message/news": {
    source: "iana"
  },
  "message/partial": {
    source: "iana",
    compressible: !1
  },
  "message/rfc822": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eml",
      "mime"
    ]
  },
  "message/s-http": {
    source: "iana"
  },
  "message/sip": {
    source: "iana"
  },
  "message/sipfrag": {
    source: "iana"
  },
  "message/tracking-status": {
    source: "iana"
  },
  "message/vnd.si.simp": {
    source: "iana"
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: [
      "wsc"
    ]
  },
  "model/3mf": {
    source: "iana",
    extensions: [
      "3mf"
    ]
  },
  "model/e57": {
    source: "iana"
  },
  "model/gltf+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gltf"
    ]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: !0,
    extensions: [
      "glb"
    ]
  },
  "model/iges": {
    source: "iana",
    compressible: !1,
    extensions: [
      "igs",
      "iges"
    ]
  },
  "model/mesh": {
    source: "iana",
    compressible: !1,
    extensions: [
      "msh",
      "mesh",
      "silo"
    ]
  },
  "model/mtl": {
    source: "iana",
    extensions: [
      "mtl"
    ]
  },
  "model/obj": {
    source: "iana",
    extensions: [
      "obj"
    ]
  },
  "model/step": {
    source: "iana"
  },
  "model/step+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "stpx"
    ]
  },
  "model/step+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpz"
    ]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpxz"
    ]
  },
  "model/stl": {
    source: "iana",
    extensions: [
      "stl"
    ]
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dae"
    ]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: [
      "dwf"
    ]
  },
  "model/vnd.flatland.3dml": {
    source: "iana"
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: [
      "gdl"
    ]
  },
  "model/vnd.gs-gdl": {
    source: "apache"
  },
  "model/vnd.gs.gdl": {
    source: "iana"
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: [
      "gtw"
    ]
  },
  "model/vnd.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: [
      "mts"
    ]
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: [
      "ogex"
    ]
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: [
      "x_b"
    ]
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: [
      "x_t"
    ]
  },
  "model/vnd.pytha.pyox": {
    source: "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    source: "iana"
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: [
      "vds"
    ]
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "usdz"
    ]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: [
      "bsp"
    ]
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: [
      "vtu"
    ]
  },
  "model/vrml": {
    source: "iana",
    compressible: !1,
    extensions: [
      "wrl",
      "vrml"
    ]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3db",
      "x3dbz"
    ]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: [
      "x3db"
    ]
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3dv",
      "x3dvz"
    ]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "x3d",
      "x3dz"
    ]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: [
      "x3dv"
    ]
  },
  "multipart/alternative": {
    source: "iana",
    compressible: !1
  },
  "multipart/appledouble": {
    source: "iana"
  },
  "multipart/byteranges": {
    source: "iana"
  },
  "multipart/digest": {
    source: "iana"
  },
  "multipart/encrypted": {
    source: "iana",
    compressible: !1
  },
  "multipart/form-data": {
    source: "iana",
    compressible: !1
  },
  "multipart/header-set": {
    source: "iana"
  },
  "multipart/mixed": {
    source: "iana"
  },
  "multipart/multilingual": {
    source: "iana"
  },
  "multipart/parallel": {
    source: "iana"
  },
  "multipart/related": {
    source: "iana",
    compressible: !1
  },
  "multipart/report": {
    source: "iana"
  },
  "multipart/signed": {
    source: "iana",
    compressible: !1
  },
  "multipart/vnd.bint.med-plus": {
    source: "iana"
  },
  "multipart/voice-message": {
    source: "iana"
  },
  "multipart/x-mixed-replace": {
    source: "iana"
  },
  "text/1d-interleaved-parityfec": {
    source: "iana"
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: !0,
    extensions: [
      "appcache",
      "manifest"
    ]
  },
  "text/calendar": {
    source: "iana",
    extensions: [
      "ics",
      "ifb"
    ]
  },
  "text/calender": {
    compressible: !0
  },
  "text/cmd": {
    compressible: !0
  },
  "text/coffeescript": {
    extensions: [
      "coffee",
      "litcoffee"
    ]
  },
  "text/cql": {
    source: "iana"
  },
  "text/cql-expression": {
    source: "iana"
  },
  "text/cql-identifier": {
    source: "iana"
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "css"
    ]
  },
  "text/csv": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csv"
    ]
  },
  "text/csv-schema": {
    source: "iana"
  },
  "text/directory": {
    source: "iana"
  },
  "text/dns": {
    source: "iana"
  },
  "text/ecmascript": {
    source: "iana"
  },
  "text/encaprtp": {
    source: "iana"
  },
  "text/enriched": {
    source: "iana"
  },
  "text/fhirpath": {
    source: "iana"
  },
  "text/flexfec": {
    source: "iana"
  },
  "text/fwdred": {
    source: "iana"
  },
  "text/gff3": {
    source: "iana"
  },
  "text/grammar-ref-list": {
    source: "iana"
  },
  "text/html": {
    source: "iana",
    compressible: !0,
    extensions: [
      "html",
      "htm",
      "shtml"
    ]
  },
  "text/jade": {
    extensions: [
      "jade"
    ]
  },
  "text/javascript": {
    source: "iana",
    compressible: !0
  },
  "text/jcr-cnd": {
    source: "iana"
  },
  "text/jsx": {
    compressible: !0,
    extensions: [
      "jsx"
    ]
  },
  "text/less": {
    compressible: !0,
    extensions: [
      "less"
    ]
  },
  "text/markdown": {
    source: "iana",
    compressible: !0,
    extensions: [
      "markdown",
      "md"
    ]
  },
  "text/mathml": {
    source: "nginx",
    extensions: [
      "mml"
    ]
  },
  "text/mdx": {
    compressible: !0,
    extensions: [
      "mdx"
    ]
  },
  "text/mizar": {
    source: "iana"
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "n3"
    ]
  },
  "text/parameters": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/parityfec": {
    source: "iana"
  },
  "text/plain": {
    source: "iana",
    compressible: !0,
    extensions: [
      "txt",
      "text",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "ini"
    ]
  },
  "text/provenance-notation": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    source: "iana"
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: [
      "dsc"
    ]
  },
  "text/prs.prop.logic": {
    source: "iana"
  },
  "text/raptorfec": {
    source: "iana"
  },
  "text/red": {
    source: "iana"
  },
  "text/rfc822-headers": {
    source: "iana"
  },
  "text/richtext": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtx"
    ]
  },
  "text/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "text/rtp-enc-aescm128": {
    source: "iana"
  },
  "text/rtploopback": {
    source: "iana"
  },
  "text/rtx": {
    source: "iana"
  },
  "text/sgml": {
    source: "iana",
    extensions: [
      "sgml",
      "sgm"
    ]
  },
  "text/shaclc": {
    source: "iana"
  },
  "text/shex": {
    source: "iana",
    extensions: [
      "shex"
    ]
  },
  "text/slim": {
    extensions: [
      "slim",
      "slm"
    ]
  },
  "text/spdx": {
    source: "iana",
    extensions: [
      "spdx"
    ]
  },
  "text/strings": {
    source: "iana"
  },
  "text/stylus": {
    extensions: [
      "stylus",
      "styl"
    ]
  },
  "text/t140": {
    source: "iana"
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tsv"
    ]
  },
  "text/troff": {
    source: "iana",
    extensions: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ]
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "ttl"
    ]
  },
  "text/ulpfec": {
    source: "iana"
  },
  "text/uri-list": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uri",
      "uris",
      "urls"
    ]
  },
  "text/vcard": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vcard"
    ]
  },
  "text/vnd.a": {
    source: "iana"
  },
  "text/vnd.abc": {
    source: "iana"
  },
  "text/vnd.ascii-art": {
    source: "iana"
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: [
      "curl"
    ]
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: [
      "dcurl"
    ]
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: [
      "mcurl"
    ]
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: [
      "scurl"
    ]
  },
  "text/vnd.debian.copyright": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.dmclientscript": {
    source: "iana"
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "text/vnd.esmertec.theme-descriptor": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: [
      "ged"
    ]
  },
  "text/vnd.ficlab.flt": {
    source: "iana"
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: [
      "fly"
    ]
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: [
      "flx"
    ]
  },
  "text/vnd.gml": {
    source: "iana"
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: [
      "gv"
    ]
  },
  "text/vnd.hans": {
    source: "iana"
  },
  "text/vnd.hgl": {
    source: "iana"
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: [
      "3dml"
    ]
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: [
      "spot"
    ]
  },
  "text/vnd.iptc.newsml": {
    source: "iana"
  },
  "text/vnd.iptc.nitf": {
    source: "iana"
  },
  "text/vnd.latex-z": {
    source: "iana"
  },
  "text/vnd.motorola.reflex": {
    source: "iana"
  },
  "text/vnd.ms-mediapackage": {
    source: "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    source: "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    source: "iana"
  },
  "text/vnd.senx.warpscript": {
    source: "iana"
  },
  "text/vnd.si.uricatalogue": {
    source: "iana"
  },
  "text/vnd.sosi": {
    source: "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "jad"
    ]
  },
  "text/vnd.trolltech.linguist": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.wap.si": {
    source: "iana"
  },
  "text/vnd.wap.sl": {
    source: "iana"
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: [
      "wml"
    ]
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: [
      "wmls"
    ]
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "vtt"
    ]
  },
  "text/x-asm": {
    source: "apache",
    extensions: [
      "s",
      "asm"
    ]
  },
  "text/x-c": {
    source: "apache",
    extensions: [
      "c",
      "cc",
      "cxx",
      "cpp",
      "h",
      "hh",
      "dic"
    ]
  },
  "text/x-component": {
    source: "nginx",
    extensions: [
      "htc"
    ]
  },
  "text/x-fortran": {
    source: "apache",
    extensions: [
      "f",
      "for",
      "f77",
      "f90"
    ]
  },
  "text/x-gwt-rpc": {
    compressible: !0
  },
  "text/x-handlebars-template": {
    extensions: [
      "hbs"
    ]
  },
  "text/x-java-source": {
    source: "apache",
    extensions: [
      "java"
    ]
  },
  "text/x-jquery-tmpl": {
    compressible: !0
  },
  "text/x-lua": {
    extensions: [
      "lua"
    ]
  },
  "text/x-markdown": {
    compressible: !0,
    extensions: [
      "mkd"
    ]
  },
  "text/x-nfo": {
    source: "apache",
    extensions: [
      "nfo"
    ]
  },
  "text/x-opml": {
    source: "apache",
    extensions: [
      "opml"
    ]
  },
  "text/x-org": {
    compressible: !0,
    extensions: [
      "org"
    ]
  },
  "text/x-pascal": {
    source: "apache",
    extensions: [
      "p",
      "pas"
    ]
  },
  "text/x-processing": {
    compressible: !0,
    extensions: [
      "pde"
    ]
  },
  "text/x-sass": {
    extensions: [
      "sass"
    ]
  },
  "text/x-scss": {
    extensions: [
      "scss"
    ]
  },
  "text/x-setext": {
    source: "apache",
    extensions: [
      "etx"
    ]
  },
  "text/x-sfv": {
    source: "apache",
    extensions: [
      "sfv"
    ]
  },
  "text/x-suse-ymp": {
    compressible: !0,
    extensions: [
      "ymp"
    ]
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: [
      "uu"
    ]
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: [
      "vcs"
    ]
  },
  "text/x-vcard": {
    source: "apache",
    extensions: [
      "vcf"
    ]
  },
  "text/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml"
    ]
  },
  "text/xml-external-parsed-entity": {
    source: "iana"
  },
  "text/yaml": {
    compressible: !0,
    extensions: [
      "yaml",
      "yml"
    ]
  },
  "video/1d-interleaved-parityfec": {
    source: "iana"
  },
  "video/3gpp": {
    source: "iana",
    extensions: [
      "3gp",
      "3gpp"
    ]
  },
  "video/3gpp-tt": {
    source: "iana"
  },
  "video/3gpp2": {
    source: "iana",
    extensions: [
      "3g2"
    ]
  },
  "video/av1": {
    source: "iana"
  },
  "video/bmpeg": {
    source: "iana"
  },
  "video/bt656": {
    source: "iana"
  },
  "video/celb": {
    source: "iana"
  },
  "video/dv": {
    source: "iana"
  },
  "video/encaprtp": {
    source: "iana"
  },
  "video/ffv1": {
    source: "iana"
  },
  "video/flexfec": {
    source: "iana"
  },
  "video/h261": {
    source: "iana",
    extensions: [
      "h261"
    ]
  },
  "video/h263": {
    source: "iana",
    extensions: [
      "h263"
    ]
  },
  "video/h263-1998": {
    source: "iana"
  },
  "video/h263-2000": {
    source: "iana"
  },
  "video/h264": {
    source: "iana",
    extensions: [
      "h264"
    ]
  },
  "video/h264-rcdo": {
    source: "iana"
  },
  "video/h264-svc": {
    source: "iana"
  },
  "video/h265": {
    source: "iana"
  },
  "video/iso.segment": {
    source: "iana",
    extensions: [
      "m4s"
    ]
  },
  "video/jpeg": {
    source: "iana",
    extensions: [
      "jpgv"
    ]
  },
  "video/jpeg2000": {
    source: "iana"
  },
  "video/jpm": {
    source: "apache",
    extensions: [
      "jpm",
      "jpgm"
    ]
  },
  "video/jxsv": {
    source: "iana"
  },
  "video/mj2": {
    source: "iana",
    extensions: [
      "mj2",
      "mjp2"
    ]
  },
  "video/mp1s": {
    source: "iana"
  },
  "video/mp2p": {
    source: "iana"
  },
  "video/mp2t": {
    source: "iana",
    extensions: [
      "ts"
    ]
  },
  "video/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mp4",
      "mp4v",
      "mpg4"
    ]
  },
  "video/mp4v-es": {
    source: "iana"
  },
  "video/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v"
    ]
  },
  "video/mpeg4-generic": {
    source: "iana"
  },
  "video/mpv": {
    source: "iana"
  },
  "video/nv": {
    source: "iana"
  },
  "video/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogv"
    ]
  },
  "video/parityfec": {
    source: "iana"
  },
  "video/pointer": {
    source: "iana"
  },
  "video/quicktime": {
    source: "iana",
    compressible: !1,
    extensions: [
      "qt",
      "mov"
    ]
  },
  "video/raptorfec": {
    source: "iana"
  },
  "video/raw": {
    source: "iana"
  },
  "video/rtp-enc-aescm128": {
    source: "iana"
  },
  "video/rtploopback": {
    source: "iana"
  },
  "video/rtx": {
    source: "iana"
  },
  "video/scip": {
    source: "iana"
  },
  "video/smpte291": {
    source: "iana"
  },
  "video/smpte292m": {
    source: "iana"
  },
  "video/ulpfec": {
    source: "iana"
  },
  "video/vc1": {
    source: "iana"
  },
  "video/vc2": {
    source: "iana"
  },
  "video/vnd.cctv": {
    source: "iana"
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: [
      "uvh",
      "uvvh"
    ]
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: [
      "uvm",
      "uvvm"
    ]
  },
  "video/vnd.dece.mp4": {
    source: "iana"
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: [
      "uvp",
      "uvvp"
    ]
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: [
      "uvs",
      "uvvs"
    ]
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: [
      "uvv",
      "uvvv"
    ]
  },
  "video/vnd.directv.mpeg": {
    source: "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: [
      "dvb"
    ]
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: [
      "fvt"
    ]
  },
  "video/vnd.hns.video": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    source: "iana"
  },
  "video/vnd.motorola.video": {
    source: "iana"
  },
  "video/vnd.motorola.videop": {
    source: "iana"
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: [
      "mxu",
      "m4u"
    ]
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: [
      "pyv"
    ]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    source: "iana"
  },
  "video/vnd.nokia.mp4vr": {
    source: "iana"
  },
  "video/vnd.nokia.videovoip": {
    source: "iana"
  },
  "video/vnd.objectvideo": {
    source: "iana"
  },
  "video/vnd.radgamettools.bink": {
    source: "iana"
  },
  "video/vnd.radgamettools.smacker": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg1": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg4": {
    source: "iana"
  },
  "video/vnd.sealed.swf": {
    source: "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    source: "iana"
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: [
      "uvu",
      "uvvu"
    ]
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: [
      "viv"
    ]
  },
  "video/vnd.youtube.yt": {
    source: "iana"
  },
  "video/vp8": {
    source: "iana"
  },
  "video/vp9": {
    source: "iana"
  },
  "video/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "webm"
    ]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: [
      "f4v"
    ]
  },
  "video/x-fli": {
    source: "apache",
    extensions: [
      "fli"
    ]
  },
  "video/x-flv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "flv"
    ]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: [
      "m4v"
    ]
  },
  "video/x-matroska": {
    source: "apache",
    compressible: !1,
    extensions: [
      "mkv",
      "mk3d",
      "mks"
    ]
  },
  "video/x-mng": {
    source: "apache",
    extensions: [
      "mng"
    ]
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: [
      "asf",
      "asx"
    ]
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: [
      "vob"
    ]
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: [
      "wm"
    ]
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "wmv"
    ]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: [
      "wmx"
    ]
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: [
      "wvx"
    ]
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: [
      "avi"
    ]
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: [
      "movie"
    ]
  },
  "video/x-smv": {
    source: "apache",
    extensions: [
      "smv"
    ]
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: [
      "ice"
    ]
  },
  "x-shader/x-fragment": {
    compressible: !0
  },
  "x-shader/x-vertex": {
    compressible: !0
  }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var Rv = Sv;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(t) {
  var e = Rv, n = Et.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, s = /^text\//i;
  t.charset = a, t.charsets = { lookup: a }, t.contentType = i, t.extension = o, t.extensions = /* @__PURE__ */ Object.create(null), t.lookup = c, t.types = /* @__PURE__ */ Object.create(null), u(t.extensions, t.types);
  function a(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = r.exec(l), d = p && e[p[1].toLowerCase()];
    return d && d.charset ? d.charset : p && s.test(p[1]) ? "UTF-8" : !1;
  }
  function i(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = l.indexOf("/") === -1 ? t.lookup(l) : l;
    if (!p)
      return !1;
    if (p.indexOf("charset") === -1) {
      var d = t.charset(p);
      d && (p += "; charset=" + d.toLowerCase());
    }
    return p;
  }
  function o(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = r.exec(l), d = p && t.extensions[p[1].toLowerCase()];
    return !d || !d.length ? !1 : d[0];
  }
  function c(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = n("x." + l).toLowerCase().substr(1);
    return p && t.types[p] || !1;
  }
  function u(l, p) {
    var d = ["nginx", "apache", void 0, "iana"];
    Object.keys(e).forEach(function(m) {
      var h = e[m], y = h.extensions;
      if (!(!y || !y.length)) {
        l[m] = y;
        for (var g = 0; g < y.length; g++) {
          var _ = y[g];
          if (p[_]) {
            var R = d.indexOf(e[p[_]].source), P = d.indexOf(h.source);
            if (p[_] !== "application/octet-stream" && (R > P || R === P && p[_].substr(0, 12) === "application/"))
              continue;
          }
          p[_] = m;
        }
      }
    });
  }
})(Dd);
var Ov = Tv;
function Tv(t) {
  var e = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  e ? e(t) : setTimeout(t, 0);
}
var $l = Ov, Ud = Pv;
function Pv(t) {
  var e = !1;
  return $l(function() {
    e = !0;
  }), function(r, s) {
    e ? t(r, s) : $l(function() {
      t(r, s);
    });
  };
}
var zd = kv;
function kv(t) {
  Object.keys(t.jobs).forEach(Av.bind(t)), t.jobs = {};
}
function Av(t) {
  typeof this.jobs[t] == "function" && this.jobs[t]();
}
var Sl = Ud, Nv = zd, Md = jv;
function jv(t, e, n, r) {
  var s = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[s] = Iv(e, s, t[s], function(a, i) {
    s in n.jobs && (delete n.jobs[s], a ? Nv(n) : n.results[s] = i, r(a, n.results));
  });
}
function Iv(t, e, n, r) {
  var s;
  return t.length == 2 ? s = t(n, Sl(r)) : s = t(n, e, Sl(r)), s;
}
var qd = Cv;
function Cv(t, e) {
  var n = !Array.isArray(t), r = {
    index: 0,
    keyedList: n || e ? Object.keys(t) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(t).length : t.length
  };
  return e && r.keyedList.sort(n ? e : function(s, a) {
    return e(t[s], t[a]);
  }), r;
}
var Lv = zd, Fv = Ud, Bd = Dv;
function Dv(t) {
  Object.keys(this.jobs).length && (this.index = this.size, Lv(this), Fv(t)(null, this.results));
}
var Uv = Md, zv = qd, Mv = Bd, qv = Bv;
function Bv(t, e, n) {
  for (var r = zv(t); r.index < (r.keyedList || t).length; )
    Uv(t, e, r, function(s, a) {
      if (s) {
        n(s, a);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return Mv.bind(r, n);
}
var Ws = { exports: {} }, Rl = Md, Vv = qd, Gv = Bd;
Ws.exports = Hv;
Ws.exports.ascending = Vd;
Ws.exports.descending = Wv;
function Hv(t, e, n, r) {
  var s = Vv(t, n);
  return Rl(t, e, s, function a(i, o) {
    if (i) {
      r(i, o);
      return;
    }
    if (s.index++, s.index < (s.keyedList || t).length) {
      Rl(t, e, s, a);
      return;
    }
    r(null, s.results);
  }), Gv.bind(s, r);
}
function Vd(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Wv(t, e) {
  return -1 * Vd(t, e);
}
var Gd = Ws.exports, Kv = Gd, Jv = Xv;
function Xv(t, e, n) {
  return Kv(t, e, null, n);
}
var Yv = {
  parallel: qv,
  serial: Jv,
  serialOrdered: Gd
}, Hd = Object, Zv = Error, Qv = EvalError, ey = RangeError, ty = ReferenceError, ny = SyntaxError, qo = TypeError, ry = URIError, sy = Math.abs, ay = Math.floor, iy = Math.max, oy = Math.min, cy = Math.pow, ly = Math.round, uy = Number.isNaN || function(e) {
  return e !== e;
}, py = uy, dy = function(e) {
  return py(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, fy = Object.getOwnPropertyDescriptor, fs = fy;
if (fs)
  try {
    fs([], "length");
  } catch {
    fs = null;
  }
var Wd = fs, ms = Object.defineProperty || !1;
if (ms)
  try {
    ms({}, "a", { value: 1 });
  } catch {
    ms = !1;
  }
var my = ms, La, Ol;
function Kd() {
  return Ol || (Ol = 1, La = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var s = 42;
    e[n] = s;
    for (var a in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(e);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, n)
      );
      if (o.value !== s || o.enumerable !== !0)
        return !1;
    }
    return !0;
  }), La;
}
var Fa, Tl;
function hy() {
  if (Tl) return Fa;
  Tl = 1;
  var t = typeof Symbol < "u" && Symbol, e = Kd();
  return Fa = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, Fa;
}
var Da, Pl;
function Jd() {
  return Pl || (Pl = 1, Da = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Da;
}
var Ua, kl;
function Xd() {
  if (kl) return Ua;
  kl = 1;
  var t = Hd;
  return Ua = t.getPrototypeOf || null, Ua;
}
var vy = "Function.prototype.bind called on incompatible ", yy = Object.prototype.toString, gy = Math.max, xy = "[object Function]", Al = function(e, n) {
  for (var r = [], s = 0; s < e.length; s += 1)
    r[s] = e[s];
  for (var a = 0; a < n.length; a += 1)
    r[a + e.length] = n[a];
  return r;
}, by = function(e, n) {
  for (var r = [], s = n, a = 0; s < e.length; s += 1, a += 1)
    r[a] = e[s];
  return r;
}, _y = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, wy = function(e) {
  var n = this;
  if (typeof n != "function" || yy.apply(n) !== xy)
    throw new TypeError(vy + n);
  for (var r = by(arguments, 1), s, a = function() {
    if (this instanceof s) {
      var l = n.apply(
        this,
        Al(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      e,
      Al(r, arguments)
    );
  }, i = gy(0, n.length - r.length), o = [], c = 0; c < i; c++)
    o[c] = "$" + c;
  if (s = Function("binder", "return function (" + _y(o, ",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, s.prototype = new u(), u.prototype = null;
  }
  return s;
}, Ey = wy, Ks = Function.prototype.bind || Ey, za, Nl;
function Bo() {
  return Nl || (Nl = 1, za = Function.prototype.call), za;
}
var Ma, jl;
function Yd() {
  return jl || (jl = 1, Ma = Function.prototype.apply), Ma;
}
var qa, Il;
function $y() {
  return Il || (Il = 1, qa = typeof Reflect < "u" && Reflect && Reflect.apply), qa;
}
var Ba, Cl;
function Sy() {
  if (Cl) return Ba;
  Cl = 1;
  var t = Ks, e = Yd(), n = Bo(), r = $y();
  return Ba = r || t.call(n, e), Ba;
}
var Va, Ll;
function Ry() {
  if (Ll) return Va;
  Ll = 1;
  var t = Ks, e = qo, n = Bo(), r = Sy();
  return Va = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new e("a function is required");
    return r(t, n, a);
  }, Va;
}
var Ga, Fl;
function Oy() {
  if (Fl) return Ga;
  Fl = 1;
  var t = Ry(), e = Wd, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!n && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), s = Object, a = s.getPrototypeOf;
  return Ga = r && typeof r.get == "function" ? t([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(o) {
      return a(o == null ? o : s(o));
    }
  ) : !1, Ga;
}
var Ha, Dl;
function Ty() {
  if (Dl) return Ha;
  Dl = 1;
  var t = Jd(), e = Xd(), n = Oy();
  return Ha = t ? function(s) {
    return t(s);
  } : e ? function(s) {
    if (!s || typeof s != "object" && typeof s != "function")
      throw new TypeError("getProto: not an object");
    return e(s);
  } : n ? function(s) {
    return n(s);
  } : null, Ha;
}
var Py = Function.prototype.call, ky = Object.prototype.hasOwnProperty, Ay = Ks, Vo = Ay.call(Py, ky), se, Ny = Hd, jy = Zv, Iy = Qv, Cy = ey, Ly = ty, zn = ny, Nn = qo, Fy = ry, Dy = sy, Uy = ay, zy = iy, My = oy, qy = cy, By = ly, Vy = dy, Zd = Function, Wa = function(t) {
  try {
    return Zd('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, mr = Wd, Gy = my, Ka = function() {
  throw new Nn();
}, Hy = mr ? function() {
  try {
    return arguments.callee, Ka;
  } catch {
    try {
      return mr(arguments, "callee").get;
    } catch {
      return Ka;
    }
  }
}() : Ka, gn = hy()(), we = Ty(), Wy = Xd(), Ky = Jd(), Qd = Yd(), Or = Bo(), $n = {}, Jy = typeof Uint8Array > "u" || !we ? se : we(Uint8Array), an = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? se : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? se : ArrayBuffer,
  "%ArrayIteratorPrototype%": gn && we ? we([][Symbol.iterator]()) : se,
  "%AsyncFromSyncIteratorPrototype%": se,
  "%AsyncFunction%": $n,
  "%AsyncGenerator%": $n,
  "%AsyncGeneratorFunction%": $n,
  "%AsyncIteratorPrototype%": $n,
  "%Atomics%": typeof Atomics > "u" ? se : Atomics,
  "%BigInt%": typeof BigInt > "u" ? se : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? se : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? se : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? se : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": jy,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Iy,
  "%Float16Array%": typeof Float16Array > "u" ? se : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? se : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? se : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? se : FinalizationRegistry,
  "%Function%": Zd,
  "%GeneratorFunction%": $n,
  "%Int8Array%": typeof Int8Array > "u" ? se : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? se : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? se : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": gn && we ? we(we([][Symbol.iterator]())) : se,
  "%JSON%": typeof JSON == "object" ? JSON : se,
  "%Map%": typeof Map > "u" ? se : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !gn || !we ? se : we((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Ny,
  "%Object.getOwnPropertyDescriptor%": mr,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? se : Promise,
  "%Proxy%": typeof Proxy > "u" ? se : Proxy,
  "%RangeError%": Cy,
  "%ReferenceError%": Ly,
  "%Reflect%": typeof Reflect > "u" ? se : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? se : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !gn || !we ? se : we((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? se : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": gn && we ? we(""[Symbol.iterator]()) : se,
  "%Symbol%": gn ? Symbol : se,
  "%SyntaxError%": zn,
  "%ThrowTypeError%": Hy,
  "%TypedArray%": Jy,
  "%TypeError%": Nn,
  "%Uint8Array%": typeof Uint8Array > "u" ? se : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? se : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? se : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? se : Uint32Array,
  "%URIError%": Fy,
  "%WeakMap%": typeof WeakMap > "u" ? se : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? se : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? se : WeakSet,
  "%Function.prototype.call%": Or,
  "%Function.prototype.apply%": Qd,
  "%Object.defineProperty%": Gy,
  "%Object.getPrototypeOf%": Wy,
  "%Math.abs%": Dy,
  "%Math.floor%": Uy,
  "%Math.max%": zy,
  "%Math.min%": My,
  "%Math.pow%": qy,
  "%Math.round%": By,
  "%Math.sign%": Vy,
  "%Reflect.getPrototypeOf%": Ky
};
if (we)
  try {
    null.error;
  } catch (t) {
    var Xy = we(we(t));
    an["%Error.prototype%"] = Xy;
  }
var Yy = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Wa("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Wa("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Wa("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && we && (n = we(s.prototype));
  }
  return an[e] = n, n;
}, Ul = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Tr = Ks, ks = Vo, Zy = Tr.call(Or, Array.prototype.concat), Qy = Tr.call(Qd, Array.prototype.splice), zl = Tr.call(Or, String.prototype.replace), As = Tr.call(Or, String.prototype.slice), eg = Tr.call(Or, RegExp.prototype.exec), tg = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ng = /\\(\\)?/g, rg = function(e) {
  var n = As(e, 0, 1), r = As(e, -1);
  if (n === "%" && r !== "%")
    throw new zn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new zn("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return zl(e, tg, function(a, i, o, c) {
    s[s.length] = o ? zl(c, ng, "$1") : i || a;
  }), s;
}, sg = function(e, n) {
  var r = e, s;
  if (ks(Ul, r) && (s = Ul[r], r = "%" + s[0] + "%"), ks(an, r)) {
    var a = an[r];
    if (a === $n && (a = Yy(r)), typeof a > "u" && !n)
      throw new Nn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: r,
      value: a
    };
  }
  throw new zn("intrinsic " + e + " does not exist!");
}, ag = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Nn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Nn('"allowMissing" argument must be a boolean');
  if (eg(/^%?[^%]*%?$/, e) === null)
    throw new zn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = rg(e), s = r.length > 0 ? r[0] : "", a = sg("%" + s + "%", n), i = a.name, o = a.value, c = !1, u = a.alias;
  u && (s = u[0], Qy(r, Zy([0, 1], u)));
  for (var l = 1, p = !0; l < r.length; l += 1) {
    var d = r[l], f = As(d, 0, 1), m = As(d, -1);
    if ((f === '"' || f === "'" || f === "`" || m === '"' || m === "'" || m === "`") && f !== m)
      throw new zn("property names with quotes must have matching quotes");
    if ((d === "constructor" || !p) && (c = !0), s += "." + d, i = "%" + s + "%", ks(an, i))
      o = an[i];
    else if (o != null) {
      if (!(d in o)) {
        if (!n)
          throw new Nn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (mr && l + 1 >= r.length) {
        var h = mr(o, d);
        p = !!h, p && "get" in h && !("originalValue" in h.get) ? o = h.get : o = o[d];
      } else
        p = ks(o, d), o = o[d];
      p && !c && (an[i] = o);
    }
  }
  return o;
}, Ja, Ml;
function ig() {
  if (Ml) return Ja;
  Ml = 1;
  var t = Kd();
  return Ja = function() {
    return t() && !!Symbol.toStringTag;
  }, Ja;
}
var og = ag, ql = og("%Object.defineProperty%", !0), cg = ig()(), lg = Vo, ug = qo, Lr = cg ? Symbol.toStringTag : null, pg = function(e, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, s = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof s < "u" && typeof s != "boolean")
    throw new ug("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Lr && (r || !lg(e, Lr)) && (ql ? ql(e, Lr, {
    configurable: !s,
    enumerable: !1,
    value: n,
    writable: !1
  }) : e[Lr] = n);
}, dg = function(t, e) {
  return Object.keys(e).forEach(function(n) {
    t[n] = t[n] || e[n];
  }), t;
}, Go = $v, fg = qt, Xa = Et, mg = xr, hg = Bt, vg = br.parse, yg = mn, gg = xe.Stream, xg = _r, Ya = Dd, bg = Yv, _g = pg, Ut = Vo, fo = dg;
function ae(t) {
  if (!(this instanceof ae))
    return new ae(t);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], Go.call(this), t = t || {};
  for (var e in t)
    this[e] = t[e];
}
fg.inherits(ae, Go);
ae.LINE_BREAK = `\r
`;
ae.DEFAULT_CONTENT_TYPE = "application/octet-stream";
ae.prototype.append = function(t, e, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = Go.prototype.append.bind(this);
  if ((typeof e == "number" || e == null) && (e = String(e)), Array.isArray(e)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var s = this._multiPartHeader(t, e, n), a = this._multiPartFooter();
  r(s), r(e), r(a), this._trackLength(s, e, n);
};
ae.prototype._trackLength = function(t, e, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(e) ? r = e.length : typeof e == "string" && (r = Buffer.byteLength(e)), this._valueLength += r, this._overheadLength += Buffer.byteLength(t) + ae.LINE_BREAK.length, !(!e || !e.path && !(e.readable && Ut(e, "httpVersion")) && !(e instanceof gg)) && (n.knownLength || this._valuesToMeasure.push(e));
};
ae.prototype._lengthRetriever = function(t, e) {
  Ut(t, "fd") ? t.end != null && t.end != 1 / 0 && t.start != null ? e(null, t.end + 1 - (t.start ? t.start : 0)) : yg.stat(t.path, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    var s = r.size - (t.start ? t.start : 0);
    e(null, s);
  }) : Ut(t, "httpVersion") ? e(null, Number(t.headers["content-length"])) : Ut(t, "httpModule") ? (t.on("response", function(n) {
    t.pause(), e(null, Number(n.headers["content-length"]));
  }), t.resume()) : e("Unknown stream");
};
ae.prototype._multiPartHeader = function(t, e, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(e, n), s = this._getContentType(e, n), a = "", i = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + t + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(s || [])
  };
  typeof n.header == "object" && fo(i, n.header);
  var o;
  for (var c in i)
    if (Ut(i, c)) {
      if (o = i[c], o == null)
        continue;
      Array.isArray(o) || (o = [o]), o.length && (a += c + ": " + o.join("; ") + ae.LINE_BREAK);
    }
  return "--" + this.getBoundary() + ae.LINE_BREAK + a + ae.LINE_BREAK;
};
ae.prototype._getContentDisposition = function(t, e) {
  var n;
  if (typeof e.filepath == "string" ? n = Xa.normalize(e.filepath).replace(/\\/g, "/") : e.filename || t && (t.name || t.path) ? n = Xa.basename(e.filename || t && (t.name || t.path)) : t && t.readable && Ut(t, "httpVersion") && (n = Xa.basename(t.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
ae.prototype._getContentType = function(t, e) {
  var n = e.contentType;
  return !n && t && t.name && (n = Ya.lookup(t.name)), !n && t && t.path && (n = Ya.lookup(t.path)), !n && t && t.readable && Ut(t, "httpVersion") && (n = t.headers["content-type"]), !n && (e.filepath || e.filename) && (n = Ya.lookup(e.filepath || e.filename)), !n && t && typeof t == "object" && (n = ae.DEFAULT_CONTENT_TYPE), n;
};
ae.prototype._multiPartFooter = function() {
  return (function(t) {
    var e = ae.LINE_BREAK, n = this._streams.length === 0;
    n && (e += this._lastBoundary()), t(e);
  }).bind(this);
};
ae.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + ae.LINE_BREAK;
};
ae.prototype.getHeaders = function(t) {
  var e, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (e in t)
    Ut(t, e) && (n[e.toLowerCase()] = t[e]);
  return n;
};
ae.prototype.setBoundary = function(t) {
  if (typeof t != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = t;
};
ae.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
ae.prototype.getBuffer = function() {
  for (var t = new Buffer.alloc(0), e = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? t = Buffer.concat([t, this._streams[n]]) : t = Buffer.concat([t, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, e.length + 2) !== e) && (t = Buffer.concat([t, Buffer.from(ae.LINE_BREAK)])));
  return Buffer.concat([t, Buffer.from(this._lastBoundary())]);
};
ae.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + xg.randomBytes(12).toString("hex");
};
ae.prototype.getLengthSync = function() {
  var t = this._overheadLength + this._valueLength;
  return this._streams.length && (t += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), t;
};
ae.prototype.hasKnownLength = function() {
  var t = !0;
  return this._valuesToMeasure.length && (t = !1), t;
};
ae.prototype.getLength = function(t) {
  var e = this._overheadLength + this._valueLength;
  if (this._streams.length && (e += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(t.bind(this, null, e));
    return;
  }
  bg.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    r.forEach(function(s) {
      e += s;
    }), t(null, e);
  });
};
ae.prototype.submit = function(t, e) {
  var n, r, s = { method: "post" };
  return typeof t == "string" ? (t = vg(t), r = fo({
    port: t.port,
    path: t.pathname,
    host: t.hostname,
    protocol: t.protocol
  }, s)) : (r = fo(t, s), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(t.headers), r.protocol === "https:" ? n = hg.request(r) : n = mg.request(r), this.getLength((function(a, i) {
    if (a && a !== "Unknown stream") {
      this._error(a);
      return;
    }
    if (i && n.setHeader("Content-Length", i), this.pipe(n), e) {
      var o, c = function(u, l) {
        return n.removeListener("error", c), n.removeListener("response", o), e.call(this, u, l);
      };
      o = c.bind(this, null), n.on("error", c), n.on("response", o);
    }
  }).bind(this)), n;
};
ae.prototype._error = function(t) {
  this.error || (this.error = t, this.pause(), this.emit("error", t));
};
ae.prototype.toString = function() {
  return "[object FormData]";
};
_g(ae.prototype, "FormData");
var wg = ae;
const ef = /* @__PURE__ */ Vn(wg);
function mo(t) {
  return E.isPlainObject(t) || E.isArray(t);
}
function tf(t) {
  return E.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Bl(t, e, n) {
  return t ? t.concat(e).map(function(s, a) {
    return s = tf(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function Eg(t) {
  return E.isArray(t) && !t.some(mo);
}
const $g = E.toFlatObject(E, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Js(t, e, n) {
  if (!E.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (ef || FormData)(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, y) {
    return !E.isUndefined(y[h]);
  });
  const r = n.metaTokens, s = n.visitor || l, a = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(e);
  if (!E.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (E.isDate(m))
      return m.toISOString();
    if (E.isBoolean(m))
      return m.toString();
    if (!c && E.isBlob(m))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(m) || E.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, h, y) {
    let g = m;
    if (m && !y && typeof m == "object") {
      if (E.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), m = JSON.stringify(m);
      else if (E.isArray(m) && Eg(m) || (E.isFileList(m) || E.endsWith(h, "[]")) && (g = E.toArray(m)))
        return h = tf(h), g.forEach(function(R, P) {
          !(E.isUndefined(R) || R === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Bl([h], P, a) : i === null ? h : h + "[]",
            u(R)
          );
        }), !1;
    }
    return mo(m) ? !0 : (e.append(Bl(y, h, a), u(m)), !1);
  }
  const p = [], d = Object.assign($g, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: mo
  });
  function f(m, h) {
    if (!E.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(m), E.forEach(m, function(g, _) {
        (!(E.isUndefined(g) || g === null) && s.call(
          e,
          g,
          E.isString(_) ? _.trim() : _,
          h,
          d
        )) === !0 && f(g, h ? h.concat(_) : [_]);
      }), p.pop();
    }
  }
  if (!E.isObject(t))
    throw new TypeError("data must be an object");
  return f(t), e;
}
function Vl(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function nf(t, e) {
  this._pairs = [], t && Js(t, this, e);
}
const rf = nf.prototype;
rf.append = function(e, n) {
  this._pairs.push([e, n]);
};
rf.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Vl);
  } : Vl;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Sg(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ho(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Sg;
  E.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let a;
  if (s ? a = s(e, n) : a = E.isURLSearchParams(e) ? e.toString() : new nf(e, n).toString(r), a) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Gl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    E.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Wo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rg = br.URLSearchParams, Za = "abcdefghijklmnopqrstuvwxyz", Hl = "0123456789", sf = {
  DIGIT: Hl,
  ALPHA: Za,
  ALPHA_DIGIT: Za + Za.toUpperCase() + Hl
}, Og = (t = 16, e = sf.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e, s = new Uint32Array(t);
  _r.randomFillSync(s);
  for (let a = 0; a < t; a++)
    n += e[s[a] % r];
  return n;
}, Tg = {
  isNode: !0,
  classes: {
    URLSearchParams: Rg,
    FormData: ef,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: sf,
  generateString: Og,
  protocols: ["http", "https", "file", "data"]
}, Ko = typeof window < "u" && typeof document < "u", ho = typeof navigator == "object" && navigator || void 0, Pg = Ko && (!ho || ["ReactNative", "NativeScript", "NS"].indexOf(ho.product) < 0), kg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ag = Ko && window.location.href || "http://localhost", Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ko,
  hasStandardBrowserEnv: Pg,
  hasStandardBrowserWebWorkerEnv: kg,
  navigator: ho,
  origin: Ag
}, Symbol.toStringTag, { value: "Module" })), ve = {
  ...Ng,
  ...Tg
};
function jg(t, e) {
  return Js(t, new ve.classes.URLSearchParams(), {
    visitor: function(n, r, s, a) {
      return ve.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Ig(t) {
  return E.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Cg(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], e[a] = t[a];
  return e;
}
function af(t) {
  function e(n, r, s, a) {
    let i = n[a++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), c = a >= n.length;
    return i = !i && E.isArray(s) ? s.length : i, c ? (E.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !o) : ((!s[i] || !E.isObject(s[i])) && (s[i] = []), e(n, r, s[i], a) && E.isArray(s[i]) && (s[i] = Cg(s[i])), !o);
  }
  if (E.isFormData(t) && E.isFunction(t.entries)) {
    const n = {};
    return E.forEachEntry(t, (r, s) => {
      e(Ig(r), s, n, 0);
    }), n;
  }
  return null;
}
function Lg(t, e, n) {
  if (E.isString(t))
    try {
      return (e || JSON.parse)(t), E.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Pr = {
  transitional: Wo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = E.isObject(e);
    if (a && E.isHTMLForm(e) && (e = new FormData(e)), E.isFormData(e))
      return s ? JSON.stringify(af(e)) : e;
    if (E.isArrayBuffer(e) || E.isBuffer(e) || E.isStream(e) || E.isFile(e) || E.isBlob(e) || E.isReadableStream(e))
      return e;
    if (E.isArrayBufferView(e))
      return e.buffer;
    if (E.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let o;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return jg(e, this.formSerializer).toString();
      if ((o = E.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Js(
          o ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), Lg(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Pr.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (E.isResponse(e) || E.isReadableStream(e))
      return e;
    if (e && E.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (o) {
        if (i)
          throw o.name === "SyntaxError" ? q.from(o, q.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ve.classes.FormData,
    Blob: ve.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Pr.headers[t] = {};
});
const Fg = E.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Dg = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && Fg[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Wl = Symbol("internals");
function Qn(t) {
  return t && String(t).trim().toLowerCase();
}
function hs(t) {
  return t === !1 || t == null ? t : E.isArray(t) ? t.map(hs) : String(t);
}
function Ug(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const zg = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Qa(t, e, n, r, s) {
  if (E.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!E.isString(e)) {
    if (E.isString(r))
      return e.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(e);
  }
}
function Mg(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function qg(t, e) {
  const n = E.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, a, i) {
        return this[r].call(this, e, s, a, i);
      },
      configurable: !0
    });
  });
}
let Oe = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function a(o, c, u) {
      const l = Qn(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = E.findKey(s, l);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || c] = hs(o));
    }
    const i = (o, c) => E.forEach(o, (u, l) => a(u, l, c));
    if (E.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (E.isString(e) && (e = e.trim()) && !zg(e))
      i(Dg(e), n);
    else if (E.isObject(e) && E.isIterable(e)) {
      let o = {}, c, u;
      for (const l of e) {
        if (!E.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        o[u = l[0]] = (c = o[u]) ? E.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      i(o, n);
    } else
      e != null && a(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = Qn(e), e) {
      const r = E.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ug(s);
        if (E.isFunction(n))
          return n.call(this, s, r);
        if (E.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Qn(e), e) {
      const r = E.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Qa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function a(i) {
      if (i = Qn(i), i) {
        const o = E.findKey(r, i);
        o && (!n || Qa(r, r[o], o, n)) && (delete r[o], s = !0);
      }
    }
    return E.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!e || Qa(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return E.forEach(this, (s, a) => {
      const i = E.findKey(r, a);
      if (i) {
        n[i] = hs(s), delete n[a];
        return;
      }
      const o = e ? Mg(a) : String(a).trim();
      o !== a && delete n[a], n[o] = hs(s), r[o] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && E.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Wl] = this[Wl] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const o = Qn(i);
      r[o] || (qg(s, i), r[o] = !0);
    }
    return E.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
Oe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Oe.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
E.freezeMethods(Oe);
function ei(t, e) {
  const n = this || Pr, r = e || n, s = Oe.from(r.headers);
  let a = r.data;
  return E.forEach(t, function(o) {
    a = o.call(n, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function of(t) {
  return !!(t && t.__CANCEL__);
}
function Mt(t, e, n) {
  q.call(this, t ?? "canceled", q.ERR_CANCELED, e, n), this.name = "CanceledError";
}
E.inherits(Mt, q, {
  __CANCEL__: !0
});
function Rn(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new q(
    "Request failed with status code " + n.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Bg(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Vg(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Jo(t, e, n) {
  let r = !Bg(e);
  return t && (r || n == !1) ? Vg(t, e) : e;
}
var cf = {}, Gg = br.parse, Hg = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, Wg = String.prototype.endsWith || function(t) {
  return t.length <= this.length && this.indexOf(t, this.length - t.length) !== -1;
};
function Kg(t) {
  var e = typeof t == "string" ? Gg(t) : t || {}, n = e.protocol, r = e.host, s = e.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), s = parseInt(s) || Hg[n] || 0, !Jg(r, s)))
    return "";
  var a = On("npm_config_" + n + "_proxy") || On(n + "_proxy") || On("npm_config_proxy") || On("all_proxy");
  return a && a.indexOf("://") === -1 && (a = n + "://" + a), a;
}
function Jg(t, e) {
  var n = (On("npm_config_no_proxy") || On("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var s = r.match(/^(.+):(\d+)$/), a = s ? s[1] : r, i = s ? parseInt(s[2]) : 0;
    return i && i !== e ? !0 : /^[.*]/.test(a) ? (a.charAt(0) === "*" && (a = a.slice(1)), !Wg.call(t, a)) : t !== a;
  }) : !0;
}
function On(t) {
  return process.env[t.toLowerCase()] || process.env[t.toUpperCase()] || "";
}
cf.getProxyForUrl = Kg;
var Xo = { exports: {} }, Fr = { exports: {} }, Dr = { exports: {} }, ti, Kl;
function Xg() {
  if (Kl) return ti;
  Kl = 1;
  var t = 1e3, e = t * 60, n = e * 60, r = n * 24, s = r * 7, a = r * 365.25;
  ti = function(l, p) {
    p = p || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return i(l);
    if (d === "number" && isFinite(l))
      return p.long ? c(l) : o(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function i(l) {
    if (l = String(l), !(l.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (p) {
        var d = parseFloat(p[1]), f = (p[2] || "ms").toLowerCase();
        switch (f) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * a;
          case "weeks":
          case "week":
          case "w":
            return d * s;
          case "days":
          case "day":
          case "d":
            return d * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function o(l) {
    var p = Math.abs(l);
    return p >= r ? Math.round(l / r) + "d" : p >= n ? Math.round(l / n) + "h" : p >= e ? Math.round(l / e) + "m" : p >= t ? Math.round(l / t) + "s" : l + "ms";
  }
  function c(l) {
    var p = Math.abs(l);
    return p >= r ? u(l, p, r, "day") : p >= n ? u(l, p, n, "hour") : p >= e ? u(l, p, e, "minute") : p >= t ? u(l, p, t, "second") : l + " ms";
  }
  function u(l, p, d, f) {
    var m = p >= d * 1.5;
    return Math.round(l / d) + " " + f + (m ? "s" : "");
  }
  return ti;
}
var ni, Jl;
function lf() {
  if (Jl) return ni;
  Jl = 1;
  function t(e) {
    r.debug = r, r.default = r, r.coerce = u, r.disable = o, r.enable = a, r.enabled = c, r.humanize = Xg(), r.destroy = l, Object.keys(e).forEach((p) => {
      r[p] = e[p];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(p) {
      let d = 0;
      for (let f = 0; f < p.length; f++)
        d = (d << 5) - d + p.charCodeAt(f), d |= 0;
      return r.colors[Math.abs(d) % r.colors.length];
    }
    r.selectColor = n;
    function r(p) {
      let d, f = null, m, h;
      function y(...g) {
        if (!y.enabled)
          return;
        const _ = y, R = Number(/* @__PURE__ */ new Date()), P = R - (d || R);
        _.diff = P, _.prev = d, _.curr = R, d = R, g[0] = r.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
        let k = 0;
        g[0] = g[0].replace(/%([a-zA-Z%])/g, (B, W) => {
          if (B === "%%")
            return "%";
          k++;
          const oe = r.formatters[W];
          if (typeof oe == "function") {
            const fe = g[k];
            B = oe.call(_, fe), g.splice(k, 1), k--;
          }
          return B;
        }), r.formatArgs.call(_, g), (_.log || r.log).apply(_, g);
      }
      return y.namespace = p, y.useColors = r.useColors(), y.color = r.selectColor(p), y.extend = s, y.destroy = r.destroy, Object.defineProperty(y, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => f !== null ? f : (m !== r.namespaces && (m = r.namespaces, h = r.enabled(p)), h),
        set: (g) => {
          f = g;
        }
      }), typeof r.init == "function" && r.init(y), y;
    }
    function s(p, d) {
      const f = r(this.namespace + (typeof d > "u" ? ":" : d) + p);
      return f.log = this.log, f;
    }
    function a(p) {
      r.save(p), r.namespaces = p, r.names = [], r.skips = [];
      const d = (typeof p == "string" ? p : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const f of d)
        f[0] === "-" ? r.skips.push(f.slice(1)) : r.names.push(f);
    }
    function i(p, d) {
      let f = 0, m = 0, h = -1, y = 0;
      for (; f < p.length; )
        if (m < d.length && (d[m] === p[f] || d[m] === "*"))
          d[m] === "*" ? (h = m, y = f, m++) : (f++, m++);
        else if (h !== -1)
          m = h + 1, y++, f = y;
        else
          return !1;
      for (; m < d.length && d[m] === "*"; )
        m++;
      return m === d.length;
    }
    function o() {
      const p = [
        ...r.names,
        ...r.skips.map((d) => "-" + d)
      ].join(",");
      return r.enable(""), p;
    }
    function c(p) {
      for (const d of r.skips)
        if (i(p, d))
          return !1;
      for (const d of r.names)
        if (i(p, d))
          return !0;
      return !1;
    }
    function u(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return ni = t, ni;
}
var Xl;
function Yg() {
  return Xl || (Xl = 1, function(t, e) {
    e.formatArgs = r, e.save = s, e.load = a, e.useColors = n, e.storage = i(), e.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function r(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let l = 0, p = 0;
      c[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (l++, d === "%c" && (p = l));
      }), c.splice(p, 0, u);
    }
    e.log = console.debug || console.log || (() => {
    });
    function s(c) {
      try {
        c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function a() {
      let c;
      try {
        c = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
    }
    function i() {
      try {
        return localStorage;
      } catch {
      }
    }
    t.exports = lf()(e);
    const { formatters: o } = t.exports;
    o.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  }(Dr, Dr.exports)), Dr.exports;
}
var Ur = { exports: {} }, Yl;
function Zg() {
  return Yl || (Yl = 1, function(t, e) {
    const n = $h, r = qt;
    e.init = l, e.log = o, e.formatArgs = a, e.save = c, e.load = u, e.useColors = s, e.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), e.colors = [6, 2, 3, 4, 5, 1];
    try {
      const d = require("supports-color");
      d && (d.stderr || d).level >= 2 && (e.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    e.inspectOpts = Object.keys(process.env).filter((d) => /^debug_/i.test(d)).reduce((d, f) => {
      const m = f.substring(6).toLowerCase().replace(/_([a-z])/g, (y, g) => g.toUpperCase());
      let h = process.env[f];
      return /^(yes|on|true|enabled)$/i.test(h) ? h = !0 : /^(no|off|false|disabled)$/i.test(h) ? h = !1 : h === "null" ? h = null : h = Number(h), d[m] = h, d;
    }, {});
    function s() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function a(d) {
      const { namespace: f, useColors: m } = this;
      if (m) {
        const h = this.color, y = "\x1B[3" + (h < 8 ? h : "8;5;" + h), g = `  ${y};1m${f} \x1B[0m`;
        d[0] = g + d[0].split(`
`).join(`
` + g), d.push(y + "m+" + t.exports.humanize(this.diff) + "\x1B[0m");
      } else
        d[0] = i() + f + " " + d[0];
    }
    function i() {
      return e.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function o(...d) {
      return process.stderr.write(r.formatWithOptions(e.inspectOpts, ...d) + `
`);
    }
    function c(d) {
      d ? process.env.DEBUG = d : delete process.env.DEBUG;
    }
    function u() {
      return process.env.DEBUG;
    }
    function l(d) {
      d.inspectOpts = {};
      const f = Object.keys(e.inspectOpts);
      for (let m = 0; m < f.length; m++)
        d.inspectOpts[f[m]] = e.inspectOpts[f[m]];
    }
    t.exports = lf()(e);
    const { formatters: p } = t.exports;
    p.o = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts).split(`
`).map((f) => f.trim()).join(" ");
    }, p.O = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts);
    };
  }(Ur, Ur.exports)), Ur.exports;
}
var Zl;
function Qg() {
  return Zl || (Zl = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Fr.exports = Yg() : Fr.exports = Zg()), Fr.exports;
}
var er, ex = function() {
  if (!er) {
    try {
      er = Qg()("follow-redirects");
    } catch {
    }
    typeof er != "function" && (er = function() {
    });
  }
  er.apply(null, arguments);
}, kr = br, hr = kr.URL, tx = xr, nx = Bt, Yo = xe.Writable, Zo = Eh, uf = ex;
(function() {
  var e = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = ln(Error.captureStackTrace);
  !e && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var Qo = !1;
try {
  Zo(new hr(""));
} catch (t) {
  Qo = t.code === "ERR_INVALID_URL";
}
var rx = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash"
], ec = ["abort", "aborted", "connect", "error", "socket", "timeout"], tc = /* @__PURE__ */ Object.create(null);
ec.forEach(function(t) {
  tc[t] = function(e, n, r) {
    this._redirectable.emit(t, e, n, r);
  };
});
var vo = Ar(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), yo = Ar(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), sx = Ar(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  yo
), ax = Ar(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), ix = Ar(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), ox = Yo.prototype.destroy || df;
function Ue(t, e) {
  Yo.call(this), this._sanitizeOptions(t), this._options = t, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], e && this.on("response", e);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (s) {
      n.emit("error", s instanceof yo ? s : new yo({ cause: s }));
    }
  }, this._performRequest();
}
Ue.prototype = Object.create(Yo.prototype);
Ue.prototype.abort = function() {
  rc(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
Ue.prototype.destroy = function(t) {
  return rc(this._currentRequest, t), ox.call(this, t), this;
};
Ue.prototype.write = function(t, e, n) {
  if (this._ending)
    throw new ix();
  if (!on(t) && !ux(t))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (ln(e) && (n = e, e = null), t.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + t.length <= this._options.maxBodyLength ? (this._requestBodyLength += t.length, this._requestBodyBuffers.push({ data: t, encoding: e }), this._currentRequest.write(t, e, n)) : (this.emit("error", new ax()), this.abort());
};
Ue.prototype.end = function(t, e, n) {
  if (ln(t) ? (n = t, t = e = null) : ln(e) && (n = e, e = null), !t)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, s = this._currentRequest;
    this.write(t, e, function() {
      r._ended = !0, s.end(null, null, n);
    }), this._ending = !0;
  }
};
Ue.prototype.setHeader = function(t, e) {
  this._options.headers[t] = e, this._currentRequest.setHeader(t, e);
};
Ue.prototype.removeHeader = function(t) {
  delete this._options.headers[t], this._currentRequest.removeHeader(t);
};
Ue.prototype.setTimeout = function(t, e) {
  var n = this;
  function r(i) {
    i.setTimeout(t), i.removeListener("timeout", i.destroy), i.addListener("timeout", i.destroy);
  }
  function s(i) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), a();
    }, t), r(i);
  }
  function a() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", a), n.removeListener("error", a), n.removeListener("response", a), n.removeListener("close", a), e && n.removeListener("timeout", e), n.socket || n._currentRequest.removeListener("socket", s);
  }
  return e && this.on("timeout", e), this.socket ? s(this.socket) : this._currentRequest.once("socket", s), this.on("socket", r), this.on("abort", a), this.on("error", a), this.on("response", a), this.on("close", a), this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(t) {
  Ue.prototype[t] = function(e, n) {
    return this._currentRequest[t](e, n);
  };
});
["aborted", "connection", "socket"].forEach(function(t) {
  Object.defineProperty(Ue.prototype, t, {
    get: function() {
      return this._currentRequest[t];
    }
  });
});
Ue.prototype._sanitizeOptions = function(t) {
  if (t.headers || (t.headers = {}), t.host && (t.hostname || (t.hostname = t.host), delete t.host), !t.pathname && t.path) {
    var e = t.path.indexOf("?");
    e < 0 ? t.pathname = t.path : (t.pathname = t.path.substring(0, e), t.search = t.path.substring(e));
  }
};
Ue.prototype._performRequest = function() {
  var t = this._options.protocol, e = this._options.nativeProtocols[t];
  if (!e)
    throw new TypeError("Unsupported protocol " + t);
  if (this._options.agents) {
    var n = t.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var r = this._currentRequest = e.request(this._options, this._onNativeResponse);
  r._redirectable = this;
  for (var s of ec)
    r.on(s, tc[s]);
  if (this._currentUrl = /^\//.test(this._options.path) ? kr.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var a = 0, i = this, o = this._requestBodyBuffers;
    (function c(u) {
      if (r === i._currentRequest)
        if (u)
          i.emit("error", u);
        else if (a < o.length) {
          var l = o[a++];
          r.finished || r.write(l.data, l.encoding, c);
        } else i._ended && r.end();
    })();
  }
};
Ue.prototype._processResponse = function(t) {
  var e = t.statusCode;
  this._options.trackRedirects && this._redirects.push({
    url: this._currentUrl,
    headers: t.headers,
    statusCode: e
  });
  var n = t.headers.location;
  if (!n || this._options.followRedirects === !1 || e < 300 || e >= 400) {
    t.responseUrl = this._currentUrl, t.redirects = this._redirects, this.emit("response", t), this._requestBodyBuffers = [];
    return;
  }
  if (rc(this._currentRequest), t.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new sx();
  var r, s = this._options.beforeRedirect;
  s && (r = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: t.req.getHeader("host")
  }, this._options.headers));
  var a = this._options.method;
  ((e === 301 || e === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], ri(/^content-/i, this._options.headers));
  var i = ri(/^host$/i, this._options.headers), o = nc(this._currentUrl), c = i || o.host, u = /^\w+:/.test(n) ? this._currentUrl : kr.format(Object.assign(o, { host: c })), l = cx(n, u);
  if (uf("redirecting to", l.href), this._isRedirect = !0, go(l, this._options), (l.protocol !== o.protocol && l.protocol !== "https:" || l.host !== c && !lx(l.host, c)) && ri(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), ln(s)) {
    var p = {
      headers: t.headers,
      statusCode: e
    }, d = {
      url: u,
      method: a,
      headers: r
    };
    s(this._options, p, d), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function pf(t) {
  var e = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(t).forEach(function(r) {
    var s = r + ":", a = n[s] = t[r], i = e[r] = Object.create(a);
    function o(u, l, p) {
      return px(u) ? u = go(u) : on(u) ? u = go(nc(u)) : (p = l, l = ff(u), u = { protocol: s }), ln(l) && (p = l, l = null), l = Object.assign({
        maxRedirects: e.maxRedirects,
        maxBodyLength: e.maxBodyLength
      }, u, l), l.nativeProtocols = n, !on(l.host) && !on(l.hostname) && (l.hostname = "::1"), Zo.equal(l.protocol, s, "protocol mismatch"), uf("options", l), new Ue(l, p);
    }
    function c(u, l, p) {
      var d = i.request(u, l, p);
      return d.end(), d;
    }
    Object.defineProperties(i, {
      request: { value: o, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: c, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), e;
}
function df() {
}
function nc(t) {
  var e;
  if (Qo)
    e = new hr(t);
  else if (e = ff(kr.parse(t)), !on(e.protocol))
    throw new vo({ input: t });
  return e;
}
function cx(t, e) {
  return Qo ? new hr(t, e) : nc(kr.resolve(e, t));
}
function ff(t) {
  if (/^\[/.test(t.hostname) && !/^\[[:0-9a-f]+\]$/i.test(t.hostname))
    throw new vo({ input: t.href || t });
  if (/^\[/.test(t.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(t.host))
    throw new vo({ input: t.href || t });
  return t;
}
function go(t, e) {
  var n = e || {};
  for (var r of rx)
    n[r] = t[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function ri(t, e) {
  var n;
  for (var r in e)
    t.test(r) && (n = e[r], delete e[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Ar(t, e, n) {
  function r(s) {
    ln(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, s || {}), this.code = t, this.message = this.cause ? e + ": " + this.cause.message : e;
  }
  return r.prototype = new (n || Error)(), Object.defineProperties(r.prototype, {
    constructor: {
      value: r,
      enumerable: !1
    },
    name: {
      value: "Error [" + t + "]",
      enumerable: !1
    }
  }), r;
}
function rc(t, e) {
  for (var n of ec)
    t.removeListener(n, tc[n]);
  t.on("error", df), t.destroy(e);
}
function lx(t, e) {
  Zo(on(t) && on(e));
  var n = t.length - e.length - 1;
  return n > 0 && t[n] === "." && t.endsWith(e);
}
function on(t) {
  return typeof t == "string" || t instanceof String;
}
function ln(t) {
  return typeof t == "function";
}
function ux(t) {
  return typeof t == "object" && "length" in t;
}
function px(t) {
  return hr && t instanceof hr;
}
Xo.exports = pf({ http: tx, https: nx });
Xo.exports.wrap = pf;
var dx = Xo.exports;
const fx = /* @__PURE__ */ Vn(dx), Ns = "1.13.2";
function mf(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
const mx = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function hx(t, e, n) {
  const r = n && n.Blob || ve.classes.Blob, s = mf(t);
  if (e === void 0 && r && (e = !0), s === "data") {
    t = s.length ? t.slice(s.length + 1) : t;
    const a = mx.exec(t);
    if (!a)
      throw new q("Invalid URL", q.ERR_INVALID_URL);
    const i = a[1], o = a[2], c = a[3], u = Buffer.from(decodeURIComponent(c), o ? "base64" : "utf8");
    if (e) {
      if (!r)
        throw new q("Blob is not supported", q.ERR_NOT_SUPPORT);
      return new r([u], { type: i });
    }
    return u;
  }
  throw new q("Unsupported protocol " + s, q.ERR_NOT_SUPPORT);
}
const si = Symbol("internals");
class Ql extends xe.Transform {
  constructor(e) {
    e = E.toFlatObject(e, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, s) => !E.isUndefined(s[r])), super({
      readableHighWaterMark: e.chunkSize
    });
    const n = this[si] = {
      timeWindow: e.timeWindow,
      chunkSize: e.chunkSize,
      maxRate: e.maxRate,
      minChunkSize: e.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (r) => {
      r === "progress" && (n.isCaptured || (n.isCaptured = !0));
    });
  }
  _read(e) {
    const n = this[si];
    return n.onReadCallback && n.onReadCallback(), super._read(e);
  }
  _transform(e, n, r) {
    const s = this[si], a = s.maxRate, i = this.readableHighWaterMark, o = s.timeWindow, c = 1e3 / o, u = a / c, l = s.minChunkSize !== !1 ? Math.max(s.minChunkSize, u * 0.01) : 0, p = (f, m) => {
      const h = Buffer.byteLength(f);
      s.bytesSeen += h, s.bytes += h, s.isCaptured && this.emit("progress", s.bytesSeen), this.push(f) ? process.nextTick(m) : s.onReadCallback = () => {
        s.onReadCallback = null, process.nextTick(m);
      };
    }, d = (f, m) => {
      const h = Buffer.byteLength(f);
      let y = null, g = i, _, R = 0;
      if (a) {
        const P = Date.now();
        (!s.ts || (R = P - s.ts) >= o) && (s.ts = P, _ = u - s.bytes, s.bytes = _ < 0 ? -_ : 0, R = 0), _ = u - s.bytes;
      }
      if (a) {
        if (_ <= 0)
          return setTimeout(() => {
            m(null, f);
          }, o - R);
        _ < g && (g = _);
      }
      g && h > g && h - g > l && (y = f.subarray(g), f = f.subarray(0, g)), p(f, y ? () => {
        process.nextTick(m, null, y);
      } : m);
    };
    d(e, function f(m, h) {
      if (m)
        return r(m);
      h ? d(h, f) : r(null);
    });
  }
}
const { asyncIterator: eu } = Symbol, hf = async function* (t) {
  t.stream ? yield* t.stream() : t.arrayBuffer ? yield await t.arrayBuffer() : t[eu] ? yield* t[eu]() : yield t;
}, vx = ve.ALPHABET.ALPHA_DIGIT + "-_", vr = typeof TextEncoder == "function" ? new TextEncoder() : new qt.TextEncoder(), nn = `\r
`, yx = vr.encode(nn), gx = 2;
class xx {
  constructor(e, n) {
    const { escapeName: r } = this.constructor, s = E.isString(n);
    let a = `Content-Disposition: form-data; name="${r(e)}"${!s && n.name ? `; filename="${r(n.name)}"` : ""}${nn}`;
    s ? n = vr.encode(String(n).replace(/\r?\n|\r\n?/g, nn)) : a += `Content-Type: ${n.type || "application/octet-stream"}${nn}`, this.headers = vr.encode(a + nn), this.contentLength = s ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + gx, this.name = e, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: e } = this;
    E.isTypedArray(e) ? yield e : yield* hf(e), yield yx;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const bx = (t, e, n) => {
  const {
    tag: r = "form-data-boundary",
    size: s = 25,
    boundary: a = r + "-" + ve.generateString(s, vx)
  } = n || {};
  if (!E.isFormData(t))
    throw TypeError("FormData instance required");
  if (a.length < 1 || a.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const i = vr.encode("--" + a + nn), o = vr.encode("--" + a + "--" + nn);
  let c = o.byteLength;
  const u = Array.from(t.entries()).map(([p, d]) => {
    const f = new xx(p, d);
    return c += f.size, f;
  });
  c += i.byteLength * u.length, c = E.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${a}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), e && e(l), wh.from(async function* () {
    for (const p of u)
      yield i, yield* p.encode();
    yield o;
  }());
};
class _x extends xe.Transform {
  __transform(e, n, r) {
    this.push(e), r();
  }
  _transform(e, n, r) {
    if (e.length !== 0 && (this._transform = this.__transform, e[0] !== 120)) {
      const s = Buffer.alloc(2);
      s[0] = 120, s[1] = 156, this.push(s, n);
    }
    this.__transform(e, n, r);
  }
}
const wx = (t, e) => E.isAsyncFn(t) ? function(...n) {
  const r = n.pop();
  t.apply(this, n).then((s) => {
    try {
      e ? r(null, ...e(s)) : r(null, s);
    } catch (a) {
      r(a);
    }
  }, r);
} : t;
function Ex(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, a = 0, i;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), l = r[a];
    i || (i = u), n[s] = c, r[s] = u;
    let p = a, d = 0;
    for (; p !== s; )
      d += n[p++], p = p % t;
    if (s = (s + 1) % t, s === a && (a = (a + 1) % t), u - i < e)
      return;
    const f = l && u - l;
    return f ? Math.round(d * 1e3 / f) : void 0;
  };
}
function $x(t, e) {
  let n = 0, r = 1e3 / e, s, a;
  const i = (u, l = Date.now()) => {
    n = l, s = null, a && (clearTimeout(a), a = null), t(...u);
  };
  return [(...u) => {
    const l = Date.now(), p = l - n;
    p >= r ? i(u, l) : (s = u, a || (a = setTimeout(() => {
      a = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const Mn = (t, e, n = 3) => {
  let r = 0;
  const s = Ex(50, 250);
  return $x((a) => {
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, c = i - r, u = s(c), l = i <= o;
    r = i;
    const p = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && o && l ? (o - i) / u : void 0,
      event: a,
      lengthComputable: o != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, js = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Is = (t) => (...e) => E.asap(() => t(...e));
function Sx(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
  const e = t.indexOf(",");
  if (e < 0) return 0;
  const n = t.slice(5, e), r = t.slice(e + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const i = r.length;
    for (let d = 0; d < i; d++)
      if (r.charCodeAt(d) === 37 && d + 2 < i) {
        const f = r.charCodeAt(d + 1), m = r.charCodeAt(d + 2);
        (f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102) && (a -= 2, d += 2);
      }
    let o = 0, c = i - 1;
    const u = (d) => d >= 2 && r.charCodeAt(d - 2) === 37 && // '%'
    r.charCodeAt(d - 1) === 51 && // '3'
    (r.charCodeAt(d) === 68 || r.charCodeAt(d) === 100);
    c >= 0 && (r.charCodeAt(c) === 61 ? (o++, c--) : u(c) && (o++, c -= 3)), o === 1 && c >= 0 && (r.charCodeAt(c) === 61 || u(c)) && o++;
    const p = Math.floor(a / 4) * 3 - (o || 0);
    return p > 0 ? p : 0;
  }
  return Buffer.byteLength(r, "utf8");
}
const tu = {
  flush: gt.constants.Z_SYNC_FLUSH,
  finishFlush: gt.constants.Z_SYNC_FLUSH
}, Rx = {
  flush: gt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: gt.constants.BROTLI_OPERATION_FLUSH
}, nu = E.isFunction(gt.createBrotliDecompress), { http: Ox, https: Tx } = fx, Px = /https:?/, ru = ve.protocols.map((t) => t + ":"), su = (t, [e, n]) => (t.on("end", n).on("error", n), e);
class kx {
  constructor() {
    this.sessions = /* @__PURE__ */ Object.create(null);
  }
  getSession(e, n) {
    n = Object.assign({
      sessionTimeout: 1e3
    }, n);
    let r = this.sessions[e];
    if (r) {
      let l = r.length;
      for (let p = 0; p < l; p++) {
        const [d, f] = r[p];
        if (!d.destroyed && !d.closed && qt.isDeepStrictEqual(f, n))
          return d;
      }
    }
    const s = $d.connect(e, n);
    let a;
    const i = () => {
      if (a)
        return;
      a = !0;
      let l = r, p = l.length, d = p;
      for (; d--; )
        if (l[d][0] === s) {
          p === 1 ? delete this.sessions[e] : l.splice(d, 1);
          return;
        }
    }, o = s.request, { sessionTimeout: c } = n;
    if (c != null) {
      let l, p = 0;
      s.request = function() {
        const d = o.apply(this, arguments);
        return p++, l && (clearTimeout(l), l = null), d.once("close", () => {
          --p || (l = setTimeout(() => {
            l = null, i();
          }, c));
        }), d;
      };
    }
    s.once("close", i);
    let u = [
      s,
      n
    ];
    return r ? r.push(u) : r = this.sessions[e] = [u], s;
  }
}
const Ax = new kx();
function Nx(t, e) {
  t.beforeRedirects.proxy && t.beforeRedirects.proxy(t), t.beforeRedirects.config && t.beforeRedirects.config(t, e);
}
function vf(t, e, n) {
  let r = e;
  if (!r && r !== !1) {
    const s = cf.getProxyForUrl(n);
    s && (r = new URL(s));
  }
  if (r) {
    if (r.username && (r.auth = (r.username || "") + ":" + (r.password || "")), r.auth) {
      (r.auth.username || r.auth.password) && (r.auth = (r.auth.username || "") + ":" + (r.auth.password || ""));
      const a = Buffer.from(r.auth, "utf8").toString("base64");
      t.headers["Proxy-Authorization"] = "Basic " + a;
    }
    t.headers.host = t.hostname + (t.port ? ":" + t.port : "");
    const s = r.hostname || r.host;
    t.hostname = s, t.host = s, t.port = r.port, t.path = n, r.protocol && (t.protocol = r.protocol.includes(":") ? r.protocol : `${r.protocol}:`);
  }
  t.beforeRedirects.proxy = function(a) {
    vf(a, e, a.href);
  };
}
const jx = typeof process < "u" && E.kindOf(process) === "process", Ix = (t) => new Promise((e, n) => {
  let r, s;
  const a = (c, u) => {
    s || (s = !0, r && r(c, u));
  }, i = (c) => {
    a(c), e(c);
  }, o = (c) => {
    a(c, !0), n(c);
  };
  t(i, o, (c) => r = c).catch(o);
}), Cx = ({ address: t, family: e }) => {
  if (!E.isString(t))
    throw TypeError("address must be a string");
  return {
    address: t,
    family: e || (t.indexOf(".") < 0 ? 6 : 4)
  };
}, au = (t, e) => Cx(E.isObject(t) ? t : { address: t, family: e }), Lx = {
  request(t, e) {
    const n = t.protocol + "//" + t.hostname + ":" + (t.port || 80), { http2Options: r, headers: s } = t, a = Ax.getSession(n, r), {
      HTTP2_HEADER_SCHEME: i,
      HTTP2_HEADER_METHOD: o,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: u
    } = $d.constants, l = {
      [i]: t.protocol.replace(":", ""),
      [o]: t.method,
      [c]: t.path
    };
    E.forEach(s, (d, f) => {
      f.charAt(0) !== ":" && (l[f] = d);
    });
    const p = a.request(l);
    return p.once("response", (d) => {
      const f = p;
      d = Object.assign({}, d);
      const m = d[u];
      delete d[u], f.headers = d, f.statusCode = +m, e(f);
    }), p;
  }
}, Fx = jx && function(e) {
  return Ix(async function(r, s, a) {
    let { data: i, lookup: o, family: c, httpVersion: u = 1, http2Options: l } = e;
    const { responseType: p, responseEncoding: d } = e, f = e.method.toUpperCase();
    let m, h = !1, y;
    if (u = +u, Number.isNaN(u))
      throw TypeError(`Invalid protocol version: '${e.httpVersion}' is not a number`);
    if (u !== 1 && u !== 2)
      throw TypeError(`Unsupported protocol version '${u}'`);
    const g = u === 2;
    if (o) {
      const S = wx(o, (x) => E.isArray(x) ? x : [x]);
      o = (x, $, w) => {
        S(x, $, (v, b, O) => {
          if (v)
            return w(v);
          const U = E.isArray(b) ? b.map((V) => au(V)) : [au(b, O)];
          $.all ? w(v, U) : w(v, U[0].address, U[0].family);
        });
      };
    }
    const _ = new Sh();
    function R(S) {
      try {
        _.emit("abort", !S || S.type ? new Mt(null, e, y) : S);
      } catch (x) {
        console.warn("emit error", x);
      }
    }
    _.once("abort", s);
    const P = () => {
      e.cancelToken && e.cancelToken.unsubscribe(R), e.signal && e.signal.removeEventListener("abort", R), _.removeAllListeners();
    };
    (e.cancelToken || e.signal) && (e.cancelToken && e.cancelToken.subscribe(R), e.signal && (e.signal.aborted ? R() : e.signal.addEventListener("abort", R))), a((S, x) => {
      if (m = !0, x) {
        h = !0, P();
        return;
      }
      const { data: $ } = S;
      if ($ instanceof xe.Readable || $ instanceof xe.Duplex) {
        const w = xe.finished($, () => {
          w(), P();
        });
      } else
        P();
    });
    const k = Jo(e.baseURL, e.url, e.allowAbsoluteUrls), C = new URL(k, ve.hasBrowserEnv ? ve.origin : void 0), B = C.protocol || ru[0];
    if (B === "data:") {
      if (e.maxContentLength > -1) {
        const x = String(e.url || k || "");
        if (Sx(x) > e.maxContentLength)
          return s(new q(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            q.ERR_BAD_RESPONSE,
            e
          ));
      }
      let S;
      if (f !== "GET")
        return Rn(r, s, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: e
        });
      try {
        S = hx(e.url, p === "blob", {
          Blob: e.env && e.env.Blob
        });
      } catch (x) {
        throw q.from(x, q.ERR_BAD_REQUEST, e);
      }
      return p === "text" ? (S = S.toString(d), (!d || d === "utf8") && (S = E.stripBOM(S))) : p === "stream" && (S = xe.Readable.from(S)), Rn(r, s, {
        data: S,
        status: 200,
        statusText: "OK",
        headers: new Oe(),
        config: e
      });
    }
    if (ru.indexOf(B) === -1)
      return s(new q(
        "Unsupported protocol " + B,
        q.ERR_BAD_REQUEST,
        e
      ));
    const W = Oe.from(e.headers).normalize();
    W.set("User-Agent", "axios/" + Ns, !1);
    const { onUploadProgress: oe, onDownloadProgress: fe } = e, N = e.maxRate;
    let L, z;
    if (E.isSpecCompliantForm(i)) {
      const S = W.getContentType(/boundary=([-_\w\d]{10,70})/i);
      i = bx(i, (x) => {
        W.set(x);
      }, {
        tag: `axios-${Ns}-boundary`,
        boundary: S && S[1] || void 0
      });
    } else if (E.isFormData(i) && E.isFunction(i.getHeaders)) {
      if (W.set(i.getHeaders()), !W.hasContentLength())
        try {
          const S = await qt.promisify(i.getLength).call(i);
          Number.isFinite(S) && S >= 0 && W.setContentLength(S);
        } catch {
        }
    } else if (E.isBlob(i) || E.isFile(i))
      i.size && W.setContentType(i.type || "application/octet-stream"), W.setContentLength(i.size || 0), i = xe.Readable.from(hf(i));
    else if (i && !E.isStream(i)) {
      if (!Buffer.isBuffer(i)) if (E.isArrayBuffer(i))
        i = Buffer.from(new Uint8Array(i));
      else if (E.isString(i))
        i = Buffer.from(i, "utf-8");
      else
        return s(new q(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          q.ERR_BAD_REQUEST,
          e
        ));
      if (W.setContentLength(i.length, !1), e.maxBodyLength > -1 && i.length > e.maxBodyLength)
        return s(new q(
          "Request body larger than maxBodyLength limit",
          q.ERR_BAD_REQUEST,
          e
        ));
    }
    const T = E.toFiniteNumber(W.getContentLength());
    E.isArray(N) ? (L = N[0], z = N[1]) : L = z = N, i && (oe || L) && (E.isStream(i) || (i = xe.Readable.from(i, { objectMode: !1 })), i = xe.pipeline([i, new Ql({
      maxRate: E.toFiniteNumber(L)
    })], E.noop), oe && i.on("progress", su(
      i,
      js(
        T,
        Mn(Is(oe), !1, 3)
      )
    )));
    let A;
    if (e.auth) {
      const S = e.auth.username || "", x = e.auth.password || "";
      A = S + ":" + x;
    }
    if (!A && C.username) {
      const S = C.username, x = C.password;
      A = S + ":" + x;
    }
    A && W.delete("authorization");
    let j;
    try {
      j = Ho(
        C.pathname + C.search,
        e.params,
        e.paramsSerializer
      ).replace(/^\?/, "");
    } catch (S) {
      const x = new Error(S.message);
      return x.config = e, x.url = e.url, x.exists = !0, s(x);
    }
    W.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (nu ? ", br" : ""),
      !1
    );
    const I = {
      path: j,
      method: f,
      headers: W.toJSON(),
      agents: { http: e.httpAgent, https: e.httpsAgent },
      auth: A,
      protocol: B,
      family: c,
      beforeRedirect: Nx,
      beforeRedirects: {},
      http2Options: l
    };
    !E.isUndefined(o) && (I.lookup = o), e.socketPath ? I.socketPath = e.socketPath : (I.hostname = C.hostname.startsWith("[") ? C.hostname.slice(1, -1) : C.hostname, I.port = C.port, vf(I, e.proxy, B + "//" + C.hostname + (C.port ? ":" + C.port : "") + I.path));
    let M;
    const D = Px.test(I.protocol);
    if (I.agent = D ? e.httpsAgent : e.httpAgent, g ? M = Lx : e.transport ? M = e.transport : e.maxRedirects === 0 ? M = D ? Bt : xr : (e.maxRedirects && (I.maxRedirects = e.maxRedirects), e.beforeRedirect && (I.beforeRedirects.config = e.beforeRedirect), M = D ? Tx : Ox), e.maxBodyLength > -1 ? I.maxBodyLength = e.maxBodyLength : I.maxBodyLength = 1 / 0, e.insecureHTTPParser && (I.insecureHTTPParser = e.insecureHTTPParser), y = M.request(I, function(x) {
      if (y.destroyed) return;
      const $ = [x], w = E.toFiniteNumber(x.headers["content-length"]);
      if (fe || z) {
        const U = new Ql({
          maxRate: E.toFiniteNumber(z)
        });
        fe && U.on("progress", su(
          U,
          js(
            w,
            Mn(Is(fe), !0, 3)
          )
        )), $.push(U);
      }
      let v = x;
      const b = x.req || y;
      if (e.decompress !== !1 && x.headers["content-encoding"])
        switch ((f === "HEAD" || x.statusCode === 204) && delete x.headers["content-encoding"], (x.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            $.push(gt.createUnzip(tu)), delete x.headers["content-encoding"];
            break;
          case "deflate":
            $.push(new _x()), $.push(gt.createUnzip(tu)), delete x.headers["content-encoding"];
            break;
          case "br":
            nu && ($.push(gt.createBrotliDecompress(Rx)), delete x.headers["content-encoding"]);
        }
      v = $.length > 1 ? xe.pipeline($, E.noop) : $[0];
      const O = {
        status: x.statusCode,
        statusText: x.statusMessage,
        headers: new Oe(x.headers),
        config: e,
        request: b
      };
      if (p === "stream")
        O.data = v, Rn(r, s, O);
      else {
        const U = [];
        let V = 0;
        v.on("data", function(H) {
          U.push(H), V += H.length, e.maxContentLength > -1 && V > e.maxContentLength && (h = !0, v.destroy(), R(new q(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            q.ERR_BAD_RESPONSE,
            e,
            b
          )));
        }), v.on("aborted", function() {
          if (h)
            return;
          const H = new q(
            "stream has been aborted",
            q.ERR_BAD_RESPONSE,
            e,
            b
          );
          v.destroy(H), s(H);
        }), v.on("error", function(H) {
          y.destroyed || s(q.from(H, null, e, b));
        }), v.on("end", function() {
          try {
            let H = U.length === 1 ? U[0] : Buffer.concat(U);
            p !== "arraybuffer" && (H = H.toString(d), (!d || d === "utf8") && (H = E.stripBOM(H))), O.data = H;
          } catch (H) {
            return s(q.from(H, null, e, O.request, O));
          }
          Rn(r, s, O);
        });
      }
      _.once("abort", (U) => {
        v.destroyed || (v.emit("error", U), v.destroy());
      });
    }), _.once("abort", (S) => {
      y.close ? y.close() : y.destroy(S);
    }), y.on("error", function(x) {
      s(q.from(x, null, e, y));
    }), y.on("socket", function(x) {
      x.setKeepAlive(!0, 1e3 * 60);
    }), e.timeout) {
      const S = parseInt(e.timeout, 10);
      if (Number.isNaN(S)) {
        R(new q(
          "error trying to parse `config.timeout` to int",
          q.ERR_BAD_OPTION_VALUE,
          e,
          y
        ));
        return;
      }
      y.setTimeout(S, function() {
        if (m) return;
        let $ = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        const w = e.transitional || Wo;
        e.timeoutErrorMessage && ($ = e.timeoutErrorMessage), R(new q(
          $,
          w.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
          e,
          y
        ));
      });
    } else
      y.setTimeout(0);
    if (E.isStream(i)) {
      let S = !1, x = !1;
      i.on("end", () => {
        S = !0;
      }), i.once("error", ($) => {
        x = !0, y.destroy($);
      }), i.on("close", () => {
        !S && !x && R(new Mt("Request stream has been aborted", e, y));
      }), i.pipe(y);
    } else
      i && y.write(i), y.end();
  });
}, Dx = ve.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, ve.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(ve.origin),
  ve.navigator && /(msie|trident)/i.test(ve.navigator.userAgent)
) : () => !0, Ux = ve.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, a, i) {
      if (typeof document > "u") return;
      const o = [`${t}=${encodeURIComponent(e)}`];
      E.isNumber(n) && o.push(`expires=${new Date(n).toUTCString()}`), E.isString(r) && o.push(`path=${r}`), E.isString(s) && o.push(`domain=${s}`), a === !0 && o.push("secure"), E.isString(i) && o.push(`SameSite=${i}`), document.cookie = o.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
), iu = (t) => t instanceof Oe ? { ...t } : t;
function un(t, e) {
  e = e || {};
  const n = {};
  function r(u, l, p, d) {
    return E.isPlainObject(u) && E.isPlainObject(l) ? E.merge.call({ caseless: d }, u, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function s(u, l, p, d) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(u))
        return r(void 0, u, p, d);
    } else return r(u, l, p, d);
  }
  function a(u, l) {
    if (!E.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function o(u, l, p) {
    if (p in e)
      return r(u, l);
    if (p in t)
      return r(void 0, u);
  }
  const c = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: o,
    headers: (u, l, p) => s(iu(u), iu(l), p, !0)
  };
  return E.forEach(Object.keys({ ...t, ...e }), function(l) {
    const p = c[l] || s, d = p(t[l], e[l], l);
    E.isUndefined(d) && p !== o || (n[l] = d);
  }), n;
}
const yf = (t) => {
  const e = un({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: a, headers: i, auth: o } = e;
  if (e.headers = i = Oe.from(i), e.url = Ho(Jo(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), o && i.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  ), E.isFormData(n)) {
    if (ve.hasStandardBrowserEnv || ve.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (E.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, p]) => {
        u.includes(l.toLowerCase()) && i.set(l, p);
      });
    }
  }
  if (ve.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(e)), r || r !== !1 && Dx(e.url))) {
    const c = s && a && Ux.read(a);
    c && i.set(s, c);
  }
  return e;
}, zx = typeof XMLHttpRequest < "u", Mx = zx && function(t) {
  return new Promise(function(n, r) {
    const s = yf(t);
    let a = s.data;
    const i = Oe.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: c, onDownloadProgress: u } = s, l, p, d, f, m;
    function h() {
      f && f(), m && m(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let y = new XMLHttpRequest();
    y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;
    function g() {
      if (!y)
        return;
      const R = Oe.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), k = {
        data: !o || o === "text" || o === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: R,
        config: t,
        request: y
      };
      Rn(function(B) {
        n(B), h();
      }, function(B) {
        r(B), h();
      }, k), y = null;
    }
    "onloadend" in y ? y.onloadend = g : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, y.onabort = function() {
      y && (r(new q("Request aborted", q.ECONNABORTED, t, y)), y = null);
    }, y.onerror = function(P) {
      const k = P && P.message ? P.message : "Network Error", C = new q(k, q.ERR_NETWORK, t, y);
      C.event = P || null, r(C), y = null;
    }, y.ontimeout = function() {
      let P = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const k = s.transitional || Wo;
      s.timeoutErrorMessage && (P = s.timeoutErrorMessage), r(new q(
        P,
        k.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        t,
        y
      )), y = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in y && E.forEach(i.toJSON(), function(P, k) {
      y.setRequestHeader(k, P);
    }), E.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), o && o !== "json" && (y.responseType = s.responseType), u && ([d, m] = Mn(u, !0), y.addEventListener("progress", d)), c && y.upload && ([p, f] = Mn(c), y.upload.addEventListener("progress", p), y.upload.addEventListener("loadend", f)), (s.cancelToken || s.signal) && (l = (R) => {
      y && (r(!R || R.type ? new Mt(null, t, y) : R), y.abort(), y = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const _ = mf(s.url);
    if (_ && ve.protocols.indexOf(_) === -1) {
      r(new q("Unsupported protocol " + _ + ":", q.ERR_BAD_REQUEST, t));
      return;
    }
    y.send(a || null);
  });
}, qx = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const a = function(u) {
      if (!s) {
        s = !0, o();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof q ? l : new Mt(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, a(new q(`timeout ${e} of ms exceeded`, q.ETIMEDOUT));
    }, e);
    const o = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", a));
    const { signal: c } = r;
    return c.unsubscribe = () => E.asap(o), c;
  }
}, Bx = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Vx = async function* (t, e) {
  for await (const n of Gx(t))
    yield* Bx(n, e);
}, Gx = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, ou = (t, e, n, r) => {
  const s = Vx(t, e);
  let a = 0, i, o = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          o(), c.close();
          return;
        }
        let p = l.byteLength;
        if (n) {
          let d = a += p;
          n(d);
        }
        c.enqueue(new Uint8Array(l));
      } catch (u) {
        throw o(u), u;
      }
    },
    cancel(c) {
      return o(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, cu = 64 * 1024, { isFunction: zr } = E, Hx = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(E.global), {
  ReadableStream: lu,
  TextEncoder: uu
} = E.global, pu = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Wx = (t) => {
  t = E.merge.call({
    skipUndefined: !0
  }, Hx, t);
  const { fetch: e, Request: n, Response: r } = t, s = e ? zr(e) : typeof fetch == "function", a = zr(n), i = zr(r);
  if (!s)
    return !1;
  const o = s && zr(lu), c = s && (typeof uu == "function" ? /* @__PURE__ */ ((m) => (h) => m.encode(h))(new uu()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), u = a && o && pu(() => {
    let m = !1;
    const h = new n(ve.origin, {
      body: new lu(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return m && !h;
  }), l = i && o && pu(() => E.isReadableStream(new r("").body)), p = {
    stream: l && ((m) => m.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !p[m] && (p[m] = (h, y) => {
      let g = h && h[m];
      if (g)
        return g.call(h);
      throw new q(`Response type '${m}' is not supported`, q.ERR_NOT_SUPPORT, y);
    });
  });
  const d = async (m) => {
    if (m == null)
      return 0;
    if (E.isBlob(m))
      return m.size;
    if (E.isSpecCompliantForm(m))
      return (await new n(ve.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(m) || E.isArrayBuffer(m))
      return m.byteLength;
    if (E.isURLSearchParams(m) && (m = m + ""), E.isString(m))
      return (await c(m)).byteLength;
  }, f = async (m, h) => {
    const y = E.toFiniteNumber(m.getContentLength());
    return y ?? d(h);
  };
  return async (m) => {
    let {
      url: h,
      method: y,
      data: g,
      signal: _,
      cancelToken: R,
      timeout: P,
      onDownloadProgress: k,
      onUploadProgress: C,
      responseType: B,
      headers: W,
      withCredentials: oe = "same-origin",
      fetchOptions: fe
    } = yf(m), N = e || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let L = qx([_, R && R.toAbortSignal()], P), z = null;
    const T = L && L.unsubscribe && (() => {
      L.unsubscribe();
    });
    let A;
    try {
      if (C && u && y !== "get" && y !== "head" && (A = await f(W, g)) !== 0) {
        let x = new n(h, {
          method: "POST",
          body: g,
          duplex: "half"
        }), $;
        if (E.isFormData(g) && ($ = x.headers.get("content-type")) && W.setContentType($), x.body) {
          const [w, v] = js(
            A,
            Mn(Is(C))
          );
          g = ou(x.body, cu, w, v);
        }
      }
      E.isString(oe) || (oe = oe ? "include" : "omit");
      const j = a && "credentials" in n.prototype, I = {
        ...fe,
        signal: L,
        method: y.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: j ? oe : void 0
      };
      z = a && new n(h, I);
      let M = await (a ? N(z, fe) : N(h, I));
      const D = l && (B === "stream" || B === "response");
      if (l && (k || D && T)) {
        const x = {};
        ["status", "statusText", "headers"].forEach((b) => {
          x[b] = M[b];
        });
        const $ = E.toFiniteNumber(M.headers.get("content-length")), [w, v] = k && js(
          $,
          Mn(Is(k), !0)
        ) || [];
        M = new r(
          ou(M.body, cu, w, () => {
            v && v(), T && T();
          }),
          x
        );
      }
      B = B || "text";
      let S = await p[E.findKey(p, B) || "text"](M, m);
      return !D && T && T(), await new Promise((x, $) => {
        Rn(x, $, {
          data: S,
          headers: Oe.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: m,
          request: z
        });
      });
    } catch (j) {
      throw T && T(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new q("Network Error", q.ERR_NETWORK, m, z),
        {
          cause: j.cause || j
        }
      ) : q.from(j, j && j.code, m, z);
    }
  };
}, Kx = /* @__PURE__ */ new Map(), gf = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: s } = e, a = [
    r,
    s,
    n
  ];
  let i = a.length, o = i, c, u, l = Kx;
  for (; o--; )
    c = a[o], u = l.get(c), u === void 0 && l.set(c, u = o ? /* @__PURE__ */ new Map() : Wx(e)), l = u;
  return u;
};
gf();
const sc = {
  http: Fx,
  xhr: Mx,
  fetch: {
    get: gf
  }
};
E.forEach(sc, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const du = (t) => `- ${t}`, Jx = (t) => E.isFunction(t) || t === null || t === !1;
function Xx(t, e) {
  t = E.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, s;
  const a = {};
  for (let i = 0; i < n; i++) {
    r = t[i];
    let o;
    if (s = r, !Jx(r) && (s = sc[(o = String(r)).toLowerCase()], s === void 0))
      throw new q(`Unknown adapter '${o}'`);
    if (s && (E.isFunction(s) || (s = s.get(e))))
      break;
    a[o || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(a).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let o = n ? i.length > 1 ? `since :
` + i.map(du).join(`
`) : " " + du(i[0]) : "as no adapter specified";
    throw new q(
      "There is no suitable adapter to dispatch the request " + o,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const xf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Xx,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: sc
};
function ai(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Mt(null, t);
}
function fu(t) {
  return ai(t), t.headers = Oe.from(t.headers), t.data = ei.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), xf.getAdapter(t.adapter || Pr.adapter, t)(t).then(function(r) {
    return ai(t), r.data = ei.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Oe.from(r.headers), r;
  }, function(r) {
    return of(r) || (ai(t), r && r.response && (r.response.data = ei.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = Oe.from(r.response.headers))), Promise.reject(r);
  });
}
const Xs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Xs[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const mu = {};
Xs.transitional = function(e, n, r) {
  function s(a, i) {
    return "[Axios v" + Ns + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, o) => {
    if (e === !1)
      throw new q(
        s(i, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !mu[i] && (mu[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(a, i, o) : !0;
  };
};
Xs.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Yx(t, e, n) {
  if (typeof t != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], i = e[a];
    if (i) {
      const o = t[a], c = o === void 0 || i(o, a, t);
      if (c !== !0)
        throw new q("option " + a + " must be " + c, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + a, q.ERR_BAD_OPTION);
  }
}
const vs = {
  assertOptions: Yx,
  validators: Xs
}, at = vs.validators;
let cn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Gl(),
      response: new Gl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = un(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 && vs.assertOptions(r, {
      silentJSONParsing: at.transitional(at.boolean),
      forcedJSONParsing: at.transitional(at.boolean),
      clarifyTimeoutError: at.transitional(at.boolean)
    }, !1), s != null && (E.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : vs.assertOptions(s, {
      encode: at.function,
      serialize: at.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), vs.assertOptions(n, {
      baseUrl: at.spelling("baseURL"),
      withXsrfToken: at.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && E.merge(
      a.common,
      a[n.method]
    );
    a && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), n.headers = Oe.concat(i, a);
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, o.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let l, p = 0, d;
    if (!c) {
      const m = [fu.bind(this), void 0];
      for (m.unshift(...o), m.push(...u), d = m.length, l = Promise.resolve(n); p < d; )
        l = l.then(m[p++], m[p++]);
      return l;
    }
    d = o.length;
    let f = n;
    for (; p < d; ) {
      const m = o[p++], h = o[p++];
      try {
        f = m(f);
      } catch (y) {
        h.call(this, y);
        break;
      }
    }
    try {
      l = fu.call(this, f);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, d = u.length; p < d; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(e) {
    e = un(this.defaults, e);
    const n = Jo(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ho(n, e.params, e.paramsSerializer);
  }
};
E.forEach(["delete", "get", "head", "options"], function(e) {
  cn.prototype[e] = function(n, r) {
    return this.request(un(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(a, i, o) {
      return this.request(un(o || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  cn.prototype[e] = n(), cn.prototype[e + "Form"] = n(!0);
});
let Zx = class bf {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((o) => {
        r.subscribe(o), a = o;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, e(function(a, i, o) {
      r.reason || (r.reason = new Mt(a, i, o), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new bf(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function Qx(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function eb(t) {
  return E.isObject(t) && t.isAxiosError === !0;
}
const xo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(xo).forEach(([t, e]) => {
  xo[e] = t;
});
function _f(t) {
  const e = new cn(t), n = Rd(cn.prototype.request, e);
  return E.extend(n, cn.prototype, e, { allOwnKeys: !0 }), E.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return _f(un(t, s));
  }, n;
}
const de = _f(Pr);
de.Axios = cn;
de.CanceledError = Mt;
de.CancelToken = Zx;
de.isCancel = of;
de.VERSION = Ns;
de.toFormData = Js;
de.AxiosError = q;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = Qx;
de.isAxiosError = eb;
de.mergeConfig = un;
de.AxiosHeaders = Oe;
de.formToJSON = (t) => af(E.isHTMLForm(t) ? new FormData(t) : t);
de.getAdapter = xf.getAdapter;
de.HttpStatusCode = xo;
de.default = de;
const {
  Axios: UA,
  AxiosError: zA,
  CanceledError: MA,
  isCancel: qA,
  CancelToken: BA,
  VERSION: VA,
  all: GA,
  Cancel: HA,
  isAxiosError: WA,
  spread: KA,
  toFormData: JA,
  AxiosHeaders: XA,
  HttpStatusCode: YA,
  formToJSON: ZA,
  getAdapter: QA,
  mergeConfig: eN
} = de;
var ys = { exports: {} }, ii = { exports: {} }, hu;
function wf() {
  return hu || (hu = 1, function(t) {
    let e = {};
    try {
      e = require("electron");
    } catch {
    }
    e.ipcRenderer && n(e), t.exports = n;
    function n({ contextBridge: r, ipcRenderer: s }) {
      if (!s)
        return;
      s.on("__ELECTRON_LOG_IPC__", (i, o) => {
        window.postMessage({ cmd: "message", ...o });
      }), s.invoke("__ELECTRON_LOG__", { cmd: "getOptions" }).catch((i) => console.error(new Error(
        `electron-log isn't initialized in the main process. Please call log.initialize() before. ${i.message}`
      )));
      const a = {
        sendToMain(i) {
          try {
            s.send("__ELECTRON_LOG__", i);
          } catch (o) {
            console.error("electronLog.sendToMain ", o, "data:", i), s.send("__ELECTRON_LOG__", {
              cmd: "errorHandler",
              error: { message: o == null ? void 0 : o.message, stack: o == null ? void 0 : o.stack },
              errorName: "sendToMain"
            });
          }
        },
        log(...i) {
          a.sendToMain({ data: i, level: "info" });
        }
      };
      for (const i of ["error", "warn", "info", "verbose", "debug", "silly"])
        a[i] = (...o) => a.sendToMain({
          data: o,
          level: i
        });
      if (r && process.contextIsolated)
        try {
          r.exposeInMainWorld("__electronLog", a);
        } catch {
        }
      typeof window == "object" ? window.__electronLog = a : __electronLog = a;
    }
  }(ii)), ii.exports;
}
var oi = { exports: {} }, ci, vu;
function tb() {
  if (vu) return ci;
  vu = 1, ci = t;
  function t(e) {
    return Object.defineProperties(n, {
      defaultLabel: { value: "", writable: !0 },
      labelPadding: { value: !0, writable: !0 },
      maxLabelLength: { value: 0, writable: !0 },
      labelLength: {
        get() {
          switch (typeof n.labelPadding) {
            case "boolean":
              return n.labelPadding ? n.maxLabelLength : 0;
            case "number":
              return n.labelPadding;
            default:
              return 0;
          }
        }
      }
    });
    function n(r) {
      n.maxLabelLength = Math.max(n.maxLabelLength, r.length);
      const s = {};
      for (const a of e.levels)
        s[a] = (...i) => e.logData(i, { level: a, scope: r });
      return s.log = s.info, s;
    }
  }
  return ci;
}
var li, yu;
function nb() {
  if (yu) return li;
  yu = 1;
  class t {
    constructor({ processMessage: n }) {
      this.processMessage = n, this.buffer = [], this.enabled = !1, this.begin = this.begin.bind(this), this.commit = this.commit.bind(this), this.reject = this.reject.bind(this);
    }
    addMessage(n) {
      this.buffer.push(n);
    }
    begin() {
      this.enabled = [];
    }
    commit() {
      this.enabled = !1, this.buffer.forEach((n) => this.processMessage(n)), this.buffer = [];
    }
    reject() {
      this.enabled = !1, this.buffer = [];
    }
  }
  return li = t, li;
}
var ui, gu;
function Ef() {
  if (gu) return ui;
  gu = 1;
  const t = tb(), e = nb(), r = class r {
    constructor({
      allowUnknownLevel: a = !1,
      dependencies: i = {},
      errorHandler: o,
      eventLogger: c,
      initializeFn: u,
      isDev: l = !1,
      levels: p = ["error", "warn", "info", "verbose", "debug", "silly"],
      logId: d,
      transportFactories: f = {},
      variables: m
    } = {}) {
      J(this, "dependencies", {});
      J(this, "errorHandler", null);
      J(this, "eventLogger", null);
      J(this, "functions", {});
      J(this, "hooks", []);
      J(this, "isDev", !1);
      J(this, "levels", null);
      J(this, "logId", null);
      J(this, "scope", null);
      J(this, "transports", {});
      J(this, "variables", {});
      this.addLevel = this.addLevel.bind(this), this.create = this.create.bind(this), this.initialize = this.initialize.bind(this), this.logData = this.logData.bind(this), this.processMessage = this.processMessage.bind(this), this.allowUnknownLevel = a, this.buffering = new e(this), this.dependencies = i, this.initializeFn = u, this.isDev = l, this.levels = p, this.logId = d, this.scope = t(this), this.transportFactories = f, this.variables = m || {};
      for (const h of this.levels)
        this.addLevel(h, !1);
      this.log = this.info, this.functions.log = this.log, this.errorHandler = o, o == null || o.setOptions({ ...i, logFn: this.error }), this.eventLogger = c, c == null || c.setOptions({ ...i, logger: this });
      for (const [h, y] of Object.entries(f))
        this.transports[h] = y(this, i);
      r.instances[d] = this;
    }
    static getInstance({ logId: a }) {
      return this.instances[a] || this.instances.default;
    }
    addLevel(a, i = this.levels.length) {
      i !== !1 && this.levels.splice(i, 0, a), this[a] = (...o) => this.logData(o, { level: a }), this.functions[a] = this[a];
    }
    catchErrors(a) {
      return this.processMessage(
        {
          data: ["log.catchErrors is deprecated. Use log.errorHandler instead"],
          level: "warn"
        },
        { transports: ["console"] }
      ), this.errorHandler.startCatching(a);
    }
    create(a) {
      return typeof a == "string" && (a = { logId: a }), new r({
        dependencies: this.dependencies,
        errorHandler: this.errorHandler,
        initializeFn: this.initializeFn,
        isDev: this.isDev,
        transportFactories: this.transportFactories,
        variables: { ...this.variables },
        ...a
      });
    }
    compareLevels(a, i, o = this.levels) {
      const c = o.indexOf(a), u = o.indexOf(i);
      return u === -1 || c === -1 ? !0 : u <= c;
    }
    initialize(a = {}) {
      this.initializeFn({ logger: this, ...this.dependencies, ...a });
    }
    logData(a, i = {}) {
      this.buffering.enabled ? this.buffering.addMessage({ data: a, date: /* @__PURE__ */ new Date(), ...i }) : this.processMessage({ data: a, ...i });
    }
    processMessage(a, { transports: i = this.transports } = {}) {
      if (a.cmd === "errorHandler") {
        this.errorHandler.handle(a.error, {
          errorName: a.errorName,
          processType: "renderer",
          showDialog: !!a.showDialog
        });
        return;
      }
      let o = a.level;
      this.allowUnknownLevel || (o = this.levels.includes(a.level) ? a.level : "info");
      const c = {
        date: /* @__PURE__ */ new Date(),
        logId: this.logId,
        ...a,
        level: o,
        variables: {
          ...this.variables,
          ...a.variables
        }
      };
      for (const [u, l] of this.transportEntries(i))
        if (!(typeof l != "function" || l.level === !1) && this.compareLevels(l.level, a.level))
          try {
            const p = this.hooks.reduce((d, f) => d && f(d, l, u), c);
            p && l({ ...p, data: [...p.data] });
          } catch (p) {
            this.processInternalErrorFn(p);
          }
    }
    processInternalErrorFn(a) {
    }
    transportEntries(a = this.transports) {
      return (Array.isArray(a) ? a : Object.entries(a)).map((o) => {
        switch (typeof o) {
          case "string":
            return this.transports[o] ? [o, this.transports[o]] : null;
          case "function":
            return [o.name, o];
          default:
            return Array.isArray(o) ? o : null;
        }
      }).filter(Boolean);
    }
  };
  J(r, "instances", {});
  let n = r;
  return ui = n, ui;
}
var pi, xu;
function rb() {
  if (xu) return pi;
  xu = 1;
  const t = console.error;
  class e {
    constructor({ logFn: r = null } = {}) {
      J(this, "logFn", null);
      J(this, "onError", null);
      J(this, "showDialog", !1);
      J(this, "preventDefault", !0);
      this.handleError = this.handleError.bind(this), this.handleRejection = this.handleRejection.bind(this), this.startCatching = this.startCatching.bind(this), this.logFn = r;
    }
    handle(r, {
      logFn: s = this.logFn,
      errorName: a = "",
      onError: i = this.onError,
      showDialog: o = this.showDialog
    } = {}) {
      try {
        (i == null ? void 0 : i({ error: r, errorName: a, processType: "renderer" })) !== !1 && s({ error: r, errorName: a, showDialog: o });
      } catch {
        t(r);
      }
    }
    setOptions({ logFn: r, onError: s, preventDefault: a, showDialog: i }) {
      typeof r == "function" && (this.logFn = r), typeof s == "function" && (this.onError = s), typeof a == "boolean" && (this.preventDefault = a), typeof i == "boolean" && (this.showDialog = i);
    }
    startCatching({ onError: r, showDialog: s } = {}) {
      this.isActive || (this.isActive = !0, this.setOptions({ onError: r, showDialog: s }), window.addEventListener("error", (a) => {
        var i;
        this.preventDefault && ((i = a.preventDefault) == null || i.call(a)), this.handleError(a.error || a);
      }), window.addEventListener("unhandledrejection", (a) => {
        var i;
        this.preventDefault && ((i = a.preventDefault) == null || i.call(a)), this.handleRejection(a.reason || a);
      }));
    }
    handleError(r) {
      this.handle(r, { errorName: "Unhandled" });
    }
    handleRejection(r) {
      const s = r instanceof Error ? r : new Error(JSON.stringify(r));
      this.handle(s, { errorName: "Unhandled rejection" });
    }
  }
  return pi = e, pi;
}
var di, bu;
function hn() {
  if (bu) return di;
  bu = 1, di = { transform: t };
  function t({
    logger: e,
    message: n,
    transport: r,
    initialData: s = (n == null ? void 0 : n.data) || [],
    transforms: a = r == null ? void 0 : r.transforms
  }) {
    return a.reduce((i, o) => typeof o == "function" ? o({ data: i, logger: e, message: n, transport: r }) : i, s);
  }
  return di;
}
var fi, _u;
function sb() {
  if (_u) return fi;
  _u = 1;
  const { transform: t } = hn();
  fi = n;
  const e = {
    error: console.error,
    warn: console.warn,
    info: console.info,
    verbose: console.info,
    debug: console.debug,
    silly: console.debug,
    log: console.log
  };
  function n(s) {
    return Object.assign(a, {
      format: "{h}:{i}:{s}.{ms}{scope} › {text}",
      transforms: [r],
      writeFn({ message: { level: i, data: o } }) {
        const c = e[i] || e.info;
        setTimeout(() => c(...o));
      }
    });
    function a(i) {
      a.writeFn({
        message: { ...i, data: t({ logger: s, message: i, transport: a }) }
      });
    }
  }
  function r({
    data: s = [],
    logger: a = {},
    message: i = {},
    transport: o = {}
  }) {
    if (typeof o.format == "function")
      return o.format({
        data: s,
        level: (i == null ? void 0 : i.level) || "info",
        logger: a,
        message: i,
        transport: o
      });
    if (typeof o.format != "string")
      return s;
    s.unshift(o.format), typeof s[1] == "string" && s[1].match(/%[1cdfiOos]/) && (s = [`${s[0]}${s[1]}`, ...s.slice(2)]);
    const c = i.date || /* @__PURE__ */ new Date();
    return s[0] = s[0].replace(/\{(\w+)}/g, (u, l) => {
      var p, d;
      switch (l) {
        case "level":
          return i.level;
        case "logId":
          return i.logId;
        case "scope": {
          const f = i.scope || ((p = a.scope) == null ? void 0 : p.defaultLabel);
          return f ? ` (${f})` : "";
        }
        case "text":
          return "";
        case "y":
          return c.getFullYear().toString(10);
        case "m":
          return (c.getMonth() + 1).toString(10).padStart(2, "0");
        case "d":
          return c.getDate().toString(10).padStart(2, "0");
        case "h":
          return c.getHours().toString(10).padStart(2, "0");
        case "i":
          return c.getMinutes().toString(10).padStart(2, "0");
        case "s":
          return c.getSeconds().toString(10).padStart(2, "0");
        case "ms":
          return c.getMilliseconds().toString(10).padStart(3, "0");
        case "iso":
          return c.toISOString();
        default:
          return ((d = i.variables) == null ? void 0 : d[l]) || u;
      }
    }).trim(), s;
  }
  return fi;
}
var mi, wu;
function ab() {
  if (wu) return mi;
  wu = 1;
  const { transform: t } = hn();
  mi = n;
  const e = /* @__PURE__ */ new Set([Promise, WeakMap, WeakSet]);
  function n(a) {
    return Object.assign(i, {
      depth: 5,
      transforms: [s]
    });
    function i(o) {
      if (!window.__electronLog) {
        a.processMessage(
          {
            data: ["electron-log: logger isn't initialized in the main process"],
            level: "error"
          },
          { transports: ["console"] }
        );
        return;
      }
      try {
        const c = t({
          initialData: o,
          logger: a,
          message: o,
          transport: i
        });
        __electronLog.sendToMain(c);
      } catch (c) {
        a.transports.console({
          data: ["electronLog.transports.ipc", c, "data:", o.data],
          level: "error"
        });
      }
    }
  }
  function r(a) {
    return Object(a) !== a;
  }
  function s({
    data: a,
    depth: i,
    seen: o = /* @__PURE__ */ new WeakSet(),
    transport: c = {}
  } = {}) {
    const u = i || c.depth || 5;
    return o.has(a) ? "[Circular]" : u < 1 ? r(a) ? a : Array.isArray(a) ? "[Array]" : `[${typeof a}]` : ["function", "symbol"].includes(typeof a) ? a.toString() : r(a) ? a : e.has(a.constructor) ? `[${a.constructor.name}]` : Array.isArray(a) ? a.map((l) => s({
      data: l,
      depth: u - 1,
      seen: o
    })) : a instanceof Date ? a.toISOString() : a instanceof Error ? a.stack : a instanceof Map ? new Map(
      Array.from(a).map(([l, p]) => [
        s({ data: l, depth: u - 1, seen: o }),
        s({ data: p, depth: u - 1, seen: o })
      ])
    ) : a instanceof Set ? new Set(
      Array.from(a).map(
        (l) => s({ data: l, depth: u - 1, seen: o })
      )
    ) : (o.add(a), Object.fromEntries(
      Object.entries(a).map(
        ([l, p]) => [
          l,
          s({ data: p, depth: u - 1, seen: o })
        ]
      )
    ));
  }
  return mi;
}
var Eu;
function ib() {
  return Eu || (Eu = 1, function(t) {
    const e = Ef(), n = rb(), r = sb(), s = ab();
    typeof process == "object" && process.type === "browser" && console.warn(
      "electron-log/renderer is loaded in the main process. It could cause unexpected behaviour."
    ), t.exports = a(), t.exports.Logger = e, t.exports.default = t.exports;
    function a() {
      const i = new e({
        allowUnknownLevel: !0,
        errorHandler: new n(),
        initializeFn: () => {
        },
        logId: "default",
        transportFactories: {
          console: r,
          ipc: s
        },
        variables: {
          processType: "renderer"
        }
      });
      return i.errorHandler.setOptions({
        logFn({ error: o, errorName: c, showDialog: u }) {
          i.transports.console({
            data: [c, o].filter(Boolean),
            level: "error"
          }), i.transports.ipc({
            cmd: "errorHandler",
            error: {
              cause: o == null ? void 0 : o.cause,
              code: o == null ? void 0 : o.code,
              name: o == null ? void 0 : o.name,
              message: o == null ? void 0 : o.message,
              stack: o == null ? void 0 : o.stack
            },
            errorName: c,
            logId: i.logId,
            showDialog: u
          });
        }
      }), typeof window == "object" && window.addEventListener("message", (o) => {
        const { cmd: c, logId: u, ...l } = o.data || {}, p = e.getInstance({ logId: u });
        c === "message" && p.processMessage(l, { transports: ["console"] });
      }), new Proxy(i, {
        get(o, c) {
          return typeof o[c] < "u" ? o[c] : (...u) => i.logData(u, { level: c });
        }
      });
    }
  }(oi)), oi.exports;
}
var hi, $u;
function ob() {
  if ($u) return hi;
  $u = 1;
  const t = mn, e = Et;
  hi = {
    findAndReadPackageJson: n,
    tryReadJsonAt: r
  };
  function n() {
    return r(i()) || r(a()) || r(process.resourcesPath, "app.asar") || r(process.resourcesPath, "app") || r(process.cwd()) || { name: void 0, version: void 0 };
  }
  function r(...o) {
    if (o[0])
      try {
        const c = e.join(...o), u = s("package.json", c);
        if (!u)
          return;
        const l = JSON.parse(t.readFileSync(u, "utf8")), p = (l == null ? void 0 : l.productName) || (l == null ? void 0 : l.name);
        return !p || p.toLowerCase() === "electron" ? void 0 : p ? { name: p, version: l == null ? void 0 : l.version } : void 0;
      } catch {
        return;
      }
  }
  function s(o, c) {
    let u = c;
    for (; ; ) {
      const l = e.parse(u), p = l.root, d = l.dir;
      if (t.existsSync(e.join(u, o)))
        return e.resolve(e.join(u, o));
      if (u === p)
        return null;
      u = d;
    }
  }
  function a() {
    const o = process.argv.filter((u) => u.indexOf("--user-data-dir=") === 0);
    return o.length === 0 || typeof o[0] != "string" ? null : o[0].replace("--user-data-dir=", "");
  }
  function i() {
    var o;
    try {
      return (o = require.main) == null ? void 0 : o.filename;
    } catch {
      return;
    }
  }
  return hi;
}
var vi, Su;
function $f() {
  if (Su) return vi;
  Su = 1;
  const t = Ph, e = Er, n = Et, r = ob();
  class s {
    constructor() {
      J(this, "appName");
      J(this, "appPackageJson");
      J(this, "platform", process.platform);
    }
    getAppLogPath(i = this.getAppName()) {
      return this.platform === "darwin" ? n.join(this.getSystemPathHome(), "Library/Logs", i) : n.join(this.getAppUserDataPath(i), "logs");
    }
    getAppName() {
      var o;
      const i = this.appName || ((o = this.getAppPackageJson()) == null ? void 0 : o.name);
      if (!i)
        throw new Error(
          "electron-log can't determine the app name. It tried these methods:\n1. Use `electron.app.name`\n2. Use productName or name from the nearest package.json`\nYou can also set it through log.transports.file.setAppName()"
        );
      return i;
    }
    /**
     * @private
     * @returns {undefined}
     */
    getAppPackageJson() {
      return typeof this.appPackageJson != "object" && (this.appPackageJson = r.findAndReadPackageJson()), this.appPackageJson;
    }
    getAppUserDataPath(i = this.getAppName()) {
      return i ? n.join(this.getSystemPathAppData(), i) : void 0;
    }
    getAppVersion() {
      var i;
      return (i = this.getAppPackageJson()) == null ? void 0 : i.version;
    }
    getElectronLogPath() {
      return this.getAppLogPath();
    }
    getMacOsVersion() {
      const i = Number(e.release().split(".")[0]);
      return i <= 19 ? `10.${i - 4}` : i - 9;
    }
    /**
     * @protected
     * @returns {string}
     */
    getOsVersion() {
      let i = e.type().replace("_", " "), o = e.release();
      return i === "Darwin" && (i = "macOS", o = this.getMacOsVersion()), `${i} ${o}`;
    }
    /**
     * @return {PathVariables}
     */
    getPathVariables() {
      const i = this.getAppName(), o = this.getAppVersion(), c = this;
      return {
        appData: this.getSystemPathAppData(),
        appName: i,
        appVersion: o,
        get electronDefaultDir() {
          return c.getElectronLogPath();
        },
        home: this.getSystemPathHome(),
        libraryDefaultDir: this.getAppLogPath(i),
        libraryTemplate: this.getAppLogPath("{appName}"),
        temp: this.getSystemPathTemp(),
        userData: this.getAppUserDataPath(i)
      };
    }
    getSystemPathAppData() {
      const i = this.getSystemPathHome();
      switch (this.platform) {
        case "darwin":
          return n.join(i, "Library/Application Support");
        case "win32":
          return process.env.APPDATA || n.join(i, "AppData/Roaming");
        default:
          return process.env.XDG_CONFIG_HOME || n.join(i, ".config");
      }
    }
    getSystemPathHome() {
      var i;
      return ((i = e.homedir) == null ? void 0 : i.call(e)) || process.env.HOME;
    }
    getSystemPathTemp() {
      return e.tmpdir();
    }
    getVersions() {
      return {
        app: `${this.getAppName()} ${this.getAppVersion()}`,
        electron: void 0,
        os: this.getOsVersion()
      };
    }
    isDev() {
      return process.env.NODE_ENV === "development" || process.env.ELECTRON_IS_DEV === "1";
    }
    isElectron() {
      return !!process.versions.electron;
    }
    onAppEvent(i, o) {
    }
    onAppReady(i) {
      i();
    }
    onEveryWebContentsEvent(i, o) {
    }
    /**
     * Listen to async messages sent from opposite process
     * @param {string} channel
     * @param {function} listener
     */
    onIpc(i, o) {
    }
    onIpcInvoke(i, o) {
    }
    /**
     * @param {string} url
     * @param {Function} [logFunction]
     */
    openUrl(i, o = console.error) {
      const u = { darwin: "open", win32: "start", linux: "xdg-open" }[process.platform] || "xdg-open";
      t.exec(`${u} ${i}`, {}, (l) => {
        l && o(l);
      });
    }
    setAppName(i) {
      this.appName = i;
    }
    setPlatform(i) {
      this.platform = i;
    }
    setPreloadFileForSessions({
      filePath: i,
      // eslint-disable-line no-unused-vars
      includeFutureSession: o = !0,
      // eslint-disable-line no-unused-vars
      getSessions: c = () => []
      // eslint-disable-line no-unused-vars
    }) {
    }
    /**
     * Sent a message to opposite process
     * @param {string} channel
     * @param {any} message
     */
    sendIpc(i, o) {
    }
    showErrorBox(i, o) {
    }
  }
  return vi = s, vi;
}
var yi, Ru;
function cb() {
  if (Ru) return yi;
  Ru = 1;
  const t = Et, e = $f();
  class n extends e {
    /**
     * @param {object} options
     * @param {typeof Electron} [options.electron]
     */
    constructor({ electron: a } = {}) {
      super();
      /**
       * @type {typeof Electron}
       */
      J(this, "electron");
      this.electron = a;
    }
    getAppName() {
      var i, o;
      let a;
      try {
        a = this.appName || ((i = this.electron.app) == null ? void 0 : i.name) || ((o = this.electron.app) == null ? void 0 : o.getName());
      } catch {
      }
      return a || super.getAppName();
    }
    getAppUserDataPath(a) {
      return this.getPath("userData") || super.getAppUserDataPath(a);
    }
    getAppVersion() {
      var i;
      let a;
      try {
        a = (i = this.electron.app) == null ? void 0 : i.getVersion();
      } catch {
      }
      return a || super.getAppVersion();
    }
    getElectronLogPath() {
      return this.getPath("logs") || super.getElectronLogPath();
    }
    /**
     * @private
     * @param {any} name
     * @returns {string|undefined}
     */
    getPath(a) {
      var i;
      try {
        return (i = this.electron.app) == null ? void 0 : i.getPath(a);
      } catch {
        return;
      }
    }
    getVersions() {
      return {
        app: `${this.getAppName()} ${this.getAppVersion()}`,
        electron: `Electron ${process.versions.electron}`,
        os: this.getOsVersion()
      };
    }
    getSystemPathAppData() {
      return this.getPath("appData") || super.getSystemPathAppData();
    }
    isDev() {
      var a;
      return ((a = this.electron.app) == null ? void 0 : a.isPackaged) !== void 0 ? !this.electron.app.isPackaged : typeof process.execPath == "string" ? t.basename(process.execPath).toLowerCase().startsWith("electron") : super.isDev();
    }
    onAppEvent(a, i) {
      var o;
      return (o = this.electron.app) == null || o.on(a, i), () => {
        var c;
        (c = this.electron.app) == null || c.off(a, i);
      };
    }
    onAppReady(a) {
      var i, o, c;
      (i = this.electron.app) != null && i.isReady() ? a() : (o = this.electron.app) != null && o.once ? (c = this.electron.app) == null || c.once("ready", a) : a();
    }
    onEveryWebContentsEvent(a, i) {
      var c, u, l;
      return (u = (c = this.electron.webContents) == null ? void 0 : c.getAllWebContents()) == null || u.forEach((p) => {
        p.on(a, i);
      }), (l = this.electron.app) == null || l.on("web-contents-created", o), () => {
        var p, d;
        (p = this.electron.webContents) == null || p.getAllWebContents().forEach((f) => {
          f.off(a, i);
        }), (d = this.electron.app) == null || d.off("web-contents-created", o);
      };
      function o(p, d) {
        d.on(a, i);
      }
    }
    /**
     * Listen to async messages sent from opposite process
     * @param {string} channel
     * @param {function} listener
     */
    onIpc(a, i) {
      var o;
      (o = this.electron.ipcMain) == null || o.on(a, i);
    }
    onIpcInvoke(a, i) {
      var o, c;
      (c = (o = this.electron.ipcMain) == null ? void 0 : o.handle) == null || c.call(o, a, i);
    }
    /**
     * @param {string} url
     * @param {Function} [logFunction]
     */
    openUrl(a, i = console.error) {
      var o;
      (o = this.electron.shell) == null || o.openExternal(a).catch(i);
    }
    setPreloadFileForSessions({
      filePath: a,
      includeFutureSession: i = !0,
      getSessions: o = () => {
        var c;
        return [(c = this.electron.session) == null ? void 0 : c.defaultSession];
      }
    }) {
      for (const u of o().filter(Boolean))
        c(u);
      i && this.onAppEvent("session-created", (u) => {
        c(u);
      });
      function c(u) {
        typeof u.registerPreloadScript == "function" ? u.registerPreloadScript({
          filePath: a,
          id: "electron-log-preload",
          type: "frame"
        }) : u.setPreloads([...u.getPreloads(), a]);
      }
    }
    /**
     * Sent a message to opposite process
     * @param {string} channel
     * @param {any} message
     */
    sendIpc(a, i) {
      var o, c;
      (c = (o = this.electron.BrowserWindow) == null ? void 0 : o.getAllWindows()) == null || c.forEach((u) => {
        var l, p;
        ((l = u.webContents) == null ? void 0 : l.isDestroyed()) === !1 && ((p = u.webContents) == null ? void 0 : p.isCrashed()) === !1 && u.webContents.send(a, i);
      });
    }
    showErrorBox(a, i) {
      var o;
      (o = this.electron.dialog) == null || o.showErrorBox(a, i);
    }
  }
  return yi = n, yi;
}
var gi, Ou;
function lb() {
  if (Ou) return gi;
  Ou = 1;
  const t = mn, e = Er, n = Et, r = wf();
  let s = !1, a = !1;
  gi = {
    initialize({
      externalApi: c,
      getSessions: u,
      includeFutureSession: l,
      logger: p,
      preload: d = !0,
      spyRendererConsole: f = !1
    }) {
      c.onAppReady(() => {
        try {
          d && i({
            externalApi: c,
            getSessions: u,
            includeFutureSession: l,
            logger: p,
            preloadOption: d
          }), f && o({ externalApi: c, logger: p });
        } catch (m) {
          p.warn(m);
        }
      });
    }
  };
  function i({
    externalApi: c,
    getSessions: u,
    includeFutureSession: l,
    logger: p,
    preloadOption: d
  }) {
    let f = typeof d == "string" ? d : void 0;
    if (s) {
      p.warn(new Error("log.initialize({ preload }) already called").stack);
      return;
    }
    s = !0;
    try {
      f = n.resolve(
        __dirname,
        "../renderer/electron-log-preload.js"
      );
    } catch {
    }
    if (!f || !t.existsSync(f)) {
      f = n.join(
        c.getAppUserDataPath() || e.tmpdir(),
        "electron-log-preload.js"
      );
      const m = `
      try {
        (${r.toString()})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    `;
      t.writeFileSync(f, m, "utf8");
    }
    c.setPreloadFileForSessions({
      filePath: f,
      includeFutureSession: l,
      getSessions: u
    });
  }
  function o({ externalApi: c, logger: u }) {
    if (a) {
      u.warn(
        new Error("log.initialize({ spyRendererConsole }) already called").stack
      );
      return;
    }
    a = !0;
    const l = ["debug", "info", "warn", "error"];
    c.onEveryWebContentsEvent(
      "console-message",
      (p, d, f) => {
        u.processMessage({
          data: [f],
          level: l[d],
          variables: { processType: "renderer" }
        });
      }
    );
  }
  return gi;
}
var xi, Tu;
function ub() {
  if (Tu) return xi;
  Tu = 1;
  class t {
    constructor({
      externalApi: r,
      logFn: s = void 0,
      onError: a = void 0,
      showDialog: i = void 0
    } = {}) {
      J(this, "externalApi");
      J(this, "isActive", !1);
      J(this, "logFn");
      J(this, "onError");
      J(this, "showDialog", !0);
      this.createIssue = this.createIssue.bind(this), this.handleError = this.handleError.bind(this), this.handleRejection = this.handleRejection.bind(this), this.setOptions({ externalApi: r, logFn: s, onError: a, showDialog: i }), this.startCatching = this.startCatching.bind(this), this.stopCatching = this.stopCatching.bind(this);
    }
    handle(r, {
      logFn: s = this.logFn,
      onError: a = this.onError,
      processType: i = "browser",
      showDialog: o = this.showDialog,
      errorName: c = ""
    } = {}) {
      var u;
      r = e(r);
      try {
        if (typeof a == "function") {
          const l = ((u = this.externalApi) == null ? void 0 : u.getVersions()) || {}, p = this.createIssue;
          if (a({
            createIssue: p,
            error: r,
            errorName: c,
            processType: i,
            versions: l
          }) === !1)
            return;
        }
        c ? s(c, r) : s(r), o && !c.includes("rejection") && this.externalApi && this.externalApi.showErrorBox(
          `A JavaScript error occurred in the ${i} process`,
          r.stack
        );
      } catch {
        console.error(r);
      }
    }
    setOptions({ externalApi: r, logFn: s, onError: a, showDialog: i }) {
      typeof r == "object" && (this.externalApi = r), typeof s == "function" && (this.logFn = s), typeof a == "function" && (this.onError = a), typeof i == "boolean" && (this.showDialog = i);
    }
    startCatching({ onError: r, showDialog: s } = {}) {
      this.isActive || (this.isActive = !0, this.setOptions({ onError: r, showDialog: s }), process.on("uncaughtException", this.handleError), process.on("unhandledRejection", this.handleRejection));
    }
    stopCatching() {
      this.isActive = !1, process.removeListener("uncaughtException", this.handleError), process.removeListener("unhandledRejection", this.handleRejection);
    }
    createIssue(r, s) {
      var a;
      (a = this.externalApi) == null || a.openUrl(
        `${r}?${new URLSearchParams(s).toString()}`
      );
    }
    handleError(r) {
      this.handle(r, { errorName: "Unhandled" });
    }
    handleRejection(r) {
      const s = r instanceof Error ? r : new Error(JSON.stringify(r));
      this.handle(s, { errorName: "Unhandled rejection" });
    }
  }
  function e(n) {
    if (n instanceof Error)
      return n;
    if (n && typeof n == "object") {
      if (n.message)
        return Object.assign(new Error(n.message), n);
      try {
        return new Error(JSON.stringify(n));
      } catch (r) {
        return new Error(`Couldn't normalize error ${String(n)}: ${r}`);
      }
    }
    return new Error(`Can't normalize error ${String(n)}`);
  }
  return xi = t, xi;
}
var bi, Pu;
function pb() {
  if (Pu) return bi;
  Pu = 1;
  class t {
    constructor(n = {}) {
      J(this, "disposers", []);
      J(this, "format", "{eventSource}#{eventName}:");
      J(this, "formatters", {
        app: {
          "certificate-error": ({ args: n }) => this.arrayToObject(n.slice(1, 4), [
            "url",
            "error",
            "certificate"
          ]),
          "child-process-gone": ({ args: n }) => n.length === 1 ? n[0] : n,
          "render-process-gone": ({ args: [n, r] }) => r && typeof r == "object" ? { ...r, ...this.getWebContentsDetails(n) } : []
        },
        webContents: {
          "console-message": ({ args: [n, r, s, a] }) => {
            if (!(n < 3))
              return { message: r, source: `${a}:${s}` };
          },
          "did-fail-load": ({ args: n }) => this.arrayToObject(n, [
            "errorCode",
            "errorDescription",
            "validatedURL",
            "isMainFrame",
            "frameProcessId",
            "frameRoutingId"
          ]),
          "did-fail-provisional-load": ({ args: n }) => this.arrayToObject(n, [
            "errorCode",
            "errorDescription",
            "validatedURL",
            "isMainFrame",
            "frameProcessId",
            "frameRoutingId"
          ]),
          "plugin-crashed": ({ args: n }) => this.arrayToObject(n, ["name", "version"]),
          "preload-error": ({ args: n }) => this.arrayToObject(n, ["preloadPath", "error"])
        }
      });
      J(this, "events", {
        app: {
          "certificate-error": !0,
          "child-process-gone": !0,
          "render-process-gone": !0
        },
        webContents: {
          // 'console-message': true,
          "did-fail-load": !0,
          "did-fail-provisional-load": !0,
          "plugin-crashed": !0,
          "preload-error": !0,
          unresponsive: !0
        }
      });
      J(this, "externalApi");
      J(this, "level", "error");
      J(this, "scope", "");
      this.setOptions(n);
    }
    setOptions({
      events: n,
      externalApi: r,
      level: s,
      logger: a,
      format: i,
      formatters: o,
      scope: c
    }) {
      typeof n == "object" && (this.events = n), typeof r == "object" && (this.externalApi = r), typeof s == "string" && (this.level = s), typeof a == "object" && (this.logger = a), (typeof i == "string" || typeof i == "function") && (this.format = i), typeof o == "object" && (this.formatters = o), typeof c == "string" && (this.scope = c);
    }
    startLogging(n = {}) {
      this.setOptions(n), this.disposeListeners();
      for (const r of this.getEventNames(this.events.app))
        this.disposers.push(
          this.externalApi.onAppEvent(r, (...s) => {
            this.handleEvent({ eventSource: "app", eventName: r, handlerArgs: s });
          })
        );
      for (const r of this.getEventNames(this.events.webContents))
        this.disposers.push(
          this.externalApi.onEveryWebContentsEvent(
            r,
            (...s) => {
              this.handleEvent(
                { eventSource: "webContents", eventName: r, handlerArgs: s }
              );
            }
          )
        );
    }
    stopLogging() {
      this.disposeListeners();
    }
    arrayToObject(n, r) {
      const s = {};
      return r.forEach((a, i) => {
        s[a] = n[i];
      }), n.length > r.length && (s.unknownArgs = n.slice(r.length)), s;
    }
    disposeListeners() {
      this.disposers.forEach((n) => n()), this.disposers = [];
    }
    formatEventLog({ eventName: n, eventSource: r, handlerArgs: s }) {
      var p;
      const [a, ...i] = s;
      if (typeof this.format == "function")
        return this.format({ args: i, event: a, eventName: n, eventSource: r });
      const o = (p = this.formatters[r]) == null ? void 0 : p[n];
      let c = i;
      if (typeof o == "function" && (c = o({ args: i, event: a, eventName: n, eventSource: r })), !c)
        return;
      const u = {};
      return Array.isArray(c) ? u.args = c : typeof c == "object" && Object.assign(u, c), r === "webContents" && Object.assign(u, this.getWebContentsDetails(a == null ? void 0 : a.sender)), [this.format.replace("{eventSource}", r === "app" ? "App" : "WebContents").replace("{eventName}", n), u];
    }
    getEventNames(n) {
      return !n || typeof n != "object" ? [] : Object.entries(n).filter(([r, s]) => s).map(([r]) => r);
    }
    getWebContentsDetails(n) {
      if (!(n != null && n.loadURL))
        return {};
      try {
        return {
          webContents: {
            id: n.id,
            url: n.getURL()
          }
        };
      } catch {
        return {};
      }
    }
    handleEvent({ eventName: n, eventSource: r, handlerArgs: s }) {
      var i;
      const a = this.formatEventLog({ eventName: n, eventSource: r, handlerArgs: s });
      if (a) {
        const o = this.scope ? this.logger.scope(this.scope) : this.logger;
        (i = o == null ? void 0 : o[this.level]) == null || i.call(o, ...a);
      }
    }
  }
  return bi = t, bi;
}
var _i, ku;
function Sf() {
  if (ku) return _i;
  ku = 1;
  const { transform: t } = hn();
  _i = {
    concatFirstStringElements: e,
    formatScope: r,
    formatText: a,
    formatVariables: s,
    timeZoneFromOffset: n,
    format({ message: i, logger: o, transport: c, data: u = i == null ? void 0 : i.data }) {
      switch (typeof c.format) {
        case "string":
          return t({
            message: i,
            logger: o,
            transforms: [s, r, a],
            transport: c,
            initialData: [c.format, ...u]
          });
        case "function":
          return c.format({
            data: u,
            level: (i == null ? void 0 : i.level) || "info",
            logger: o,
            message: i,
            transport: c
          });
        default:
          return u;
      }
    }
  };
  function e({ data: i }) {
    return typeof i[0] != "string" || typeof i[1] != "string" || i[0].match(/%[1cdfiOos]/) ? i : [`${i[0]} ${i[1]}`, ...i.slice(2)];
  }
  function n(i) {
    const o = Math.abs(i), c = i > 0 ? "-" : "+", u = Math.floor(o / 60).toString().padStart(2, "0"), l = (o % 60).toString().padStart(2, "0");
    return `${c}${u}:${l}`;
  }
  function r({ data: i, logger: o, message: c }) {
    const { defaultLabel: u, labelLength: l } = (o == null ? void 0 : o.scope) || {}, p = i[0];
    let d = c.scope;
    d || (d = u);
    let f;
    return d === "" ? f = l > 0 ? "".padEnd(l + 3) : "" : typeof d == "string" ? f = ` (${d})`.padEnd(l + 3) : f = "", i[0] = p.replace("{scope}", f), i;
  }
  function s({ data: i, message: o }) {
    let c = i[0];
    if (typeof c != "string")
      return i;
    c = c.replace("{level}]", `${o.level}]`.padEnd(6, " "));
    const u = o.date || /* @__PURE__ */ new Date();
    return i[0] = c.replace(/\{(\w+)}/g, (l, p) => {
      var d;
      switch (p) {
        case "level":
          return o.level || "info";
        case "logId":
          return o.logId;
        case "y":
          return u.getFullYear().toString(10);
        case "m":
          return (u.getMonth() + 1).toString(10).padStart(2, "0");
        case "d":
          return u.getDate().toString(10).padStart(2, "0");
        case "h":
          return u.getHours().toString(10).padStart(2, "0");
        case "i":
          return u.getMinutes().toString(10).padStart(2, "0");
        case "s":
          return u.getSeconds().toString(10).padStart(2, "0");
        case "ms":
          return u.getMilliseconds().toString(10).padStart(3, "0");
        case "z":
          return n(u.getTimezoneOffset());
        case "iso":
          return u.toISOString();
        default:
          return ((d = o.variables) == null ? void 0 : d[p]) || l;
      }
    }).trim(), i;
  }
  function a({ data: i }) {
    const o = i[0];
    if (typeof o != "string")
      return i;
    if (o.lastIndexOf("{text}") === o.length - 6)
      return i[0] = o.replace(/\s?{text}/, ""), i[0] === "" && i.shift(), i;
    const u = o.split("{text}");
    let l = [];
    return u[0] !== "" && l.push(u[0]), l = l.concat(i.slice(1)), u[1] !== "" && l.push(u[1]), l;
  }
  return _i;
}
var wi = { exports: {} }, Au;
function Ys() {
  return Au || (Au = 1, function(t) {
    const e = qt;
    t.exports = {
      serialize: r,
      maxDepth({ data: s, transport: a, depth: i = (a == null ? void 0 : a.depth) ?? 6 }) {
        if (!s)
          return s;
        if (i < 1)
          return Array.isArray(s) ? "[array]" : typeof s == "object" && s ? "[object]" : s;
        if (Array.isArray(s))
          return s.map((c) => t.exports.maxDepth({
            data: c,
            depth: i - 1
          }));
        if (typeof s != "object" || s && typeof s.toISOString == "function")
          return s;
        if (s === null)
          return null;
        if (s instanceof Error)
          return s;
        const o = {};
        for (const c in s)
          Object.prototype.hasOwnProperty.call(s, c) && (o[c] = t.exports.maxDepth({
            data: s[c],
            depth: i - 1
          }));
        return o;
      },
      toJSON({ data: s }) {
        return JSON.parse(JSON.stringify(s, n()));
      },
      toString({ data: s, transport: a }) {
        const i = (a == null ? void 0 : a.inspectOptions) || {}, o = s.map((c) => {
          if (c !== void 0)
            try {
              const u = JSON.stringify(c, n(), "  ");
              return u === void 0 ? void 0 : JSON.parse(u);
            } catch {
              return c;
            }
        });
        return e.formatWithOptions(i, ...o);
      }
    };
    function n(s = {}) {
      const a = /* @__PURE__ */ new WeakSet();
      return function(i, o) {
        if (typeof o == "object" && o !== null) {
          if (a.has(o))
            return;
          a.add(o);
        }
        return r(i, o, s);
      };
    }
    function r(s, a, i = {}) {
      const o = (i == null ? void 0 : i.serializeMapAndSet) !== !1;
      return a instanceof Error ? a.stack : a && (typeof a == "function" ? `[function] ${a.toString()}` : a instanceof Date ? a.toISOString() : o && a instanceof Map && Object.fromEntries ? Object.fromEntries(a) : o && a instanceof Set && Array.from ? Array.from(a) : a);
    }
  }(wi)), wi.exports;
}
var Ei, Nu;
function ac() {
  if (Nu) return Ei;
  Nu = 1, Ei = {
    transformStyles: r,
    applyAnsiStyles({ data: s }) {
      return r(s, e, n);
    },
    removeStyles({ data: s }) {
      return r(s, () => "");
    }
  };
  const t = {
    unset: "\x1B[0m",
    black: "\x1B[30m",
    red: "\x1B[31m",
    green: "\x1B[32m",
    yellow: "\x1B[33m",
    blue: "\x1B[34m",
    magenta: "\x1B[35m",
    cyan: "\x1B[36m",
    white: "\x1B[37m",
    gray: "\x1B[90m"
  };
  function e(s) {
    const a = s.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
    return t[a] || "";
  }
  function n(s) {
    return s + t.unset;
  }
  function r(s, a, i) {
    const o = {};
    return s.reduce((c, u, l, p) => {
      if (o[l])
        return c;
      if (typeof u == "string") {
        let d = l, f = !1;
        u = u.replace(/%[1cdfiOos]/g, (m) => {
          if (d += 1, m !== "%c")
            return m;
          const h = p[d];
          return typeof h == "string" ? (o[d] = !0, f = !0, a(h, u)) : m;
        }), f && i && (u = i(u));
      }
      return c.push(u), c;
    }, []);
  }
  return Ei;
}
var $i, ju;
function db() {
  if (ju) return $i;
  ju = 1;
  const {
    concatFirstStringElements: t,
    format: e
  } = Sf(), { maxDepth: n, toJSON: r } = Ys(), {
    applyAnsiStyles: s,
    removeStyles: a
  } = ac(), { transform: i } = hn(), o = {
    error: console.error,
    warn: console.warn,
    info: console.info,
    verbose: console.info,
    debug: console.debug,
    silly: console.debug,
    log: console.log
  };
  $i = l;
  const u = `%c{h}:{i}:{s}.{ms}{scope}%c ${process.platform === "win32" ? ">" : "›"} {text}`;
  Object.assign(l, {
    DEFAULT_FORMAT: u
  });
  function l(h) {
    return Object.assign(y, {
      colorMap: {
        error: "red",
        warn: "yellow",
        info: "cyan",
        verbose: "unset",
        debug: "gray",
        silly: "gray",
        default: "unset"
      },
      format: u,
      level: "silly",
      transforms: [
        p,
        e,
        f,
        t,
        n,
        r
      ],
      useStyles: process.env.FORCE_STYLES,
      writeFn({ message: g }) {
        (o[g.level] || o.info)(...g.data);
      }
    });
    function y(g) {
      const _ = i({ logger: h, message: g, transport: y });
      y.writeFn({
        message: { ...g, data: _ }
      });
    }
  }
  function p({ data: h, message: y, transport: g }) {
    return typeof g.format != "string" || !g.format.includes("%c") ? h : [
      `color:${m(y.level, g)}`,
      "color:unset",
      ...h
    ];
  }
  function d(h, y) {
    if (typeof h == "boolean")
      return h;
    const _ = y === "error" || y === "warn" ? process.stderr : process.stdout;
    return _ && _.isTTY;
  }
  function f(h) {
    const { message: y, transport: g } = h;
    return (d(g.useStyles, y.level) ? s : a)(h);
  }
  function m(h, y) {
    return y.colorMap[h] || y.colorMap.default;
  }
  return $i;
}
var Si, Iu;
function Rf() {
  if (Iu) return Si;
  Iu = 1;
  const t = Uo, e = mn, n = Er;
  class r extends t {
    constructor({
      path: o,
      writeOptions: c = { encoding: "utf8", flag: "a", mode: 438 },
      writeAsync: u = !1
    }) {
      super();
      J(this, "asyncWriteQueue", []);
      J(this, "bytesWritten", 0);
      J(this, "hasActiveAsyncWriting", !1);
      J(this, "path", null);
      J(this, "initialSize");
      J(this, "writeOptions", null);
      J(this, "writeAsync", !1);
      this.path = o, this.writeOptions = c, this.writeAsync = u;
    }
    get size() {
      return this.getSize();
    }
    clear() {
      try {
        return e.writeFileSync(this.path, "", {
          mode: this.writeOptions.mode,
          flag: "w"
        }), this.reset(), !0;
      } catch (o) {
        return o.code === "ENOENT" ? !0 : (this.emit("error", o, this), !1);
      }
    }
    crop(o) {
      try {
        const c = s(this.path, o || 4096);
        this.clear(), this.writeLine(`[log cropped]${n.EOL}${c}`);
      } catch (c) {
        this.emit(
          "error",
          new Error(`Couldn't crop file ${this.path}. ${c.message}`),
          this
        );
      }
    }
    getSize() {
      if (this.initialSize === void 0)
        try {
          const o = e.statSync(this.path);
          this.initialSize = o.size;
        } catch {
          this.initialSize = 0;
        }
      return this.initialSize + this.bytesWritten;
    }
    increaseBytesWrittenCounter(o) {
      this.bytesWritten += Buffer.byteLength(o, this.writeOptions.encoding);
    }
    isNull() {
      return !1;
    }
    nextAsyncWrite() {
      const o = this;
      if (this.hasActiveAsyncWriting || this.asyncWriteQueue.length === 0)
        return;
      const c = this.asyncWriteQueue.join("");
      this.asyncWriteQueue = [], this.hasActiveAsyncWriting = !0, e.writeFile(this.path, c, this.writeOptions, (u) => {
        o.hasActiveAsyncWriting = !1, u ? o.emit(
          "error",
          new Error(`Couldn't write to ${o.path}. ${u.message}`),
          this
        ) : o.increaseBytesWrittenCounter(c), o.nextAsyncWrite();
      });
    }
    reset() {
      this.initialSize = void 0, this.bytesWritten = 0;
    }
    toString() {
      return this.path;
    }
    writeLine(o) {
      if (o += n.EOL, this.writeAsync) {
        this.asyncWriteQueue.push(o), this.nextAsyncWrite();
        return;
      }
      try {
        e.writeFileSync(this.path, o, this.writeOptions), this.increaseBytesWrittenCounter(o);
      } catch (c) {
        this.emit(
          "error",
          new Error(`Couldn't write to ${this.path}. ${c.message}`),
          this
        );
      }
    }
  }
  Si = r;
  function s(a, i) {
    const o = Buffer.alloc(i), c = e.statSync(a), u = Math.min(c.size, i), l = Math.max(0, c.size - i), p = e.openSync(a, "r"), d = e.readSync(p, o, 0, u, l);
    return e.closeSync(p), o.toString("utf8", 0, d);
  }
  return Si;
}
var Ri, Cu;
function fb() {
  if (Cu) return Ri;
  Cu = 1;
  const t = Rf();
  class e extends t {
    clear() {
    }
    crop() {
    }
    getSize() {
      return 0;
    }
    isNull() {
      return !0;
    }
    writeLine() {
    }
  }
  return Ri = e, Ri;
}
var Oi, Lu;
function mb() {
  if (Lu) return Oi;
  Lu = 1;
  const t = Uo, e = mn, n = Et, r = Rf(), s = fb();
  class a extends t {
    constructor() {
      super();
      J(this, "store", {});
      this.emitError = this.emitError.bind(this);
    }
    /**
     * Provide a File object corresponding to the filePath
     * @param {string} filePath
     * @param {WriteOptions} [writeOptions]
     * @param {boolean} [writeAsync]
     * @return {File}
     */
    provide({ filePath: c, writeOptions: u = {}, writeAsync: l = !1 }) {
      let p;
      try {
        if (c = n.resolve(c), this.store[c])
          return this.store[c];
        p = this.createFile({ filePath: c, writeOptions: u, writeAsync: l });
      } catch (d) {
        p = new s({ path: c }), this.emitError(d, p);
      }
      return p.on("error", this.emitError), this.store[c] = p, p;
    }
    /**
     * @param {string} filePath
     * @param {WriteOptions} writeOptions
     * @param {boolean} async
     * @return {File}
     * @private
     */
    createFile({ filePath: c, writeOptions: u, writeAsync: l }) {
      return this.testFileWriting({ filePath: c, writeOptions: u }), new r({ path: c, writeOptions: u, writeAsync: l });
    }
    /**
     * @param {Error} error
     * @param {File} file
     * @private
     */
    emitError(c, u) {
      this.emit("error", c, u);
    }
    /**
     * @param {string} filePath
     * @param {WriteOptions} writeOptions
     * @private
     */
    testFileWriting({ filePath: c, writeOptions: u }) {
      e.mkdirSync(n.dirname(c), { recursive: !0 }), e.writeFileSync(c, "", { flag: "a", mode: u.mode });
    }
  }
  return Oi = a, Oi;
}
var Ti, Fu;
function hb() {
  if (Fu) return Ti;
  Fu = 1;
  const t = mn, e = Er, n = Et, r = mb(), { transform: s } = hn(), { removeStyles: a } = ac(), {
    format: i,
    concatFirstStringElements: o
  } = Sf(), { toString: c } = Ys();
  Ti = l;
  const u = new r();
  function l(d, { registry: f = u, externalApi: m } = {}) {
    let h;
    return f.listenerCount("error") < 1 && f.on("error", (k, C) => {
      _(`Can't write to ${C}`, k);
    }), Object.assign(y, {
      fileName: p(d.variables.processType),
      format: "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",
      getFile: R,
      inspectOptions: { depth: 5 },
      level: "silly",
      maxSize: 1024 ** 2,
      readAllLogs: P,
      sync: !0,
      transforms: [a, i, o, c],
      writeOptions: { flag: "a", mode: 438, encoding: "utf8" },
      archiveLogFn(k) {
        const C = k.toString(), B = n.parse(C);
        try {
          t.renameSync(C, n.join(B.dir, `${B.name}.old${B.ext}`));
        } catch (W) {
          _("Could not rotate log", W);
          const oe = Math.round(y.maxSize / 4);
          k.crop(Math.min(oe, 256 * 1024));
        }
      },
      resolvePathFn(k) {
        return n.join(k.libraryDefaultDir, k.fileName);
      },
      setAppName(k) {
        d.dependencies.externalApi.setAppName(k);
      }
    });
    function y(k) {
      const C = R(k);
      y.maxSize > 0 && C.size > y.maxSize && (y.archiveLogFn(C), C.reset());
      const W = s({ logger: d, message: k, transport: y });
      C.writeLine(W);
    }
    function g() {
      h || (h = Object.create(
        Object.prototype,
        {
          ...Object.getOwnPropertyDescriptors(
            m.getPathVariables()
          ),
          fileName: {
            get() {
              return y.fileName;
            },
            enumerable: !0
          }
        }
      ), typeof y.archiveLog == "function" && (y.archiveLogFn = y.archiveLog, _("archiveLog is deprecated. Use archiveLogFn instead")), typeof y.resolvePath == "function" && (y.resolvePathFn = y.resolvePath, _("resolvePath is deprecated. Use resolvePathFn instead")));
    }
    function _(k, C = null, B = "error") {
      const W = [`electron-log.transports.file: ${k}`];
      C && W.push(C), d.transports.console({ data: W, date: /* @__PURE__ */ new Date(), level: B });
    }
    function R(k) {
      g();
      const C = y.resolvePathFn(h, k);
      return f.provide({
        filePath: C,
        writeAsync: !y.sync,
        writeOptions: y.writeOptions
      });
    }
    function P({ fileFilter: k = (C) => C.endsWith(".log") } = {}) {
      g();
      const C = n.dirname(y.resolvePathFn(h));
      return t.existsSync(C) ? t.readdirSync(C).map((B) => n.join(C, B)).filter(k).map((B) => {
        try {
          return {
            path: B,
            lines: t.readFileSync(B, "utf8").split(e.EOL)
          };
        } catch {
          return null;
        }
      }).filter(Boolean) : [];
    }
  }
  function p(d = process.type) {
    switch (d) {
      case "renderer":
        return "renderer.log";
      case "worker":
        return "worker.log";
      default:
        return "main.log";
    }
  }
  return Ti;
}
var Pi, Du;
function vb() {
  if (Du) return Pi;
  Du = 1;
  const { maxDepth: t, toJSON: e } = Ys(), { transform: n } = hn();
  Pi = r;
  function r(s, { externalApi: a }) {
    return Object.assign(i, {
      depth: 3,
      eventId: "__ELECTRON_LOG_IPC__",
      level: s.isDev ? "silly" : !1,
      transforms: [e, t]
    }), a != null && a.isElectron() ? i : void 0;
    function i(o) {
      var c;
      ((c = o == null ? void 0 : o.variables) == null ? void 0 : c.processType) !== "renderer" && (a == null || a.sendIpc(i.eventId, {
        ...o,
        data: n({ logger: s, message: o, transport: i })
      }));
    }
  }
  return Pi;
}
var ki, Uu;
function yb() {
  if (Uu) return ki;
  Uu = 1;
  const t = xr, e = Bt, { transform: n } = hn(), { removeStyles: r } = ac(), { toJSON: s, maxDepth: a } = Ys();
  ki = i;
  function i(o) {
    return Object.assign(c, {
      client: { name: "electron-application" },
      depth: 6,
      level: !1,
      requestOptions: {},
      transforms: [r, s, a],
      makeBodyFn({ message: u }) {
        return JSON.stringify({
          client: c.client,
          data: u.data,
          date: u.date.getTime(),
          level: u.level,
          scope: u.scope,
          variables: u.variables
        });
      },
      processErrorFn({ error: u }) {
        o.processMessage(
          {
            data: [`electron-log: can't POST ${c.url}`, u],
            level: "warn"
          },
          { transports: ["console", "file"] }
        );
      },
      sendRequestFn({ serverUrl: u, requestOptions: l, body: p }) {
        const f = (u.startsWith("https:") ? e : t).request(u, {
          method: "POST",
          ...l,
          headers: {
            "Content-Type": "application/json",
            "Content-Length": p.length,
            ...l.headers
          }
        });
        return f.write(p), f.end(), f;
      }
    });
    function c(u) {
      if (!c.url)
        return;
      const l = c.makeBodyFn({
        logger: o,
        message: { ...u, data: n({ logger: o, message: u, transport: c }) },
        transport: c
      }), p = c.sendRequestFn({
        serverUrl: c.url,
        requestOptions: c.requestOptions,
        body: Buffer.from(l, "utf8")
      });
      p.on("error", (d) => c.processErrorFn({
        error: d,
        logger: o,
        message: u,
        request: p,
        transport: c
      }));
    }
  }
  return ki;
}
var Ai, zu;
function Of() {
  if (zu) return Ai;
  zu = 1;
  const t = Ef(), e = ub(), n = pb(), r = db(), s = hb(), a = vb(), i = yb();
  Ai = o;
  function o({ dependencies: c, initializeFn: u }) {
    var p;
    const l = new t({
      dependencies: c,
      errorHandler: new e(),
      eventLogger: new n(),
      initializeFn: u,
      isDev: (p = c.externalApi) == null ? void 0 : p.isDev(),
      logId: "default",
      transportFactories: {
        console: r,
        file: s,
        ipc: a,
        remote: i
      },
      variables: {
        processType: "main"
      }
    });
    return l.default = l, l.Logger = t, l.processInternalErrorFn = (d) => {
      l.transports.console.writeFn({
        message: {
          data: ["Unhandled electron-log error", d],
          level: "error"
        }
      });
    }, l;
  }
  return Ai;
}
var Ni, Mu;
function gb() {
  if (Mu) return Ni;
  Mu = 1;
  const t = zo, e = cb(), { initialize: n } = lb(), r = Of(), s = new e({ electron: t }), a = r({
    dependencies: { externalApi: s },
    initializeFn: n
  });
  Ni = a, s.onIpc("__ELECTRON_LOG__", (o, c) => {
    c.scope && a.Logger.getInstance(c).scope(c.scope);
    const u = new Date(c.date);
    i({
      ...c,
      date: u.getTime() ? u : /* @__PURE__ */ new Date()
    });
  }), s.onIpcInvoke("__ELECTRON_LOG__", (o, { cmd: c = "", logId: u }) => {
    switch (c) {
      case "getOptions":
        return {
          levels: a.Logger.getInstance({ logId: u }).levels,
          logId: u
        };
      default:
        return i({ data: [`Unknown cmd '${c}'`], level: "error" }), {};
    }
  });
  function i(o) {
    var c;
    (c = a.Logger.getInstance(o)) == null || c.processMessage(o);
  }
  return Ni;
}
var ji, qu;
function xb() {
  if (qu) return ji;
  qu = 1;
  const t = $f(), e = Of(), n = new t();
  return ji = e({
    dependencies: { externalApi: n }
  }), ji;
}
const bb = typeof process > "u" || process.type === "renderer" || process.type === "worker", _b = typeof process == "object" && process.type === "browser";
bb ? (wf(), ys.exports = ib()) : _b ? ys.exports = gb() : ys.exports = xb();
var wb = ys.exports;
const re = /* @__PURE__ */ Vn(wb);
var Cs = { exports: {} };
const Tf = ["nodebuffer", "arraybuffer", "fragments"], Pf = typeof Blob < "u";
Pf && Tf.push("blob");
var Vt = {
  BINARY_TYPES: Tf,
  CLOSE_TIMEOUT: 3e4,
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
  hasBlob: Pf,
  kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
  kListener: Symbol("kListener"),
  kStatusCode: Symbol("status-code"),
  kWebSocket: Symbol("websocket"),
  NOOP: () => {
  }
}, Mr = { exports: {} };
function kf(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qr = { exports: {} }, Ii, Bu;
function Eb() {
  if (Bu) return Ii;
  Bu = 1;
  var t = mn, e = Et, n = Er, r = typeof __webpack_require__ == "function" ? __non_webpack_require__ : kf, s = process.config && process.config.variables || {}, a = !!process.env.PREBUILDS_ONLY, i = process.versions.modules, o = oe() ? "electron" : W() ? "node-webkit" : "node", c = process.env.npm_config_arch || n.arch(), u = process.env.npm_config_platform || n.platform(), l = process.env.LIBC || (fe(u) ? "musl" : "glibc"), p = process.env.ARM_VERSION || (c === "arm64" ? "8" : s.arm_version) || "", d = (process.versions.uv || "").split(".")[0];
  Ii = f;
  function f(N) {
    return r(f.resolve(N));
  }
  f.resolve = f.path = function(N) {
    N = e.resolve(N || ".");
    try {
      var L = r(e.join(N, "package.json")).name.toUpperCase().replace(/-/g, "_");
      process.env[L + "_PREBUILD"] && (N = process.env[L + "_PREBUILD"]);
    } catch {
    }
    if (!a) {
      var z = h(e.join(N, "build/Release"), y);
      if (z) return z;
      var T = h(e.join(N, "build/Debug"), y);
      if (T) return T;
    }
    var A = M(N);
    if (A) return A;
    var j = M(e.dirname(process.execPath));
    if (j) return j;
    var I = [
      "platform=" + u,
      "arch=" + c,
      "runtime=" + o,
      "abi=" + i,
      "uv=" + d,
      p ? "armv=" + p : "",
      "libc=" + l,
      "node=" + process.versions.node,
      process.versions.electron ? "electron=" + process.versions.electron : "",
      typeof __webpack_require__ == "function" ? "webpack=true" : ""
      // eslint-disable-line
    ].filter(Boolean).join(" ");
    throw new Error("No native build was found for " + I + `
    loaded from: ` + N + `
`);
    function M(D) {
      var S = m(e.join(D, "prebuilds")).map(g), x = S.filter(_(u, c)).sort(R)[0];
      if (x) {
        var $ = e.join(D, "prebuilds", x.name), w = m($).map(P), v = w.filter(k(o, i)), b = v.sort(B(o))[0];
        if (b) return e.join($, b.file);
      }
    }
  };
  function m(N) {
    try {
      return t.readdirSync(N);
    } catch {
      return [];
    }
  }
  function h(N, L) {
    var z = m(N).filter(L);
    return z[0] && e.join(N, z[0]);
  }
  function y(N) {
    return /\.node$/.test(N);
  }
  function g(N) {
    var L = N.split("-");
    if (L.length === 2) {
      var z = L[0], T = L[1].split("+");
      if (z && T.length && T.every(Boolean))
        return { name: N, platform: z, architectures: T };
    }
  }
  function _(N, L) {
    return function(z) {
      return z == null || z.platform !== N ? !1 : z.architectures.includes(L);
    };
  }
  function R(N, L) {
    return N.architectures.length - L.architectures.length;
  }
  function P(N) {
    var L = N.split("."), z = L.pop(), T = { file: N, specificity: 0 };
    if (z === "node") {
      for (var A = 0; A < L.length; A++) {
        var j = L[A];
        if (j === "node" || j === "electron" || j === "node-webkit")
          T.runtime = j;
        else if (j === "napi")
          T.napi = !0;
        else if (j.slice(0, 3) === "abi")
          T.abi = j.slice(3);
        else if (j.slice(0, 2) === "uv")
          T.uv = j.slice(2);
        else if (j.slice(0, 4) === "armv")
          T.armv = j.slice(4);
        else if (j === "glibc" || j === "musl")
          T.libc = j;
        else
          continue;
        T.specificity++;
      }
      return T;
    }
  }
  function k(N, L) {
    return function(z) {
      return !(z == null || z.runtime && z.runtime !== N && !C(z) || z.abi && z.abi !== L && !z.napi || z.uv && z.uv !== d || z.armv && z.armv !== p || z.libc && z.libc !== l);
    };
  }
  function C(N) {
    return N.runtime === "node" && N.napi;
  }
  function B(N) {
    return function(L, z) {
      return L.runtime !== z.runtime ? L.runtime === N ? -1 : 1 : L.abi !== z.abi ? L.abi ? -1 : 1 : L.specificity !== z.specificity ? L.specificity > z.specificity ? -1 : 1 : 0;
    };
  }
  function W() {
    return !!(process.versions && process.versions.nw);
  }
  function oe() {
    return process.versions && process.versions.electron || process.env.ELECTRON_RUN_AS_NODE ? !0 : typeof window < "u" && window.process && window.process.type === "renderer";
  }
  function fe(N) {
    return N === "linux" && t.existsSync("/etc/alpine-release");
  }
  return f.parseTags = P, f.matchTags = k, f.compareTags = B, f.parseTuple = g, f.matchTuple = _, f.compareTuples = R, Ii;
}
var Vu;
function Af() {
  if (Vu) return qr.exports;
  Vu = 1;
  const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : kf;
  return typeof t.addon == "function" ? qr.exports = t.addon.bind(t) : qr.exports = Eb(), qr.exports;
}
var Ci, Gu;
function $b() {
  return Gu || (Gu = 1, Ci = { mask: (n, r, s, a, i) => {
    for (var o = 0; o < i; o++)
      s[a + o] = n[o] ^ r[o & 3];
  }, unmask: (n, r) => {
    const s = n.length;
    for (var a = 0; a < s; a++)
      n[a] ^= r[a & 3];
  } }), Ci;
}
var Hu;
function Sb() {
  if (Hu) return Mr.exports;
  Hu = 1;
  try {
    Mr.exports = Af()(__dirname);
  } catch {
    Mr.exports = $b();
  }
  return Mr.exports;
}
var Rb, Ob;
const { EMPTY_BUFFER: Tb } = Vt, bo = Buffer[Symbol.species];
function Pb(t, e) {
  if (t.length === 0) return Tb;
  if (t.length === 1) return t[0];
  const n = Buffer.allocUnsafe(e);
  let r = 0;
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    n.set(a, r), r += a.length;
  }
  return r < e ? new bo(n.buffer, n.byteOffset, r) : n;
}
function Nf(t, e, n, r, s) {
  for (let a = 0; a < s; a++)
    n[r + a] = t[a] ^ e[a & 3];
}
function jf(t, e) {
  for (let n = 0; n < t.length; n++)
    t[n] ^= e[n & 3];
}
function kb(t) {
  return t.length === t.buffer.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.length);
}
function _o(t) {
  if (_o.readOnly = !0, Buffer.isBuffer(t)) return t;
  let e;
  return t instanceof ArrayBuffer ? e = new bo(t) : ArrayBuffer.isView(t) ? e = new bo(t.buffer, t.byteOffset, t.byteLength) : (e = Buffer.from(t), _o.readOnly = !1), e;
}
Cs.exports = {
  concat: Pb,
  mask: Nf,
  toArrayBuffer: kb,
  toBuffer: _o,
  unmask: jf
};
if (!process.env.WS_NO_BUFFER_UTIL)
  try {
    const t = Sb();
    Ob = Cs.exports.mask = function(e, n, r, s, a) {
      a < 48 ? Nf(e, n, r, s, a) : t.mask(e, n, r, s, a);
    }, Rb = Cs.exports.unmask = function(e, n) {
      e.length < 32 ? jf(e, n) : t.unmask(e, n);
    };
  } catch {
  }
var Zs = Cs.exports;
const Wu = Symbol("kDone"), Li = Symbol("kRun");
let Ab = class {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  constructor(e) {
    this[Wu] = () => {
      this.pending--, this[Li]();
    }, this.concurrency = e || 1 / 0, this.jobs = [], this.pending = 0;
  }
  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */
  add(e) {
    this.jobs.push(e), this[Li]();
  }
  /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */
  [Li]() {
    if (this.pending !== this.concurrency && this.jobs.length) {
      const e = this.jobs.shift();
      this.pending++, e(this[Wu]);
    }
  }
};
var Nb = Ab;
const tr = gt, Ku = Zs, jb = Nb, { kStatusCode: If } = Vt, Ib = Buffer[Symbol.species], Cb = Buffer.from([0, 0, 255, 255]), Ls = Symbol("permessage-deflate"), vt = Symbol("total-length"), Tn = Symbol("callback"), It = Symbol("buffers"), jn = Symbol("error");
let Br, Lb = class {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(e, n, r) {
    if (this._maxPayload = r | 0, this._options = e || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!n, this._deflate = null, this._inflate = null, this.params = null, !Br) {
      const s = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
      Br = new jb(s);
    }
  }
  /**
   * @type {String}
   */
  static get extensionName() {
    return "permessage-deflate";
  }
  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer() {
    const e = {};
    return this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0), this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0), this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits == null && (e.client_max_window_bits = !0), e;
  }
  /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */
  accept(e) {
    return e = this.normalizeParams(e), this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e), this.params;
  }
  /**
   * Releases all resources used by the extension.
   *
   * @public
   */
  cleanup() {
    if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
      const e = this._deflate[Tn];
      this._deflate.close(), this._deflate = null, e && e(
        new Error(
          "The deflate stream was closed while data was being processed"
        )
      );
    }
  }
  /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsServer(e) {
    const n = this._options, r = e.find((s) => !(n.serverNoContextTakeover === !1 && s.server_no_context_takeover || s.server_max_window_bits && (n.serverMaxWindowBits === !1 || typeof n.serverMaxWindowBits == "number" && n.serverMaxWindowBits > s.server_max_window_bits) || typeof n.clientMaxWindowBits == "number" && !s.client_max_window_bits));
    if (!r)
      throw new Error("None of the extension offers can be accepted");
    return n.serverNoContextTakeover && (r.server_no_context_takeover = !0), n.clientNoContextTakeover && (r.client_no_context_takeover = !0), typeof n.serverMaxWindowBits == "number" && (r.server_max_window_bits = n.serverMaxWindowBits), typeof n.clientMaxWindowBits == "number" ? r.client_max_window_bits = n.clientMaxWindowBits : (r.client_max_window_bits === !0 || n.clientMaxWindowBits === !1) && delete r.client_max_window_bits, r;
  }
  /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsClient(e) {
    const n = e[0];
    if (this._options.clientNoContextTakeover === !1 && n.client_no_context_takeover)
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    if (!n.client_max_window_bits)
      typeof this._options.clientMaxWindowBits == "number" && (n.client_max_window_bits = this._options.clientMaxWindowBits);
    else if (this._options.clientMaxWindowBits === !1 || typeof this._options.clientMaxWindowBits == "number" && n.client_max_window_bits > this._options.clientMaxWindowBits)
      throw new Error(
        'Unexpected or invalid parameter "client_max_window_bits"'
      );
    return n;
  }
  /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */
  normalizeParams(e) {
    return e.forEach((n) => {
      Object.keys(n).forEach((r) => {
        let s = n[r];
        if (s.length > 1)
          throw new Error(`Parameter "${r}" must have only a single value`);
        if (s = s[0], r === "client_max_window_bits") {
          if (s !== !0) {
            const a = +s;
            if (!Number.isInteger(a) || a < 8 || a > 15)
              throw new TypeError(
                `Invalid value for parameter "${r}": ${s}`
              );
            s = a;
          } else if (!this._isServer)
            throw new TypeError(
              `Invalid value for parameter "${r}": ${s}`
            );
        } else if (r === "server_max_window_bits") {
          const a = +s;
          if (!Number.isInteger(a) || a < 8 || a > 15)
            throw new TypeError(
              `Invalid value for parameter "${r}": ${s}`
            );
          s = a;
        } else if (r === "client_no_context_takeover" || r === "server_no_context_takeover") {
          if (s !== !0)
            throw new TypeError(
              `Invalid value for parameter "${r}": ${s}`
            );
        } else
          throw new Error(`Unknown parameter "${r}"`);
        n[r] = s;
      });
    }), e;
  }
  /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress(e, n, r) {
    Br.add((s) => {
      this._decompress(e, n, (a, i) => {
        s(), r(a, i);
      });
    });
  }
  /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress(e, n, r) {
    Br.add((s) => {
      this._compress(e, n, (a, i) => {
        s(), r(a, i);
      });
    });
  }
  /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _decompress(e, n, r) {
    const s = this._isServer ? "client" : "server";
    if (!this._inflate) {
      const a = `${s}_max_window_bits`, i = typeof this.params[a] != "number" ? tr.Z_DEFAULT_WINDOWBITS : this.params[a];
      this._inflate = tr.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits: i
      }), this._inflate[Ls] = this, this._inflate[vt] = 0, this._inflate[It] = [], this._inflate.on("error", Db), this._inflate.on("data", Cf);
    }
    this._inflate[Tn] = r, this._inflate.write(e), n && this._inflate.write(Cb), this._inflate.flush(() => {
      const a = this._inflate[jn];
      if (a) {
        this._inflate.close(), this._inflate = null, r(a);
        return;
      }
      const i = Ku.concat(
        this._inflate[It],
        this._inflate[vt]
      );
      this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[vt] = 0, this._inflate[It] = [], n && this.params[`${s}_no_context_takeover`] && this._inflate.reset()), r(null, i);
    });
  }
  /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress(e, n, r) {
    const s = this._isServer ? "server" : "client";
    if (!this._deflate) {
      const a = `${s}_max_window_bits`, i = typeof this.params[a] != "number" ? tr.Z_DEFAULT_WINDOWBITS : this.params[a];
      this._deflate = tr.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits: i
      }), this._deflate[vt] = 0, this._deflate[It] = [], this._deflate.on("data", Fb);
    }
    this._deflate[Tn] = r, this._deflate.write(e), this._deflate.flush(tr.Z_SYNC_FLUSH, () => {
      if (!this._deflate)
        return;
      let a = Ku.concat(
        this._deflate[It],
        this._deflate[vt]
      );
      n && (a = new Ib(a.buffer, a.byteOffset, a.length - 4)), this._deflate[Tn] = null, this._deflate[vt] = 0, this._deflate[It] = [], n && this.params[`${s}_no_context_takeover`] && this._deflate.reset(), r(null, a);
    });
  }
};
var ic = Lb;
function Fb(t) {
  this[It].push(t), this[vt] += t.length;
}
function Cf(t) {
  if (this[vt] += t.length, this[Ls]._maxPayload < 1 || this[vt] <= this[Ls]._maxPayload) {
    this[It].push(t);
    return;
  }
  this[jn] = new RangeError("Max payload size exceeded"), this[jn].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[jn][If] = 1009, this.removeListener("data", Cf), this.reset();
}
function Db(t) {
  if (this[Ls]._inflate = null, this[jn]) {
    this[Tn](this[jn]);
    return;
  }
  t[If] = 1007, this[Tn](t);
}
var Fs = { exports: {} }, Vr = { exports: {} }, Fi, Ju;
function Ub() {
  if (Ju) return Fi;
  Ju = 1;
  function t(e) {
    const n = e.length;
    let r = 0;
    for (; r < n; )
      if (!(e[r] & 128))
        r++;
      else if ((e[r] & 224) === 192) {
        if (r + 1 === n || (e[r + 1] & 192) !== 128 || (e[r] & 254) === 192)
          return !1;
        r += 2;
      } else if ((e[r] & 240) === 224) {
        if (r + 2 >= n || (e[r + 1] & 192) !== 128 || (e[r + 2] & 192) !== 128 || e[r] === 224 && (e[r + 1] & 224) === 128 || // overlong
        e[r] === 237 && (e[r + 1] & 224) === 160)
          return !1;
        r += 3;
      } else if ((e[r] & 248) === 240) {
        if (r + 3 >= n || (e[r + 1] & 192) !== 128 || (e[r + 2] & 192) !== 128 || (e[r + 3] & 192) !== 128 || e[r] === 240 && (e[r + 1] & 240) === 128 || // overlong
        e[r] === 244 && e[r + 1] > 143 || e[r] > 244)
          return !1;
        r += 4;
      } else
        return !1;
    return !0;
  }
  return Fi = t, Fi;
}
var Xu;
function zb() {
  if (Xu) return Vr.exports;
  Xu = 1;
  try {
    Vr.exports = Af()(__dirname);
  } catch {
    Vr.exports = Ub();
  }
  return Vr.exports;
}
var Yu;
const { isUtf8: Zu } = Nh, { hasBlob: Mb } = Vt, qb = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // 0 - 15
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // 16 - 31
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  // 32 - 47
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  // 48 - 63
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  // 64 - 79
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  // 80 - 95
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  // 96 - 111
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  0
  // 112 - 127
];
function Bb(t) {
  return t >= 1e3 && t <= 1014 && t !== 1004 && t !== 1005 && t !== 1006 || t >= 3e3 && t <= 4999;
}
function wo(t) {
  const e = t.length;
  let n = 0;
  for (; n < e; )
    if (!(t[n] & 128))
      n++;
    else if ((t[n] & 224) === 192) {
      if (n + 1 === e || (t[n + 1] & 192) !== 128 || (t[n] & 254) === 192)
        return !1;
      n += 2;
    } else if ((t[n] & 240) === 224) {
      if (n + 2 >= e || (t[n + 1] & 192) !== 128 || (t[n + 2] & 192) !== 128 || t[n] === 224 && (t[n + 1] & 224) === 128 || // Overlong
      t[n] === 237 && (t[n + 1] & 224) === 160)
        return !1;
      n += 3;
    } else if ((t[n] & 248) === 240) {
      if (n + 3 >= e || (t[n + 1] & 192) !== 128 || (t[n + 2] & 192) !== 128 || (t[n + 3] & 192) !== 128 || t[n] === 240 && (t[n + 1] & 240) === 128 || // Overlong
      t[n] === 244 && t[n + 1] > 143 || t[n] > 244)
        return !1;
      n += 4;
    } else
      return !1;
  return !0;
}
function Vb(t) {
  return Mb && typeof t == "object" && typeof t.arrayBuffer == "function" && typeof t.type == "string" && typeof t.stream == "function" && (t[Symbol.toStringTag] === "Blob" || t[Symbol.toStringTag] === "File");
}
Fs.exports = {
  isBlob: Vb,
  isValidStatusCode: Bb,
  isValidUTF8: wo,
  tokenChars: qb
};
if (Zu)
  Yu = Fs.exports.isValidUTF8 = function(t) {
    return t.length < 24 ? wo(t) : Zu(t);
  };
else if (!process.env.WS_NO_UTF_8_VALIDATE)
  try {
    const t = zb();
    Yu = Fs.exports.isValidUTF8 = function(e) {
      return e.length < 32 ? wo(e) : t(e);
    };
  } catch {
  }
var Nr = Fs.exports;
const { Writable: Gb } = xe, Qu = ic, {
  BINARY_TYPES: Hb,
  EMPTY_BUFFER: ep,
  kStatusCode: Wb,
  kWebSocket: Kb
} = Vt, { concat: Di, toArrayBuffer: Jb, unmask: Xb } = Zs, { isValidStatusCode: Yb, isValidUTF8: tp } = Nr, Gr = Buffer[Symbol.species], Ve = 0, np = 1, rp = 2, sp = 3, Ui = 4, zi = 5, Hr = 6;
let Zb = class extends Gb {
  /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */
  constructor(e = {}) {
    super(), this._allowSynchronousEvents = e.allowSynchronousEvents !== void 0 ? e.allowSynchronousEvents : !0, this._binaryType = e.binaryType || Hb[0], this._extensions = e.extensions || {}, this._isServer = !!e.isServer, this._maxPayload = e.maxPayload | 0, this._skipUTF8Validation = !!e.skipUTF8Validation, this[Kb] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = Ve;
  }
  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */
  _write(e, n, r) {
    if (this._opcode === 8 && this._state == Ve) return r();
    this._bufferedBytes += e.length, this._buffers.push(e), this.startLoop(r);
  }
  /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */
  consume(e) {
    if (this._bufferedBytes -= e, e === this._buffers[0].length) return this._buffers.shift();
    if (e < this._buffers[0].length) {
      const r = this._buffers[0];
      return this._buffers[0] = new Gr(
        r.buffer,
        r.byteOffset + e,
        r.length - e
      ), new Gr(r.buffer, r.byteOffset, e);
    }
    const n = Buffer.allocUnsafe(e);
    do {
      const r = this._buffers[0], s = n.length - e;
      e >= r.length ? n.set(this._buffers.shift(), s) : (n.set(new Uint8Array(r.buffer, r.byteOffset, e), s), this._buffers[0] = new Gr(
        r.buffer,
        r.byteOffset + e,
        r.length - e
      )), e -= r.length;
    } while (e > 0);
    return n;
  }
  /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */
  startLoop(e) {
    this._loop = !0;
    do
      switch (this._state) {
        case Ve:
          this.getInfo(e);
          break;
        case np:
          this.getPayloadLength16(e);
          break;
        case rp:
          this.getPayloadLength64(e);
          break;
        case sp:
          this.getMask();
          break;
        case Ui:
          this.getData(e);
          break;
        case zi:
        case Hr:
          this._loop = !1;
          return;
      }
    while (this._loop);
    this._errored || e();
  }
  /**
   * Reads the first two bytes of a frame.
   *
   * @param {Function} cb Callback
   * @private
   */
  getInfo(e) {
    if (this._bufferedBytes < 2) {
      this._loop = !1;
      return;
    }
    const n = this.consume(2);
    if (n[0] & 48) {
      const s = this.createError(
        RangeError,
        "RSV2 and RSV3 must be clear",
        !0,
        1002,
        "WS_ERR_UNEXPECTED_RSV_2_3"
      );
      e(s);
      return;
    }
    const r = (n[0] & 64) === 64;
    if (r && !this._extensions[Qu.extensionName]) {
      const s = this.createError(
        RangeError,
        "RSV1 must be clear",
        !0,
        1002,
        "WS_ERR_UNEXPECTED_RSV_1"
      );
      e(s);
      return;
    }
    if (this._fin = (n[0] & 128) === 128, this._opcode = n[0] & 15, this._payloadLength = n[1] & 127, this._opcode === 0) {
      if (r) {
        const s = this.createError(
          RangeError,
          "RSV1 must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1"
        );
        e(s);
        return;
      }
      if (!this._fragmented) {
        const s = this.createError(
          RangeError,
          "invalid opcode 0",
          !0,
          1002,
          "WS_ERR_INVALID_OPCODE"
        );
        e(s);
        return;
      }
      this._opcode = this._fragmented;
    } else if (this._opcode === 1 || this._opcode === 2) {
      if (this._fragmented) {
        const s = this.createError(
          RangeError,
          `invalid opcode ${this._opcode}`,
          !0,
          1002,
          "WS_ERR_INVALID_OPCODE"
        );
        e(s);
        return;
      }
      this._compressed = r;
    } else if (this._opcode > 7 && this._opcode < 11) {
      if (!this._fin) {
        const s = this.createError(
          RangeError,
          "FIN must be set",
          !0,
          1002,
          "WS_ERR_EXPECTED_FIN"
        );
        e(s);
        return;
      }
      if (r) {
        const s = this.createError(
          RangeError,
          "RSV1 must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1"
        );
        e(s);
        return;
      }
      if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
        const s = this.createError(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          !0,
          1002,
          "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
        );
        e(s);
        return;
      }
    } else {
      const s = this.createError(
        RangeError,
        `invalid opcode ${this._opcode}`,
        !0,
        1002,
        "WS_ERR_INVALID_OPCODE"
      );
      e(s);
      return;
    }
    if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (n[1] & 128) === 128, this._isServer) {
      if (!this._masked) {
        const s = this.createError(
          RangeError,
          "MASK must be set",
          !0,
          1002,
          "WS_ERR_EXPECTED_MASK"
        );
        e(s);
        return;
      }
    } else if (this._masked) {
      const s = this.createError(
        RangeError,
        "MASK must be clear",
        !0,
        1002,
        "WS_ERR_UNEXPECTED_MASK"
      );
      e(s);
      return;
    }
    this._payloadLength === 126 ? this._state = np : this._payloadLength === 127 ? this._state = rp : this.haveLength(e);
  }
  /**
   * Gets extended payload length (7+16).
   *
   * @param {Function} cb Callback
   * @private
   */
  getPayloadLength16(e) {
    if (this._bufferedBytes < 2) {
      this._loop = !1;
      return;
    }
    this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e);
  }
  /**
   * Gets extended payload length (7+64).
   *
   * @param {Function} cb Callback
   * @private
   */
  getPayloadLength64(e) {
    if (this._bufferedBytes < 8) {
      this._loop = !1;
      return;
    }
    const n = this.consume(8), r = n.readUInt32BE(0);
    if (r > Math.pow(2, 21) - 1) {
      const s = this.createError(
        RangeError,
        "Unsupported WebSocket frame: payload length > 2^53 - 1",
        !1,
        1009,
        "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
      );
      e(s);
      return;
    }
    this._payloadLength = r * Math.pow(2, 32) + n.readUInt32BE(4), this.haveLength(e);
  }
  /**
   * Payload length has been read.
   *
   * @param {Function} cb Callback
   * @private
   */
  haveLength(e) {
    if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
      const n = this.createError(
        RangeError,
        "Max payload size exceeded",
        !1,
        1009,
        "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
      );
      e(n);
      return;
    }
    this._masked ? this._state = sp : this._state = Ui;
  }
  /**
   * Reads mask bytes.
   *
   * @private
   */
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = !1;
      return;
    }
    this._mask = this.consume(4), this._state = Ui;
  }
  /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @private
   */
  getData(e) {
    let n = ep;
    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = !1;
        return;
      }
      n = this.consume(this._payloadLength), this._masked && this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3] && Xb(n, this._mask);
    }
    if (this._opcode > 7) {
      this.controlMessage(n, e);
      return;
    }
    if (this._compressed) {
      this._state = zi, this.decompress(n, e);
      return;
    }
    n.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(n)), this.dataMessage(e);
  }
  /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */
  decompress(e, n) {
    this._extensions[Qu.extensionName].decompress(e, this._fin, (s, a) => {
      if (s) return n(s);
      if (a.length) {
        if (this._messageLength += a.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
          const i = this.createError(
            RangeError,
            "Max payload size exceeded",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
          );
          n(i);
          return;
        }
        this._fragments.push(a);
      }
      this.dataMessage(n), this._state === Ve && this.startLoop(n);
    });
  }
  /**
   * Handles a data message.
   *
   * @param {Function} cb Callback
   * @private
   */
  dataMessage(e) {
    if (!this._fin) {
      this._state = Ve;
      return;
    }
    const n = this._messageLength, r = this._fragments;
    if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
      let s;
      this._binaryType === "nodebuffer" ? s = Di(r, n) : this._binaryType === "arraybuffer" ? s = Jb(Di(r, n)) : this._binaryType === "blob" ? s = new Blob(r) : s = r, this._allowSynchronousEvents ? (this.emit("message", s, !0), this._state = Ve) : (this._state = Hr, setImmediate(() => {
        this.emit("message", s, !0), this._state = Ve, this.startLoop(e);
      }));
    } else {
      const s = Di(r, n);
      if (!this._skipUTF8Validation && !tp(s)) {
        const a = this.createError(
          Error,
          "invalid UTF-8 sequence",
          !0,
          1007,
          "WS_ERR_INVALID_UTF8"
        );
        e(a);
        return;
      }
      this._state === zi || this._allowSynchronousEvents ? (this.emit("message", s, !1), this._state = Ve) : (this._state = Hr, setImmediate(() => {
        this.emit("message", s, !1), this._state = Ve, this.startLoop(e);
      }));
    }
  }
  /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  controlMessage(e, n) {
    if (this._opcode === 8) {
      if (e.length === 0)
        this._loop = !1, this.emit("conclude", 1005, ep), this.end();
      else {
        const r = e.readUInt16BE(0);
        if (!Yb(r)) {
          const a = this.createError(
            RangeError,
            `invalid status code ${r}`,
            !0,
            1002,
            "WS_ERR_INVALID_CLOSE_CODE"
          );
          n(a);
          return;
        }
        const s = new Gr(
          e.buffer,
          e.byteOffset + 2,
          e.length - 2
        );
        if (!this._skipUTF8Validation && !tp(s)) {
          const a = this.createError(
            Error,
            "invalid UTF-8 sequence",
            !0,
            1007,
            "WS_ERR_INVALID_UTF8"
          );
          n(a);
          return;
        }
        this._loop = !1, this.emit("conclude", r, s), this.end();
      }
      this._state = Ve;
      return;
    }
    this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = Ve) : (this._state = Hr, setImmediate(() => {
      this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = Ve, this.startLoop(n);
    }));
  }
  /**
   * Builds an error object.
   *
   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
   * @param {String} message The error message
   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
   *     `message`
   * @param {Number} statusCode The status code
   * @param {String} errorCode The exposed error code
   * @return {(Error|RangeError)} The error
   * @private
   */
  createError(e, n, r, s, a) {
    this._loop = !1, this._errored = !0;
    const i = new e(
      r ? `Invalid WebSocket frame: ${n}` : n
    );
    return Error.captureStackTrace(i, this.createError), i.code = a, i[Wb] = s, i;
  }
};
var Qb = Zb;
const { Duplex: sN } = xe, { randomFillSync: e_ } = _r, ap = ic, { EMPTY_BUFFER: t_, kWebSocket: n_, NOOP: r_ } = Vt, { isBlob: xn, isValidStatusCode: s_ } = Nr, { mask: ip, toBuffer: Ht } = Zs, Ge = Symbol("kByteLength"), a_ = Buffer.alloc(4), gs = 8 * 1024;
let Wt, bn = gs;
const Je = 0, i_ = 1, o_ = 2;
let c_ = class Jt {
  /**
   * Creates a Sender instance.
   *
   * @param {Duplex} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */
  constructor(e, n, r) {
    this._extensions = n || {}, r && (this._generateMask = r, this._maskBuffer = Buffer.alloc(4)), this._socket = e, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = Je, this.onerror = r_, this[n_] = void 0;
  }
  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */
  static frame(e, n) {
    let r, s = !1, a = 2, i = !1;
    n.mask && (r = n.maskBuffer || a_, n.generateMask ? n.generateMask(r) : (bn === gs && (Wt === void 0 && (Wt = Buffer.alloc(gs)), e_(Wt, 0, gs), bn = 0), r[0] = Wt[bn++], r[1] = Wt[bn++], r[2] = Wt[bn++], r[3] = Wt[bn++]), i = (r[0] | r[1] | r[2] | r[3]) === 0, a = 6);
    let o;
    typeof e == "string" ? (!n.mask || i) && n[Ge] !== void 0 ? o = n[Ge] : (e = Buffer.from(e), o = e.length) : (o = e.length, s = n.mask && n.readOnly && !i);
    let c = o;
    o >= 65536 ? (a += 8, c = 127) : o > 125 && (a += 2, c = 126);
    const u = Buffer.allocUnsafe(s ? o + a : a);
    return u[0] = n.fin ? n.opcode | 128 : n.opcode, n.rsv1 && (u[0] |= 64), u[1] = c, c === 126 ? u.writeUInt16BE(o, 2) : c === 127 && (u[2] = u[3] = 0, u.writeUIntBE(o, 4, 6)), n.mask ? (u[1] |= 128, u[a - 4] = r[0], u[a - 3] = r[1], u[a - 2] = r[2], u[a - 1] = r[3], i ? [u, e] : s ? (ip(e, r, u, a, o), [u]) : (ip(e, r, e, 0, o), [u, e])) : [u, e];
  }
  /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */
  close(e, n, r, s) {
    let a;
    if (e === void 0)
      a = t_;
    else {
      if (typeof e != "number" || !s_(e))
        throw new TypeError("First argument must be a valid error code number");
      if (n === void 0 || !n.length)
        a = Buffer.allocUnsafe(2), a.writeUInt16BE(e, 0);
      else {
        const o = Buffer.byteLength(n);
        if (o > 123)
          throw new RangeError("The message must not be greater than 123 bytes");
        a = Buffer.allocUnsafe(2 + o), a.writeUInt16BE(e, 0), typeof n == "string" ? a.write(n, 2) : a.set(n, 2);
      }
    }
    const i = {
      [Ge]: a.length,
      fin: !0,
      generateMask: this._generateMask,
      mask: r,
      maskBuffer: this._maskBuffer,
      opcode: 8,
      readOnly: !1,
      rsv1: !1
    };
    this._state !== Je ? this.enqueue([this.dispatch, a, !1, i, s]) : this.sendFrame(Jt.frame(a, i), s);
  }
  /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  ping(e, n, r) {
    let s, a;
    if (typeof e == "string" ? (s = Buffer.byteLength(e), a = !1) : xn(e) ? (s = e.size, a = !1) : (e = Ht(e), s = e.length, a = Ht.readOnly), s > 125)
      throw new RangeError("The data size must not be greater than 125 bytes");
    const i = {
      [Ge]: s,
      fin: !0,
      generateMask: this._generateMask,
      mask: n,
      maskBuffer: this._maskBuffer,
      opcode: 9,
      readOnly: a,
      rsv1: !1
    };
    xn(e) ? this._state !== Je ? this.enqueue([this.getBlobData, e, !1, i, r]) : this.getBlobData(e, !1, i, r) : this._state !== Je ? this.enqueue([this.dispatch, e, !1, i, r]) : this.sendFrame(Jt.frame(e, i), r);
  }
  /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  pong(e, n, r) {
    let s, a;
    if (typeof e == "string" ? (s = Buffer.byteLength(e), a = !1) : xn(e) ? (s = e.size, a = !1) : (e = Ht(e), s = e.length, a = Ht.readOnly), s > 125)
      throw new RangeError("The data size must not be greater than 125 bytes");
    const i = {
      [Ge]: s,
      fin: !0,
      generateMask: this._generateMask,
      mask: n,
      maskBuffer: this._maskBuffer,
      opcode: 10,
      readOnly: a,
      rsv1: !1
    };
    xn(e) ? this._state !== Je ? this.enqueue([this.getBlobData, e, !1, i, r]) : this.getBlobData(e, !1, i, r) : this._state !== Je ? this.enqueue([this.dispatch, e, !1, i, r]) : this.sendFrame(Jt.frame(e, i), r);
  }
  /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */
  send(e, n, r) {
    const s = this._extensions[ap.extensionName];
    let a = n.binary ? 2 : 1, i = n.compress, o, c;
    typeof e == "string" ? (o = Buffer.byteLength(e), c = !1) : xn(e) ? (o = e.size, c = !1) : (e = Ht(e), o = e.length, c = Ht.readOnly), this._firstFragment ? (this._firstFragment = !1, i && s && s.params[s._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (i = o >= s._threshold), this._compress = i) : (i = !1, a = 0), n.fin && (this._firstFragment = !0);
    const u = {
      [Ge]: o,
      fin: n.fin,
      generateMask: this._generateMask,
      mask: n.mask,
      maskBuffer: this._maskBuffer,
      opcode: a,
      readOnly: c,
      rsv1: i
    };
    xn(e) ? this._state !== Je ? this.enqueue([this.getBlobData, e, this._compress, u, r]) : this.getBlobData(e, this._compress, u, r) : this._state !== Je ? this.enqueue([this.dispatch, e, this._compress, u, r]) : this.dispatch(e, this._compress, u, r);
  }
  /**
   * Gets the contents of a blob as binary data.
   *
   * @param {Blob} blob The blob
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     the data
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  getBlobData(e, n, r, s) {
    this._bufferedBytes += r[Ge], this._state = o_, e.arrayBuffer().then((a) => {
      if (this._socket.destroyed) {
        const o = new Error(
          "The socket was closed while the blob was being read"
        );
        process.nextTick(Eo, this, o, s);
        return;
      }
      this._bufferedBytes -= r[Ge];
      const i = Ht(a);
      n ? this.dispatch(i, n, r, s) : (this._state = Je, this.sendFrame(Jt.frame(i, r), s), this.dequeue());
    }).catch((a) => {
      process.nextTick(u_, this, a, s);
    });
  }
  /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  dispatch(e, n, r, s) {
    if (!n) {
      this.sendFrame(Jt.frame(e, r), s);
      return;
    }
    const a = this._extensions[ap.extensionName];
    this._bufferedBytes += r[Ge], this._state = i_, a.compress(e, r.fin, (i, o) => {
      if (this._socket.destroyed) {
        const c = new Error(
          "The socket was closed while data was being compressed"
        );
        Eo(this, c, s);
        return;
      }
      this._bufferedBytes -= r[Ge], this._state = Je, r.readOnly = !1, this.sendFrame(Jt.frame(o, r), s), this.dequeue();
    });
  }
  /**
   * Executes queued send operations.
   *
   * @private
   */
  dequeue() {
    for (; this._state === Je && this._queue.length; ) {
      const e = this._queue.shift();
      this._bufferedBytes -= e[3][Ge], Reflect.apply(e[0], this, e.slice(1));
    }
  }
  /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */
  enqueue(e) {
    this._bufferedBytes += e[3][Ge], this._queue.push(e);
  }
  /**
   * Sends a frame.
   *
   * @param {(Buffer | String)[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */
  sendFrame(e, n) {
    e.length === 2 ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], n), this._socket.uncork()) : this._socket.write(e[0], n);
  }
};
var l_ = c_;
function Eo(t, e, n) {
  typeof n == "function" && n(e);
  for (let r = 0; r < t._queue.length; r++) {
    const s = t._queue[r], a = s[s.length - 1];
    typeof a == "function" && a(e);
  }
}
function u_(t, e, n) {
  Eo(t, e, n), t.onerror(e);
}
const { kForOnEventAttribute: nr, kListener: Mi } = Vt, op = Symbol("kCode"), cp = Symbol("kData"), lp = Symbol("kError"), up = Symbol("kMessage"), pp = Symbol("kReason"), Pn = Symbol("kTarget"), dp = Symbol("kType"), fp = Symbol("kWasClean");
let Gn = class {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */
  constructor(e) {
    this[Pn] = null, this[dp] = e;
  }
  /**
   * @type {*}
   */
  get target() {
    return this[Pn];
  }
  /**
   * @type {String}
   */
  get type() {
    return this[dp];
  }
};
Object.defineProperty(Gn.prototype, "target", { enumerable: !0 });
Object.defineProperty(Gn.prototype, "type", { enumerable: !0 });
class Qs extends Gn {
  /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */
  constructor(e, n = {}) {
    super(e), this[op] = n.code === void 0 ? 0 : n.code, this[pp] = n.reason === void 0 ? "" : n.reason, this[fp] = n.wasClean === void 0 ? !1 : n.wasClean;
  }
  /**
   * @type {Number}
   */
  get code() {
    return this[op];
  }
  /**
   * @type {String}
   */
  get reason() {
    return this[pp];
  }
  /**
   * @type {Boolean}
   */
  get wasClean() {
    return this[fp];
  }
}
Object.defineProperty(Qs.prototype, "code", { enumerable: !0 });
Object.defineProperty(Qs.prototype, "reason", { enumerable: !0 });
Object.defineProperty(Qs.prototype, "wasClean", { enumerable: !0 });
class oc extends Gn {
  /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */
  constructor(e, n = {}) {
    super(e), this[lp] = n.error === void 0 ? null : n.error, this[up] = n.message === void 0 ? "" : n.message;
  }
  /**
   * @type {*}
   */
  get error() {
    return this[lp];
  }
  /**
   * @type {String}
   */
  get message() {
    return this[up];
  }
}
Object.defineProperty(oc.prototype, "error", { enumerable: !0 });
Object.defineProperty(oc.prototype, "message", { enumerable: !0 });
class Lf extends Gn {
  /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */
  constructor(e, n = {}) {
    super(e), this[cp] = n.data === void 0 ? null : n.data;
  }
  /**
   * @type {*}
   */
  get data() {
    return this[cp];
  }
}
Object.defineProperty(Lf.prototype, "data", { enumerable: !0 });
const p_ = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener(t, e, n = {}) {
    for (const s of this.listeners(t))
      if (!n[nr] && s[Mi] === e && !s[nr])
        return;
    let r;
    if (t === "message")
      r = function(a, i) {
        const o = new Lf("message", {
          data: i ? a : a.toString()
        });
        o[Pn] = this, Wr(e, this, o);
      };
    else if (t === "close")
      r = function(a, i) {
        const o = new Qs("close", {
          code: a,
          reason: i.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });
        o[Pn] = this, Wr(e, this, o);
      };
    else if (t === "error")
      r = function(a) {
        const i = new oc("error", {
          error: a,
          message: a.message
        });
        i[Pn] = this, Wr(e, this, i);
      };
    else if (t === "open")
      r = function() {
        const a = new Gn("open");
        a[Pn] = this, Wr(e, this, a);
      };
    else
      return;
    r[nr] = !!n[nr], r[Mi] = e, n.once ? this.once(t, r) : this.on(t, r);
  },
  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */
  removeEventListener(t, e) {
    for (const n of this.listeners(t))
      if (n[Mi] === e && !n[nr]) {
        this.removeListener(t, n);
        break;
      }
  }
};
var d_ = {
  EventTarget: p_
};
function Wr(t, e, n) {
  typeof t == "object" && t.handleEvent ? t.handleEvent.call(t, n) : t.call(e, n);
}
const { tokenChars: rr } = Nr;
function it(t, e, n) {
  t[e] === void 0 ? t[e] = [n] : t[e].push(n);
}
function f_(t) {
  const e = /* @__PURE__ */ Object.create(null);
  let n = /* @__PURE__ */ Object.create(null), r = !1, s = !1, a = !1, i, o, c = -1, u = -1, l = -1, p = 0;
  for (; p < t.length; p++)
    if (u = t.charCodeAt(p), i === void 0)
      if (l === -1 && rr[u] === 1)
        c === -1 && (c = p);
      else if (p !== 0 && (u === 32 || u === 9))
        l === -1 && c !== -1 && (l = p);
      else if (u === 59 || u === 44) {
        if (c === -1)
          throw new SyntaxError(`Unexpected character at index ${p}`);
        l === -1 && (l = p);
        const f = t.slice(c, l);
        u === 44 ? (it(e, f, n), n = /* @__PURE__ */ Object.create(null)) : i = f, c = l = -1;
      } else
        throw new SyntaxError(`Unexpected character at index ${p}`);
    else if (o === void 0)
      if (l === -1 && rr[u] === 1)
        c === -1 && (c = p);
      else if (u === 32 || u === 9)
        l === -1 && c !== -1 && (l = p);
      else if (u === 59 || u === 44) {
        if (c === -1)
          throw new SyntaxError(`Unexpected character at index ${p}`);
        l === -1 && (l = p), it(n, t.slice(c, l), !0), u === 44 && (it(e, i, n), n = /* @__PURE__ */ Object.create(null), i = void 0), c = l = -1;
      } else if (u === 61 && c !== -1 && l === -1)
        o = t.slice(c, p), c = l = -1;
      else
        throw new SyntaxError(`Unexpected character at index ${p}`);
    else if (s) {
      if (rr[u] !== 1)
        throw new SyntaxError(`Unexpected character at index ${p}`);
      c === -1 ? c = p : r || (r = !0), s = !1;
    } else if (a)
      if (rr[u] === 1)
        c === -1 && (c = p);
      else if (u === 34 && c !== -1)
        a = !1, l = p;
      else if (u === 92)
        s = !0;
      else
        throw new SyntaxError(`Unexpected character at index ${p}`);
    else if (u === 34 && t.charCodeAt(p - 1) === 61)
      a = !0;
    else if (l === -1 && rr[u] === 1)
      c === -1 && (c = p);
    else if (c !== -1 && (u === 32 || u === 9))
      l === -1 && (l = p);
    else if (u === 59 || u === 44) {
      if (c === -1)
        throw new SyntaxError(`Unexpected character at index ${p}`);
      l === -1 && (l = p);
      let f = t.slice(c, l);
      r && (f = f.replace(/\\/g, ""), r = !1), it(n, o, f), u === 44 && (it(e, i, n), n = /* @__PURE__ */ Object.create(null), i = void 0), o = void 0, c = l = -1;
    } else
      throw new SyntaxError(`Unexpected character at index ${p}`);
  if (c === -1 || a || u === 32 || u === 9)
    throw new SyntaxError("Unexpected end of input");
  l === -1 && (l = p);
  const d = t.slice(c, l);
  return i === void 0 ? it(e, d, n) : (o === void 0 ? it(n, d, !0) : r ? it(n, o, d.replace(/\\/g, "")) : it(n, o, d), it(e, i, n)), e;
}
function m_(t) {
  return Object.keys(t).map((e) => {
    let n = t[e];
    return Array.isArray(n) || (n = [n]), n.map((r) => [e].concat(
      Object.keys(r).map((s) => {
        let a = r[s];
        return Array.isArray(a) || (a = [a]), a.map((i) => i === !0 ? s : `${s}=${i}`).join("; ");
      })
    ).join("; ")).join(", ");
  }).join(", ");
}
var h_ = { format: m_, parse: f_ };
const v_ = Uo, y_ = Bt, g_ = xr, Ff = kh, x_ = Ah, { randomBytes: b_, createHash: __ } = _r, { Duplex: iN, Readable: oN } = xe, { URL: qi } = br, Ct = ic, w_ = Qb, E_ = l_, { isBlob: $_ } = Nr, {
  BINARY_TYPES: mp,
  CLOSE_TIMEOUT: S_,
  EMPTY_BUFFER: Kr,
  GUID: R_,
  kForOnEventAttribute: Bi,
  kListener: O_,
  kStatusCode: T_,
  kWebSocket: Ee,
  NOOP: Df
} = Vt, {
  EventTarget: { addEventListener: P_, removeEventListener: k_ }
} = d_, { format: A_, parse: N_ } = h_, { toBuffer: j_ } = Zs, Uf = Symbol("kAborted"), Vi = [8, 13], St = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], I_ = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
class Y extends v_ {
  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  constructor(e, n, r) {
    super(), this._binaryType = mp[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = Kr, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = Y.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, e !== null ? (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, n === void 0 ? n = [] : Array.isArray(n) || (typeof n == "object" && n !== null ? (r = n, n = []) : n = [n]), zf(this, e, n, r)) : (this._autoPong = r.autoPong, this._closeTimeout = r.closeTimeout, this._isServer = !0);
  }
  /**
   * For historical reasons, the custom "nodebuffer" type is used by the default
   * instead of "blob".
   *
   * @type {String}
   */
  get binaryType() {
    return this._binaryType;
  }
  set binaryType(e) {
    mp.includes(e) && (this._binaryType = e, this._receiver && (this._receiver._binaryType = e));
  }
  /**
   * @type {Number}
   */
  get bufferedAmount() {
    return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
  }
  /**
   * @type {String}
   */
  get extensions() {
    return Object.keys(this._extensions).join();
  }
  /**
   * @type {Boolean}
   */
  get isPaused() {
    return this._paused;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onclose() {
    return null;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onerror() {
    return null;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onopen() {
    return null;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onmessage() {
    return null;
  }
  /**
   * @type {String}
   */
  get protocol() {
    return this._protocol;
  }
  /**
   * @type {Number}
   */
  get readyState() {
    return this._readyState;
  }
  /**
   * @type {String}
   */
  get url() {
    return this._url;
  }
  /**
   * Set up the socket and the internal resources.
   *
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */
  setSocket(e, n, r) {
    const s = new w_({
      allowSynchronousEvents: r.allowSynchronousEvents,
      binaryType: this.binaryType,
      extensions: this._extensions,
      isServer: this._isServer,
      maxPayload: r.maxPayload,
      skipUTF8Validation: r.skipUTF8Validation
    }), a = new E_(e, this._extensions, r.generateMask);
    this._receiver = s, this._sender = a, this._socket = e, s[Ee] = this, a[Ee] = this, e[Ee] = this, s.on("conclude", D_), s.on("drain", U_), s.on("error", z_), s.on("message", M_), s.on("ping", q_), s.on("pong", B_), a.onerror = V_, e.setTimeout && e.setTimeout(0), e.setNoDelay && e.setNoDelay(), n.length > 0 && e.unshift(n), e.on("close", Bf), e.on("data", ea), e.on("end", Vf), e.on("error", Gf), this._readyState = Y.OPEN, this.emit("open");
  }
  /**
   * Emit the `'close'` event.
   *
   * @private
   */
  emitClose() {
    if (!this._socket) {
      this._readyState = Y.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
      return;
    }
    this._extensions[Ct.extensionName] && this._extensions[Ct.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = Y.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
  }
  /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */
  close(e, n) {
    if (this.readyState !== Y.CLOSED) {
      if (this.readyState === Y.CONNECTING) {
        qe(this, this._req, "WebSocket was closed before the connection was established");
        return;
      }
      if (this.readyState === Y.CLOSING) {
        this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
        return;
      }
      this._readyState = Y.CLOSING, this._sender.close(e, n, !this._isServer, (r) => {
        r || (this._closeFrameSent = !0, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
      }), qf(this);
    }
  }
  /**
   * Pause the socket.
   *
   * @public
   */
  pause() {
    this.readyState === Y.CONNECTING || this.readyState === Y.CLOSED || (this._paused = !0, this._socket.pause());
  }
  /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */
  ping(e, n, r) {
    if (this.readyState === Y.CONNECTING)
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    if (typeof e == "function" ? (r = e, e = n = void 0) : typeof n == "function" && (r = n, n = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== Y.OPEN) {
      Gi(this, e, r);
      return;
    }
    n === void 0 && (n = !this._isServer), this._sender.ping(e || Kr, n, r);
  }
  /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */
  pong(e, n, r) {
    if (this.readyState === Y.CONNECTING)
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    if (typeof e == "function" ? (r = e, e = n = void 0) : typeof n == "function" && (r = n, n = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== Y.OPEN) {
      Gi(this, e, r);
      return;
    }
    n === void 0 && (n = !this._isServer), this._sender.pong(e || Kr, n, r);
  }
  /**
   * Resume the socket.
   *
   * @public
   */
  resume() {
    this.readyState === Y.CONNECTING || this.readyState === Y.CLOSED || (this._paused = !1, this._receiver._writableState.needDrain || this._socket.resume());
  }
  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */
  send(e, n, r) {
    if (this.readyState === Y.CONNECTING)
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    if (typeof n == "function" && (r = n, n = {}), typeof e == "number" && (e = e.toString()), this.readyState !== Y.OPEN) {
      Gi(this, e, r);
      return;
    }
    const s = {
      binary: typeof e != "string",
      mask: !this._isServer,
      compress: !0,
      fin: !0,
      ...n
    };
    this._extensions[Ct.extensionName] || (s.compress = !1), this._sender.send(e || Kr, s, r);
  }
  /**
   * Forcibly close the connection.
   *
   * @public
   */
  terminate() {
    if (this.readyState !== Y.CLOSED) {
      if (this.readyState === Y.CONNECTING) {
        qe(this, this._req, "WebSocket was closed before the connection was established");
        return;
      }
      this._socket && (this._readyState = Y.CLOSING, this._socket.destroy());
    }
  }
}
Object.defineProperty(Y, "CONNECTING", {
  enumerable: !0,
  value: St.indexOf("CONNECTING")
});
Object.defineProperty(Y.prototype, "CONNECTING", {
  enumerable: !0,
  value: St.indexOf("CONNECTING")
});
Object.defineProperty(Y, "OPEN", {
  enumerable: !0,
  value: St.indexOf("OPEN")
});
Object.defineProperty(Y.prototype, "OPEN", {
  enumerable: !0,
  value: St.indexOf("OPEN")
});
Object.defineProperty(Y, "CLOSING", {
  enumerable: !0,
  value: St.indexOf("CLOSING")
});
Object.defineProperty(Y.prototype, "CLOSING", {
  enumerable: !0,
  value: St.indexOf("CLOSING")
});
Object.defineProperty(Y, "CLOSED", {
  enumerable: !0,
  value: St.indexOf("CLOSED")
});
Object.defineProperty(Y.prototype, "CLOSED", {
  enumerable: !0,
  value: St.indexOf("CLOSED")
});
[
  "binaryType",
  "bufferedAmount",
  "extensions",
  "isPaused",
  "protocol",
  "readyState",
  "url"
].forEach((t) => {
  Object.defineProperty(Y.prototype, t, { enumerable: !0 });
});
["open", "error", "close", "message"].forEach((t) => {
  Object.defineProperty(Y.prototype, `on${t}`, {
    enumerable: !0,
    get() {
      for (const e of this.listeners(t))
        if (e[Bi]) return e[O_];
      return null;
    },
    set(e) {
      for (const n of this.listeners(t))
        if (n[Bi]) {
          this.removeListener(t, n);
          break;
        }
      typeof e == "function" && this.addEventListener(t, e, {
        [Bi]: !0
      });
    }
  });
});
Y.prototype.addEventListener = P_;
Y.prototype.removeEventListener = k_;
var C_ = Y;
function zf(t, e, n, r) {
  const s = {
    allowSynchronousEvents: !0,
    autoPong: !0,
    closeTimeout: S_,
    protocolVersion: Vi[1],
    maxPayload: 104857600,
    skipUTF8Validation: !1,
    perMessageDeflate: !0,
    followRedirects: !1,
    maxRedirects: 10,
    ...r,
    socketPath: void 0,
    hostname: void 0,
    protocol: void 0,
    timeout: void 0,
    method: "GET",
    host: void 0,
    path: void 0,
    port: void 0
  };
  if (t._autoPong = s.autoPong, t._closeTimeout = s.closeTimeout, !Vi.includes(s.protocolVersion))
    throw new RangeError(
      `Unsupported protocol version: ${s.protocolVersion} (supported versions: ${Vi.join(", ")})`
    );
  let a;
  if (e instanceof qi)
    a = e;
  else
    try {
      a = new qi(e);
    } catch {
      throw new SyntaxError(`Invalid URL: ${e}`);
    }
  a.protocol === "http:" ? a.protocol = "ws:" : a.protocol === "https:" && (a.protocol = "wss:"), t._url = a.href;
  const i = a.protocol === "wss:", o = a.protocol === "ws+unix:";
  let c;
  if (a.protocol !== "ws:" && !i && !o ? c = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"` : o && !a.pathname ? c = "The URL's pathname is empty" : a.hash && (c = "The URL contains a fragment identifier"), c) {
    const h = new SyntaxError(c);
    if (t._redirects === 0)
      throw h;
    xs(t, h);
    return;
  }
  const u = i ? 443 : 80, l = b_(16).toString("base64"), p = i ? y_.request : g_.request, d = /* @__PURE__ */ new Set();
  let f;
  if (s.createConnection = s.createConnection || (i ? F_ : L_), s.defaultPort = s.defaultPort || u, s.port = a.port || u, s.host = a.hostname.startsWith("[") ? a.hostname.slice(1, -1) : a.hostname, s.headers = {
    ...s.headers,
    "Sec-WebSocket-Version": s.protocolVersion,
    "Sec-WebSocket-Key": l,
    Connection: "Upgrade",
    Upgrade: "websocket"
  }, s.path = a.pathname + a.search, s.timeout = s.handshakeTimeout, s.perMessageDeflate && (f = new Ct(
    s.perMessageDeflate !== !0 ? s.perMessageDeflate : {},
    !1,
    s.maxPayload
  ), s.headers["Sec-WebSocket-Extensions"] = A_({
    [Ct.extensionName]: f.offer()
  })), n.length) {
    for (const h of n) {
      if (typeof h != "string" || !I_.test(h) || d.has(h))
        throw new SyntaxError(
          "An invalid or duplicated subprotocol was specified"
        );
      d.add(h);
    }
    s.headers["Sec-WebSocket-Protocol"] = n.join(",");
  }
  if (s.origin && (s.protocolVersion < 13 ? s.headers["Sec-WebSocket-Origin"] = s.origin : s.headers.Origin = s.origin), (a.username || a.password) && (s.auth = `${a.username}:${a.password}`), o) {
    const h = s.path.split(":");
    s.socketPath = h[0], s.path = h[1];
  }
  let m;
  if (s.followRedirects) {
    if (t._redirects === 0) {
      t._originalIpc = o, t._originalSecure = i, t._originalHostOrSocketPath = o ? s.socketPath : a.host;
      const h = r && r.headers;
      if (r = { ...r, headers: {} }, h)
        for (const [y, g] of Object.entries(h))
          r.headers[y.toLowerCase()] = g;
    } else if (t.listenerCount("redirect") === 0) {
      const h = o ? t._originalIpc ? s.socketPath === t._originalHostOrSocketPath : !1 : t._originalIpc ? !1 : a.host === t._originalHostOrSocketPath;
      (!h || t._originalSecure && !i) && (delete s.headers.authorization, delete s.headers.cookie, h || delete s.headers.host, s.auth = void 0);
    }
    s.auth && !r.headers.authorization && (r.headers.authorization = "Basic " + Buffer.from(s.auth).toString("base64")), m = t._req = p(s), t._redirects && t.emit("redirect", t.url, m);
  } else
    m = t._req = p(s);
  s.timeout && m.on("timeout", () => {
    qe(t, m, "Opening handshake has timed out");
  }), m.on("error", (h) => {
    m === null || m[Uf] || (m = t._req = null, xs(t, h));
  }), m.on("response", (h) => {
    const y = h.headers.location, g = h.statusCode;
    if (y && s.followRedirects && g >= 300 && g < 400) {
      if (++t._redirects > s.maxRedirects) {
        qe(t, m, "Maximum redirects exceeded");
        return;
      }
      m.abort();
      let _;
      try {
        _ = new qi(y, e);
      } catch {
        const P = new SyntaxError(`Invalid URL: ${y}`);
        xs(t, P);
        return;
      }
      zf(t, _, n, r);
    } else t.emit("unexpected-response", m, h) || qe(
      t,
      m,
      `Unexpected server response: ${h.statusCode}`
    );
  }), m.on("upgrade", (h, y, g) => {
    if (t.emit("upgrade", h), t.readyState !== Y.CONNECTING) return;
    m = t._req = null;
    const _ = h.headers.upgrade;
    if (_ === void 0 || _.toLowerCase() !== "websocket") {
      qe(t, y, "Invalid Upgrade header");
      return;
    }
    const R = __("sha1").update(l + R_).digest("base64");
    if (h.headers["sec-websocket-accept"] !== R) {
      qe(t, y, "Invalid Sec-WebSocket-Accept header");
      return;
    }
    const P = h.headers["sec-websocket-protocol"];
    let k;
    if (P !== void 0 ? d.size ? d.has(P) || (k = "Server sent an invalid subprotocol") : k = "Server sent a subprotocol but none was requested" : d.size && (k = "Server sent no subprotocol"), k) {
      qe(t, y, k);
      return;
    }
    P && (t._protocol = P);
    const C = h.headers["sec-websocket-extensions"];
    if (C !== void 0) {
      if (!f) {
        qe(t, y, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
        return;
      }
      let B;
      try {
        B = N_(C);
      } catch {
        qe(t, y, "Invalid Sec-WebSocket-Extensions header");
        return;
      }
      const W = Object.keys(B);
      if (W.length !== 1 || W[0] !== Ct.extensionName) {
        qe(t, y, "Server indicated an extension that was not requested");
        return;
      }
      try {
        f.accept(B[Ct.extensionName]);
      } catch {
        qe(t, y, "Invalid Sec-WebSocket-Extensions header");
        return;
      }
      t._extensions[Ct.extensionName] = f;
    }
    t.setSocket(y, g, {
      allowSynchronousEvents: s.allowSynchronousEvents,
      generateMask: s.generateMask,
      maxPayload: s.maxPayload,
      skipUTF8Validation: s.skipUTF8Validation
    });
  }), s.finishRequest ? s.finishRequest(m, t) : m.end();
}
function xs(t, e) {
  t._readyState = Y.CLOSING, t._errorEmitted = !0, t.emit("error", e), t.emitClose();
}
function L_(t) {
  return t.path = t.socketPath, Ff.connect(t);
}
function F_(t) {
  return t.path = void 0, !t.servername && t.servername !== "" && (t.servername = Ff.isIP(t.host) ? "" : t.host), x_.connect(t);
}
function qe(t, e, n) {
  t._readyState = Y.CLOSING;
  const r = new Error(n);
  Error.captureStackTrace(r, qe), e.setHeader ? (e[Uf] = !0, e.abort(), e.socket && !e.socket.destroyed && e.socket.destroy(), process.nextTick(xs, t, r)) : (e.destroy(r), e.once("error", t.emit.bind(t, "error")), e.once("close", t.emitClose.bind(t)));
}
function Gi(t, e, n) {
  if (e) {
    const r = $_(e) ? e.size : j_(e).length;
    t._socket ? t._sender._bufferedBytes += r : t._bufferedAmount += r;
  }
  if (n) {
    const r = new Error(
      `WebSocket is not open: readyState ${t.readyState} (${St[t.readyState]})`
    );
    process.nextTick(n, r);
  }
}
function D_(t, e) {
  const n = this[Ee];
  n._closeFrameReceived = !0, n._closeMessage = e, n._closeCode = t, n._socket[Ee] !== void 0 && (n._socket.removeListener("data", ea), process.nextTick(Mf, n._socket), t === 1005 ? n.close() : n.close(t, e));
}
function U_() {
  const t = this[Ee];
  t.isPaused || t._socket.resume();
}
function z_(t) {
  const e = this[Ee];
  e._socket[Ee] !== void 0 && (e._socket.removeListener("data", ea), process.nextTick(Mf, e._socket), e.close(t[T_])), e._errorEmitted || (e._errorEmitted = !0, e.emit("error", t));
}
function hp() {
  this[Ee].emitClose();
}
function M_(t, e) {
  this[Ee].emit("message", t, e);
}
function q_(t) {
  const e = this[Ee];
  e._autoPong && e.pong(t, !this._isServer, Df), e.emit("ping", t);
}
function B_(t) {
  this[Ee].emit("pong", t);
}
function Mf(t) {
  t.resume();
}
function V_(t) {
  const e = this[Ee];
  e.readyState !== Y.CLOSED && (e.readyState === Y.OPEN && (e._readyState = Y.CLOSING, qf(e)), this._socket.end(), e._errorEmitted || (e._errorEmitted = !0, e.emit("error", t)));
}
function qf(t) {
  t._closeTimer = setTimeout(
    t._socket.destroy.bind(t._socket),
    t._closeTimeout
  );
}
function Bf() {
  const t = this[Ee];
  if (this.removeListener("close", Bf), this.removeListener("data", ea), this.removeListener("end", Vf), t._readyState = Y.CLOSING, !this._readableState.endEmitted && !t._closeFrameReceived && !t._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
    const e = this.read(this._readableState.length);
    t._receiver.write(e);
  }
  t._receiver.end(), this[Ee] = void 0, clearTimeout(t._closeTimer), t._receiver._writableState.finished || t._receiver._writableState.errorEmitted ? t.emitClose() : (t._receiver.on("error", hp), t._receiver.on("finish", hp));
}
function ea(t) {
  this[Ee]._receiver.write(t) || this.pause();
}
function Vf() {
  const t = this[Ee];
  t._readyState = Y.CLOSING, t._receiver.end(), this.end();
}
function Gf() {
  const t = this[Ee];
  this.removeListener("error", Gf), this.on("error", Df), t && (t._readyState = Y.CLOSING, this.destroy());
}
const lt = /* @__PURE__ */ Vn(C_), { Duplex: cN } = xe, { tokenChars: lN } = Nr, { Duplex: uN } = xe, { createHash: pN } = _r, { CLOSE_TIMEOUT: dN, GUID: fN, kWebSocket: mN } = Vt, G_ = Z.dirname(jh(import.meta.url));
process.env.APP_ROOT = Z.join(G_, "..");
const vp = process.env.VITE_DEV_SERVER_URL, H_ = Z.join(process.env.APP_ROOT, "dist"), W_ = Z.join(process.env.APP_ROOT, "dist-electron"), K_ = "https://api-cold-monitor.onrender.com", $o = "wss://api-cold-monitor.onrender.com/ws/agent", J_ = "/devices/auth/login", pn = (t) => {
  const e = typeof t;
  return t !== null && (e === "object" || e === "function");
}, Hf = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Wf = 1e6, X_ = (t) => t >= "0" && t <= "9";
function Kf(t) {
  if (t === "0")
    return !0;
  if (/^[1-9]\d*$/.test(t)) {
    const e = Number.parseInt(t, 10);
    return e <= Number.MAX_SAFE_INTEGER && e <= Wf;
  }
  return !1;
}
function Hi(t, e) {
  return Hf.has(t) ? !1 : (t && Kf(t) ? e.push(Number.parseInt(t, 10)) : e.push(t), !0);
}
function Y_(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got ${typeof t}`);
  const e = [];
  let n = "", r = "start", s = !1, a = 0;
  for (const i of t) {
    if (a++, s) {
      n += i, s = !1;
      continue;
    }
    if (i === "\\") {
      if (r === "index")
        throw new Error(`Invalid character '${i}' in an index at position ${a}`);
      if (r === "indexEnd")
        throw new Error(`Invalid character '${i}' after an index at position ${a}`);
      s = !0, r = r === "start" ? "property" : r;
      continue;
    }
    switch (i) {
      case ".": {
        if (r === "index")
          throw new Error(`Invalid character '${i}' in an index at position ${a}`);
        if (r === "indexEnd") {
          r = "property";
          break;
        }
        if (!Hi(n, e))
          return [];
        n = "", r = "property";
        break;
      }
      case "[": {
        if (r === "index")
          throw new Error(`Invalid character '${i}' in an index at position ${a}`);
        if (r === "indexEnd") {
          r = "index";
          break;
        }
        if (r === "property" || r === "start") {
          if ((n || r === "property") && !Hi(n, e))
            return [];
          n = "";
        }
        r = "index";
        break;
      }
      case "]": {
        if (r === "index") {
          if (n === "")
            n = (e.pop() || "") + "[]", r = "property";
          else {
            const o = Number.parseInt(n, 10);
            !Number.isNaN(o) && Number.isFinite(o) && o >= 0 && o <= Number.MAX_SAFE_INTEGER && o <= Wf && n === String(o) ? e.push(o) : e.push(n), n = "", r = "indexEnd";
          }
          break;
        }
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${a}`);
        n += i;
        break;
      }
      default: {
        if (r === "index" && !X_(i))
          throw new Error(`Invalid character '${i}' in an index at position ${a}`);
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${a}`);
        r === "start" && (r = "property"), n += i;
      }
    }
  }
  switch (s && (n += "\\"), r) {
    case "property": {
      if (!Hi(n, e))
        return [];
      break;
    }
    case "index":
      throw new Error("Index was not closed");
    case "start": {
      e.push("");
      break;
    }
  }
  return e;
}
function ta(t) {
  if (typeof t == "string")
    return Y_(t);
  if (Array.isArray(t)) {
    const e = [];
    for (const [n, r] of t.entries()) {
      if (typeof r != "string" && typeof r != "number")
        throw new TypeError(`Expected a string or number for path segment at index ${n}, got ${typeof r}`);
      if (typeof r == "number" && !Number.isFinite(r))
        throw new TypeError(`Path segment at index ${n} must be a finite number, got ${r}`);
      if (Hf.has(r))
        return [];
      typeof r == "string" && Kf(r) ? e.push(Number.parseInt(r, 10)) : e.push(r);
    }
    return e;
  }
  return [];
}
function yp(t, e, n) {
  if (!pn(t) || typeof e != "string" && !Array.isArray(e))
    return n === void 0 ? t : n;
  const r = ta(e);
  if (r.length === 0)
    return n;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (t = t[a], t == null) {
      if (s !== r.length - 1)
        return n;
      break;
    }
  }
  return t === void 0 ? n : t;
}
function Jr(t, e, n) {
  if (!pn(t) || typeof e != "string" && !Array.isArray(e))
    return t;
  const r = t, s = ta(e);
  if (s.length === 0)
    return t;
  for (let a = 0; a < s.length; a++) {
    const i = s[a];
    if (a === s.length - 1)
      t[i] = n;
    else if (!pn(t[i])) {
      const c = typeof s[a + 1] == "number";
      t[i] = c ? [] : {};
    }
    t = t[i];
  }
  return r;
}
function Z_(t, e) {
  if (!pn(t) || typeof e != "string" && !Array.isArray(e))
    return !1;
  const n = ta(e);
  if (n.length === 0)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (r === n.length - 1)
      return Object.hasOwn(t, s) ? (delete t[s], !0) : !1;
    if (t = t[s], !pn(t))
      return !1;
  }
}
function Wi(t, e) {
  if (!pn(t) || typeof e != "string" && !Array.isArray(e))
    return !1;
  const n = ta(e);
  if (n.length === 0)
    return !1;
  for (const r of n) {
    if (!pn(t) || !(r in t))
      return !1;
    t = t[r];
  }
  return !0;
}
const Lt = Sd.homedir(), cc = Sd.tmpdir(), { env: kn } = me, Q_ = (t) => {
  const e = Z.join(Lt, "Library");
  return {
    data: Z.join(e, "Application Support", t),
    config: Z.join(e, "Preferences", t),
    cache: Z.join(e, "Caches", t),
    log: Z.join(e, "Logs", t),
    temp: Z.join(cc, t)
  };
}, e0 = (t) => {
  const e = kn.APPDATA || Z.join(Lt, "AppData", "Roaming"), n = kn.LOCALAPPDATA || Z.join(Lt, "AppData", "Local");
  return {
    // Data/config/cache/log are invented by me as Windows isn't opinionated about this
    data: Z.join(n, t, "Data"),
    config: Z.join(e, t, "Config"),
    cache: Z.join(n, t, "Cache"),
    log: Z.join(n, t, "Log"),
    temp: Z.join(cc, t)
  };
}, t0 = (t) => {
  const e = Z.basename(Lt);
  return {
    data: Z.join(kn.XDG_DATA_HOME || Z.join(Lt, ".local", "share"), t),
    config: Z.join(kn.XDG_CONFIG_HOME || Z.join(Lt, ".config"), t),
    cache: Z.join(kn.XDG_CACHE_HOME || Z.join(Lt, ".cache"), t),
    // https://wiki.debian.org/XDGBaseDirectorySpecification#state
    log: Z.join(kn.XDG_STATE_HOME || Z.join(Lt, ".local", "state"), t),
    temp: Z.join(cc, e, t)
  };
};
function n0(t, { suffix: e = "nodejs" } = {}) {
  if (typeof t != "string")
    throw new TypeError(`Expected a string, got ${typeof t}`);
  return e && (t += `-${e}`), me.platform === "darwin" ? Q_(t) : me.platform === "win32" ? e0(t) : t0(t);
}
const Rt = (t, e) => {
  const { onError: n } = e;
  return function(...s) {
    return t.apply(void 0, s).catch(n);
  };
}, mt = (t, e) => {
  const { onError: n } = e;
  return function(...s) {
    try {
      return t.apply(void 0, s);
    } catch (a) {
      return n(a);
    }
  };
}, r0 = 250, Ot = (t, e) => {
  const { isRetriable: n } = e;
  return function(s) {
    const { timeout: a } = s, i = s.interval ?? r0, o = Date.now() + a;
    return function c(...u) {
      return t.apply(void 0, u).catch((l) => {
        if (!n(l) || Date.now() >= o)
          throw l;
        const p = Math.round(i * Math.random());
        return p > 0 ? new Promise((f) => setTimeout(f, p)).then(() => c.apply(void 0, u)) : c.apply(void 0, u);
      });
    };
  };
}, Tt = (t, e) => {
  const { isRetriable: n } = e;
  return function(s) {
    const { timeout: a } = s, i = Date.now() + a;
    return function(...c) {
      for (; ; )
        try {
          return t.apply(void 0, c);
        } catch (u) {
          if (!n(u) || Date.now() >= i)
            throw u;
          continue;
        }
    };
  };
}, An = {
  /* API */
  isChangeErrorOk: (t) => {
    if (!An.isNodeError(t))
      return !1;
    const { code: e } = t;
    return e === "ENOSYS" || !s0 && (e === "EINVAL" || e === "EPERM");
  },
  isNodeError: (t) => t instanceof Error,
  isRetriableError: (t) => {
    if (!An.isNodeError(t))
      return !1;
    const { code: e } = t;
    return e === "EMFILE" || e === "ENFILE" || e === "EAGAIN" || e === "EBUSY" || e === "EACCESS" || e === "EACCES" || e === "EACCS" || e === "EPERM";
  },
  onChangeError: (t) => {
    if (!An.isNodeError(t))
      throw t;
    if (!An.isChangeErrorOk(t))
      throw t;
  }
}, Xr = {
  onError: An.onChangeError
}, Me = {
  onError: () => {
  }
}, s0 = me.getuid ? !me.getuid() : !1, Pe = {
  isRetriable: An.isRetriableError
}, Ae = {
  attempt: {
    /* ASYNC */
    chmod: Rt(Te(ee.chmod), Xr),
    chown: Rt(Te(ee.chown), Xr),
    close: Rt(Te(ee.close), Me),
    fsync: Rt(Te(ee.fsync), Me),
    mkdir: Rt(Te(ee.mkdir), Me),
    realpath: Rt(Te(ee.realpath), Me),
    stat: Rt(Te(ee.stat), Me),
    unlink: Rt(Te(ee.unlink), Me),
    /* SYNC */
    chmodSync: mt(ee.chmodSync, Xr),
    chownSync: mt(ee.chownSync, Xr),
    closeSync: mt(ee.closeSync, Me),
    existsSync: mt(ee.existsSync, Me),
    fsyncSync: mt(ee.fsync, Me),
    mkdirSync: mt(ee.mkdirSync, Me),
    realpathSync: mt(ee.realpathSync, Me),
    statSync: mt(ee.statSync, Me),
    unlinkSync: mt(ee.unlinkSync, Me)
  },
  retry: {
    /* ASYNC */
    close: Ot(Te(ee.close), Pe),
    fsync: Ot(Te(ee.fsync), Pe),
    open: Ot(Te(ee.open), Pe),
    readFile: Ot(Te(ee.readFile), Pe),
    rename: Ot(Te(ee.rename), Pe),
    stat: Ot(Te(ee.stat), Pe),
    write: Ot(Te(ee.write), Pe),
    writeFile: Ot(Te(ee.writeFile), Pe),
    /* SYNC */
    closeSync: Tt(ee.closeSync, Pe),
    fsyncSync: Tt(ee.fsyncSync, Pe),
    openSync: Tt(ee.openSync, Pe),
    readFileSync: Tt(ee.readFileSync, Pe),
    renameSync: Tt(ee.renameSync, Pe),
    statSync: Tt(ee.statSync, Pe),
    writeSync: Tt(ee.writeSync, Pe),
    writeFileSync: Tt(ee.writeFileSync, Pe)
  }
}, a0 = "utf8", gp = 438, i0 = 511, o0 = {}, c0 = me.geteuid ? me.geteuid() : -1, l0 = me.getegid ? me.getegid() : -1, u0 = 1e3, p0 = !!me.getuid;
me.getuid && me.getuid();
const xp = 128, d0 = (t) => t instanceof Error && "code" in t, bp = (t) => typeof t == "string", Ki = (t) => t === void 0, f0 = me.platform === "linux", Jf = me.platform === "win32", lc = ["SIGHUP", "SIGINT", "SIGTERM"];
Jf || lc.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
f0 && lc.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
class m0 {
  /* CONSTRUCTOR */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.exited = !1, this.exit = (e) => {
      if (!this.exited) {
        this.exited = !0;
        for (const n of this.callbacks)
          n();
        e && (Jf && e !== "SIGINT" && e !== "SIGTERM" && e !== "SIGKILL" ? me.kill(me.pid, "SIGTERM") : me.kill(me.pid, e));
      }
    }, this.hook = () => {
      me.once("exit", () => this.exit());
      for (const e of lc)
        try {
          me.once(e, () => this.exit(e));
        } catch {
        }
    }, this.register = (e) => (this.callbacks.add(e), () => {
      this.callbacks.delete(e);
    }), this.hook();
  }
}
const h0 = new m0(), v0 = h0.register, Ne = {
  /* VARIABLES */
  store: {},
  // filePath => purge
  /* API */
  create: (t) => {
    const e = `000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6), s = `.tmp-${Date.now().toString().slice(-10)}${e}`;
    return `${t}${s}`;
  },
  get: (t, e, n = !0) => {
    const r = Ne.truncate(e(t));
    return r in Ne.store ? Ne.get(t, e, n) : (Ne.store[r] = n, [r, () => delete Ne.store[r]]);
  },
  purge: (t) => {
    Ne.store[t] && (delete Ne.store[t], Ae.attempt.unlink(t));
  },
  purgeSync: (t) => {
    Ne.store[t] && (delete Ne.store[t], Ae.attempt.unlinkSync(t));
  },
  purgeSyncAll: () => {
    for (const t in Ne.store)
      Ne.purgeSync(t);
  },
  truncate: (t) => {
    const e = Z.basename(t);
    if (e.length <= xp)
      return t;
    const n = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(e);
    if (!n)
      return t;
    const r = e.length - xp;
    return `${t.slice(0, -e.length)}${n[1]}${n[2].slice(0, -r)}${n[3]}`;
  }
};
v0(Ne.purgeSyncAll);
function Xf(t, e, n = o0) {
  if (bp(n))
    return Xf(t, e, { encoding: n });
  const s = { timeout: n.timeout ?? u0 };
  let a = null, i = null, o = null;
  try {
    const c = Ae.attempt.realpathSync(t), u = !!c;
    t = c || t, [i, a] = Ne.get(t, n.tmpCreate || Ne.create, n.tmpPurge !== !1);
    const l = p0 && Ki(n.chown), p = Ki(n.mode);
    if (u && (l || p)) {
      const d = Ae.attempt.statSync(t);
      d && (n = { ...n }, l && (n.chown = { uid: d.uid, gid: d.gid }), p && (n.mode = d.mode));
    }
    if (!u) {
      const d = Z.dirname(t);
      Ae.attempt.mkdirSync(d, {
        mode: i0,
        recursive: !0
      });
    }
    o = Ae.retry.openSync(s)(i, "w", n.mode || gp), n.tmpCreated && n.tmpCreated(i), bp(e) ? Ae.retry.writeSync(s)(o, e, 0, n.encoding || a0) : Ki(e) || Ae.retry.writeSync(s)(o, e, 0, e.length, 0), n.fsync !== !1 && (n.fsyncWait !== !1 ? Ae.retry.fsyncSync(s)(o) : Ae.attempt.fsync(o)), Ae.retry.closeSync(s)(o), o = null, n.chown && (n.chown.uid !== c0 || n.chown.gid !== l0) && Ae.attempt.chownSync(i, n.chown.uid, n.chown.gid), n.mode && n.mode !== gp && Ae.attempt.chmodSync(i, n.mode);
    try {
      Ae.retry.renameSync(s)(i, t);
    } catch (d) {
      if (!d0(d) || d.code !== "ENAMETOOLONG")
        throw d;
      Ae.retry.renameSync(s)(i, Ne.truncate(t));
    }
    a(), i = null;
  } finally {
    o && Ae.attempt.closeSync(o), i && Ne.purge(i);
  }
}
var So = { exports: {} }, uc = {}, Ke = {}, qn = {}, jr = {}, X = {}, yr = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.regexpCode = t.getEsmExportName = t.getProperty = t.safeStringify = t.stringify = t.strConcat = t.addCodeArg = t.str = t._ = t.nil = t._Code = t.Name = t.IDENTIFIER = t._CodeOrName = void 0;
  class e {
  }
  t._CodeOrName = e, t.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends e {
    constructor(_) {
      if (super(), !t.IDENTIFIER.test(_))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = _;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  t.Name = n;
  class r extends e {
    constructor(_) {
      super(), this._items = typeof _ == "string" ? [_] : _;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const _ = this._items[0];
      return _ === "" || _ === '""';
    }
    get str() {
      var _;
      return (_ = this._str) !== null && _ !== void 0 ? _ : this._str = this._items.reduce((R, P) => `${R}${P}`, "");
    }
    get names() {
      var _;
      return (_ = this._names) !== null && _ !== void 0 ? _ : this._names = this._items.reduce((R, P) => (P instanceof n && (R[P.str] = (R[P.str] || 0) + 1), R), {});
    }
  }
  t._Code = r, t.nil = new r("");
  function s(g, ..._) {
    const R = [g[0]];
    let P = 0;
    for (; P < _.length; )
      o(R, _[P]), R.push(g[++P]);
    return new r(R);
  }
  t._ = s;
  const a = new r("+");
  function i(g, ..._) {
    const R = [f(g[0])];
    let P = 0;
    for (; P < _.length; )
      R.push(a), o(R, _[P]), R.push(a, f(g[++P]));
    return c(R), new r(R);
  }
  t.str = i;
  function o(g, _) {
    _ instanceof r ? g.push(..._._items) : _ instanceof n ? g.push(_) : g.push(p(_));
  }
  t.addCodeArg = o;
  function c(g) {
    let _ = 1;
    for (; _ < g.length - 1; ) {
      if (g[_] === a) {
        const R = u(g[_ - 1], g[_ + 1]);
        if (R !== void 0) {
          g.splice(_ - 1, 3, R);
          continue;
        }
        g[_++] = "+";
      }
      _++;
    }
  }
  function u(g, _) {
    if (_ === '""')
      return g;
    if (g === '""')
      return _;
    if (typeof g == "string")
      return _ instanceof n || g[g.length - 1] !== '"' ? void 0 : typeof _ != "string" ? `${g.slice(0, -1)}${_}"` : _[0] === '"' ? g.slice(0, -1) + _.slice(1) : void 0;
    if (typeof _ == "string" && _[0] === '"' && !(g instanceof n))
      return `"${g}${_.slice(1)}`;
  }
  function l(g, _) {
    return _.emptyStr() ? g : g.emptyStr() ? _ : i`${g}${_}`;
  }
  t.strConcat = l;
  function p(g) {
    return typeof g == "number" || typeof g == "boolean" || g === null ? g : f(Array.isArray(g) ? g.join(",") : g);
  }
  function d(g) {
    return new r(f(g));
  }
  t.stringify = d;
  function f(g) {
    return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  t.safeStringify = f;
  function m(g) {
    return typeof g == "string" && t.IDENTIFIER.test(g) ? new r(`.${g}`) : s`[${g}]`;
  }
  t.getProperty = m;
  function h(g) {
    if (typeof g == "string" && t.IDENTIFIER.test(g))
      return new r(`${g}`);
    throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
  }
  t.getEsmExportName = h;
  function y(g) {
    return new r(g.toString());
  }
  t.regexpCode = y;
})(yr);
var Ro = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ValueScope = t.ValueScopeName = t.Scope = t.varKinds = t.UsedValueState = void 0;
  const e = yr;
  class n extends Error {
    constructor(u) {
      super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
    }
  }
  var r;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(r || (t.UsedValueState = r = {})), t.varKinds = {
    const: new e.Name("const"),
    let: new e.Name("let"),
    var: new e.Name("var")
  };
  class s {
    constructor({ prefixes: u, parent: l } = {}) {
      this._names = {}, this._prefixes = u, this._parent = l;
    }
    toName(u) {
      return u instanceof e.Name ? u : this.name(u);
    }
    name(u) {
      return new e.Name(this._newName(u));
    }
    _newName(u) {
      const l = this._names[u] || this._nameGroup(u);
      return `${u}${l.index++}`;
    }
    _nameGroup(u) {
      var l, p;
      if (!((p = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || p === void 0) && p.has(u) || this._prefixes && !this._prefixes.has(u))
        throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
      return this._names[u] = { prefix: u, index: 0 };
    }
  }
  t.Scope = s;
  class a extends e.Name {
    constructor(u, l) {
      super(l), this.prefix = u;
    }
    setValue(u, { property: l, itemIndex: p }) {
      this.value = u, this.scopePath = (0, e._)`.${new e.Name(l)}[${p}]`;
    }
  }
  t.ValueScopeName = a;
  const i = (0, e._)`\n`;
  class o extends s {
    constructor(u) {
      super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? i : e.nil };
    }
    get() {
      return this._scope;
    }
    name(u) {
      return new a(u, this._newName(u));
    }
    value(u, l) {
      var p;
      if (l.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const d = this.toName(u), { prefix: f } = d, m = (p = l.key) !== null && p !== void 0 ? p : l.ref;
      let h = this._values[f];
      if (h) {
        const _ = h.get(m);
        if (_)
          return _;
      } else
        h = this._values[f] = /* @__PURE__ */ new Map();
      h.set(m, d);
      const y = this._scope[f] || (this._scope[f] = []), g = y.length;
      return y[g] = l.ref, d.setValue(l, { property: f, itemIndex: g }), d;
    }
    getValue(u, l) {
      const p = this._values[u];
      if (p)
        return p.get(l);
    }
    scopeRefs(u, l = this._values) {
      return this._reduceValues(l, (p) => {
        if (p.scopePath === void 0)
          throw new Error(`CodeGen: name "${p}" has no value`);
        return (0, e._)`${u}${p.scopePath}`;
      });
    }
    scopeCode(u = this._values, l, p) {
      return this._reduceValues(u, (d) => {
        if (d.value === void 0)
          throw new Error(`CodeGen: name "${d}" has no value`);
        return d.value.code;
      }, l, p);
    }
    _reduceValues(u, l, p = {}, d) {
      let f = e.nil;
      for (const m in u) {
        const h = u[m];
        if (!h)
          continue;
        const y = p[m] = p[m] || /* @__PURE__ */ new Map();
        h.forEach((g) => {
          if (y.has(g))
            return;
          y.set(g, r.Started);
          let _ = l(g);
          if (_) {
            const R = this.opts.es5 ? t.varKinds.var : t.varKinds.const;
            f = (0, e._)`${f}${R} ${g} = ${_};${this.opts._n}`;
          } else if (_ = d == null ? void 0 : d(g))
            f = (0, e._)`${f}${_}${this.opts._n}`;
          else
            throw new n(g);
          y.set(g, r.Completed);
        });
      }
      return f;
    }
  }
  t.ValueScope = o;
})(Ro);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.or = t.and = t.not = t.CodeGen = t.operators = t.varKinds = t.ValueScopeName = t.ValueScope = t.Scope = t.Name = t.regexpCode = t.stringify = t.getProperty = t.nil = t.strConcat = t.str = t._ = void 0;
  const e = yr, n = Ro;
  var r = yr;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return r._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return r.str;
  } }), Object.defineProperty(t, "strConcat", { enumerable: !0, get: function() {
    return r.strConcat;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return r.nil;
  } }), Object.defineProperty(t, "getProperty", { enumerable: !0, get: function() {
    return r.getProperty;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return r.stringify;
  } }), Object.defineProperty(t, "regexpCode", { enumerable: !0, get: function() {
    return r.regexpCode;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return r.Name;
  } });
  var s = Ro;
  Object.defineProperty(t, "Scope", { enumerable: !0, get: function() {
    return s.Scope;
  } }), Object.defineProperty(t, "ValueScope", { enumerable: !0, get: function() {
    return s.ValueScope;
  } }), Object.defineProperty(t, "ValueScopeName", { enumerable: !0, get: function() {
    return s.ValueScopeName;
  } }), Object.defineProperty(t, "varKinds", { enumerable: !0, get: function() {
    return s.varKinds;
  } }), t.operators = {
    GT: new e._Code(">"),
    GTE: new e._Code(">="),
    LT: new e._Code("<"),
    LTE: new e._Code("<="),
    EQ: new e._Code("==="),
    NEQ: new e._Code("!=="),
    NOT: new e._Code("!"),
    OR: new e._Code("||"),
    AND: new e._Code("&&"),
    ADD: new e._Code("+")
  };
  class a {
    optimizeNodes() {
      return this;
    }
    optimizeNames(v, b) {
      return this;
    }
  }
  class i extends a {
    constructor(v, b, O) {
      super(), this.varKind = v, this.name = b, this.rhs = O;
    }
    render({ es5: v, _n: b }) {
      const O = v ? n.varKinds.var : this.varKind, U = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${O} ${this.name}${U};` + b;
    }
    optimizeNames(v, b) {
      if (v[this.name.str])
        return this.rhs && (this.rhs = T(this.rhs, v, b)), this;
    }
    get names() {
      return this.rhs instanceof e._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends a {
    constructor(v, b, O) {
      super(), this.lhs = v, this.rhs = b, this.sideEffects = O;
    }
    render({ _n: v }) {
      return `${this.lhs} = ${this.rhs};` + v;
    }
    optimizeNames(v, b) {
      if (!(this.lhs instanceof e.Name && !v[this.lhs.str] && !this.sideEffects))
        return this.rhs = T(this.rhs, v, b), this;
    }
    get names() {
      const v = this.lhs instanceof e.Name ? {} : { ...this.lhs.names };
      return z(v, this.rhs);
    }
  }
  class c extends o {
    constructor(v, b, O, U) {
      super(v, O, U), this.op = b;
    }
    render({ _n: v }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + v;
    }
  }
  class u extends a {
    constructor(v) {
      super(), this.label = v, this.names = {};
    }
    render({ _n: v }) {
      return `${this.label}:` + v;
    }
  }
  class l extends a {
    constructor(v) {
      super(), this.label = v, this.names = {};
    }
    render({ _n: v }) {
      return `break${this.label ? ` ${this.label}` : ""};` + v;
    }
  }
  class p extends a {
    constructor(v) {
      super(), this.error = v;
    }
    render({ _n: v }) {
      return `throw ${this.error};` + v;
    }
    get names() {
      return this.error.names;
    }
  }
  class d extends a {
    constructor(v) {
      super(), this.code = v;
    }
    render({ _n: v }) {
      return `${this.code};` + v;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(v, b) {
      return this.code = T(this.code, v, b), this;
    }
    get names() {
      return this.code instanceof e._CodeOrName ? this.code.names : {};
    }
  }
  class f extends a {
    constructor(v = []) {
      super(), this.nodes = v;
    }
    render(v) {
      return this.nodes.reduce((b, O) => b + O.render(v), "");
    }
    optimizeNodes() {
      const { nodes: v } = this;
      let b = v.length;
      for (; b--; ) {
        const O = v[b].optimizeNodes();
        Array.isArray(O) ? v.splice(b, 1, ...O) : O ? v[b] = O : v.splice(b, 1);
      }
      return v.length > 0 ? this : void 0;
    }
    optimizeNames(v, b) {
      const { nodes: O } = this;
      let U = O.length;
      for (; U--; ) {
        const V = O[U];
        V.optimizeNames(v, b) || (A(v, V.names), O.splice(U, 1));
      }
      return O.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((v, b) => L(v, b.names), {});
    }
  }
  class m extends f {
    render(v) {
      return "{" + v._n + super.render(v) + "}" + v._n;
    }
  }
  class h extends f {
  }
  class y extends m {
  }
  y.kind = "else";
  class g extends m {
    constructor(v, b) {
      super(b), this.condition = v;
    }
    render(v) {
      let b = `if(${this.condition})` + super.render(v);
      return this.else && (b += "else " + this.else.render(v)), b;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const v = this.condition;
      if (v === !0)
        return this.nodes;
      let b = this.else;
      if (b) {
        const O = b.optimizeNodes();
        b = this.else = Array.isArray(O) ? new y(O) : O;
      }
      if (b)
        return v === !1 ? b instanceof g ? b : b.nodes : this.nodes.length ? this : new g(j(v), b instanceof g ? [b] : b.nodes);
      if (!(v === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(v, b) {
      var O;
      if (this.else = (O = this.else) === null || O === void 0 ? void 0 : O.optimizeNames(v, b), !!(super.optimizeNames(v, b) || this.else))
        return this.condition = T(this.condition, v, b), this;
    }
    get names() {
      const v = super.names;
      return z(v, this.condition), this.else && L(v, this.else.names), v;
    }
  }
  g.kind = "if";
  class _ extends m {
  }
  _.kind = "for";
  class R extends _ {
    constructor(v) {
      super(), this.iteration = v;
    }
    render(v) {
      return `for(${this.iteration})` + super.render(v);
    }
    optimizeNames(v, b) {
      if (super.optimizeNames(v, b))
        return this.iteration = T(this.iteration, v, b), this;
    }
    get names() {
      return L(super.names, this.iteration.names);
    }
  }
  class P extends _ {
    constructor(v, b, O, U) {
      super(), this.varKind = v, this.name = b, this.from = O, this.to = U;
    }
    render(v) {
      const b = v.es5 ? n.varKinds.var : this.varKind, { name: O, from: U, to: V } = this;
      return `for(${b} ${O}=${U}; ${O}<${V}; ${O}++)` + super.render(v);
    }
    get names() {
      const v = z(super.names, this.from);
      return z(v, this.to);
    }
  }
  class k extends _ {
    constructor(v, b, O, U) {
      super(), this.loop = v, this.varKind = b, this.name = O, this.iterable = U;
    }
    render(v) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
    }
    optimizeNames(v, b) {
      if (super.optimizeNames(v, b))
        return this.iterable = T(this.iterable, v, b), this;
    }
    get names() {
      return L(super.names, this.iterable.names);
    }
  }
  class C extends m {
    constructor(v, b, O) {
      super(), this.name = v, this.args = b, this.async = O;
    }
    render(v) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(v);
    }
  }
  C.kind = "func";
  class B extends f {
    render(v) {
      return "return " + super.render(v);
    }
  }
  B.kind = "return";
  class W extends m {
    render(v) {
      let b = "try" + super.render(v);
      return this.catch && (b += this.catch.render(v)), this.finally && (b += this.finally.render(v)), b;
    }
    optimizeNodes() {
      var v, b;
      return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (b = this.finally) === null || b === void 0 || b.optimizeNodes(), this;
    }
    optimizeNames(v, b) {
      var O, U;
      return super.optimizeNames(v, b), (O = this.catch) === null || O === void 0 || O.optimizeNames(v, b), (U = this.finally) === null || U === void 0 || U.optimizeNames(v, b), this;
    }
    get names() {
      const v = super.names;
      return this.catch && L(v, this.catch.names), this.finally && L(v, this.finally.names), v;
    }
  }
  class oe extends m {
    constructor(v) {
      super(), this.error = v;
    }
    render(v) {
      return `catch(${this.error})` + super.render(v);
    }
  }
  oe.kind = "catch";
  class fe extends m {
    render(v) {
      return "finally" + super.render(v);
    }
  }
  fe.kind = "finally";
  class N {
    constructor(v, b = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...b, _n: b.lines ? `
` : "" }, this._extScope = v, this._scope = new n.Scope({ parent: v }), this._nodes = [new h()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(v) {
      return this._scope.name(v);
    }
    // reserves unique name in the external scope
    scopeName(v) {
      return this._extScope.name(v);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(v, b) {
      const O = this._extScope.value(v, b);
      return (this._values[O.prefix] || (this._values[O.prefix] = /* @__PURE__ */ new Set())).add(O), O;
    }
    getScopeValue(v, b) {
      return this._extScope.getValue(v, b);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(v) {
      return this._extScope.scopeRefs(v, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(v, b, O, U) {
      const V = this._scope.toName(b);
      return O !== void 0 && U && (this._constants[V.str] = O), this._leafNode(new i(v, V, O)), V;
    }
    // `const` declaration (`var` in es5 mode)
    const(v, b, O) {
      return this._def(n.varKinds.const, v, b, O);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(v, b, O) {
      return this._def(n.varKinds.let, v, b, O);
    }
    // `var` declaration with optional assignment
    var(v, b, O) {
      return this._def(n.varKinds.var, v, b, O);
    }
    // assignment code
    assign(v, b, O) {
      return this._leafNode(new o(v, b, O));
    }
    // `+=` code
    add(v, b) {
      return this._leafNode(new c(v, t.operators.ADD, b));
    }
    // appends passed SafeExpr to code or executes Block
    code(v) {
      return typeof v == "function" ? v() : v !== e.nil && this._leafNode(new d(v)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...v) {
      const b = ["{"];
      for (const [O, U] of v)
        b.length > 1 && b.push(","), b.push(O), (O !== U || this.opts.es5) && (b.push(":"), (0, e.addCodeArg)(b, U));
      return b.push("}"), new e._Code(b);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(v, b, O) {
      if (this._blockNode(new g(v)), b && O)
        this.code(b).else().code(O).endIf();
      else if (b)
        this.code(b).endIf();
      else if (O)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(v) {
      return this._elseNode(new g(v));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new y());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(g, y);
    }
    _for(v, b) {
      return this._blockNode(v), b && this.code(b).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(v, b) {
      return this._for(new R(v), b);
    }
    // `for` statement for a range of values
    forRange(v, b, O, U, V = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const ie = this._scope.toName(v);
      return this._for(new P(V, ie, b, O), () => U(ie));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(v, b, O, U = n.varKinds.const) {
      const V = this._scope.toName(v);
      if (this.opts.es5) {
        const ie = b instanceof e.Name ? b : this.var("_arr", b);
        return this.forRange("_i", 0, (0, e._)`${ie}.length`, (H) => {
          this.var(V, (0, e._)`${ie}[${H}]`), O(V);
        });
      }
      return this._for(new k("of", U, V, b), () => O(V));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(v, b, O, U = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(v, (0, e._)`Object.keys(${b})`, O);
      const V = this._scope.toName(v);
      return this._for(new k("in", U, V, b), () => O(V));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(_);
    }
    // `label` statement
    label(v) {
      return this._leafNode(new u(v));
    }
    // `break` statement
    break(v) {
      return this._leafNode(new l(v));
    }
    // `return` statement
    return(v) {
      const b = new B();
      if (this._blockNode(b), this.code(v), b.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(B);
    }
    // `try` statement
    try(v, b, O) {
      if (!b && !O)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const U = new W();
      if (this._blockNode(U), this.code(v), b) {
        const V = this.name("e");
        this._currNode = U.catch = new oe(V), b(V);
      }
      return O && (this._currNode = U.finally = new fe(), this.code(O)), this._endBlockNode(oe, fe);
    }
    // `throw` statement
    throw(v) {
      return this._leafNode(new p(v));
    }
    // start self-balancing block
    block(v, b) {
      return this._blockStarts.push(this._nodes.length), v && this.code(v).endBlock(b), this;
    }
    // end the current self-balancing block
    endBlock(v) {
      const b = this._blockStarts.pop();
      if (b === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const O = this._nodes.length - b;
      if (O < 0 || v !== void 0 && O !== v)
        throw new Error(`CodeGen: wrong number of nodes: ${O} vs ${v} expected`);
      return this._nodes.length = b, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(v, b = e.nil, O, U) {
      return this._blockNode(new C(v, b, O)), U && this.code(U).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(C);
    }
    optimize(v = 1) {
      for (; v-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(v) {
      return this._currNode.nodes.push(v), this;
    }
    _blockNode(v) {
      this._currNode.nodes.push(v), this._nodes.push(v);
    }
    _endBlockNode(v, b) {
      const O = this._currNode;
      if (O instanceof v || b && O instanceof b)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${b ? `${v.kind}/${b.kind}` : v.kind}"`);
    }
    _elseNode(v) {
      const b = this._currNode;
      if (!(b instanceof g))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = b.else = v, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const v = this._nodes;
      return v[v.length - 1];
    }
    set _currNode(v) {
      const b = this._nodes;
      b[b.length - 1] = v;
    }
  }
  t.CodeGen = N;
  function L(w, v) {
    for (const b in v)
      w[b] = (w[b] || 0) + (v[b] || 0);
    return w;
  }
  function z(w, v) {
    return v instanceof e._CodeOrName ? L(w, v.names) : w;
  }
  function T(w, v, b) {
    if (w instanceof e.Name)
      return O(w);
    if (!U(w))
      return w;
    return new e._Code(w._items.reduce((V, ie) => (ie instanceof e.Name && (ie = O(ie)), ie instanceof e._Code ? V.push(...ie._items) : V.push(ie), V), []));
    function O(V) {
      const ie = b[V.str];
      return ie === void 0 || v[V.str] !== 1 ? V : (delete v[V.str], ie);
    }
    function U(V) {
      return V instanceof e._Code && V._items.some((ie) => ie instanceof e.Name && v[ie.str] === 1 && b[ie.str] !== void 0);
    }
  }
  function A(w, v) {
    for (const b in v)
      w[b] = (w[b] || 0) - (v[b] || 0);
  }
  function j(w) {
    return typeof w == "boolean" || typeof w == "number" || w === null ? !w : (0, e._)`!${$(w)}`;
  }
  t.not = j;
  const I = x(t.operators.AND);
  function M(...w) {
    return w.reduce(I);
  }
  t.and = M;
  const D = x(t.operators.OR);
  function S(...w) {
    return w.reduce(D);
  }
  t.or = S;
  function x(w) {
    return (v, b) => v === e.nil ? b : b === e.nil ? v : (0, e._)`${$(v)} ${w} ${$(b)}`;
  }
  function $(w) {
    return w instanceof e.Name ? w : (0, e._)`(${w})`;
  }
})(X);
var F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.checkStrictMode = F.getErrorPath = F.Type = F.useFunc = F.setEvaluated = F.evaluatedPropsToName = F.mergeEvaluated = F.eachItem = F.unescapeJsonPointer = F.escapeJsonPointer = F.escapeFragment = F.unescapeFragment = F.schemaRefOrVal = F.schemaHasRulesButRef = F.schemaHasRules = F.checkUnknownRules = F.alwaysValidSchema = F.toHash = void 0;
const le = X, y0 = yr;
function g0(t) {
  const e = {};
  for (const n of t)
    e[n] = !0;
  return e;
}
F.toHash = g0;
function x0(t, e) {
  return typeof e == "boolean" ? e : Object.keys(e).length === 0 ? !0 : (Yf(t, e), !Zf(e, t.self.RULES.all));
}
F.alwaysValidSchema = x0;
function Yf(t, e = t.schema) {
  const { opts: n, self: r } = t;
  if (!n.strictSchema || typeof e == "boolean")
    return;
  const s = r.RULES.keywords;
  for (const a in e)
    s[a] || tm(t, `unknown keyword: "${a}"`);
}
F.checkUnknownRules = Yf;
function Zf(t, e) {
  if (typeof t == "boolean")
    return !t;
  for (const n in t)
    if (e[n])
      return !0;
  return !1;
}
F.schemaHasRules = Zf;
function b0(t, e) {
  if (typeof t == "boolean")
    return !t;
  for (const n in t)
    if (n !== "$ref" && e.all[n])
      return !0;
  return !1;
}
F.schemaHasRulesButRef = b0;
function _0({ topSchemaRef: t, schemaPath: e }, n, r, s) {
  if (!s) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, le._)`${n}`;
  }
  return (0, le._)`${t}${e}${(0, le.getProperty)(r)}`;
}
F.schemaRefOrVal = _0;
function w0(t) {
  return Qf(decodeURIComponent(t));
}
F.unescapeFragment = w0;
function E0(t) {
  return encodeURIComponent(pc(t));
}
F.escapeFragment = E0;
function pc(t) {
  return typeof t == "number" ? `${t}` : t.replace(/~/g, "~0").replace(/\//g, "~1");
}
F.escapeJsonPointer = pc;
function Qf(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
F.unescapeJsonPointer = Qf;
function $0(t, e) {
  if (Array.isArray(t))
    for (const n of t)
      e(n);
  else
    e(t);
}
F.eachItem = $0;
function _p({ mergeNames: t, mergeToName: e, mergeValues: n, resultToName: r }) {
  return (s, a, i, o) => {
    const c = i === void 0 ? a : i instanceof le.Name ? (a instanceof le.Name ? t(s, a, i) : e(s, a, i), i) : a instanceof le.Name ? (e(s, i, a), a) : n(a, i);
    return o === le.Name && !(c instanceof le.Name) ? r(s, c) : c;
  };
}
F.mergeEvaluated = {
  props: _p({
    mergeNames: (t, e, n) => t.if((0, le._)`${n} !== true && ${e} !== undefined`, () => {
      t.if((0, le._)`${e} === true`, () => t.assign(n, !0), () => t.assign(n, (0, le._)`${n} || {}`).code((0, le._)`Object.assign(${n}, ${e})`));
    }),
    mergeToName: (t, e, n) => t.if((0, le._)`${n} !== true`, () => {
      e === !0 ? t.assign(n, !0) : (t.assign(n, (0, le._)`${n} || {}`), dc(t, n, e));
    }),
    mergeValues: (t, e) => t === !0 ? !0 : { ...t, ...e },
    resultToName: em
  }),
  items: _p({
    mergeNames: (t, e, n) => t.if((0, le._)`${n} !== true && ${e} !== undefined`, () => t.assign(n, (0, le._)`${e} === true ? true : ${n} > ${e} ? ${n} : ${e}`)),
    mergeToName: (t, e, n) => t.if((0, le._)`${n} !== true`, () => t.assign(n, e === !0 ? !0 : (0, le._)`${n} > ${e} ? ${n} : ${e}`)),
    mergeValues: (t, e) => t === !0 ? !0 : Math.max(t, e),
    resultToName: (t, e) => t.var("items", e)
  })
};
function em(t, e) {
  if (e === !0)
    return t.var("props", !0);
  const n = t.var("props", (0, le._)`{}`);
  return e !== void 0 && dc(t, n, e), n;
}
F.evaluatedPropsToName = em;
function dc(t, e, n) {
  Object.keys(n).forEach((r) => t.assign((0, le._)`${e}${(0, le.getProperty)(r)}`, !0));
}
F.setEvaluated = dc;
const wp = {};
function S0(t, e) {
  return t.scopeValue("func", {
    ref: e,
    code: wp[e.code] || (wp[e.code] = new y0._Code(e.code))
  });
}
F.useFunc = S0;
var Oo;
(function(t) {
  t[t.Num = 0] = "Num", t[t.Str = 1] = "Str";
})(Oo || (F.Type = Oo = {}));
function R0(t, e, n) {
  if (t instanceof le.Name) {
    const r = e === Oo.Num;
    return n ? r ? (0, le._)`"[" + ${t} + "]"` : (0, le._)`"['" + ${t} + "']"` : r ? (0, le._)`"/" + ${t}` : (0, le._)`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, le.getProperty)(t).toString() : "/" + pc(t);
}
F.getErrorPath = R0;
function tm(t, e, n = t.opts.strictSchema) {
  if (n) {
    if (e = `strict mode: ${e}`, n === !0)
      throw new Error(e);
    t.self.logger.warn(e);
  }
}
F.checkStrictMode = tm;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
const ke = X, O0 = {
  // validation function arguments
  data: new ke.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new ke.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new ke.Name("instancePath"),
  parentData: new ke.Name("parentData"),
  parentDataProperty: new ke.Name("parentDataProperty"),
  rootData: new ke.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new ke.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new ke.Name("vErrors"),
  // null or array of validation errors
  errors: new ke.Name("errors"),
  // counter of validation errors
  this: new ke.Name("this"),
  // "globals"
  self: new ke.Name("self"),
  scope: new ke.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new ke.Name("json"),
  jsonPos: new ke.Name("jsonPos"),
  jsonLen: new ke.Name("jsonLen"),
  jsonPart: new ke.Name("jsonPart")
};
Be.default = O0;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.extendErrors = t.resetErrorsCount = t.reportExtraError = t.reportError = t.keyword$DataError = t.keywordError = void 0;
  const e = X, n = F, r = Be;
  t.keywordError = {
    message: ({ keyword: y }) => (0, e.str)`must pass "${y}" keyword validation`
  }, t.keyword$DataError = {
    message: ({ keyword: y, schemaType: g }) => g ? (0, e.str)`"${y}" keyword must be ${g} ($data)` : (0, e.str)`"${y}" keyword is invalid ($data)`
  };
  function s(y, g = t.keywordError, _, R) {
    const { it: P } = y, { gen: k, compositeRule: C, allErrors: B } = P, W = p(y, g, _);
    R ?? (C || B) ? c(k, W) : u(P, (0, e._)`[${W}]`);
  }
  t.reportError = s;
  function a(y, g = t.keywordError, _) {
    const { it: R } = y, { gen: P, compositeRule: k, allErrors: C } = R, B = p(y, g, _);
    c(P, B), k || C || u(R, r.default.vErrors);
  }
  t.reportExtraError = a;
  function i(y, g) {
    y.assign(r.default.errors, g), y.if((0, e._)`${r.default.vErrors} !== null`, () => y.if(g, () => y.assign((0, e._)`${r.default.vErrors}.length`, g), () => y.assign(r.default.vErrors, null)));
  }
  t.resetErrorsCount = i;
  function o({ gen: y, keyword: g, schemaValue: _, data: R, errsCount: P, it: k }) {
    if (P === void 0)
      throw new Error("ajv implementation error");
    const C = y.name("err");
    y.forRange("i", P, r.default.errors, (B) => {
      y.const(C, (0, e._)`${r.default.vErrors}[${B}]`), y.if((0, e._)`${C}.instancePath === undefined`, () => y.assign((0, e._)`${C}.instancePath`, (0, e.strConcat)(r.default.instancePath, k.errorPath))), y.assign((0, e._)`${C}.schemaPath`, (0, e.str)`${k.errSchemaPath}/${g}`), k.opts.verbose && (y.assign((0, e._)`${C}.schema`, _), y.assign((0, e._)`${C}.data`, R));
    });
  }
  t.extendErrors = o;
  function c(y, g) {
    const _ = y.const("err", g);
    y.if((0, e._)`${r.default.vErrors} === null`, () => y.assign(r.default.vErrors, (0, e._)`[${_}]`), (0, e._)`${r.default.vErrors}.push(${_})`), y.code((0, e._)`${r.default.errors}++`);
  }
  function u(y, g) {
    const { gen: _, validateName: R, schemaEnv: P } = y;
    P.$async ? _.throw((0, e._)`new ${y.ValidationError}(${g})`) : (_.assign((0, e._)`${R}.errors`, g), _.return(!1));
  }
  const l = {
    keyword: new e.Name("keyword"),
    schemaPath: new e.Name("schemaPath"),
    // also used in JTD errors
    params: new e.Name("params"),
    propertyName: new e.Name("propertyName"),
    message: new e.Name("message"),
    schema: new e.Name("schema"),
    parentSchema: new e.Name("parentSchema")
  };
  function p(y, g, _) {
    const { createErrors: R } = y.it;
    return R === !1 ? (0, e._)`{}` : d(y, g, _);
  }
  function d(y, g, _ = {}) {
    const { gen: R, it: P } = y, k = [
      f(P, _),
      m(y, _)
    ];
    return h(y, g, k), R.object(...k);
  }
  function f({ errorPath: y }, { instancePath: g }) {
    const _ = g ? (0, e.str)`${y}${(0, n.getErrorPath)(g, n.Type.Str)}` : y;
    return [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, _)];
  }
  function m({ keyword: y, it: { errSchemaPath: g } }, { schemaPath: _, parentSchema: R }) {
    let P = R ? g : (0, e.str)`${g}/${y}`;
    return _ && (P = (0, e.str)`${P}${(0, n.getErrorPath)(_, n.Type.Str)}`), [l.schemaPath, P];
  }
  function h(y, { params: g, message: _ }, R) {
    const { keyword: P, data: k, schemaValue: C, it: B } = y, { opts: W, propertyName: oe, topSchemaRef: fe, schemaPath: N } = B;
    R.push([l.keyword, P], [l.params, typeof g == "function" ? g(y) : g || (0, e._)`{}`]), W.messages && R.push([l.message, typeof _ == "function" ? _(y) : _]), W.verbose && R.push([l.schema, C], [l.parentSchema, (0, e._)`${fe}${N}`], [r.default.data, k]), oe && R.push([l.propertyName, oe]);
  }
})(jr);
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.boolOrEmptySchema = qn.topBoolOrEmptySchema = void 0;
const T0 = jr, P0 = X, k0 = Be, A0 = {
  message: "boolean schema is false"
};
function N0(t) {
  const { gen: e, schema: n, validateName: r } = t;
  n === !1 ? nm(t, !1) : typeof n == "object" && n.$async === !0 ? e.return(k0.default.data) : (e.assign((0, P0._)`${r}.errors`, null), e.return(!0));
}
qn.topBoolOrEmptySchema = N0;
function j0(t, e) {
  const { gen: n, schema: r } = t;
  r === !1 ? (n.var(e, !1), nm(t)) : n.var(e, !0);
}
qn.boolOrEmptySchema = j0;
function nm(t, e) {
  const { gen: n, data: r } = t, s = {
    gen: n,
    keyword: "false schema",
    data: r,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: t
  };
  (0, T0.reportError)(s, A0, void 0, e);
}
var be = {}, dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.getRules = dn.isJSONType = void 0;
const I0 = ["string", "number", "integer", "boolean", "null", "object", "array"], C0 = new Set(I0);
function L0(t) {
  return typeof t == "string" && C0.has(t);
}
dn.isJSONType = L0;
function F0() {
  const t = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...t, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, t.number, t.string, t.array, t.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
dn.getRules = F0;
var xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.shouldUseRule = xt.shouldUseGroup = xt.schemaHasRulesForType = void 0;
function D0({ schema: t, self: e }, n) {
  const r = e.RULES.types[n];
  return r && r !== !0 && rm(t, r);
}
xt.schemaHasRulesForType = D0;
function rm(t, e) {
  return e.rules.some((n) => sm(t, n));
}
xt.shouldUseGroup = rm;
function sm(t, e) {
  var n;
  return t[e.keyword] !== void 0 || ((n = e.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => t[r] !== void 0));
}
xt.shouldUseRule = sm;
Object.defineProperty(be, "__esModule", { value: !0 });
be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
const U0 = dn, z0 = xt, M0 = jr, te = X, am = F;
var In;
(function(t) {
  t[t.Correct = 0] = "Correct", t[t.Wrong = 1] = "Wrong";
})(In || (be.DataType = In = {}));
function q0(t) {
  const e = im(t.type);
  if (e.includes("null")) {
    if (t.nullable === !1)
      throw new Error("type: null contradicts nullable: false");
  } else {
    if (!e.length && t.nullable !== void 0)
      throw new Error('"nullable" cannot be used without "type"');
    t.nullable === !0 && e.push("null");
  }
  return e;
}
be.getSchemaTypes = q0;
function im(t) {
  const e = Array.isArray(t) ? t : t ? [t] : [];
  if (e.every(U0.isJSONType))
    return e;
  throw new Error("type must be JSONType or JSONType[]: " + e.join(","));
}
be.getJSONTypes = im;
function B0(t, e) {
  const { gen: n, data: r, opts: s } = t, a = V0(e, s.coerceTypes), i = e.length > 0 && !(a.length === 0 && e.length === 1 && (0, z0.schemaHasRulesForType)(t, e[0]));
  if (i) {
    const o = fc(e, r, s.strictNumbers, In.Wrong);
    n.if(o, () => {
      a.length ? G0(t, e, a) : mc(t);
    });
  }
  return i;
}
be.coerceAndCheckDataType = B0;
const om = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function V0(t, e) {
  return e ? t.filter((n) => om.has(n) || e === "array" && n === "array") : [];
}
function G0(t, e, n) {
  const { gen: r, data: s, opts: a } = t, i = r.let("dataType", (0, te._)`typeof ${s}`), o = r.let("coerced", (0, te._)`undefined`);
  a.coerceTypes === "array" && r.if((0, te._)`${i} == 'object' && Array.isArray(${s}) && ${s}.length == 1`, () => r.assign(s, (0, te._)`${s}[0]`).assign(i, (0, te._)`typeof ${s}`).if(fc(e, s, a.strictNumbers), () => r.assign(o, s))), r.if((0, te._)`${o} !== undefined`);
  for (const u of n)
    (om.has(u) || u === "array" && a.coerceTypes === "array") && c(u);
  r.else(), mc(t), r.endIf(), r.if((0, te._)`${o} !== undefined`, () => {
    r.assign(s, o), H0(t, o);
  });
  function c(u) {
    switch (u) {
      case "string":
        r.elseIf((0, te._)`${i} == "number" || ${i} == "boolean"`).assign(o, (0, te._)`"" + ${s}`).elseIf((0, te._)`${s} === null`).assign(o, (0, te._)`""`);
        return;
      case "number":
        r.elseIf((0, te._)`${i} == "boolean" || ${s} === null
              || (${i} == "string" && ${s} && ${s} == +${s})`).assign(o, (0, te._)`+${s}`);
        return;
      case "integer":
        r.elseIf((0, te._)`${i} === "boolean" || ${s} === null
              || (${i} === "string" && ${s} && ${s} == +${s} && !(${s} % 1))`).assign(o, (0, te._)`+${s}`);
        return;
      case "boolean":
        r.elseIf((0, te._)`${s} === "false" || ${s} === 0 || ${s} === null`).assign(o, !1).elseIf((0, te._)`${s} === "true" || ${s} === 1`).assign(o, !0);
        return;
      case "null":
        r.elseIf((0, te._)`${s} === "" || ${s} === 0 || ${s} === false`), r.assign(o, null);
        return;
      case "array":
        r.elseIf((0, te._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${s} === null`).assign(o, (0, te._)`[${s}]`);
    }
  }
}
function H0({ gen: t, parentData: e, parentDataProperty: n }, r) {
  t.if((0, te._)`${e} !== undefined`, () => t.assign((0, te._)`${e}[${n}]`, r));
}
function To(t, e, n, r = In.Correct) {
  const s = r === In.Correct ? te.operators.EQ : te.operators.NEQ;
  let a;
  switch (t) {
    case "null":
      return (0, te._)`${e} ${s} null`;
    case "array":
      a = (0, te._)`Array.isArray(${e})`;
      break;
    case "object":
      a = (0, te._)`${e} && typeof ${e} == "object" && !Array.isArray(${e})`;
      break;
    case "integer":
      a = i((0, te._)`!(${e} % 1) && !isNaN(${e})`);
      break;
    case "number":
      a = i();
      break;
    default:
      return (0, te._)`typeof ${e} ${s} ${t}`;
  }
  return r === In.Correct ? a : (0, te.not)(a);
  function i(o = te.nil) {
    return (0, te.and)((0, te._)`typeof ${e} == "number"`, o, n ? (0, te._)`isFinite(${e})` : te.nil);
  }
}
be.checkDataType = To;
function fc(t, e, n, r) {
  if (t.length === 1)
    return To(t[0], e, n, r);
  let s;
  const a = (0, am.toHash)(t);
  if (a.array && a.object) {
    const i = (0, te._)`typeof ${e} != "object"`;
    s = a.null ? i : (0, te._)`!${e} || ${i}`, delete a.null, delete a.array, delete a.object;
  } else
    s = te.nil;
  a.number && delete a.integer;
  for (const i in a)
    s = (0, te.and)(s, To(i, e, n, r));
  return s;
}
be.checkDataTypes = fc;
const W0 = {
  message: ({ schema: t }) => `must be ${t}`,
  params: ({ schema: t, schemaValue: e }) => typeof t == "string" ? (0, te._)`{type: ${t}}` : (0, te._)`{type: ${e}}`
};
function mc(t) {
  const e = K0(t);
  (0, M0.reportError)(e, W0);
}
be.reportTypeError = mc;
function K0(t) {
  const { gen: e, data: n, schema: r } = t, s = (0, am.schemaRefOrVal)(t, r, "type");
  return {
    gen: e,
    keyword: "type",
    data: n,
    schema: r.type,
    schemaCode: s,
    schemaValue: s,
    parentSchema: r,
    params: {},
    it: t
  };
}
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
na.assignDefaults = void 0;
const _n = X, J0 = F;
function X0(t, e) {
  const { properties: n, items: r } = t.schema;
  if (e === "object" && n)
    for (const s in n)
      Ep(t, s, n[s].default);
  else e === "array" && Array.isArray(r) && r.forEach((s, a) => Ep(t, a, s.default));
}
na.assignDefaults = X0;
function Ep(t, e, n) {
  const { gen: r, compositeRule: s, data: a, opts: i } = t;
  if (n === void 0)
    return;
  const o = (0, _n._)`${a}${(0, _n.getProperty)(e)}`;
  if (s) {
    (0, J0.checkStrictMode)(t, `default is ignored for: ${o}`);
    return;
  }
  let c = (0, _n._)`${o} === undefined`;
  i.useDefaults === "empty" && (c = (0, _n._)`${c} || ${o} === null || ${o} === ""`), r.if(c, (0, _n._)`${o} = ${(0, _n.stringify)(n)}`);
}
var pt = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.validateUnion = ne.validateArray = ne.usePattern = ne.callValidateCode = ne.schemaProperties = ne.allSchemaProperties = ne.noPropertyInData = ne.propertyInData = ne.isOwnProperty = ne.hasPropFunc = ne.reportMissingProp = ne.checkMissingProp = ne.checkReportMissingProp = void 0;
const pe = X, hc = F, Pt = Be, Y0 = F;
function Z0(t, e) {
  const { gen: n, data: r, it: s } = t;
  n.if(yc(n, r, e, s.opts.ownProperties), () => {
    t.setParams({ missingProperty: (0, pe._)`${e}` }, !0), t.error();
  });
}
ne.checkReportMissingProp = Z0;
function Q0({ gen: t, data: e, it: { opts: n } }, r, s) {
  return (0, pe.or)(...r.map((a) => (0, pe.and)(yc(t, e, a, n.ownProperties), (0, pe._)`${s} = ${a}`)));
}
ne.checkMissingProp = Q0;
function ew(t, e) {
  t.setParams({ missingProperty: e }, !0), t.error();
}
ne.reportMissingProp = ew;
function cm(t) {
  return t.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, pe._)`Object.prototype.hasOwnProperty`
  });
}
ne.hasPropFunc = cm;
function vc(t, e, n) {
  return (0, pe._)`${cm(t)}.call(${e}, ${n})`;
}
ne.isOwnProperty = vc;
function tw(t, e, n, r) {
  const s = (0, pe._)`${e}${(0, pe.getProperty)(n)} !== undefined`;
  return r ? (0, pe._)`${s} && ${vc(t, e, n)}` : s;
}
ne.propertyInData = tw;
function yc(t, e, n, r) {
  const s = (0, pe._)`${e}${(0, pe.getProperty)(n)} === undefined`;
  return r ? (0, pe.or)(s, (0, pe.not)(vc(t, e, n))) : s;
}
ne.noPropertyInData = yc;
function lm(t) {
  return t ? Object.keys(t).filter((e) => e !== "__proto__") : [];
}
ne.allSchemaProperties = lm;
function nw(t, e) {
  return lm(e).filter((n) => !(0, hc.alwaysValidSchema)(t, e[n]));
}
ne.schemaProperties = nw;
function rw({ schemaCode: t, data: e, it: { gen: n, topSchemaRef: r, schemaPath: s, errorPath: a }, it: i }, o, c, u) {
  const l = u ? (0, pe._)`${t}, ${e}, ${r}${s}` : e, p = [
    [Pt.default.instancePath, (0, pe.strConcat)(Pt.default.instancePath, a)],
    [Pt.default.parentData, i.parentData],
    [Pt.default.parentDataProperty, i.parentDataProperty],
    [Pt.default.rootData, Pt.default.rootData]
  ];
  i.opts.dynamicRef && p.push([Pt.default.dynamicAnchors, Pt.default.dynamicAnchors]);
  const d = (0, pe._)`${l}, ${n.object(...p)}`;
  return c !== pe.nil ? (0, pe._)`${o}.call(${c}, ${d})` : (0, pe._)`${o}(${d})`;
}
ne.callValidateCode = rw;
const sw = (0, pe._)`new RegExp`;
function aw({ gen: t, it: { opts: e } }, n) {
  const r = e.unicodeRegExp ? "u" : "", { regExp: s } = e.code, a = s(n, r);
  return t.scopeValue("pattern", {
    key: a.toString(),
    ref: a,
    code: (0, pe._)`${s.code === "new RegExp" ? sw : (0, Y0.useFunc)(t, s)}(${n}, ${r})`
  });
}
ne.usePattern = aw;
function iw(t) {
  const { gen: e, data: n, keyword: r, it: s } = t, a = e.name("valid");
  if (s.allErrors) {
    const o = e.let("valid", !0);
    return i(() => e.assign(o, !1)), o;
  }
  return e.var(a, !0), i(() => e.break()), a;
  function i(o) {
    const c = e.const("len", (0, pe._)`${n}.length`);
    e.forRange("i", 0, c, (u) => {
      t.subschema({
        keyword: r,
        dataProp: u,
        dataPropType: hc.Type.Num
      }, a), e.if((0, pe.not)(a), o);
    });
  }
}
ne.validateArray = iw;
function ow(t) {
  const { gen: e, schema: n, keyword: r, it: s } = t;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, hc.alwaysValidSchema)(s, c)) && !s.opts.unevaluated)
    return;
  const i = e.let("valid", !1), o = e.name("_valid");
  e.block(() => n.forEach((c, u) => {
    const l = t.subschema({
      keyword: r,
      schemaProp: u,
      compositeRule: !0
    }, o);
    e.assign(i, (0, pe._)`${i} || ${o}`), t.mergeValidEvaluated(l, o) || e.if((0, pe.not)(i));
  })), t.result(i, () => t.reset(), () => t.error(!0));
}
ne.validateUnion = ow;
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.validateKeywordUsage = pt.validSchemaType = pt.funcKeywordCode = pt.macroKeywordCode = void 0;
const je = X, Xt = Be, cw = ne, lw = jr;
function uw(t, e) {
  const { gen: n, keyword: r, schema: s, parentSchema: a, it: i } = t, o = e.macro.call(i.self, s, a, i), c = um(n, r, o);
  i.opts.validateSchema !== !1 && i.self.validateSchema(o, !0);
  const u = n.name("valid");
  t.subschema({
    schema: o,
    schemaPath: je.nil,
    errSchemaPath: `${i.errSchemaPath}/${r}`,
    topSchemaRef: c,
    compositeRule: !0
  }, u), t.pass(u, () => t.error(!0));
}
pt.macroKeywordCode = uw;
function pw(t, e) {
  var n;
  const { gen: r, keyword: s, schema: a, parentSchema: i, $data: o, it: c } = t;
  fw(c, e);
  const u = !o && e.compile ? e.compile.call(c.self, a, i, c) : e.validate, l = um(r, s, u), p = r.let("valid");
  t.block$data(p, d), t.ok((n = e.valid) !== null && n !== void 0 ? n : p);
  function d() {
    if (e.errors === !1)
      h(), e.modifying && $p(t), y(() => t.error());
    else {
      const g = e.async ? f() : m();
      e.modifying && $p(t), y(() => dw(t, g));
    }
  }
  function f() {
    const g = r.let("ruleErrs", null);
    return r.try(() => h((0, je._)`await `), (_) => r.assign(p, !1).if((0, je._)`${_} instanceof ${c.ValidationError}`, () => r.assign(g, (0, je._)`${_}.errors`), () => r.throw(_))), g;
  }
  function m() {
    const g = (0, je._)`${l}.errors`;
    return r.assign(g, null), h(je.nil), g;
  }
  function h(g = e.async ? (0, je._)`await ` : je.nil) {
    const _ = c.opts.passContext ? Xt.default.this : Xt.default.self, R = !("compile" in e && !o || e.schema === !1);
    r.assign(p, (0, je._)`${g}${(0, cw.callValidateCode)(t, l, _, R)}`, e.modifying);
  }
  function y(g) {
    var _;
    r.if((0, je.not)((_ = e.valid) !== null && _ !== void 0 ? _ : p), g);
  }
}
pt.funcKeywordCode = pw;
function $p(t) {
  const { gen: e, data: n, it: r } = t;
  e.if(r.parentData, () => e.assign(n, (0, je._)`${r.parentData}[${r.parentDataProperty}]`));
}
function dw(t, e) {
  const { gen: n } = t;
  n.if((0, je._)`Array.isArray(${e})`, () => {
    n.assign(Xt.default.vErrors, (0, je._)`${Xt.default.vErrors} === null ? ${e} : ${Xt.default.vErrors}.concat(${e})`).assign(Xt.default.errors, (0, je._)`${Xt.default.vErrors}.length`), (0, lw.extendErrors)(t);
  }, () => t.error());
}
function fw({ schemaEnv: t }, e) {
  if (e.async && !t.$async)
    throw new Error("async keyword in sync schema");
}
function um(t, e, n) {
  if (n === void 0)
    throw new Error(`keyword "${e}" failed to compile`);
  return t.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, je.stringify)(n) });
}
function mw(t, e, n = !1) {
  return !e.length || e.some((r) => r === "array" ? Array.isArray(t) : r === "object" ? t && typeof t == "object" && !Array.isArray(t) : typeof t == r || n && typeof t > "u");
}
pt.validSchemaType = mw;
function hw({ schema: t, opts: e, self: n, errSchemaPath: r }, s, a) {
  if (Array.isArray(s.keyword) ? !s.keyword.includes(a) : s.keyword !== a)
    throw new Error("ajv implementation error");
  const i = s.dependencies;
  if (i != null && i.some((o) => !Object.prototype.hasOwnProperty.call(t, o)))
    throw new Error(`parent schema must have dependencies of ${a}: ${i.join(",")}`);
  if (s.validateSchema && !s.validateSchema(t[a])) {
    const c = `keyword "${a}" value is invalid at path "${r}": ` + n.errorsText(s.validateSchema.errors);
    if (e.validateSchema === "log")
      n.logger.error(c);
    else
      throw new Error(c);
  }
}
pt.validateKeywordUsage = hw;
var zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.extendSubschemaMode = zt.extendSubschemaData = zt.getSubschema = void 0;
const ut = X, pm = F;
function vw(t, { keyword: e, schemaProp: n, schema: r, schemaPath: s, errSchemaPath: a, topSchemaRef: i }) {
  if (e !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (e !== void 0) {
    const o = t.schema[e];
    return n === void 0 ? {
      schema: o,
      schemaPath: (0, ut._)`${t.schemaPath}${(0, ut.getProperty)(e)}`,
      errSchemaPath: `${t.errSchemaPath}/${e}`
    } : {
      schema: o[n],
      schemaPath: (0, ut._)`${t.schemaPath}${(0, ut.getProperty)(e)}${(0, ut.getProperty)(n)}`,
      errSchemaPath: `${t.errSchemaPath}/${e}/${(0, pm.escapeFragment)(n)}`
    };
  }
  if (r !== void 0) {
    if (s === void 0 || a === void 0 || i === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: r,
      schemaPath: s,
      topSchemaRef: i,
      errSchemaPath: a
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
zt.getSubschema = vw;
function yw(t, e, { dataProp: n, dataPropType: r, data: s, dataTypes: a, propertyName: i }) {
  if (s !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: o } = e;
  if (n !== void 0) {
    const { errorPath: u, dataPathArr: l, opts: p } = e, d = o.let("data", (0, ut._)`${e.data}${(0, ut.getProperty)(n)}`, !0);
    c(d), t.errorPath = (0, ut.str)`${u}${(0, pm.getErrorPath)(n, r, p.jsPropertySyntax)}`, t.parentDataProperty = (0, ut._)`${n}`, t.dataPathArr = [...l, t.parentDataProperty];
  }
  if (s !== void 0) {
    const u = s instanceof ut.Name ? s : o.let("data", s, !0);
    c(u), i !== void 0 && (t.propertyName = i);
  }
  a && (t.dataTypes = a);
  function c(u) {
    t.data = u, t.dataLevel = e.dataLevel + 1, t.dataTypes = [], e.definedProperties = /* @__PURE__ */ new Set(), t.parentData = e.data, t.dataNames = [...e.dataNames, u];
  }
}
zt.extendSubschemaData = yw;
function gw(t, { jtdDiscriminator: e, jtdMetadata: n, compositeRule: r, createErrors: s, allErrors: a }) {
  r !== void 0 && (t.compositeRule = r), s !== void 0 && (t.createErrors = s), a !== void 0 && (t.allErrors = a), t.jtdDiscriminator = e, t.jtdMetadata = n;
}
zt.extendSubschemaMode = gw;
var Re = {}, dm = function t(e, n) {
  if (e === n) return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor) return !1;
    var r, s, a;
    if (Array.isArray(e)) {
      if (r = e.length, r != n.length) return !1;
      for (s = r; s-- !== 0; )
        if (!t(e[s], n[s])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === n.toString();
    if (a = Object.keys(e), r = a.length, r !== Object.keys(n).length) return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, a[s])) return !1;
    for (s = r; s-- !== 0; ) {
      var i = a[s];
      if (!t(e[i], n[i])) return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}, fm = { exports: {} }, Dt = fm.exports = function(t, e, n) {
  typeof e == "function" && (n = e, e = {}), n = e.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, s = n.post || function() {
  };
  bs(e, r, s, t, "", t);
};
Dt.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
Dt.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
Dt.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
Dt.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function bs(t, e, n, r, s, a, i, o, c, u) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    e(r, s, a, i, o, c, u);
    for (var l in r) {
      var p = r[l];
      if (Array.isArray(p)) {
        if (l in Dt.arrayKeywords)
          for (var d = 0; d < p.length; d++)
            bs(t, e, n, p[d], s + "/" + l + "/" + d, a, s, l, r, d);
      } else if (l in Dt.propsKeywords) {
        if (p && typeof p == "object")
          for (var f in p)
            bs(t, e, n, p[f], s + "/" + l + "/" + xw(f), a, s, l, r, f);
      } else (l in Dt.keywords || t.allKeys && !(l in Dt.skipKeywords)) && bs(t, e, n, p, s + "/" + l, a, s, l, r);
    }
    n(r, s, a, i, o, c, u);
  }
}
function xw(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
var bw = fm.exports;
Object.defineProperty(Re, "__esModule", { value: !0 });
Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
const _w = F, ww = dm, Ew = bw, $w = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function Sw(t, e = !0) {
  return typeof t == "boolean" ? !0 : e === !0 ? !Po(t) : e ? mm(t) <= e : !1;
}
Re.inlineRef = Sw;
const Rw = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Po(t) {
  for (const e in t) {
    if (Rw.has(e))
      return !0;
    const n = t[e];
    if (Array.isArray(n) && n.some(Po) || typeof n == "object" && Po(n))
      return !0;
  }
  return !1;
}
function mm(t) {
  let e = 0;
  for (const n in t) {
    if (n === "$ref")
      return 1 / 0;
    if (e++, !$w.has(n) && (typeof t[n] == "object" && (0, _w.eachItem)(t[n], (r) => e += mm(r)), e === 1 / 0))
      return 1 / 0;
  }
  return e;
}
function hm(t, e = "", n) {
  n !== !1 && (e = Cn(e));
  const r = t.parse(e);
  return vm(t, r);
}
Re.getFullPath = hm;
function vm(t, e) {
  return t.serialize(e).split("#")[0] + "#";
}
Re._getFullPath = vm;
const Ow = /#\/?$/;
function Cn(t) {
  return t ? t.replace(Ow, "") : "";
}
Re.normalizeId = Cn;
function Tw(t, e, n) {
  return n = Cn(n), t.resolve(e, n);
}
Re.resolveUrl = Tw;
const Pw = /^[a-z_][-a-z0-9._]*$/i;
function kw(t, e) {
  if (typeof t == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, s = Cn(t[n] || e), a = { "": s }, i = hm(r, s, !1), o = {}, c = /* @__PURE__ */ new Set();
  return Ew(t, { allKeys: !0 }, (p, d, f, m) => {
    if (m === void 0)
      return;
    const h = i + d;
    let y = a[m];
    typeof p[n] == "string" && (y = g.call(this, p[n])), _.call(this, p.$anchor), _.call(this, p.$dynamicAnchor), a[d] = y;
    function g(R) {
      const P = this.opts.uriResolver.resolve;
      if (R = Cn(y ? P(y, R) : R), c.has(R))
        throw l(R);
      c.add(R);
      let k = this.refs[R];
      return typeof k == "string" && (k = this.refs[k]), typeof k == "object" ? u(p, k.schema, R) : R !== Cn(h) && (R[0] === "#" ? (u(p, o[R], R), o[R] = p) : this.refs[R] = h), R;
    }
    function _(R) {
      if (typeof R == "string") {
        if (!Pw.test(R))
          throw new Error(`invalid anchor "${R}"`);
        g.call(this, `#${R}`);
      }
    }
  }), o;
  function u(p, d, f) {
    if (d !== void 0 && !ww(p, d))
      throw l(f);
  }
  function l(p) {
    return new Error(`reference "${p}" resolves to more than one schema`);
  }
}
Re.getSchemaRefs = kw;
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.getData = Ke.KeywordCxt = Ke.validateFunctionCode = void 0;
const ym = qn, Sp = be, gc = xt, Ds = be, Aw = na, lr = pt, Ji = zt, G = X, K = Be, Nw = Re, bt = F, sr = jr;
function jw(t) {
  if (bm(t) && (_m(t), xm(t))) {
    Lw(t);
    return;
  }
  gm(t, () => (0, ym.topBoolOrEmptySchema)(t));
}
Ke.validateFunctionCode = jw;
function gm({ gen: t, validateName: e, schema: n, schemaEnv: r, opts: s }, a) {
  s.code.es5 ? t.func(e, (0, G._)`${K.default.data}, ${K.default.valCxt}`, r.$async, () => {
    t.code((0, G._)`"use strict"; ${Rp(n, s)}`), Cw(t, s), t.code(a);
  }) : t.func(e, (0, G._)`${K.default.data}, ${Iw(s)}`, r.$async, () => t.code(Rp(n, s)).code(a));
}
function Iw(t) {
  return (0, G._)`{${K.default.instancePath}="", ${K.default.parentData}, ${K.default.parentDataProperty}, ${K.default.rootData}=${K.default.data}${t.dynamicRef ? (0, G._)`, ${K.default.dynamicAnchors}={}` : G.nil}}={}`;
}
function Cw(t, e) {
  t.if(K.default.valCxt, () => {
    t.var(K.default.instancePath, (0, G._)`${K.default.valCxt}.${K.default.instancePath}`), t.var(K.default.parentData, (0, G._)`${K.default.valCxt}.${K.default.parentData}`), t.var(K.default.parentDataProperty, (0, G._)`${K.default.valCxt}.${K.default.parentDataProperty}`), t.var(K.default.rootData, (0, G._)`${K.default.valCxt}.${K.default.rootData}`), e.dynamicRef && t.var(K.default.dynamicAnchors, (0, G._)`${K.default.valCxt}.${K.default.dynamicAnchors}`);
  }, () => {
    t.var(K.default.instancePath, (0, G._)`""`), t.var(K.default.parentData, (0, G._)`undefined`), t.var(K.default.parentDataProperty, (0, G._)`undefined`), t.var(K.default.rootData, K.default.data), e.dynamicRef && t.var(K.default.dynamicAnchors, (0, G._)`{}`);
  });
}
function Lw(t) {
  const { schema: e, opts: n, gen: r } = t;
  gm(t, () => {
    n.$comment && e.$comment && Em(t), Mw(t), r.let(K.default.vErrors, null), r.let(K.default.errors, 0), n.unevaluated && Fw(t), wm(t), Vw(t);
  });
}
function Fw(t) {
  const { gen: e, validateName: n } = t;
  t.evaluated = e.const("evaluated", (0, G._)`${n}.evaluated`), e.if((0, G._)`${t.evaluated}.dynamicProps`, () => e.assign((0, G._)`${t.evaluated}.props`, (0, G._)`undefined`)), e.if((0, G._)`${t.evaluated}.dynamicItems`, () => e.assign((0, G._)`${t.evaluated}.items`, (0, G._)`undefined`));
}
function Rp(t, e) {
  const n = typeof t == "object" && t[e.schemaId];
  return n && (e.code.source || e.code.process) ? (0, G._)`/*# sourceURL=${n} */` : G.nil;
}
function Dw(t, e) {
  if (bm(t) && (_m(t), xm(t))) {
    Uw(t, e);
    return;
  }
  (0, ym.boolOrEmptySchema)(t, e);
}
function xm({ schema: t, self: e }) {
  if (typeof t == "boolean")
    return !t;
  for (const n in t)
    if (e.RULES.all[n])
      return !0;
  return !1;
}
function bm(t) {
  return typeof t.schema != "boolean";
}
function Uw(t, e) {
  const { schema: n, gen: r, opts: s } = t;
  s.$comment && n.$comment && Em(t), qw(t), Bw(t);
  const a = r.const("_errs", K.default.errors);
  wm(t, a), r.var(e, (0, G._)`${a} === ${K.default.errors}`);
}
function _m(t) {
  (0, bt.checkUnknownRules)(t), zw(t);
}
function wm(t, e) {
  if (t.opts.jtd)
    return Op(t, [], !1, e);
  const n = (0, Sp.getSchemaTypes)(t.schema), r = (0, Sp.coerceAndCheckDataType)(t, n);
  Op(t, n, !r, e);
}
function zw(t) {
  const { schema: e, errSchemaPath: n, opts: r, self: s } = t;
  e.$ref && r.ignoreKeywordsWithRef && (0, bt.schemaHasRulesButRef)(e, s.RULES) && s.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function Mw(t) {
  const { schema: e, opts: n } = t;
  e.default !== void 0 && n.useDefaults && n.strictSchema && (0, bt.checkStrictMode)(t, "default is ignored in the schema root");
}
function qw(t) {
  const e = t.schema[t.opts.schemaId];
  e && (t.baseId = (0, Nw.resolveUrl)(t.opts.uriResolver, t.baseId, e));
}
function Bw(t) {
  if (t.schema.$async && !t.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Em({ gen: t, schemaEnv: e, schema: n, errSchemaPath: r, opts: s }) {
  const a = n.$comment;
  if (s.$comment === !0)
    t.code((0, G._)`${K.default.self}.logger.log(${a})`);
  else if (typeof s.$comment == "function") {
    const i = (0, G.str)`${r}/$comment`, o = t.scopeValue("root", { ref: e.root });
    t.code((0, G._)`${K.default.self}.opts.$comment(${a}, ${i}, ${o}.schema)`);
  }
}
function Vw(t) {
  const { gen: e, schemaEnv: n, validateName: r, ValidationError: s, opts: a } = t;
  n.$async ? e.if((0, G._)`${K.default.errors} === 0`, () => e.return(K.default.data), () => e.throw((0, G._)`new ${s}(${K.default.vErrors})`)) : (e.assign((0, G._)`${r}.errors`, K.default.vErrors), a.unevaluated && Gw(t), e.return((0, G._)`${K.default.errors} === 0`));
}
function Gw({ gen: t, evaluated: e, props: n, items: r }) {
  n instanceof G.Name && t.assign((0, G._)`${e}.props`, n), r instanceof G.Name && t.assign((0, G._)`${e}.items`, r);
}
function Op(t, e, n, r) {
  const { gen: s, schema: a, data: i, allErrors: o, opts: c, self: u } = t, { RULES: l } = u;
  if (a.$ref && (c.ignoreKeywordsWithRef || !(0, bt.schemaHasRulesButRef)(a, l))) {
    s.block(() => Rm(t, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || Hw(t, e), s.block(() => {
    for (const d of l.rules)
      p(d);
    p(l.post);
  });
  function p(d) {
    (0, gc.shouldUseGroup)(a, d) && (d.type ? (s.if((0, Ds.checkDataType)(d.type, i, c.strictNumbers)), Tp(t, d), e.length === 1 && e[0] === d.type && n && (s.else(), (0, Ds.reportTypeError)(t)), s.endIf()) : Tp(t, d), o || s.if((0, G._)`${K.default.errors} === ${r || 0}`));
  }
}
function Tp(t, e) {
  const { gen: n, schema: r, opts: { useDefaults: s } } = t;
  s && (0, Aw.assignDefaults)(t, e.type), n.block(() => {
    for (const a of e.rules)
      (0, gc.shouldUseRule)(r, a) && Rm(t, a.keyword, a.definition, e.type);
  });
}
function Hw(t, e) {
  t.schemaEnv.meta || !t.opts.strictTypes || (Ww(t, e), t.opts.allowUnionTypes || Kw(t, e), Jw(t, t.dataTypes));
}
function Ww(t, e) {
  if (e.length) {
    if (!t.dataTypes.length) {
      t.dataTypes = e;
      return;
    }
    e.forEach((n) => {
      $m(t.dataTypes, n) || xc(t, `type "${n}" not allowed by context "${t.dataTypes.join(",")}"`);
    }), Yw(t, e);
  }
}
function Kw(t, e) {
  e.length > 1 && !(e.length === 2 && e.includes("null")) && xc(t, "use allowUnionTypes to allow union type keyword");
}
function Jw(t, e) {
  const n = t.self.RULES.all;
  for (const r in n) {
    const s = n[r];
    if (typeof s == "object" && (0, gc.shouldUseRule)(t.schema, s)) {
      const { type: a } = s.definition;
      a.length && !a.some((i) => Xw(e, i)) && xc(t, `missing type "${a.join(",")}" for keyword "${r}"`);
    }
  }
}
function Xw(t, e) {
  return t.includes(e) || e === "number" && t.includes("integer");
}
function $m(t, e) {
  return t.includes(e) || e === "integer" && t.includes("number");
}
function Yw(t, e) {
  const n = [];
  for (const r of t.dataTypes)
    $m(e, r) ? n.push(r) : e.includes("integer") && r === "number" && n.push("integer");
  t.dataTypes = n;
}
function xc(t, e) {
  const n = t.schemaEnv.baseId + t.errSchemaPath;
  e += ` at "${n}" (strictTypes)`, (0, bt.checkStrictMode)(t, e, t.opts.strictTypes);
}
class Sm {
  constructor(e, n, r) {
    if ((0, lr.validateKeywordUsage)(e, n, r), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = n.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, bt.schemaRefOrVal)(e, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = n, this.$data)
      this.schemaCode = e.gen.const("vSchema", Om(this.$data, e));
    else if (this.schemaCode = this.schemaValue, !(0, lr.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${r} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = e.gen.const("_errs", K.default.errors));
  }
  result(e, n, r) {
    this.failResult((0, G.not)(e), n, r);
  }
  failResult(e, n, r) {
    this.gen.if(e), r ? r() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(e, n) {
    this.failResult((0, G.not)(e), void 0, n);
  }
  fail(e) {
    if (e === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(e) {
    if (!this.$data)
      return this.fail(e);
    const { schemaCode: n } = this;
    this.fail((0, G._)`${n} !== undefined && (${(0, G.or)(this.invalid$data(), e)})`);
  }
  error(e, n, r) {
    if (n) {
      this.setParams(n), this._error(e, r), this.setParams({});
      return;
    }
    this._error(e, r);
  }
  _error(e, n) {
    (e ? sr.reportExtraError : sr.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, sr.reportError)(this, this.def.$dataError || sr.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, sr.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(e) {
    this.allErrors || this.gen.if(e);
  }
  setParams(e, n) {
    n ? Object.assign(this.params, e) : this.params = e;
  }
  block$data(e, n, r = G.nil) {
    this.gen.block(() => {
      this.check$data(e, r), n();
    });
  }
  check$data(e = G.nil, n = G.nil) {
    if (!this.$data)
      return;
    const { gen: r, schemaCode: s, schemaType: a, def: i } = this;
    r.if((0, G.or)((0, G._)`${s} === undefined`, n)), e !== G.nil && r.assign(e, !0), (a.length || i.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), e !== G.nil && r.assign(e, !1)), r.else();
  }
  invalid$data() {
    const { gen: e, schemaCode: n, schemaType: r, def: s, it: a } = this;
    return (0, G.or)(i(), o());
    function i() {
      if (r.length) {
        if (!(n instanceof G.Name))
          throw new Error("ajv implementation error");
        const c = Array.isArray(r) ? r : [r];
        return (0, G._)`${(0, Ds.checkDataTypes)(c, n, a.opts.strictNumbers, Ds.DataType.Wrong)}`;
      }
      return G.nil;
    }
    function o() {
      if (s.validateSchema) {
        const c = e.scopeValue("validate$data", { ref: s.validateSchema });
        return (0, G._)`!${c}(${n})`;
      }
      return G.nil;
    }
  }
  subschema(e, n) {
    const r = (0, Ji.getSubschema)(this.it, e);
    (0, Ji.extendSubschemaData)(r, this.it, e), (0, Ji.extendSubschemaMode)(r, e);
    const s = { ...this.it, ...r, items: void 0, props: void 0 };
    return Dw(s, n), s;
  }
  mergeEvaluated(e, n) {
    const { it: r, gen: s } = this;
    r.opts.unevaluated && (r.props !== !0 && e.props !== void 0 && (r.props = bt.mergeEvaluated.props(s, e.props, r.props, n)), r.items !== !0 && e.items !== void 0 && (r.items = bt.mergeEvaluated.items(s, e.items, r.items, n)));
  }
  mergeValidEvaluated(e, n) {
    const { it: r, gen: s } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return s.if(n, () => this.mergeEvaluated(e, G.Name)), !0;
  }
}
Ke.KeywordCxt = Sm;
function Rm(t, e, n, r) {
  const s = new Sm(t, n, e);
  "code" in n ? n.code(s, r) : s.$data && n.validate ? (0, lr.funcKeywordCode)(s, n) : "macro" in n ? (0, lr.macroKeywordCode)(s, n) : (n.compile || n.validate) && (0, lr.funcKeywordCode)(s, n);
}
const Zw = /^\/(?:[^~]|~0|~1)*$/, Qw = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Om(t, { dataLevel: e, dataNames: n, dataPathArr: r }) {
  let s, a;
  if (t === "")
    return K.default.rootData;
  if (t[0] === "/") {
    if (!Zw.test(t))
      throw new Error(`Invalid JSON-pointer: ${t}`);
    s = t, a = K.default.rootData;
  } else {
    const u = Qw.exec(t);
    if (!u)
      throw new Error(`Invalid JSON-pointer: ${t}`);
    const l = +u[1];
    if (s = u[2], s === "#") {
      if (l >= e)
        throw new Error(c("property/index", l));
      return r[e - l];
    }
    if (l > e)
      throw new Error(c("data", l));
    if (a = n[e - l], !s)
      return a;
  }
  let i = a;
  const o = s.split("/");
  for (const u of o)
    u && (a = (0, G._)`${a}${(0, G.getProperty)((0, bt.unescapeJsonPointer)(u))}`, i = (0, G._)`${i} && ${a}`);
  return i;
  function c(u, l) {
    return `Cannot access ${u} ${l} levels up, current level is ${e}`;
  }
}
Ke.getData = Om;
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
class eE extends Error {
  constructor(e) {
    super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
  }
}
Hn.default = eE;
var vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
const Xi = Re;
class tE extends Error {
  constructor(e, n, r, s) {
    super(s || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, Xi.resolveUrl)(e, n, r), this.missingSchema = (0, Xi.normalizeId)((0, Xi.getFullPath)(e, this.missingRef));
  }
}
vn.default = tE;
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.resolveSchema = Ie.getCompilingSchema = Ie.resolveRef = Ie.compileSchema = Ie.SchemaEnv = void 0;
const Xe = X, nE = Hn, Kt = Be, Qe = Re, Pp = F, rE = Ke;
class ra {
  constructor(e) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof e.schema == "object" && (r = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = (n = e.baseId) !== null && n !== void 0 ? n : (0, Qe.normalizeId)(r == null ? void 0 : r[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = r == null ? void 0 : r.$async, this.refs = {};
  }
}
Ie.SchemaEnv = ra;
function bc(t) {
  const e = Tm.call(this, t);
  if (e)
    return e;
  const n = (0, Qe.getFullPath)(this.opts.uriResolver, t.root.baseId), { es5: r, lines: s } = this.opts.code, { ownProperties: a } = this.opts, i = new Xe.CodeGen(this.scope, { es5: r, lines: s, ownProperties: a });
  let o;
  t.$async && (o = i.scopeValue("Error", {
    ref: nE.default,
    code: (0, Xe._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  t.validateName = c;
  const u = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: Kt.default.data,
    parentData: Kt.default.parentData,
    parentDataProperty: Kt.default.parentDataProperty,
    dataNames: [Kt.default.data],
    dataPathArr: [Xe.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: t.schema, code: (0, Xe.stringify)(t.schema) } : { ref: t.schema }),
    validateName: c,
    ValidationError: o,
    schema: t.schema,
    schemaEnv: t,
    rootId: n,
    baseId: t.baseId || n,
    schemaPath: Xe.nil,
    errSchemaPath: t.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Xe._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(t), (0, rE.validateFunctionCode)(u), i.optimize(this.opts.code.optimize);
    const p = i.toString();
    l = `${i.scopeRefs(Kt.default.scope)}return ${p}`, this.opts.code.process && (l = this.opts.code.process(l, t));
    const f = new Function(`${Kt.default.self}`, `${Kt.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: f }), f.errors = null, f.schema = t.schema, f.schemaEnv = t, t.$async && (f.$async = !0), this.opts.code.source === !0 && (f.source = { validateName: c, validateCode: p, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: m, items: h } = u;
      f.evaluated = {
        props: m instanceof Xe.Name ? void 0 : m,
        items: h instanceof Xe.Name ? void 0 : h,
        dynamicProps: m instanceof Xe.Name,
        dynamicItems: h instanceof Xe.Name
      }, f.source && (f.source.evaluated = (0, Xe.stringify)(f.evaluated));
    }
    return t.validate = f, t;
  } catch (p) {
    throw delete t.validate, delete t.validateName, l && this.logger.error("Error compiling schema, function code:", l), p;
  } finally {
    this._compilations.delete(t);
  }
}
Ie.compileSchema = bc;
function sE(t, e, n) {
  var r;
  n = (0, Qe.resolveUrl)(this.opts.uriResolver, e, n);
  const s = t.refs[n];
  if (s)
    return s;
  let a = oE.call(this, t, n);
  if (a === void 0) {
    const i = (r = t.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: o } = this.opts;
    i && (a = new ra({ schema: i, schemaId: o, root: t, baseId: e }));
  }
  if (a !== void 0)
    return t.refs[n] = aE.call(this, a);
}
Ie.resolveRef = sE;
function aE(t) {
  return (0, Qe.inlineRef)(t.schema, this.opts.inlineRefs) ? t.schema : t.validate ? t : bc.call(this, t);
}
function Tm(t) {
  for (const e of this._compilations)
    if (iE(e, t))
      return e;
}
Ie.getCompilingSchema = Tm;
function iE(t, e) {
  return t.schema === e.schema && t.root === e.root && t.baseId === e.baseId;
}
function oE(t, e) {
  let n;
  for (; typeof (n = this.refs[e]) == "string"; )
    e = n;
  return n || this.schemas[e] || sa.call(this, t, e);
}
function sa(t, e) {
  const n = this.opts.uriResolver.parse(e), r = (0, Qe._getFullPath)(this.opts.uriResolver, n);
  let s = (0, Qe.getFullPath)(this.opts.uriResolver, t.baseId, void 0);
  if (Object.keys(t.schema).length > 0 && r === s)
    return Yi.call(this, n, t);
  const a = (0, Qe.normalizeId)(r), i = this.refs[a] || this.schemas[a];
  if (typeof i == "string") {
    const o = sa.call(this, t, i);
    return typeof (o == null ? void 0 : o.schema) != "object" ? void 0 : Yi.call(this, n, o);
  }
  if (typeof (i == null ? void 0 : i.schema) == "object") {
    if (i.validate || bc.call(this, i), a === (0, Qe.normalizeId)(e)) {
      const { schema: o } = i, { schemaId: c } = this.opts, u = o[c];
      return u && (s = (0, Qe.resolveUrl)(this.opts.uriResolver, s, u)), new ra({ schema: o, schemaId: c, root: t, baseId: s });
    }
    return Yi.call(this, n, i);
  }
}
Ie.resolveSchema = sa;
const cE = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function Yi(t, { baseId: e, schema: n, root: r }) {
  var s;
  if (((s = t.fragment) === null || s === void 0 ? void 0 : s[0]) !== "/")
    return;
  for (const o of t.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, Pp.unescapeFragment)(o)];
    if (c === void 0)
      return;
    n = c;
    const u = typeof n == "object" && n[this.opts.schemaId];
    !cE.has(o) && u && (e = (0, Qe.resolveUrl)(this.opts.uriResolver, e, u));
  }
  let a;
  if (typeof n != "boolean" && n.$ref && !(0, Pp.schemaHasRulesButRef)(n, this.RULES)) {
    const o = (0, Qe.resolveUrl)(this.opts.uriResolver, e, n.$ref);
    a = sa.call(this, r, o);
  }
  const { schemaId: i } = this.opts;
  if (a = a || new ra({ schema: n, schemaId: i, root: r, baseId: e }), a.schema !== a.root.schema)
    return a;
}
const lE = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", uE = "Meta-schema for $data reference (JSON AnySchema extension proposal)", pE = "object", dE = [
  "$data"
], fE = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, mE = !1, hE = {
  $id: lE,
  description: uE,
  type: pE,
  required: dE,
  properties: fE,
  additionalProperties: mE
};
var _c = {}, aa = { exports: {} };
const vE = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), Pm = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
function km(t) {
  let e = "", n = 0, r = 0;
  for (r = 0; r < t.length; r++)
    if (n = t[r].charCodeAt(0), n !== 48) {
      if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102))
        return "";
      e += t[r];
      break;
    }
  for (r += 1; r < t.length; r++) {
    if (n = t[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102))
      return "";
    e += t[r];
  }
  return e;
}
const yE = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function kp(t) {
  return t.length = 0, !0;
}
function gE(t, e, n) {
  if (t.length) {
    const r = km(t);
    if (r !== "")
      e.push(r);
    else
      return n.error = !0, !1;
    t.length = 0;
  }
  return !0;
}
function xE(t) {
  let e = 0;
  const n = { error: !1, address: "", zone: "" }, r = [], s = [];
  let a = !1, i = !1, o = gE;
  for (let c = 0; c < t.length; c++) {
    const u = t[c];
    if (!(u === "[" || u === "]"))
      if (u === ":") {
        if (a === !0 && (i = !0), !o(s, r, n))
          break;
        if (++e > 7) {
          n.error = !0;
          break;
        }
        c > 0 && t[c - 1] === ":" && (a = !0), r.push(":");
        continue;
      } else if (u === "%") {
        if (!o(s, r, n))
          break;
        o = kp;
      } else {
        s.push(u);
        continue;
      }
  }
  return s.length && (o === kp ? n.zone = s.join("") : i ? r.push(s.join("")) : r.push(km(s))), n.address = r.join(""), n;
}
function Am(t) {
  if (bE(t, ":") < 2)
    return { host: t, isIPV6: !1 };
  const e = xE(t);
  if (e.error)
    return { host: t, isIPV6: !1 };
  {
    let n = e.address, r = e.address;
    return e.zone && (n += "%" + e.zone, r += "%25" + e.zone), { host: n, isIPV6: !0, escapedHost: r };
  }
}
function bE(t, e) {
  let n = 0;
  for (let r = 0; r < t.length; r++)
    t[r] === e && n++;
  return n;
}
function _E(t) {
  let e = t;
  const n = [];
  let r = -1, s = 0;
  for (; s = e.length; ) {
    if (s === 1) {
      if (e === ".")
        break;
      if (e === "/") {
        n.push("/");
        break;
      } else {
        n.push(e);
        break;
      }
    } else if (s === 2) {
      if (e[0] === ".") {
        if (e[1] === ".")
          break;
        if (e[1] === "/") {
          e = e.slice(2);
          continue;
        }
      } else if (e[0] === "/" && (e[1] === "." || e[1] === "/")) {
        n.push("/");
        break;
      }
    } else if (s === 3 && e === "/..") {
      n.length !== 0 && n.pop(), n.push("/");
      break;
    }
    if (e[0] === ".") {
      if (e[1] === ".") {
        if (e[2] === "/") {
          e = e.slice(3);
          continue;
        }
      } else if (e[1] === "/") {
        e = e.slice(2);
        continue;
      }
    } else if (e[0] === "/" && e[1] === ".") {
      if (e[2] === "/") {
        e = e.slice(2);
        continue;
      } else if (e[2] === "." && e[3] === "/") {
        e = e.slice(3), n.length !== 0 && n.pop();
        continue;
      }
    }
    if ((r = e.indexOf("/", 1)) === -1) {
      n.push(e);
      break;
    } else
      n.push(e.slice(0, r)), e = e.slice(r);
  }
  return n.join("");
}
function wE(t, e) {
  const n = e !== !0 ? escape : unescape;
  return t.scheme !== void 0 && (t.scheme = n(t.scheme)), t.userinfo !== void 0 && (t.userinfo = n(t.userinfo)), t.host !== void 0 && (t.host = n(t.host)), t.path !== void 0 && (t.path = n(t.path)), t.query !== void 0 && (t.query = n(t.query)), t.fragment !== void 0 && (t.fragment = n(t.fragment)), t;
}
function EE(t) {
  const e = [];
  if (t.userinfo !== void 0 && (e.push(t.userinfo), e.push("@")), t.host !== void 0) {
    let n = unescape(t.host);
    if (!Pm(n)) {
      const r = Am(n);
      r.isIPV6 === !0 ? n = `[${r.escapedHost}]` : n = t.host;
    }
    e.push(n);
  }
  return (typeof t.port == "number" || typeof t.port == "string") && (e.push(":"), e.push(String(t.port))), e.length ? e.join("") : void 0;
}
var Nm = {
  nonSimpleDomain: yE,
  recomposeAuthority: EE,
  normalizeComponentEncoding: wE,
  removeDotSegments: _E,
  isIPv4: Pm,
  isUUID: vE,
  normalizeIPv6: Am
};
const { isUUID: $E } = Nm, SE = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
function jm(t) {
  return t.secure === !0 ? !0 : t.secure === !1 ? !1 : t.scheme ? t.scheme.length === 3 && (t.scheme[0] === "w" || t.scheme[0] === "W") && (t.scheme[1] === "s" || t.scheme[1] === "S") && (t.scheme[2] === "s" || t.scheme[2] === "S") : !1;
}
function Im(t) {
  return t.host || (t.error = t.error || "HTTP URIs must have a host."), t;
}
function Cm(t) {
  const e = String(t.scheme).toLowerCase() === "https";
  return (t.port === (e ? 443 : 80) || t.port === "") && (t.port = void 0), t.path || (t.path = "/"), t;
}
function RE(t) {
  return t.secure = jm(t), t.resourceName = (t.path || "/") + (t.query ? "?" + t.query : ""), t.path = void 0, t.query = void 0, t;
}
function OE(t) {
  if ((t.port === (jm(t) ? 443 : 80) || t.port === "") && (t.port = void 0), typeof t.secure == "boolean" && (t.scheme = t.secure ? "wss" : "ws", t.secure = void 0), t.resourceName) {
    const [e, n] = t.resourceName.split("?");
    t.path = e && e !== "/" ? e : void 0, t.query = n, t.resourceName = void 0;
  }
  return t.fragment = void 0, t;
}
function TE(t, e) {
  if (!t.path)
    return t.error = "URN can not be parsed", t;
  const n = t.path.match(SE);
  if (n) {
    const r = e.scheme || t.scheme || "urn";
    t.nid = n[1].toLowerCase(), t.nss = n[2];
    const s = `${r}:${e.nid || t.nid}`, a = wc(s);
    t.path = void 0, a && (t = a.parse(t, e));
  } else
    t.error = t.error || "URN can not be parsed.";
  return t;
}
function PE(t, e) {
  if (t.nid === void 0)
    throw new Error("URN without nid cannot be serialized");
  const n = e.scheme || t.scheme || "urn", r = t.nid.toLowerCase(), s = `${n}:${e.nid || r}`, a = wc(s);
  a && (t = a.serialize(t, e));
  const i = t, o = t.nss;
  return i.path = `${r || e.nid}:${o}`, e.skipEscape = !0, i;
}
function kE(t, e) {
  const n = t;
  return n.uuid = n.nss, n.nss = void 0, !e.tolerant && (!n.uuid || !$E(n.uuid)) && (n.error = n.error || "UUID is not valid."), n;
}
function AE(t) {
  const e = t;
  return e.nss = (t.uuid || "").toLowerCase(), e;
}
const Lm = (
  /** @type {SchemeHandler} */
  {
    scheme: "http",
    domainHost: !0,
    parse: Im,
    serialize: Cm
  }
), NE = (
  /** @type {SchemeHandler} */
  {
    scheme: "https",
    domainHost: Lm.domainHost,
    parse: Im,
    serialize: Cm
  }
), _s = (
  /** @type {SchemeHandler} */
  {
    scheme: "ws",
    domainHost: !0,
    parse: RE,
    serialize: OE
  }
), jE = (
  /** @type {SchemeHandler} */
  {
    scheme: "wss",
    domainHost: _s.domainHost,
    parse: _s.parse,
    serialize: _s.serialize
  }
), IE = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn",
    parse: TE,
    serialize: PE,
    skipNormalize: !0
  }
), CE = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn:uuid",
    parse: kE,
    serialize: AE,
    skipNormalize: !0
  }
), Us = (
  /** @type {Record<SchemeName, SchemeHandler>} */
  {
    http: Lm,
    https: NE,
    ws: _s,
    wss: jE,
    urn: IE,
    "urn:uuid": CE
  }
);
Object.setPrototypeOf(Us, null);
function wc(t) {
  return t && (Us[
    /** @type {SchemeName} */
    t
  ] || Us[
    /** @type {SchemeName} */
    t.toLowerCase()
  ]) || void 0;
}
var LE = {
  SCHEMES: Us,
  getSchemeHandler: wc
};
const { normalizeIPv6: FE, removeDotSegments: or, recomposeAuthority: DE, normalizeComponentEncoding: Yr, isIPv4: UE, nonSimpleDomain: zE } = Nm, { SCHEMES: ME, getSchemeHandler: Fm } = LE;
function qE(t, e) {
  return typeof t == "string" ? t = /** @type {T} */
  dt(_t(t, e), e) : typeof t == "object" && (t = /** @type {T} */
  _t(dt(t, e), e)), t;
}
function BE(t, e, n) {
  const r = n ? Object.assign({ scheme: "null" }, n) : { scheme: "null" }, s = Dm(_t(t, r), _t(e, r), r, !0);
  return r.skipEscape = !0, dt(s, r);
}
function Dm(t, e, n, r) {
  const s = {};
  return r || (t = _t(dt(t, n), n), e = _t(dt(e, n), n)), n = n || {}, !n.tolerant && e.scheme ? (s.scheme = e.scheme, s.userinfo = e.userinfo, s.host = e.host, s.port = e.port, s.path = or(e.path || ""), s.query = e.query) : (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0 ? (s.userinfo = e.userinfo, s.host = e.host, s.port = e.port, s.path = or(e.path || ""), s.query = e.query) : (e.path ? (e.path[0] === "/" ? s.path = or(e.path) : ((t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0) && !t.path ? s.path = "/" + e.path : t.path ? s.path = t.path.slice(0, t.path.lastIndexOf("/") + 1) + e.path : s.path = e.path, s.path = or(s.path)), s.query = e.query) : (s.path = t.path, e.query !== void 0 ? s.query = e.query : s.query = t.query), s.userinfo = t.userinfo, s.host = t.host, s.port = t.port), s.scheme = t.scheme), s.fragment = e.fragment, s;
}
function VE(t, e, n) {
  return typeof t == "string" ? (t = unescape(t), t = dt(Yr(_t(t, n), !0), { ...n, skipEscape: !0 })) : typeof t == "object" && (t = dt(Yr(t, !0), { ...n, skipEscape: !0 })), typeof e == "string" ? (e = unescape(e), e = dt(Yr(_t(e, n), !0), { ...n, skipEscape: !0 })) : typeof e == "object" && (e = dt(Yr(e, !0), { ...n, skipEscape: !0 })), t.toLowerCase() === e.toLowerCase();
}
function dt(t, e) {
  const n = {
    host: t.host,
    scheme: t.scheme,
    userinfo: t.userinfo,
    port: t.port,
    path: t.path,
    query: t.query,
    nid: t.nid,
    nss: t.nss,
    uuid: t.uuid,
    fragment: t.fragment,
    reference: t.reference,
    resourceName: t.resourceName,
    secure: t.secure,
    error: ""
  }, r = Object.assign({}, e), s = [], a = Fm(r.scheme || n.scheme);
  a && a.serialize && a.serialize(n, r), n.path !== void 0 && (r.skipEscape ? n.path = unescape(n.path) : (n.path = escape(n.path), n.scheme !== void 0 && (n.path = n.path.split("%3A").join(":")))), r.reference !== "suffix" && n.scheme && s.push(n.scheme, ":");
  const i = DE(n);
  if (i !== void 0 && (r.reference !== "suffix" && s.push("//"), s.push(i), n.path && n.path[0] !== "/" && s.push("/")), n.path !== void 0) {
    let o = n.path;
    !r.absolutePath && (!a || !a.absolutePath) && (o = or(o)), i === void 0 && o[0] === "/" && o[1] === "/" && (o = "/%2F" + o.slice(2)), s.push(o);
  }
  return n.query !== void 0 && s.push("?", n.query), n.fragment !== void 0 && s.push("#", n.fragment), s.join("");
}
const GE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
function _t(t, e) {
  const n = Object.assign({}, e), r = {
    scheme: void 0,
    userinfo: void 0,
    host: "",
    port: void 0,
    path: "",
    query: void 0,
    fragment: void 0
  };
  let s = !1;
  n.reference === "suffix" && (n.scheme ? t = n.scheme + ":" + t : t = "//" + t);
  const a = t.match(GE);
  if (a) {
    if (r.scheme = a[1], r.userinfo = a[3], r.host = a[4], r.port = parseInt(a[5], 10), r.path = a[6] || "", r.query = a[7], r.fragment = a[8], isNaN(r.port) && (r.port = a[5]), r.host)
      if (UE(r.host) === !1) {
        const c = FE(r.host);
        r.host = c.host.toLowerCase(), s = c.isIPV6;
      } else
        s = !0;
    r.scheme === void 0 && r.userinfo === void 0 && r.host === void 0 && r.port === void 0 && r.query === void 0 && !r.path ? r.reference = "same-document" : r.scheme === void 0 ? r.reference = "relative" : r.fragment === void 0 ? r.reference = "absolute" : r.reference = "uri", n.reference && n.reference !== "suffix" && n.reference !== r.reference && (r.error = r.error || "URI is not a " + n.reference + " reference.");
    const i = Fm(n.scheme || r.scheme);
    if (!n.unicodeSupport && (!i || !i.unicodeSupport) && r.host && (n.domainHost || i && i.domainHost) && s === !1 && zE(r.host))
      try {
        r.host = URL.domainToASCII(r.host.toLowerCase());
      } catch (o) {
        r.error = r.error || "Host's domain name can not be converted to ASCII: " + o;
      }
    (!i || i && !i.skipNormalize) && (t.indexOf("%") !== -1 && (r.scheme !== void 0 && (r.scheme = unescape(r.scheme)), r.host !== void 0 && (r.host = unescape(r.host))), r.path && (r.path = escape(unescape(r.path))), r.fragment && (r.fragment = encodeURI(decodeURIComponent(r.fragment)))), i && i.parse && i.parse(r, n);
  } else
    r.error = r.error || "URI can not be parsed.";
  return r;
}
const Ec = {
  SCHEMES: ME,
  normalize: qE,
  resolve: BE,
  resolveComponent: Dm,
  equal: VE,
  serialize: dt,
  parse: _t
};
aa.exports = Ec;
aa.exports.default = Ec;
aa.exports.fastUri = Ec;
var HE = aa.exports;
Object.defineProperty(_c, "__esModule", { value: !0 });
const Um = HE;
Um.code = 'require("ajv/dist/runtime/uri").default';
_c.default = Um;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
  var e = Ke;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return e.KeywordCxt;
  } });
  var n = X;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return n.CodeGen;
  } });
  const r = Hn, s = vn, a = dn, i = Ie, o = X, c = Re, u = be, l = F, p = hE, d = _c, f = (S, x) => new RegExp(S, x);
  f.code = "new RegExp";
  const m = ["removeAdditional", "useDefaults", "coerceTypes"], h = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), y = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, g = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, _ = 200;
  function R(S) {
    var x, $, w, v, b, O, U, V, ie, H, _e, yn, _a, wa, Ea, $a, Sa, Ra, Oa, Ta, Pa, ka, Aa, Na, ja;
    const Zn = S.strict, Ia = (x = S.code) === null || x === void 0 ? void 0 : x.optimize, yl = Ia === !0 || Ia === void 0 ? 1 : Ia || 0, gl = (w = ($ = S.code) === null || $ === void 0 ? void 0 : $.regExp) !== null && w !== void 0 ? w : f, xh = (v = S.uriResolver) !== null && v !== void 0 ? v : d.default;
    return {
      strictSchema: (O = (b = S.strictSchema) !== null && b !== void 0 ? b : Zn) !== null && O !== void 0 ? O : !0,
      strictNumbers: (V = (U = S.strictNumbers) !== null && U !== void 0 ? U : Zn) !== null && V !== void 0 ? V : !0,
      strictTypes: (H = (ie = S.strictTypes) !== null && ie !== void 0 ? ie : Zn) !== null && H !== void 0 ? H : "log",
      strictTuples: (yn = (_e = S.strictTuples) !== null && _e !== void 0 ? _e : Zn) !== null && yn !== void 0 ? yn : "log",
      strictRequired: (wa = (_a = S.strictRequired) !== null && _a !== void 0 ? _a : Zn) !== null && wa !== void 0 ? wa : !1,
      code: S.code ? { ...S.code, optimize: yl, regExp: gl } : { optimize: yl, regExp: gl },
      loopRequired: (Ea = S.loopRequired) !== null && Ea !== void 0 ? Ea : _,
      loopEnum: ($a = S.loopEnum) !== null && $a !== void 0 ? $a : _,
      meta: (Sa = S.meta) !== null && Sa !== void 0 ? Sa : !0,
      messages: (Ra = S.messages) !== null && Ra !== void 0 ? Ra : !0,
      inlineRefs: (Oa = S.inlineRefs) !== null && Oa !== void 0 ? Oa : !0,
      schemaId: (Ta = S.schemaId) !== null && Ta !== void 0 ? Ta : "$id",
      addUsedSchema: (Pa = S.addUsedSchema) !== null && Pa !== void 0 ? Pa : !0,
      validateSchema: (ka = S.validateSchema) !== null && ka !== void 0 ? ka : !0,
      validateFormats: (Aa = S.validateFormats) !== null && Aa !== void 0 ? Aa : !0,
      unicodeRegExp: (Na = S.unicodeRegExp) !== null && Na !== void 0 ? Na : !0,
      int32range: (ja = S.int32range) !== null && ja !== void 0 ? ja : !0,
      uriResolver: xh
    };
  }
  class P {
    constructor(x = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), x = this.opts = { ...x, ...R(x) };
      const { es5: $, lines: w } = this.opts.code;
      this.scope = new o.ValueScope({ scope: {}, prefixes: h, es5: $, lines: w }), this.logger = L(x.logger);
      const v = x.validateFormats;
      x.validateFormats = !1, this.RULES = (0, a.getRules)(), k.call(this, y, x, "NOT SUPPORTED"), k.call(this, g, x, "DEPRECATED", "warn"), this._metaOpts = fe.call(this), x.formats && W.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), x.keywords && oe.call(this, x.keywords), typeof x.meta == "object" && this.addMetaSchema(x.meta), B.call(this), x.validateFormats = v;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: x, meta: $, schemaId: w } = this.opts;
      let v = p;
      w === "id" && (v = { ...p }, v.id = v.$id, delete v.$id), $ && x && this.addMetaSchema(v, v[w], !1);
    }
    defaultMeta() {
      const { meta: x, schemaId: $ } = this.opts;
      return this.opts.defaultMeta = typeof x == "object" ? x[$] || x : void 0;
    }
    validate(x, $) {
      let w;
      if (typeof x == "string") {
        if (w = this.getSchema(x), !w)
          throw new Error(`no schema with key or ref "${x}"`);
      } else
        w = this.compile(x);
      const v = w($);
      return "$async" in w || (this.errors = w.errors), v;
    }
    compile(x, $) {
      const w = this._addSchema(x, $);
      return w.validate || this._compileSchemaEnv(w);
    }
    compileAsync(x, $) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: w } = this.opts;
      return v.call(this, x, $);
      async function v(H, _e) {
        await b.call(this, H.$schema);
        const yn = this._addSchema(H, _e);
        return yn.validate || O.call(this, yn);
      }
      async function b(H) {
        H && !this.getSchema(H) && await v.call(this, { $ref: H }, !0);
      }
      async function O(H) {
        try {
          return this._compileSchemaEnv(H);
        } catch (_e) {
          if (!(_e instanceof s.default))
            throw _e;
          return U.call(this, _e), await V.call(this, _e.missingSchema), O.call(this, H);
        }
      }
      function U({ missingSchema: H, missingRef: _e }) {
        if (this.refs[H])
          throw new Error(`AnySchema ${H} is loaded but ${_e} cannot be resolved`);
      }
      async function V(H) {
        const _e = await ie.call(this, H);
        this.refs[H] || await b.call(this, _e.$schema), this.refs[H] || this.addSchema(_e, H, $);
      }
      async function ie(H) {
        const _e = this._loading[H];
        if (_e)
          return _e;
        try {
          return await (this._loading[H] = w(H));
        } finally {
          delete this._loading[H];
        }
      }
    }
    // Adds schema to the instance
    addSchema(x, $, w, v = this.opts.validateSchema) {
      if (Array.isArray(x)) {
        for (const O of x)
          this.addSchema(O, void 0, w, v);
        return this;
      }
      let b;
      if (typeof x == "object") {
        const { schemaId: O } = this.opts;
        if (b = x[O], b !== void 0 && typeof b != "string")
          throw new Error(`schema ${O} must be string`);
      }
      return $ = (0, c.normalizeId)($ || b), this._checkUnique($), this.schemas[$] = this._addSchema(x, w, $, v, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(x, $, w = this.opts.validateSchema) {
      return this.addSchema(x, $, !0, w), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(x, $) {
      if (typeof x == "boolean")
        return !0;
      let w;
      if (w = x.$schema, w !== void 0 && typeof w != "string")
        throw new Error("$schema must be a string");
      if (w = w || this.opts.defaultMeta || this.defaultMeta(), !w)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const v = this.validate(w, x);
      if (!v && $) {
        const b = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(b);
        else
          throw new Error(b);
      }
      return v;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(x) {
      let $;
      for (; typeof ($ = C.call(this, x)) == "string"; )
        x = $;
      if ($ === void 0) {
        const { schemaId: w } = this.opts, v = new i.SchemaEnv({ schema: {}, schemaId: w });
        if ($ = i.resolveSchema.call(this, v, x), !$)
          return;
        this.refs[x] = $;
      }
      return $.validate || this._compileSchemaEnv($);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(x) {
      if (x instanceof RegExp)
        return this._removeAllSchemas(this.schemas, x), this._removeAllSchemas(this.refs, x), this;
      switch (typeof x) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const $ = C.call(this, x);
          return typeof $ == "object" && this._cache.delete($.schema), delete this.schemas[x], delete this.refs[x], this;
        }
        case "object": {
          const $ = x;
          this._cache.delete($);
          let w = x[this.opts.schemaId];
          return w && (w = (0, c.normalizeId)(w), delete this.schemas[w], delete this.refs[w]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(x) {
      for (const $ of x)
        this.addKeyword($);
      return this;
    }
    addKeyword(x, $) {
      let w;
      if (typeof x == "string")
        w = x, typeof $ == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), $.keyword = w);
      else if (typeof x == "object" && $ === void 0) {
        if ($ = x, w = $.keyword, Array.isArray(w) && !w.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (T.call(this, w, $), !$)
        return (0, l.eachItem)(w, (b) => A.call(this, b)), this;
      I.call(this, $);
      const v = {
        ...$,
        type: (0, u.getJSONTypes)($.type),
        schemaType: (0, u.getJSONTypes)($.schemaType)
      };
      return (0, l.eachItem)(w, v.type.length === 0 ? (b) => A.call(this, b, v) : (b) => v.type.forEach((O) => A.call(this, b, v, O))), this;
    }
    getKeyword(x) {
      const $ = this.RULES.all[x];
      return typeof $ == "object" ? $.definition : !!$;
    }
    // Remove keyword
    removeKeyword(x) {
      const { RULES: $ } = this;
      delete $.keywords[x], delete $.all[x];
      for (const w of $.rules) {
        const v = w.rules.findIndex((b) => b.keyword === x);
        v >= 0 && w.rules.splice(v, 1);
      }
      return this;
    }
    // Add format
    addFormat(x, $) {
      return typeof $ == "string" && ($ = new RegExp($)), this.formats[x] = $, this;
    }
    errorsText(x = this.errors, { separator: $ = ", ", dataVar: w = "data" } = {}) {
      return !x || x.length === 0 ? "No errors" : x.map((v) => `${w}${v.instancePath} ${v.message}`).reduce((v, b) => v + $ + b);
    }
    $dataMetaSchema(x, $) {
      const w = this.RULES.all;
      x = JSON.parse(JSON.stringify(x));
      for (const v of $) {
        const b = v.split("/").slice(1);
        let O = x;
        for (const U of b)
          O = O[U];
        for (const U in w) {
          const V = w[U];
          if (typeof V != "object")
            continue;
          const { $data: ie } = V.definition, H = O[U];
          ie && H && (O[U] = D(H));
        }
      }
      return x;
    }
    _removeAllSchemas(x, $) {
      for (const w in x) {
        const v = x[w];
        (!$ || $.test(w)) && (typeof v == "string" ? delete x[w] : v && !v.meta && (this._cache.delete(v.schema), delete x[w]));
      }
    }
    _addSchema(x, $, w, v = this.opts.validateSchema, b = this.opts.addUsedSchema) {
      let O;
      const { schemaId: U } = this.opts;
      if (typeof x == "object")
        O = x[U];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof x != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let V = this._cache.get(x);
      if (V !== void 0)
        return V;
      w = (0, c.normalizeId)(O || w);
      const ie = c.getSchemaRefs.call(this, x, w);
      return V = new i.SchemaEnv({ schema: x, schemaId: U, meta: $, baseId: w, localRefs: ie }), this._cache.set(V.schema, V), b && !w.startsWith("#") && (w && this._checkUnique(w), this.refs[w] = V), v && this.validateSchema(x, !0), V;
    }
    _checkUnique(x) {
      if (this.schemas[x] || this.refs[x])
        throw new Error(`schema with key or id "${x}" already exists`);
    }
    _compileSchemaEnv(x) {
      if (x.meta ? this._compileMetaSchema(x) : i.compileSchema.call(this, x), !x.validate)
        throw new Error("ajv implementation error");
      return x.validate;
    }
    _compileMetaSchema(x) {
      const $ = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, x);
      } finally {
        this.opts = $;
      }
    }
  }
  P.ValidationError = r.default, P.MissingRefError = s.default, t.default = P;
  function k(S, x, $, w = "error") {
    for (const v in S) {
      const b = v;
      b in x && this.logger[w](`${$}: option ${v}. ${S[b]}`);
    }
  }
  function C(S) {
    return S = (0, c.normalizeId)(S), this.schemas[S] || this.refs[S];
  }
  function B() {
    const S = this.opts.schemas;
    if (S)
      if (Array.isArray(S))
        this.addSchema(S);
      else
        for (const x in S)
          this.addSchema(S[x], x);
  }
  function W() {
    for (const S in this.opts.formats) {
      const x = this.opts.formats[S];
      x && this.addFormat(S, x);
    }
  }
  function oe(S) {
    if (Array.isArray(S)) {
      this.addVocabulary(S);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const x in S) {
      const $ = S[x];
      $.keyword || ($.keyword = x), this.addKeyword($);
    }
  }
  function fe() {
    const S = { ...this.opts };
    for (const x of m)
      delete S[x];
    return S;
  }
  const N = { log() {
  }, warn() {
  }, error() {
  } };
  function L(S) {
    if (S === !1)
      return N;
    if (S === void 0)
      return console;
    if (S.log && S.warn && S.error)
      return S;
    throw new Error("logger must implement log, warn and error methods");
  }
  const z = /^[a-z_$][a-z0-9_$:-]*$/i;
  function T(S, x) {
    const { RULES: $ } = this;
    if ((0, l.eachItem)(S, (w) => {
      if ($.keywords[w])
        throw new Error(`Keyword ${w} is already defined`);
      if (!z.test(w))
        throw new Error(`Keyword ${w} has invalid name`);
    }), !!x && x.$data && !("code" in x || "validate" in x))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function A(S, x, $) {
    var w;
    const v = x == null ? void 0 : x.post;
    if ($ && v)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: b } = this;
    let O = v ? b.post : b.rules.find(({ type: V }) => V === $);
    if (O || (O = { type: $, rules: [] }, b.rules.push(O)), b.keywords[S] = !0, !x)
      return;
    const U = {
      keyword: S,
      definition: {
        ...x,
        type: (0, u.getJSONTypes)(x.type),
        schemaType: (0, u.getJSONTypes)(x.schemaType)
      }
    };
    x.before ? j.call(this, O, U, x.before) : O.rules.push(U), b.all[S] = U, (w = x.implements) === null || w === void 0 || w.forEach((V) => this.addKeyword(V));
  }
  function j(S, x, $) {
    const w = S.rules.findIndex((v) => v.keyword === $);
    w >= 0 ? S.rules.splice(w, 0, x) : (S.rules.push(x), this.logger.warn(`rule ${$} is not defined`));
  }
  function I(S) {
    let { metaSchema: x } = S;
    x !== void 0 && (S.$data && this.opts.$data && (x = D(x)), S.validateSchema = this.compile(x, !0));
  }
  const M = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function D(S) {
    return { anyOf: [S, M] };
  }
})(uc);
var $c = {}, ia = {}, Sc = {};
Object.defineProperty(Sc, "__esModule", { value: !0 });
const WE = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Sc.default = WE;
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.callRef = wt.getValidate = void 0;
const KE = vn, Ap = ne, Fe = X, wn = Be, Np = Ie, Zr = F, JE = {
  keyword: "$ref",
  schemaType: "string",
  code(t) {
    const { gen: e, schema: n, it: r } = t, { baseId: s, schemaEnv: a, validateName: i, opts: o, self: c } = r, { root: u } = a;
    if ((n === "#" || n === "#/") && s === u.baseId)
      return p();
    const l = Np.resolveRef.call(c, u, s, n);
    if (l === void 0)
      throw new KE.default(r.opts.uriResolver, s, n);
    if (l instanceof Np.SchemaEnv)
      return d(l);
    return f(l);
    function p() {
      if (a === u)
        return ws(t, i, a, a.$async);
      const m = e.scopeValue("root", { ref: u });
      return ws(t, (0, Fe._)`${m}.validate`, u, u.$async);
    }
    function d(m) {
      const h = zm(t, m);
      ws(t, h, m, m.$async);
    }
    function f(m) {
      const h = e.scopeValue("schema", o.code.source === !0 ? { ref: m, code: (0, Fe.stringify)(m) } : { ref: m }), y = e.name("valid"), g = t.subschema({
        schema: m,
        dataTypes: [],
        schemaPath: Fe.nil,
        topSchemaRef: h,
        errSchemaPath: n
      }, y);
      t.mergeEvaluated(g), t.ok(y);
    }
  }
};
function zm(t, e) {
  const { gen: n } = t;
  return e.validate ? n.scopeValue("validate", { ref: e.validate }) : (0, Fe._)`${n.scopeValue("wrapper", { ref: e })}.validate`;
}
wt.getValidate = zm;
function ws(t, e, n, r) {
  const { gen: s, it: a } = t, { allErrors: i, schemaEnv: o, opts: c } = a, u = c.passContext ? wn.default.this : Fe.nil;
  r ? l() : p();
  function l() {
    if (!o.$async)
      throw new Error("async schema referenced by sync schema");
    const m = s.let("valid");
    s.try(() => {
      s.code((0, Fe._)`await ${(0, Ap.callValidateCode)(t, e, u)}`), f(e), i || s.assign(m, !0);
    }, (h) => {
      s.if((0, Fe._)`!(${h} instanceof ${a.ValidationError})`, () => s.throw(h)), d(h), i || s.assign(m, !1);
    }), t.ok(m);
  }
  function p() {
    t.result((0, Ap.callValidateCode)(t, e, u), () => f(e), () => d(e));
  }
  function d(m) {
    const h = (0, Fe._)`${m}.errors`;
    s.assign(wn.default.vErrors, (0, Fe._)`${wn.default.vErrors} === null ? ${h} : ${wn.default.vErrors}.concat(${h})`), s.assign(wn.default.errors, (0, Fe._)`${wn.default.vErrors}.length`);
  }
  function f(m) {
    var h;
    if (!a.opts.unevaluated)
      return;
    const y = (h = n == null ? void 0 : n.validate) === null || h === void 0 ? void 0 : h.evaluated;
    if (a.props !== !0)
      if (y && !y.dynamicProps)
        y.props !== void 0 && (a.props = Zr.mergeEvaluated.props(s, y.props, a.props));
      else {
        const g = s.var("props", (0, Fe._)`${m}.evaluated.props`);
        a.props = Zr.mergeEvaluated.props(s, g, a.props, Fe.Name);
      }
    if (a.items !== !0)
      if (y && !y.dynamicItems)
        y.items !== void 0 && (a.items = Zr.mergeEvaluated.items(s, y.items, a.items));
      else {
        const g = s.var("items", (0, Fe._)`${m}.evaluated.items`);
        a.items = Zr.mergeEvaluated.items(s, g, a.items, Fe.Name);
      }
  }
}
wt.callRef = ws;
wt.default = JE;
Object.defineProperty(ia, "__esModule", { value: !0 });
const XE = Sc, YE = wt, ZE = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  XE.default,
  YE.default
];
ia.default = ZE;
var oa = {}, Rc = {};
Object.defineProperty(Rc, "__esModule", { value: !0 });
const zs = X, kt = zs.operators, Ms = {
  maximum: { okStr: "<=", ok: kt.LTE, fail: kt.GT },
  minimum: { okStr: ">=", ok: kt.GTE, fail: kt.LT },
  exclusiveMaximum: { okStr: "<", ok: kt.LT, fail: kt.GTE },
  exclusiveMinimum: { okStr: ">", ok: kt.GT, fail: kt.LTE }
}, QE = {
  message: ({ keyword: t, schemaCode: e }) => (0, zs.str)`must be ${Ms[t].okStr} ${e}`,
  params: ({ keyword: t, schemaCode: e }) => (0, zs._)`{comparison: ${Ms[t].okStr}, limit: ${e}}`
}, e$ = {
  keyword: Object.keys(Ms),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: QE,
  code(t) {
    const { keyword: e, data: n, schemaCode: r } = t;
    t.fail$data((0, zs._)`${n} ${Ms[e].fail} ${r} || isNaN(${n})`);
  }
};
Rc.default = e$;
var Oc = {};
Object.defineProperty(Oc, "__esModule", { value: !0 });
const ur = X, t$ = {
  message: ({ schemaCode: t }) => (0, ur.str)`must be multiple of ${t}`,
  params: ({ schemaCode: t }) => (0, ur._)`{multipleOf: ${t}}`
}, n$ = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: t$,
  code(t) {
    const { gen: e, data: n, schemaCode: r, it: s } = t, a = s.opts.multipleOfPrecision, i = e.let("res"), o = a ? (0, ur._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${a}` : (0, ur._)`${i} !== parseInt(${i})`;
    t.fail$data((0, ur._)`(${r} === 0 || (${i} = ${n}/${r}, ${o}))`);
  }
};
Oc.default = n$;
var Tc = {}, Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
function Mm(t) {
  const e = t.length;
  let n = 0, r = 0, s;
  for (; r < e; )
    n++, s = t.charCodeAt(r++), s >= 55296 && s <= 56319 && r < e && (s = t.charCodeAt(r), (s & 64512) === 56320 && r++);
  return n;
}
Pc.default = Mm;
Mm.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(Tc, "__esModule", { value: !0 });
const Yt = X, r$ = F, s$ = Pc, a$ = {
  message({ keyword: t, schemaCode: e }) {
    const n = t === "maxLength" ? "more" : "fewer";
    return (0, Yt.str)`must NOT have ${n} than ${e} characters`;
  },
  params: ({ schemaCode: t }) => (0, Yt._)`{limit: ${t}}`
}, i$ = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: a$,
  code(t) {
    const { keyword: e, data: n, schemaCode: r, it: s } = t, a = e === "maxLength" ? Yt.operators.GT : Yt.operators.LT, i = s.opts.unicode === !1 ? (0, Yt._)`${n}.length` : (0, Yt._)`${(0, r$.useFunc)(t.gen, s$.default)}(${n})`;
    t.fail$data((0, Yt._)`${i} ${a} ${r}`);
  }
};
Tc.default = i$;
var kc = {};
Object.defineProperty(kc, "__esModule", { value: !0 });
const o$ = ne, qs = X, c$ = {
  message: ({ schemaCode: t }) => (0, qs.str)`must match pattern "${t}"`,
  params: ({ schemaCode: t }) => (0, qs._)`{pattern: ${t}}`
}, l$ = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: c$,
  code(t) {
    const { data: e, $data: n, schema: r, schemaCode: s, it: a } = t, i = a.opts.unicodeRegExp ? "u" : "", o = n ? (0, qs._)`(new RegExp(${s}, ${i}))` : (0, o$.usePattern)(t, r);
    t.fail$data((0, qs._)`!${o}.test(${e})`);
  }
};
kc.default = l$;
var Ac = {};
Object.defineProperty(Ac, "__esModule", { value: !0 });
const pr = X, u$ = {
  message({ keyword: t, schemaCode: e }) {
    const n = t === "maxProperties" ? "more" : "fewer";
    return (0, pr.str)`must NOT have ${n} than ${e} properties`;
  },
  params: ({ schemaCode: t }) => (0, pr._)`{limit: ${t}}`
}, p$ = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: u$,
  code(t) {
    const { keyword: e, data: n, schemaCode: r } = t, s = e === "maxProperties" ? pr.operators.GT : pr.operators.LT;
    t.fail$data((0, pr._)`Object.keys(${n}).length ${s} ${r}`);
  }
};
Ac.default = p$;
var Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
const ar = ne, dr = X, d$ = F, f$ = {
  message: ({ params: { missingProperty: t } }) => (0, dr.str)`must have required property '${t}'`,
  params: ({ params: { missingProperty: t } }) => (0, dr._)`{missingProperty: ${t}}`
}, m$ = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: f$,
  code(t) {
    const { gen: e, schema: n, schemaCode: r, data: s, $data: a, it: i } = t, { opts: o } = i;
    if (!a && n.length === 0)
      return;
    const c = n.length >= o.loopRequired;
    if (i.allErrors ? u() : l(), o.strictRequired) {
      const f = t.parentSchema.properties, { definedProperties: m } = t.it;
      for (const h of n)
        if ((f == null ? void 0 : f[h]) === void 0 && !m.has(h)) {
          const y = i.schemaEnv.baseId + i.errSchemaPath, g = `required property "${h}" is not defined at "${y}" (strictRequired)`;
          (0, d$.checkStrictMode)(i, g, i.opts.strictRequired);
        }
    }
    function u() {
      if (c || a)
        t.block$data(dr.nil, p);
      else
        for (const f of n)
          (0, ar.checkReportMissingProp)(t, f);
    }
    function l() {
      const f = e.let("missing");
      if (c || a) {
        const m = e.let("valid", !0);
        t.block$data(m, () => d(f, m)), t.ok(m);
      } else
        e.if((0, ar.checkMissingProp)(t, n, f)), (0, ar.reportMissingProp)(t, f), e.else();
    }
    function p() {
      e.forOf("prop", r, (f) => {
        t.setParams({ missingProperty: f }), e.if((0, ar.noPropertyInData)(e, s, f, o.ownProperties), () => t.error());
      });
    }
    function d(f, m) {
      t.setParams({ missingProperty: f }), e.forOf(f, r, () => {
        e.assign(m, (0, ar.propertyInData)(e, s, f, o.ownProperties)), e.if((0, dr.not)(m), () => {
          t.error(), e.break();
        });
      }, dr.nil);
    }
  }
};
Nc.default = m$;
var jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
const fr = X, h$ = {
  message({ keyword: t, schemaCode: e }) {
    const n = t === "maxItems" ? "more" : "fewer";
    return (0, fr.str)`must NOT have ${n} than ${e} items`;
  },
  params: ({ schemaCode: t }) => (0, fr._)`{limit: ${t}}`
}, v$ = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: h$,
  code(t) {
    const { keyword: e, data: n, schemaCode: r } = t, s = e === "maxItems" ? fr.operators.GT : fr.operators.LT;
    t.fail$data((0, fr._)`${n}.length ${s} ${r}`);
  }
};
jc.default = v$;
var Ic = {}, Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
const qm = dm;
qm.code = 'require("ajv/dist/runtime/equal").default';
Ir.default = qm;
Object.defineProperty(Ic, "__esModule", { value: !0 });
const Zi = be, Se = X, y$ = F, g$ = Ir, x$ = {
  message: ({ params: { i: t, j: e } }) => (0, Se.str)`must NOT have duplicate items (items ## ${e} and ${t} are identical)`,
  params: ({ params: { i: t, j: e } }) => (0, Se._)`{i: ${t}, j: ${e}}`
}, b$ = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: x$,
  code(t) {
    const { gen: e, data: n, $data: r, schema: s, parentSchema: a, schemaCode: i, it: o } = t;
    if (!r && !s)
      return;
    const c = e.let("valid"), u = a.items ? (0, Zi.getSchemaTypes)(a.items) : [];
    t.block$data(c, l, (0, Se._)`${i} === false`), t.ok(c);
    function l() {
      const m = e.let("i", (0, Se._)`${n}.length`), h = e.let("j");
      t.setParams({ i: m, j: h }), e.assign(c, !0), e.if((0, Se._)`${m} > 1`, () => (p() ? d : f)(m, h));
    }
    function p() {
      return u.length > 0 && !u.some((m) => m === "object" || m === "array");
    }
    function d(m, h) {
      const y = e.name("item"), g = (0, Zi.checkDataTypes)(u, y, o.opts.strictNumbers, Zi.DataType.Wrong), _ = e.const("indices", (0, Se._)`{}`);
      e.for((0, Se._)`;${m}--;`, () => {
        e.let(y, (0, Se._)`${n}[${m}]`), e.if(g, (0, Se._)`continue`), u.length > 1 && e.if((0, Se._)`typeof ${y} == "string"`, (0, Se._)`${y} += "_"`), e.if((0, Se._)`typeof ${_}[${y}] == "number"`, () => {
          e.assign(h, (0, Se._)`${_}[${y}]`), t.error(), e.assign(c, !1).break();
        }).code((0, Se._)`${_}[${y}] = ${m}`);
      });
    }
    function f(m, h) {
      const y = (0, y$.useFunc)(e, g$.default), g = e.name("outer");
      e.label(g).for((0, Se._)`;${m}--;`, () => e.for((0, Se._)`${h} = ${m}; ${h}--;`, () => e.if((0, Se._)`${y}(${n}[${m}], ${n}[${h}])`, () => {
        t.error(), e.assign(c, !1).break(g);
      })));
    }
  }
};
Ic.default = b$;
var Cc = {};
Object.defineProperty(Cc, "__esModule", { value: !0 });
const ko = X, _$ = F, w$ = Ir, E$ = {
  message: "must be equal to constant",
  params: ({ schemaCode: t }) => (0, ko._)`{allowedValue: ${t}}`
}, $$ = {
  keyword: "const",
  $data: !0,
  error: E$,
  code(t) {
    const { gen: e, data: n, $data: r, schemaCode: s, schema: a } = t;
    r || a && typeof a == "object" ? t.fail$data((0, ko._)`!${(0, _$.useFunc)(e, w$.default)}(${n}, ${s})`) : t.fail((0, ko._)`${a} !== ${n}`);
  }
};
Cc.default = $$;
var Lc = {};
Object.defineProperty(Lc, "__esModule", { value: !0 });
const cr = X, S$ = F, R$ = Ir, O$ = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: t }) => (0, cr._)`{allowedValues: ${t}}`
}, T$ = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: O$,
  code(t) {
    const { gen: e, data: n, $data: r, schema: s, schemaCode: a, it: i } = t;
    if (!r && s.length === 0)
      throw new Error("enum must have non-empty array");
    const o = s.length >= i.opts.loopEnum;
    let c;
    const u = () => c ?? (c = (0, S$.useFunc)(e, R$.default));
    let l;
    if (o || r)
      l = e.let("valid"), t.block$data(l, p);
    else {
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      const f = e.const("vSchema", a);
      l = (0, cr.or)(...s.map((m, h) => d(f, h)));
    }
    t.pass(l);
    function p() {
      e.assign(l, !1), e.forOf("v", a, (f) => e.if((0, cr._)`${u()}(${n}, ${f})`, () => e.assign(l, !0).break()));
    }
    function d(f, m) {
      const h = s[m];
      return typeof h == "object" && h !== null ? (0, cr._)`${u()}(${n}, ${f}[${m}])` : (0, cr._)`${n} === ${h}`;
    }
  }
};
Lc.default = T$;
Object.defineProperty(oa, "__esModule", { value: !0 });
const P$ = Rc, k$ = Oc, A$ = Tc, N$ = kc, j$ = Ac, I$ = Nc, C$ = jc, L$ = Ic, F$ = Cc, D$ = Lc, U$ = [
  // number
  P$.default,
  k$.default,
  // string
  A$.default,
  N$.default,
  // object
  j$.default,
  I$.default,
  // array
  C$.default,
  L$.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  F$.default,
  D$.default
];
oa.default = U$;
var ca = {}, Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.validateAdditionalItems = void 0;
const Zt = X, Ao = F, z$ = {
  message: ({ params: { len: t } }) => (0, Zt.str)`must NOT have more than ${t} items`,
  params: ({ params: { len: t } }) => (0, Zt._)`{limit: ${t}}`
}, M$ = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: z$,
  code(t) {
    const { parentSchema: e, it: n } = t, { items: r } = e;
    if (!Array.isArray(r)) {
      (0, Ao.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    Bm(t, r);
  }
};
function Bm(t, e) {
  const { gen: n, schema: r, data: s, keyword: a, it: i } = t;
  i.items = !0;
  const o = n.const("len", (0, Zt._)`${s}.length`);
  if (r === !1)
    t.setParams({ len: e.length }), t.pass((0, Zt._)`${o} <= ${e.length}`);
  else if (typeof r == "object" && !(0, Ao.alwaysValidSchema)(i, r)) {
    const u = n.var("valid", (0, Zt._)`${o} <= ${e.length}`);
    n.if((0, Zt.not)(u), () => c(u)), t.ok(u);
  }
  function c(u) {
    n.forRange("i", e.length, o, (l) => {
      t.subschema({ keyword: a, dataProp: l, dataPropType: Ao.Type.Num }, u), i.allErrors || n.if((0, Zt.not)(u), () => n.break());
    });
  }
}
Wn.validateAdditionalItems = Bm;
Wn.default = M$;
var Fc = {}, Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.validateTuple = void 0;
const jp = X, Es = F, q$ = ne, B$ = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(t) {
    const { schema: e, it: n } = t;
    if (Array.isArray(e))
      return Vm(t, "additionalItems", e);
    n.items = !0, !(0, Es.alwaysValidSchema)(n, e) && t.ok((0, q$.validateArray)(t));
  }
};
function Vm(t, e, n = t.schema) {
  const { gen: r, parentSchema: s, data: a, keyword: i, it: o } = t;
  l(s), o.opts.unevaluated && n.length && o.items !== !0 && (o.items = Es.mergeEvaluated.items(r, n.length, o.items));
  const c = r.name("valid"), u = r.const("len", (0, jp._)`${a}.length`);
  n.forEach((p, d) => {
    (0, Es.alwaysValidSchema)(o, p) || (r.if((0, jp._)`${u} > ${d}`, () => t.subschema({
      keyword: i,
      schemaProp: d,
      dataProp: d
    }, c)), t.ok(c));
  });
  function l(p) {
    const { opts: d, errSchemaPath: f } = o, m = n.length, h = m === p.minItems && (m === p.maxItems || p[e] === !1);
    if (d.strictTuples && !h) {
      const y = `"${i}" is ${m}-tuple, but minItems or maxItems/${e} are not specified or different at path "${f}"`;
      (0, Es.checkStrictMode)(o, y, d.strictTuples);
    }
  }
}
Kn.validateTuple = Vm;
Kn.default = B$;
Object.defineProperty(Fc, "__esModule", { value: !0 });
const V$ = Kn, G$ = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (t) => (0, V$.validateTuple)(t, "items")
};
Fc.default = G$;
var Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
const Ip = X, H$ = F, W$ = ne, K$ = Wn, J$ = {
  message: ({ params: { len: t } }) => (0, Ip.str)`must NOT have more than ${t} items`,
  params: ({ params: { len: t } }) => (0, Ip._)`{limit: ${t}}`
}, X$ = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: J$,
  code(t) {
    const { schema: e, parentSchema: n, it: r } = t, { prefixItems: s } = n;
    r.items = !0, !(0, H$.alwaysValidSchema)(r, e) && (s ? (0, K$.validateAdditionalItems)(t, s) : t.ok((0, W$.validateArray)(t)));
  }
};
Dc.default = X$;
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
const We = X, Qr = F, Y$ = {
  message: ({ params: { min: t, max: e } }) => e === void 0 ? (0, We.str)`must contain at least ${t} valid item(s)` : (0, We.str)`must contain at least ${t} and no more than ${e} valid item(s)`,
  params: ({ params: { min: t, max: e } }) => e === void 0 ? (0, We._)`{minContains: ${t}}` : (0, We._)`{minContains: ${t}, maxContains: ${e}}`
}, Z$ = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: Y$,
  code(t) {
    const { gen: e, schema: n, parentSchema: r, data: s, it: a } = t;
    let i, o;
    const { minContains: c, maxContains: u } = r;
    a.opts.next ? (i = c === void 0 ? 1 : c, o = u) : i = 1;
    const l = e.const("len", (0, We._)`${s}.length`);
    if (t.setParams({ min: i, max: o }), o === void 0 && i === 0) {
      (0, Qr.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (o !== void 0 && i > o) {
      (0, Qr.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), t.fail();
      return;
    }
    if ((0, Qr.alwaysValidSchema)(a, n)) {
      let h = (0, We._)`${l} >= ${i}`;
      o !== void 0 && (h = (0, We._)`${h} && ${l} <= ${o}`), t.pass(h);
      return;
    }
    a.items = !0;
    const p = e.name("valid");
    o === void 0 && i === 1 ? f(p, () => e.if(p, () => e.break())) : i === 0 ? (e.let(p, !0), o !== void 0 && e.if((0, We._)`${s}.length > 0`, d)) : (e.let(p, !1), d()), t.result(p, () => t.reset());
    function d() {
      const h = e.name("_valid"), y = e.let("count", 0);
      f(h, () => e.if(h, () => m(y)));
    }
    function f(h, y) {
      e.forRange("i", 0, l, (g) => {
        t.subschema({
          keyword: "contains",
          dataProp: g,
          dataPropType: Qr.Type.Num,
          compositeRule: !0
        }, h), y();
      });
    }
    function m(h) {
      e.code((0, We._)`${h}++`), o === void 0 ? e.if((0, We._)`${h} >= ${i}`, () => e.assign(p, !0).break()) : (e.if((0, We._)`${h} > ${o}`, () => e.assign(p, !1).break()), i === 1 ? e.assign(p, !0) : e.if((0, We._)`${h} >= ${i}`, () => e.assign(p, !0)));
    }
  }
};
Uc.default = Z$;
var la = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.validateSchemaDeps = t.validatePropertyDeps = t.error = void 0;
  const e = X, n = F, r = ne;
  t.error = {
    message: ({ params: { property: c, depsCount: u, deps: l } }) => {
      const p = u === 1 ? "property" : "properties";
      return (0, e.str)`must have ${p} ${l} when property ${c} is present`;
    },
    params: ({ params: { property: c, depsCount: u, deps: l, missingProperty: p } }) => (0, e._)`{property: ${c},
    missingProperty: ${p},
    depsCount: ${u},
    deps: ${l}}`
    // TODO change to reference
  };
  const s = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: t.error,
    code(c) {
      const [u, l] = a(c);
      i(c, u), o(c, l);
    }
  };
  function a({ schema: c }) {
    const u = {}, l = {};
    for (const p in c) {
      if (p === "__proto__")
        continue;
      const d = Array.isArray(c[p]) ? u : l;
      d[p] = c[p];
    }
    return [u, l];
  }
  function i(c, u = c.schema) {
    const { gen: l, data: p, it: d } = c;
    if (Object.keys(u).length === 0)
      return;
    const f = l.let("missing");
    for (const m in u) {
      const h = u[m];
      if (h.length === 0)
        continue;
      const y = (0, r.propertyInData)(l, p, m, d.opts.ownProperties);
      c.setParams({
        property: m,
        depsCount: h.length,
        deps: h.join(", ")
      }), d.allErrors ? l.if(y, () => {
        for (const g of h)
          (0, r.checkReportMissingProp)(c, g);
      }) : (l.if((0, e._)`${y} && (${(0, r.checkMissingProp)(c, h, f)})`), (0, r.reportMissingProp)(c, f), l.else());
    }
  }
  t.validatePropertyDeps = i;
  function o(c, u = c.schema) {
    const { gen: l, data: p, keyword: d, it: f } = c, m = l.name("valid");
    for (const h in u)
      (0, n.alwaysValidSchema)(f, u[h]) || (l.if(
        (0, r.propertyInData)(l, p, h, f.opts.ownProperties),
        () => {
          const y = c.subschema({ keyword: d, schemaProp: h }, m);
          c.mergeValidEvaluated(y, m);
        },
        () => l.var(m, !0)
        // TODO var
      ), c.ok(m));
  }
  t.validateSchemaDeps = o, t.default = s;
})(la);
var zc = {};
Object.defineProperty(zc, "__esModule", { value: !0 });
const Gm = X, Q$ = F, eS = {
  message: "property name must be valid",
  params: ({ params: t }) => (0, Gm._)`{propertyName: ${t.propertyName}}`
}, tS = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: eS,
  code(t) {
    const { gen: e, schema: n, data: r, it: s } = t;
    if ((0, Q$.alwaysValidSchema)(s, n))
      return;
    const a = e.name("valid");
    e.forIn("key", r, (i) => {
      t.setParams({ propertyName: i }), t.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, a), e.if((0, Gm.not)(a), () => {
        t.error(!0), s.allErrors || e.break();
      });
    }), t.ok(a);
  }
};
zc.default = tS;
var ua = {};
Object.defineProperty(ua, "__esModule", { value: !0 });
const es = ne, Ye = X, nS = Be, ts = F, rS = {
  message: "must NOT have additional properties",
  params: ({ params: t }) => (0, Ye._)`{additionalProperty: ${t.additionalProperty}}`
}, sS = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: rS,
  code(t) {
    const { gen: e, schema: n, parentSchema: r, data: s, errsCount: a, it: i } = t;
    if (!a)
      throw new Error("ajv implementation error");
    const { allErrors: o, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, ts.alwaysValidSchema)(i, n))
      return;
    const u = (0, es.allSchemaProperties)(r.properties), l = (0, es.allSchemaProperties)(r.patternProperties);
    p(), t.ok((0, Ye._)`${a} === ${nS.default.errors}`);
    function p() {
      e.forIn("key", s, (y) => {
        !u.length && !l.length ? m(y) : e.if(d(y), () => m(y));
      });
    }
    function d(y) {
      let g;
      if (u.length > 8) {
        const _ = (0, ts.schemaRefOrVal)(i, r.properties, "properties");
        g = (0, es.isOwnProperty)(e, _, y);
      } else u.length ? g = (0, Ye.or)(...u.map((_) => (0, Ye._)`${y} === ${_}`)) : g = Ye.nil;
      return l.length && (g = (0, Ye.or)(g, ...l.map((_) => (0, Ye._)`${(0, es.usePattern)(t, _)}.test(${y})`))), (0, Ye.not)(g);
    }
    function f(y) {
      e.code((0, Ye._)`delete ${s}[${y}]`);
    }
    function m(y) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        f(y);
        return;
      }
      if (n === !1) {
        t.setParams({ additionalProperty: y }), t.error(), o || e.break();
        return;
      }
      if (typeof n == "object" && !(0, ts.alwaysValidSchema)(i, n)) {
        const g = e.name("valid");
        c.removeAdditional === "failing" ? (h(y, g, !1), e.if((0, Ye.not)(g), () => {
          t.reset(), f(y);
        })) : (h(y, g), o || e.if((0, Ye.not)(g), () => e.break()));
      }
    }
    function h(y, g, _) {
      const R = {
        keyword: "additionalProperties",
        dataProp: y,
        dataPropType: ts.Type.Str
      };
      _ === !1 && Object.assign(R, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), t.subschema(R, g);
    }
  }
};
ua.default = sS;
var Mc = {};
Object.defineProperty(Mc, "__esModule", { value: !0 });
const aS = Ke, Cp = ne, Qi = F, Lp = ua, iS = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(t) {
    const { gen: e, schema: n, parentSchema: r, data: s, it: a } = t;
    a.opts.removeAdditional === "all" && r.additionalProperties === void 0 && Lp.default.code(new aS.KeywordCxt(a, Lp.default, "additionalProperties"));
    const i = (0, Cp.allSchemaProperties)(n);
    for (const p of i)
      a.definedProperties.add(p);
    a.opts.unevaluated && i.length && a.props !== !0 && (a.props = Qi.mergeEvaluated.props(e, (0, Qi.toHash)(i), a.props));
    const o = i.filter((p) => !(0, Qi.alwaysValidSchema)(a, n[p]));
    if (o.length === 0)
      return;
    const c = e.name("valid");
    for (const p of o)
      u(p) ? l(p) : (e.if((0, Cp.propertyInData)(e, s, p, a.opts.ownProperties)), l(p), a.allErrors || e.else().var(c, !0), e.endIf()), t.it.definedProperties.add(p), t.ok(c);
    function u(p) {
      return a.opts.useDefaults && !a.compositeRule && n[p].default !== void 0;
    }
    function l(p) {
      t.subschema({
        keyword: "properties",
        schemaProp: p,
        dataProp: p
      }, c);
    }
  }
};
Mc.default = iS;
var qc = {};
Object.defineProperty(qc, "__esModule", { value: !0 });
const Fp = ne, ns = X, Dp = F, Up = F, oS = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(t) {
    const { gen: e, schema: n, data: r, parentSchema: s, it: a } = t, { opts: i } = a, o = (0, Fp.allSchemaProperties)(n), c = o.filter((h) => (0, Dp.alwaysValidSchema)(a, n[h]));
    if (o.length === 0 || c.length === o.length && (!a.opts.unevaluated || a.props === !0))
      return;
    const u = i.strictSchema && !i.allowMatchingProperties && s.properties, l = e.name("valid");
    a.props !== !0 && !(a.props instanceof ns.Name) && (a.props = (0, Up.evaluatedPropsToName)(e, a.props));
    const { props: p } = a;
    d();
    function d() {
      for (const h of o)
        u && f(h), a.allErrors ? m(h) : (e.var(l, !0), m(h), e.if(l));
    }
    function f(h) {
      for (const y in u)
        new RegExp(h).test(y) && (0, Dp.checkStrictMode)(a, `property ${y} matches pattern ${h} (use allowMatchingProperties)`);
    }
    function m(h) {
      e.forIn("key", r, (y) => {
        e.if((0, ns._)`${(0, Fp.usePattern)(t, h)}.test(${y})`, () => {
          const g = c.includes(h);
          g || t.subschema({
            keyword: "patternProperties",
            schemaProp: h,
            dataProp: y,
            dataPropType: Up.Type.Str
          }, l), a.opts.unevaluated && p !== !0 ? e.assign((0, ns._)`${p}[${y}]`, !0) : !g && !a.allErrors && e.if((0, ns.not)(l), () => e.break());
        });
      });
    }
  }
};
qc.default = oS;
var Bc = {};
Object.defineProperty(Bc, "__esModule", { value: !0 });
const cS = F, lS = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(t) {
    const { gen: e, schema: n, it: r } = t;
    if ((0, cS.alwaysValidSchema)(r, n)) {
      t.fail();
      return;
    }
    const s = e.name("valid");
    t.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, s), t.failResult(s, () => t.reset(), () => t.error());
  },
  error: { message: "must NOT be valid" }
};
Bc.default = lS;
var Vc = {};
Object.defineProperty(Vc, "__esModule", { value: !0 });
const uS = ne, pS = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: uS.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Vc.default = pS;
var Gc = {};
Object.defineProperty(Gc, "__esModule", { value: !0 });
const $s = X, dS = F, fS = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: t }) => (0, $s._)`{passingSchemas: ${t.passing}}`
}, mS = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: fS,
  code(t) {
    const { gen: e, schema: n, parentSchema: r, it: s } = t;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    if (s.opts.discriminator && r.discriminator)
      return;
    const a = n, i = e.let("valid", !1), o = e.let("passing", null), c = e.name("_valid");
    t.setParams({ passing: o }), e.block(u), t.result(i, () => t.reset(), () => t.error(!0));
    function u() {
      a.forEach((l, p) => {
        let d;
        (0, dS.alwaysValidSchema)(s, l) ? e.var(c, !0) : d = t.subschema({
          keyword: "oneOf",
          schemaProp: p,
          compositeRule: !0
        }, c), p > 0 && e.if((0, $s._)`${c} && ${i}`).assign(i, !1).assign(o, (0, $s._)`[${o}, ${p}]`).else(), e.if(c, () => {
          e.assign(i, !0), e.assign(o, p), d && t.mergeEvaluated(d, $s.Name);
        });
      });
    }
  }
};
Gc.default = mS;
var Hc = {};
Object.defineProperty(Hc, "__esModule", { value: !0 });
const hS = F, vS = {
  keyword: "allOf",
  schemaType: "array",
  code(t) {
    const { gen: e, schema: n, it: r } = t;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const s = e.name("valid");
    n.forEach((a, i) => {
      if ((0, hS.alwaysValidSchema)(r, a))
        return;
      const o = t.subschema({ keyword: "allOf", schemaProp: i }, s);
      t.ok(s), t.mergeEvaluated(o);
    });
  }
};
Hc.default = vS;
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: !0 });
const Bs = X, Hm = F, yS = {
  message: ({ params: t }) => (0, Bs.str)`must match "${t.ifClause}" schema`,
  params: ({ params: t }) => (0, Bs._)`{failingKeyword: ${t.ifClause}}`
}, gS = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: yS,
  code(t) {
    const { gen: e, parentSchema: n, it: r } = t;
    n.then === void 0 && n.else === void 0 && (0, Hm.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const s = zp(r, "then"), a = zp(r, "else");
    if (!s && !a)
      return;
    const i = e.let("valid", !0), o = e.name("_valid");
    if (c(), t.reset(), s && a) {
      const l = e.let("ifClause");
      t.setParams({ ifClause: l }), e.if(o, u("then", l), u("else", l));
    } else s ? e.if(o, u("then")) : e.if((0, Bs.not)(o), u("else"));
    t.pass(i, () => t.error(!0));
    function c() {
      const l = t.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, o);
      t.mergeEvaluated(l);
    }
    function u(l, p) {
      return () => {
        const d = t.subschema({ keyword: l }, o);
        e.assign(i, o), t.mergeValidEvaluated(d, i), p ? e.assign(p, (0, Bs._)`${l}`) : t.setParams({ ifClause: l });
      };
    }
  }
};
function zp(t, e) {
  const n = t.schema[e];
  return n !== void 0 && !(0, Hm.alwaysValidSchema)(t, n);
}
Wc.default = gS;
var Kc = {};
Object.defineProperty(Kc, "__esModule", { value: !0 });
const xS = F, bS = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: t, parentSchema: e, it: n }) {
    e.if === void 0 && (0, xS.checkStrictMode)(n, `"${t}" without "if" is ignored`);
  }
};
Kc.default = bS;
Object.defineProperty(ca, "__esModule", { value: !0 });
const _S = Wn, wS = Fc, ES = Kn, $S = Dc, SS = Uc, RS = la, OS = zc, TS = ua, PS = Mc, kS = qc, AS = Bc, NS = Vc, jS = Gc, IS = Hc, CS = Wc, LS = Kc;
function FS(t = !1) {
  const e = [
    // any
    AS.default,
    NS.default,
    jS.default,
    IS.default,
    CS.default,
    LS.default,
    // object
    OS.default,
    TS.default,
    RS.default,
    PS.default,
    kS.default
  ];
  return t ? e.push(wS.default, $S.default) : e.push(_S.default, ES.default), e.push(SS.default), e;
}
ca.default = FS;
var Jc = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.dynamicAnchor = void 0;
const eo = X, DS = Be, Mp = Ie, US = wt, zS = {
  keyword: "$dynamicAnchor",
  schemaType: "string",
  code: (t) => Wm(t, t.schema)
};
function Wm(t, e) {
  const { gen: n, it: r } = t;
  r.schemaEnv.root.dynamicAnchors[e] = !0;
  const s = (0, eo._)`${DS.default.dynamicAnchors}${(0, eo.getProperty)(e)}`, a = r.errSchemaPath === "#" ? r.validateName : MS(t);
  n.if((0, eo._)`!${s}`, () => n.assign(s, a));
}
Jn.dynamicAnchor = Wm;
function MS(t) {
  const { schemaEnv: e, schema: n, self: r } = t.it, { root: s, baseId: a, localRefs: i, meta: o } = e.root, { schemaId: c } = r.opts, u = new Mp.SchemaEnv({ schema: n, schemaId: c, root: s, baseId: a, localRefs: i, meta: o });
  return Mp.compileSchema.call(r, u), (0, US.getValidate)(t, u);
}
Jn.default = zS;
var Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.dynamicRef = void 0;
const qp = X, qS = Be, Bp = wt, BS = {
  keyword: "$dynamicRef",
  schemaType: "string",
  code: (t) => Km(t, t.schema)
};
function Km(t, e) {
  const { gen: n, keyword: r, it: s } = t;
  if (e[0] !== "#")
    throw new Error(`"${r}" only supports hash fragment reference`);
  const a = e.slice(1);
  if (s.allErrors)
    i();
  else {
    const c = n.let("valid", !1);
    i(c), t.ok(c);
  }
  function i(c) {
    if (s.schemaEnv.root.dynamicAnchors[a]) {
      const u = n.let("_v", (0, qp._)`${qS.default.dynamicAnchors}${(0, qp.getProperty)(a)}`);
      n.if(u, o(u, c), o(s.validateName, c));
    } else
      o(s.validateName, c)();
  }
  function o(c, u) {
    return u ? () => n.block(() => {
      (0, Bp.callRef)(t, c), n.let(u, !0);
    }) : () => (0, Bp.callRef)(t, c);
  }
}
Xn.dynamicRef = Km;
Xn.default = BS;
var Xc = {};
Object.defineProperty(Xc, "__esModule", { value: !0 });
const VS = Jn, GS = F, HS = {
  keyword: "$recursiveAnchor",
  schemaType: "boolean",
  code(t) {
    t.schema ? (0, VS.dynamicAnchor)(t, "") : (0, GS.checkStrictMode)(t.it, "$recursiveAnchor: false is ignored");
  }
};
Xc.default = HS;
var Yc = {};
Object.defineProperty(Yc, "__esModule", { value: !0 });
const WS = Xn, KS = {
  keyword: "$recursiveRef",
  schemaType: "string",
  code: (t) => (0, WS.dynamicRef)(t, t.schema)
};
Yc.default = KS;
Object.defineProperty(Jc, "__esModule", { value: !0 });
const JS = Jn, XS = Xn, YS = Xc, ZS = Yc, QS = [JS.default, XS.default, YS.default, ZS.default];
Jc.default = QS;
var Zc = {}, Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
const Vp = la, e1 = {
  keyword: "dependentRequired",
  type: "object",
  schemaType: "object",
  error: Vp.error,
  code: (t) => (0, Vp.validatePropertyDeps)(t)
};
Qc.default = e1;
var el = {};
Object.defineProperty(el, "__esModule", { value: !0 });
const t1 = la, n1 = {
  keyword: "dependentSchemas",
  type: "object",
  schemaType: "object",
  code: (t) => (0, t1.validateSchemaDeps)(t)
};
el.default = n1;
var tl = {};
Object.defineProperty(tl, "__esModule", { value: !0 });
const r1 = F, s1 = {
  keyword: ["maxContains", "minContains"],
  type: "array",
  schemaType: "number",
  code({ keyword: t, parentSchema: e, it: n }) {
    e.contains === void 0 && (0, r1.checkStrictMode)(n, `"${t}" without "contains" is ignored`);
  }
};
tl.default = s1;
Object.defineProperty(Zc, "__esModule", { value: !0 });
const a1 = Qc, i1 = el, o1 = tl, c1 = [a1.default, i1.default, o1.default];
Zc.default = c1;
var nl = {}, rl = {};
Object.defineProperty(rl, "__esModule", { value: !0 });
const Nt = X, Gp = F, l1 = Be, u1 = {
  message: "must NOT have unevaluated properties",
  params: ({ params: t }) => (0, Nt._)`{unevaluatedProperty: ${t.unevaluatedProperty}}`
}, p1 = {
  keyword: "unevaluatedProperties",
  type: "object",
  schemaType: ["boolean", "object"],
  trackErrors: !0,
  error: u1,
  code(t) {
    const { gen: e, schema: n, data: r, errsCount: s, it: a } = t;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: i, props: o } = a;
    o instanceof Nt.Name ? e.if((0, Nt._)`${o} !== true`, () => e.forIn("key", r, (p) => e.if(u(o, p), () => c(p)))) : o !== !0 && e.forIn("key", r, (p) => o === void 0 ? c(p) : e.if(l(o, p), () => c(p))), a.props = !0, t.ok((0, Nt._)`${s} === ${l1.default.errors}`);
    function c(p) {
      if (n === !1) {
        t.setParams({ unevaluatedProperty: p }), t.error(), i || e.break();
        return;
      }
      if (!(0, Gp.alwaysValidSchema)(a, n)) {
        const d = e.name("valid");
        t.subschema({
          keyword: "unevaluatedProperties",
          dataProp: p,
          dataPropType: Gp.Type.Str
        }, d), i || e.if((0, Nt.not)(d), () => e.break());
      }
    }
    function u(p, d) {
      return (0, Nt._)`!${p} || !${p}[${d}]`;
    }
    function l(p, d) {
      const f = [];
      for (const m in p)
        p[m] === !0 && f.push((0, Nt._)`${d} !== ${m}`);
      return (0, Nt.and)(...f);
    }
  }
};
rl.default = p1;
var sl = {};
Object.defineProperty(sl, "__esModule", { value: !0 });
const Qt = X, Hp = F, d1 = {
  message: ({ params: { len: t } }) => (0, Qt.str)`must NOT have more than ${t} items`,
  params: ({ params: { len: t } }) => (0, Qt._)`{limit: ${t}}`
}, f1 = {
  keyword: "unevaluatedItems",
  type: "array",
  schemaType: ["boolean", "object"],
  error: d1,
  code(t) {
    const { gen: e, schema: n, data: r, it: s } = t, a = s.items || 0;
    if (a === !0)
      return;
    const i = e.const("len", (0, Qt._)`${r}.length`);
    if (n === !1)
      t.setParams({ len: a }), t.fail((0, Qt._)`${i} > ${a}`);
    else if (typeof n == "object" && !(0, Hp.alwaysValidSchema)(s, n)) {
      const c = e.var("valid", (0, Qt._)`${i} <= ${a}`);
      e.if((0, Qt.not)(c), () => o(c, a)), t.ok(c);
    }
    s.items = !0;
    function o(c, u) {
      e.forRange("i", u, i, (l) => {
        t.subschema({ keyword: "unevaluatedItems", dataProp: l, dataPropType: Hp.Type.Num }, c), s.allErrors || e.if((0, Qt.not)(c), () => e.break());
      });
    }
  }
};
sl.default = f1;
Object.defineProperty(nl, "__esModule", { value: !0 });
const m1 = rl, h1 = sl, v1 = [m1.default, h1.default];
nl.default = v1;
var pa = {}, al = {};
Object.defineProperty(al, "__esModule", { value: !0 });
const ge = X, y1 = {
  message: ({ schemaCode: t }) => (0, ge.str)`must match format "${t}"`,
  params: ({ schemaCode: t }) => (0, ge._)`{format: ${t}}`
}, g1 = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: y1,
  code(t, e) {
    const { gen: n, data: r, $data: s, schema: a, schemaCode: i, it: o } = t, { opts: c, errSchemaPath: u, schemaEnv: l, self: p } = o;
    if (!c.validateFormats)
      return;
    s ? d() : f();
    function d() {
      const m = n.scopeValue("formats", {
        ref: p.formats,
        code: c.code.formats
      }), h = n.const("fDef", (0, ge._)`${m}[${i}]`), y = n.let("fType"), g = n.let("format");
      n.if((0, ge._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => n.assign(y, (0, ge._)`${h}.type || "string"`).assign(g, (0, ge._)`${h}.validate`), () => n.assign(y, (0, ge._)`"string"`).assign(g, h)), t.fail$data((0, ge.or)(_(), R()));
      function _() {
        return c.strictSchema === !1 ? ge.nil : (0, ge._)`${i} && !${g}`;
      }
      function R() {
        const P = l.$async ? (0, ge._)`(${h}.async ? await ${g}(${r}) : ${g}(${r}))` : (0, ge._)`${g}(${r})`, k = (0, ge._)`(typeof ${g} == "function" ? ${P} : ${g}.test(${r}))`;
        return (0, ge._)`${g} && ${g} !== true && ${y} === ${e} && !${k}`;
      }
    }
    function f() {
      const m = p.formats[a];
      if (!m) {
        _();
        return;
      }
      if (m === !0)
        return;
      const [h, y, g] = R(m);
      h === e && t.pass(P());
      function _() {
        if (c.strictSchema === !1) {
          p.logger.warn(k());
          return;
        }
        throw new Error(k());
        function k() {
          return `unknown format "${a}" ignored in schema at path "${u}"`;
        }
      }
      function R(k) {
        const C = k instanceof RegExp ? (0, ge.regexpCode)(k) : c.code.formats ? (0, ge._)`${c.code.formats}${(0, ge.getProperty)(a)}` : void 0, B = n.scopeValue("formats", { key: a, ref: k, code: C });
        return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, ge._)`${B}.validate`] : ["string", k, B];
      }
      function P() {
        if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, ge._)`await ${g}(${r})`;
        }
        return typeof y == "function" ? (0, ge._)`${g}(${r})` : (0, ge._)`${g}.test(${r})`;
      }
    }
  }
};
al.default = g1;
Object.defineProperty(pa, "__esModule", { value: !0 });
const x1 = al, b1 = [x1.default];
pa.default = b1;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.contentVocabulary = fn.metadataVocabulary = void 0;
fn.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
fn.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty($c, "__esModule", { value: !0 });
const _1 = ia, w1 = oa, E1 = ca, $1 = Jc, S1 = Zc, R1 = nl, O1 = pa, Wp = fn, T1 = [
  $1.default,
  _1.default,
  w1.default,
  (0, E1.default)(!0),
  O1.default,
  Wp.metadataVocabulary,
  Wp.contentVocabulary,
  S1.default,
  R1.default
];
$c.default = T1;
var da = {}, fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.DiscrError = void 0;
var Kp;
(function(t) {
  t.Tag = "tag", t.Mapping = "mapping";
})(Kp || (fa.DiscrError = Kp = {}));
Object.defineProperty(da, "__esModule", { value: !0 });
const Sn = X, No = fa, Jp = Ie, P1 = vn, k1 = F, A1 = {
  message: ({ params: { discrError: t, tagName: e } }) => t === No.DiscrError.Tag ? `tag "${e}" must be string` : `value of tag "${e}" must be in oneOf`,
  params: ({ params: { discrError: t, tag: e, tagName: n } }) => (0, Sn._)`{error: ${t}, tag: ${n}, tagValue: ${e}}`
}, N1 = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: A1,
  code(t) {
    const { gen: e, data: n, schema: r, parentSchema: s, it: a } = t, { oneOf: i } = s;
    if (!a.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const o = r.propertyName;
    if (typeof o != "string")
      throw new Error("discriminator: requires propertyName");
    if (r.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!i)
      throw new Error("discriminator: requires oneOf keyword");
    const c = e.let("valid", !1), u = e.const("tag", (0, Sn._)`${n}${(0, Sn.getProperty)(o)}`);
    e.if((0, Sn._)`typeof ${u} == "string"`, () => l(), () => t.error(!1, { discrError: No.DiscrError.Tag, tag: u, tagName: o })), t.ok(c);
    function l() {
      const f = d();
      e.if(!1);
      for (const m in f)
        e.elseIf((0, Sn._)`${u} === ${m}`), e.assign(c, p(f[m]));
      e.else(), t.error(!1, { discrError: No.DiscrError.Mapping, tag: u, tagName: o }), e.endIf();
    }
    function p(f) {
      const m = e.name("valid"), h = t.subschema({ keyword: "oneOf", schemaProp: f }, m);
      return t.mergeEvaluated(h, Sn.Name), m;
    }
    function d() {
      var f;
      const m = {}, h = g(s);
      let y = !0;
      for (let P = 0; P < i.length; P++) {
        let k = i[P];
        if (k != null && k.$ref && !(0, k1.schemaHasRulesButRef)(k, a.self.RULES)) {
          const B = k.$ref;
          if (k = Jp.resolveRef.call(a.self, a.schemaEnv.root, a.baseId, B), k instanceof Jp.SchemaEnv && (k = k.schema), k === void 0)
            throw new P1.default(a.opts.uriResolver, a.baseId, B);
        }
        const C = (f = k == null ? void 0 : k.properties) === null || f === void 0 ? void 0 : f[o];
        if (typeof C != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${o}"`);
        y = y && (h || g(k)), _(C, P);
      }
      if (!y)
        throw new Error(`discriminator: "${o}" must be required`);
      return m;
      function g({ required: P }) {
        return Array.isArray(P) && P.includes(o);
      }
      function _(P, k) {
        if (P.const)
          R(P.const, k);
        else if (P.enum)
          for (const C of P.enum)
            R(C, k);
        else
          throw new Error(`discriminator: "properties/${o}" must have "const" or "enum"`);
      }
      function R(P, k) {
        if (typeof P != "string" || P in m)
          throw new Error(`discriminator: "${o}" values must be unique strings`);
        m[P] = k;
      }
    }
  }
};
da.default = N1;
var il = {};
const j1 = "https://json-schema.org/draft/2020-12/schema", I1 = "https://json-schema.org/draft/2020-12/schema", C1 = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0,
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
  "https://json-schema.org/draft/2020-12/vocab/validation": !0,
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, L1 = "meta", F1 = "Core and Validation specifications meta-schema", D1 = [
  {
    $ref: "meta/core"
  },
  {
    $ref: "meta/applicator"
  },
  {
    $ref: "meta/unevaluated"
  },
  {
    $ref: "meta/validation"
  },
  {
    $ref: "meta/meta-data"
  },
  {
    $ref: "meta/format-annotation"
  },
  {
    $ref: "meta/content"
  }
], U1 = [
  "object",
  "boolean"
], z1 = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", M1 = {
  definitions: {
    $comment: '"definitions" has been replaced by "$defs".',
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    deprecated: !0,
    default: {}
  },
  dependencies: {
    $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $dynamicRef: "#meta"
        },
        {
          $ref: "meta/validation#/$defs/stringArray"
        }
      ]
    },
    deprecated: !0,
    default: {}
  },
  $recursiveAnchor: {
    $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
    $ref: "meta/core#/$defs/anchorString",
    deprecated: !0
  },
  $recursiveRef: {
    $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
    $ref: "meta/core#/$defs/uriReferenceString",
    deprecated: !0
  }
}, q1 = {
  $schema: j1,
  $id: I1,
  $vocabulary: C1,
  $dynamicAnchor: L1,
  title: F1,
  allOf: D1,
  type: U1,
  $comment: z1,
  properties: M1
}, B1 = "https://json-schema.org/draft/2020-12/schema", V1 = "https://json-schema.org/draft/2020-12/meta/applicator", G1 = {
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0
}, H1 = "meta", W1 = "Applicator vocabulary meta-schema", K1 = [
  "object",
  "boolean"
], J1 = {
  prefixItems: {
    $ref: "#/$defs/schemaArray"
  },
  items: {
    $dynamicRef: "#meta"
  },
  contains: {
    $dynamicRef: "#meta"
  },
  additionalProperties: {
    $dynamicRef: "#meta"
  },
  properties: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependentSchemas: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    default: {}
  },
  propertyNames: {
    $dynamicRef: "#meta"
  },
  if: {
    $dynamicRef: "#meta"
  },
  then: {
    $dynamicRef: "#meta"
  },
  else: {
    $dynamicRef: "#meta"
  },
  allOf: {
    $ref: "#/$defs/schemaArray"
  },
  anyOf: {
    $ref: "#/$defs/schemaArray"
  },
  oneOf: {
    $ref: "#/$defs/schemaArray"
  },
  not: {
    $dynamicRef: "#meta"
  }
}, X1 = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $dynamicRef: "#meta"
    }
  }
}, Y1 = {
  $schema: B1,
  $id: V1,
  $vocabulary: G1,
  $dynamicAnchor: H1,
  title: W1,
  type: K1,
  properties: J1,
  $defs: X1
}, Z1 = "https://json-schema.org/draft/2020-12/schema", Q1 = "https://json-schema.org/draft/2020-12/meta/unevaluated", eR = {
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
}, tR = "meta", nR = "Unevaluated applicator vocabulary meta-schema", rR = [
  "object",
  "boolean"
], sR = {
  unevaluatedItems: {
    $dynamicRef: "#meta"
  },
  unevaluatedProperties: {
    $dynamicRef: "#meta"
  }
}, aR = {
  $schema: Z1,
  $id: Q1,
  $vocabulary: eR,
  $dynamicAnchor: tR,
  title: nR,
  type: rR,
  properties: sR
}, iR = "https://json-schema.org/draft/2020-12/schema", oR = "https://json-schema.org/draft/2020-12/meta/content", cR = {
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, lR = "meta", uR = "Content vocabulary meta-schema", pR = [
  "object",
  "boolean"
], dR = {
  contentEncoding: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentSchema: {
    $dynamicRef: "#meta"
  }
}, fR = {
  $schema: iR,
  $id: oR,
  $vocabulary: cR,
  $dynamicAnchor: lR,
  title: uR,
  type: pR,
  properties: dR
}, mR = "https://json-schema.org/draft/2020-12/schema", hR = "https://json-schema.org/draft/2020-12/meta/core", vR = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0
}, yR = "meta", gR = "Core vocabulary meta-schema", xR = [
  "object",
  "boolean"
], bR = {
  $id: {
    $ref: "#/$defs/uriReferenceString",
    $comment: "Non-empty fragments not allowed.",
    pattern: "^[^#]*#?$"
  },
  $schema: {
    $ref: "#/$defs/uriString"
  },
  $ref: {
    $ref: "#/$defs/uriReferenceString"
  },
  $anchor: {
    $ref: "#/$defs/anchorString"
  },
  $dynamicRef: {
    $ref: "#/$defs/uriReferenceString"
  },
  $dynamicAnchor: {
    $ref: "#/$defs/anchorString"
  },
  $vocabulary: {
    type: "object",
    propertyNames: {
      $ref: "#/$defs/uriString"
    },
    additionalProperties: {
      type: "boolean"
    }
  },
  $comment: {
    type: "string"
  },
  $defs: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    }
  }
}, _R = {
  anchorString: {
    type: "string",
    pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
  },
  uriString: {
    type: "string",
    format: "uri"
  },
  uriReferenceString: {
    type: "string",
    format: "uri-reference"
  }
}, wR = {
  $schema: mR,
  $id: hR,
  $vocabulary: vR,
  $dynamicAnchor: yR,
  title: gR,
  type: xR,
  properties: bR,
  $defs: _R
}, ER = "https://json-schema.org/draft/2020-12/schema", $R = "https://json-schema.org/draft/2020-12/meta/format-annotation", SR = {
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
}, RR = "meta", OR = "Format vocabulary meta-schema for annotation results", TR = [
  "object",
  "boolean"
], PR = {
  format: {
    type: "string"
  }
}, kR = {
  $schema: ER,
  $id: $R,
  $vocabulary: SR,
  $dynamicAnchor: RR,
  title: OR,
  type: TR,
  properties: PR
}, AR = "https://json-schema.org/draft/2020-12/schema", NR = "https://json-schema.org/draft/2020-12/meta/meta-data", jR = {
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
}, IR = "meta", CR = "Meta-data vocabulary meta-schema", LR = [
  "object",
  "boolean"
], FR = {
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  deprecated: {
    type: "boolean",
    default: !1
  },
  readOnly: {
    type: "boolean",
    default: !1
  },
  writeOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  }
}, DR = {
  $schema: AR,
  $id: NR,
  $vocabulary: jR,
  $dynamicAnchor: IR,
  title: CR,
  type: LR,
  properties: FR
}, UR = "https://json-schema.org/draft/2020-12/schema", zR = "https://json-schema.org/draft/2020-12/meta/validation", MR = {
  "https://json-schema.org/draft/2020-12/vocab/validation": !0
}, qR = "meta", BR = "Validation vocabulary meta-schema", VR = [
  "object",
  "boolean"
], GR = {
  type: {
    anyOf: [
      {
        $ref: "#/$defs/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/$defs/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  const: !0,
  enum: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  maxItems: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  maxContains: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minContains: {
    $ref: "#/$defs/nonNegativeInteger",
    default: 1
  },
  maxProperties: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/$defs/stringArray"
  },
  dependentRequired: {
    type: "object",
    additionalProperties: {
      $ref: "#/$defs/stringArray"
    }
  }
}, HR = {
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    $ref: "#/$defs/nonNegativeInteger",
    default: 0
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, WR = {
  $schema: UR,
  $id: zR,
  $vocabulary: MR,
  $dynamicAnchor: qR,
  title: BR,
  type: VR,
  properties: GR,
  $defs: HR
};
Object.defineProperty(il, "__esModule", { value: !0 });
const KR = q1, JR = Y1, XR = aR, YR = fR, ZR = wR, QR = kR, eO = DR, tO = WR, nO = ["/properties"];
function rO(t) {
  return [
    KR,
    JR,
    XR,
    YR,
    ZR,
    e(this, QR),
    eO,
    e(this, tO)
  ].forEach((n) => this.addMetaSchema(n, void 0, !1)), this;
  function e(n, r) {
    return t ? n.$dataMetaSchema(r, nO) : r;
  }
}
il.default = rO;
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
  const n = uc, r = $c, s = da, a = il, i = "https://json-schema.org/draft/2020-12/schema";
  class o extends n.default {
    constructor(f = {}) {
      super({
        ...f,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(s.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      const { $data: f, meta: m } = this.opts;
      m && (a.default.call(this, f), this.refs["http://json-schema.org/schema"] = i);
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
    }
  }
  e.Ajv2020 = o, t.exports = e = o, t.exports.Ajv2020 = o, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
  var c = Ke;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return c.KeywordCxt;
  } });
  var u = X;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return u._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return u.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return u.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return u.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return u.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return u.CodeGen;
  } });
  var l = Hn;
  Object.defineProperty(e, "ValidationError", { enumerable: !0, get: function() {
    return l.default;
  } });
  var p = vn;
  Object.defineProperty(e, "MissingRefError", { enumerable: !0, get: function() {
    return p.default;
  } });
})(So, So.exports);
var sO = So.exports, jo = { exports: {} }, Jm = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formatNames = t.fastFormats = t.fullFormats = void 0;
  function e(N, L) {
    return { validate: N, compare: L };
  }
  t.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: e(a, i),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: e(c(!0), u),
    "date-time": e(d(!0), f),
    "iso-time": e(c(), l),
    "iso-date-time": e(d(), m),
    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: g,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    // uri-template: https://tools.ietf.org/html/rfc6570
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: fe,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
    // byte: https://github.com/miguelmota/is-base64
    byte: R,
    // signed 32 bit integer
    int32: { type: "number", validate: C },
    // signed 64 bit integer
    int64: { type: "number", validate: B },
    // C-type float
    float: { type: "number", validate: W },
    // C-type double
    double: { type: "number", validate: W },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, t.fastFormats = {
    ...t.fullFormats,
    date: e(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i),
    time: e(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
    "date-time": e(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
    "iso-time": e(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
    "iso-date-time": e(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  }, t.formatNames = Object.keys(t.fullFormats);
  function n(N) {
    return N % 4 === 0 && (N % 100 !== 0 || N % 400 === 0);
  }
  const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function a(N) {
    const L = r.exec(N);
    if (!L)
      return !1;
    const z = +L[1], T = +L[2], A = +L[3];
    return T >= 1 && T <= 12 && A >= 1 && A <= (T === 2 && n(z) ? 29 : s[T]);
  }
  function i(N, L) {
    if (N && L)
      return N > L ? 1 : N < L ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function c(N) {
    return function(z) {
      const T = o.exec(z);
      if (!T)
        return !1;
      const A = +T[1], j = +T[2], I = +T[3], M = T[4], D = T[5] === "-" ? -1 : 1, S = +(T[6] || 0), x = +(T[7] || 0);
      if (S > 23 || x > 59 || N && !M)
        return !1;
      if (A <= 23 && j <= 59 && I < 60)
        return !0;
      const $ = j - x * D, w = A - S * D - ($ < 0 ? 1 : 0);
      return (w === 23 || w === -1) && ($ === 59 || $ === -1) && I < 61;
    };
  }
  function u(N, L) {
    if (!(N && L))
      return;
    const z = (/* @__PURE__ */ new Date("2020-01-01T" + N)).valueOf(), T = (/* @__PURE__ */ new Date("2020-01-01T" + L)).valueOf();
    if (z && T)
      return z - T;
  }
  function l(N, L) {
    if (!(N && L))
      return;
    const z = o.exec(N), T = o.exec(L);
    if (z && T)
      return N = z[1] + z[2] + z[3], L = T[1] + T[2] + T[3], N > L ? 1 : N < L ? -1 : 0;
  }
  const p = /t|\s/i;
  function d(N) {
    const L = c(N);
    return function(T) {
      const A = T.split(p);
      return A.length === 2 && a(A[0]) && L(A[1]);
    };
  }
  function f(N, L) {
    if (!(N && L))
      return;
    const z = new Date(N).valueOf(), T = new Date(L).valueOf();
    if (z && T)
      return z - T;
  }
  function m(N, L) {
    if (!(N && L))
      return;
    const [z, T] = N.split(p), [A, j] = L.split(p), I = i(z, A);
    if (I !== void 0)
      return I || u(T, j);
  }
  const h = /\/|:/, y = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function g(N) {
    return h.test(N) && y.test(N);
  }
  const _ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function R(N) {
    return _.lastIndex = 0, _.test(N);
  }
  const P = -2147483648, k = 2 ** 31 - 1;
  function C(N) {
    return Number.isInteger(N) && N <= k && N >= P;
  }
  function B(N) {
    return Number.isInteger(N);
  }
  function W() {
    return !0;
  }
  const oe = /[^\\]\\Z/;
  function fe(N) {
    if (oe.test(N))
      return !1;
    try {
      return new RegExp(N), !0;
    } catch {
      return !1;
    }
  }
})(Jm);
var Xm = {}, Io = { exports: {} }, ol = {};
Object.defineProperty(ol, "__esModule", { value: !0 });
const aO = ia, iO = oa, oO = ca, cO = pa, Xp = fn, lO = [
  aO.default,
  iO.default,
  (0, oO.default)(),
  cO.default,
  Xp.metadataVocabulary,
  Xp.contentVocabulary
];
ol.default = lO;
const uO = "http://json-schema.org/draft-07/schema#", pO = "http://json-schema.org/draft-07/schema#", dO = "Core schema meta-schema", fO = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, mO = [
  "object",
  "boolean"
], hO = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, vO = {
  $schema: uO,
  $id: pO,
  title: dO,
  definitions: fO,
  type: mO,
  properties: hO,
  default: !0
};
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
  const n = uc, r = ol, s = da, a = vO, i = ["/properties"], o = "http://json-schema.org/draft-07/schema";
  class c extends n.default {
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((m) => this.addVocabulary(m)), this.opts.discriminator && this.addKeyword(s.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const m = this.opts.$data ? this.$dataMetaSchema(a, i) : a;
      this.addMetaSchema(m, o, !1), this.refs["http://json-schema.org/schema"] = o;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
    }
  }
  e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = c;
  var u = Ke;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return u.KeywordCxt;
  } });
  var l = X;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return l._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return l.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return l.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return l.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return l.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return l.CodeGen;
  } });
  var p = Hn;
  Object.defineProperty(e, "ValidationError", { enumerable: !0, get: function() {
    return p.default;
  } });
  var d = vn;
  Object.defineProperty(e, "MissingRefError", { enumerable: !0, get: function() {
    return d.default;
  } });
})(Io, Io.exports);
var yO = Io.exports;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.formatLimitDefinition = void 0;
  const e = yO, n = X, r = n.operators, s = {
    formatMaximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
    formatMinimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
    formatExclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
  }, a = {
    message: ({ keyword: o, schemaCode: c }) => (0, n.str)`should be ${s[o].okStr} ${c}`,
    params: ({ keyword: o, schemaCode: c }) => (0, n._)`{comparison: ${s[o].okStr}, limit: ${c}}`
  };
  t.formatLimitDefinition = {
    keyword: Object.keys(s),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: a,
    code(o) {
      const { gen: c, data: u, schemaCode: l, keyword: p, it: d } = o, { opts: f, self: m } = d;
      if (!f.validateFormats)
        return;
      const h = new e.KeywordCxt(d, m.RULES.all.format.definition, "format");
      h.$data ? y() : g();
      function y() {
        const R = c.scopeValue("formats", {
          ref: m.formats,
          code: f.code.formats
        }), P = c.const("fmt", (0, n._)`${R}[${h.schemaCode}]`);
        o.fail$data((0, n.or)((0, n._)`typeof ${P} != "object"`, (0, n._)`${P} instanceof RegExp`, (0, n._)`typeof ${P}.compare != "function"`, _(P)));
      }
      function g() {
        const R = h.schema, P = m.formats[R];
        if (!P || P === !0)
          return;
        if (typeof P != "object" || P instanceof RegExp || typeof P.compare != "function")
          throw new Error(`"${p}": format "${R}" does not define "compare" function`);
        const k = c.scopeValue("formats", {
          key: R,
          ref: P,
          code: f.code.formats ? (0, n._)`${f.code.formats}${(0, n.getProperty)(R)}` : void 0
        });
        o.fail$data(_(k));
      }
      function _(R) {
        return (0, n._)`${R}.compare(${u}, ${l}) ${s[p].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const i = (o) => (o.addKeyword(t.formatLimitDefinition), o);
  t.default = i;
})(Xm);
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const n = Jm, r = Xm, s = X, a = new s.Name("fullFormats"), i = new s.Name("fastFormats"), o = (u, l = { keywords: !0 }) => {
    if (Array.isArray(l))
      return c(u, l, n.fullFormats, a), u;
    const [p, d] = l.mode === "fast" ? [n.fastFormats, i] : [n.fullFormats, a], f = l.formats || n.formatNames;
    return c(u, f, p, d), l.keywords && (0, r.default)(u), u;
  };
  o.get = (u, l = "full") => {
    const d = (l === "fast" ? n.fastFormats : n.fullFormats)[u];
    if (!d)
      throw new Error(`Unknown format "${u}"`);
    return d;
  };
  function c(u, l, p, d) {
    var f, m;
    (f = (m = u.opts.code).formats) !== null && f !== void 0 || (m.formats = (0, s._)`require("ajv-formats/dist/formats").${d}`);
    for (const h of l)
      u.addFormat(h, p[h]);
  }
  t.exports = e = o, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
})(jo, jo.exports);
var gO = jo.exports;
const xO = /* @__PURE__ */ Vn(gO), bO = (t, e, n, r) => {
  if (n === "length" || n === "prototype" || n === "arguments" || n === "caller")
    return;
  const s = Object.getOwnPropertyDescriptor(t, n), a = Object.getOwnPropertyDescriptor(e, n);
  !_O(s, a) && r || Object.defineProperty(t, n, a);
}, _O = function(t, e) {
  return t === void 0 || t.configurable || t.writable === e.writable && t.enumerable === e.enumerable && t.configurable === e.configurable && (t.writable || t.value === e.value);
}, wO = (t, e) => {
  const n = Object.getPrototypeOf(e);
  n !== Object.getPrototypeOf(t) && Object.setPrototypeOf(t, n);
}, EO = (t, e) => `/* Wrapped ${t}*/
${e}`, $O = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), SO = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), RO = (t, e, n) => {
  const r = n === "" ? "" : `with ${n.trim()}() `, s = EO.bind(null, r, e.toString());
  Object.defineProperty(s, "name", SO);
  const { writable: a, enumerable: i, configurable: o } = $O;
  Object.defineProperty(t, "toString", { value: s, writable: a, enumerable: i, configurable: o });
};
function OO(t, e, { ignoreNonConfigurable: n = !1 } = {}) {
  const { name: r } = t;
  for (const s of Reflect.ownKeys(e))
    bO(t, e, s, n);
  return wO(t, e), RO(t, e, r), t;
}
const Yp = (t, e = {}) => {
  if (typeof t != "function")
    throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);
  const {
    wait: n = 0,
    maxWait: r = Number.POSITIVE_INFINITY,
    before: s = !1,
    after: a = !0
  } = e;
  if (n < 0 || r < 0)
    throw new RangeError("`wait` and `maxWait` must not be negative.");
  if (!s && !a)
    throw new Error("Both `before` and `after` are false, function wouldn't be called.");
  let i, o, c;
  const u = function(...l) {
    const p = this, d = () => {
      i = void 0, o && (clearTimeout(o), o = void 0), a && (c = t.apply(p, l));
    }, f = () => {
      o = void 0, i && (clearTimeout(i), i = void 0), a && (c = t.apply(p, l));
    }, m = s && !i;
    return clearTimeout(i), i = setTimeout(d, n), r > 0 && r !== Number.POSITIVE_INFINITY && !o && (o = setTimeout(f, r)), m && (c = t.apply(p, l)), c;
  };
  return OO(u, t), u.cancel = () => {
    i && (clearTimeout(i), i = void 0), o && (clearTimeout(o), o = void 0);
  }, u;
};
var Co = { exports: {} };
const TO = "2.0.0", Ym = 256, PO = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, kO = 16, AO = Ym - 6, NO = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var ma = {
  MAX_LENGTH: Ym,
  MAX_SAFE_COMPONENT_LENGTH: kO,
  MAX_SAFE_BUILD_LENGTH: AO,
  MAX_SAFE_INTEGER: PO,
  RELEASE_TYPES: NO,
  SEMVER_SPEC_VERSION: TO,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const jO = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
};
var ha = jO;
(function(t, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: s
  } = ma, a = ha;
  e = t.exports = {};
  const i = e.re = [], o = e.safeRe = [], c = e.src = [], u = e.safeSrc = [], l = e.t = {};
  let p = 0;
  const d = "[a-zA-Z0-9-]", f = [
    ["\\s", 1],
    ["\\d", s],
    [d, r]
  ], m = (y) => {
    for (const [g, _] of f)
      y = y.split(`${g}*`).join(`${g}{0,${_}}`).split(`${g}+`).join(`${g}{1,${_}}`);
    return y;
  }, h = (y, g, _) => {
    const R = m(g), P = p++;
    a(y, P, g), l[y] = P, c[P] = g, u[P] = R, i[P] = new RegExp(g, _ ? "g" : void 0), o[P] = new RegExp(R, _ ? "g" : void 0);
  };
  h("NUMERICIDENTIFIER", "0|[1-9]\\d*"), h("NUMERICIDENTIFIERLOOSE", "\\d+"), h("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), h("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`), h("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASEIDENTIFIER", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIER]})`), h("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`), h("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`), h("BUILDIDENTIFIER", `${d}+`), h("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`), h("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`), h("FULL", `^${c[l.FULLPLAIN]}$`), h("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`), h("LOOSE", `^${c[l.LOOSEPLAIN]}$`), h("GTLT", "((?:<|>)?=?)"), h("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), h("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`), h("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`), h("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`), h("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`), h("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`), h("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), h("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`), h("COERCEFULL", c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?(?:${c[l.BUILD]})?(?:$|[^\\d])`), h("COERCERTL", c[l.COERCE], !0), h("COERCERTLFULL", c[l.COERCEFULL], !0), h("LONETILDE", "(?:~>?)"), h("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", h("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`), h("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`), h("LONECARET", "(?:\\^)"), h("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", h("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`), h("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`), h("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`), h("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`), h("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", h("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`), h("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`), h("STAR", "(<|>)?=?\\s*\\*"), h("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), h("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Co, Co.exports);
var Cr = Co.exports;
const IO = Object.freeze({ loose: !0 }), CO = Object.freeze({}), LO = (t) => t ? typeof t != "object" ? IO : t : CO;
var cl = LO;
const Zp = /^[0-9]+$/, Zm = (t, e) => {
  if (typeof t == "number" && typeof e == "number")
    return t === e ? 0 : t < e ? -1 : 1;
  const n = Zp.test(t), r = Zp.test(e);
  return n && r && (t = +t, e = +e), t === e ? 0 : n && !r ? -1 : r && !n ? 1 : t < e ? -1 : 1;
}, FO = (t, e) => Zm(e, t);
var Qm = {
  compareIdentifiers: Zm,
  rcompareIdentifiers: FO
};
const rs = ha, { MAX_LENGTH: Qp, MAX_SAFE_INTEGER: ss } = ma, { safeRe: as, t: is } = Cr, DO = cl, { compareIdentifiers: to } = Qm;
let UO = class ot {
  constructor(e, n) {
    if (n = DO(n), e instanceof ot) {
      if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Qp)
      throw new TypeError(
        `version is longer than ${Qp} characters`
      );
    rs("SemVer", e, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const r = e.trim().match(n.loose ? as[is.LOOSE] : as[is.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > ss || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > ss || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > ss || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const a = +s;
        if (a >= 0 && a < ss)
          return a;
      }
      return s;
    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (rs("SemVer.compare", this.version, this.options, e), !(e instanceof ot)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new ot(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof ot || (e = new ot(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
  }
  comparePre(e) {
    if (e instanceof ot || (e = new ot(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let n = 0;
    do {
      const r = this.prerelease[n], s = e.prerelease[n];
      if (rs("prerelease compare", n, r, s), r === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === s)
        continue;
      return to(r, s);
    } while (++n);
  }
  compareBuild(e) {
    e instanceof ot || (e = new ot(e, this.options));
    let n = 0;
    do {
      const r = this.build[n], s = e.build[n];
      if (rs("build compare", n, r, s), r === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === s)
        continue;
      return to(r, s);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, n, r) {
    if (e.startsWith("pre")) {
      if (!n && r === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const s = `-${n}`.match(this.options.loose ? as[is.PRERELEASELOOSE] : as[is.PRERELEASE]);
        if (!s || s[1] !== n)
          throw new Error(`invalid identifier: ${n}`);
      }
    }
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", n, r);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", n, r);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const s = Number(r) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (n === this.prerelease.join(".") && r === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (n) {
          let a = [n, s];
          r === !1 && (a = [n]), to(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Ce = UO;
const ed = Ce, zO = (t, e, n = !1) => {
  if (t instanceof ed)
    return t;
  try {
    return new ed(t, e);
  } catch (r) {
    if (!n)
      return null;
    throw r;
  }
};
var Yn = zO;
const MO = Yn, qO = (t, e) => {
  const n = MO(t, e);
  return n ? n.version : null;
};
var BO = qO;
const VO = Yn, GO = (t, e) => {
  const n = VO(t.trim().replace(/^[=v]+/, ""), e);
  return n ? n.version : null;
};
var HO = GO;
const td = Ce, WO = (t, e, n, r, s) => {
  typeof n == "string" && (s = r, r = n, n = void 0);
  try {
    return new td(
      t instanceof td ? t.version : t,
      n
    ).inc(e, r, s).version;
  } catch {
    return null;
  }
};
var KO = WO;
const nd = Yn, JO = (t, e) => {
  const n = nd(t, null, !0), r = nd(e, null, !0), s = n.compare(r);
  if (s === 0)
    return null;
  const a = s > 0, i = a ? n : r, o = a ? r : n, c = !!i.prerelease.length;
  if (!!o.prerelease.length && !c) {
    if (!o.patch && !o.minor)
      return "major";
    if (o.compareMain(i) === 0)
      return o.minor && !o.patch ? "minor" : "patch";
  }
  const l = c ? "pre" : "";
  return n.major !== r.major ? l + "major" : n.minor !== r.minor ? l + "minor" : n.patch !== r.patch ? l + "patch" : "prerelease";
};
var XO = JO;
const YO = Ce, ZO = (t, e) => new YO(t, e).major;
var QO = ZO;
const eT = Ce, tT = (t, e) => new eT(t, e).minor;
var nT = tT;
const rT = Ce, sT = (t, e) => new rT(t, e).patch;
var aT = sT;
const iT = Yn, oT = (t, e) => {
  const n = iT(t, e);
  return n && n.prerelease.length ? n.prerelease : null;
};
var cT = oT;
const rd = Ce, lT = (t, e, n) => new rd(t, n).compare(new rd(e, n));
var nt = lT;
const uT = nt, pT = (t, e, n) => uT(e, t, n);
var dT = pT;
const fT = nt, mT = (t, e) => fT(t, e, !0);
var hT = mT;
const sd = Ce, vT = (t, e, n) => {
  const r = new sd(t, n), s = new sd(e, n);
  return r.compare(s) || r.compareBuild(s);
};
var ll = vT;
const yT = ll, gT = (t, e) => t.sort((n, r) => yT(n, r, e));
var xT = gT;
const bT = ll, _T = (t, e) => t.sort((n, r) => bT(r, n, e));
var wT = _T;
const ET = nt, $T = (t, e, n) => ET(t, e, n) > 0;
var va = $T;
const ST = nt, RT = (t, e, n) => ST(t, e, n) < 0;
var ul = RT;
const OT = nt, TT = (t, e, n) => OT(t, e, n) === 0;
var eh = TT;
const PT = nt, kT = (t, e, n) => PT(t, e, n) !== 0;
var th = kT;
const AT = nt, NT = (t, e, n) => AT(t, e, n) >= 0;
var pl = NT;
const jT = nt, IT = (t, e, n) => jT(t, e, n) <= 0;
var dl = IT;
const CT = eh, LT = th, FT = va, DT = pl, UT = ul, zT = dl, MT = (t, e, n, r) => {
  switch (e) {
    case "===":
      return typeof t == "object" && (t = t.version), typeof n == "object" && (n = n.version), t === n;
    case "!==":
      return typeof t == "object" && (t = t.version), typeof n == "object" && (n = n.version), t !== n;
    case "":
    case "=":
    case "==":
      return CT(t, n, r);
    case "!=":
      return LT(t, n, r);
    case ">":
      return FT(t, n, r);
    case ">=":
      return DT(t, n, r);
    case "<":
      return UT(t, n, r);
    case "<=":
      return zT(t, n, r);
    default:
      throw new TypeError(`Invalid operator: ${e}`);
  }
};
var nh = MT;
const qT = Ce, BT = Yn, { safeRe: os, t: cs } = Cr, VT = (t, e) => {
  if (t instanceof qT)
    return t;
  if (typeof t == "number" && (t = String(t)), typeof t != "string")
    return null;
  e = e || {};
  let n = null;
  if (!e.rtl)
    n = t.match(e.includePrerelease ? os[cs.COERCEFULL] : os[cs.COERCE]);
  else {
    const c = e.includePrerelease ? os[cs.COERCERTLFULL] : os[cs.COERCERTL];
    let u;
    for (; (u = c.exec(t)) && (!n || n.index + n[0].length !== t.length); )
      (!n || u.index + u[0].length !== n.index + n[0].length) && (n = u), c.lastIndex = u.index + u[1].length + u[2].length;
    c.lastIndex = -1;
  }
  if (n === null)
    return null;
  const r = n[2], s = n[3] || "0", a = n[4] || "0", i = e.includePrerelease && n[5] ? `-${n[5]}` : "", o = e.includePrerelease && n[6] ? `+${n[6]}` : "";
  return BT(`${r}.${s}.${a}${i}${o}`, e);
};
var GT = VT;
class HT {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(e) {
    const n = this.map.get(e);
    if (n !== void 0)
      return this.map.delete(e), this.map.set(e, n), n;
  }
  delete(e) {
    return this.map.delete(e);
  }
  set(e, n) {
    if (!this.delete(e) && n !== void 0) {
      if (this.map.size >= this.max) {
        const s = this.map.keys().next().value;
        this.delete(s);
      }
      this.map.set(e, n);
    }
    return this;
  }
}
var WT = HT, no, ad;
function rt() {
  if (ad) return no;
  ad = 1;
  const t = /\s+/g;
  class e {
    constructor(A, j) {
      if (j = s(j), A instanceof e)
        return A.loose === !!j.loose && A.includePrerelease === !!j.includePrerelease ? A : new e(A.raw, j);
      if (A instanceof a)
        return this.raw = A.value, this.set = [[A]], this.formatted = void 0, this;
      if (this.options = j, this.loose = !!j.loose, this.includePrerelease = !!j.includePrerelease, this.raw = A.trim().replace(t, " "), this.set = this.raw.split("||").map((I) => this.parseRange(I.trim())).filter((I) => I.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const I = this.set[0];
        if (this.set = this.set.filter((M) => !h(M[0])), this.set.length === 0)
          this.set = [I];
        else if (this.set.length > 1) {
          for (const M of this.set)
            if (M.length === 1 && y(M[0])) {
              this.set = [M];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let A = 0; A < this.set.length; A++) {
          A > 0 && (this.formatted += "||");
          const j = this.set[A];
          for (let I = 0; I < j.length; I++)
            I > 0 && (this.formatted += " "), this.formatted += j[I].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(A) {
      const I = ((this.options.includePrerelease && f) | (this.options.loose && m)) + ":" + A, M = r.get(I);
      if (M)
        return M;
      const D = this.options.loose, S = D ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
      A = A.replace(S, L(this.options.includePrerelease)), i("hyphen replace", A), A = A.replace(c[u.COMPARATORTRIM], l), i("comparator trim", A), A = A.replace(c[u.TILDETRIM], p), i("tilde trim", A), A = A.replace(c[u.CARETTRIM], d), i("caret trim", A);
      let x = A.split(" ").map((b) => _(b, this.options)).join(" ").split(/\s+/).map((b) => N(b, this.options));
      D && (x = x.filter((b) => (i("loose invalid filter", b, this.options), !!b.match(c[u.COMPARATORLOOSE])))), i("range list", x);
      const $ = /* @__PURE__ */ new Map(), w = x.map((b) => new a(b, this.options));
      for (const b of w) {
        if (h(b))
          return [b];
        $.set(b.value, b);
      }
      $.size > 1 && $.has("") && $.delete("");
      const v = [...$.values()];
      return r.set(I, v), v;
    }
    intersects(A, j) {
      if (!(A instanceof e))
        throw new TypeError("a Range is required");
      return this.set.some((I) => g(I, j) && A.set.some((M) => g(M, j) && I.every((D) => M.every((S) => D.intersects(S, j)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(A) {
      if (!A)
        return !1;
      if (typeof A == "string")
        try {
          A = new o(A, this.options);
        } catch {
          return !1;
        }
      for (let j = 0; j < this.set.length; j++)
        if (z(this.set[j], A, this.options))
          return !0;
      return !1;
    }
  }
  no = e;
  const n = WT, r = new n(), s = cl, a = ya(), i = ha, o = Ce, {
    safeRe: c,
    t: u,
    comparatorTrimReplace: l,
    tildeTrimReplace: p,
    caretTrimReplace: d
  } = Cr, { FLAG_INCLUDE_PRERELEASE: f, FLAG_LOOSE: m } = ma, h = (T) => T.value === "<0.0.0-0", y = (T) => T.value === "", g = (T, A) => {
    let j = !0;
    const I = T.slice();
    let M = I.pop();
    for (; j && I.length; )
      j = I.every((D) => M.intersects(D, A)), M = I.pop();
    return j;
  }, _ = (T, A) => (T = T.replace(c[u.BUILD], ""), i("comp", T, A), T = C(T, A), i("caret", T), T = P(T, A), i("tildes", T), T = W(T, A), i("xrange", T), T = fe(T, A), i("stars", T), T), R = (T) => !T || T.toLowerCase() === "x" || T === "*", P = (T, A) => T.trim().split(/\s+/).map((j) => k(j, A)).join(" "), k = (T, A) => {
    const j = A.loose ? c[u.TILDELOOSE] : c[u.TILDE];
    return T.replace(j, (I, M, D, S, x) => {
      i("tilde", T, I, M, D, S, x);
      let $;
      return R(M) ? $ = "" : R(D) ? $ = `>=${M}.0.0 <${+M + 1}.0.0-0` : R(S) ? $ = `>=${M}.${D}.0 <${M}.${+D + 1}.0-0` : x ? (i("replaceTilde pr", x), $ = `>=${M}.${D}.${S}-${x} <${M}.${+D + 1}.0-0`) : $ = `>=${M}.${D}.${S} <${M}.${+D + 1}.0-0`, i("tilde return", $), $;
    });
  }, C = (T, A) => T.trim().split(/\s+/).map((j) => B(j, A)).join(" "), B = (T, A) => {
    i("caret", T, A);
    const j = A.loose ? c[u.CARETLOOSE] : c[u.CARET], I = A.includePrerelease ? "-0" : "";
    return T.replace(j, (M, D, S, x, $) => {
      i("caret", T, M, D, S, x, $);
      let w;
      return R(D) ? w = "" : R(S) ? w = `>=${D}.0.0${I} <${+D + 1}.0.0-0` : R(x) ? D === "0" ? w = `>=${D}.${S}.0${I} <${D}.${+S + 1}.0-0` : w = `>=${D}.${S}.0${I} <${+D + 1}.0.0-0` : $ ? (i("replaceCaret pr", $), D === "0" ? S === "0" ? w = `>=${D}.${S}.${x}-${$} <${D}.${S}.${+x + 1}-0` : w = `>=${D}.${S}.${x}-${$} <${D}.${+S + 1}.0-0` : w = `>=${D}.${S}.${x}-${$} <${+D + 1}.0.0-0`) : (i("no pr"), D === "0" ? S === "0" ? w = `>=${D}.${S}.${x}${I} <${D}.${S}.${+x + 1}-0` : w = `>=${D}.${S}.${x}${I} <${D}.${+S + 1}.0-0` : w = `>=${D}.${S}.${x} <${+D + 1}.0.0-0`), i("caret return", w), w;
    });
  }, W = (T, A) => (i("replaceXRanges", T, A), T.split(/\s+/).map((j) => oe(j, A)).join(" ")), oe = (T, A) => {
    T = T.trim();
    const j = A.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
    return T.replace(j, (I, M, D, S, x, $) => {
      i("xRange", T, I, M, D, S, x, $);
      const w = R(D), v = w || R(S), b = v || R(x), O = b;
      return M === "=" && O && (M = ""), $ = A.includePrerelease ? "-0" : "", w ? M === ">" || M === "<" ? I = "<0.0.0-0" : I = "*" : M && O ? (v && (S = 0), x = 0, M === ">" ? (M = ">=", v ? (D = +D + 1, S = 0, x = 0) : (S = +S + 1, x = 0)) : M === "<=" && (M = "<", v ? D = +D + 1 : S = +S + 1), M === "<" && ($ = "-0"), I = `${M + D}.${S}.${x}${$}`) : v ? I = `>=${D}.0.0${$} <${+D + 1}.0.0-0` : b && (I = `>=${D}.${S}.0${$} <${D}.${+S + 1}.0-0`), i("xRange return", I), I;
    });
  }, fe = (T, A) => (i("replaceStars", T, A), T.trim().replace(c[u.STAR], "")), N = (T, A) => (i("replaceGTE0", T, A), T.trim().replace(c[A.includePrerelease ? u.GTE0PRE : u.GTE0], "")), L = (T) => (A, j, I, M, D, S, x, $, w, v, b, O) => (R(I) ? j = "" : R(M) ? j = `>=${I}.0.0${T ? "-0" : ""}` : R(D) ? j = `>=${I}.${M}.0${T ? "-0" : ""}` : S ? j = `>=${j}` : j = `>=${j}${T ? "-0" : ""}`, R(w) ? $ = "" : R(v) ? $ = `<${+w + 1}.0.0-0` : R(b) ? $ = `<${w}.${+v + 1}.0-0` : O ? $ = `<=${w}.${v}.${b}-${O}` : T ? $ = `<${w}.${v}.${+b + 1}-0` : $ = `<=${$}`, `${j} ${$}`.trim()), z = (T, A, j) => {
    for (let I = 0; I < T.length; I++)
      if (!T[I].test(A))
        return !1;
    if (A.prerelease.length && !j.includePrerelease) {
      for (let I = 0; I < T.length; I++)
        if (i(T[I].semver), T[I].semver !== a.ANY && T[I].semver.prerelease.length > 0) {
          const M = T[I].semver;
          if (M.major === A.major && M.minor === A.minor && M.patch === A.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return no;
}
var ro, id;
function ya() {
  if (id) return ro;
  id = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(l, p) {
      if (p = n(p), l instanceof e) {
        if (l.loose === !!p.loose)
          return l;
        l = l.value;
      }
      l = l.trim().split(/\s+/).join(" "), i("comparator", l, p), this.options = p, this.loose = !!p.loose, this.parse(l), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, i("comp", this);
    }
    parse(l) {
      const p = this.options.loose ? r[s.COMPARATORLOOSE] : r[s.COMPARATOR], d = l.match(p);
      if (!d)
        throw new TypeError(`Invalid comparator: ${l}`);
      this.operator = d[1] !== void 0 ? d[1] : "", this.operator === "=" && (this.operator = ""), d[2] ? this.semver = new o(d[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(l) {
      if (i("Comparator.test", l, this.options.loose), this.semver === t || l === t)
        return !0;
      if (typeof l == "string")
        try {
          l = new o(l, this.options);
        } catch {
          return !1;
        }
      return a(l, this.operator, this.semver, this.options);
    }
    intersects(l, p) {
      if (!(l instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new c(l.value, p).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new c(this.value, p).test(l.semver) : (p = n(p), p.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !p.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || a(this.semver, "<", l.semver, p) && this.operator.startsWith(">") && l.operator.startsWith("<") || a(this.semver, ">", l.semver, p) && this.operator.startsWith("<") && l.operator.startsWith(">")));
    }
  }
  ro = e;
  const n = cl, { safeRe: r, t: s } = Cr, a = nh, i = ha, o = Ce, c = rt();
  return ro;
}
const KT = rt(), JT = (t, e, n) => {
  try {
    e = new KT(e, n);
  } catch {
    return !1;
  }
  return e.test(t);
};
var ga = JT;
const XT = rt(), YT = (t, e) => new XT(t, e).set.map((n) => n.map((r) => r.value).join(" ").trim().split(" "));
var ZT = YT;
const QT = Ce, eP = rt(), tP = (t, e, n) => {
  let r = null, s = null, a = null;
  try {
    a = new eP(e, n);
  } catch {
    return null;
  }
  return t.forEach((i) => {
    a.test(i) && (!r || s.compare(i) === -1) && (r = i, s = new QT(r, n));
  }), r;
};
var nP = tP;
const rP = Ce, sP = rt(), aP = (t, e, n) => {
  let r = null, s = null, a = null;
  try {
    a = new sP(e, n);
  } catch {
    return null;
  }
  return t.forEach((i) => {
    a.test(i) && (!r || s.compare(i) === 1) && (r = i, s = new rP(r, n));
  }), r;
};
var iP = aP;
const so = Ce, oP = rt(), od = va, cP = (t, e) => {
  t = new oP(t, e);
  let n = new so("0.0.0");
  if (t.test(n) || (n = new so("0.0.0-0"), t.test(n)))
    return n;
  n = null;
  for (let r = 0; r < t.set.length; ++r) {
    const s = t.set[r];
    let a = null;
    s.forEach((i) => {
      const o = new so(i.semver.version);
      switch (i.operator) {
        case ">":
          o.prerelease.length === 0 ? o.patch++ : o.prerelease.push(0), o.raw = o.format();
        case "":
        case ">=":
          (!a || od(o, a)) && (a = o);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${i.operator}`);
      }
    }), a && (!n || od(n, a)) && (n = a);
  }
  return n && t.test(n) ? n : null;
};
var lP = cP;
const uP = rt(), pP = (t, e) => {
  try {
    return new uP(t, e).range || "*";
  } catch {
    return null;
  }
};
var dP = pP;
const fP = Ce, rh = ya(), { ANY: mP } = rh, hP = rt(), vP = ga, cd = va, ld = ul, yP = dl, gP = pl, xP = (t, e, n, r) => {
  t = new fP(t, r), e = new hP(e, r);
  let s, a, i, o, c;
  switch (n) {
    case ">":
      s = cd, a = yP, i = ld, o = ">", c = ">=";
      break;
    case "<":
      s = ld, a = gP, i = cd, o = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (vP(t, e, r))
    return !1;
  for (let u = 0; u < e.set.length; ++u) {
    const l = e.set[u];
    let p = null, d = null;
    if (l.forEach((f) => {
      f.semver === mP && (f = new rh(">=0.0.0")), p = p || f, d = d || f, s(f.semver, p.semver, r) ? p = f : i(f.semver, d.semver, r) && (d = f);
    }), p.operator === o || p.operator === c || (!d.operator || d.operator === o) && a(t, d.semver))
      return !1;
    if (d.operator === c && i(t, d.semver))
      return !1;
  }
  return !0;
};
var fl = xP;
const bP = fl, _P = (t, e, n) => bP(t, e, ">", n);
var wP = _P;
const EP = fl, $P = (t, e, n) => EP(t, e, "<", n);
var SP = $P;
const ud = rt(), RP = (t, e, n) => (t = new ud(t, n), e = new ud(e, n), t.intersects(e, n));
var OP = RP;
const TP = ga, PP = nt;
var kP = (t, e, n) => {
  const r = [];
  let s = null, a = null;
  const i = t.sort((l, p) => PP(l, p, n));
  for (const l of i)
    TP(l, e, n) ? (a = l, s || (s = l)) : (a && r.push([s, a]), a = null, s = null);
  s && r.push([s, null]);
  const o = [];
  for (const [l, p] of r)
    l === p ? o.push(l) : !p && l === i[0] ? o.push("*") : p ? l === i[0] ? o.push(`<=${p}`) : o.push(`${l} - ${p}`) : o.push(`>=${l}`);
  const c = o.join(" || "), u = typeof e.raw == "string" ? e.raw : String(e);
  return c.length < u.length ? c : e;
};
const pd = rt(), ml = ya(), { ANY: ao } = ml, ir = ga, hl = nt, AP = (t, e, n = {}) => {
  if (t === e)
    return !0;
  t = new pd(t, n), e = new pd(e, n);
  let r = !1;
  e: for (const s of t.set) {
    for (const a of e.set) {
      const i = jP(s, a, n);
      if (r = r || i !== null, i)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, NP = [new ml(">=0.0.0-0")], dd = [new ml(">=0.0.0")], jP = (t, e, n) => {
  if (t === e)
    return !0;
  if (t.length === 1 && t[0].semver === ao) {
    if (e.length === 1 && e[0].semver === ao)
      return !0;
    n.includePrerelease ? t = NP : t = dd;
  }
  if (e.length === 1 && e[0].semver === ao) {
    if (n.includePrerelease)
      return !0;
    e = dd;
  }
  const r = /* @__PURE__ */ new Set();
  let s, a;
  for (const f of t)
    f.operator === ">" || f.operator === ">=" ? s = fd(s, f, n) : f.operator === "<" || f.operator === "<=" ? a = md(a, f, n) : r.add(f.semver);
  if (r.size > 1)
    return null;
  let i;
  if (s && a) {
    if (i = hl(s.semver, a.semver, n), i > 0)
      return null;
    if (i === 0 && (s.operator !== ">=" || a.operator !== "<="))
      return null;
  }
  for (const f of r) {
    if (s && !ir(f, String(s), n) || a && !ir(f, String(a), n))
      return null;
    for (const m of e)
      if (!ir(f, String(m), n))
        return !1;
    return !0;
  }
  let o, c, u, l, p = a && !n.includePrerelease && a.semver.prerelease.length ? a.semver : !1, d = s && !n.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
  p && p.prerelease.length === 1 && a.operator === "<" && p.prerelease[0] === 0 && (p = !1);
  for (const f of e) {
    if (l = l || f.operator === ">" || f.operator === ">=", u = u || f.operator === "<" || f.operator === "<=", s) {
      if (d && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === d.major && f.semver.minor === d.minor && f.semver.patch === d.patch && (d = !1), f.operator === ">" || f.operator === ">=") {
        if (o = fd(s, f, n), o === f && o !== s)
          return !1;
      } else if (s.operator === ">=" && !ir(s.semver, String(f), n))
        return !1;
    }
    if (a) {
      if (p && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === p.major && f.semver.minor === p.minor && f.semver.patch === p.patch && (p = !1), f.operator === "<" || f.operator === "<=") {
        if (c = md(a, f, n), c === f && c !== a)
          return !1;
      } else if (a.operator === "<=" && !ir(a.semver, String(f), n))
        return !1;
    }
    if (!f.operator && (a || s) && i !== 0)
      return !1;
  }
  return !(s && u && !a && i !== 0 || a && l && !s && i !== 0 || d || p);
}, fd = (t, e, n) => {
  if (!t)
    return e;
  const r = hl(t.semver, e.semver, n);
  return r > 0 ? t : r < 0 || e.operator === ">" && t.operator === ">=" ? e : t;
}, md = (t, e, n) => {
  if (!t)
    return e;
  const r = hl(t.semver, e.semver, n);
  return r < 0 ? t : r > 0 || e.operator === "<" && t.operator === "<=" ? e : t;
};
var IP = AP;
const io = Cr, hd = ma, CP = Ce, vd = Qm, LP = Yn, FP = BO, DP = HO, UP = KO, zP = XO, MP = QO, qP = nT, BP = aT, VP = cT, GP = nt, HP = dT, WP = hT, KP = ll, JP = xT, XP = wT, YP = va, ZP = ul, QP = eh, ek = th, tk = pl, nk = dl, rk = nh, sk = GT, ak = ya(), ik = rt(), ok = ga, ck = ZT, lk = nP, uk = iP, pk = lP, dk = dP, fk = fl, mk = wP, hk = SP, vk = OP, yk = kP, gk = IP;
var xk = {
  parse: LP,
  valid: FP,
  clean: DP,
  inc: UP,
  diff: zP,
  major: MP,
  minor: qP,
  patch: BP,
  prerelease: VP,
  compare: GP,
  rcompare: HP,
  compareLoose: WP,
  compareBuild: KP,
  sort: JP,
  rsort: XP,
  gt: YP,
  lt: ZP,
  eq: QP,
  neq: ek,
  gte: tk,
  lte: nk,
  cmp: rk,
  coerce: sk,
  Comparator: ak,
  Range: ik,
  satisfies: ok,
  toComparators: ck,
  maxSatisfying: lk,
  minSatisfying: uk,
  minVersion: pk,
  validRange: dk,
  outside: fk,
  gtr: mk,
  ltr: hk,
  intersects: vk,
  simplifyRange: yk,
  subset: gk,
  SemVer: CP,
  re: io.re,
  src: io.src,
  tokens: io.t,
  SEMVER_SPEC_VERSION: hd.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: hd.RELEASE_TYPES,
  compareIdentifiers: vd.compareIdentifiers,
  rcompareIdentifiers: vd.rcompareIdentifiers
};
const En = /* @__PURE__ */ Vn(xk), bk = Object.prototype.toString, _k = "[object Uint8Array]", wk = "[object ArrayBuffer]";
function sh(t, e, n) {
  return t ? t.constructor === e ? !0 : bk.call(t) === n : !1;
}
function ah(t) {
  return sh(t, Uint8Array, _k);
}
function Ek(t) {
  return sh(t, ArrayBuffer, wk);
}
function $k(t) {
  return ah(t) || Ek(t);
}
function Sk(t) {
  if (!ah(t))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof t}\``);
}
function Rk(t) {
  if (!$k(t))
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof t}\``);
}
function oo(t, e) {
  if (t.length === 0)
    return new Uint8Array(0);
  e ?? (e = t.reduce((s, a) => s + a.length, 0));
  const n = new Uint8Array(e);
  let r = 0;
  for (const s of t)
    Sk(s), n.set(s, r), r += s.length;
  return n;
}
const ls = {
  utf8: new globalThis.TextDecoder("utf8")
};
function us(t, e = "utf8") {
  return Rk(t), ls[e] ?? (ls[e] = new globalThis.TextDecoder(e)), ls[e].decode(t);
}
function Ok(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof t}\``);
}
const Tk = new globalThis.TextEncoder();
function ps(t) {
  return Ok(t), Tk.encode(t);
}
Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
const co = "aes-256-cbc", At = () => /* @__PURE__ */ Object.create(null), yd = (t) => t !== void 0, lo = (t, e) => {
  const n = /* @__PURE__ */ new Set([
    "undefined",
    "symbol",
    "function"
  ]), r = typeof e;
  if (n.has(r))
    throw new TypeError(`Setting a value of type \`${r}\` for key \`${t}\` is not allowed as it's not supported by JSON`);
}, jt = "__internal__", uo = `${jt}.migrations.version`;
var Ft, Ze, Le, He, rn, sn, Fn, ct, $e, ih, oh, ch, lh, uh, ph, dh, fh;
class Pk {
  constructor(e = {}) {
    st(this, $e);
    J(this, "path");
    J(this, "events");
    st(this, Ft);
    st(this, Ze);
    st(this, Le);
    st(this, He, {});
    st(this, rn, !1);
    st(this, sn);
    st(this, Fn);
    st(this, ct);
    J(this, "_deserialize", (e) => JSON.parse(e));
    J(this, "_serialize", (e) => JSON.stringify(e, void 0, "	"));
    const n = ft(this, $e, ih).call(this, e);
    ze(this, Le, n), ft(this, $e, oh).call(this, n), ft(this, $e, lh).call(this, n), ft(this, $e, uh).call(this, n), this.events = new EventTarget(), ze(this, Ze, n.encryptionKey), this.path = ft(this, $e, ph).call(this, n), ft(this, $e, dh).call(this, n), n.watch && this._watch();
  }
  get(e, n) {
    if (Q(this, Le).accessPropertiesByDotNotation)
      return this._get(e, n);
    const { store: r } = this;
    return e in r ? r[e] : n;
  }
  set(e, n) {
    if (typeof e != "string" && typeof e != "object")
      throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof e}`);
    if (typeof e != "object" && n === void 0)
      throw new TypeError("Use `delete()` to clear values");
    if (this._containsReservedKey(e))
      throw new TypeError(`Please don't use the ${jt} key, as it's used to manage this module internal operations.`);
    const { store: r } = this, s = (a, i) => {
      if (lo(a, i), Q(this, Le).accessPropertiesByDotNotation)
        Jr(r, a, i);
      else {
        if (a === "__proto__" || a === "constructor" || a === "prototype")
          return;
        r[a] = i;
      }
    };
    if (typeof e == "object") {
      const a = e;
      for (const [i, o] of Object.entries(a))
        s(i, o);
    } else
      s(e, n);
    this.store = r;
  }
  has(e) {
    return Q(this, Le).accessPropertiesByDotNotation ? Wi(this.store, e) : e in this.store;
  }
  appendToArray(e, n) {
    lo(e, n);
    const r = Q(this, Le).accessPropertiesByDotNotation ? this._get(e, []) : e in this.store ? this.store[e] : [];
    if (!Array.isArray(r))
      throw new TypeError(`The key \`${e}\` is already set to a non-array value`);
    this.set(e, [...r, n]);
  }
  /**
      Reset items to their default values, as defined by the `defaults` or `schema` option.
  
      @see `clear()` to reset all items.
  
      @param keys - The keys of the items to reset.
      */
  reset(...e) {
    for (const n of e)
      yd(Q(this, He)[n]) && this.set(n, Q(this, He)[n]);
  }
  delete(e) {
    const { store: n } = this;
    Q(this, Le).accessPropertiesByDotNotation ? Z_(n, e) : delete n[e], this.store = n;
  }
  /**
      Delete all items.
  
      This resets known items to their default values, if defined by the `defaults` or `schema` option.
      */
  clear() {
    const e = At();
    for (const n of Object.keys(Q(this, He)))
      yd(Q(this, He)[n]) && (lo(n, Q(this, He)[n]), Q(this, Le).accessPropertiesByDotNotation ? Jr(e, n, Q(this, He)[n]) : e[n] = Q(this, He)[n]);
    this.store = e;
  }
  onDidChange(e, n) {
    if (typeof e != "string")
      throw new TypeError(`Expected \`key\` to be of type \`string\`, got ${typeof e}`);
    if (typeof n != "function")
      throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof n}`);
    return this._handleValueChange(() => this.get(e), n);
  }
  /**
      Watches the whole config object, calling `callback` on any changes.
  
      @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
      @returns A function, that when called, will unsubscribe.
      */
  onDidAnyChange(e) {
    if (typeof e != "function")
      throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof e}`);
    return this._handleStoreChange(e);
  }
  get size() {
    return Object.keys(this.store).filter((n) => !this._isReservedKeyPath(n)).length;
  }
  /**
      Get all the config as an object or replace the current config with an object.
  
      @example
      ```
      console.log(config.store);
      //=> {name: 'John', age: 30}
      ```
  
      @example
      ```
      config.store = {
          hello: 'world'
      };
      ```
      */
  get store() {
    var e;
    try {
      const n = ee.readFileSync(this.path, Q(this, Ze) ? null : "utf8"), r = this._decryptData(n), s = this._deserialize(r);
      return Q(this, rn) || this._validate(s), Object.assign(At(), s);
    } catch (n) {
      if ((n == null ? void 0 : n.code) === "ENOENT")
        return this._ensureDirectory(), At();
      if (Q(this, Le).clearInvalidConfig) {
        const r = n;
        if (r.name === "SyntaxError" || (e = r.message) != null && e.startsWith("Config schema violation:"))
          return At();
      }
      throw n;
    }
  }
  set store(e) {
    if (this._ensureDirectory(), !Wi(e, jt))
      try {
        const n = ee.readFileSync(this.path, Q(this, Ze) ? null : "utf8"), r = this._decryptData(n), s = this._deserialize(r);
        Wi(s, jt) && Jr(e, jt, yp(s, jt));
      } catch {
      }
    Q(this, rn) || this._validate(e), this._write(e), this.events.dispatchEvent(new Event("change"));
  }
  *[Symbol.iterator]() {
    for (const [e, n] of Object.entries(this.store))
      this._isReservedKeyPath(e) || (yield [e, n]);
  }
  /**
  Close the file watcher if one exists. This is useful in tests to prevent the process from hanging.
  */
  _closeWatcher() {
    Q(this, sn) && (Q(this, sn).close(), ze(this, sn, void 0)), Q(this, Fn) && (ee.unwatchFile(this.path), ze(this, Fn, !1)), ze(this, ct, void 0);
  }
  _decryptData(e) {
    if (!Q(this, Ze))
      return typeof e == "string" ? e : us(e);
    try {
      const n = e.slice(0, 16), r = Gt.pbkdf2Sync(Q(this, Ze), n, 1e4, 32, "sha512"), s = Gt.createDecipheriv(co, r, n), a = e.slice(17), i = typeof a == "string" ? ps(a) : a;
      return us(oo([s.update(i), s.final()]));
    } catch {
      try {
        const n = e.slice(0, 16), r = Gt.pbkdf2Sync(Q(this, Ze), n.toString(), 1e4, 32, "sha512"), s = Gt.createDecipheriv(co, r, n), a = e.slice(17), i = typeof a == "string" ? ps(a) : a;
        return us(oo([s.update(i), s.final()]));
      } catch {
      }
    }
    return typeof e == "string" ? e : us(e);
  }
  _handleStoreChange(e) {
    let n = this.store;
    const r = () => {
      const s = n, a = this.store;
      bl(a, s) || (n = a, e.call(this, a, s));
    };
    return this.events.addEventListener("change", r), () => {
      this.events.removeEventListener("change", r);
    };
  }
  _handleValueChange(e, n) {
    let r = e();
    const s = () => {
      const a = r, i = e();
      bl(i, a) || (r = i, n.call(this, i, a));
    };
    return this.events.addEventListener("change", s), () => {
      this.events.removeEventListener("change", s);
    };
  }
  _validate(e) {
    if (!Q(this, Ft) || Q(this, Ft).call(this, e) || !Q(this, Ft).errors)
      return;
    const r = Q(this, Ft).errors.map(({ instancePath: s, message: a = "" }) => `\`${s.slice(1)}\` ${a}`);
    throw new Error("Config schema violation: " + r.join("; "));
  }
  _ensureDirectory() {
    ee.mkdirSync(Z.dirname(this.path), { recursive: !0 });
  }
  _write(e) {
    let n = this._serialize(e);
    if (Q(this, Ze)) {
      const r = Gt.randomBytes(16), s = Gt.pbkdf2Sync(Q(this, Ze), r, 1e4, 32, "sha512"), a = Gt.createCipheriv(co, s, r);
      n = oo([r, ps(":"), a.update(ps(n)), a.final()]);
    }
    if (me.env.SNAP)
      ee.writeFileSync(this.path, n, { mode: Q(this, Le).configFileMode });
    else
      try {
        Xf(this.path, n, { mode: Q(this, Le).configFileMode });
      } catch (r) {
        if ((r == null ? void 0 : r.code) === "EXDEV") {
          ee.writeFileSync(this.path, n, { mode: Q(this, Le).configFileMode });
          return;
        }
        throw r;
      }
  }
  _watch() {
    if (this._ensureDirectory(), ee.existsSync(this.path) || this._write(At()), me.platform === "win32" || me.platform === "darwin") {
      Q(this, ct) ?? ze(this, ct, Yp(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 100 }));
      const e = Z.dirname(this.path), n = Z.basename(this.path);
      ze(this, sn, ee.watch(e, { persistent: !1, encoding: "utf8" }, (r, s) => {
        s && s !== n || typeof Q(this, ct) == "function" && Q(this, ct).call(this);
      }));
    } else
      Q(this, ct) ?? ze(this, ct, Yp(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 1e3 })), ee.watchFile(this.path, { persistent: !1 }, (e, n) => {
        typeof Q(this, ct) == "function" && Q(this, ct).call(this);
      }), ze(this, Fn, !0);
  }
  _migrate(e, n, r) {
    let s = this._get(uo, "0.0.0");
    const a = Object.keys(e).filter((o) => this._shouldPerformMigration(o, s, n));
    let i = structuredClone(this.store);
    for (const o of a)
      try {
        r && r(this, {
          fromVersion: s,
          toVersion: o,
          finalVersion: n,
          versions: a
        });
        const c = e[o];
        c == null || c(this), this._set(uo, o), s = o, i = structuredClone(this.store);
      } catch (c) {
        this.store = i;
        try {
          this._write(i);
        } catch {
        }
        const u = c instanceof Error ? c.message : String(c);
        throw new Error(`Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ${u}`);
      }
    (this._isVersionInRangeFormat(s) || !En.eq(s, n)) && this._set(uo, n);
  }
  _containsReservedKey(e) {
    return typeof e == "string" ? this._isReservedKeyPath(e) : !e || typeof e != "object" ? !1 : this._objectContainsReservedKey(e);
  }
  _objectContainsReservedKey(e) {
    if (!e || typeof e != "object")
      return !1;
    for (const [n, r] of Object.entries(e))
      if (this._isReservedKeyPath(n) || this._objectContainsReservedKey(r))
        return !0;
    return !1;
  }
  _isReservedKeyPath(e) {
    return e === jt || e.startsWith(`${jt}.`);
  }
  _isVersionInRangeFormat(e) {
    return En.clean(e) === null;
  }
  _shouldPerformMigration(e, n, r) {
    return this._isVersionInRangeFormat(e) ? n !== "0.0.0" && En.satisfies(n, e) ? !1 : En.satisfies(r, e) : !(En.lte(e, n) || En.gt(e, r));
  }
  _get(e, n) {
    return yp(this.store, e, n);
  }
  _set(e, n) {
    const { store: r } = this;
    Jr(r, e, n), this.store = r;
  }
}
Ft = new WeakMap(), Ze = new WeakMap(), Le = new WeakMap(), He = new WeakMap(), rn = new WeakMap(), sn = new WeakMap(), Fn = new WeakMap(), ct = new WeakMap(), $e = new WeakSet(), ih = function(e) {
  const n = {
    configName: "config",
    fileExtension: "json",
    projectSuffix: "nodejs",
    clearInvalidConfig: !1,
    accessPropertiesByDotNotation: !0,
    configFileMode: 438,
    ...e
  };
  if (!n.cwd) {
    if (!n.projectName)
      throw new Error("Please specify the `projectName` option.");
    n.cwd = n0(n.projectName, { suffix: n.projectSuffix }).config;
  }
  return typeof n.fileExtension == "string" && (n.fileExtension = n.fileExtension.replace(/^\.+/, "")), n;
}, oh = function(e) {
  if (!(e.schema ?? e.ajvOptions ?? e.rootSchema))
    return;
  if (e.schema && typeof e.schema != "object")
    throw new TypeError("The `schema` option must be an object.");
  const n = xO.default, r = new sO.Ajv2020({
    allErrors: !0,
    useDefaults: !0,
    ...e.ajvOptions
  });
  n(r);
  const s = {
    ...e.rootSchema,
    type: "object",
    properties: e.schema
  };
  ze(this, Ft, r.compile(s)), ft(this, $e, ch).call(this, e.schema);
}, ch = function(e) {
  const n = Object.entries(e ?? {});
  for (const [r, s] of n) {
    if (!s || typeof s != "object" || !Object.hasOwn(s, "default"))
      continue;
    const { default: a } = s;
    a !== void 0 && (Q(this, He)[r] = a);
  }
}, lh = function(e) {
  e.defaults && Object.assign(Q(this, He), e.defaults);
}, uh = function(e) {
  e.serialize && (this._serialize = e.serialize), e.deserialize && (this._deserialize = e.deserialize);
}, ph = function(e) {
  const n = typeof e.fileExtension == "string" ? e.fileExtension : void 0, r = n ? `.${n}` : "";
  return Z.resolve(e.cwd, `${e.configName ?? "config"}${r}`);
}, dh = function(e) {
  if (e.migrations) {
    ft(this, $e, fh).call(this, e), this._validate(this.store);
    return;
  }
  const n = this.store, r = Object.assign(At(), e.defaults ?? {}, n);
  this._validate(r);
  try {
    _l.deepEqual(n, r);
  } catch {
    this.store = r;
  }
}, fh = function(e) {
  const { migrations: n, projectVersion: r } = e;
  if (n) {
    if (!r)
      throw new Error("Please specify the `projectVersion` option.");
    ze(this, rn, !0);
    try {
      const s = this.store, a = Object.assign(At(), e.defaults ?? {}, s);
      try {
        _l.deepEqual(s, a);
      } catch {
        this._write(a);
      }
      this._migrate(n, r, e.beforeEachMigration);
    } finally {
      ze(this, rn, !1);
    }
  }
};
const { app: Ss, ipcMain: Lo, shell: kk } = zo;
let gd = !1;
const xd = () => {
  if (!Lo || !Ss)
    throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
  const t = {
    defaultCwd: Ss.getPath("userData"),
    appVersion: Ss.getVersion()
  };
  return gd || (Lo.on("electron-store-get-data", (e) => {
    e.returnValue = t;
  }), gd = !0), t;
};
class Ak extends Pk {
  constructor(e) {
    let n, r;
    if (me.type === "renderer") {
      const s = zo.ipcRenderer.sendSync("electron-store-get-data");
      if (!s)
        throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
      ({ defaultCwd: n, appVersion: r } = s);
    } else Lo && Ss && ({ defaultCwd: n, appVersion: r } = xd());
    e = {
      name: "config",
      ...e
    }, e.projectVersion || (e.projectVersion = r), e.cwd ? e.cwd = Z.isAbsolute(e.cwd) ? e.cwd : Z.join(n, e.cwd) : e.cwd = n, e.configName = e.name, delete e.name, super(e);
  }
  static initRenderer() {
    xd();
  }
  async openInEditor() {
    const e = await kk.openPath(this.path);
    if (e)
      throw new Error(e);
  }
}
const ue = new Ak();
function Nk() {
  const t = [
    Z.join(Z.dirname(process.execPath), "config.json"),
    Z.join(process.cwd(), "config.json")
  ];
  for (const e of t)
    if (Ih(e))
      try {
        const n = JSON.parse(Ch(e, "utf-8")), r = typeof n.setupToken == "string" ? n.setupToken.trim() : void 0, s = typeof n.organizationId == "string" ? n.organizationId.trim() : void 0, a = typeof n.token == "string" ? n.token.trim() : void 0, i = typeof n.stopPassword == "string" ? n.stopPassword : void 0, o = typeof i == "string" ? i.trim() : void 0;
        if (!r && !a && !s && !o) {
          re.warn(`Ignoring invalid config.json at ${e}: expected setupToken, token, organizationId or stopPassword`);
          continue;
        }
        return {
          setupToken: r,
          organizationId: s,
          token: a,
          stopPassword: o
        };
      } catch (n) {
        re.error(`Failed to read config.json at ${e}:`, n);
      }
  return null;
}
async function mh(t) {
  const e = `${K_}${J_}`;
  try {
    const n = await de.post(
      e,
      { setupToken: t.setupToken },
      {
        timeout: 8e3,
        validateStatus: () => !0,
        headers: { Accept: "application/json" }
      }
    );
    if (n.status < 200 || n.status >= 300)
      return re.warn("Setup token login rejected", {
        url: e,
        status: n.status,
        body: n.data
      }), null;
    const r = n.data, s = r == null ? void 0 : r.token, a = r == null ? void 0 : r.organizationId, i = typeof (r == null ? void 0 : r.stopPassword) == "string" ? r.stopPassword.trim() : void 0;
    if (typeof s == "string" && s.length > 0 && typeof a == "string" && a.length > 0)
      return { token: s, organizationId: a, stopPassword: i };
  } catch {
    re.error("Setup token login request failed", { url: e });
  }
  return null;
}
async function hh() {
  const t = Nk(), e = ue.get("config"), n = {
    sitradUrl: (e == null ? void 0 : e.sitradUrl) ?? "",
    username: (e == null ? void 0 : e.username) ?? "",
    password: (e == null ? void 0 : e.password) ?? "",
    stopPassword: (e == null ? void 0 : e.stopPassword) ?? "",
    organizationId: (e == null ? void 0 : e.organizationId) ?? "",
    token: (e == null ? void 0 : e.token) ?? "",
    setupToken: (e == null ? void 0 : e.setupToken) ?? ""
  }, r = t == null ? void 0 : t.token, s = t == null ? void 0 : t.organizationId, a = t == null ? void 0 : t.setupToken, i = t == null ? void 0 : t.stopPassword, o = (a ?? n.setupToken).trim();
  n.setupToken = o, n.stopPassword = i ?? n.stopPassword;
  const c = typeof n.token == "string" && n.token.trim().length > 0 && typeof n.organizationId == "string" && n.organizationId.trim().length > 0, u = typeof r == "string" && r.trim().length > 0 && typeof s == "string" && s.trim().length > 0;
  if (o && !c && !u) {
    const l = await mh(
      { setupToken: o }
    );
    if (!l) {
      ue.set("config", n), re.warn("Automatic setupToken login failed. Keeping previous authentication data.");
      return;
    }
    n.token = l.token, n.organizationId = l.organizationId, n.stopPassword = l.stopPassword || n.stopPassword, ue.set("config", n), re.info("Automatic authentication by setupToken completed.");
    return;
  }
  typeof r == "string" && r.length > 0 && typeof s == "string" && s.length > 0 && (n.token = r, n.organizationId = s), ue.set("config", n);
}
async function bd() {
  return await hh(), ue.get("config");
}
const vh = new Bt.Agent({ rejectUnauthorized: !1 });
async function jk(t) {
  const e = t.sitradUrl.replace(/\/+$/, "");
  return (await de.get(`${e}/instruments`, {
    auth: { username: t.username, password: t.password },
    httpsAgent: vh
  })).data.results || [];
}
async function Ik(t, e) {
  const n = e.sitradUrl.replace(/\/+$/, "");
  return (await de.get(`${n}/instruments/${t}/values`, {
    auth: { username: e.username, password: e.password },
    httpsAgent: vh
  })).data || {};
}
async function Ck(t) {
  const e = await jk(t);
  return Promise.all(e.map(async (n) => {
    var r;
    try {
      const s = await Ik(n.id, t);
      if (s.error)
        return {
          id: n.id,
          name: n.name || "instrument missing name",
          modelId: n.modelId ?? null,
          error: s.error
        };
      const a = ((r = s.results) == null ? void 0 : r.reduce(
        (i, o) => {
          var u, l;
          const c = (l = (u = o.values) == null ? void 0 : u[0]) == null ? void 0 : l.value;
          return c !== void 0 && (i[o.code] = c), i;
        },
        {}
      )) ?? {};
      return {
        ...n,
        ...a
      };
    } catch (s) {
      return {
        ...n,
        name: n.name || "instrument missing name",
        error: s instanceof Error ? s.message : String(s)
      };
    }
  }));
}
function yh(t) {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Lk(t) {
  if (typeof t == "number" && Number.isFinite(t)) return t;
  if (typeof t == "string") {
    const e = Number.parseFloat(t.replace(",", "."));
    return Number.isFinite(e) ? e : void 0;
  }
}
const Fk = {
  1: "Online",
  7: "Refrigeração",
  8: "Degelo"
};
function Dk(t) {
  const e = typeof t.ProcessStatusText == "string" ? t.ProcessStatusText.trim() : "";
  if (e) return e;
  const n = Lk(t.ProcessStatus);
  return n !== void 0 ? Fk[n] ?? String(n) : "";
}
let he = null, Rs = null, Os = null, Ts = null;
function gh() {
  return process.env.NODE_ENV === "development" ? Z.join(process.cwd(), "public", "LOGO.png") : Z.join(process.resourcesPath, "public", "LOGO.png");
}
function Uk(t) {
  Os = t.start, Ts = t.stop;
}
function zk() {
  if (he || vl(), !!he) {
    if (he.show(), he.focus(), he.webContents.isLoadingMainFrame()) {
      he.webContents.once("did-finish-load", () => {
        he == null || he.webContents.send("request-stop-auth");
      });
      return;
    }
    he.webContents.send("request-stop-auth");
  }
}
function en(t) {
  Rs == null || Rs.setContextMenu(Th.buildFromTemplate([
    {
      label: "Configuração",
      click: () => {
        he ? he.show() : vl();
      }
    },
    {
      label: t ? "Parar envio" : "Iniciar envio",
      click: () => {
        t ? Ts == null || Ts() : Os == null || Os();
      }
    },
    { type: "separator" },
    {
      label: "Sair",
      click: () => Dn.quit()
    }
  ]));
}
function vl() {
  he = new wr({
    width: 600,
    height: 700,
    center: !0,
    minWidth: 520,
    minHeight: 560,
    frame: !1,
    transparent: !0,
    backgroundColor: "#00000000",
    roundedCorners: !0,
    icon: gh(),
    webPreferences: {
      preload: Z.join(W_, "preload.mjs")
    }
  }), vp ? he.loadURL(vp) : he.loadFile(Z.join(H_, "index.html")), he.once("ready-to-show", () => {
    he == null || he.center();
  }), he.on("close", (t) => {
    t.preventDefault(), he && he.hide();
  });
}
function Mk() {
  const t = gh(), e = Rh.createFromPath(t);
  Rs = new Oh(e);
}
let ce = null, Ln = null, yt = !1, gr = 0, Ps = null, _d = {};
const Fo = /* @__PURE__ */ new Map(), qk = new Bt.Agent({ rejectUnauthorized: !1 });
function Bk(t) {
  Ps = t;
}
function ht(t) {
  Ps == null || Ps(t);
}
function Vk(t) {
  return t ? /(already.*(agent|collector).*(running|online))|(organization.*already.*running)|(ja.*(agente|coletor).*(rodando|executando))/i.test(t.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) : !1;
}
function Do(t) {
  !ce || ce.readyState !== lt.OPEN || ce.send(JSON.stringify(t));
}
function wd(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Gk(t) {
  return t === "SET_DEFROST" || t === "SET_FAN" || t === "SET_SETPOINT" || t === "SET_DIFFERENTIAL";
}
function Hk(t) {
  return t === 72 ? "F02" : t === 73 ? "F05" : null;
}
async function xa(t, e, n) {
  const r = ue.get("config");
  if (!(r != null && r.sitradUrl) || !r.username || !r.password) {
    re.warn(`Skipping Sitrad ${e} call for idSitrad=${t}: missing Sitrad credentials in store config`);
    return;
  }
  const s = r.sitradUrl.replace(/\/+$/, "");
  await de.post(
    `${s}/instruments/${t}/${e}`,
    n,
    {
      auth: { username: r.username, password: r.password },
      httpsAgent: qk,
      timeout: 8e3
    }
  );
}
async function Wk(t, e, n) {
  const r = Hk(n);
  if (!r) {
    re.warn(`Skipping SET_DIFFERENTIAL for idSitrad=${t}: unsupported model=${n ?? "unknown"}`);
    return;
  }
  await xa(t, "functions", {
    code: r,
    value: e,
    showSpc: !0
  });
}
async function Kk(t, e, n) {
  let r = null;
  if (n === 73 ? r = {
    code: "INV",
    value: e ? 0 : 1,
    groupCode: null,
    showSpc: !0
  } : n === 72 && (r = {
    code: "DEFR",
    value: 0,
    groupCode: null,
    showSpc: !0
  }), !r) {
    re.warn(`Skipping SET_DEFROST for idSitrad=${t}: unsupported model=${n ?? "unknown"}`);
    return;
  }
  await xa(t, "commands", r);
}
async function Jk(t, e, n) {
  if (n !== 72) {
    re.warn(`Skipping SET_FAN for idSitrad=${t}: unsupported model=${n ?? "unknown"}`);
    return;
  }
  await xa(t, "functions", {
    code: "F21",
    value: e ? 7 : 4,
    showSpc: !0
  });
}
function Xk(t) {
  return t === 72 ? "F31" : t === 73 ? "SET" : "F01";
}
async function Yk(t, e, n) {
  const r = {
    code: Xk(n),
    value: e,
    showSpc: !0
  };
  await xa(t, "functions", r);
}
async function Zk(t) {
  if (typeof t.idSitrad != "number") {
    re.warn(`Ignoring INSTRUMENT_COMMAND without idSitrad for instrumentId=${t.instrumentId}`);
    return;
  }
  const n = { ...Fo.get(t.idSitrad) ?? {} };
  if (t.action === "SET_DEFROST" && typeof t.value == "boolean" && (n.forceDefrost = t.value), t.action === "SET_FAN" && typeof t.value == "boolean" && (n.forceFan = t.value), t.action === "SET_SETPOINT" && typeof t.value == "number" && (n.setPoint = t.value), t.action === "SET_DIFFERENTIAL" && typeof t.value == "number" && (n.differential = t.value), Fo.set(t.idSitrad, n), t.action === "SET_DIFFERENTIAL" && typeof t.value == "number") {
    const r = t.modelId;
    try {
      await Wk(t.idSitrad, t.value, r);
    } catch (s) {
      re.error(
        `Failed to apply SET_DIFFERENTIAL in Sitrad idSitrad=${t.idSitrad} model=${r ?? "unknown"}:`,
        s
      );
    }
  }
  if (t.action === "SET_DEFROST" && typeof t.value == "boolean") {
    const r = t.modelId;
    try {
      await Kk(t.idSitrad, t.value, r);
    } catch (s) {
      re.error(
        `Failed to apply SET_DEFROST in Sitrad idSitrad=${t.idSitrad} model=${r ?? "unknown"}:`,
        s
      );
    }
  }
  if (t.action === "SET_FAN" && typeof t.value == "boolean") {
    const r = t.modelId;
    try {
      await Jk(t.idSitrad, t.value, r);
    } catch (s) {
      re.error(
        `Failed to apply SET_FAN in Sitrad idSitrad=${t.idSitrad} model=${r ?? "unknown"}:`,
        s
      );
    }
  }
  if (t.action === "SET_SETPOINT" && typeof t.value == "number") {
    const r = t.modelId;
    try {
      await Yk(t.idSitrad, t.value, r);
    } catch (s) {
      re.error(
        `Failed to apply SET_SETPOINT in Sitrad idSitrad=${t.idSitrad} model=${r ?? "unknown"}:`,
        s
      );
    }
  }
  re.info(`INSTRUMENT_COMMAND received action=${t.action} idSitrad=${t.idSitrad}`);
}
function Qk(t) {
  const e = Fo.get(t.id);
  return e ? {
    ...t,
    IsDefrost: e.forceDefrost ?? t.IsDefrost,
    IsOutputDefr1: e.forceDefrost ?? t.IsOutputDefr1,
    IsOutputFan: e.forceFan ?? t.IsOutputFan,
    CurrentSetpoint: e.setPoint ?? t.CurrentSetpoint,
    FncSetpoint: e.setPoint ?? t.FncSetpoint,
    Setpoint1RelativeTemp: e.setPoint ?? t.Setpoint1RelativeTemp,
    CurrentDifferential: e.differential ?? t.CurrentDifferential,
    FncDifferential: e.differential ?? t.FncDifferential
  } : t;
}
function eA(t, e) {
  return t.map((n) => ({
    idSitrad: n.id,
    name: n.name,
    slug: yh(n.name),
    model: n.modelId ?? 0,
    type: n.modelId === 67 ? "PRESSURE" : "TEMPERATURE",
    organizationId: e
  }));
}
function tA(t, e) {
  function n(r) {
    switch (r.modelId) {
      case 67:
        return r.GasPressure ?? 0;
      case 73:
      case 78:
        return r.Temperature ?? 0;
      default:
        return r.Sensor1 ?? 0;
    }
  }
  return t.map((r) => {
    const s = Qk(r);
    return {
      idSitrad: s.id,
      name: s.name,
      slug: yh(s.name),
      model: s.modelId ?? 0,
      type: s.modelId === 67 ? "PRESSURE" : "TEMPERATURE",
      value: n(s),
      status: Dk(s),
      setPoint: Number(s.modelId === 73 ? s.FncSetpoint : s.modelId === 78 ? s.Setpoint1RelativeTemp : s.CurrentSetpoint ?? 0),
      differential: s.CurrentDifferential ?? 0,
      isSensorError: !!(s.modelId === 67 ? s.IsErrorPressureSensor : s.modelId === 73 ? s.IsSensorError : s.IsErrorS1),
      error: !!s.error,
      isFan: !!s.IsOutputFan,
      organizationId: e
    };
  });
}
async function nA(t, e) {
  for (; ue.get("isRunning") && e === gr; ) {
    const n = Date.now();
    if ((ce == null ? void 0 : ce.readyState) !== lt.OPEN || !yt) {
      await wd(500);
      continue;
    }
    try {
      const a = await Ck(t);
      if (!ue.get("isRunning") || e !== gr)
        break;
      const i = eA(a, t.organizationId);
      i.length && (ce == null ? void 0 : ce.readyState) === lt.OPEN && yt && Do({
        type: "INSTRUMENT_CREATE",
        payload: i
      });
      const o = tA(a, t.organizationId);
      o.length && (ce == null ? void 0 : ce.readyState) === lt.OPEN && yt && Do({
        type: "INSTRUMENT_READING",
        payload: o
      });
    } catch (a) {
      re.error("Failed collector polling cycle:", a);
    }
    const r = Date.now() - n, s = Math.max(0, 5e3 - r);
    await wd(s);
  }
}
function Ed() {
  Ln || (Ln = setTimeout(() => {
    Ln = null, ue.get("isRunning") && ba();
  }, 3e3));
}
async function ba() {
  var n;
  gr += 1;
  const t = gr;
  let e = await bd();
  if (e) {
    if (!e.sitradUrl || !e.username || !e.password) {
      re.warn("Collector not started: missing Sitrad credentials."), ue.set("isRunning", !1), en(!1), ht({ status: "error", message: "Falha ao iniciar: credenciais do Sitrad ausentes." });
      return;
    }
    if ((!e.token || !e.organizationId) && ((n = e.setupToken) != null && n.trim())) {
      const r = await mh({ setupToken: e.setupToken.trim() });
      if (r) {
        const s = ue.get("config");
        ue.set("config", {
          sitradUrl: (s == null ? void 0 : s.sitradUrl) ?? e.sitradUrl,
          username: (s == null ? void 0 : s.username) ?? e.username,
          password: (s == null ? void 0 : s.password) ?? e.password,
          stopPassword: r.stopPassword ?? (s == null ? void 0 : s.stopPassword) ?? e.stopPassword ?? "",
          setupToken: e.setupToken.trim(),
          token: r.token,
          organizationId: r.organizationId
        }), e = await bd() ?? e;
      }
    }
    if (!e.token || !e.organizationId) {
      re.warn("Collector not started: missing activation token authentication."), ue.set("isRunning", !1), en(!1), ht({ status: "error", message: "Falha ao iniciar: autenticação do dispositivo inválida." });
      return;
    }
    ue.set("isRunning", !0), en(!0), re.info("Collector started"), ht({ status: "running", message: "Conectando ao servidor do coletor..." }), ce && ce.close(), yt = !1, re.info(`Connecting to collector WS: ${$o}`), ce = new lt($o), ce.on("open", async () => {
      re.info("WS connected"), _d = {};
      const r = {
        token: e.token
      };
      typeof e.organizationId == "string" && e.organizationId.trim().length > 0 && (r.organizationId = e.organizationId.trim()), Do({
        type: "AUTH",
        payload: r
      });
    }), ce.on("message", (r) => {
      var s;
      try {
        const a = JSON.parse(r.toString());
        if (a.type === "AGENT_ALREADY_RUNNING") {
          const i = a.message || "Ja existe um agente ativo para esta organizacao.";
          yt = !1, ue.set("isRunning", !1), en(!1), ht({ status: "error", code: "AGENT_ALREADY_RUNNING", message: i }), ce == null || ce.close();
          return;
        }
        if (a.type === "AUTH_ERROR") {
          yt = !1, ue.set("isRunning", !1), en(!1);
          const i = Vk(a.message), o = a.message || "Token inválido.";
          re.error(`WS auth error: ${o}`), ht({
            status: "error",
            code: i ? "AGENT_ALREADY_RUNNING" : void 0,
            message: i ? o : `Erro de autenticacao: ${o}`
          }), ce == null || ce.close();
          return;
        }
        if (a.type === "AUTH_OK") {
          yt = !0, ht({ status: "running", message: "Enviando dados..." }), nA(e, t).catch((i) => {
            re.error("Collector loop failed:", i), ht({ status: "error", message: "Falha no loop de coleta." });
          });
          return;
        }
        if (a.type === "INSTRUMENT_CREATED") {
          a.payload.forEach((i) => {
            _d[i.slug] = i.id;
          });
          return;
        }
        a.type === "INSTRUMENT_COMMAND" && Gk((s = a.payload) == null ? void 0 : s.action) && Zk(a.payload);
      } catch (a) {
        re.error("Invalid WS message received:", a);
      }
    }), ce.on("close", () => {
      yt = !1, Ed();
    }), ce.on("error", (r) => {
      re.error("Collector WS error:", r), ht({ status: "error", message: "Conexão com o servidor interrompida." }), Ed();
    });
  }
}
function rA() {
  Ln && (clearTimeout(Ln), Ln = null), gr += 1, ue.set("isRunning", !1), en(!1), ce && ce.close(), yt = !1, re.info("Collector stopped"), ht({ status: "stopped", message: "Envio interrompido." });
}
process.on("uncaughtException", (t) => {
  var e;
  (e = re == null ? void 0 : re.error) == null || e.call(re, "uncaughtException:", t);
});
process.on("unhandledRejection", (t) => {
  var e;
  (e = re == null ? void 0 : re.error) == null || e.call(re, "unhandledRejection:", t);
});
Dn.disableHardwareAcceleration();
const sA = new Bt.Agent({ rejectUnauthorized: !1 });
function aA(t) {
  wr.getAllWindows().forEach((n) => {
    n.isDestroyed() || n.webContents.send("collector-runtime-event", t);
  });
}
Bk(aA);
function iA(t = 3e3) {
  return new Promise((e, n) => {
    let r = null, s = !1;
    const a = setTimeout(() => {
      s || (s = !0, r && (r.readyState === lt.OPEN || r.readyState === lt.CONNECTING) && r.terminate(), n(new Error("timeout")));
    }, t), i = (o) => {
      s || (s = !0, clearTimeout(a), r && (r.readyState === lt.OPEN || r.readyState === lt.CONNECTING) && r.terminate(), n(o));
    };
    r = new lt($o), r.once("open", () => {
      s || (s = !0, clearTimeout(a), r == null || r.close(), e());
    }), r.once("error", (o) => {
      i(o instanceof Error ? o : new Error(String(o)));
    });
  });
}
Uk({
  start: () => {
    ba();
  },
  stop: () => {
    zk();
  }
});
$t.handle("get-config", () => ue.get("config"));
$t.handle("get-state", () => ue.get("isRunning"));
$t.handle("save-config", (t, e) => {
  const n = ue.get("config");
  ue.set("config", {
    sitradUrl: (e == null ? void 0 : e.sitradUrl) ?? (n == null ? void 0 : n.sitradUrl) ?? "",
    username: (e == null ? void 0 : e.username) ?? (n == null ? void 0 : n.username) ?? "",
    password: (e == null ? void 0 : e.password) ?? (n == null ? void 0 : n.password) ?? "",
    stopPassword: (e == null ? void 0 : e.stopPassword) ?? (n == null ? void 0 : n.stopPassword) ?? "",
    organizationId: (e == null ? void 0 : e.organizationId) ?? (n == null ? void 0 : n.organizationId) ?? "",
    token: (e == null ? void 0 : e.token) ?? (n == null ? void 0 : n.token) ?? "",
    setupToken: (e == null ? void 0 : e.setupToken) ?? (n == null ? void 0 : n.setupToken) ?? ""
  });
});
$t.handle("start", async () => ba());
$t.handle("stop-with-auth", (t, e) => {
  var r;
  const n = (r = ue.get("config")) == null ? void 0 : r.stopPassword;
  return n ? e !== n ? (re.warn("Stop denied: invalid stop authentication password"), { success: !1, error: "Senha inválida." }) : (rA(), { success: !0 }) : { success: !1, error: "Senha de parada não configurada para validação." };
});
$t.handle("window-minimize", (t) => {
  var e;
  (e = wr.fromWebContents(t.sender)) == null || e.minimize();
});
$t.handle("window-toggle-maximize", (t) => {
  const e = wr.fromWebContents(t.sender);
  e && (e.isMaximized() ? e.unmaximize() : e.maximize());
});
$t.handle("window-close", (t) => {
  const e = wr.fromWebContents(t.sender);
  e && (e.removeAllListeners("close"), e.close());
});
$t.handle("test-sitrad-api", async (t, e) => {
  try {
    const n = ue.get("config");
    ue.set("config", {
      sitradUrl: (e == null ? void 0 : e.sitradUrl) ?? (n == null ? void 0 : n.sitradUrl) ?? "",
      username: (e == null ? void 0 : e.username) ?? (n == null ? void 0 : n.username) ?? "",
      password: (e == null ? void 0 : e.password) ?? (n == null ? void 0 : n.password) ?? "",
      stopPassword: (e == null ? void 0 : e.stopPassword) ?? (n == null ? void 0 : n.stopPassword) ?? "",
      setupToken: (e == null ? void 0 : e.setupToken) ?? (n == null ? void 0 : n.setupToken) ?? "",
      organizationId: (e == null ? void 0 : e.organizationId) ?? (n == null ? void 0 : n.organizationId) ?? "",
      token: (e == null ? void 0 : e.token) ?? (n == null ? void 0 : n.token) ?? ""
    });
    const r = e.sitradUrl.replace(/\/+$/, "");
    if ((await de.get(`${r}/instruments`, {
      auth: { username: e.username, password: e.password },
      httpsAgent: sA,
      timeout: 3e3,
      validateStatus: () => !0,
      headers: {
        Accept: "application/json"
      }
    })).status !== 200)
      return { success: !1, error: "Erro na API" };
    try {
      await iA(3e3);
    } catch (a) {
      return { success: !1, error: `Erro ao conectar no App - ${a.message}` };
    }
    return { success: !0 };
  } catch (n) {
    return { success: !1, error: `Erro ao conectar na API - ${n.message}` };
  }
});
Dn.setLoginItemSettings({
  openAtLogin: !0,
  path: process.execPath
});
Dn.whenReady().then(async () => {
  const t = process.env.NODE_ENV === "development" ? Z.join(process.cwd(), "public", "LOGO.png") : Z.join(process.resourcesPath, "public", "LOGO.png");
  process.platform === "darwin" && Dn.dock.setIcon(t), await hh(), Mk(), vl();
  const e = ue.get("config"), n = !!ue.get("isRunning");
  n && e && ba(), en(n);
});
Dn.on("window-all-closed", (t) => t.preventDefault());
