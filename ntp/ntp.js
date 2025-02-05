import { a as lo, b as ro, c as ao, d as zt } from "../chunk-D5HUI7OU.js";
import { a as oo, b as so, e as co } from "../chunk-EWDLAJ62.js";
import "../chunk-PV4OLDEG.js";
import { b as vi } from "../chunk-SD2LYQKA.js";
import "../chunk-TA24QOID.js";
import { j as bi } from "../chunk-L7L2JV5F.js";
import {
  A as to,
  B as no,
  C as Ye,
  a as ji,
  b as Ni,
  c as Hi,
  d as Fi,
  e as Vi,
  g as Gi,
  h as Ri,
  i as Zi,
  j as Ki,
  k as Yi,
  l as Ze,
  m as Xi,
  y as at,
  z as eo,
} from "../chunk-MBGC2IY3.js";
import {
  a as St,
  b as Mi,
  j as Ei,
  l as Di,
  n as Ui,
  o as Wi,
  p as Pt,
  s as Oi,
  u as Qe,
  y as Le,
} from "../chunk-RLVH4ZXF.js";
import { a as Bi, b as Ji, d as Ke } from "../chunk-2P36QRXC.js";
import {
  $ as qe,
  A as Pe,
  Aa as rt,
  B as k,
  Ba as Li,
  C as G,
  Ca as Ai,
  D as V,
  E as x,
  F as ae,
  Fa as $i,
  G as Q,
  H as He,
  Ha as Ti,
  I as xt,
  Ia as Ue,
  J as s,
  Ja as It,
  Ka as Bt,
  L as Y,
  Ma as qi,
  N as Se,
  P as te,
  Pa as We,
  Q as xi,
  R as $e,
  S as Te,
  Sa as Oe,
  Ta as Qi,
  U as ot,
  V as ve,
  Va as io,
  Y as pe,
  Z as fe,
  a as ki,
  aa as U,
  b as j,
  ba as W,
  ca as _,
  da as v,
  e as he,
  f as wi,
  fa as ze,
  g as T,
  ga as Me,
  h as yi,
  i as it,
  ja as Ee,
  k as re,
  ka as B,
  l as ke,
  la as P,
  m as we,
  ma as z,
  n as ye,
  na as q,
  o as Ce,
  oa as E,
  pa as Si,
  q as Ct,
  ra as Ie,
  s as be,
  sa as Ii,
  ua as ce,
  v as Ci,
  va as De,
  w as f,
  wa as Pi,
  x as R,
  xa as zi,
  y,
  ya as Re,
  z as C,
  za as lt,
} from "../chunk-RRSEJBGM.js";
import { a as gi, d as wt } from "../chunk-ZEHGPMWH.js";
import { e as hi, h as Xe } from "../chunk-PDVOFPAZ.js";
import { d as M, f as kt, l as yt } from "../chunk-MKPTDAGU.js";
import { a as mi } from "../chunk-XYG7YXOD.js";
import "../chunk-3ZYQDD7H.js";
import { da as bt, k as ht, l as tt, n as nt } from "../chunk-OBPWZYQZ.js";
import { a as xe, d as _i } from "../chunk-QGLCH3FC.js";
import { a as vt } from "../chunk-MQVGYSOB.js";
import { f as A, l as Ae } from "../chunk-LGMSABOQ.js";
A();
A();
A();
A();
var fa = async () => {
    let e = (
      await new Promise((t) => {
        chrome.tabs.getCurrent(t);
      })
    )?.id;
    return (
      Ae(e !== void 0, "Tab id must be defined to get client info for NTP"),
      { type: "ntp", tabId: e }
    );
  },
  $ = Si({ id: "gateway-for-ntp", clientInfo: fa() });
function da(o) {
  R(
    o,
    "svelte-bzvkl7",
    ".container.svelte-bzvkl7{position:fixed;inset:0;padding:60px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;z-index:999;pointer-events:none}.product-hunt-popup.svelte-bzvkl7{pointer-events:all;display:flex}.image-wrapper.svelte-bzvkl7{display:flex;flex:1;min-width:188px;min-height:188px}.content.svelte-bzvkl7{line-height:19px;margin-left:10px;padding:30px 30px 22px 16px}.header.svelte-bzvkl7{font-size:20px;font-weight:700}.description.svelte-bzvkl7{margin-top:15px;margin-bottom:25px;font-size:16px;font-weight:400}.close-button.svelte-bzvkl7{position:absolute;z-index:1;top:4px;right:4px;display:flex;padding:8px}.product-hunt-popup-container{overflow:hidden}"
  );
}
function ma(o) {
  let e;
  return {
    c() {
      e = V("Click here to learn how");
    },
    m(t, n) {
      y(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function _a(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h, b;
  return (
    (p = new ce({
      props: {
        mod: "primary",
        $$slots: { default: [ma] },
        $$scope: { ctx: o },
      },
    })),
    p.$on("click", o[0]),
    (m = new We({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (t.innerHTML =
            '<img src="/shared/assets/images/before_product_hunt_popup.png" alt="Product hunt logo"/>'),
          (n = x()),
          (i = k("div")),
          (l = k("div")),
          (l.textContent = "We need your support"),
          (r = x()),
          (c = k("p")),
          (c.textContent = `In the last year we've made a lot of improvements to Sidekick. Next week we are going live
          on Product Hunt and we need your support.`),
          (a = x()),
          B(p.$$.fragment),
          (u = x()),
          (d = k("button")),
          B(m.$$.fragment),
          s(t, "class", "image-wrapper svelte-bzvkl7"),
          s(l, "class", "header svelte-bzvkl7"),
          s(c, "class", "description svelte-bzvkl7"),
          s(i, "class", "content svelte-bzvkl7"),
          s(d, "class", "close-button svelte-bzvkl7"),
          s(e, "class", "product-hunt-popup svelte-bzvkl7");
      },
      m(w, S) {
        y(w, e, S),
          f(e, t),
          f(e, n),
          f(e, i),
          f(i, l),
          f(i, r),
          f(i, c),
          f(i, a),
          P(p, i, null),
          f(e, u),
          f(e, d),
          P(m, d, null),
          (g = !0),
          h || ((b = Q(d, "click", o[1])), (h = !0));
      },
      p(w, S) {
        let L = {};
        S & 4 && (L.$$scope = { dirty: S, ctx: w }), p.$set(L);
      },
      i(w) {
        g || (_(p.$$.fragment, w), _(m.$$.fragment, w), (g = !0));
      },
      o(w) {
        v(p.$$.fragment, w), v(m.$$.fragment, w), (g = !1);
      },
      d(w) {
        w && C(e), z(p), z(m), (h = !1), b();
      },
    }
  );
}
function ga(o) {
  let e, t, n;
  return (
    (t = new Ie({
      props: {
        className: "product-hunt-popup-container",
        width: "min(60vw, 760px)",
        minWidth: 620,
        $$slots: { default: [_a] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "container svelte-bzvkl7");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p(i, [l]) {
        let r = {};
        l & 4 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function ha(o) {
  return [
    () => {
      $.actions.openBeforeLanding(), $.actions.closeProductHuntPopup();
    },
    () => {
      $.actions.closeProductHuntPopup();
    },
  ];
}
var Mt = class extends E {
    constructor(e) {
      super(), q(this, e, ha, ga, T, {}, da);
    }
  },
  po = Mt;
A();
function ba(o) {
  R(
    o,
    "svelte-bzvkl7",
    ".container.svelte-bzvkl7{position:fixed;inset:0;padding:60px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;z-index:999;pointer-events:none}.product-hunt-popup.svelte-bzvkl7{pointer-events:all;display:flex}.image-wrapper.svelte-bzvkl7{display:flex;flex:1;min-width:188px;min-height:188px}.content.svelte-bzvkl7{line-height:19px;margin-left:10px;padding:30px 30px 22px 16px}.header.svelte-bzvkl7{font-size:20px;font-weight:700}.description.svelte-bzvkl7{margin-top:15px;margin-bottom:25px;font-size:16px;font-weight:400}.close-button.svelte-bzvkl7{position:absolute;z-index:1;top:4px;right:4px;display:flex;padding:8px}.product-hunt-popup-container{overflow:hidden}"
  );
}
function va(o) {
  let e;
  return {
    c() {
      e = V("Support sidekick");
    },
    m(t, n) {
      y(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function ka(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h, b;
  return (
    (p = new ce({
      props: {
        mod: "primary",
        $$slots: { default: [va] },
        $$scope: { ctx: o },
      },
    })),
    p.$on("click", o[0]),
    (m = new We({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (t.innerHTML =
            '<img src="/shared/assets/images/product_hunt_live_popup.png" alt="Product hunt logo"/>'),
          (n = x()),
          (i = k("div")),
          (l = k("div")),
          (l.textContent = "Support us on Product Hunt"),
          (r = x()),
          (c = k("p")),
          (c.textContent = `We are live on Product Hunt! Please, vote for Sidekick and all the work we\u2019ve done lately
          to make you focused and unstoppable.`),
          (a = x()),
          B(p.$$.fragment),
          (u = x()),
          (d = k("button")),
          B(m.$$.fragment),
          s(t, "class", "image-wrapper svelte-bzvkl7"),
          s(l, "class", "header svelte-bzvkl7"),
          s(c, "class", "description svelte-bzvkl7"),
          s(i, "class", "content svelte-bzvkl7"),
          s(d, "class", "close-button svelte-bzvkl7"),
          s(e, "class", "product-hunt-popup svelte-bzvkl7");
      },
      m(w, S) {
        y(w, e, S),
          f(e, t),
          f(e, n),
          f(e, i),
          f(i, l),
          f(i, r),
          f(i, c),
          f(i, a),
          P(p, i, null),
          f(e, u),
          f(e, d),
          P(m, d, null),
          (g = !0),
          h || ((b = Q(d, "click", o[1])), (h = !0));
      },
      p(w, S) {
        let L = {};
        S & 4 && (L.$$scope = { dirty: S, ctx: w }), p.$set(L);
      },
      i(w) {
        g || (_(p.$$.fragment, w), _(m.$$.fragment, w), (g = !0));
      },
      o(w) {
        v(p.$$.fragment, w), v(m.$$.fragment, w), (g = !1);
      },
      d(w) {
        w && C(e), z(p), z(m), (h = !1), b();
      },
    }
  );
}
function wa(o) {
  let e, t, n;
  return (
    (t = new Ie({
      props: {
        className: "product-hunt-popup-container",
        width: "min(60vw, 760px)",
        minWidth: 620,
        $$slots: { default: [ka] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "container svelte-bzvkl7");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p(i, [l]) {
        let r = {};
        l & 4 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function ya(o) {
  return [
    () => {
      $.actions.openLiveLanding(), $.actions.closeProductHuntPopup();
    },
    () => {
      $.actions.closeProductHuntPopup();
    },
  ];
}
var Lt = class extends E {
    constructor(e) {
      super(), q(this, e, ya, wa, T, {}, ba);
    }
  },
  uo = Lt;
A();
A();
var fo = (o) => {
  let e = new Image(),
    t = document.createElement("canvas"),
    n = t.getContext("2d");
  return (
    Ae(n, "Canvas context can not be null"),
    new Promise((i) => {
      (e.onload = () => {
        (t.width = e.naturalWidth),
          (t.height = e.naturalHeight),
          n.drawImage(e, 0, 0),
          t.toBlob((l) => i(l), "image/jpeg", 0.75);
      }),
        (e.src = o),
        (e.crossOrigin = "anonymous");
    })
  );
};
A();
var mo = (o) => {
  let e = new FileReader();
  return (
    e.readAsDataURL(o),
    new Promise((t) => {
      e.onloadend = () => {
        t(e.result ? String(e.result) : null);
      };
    })
  );
};
A();
function xa(o) {
  R(
    o,
    "svelte-7nct2h",
    ".clock.svelte-7nct2h{display:flex;align-items:center;width:100%;height:72px;margin:0 auto 18px}.time.svelte-7nct2h{margin-right:19px;font-size:50px;line-height:73px;word-spacing:-15px;white-space:nowrap}.date.svelte-7nct2h{font-size:18px;line-height:24px;opacity:0.8;white-space:nowrap}"
  );
}
function Sa(o) {
  let e,
    t,
    n = o[4](o[1].format(o[0])) + "",
    i,
    l,
    r,
    c,
    a = o[2].format(o[0]) + "",
    p,
    u,
    d,
    m,
    g = o[0].getFullYear() + "",
    h;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (i = V(n)),
        (l = x()),
        (r = k("div")),
        (c = k("div")),
        (p = V(a)),
        (u = V(",")),
        (d = x()),
        (m = k("div")),
        (h = V(g)),
        s(t, "class", "time svelte-7nct2h"),
        s(t, "data-testid", "clock-time"),
        s(r, "class", "date svelte-7nct2h"),
        s(r, "data-testid", "clock-date"),
        s(e, "class", "clock svelte-7nct2h"),
        s(e, "data-testid", "clock-wrapper");
    },
    m(b, w) {
      y(b, e, w),
        f(e, t),
        f(t, i),
        f(e, l),
        f(e, r),
        f(r, c),
        f(c, p),
        f(c, u),
        f(r, d),
        f(r, m),
        f(m, h);
    },
    p(b, [w]) {
      w & 3 && n !== (n = b[4](b[1].format(b[0])) + "") && Y(i, n),
        w & 1 && a !== (a = b[2].format(b[0]) + "") && Y(p, a),
        w & 1 && g !== (g = b[0].getFullYear() + "") && Y(h, g);
    },
    i: j,
    o: j,
    d(b) {
      b && C(e);
    },
  };
}
function Ia(o, e, t) {
  let n,
    i,
    l,
    { locale: r = void 0 } = e,
    c = new Intl.DateTimeFormat(r, { day: "numeric", month: "long" }),
    a = $.stores.clock;
  re(o, a, (d) => t(7, (l = d)));
  let p = new Date(),
    u = (d) => d.replace(/(am|pm)/i, "").trim();
  return (
    Te(() => {
      let d,
        m = () => {
          t(0, (p = new Date()));
          let g = Math.ceil(p.getTime() / nt(1)) * nt(1);
          d = setTimeout(m, Math.min(g - p.getTime(), nt(1)));
        };
      return m(), () => clearTimeout(d);
    }),
    (o.$$set = (d) => {
      "locale" in d && t(5, (r = d.locale));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 128) {
        e: t(6, (n = l?.use12Format ?? !1));
      }
      if (o.$$.dirty & 96) {
        e: t(
          1,
          (i = new Intl.DateTimeFormat(r, {
            hour: "numeric",
            minute: "2-digit",
            hour12: n,
          }))
        );
      }
    }),
    [p, i, c, a, u, r, n, l]
  );
}
var At = class extends E {
    constructor(e) {
      super(), q(this, e, Ia, Sa, T, { locale: 5 }, xa);
    }
  },
  _o = At;
A();
A();
function Pa(o) {
  R(
    o,
    "svelte-ohfsaw",
    ".search-content.svelte-ohfsaw{position:absolute;left:-16px;right:-16px;display:flex;flex-direction:column;max-height:50vh;background-color:var(--popup-bg-color);box-shadow:0 5px 30px rgb(0 0 0 / 0.15);border-bottom-left-radius:8px;border-bottom-right-radius:8px;padding:0 16px 16px;z-index:1}.search-results.svelte-ohfsaw{list-style:none;overflow-x:hidden;overflow-y:auto;margin:0 -16px;padding:16px}"
  );
}
function go(o, e, t) {
  let n = o.slice();
  return (n[13] = e[t]), (n[15] = t), n;
}
function ho(o) {
  let e, t, n;
  function i(...r) {
    return o[10](o[13], ...r);
  }
  function l() {
    return o[11](o[13]);
  }
  return (
    (t = new Ui({
      props: {
        dataTestId: "global-search-launchpad-search-item",
        item: o[13],
        copyShortcutKeys: o[5],
        isActive: o[1] === o[15],
      },
    })),
    t.$on("open", i),
    t.$on("copy", l),
    {
      c() {
        (e = k("li")), B(t.$$.fragment);
      },
      m(r, c) {
        y(r, e, c), P(t, e, null), (n = !0);
      },
      p(r, c) {
        o = r;
        let a = {};
        c & 1 && (a.item = o[13]),
          c & 32 && (a.copyShortcutKeys = o[5]),
          c & 2 && (a.isActive = o[1] === o[15]),
          t.$set(a);
      },
      i(r) {
        n || (_(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        v(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        r && C(e), z(t);
      },
    }
  );
}
function bo(o) {
  let e, t, n;
  return (
    (t = new Ri({})),
    t.$on("importRequested", o[12]),
    {
      c() {
        (e = k("li")), B(t.$$.fragment);
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p: j,
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function za(o) {
  let e,
    t,
    n,
    i = Xe(o[2]),
    l,
    r,
    c,
    a = o[0],
    p = [];
  for (let m = 0; m < a.length; m += 1) p[m] = ho(go(o, a, m));
  let u = (m) =>
      v(p[m], 1, 1, () => {
        p[m] = null;
      }),
    d = i && bo(o);
  return (
    (r = new Gi({ props: { copyShortcutKeys: o[5] } })),
    {
      c() {
        (e = k("div")), (t = k("ul"));
        for (let m = 0; m < p.length; m += 1) p[m].c();
        (n = x()),
          d && d.c(),
          (l = x()),
          B(r.$$.fragment),
          s(t, "class", "search-results svelte-ohfsaw"),
          s(e, "class", "search-content svelte-ohfsaw"),
          s(e, "data-testid", "global-search-launchpad-content");
      },
      m(m, g) {
        y(m, e, g), f(e, t);
        for (let h = 0; h < p.length; h += 1) p[h] && p[h].m(t, null);
        f(t, n), d && d.m(t, null), f(e, l), P(r, e, null), (c = !0);
      },
      p(m, [g]) {
        if (g & 123) {
          a = m[0];
          let b;
          for (b = 0; b < a.length; b += 1) {
            let w = go(m, a, b);
            p[b]
              ? (p[b].p(w, g), _(p[b], 1))
              : ((p[b] = ho(w)), p[b].c(), _(p[b], 1), p[b].m(t, n));
          }
          for (U(), b = a.length; b < p.length; b += 1) u(b);
          W();
        }
        g & 4 && (i = Xe(m[2])),
          i
            ? d
              ? (d.p(m, g), g & 4 && _(d, 1))
              : ((d = bo(m)), d.c(), _(d, 1), d.m(t, null))
            : d &&
              (U(),
              v(d, 1, 1, () => {
                d = null;
              }),
              W());
        let h = {};
        g & 32 && (h.copyShortcutKeys = m[5]), r.$set(h);
      },
      i(m) {
        if (!c) {
          for (let g = 0; g < a.length; g += 1) _(p[g]);
          _(d), _(r.$$.fragment, m), (c = !0);
        }
      },
      o(m) {
        p = p.filter(Boolean);
        for (let g = 0; g < p.length; g += 1) v(p[g]);
        v(d), v(r.$$.fragment, m), (c = !1);
      },
      d(m) {
        m && C(e), Pe(p, m), d && d.d(), z(r);
      },
    }
  );
}
function Ma(o, e, t) {
  let n,
    i,
    l = ve(),
    r = $.stores.globalSearch;
  re(o, r, (w) => t(9, (i = w)));
  let { searchResult: c } = e,
    { activeIndex: a } = e,
    { totalHistoryCount: p } = e,
    { openItem: u } = e,
    { copyUrl: d } = e,
    m = () => {
      $.actions.sendAnalyticsEvent(
        "global-search.import-button-clicked",
        void 0
      ),
        $.actions.openChromeImport(),
        l("close");
    };
  Te(
    () => (
      $.actions.sendAnalyticsEvent("global-search.auto-opened", {
        source: "launchpad-global-search-field",
      }),
      () => {
        $.actions.sendAnalyticsEvent("global-search.auto-closed", {
          source: "launchpad-global-search-field",
        });
      }
    )
  );
  let g = (w, S) => {
      u(w, S.detail.openInNewTab), S.detail.openInNewTab || l("close");
    },
    h = (w) => d(w.url),
    b = () => m();
  return (
    (o.$$set = (w) => {
      "searchResult" in w && t(0, (c = w.searchResult)),
        "activeIndex" in w && t(1, (a = w.activeIndex)),
        "totalHistoryCount" in w && t(2, (p = w.totalHistoryCount)),
        "openItem" in w && t(3, (u = w.openItem)),
        "copyUrl" in w && t(4, (d = w.copyUrl));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 512) {
        e: t(5, (n = i?.copyShortcutKeys ?? []));
      }
    }),
    [c, a, p, u, d, n, l, r, m, i, g, h, b]
  );
}
var $t = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Ma,
          za,
          T,
          {
            searchResult: 0,
            activeIndex: 1,
            totalHistoryCount: 2,
            openItem: 3,
            copyUrl: 4,
          },
          Pa
        );
    }
  },
  vo = $t;
var { window: Aa } = Ci;
function $a(o) {
  R(
    o,
    "svelte-g0ub4t",
    ".pseudo-overlay.svelte-g0ub4t.svelte-g0ub4t{position:fixed;z-index:2;inset:0;background-color:var(--modal-overlay)}.has-query.svelte-g0ub4t.svelte-g0ub4t{position:relative;z-index:2}.has-query.svelte-g0ub4t header.svelte-g0ub4t{position:relative;z-index:2}.has-query.svelte-g0ub4t header.svelte-g0ub4t::after{position:absolute;inset:-16px;background-color:var(--popup-bg-color);content:'';z-index:-1;padding:16px;border-radius:8px;box-shadow:0 5px 30px rgb(0 0 0 / 0.15)}.has-query.has-results.svelte-g0ub4t header.svelte-g0ub4t::after{bottom:0;padding-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:none}"
  );
}
function ko(o) {
  let e;
  return {
    c() {
      (e = k("div")), s(e, "class", "pseudo-overlay svelte-g0ub4t");
    },
    m(t, n) {
      y(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function wo(o) {
  let e, t;
  return (
    (e = new vo({
      props: {
        searchResult: o[2],
        activeIndex: o[1],
        totalHistoryCount: o[3],
        openItem: o[9],
        copyUrl: o[8],
      },
    })),
    e.$on("close", o[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.searchResult = n[2]),
          i & 2 && (l.activeIndex = n[1]),
          i & 8 && (l.totalHistoryCount = n[3]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ta(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d = o[0] && ko(o);
  function m(b) {
    o[15](b);
  }
  let g = { globalSearchShortcutKeys: o[5] };
  o[0] !== void 0 && (g.query = o[0]),
    (i = new Vi({ props: g })),
    fe.push(() => Ee(i, "query", m));
  let h = o[2] && wo(o);
  return {
    c() {
      d && d.c(),
        (e = x()),
        (t = k("div")),
        (n = k("header")),
        B(i.$$.fragment),
        (r = x()),
        h && h.c(),
        s(n, "class", "svelte-g0ub4t"),
        s(t, "class", "wrapper svelte-g0ub4t"),
        s(t, "data-testid", "global-search-launchpad"),
        te(t, "has-query", o[0]),
        te(t, "has-results", o[4]);
    },
    m(b, w) {
      d && d.m(b, w),
        y(b, e, w),
        y(b, t, w),
        f(t, n),
        P(i, n, null),
        f(t, r),
        h && h.m(t, null),
        (a = !0),
        p ||
          ((u = [Q(Aa, "keydown", o[10]), be((c = o[11].call(null, t)))]),
          (p = !0));
    },
    p(b, [w]) {
      b[0]
        ? d || ((d = ko(b)), d.c(), d.m(e.parentNode, e))
        : d && (d.d(1), (d = null));
      let S = {};
      w & 32 && (S.globalSearchShortcutKeys = b[5]),
        !l && w & 1 && ((l = !0), (S.query = b[0]), qe(() => (l = !1))),
        i.$set(S),
        b[2]
          ? h
            ? (h.p(b, w), w & 4 && _(h, 1))
            : ((h = wo(b)), h.c(), _(h, 1), h.m(t, null))
          : h &&
            (U(),
            v(h, 1, 1, () => {
              h = null;
            }),
            W()),
        (!a || w & 1) && te(t, "has-query", b[0]),
        (!a || w & 16) && te(t, "has-results", b[4]);
    },
    i(b) {
      a || (_(i.$$.fragment, b), _(h), (a = !0));
    },
    o(b) {
      v(i.$$.fragment, b), v(h), (a = !1);
    },
    d(b) {
      d && d.d(b), b && C(e), b && C(t), z(i), h && h.d(), (p = !1), he(u);
    },
  };
}
function qa(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a = "",
    p = 0,
    u = null,
    d = 0,
    m = $.stores.globalSearch;
  re(o, m, (F) => t(14, (c = F)));
  let g = [],
    h = () => {
      t(0, (a = ""));
    },
    b = (F) => {
      window.navigator.clipboard.writeText(F).catch(xe).finally(h);
    },
    w = bt(
      () => $.actions.sendAnalyticsEvent("global-search.auto-used", void 0),
      ht(1)
    ),
    S = bt(() => {
      let F = _i();
      if (!F) return;
      let D = F.startTransaction({ ...gi.SEARCH_TRX }),
        J = tt(g.reduce((ee, X) => ee + X) / g.length);
      g = [];
      let Z = D.startTimestamp + J;
      D.finish(Z);
    }, ht(1)),
    L = async () => {
      a && w();
      let F = a;
      performance.mark("request-started");
      let { result: D, meta: J } = await $.queries.searchGlobally({
        text: F,
        maxResults: 20,
      });
      if ((performance.mark("request-finished"), F !== a)) return;
      t(2, (u = D)), t(3, (d = J.totalHistoryCount));
      let Z = performance.measure(
        "request-duration",
        "request-started",
        "request-finished"
      );
      g.push(Number(Z.duration.toFixed())), S();
    },
    I = (F, D = !1) => {
      $.actions.sendAnalyticsEvent("global-search.suggestion-selected", {
        type: F.type,
      });
      let J = F.type === "service" ? F.serviceId : null;
      $.actions.openSearchItem({
        item: F,
        source: "global-search.suggestion-selected",
        openInAppWithId: J,
        openInActiveTab: !0,
        openInNewTab: D,
      });
    },
    N = (F) => {
      if (!(!a || F.isComposing))
        switch (F.code) {
          case "Escape":
            F.preventDefault(), t(0, (a = ""));
            return;
          case "Enter": {
            F.preventDefault(), t(0, (a = ""));
            let D = u?.[p];
            D && I(D), h();
            return;
          }
          case "ArrowUp":
            F.preventDefault(), t(1, (p = Pt(p, l, -1)));
            return;
          case "ArrowDown":
            F.preventDefault(), t(1, (p = Pt(p, l, 1)));
            return;
          case "KeyC": {
            if ((!F.ctrlKey && !F.metaKey) || Wi(F.target)) return;
            let D = u?.[p];
            if (!D) return;
            F.preventDefault(), b(D.url), h();
            break;
          }
          default:
        }
    },
    H = (F) => Bi(F, h);
  function O(F) {
    (a = F), t(0, a);
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 16384) {
        e: t(5, (n = c?.globalSearchShortcutKeys ?? []));
      }
      if (o.$$.dirty & 1) {
        e: a ? L().catch(xe) : t(2, (u = null));
      }
      if (o.$$.dirty & 5) {
        e: t(13, (i = a && u?.length));
      }
      if (o.$$.dirty & 1) {
        e: a !== null && t(1, (p = 0));
      }
      if (o.$$.dirty & 4) {
        e: t(12, (l = u?.length ?? 0));
      }
      if (o.$$.dirty & 4098) {
        e: l <= p && t(1, (p = 0));
      }
      if (o.$$.dirty & 4097) {
        e: t(4, (r = Boolean(a && l)));
      }
      if (o.$$.dirty & 8192) {
        e: i
          ? ($.actions.explore("performed_global_search"),
            $.actions.markGlobalSearchInLaunchpadAsCompletedForWalkthrough(!0))
          : $.actions.markGlobalSearchInLaunchpadAsCompletedForWalkthrough(!1);
      }
    }),
    [a, p, u, d, r, n, m, h, b, I, N, H, l, i, c, O]
  );
}
var Tt = class extends E {
    constructor(e) {
      super(), q(this, e, qa, Ta, T, {}, $a);
    }
  },
  yo = Tt;
A();
A();
function Ea(o) {
  R(
    o,
    "svelte-1es5jbz",
    `.stats.svelte-1es5jbz.svelte-1es5jbz{display:flex;align-items:center;visibility:visible}.stat-item.svelte-1es5jbz.svelte-1es5jbz{position:relative;cursor:default;margin-right:25px}.stat-item.svelte-1es5jbz.svelte-1es5jbz:last-child{margin-right:0}.stat-item.svelte-1es5jbz .tooltip.svelte-1es5jbz{position:absolute;top:calc(100% + 2px);left:0;z-index:1;visibility:hidden;background-color:var(--tooltip-background-color);color:var(--tooltip-text-color);font-size:12px;line-height:16px;padding:4px 5px;border-radius:4px;opacity:0;transition:opacity 250ms}.stat-item.svelte-1es5jbz:hover .tooltip.svelte-1es5jbz{visibility:visible;opacity:1}@media(min-width: 1300px){.stat-item.svelte-1es5jbz.svelte-1es5jbz{display:flex;align-items:center
  }}.stat-item.svelte-1es5jbz .value.svelte-1es5jbz,.stat-item.svelte-1es5jbz .title.svelte-1es5jbz{margin:0}.stat-item.svelte-1es5jbz .value.svelte-1es5jbz{margin-bottom:3px;font-weight:100;font-size:25px;line-height:30px;white-space:nowrap}@media(min-width: 1300px){.stat-item.svelte-1es5jbz .value.svelte-1es5jbz{margin-right:8px;margin-bottom:0;font-size:32px;line-height:39px
    }}.stat-item.svelte-1es5jbz .title.svelte-1es5jbz{font-weight:100;font-size:12px;line-height:15px;opacity:0.7;white-space:nowrap}@media(min-width: 1300px){.stat-item.svelte-1es5jbz .title.svelte-1es5jbz{line-height:14px
    }}`
  );
}
function Co(o, e, t) {
  let n = o.slice();
  return (n[5] = e[t]), n;
}
function xo(o) {
  let e,
    t,
    n = o[5].value + "",
    i,
    l,
    r,
    c = o[5].title + "",
    a,
    p,
    u = o[5].tooltip + "",
    d,
    m,
    g;
  return {
    c() {
      (e = k("div")),
        (t = k("p")),
        (i = V(n)),
        (l = x()),
        (r = k("p")),
        (a = x()),
        (p = k("div")),
        (d = V(u)),
        (m = x()),
        s(t, "class", "value svelte-1es5jbz"),
        s(r, "class", "title svelte-1es5jbz"),
        s(p, "class", "tooltip svelte-1es5jbz"),
        Se(p, "width", o[5].tooltipWidth),
        s(e, "class", "stat-item svelte-1es5jbz"),
        s(e, "data-testid", (g = "launchpad-header-" + o[5].testId + "-item"));
    },
    m(h, b) {
      y(h, e, b),
        f(e, t),
        f(t, i),
        f(e, l),
        f(e, r),
        (r.innerHTML = c),
        f(e, a),
        f(e, p),
        f(p, d),
        f(e, m);
    },
    p(h, b) {
      b & 1 && n !== (n = h[5].value + "") && Y(i, n),
        b & 1 && c !== (c = h[5].title + "") && (r.innerHTML = c),
        b & 1 && u !== (u = h[5].tooltip + "") && Y(d, u),
        b & 1 && Se(p, "width", h[5].tooltipWidth),
        b & 1 &&
          g !== (g = "launchpad-header-" + h[5].testId + "-item") &&
          s(e, "data-testid", g);
    },
    d(h) {
      h && C(e);
    },
  };
}
function So(o) {
  let e,
    t = o[5].isVisible && xo(o);
  return {
    c() {
      t && t.c(), (e = ae());
    },
    m(n, i) {
      t && t.m(n, i), y(n, e, i);
    },
    p(n, i) {
      n[5].isVisible
        ? t
          ? t.p(n, i)
          : ((t = xo(n)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    d(n) {
      t && t.d(n), n && C(e);
    },
  };
}
function ja(o) {
  let e,
    t = o[0],
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = So(Co(o, t, i));
  return {
    c() {
      e = k("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      s(e, "class", "stats svelte-1es5jbz");
    },
    m(i, l) {
      y(i, e, l);
      for (let r = 0; r < n.length; r += 1) n[r] && n[r].m(e, null);
    },
    p(i, [l]) {
      if (l & 1) {
        t = i[0];
        let r;
        for (r = 0; r < t.length; r += 1) {
          let c = Co(i, t, r);
          n[r] ? n[r].p(c, l) : ((n[r] = So(c)), n[r].c(), n[r].m(e, null));
        }
        for (; r < n.length; r += 1) n[r].d(1);
        n.length = t.length;
      }
    },
    i: j,
    o: j,
    d(i) {
      i && C(e), Pe(n, i);
    },
  };
}
function Na(o, e, t) {
  let n,
    { useAdBlocker: i } = e,
    { blockedAdsCount: l } = e,
    { blockedRequests: r } = e,
    { savedTabsMemory: c } = e;
  return (
    (o.$$set = (a) => {
      "useAdBlocker" in a && t(1, (i = a.useAdBlocker)),
        "blockedAdsCount" in a && t(2, (l = a.blockedAdsCount)),
        "blockedRequests" in a && t(3, (r = a.blockedRequests)),
        "savedTabsMemory" in a && t(4, (c = a.savedTabsMemory));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 30) {
        e: t(
          0,
          (n = [
            {
              testId: "blocked-ads",
              isVisible: Boolean(i && l),
              value: l,
              title: M("ntp_adblocker_stats__blocked_ads_title"),
              tooltip: M("ntp_adblocker_stats__blocked_ads_tooltip"),
              tooltipWidth: "149px",
            },
            {
              testId: "blocked-requests",
              isVisible: Boolean(i && r),
              value: `${r || 0}%`,
              title: M("ntp_adblocker_stats__blocked_requests_title"),
              tooltip: M("ntp_adblocker_stats__blocked_requests_tooltip"),
              tooltipWidth: "165px",
            },
            {
              testId: "saved-memory",
              isVisible: Boolean(c),
              value: hi(c || 0, {
                sizeThreshold: 1e3,
                removeZero: !0,
                uppercaseSize: !0,
                excludeRounding: ["mb"],
              }),
              title: M("ntp_adblocker_stats__saved_memory_title"),
              tooltip: M("ntp_adblocker_stats__saved_memory_tooltip"),
              tooltipWidth: "154px",
            },
          ])
        );
      }
    }),
    [n, i, l, r, c]
  );
}
var qt = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Na,
          ja,
          T,
          {
            useAdBlocker: 1,
            blockedAdsCount: 2,
            blockedRequests: 3,
            savedTabsMemory: 4,
          },
          Ea
        );
    }
  },
  Io = qt;
A();
A();
A();
function Ha(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(t, "fill-rule", "evenodd"),
        s(t, "clip-rule", "evenodd"),
        s(
          t,
          "d",
          "M9.601 9.982l1.432-1.204.708.842-2.336 1.965-.354.297-.354-.297L6.36 9.62l.708-.842 1.432 1.205V1.467h1.1v8.515zm-6.471 4.49V9h-1.1v5.622c0 .525.425.95.95.95h12.14a.95.95 0 00.95-.95V9h-1.1v5.472H3.13z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function Fa(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Et = class extends E {
    constructor(e) {
      super(), q(this, e, Fa, Ha, T, { width: 0, height: 1, className: 2 });
    }
  },
  Bo = Et;
function Va(o) {
  R(
    o,
    "svelte-1ghareq",
    ".header-button.svelte-1ghareq.svelte-1ghareq{all:unset;display:flex;align-items:center;justify-content:center;cursor:pointer;height:22px;font-size:13px;line-height:16px;border-radius:18px;background-color:var(--launchpad-header-button);padding:0 6px;margin-right:20px}.header-button.svelte-1ghareq .svelte-1ghareq{pointer-events:none}.header-button.svelte-1ghareq span.svelte-1ghareq{margin-left:5px}.header-button.svelte-1ghareq.svelte-1ghareq:hover{background-color:var(--launchpad-header-button-hover)}.header-button.svelte-1ghareq.svelte-1ghareq:active{background-color:var(--launchpad-header-button-active)}.header-button.svelte-1ghareq .long.svelte-1ghareq{display:none}@media(min-width: 1005px){.header-button.svelte-1ghareq .long.svelte-1ghareq{display:initial}.header-button.svelte-1ghareq .short.svelte-1ghareq{display:none}}"
  );
}
function Ga(o) {
  let e, t, n, i, l, r, c, a, p;
  return (
    (t = new Bo({ props: { width: "18", height: "18" } })),
    {
      c() {
        (e = k("button")),
          B(t.$$.fragment),
          (n = x()),
          (i = k("span")),
          (i.textContent = `${M("ntp_launchpad_header__import_short")}`),
          (l = x()),
          (r = k("span")),
          (r.textContent = `${M("ntp_launchpad_header__import_long")}`),
          s(i, "class", "short svelte-1ghareq"),
          s(r, "class", "long svelte-1ghareq"),
          s(e, "class", "header-button svelte-1ghareq"),
          s(e, "data-testid", "launchpad-header-import-button");
      },
      m(u, d) {
        y(u, e, d),
          P(t, e, null),
          f(e, n),
          f(e, i),
          f(e, l),
          f(e, r),
          (c = !0),
          a || ((p = Q(e, "click", o[0])), (a = !0));
      },
      p: j,
      i(u) {
        c || (_(t.$$.fragment, u), (c = !0));
      },
      o(u) {
        v(t.$$.fragment, u), (c = !1);
      },
      d(u) {
        u && C(e), z(t), (a = !1), p();
      },
    }
  );
}
function Da(o) {
  return [
    () => {
      $.actions.sendAnalyticsEvent("launchpad.import-button-clicked", void 0),
        $.actions.openChromeImport();
    },
  ];
}
var jt = class extends E {
    constructor(e) {
      super(), q(this, e, Da, Ga, T, {}, Va);
    }
  },
  Po = jt;
A();
A();
function Ra(o) {
  let e, t, n, i, l;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        (n = G("path")),
        (i = G("path")),
        s(t, "d", "M9 16A7 7 0 109 2a7 7 0 000 14z"),
        s(t, "stroke", "currentColor"),
        s(t, "stroke-width", "1.1"),
        s(t, "stroke-miterlimit", "10"),
        s(n, "d", "M9 13.369a.782.782 0 100-1.565.782.782 0 000 1.565z"),
        s(n, "fill", "currentColor"),
        s(
          i,
          "d",
          "M6.686 7.425c0-1.85 1.203-2.509 2.337-2.509 1.134-.08 2.164.694 2.291 1.792 0 1.018-.555 1.376-1.203 1.792C9.197 8.95 9 9.795 9 10.696"
        ),
        s(i, "stroke", "currentColor"),
        s(i, "stroke-width", "1.1"),
        s(i, "stroke-miterlimit", "10"),
        s(i, "stroke-linejoin", "round"),
        s(e, "class", (l = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, c) {
      y(r, e, c), f(e, t), f(e, n), f(e, i);
    },
    p(r, [c]) {
      c & 4 && l !== (l = `icon ${r[2]}`) && s(e, "class", l),
        c & 1 && s(e, "width", r[0]),
        c & 2 && s(e, "height", r[1]);
    },
    i: j,
    o: j,
    d(r) {
      r && C(e);
    },
  };
}
function Ua(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Nt = class extends E {
    constructor(e) {
      super(), q(this, e, Ua, Ra, T, { width: 0, height: 1, className: 2 });
    }
  },
  zo = Nt;
A();
function Wa(o) {
  R(
    o,
    "svelte-yypo7v",
    ".header-button.svelte-yypo7v.svelte-yypo7v{height:22px;font-size:13px;line-height:16px;border-radius:18px;background-color:var(--launchpad-header-button);padding:0 6px}.header-button.svelte-yypo7v span.svelte-yypo7v{margin-left:5px}.header-button.svelte-yypo7v .svelte-yypo7v{pointer-events:none}.header-button.svelte-yypo7v.svelte-yypo7v:hover{background-color:var(--launchpad-header-button-hover)}.header-button.svelte-yypo7v.svelte-yypo7v:active{background-color:var(--launchpad-header-button-active)}.header-button.svelte-yypo7v .long.svelte-yypo7v{display:none}@media(min-width: 1005px){.header-button.svelte-yypo7v .long.svelte-yypo7v{display:initial}.header-button.svelte-yypo7v .short.svelte-yypo7v{display:none}}"
  );
}
function Oa(o) {
  let e, t;
  return {
    c() {
      (e = k("span")), (t = V(o[1])), s(e, "class", "svelte-yypo7v");
    },
    m(n, i) {
      y(n, e, i), f(e, t);
    },
    p(n, i) {
      i & 2 && Y(t, n[1]);
    },
    d(n) {
      n && C(e);
    },
  };
}
function Za(o) {
  let e, t, n, i, l;
  return {
    c() {
      (e = k("span")),
        (t = V(o[1])),
        (n = x()),
        (i = k("span")),
        (l = V(o[2])),
        s(e, "class", "short svelte-yypo7v"),
        s(i, "class", "long svelte-yypo7v");
    },
    m(r, c) {
      y(r, e, c), f(e, t), y(r, n, c), y(r, i, c), f(i, l);
    },
    p(r, c) {
      c & 2 && Y(t, r[1]), c & 4 && Y(l, r[2]);
    },
    d(r) {
      r && C(e), r && C(n), r && C(i);
    },
  };
}
function Ka(o) {
  let e,
    t,
    n,
    i,
    l,
    r = o[5].default,
    c = ke(r, o, o[4], null);
  function a(d, m) {
    if (d[2]) return Za;
    if (d[1] !== "") return Oa;
  }
  let p = a(o, -1),
    u = p && p(o);
  return {
    c() {
      (e = k("button")),
        c && c.c(),
        (t = x()),
        u && u.c(),
        s(e, "class", "header-button svelte-yypo7v"),
        s(e, "data-testid", o[3]);
    },
    m(d, m) {
      y(d, e, m),
        c && c.m(e, null),
        f(e, t),
        u && u.m(e, null),
        o[7](e),
        (n = !0),
        i || ((l = Q(e, "click", o[6])), (i = !0));
    },
    p(d, [m]) {
      c &&
        c.p &&
        (!n || m & 16) &&
        ye(c, r, d, d[4], n ? we(r, d[4], m, null) : Ce(d[4]), null),
        p === (p = a(d, m)) && u
          ? u.p(d, m)
          : (u && u.d(1), (u = p && p(d)), u && (u.c(), u.m(e, null))),
        (!n || m & 8) && s(e, "data-testid", d[3]);
    },
    i(d) {
      n || (_(c, d), (n = !0));
    },
    o(d) {
      v(c, d), (n = !1);
    },
    d(d) {
      d && C(e), c && c.d(d), u && u.d(), o[7](null), (i = !1), l();
    },
  };
}
function Ya(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { shortText: l = "" } = e,
    { longText: r = "" } = e,
    { target: c = null } = e,
    { dataTestId: a = null } = e;
  function p(d) {
    pe.call(this, o, d);
  }
  function u(d) {
    fe[d ? "unshift" : "push"](() => {
      (c = d), t(0, c);
    });
  }
  return (
    (o.$$set = (d) => {
      "shortText" in d && t(1, (l = d.shortText)),
        "longText" in d && t(2, (r = d.longText)),
        "target" in d && t(0, (c = d.target)),
        "dataTestId" in d && t(3, (a = d.dataTestId)),
        "$$scope" in d && t(4, (i = d.$$scope));
    }),
    [c, l, r, a, i, n, p, u]
  );
}
var Ht = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Ya,
          Ka,
          T,
          { shortText: 1, longText: 2, target: 0, dataTestId: 3 },
          Wa
        );
    }
  },
  Je = Ht;
function Ja(o) {
  let e, t;
  return (
    (e = new zo({ props: { width: "18", height: "18" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Xa(o) {
  let e, t;
  return (
    (e = new Je({
      props: {
        shortText: M("ntp_launchpad_header__help"),
        dataTestId: "launchpad-header-help-button",
        $$slots: { default: [Ja] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[0]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, [i]) {
        let l = {};
        i & 2 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Qa(o) {
  return [
    () => {
      $.actions.sendAnalyticsEvent("launchpad.help-button-clicked", void 0),
        $.actions.toggleHelp({ source: "launchpad.help-button-clicked" });
    },
  ];
}
var Ft = class extends E {
    constructor(e) {
      super(), q(this, e, Qa, Xa, T, {});
    }
  },
  Mo = Ft;
A();
A();
function es(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(t, "fill-rule", "evenodd"),
        s(t, "clip-rule", "evenodd"),
        s(
          t,
          "d",
          "M5.602 12.816H14a.8.8 0 00.8-.8V5.464a.8.8 0 00-.8-.8H4a.8.8 0 00-.8.8v9.141l2.083-1.551.32-.238zM3.2 16.101l-1.2.893V5.464a2 2 0 012-2h10a2 2 0 012 2v6.552a2 2 0 01-2 2H6l-2.8 2.085zM12 7.973H6v-1.2h6v1.2zM6 10.27h3v-1.2H6v1.2z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function ts(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Vt = class extends E {
    constructor(e) {
      super(), q(this, e, ts, es, T, { width: 0, height: 1, className: 2 });
    }
  },
  Lo = Vt;
A();
A();
A();
function ns(o) {
  R(
    o,
    "svelte-fhkg7w",
    ".popup.svelte-fhkg7w{position:absolute;z-index:1;border:1px solid var(--popup-border-color);box-shadow:0 2px 3px rgb(0 0 0 / 0.06), 0 4px 16px rgb(84 84 103 / 0.12);border-radius:8px;background-color:var(--popup-bg-color);box-sizing:border-box;font-size:12px;line-height:16px;color:var(--popup-text-color)}"
  );
}
function is(o) {
  let e,
    t,
    n,
    i,
    l,
    r = o[7].default,
    c = ke(r, o, o[6], null);
  return {
    c() {
      (e = k("div")),
        c && c.c(),
        s(e, "class", "popup svelte-fhkg7w"),
        s(e, "style", o[2]),
        s(e, "data-testid", o[0]);
    },
    m(a, p) {
      y(a, e, p),
        c && c.m(e, null),
        (n = !0),
        i || ((l = be((t = o[1].call(null, e)))), (i = !0));
    },
    p(a, [p]) {
      c &&
        c.p &&
        (!n || p & 64) &&
        ye(c, r, a, a[6], n ? we(r, a[6], p, null) : Ce(a[6]), null),
        (!n || p & 1) && s(e, "data-testid", a[0]);
    },
    i(a) {
      n || (_(c, a), (n = !0));
    },
    o(a) {
      v(c, a), (n = !1);
    },
    d(a) {
      a && C(e), c && c.d(a), (i = !1), l();
    },
  };
}
var os = 60;
function ls(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { anchorElement: l } = e,
    { marginBottom: r = 0 } = e,
    { dataTestId: c = "" } = e,
    { isTop: a = !1 } = e,
    p = ve(),
    { right: u, bottom: d } = l.getBoundingClientRect(),
    m = d + 5,
    g = document.body.clientWidth - u,
    h = (w) =>
      rt({
        trigger: l,
        popup: w,
        callback: (S) => {
          p("close", { nativeEvent: S });
        },
      }),
    b = a ? `right: 0; bottom: ${r + os}px` : `top: ${m}px; right: ${g}px;`;
  return (
    (o.$$set = (w) => {
      "anchorElement" in w && t(3, (l = w.anchorElement)),
        "marginBottom" in w && t(4, (r = w.marginBottom)),
        "dataTestId" in w && t(0, (c = w.dataTestId)),
        "isTop" in w && t(5, (a = w.isTop)),
        "$$scope" in w && t(6, (i = w.$$scope));
    }),
    [c, h, b, l, r, a, i, n]
  );
}
var Gt = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          ls,
          is,
          T,
          { anchorElement: 3, marginBottom: 4, dataTestId: 0, isTop: 5 },
          ns
        );
    }
  },
  je = Gt;
A();
function rs(o) {
  R(
    o,
    "svelte-1wbsrys",
    "p.svelte-1wbsrys.svelte-1wbsrys{margin:0}.action.svelte-1wbsrys.svelte-1wbsrys{border-top:1px solid var(--feedback-popup-border-action-color);padding:4px}.action.svelte-1wbsrys>.svelte-1wbsrys{padding:6px 6px 6px 16px;border-radius:4px;text-decoration:none;display:flex;justify-content:space-between;width:100%;transition:var(--animation-time);cursor:pointer}.action.svelte-1wbsrys>.svelte-1wbsrys:hover{background:rgb(25 119 243 / 0.08)}.action.svelte-1wbsrys .app-icon.svelte-1wbsrys{color:#f0641e;display:flex;justify-content:center;align-items:center}.action.svelte-1wbsrys .action-button-content.svelte-1wbsrys{font-weight:100;font-size:12px;line-height:16px;margin-left:12px;padding-right:22px;width:100%}.action.svelte-1wbsrys .action-button-content .action-title.svelte-1wbsrys{color:var(--feedback-popup-text-color)}.action.svelte-1wbsrys .action-button-content .action-description.svelte-1wbsrys{color:var(--feedback-popup-description-color)}.action.svelte-1wbsrys .arrow.svelte-1wbsrys{align-self:center;margin-right:10px;color:var(--text-primary-color)}"
  );
}
function as(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b,
    w,
    S = o[6].default,
    L = ke(S, o, o[5], null);
  return (
    (g = new io({ props: { width: "6", height: "10" } })),
    {
      c() {
        (e = k("div")),
          (t = k("a")),
          (n = k("div")),
          L && L.c(),
          (i = x()),
          (l = k("div")),
          (r = k("p")),
          (c = V(o[1])),
          (a = x()),
          (p = k("p")),
          (u = V(o[2])),
          (d = x()),
          (m = k("div")),
          B(g.$$.fragment),
          s(n, "class", "app-icon svelte-1wbsrys"),
          s(r, "class", "action-title svelte-1wbsrys"),
          s(p, "class", "action-description svelte-1wbsrys"),
          s(l, "class", "action-button-content svelte-1wbsrys"),
          s(m, "class", "arrow svelte-1wbsrys"),
          s(t, "href", o[0]),
          s(t, "target", "_blank"),
          s(t, "rel", "noreferrer"),
          s(t, "data-testid", o[3]),
          s(t, "class", "svelte-1wbsrys"),
          s(e, "class", "action svelte-1wbsrys"),
          s(e, "data-testid", "feedback-popup-action");
      },
      m(I, N) {
        y(I, e, N),
          f(e, t),
          f(t, n),
          L && L.m(n, null),
          f(t, i),
          f(t, l),
          f(l, r),
          f(r, c),
          f(l, a),
          f(l, p),
          f(p, u),
          f(t, d),
          f(t, m),
          P(g, m, null),
          (h = !0),
          b || ((w = [Q(t, "click", o[4]), Q(e, "click", o[7])]), (b = !0));
      },
      p(I, [N]) {
        L &&
          L.p &&
          (!h || N & 32) &&
          ye(L, S, I, I[5], h ? we(S, I[5], N, null) : Ce(I[5]), null),
          (!h || N & 2) && Y(c, I[1]),
          (!h || N & 4) && Y(u, I[2]),
          (!h || N & 1) && s(t, "href", I[0]),
          (!h || N & 8) && s(t, "data-testid", I[3]);
      },
      i(I) {
        h || (_(L, I), _(g.$$.fragment, I), (h = !0));
      },
      o(I) {
        v(L, I), v(g.$$.fragment, I), (h = !1);
      },
      d(I) {
        I && C(e), L && L.d(I), z(g), (b = !1), he(w);
      },
    }
  );
}
function ss(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { actionUrl: l = "" } = e,
    { actionTitle: r } = e,
    { actionDescription: c } = e,
    { dataTestId: a } = e,
    p = (d) => {
      l || d.preventDefault();
    };
  function u(d) {
    pe.call(this, o, d);
  }
  return (
    (o.$$set = (d) => {
      "actionUrl" in d && t(0, (l = d.actionUrl)),
        "actionTitle" in d && t(1, (r = d.actionTitle)),
        "actionDescription" in d && t(2, (c = d.actionDescription)),
        "dataTestId" in d && t(3, (a = d.dataTestId)),
        "$$scope" in d && t(5, (i = d.$$scope));
    }),
    [l, r, c, a, p, i, n, u]
  );
}
var Dt = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          ss,
          as,
          T,
          { actionUrl: 0, actionTitle: 1, actionDescription: 2, dataTestId: 3 },
          rs
        );
    }
  },
  Rt = Dt;
A();
function cs(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(
          t,
          "d",
          "M4.333 7.333h3.334v-1H4.333v1zm0-2.333h5.334V4H4.333v1zM11.667.333H2.333a2 2 0 00-2 2V15l4-4h7.334a2 2 0 002-2V2.333a2 2 0 00-2-2zm1 8.667a1 1 0 01-1 1H3.92l-.293.293-2.294 2.294V2.333a1 1 0 011-1h9.334a1 1 0 011 1V9z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function ps(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Ut = class extends E {
    constructor(e) {
      super(), q(this, e, ps, cs, T, { width: 0, height: 1, className: 2 });
    }
  },
  Ao = Ut;
A();
A();
var $o = () => {
  let o = window.Intercom;
  if (typeof o == "function") o("reattach_activator");
  else {
    let i = function l() {
      l.c(arguments);
    };
    (i.q = []),
      (i.c = function (r) {
        i.q.push(r);
      }),
      (window.Intercom = i);
  }
  let { document: e } = window,
    t = e.createElement("script");
  (t.async = !0),
    (t.defer = !0),
    (t.src = "https://js.intercomcdn.com/shim.latest.js"),
    e.head.appendChild(t);
  let n = (i) => {
    let l = e.querySelector(".intercom-launcher");
    (l && l.contains(i.target)) || window.Intercom("hide");
  };
  return (
    window.Intercom("onShow", () => e.addEventListener("click", n, !1)),
    window.Intercom("onHide", () => e.removeEventListener("click", n, !1)),
    window.Intercom
  );
};
var st = (o, e) => {
  let t = $o();
  if (!o || !e) {
    t("shutdown");
    return;
  }
  t("boot", {
    app_id: mi.INTERCOM_KEY,
    email: o.email,
    name: o.name,
    user_id: e || null,
    avatar: o?.avatar || null,
    hide_default_launcher: !0,
  }),
    t("show");
};
function us(o) {
  R(
    o,
    "svelte-d3tmw4",
    ".feedback-extra.svelte-d3tmw4{text-transform:uppercase;font-size:10px;line-height:12px;color:var(--feedback-popup-extra-text-color)}.feedback-send.svelte-d3tmw4{width:282px;padding:20px 20px 6px}.feedback-title.svelte-d3tmw4{font-size:18px;color:var(--feedback-popup-title-color);margin:0}.description.svelte-d3tmw4{line-height:18px;color:var(--feedback-popup-under-title-color);margin:7px 0 9px}.feedback-send.svelte-d3tmw4 .give-feedback-button{margin-bottom:31px;font-weight:700;height:30px;width:100%}"
  );
}
function fs(o) {
  let e = M("ntp_feedback_popup__send_feedback_button") + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p: j,
    d(n) {
      n && C(t);
    },
  };
}
function ds(o) {
  let e, t;
  return (
    (e = new oo({ props: { width: "15", height: "15" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function To(o) {
  let e, t;
  return (
    (e = new Rt({
      props: {
        actionTitle: M("ntp_feedback_popup__intercom_button_title"),
        actionDescription: M("ntp_feedback_popup__intercom_button_description"),
        dataTestId: "ntp-feedbackpopup-sendusmessage-link",
        $$slots: { default: [ms] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2048 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function ms(o) {
  let e, t;
  return (
    (e = new Ao({ props: { width: "14", height: "15" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function _s(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g;
  (r = new ce({
    props: {
      mod: "primary",
      size: "small",
      href: o[1],
      className: "give-feedback-button",
      openInNewTab: !0,
      dataTestId: "ntp-feedbackpopup-sendfeedback-link",
      $$slots: { default: [fs] },
      $$scope: { ctx: o },
    },
  })),
    r.$on("click", o[5]),
    (u = new Rt({
      props: {
        actionUrl: o[2],
        actionTitle: M("ntp_feedback_popup__discord_button_title"),
        actionDescription: M("ntp_feedback_popup__discord_button_description"),
        dataTestId: "ntp-feedbackpopup-joincommunity-link",
        $$slots: { default: [ds] },
        $$scope: { ctx: o },
      },
    })),
    u.$on("click", o[6]);
  let h = o[4] && To(o);
  return {
    c() {
      (e = k("div")),
        (t = k("h2")),
        (t.textContent = `${M("ntp_feedback_popup__title")}`),
        (n = x()),
        (i = k("p")),
        (i.textContent = `${M("ntp_feedback_popup__description")}`),
        (l = x()),
        B(r.$$.fragment),
        (c = x()),
        (a = k("div")),
        (a.textContent = `${M("ntp_feedback_popup__second_title")}`),
        (p = x()),
        B(u.$$.fragment),
        (d = x()),
        h && h.c(),
        (m = ae()),
        s(t, "class", "feedback-title svelte-d3tmw4"),
        s(i, "class", "description svelte-d3tmw4"),
        s(a, "class", "feedback-extra svelte-d3tmw4"),
        s(e, "class", "feedback-send svelte-d3tmw4");
    },
    m(b, w) {
      y(b, e, w),
        f(e, t),
        f(e, n),
        f(e, i),
        f(e, l),
        P(r, e, null),
        f(e, c),
        f(e, a),
        y(b, p, w),
        P(u, b, w),
        y(b, d, w),
        h && h.m(b, w),
        y(b, m, w),
        (g = !0);
    },
    p(b, w) {
      let S = {};
      w & 2 && (S.href = b[1]),
        w & 2048 && (S.$$scope = { dirty: w, ctx: b }),
        r.$set(S);
      let L = {};
      w & 4 && (L.actionUrl = b[2]),
        w & 2048 && (L.$$scope = { dirty: w, ctx: b }),
        u.$set(L),
        b[4]
          ? h
            ? (h.p(b, w), w & 16 && _(h, 1))
            : ((h = To(b)), h.c(), _(h, 1), h.m(m.parentNode, m))
          : h &&
            (U(),
            v(h, 1, 1, () => {
              h = null;
            }),
            W());
    },
    i(b) {
      g || (_(r.$$.fragment, b), _(u.$$.fragment, b), _(h), (g = !0));
    },
    o(b) {
      v(r.$$.fragment, b), v(u.$$.fragment, b), v(h), (g = !1);
    },
    d(b) {
      b && C(e), z(r), b && C(p), z(u, b), b && C(d), h && h.d(b), b && C(m);
    },
  };
}
function gs(o) {
  let e, t;
  return (
    (e = new je({
      props: {
        dataTestId: "launchpad-header-feedback-popup",
        anchorElement: o[0],
        $$slots: { default: [_s] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[10]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, [i]) {
        let l = {};
        i & 1 && (l.anchorElement = n[0]),
          i & 2070 && (l.$$scope = { dirty: i, ctx: n }),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function hs(o, e, t) {
  let n,
    i,
    l = j,
    r = () => (l(), (l = it(n, (w) => t(4, (i = w)))), n);
  o.$$.on_destroy.push(() => l());
  let { anchorElement: c } = e,
    { userFeedbackUrl: a } = e,
    { userInfo: p } = e,
    { userId: u } = e,
    { discordCommunityLink: d } = e,
    m = () => {
      $.actions.sendAnalyticsEvent(
        "feedback-popup.send-feedback-button-clicked",
        void 0
      );
    },
    g = () => {
      $.actions.sendAnalyticsEvent(
        "feedback-popup.join-community-link-clicked",
        void 0
      );
    },
    h = () => {
      i &&
        ($.actions.sendAnalyticsEvent(
          "feedback-popup.intercom-link-clicked",
          void 0
        ),
        st(p, u));
    };
  function b(w) {
    pe.call(this, o, w);
  }
  o.$$set = (w) => {
    "anchorElement" in w && t(0, (c = w.anchorElement)),
      "userFeedbackUrl" in w && t(1, (a = w.userFeedbackUrl)),
      "userInfo" in w && t(8, (p = w.userInfo)),
      "userId" in w && t(9, (u = w.userId)),
      "discordCommunityLink" in w && t(2, (d = w.discordCommunityLink));
  };
  e: r(t(3, (n = $.stores.isIntercomAvailable)));
  return [c, a, d, n, i, m, g, h, p, u, b];
}
var Wt = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          hs,
          gs,
          T,
          {
            anchorElement: 0,
            userFeedbackUrl: 1,
            userInfo: 8,
            userId: 9,
            discordCommunityLink: 2,
          },
          us
        );
    }
  },
  qo = Wt;
function bs(o) {
  let e, t;
  return (
    (e = new Lo({ props: { width: "18", height: "18" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Eo(o) {
  let e, t;
  return (
    (e = new qo({
      props: {
        anchorElement: o[4],
        userId: o[1],
        userInfo: o[2],
        userFeedbackUrl: o[0],
        discordCommunityLink: o[3],
      },
    })),
    e.$on("close", o[6]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 16 && (l.anchorElement = n[4]),
          i & 2 && (l.userId = n[1]),
          i & 4 && (l.userInfo = n[2]),
          i & 1 && (l.userFeedbackUrl = n[0]),
          i & 8 && (l.discordCommunityLink = n[3]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function vs(o) {
  let e, t, n, i, l;
  function r(p) {
    o[8](p);
  }
  let c = {
    shortText: M("ntp_launchpad_header__feedback"),
    dataTestId: "launchpad-header-feedback-button",
    $$slots: { default: [bs] },
    $$scope: { ctx: o },
  };
  o[4] !== void 0 && (c.target = o[4]),
    (t = new Je({ props: c })),
    fe.push(() => Ee(t, "target", r)),
    t.$on("click", o[7]);
  let a = o[5] && Eo(o);
  return {
    c() {
      (e = k("div")), B(t.$$.fragment), (i = x()), a && a.c();
    },
    m(p, u) {
      y(p, e, u), P(t, e, null), f(e, i), a && a.m(e, null), (l = !0);
    },
    p(p, [u]) {
      let d = {};
      u & 512 && (d.$$scope = { dirty: u, ctx: p }),
        !n && u & 16 && ((n = !0), (d.target = p[4]), qe(() => (n = !1))),
        t.$set(d),
        p[5]
          ? a
            ? (a.p(p, u), u & 32 && _(a, 1))
            : ((a = Eo(p)), a.c(), _(a, 1), a.m(e, null))
          : a &&
            (U(),
            v(a, 1, 1, () => {
              a = null;
            }),
            W());
    },
    i(p) {
      l || (_(t.$$.fragment, p), _(a), (l = !0));
    },
    o(p) {
      v(t.$$.fragment, p), v(a), (l = !1);
    },
    d(p) {
      p && C(e), z(t), a && a.d();
    },
  };
}
function ks(o, e, t) {
  let n,
    i = "",
    l = "",
    r = null,
    c = "",
    a,
    p = () => {
      t(0, (i = "")), t(1, (l = "")), t(2, (r = null));
    },
    u = async () => {
      if (i) p();
      else {
        let m = await $.queries.loadFeedbackInfo();
        t(0, (i = m.feedbackUrl)),
          t(1, (l = m.userId)),
          t(2, (r = m.userInfo)),
          t(3, (c = m.discordCommunityLink));
      }
      $.actions.sendAnalyticsEvent("launchpad.feedback-button-clicked", void 0);
    };
  function d(m) {
    (a = m), t(4, a);
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: t(5, (n = i !== ""));
      }
    }),
    [i, l, r, c, a, n, p, u, d]
  );
}
var Ot = class extends E {
    constructor(e) {
      super(), q(this, e, ks, vs, T, {});
    }
  },
  jo = Ot;
A();
A();
function ws(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(t, "fill-rule", "evenodd"),
        s(t, "clip-rule", "evenodd"),
        s(
          t,
          "d",
          "M5.3752 2.89057C4.66084 2.89057 4.04369 3.30669 3.7529 3.90977L2 3.90977L2 5.10977L3.62427 5.10977C3.81317 5.9017 4.52541 6.49057 5.3752 6.49057C6.36931 6.49057 7.1752 5.68468 7.1752 4.69056C7.1752 3.69645 6.36931 2.89057 5.3752 2.89057ZM5.3752 13.5504C5.81702 13.5504 6.1752 13.9086 6.1752 14.3504C6.1752 14.7922 5.81702 15.1504 5.3752 15.1504C4.93337 15.1504 4.5752 14.7922 4.5752 14.3504C4.5752 13.9086 4.93337 13.5504 5.3752 13.5504ZM5.3752 12.5504C6.36931 12.5504 7.1752 13.3563 7.1752 14.3504C7.1752 15.3445 6.36931 16.1504 5.3752 16.1504C4.64859 16.1504 4.02255 15.7199 3.73823 15.1L2 15.1L2 13.9L3.632 13.9C3.83196 13.1238 4.53661 12.5504 5.3752 12.5504ZM6.1752 4.69056C6.1752 4.24874 5.81702 3.89057 5.3752 3.89057C4.93337 3.89057 4.57519 4.24874 4.57519 4.69056C4.57519 5.13239 4.93337 5.49057 5.3752 5.49057C5.81702 5.49057 6.1752 5.13239 6.1752 4.69056ZM11.3181 9.50078C11.3181 9.05895 10.9599 8.70078 10.5181 8.70078C10.0763 8.70078 9.71812 9.05895 9.71812 9.50078C9.71812 9.94261 10.0763 10.3008 10.5181 10.3008C10.9599 10.3008 11.3181 9.94261 11.3181 9.50078ZM12.3181 9.50078C12.3181 8.50667 11.5122 7.70078 10.5181 7.70078C9.73468 7.70078 9.06814 8.20129 8.82082 8.9L2 8.9L2 10.1L8.82026 10.1C9.06715 10.7995 9.73409 11.3008 10.5181 11.3008C11.5122 11.3008 12.3181 10.4949 12.3181 9.50078ZM9.00011 5.09998L16.0004 5.09998L16.0004 3.89998L9.00011 3.89998L9.00011 5.09998ZM16.0005 10.1L14.0265 10.1L14.0265 8.89997L16.0005 8.89997L16.0005 10.1ZM9 15.1L16 15.1L16 13.9L9 13.9L9 15.1Z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 18 18"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function ys(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Zt = class extends E {
    constructor(e) {
      super(), q(this, e, ys, ws, T, { width: 0, height: 1, className: 2 });
    }
  },
  ct = Zt;
function Cs(o) {
  let e, t;
  return (
    (e = new ct({ props: { width: "18", height: "18" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function xs(o) {
  let e, t;
  return (
    (e = new Je({
      props: {
        shortText: M("ntp_launchpad_header__customize"),
        dataTestId: "launchpad-header-customize-button",
        $$slots: { default: [Cs] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[0]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, [i]) {
        let l = {};
        i & 2 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ss(o) {
  return [
    () => {
      $.actions.sendAnalyticsEvent(
        "launchpad.customize-button-clicked",
        void 0
      ),
        $.actions.showGlobalSettingsModal({
          source: "launchpad.customize-button-clicked",
        });
    },
  ];
}
var Kt = class extends E {
    constructor(e) {
      super(), q(this, e, Ss, xs, T, {});
    }
  },
  No = Kt;
A();
function Is(o) {
  R(
    o,
    "svelte-1n5ead7",
    "button.svelte-1n5ead7{font-size:13px;border-radius:18px;background-color:var(--launchpad-header-button-with-bg);padding:0 6px}button.svelte-1n5ead7 .login-icon{margin-right:5px}"
  );
}
function Bs(o) {
  let e,
    t,
    n,
    i = M("ntp_launchpad_header__sign_up") + "",
    l,
    r,
    c,
    a;
  return (
    (t = new Zi({
      props: { width: "16", height: "16", className: "login-icon" },
    })),
    {
      c() {
        (e = k("button")),
          B(t.$$.fragment),
          (n = x()),
          (l = V(i)),
          s(e, "data-testid", "launchpad-unlock-temporary-user-button"),
          s(e, "class", "svelte-1n5ead7");
      },
      m(p, u) {
        y(p, e, u),
          P(t, e, null),
          f(e, n),
          f(e, l),
          (r = !0),
          c || ((a = Q(e, "click", o[0])), (c = !0));
      },
      p: j,
      i(p) {
        r || (_(t.$$.fragment, p), (r = !0));
      },
      o(p) {
        v(t.$$.fragment, p), (r = !1);
      },
      d(p) {
        p && C(e), z(t), (c = !1), a();
      },
    }
  );
}
function Ps(o) {
  return [
    () => {
      $.actions.sendAnalyticsEvent("launchpad.sign-up-button-clicked", void 0),
        $.actions.showSignUpModal({
          source: "launchpad.sign-up-button-clicked",
        });
    },
  ];
}
var Yt = class extends E {
    constructor(e) {
      super(), q(this, e, Ps, Bs, T, {}, Is);
    }
  },
  Ho = Yt;
A();
A();
A();
A();
A();
function zs(o) {
  R(
    o,
    "svelte-gj9rev",
    ".load-icon.svelte-gj9rev.svelte-gj9rev{--size:var(--loader-size, 24px);width:var(--size);height:calc(var(--size) / 5);display:flex;justify-content:center;justify-items:center;column-gap:1px}.load-icon.svelte-gj9rev span.svelte-gj9rev{--color:var(--loader-color, white);display:inline-block;background:var(--color);width:20%;height:100%;border-radius:100%;animation-name:svelte-gj9rev-loading;animation-duration:1.5s;animation-iteration-count:infinite;animation-fill-mode:both}.load-icon.svelte-gj9rev span.svelte-gj9rev:nth-of-type(1){left:0}.load-icon.svelte-gj9rev span.svelte-gj9rev:nth-of-type(2){left:40%;animation-delay:0.2s}.load-icon.svelte-gj9rev span.svelte-gj9rev:nth-of-type(3){right:0;animation-delay:0.4s}@keyframes svelte-gj9rev-loading{0%{opacity:1}50%{opacity:0}100%{opacity:1}}"
  );
}
function Ms(o) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.innerHTML = `<span class="svelte-gj9rev"></span> 
  <span class="svelte-gj9rev"></span> 
  <span class="svelte-gj9rev"></span>`),
        s(e, "class", "load-icon svelte-gj9rev");
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && C(e);
    },
  };
}
var Jt = class extends E {
    constructor(e) {
      super(), q(this, e, null, Ms, T, {}, zs);
    }
  },
  pt = Jt;
function Ls(o) {
  R(
    o,
    "svelte-5ked6z",
    ".bonuses-list.svelte-5ked6z{display:flex;flex-direction:column;row-gap:4px;width:100%}.bonus-item.svelte-5ked6z{background:var(--billing-price-background);border-radius:6px;padding:9px;display:flex;flex-direction:row;align-items:center;height:42px}.bonus-item-activated.svelte-5ked6z{background:rgba(89 182 75 / 0.15)}.bonus-item-icon-activated.svelte-5ked6z{background:#73d864;border:1px solid rgba(0 0 0 / 0.04);border-radius:36px;color:#fff;width:18px;height:18px;display:flex;justify-content:center;align-items:center;margin-right:7px}.bonus-item-icon.svelte-5ked6z{font-size:15px;margin-right:8px;margin-left:2px}.bonus-item-label.svelte-5ked6z{letter-spacing:-0.01em;margin-right:auto;color:var(--text-primary-color);font-weight:600}.bonus-item-signups.svelte-5ked6z{color:var(--billing-signups-count);letter-spacing:-0.01em}"
  );
}
function Fo(o, e, t) {
  let n = o.slice();
  (n[6] = e[t]), (n[9] = t);
  let i = n[6].durationInMonths === null;
  return (n[7] = i), n;
}
function As(o) {
  let e,
    t = o[7] ? "\u{1F381}" : "\u{1F389}",
    n;
  return {
    c() {
      (e = k("span")),
        (n = V(t)),
        s(e, "class", "bonus-item-icon svelte-5ked6z");
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 2 && t !== (t = i[7] ? "\u{1F381}" : "\u{1F389}") && Y(n, t);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function $s(o) {
  let e, t, n;
  return (
    (t = new Ke({ props: { width: "10", height: "10" } })),
    {
      c() {
        (e = k("span")),
          B(t.$$.fragment),
          s(e, "class", "bonus-item-icon-activated svelte-5ked6z");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p: j,
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function Ts(o) {
  let e,
    t = o[6].requiredActivations + "",
    n,
    i,
    l = M("ntp_billing_popup__signups") + "",
    r;
  return {
    c() {
      (e = k("span")),
        (n = V(t)),
        (i = x()),
        (r = V(l)),
        s(e, "class", "bonus-item-signups svelte-5ked6z");
    },
    m(c, a) {
      y(c, e, a), f(e, n), f(e, i), f(e, r);
    },
    p(c, a) {
      a & 2 && t !== (t = c[6].requiredActivations + "") && Y(n, t);
    },
    i: j,
    o: j,
    d(c) {
      c && C(e);
    },
  };
}
function qs(o) {
  let e, t;
  function n() {
    return o[5](o[6]);
  }
  return (
    (e = new ce({
      props: {
        size: "small",
        disabled:
          o[6].requiredActivations !== o[2]?.requiredActivations || o[3],
        $$slots: { default: [Ns] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", n),
    {
      c() {
        B(e.$$.fragment);
      },
      m(i, l) {
        P(e, i, l), (t = !0);
      },
      p(i, l) {
        o = i;
        let r = {};
        l & 14 &&
          (r.disabled =
            o[6].requiredActivations !== o[2]?.requiredActivations || o[3]),
          l & 1034 && (r.$$scope = { dirty: l, ctx: o }),
          e.$set(r);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        v(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Es(o) {
  let e, t, n, i;
  return (
    (e = new pt({})),
    {
      c() {
        B(e.$$.fragment),
          (t = x()),
          (n = k("strong")),
          (n.textContent = `${M("ntp_billing_popup__activating")}`);
      },
      m(l, r) {
        P(e, l, r), y(l, t, r), y(l, n, r), (i = !0);
      },
      p: j,
      i(l) {
        i || (_(e.$$.fragment, l), (i = !0));
      },
      o(l) {
        v(e.$$.fragment, l), (i = !1);
      },
      d(l) {
        z(e, l), l && C(t), l && C(n);
      },
    }
  );
}
function js(o) {
  let e,
    t =
      (o[6].wasActivated
        ? M("ntp_billing_popup__activated")
        : M("ntp_billing_popup__activate")) + "",
    n;
  return {
    c() {
      (e = k("strong")), (n = V(t));
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 2 &&
        t !==
          (t =
            (i[6].wasActivated
              ? M("ntp_billing_popup__activated")
              : M("ntp_billing_popup__activate")) + "") &&
        Y(n, t);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function Ns(o) {
  let e,
    t,
    n,
    i,
    l = [js, Es],
    r = [];
  function c(a, p) {
    return a[3] ? 1 : 0;
  }
  return (
    (e = c(o, -1)),
    (t = r[e] = l[e](o)),
    {
      c() {
        t.c(), (n = ae());
      },
      m(a, p) {
        r[e].m(a, p), y(a, n, p), (i = !0);
      },
      p(a, p) {
        let u = e;
        (e = c(a, p)),
          e === u
            ? r[e].p(a, p)
            : (U(),
              v(r[u], 1, 1, () => {
                r[u] = null;
              }),
              W(),
              (t = r[e]),
              t ? t.p(a, p) : ((t = r[e] = l[e](a)), t.c()),
              _(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        i || (_(t), (i = !0));
      },
      o(a) {
        v(t), (i = !1);
      },
      d(a) {
        r[e].d(a), a && C(n);
      },
    }
  );
}
function Vo(o, e) {
  let t,
    n,
    i,
    l,
    r,
    c = e[7]
      ? "Forever-free Pro Plan"
      : `${e[6].durationInMonths} month of Pro Plan`,
    a,
    p,
    u,
    d,
    m,
    g,
    h = [$s, As],
    b = [];
  function w(N, H) {
    return N[6].wasActivated ? 0 : 1;
  }
  (n = w(e, -1)), (i = b[n] = h[n](e));
  let S = [qs, Ts],
    L = [];
  function I(N, H) {
    return !N[6].wasActivated && N[6].requiredActivations <= N[0] ? 0 : 1;
  }
  return (
    (u = I(e, -1)),
    (d = L[u] = S[u](e)),
    {
      key: o,
      first: null,
      c() {
        (t = k("div")),
          i.c(),
          (l = x()),
          (r = k("span")),
          (a = V(c)),
          (p = x()),
          d.c(),
          (m = x()),
          s(r, "class", "bonus-item-label svelte-5ked6z"),
          s(t, "class", "bonus-item svelte-5ked6z"),
          te(t, "bonus-item-activated", e[6].wasActivated),
          (this.first = t);
      },
      m(N, H) {
        y(N, t, H),
          b[n].m(t, null),
          f(t, l),
          f(t, r),
          f(r, a),
          f(t, p),
          L[u].m(t, null),
          f(t, m),
          (g = !0);
      },
      p(N, H) {
        e = N;
        let O = n;
        (n = w(e, H)),
          n === O
            ? b[n].p(e, H)
            : (U(),
              v(b[O], 1, 1, () => {
                b[O] = null;
              }),
              W(),
              (i = b[n]),
              i ? i.p(e, H) : ((i = b[n] = h[n](e)), i.c()),
              _(i, 1),
              i.m(t, l)),
          (!g || H & 2) &&
            c !==
              (c = e[7]
                ? "Forever-free Pro Plan"
                : `${e[6].durationInMonths} month of Pro Plan`) &&
            Y(a, c);
        let F = u;
        (u = I(e, H)),
          u === F
            ? L[u].p(e, H)
            : (U(),
              v(L[F], 1, 1, () => {
                L[F] = null;
              }),
              W(),
              (d = L[u]),
              d ? d.p(e, H) : ((d = L[u] = S[u](e)), d.c()),
              _(d, 1),
              d.m(t, m)),
          (!g || H & 2) && te(t, "bonus-item-activated", e[6].wasActivated);
      },
      i(N) {
        g || (_(i), _(d), (g = !0));
      },
      o(N) {
        v(i), v(d), (g = !1);
      },
      d(N) {
        N && C(t), b[n].d(), L[u].d();
      },
    }
  );
}
function Hs(o) {
  let e,
    t = [],
    n = new Map(),
    i,
    l = o[1],
    r = (c) => c[9];
  for (let c = 0; c < l.length; c += 1) {
    let a = Fo(o, l, c),
      p = r(a);
    n.set(p, (t[c] = Vo(p, a)));
  }
  return {
    c() {
      e = k("div");
      for (let c = 0; c < t.length; c += 1) t[c].c();
      s(e, "class", "bonuses-list svelte-5ked6z");
    },
    m(c, a) {
      y(c, e, a);
      for (let p = 0; p < t.length; p += 1) t[p] && t[p].m(e, null);
      i = !0;
    },
    p(c, [a]) {
      a & 31 &&
        ((l = c[1]),
        U(),
        (t = Me(t, a, r, 1, c, l, n, e, ze, Vo, null, Fo)),
        W());
    },
    i(c) {
      if (!i) {
        for (let a = 0; a < l.length; a += 1) _(t[a]);
        i = !0;
      }
    },
    o(c) {
      for (let a = 0; a < t.length; a += 1) v(t[a]);
      i = !1;
    },
    d(c) {
      c && C(e);
      for (let a = 0; a < t.length; a += 1) t[a].d();
    },
  };
}
function Fs(o, e, t) {
  let { activations: n } = e,
    { breakpoints: i } = e,
    { bestBreakpoint: l } = e,
    r = !1,
    c = (p) => {
      t(3, (r = !0)),
        setTimeout(() => {
          t(3, (r = !1));
        }, 2e3),
        $.actions.startInvitesBonusTime(),
        $.actions.sendAnalyticsEvent(
          "launchpad.invitations.activate-bonus-button-clicked",
          { "bonus-months": p }
        );
    },
    a = (p) => c(p.durationInMonths);
  return (
    (o.$$set = (p) => {
      "activations" in p && t(0, (n = p.activations)),
        "breakpoints" in p && t(1, (i = p.breakpoints)),
        "bestBreakpoint" in p && t(2, (l = p.bestBreakpoint));
    }),
    [n, i, l, r, c, a]
  );
}
var Xt = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Fs,
          Hs,
          T,
          { activations: 0, breakpoints: 1, bestBreakpoint: 2 },
          Ls
        );
    }
  },
  Go = Xt;
A();
function Vs(o) {
  R(
    o,
    "svelte-pnfhx6",
    ".text-container.svelte-pnfhx6{display:flex;flex-direction:column;row-gap:6px}.title.svelte-pnfhx6{font-weight:700;font-size:18px;color:var(--billing-modal-title)}.invitation-stats.svelte-pnfhx6{display:flex;flex-direction:row;align-items:center;column-gap:7px}.v-delimiter.svelte-pnfhx6{width:0;height:12px;border:0.5px solid rgba(0 0 0 / 0.08)}"
  );
}
function Gs(o) {
  let e, t;
  return (
    (e = new Oi({ props: { width: "14", height: "14" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ds(o) {
  let e = M("ntp_billing_popup__invites_description_tooltip") + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p: j,
    d(n) {
      n && C(t);
    },
  };
}
function Rs(o) {
  let e,
    t,
    n = M("ntp_billing_popup__invites_title_1") + "",
    i,
    l,
    r,
    c,
    a = M("ntp_billing_popup__invites_title_2") + "",
    p,
    u,
    d,
    m = M("ntp_billing_popup__invites_description", [o[2].toString()]) + "",
    g,
    h,
    b,
    w,
    S,
    L = M("ntp_billing_popup__invites_stats_activations") + "",
    I,
    N,
    H,
    O,
    F,
    D,
    J,
    Z = M("ntp_billing_popup__invites_stats_downloads") + "",
    ee,
    X,
    ie,
    oe;
  return (
    (r = new Ye({})),
    (ie = new Ue({
      props: { $$slots: { tooltip: [Ds], default: [Gs] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (i = V(n)),
          (l = x()),
          B(r.$$.fragment),
          (c = x()),
          (p = V(a)),
          (u = x()),
          (d = k("div")),
          (g = x()),
          (h = k("div")),
          (b = k("div")),
          (w = V(o[0])),
          (S = x()),
          (I = V(L)),
          (N = x()),
          (H = k("span")),
          (O = x()),
          (F = k("div")),
          (D = V(o[1])),
          (J = x()),
          (ee = V(Z)),
          (X = x()),
          B(ie.$$.fragment),
          s(t, "class", "title svelte-pnfhx6"),
          s(d, "class", "description"),
          s(e, "class", "text-container svelte-pnfhx6"),
          s(b, "class", "sign-ups"),
          s(H, "class", "v-delimiter svelte-pnfhx6"),
          s(F, "class", "downloads"),
          s(h, "class", "invitation-stats svelte-pnfhx6");
      },
      m(le, se) {
        y(le, e, se),
          f(e, t),
          f(t, i),
          f(t, l),
          P(r, t, null),
          f(t, c),
          f(t, p),
          f(e, u),
          f(e, d),
          (d.innerHTML = m),
          y(le, g, se),
          y(le, h, se),
          f(h, b),
          f(b, w),
          f(b, S),
          f(b, I),
          f(h, N),
          f(h, H),
          f(h, O),
          f(h, F),
          f(F, D),
          f(F, J),
          f(F, ee),
          f(h, X),
          P(ie, h, null),
          (oe = !0);
      },
      p(le, [se]) {
        (!oe || se & 4) &&
          m !==
            (m =
              M("ntp_billing_popup__invites_description", [le[2].toString()]) +
              "") &&
          (d.innerHTML = m),
          (!oe || se & 1) && Y(w, le[0]),
          (!oe || se & 2) && Y(D, le[1]);
        let de = {};
        se & 8 && (de.$$scope = { dirty: se, ctx: le }), ie.$set(de);
      },
      i(le) {
        oe || (_(r.$$.fragment, le), _(ie.$$.fragment, le), (oe = !0));
      },
      o(le) {
        v(r.$$.fragment, le), v(ie.$$.fragment, le), (oe = !1);
      },
      d(le) {
        le && C(e), z(r), le && C(g), le && C(h), z(ie);
      },
    }
  );
}
function Us(o, e, t) {
  let { activations: n } = e,
    { downloads: i } = e,
    { foreverFreeInvitesCount: l } = e;
  return (
    (o.$$set = (r) => {
      "activations" in r && t(0, (n = r.activations)),
        "downloads" in r && t(1, (i = r.downloads)),
        "foreverFreeInvitesCount" in r && t(2, (l = r.foreverFreeInvitesCount));
    }),
    [n, i, l]
  );
}
var Qt = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Us,
          Rs,
          T,
          { activations: 0, downloads: 1, foreverFreeInvitesCount: 2 },
          Vs
        );
    }
  },
  Do = Qt;
A();
function Ws(o) {
  R(
    o,
    "svelte-17btrj3",
    ".progress-bar.svelte-17btrj3.svelte-17btrj3{display:flex;width:100%;margin-top:-5px;align-items:center}.progress-bar.svelte-17btrj3 progress.svelte-17btrj3{appearance:none;width:100%;height:5px}.progress-bar.svelte-17btrj3 progress.svelte-17btrj3::-webkit-progress-bar{background:rgb(26 140 255 / 0.16);border-radius:100px;overflow:hidden}.progress-bar.svelte-17btrj3 progress.svelte-17btrj3::-webkit-progress-value{background:#1977f3;border-radius:100px 0 0 100px;transform:matrix(-1, 0, 0, 1, 0, 0);min-width:10px}.progress-bar-breakpoint.svelte-17btrj3.svelte-17btrj3{position:absolute;width:22px;height:22px;box-shadow:0 2px 6px rgb(0 0 0 / 0.12);border-radius:50px;text-align:center;background:var(--background-primary);border:1px solid var(--billing-info-block-border);display:flex;justify-content:center;align-items:center;z-index:2;color:var(--text-primary-color)}.progress-bar-breakpoint-grey-colored.svelte-17btrj3.svelte-17btrj3{background:#a0a0a0;color:white;border:none}.progress-bar-breakpoint-passed.svelte-17btrj3.svelte-17btrj3{color:#fff;background:#73d864;border-color:var(--billing-info-block-border)}"
  );
}
function Ro(o, e, t) {
  let n = o.slice();
  return (n[5] = e[t]), (n[7] = t), n;
}
function Os(o) {
  let e, t;
  return (
    (e = new Ue({
      props: { $$slots: { tooltip: [Xs], default: [Ks] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 257 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Zs(o) {
  let e, t;
  return (
    (e = new Ke({ props: { width: "10", height: "10" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ks(o) {
  let e = o[5].requiredActivations + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p(n, i) {
      i & 1 && e !== (e = n[5].requiredActivations + "") && Y(t, e);
    },
    d(n) {
      n && C(t);
    },
  };
}
function Ys(o) {
  let e =
      M("ntp_billing_popup__invitations_tooltip_2", [
        o[5].requiredActivations.toString(),
        o[5].durationInMonths.toString(),
      ]) + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p(n, i) {
      i & 1 &&
        e !==
          (e =
            M("ntp_billing_popup__invitations_tooltip_2", [
              n[5].requiredActivations.toString(),
              n[5].durationInMonths.toString(),
            ]) + "") &&
        Y(t, e);
    },
    d(n) {
      n && C(t);
    },
  };
}
function Js(o) {
  let e =
      M("ntp_billing_popup__invitations_tooltip_1", [
        o[5].requiredActivations.toString(),
      ]) + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p(n, i) {
      i & 1 &&
        e !==
          (e =
            M("ntp_billing_popup__invitations_tooltip_1", [
              n[5].requiredActivations.toString(),
            ]) + "") &&
        Y(t, e);
    },
    d(n) {
      n && C(t);
    },
  };
}
function Xs(o) {
  let e;
  function t(l, r) {
    return l[5].durationInMonths === null ? Js : Ys;
  }
  let n = t(o, -1),
    i = n(o);
  return {
    c() {
      (e = k("span")), i.c(), Se(e, "min-width", "150px");
    },
    m(l, r) {
      y(l, e, r), i.m(e, null);
    },
    p(l, r) {
      n === (n = t(l, r)) && i
        ? i.p(l, r)
        : (i.d(1), (i = n(l)), i && (i.c(), i.m(e, null)));
    },
    d(l) {
      l && C(e), i.d();
    },
  };
}
function Uo(o, e) {
  let t,
    n,
    i,
    l,
    r,
    c = [Zs, Os],
    a = [];
  function p(u, d) {
    return u[5].wasActivated ? 0 : 1;
  }
  return (
    (n = p(e, -1)),
    (i = a[n] = c[n](e)),
    {
      key: o,
      first: null,
      c() {
        (t = k("div")),
          i.c(),
          s(t, "class", "progress-bar-breakpoint svelte-17btrj3"),
          s(
            t,
            "style",
            (l = `left: min(90%, ${(e[5].requiredActivations / e[3]) * 100}%)`)
          ),
          te(t, "progress-bar-breakpoint-grey-colored", e[2]),
          te(
            t,
            "progress-bar-breakpoint-passed",
            e[5].requiredActivations <= e[1]
          ),
          (this.first = t);
      },
      m(u, d) {
        y(u, t, d), a[n].m(t, null), (r = !0);
      },
      p(u, d) {
        e = u;
        let m = n;
        (n = p(e, d)),
          n === m
            ? a[n].p(e, d)
            : (U(),
              v(a[m], 1, 1, () => {
                a[m] = null;
              }),
              W(),
              (i = a[n]),
              i ? i.p(e, d) : ((i = a[n] = c[n](e)), i.c()),
              _(i, 1),
              i.m(t, null)),
          (!r ||
            (d & 9 &&
              l !==
                (l = `left: min(90%, ${
                  (e[5].requiredActivations / e[3]) * 100
                }%)`))) &&
            s(t, "style", l),
          (!r || d & 4) && te(t, "progress-bar-breakpoint-grey-colored", e[2]),
          (!r || d & 3) &&
            te(
              t,
              "progress-bar-breakpoint-passed",
              e[5].requiredActivations <= e[1]
            );
      },
      i(u) {
        r || (_(i), (r = !0));
      },
      o(u) {
        v(i), (r = !1);
      },
      d(u) {
        u && C(t), a[n].d();
      },
    }
  );
}
function Qs(o) {
  let e,
    t = [],
    n = new Map(),
    i,
    l,
    r,
    c = o[0],
    a = (p) => p[7];
  for (let p = 0; p < c.length; p += 1) {
    let u = Ro(o, c, p),
      d = a(u);
    n.set(d, (t[p] = Uo(d, u)));
  }
  return {
    c() {
      e = k("div");
      for (let p = 0; p < t.length; p += 1) t[p].c();
      (i = x()),
        (l = k("progress")),
        s(l, "max", o[3]),
        (l.value = o[1]),
        s(l, "class", "svelte-17btrj3"),
        s(e, "class", "progress-bar svelte-17btrj3");
    },
    m(p, u) {
      y(p, e, u);
      for (let d = 0; d < t.length; d += 1) t[d] && t[d].m(e, null);
      f(e, i), f(e, l), (r = !0);
    },
    p(p, [u]) {
      u & 15 &&
        ((c = p[0]), U(), (t = Me(t, u, a, 1, p, c, n, e, ze, Uo, i, Ro)), W()),
        (!r || u & 8) && s(l, "max", p[3]),
        (!r || u & 2) && (l.value = p[1]);
    },
    i(p) {
      if (!r) {
        for (let u = 0; u < c.length; u += 1) _(t[u]);
        r = !0;
      }
    },
    o(p) {
      for (let u = 0; u < t.length; u += 1) v(t[u]);
      r = !1;
    },
    d(p) {
      p && C(e);
      for (let u = 0; u < t.length; u += 1) t[u].d();
    },
  };
}
function ec(o, e, t) {
  let n,
    i,
    { breakpoints: l } = e,
    { activations: r } = e,
    { isGreyStyled: c = !1 } = e;
  return (
    (o.$$set = (a) => {
      "breakpoints" in a && t(0, (l = a.breakpoints)),
        "activations" in a && t(1, (r = a.activations)),
        "isGreyStyled" in a && t(2, (c = a.isGreyStyled));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: t(4, (n = l[l.length - 1]));
      }
      if (o.$$.dirty & 16) {
        e: t(3, (i = n?.requiredActivations ?? 20));
      }
    }),
    [l, r, c, i, n]
  );
}
var en = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          ec,
          Qs,
          T,
          { breakpoints: 0, activations: 1, isGreyStyled: 2 },
          Ws
        );
    }
  },
  ut = en;
A();
A();
A();
function tc(o) {
  let e, t, n, i, l, r, c, a;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        (n = G("path")),
        (i = G("defs")),
        (l = G("linearGradient")),
        (r = G("stop")),
        (c = G("stop")),
        s(t, "fill-rule", "evenodd"),
        s(t, "clip-rule", "evenodd"),
        s(
          t,
          "d",
          "M12.0009 1.28125C5.96277 1.28125 1.2832 5.7042 1.2832 11.6777C1.2832 14.8024 2.56416 17.5023 4.64948 19.3677C4.82415 19.5251 4.92982 19.7429 4.93844 19.978L4.99667 21.8843C5.01608 22.4924 5.64361 22.8871 6.19999 22.6434L8.32628 21.7053C8.50743 21.6255 8.70798 21.6104 8.89775 21.6622C9.87464 21.9317 10.9162 22.0741 12.0009 22.0741C18.0391 22.0741 22.7187 17.6511 22.7187 11.6777C22.7187 5.7042 18.0391 1.28125 12.0009 1.28125Z"
        ),
        s(t, "fill", "url(#paint0_linear_1034_46371)"),
        s(n, "fill-rule", "evenodd"),
        s(n, "clip-rule", "evenodd"),
        s(
          n,
          "d",
          "M5.56592 14.7177L8.71439 9.72331C9.21469 8.92972 10.2886 8.73133 11.0391 9.29417L13.5428 11.1725C13.7735 11.345 14.0883 11.3428 14.3169 11.1703L17.6983 8.6041C18.149 8.26122 18.7399 8.80249 18.4358 9.28123L15.2895 14.2735C14.7892 15.0671 13.7153 15.2655 12.9648 14.7026L10.4611 12.8243C10.2304 12.6518 9.91555 12.654 9.68696 12.8265L6.30344 15.3949C5.85273 15.7377 5.26185 15.1965 5.56592 14.7177Z"
        ),
        s(n, "fill", "white"),
        s(r, "stop-color", "#00B2FF"),
        s(c, "offset", "1"),
        s(c, "stop-color", "#006AFF"),
        s(l, "id", "paint0_linear_1034_46371"),
        s(l, "x1", "12.0009"),
        s(l, "y1", "1.28125"),
        s(l, "x2", "12.0009"),
        s(l, "y2", "22.7164"),
        s(l, "gradientUnits", "userSpaceOnUse"),
        s(e, "class", (a = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 24 24"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(p, u) {
      y(p, e, u), f(e, t), f(e, n), f(e, i), f(i, l), f(l, r), f(l, c);
    },
    p(p, [u]) {
      u & 4 && a !== (a = `icon ${p[2]}`) && s(e, "class", a),
        u & 1 && s(e, "width", p[0]),
        u & 2 && s(e, "height", p[1]);
    },
    i: j,
    o: j,
    d(p) {
      p && C(e);
    },
  };
}
function nc(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var tn = class extends E {
    constructor(e) {
      super(), q(this, e, nc, tc, T, { width: 0, height: 1, className: 2 });
    }
  },
  Wo = tn;
A();
function ic(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g;
  return {
    c() {
      (e = G("svg")),
        (t = G("g")),
        (n = G("rect")),
        (i = G("path")),
        (l = G("path")),
        (r = G("path")),
        (c = G("circle")),
        (a = G("rect")),
        (p = G("path")),
        (u = G("defs")),
        (d = G("clipPath")),
        (m = G("rect")),
        s(n, "x", "1"),
        s(n, "y", "3"),
        s(n, "width", "22"),
        s(n, "height", "18"),
        s(n, "rx", "2"),
        s(n, "fill", "#D6D6D6"),
        s(
          i,
          "d",
          "M-0.100391 22.125L10.5696 11.2125C11.3541 10.4102 12.6451 10.4102 13.4296 11.2125L24.0996 22.125L-0.100391 22.125Z"
        ),
        s(i, "fill", "white"),
        s(i, "fill-opacity", "0.5"),
        s(
          l,
          "d",
          "M24.2218 2.60938L13.4696 14.2642C12.6776 15.1226 11.3216 15.1226 10.5296 14.2642L-0.222656 2.60938H24.2218Z"
        ),
        s(l, "fill", "black"),
        s(l, "fill-opacity", "0.08"),
        s(
          r,
          "d",
          "M24.2218 3L13.3462 12.9036C12.5829 13.5986 11.4162 13.5986 10.653 12.9036L-0.222656 3H24.2218Z"
        ),
        s(r, "fill", "#F5F5F5"),
        s(t, "clip-path", "url(#clip0_1057_41967)"),
        s(c, "cx", "18.5"),
        s(c, "cy", "18.6016"),
        s(c, "r", "5.5"),
        s(c, "fill", "#59B64B"),
        s(a, "x", "15.4717"),
        s(a, "y", "17.9883"),
        s(a, "width", "4.86144"),
        s(a, "height", "1.22222"),
        s(a, "fill", "white"),
        s(p, "d", "M18.373 16.2812L20.693 18.6012L18.373 20.9212"),
        s(p, "stroke", "white"),
        s(m, "x", "1"),
        s(m, "y", "3"),
        s(m, "width", "22"),
        s(m, "height", "18"),
        s(m, "rx", "2"),
        s(m, "fill", "white"),
        s(d, "id", "clip0_1057_41967"),
        s(e, "class", (g = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 24 24"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(h, b) {
      y(h, e, b),
        f(e, t),
        f(t, n),
        f(t, i),
        f(t, l),
        f(t, r),
        f(e, c),
        f(e, a),
        f(e, p),
        f(e, u),
        f(u, d),
        f(d, m);
    },
    p(h, [b]) {
      b & 4 && g !== (g = `icon ${h[2]}`) && s(e, "class", g),
        b & 1 && s(e, "width", h[0]),
        b & 2 && s(e, "height", h[1]);
    },
    i: j,
    o: j,
    d(h) {
      h && C(e);
    },
  };
}
function oc(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var nn = class extends E {
    constructor(e) {
      super(), q(this, e, oc, ic, T, { width: 0, height: 1, className: 2 });
    }
  },
  Oo = nn;
function ac(o) {
  R(
    o,
    "svelte-1rw9d1j",
    ".sharing-icons.svelte-1rw9d1j{display:flex;flex-direction:row;justify-content:space-between;width:100%}.sharing-icons.svelte-1rw9d1j .oauth-button{background:none;cursor:pointer;width:fit-content;height:100%;padding-top:2px;margin:0}.icon-wrapper.svelte-1rw9d1j{cursor:pointer}"
  );
}
function Zo(o, e, t) {
  let n = o.slice();
  return (n[8] = e[t]), n;
}
function Ko(o) {
  let e, t, n, i, l, r;
  var c = o[8].component;
  function a(u) {
    return { props: { width: "24", height: "24" } };
  }
  c && (t = $e(c, a(o)));
  function p() {
    return o[6](o[8]);
  }
  return {
    c() {
      (e = k("a")),
        t && B(t.$$.fragment),
        s(e, "class", "icon-wrapper svelte-1rw9d1j"),
        s(e, "target", "_blank"),
        s(e, "rel", "noreferrer"),
        s(e, "href", (n = o[8].href));
    },
    m(u, d) {
      y(u, e, d),
        t && P(t, e, null),
        (i = !0),
        l || ((r = Q(e, "click", p)), (l = !0));
    },
    p(u, d) {
      if (((o = u), d & 1 && c !== (c = o[8].component))) {
        if (t) {
          U();
          let m = t;
          v(m.$$.fragment, 1, 0, () => {
            z(m, 1);
          }),
            W();
        }
        c
          ? ((t = $e(c, a(o))),
            B(t.$$.fragment),
            _(t.$$.fragment, 1),
            P(t, e, null))
          : (t = null);
      }
      (!i || (d & 1 && n !== (n = o[8].href))) && s(e, "href", n);
    },
    i(u) {
      i || (t && _(t.$$.fragment, u), (i = !0));
    },
    o(u) {
      t && v(t.$$.fragment, u), (i = !1);
    },
    d(u) {
      u && C(e), t && z(t), (l = !1), r();
    },
  };
}
function sc(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c = o[0],
    a = [];
  for (let u = 0; u < c.length; u += 1) a[u] = Ko(Zo(o, c, u));
  let p = (u) =>
    v(a[u], 1, 1, () => {
      a[u] = null;
    });
  return (
    (n = new Qe({
      props: {
        className: "oauth-button",
        type: "google",
        scope: "CONTACTS",
        alwaysAuth: !0,
        isStateless: !0,
      },
    })),
    n.$on("auth", o[2]),
    (l = new Qe({
      props: {
        className: "oauth-button",
        type: "slack",
        scope: "CONTACTS",
        isStateless: !0,
      },
    })),
    l.$on("auth", o[3]),
    {
      c() {
        e = k("div");
        for (let u = 0; u < a.length; u += 1) a[u].c();
        (t = x()),
          B(n.$$.fragment),
          (i = x()),
          B(l.$$.fragment),
          s(e, "class", "sharing-icons svelte-1rw9d1j");
      },
      m(u, d) {
        y(u, e, d);
        for (let m = 0; m < a.length; m += 1) a[m] && a[m].m(e, null);
        f(e, t), P(n, e, null), f(e, i), P(l, e, null), (r = !0);
      },
      p(u, [d]) {
        if (d & 3) {
          c = u[0];
          let m;
          for (m = 0; m < c.length; m += 1) {
            let g = Zo(u, c, m);
            a[m]
              ? (a[m].p(g, d), _(a[m], 1))
              : ((a[m] = Ko(g)), a[m].c(), _(a[m], 1), a[m].m(e, t));
          }
          for (U(), m = c.length; m < a.length; m += 1) p(m);
          W();
        }
      },
      i(u) {
        if (!r) {
          for (let d = 0; d < c.length; d += 1) _(a[d]);
          _(n.$$.fragment, u), _(l.$$.fragment, u), (r = !0);
        }
      },
      o(u) {
        a = a.filter(Boolean);
        for (let d = 0; d < a.length; d += 1) v(a[d]);
        v(n.$$.fragment, u), v(l.$$.fragment, u), (r = !1);
      },
      d(u) {
        u && C(e), Pe(a, u), z(n), z(l);
      },
    }
  );
}
function cc(o, e, t) {
  let n,
    i,
    { invitationLink: l } = e,
    r = ve(),
    c = (d) => {
      r("click", d);
    },
    a = ({ detail: d }) => {
      St.actions.showGoogleContactsPicker(d),
        $.actions.sendAnalyticsEvent(
          "launchpad.invitations.share-button-clicked",
          { "share-type": "gsuite" }
        );
    },
    p = () => {
      St.actions.showSlackContactsPicker(),
        $.actions.sendAnalyticsEvent(
          "launchpad.invitations.share-button-clicked",
          { "share-type": "slack" }
        );
    },
    u = (d) => c(d.type);
  return (
    (o.$$set = (d) => {
      "invitationLink" in d && t(4, (l = d.invitationLink));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: t(
          5,
          (n = encodeURIComponent(
            `${M("ntp_billing_popup__socials_text")} ${l}`
          ))
        );
      }
      if (o.$$.dirty & 48) {
        e: t(
          0,
          (i = [
            {
              href: `https://api.whatsapp.com/send?text=${n}`,
              component: Fi,
              type: "whatsapp",
            },
            {
              href: `https://twitter.com/intent/tweet?text=${n}`,
              component: ji,
              type: "twitter",
            },
            {
              href: `https://www.facebook.com/sharer/sharer.php?display=page&u=${l}`,
              component: Ni,
              type: "facebook",
            },
            {
              href: `https://www.linkedin.com/sharing/share-offsite/?url=${l}`,
              component: Hi,
              type: "linkedin",
            },
            {
              href: `https://www.facebook.com/sharer/sharer.php?display=page&u=${l}`,
              component: Wo,
              type: "fbmessenger",
            },
            { href: `mailto:?body=${n}`, component: Oo, type: "mail" },
          ])
        );
      }
    }),
    [i, c, a, p, l, n, u]
  );
}
var on = class extends E {
    constructor(e) {
      super(), q(this, e, cc, sc, T, { invitationLink: 4 }, ac);
    }
  },
  ft = on;
A();
function pc(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h;
  return {
    c() {
      (e = G("svg")),
        (t = G("g")),
        (n = G("g")),
        (i = G("path")),
        (l = G("path")),
        (r = G("path")),
        (c = G("path")),
        (a = G("path")),
        (p = G("defs")),
        (u = G("clipPath")),
        (d = G("rect")),
        (m = G("clipPath")),
        (g = G("rect")),
        s(
          i,
          "d",
          "M1.36364 17.5001H4.54545V9.77286L0 6.36377V16.1365C0 16.891 0.611364 17.5001 1.36364 17.5001Z"
        ),
        s(i, "fill", "#4285F4"),
        s(
          l,
          "d",
          "M15.4546 17.5001H18.6364C19.391 17.5001 20 16.8888 20 16.1365V6.36377L15.4546 9.77286"
        ),
        s(l, "fill", "#34A853"),
        s(
          r,
          "d",
          "M15.4546 3.8636V9.77269L20 6.3636V4.54542C20 2.85905 18.075 1.89769 16.7273 2.90905"
        ),
        s(r, "fill", "#FBBC04"),
        s(
          c,
          "d",
          "M4.54541 9.77286V3.86377L9.99996 7.95468L15.4545 3.86377V9.77286L9.99996 13.8638"
        ),
        s(c, "fill", "#EA4335"),
        s(
          a,
          "d",
          "M0 4.54542V6.3636L4.54545 9.77269V3.8636L3.27273 2.90905C1.92273 1.89769 0 2.85905 0 4.54542Z"
        ),
        s(a, "fill", "#C5221F"),
        s(n, "clip-path", "url(#clip1_2427_60880)"),
        s(t, "clip-path", "url(#clip0_2427_60880)"),
        s(d, "width", "20"),
        s(d, "height", "20"),
        s(d, "fill", "white"),
        s(u, "id", "clip0_2427_60880"),
        s(g, "width", "20"),
        s(g, "height", "15"),
        s(g, "fill", "white"),
        s(g, "transform", "translate(0 2.5)"),
        s(m, "id", "clip1_2427_60880"),
        s(e, "class", (h = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 20 20"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(b, w) {
      y(b, e, w),
        f(e, t),
        f(t, n),
        f(n, i),
        f(n, l),
        f(n, r),
        f(n, c),
        f(n, a),
        f(e, p),
        f(p, u),
        f(u, d),
        f(p, m),
        f(m, g);
    },
    p(b, [w]) {
      w & 4 && h !== (h = `icon ${b[2]}`) && s(e, "class", h),
        w & 1 && s(e, "width", b[0]),
        w & 2 && s(e, "height", b[1]);
    },
    i: j,
    o: j,
    d(b) {
      b && C(e);
    },
  };
}
function uc(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var ln = class extends E {
    constructor(e) {
      super(), q(this, e, uc, pc, T, { width: 0, height: 1, className: 2 });
    }
  },
  Yo = ln;
function fc(o) {
  R(
    o,
    "svelte-g4mvcc",
    ".sharing-block.svelte-g4mvcc{display:flex;flex-direction:column;width:100%;row-gap:5px;margin-top:10px}.fake-input.svelte-g4mvcc{background:var(--billing-copy-input);border:1px solid var(--billing-copy-input);border-radius:6px;padding:5px 14px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;color:var(--billing-copy-text);margin-bottom:16px}.fake-input-text.svelte-g4mvcc{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.fake-input-btn.svelte-g4mvcc{font-weight:510;font-size:11px;line-height:13px;letter-spacing:0.03em;text-transform:uppercase;color:#1977f3;margin-right:-20px}"
  );
}
function dc(o) {
  let e,
    t =
      (o[2]
        ? M("ntp_billing_popup__socials_copied")
        : M("ntp_billing_popup__socials_copy_link")) + "",
    n;
  return {
    c() {
      (e = k("span")),
        (n = V(t)),
        s(e, "class", "fake-input-btn svelte-g4mvcc");
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 4 &&
        t !==
          (t =
            (i[2]
              ? M("ntp_billing_popup__socials_copied")
              : M("ntp_billing_popup__socials_copy_link")) + "") &&
        Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function Jo(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m;
  return (
    (r = new Yo({ props: { width: "20", height: "20" } })),
    (d = new Qe({
      props: {
        alwaysAuth: !0,
        disposeOnDestroy: !1,
        scope: "EMAIL_SIGNATURES",
        type: "google",
        useCustomDesign: !0,
        $$slots: { default: [mc] },
        $$scope: { ctx: o },
      },
    })),
    d.$on("auth", o[5]),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (n = k("div")),
          (n.textContent = `${M("ntp_billing_popup__gmail_title")}`),
          (i = x()),
          (l = k("div")),
          B(r.$$.fragment),
          (c = x()),
          (a = k("div")),
          (a.textContent = `${M("ntp_billing_popup__gmail_label")}`),
          (p = x()),
          (u = k("div")),
          B(d.$$.fragment),
          s(n, "class", "title"),
          s(l, "class", "icon-card"),
          s(t, "class", "row"),
          s(e, "class", "gmail-card");
      },
      m(g, h) {
        y(g, e, h),
          f(e, t),
          f(t, n),
          f(t, i),
          f(t, l),
          P(r, l, null),
          f(e, c),
          f(e, a),
          f(e, p),
          f(e, u),
          P(d, u, null),
          (m = !0);
      },
      p(g, h) {
        let b = {};
        h & 128 && (b.$$scope = { dirty: h, ctx: g }), d.$set(b);
      },
      i(g) {
        m || (_(r.$$.fragment, g), _(d.$$.fragment, g), (m = !0));
      },
      o(g) {
        v(r.$$.fragment, g), v(d.$$.fragment, g), (m = !1);
      },
      d(g) {
        g && C(e), z(r), z(d);
      },
    }
  );
}
function mc(o) {
  let e, t;
  return (
    (e = new eo({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function _c(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m;
  (a = new ce({
    props: {
      mod: "transparent",
      $$slots: { default: [dc] },
      $$scope: { ctx: o },
    },
  })),
    a.$on("click", o[3]),
    (u = new ft({ props: { invitationLink: o[0] } })),
    u.$on("click", o[6]);
  let g = o[1] && Jo(o);
  return {
    c() {
      (e = k("div")),
        (t = k("span")),
        (t.textContent = `${M("ntp_billing_popup__socials_title")}`),
        (n = x()),
        (i = k("div")),
        (l = k("span")),
        (r = V(o[0])),
        (c = x()),
        B(a.$$.fragment),
        (p = x()),
        B(u.$$.fragment),
        (d = x()),
        g && g.c(),
        s(t, "class", "sharing-label"),
        s(l, "class", "fake-input-text svelte-g4mvcc"),
        s(i, "class", "fake-input svelte-g4mvcc"),
        s(e, "class", "sharing-block svelte-g4mvcc");
    },
    m(h, b) {
      y(h, e, b),
        f(e, t),
        f(e, n),
        f(e, i),
        f(i, l),
        f(l, r),
        f(i, c),
        P(a, i, null),
        f(e, p),
        P(u, e, null),
        f(e, d),
        g && g.m(e, null),
        (m = !0);
    },
    p(h, [b]) {
      (!m || b & 1) && Y(r, h[0]);
      let w = {};
      b & 132 && (w.$$scope = { dirty: b, ctx: h }), a.$set(w);
      let S = {};
      b & 1 && (S.invitationLink = h[0]),
        u.$set(S),
        h[1]
          ? g
            ? (g.p(h, b), b & 2 && _(g, 1))
            : ((g = Jo(h)), g.c(), _(g, 1), g.m(e, null))
          : g &&
            (U(),
            v(g, 1, 1, () => {
              g = null;
            }),
            W());
    },
    i(h) {
      m || (_(a.$$.fragment, h), _(u.$$.fragment, h), _(g), (m = !0));
    },
    o(h) {
      v(a.$$.fragment, h), v(u.$$.fragment, h), v(g), (m = !1);
    },
    d(h) {
      h && C(e), z(a), z(u), g && g.d();
    },
  };
}
function gc(o, e, t) {
  let { invitationLink: n } = e,
    { isGmailSectionEnabled: i } = e,
    l = !1,
    r = () => {
      t(2, (l = !0)),
        $.actions.sendAnalyticsEvent(
          "launchpad.invitations.copy-link-button-clicked",
          void 0
        ),
        window.navigator.clipboard.writeText(n).catch(xe);
    },
    c = (u) => {
      $.actions.sendAnalyticsEvent(
        "launchpad.invitations.share-button-clicked",
        { "share-type": u }
      );
    },
    a = ({ detail: u }) => {
      $.actions.makeGmailSignature(u, "invitations");
    },
    p = ({ detail: u }) => c(u);
  return (
    (o.$$set = (u) => {
      "invitationLink" in u && t(0, (n = u.invitationLink)),
        "isGmailSectionEnabled" in u && t(1, (i = u.isGmailSectionEnabled));
    }),
    [n, i, l, r, c, a, p]
  );
}
var rn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          gc,
          _c,
          T,
          { invitationLink: 0, isGmailSectionEnabled: 1 },
          fc
        );
    }
  },
  dt = rn;
A();
function hc(o) {
  R(
    o,
    "svelte-30uxi1",
    ".invites-back-btn.svelte-30uxi1{letter-spacing:0.03em;text-transform:uppercase;font-size:10px;font-weight:510;text-align:center;color:var(--billing-modal-feature-item)}.invites-back-btn.svelte-30uxi1 .chevron-left{transform:rotate(180deg);margin-right:7px}"
  );
}
function bc(o) {
  let e, t, n, i, l, r, c;
  return (
    (t = new Ai({
      props: { className: "chevron-left", width: "14px", height: "14px" },
    })),
    {
      c() {
        (e = k("button")),
          B(t.$$.fragment),
          (n = x()),
          (i = k("span")),
          (i.textContent = `${M("ntp_billing_popup__go_back")}`),
          s(e, "class", "invites-back-btn svelte-30uxi1");
      },
      m(a, p) {
        y(a, e, p),
          P(t, e, null),
          f(e, n),
          f(e, i),
          (l = !0),
          r || ((c = Q(e, "click", o[0])), (r = !0));
      },
      p: j,
      i(a) {
        l || (_(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        v(t.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && C(e), z(t), (r = !1), c();
      },
    }
  );
}
function vc(o) {
  let e = ve();
  return [
    () => {
      e("switchToPlan");
    },
  ];
}
var an = class extends E {
    constructor(e) {
      super(), q(this, e, vc, bc, T, {}, hc);
    }
  },
  Xo = an;
function kc(o) {
  R(
    o,
    "svelte-du4wl1",
    ".invites-details-container.svelte-du4wl1{padding:10px 20px 15px;display:flex;flex-direction:column;align-items:flex-start;width:318px;row-gap:20px}"
  );
}
function wc(o) {
  let e, t, n, i, l, r, c, a, p, u, d;
  return (
    (t = new Xo({})),
    t.$on("switchToPlan", o[7]),
    (i = new Do({
      props: {
        activations: o[0],
        downloads: o[1],
        foreverFreeInvitesCount: o[5],
      },
    })),
    (r = new ut({ props: { breakpoints: o[2], activations: o[0] } })),
    (a = new dt({
      props: { invitationLink: o[4], isGmailSectionEnabled: o[6] },
    })),
    (u = new Go({
      props: { breakpoints: o[2], activations: o[0], bestBreakpoint: o[3] },
    })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          (n = x()),
          B(i.$$.fragment),
          (l = x()),
          B(r.$$.fragment),
          (c = x()),
          B(a.$$.fragment),
          (p = x()),
          B(u.$$.fragment),
          s(e, "class", "invites-details-container svelte-du4wl1");
      },
      m(m, g) {
        y(m, e, g),
          P(t, e, null),
          f(e, n),
          P(i, e, null),
          f(e, l),
          P(r, e, null),
          f(e, c),
          P(a, e, null),
          f(e, p),
          P(u, e, null),
          (d = !0);
      },
      p(m, [g]) {
        let h = {};
        g & 1 && (h.activations = m[0]),
          g & 2 && (h.downloads = m[1]),
          g & 32 && (h.foreverFreeInvitesCount = m[5]),
          i.$set(h);
        let b = {};
        g & 4 && (b.breakpoints = m[2]),
          g & 1 && (b.activations = m[0]),
          r.$set(b);
        let w = {};
        g & 16 && (w.invitationLink = m[4]),
          g & 64 && (w.isGmailSectionEnabled = m[6]),
          a.$set(w);
        let S = {};
        g & 4 && (S.breakpoints = m[2]),
          g & 1 && (S.activations = m[0]),
          g & 8 && (S.bestBreakpoint = m[3]),
          u.$set(S);
      },
      i(m) {
        d ||
          (_(t.$$.fragment, m),
          _(i.$$.fragment, m),
          _(r.$$.fragment, m),
          _(a.$$.fragment, m),
          _(u.$$.fragment, m),
          (d = !0));
      },
      o(m) {
        v(t.$$.fragment, m),
          v(i.$$.fragment, m),
          v(r.$$.fragment, m),
          v(a.$$.fragment, m),
          v(u.$$.fragment, m),
          (d = !1);
      },
      d(m) {
        m && C(e), z(t), z(i), z(r), z(a), z(u);
      },
    }
  );
}
function yc(o, e, t) {
  let { activations: n } = e,
    { downloads: i } = e,
    { breakpoints: l } = e,
    { bestBreakpoint: r } = e,
    { invitationLink: c } = e,
    { foreverFreeInvitesCount: a } = e,
    { isGmailSectionEnabled: p } = e;
  function u(d) {
    pe.call(this, o, d);
  }
  return (
    (o.$$set = (d) => {
      "activations" in d && t(0, (n = d.activations)),
        "downloads" in d && t(1, (i = d.downloads)),
        "breakpoints" in d && t(2, (l = d.breakpoints)),
        "bestBreakpoint" in d && t(3, (r = d.bestBreakpoint)),
        "invitationLink" in d && t(4, (c = d.invitationLink)),
        "foreverFreeInvitesCount" in d && t(5, (a = d.foreverFreeInvitesCount)),
        "isGmailSectionEnabled" in d && t(6, (p = d.isGmailSectionEnabled));
    }),
    [n, i, l, r, c, a, p, u]
  );
}
var sn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          yc,
          wc,
          T,
          {
            activations: 0,
            downloads: 1,
            breakpoints: 2,
            bestBreakpoint: 3,
            invitationLink: 4,
            foreverFreeInvitesCount: 5,
            isGmailSectionEnabled: 6,
          },
          kc
        );
    }
  },
  Qo = sn;
A();
A();
A();
function Cc(o) {
  R(
    o,
    "svelte-e6lh49",
    ".active-badge.svelte-e6lh49{background:rgba(89 182 75 / 0.12);border-radius:6px;color:#59b64b;padding:3px 8px;font-weight:600;text-align:center}"
  );
}
function xc(o) {
  let e;
  return {
    c() {
      (e = k("span")),
        (e.textContent = `${M("ntp_billing_popup__plan_active_badge")}`),
        s(e, "class", "active-badge svelte-e6lh49");
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && C(e);
    },
  };
}
var cn = class extends E {
    constructor(e) {
      super(), q(this, e, null, xc, T, {}, Cc);
    }
  },
  mt = cn;
function Sc(o) {
  R(
    o,
    "svelte-1csuq3f",
    ".container.svelte-1csuq3f{display:flex;flex-direction:column;background:var(--billing-info-plan-background);border-radius:8px;padding:18px}.header.svelte-1csuq3f{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.header-text.svelte-1csuq3f{font-weight:700;font-size:18px;line-height:21px;color:var(--billing-modal-col-title)}.features-list.svelte-1csuq3f{display:flex;flex-direction:column;margin-top:12px;row-gap:2px}.feature-item.svelte-1csuq3f{display:flex;flex-direction:row;flex-grow:1;justify-content:space-between;align-items:center;margin-bottom:5px;color:var(--billing-modal-feature-item)}.feature-label.svelte-1csuq3f{font-weight:400}.feature-delimiter.svelte-1csuq3f{display:flex;flex-grow:1;height:1px;border:0;border-top:1px solid var(--billing-modal-col-border);margin:0 7px;padding:0}.feature-limit-badge.svelte-1csuq3f{display:flex;justify-content:center;align-items:center;background:var(--billing-modal-col-border);padding:3px;border-radius:100px;min-height:20px}.feature-limit-badge-sm.svelte-1csuq3f{width:20px;height:20px}.feature-limit-badge-lg.svelte-1csuq3f{padding:3px 8px}.feature-limit-warning.svelte-1csuq3f{background-color:var(--popup-warning-background);border-radius:100px;color:var(--popup-warning-text);padding:3px 5px}"
  );
}
var Ic = (o) => ({}),
  el = (o) => ({});
function tl(o, e, t) {
  let n = o.slice();
  n[5] = e[t];
  let i = n[5].value.toString().length <= 2;
  n[6] = i;
  let l = Number(n[5].current) > Number(n[5].value);
  n[7] = l;
  let r =
    n[6] && !n[5].current ? "feature-limit-badge-sm" : "feature-limit-badge-lg";
  return (n[8] = r), n;
}
var Bc = (o) => ({}),
  nl = (o) => ({});
function Pc(o) {
  let e = M("ntp_billing_popup__plan_limits_header", [o[1].name]) + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p(n, i) {
      i & 2 &&
        e !==
          (e = M("ntp_billing_popup__plan_limits_header", [n[1].name]) + "") &&
        Y(t, e);
    },
    d(n) {
      n && C(t);
    },
  };
}
function zc(o) {
  let e = o[5].value + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p(n, i) {
      i & 1 && e !== (e = n[5].value + "") && Y(t, e);
    },
    d(n) {
      n && C(t);
    },
  };
}
function Mc(o) {
  let e = o[5].current + "",
    t,
    n,
    i = o[5].value + "",
    l;
  return {
    c() {
      (t = V(e)), (n = V(" / ")), (l = V(i));
    },
    m(r, c) {
      y(r, t, c), y(r, n, c), y(r, l, c);
    },
    p(r, c) {
      c & 1 && e !== (e = r[5].current + "") && Y(t, e),
        c & 1 && i !== (i = r[5].value + "") && Y(l, i);
    },
    d(r) {
      r && C(t), r && C(n), r && C(l);
    },
  };
}
function il(o) {
  let e,
    t,
    n = o[2][o[5].feature] + "",
    i,
    l,
    r,
    c,
    a,
    p,
    u;
  function d(h, b) {
    return h[5].current ? Mc : zc;
  }
  let m = d(o, -1),
    g = m(o);
  return {
    c() {
      (e = k("div")),
        (t = k("span")),
        (i = V(n)),
        (l = x()),
        (r = k("hr")),
        (c = x()),
        (a = k("span")),
        g.c(),
        (u = x()),
        s(t, "class", "feature-label svelte-1csuq3f"),
        s(r, "class", "feature-delimiter svelte-1csuq3f"),
        s(
          a,
          "class",
          (p = Ct(`feature-limit-badge ${o[8]}`) + " svelte-1csuq3f")
        ),
        te(a, "feature-limit-warning", o[7]),
        s(e, "class", "feature-item svelte-1csuq3f");
    },
    m(h, b) {
      y(h, e, b),
        f(e, t),
        f(t, i),
        f(e, l),
        f(e, r),
        f(e, c),
        f(e, a),
        g.m(a, null),
        f(e, u);
    },
    p(h, b) {
      b & 1 && n !== (n = h[2][h[5].feature] + "") && Y(i, n),
        m === (m = d(h, b)) && g
          ? g.p(h, b)
          : (g.d(1), (g = m(h)), g && (g.c(), g.m(a, null))),
        b & 1 &&
          p !== (p = Ct(`feature-limit-badge ${h[8]}`) + " svelte-1csuq3f") &&
          s(a, "class", p),
        b & 1 && te(a, "feature-limit-warning", h[7]);
    },
    d(h) {
      h && C(e), g.d();
    },
  };
}
function Lc(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u = o[4]["plan-text"],
    d = ke(u, o, o[3], nl),
    m = d || Pc(o);
  l = new mt({});
  let g = o[0],
    h = [];
  for (let S = 0; S < g.length; S += 1) h[S] = il(tl(o, g, S));
  let b = o[4].footer,
    w = ke(b, o, o[3], el);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (n = k("div")),
        m && m.c(),
        (i = x()),
        B(l.$$.fragment),
        (r = x()),
        (c = k("div"));
      for (let S = 0; S < h.length; S += 1) h[S].c();
      (a = x()),
        w && w.c(),
        s(n, "class", "header-text svelte-1csuq3f"),
        s(t, "class", "header svelte-1csuq3f"),
        s(c, "class", "features-list svelte-1csuq3f"),
        s(e, "class", "container svelte-1csuq3f");
    },
    m(S, L) {
      y(S, e, L),
        f(e, t),
        f(t, n),
        m && m.m(n, null),
        f(t, i),
        P(l, t, null),
        f(e, r),
        f(e, c);
      for (let I = 0; I < h.length; I += 1) h[I] && h[I].m(c, null);
      f(e, a), w && w.m(e, null), (p = !0);
    },
    p(S, [L]) {
      if (
        (d
          ? d.p &&
            (!p || L & 8) &&
            ye(d, u, S, S[3], p ? we(u, S[3], L, Bc) : Ce(S[3]), nl)
          : m && m.p && (!p || L & 2) && m.p(S, p ? L : -1),
        L & 5)
      ) {
        g = S[0];
        let I;
        for (I = 0; I < g.length; I += 1) {
          let N = tl(S, g, I);
          h[I] ? h[I].p(N, L) : ((h[I] = il(N)), h[I].c(), h[I].m(c, null));
        }
        for (; I < h.length; I += 1) h[I].d(1);
        h.length = g.length;
      }
      w &&
        w.p &&
        (!p || L & 8) &&
        ye(w, b, S, S[3], p ? we(b, S[3], L, Ic) : Ce(S[3]), el);
    },
    i(S) {
      p || (_(m, S), _(l.$$.fragment, S), _(w, S), (p = !0));
    },
    o(S) {
      v(m, S), v(l.$$.fragment, S), v(w, S), (p = !1);
    },
    d(S) {
      S && C(e), m && m.d(S), z(l), Pe(h, S), w && w.d(S);
    },
  };
}
function Ac(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { limits: l } = e,
    { planName: r } = e,
    c = {
      ["pinned-apps"]: M("ntp_billing_popup__plan_pinned_apps"),
      ["apps-per-workspace"]: M("ntp_billing_popup__plan_apps_in_workspace"),
      ["workspaces"]: M("ntp_billing_popup__plan_workspaces"),
      ["accounts-per-app"]: M("ntp_billing_popup__plan_multi_accounts"),
      ["adblock"]: M("ntp_billing_popup__plan_adblock"),
      ["split-view"]: "",
      ["sessions"]: M("ntp_billing_popup__plan_sessions"),
      ["shared-apps"]: "Shared apps with your team",
      ["shared-tasks"]: "Shared tasks",
      ["shared-collections"]: "Shared collections",
      ["users"]: "",
      ["team-roles"]: "",
      ["pre-installed-apps"]: "",
    };
  return (
    (o.$$set = (a) => {
      "limits" in a && t(0, (l = a.limits)),
        "planName" in a && t(1, (r = a.planName)),
        "$$scope" in a && t(3, (i = a.$$scope));
    }),
    [l, r, c, i, n]
  );
}
var pn = class extends E {
    constructor(e) {
      super(), q(this, e, Ac, Lc, T, { limits: 0, planName: 1 }, Sc);
    }
  },
  un = pn;
A();
A();
function $c(o) {
  R(
    o,
    "svelte-qrwizz",
    ".container.svelte-qrwizz{padding:18px;border:1px solid var(--billing-info-block-border);border-radius:8px;display:flex;flex-direction:column;row-gap:6px}.header.svelte-qrwizz{font-weight:700;font-size:18px;line-height:21px;color:var(--billing-modal-col-title)}.footer.svelte-qrwizz{margin-top:7px}"
  );
}
var Tc = (o) => ({}),
  ol = (o) => ({}),
  qc = (o) => ({}),
  ll = (o) => ({});
function Ec(o) {
  let e, t;
  return {
    c() {
      (e = k("strong")), (t = V(o[0]));
    },
    m(n, i) {
      y(n, e, i), f(e, t);
    },
    p(n, i) {
      i & 1 && Y(t, n[0]);
    },
    d(n) {
      n && C(e);
    },
  };
}
function jc(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p = o[1].header,
    u = ke(p, o, o[3], ll),
    d = o[1].body,
    m = ke(d, o, o[3], ol);
  return (
    (c = new ce({
      props: {
        mod: "light",
        size: "large",
        $$slots: { default: [Ec] },
        $$scope: { ctx: o },
      },
    })),
    c.$on("click", o[2]),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          u && u.c(),
          (n = x()),
          (i = k("div")),
          m && m.c(),
          (l = x()),
          (r = k("div")),
          B(c.$$.fragment),
          s(t, "class", "header svelte-qrwizz"),
          s(i, "class", "text"),
          s(r, "class", "footer svelte-qrwizz"),
          s(e, "class", "container svelte-qrwizz");
      },
      m(g, h) {
        y(g, e, h),
          f(e, t),
          u && u.m(t, null),
          f(e, n),
          f(e, i),
          m && m.m(i, null),
          f(e, l),
          f(e, r),
          P(c, r, null),
          (a = !0);
      },
      p(g, [h]) {
        u &&
          u.p &&
          (!a || h & 8) &&
          ye(u, p, g, g[3], a ? we(p, g[3], h, qc) : Ce(g[3]), ll),
          m &&
            m.p &&
            (!a || h & 8) &&
            ye(m, d, g, g[3], a ? we(d, g[3], h, Tc) : Ce(g[3]), ol);
        let b = {};
        h & 9 && (b.$$scope = { dirty: h, ctx: g }), c.$set(b);
      },
      i(g) {
        a || (_(u, g), _(m, g), _(c.$$.fragment, g), (a = !0));
      },
      o(g) {
        v(u, g), v(m, g), v(c.$$.fragment, g), (a = !1);
      },
      d(g) {
        g && C(e), u && u.d(g), m && m.d(g), z(c);
      },
    }
  );
}
function Nc(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { btnText: l } = e;
  function r(c) {
    pe.call(this, o, c);
  }
  return (
    (o.$$set = (c) => {
      "btnText" in c && t(0, (l = c.btnText)),
        "$$scope" in c && t(3, (i = c.$$scope));
    }),
    [l, n, r, i]
  );
}
var fn = class extends E {
    constructor(e) {
      super(), q(this, e, Nc, jc, T, { btnText: 0 }, $c);
    }
  },
  _t = fn;
function Hc(o) {
  let e = M("ntp_billing_popup__plan_switch_to_invite_title_1") + "",
    t,
    n,
    i,
    l,
    r = M("ntp_billing_popup__plan_switch_to_invite_title_2") + "",
    c,
    a;
  return (
    (i = new Ye({})),
    {
      c() {
        (t = V(e)), (n = x()), B(i.$$.fragment), (l = x()), (c = V(r));
      },
      m(p, u) {
        y(p, t, u), y(p, n, u), P(i, p, u), y(p, l, u), y(p, c, u), (a = !0);
      },
      p: j,
      i(p) {
        a || (_(i.$$.fragment, p), (a = !0));
      },
      o(p) {
        v(i.$$.fragment, p), (a = !1);
      },
      d(p) {
        p && C(t), p && C(n), z(i, p), p && C(l), p && C(c);
      },
    }
  );
}
function Fc(o) {
  let e,
    t =
      M("ntp_billing_popup__plan_switch_to_invite_description", [
        o[0].toString(),
      ]) + "",
    n;
  return {
    c() {
      (e = new xi(!1)), (n = ae()), (e.a = n);
    },
    m(i, l) {
      e.m(t, i, l), y(i, n, l);
    },
    p(i, l) {
      l & 1 &&
        t !==
          (t =
            M("ntp_billing_popup__plan_switch_to_invite_description", [
              i[0].toString(),
            ]) + "") &&
        e.p(t);
    },
    d(i) {
      i && C(n), i && e.d();
    },
  };
}
function Vc(o) {
  let e, t;
  return (
    (e = new _t({
      props: {
        btnText:
          o[1].name === rl
            ? M("ntp_billing_popup__invite_more_friends_button_text")
            : M("ntp_billing_popup__plan_switch_to_invite_button_text"),
        $$slots: { body: [Fc], header: [Hc] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[2]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, [i]) {
        let l = {};
        i & 2 &&
          (l.btnText =
            n[1].name === rl
              ? M("ntp_billing_popup__invite_more_friends_button_text")
              : M("ntp_billing_popup__plan_switch_to_invite_button_text")),
          i & 17 && (l.$$scope = { dirty: i, ctx: n }),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
var rl = "Pro";
function Gc(o, e, t) {
  let n = ve(),
    { foreverFreeInvitesCount: i } = e,
    { planName: l } = e,
    r = () => {
      n("switchToInvites");
    };
  return (
    (o.$$set = (c) => {
      "foreverFreeInvitesCount" in c && t(0, (i = c.foreverFreeInvitesCount)),
        "planName" in c && t(1, (l = c.planName));
    }),
    [i, l, r]
  );
}
var dn = class extends E {
    constructor(e) {
      super(),
        q(this, e, Gc, Vc, T, { foreverFreeInvitesCount: 0, planName: 1 });
    }
  },
  al = dn;
A();
A();
function Dc(o) {
  let e, t, n, i, l, r, c, a, p, u;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        (n = G("path")),
        (i = G("path")),
        (l = G("defs")),
        (r = G("linearGradient")),
        (c = G("stop")),
        (a = G("stop")),
        (p = G("stop")),
        s(
          t,
          "d",
          "M9.3293 2.06677C10.1891 1.00309 11.8109 1.00309 12.6707 2.06677C13.2049 2.72766 14.0785 3.01151 14.8992 2.79086C16.22 2.43572 17.532 3.38894 17.6024 4.75488C17.6462 5.60356 18.1861 6.34669 18.9797 6.65056C20.2571 7.13962 20.7582 8.68195 20.0123 9.82841C19.5488 10.5407 19.5488 11.4593 20.0123 12.1716C20.7582 13.318 20.2571 14.8604 18.9797 15.3494C18.1861 15.6533 17.6462 16.3964 17.6024 17.2451C17.532 18.6111 16.22 19.5643 14.8992 19.2091C14.0785 18.9885 13.2049 19.2723 12.6707 19.9332C11.8109 20.9969 10.1891 20.9969 9.3293 19.9332C8.79507 19.2723 7.92147 18.9885 7.1008 19.2091C5.77996 19.5643 4.46797 18.6111 4.39756 17.2451C4.35382 16.3964 3.8139 15.6533 3.02027 15.3494C1.74294 14.8604 1.2418 13.318 1.98772 12.1716C2.45118 11.4593 2.45118 10.5407 1.98772 9.82841C1.2418 8.68195 1.74294 7.13961 3.02027 6.65056C3.8139 6.34669 4.35382 5.60356 4.39756 4.75488C4.46797 3.38894 5.77996 2.43572 7.1008 2.79086C7.92147 3.01151 8.79507 2.72766 9.3293 2.06677Z"
        ),
        s(t, "fill", "#59B64B"),
        s(
          n,
          "d",
          "M9.3293 2.06677C10.1891 1.00309 11.8109 1.00309 12.6707 2.06677C13.2049 2.72766 14.0785 3.01151 14.8992 2.79086C16.22 2.43572 17.532 3.38894 17.6024 4.75488C17.6462 5.60356 18.1861 6.34669 18.9797 6.65056C20.2571 7.13962 20.7582 8.68195 20.0123 9.82841C19.5488 10.5407 19.5488 11.4593 20.0123 12.1716C20.7582 13.318 20.2571 14.8604 18.9797 15.3494C18.1861 15.6533 17.6462 16.3964 17.6024 17.2451C17.532 18.6111 16.22 19.5643 14.8992 19.2091C14.0785 18.9885 13.2049 19.2723 12.6707 19.9332C11.8109 20.9969 10.1891 20.9969 9.3293 19.9332C8.79507 19.2723 7.92147 18.9885 7.1008 19.2091C5.77996 19.5643 4.46797 18.6111 4.39756 17.2451C4.35382 16.3964 3.8139 15.6533 3.02027 15.3494C1.74294 14.8604 1.2418 13.318 1.98772 12.1716C2.45118 11.4593 2.45118 10.5407 1.98772 9.82841C1.2418 8.68195 1.74294 7.13961 3.02027 6.65056C3.8139 6.34669 4.35382 5.60356 4.39756 4.75488C4.46797 3.38894 5.77996 2.43572 7.1008 2.79086C7.92147 3.01151 8.79507 2.72766 9.3293 2.06677Z"
        ),
        s(n, "fill", "url(#paint0_linear_1034_46156)"),
        s(
          i,
          "d",
          "M8.11133 10.8984C9.32422 10.8984 10.0684 10.0488 10.0684 8.68359V8.67773C10.0684 7.31836 9.32422 6.46875 8.11133 6.46875C6.89258 6.46875 6.14844 7.31836 6.14844 8.67773V8.68359C6.14844 10.0488 6.89258 10.8984 8.11133 10.8984ZM8.98438 15L14.3223 6.54492H13.0215L7.67773 15H8.98438ZM8.11133 9.92578C7.63672 9.92578 7.37305 9.48633 7.37305 8.68359V8.67773C7.37305 7.88086 7.63672 7.44141 8.11133 7.44141C8.58008 7.44141 8.83789 7.88086 8.83789 8.67773V8.68359C8.83789 9.48633 8.58008 9.92578 8.11133 9.92578ZM13.8945 15.0762C15.1074 15.0762 15.8516 14.2266 15.8516 12.8613V12.8555C15.8516 11.4961 15.1074 10.6465 13.8945 10.6465C12.6758 10.6465 11.9316 11.4961 11.9316 12.8555V12.8613C11.9316 14.2266 12.6758 15.0762 13.8945 15.0762ZM13.8945 14.1035C13.4199 14.1035 13.1562 13.6641 13.1562 12.8613V12.8555C13.1562 12.0586 13.4199 11.6191 13.8945 11.6191C14.3633 11.6191 14.6211 12.0586 14.6211 12.8555V12.8613C14.6211 13.6641 14.3633 14.1035 13.8945 14.1035Z"
        ),
        s(i, "fill", "white"),
        s(c, "stop-color", "#7D4CDD"),
        s(a, "offset", "0.53125"),
        s(a, "stop-color", "#EC3F3C"),
        s(p, "offset", "1"),
        s(p, "stop-color", "#FFB800"),
        s(r, "id", "paint0_linear_1034_46156"),
        s(r, "x1", "8.5"),
        s(r, "y1", "23"),
        s(r, "x2", "27.5138"),
        s(r, "y2", "13.2235"),
        s(r, "gradientUnits", "userSpaceOnUse"),
        s(e, "class", (u = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 22 22"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(d, m) {
      y(d, e, m),
        f(e, t),
        f(e, n),
        f(e, i),
        f(e, l),
        f(l, r),
        f(r, c),
        f(r, a),
        f(r, p);
    },
    p(d, [m]) {
      m & 4 && u !== (u = `icon ${d[2]}`) && s(e, "class", u),
        m & 1 && s(e, "width", d[0]),
        m & 2 && s(e, "height", d[1]);
    },
    i: j,
    o: j,
    d(d) {
      d && C(e);
    },
  };
}
function Rc(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var mn = class extends E {
    constructor(e) {
      super(), q(this, e, Rc, Dc, T, { width: 0, height: 1, className: 2 });
    }
  },
  sl = mn;
A();
function Uc(o) {
  R(
    o,
    "svelte-n9pmmc",
    ".price-wrapper.svelte-n9pmmc{display:inline-flex;align-items:center}.price-margin.svelte-n9pmmc{margin-left:16px}.currency.svelte-n9pmmc{font-size:16px}.price.svelte-n9pmmc{font-size:23px;font-weight:700}.period.svelte-n9pmmc{font-size:12px;color:#8c8c8c}"
  );
}
function Wc(o) {
  let e, t, n, i, l, r, c, a, p, u;
  return {
    c() {
      (e = k("div")),
        (t = k("span")),
        (n = V(o[0])),
        (i = x()),
        (l = k("span")),
        (r = V(o[1])),
        (c = x()),
        (a = k("span")),
        (p = V("/")),
        (u = V(o[2])),
        s(t, "class", "currency svelte-n9pmmc"),
        s(l, "class", "price svelte-n9pmmc"),
        s(a, "class", "period svelte-n9pmmc"),
        s(e, "class", "price-wrapper svelte-n9pmmc"),
        te(e, "price-margin", o[3]);
    },
    m(d, m) {
      y(d, e, m),
        f(e, t),
        f(t, n),
        f(e, i),
        f(e, l),
        f(l, r),
        f(e, c),
        f(e, a),
        f(a, p),
        f(a, u);
    },
    p(d, [m]) {
      m & 1 && Y(n, d[0]),
        m & 2 && Y(r, d[1]),
        m & 4 && Y(u, d[2]),
        m & 8 && te(e, "price-margin", d[3]);
    },
    i: j,
    o: j,
    d(d) {
      d && C(e);
    },
  };
}
function Oc(o, e, t) {
  let { currency: n = "$" } = e,
    { price: i } = e,
    { period: l = "mo" } = e,
    { useMargin: r = !0 } = e;
  return (
    (o.$$set = (c) => {
      "currency" in c && t(0, (n = c.currency)),
        "price" in c && t(1, (i = c.price)),
        "period" in c && t(2, (l = c.period)),
        "useMargin" in c && t(3, (r = c.useMargin));
    }),
    [n, i, l, r]
  );
}
var _n = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Oc,
          Wc,
          T,
          { currency: 0, price: 1, period: 2, useMargin: 3 },
          Uc
        );
    }
  },
  cl = _n;
function Zc(o) {
  R(
    o,
    "svelte-15bfcq2",
    ".container.svelte-15bfcq2{border:1px solid var(--billing-info-block-border);border-radius:8px;padding:6px 6px 18px 18px;display:flex;flex-direction:column;row-gap:12px}.header.svelte-15bfcq2{display:flex;flex-direction:row;column-gap:15px;justify-content:space-between}.header-title-col.svelte-15bfcq2{display:flex;flex-direction:column;row-gap:6px;margin-top:12px}.title.svelte-15bfcq2{font-weight:700;font-size:18px;line-height:21px;color:var(--billing-modal-title)}.subtitle.svelte-15bfcq2{line-height:16px;color:var(--billing-trial-notifications-description)}.header-price-col.svelte-15bfcq2{display:flex;flex-direction:column;row-gap:3px}.discount-icon-container.svelte-15bfcq2{position:absolute;margin-left:-12px;margin-top:-6px}.price-container.svelte-15bfcq2{background:var(--billing-price-background);border-radius:6px;padding:9px 5px;color:var(--billing-info-trial-value)}.old-price-container.svelte-15bfcq2{background:var(--billing-old-price-background);color:var(--billing-modal-subtitle);border-radius:6px;padding:6.5px 11px;display:flex;justify-content:center;align-items:center}.old-price-date.svelte-15bfcq2{color:var(--billing-info-trial-expiration)}.features-list.svelte-15bfcq2{display:flex;flex-direction:column;row-gap:4px}.feature-item.svelte-15bfcq2{display:flex;height:20px;align-items:center}.feature-item.svelte-15bfcq2 .feature-item-icon{color:#1977f3}.feature-item-label.svelte-15bfcq2{margin-left:7px}.footer.svelte-15bfcq2{display:flex;flex-direction:row;align-items:center;column-gap:12px}.trial-expired-text.svelte-15bfcq2{color:#8a8a8a}"
  );
}
function pl(o, e, t) {
  let n = o.slice();
  (n[12] = e[t]), (n[15] = t);
  let i = at[n[12]];
  return (n[13] = i), n;
}
function ul(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c = o[4].specialMonthlyPrice && fl(o);
  i = new cl({ props: { price: o[9] ?? 0, useMargin: !1 } });
  let a = o[4].specialMonthlyPrice && dl(o);
  return {
    c() {
      (e = k("div")),
        c && c.c(),
        (t = x()),
        (n = k("div")),
        B(i.$$.fragment),
        (l = x()),
        a && a.c(),
        s(n, "class", "price-container svelte-15bfcq2"),
        s(e, "class", "header-price-col svelte-15bfcq2");
    },
    m(p, u) {
      y(p, e, u),
        c && c.m(e, null),
        f(e, t),
        f(e, n),
        P(i, n, null),
        f(e, l),
        a && a.m(e, null),
        (r = !0);
    },
    p(p, u) {
      p[4].specialMonthlyPrice
        ? c
          ? u & 16 && _(c, 1)
          : ((c = fl(p)), c.c(), _(c, 1), c.m(e, t))
        : c &&
          (U(),
          v(c, 1, 1, () => {
            c = null;
          }),
          W());
      let d = {};
      u & 512 && (d.price = p[9] ?? 0),
        i.$set(d),
        p[4].specialMonthlyPrice
          ? a
            ? a.p(p, u)
            : ((a = dl(p)), a.c(), a.m(e, null))
          : a && (a.d(1), (a = null));
    },
    i(p) {
      r || (_(c), _(i.$$.fragment, p), (r = !0));
    },
    o(p) {
      v(c), v(i.$$.fragment, p), (r = !1);
    },
    d(p) {
      p && C(e), c && c.d(), z(i), a && a.d();
    },
  };
}
function fl(o) {
  let e, t, n;
  return (
    (t = new sl({ props: { height: "22px", width: "22px" } })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "discount-icon-container svelte-15bfcq2");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function dl(o) {
  let e, t, n, i, l, r;
  return {
    c() {
      (e = k("span")),
        (t = k("s")),
        (n = V("$")),
        (i = V(o[8])),
        (l = x()),
        (r = k("span")),
        (r.textContent = `${M("ntp_billing_popup__of_month")}`),
        s(r, "class", "old-price-date svelte-15bfcq2"),
        s(e, "class", "old-price-container svelte-15bfcq2");
    },
    m(c, a) {
      y(c, e, a), f(e, t), f(t, n), f(t, i), f(e, l), f(e, r);
    },
    p(c, a) {
      a & 256 && Y(i, c[8]);
    },
    d(c) {
      c && C(e);
    },
  };
}
function ml(o) {
  let e,
    t = [],
    n = new Map(),
    i,
    l = o[5],
    r = (c) => c[15];
  for (let c = 0; c < l.length; c += 1) {
    let a = pl(o, l, c),
      p = r(a);
    n.set(p, (t[c] = _l(p, a)));
  }
  return {
    c() {
      e = k("div");
      for (let c = 0; c < t.length; c += 1) t[c].c();
      s(e, "class", "features-list svelte-15bfcq2");
    },
    m(c, a) {
      y(c, e, a);
      for (let p = 0; p < t.length; p += 1) t[p] && t[p].m(e, null);
      i = !0;
    },
    p(c, a) {
      a & 32 &&
        ((l = c[5]),
        U(),
        (t = Me(t, a, r, 1, c, l, n, e, ze, _l, null, pl)),
        W());
    },
    i(c) {
      if (!i) {
        for (let a = 0; a < l.length; a += 1) _(t[a]);
        i = !0;
      }
    },
    o(c) {
      for (let a = 0; a < t.length; a += 1) v(t[a]);
      i = !1;
    },
    d(c) {
      c && C(e);
      for (let a = 0; a < t.length; a += 1) t[a].d();
    },
  };
}
function _l(o, e) {
  let t,
    n,
    i,
    l,
    r = e[13].text + "",
    c,
    a,
    p;
  var u = e[13].icon;
  function d(m) {
    return {
      props: { className: "feature-item-icon", width: "20px", height: "20px" },
    };
  }
  return (
    u && (n = $e(u, d(e))),
    {
      key: o,
      first: null,
      c() {
        (t = k("div")),
          n && B(n.$$.fragment),
          (i = x()),
          (l = k("span")),
          (c = V(r)),
          (a = x()),
          s(l, "class", "feature-item-label svelte-15bfcq2"),
          s(t, "class", "feature-item svelte-15bfcq2"),
          (this.first = t);
      },
      m(m, g) {
        y(m, t, g),
          n && P(n, t, null),
          f(t, i),
          f(t, l),
          f(l, c),
          f(t, a),
          (p = !0);
      },
      p(m, g) {
        if (((e = m), g & 32 && u !== (u = e[13].icon))) {
          if (n) {
            U();
            let h = n;
            v(h.$$.fragment, 1, 0, () => {
              z(h, 1);
            }),
              W();
          }
          u
            ? ((n = $e(u, d(e))),
              B(n.$$.fragment),
              _(n.$$.fragment, 1),
              P(n, t, i))
            : (n = null);
        }
        (!p || g & 32) && r !== (r = e[13].text + "") && Y(c, r);
      },
      i(m) {
        p || (n && _(n.$$.fragment, m), (p = !0));
      },
      o(m) {
        n && v(n.$$.fragment, m), (p = !1);
      },
      d(m) {
        m && C(t), n && z(n);
      },
    }
  );
}
function Kc(o) {
  let e;
  return {
    c() {
      (e = k("span")),
        (e.textContent = `${M("ntp_billing_popup__only_owner_can_upgrade")}`),
        s(e, "class", "trial-expired-text svelte-15bfcq2");
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && C(e);
    },
  };
}
function Yc(o) {
  let e, t, n, i;
  (e = new ce({
    props: { size: "large", $$slots: { default: [Jc] }, $$scope: { ctx: o } },
  })),
    e.$on("click", o[10]);
  let l = o[1] && gl(o);
  return {
    c() {
      B(e.$$.fragment), (t = x()), l && l.c(), (n = ae());
    },
    m(r, c) {
      P(e, r, c), y(r, t, c), l && l.m(r, c), y(r, n, c), (i = !0);
    },
    p(r, c) {
      let a = {};
      c & 65664 && (a.$$scope = { dirty: c, ctx: r }),
        e.$set(a),
        r[1]
          ? l
            ? (l.p(r, c), c & 2 && _(l, 1))
            : ((l = gl(r)), l.c(), _(l, 1), l.m(n.parentNode, n))
          : l &&
            (U(),
            v(l, 1, 1, () => {
              l = null;
            }),
            W());
    },
    i(r) {
      i || (_(e.$$.fragment, r), _(l), (i = !0));
    },
    o(r) {
      v(e.$$.fragment, r), v(l), (i = !1);
    },
    d(r) {
      z(e, r), r && C(t), l && l.d(r), r && C(n);
    },
  };
}
function Jc(o) {
  let e,
    t = M("ntp_billing_popup__upgrade_to_pro", [o[7]]) + "",
    n;
  return {
    c() {
      (e = k("strong")), (n = V(t));
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 128 &&
        t !== (t = M("ntp_billing_popup__upgrade_to_pro", [i[7]]) + "") &&
        Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function gl(o) {
  let e,
    t,
    n,
    i,
    l = [Qc, Xc],
    r = [];
  function c(a, p) {
    return a[2] ? 0 : 1;
  }
  return (
    (e = c(o, -1)),
    (t = r[e] = l[e](o)),
    {
      c() {
        t.c(), (n = ae());
      },
      m(a, p) {
        r[e].m(a, p), y(a, n, p), (i = !0);
      },
      p(a, p) {
        let u = e;
        (e = c(a, p)),
          e === u
            ? r[e].p(a, p)
            : (U(),
              v(r[u], 1, 1, () => {
                r[u] = null;
              }),
              W(),
              (t = r[e]),
              t ? t.p(a, p) : ((t = r[e] = l[e](a)), t.c()),
              _(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        i || (_(t), (i = !0));
      },
      o(a) {
        v(t), (i = !1);
      },
      d(a) {
        r[e].d(a), a && C(n);
      },
    }
  );
}
function Xc(o) {
  let e, t;
  return (
    (e = new ce({
      props: {
        mod: "light",
        size: "large",
        $$slots: { default: [ep] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[11]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 65536 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Qc(o) {
  let e;
  return {
    c() {
      (e = k("span")),
        (e.textContent = `${M("ntp_billing_popup__trial_has_ended")}`),
        s(e, "class", "trial-expired-text svelte-15bfcq2");
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && C(e);
    },
  };
}
function ep(o) {
  let e;
  return {
    c() {
      (e = k("strong")),
        (e.textContent = `${M("ntp_billing_popup__start_free_trial")}`);
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    d(t) {
      t && C(e);
    },
  };
}
function tp(o) {
  let e,
    t,
    n,
    i,
    l = M("ntp_billing_popup__go_sidekick", [o[3].prefix]) + "",
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b,
    w,
    S;
  a = new Le({ props: { label: o[3].name } });
  let L = o[4] && ul(o),
    I = !o[6] && ml(o),
    N = [Yc, Kc],
    H = [];
  function O(F, D) {
    return F[0] ? 0 : 1;
  }
  return (
    (b = O(o, -1)),
    (w = H[b] = N[b](o)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (n = k("div")),
          (i = k("div")),
          (r = V(l)),
          (c = x()),
          B(a.$$.fragment),
          (p = x()),
          (u = k("div")),
          (u.textContent = `${M(
            "ntp_billing_popup__switch_pro_block_access_text"
          )}`),
          (d = x()),
          L && L.c(),
          (m = x()),
          I && I.c(),
          (g = x()),
          (h = k("div")),
          w.c(),
          s(i, "class", "title svelte-15bfcq2"),
          s(u, "class", "subtitle svelte-15bfcq2"),
          s(n, "class", "header-title-col svelte-15bfcq2"),
          s(t, "class", "header svelte-15bfcq2"),
          s(h, "class", "footer svelte-15bfcq2"),
          s(e, "class", "container svelte-15bfcq2");
      },
      m(F, D) {
        y(F, e, D),
          f(e, t),
          f(t, n),
          f(n, i),
          f(i, r),
          f(i, c),
          P(a, i, null),
          f(n, p),
          f(n, u),
          f(t, d),
          L && L.m(t, null),
          f(e, m),
          I && I.m(e, null),
          f(e, g),
          f(e, h),
          H[b].m(h, null),
          (S = !0);
      },
      p(F, [D]) {
        (!S || D & 8) &&
          l !== (l = M("ntp_billing_popup__go_sidekick", [F[3].prefix]) + "") &&
          Y(r, l);
        let J = {};
        D & 8 && (J.label = F[3].name),
          a.$set(J),
          F[4]
            ? L
              ? (L.p(F, D), D & 16 && _(L, 1))
              : ((L = ul(F)), L.c(), _(L, 1), L.m(t, null))
            : L &&
              (U(),
              v(L, 1, 1, () => {
                L = null;
              }),
              W()),
          F[6]
            ? I &&
              (U(),
              v(I, 1, 1, () => {
                I = null;
              }),
              W())
            : I
            ? (I.p(F, D), D & 64 && _(I, 1))
            : ((I = ml(F)), I.c(), _(I, 1), I.m(e, g));
        let Z = b;
        (b = O(F, D)),
          b === Z
            ? H[b].p(F, D)
            : (U(),
              v(H[Z], 1, 1, () => {
                H[Z] = null;
              }),
              W(),
              (w = H[b]),
              w ? w.p(F, D) : ((w = H[b] = N[b](F)), w.c()),
              _(w, 1),
              w.m(h, null));
      },
      i(F) {
        S || (_(a.$$.fragment, F), _(L), _(I), _(w), (S = !0));
      },
      o(F) {
        v(a.$$.fragment, F), v(L), v(I), v(w), (S = !1);
      },
      d(F) {
        F && C(e), z(a), L && L.d(), I && I.d(), H[b].d();
      },
    }
  );
}
function np(o, e, t) {
  let n,
    i,
    l,
    { canBuyPlan: r } = e,
    { canStartTrial: c } = e,
    { isTrialExpired: a } = e,
    { planName: p } = e,
    { price: u } = e,
    { features: d } = e,
    { short: m } = e,
    g = () => {
      $.actions.startPersonalPlanUpgrade({
        source: "launchpad.monetization.upgrade-to-pro-button-clicked",
      }),
        $.actions.sendAnalyticsEvent(
          "launchpad.monetization.upgrade-to-pro-button-clicked",
          void 0
        );
    },
    h = () => {
      $.actions.startTrial(),
        $.actions.sendAnalyticsEvent(
          "launchpad.monetization.start-trial-button-clicked",
          void 0
        );
    };
  return (
    (o.$$set = (b) => {
      "canBuyPlan" in b && t(0, (r = b.canBuyPlan)),
        "canStartTrial" in b && t(1, (c = b.canStartTrial)),
        "isTrialExpired" in b && t(2, (a = b.isTrialExpired)),
        "planName" in b && t(3, (p = b.planName)),
        "price" in b && t(4, (u = b.price)),
        "features" in b && t(5, (d = b.features)),
        "short" in b && t(6, (m = b.short));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: t(9, (n = u?.specialMonthlyPrice || u?.baseMonthlyPrice));
      }
      if (o.$$.dirty & 16) {
        e: t(8, (i = u?.specialMonthlyPrice ? u.baseMonthlyPrice : "0"));
      }
      if (o.$$.dirty & 8) {
        e: t(7, (l = `${p.prefix} ${p.name}`));
      }
    }),
    [r, c, a, p, u, d, m, l, i, n, g, h]
  );
}
var gn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          np,
          tp,
          T,
          {
            canBuyPlan: 0,
            canStartTrial: 1,
            isTrialExpired: 2,
            planName: 3,
            price: 4,
            features: 5,
            short: 6,
          },
          Zc
        );
    }
  },
  hl = gn;
A();
function ip(o) {
  R(
    o,
    "svelte-1jr9p3f",
    ".container.svelte-1jr9p3f{border:1px solid var(--billing-info-block-border);border-radius:8px;padding:6px 6px 18px 18px;display:flex;flex-direction:column;row-gap:12px}.header.svelte-1jr9p3f{display:flex;flex-direction:row;column-gap:15px;justify-content:space-between}.header-title-col.svelte-1jr9p3f{display:flex;flex-direction:column;row-gap:6px;margin-top:12px}.title.svelte-1jr9p3f{font-weight:700;font-size:18px;line-height:21px;color:var(--billing-modal-title)}.subtitle.svelte-1jr9p3f{line-height:16px;color:var(--billing-trial-notifications-description)}.features-list.svelte-1jr9p3f{display:flex;flex-direction:column;row-gap:4px}.feature-item.svelte-1jr9p3f{display:flex;height:20px;align-items:center}.feature-item.svelte-1jr9p3f .feature-item-icon{color:#1977f3}.feature-item-label.svelte-1jr9p3f{margin-left:7px}.footer.svelte-1jr9p3f{display:flex;flex-direction:row;align-items:center;column-gap:12px}.trial-expired-text.svelte-1jr9p3f{color:#8a8a8a}"
  );
}
function bl(o, e, t) {
  let n = o.slice();
  (n[5] = e[t]), (n[8] = t);
  let i = at[n[5]];
  return (n[6] = i), n;
}
function vl(o, e) {
  let t,
    n,
    i,
    l,
    r = e[6].text + "",
    c,
    a,
    p;
  var u = e[6].icon;
  function d(m) {
    return {
      props: { className: "feature-item-icon", width: "20px", height: "20px" },
    };
  }
  return (
    u && (n = $e(u, d(e))),
    {
      key: o,
      first: null,
      c() {
        (t = k("div")),
          n && B(n.$$.fragment),
          (i = x()),
          (l = k("span")),
          (c = V(r)),
          (a = x()),
          s(l, "class", "feature-item-label svelte-1jr9p3f"),
          s(t, "class", "feature-item svelte-1jr9p3f"),
          (this.first = t);
      },
      m(m, g) {
        y(m, t, g),
          n && P(n, t, null),
          f(t, i),
          f(t, l),
          f(l, c),
          f(t, a),
          (p = !0);
      },
      p(m, g) {
        if (((e = m), g & 4 && u !== (u = e[6].icon))) {
          if (n) {
            U();
            let h = n;
            v(h.$$.fragment, 1, 0, () => {
              z(h, 1);
            }),
              W();
          }
          u
            ? ((n = $e(u, d(e))),
              B(n.$$.fragment),
              _(n.$$.fragment, 1),
              P(n, t, i))
            : (n = null);
        }
        (!p || g & 4) && r !== (r = e[6].text + "") && Y(c, r);
      },
      i(m) {
        p || (n && _(n.$$.fragment, m), (p = !0));
      },
      o(m) {
        n && v(n.$$.fragment, m), (p = !1);
      },
      d(m) {
        m && C(t), n && z(n);
      },
    }
  );
}
function op(o) {
  let e;
  return {
    c() {
      (e = k("span")),
        (e.textContent = `${M("ntp_billing_popup__only_owner_can_upgrade")}`),
        s(e, "class", "trial-expired-text svelte-1jr9p3f");
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && C(e);
    },
  };
}
function lp(o) {
  let e, t;
  return (
    (e = new ce({
      props: { size: "large", $$slots: { default: [rp] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[4]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 520 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function rp(o) {
  let e,
    t = M("ntp_billing_popup__upgrade_to_pro", [o[3]]) + "",
    n;
  return {
    c() {
      (e = k("strong")), (n = V(t));
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 8 &&
        t !== (t = M("ntp_billing_popup__upgrade_to_pro", [i[3]]) + "") &&
        Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function ap(o) {
  let e,
    t,
    n,
    i,
    l = M("ntp_billing_popup__go_sidekick", [o[1].prefix]) + "",
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g = [],
    h = new Map(),
    b,
    w,
    S,
    L,
    I;
  a = new Le({ props: { label: o[1].name } });
  let N = o[2],
    H = (J) => J[8];
  for (let J = 0; J < N.length; J += 1) {
    let Z = bl(o, N, J),
      ee = H(Z);
    h.set(ee, (g[J] = vl(ee, Z)));
  }
  let O = [lp, op],
    F = [];
  function D(J, Z) {
    return J[0] ? 0 : 1;
  }
  return (
    (S = D(o, -1)),
    (L = F[S] = O[S](o)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (n = k("div")),
          (i = k("div")),
          (r = V(l)),
          (c = x()),
          B(a.$$.fragment),
          (p = x()),
          (u = k("div")),
          (u.textContent = `${M(
            "ntp_billing_popup__switch_pro_block_access_text"
          )}`),
          (d = x()),
          (m = k("div"));
        for (let J = 0; J < g.length; J += 1) g[J].c();
        (b = x()),
          (w = k("div")),
          L.c(),
          s(i, "class", "title svelte-1jr9p3f"),
          s(u, "class", "subtitle svelte-1jr9p3f"),
          s(n, "class", "header-title-col svelte-1jr9p3f"),
          s(t, "class", "header svelte-1jr9p3f"),
          s(m, "class", "features-list svelte-1jr9p3f"),
          s(w, "class", "footer svelte-1jr9p3f"),
          s(e, "class", "container svelte-1jr9p3f");
      },
      m(J, Z) {
        y(J, e, Z),
          f(e, t),
          f(t, n),
          f(n, i),
          f(i, r),
          f(i, c),
          P(a, i, null),
          f(n, p),
          f(n, u),
          f(e, d),
          f(e, m);
        for (let ee = 0; ee < g.length; ee += 1) g[ee] && g[ee].m(m, null);
        f(e, b), f(e, w), F[S].m(w, null), (I = !0);
      },
      p(J, [Z]) {
        (!I || Z & 2) &&
          l !== (l = M("ntp_billing_popup__go_sidekick", [J[1].prefix]) + "") &&
          Y(r, l);
        let ee = {};
        Z & 2 && (ee.label = J[1].name),
          a.$set(ee),
          Z & 4 &&
            ((N = J[2]),
            U(),
            (g = Me(g, Z, H, 1, J, N, h, m, ze, vl, null, bl)),
            W());
        let X = S;
        (S = D(J, Z)),
          S === X
            ? F[S].p(J, Z)
            : (U(),
              v(F[X], 1, 1, () => {
                F[X] = null;
              }),
              W(),
              (L = F[S]),
              L ? L.p(J, Z) : ((L = F[S] = O[S](J)), L.c()),
              _(L, 1),
              L.m(w, null));
      },
      i(J) {
        if (!I) {
          _(a.$$.fragment, J);
          for (let Z = 0; Z < N.length; Z += 1) _(g[Z]);
          _(L), (I = !0);
        }
      },
      o(J) {
        v(a.$$.fragment, J);
        for (let Z = 0; Z < g.length; Z += 1) v(g[Z]);
        v(L), (I = !1);
      },
      d(J) {
        J && C(e), z(a);
        for (let Z = 0; Z < g.length; Z += 1) g[Z].d();
        F[S].d();
      },
    }
  );
}
function sp(o, e, t) {
  let n,
    { canBuyPlan: i } = e,
    { planName: l } = e,
    { features: r } = e,
    c = () => {
      $.actions.startTeamPlanUpgrade({
        source: "launchpad.monetization.upgrade-to-pro-button-clicked",
      }),
        $.actions.sendAnalyticsEvent(
          "launchpad.monetization.upgrade-to-pro-button-clicked",
          void 0
        );
    };
  return (
    (o.$$set = (a) => {
      "canBuyPlan" in a && t(0, (i = a.canBuyPlan)),
        "planName" in a && t(1, (l = a.planName)),
        "features" in a && t(2, (r = a.features));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2) {
        e: t(3, (n = `${l.prefix} ${l.name}`));
      }
    }),
    [i, l, r, n, c]
  );
}
var hn = class extends E {
    constructor(e) {
      super(),
        q(this, e, sp, ap, T, { canBuyPlan: 0, planName: 1, features: 2 }, ip);
    }
  },
  kl = hn;
A();
function cp(o) {
  R(
    o,
    "svelte-1wvj81h",
    ".container.svelte-1wvj81h{background:var(--billing-info-plan-background);border-radius:8px;padding:18px;row-gap:15px;display:flex;flex-direction:column}.body.svelte-1wvj81h{display:flex;flex-direction:row;column-gap:25px}.plan-description-col.svelte-1wvj81h{display:flex;flex-direction:column;row-gap:6px}.title.svelte-1wvj81h{font-weight:700;font-size:18px;color:var(--billing-modal-col-title)}.plan-expiration-col.svelte-1wvj81h{display:flex;flex-direction:column;row-gap:6px}.expiration-block.svelte-1wvj81h{display:flex;flex-direction:column;background:var(--billing-info-trial-background);border-radius:6px;justify-content:center;align-items:center;width:65px;height:65px}.expiration-value.svelte-1wvj81h{font-weight:700;font-size:23px;line-height:27px;color:var(--billing-info-trial-value)}.expiration-text.svelte-1wvj81h{color:var(--billing-info-trial-expiration)}"
  );
}
function wl(o) {
  let e, t, n;
  return (
    (t = new ce({
      props: { size: "large", $$slots: { default: [pp] }, $$scope: { ctx: o } },
    })),
    t.$on("click", o[5]),
    {
      c() {
        (e = k("div")), B(t.$$.fragment), s(e, "class", "footer");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p(i, l) {
        let r = {};
        l & 80 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function pp(o) {
  let e,
    t = M("ntp_billing_popup__plan_trial_button_text", [o[4]]) + "",
    n;
  return {
    c() {
      (e = k("strong")), (n = V(t));
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 16 &&
        t !==
          (t = M("ntp_billing_popup__plan_trial_button_text", [i[4]]) + "") &&
        Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function up(o) {
  let e,
    t,
    n,
    i,
    l = M("ntp_billing_popup__plan_trial_title_1") + "",
    r,
    c,
    a,
    p,
    u = M("ntp_billing_popup__plan_trial_title_2") + "",
    d,
    m,
    g,
    h = M("ntp_billing_popup__plan_trial_description", [o[4]]) + "",
    b,
    w,
    S,
    L,
    I,
    N,
    H,
    O,
    F,
    D,
    J,
    Z,
    ee;
  (a = new Le({ props: { label: o[2].name } })), (L = new mt({}));
  let X = o[3] && wl(o);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (n = k("div")),
        (i = k("span")),
        (r = V(l)),
        (c = x()),
        B(a.$$.fragment),
        (p = x()),
        (d = V(u)),
        (m = x()),
        (g = k("span")),
        (b = V(h)),
        (w = x()),
        (S = k("div")),
        B(L.$$.fragment),
        (I = x()),
        (N = k("div")),
        (H = k("span")),
        (O = V(o[0])),
        (F = x()),
        (D = k("span")),
        (J = V(o[1])),
        (Z = x()),
        X && X.c(),
        s(i, "class", "title svelte-1wvj81h"),
        s(n, "class", "plan-description-col svelte-1wvj81h"),
        s(H, "class", "expiration-value svelte-1wvj81h"),
        s(D, "class", "expiration-text svelte-1wvj81h"),
        s(N, "class", "expiration-block svelte-1wvj81h"),
        s(S, "class", "plan-expiration-col svelte-1wvj81h"),
        s(t, "class", "body svelte-1wvj81h"),
        s(e, "class", "container svelte-1wvj81h");
    },
    m(ie, oe) {
      y(ie, e, oe),
        f(e, t),
        f(t, n),
        f(n, i),
        f(i, r),
        f(i, c),
        P(a, i, null),
        f(i, p),
        f(i, d),
        f(n, m),
        f(n, g),
        f(g, b),
        f(t, w),
        f(t, S),
        P(L, S, null),
        f(S, I),
        f(S, N),
        f(N, H),
        f(H, O),
        f(N, F),
        f(N, D),
        f(D, J),
        f(e, Z),
        X && X.m(e, null),
        (ee = !0);
    },
    p(ie, [oe]) {
      let le = {};
      oe & 4 && (le.label = ie[2].name),
        a.$set(le),
        (!ee || oe & 16) &&
          h !==
            (h =
              M("ntp_billing_popup__plan_trial_description", [ie[4]]) + "") &&
          Y(b, h),
        (!ee || oe & 1) && Y(O, ie[0]),
        (!ee || oe & 2) && Y(J, ie[1]),
        ie[3]
          ? X
            ? (X.p(ie, oe), oe & 8 && _(X, 1))
            : ((X = wl(ie)), X.c(), _(X, 1), X.m(e, null))
          : X &&
            (U(),
            v(X, 1, 1, () => {
              X = null;
            }),
            W());
    },
    i(ie) {
      ee || (_(a.$$.fragment, ie), _(L.$$.fragment, ie), _(X), (ee = !0));
    },
    o(ie) {
      v(a.$$.fragment, ie), v(L.$$.fragment, ie), v(X), (ee = !1);
    },
    d(ie) {
      ie && C(e), z(a), z(L), X && X.d();
    },
  };
}
function fp(o, e, t) {
  let n,
    { expirationValue: i } = e,
    { expirationText: l } = e,
    { planName: r } = e,
    { canManagePlan: c } = e,
    a = () => {
      $.actions.startPlanUpgrade({ source: "settings.upgrade-button-clicked" });
    };
  return (
    (o.$$set = (p) => {
      "expirationValue" in p && t(0, (i = p.expirationValue)),
        "expirationText" in p && t(1, (l = p.expirationText)),
        "planName" in p && t(2, (r = p.planName)),
        "canManagePlan" in p && t(3, (c = p.canManagePlan));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 4) {
        e: t(4, (n = `${r.prefix} ${r.name}`));
      }
    }),
    [i, l, r, c, n, a]
  );
}
var bn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          fp,
          up,
          T,
          {
            expirationValue: 0,
            expirationText: 1,
            planName: 2,
            canManagePlan: 3,
          },
          cp
        );
    }
  },
  yl = bn;
A();
function dp(o) {
  R(
    o,
    "svelte-mokgh0",
    ".container.svelte-mokgh0{padding:18px;border:1px solid var(--billing-info-block-border);border-radius:8px;display:flex;flex-direction:column;row-gap:6px}.header-text.svelte-mokgh0{font-weight:700;font-size:18px;line-height:21px;color:var(--billing-modal-col-title)}"
  );
}
function mp(o) {
  let e, t, n, i, l, r, c;
  return (
    (r = new dt({
      props: { invitationLink: o[0], isGmailSectionEnabled: !1 },
    })),
    {
      c() {
        (e = k("section")),
          (t = k("div")),
          (t.textContent = `${M(
            "ntp_billing_popup__invitations_forever_free_block_title"
          )}`),
          (n = x()),
          (i = k("div")),
          (i.textContent = `${M(
            "ntp_billing_popup__invitations_forever_free_block_description"
          )}`),
          (l = x()),
          B(r.$$.fragment),
          s(t, "class", "header-text svelte-mokgh0"),
          s(e, "class", "container svelte-mokgh0");
      },
      m(a, p) {
        y(a, e, p), f(e, t), f(e, n), f(e, i), f(e, l), P(r, e, null), (c = !0);
      },
      p(a, [p]) {
        let u = {};
        p & 1 && (u.invitationLink = a[0]), r.$set(u);
      },
      i(a) {
        c || (_(r.$$.fragment, a), (c = !0));
      },
      o(a) {
        v(r.$$.fragment, a), (c = !1);
      },
      d(a) {
        a && C(e), z(r);
      },
    }
  );
}
function _p(o, e, t) {
  let { invitationLink: n = "" } = e;
  return (
    (o.$$set = (i) => {
      "invitationLink" in i && t(0, (n = i.invitationLink));
    }),
    [n]
  );
}
var vn = class extends E {
    constructor(e) {
      super(), q(this, e, _p, mp, T, { invitationLink: 0 }, dp);
    }
  },
  Cl = vn;
A();
function gp(o) {
  let e, t, n;
  return (
    (t = new Le({ props: { label: M("ntp_billing_popup__teams_header") } })),
    {
      c() {
        (e = V("Sidekick ")), B(t.$$.fragment);
      },
      m(i, l) {
        y(i, e, l), P(t, i, l), (n = !0);
      },
      p: j,
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t, i);
      },
    }
  );
}
function hp(o) {
  let e = M("ntp_billing_popup__teams_body") + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p: j,
    d(n) {
      n && C(t);
    },
  };
}
function bp(o) {
  let e, t;
  return (
    (e = new _t({
      props: {
        btnText: M("ntp_billing_popup__teams_action_button"),
        $$slots: { body: [hp], header: [gp] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[0]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, [i]) {
        let l = {};
        i & 2 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function vp(o) {
  return [
    () => {
      $.actions.startInvitingTeammates({ source: "billing" });
    },
  ];
}
var kn = class extends E {
    constructor(e) {
      super(), q(this, e, vp, bp, T, {});
    }
  },
  xl = kn;
A();
function kp(o) {
  R(
    o,
    "svelte-1qixwwn",
    ".pro-plan-manage-btn.svelte-1qixwwn{margin-top:14px}"
  );
}
function wp(o) {
  let e;
  return {
    c() {
      (e = k("strong")),
        (e.textContent = `${M("ntp_billing_popup_plan_details_container")}`);
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    d(t) {
      t && C(e);
    },
  };
}
function yp(o) {
  let e, t, n, i;
  return (
    (t = new ce({
      props: {
        mod: "light",
        size: "large",
        $$slots: { default: [wp] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", function () {
      wi(o[1]) && o[1].apply(this, arguments);
    }),
    {
      c() {
        (e = k("span")),
          B(t.$$.fragment),
          (e.hidden = n = !o[0]),
          s(e, "class", "pro-plan-manage-btn svelte-1qixwwn");
      },
      m(l, r) {
        y(l, e, r), P(t, e, null), (i = !0);
      },
      p(l, [r]) {
        o = l;
        let c = {};
        r & 4 && (c.$$scope = { dirty: r, ctx: o }),
          t.$set(c),
          (!i || (r & 1 && n !== (n = !o[0]))) && (e.hidden = n);
      },
      i(l) {
        i || (_(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        v(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && C(e), z(t);
      },
    }
  );
}
function Cp(o, e, t) {
  let { canManagePlan: n } = e,
    { manageProAccount: i } = e;
  return (
    (o.$$set = (l) => {
      "canManagePlan" in l && t(0, (n = l.canManagePlan)),
        "manageProAccount" in l && t(1, (i = l.manageProAccount));
    }),
    [n, i]
  );
}
var wn = class extends E {
    constructor(e) {
      super(),
        q(this, e, Cp, yp, T, { canManagePlan: 0, manageProAccount: 1 }, kp);
    }
  },
  Sl = wn;
function xp(o) {
  R(
    o,
    "svelte-11bgb8s",
    ".plan-details-container.svelte-11bgb8s{padding:10px;display:flex;flex-direction:column;width:318px;row-gap:9px}"
  );
}
function Sp(o) {
  let e, t;
  return (
    (e = new un({
      props: {
        planName: o[7],
        limits: o[0].limits,
        $$slots: { footer: [Lp], "plan-text": [Mp] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 128 && (l.planName = n[7]),
          i & 1 && (l.limits = n[0].limits),
          i & 2440 && (l.$$scope = { dirty: i, ctx: n }),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ip(o) {
  let e, t;
  return (
    (e = new un({ props: { planName: o[7], limits: o[0].limits } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 128 && (l.planName = n[7]),
          i & 1 && (l.limits = n[0].limits),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Bp(o) {
  let e, t;
  return (
    (e = new yl({
      props: {
        planName: o[7],
        canManagePlan: o[8],
        expirationText: o[0].expirationText,
        expirationValue: o[0].expirationValue,
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 128 && (l.planName = n[7]),
          i & 256 && (l.canManagePlan = n[8]),
          i & 1 && (l.expirationText = n[0].expirationText),
          i & 1 && (l.expirationValue = n[0].expirationValue),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Pp(o) {
  let e, t, n;
  return (
    (e = new Le({ props: { label: o[7].name } })),
    {
      c() {
        B(e.$$.fragment), (t = V(" plan"));
      },
      m(i, l) {
        P(e, i, l), y(i, t, l), (n = !0);
      },
      p(i, l) {
        let r = {};
        l & 128 && (r.label = i[7].name), e.$set(r);
      },
      i(i) {
        n || (_(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        z(e, i), i && C(t);
      },
    }
  );
}
function zp(o) {
  let e, t, n, i;
  return (
    (t = new Ye({})),
    {
      c() {
        (e = V("Forever-free ")), B(t.$$.fragment), (n = V(" plan"));
      },
      m(l, r) {
        y(l, e, r), P(t, l, r), y(l, n, r), (i = !0);
      },
      p: j,
      i(l) {
        i || (_(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        v(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && C(e), z(t, l), l && C(n);
      },
    }
  );
}
function Mp(o) {
  let e,
    t,
    n,
    i,
    l = [zp, Pp],
    r = [];
  function c(a, p) {
    return a[3] ? 0 : 1;
  }
  return (
    (t = c(o, -1)),
    (n = r[t] = l[t](o)),
    {
      c() {
        (e = k("span")), n.c(), s(e, "slot", "plan-text");
      },
      m(a, p) {
        y(a, e, p), r[t].m(e, null), (i = !0);
      },
      p(a, p) {
        let u = t;
        (t = c(a, p)),
          t === u
            ? r[t].p(a, p)
            : (U(),
              v(r[u], 1, 1, () => {
                r[u] = null;
              }),
              W(),
              (n = r[t]),
              n ? n.p(a, p) : ((n = r[t] = l[t](a)), n.c()),
              _(n, 1),
              n.m(e, null));
      },
      i(a) {
        i || (_(n), (i = !0));
      },
      o(a) {
        v(n), (i = !1);
      },
      d(a) {
        a && C(e), r[t].d();
      },
    }
  );
}
function Lp(o) {
  let e, t;
  return (
    (e = new Sl({
      props: { canManagePlan: o[8], manageProAccount: o[9], slot: "footer" },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 256 && (l.canManagePlan = n[8]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Il(o) {
  let e, t;
  return (
    (e = new kl({
      props: {
        planName: o[4].planName,
        canBuyPlan: o[4].canBuyPlan,
        features: o[4].features,
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 16 && (l.planName = n[4].planName),
          i & 16 && (l.canBuyPlan = n[4].canBuyPlan),
          i & 16 && (l.features = n[4].features),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Bl(o) {
  let e, t;
  return (
    (e = new hl({
      props: {
        planName: o[5].planName,
        canBuyPlan: o[5].canBuyPlan,
        canStartTrial: o[5].canStartTrial,
        isTrialExpired: o[5].isTrialExpired,
        features: o[5].features,
        price: o[5].price,
        short: Boolean(o[4]),
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 32 && (l.planName = n[5].planName),
          i & 32 && (l.canBuyPlan = n[5].canBuyPlan),
          i & 32 && (l.canStartTrial = n[5].canStartTrial),
          i & 32 && (l.isTrialExpired = n[5].isTrialExpired),
          i & 32 && (l.features = n[5].features),
          i & 32 && (l.price = n[5].price),
          i & 16 && (l.short = Boolean(n[4])),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ap(o) {
  let e, t;
  return (
    (e = new al({ props: { foreverFreeInvitesCount: o[1], planName: o[7] } })),
    e.$on("switchToInvites", o[10]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2 && (l.foreverFreeInvitesCount = n[1]),
          i & 128 && (l.planName = n[7]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function $p(o) {
  let e, t;
  return (
    (e = new Cl({ props: { invitationLink: o[2] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.invitationLink = n[2]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Pl(o) {
  let e, t;
  return (
    (e = new xl({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Tp(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d = [Bp, Ip, Sp],
    m = [];
  function g(N, H) {
    return N[0]?.type === 2
      ? 0
      : N[0]?.type === 0
      ? 1
      : N[0]?.type === 1
      ? 2
      : -1;
  }
  ~(t = g(o, -1)) && (n = m[t] = d[t](o));
  let h = o[4] && Il(o),
    b = o[5] && Bl(o),
    w = [$p, Ap],
    S = [];
  function L(N, H) {
    return N[3] ? 0 : N[1] ? 1 : -1;
  }
  ~(c = L(o, -1)) && (a = S[c] = w[c](o));
  let I = o[6] && Pl(o);
  return {
    c() {
      (e = k("div")),
        n && n.c(),
        (i = x()),
        h && h.c(),
        (l = x()),
        b && b.c(),
        (r = x()),
        a && a.c(),
        (p = x()),
        I && I.c(),
        s(e, "class", "plan-details-container svelte-11bgb8s");
    },
    m(N, H) {
      y(N, e, H),
        ~t && m[t].m(e, null),
        f(e, i),
        h && h.m(e, null),
        f(e, l),
        b && b.m(e, null),
        f(e, r),
        ~c && S[c].m(e, null),
        f(e, p),
        I && I.m(e, null),
        (u = !0);
    },
    p(N, [H]) {
      let O = t;
      (t = g(N, H)),
        t === O
          ? ~t && m[t].p(N, H)
          : (n &&
              (U(),
              v(m[O], 1, 1, () => {
                m[O] = null;
              }),
              W()),
            ~t
              ? ((n = m[t]),
                n ? n.p(N, H) : ((n = m[t] = d[t](N)), n.c()),
                _(n, 1),
                n.m(e, i))
              : (n = null)),
        N[4]
          ? h
            ? (h.p(N, H), H & 16 && _(h, 1))
            : ((h = Il(N)), h.c(), _(h, 1), h.m(e, l))
          : h &&
            (U(),
            v(h, 1, 1, () => {
              h = null;
            }),
            W()),
        N[5]
          ? b
            ? (b.p(N, H), H & 32 && _(b, 1))
            : ((b = Bl(N)), b.c(), _(b, 1), b.m(e, r))
          : b &&
            (U(),
            v(b, 1, 1, () => {
              b = null;
            }),
            W());
      let F = c;
      (c = L(N, H)),
        c === F
          ? ~c && S[c].p(N, H)
          : (a &&
              (U(),
              v(S[F], 1, 1, () => {
                S[F] = null;
              }),
              W()),
            ~c
              ? ((a = S[c]),
                a ? a.p(N, H) : ((a = S[c] = w[c](N)), a.c()),
                _(a, 1),
                a.m(e, p))
              : (a = null)),
        N[6]
          ? I
            ? H & 64 && _(I, 1)
            : ((I = Pl(N)), I.c(), _(I, 1), I.m(e, null))
          : I &&
            (U(),
            v(I, 1, 1, () => {
              I = null;
            }),
            W());
    },
    i(N) {
      u || (_(n), _(h), _(b), _(a), _(I), (u = !0));
    },
    o(N) {
      v(n), v(h), v(b), v(a), v(I), (u = !1);
    },
    d(N) {
      N && C(e),
        ~t && m[t].d(),
        h && h.d(),
        b && b.d(),
        ~c && S[c].d(),
        I && I.d();
    },
  };
}
function qp(o, e, t) {
  let { planDetailsBlock: n = null } = e,
    { foreverFreeInvitesCount: i = null } = e,
    { invitationLink: l = "" } = e,
    { isForeverFreePlanActive: r = !1 } = e,
    { buyTeamProPlanBlockState: c = null } = e,
    { buyProPlanBlockState: a = null } = e,
    { isTeamBlockEnabled: p = !1 } = e,
    { planName: u } = e,
    { canManagePlan: d } = e,
    m = () => {
      $.actions.openPaidAccountManagingPortal(),
        $.actions.sendAnalyticsEvent(
          "launchpad.monetization.manage-plan-button-clicked",
          void 0
        );
    };
  function g(h) {
    pe.call(this, o, h);
  }
  return (
    (o.$$set = (h) => {
      "planDetailsBlock" in h && t(0, (n = h.planDetailsBlock)),
        "foreverFreeInvitesCount" in h && t(1, (i = h.foreverFreeInvitesCount)),
        "invitationLink" in h && t(2, (l = h.invitationLink)),
        "isForeverFreePlanActive" in h && t(3, (r = h.isForeverFreePlanActive)),
        "buyTeamProPlanBlockState" in h &&
          t(4, (c = h.buyTeamProPlanBlockState)),
        "buyProPlanBlockState" in h && t(5, (a = h.buyProPlanBlockState)),
        "isTeamBlockEnabled" in h && t(6, (p = h.isTeamBlockEnabled)),
        "planName" in h && t(7, (u = h.planName)),
        "canManagePlan" in h && t(8, (d = h.canManagePlan));
    }),
    [n, i, l, r, c, a, p, u, d, m, g]
  );
}
var yn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          qp,
          Tp,
          T,
          {
            planDetailsBlock: 0,
            foreverFreeInvitesCount: 1,
            invitationLink: 2,
            isForeverFreePlanActive: 3,
            buyTeamProPlanBlockState: 4,
            buyProPlanBlockState: 5,
            isTeamBlockEnabled: 6,
            planName: 7,
            canManagePlan: 8,
          },
          xp
        );
    }
  },
  zl = yn;
function Ml(o) {
  let e,
    t,
    n,
    i,
    l = [jp, Ep],
    r = [];
  function c(a, p) {
    return a[1] === "plan" ? 0 : a[2].invitationsBlockState ? 1 : -1;
  }
  return (
    ~(e = c(o, -1)) && (t = r[e] = l[e](o)),
    {
      c() {
        t && t.c(), (n = ae());
      },
      m(a, p) {
        ~e && r[e].m(a, p), y(a, n, p), (i = !0);
      },
      p(a, p) {
        let u = e;
        (e = c(a, p)),
          e === u
            ? ~e && r[e].p(a, p)
            : (t &&
                (U(),
                v(r[u], 1, 1, () => {
                  r[u] = null;
                }),
                W()),
              ~e
                ? ((t = r[e]),
                  t ? t.p(a, p) : ((t = r[e] = l[e](a)), t.c()),
                  _(t, 1),
                  t.m(n.parentNode, n))
                : (t = null));
      },
      i(a) {
        i || (_(t), (i = !0));
      },
      o(a) {
        v(t), (i = !1);
      },
      d(a) {
        ~e && r[e].d(a), a && C(n);
      },
    }
  );
}
function Ep(o) {
  let e, t;
  return (
    (e = new Qo({
      props: {
        activations: o[2].invitationsBlockState.activations,
        bestBreakpoint: o[2].invitationsBlockState.bestBreakpoint,
        breakpoints: o[2].invitationsBlockState.breakpoints,
        downloads: o[2].invitationsBlockState.downloads,
        foreverFreeInvitesCount:
          o[2].invitationsBlockState.foreverFreeInvitesCount,
        invitationLink: o[2].invitationsBlockState.invitationLink,
        isGmailSectionEnabled: o[2].invitationsBlockState.isGmailSectionEnabled,
      },
    })),
    e.$on("switchToPlan", o[5]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.activations = n[2].invitationsBlockState.activations),
          i & 4 &&
            (l.bestBreakpoint = n[2].invitationsBlockState.bestBreakpoint),
          i & 4 && (l.breakpoints = n[2].invitationsBlockState.breakpoints),
          i & 4 && (l.downloads = n[2].invitationsBlockState.downloads),
          i & 4 &&
            (l.foreverFreeInvitesCount =
              n[2].invitationsBlockState.foreverFreeInvitesCount),
          i & 4 &&
            (l.invitationLink = n[2].invitationsBlockState.invitationLink),
          i & 4 &&
            (l.isGmailSectionEnabled =
              n[2].invitationsBlockState.isGmailSectionEnabled),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function jp(o) {
  let e, t;
  return (
    (e = new zl({
      props: {
        planDetailsBlock: o[2].planDetailsBlock,
        buyProPlanBlockState: o[2].buyProPlanBlockState,
        buyTeamProPlanBlockState: o[2].buyTeamProPlanBlockState,
        foreverFreeInvitesCount:
          o[2].invitationsBlockState?.foreverFreeInvitesCount,
        isTeamBlockEnabled: o[2].isTeamBlockEnabled,
        isForeverFreePlanActive:
          o[2].invitationsBlockState?.isForeverFreePlanActive,
        invitationLink: o[2].invitationsBlockState?.invitationLink,
        planName: o[2].planName,
        canManagePlan: o[2].canManagePlan,
      },
    })),
    e.$on("switchToInvites", o[4]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.planDetailsBlock = n[2].planDetailsBlock),
          i & 4 && (l.buyProPlanBlockState = n[2].buyProPlanBlockState),
          i & 4 && (l.buyTeamProPlanBlockState = n[2].buyTeamProPlanBlockState),
          i & 4 &&
            (l.foreverFreeInvitesCount =
              n[2].invitationsBlockState?.foreverFreeInvitesCount),
          i & 4 && (l.isTeamBlockEnabled = n[2].isTeamBlockEnabled),
          i & 4 &&
            (l.isForeverFreePlanActive =
              n[2].invitationsBlockState?.isForeverFreePlanActive),
          i & 4 &&
            (l.invitationLink = n[2].invitationsBlockState?.invitationLink),
          i & 4 && (l.planName = n[2].planName),
          i & 4 && (l.canManagePlan = n[2].canManagePlan),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Np(o) {
  let e,
    t,
    n = o[2] && Ml(o);
  return {
    c() {
      n && n.c(), (e = ae());
    },
    m(i, l) {
      n && n.m(i, l), y(i, e, l), (t = !0);
    },
    p(i, l) {
      i[2]
        ? n
          ? (n.p(i, l), l & 4 && _(n, 1))
          : ((n = Ml(i)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (U(),
          v(n, 1, 1, () => {
            n = null;
          }),
          W());
    },
    i(i) {
      t || (_(n), (t = !0));
    },
    o(i) {
      v(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && C(e);
    },
  };
}
function Hp(o) {
  let e, t;
  return (
    (e = new je({
      props: {
        anchorElement: o[0],
        $$slots: { default: [Np] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, [i]) {
        let l = {};
        i & 1 && (l.anchorElement = n[0]),
          i & 1030 && (l.$$scope = { dirty: i, ctx: n }),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Fp(o, e, t) {
  let n,
    i,
    l = ve(),
    r = $.stores.billingDetailsPopupState;
  re(o, r, (g) => t(6, (i = g)));
  let { anchorElement: c } = e,
    { mode: a = "plan" } = e,
    p = (g) => {
      l("changeMode", g);
    },
    u = () => {
      p("invites"),
        $.actions.sendAnalyticsEvent(
          "launchpad.monetization.invitations-button-clicked",
          void 0
        );
    },
    d = () => {
      p("plan"),
        $.actions.sendAnalyticsEvent(
          "launchpad.invitations.go-back-button-clicked",
          void 0
        );
    };
  Te(() => {
    $.actions.loadInvitationsStats();
  });
  function m(g) {
    pe.call(this, o, g);
  }
  return (
    (o.$$set = (g) => {
      "anchorElement" in g && t(0, (c = g.anchorElement)),
        "mode" in g && t(1, (a = g.mode));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 64) {
        e: t(2, (n = i));
      }
    }),
    [c, a, n, r, u, d, i, m]
  );
}
var Cn = class extends E {
    constructor(e) {
      super(), q(this, e, Fp, Hp, T, { anchorElement: 0, mode: 1 });
    }
  },
  Ll = Cn;
function Gp(o) {
  R(
    o,
    "svelte-1t7udx",
    `.plan-button.svelte-1t7udx.svelte-1t7udx{background:var(--billing-ntp-btn-background);padding:5px 10px;border-radius:27px;position:relative;display:flex;justify-content:center;--border-color:var(--launchpad-text-primary-color)}.plan-button-pro.svelte-1t7udx.svelte-1t7udx{--border-color:linear-gradient(
      to right,
      rgba(140 103 211 / 1),
      rgba(255 64 61 / 1),
      rgba(255 189 19 / 1)
    )}.plan-button.svelte-1t7udx.svelte-1t7udx::before{content:'';position:absolute;inset:0;border-radius:27px;padding:1px;background:var(--border-color);-webkit-mask:linear-gradient(var(--text-primary-color) 0 0) content-box,
      linear-gradient(var(--text-primary-color) 0 0);-webkit-mask-composite:xor;z-index:-1}.logo-container.svelte-1t7udx.svelte-1t7udx{width:16px;height:16px;margin-left:-3px;display:flex;justify-content:center;align-items:center}.plan-name.svelte-1t7udx.svelte-1t7udx{font-weight:700;font-size:14px;line-height:17px;margin-left:4px}.additional-text.svelte-1t7udx.svelte-1t7udx{font-weight:400;font-size:14px;line-height:17px;margin-left:4px}.tooltip-container.svelte-1t7udx.svelte-1t7udx{display:flex;flex-flow:row nowrap;column-gap:15px;padding:10px;text-align:left}.close-btn.svelte-1t7udx.svelte-1t7udx{position:absolute;top:0;right:0;margin:4px;color:var(--tooltip-close-color)}.pulse-animated.svelte-1t7udx>.svelte-1t7udx::before,.pulse-animated.svelte-1t7udx>.svelte-1t7udx::after{content:'';width:100%;height:100%;border-radius:27px;background-color:tomato;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;transform:scale(1);transform-origin:center center;animation:svelte-1t7udx-pulse-me 2s linear infinite}@keyframes svelte-1t7udx-pulse-me{0%{transform:scale(1);opacity:0}50%{opacity:0.1}70%{opacity:0.09}100%{transform:scale(1.1, 1.4);opacity:0}}`
  );
}
function Al(o) {
  let e,
    t = o[0].additionalText + "",
    n;
  return {
    c() {
      (e = k("span")),
        (n = V(t)),
        s(e, "class", "additional-text svelte-1t7udx");
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 1 && t !== (t = i[0].additionalText + "") && Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function $l(o) {
  let e, t;
  return (
    (e = new Ti({
      props: {
        tooltipPlacement: "bottom-start",
        showTooltip: !0,
        externalShowTooltip: !0,
        offset: [10, 20],
        arrowPadding: 64,
        useThemedColors: !0,
        $$slots: { tooltip: [Rp] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", Wp),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 8193 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Dp(o) {
  let e = M("ntp_billing_popup__special_offer_action") + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p: j,
    d(n) {
      n && C(t);
    },
  };
}
function Rp(o) {
  let e,
    t,
    n,
    i,
    l,
    r =
      M("ntp_billing_popup__special_offer_text", [o[0].yearlyPlanSavings]) + "",
    c,
    a,
    p,
    u,
    d,
    m;
  return (
    (n = new De({ props: { width: "10", height: "10" } })),
    (p = new ce({
      props: { size: "small", $$slots: { default: [Dp] }, $$scope: { ctx: o } },
    })),
    p.$on("click", o[9]),
    {
      c() {
        (e = k("div")),
          (t = k("button")),
          B(n.$$.fragment),
          (i = x()),
          (l = k("div")),
          (c = x()),
          (a = k("div")),
          B(p.$$.fragment),
          s(t, "class", "close-btn svelte-1t7udx"),
          s(l, "class", "tooltip-text"),
          s(a, "class", "tooltip-btn"),
          s(e, "class", "tooltip-container svelte-1t7udx");
      },
      m(g, h) {
        y(g, e, h),
          f(e, t),
          P(n, t, null),
          f(e, i),
          f(e, l),
          (l.innerHTML = r),
          f(e, c),
          f(e, a),
          P(p, a, null),
          (u = !0),
          d || ((m = Q(t, "click", o[8])), (d = !0));
      },
      p(g, h) {
        (!u || h & 1) &&
          r !==
            (r =
              M("ntp_billing_popup__special_offer_text", [
                g[0].yearlyPlanSavings,
              ]) + "") &&
          (l.innerHTML = r);
        let b = {};
        h & 8192 && (b.$$scope = { dirty: h, ctx: g }), p.$set(b);
      },
      i(g) {
        u || (_(n.$$.fragment, g), _(p.$$.fragment, g), (u = !0));
      },
      o(g) {
        v(n.$$.fragment, g), v(p.$$.fragment, g), (u = !1);
      },
      d(g) {
        g && C(e), z(n), z(p), (d = !1), m();
      },
    }
  );
}
function Tl(o) {
  let e, t;
  return (
    (e = new Ll({ props: { mode: o[3], anchorElement: o[1] } })),
    e.$on("close", o[6]),
    e.$on("changeMode", o[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 8 && (l.mode = n[3]), i & 2 && (l.anchorElement = n[1]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Up(o) {
  let e,
    t,
    n,
    i,
    l,
    r = o[0].planName + "",
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h;
  n = new Pi({ props: { height: "12px", width: "6px" } });
  let b = o[0].additionalText && Al(o),
    w = o[4] && $l(o),
    S = o[2] && Tl(o);
  return {
    c() {
      (e = k("button")),
        (t = k("span")),
        B(n.$$.fragment),
        (i = x()),
        (l = k("span")),
        (c = V(r)),
        (a = x()),
        b && b.c(),
        (p = x()),
        w && w.c(),
        (u = x()),
        S && S.c(),
        (d = ae()),
        s(t, "class", "logo-container svelte-1t7udx"),
        s(l, "class", "plan-name svelte-1t7udx"),
        s(e, "class", "plan-button svelte-1t7udx"),
        te(e, "plan-button-pro", o[0].isProPlan),
        te(e, "pulse-animated", o[0].isAnimated);
    },
    m(L, I) {
      y(L, e, I),
        f(e, t),
        P(n, t, null),
        f(e, i),
        f(e, l),
        f(l, c),
        f(e, a),
        b && b.m(e, null),
        f(e, p),
        w && w.m(e, null),
        o[10](e),
        y(L, u, I),
        S && S.m(L, I),
        y(L, d, I),
        (m = !0),
        g || ((h = Q(e, "click", o[5])), (g = !0));
    },
    p(L, [I]) {
      (!m || I & 1) && r !== (r = L[0].planName + "") && Y(c, r),
        L[0].additionalText
          ? b
            ? b.p(L, I)
            : ((b = Al(L)), b.c(), b.m(e, p))
          : b && (b.d(1), (b = null)),
        L[4]
          ? w
            ? (w.p(L, I), I & 16 && _(w, 1))
            : ((w = $l(L)), w.c(), _(w, 1), w.m(e, null))
          : w &&
            (U(),
            v(w, 1, 1, () => {
              w = null;
            }),
            W()),
        (!m || I & 1) && te(e, "plan-button-pro", L[0].isProPlan),
        (!m || I & 1) && te(e, "pulse-animated", L[0].isAnimated),
        L[2]
          ? S
            ? (S.p(L, I), I & 4 && _(S, 1))
            : ((S = Tl(L)), S.c(), _(S, 1), S.m(d.parentNode, d))
          : S &&
            (U(),
            v(S, 1, 1, () => {
              S = null;
            }),
            W());
    },
    i(L) {
      m || (_(n.$$.fragment, L), _(w), _(S), (m = !0));
    },
    o(L) {
      v(n.$$.fragment, L), v(w), v(S), (m = !1);
    },
    d(L) {
      L && C(e),
        z(n),
        b && b.d(),
        w && w.d(),
        o[10](null),
        L && C(u),
        S && S.d(L),
        L && C(d),
        (g = !1),
        h();
    },
  };
}
var Wp = (o) => o.stopPropagation();
function Op(o, e, t) {
  let n = $.stores.launchpadPopupId,
    i = $.stores.specialOfferPopupState,
    { state: l } = e,
    r,
    c = !1,
    a = "plan";
  n.subscribe((w) => {
    if (w?.openPopup === "billing-invitations") {
      r?.focus(), t(2, (c = !0)), t(3, (a = "invites"));
      return;
    }
    t(2, (c = !1));
  });
  let p = !1;
  i.subscribe((w) => {
    t(4, (p = w || !1));
  });
  let u = () => {
      t(2, (c = !c)),
        t(3, (a = "plan")),
        $.actions.sendAnalyticsEvent(
          "launchpad.monetization.plan-button-clicked",
          void 0
        ),
        $.actions.hideBillingButtonAnimation();
    },
    d = () => {
      t(2, (c = !1)), t(3, (a = "plan"));
    },
    m = ({ detail: w }) => {
      t(3, (a = w));
    },
    g = (w) => {
      t(4, (p = !1)), w.stopPropagation(), $.actions.closeYearlyOfferPopup();
    },
    h = (w) => {
      t(4, (p = !1)),
        w.stopPropagation(),
        $.actions.switchFromMonthlyToYearlyPlan();
    };
  function b(w) {
    fe[w ? "unshift" : "push"](() => {
      (r = w), t(1, r);
    });
  }
  return (
    (o.$$set = (w) => {
      "state" in w && t(0, (l = w.state));
    }),
    [l, r, c, a, p, u, d, m, g, h, b]
  );
}
var xn = class extends E {
    constructor(e) {
      super(), q(this, e, Op, Up, T, { state: 0 }, Gp);
    }
  },
  ql = xn;
function Zp(o) {
  R(
    o,
    "svelte-xbf2zt",
    "header.svelte-xbf2zt{display:flex;align-items:flex-start;justify-content:space-between;width:100%;padding-top:12px;padding-right:15px;padding-left:29px;margin-bottom:85px;box-sizing:border-box;min-height:51px;color:var(--launchpad-text-primary-color);position:relative;z-index:10001}.buttons.svelte-xbf2zt{display:flex;justify-content:flex-end}.billing-button-container.svelte-xbf2zt{margin-left:16px}"
  );
}
function El(o) {
  let e, t;
  return (
    (e = new Po({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Kp(o) {
  let e, t, n;
  return (
    (t = new ql({ props: { state: o[2] } })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "billing-button-container svelte-xbf2zt");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p(i, l) {
        let r = {};
        l & 4 && (r.state = i[2]), t.$set(r);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function Yp(o) {
  let e, t;
  return (
    (e = new Ho({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Jp(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h;
  t = new Io({
    props: {
      useAdBlocker: o[6],
      blockedAdsCount: o[5],
      blockedRequests: o[4],
      savedTabsMemory: o[3],
    },
  });
  let b = o[1] && El(o);
  (r = new No({})), (a = new jo({})), (u = new Mo({}));
  let w = [Yp, Kp],
    S = [];
  function L(I, N) {
    return I[0] ? 0 : I[2] && !I[2].isHidden ? 1 : -1;
  }
  return (
    ~(m = L(o, -1)) && (g = S[m] = w[m](o)),
    {
      c() {
        (e = k("header")),
          B(t.$$.fragment),
          (n = x()),
          (i = k("div")),
          b && b.c(),
          (l = x()),
          B(r.$$.fragment),
          (c = x()),
          B(a.$$.fragment),
          (p = x()),
          B(u.$$.fragment),
          (d = x()),
          g && g.c(),
          s(i, "class", "buttons svelte-xbf2zt"),
          s(e, "data-testid", "launchpad-header"),
          s(e, "class", "svelte-xbf2zt");
      },
      m(I, N) {
        y(I, e, N),
          P(t, e, null),
          f(e, n),
          f(e, i),
          b && b.m(i, null),
          f(i, l),
          P(r, i, null),
          f(i, c),
          P(a, i, null),
          f(i, p),
          P(u, i, null),
          f(i, d),
          ~m && S[m].m(i, null),
          (h = !0);
      },
      p(I, [N]) {
        let H = {};
        N & 64 && (H.useAdBlocker = I[6]),
          N & 32 && (H.blockedAdsCount = I[5]),
          N & 16 && (H.blockedRequests = I[4]),
          N & 8 && (H.savedTabsMemory = I[3]),
          t.$set(H),
          I[1]
            ? b
              ? N & 2 && _(b, 1)
              : ((b = El(I)), b.c(), _(b, 1), b.m(i, l))
            : b &&
              (U(),
              v(b, 1, 1, () => {
                b = null;
              }),
              W());
        let O = m;
        (m = L(I, N)),
          m === O
            ? ~m && S[m].p(I, N)
            : (g &&
                (U(),
                v(S[O], 1, 1, () => {
                  S[O] = null;
                }),
                W()),
              ~m
                ? ((g = S[m]),
                  g ? g.p(I, N) : ((g = S[m] = w[m](I)), g.c()),
                  _(g, 1),
                  g.m(i, null))
                : (g = null));
      },
      i(I) {
        h ||
          (_(t.$$.fragment, I),
          _(b),
          _(r.$$.fragment, I),
          _(a.$$.fragment, I),
          _(u.$$.fragment, I),
          _(g),
          (h = !0));
      },
      o(I) {
        v(t.$$.fragment, I),
          v(b),
          v(r.$$.fragment, I),
          v(a.$$.fragment, I),
          v(u.$$.fragment, I),
          v(g),
          (h = !1);
      },
      d(I) {
        I && C(e), z(t), b && b.d(), z(r), z(a), z(u), ~m && S[m].d();
      },
    }
  );
}
function Xp(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m = $.stores.launchpadHeader;
  return (
    re(o, m, (g) => t(9, (d = g))),
    (o.$$.update = () => {
      if (o.$$.dirty & 512) {
        e: t(8, (n = d?.totalHistoryCount ?? null));
      }
      if (o.$$.dirty & 512) {
        e: t(6, (i = d?.useAdBlocker ?? !1));
      }
      if (o.$$.dirty & 512) {
        e: t(5, (l = d?.blockedAdsCount ?? null));
      }
      if (o.$$.dirty & 512) {
        e: t(4, (r = d?.blockedRequests ?? null));
      }
      if (o.$$.dirty & 512) {
        e: t(3, (c = d?.savedTabsMemory ?? null));
      }
      if (o.$$.dirty & 512) {
        e: t(2, (a = d?.billing));
      }
      if (o.$$.dirty & 256) {
        e: t(1, (p = n !== null && Xe(n)));
      }
      if (o.$$.dirty & 512) {
        e: t(0, (u = d?.isTemporaryUser));
      }
    }),
    [u, p, a, c, r, l, i, m, n, d]
  );
}
var Sn = class extends E {
    constructor(e) {
      super(), q(this, e, Xp, Jp, T, {}, Zp);
    }
  },
  jl = Sn;
A();
function Qp(o) {
  R(
    o,
    "svelte-zjzw5s",
    ".vertical-tabs-container.svelte-zjzw5s{display:flex;position:relative;height:107px;background-color:var(--search-input-background);border-radius:8px;margin-bottom:40px}.vertical-tabs-image.svelte-zjzw5s{width:259px;border-top-left-radius:8px;border-bottom-left-radius:8px;cursor:pointer}.vertical-tabs-description.svelte-zjzw5s{font-size:14px;font-style:normal;font-weight:400;color:var(--launchpad-vertical-tabs-banner-text);line-height:16px}.vertical-tabs-title.svelte-zjzw5s{margin-bottom:10px;font-size:20px;font-style:normal;font-weight:700}.vertical-tabs-about.svelte-zjzw5s{display:flex;flex-direction:column;margin:16px auto 19px 26px;max-width:490px}.cross-icon.svelte-zjzw5s{position:absolute;top:10px;right:10px;cursor:pointer;z-index:1;color:var(--launchpad-vertical-tabs-banner-text)}"
  );
}
function eu(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h;
  return (
    (d = new De({ props: { width: "13", height: "13" } })),
    {
      c() {
        (e = k("section")),
          (t = k("img")),
          (i = x()),
          (l = k("div")),
          (r = k("div")),
          (r.textContent = `${M(
            "ntp_launchpad_discover_vertical_tabs_title"
          )}`),
          (c = x()),
          (a = k("div")),
          (a.textContent = `${M(
            "ntp_launchpad_discover_vertical_tabs_description"
          )}`),
          (p = x()),
          (u = k("div")),
          B(d.$$.fragment),
          s(t, "width", "259"),
          s(t, "height", "107"),
          s(t, "class", "vertical-tabs-image svelte-zjzw5s"),
          s(t, "alt", "collection-intro"),
          yi(t.src, (n = "/shared/assets/images/discover_vertical_tabs.png")) ||
            s(t, "src", n),
          s(r, "class", "vertical-tabs-title svelte-zjzw5s"),
          s(a, "class", "vertical-tabs-description svelte-zjzw5s"),
          s(l, "class", "vertical-tabs-about svelte-zjzw5s"),
          s(u, "class", "cross-icon svelte-zjzw5s"),
          s(e, "class", "vertical-tabs-container svelte-zjzw5s");
      },
      m(b, w) {
        y(b, e, w),
          f(e, t),
          f(e, i),
          f(e, l),
          f(l, r),
          f(l, c),
          f(l, a),
          f(e, p),
          f(e, u),
          P(d, u, null),
          (m = !0),
          g ||
            ((h = [
              Q(t, "click", o[3]),
              Q(t, "keydown", o[2]),
              Q(u, "click", o[0]),
              Q(u, "keydown", o[1]),
            ]),
            (g = !0));
      },
      p: j,
      i(b) {
        m || (_(d.$$.fragment, b), (m = !0));
      },
      o(b) {
        v(d.$$.fragment, b), (m = !1);
      },
      d(b) {
        b && C(e), z(d), (g = !1), he(h);
      },
    }
  );
}
function tu(o) {
  let e = () => {
      $.actions.hideLaunchpadVerticalTabsBanner();
    },
    t = (l) => {
      (l.code !== "Enter" && l.code !== "Escape") || e();
    },
    n = (l) => {
      l.code === "Enter" && i();
    },
    i = () => {
      $.actions.showVerticalTabsModal({}), e();
    };
  return [e, t, n, i];
}
var In = class extends E {
    constructor(e) {
      super(), q(this, e, tu, eu, T, {}, Qp);
    }
  },
  Nl = In;
A();
A();
A();
function nu(o) {
  R(
    o,
    "svelte-1ms01yq",
    ".reconnect-button.svelte-1ms01yq{margin:4px 8px;color:var(--primary-text-color)}"
  );
}
function iu(o) {
  let e, t, n, i;
  return {
    c() {
      (e = k("button")),
        (t = V(o[1])),
        s(e, "class", "reconnect-button svelte-1ms01yq"),
        (e.disabled = o[0]);
    },
    m(l, r) {
      y(l, e, r), f(e, t), n || ((i = Q(e, "click", o[2])), (n = !0));
    },
    p(l, [r]) {
      r & 2 && Y(t, l[1]), r & 1 && (e.disabled = l[0]);
    },
    i: j,
    o: j,
    d(l) {
      l && C(e), (n = !1), i();
    },
  };
}
function ou(o, e, t) {
  let n,
    { isReconnecting: i } = e,
    l = () => {
      $.actions.sendAnalyticsEvent(
        "reconnect-dialog.try-again-button-clicked",
        void 0
      ),
        $.actions.retryAllRequests();
    };
  return (
    (o.$$set = (r) => {
      "isReconnecting" in r && t(0, (i = r.isReconnecting));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: t(
          1,
          (n = i
            ? M("ntp_reconnect_dialog__reconnecting")
            : M("ntp_reconnect_dialog__try_again"))
        );
      }
    }),
    [i, n, l]
  );
}
var Bn = class extends E {
    constructor(e) {
      super(), q(this, e, ou, iu, T, { isReconnecting: 0 }, nu);
    }
  },
  Hl = Bn;
A();
function lu(o) {
  R(
    o,
    "svelte-1e2ngrc",
    ".message-header.svelte-1e2ngrc,.message-content.svelte-1e2ngrc{margin:4px 8px}.message-header.svelte-1e2ngrc{font-weight:bold}.message-content.svelte-1e2ngrc{display:flex;margin:0;align-items:center;flex:1 1 auto}"
  );
}
function ru(o) {
  let e, t, n, i, l;
  return {
    c() {
      (e = k("div")),
        (t = V(o[0])),
        (n = x()),
        (i = k("div")),
        (l = V(o[1])),
        s(e, "class", "message-header svelte-1e2ngrc"),
        s(i, "class", "message-content svelte-1e2ngrc");
    },
    m(r, c) {
      y(r, e, c), f(e, t), y(r, n, c), y(r, i, c), f(i, l);
    },
    p(r, [c]) {
      c & 1 && Y(t, r[0]), c & 2 && Y(l, r[1]);
    },
    i: j,
    o: j,
    d(r) {
      r && C(e), r && C(n), r && C(i);
    },
  };
}
function au(o, e, t) {
  let { headerText: n } = e,
    { contentText: i } = e;
  return (
    (o.$$set = (l) => {
      "headerText" in l && t(0, (n = l.headerText)),
        "contentText" in l && t(1, (i = l.contentText));
    }),
    [n, i]
  );
}
var Pn = class extends E {
    constructor(e) {
      super(), q(this, e, au, ru, T, { headerText: 0, contentText: 1 }, lu);
    }
  },
  Fl = Pn;
function su(o) {
  R(
    o,
    "svelte-1iac016",
    ".reconnect-dialog.svelte-1iac016{display:flex;padding:calc(13px - 4px);min-width:540px;align-items:center;justify-content:space-between;background:var(--background-primary);border-radius:8px;box-shadow:0 4px 16px rgb(84 84 103 / 0.12), 0 2px 3px rgb(0 0 0 / 0.06);font-size:12px;line-height:16px;color:var(--primary-text-color);position:fixed;bottom:16px;left:50%;z-index:2;transform:translateX(-50%)}.reconnect-dialog.svelte-1iac016 .icon{margin:2px 4px}"
  );
}
function Vl(o) {
  let e, t, n, i, l, r;
  (t = new lo({ props: { width: "16", height: "16" } })),
    (i = new Fl({ props: { headerText: o[3], contentText: o[2] } }));
  let c = o[1] && Gl(o);
  return {
    c() {
      (e = k("div")),
        B(t.$$.fragment),
        (n = x()),
        B(i.$$.fragment),
        (l = x()),
        c && c.c(),
        s(e, "class", "reconnect-dialog svelte-1iac016"),
        s(e, "data-testid", "reconnect-dialog");
    },
    m(a, p) {
      y(a, e, p),
        P(t, e, null),
        f(e, n),
        P(i, e, null),
        f(e, l),
        c && c.m(e, null),
        (r = !0);
    },
    p(a, p) {
      let u = {};
      p & 8 && (u.headerText = a[3]),
        p & 4 && (u.contentText = a[2]),
        i.$set(u),
        a[1]
          ? c
            ? (c.p(a, p), p & 2 && _(c, 1))
            : ((c = Gl(a)), c.c(), _(c, 1), c.m(e, null))
          : c &&
            (U(),
            v(c, 1, 1, () => {
              c = null;
            }),
            W());
    },
    i(a) {
      r || (_(t.$$.fragment, a), _(i.$$.fragment, a), _(c), (r = !0));
    },
    o(a) {
      v(t.$$.fragment, a), v(i.$$.fragment, a), v(c), (r = !1);
    },
    d(a) {
      a && C(e), z(t), z(i), c && c.d();
    },
  };
}
function Gl(o) {
  let e, t;
  return (
    (e = new Hl({ props: { isReconnecting: o[0] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 1 && (l.isReconnecting = n[0]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function cu(o) {
  let e,
    t,
    n = o[4] && Vl(o);
  return {
    c() {
      n && n.c(), (e = ae());
    },
    m(i, l) {
      n && n.m(i, l), y(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[4]
        ? n
          ? (n.p(i, l), l & 16 && _(n, 1))
          : ((n = Vl(i)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (U(),
          v(n, 1, 1, () => {
            n = null;
          }),
          W());
    },
    i(i) {
      t || (_(n), (t = !0));
    },
    o(i) {
      v(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && C(e);
    },
  };
}
function pu(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d = $.stores.connection;
  re(o, d, (S) => t(9, (u = S)));
  let m = null,
    g = null;
  function h() {
    if (l === null) return;
    let S = Date.now(),
      L = Math.floor(tt(l - S));
    t(6, (g = L < 1 ? 0 : L)), (m = window.setTimeout(h, 1e3));
  }
  function b() {
    m && clearInterval(m);
  }
  function w() {
    return i
      ? ""
      : g === null
      ? M("ntp_reconnect_dialog__description_no_connection")
      : `${M("ntp_reconnect_dialog__description_offline")} ${bi(
          g,
          M("ntp_reconnect_dialog__sec"),
          M("ntp_reconnect_dialog__secs")
        )}`;
  }
  return (
    ot(b),
    (o.$$.update = () => {
      if (o.$$.dirty & 512) {
        e: t(8, (n = u?.isOnline ?? !0));
      }
      if (o.$$.dirty & 512) {
        e: t(0, (i = u?.isReconnecting ?? !1));
      }
      if (o.$$.dirty & 512) {
        e: t(7, (l = u?.reconnectionCounter ?? null));
      }
      if (o.$$.dirty & 385) {
        e: l !== null && !i && n ? (b(), h()) : (b(), t(6, (g = null)));
      }
      if (o.$$.dirty & 385) {
        e: t(1, (r = (i || l !== null) && n));
      }
      if (o.$$.dirty & 258) {
        e: t(4, (c = !n || r));
      }
      if (o.$$.dirty & 2) {
        e: t(
          3,
          (a = r
            ? M("ntp_reconnect_dialog__title_no_connection")
            : M("ntp_reconnect_dialog__title_offline"))
        );
      }
      if (o.$$.dirty & 65) {
        e: t(2, (p = w()));
      }
    }),
    [i, r, p, a, c, d, g, l, n, u]
  );
}
var zn = class extends E {
    constructor(e) {
      super(), q(this, e, pu, cu, T, {}, su);
    }
  },
  Dl = zn;
A();
function uu(o) {
  R(
    o,
    "svelte-1xl58a3",
    ".wrapper.svelte-1xl58a3{align-items:center;background:rgb(25 119 243 / 0.8);border-radius:8px;border:1px solid #1977f3;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;margin-top:24px;padding:9px 14px;color:#fff}.label-container.svelte-1xl58a3{align-items:center;display:flex;flex-direction:row}.label-text.svelte-1xl58a3{font-size:14px;padding-left:10px}.button.svelte-1xl58a3{background:rgb(0 0 0 / 0.25);color:#fff;border-radius:50px;border:1px solid transparent;font-size:13px;font-weight:bold;line-height:17px;padding:4px 14px;display:flex;column-gap:7px;text-decoration:none}.button.svelte-1xl58a3:hover{background:rgb(0 0 0 / 0.3)}.button.svelte-1xl58a3:active{background:rgb(0 0 0 / 0.4);border-color:rgb(0 0 0 / 0.05)}.button.svelte-1xl58a3:disabled{background:rgb(0 0 0 / 0.25);color:rgb(255 255 255 / 0.5);cursor:not-allowed}.button.is-important.svelte-1xl58a3{background:#f56130}.button.is-important.svelte-1xl58a3:active{background:#ec5624}.button.is-important.svelte-1xl58a3:hover,.button.is-important.svelte-1xl58a3:focus:not(:active){background:rgba(245 97 48 / 0.85)}.button-loader.svelte-1xl58a3{margin-left:-7px}"
  );
}
function fu(o) {
  let e,
    t,
    n,
    i = o[0].buttonText + "",
    l,
    r,
    c,
    a,
    p = o[1] && Rl(o);
  return {
    c() {
      (e = k("button")),
        p && p.c(),
        (t = x()),
        (n = k("span")),
        (l = V(i)),
        s(e, "class", "button svelte-1xl58a3"),
        (e.disabled = o[1]);
    },
    m(u, d) {
      y(u, e, d),
        p && p.m(e, null),
        f(e, t),
        f(e, n),
        f(n, l),
        (r = !0),
        c || ((a = Q(e, "click", o[2])), (c = !0));
    },
    p(u, d) {
      u[1]
        ? p
          ? d & 2 && _(p, 1)
          : ((p = Rl(u)), p.c(), _(p, 1), p.m(e, t))
        : p &&
          (U(),
          v(p, 1, 1, () => {
            p = null;
          }),
          W()),
        (!r || d & 1) && i !== (i = u[0].buttonText + "") && Y(l, i),
        (!r || d & 2) && (e.disabled = u[1]);
    },
    i(u) {
      r || (_(p), (r = !0));
    },
    o(u) {
      v(p), (r = !1);
    },
    d(u) {
      u && C(e), p && p.d(), (c = !1), a();
    },
  };
}
function du(o) {
  let e,
    t = o[0].buttonText + "",
    n,
    i;
  return {
    c() {
      (e = k("a")),
        (n = V(t)),
        s(e, "class", "button is-important svelte-1xl58a3"),
        s(e, "href", (i = o[0].manualDownloadLink));
    },
    m(l, r) {
      y(l, e, r), f(e, n);
    },
    p(l, r) {
      r & 1 && t !== (t = l[0].buttonText + "") && Y(n, t),
        r & 1 && i !== (i = l[0].manualDownloadLink) && s(e, "href", i);
    },
    i: j,
    o: j,
    d(l) {
      l && C(e);
    },
  };
}
function Rl(o) {
  let e, t, n;
  return (
    (t = new pt({})),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "button-loader svelte-1xl58a3");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function mu(o) {
  let e,
    t,
    n,
    i,
    l,
    r = o[0].text + "",
    c,
    a,
    p,
    u,
    d;
  n = new Ei({ props: { width: "16", height: "16" } });
  let m = [du, fu],
    g = [];
  function h(b, w) {
    return b[0].manualDownloadLink ? 0 : 1;
  }
  return (
    (p = h(o, -1)),
    (u = g[p] = m[p](o)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          B(n.$$.fragment),
          (i = x()),
          (l = k("div")),
          (c = V(r)),
          (a = x()),
          u.c(),
          s(l, "class", "label-text svelte-1xl58a3"),
          s(t, "class", "label-container svelte-1xl58a3"),
          s(e, "class", "wrapper svelte-1xl58a3");
      },
      m(b, w) {
        y(b, e, w),
          f(e, t),
          P(n, t, null),
          f(t, i),
          f(t, l),
          f(l, c),
          f(e, a),
          g[p].m(e, null),
          (d = !0);
      },
      p(b, [w]) {
        (!d || w & 1) && r !== (r = b[0].text + "") && Y(c, r);
        let S = p;
        (p = h(b, w)),
          p === S
            ? g[p].p(b, w)
            : (U(),
              v(g[S], 1, 1, () => {
                g[S] = null;
              }),
              W(),
              (u = g[p]),
              u ? u.p(b, w) : ((u = g[p] = m[p](b)), u.c()),
              _(u, 1),
              u.m(e, null));
      },
      i(b) {
        d || (_(n.$$.fragment, b), _(u), (d = !0));
      },
      o(b) {
        v(n.$$.fragment, b), v(u), (d = !1);
      },
      d(b) {
        b && C(e), z(n), g[p].d();
      },
    }
  );
}
function _u(o, e, t) {
  let n,
    { updateInfo: i } = e,
    l = () => $.actions.continueUpdating();
  return (
    (o.$$set = (r) => {
      "updateInfo" in r && t(0, (i = r.updateInfo));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: t(1, (n = i.status === "InProgress"));
      }
    }),
    [i, n, l]
  );
}
var Mn = class extends E {
    constructor(e) {
      super(), q(this, e, _u, mu, T, { updateInfo: 0 }, uu);
    }
  },
  Ul = Mn;
A();
A();
A();
function gu(o) {
  R(
    o,
    "svelte-qvpeju",
    "button.svelte-qvpeju{box-sizing:border-box;--size:24px;position:relative;width:var(--size);min-width:var(--size);height:var(--size);border-radius:12px}button.svelte-qvpeju .rotate{transform:rotate(180deg)}button.svelte-qvpeju:hover{background-color:var(--workspace-dot-button-hover)}button.svelte-qvpeju:active{background-color:var(--workspace-dot-button-active)}.context-menu-wrapper.svelte-qvpeju .context-menu-button{--size:24px}.left-buttons.svelte-qvpeju{display:flex;align-items:center;color:var(--launchpad-text-primary-color);margin-left:8px}.left-buttons.svelte-qvpeju .menu-button:hover{background-color:var(--workspace-dot-button-hover)}.left-buttons.svelte-qvpeju .menu-button:active{background-color:var(--workspace-dot-button-active)}@media(min-width: 1000px){.left-buttons.svelte-qvpeju{margin-right:28px}}.context-menu-wrapper.svelte-qvpeju{position:relative;user-select:none;margin-right:2px}"
  );
}
function hu(o) {
  let e, t, n, i, l, r, c, a, p;
  return (
    (n = new $i({
      props: { menuItems: o[1], className: "context-menu-button" },
    })),
    (r = new Ze({
      props: { width: "10", height: "5", className: o[0] ? "rotate" : "" },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          B(n.$$.fragment),
          (i = x()),
          (l = k("button")),
          B(r.$$.fragment),
          s(t, "class", "context-menu-wrapper svelte-qvpeju"),
          s(l, "data-testid", "toggle-minimize"),
          s(l, "class", "svelte-qvpeju"),
          s(e, "class", "left-buttons svelte-qvpeju");
      },
      m(u, d) {
        y(u, e, d),
          f(e, t),
          P(n, t, null),
          f(e, i),
          f(e, l),
          P(r, l, null),
          (c = !0),
          a || ((p = Q(l, "click", o[5])), (a = !0));
      },
      p(u, [d]) {
        let m = {};
        d & 2 && (m.menuItems = u[1]), n.$set(m);
        let g = {};
        d & 1 && (g.className = u[0] ? "rotate" : ""), r.$set(g);
      },
      i(u) {
        c || (_(n.$$.fragment, u), _(r.$$.fragment, u), (c = !0));
      },
      o(u) {
        v(n.$$.fragment, u), v(r.$$.fragment, u), (c = !1);
      },
      d(u) {
        u && C(e), z(n), z(r), (a = !1), p();
      },
    }
  );
}
function bu(o, e, t) {
  let n,
    i = ve(),
    { ableRemove: l } = e,
    { editMode: r } = e,
    { minimized: c } = e,
    a = [
      { title: M("ntp_workspace_list__rename"), click: m },
      { title: M("ntp_workspace_list__change_icon"), click: d },
    ],
    p = () => {
      $.actions.sendAnalyticsEvent(
        "launchpad.workspace-delete-clicked",
        void 0
      ),
        i("remove");
    },
    u = { title: M("ntp_workspace_list__delete"), click: p, useErrorColor: !0 };
  function d() {
    $.actions.sendAnalyticsEvent(
      "launchpad.change-workspace-icon-clicked",
      void 0
    ),
      i("toggleAvatarPicker");
  }
  function m() {
    $.actions.sendAnalyticsEvent("launchpad.rename-workspace-clicked", void 0),
      t(3, (r = !r));
  }
  let g = () => i("toggleMinimized");
  return (
    (o.$$set = (h) => {
      "ableRemove" in h && t(4, (l = h.ableRemove)),
        "editMode" in h && t(3, (r = h.editMode)),
        "minimized" in h && t(0, (c = h.minimized));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: t(1, (n = l ? [...a, u] : a));
      }
    }),
    [c, n, i, r, l, g]
  );
}
var Ln = class extends E {
    constructor(e) {
      super(),
        q(this, e, bu, hu, T, { ableRemove: 4, editMode: 3, minimized: 0 }, gu);
    }
  },
  Wl = Ln;
A();
A();
function vu(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(
          t,
          "d",
          "M22 3a8 8 0 110 16 8 8 0 010-16zm0 29.334a26.187 26.187 0 0118.666 7.706v8.294H3.334v-8.24A26.186 26.186 0 0122 32.334zm0-32a10.667 10.667 0 100 21.333A10.667 10.667 0 0022 .333zm0 29.333A29.068 29.068 0 001.44 38.2l-.773.8v12h42.666V39l-.773-.8A29.066 29.066 0 0022 29.667z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 44 51"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function ku(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var An = class extends E {
    constructor(e) {
      super(), q(this, e, ku, vu, T, { width: 0, height: 1, className: 2 });
    }
  },
  $n = An;
A();
function wu(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(
          t,
          "d",
          "M11.5884 6.88418L14.0005 4.24859L11.5884 1.61133V3.68604H2.74957V4.81113H11.5884V6.88418ZM4.41156 9.1276L1.99951 11.7492L4.41156 14.4256V12.3118H13.2504V11.1867H4.41156V9.1276Z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 16 16"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function yu(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Tn = class extends E {
    constructor(e) {
      super(), q(this, e, yu, wu, T, { width: 0, height: 1, className: 2 });
    }
  },
  Ol = Tn;
function Cu(o) {
  R(
    o,
    "svelte-xb94m2",
    `.right-buttons.svelte-xb94m2{display:none;align-items:center;margin-left:auto}@media(min-width: 1000px){.right-buttons.svelte-xb94m2{display:flex
  }}.team-buttons.svelte-xb94m2{display:flex;align-items:center;margin-left:26px}.workspace-action.svelte-xb94m2{display:flex;align-items:center;width:100%;height:20px;font-size:12px;font-weight:400;line-height:20px;background:var(--workspace-team-buttons-background);border-radius:18px;text-decoration:none;white-space:nowrap;color:inherit;padding:0 10px;transition:var(--animation-time);margin:0 5px}.workspace-action.large.svelte-xb94m2{height:auto;line-height:18px;padding:6px 10px}.workspace-action.svelte-xb94m2:last-child{margin-right:0}.workspace-action.svelte-xb94m2:hover{background-color:var(--workspace-team-buttons-hover)}.workspace-action.svelte-xb94m2:active{background-color:var(--workspace-team-buttons-active)}.workspace-action.svelte-xb94m2 .icon{margin-right:4px}.workspace-action.invite.svelte-xb94m2{display:none}@media(min-width: 750px){.workspace-action.invite.svelte-xb94m2{display:flex
  }}`
  );
}
function Zl(o) {
  let e,
    t,
    n,
    i = o[4] && Kl(o),
    l = o[3] && o[2] && Yl(o);
  return {
    c() {
      (e = k("div")),
        i && i.c(),
        (t = x()),
        l && l.c(),
        s(e, "class", "right-buttons svelte-xb94m2"),
        s(e, "data-testid", "right-buttons");
    },
    m(r, c) {
      y(r, e, c), i && i.m(e, null), f(e, t), l && l.m(e, null), (n = !0);
    },
    p(r, c) {
      r[4]
        ? i
          ? (i.p(r, c), c & 16 && _(i, 1))
          : ((i = Kl(r)), i.c(), _(i, 1), i.m(e, t))
        : i &&
          (U(),
          v(i, 1, 1, () => {
            i = null;
          }),
          W()),
        r[3] && r[2]
          ? l
            ? (l.p(r, c), c & 12 && _(l, 1))
            : ((l = Yl(r)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (U(),
            v(l, 1, 1, () => {
              l = null;
            }),
            W());
    },
    i(r) {
      n || (_(i), _(l), (n = !0));
    },
    o(r) {
      v(i), v(l), (n = !1);
    },
    d(r) {
      r && C(e), i && i.d(), l && l.d();
    },
  };
}
function Kl(o) {
  let e, t, n, i, l, r, c;
  return (
    (t = new Ol({ props: { width: "16", height: "16" } })),
    {
      c() {
        (e = k("button")),
          B(t.$$.fragment),
          (n = x()),
          (i = k("span")),
          (i.textContent = `${M("ntp_workspace_list__share_app")}`),
          s(e, "class", "workspace-action svelte-xb94m2"),
          s(e, "data-testid", "launchpad-workspace-share-app-button"),
          te(e, "large", !o[3]);
      },
      m(a, p) {
        y(a, e, p),
          P(t, e, null),
          f(e, n),
          f(e, i),
          (l = !0),
          r || ((c = Q(e, "click", o[6])), (r = !0));
      },
      p(a, p) {
        (!l || p & 8) && te(e, "large", !a[3]);
      },
      i(a) {
        l || (_(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        v(t.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && C(e), z(t), (r = !1), c();
      },
    }
  );
}
function Yl(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a = M("ntp_workspace_list__manage") + "",
    p,
    u,
    d,
    m,
    g,
    h = [Su, xu],
    b = [];
  function w(S, L) {
    return S[1] ? 1 : 0;
  }
  return (
    (t = w(o, -1)),
    (n = b[t] = h[t](o)),
    (r = new ro({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = k("div")),
          n.c(),
          (i = x()),
          (l = k("a")),
          B(r.$$.fragment),
          (c = x()),
          (p = V(a)),
          s(l, "href", (u = o[2].applications)),
          s(l, "target", "_blank"),
          s(l, "rel", "noopener noreferrer"),
          s(l, "class", "workspace-action manage svelte-xb94m2"),
          s(e, "class", "team-buttons svelte-xb94m2");
      },
      m(S, L) {
        y(S, e, L),
          b[t].m(e, null),
          f(e, i),
          f(e, l),
          P(r, l, null),
          f(l, c),
          f(l, p),
          (d = !0),
          m || ((g = Q(l, "click", o[8])), (m = !0));
      },
      p(S, L) {
        let I = t;
        (t = w(S, L)),
          t === I
            ? b[t].p(S, L)
            : (U(),
              v(b[I], 1, 1, () => {
                b[I] = null;
              }),
              W(),
              (n = b[t]),
              n ? n.p(S, L) : ((n = b[t] = h[t](S)), n.c()),
              _(n, 1),
              n.m(e, i)),
          (!d || (L & 4 && u !== (u = S[2].applications))) && s(l, "href", u);
      },
      i(S) {
        d || (_(n), _(r.$$.fragment, S), (d = !0));
      },
      o(S) {
        v(n), v(r.$$.fragment, S), (d = !1);
      },
      d(S) {
        S && C(e), b[t].d(), z(r), (m = !1), g();
      },
    }
  );
}
function xu(o) {
  let e,
    t,
    n,
    i = M("ntp_workspace_list__invite") + "",
    l,
    r,
    c,
    a;
  return (
    (t = new $n({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = k("button")),
          B(t.$$.fragment),
          (n = x()),
          (l = V(i)),
          s(e, "class", "workspace-action invite svelte-xb94m2");
      },
      m(p, u) {
        y(p, e, u),
          P(t, e, null),
          f(e, n),
          f(e, l),
          (r = !0),
          c || ((a = Q(e, "click", o[7])), (c = !0));
      },
      p: j,
      i(p) {
        r || (_(t.$$.fragment, p), (r = !0));
      },
      o(p) {
        v(t.$$.fragment, p), (r = !1);
      },
      d(p) {
        p && C(e), z(t), (c = !1), a();
      },
    }
  );
}
function Su(o) {
  let e,
    t,
    n,
    i = M("ntp_workspace_list__invite") + "",
    l,
    r,
    c,
    a,
    p;
  return (
    (t = new $n({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = k("a")),
          B(t.$$.fragment),
          (n = x()),
          (l = V(i)),
          s(e, "href", (r = o[2].invites)),
          s(e, "target", "_blank"),
          s(e, "rel", "noopener noreferrer"),
          s(e, "class", "workspace-action invite svelte-xb94m2");
      },
      m(u, d) {
        y(u, e, d),
          P(t, e, null),
          f(e, n),
          f(e, l),
          (c = !0),
          a || ((p = Q(e, "click", o[7])), (a = !0));
      },
      p(u, d) {
        (!c || (d & 4 && r !== (r = u[2].invites))) && s(e, "href", r);
      },
      i(u) {
        c || (_(t.$$.fragment, u), (c = !0));
      },
      o(u) {
        v(t.$$.fragment, u), (c = !1);
      },
      d(u) {
        u && C(e), z(t), (a = !1), p();
      },
    }
  );
}
function Iu(o) {
  let e,
    t,
    n = !o[0] && Zl(o);
  return {
    c() {
      n && n.c(), (e = ae());
    },
    m(i, l) {
      n && n.m(i, l), y(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[0]
        ? n &&
          (U(),
          v(n, 1, 1, () => {
            n = null;
          }),
          W())
        : n
        ? (n.p(i, l), l & 1 && _(n, 1))
        : ((n = Zl(i)), n.c(), _(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (_(n), (t = !0));
    },
    o(i) {
      v(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && C(e);
    },
  };
}
function Bu(o, e, t) {
  let n,
    i,
    l,
    { minimized: r } = e,
    { teamWorkspace: c } = e,
    { userCanInvite: a } = e,
    { b2bEnabled: p } = e,
    { teamAdminLinks: u } = e,
    d = $.stores.canBeShared;
  re(o, d, (b) => t(11, (l = b)));
  let m = () => {
      $.actions.sendAnalyticsEvent(
        "launchpad.share-application-button-clicked",
        void 0
      ),
        $.actions.showShareApplicationModal({
          source: "launchpad.share-application-button-clicked",
        });
    },
    g = (b) => {
      $.actions.sendAnalyticsEvent("launchpad.invite-button-clicked", void 0),
        p &&
          (b.preventDefault(),
          $.actions.startInvitingTeammates({
            source: "ntp-invite-right-button",
          }));
    },
    h = () => {
      $.actions.sendAnalyticsEvent("launchpad.manage-button-clicked", void 0);
    };
  return (
    (o.$$set = (b) => {
      "minimized" in b && t(0, (r = b.minimized)),
        "teamWorkspace" in b && t(9, (c = b.teamWorkspace)),
        "userCanInvite" in b && t(10, (a = b.userCanInvite)),
        "b2bEnabled" in b && t(1, (p = b.b2bEnabled)),
        "teamAdminLinks" in b && t(2, (u = b.teamAdminLinks));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2048) {
        e: t(4, (n = l?.hasSharingAppsFeature));
      }
      if (o.$$.dirty & 1540) {
        e: t(3, (i = a && c && u));
      }
    }),
    [r, p, u, i, n, d, m, g, h, c, a, l]
  );
}
var qn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Bu,
          Iu,
          T,
          {
            minimized: 0,
            teamWorkspace: 9,
            userCanInvite: 10,
            b2bEnabled: 1,
            teamAdminLinks: 2,
          },
          Cu
        );
    }
  },
  Jl = qn;
A();
function Pu(o) {
  R(
    o,
    "svelte-mn0b23",
    ".title.svelte-mn0b23.svelte-mn0b23{align-items:center;display:flex;height:28px;min-width:0;position:relative}h2.svelte-mn0b23.svelte-mn0b23{color:var(--launchpad-text-primary-color);cursor:pointer;font-size:18px;font-weight:100;line-height:22px;margin:0;overflow:hidden;text-overflow:ellipsis;user-select:none;white-space:nowrap}.is-in-edit-mode.svelte-mn0b23 h2.svelte-mn0b23{display:none}.title-input.svelte-mn0b23.svelte-mn0b23{background-color:transparent;border:none;font-size:18px;height:29px;line-height:22px;outline:none;padding:0;transform:translateX(8px);width:calc(100% - 16px);will-change:transform;color:var(--rename-input-color);max-width:220px}.title-edit.svelte-mn0b23.svelte-mn0b23{--bg:var(--rename-input-bg);background-color:var(--bg);border-radius:6px;display:flex;position:relative;width:307px}.title-edit.has-tooltip.svelte-mn0b23.svelte-mn0b23{--bg:rgb(245 97 48 / 0.15);border:1px solid var(--field-border-error-color)}.title-edit.has-tooltip.svelte-mn0b23 .title-input.svelte-mn0b23{color:var(--rename-input-color)}.title-edit.has-tooltip.svelte-mn0b23 .title-input.svelte-mn0b23::placeholder{color:var(--rename-input-placeholder)}.has-tooltip.svelte-mn0b23.svelte-mn0b23::before{opacity:1;pointer-events:none;position:absolute;content:attr(data-tooltip);top:calc(100% + 8px);left:0;line-height:17px;white-space:nowrap;padding:13px;width:fit-content;background-color:#0a0a0b;color:#fff;border-radius:4px;z-index:999;transition:var(--animation-time);font-size:12px}.has-tooltip.svelte-mn0b23.svelte-mn0b23::after{content:'';width:10px;height:10px;border-radius:1px;transform:rotate(-45deg);position:absolute;top:calc(100% + 3px);left:88px;background-color:#0a0a0b}.save-title-button.svelte-mn0b23.svelte-mn0b23{background:rgb(25 119 243 / 0.3);border-radius:3px;color:#fff;position:absolute;right:5px;top:5px;height:20px;width:52px;display:flex;justify-content:center;align-items:center;cursor:pointer}.save-title-button.svelte-mn0b23.svelte-mn0b23:hover{background:rgb(25 119 243 / 0.4);transition:var(--animation-time)}"
  );
}
function Xl(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p = o[4] && Ql(o);
  return {
    c() {
      (e = k("form")),
        (t = k("input")),
        (i = x()),
        p && p.c(),
        s(t, "class", "title-input svelte-mn0b23"),
        s(t, "placeholder", (n = M("ntp_workspace_list__title_placeholder"))),
        s(t, "type", "text"),
        (t.value = o[1]),
        s(e, "class", "title-edit svelte-mn0b23"),
        s(e, "data-tooltip", (l = M("ntp_workspace_list__title_tooltip"))),
        te(e, "has-tooltip", o[3]);
    },
    m(u, d) {
      y(u, e, d),
        f(e, t),
        o[11](t),
        f(e, i),
        p && p.m(e, null),
        (r = !0),
        c ||
          ((a = [
            Q(t, "input", o[6]),
            Q(t, "keydown", o[8]),
            Q(t, "blur", o[9]),
            Q(e, "submit", He(o[7])),
          ]),
          (c = !0));
    },
    p(u, d) {
      (!r || (d & 2 && t.value !== u[1])) && (t.value = u[1]),
        u[4]
          ? p
            ? (p.p(u, d), d & 16 && _(p, 1))
            : ((p = Ql(u)), p.c(), _(p, 1), p.m(e, null))
          : p &&
            (U(),
            v(p, 1, 1, () => {
              p = null;
            }),
            W()),
        (!r || d & 8) && te(e, "has-tooltip", u[3]);
    },
    i(u) {
      r || (_(p), (r = !0));
    },
    o(u) {
      v(p), (r = !1);
    },
    d(u) {
      u && C(e), o[11](null), p && p.d(), (c = !1), he(a);
    },
  };
}
function Ql(o) {
  let e,
    t,
    n,
    i = M("ntp_workspace_list__save") + "",
    l,
    r;
  return (
    (t = new Ke({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = k("button")),
          B(t.$$.fragment),
          (n = x()),
          (l = V(i)),
          s(e, "class", "save-title-button svelte-mn0b23"),
          s(e, "type", "submit");
      },
      m(c, a) {
        y(c, e, a), P(t, e, null), f(e, n), f(e, l), (r = !0);
      },
      p: j,
      i(c) {
        r || (_(t.$$.fragment, c), (r = !0));
      },
      o(c) {
        v(t.$$.fragment, c), (r = !1);
      },
      d(c) {
        c && C(e), z(t);
      },
    }
  );
}
function zu(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a = o[0] && Xl(o);
  return {
    c() {
      (e = k("div")),
        (t = k("h2")),
        (n = V(o[1])),
        (i = x()),
        a && a.c(),
        s(t, "role", "button"),
        s(t, "class", "svelte-mn0b23"),
        s(e, "class", "title svelte-mn0b23"),
        te(e, "is-in-edit-mode", o[0]);
    },
    m(p, u) {
      y(p, e, u),
        f(e, t),
        f(t, n),
        f(e, i),
        a && a.m(e, null),
        (l = !0),
        r || ((c = Q(t, "click", o[10])), (r = !0));
    },
    p(p, [u]) {
      (!l || u & 2) && Y(n, p[1]),
        p[0]
          ? a
            ? (a.p(p, u), u & 1 && _(a, 1))
            : ((a = Xl(p)), a.c(), _(a, 1), a.m(e, null))
          : a &&
            (U(),
            v(a, 1, 1, () => {
              a = null;
            }),
            W()),
        (!l || u & 1) && te(e, "is-in-edit-mode", p[0]);
    },
    i(p) {
      l || (_(a), (l = !0));
    },
    o(p) {
      v(a), (l = !1);
    },
    d(p) {
      p && C(e), a && a.d(), (r = !1), c();
    },
  };
}
function Mu(o, e, t) {
  let { name: n } = e,
    { editMode: i = !1 } = e,
    l = ve(),
    r,
    c = !1,
    a = !1,
    p = !1,
    u = () => {
      (a = !1), r.focus();
    },
    d = (I) => {
      Ae(
        I.target instanceof HTMLInputElement,
        "Target must be HTML input to save name"
      );
      let N = I.target.value;
      if (N.length === 0) {
        t(3, (c = !0)), t(4, (p = !1)), u();
        return;
      }
      t(0, (i = !1)),
        t(3, (c = !1)),
        t(4, (p = !1)),
        t(1, (n = N)),
        l("update", { name: N });
    },
    m = (I) => {
      Ae(
        I.target instanceof HTMLInputElement,
        "Target must be HTML input to update name"
      );
      let N = I.target.value;
      if (N.length > 0) {
        t(3, (c = !1)), t(4, (p = !0));
        return;
      }
      t(4, (p = !1)), l("updateName", N);
    },
    g = () => {
      if (r.value.length === 0) {
        t(3, (c = !0)), u();
        return;
      }
      t(0, (i = !1)),
        t(4, (p = !1)),
        t(1, (n = r.value)),
        l("update", { name: r.value });
    },
    h = (I) => {
      if (I?.relatedTarget) {
        g();
        return;
      }
      t(0, (i = !1)), l("update", { name: n });
    },
    b = (I) => {
      I.isComposing ||
        (I.code !== "Enter" && I.code !== "Escape") ||
        ((a = !0), I.code === "Enter" ? d(I) : I.code === "Escape" && h());
    },
    w = (I) => {
      a || h(I);
    },
    S = () => l("toggleMinimized");
  function L(I) {
    fe[I ? "unshift" : "push"](() => {
      (r = I), t(2, r);
    });
  }
  return (
    (o.$$set = (I) => {
      "name" in I && t(1, (n = I.name)),
        "editMode" in I && t(0, (i = I.editMode));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 5) {
        e: r && i && (t(4, (p = !0)), t(3, (c = !1)), u());
      }
    }),
    [i, n, r, c, p, l, m, g, b, w, S, L]
  );
}
var En = class extends E {
    constructor(e) {
      super(), q(this, e, Mu, zu, T, { name: 1, editMode: 0 }, Pu);
    }
  },
  er = En;
function Lu(o) {
  R(
    o,
    "svelte-1le7jrw",
    "header.svelte-1le7jrw{position:relative;display:flex;align-items:center;margin:0;margin-bottom:32px;color:var(--launchpad-text-primary-color)}header.minimized.svelte-1le7jrw{margin-bottom:0}"
  );
}
function Au(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h;
  (t = new to({ props: { state: o[0] } })), t.$on("toggleAvatarPicker", o[8]);
  function b(H) {
    o[14](H);
  }
  let w = {};
  o[5] !== void 0 && (w.isOpen = o[5]),
    (i = new no({ props: w })),
    fe.push(() => Ee(i, "isOpen", b)),
    i.$on("changeBackground", o[10]),
    i.$on("changeBackgroundEmoji", o[11]),
    i.$on("findEmoji", o[15]),
    i.$on("toggleAvatarPicker", o[8]);
  function S(H) {
    o[16](H);
  }
  let L = { name: o[1].name };
  o[6] !== void 0 && (L.editMode = o[6]),
    (c = new er({ props: L })),
    fe.push(() => Ee(c, "editMode", S)),
    c.$on("toggleMinimized", o[9]),
    c.$on("update", o[12]),
    c.$on("updateName", o[17]);
  function I(H) {
    o[18](H);
  }
  let N = { ableRemove: o[1].isRemovable, minimized: o[1].isMinimized };
  return (
    o[6] !== void 0 && (N.editMode = o[6]),
    (u = new Wl({ props: N })),
    fe.push(() => Ee(u, "editMode", I)),
    u.$on("remove", o[13]),
    u.$on("setActive", o[19]),
    u.$on("toggleMinimized", o[9]),
    u.$on("toggleAvatarPicker", o[8]),
    (g = new Jl({
      props: {
        minimized: o[1].isMinimized,
        teamWorkspace: o[1].isTeamWorkspace,
        userCanInvite: o[2],
        teamAdminLinks: o[3],
        b2bEnabled: o[4],
      },
    })),
    {
      c() {
        (e = k("header")),
          B(t.$$.fragment),
          (n = x()),
          B(i.$$.fragment),
          (r = x()),
          B(c.$$.fragment),
          (p = x()),
          B(u.$$.fragment),
          (m = x()),
          B(g.$$.fragment),
          s(e, "data-testid", "workspace-header"),
          s(e, "class", "svelte-1le7jrw"),
          te(e, "minimized", o[1].isMinimized);
      },
      m(H, O) {
        y(H, e, O),
          P(t, e, null),
          f(e, n),
          P(i, e, null),
          f(e, r),
          P(c, e, null),
          f(e, p),
          P(u, e, null),
          f(e, m),
          P(g, e, null),
          (h = !0);
      },
      p(H, [O]) {
        let F = {};
        O & 1 && (F.state = H[0]), t.$set(F);
        let D = {};
        !l && O & 32 && ((l = !0), (D.isOpen = H[5]), qe(() => (l = !1))),
          i.$set(D);
        let J = {};
        O & 2 && (J.name = H[1].name),
          !a && O & 64 && ((a = !0), (J.editMode = H[6]), qe(() => (a = !1))),
          c.$set(J);
        let Z = {};
        O & 2 && (Z.ableRemove = H[1].isRemovable),
          O & 2 && (Z.minimized = H[1].isMinimized),
          !d && O & 64 && ((d = !0), (Z.editMode = H[6]), qe(() => (d = !1))),
          u.$set(Z);
        let ee = {};
        O & 2 && (ee.minimized = H[1].isMinimized),
          O & 2 && (ee.teamWorkspace = H[1].isTeamWorkspace),
          O & 4 && (ee.userCanInvite = H[2]),
          O & 8 && (ee.teamAdminLinks = H[3]),
          O & 16 && (ee.b2bEnabled = H[4]),
          g.$set(ee),
          (!h || O & 2) && te(e, "minimized", H[1].isMinimized);
      },
      i(H) {
        h ||
          (_(t.$$.fragment, H),
          _(i.$$.fragment, H),
          _(c.$$.fragment, H),
          _(u.$$.fragment, H),
          _(g.$$.fragment, H),
          (h = !0));
      },
      o(H) {
        v(t.$$.fragment, H),
          v(i.$$.fragment, H),
          v(c.$$.fragment, H),
          v(u.$$.fragment, H),
          v(g.$$.fragment, H),
          (h = !1);
      },
      d(H) {
        H && C(e), z(t), z(i), z(c), z(u), z(g);
      },
    }
  );
}
function $u(o, e, t) {
  let n,
    i,
    l,
    { workspace: r } = e,
    { canInvite: c } = e,
    { avatar: a = { type: "Colored", text: "S", ...wt } } = e,
    { teamAdminLinks: p } = e,
    { b2bEnabled: u } = e,
    d = qi(r.name);
  re(o, d, (D) => t(20, (l = D))),
    d.subscribe((D) => {
      a.type === "Colored" && t(0, (a = { ...a, text: kt(D) }));
    });
  let m = () => {
      t(5, (n = !n));
    },
    g = () => {
      let D = !r.isMinimized;
      $.actions.sendAnalyticsEvent("launchpad.workspace-minimized", {
        "new-value": D,
      }),
        $.actions.setWorkspaceMinimized(D);
    },
    h = ({ detail: { value: D } }) => {
      $.actions.sendAnalyticsEvent("launchpad.workspace-icon-selected", void 0),
        $.actions.changeWorkspaceIconColor(D),
        t(
          0,
          (a = {
            ...a,
            type: "Colored",
            text: kt(l),
            foregroundColor: D.letterColor,
            backgroundColor: D.bg,
          })
        ),
        m();
    },
    b = ({ detail: { value: D } }) => {
      $.actions.sendAnalyticsEvent("launchpad.workspace-icon-selected", void 0),
        $.actions.changeWorkspaceIconEmoji(D),
        t(
          0,
          (a = {
            ...a,
            type: "Emoji",
            backgroundColor: "yellow",
            foregroundColor: wt.foregroundColor,
            text: D.symbol,
          })
        ),
        m();
    },
    w = (D) => {
      $.actions.changeWorkspaceName(D.detail.name);
    },
    S = () => {
      $.actions.deleteWorkspace(r.id);
    };
  function L(D) {
    (n = D), t(5, n);
  }
  function I(D) {
    pe.call(this, o, D);
  }
  function N(D) {
    (i = D), t(6, i);
  }
  function H(D) {
    pe.call(this, o, D);
  }
  function O(D) {
    (i = D), t(6, i);
  }
  function F(D) {
    pe.call(this, o, D);
  }
  o.$$set = (D) => {
    "workspace" in D && t(1, (r = D.workspace)),
      "canInvite" in D && t(2, (c = D.canInvite)),
      "avatar" in D && t(0, (a = D.avatar)),
      "teamAdminLinks" in D && t(3, (p = D.teamAdminLinks)),
      "b2bEnabled" in D && t(4, (u = D.b2bEnabled));
  };
  e: t(5, (n = !1));
  e: t(6, (i = !1));
  return [a, r, c, p, u, n, i, d, m, g, h, b, w, S, L, I, N, H, O, F];
}
var jn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          $u,
          Au,
          T,
          {
            workspace: 1,
            canInvite: 2,
            avatar: 0,
            teamAdminLinks: 3,
            b2bEnabled: 4,
          },
          Lu
        );
    }
  },
  tr = jn;
A();
A();
A();
function Tu(o) {
  R(
    o,
    "svelte-138no2",
    ".action-button.svelte-138no2.svelte-138no2{justify-content:start;flex-direction:column;transition:filter var(--animation-time);will-change:transform, box-shadow, opacity, filter}.action-button-icon.svelte-138no2.svelte-138no2{display:flex;justify-content:center;align-items:center;background-color:var(--service-action-button-background);width:var(--app-size);height:var(--app-size);border-radius:18px;transition:transform var(--animation-time) cubic-bezier(0.22, 1, 0.36, 1);position:relative;color:var(--launchpad-text-primary-color)}.action-button.svelte-138no2:hover .action-button-icon.svelte-138no2{box-shadow:0 3px 20px rgb(0 0 0 / 0.08), 0 1px 4px rgb(0 0 0 / 0.08);transform:scale(1.083);background:var(--service-background-color-hover);opacity:0.9}.action-button-label.svelte-138no2.svelte-138no2{pointer-events:none;margin:5px 0 0;color:var(--service-title-color);font-size:11px;line-height:14px;font-weight:normal;overflow:hidden;max-width:100%;display:block;text-overflow:ellipsis;max-height:28px;text-align:center}"
  );
}
function qu(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p = o[4].default,
    u = ke(p, o, o[3], null);
  return {
    c() {
      (e = k("button")),
        (t = k("span")),
        u && u.c(),
        (n = x()),
        (i = k("span")),
        (l = V(o[1])),
        s(t, "class", "action-button-icon svelte-138no2"),
        s(i, "class", "action-button-label svelte-138no2"),
        s(e, "class", "action-button svelte-138no2"),
        s(e, "data-testid", o[2]),
        s(e, "aria-label", o[0]);
    },
    m(d, m) {
      y(d, e, m),
        f(e, t),
        u && u.m(t, null),
        f(e, n),
        f(e, i),
        f(i, l),
        (r = !0),
        c || ((a = Q(e, "click", o[5])), (c = !0));
    },
    p(d, [m]) {
      u &&
        u.p &&
        (!r || m & 8) &&
        ye(u, p, d, d[3], r ? we(p, d[3], m, null) : Ce(d[3]), null),
        (!r || m & 2) && Y(l, d[1]),
        (!r || m & 4) && s(e, "data-testid", d[2]),
        (!r || m & 1) && s(e, "aria-label", d[0]);
    },
    i(d) {
      r || (_(u, d), (r = !0));
    },
    o(d) {
      v(u, d), (r = !1);
    },
    d(d) {
      d && C(e), u && u.d(d), (c = !1), a();
    },
  };
}
function Eu(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { ariaLabel: l } = e,
    { label: r } = e,
    { dataTestId: c = "" } = e;
  function a(p) {
    pe.call(this, o, p);
  }
  return (
    (o.$$set = (p) => {
      "ariaLabel" in p && t(0, (l = p.ariaLabel)),
        "label" in p && t(1, (r = p.label)),
        "dataTestId" in p && t(2, (c = p.dataTestId)),
        "$$scope" in p && t(3, (i = p.$$scope));
    }),
    [l, r, c, i, n, a]
  );
}
var Nn = class extends E {
    constructor(e) {
      super(),
        q(this, e, Eu, qu, T, { ariaLabel: 0, label: 1, dataTestId: 2 }, Tu);
    }
  },
  et = Nn;
A();
A();
function ju(o) {
  let e, t, n, i, l, r, c;
  return {
    c() {
      (e = G("svg")),
        (t = G("g")),
        (n = G("path")),
        (i = G("defs")),
        (l = G("clipPath")),
        (r = G("rect")),
        s(n, "fill-rule", "evenodd"),
        s(n, "clip-rule", "evenodd"),
        s(
          n,
          "d",
          "M4.875 1.5C4.66789 1.5 4.5 1.66789 4.5 1.875L4.5 10.125C4.5 10.3321 4.66789 10.5 4.875 10.5C5.08211 10.5 5.25 10.3321 5.25 10.125L5.25 1.875C5.25 1.66789 5.08211 1.5 4.875 1.5ZM2.625 1.5C2.41789 1.5 2.25 1.66789 2.25 1.875L2.25 10.125C2.25 10.3321 2.41789 10.5 2.625 10.5C2.83211 10.5 3 10.3321 3 10.125L3 1.875C3 1.66789 2.83211 1.5 2.625 1.5Z"
        ),
        s(n, "fill", "currentColor"),
        s(t, "opacity", "0.5"),
        s(t, "clip-path", "url(#clip0_15523_13203)"),
        s(r, "width", "12"),
        s(r, "height", "7.5"),
        s(r, "fill", "white"),
        s(r, "transform", "translate(7.5) rotate(90)"),
        s(l, "id", "clip0_15523_13203"),
        s(e, "class", (c = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 8 12"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(a, p) {
      y(a, e, p), f(e, t), f(t, n), f(e, i), f(i, l), f(l, r);
    },
    p(a, [p]) {
      p & 4 && c !== (c = `icon ${a[2]}`) && s(e, "class", c),
        p & 1 && s(e, "width", a[0]),
        p & 2 && s(e, "height", a[1]);
    },
    i: j,
    o: j,
    d(a) {
      a && C(e);
    },
  };
}
function Nu(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Hn = class extends E {
    constructor(e) {
      super(), q(this, e, Nu, ju, T, { width: 0, height: 1, className: 2 });
    }
  },
  nr = Hn;
A();
function Hu(o) {
  R(
    o,
    "svelte-ex56pm",
    ".app-popup.svelte-ex56pm{display:flex;flex-direction:column;position:relative;overscroll-behavior:none;max-height:100vh;pointer-events:none}@media(min-height: 560px){.app-popup.svelte-ex56pm{height:560px}}.inner.svelte-ex56pm{pointer-events:all;display:flex;flex-direction:column;position:relative;flex:1 1 auto;max-height:min(560px, 100vh)}.app-popup.svelte-ex56pm:where([data-popper-placement$='end']){justify-content:flex-end}.arrow.svelte-ex56pm,.arrow.svelte-ex56pm::before{position:absolute;width:8px;height:8px;background:var(--popup-bg-color)}.arrow.svelte-ex56pm{visibility:hidden;z-index:0;transition:0.2s opacity ease-in-out}.arrow.svelte-ex56pm::before{visibility:visible;content:'';transform:rotate(45deg)}.app-popup.svelte-ex56pm>.arrow[data-hide]{visibility:hidden;opacity:0}.app-popup[data-popper-placement^='top'] > .arrow{bottom:-4px}.app-popup[data-popper-placement^='bottom'] > .arrow{top:-4px}.app-popup[data-popper-placement^='right'] > .arrow{left:-4px}.app-popup[data-popper-placement^='left'] > .arrow{right:-4px}.app-popup[data-popper-placement^='bottom'] > .arrow::before{clip-path:polygon(0 0, 100% 0, 0 100%)}.app-popup[data-popper-placement^='top'] > .arrow::before{clip-path:polygon(100% 0, 100% 100%, 0 100%)}.app-popup[data-popper-placement^='left'] > .arrow::before{clip-path:polygon(0 0, 100% 100%, 100% 0)}.app-popup[data-popper-placement^='right'] > .arrow::before{clip-path:polygon(0 0, 100% 100%, 0 100%)}"
  );
}
function ir(o) {
  let e, t;
  return (
    (e = new Ji({
      props: { $$slots: { default: [Vu] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2097156 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Fu(o) {
  let e, t, n;
  return (
    (t = new ao({ props: { gateway: $, source: "launchpad" } })),
    t.$on("close", o[1]),
    {
      c() {
        (e = k("div")), B(t.$$.fragment), s(e, "class", "inner svelte-ex56pm");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p: j,
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function Vu(o) {
  let e, t, n, i, l, r, c, a, p;
  return (
    (t = new Ie({
      props: { $$slots: { default: [Fu] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          (n = x()),
          (i = k("div")),
          s(i, "class", "arrow svelte-ex56pm"),
          s(i, "data-popper-arrow", ""),
          s(e, "class", "app-popup svelte-ex56pm"),
          s(e, "data-testid", "app-popup");
      },
      m(u, d) {
        y(u, e, d),
          P(t, e, null),
          f(e, n),
          f(e, i),
          o[18](e),
          (c = !0),
          a ||
            ((p = [
              be((l = o[0].call(null, e, o[7]))),
              be((r = o[8].call(null, e))),
            ]),
            (a = !0));
      },
      p(u, d) {
        let m = {};
        d & 2097152 && (m.$$scope = { dirty: d, ctx: u }), t.$set(m);
      },
      i(u) {
        c || (_(t.$$.fragment, u), (c = !0));
      },
      o(u) {
        v(t.$$.fragment, u), (c = !1);
      },
      d(u) {
        u && C(e), z(t), o[18](null), (a = !1), he(p);
      },
    }
  );
}
function Gu(o) {
  let e,
    t,
    n,
    i,
    l = o[3] && o[4] && ir(o);
  return {
    c() {
      l && l.c(), (e = ae());
    },
    m(r, c) {
      l && l.m(r, c),
        y(r, e, c),
        (t = !0),
        n || ((i = Q(window, "keydown", o[9])), (n = !0));
    },
    p(r, [c]) {
      r[3] && r[4]
        ? l
          ? (l.p(r, c), c & 24 && _(l, 1))
          : ((l = ir(r)), l.c(), _(l, 1), l.m(e.parentNode, e))
        : l &&
          (U(),
          v(l, 1, 1, () => {
            l = null;
          }),
          W());
    },
    i(r) {
      t || (_(l), (t = !0));
    },
    o(r) {
      v(l), (t = !1);
    },
    d(r) {
      l && l.d(r), r && C(e), (n = !1), i();
    },
  };
}
function Du(o, e, t) {
  let n,
    i,
    l,
    r,
    { appId: c } = e,
    { appItemElement: a } = e,
    { popperContent: p } = e,
    { getPopper: u } = e,
    d = $.stores.applicationPopup;
  re(o, d, (D) => t(16, (l = D)));
  let m = $.stores.applicationPopupInfo;
  re(o, m, (D) => t(17, (r = D)));
  let g = !1,
    h = (D) => Math.abs(D) >= 24,
    b = {
      placement: "right-start",
      modifiers: [
        { name: "offset", options: { offset: [0, 10] } },
        { name: "arrow", options: { padding: 16 } },
        {
          name: "applyArrowHide",
          enabled: !0,
          phase: "write",
          fn: ({ state: D }) => {
            let { arrow: J } = D.elements;
            J &&
              (h(D.modifiersData.arrow?.centerOffset ?? 0)
                ? J.setAttribute("data-hide", "")
                : J.removeAttribute("data-hide"));
          },
        },
      ],
    },
    w,
    S = (D) => Li({ trigger: a, popup: D, callback: H }),
    L = new ResizeObserver(() => {
      u()?.update().catch(xe);
    }),
    I = () => n,
    N = () => {
      t(15, (g = !0));
    },
    H = () => {
      t(15, (g = !1)), $.actions.hideApplicationPopup();
    },
    O = (D) => {
      D.code === "Escape" && H();
    };
  ot(() => () => L.disconnect());
  function F(D) {
    fe[D ? "unshift" : "push"](() => {
      (w = D), t(2, w);
    });
  }
  return (
    (o.$$set = (D) => {
      "appId" in D && t(10, (c = D.appId)),
        "appItemElement" in D && t(11, (a = D.appItemElement)),
        "popperContent" in D && t(0, (p = D.popperContent)),
        "getPopper" in D && t(12, (u = D.getPopper));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 164864) {
        e: t(
          3,
          (n = Boolean(
            g &&
              r?.id === "application" &&
              r.payload.appId === c &&
              r.position?.silent
          ))
        );
      }
      if (o.$$.dirty & 66560) {
        e: t(4, (i = l?.app.id === c));
      }
      if (o.$$.dirty & 4) {
        e: w && L.observe(w);
      }
    }),
    [p, H, w, n, i, d, m, b, S, O, c, a, u, I, N, g, l, r, F]
  );
}
var Fn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Du,
          Gu,
          T,
          {
            appId: 10,
            appItemElement: 11,
            popperContent: 0,
            getPopper: 12,
            getIsVisible: 13,
            show: 14,
            hide: 1,
          },
          Hu
        );
    }
    get getIsVisible() {
      return this.$$.ctx[13];
    }
    get show() {
      return this.$$.ctx[14];
    }
    get hide() {
      return this.$$.ctx[1];
    }
  },
  or = Fn;
function Ru(o) {
  R(
    o,
    "svelte-3278tr",
    `.app-item.svelte-3278tr.svelte-3278tr{box-sizing:content-box;position:relative;cursor:pointer;transition:filter var(--animation-time);will-change:transform, box-shadow, opacity, filter}.sortable-drag .name.svelte-3278tr.svelte-3278tr,.sortable-drag .badge.svelte-3278tr.svelte-3278tr,.sortable-drag .app-settings-button.svelte-3278tr.svelte-3278tr,.sortable-drag .drag-handle.svelte-3278tr.svelte-3278tr{display:none}.app-item.svelte-3278tr .app-settings-button.svelte-3278tr{--size:16px;position:absolute;right:-1px;width:var(--size);height:var(--size);border-radius:50%;opacity:0;transform:rotate(90deg);color:var(--service-settings-button-icon-color);border:none}.app-item.svelte-3278tr .app-settings-button.svelte-3278tr:hover{background:var(--service-settings-button-hover-color)}.app-item.svelte-3278tr .icon-wrapper.svelte-3278tr{--app-icon-fill:currentColor;display:flex;justify-content:center;align-items:center;background-color:var(--service-background-color);width:var(--app-size);height:var(--app-size);border-radius:18px;transition:transform var(--animation-time) cubic-bezier(0.22, 1, 0.36, 1);position:relative}.app-item.svelte-3278tr:active .icon-wrapper.svelte-3278tr{transform:scale(1);box-shadow:0 1px 1px rgb(0 0 0 / 0.08);background-color:var(--service-background-color-hover)}.app-item.svelte-3278tr:hover:not(.new-disabled) .icon-wrapper.svelte-3278tr{box-shadow:0 3px 20px rgb(0 0 0 / 0.08), 0 1px 4px rgb(0 0 0 / 0.08);transform:scale(1.083);background:var(--service-background-color-hover);opacity:0.9}.app-item.svelte-3278tr:hover .app-settings-button.svelte-3278tr{opacity:1}.app-item.svelte-3278tr .badge.svelte-3278tr{position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;min-width:20px;min-height:20px;padding:2px;font-size:12px;line-height:1;color:#fff;box-sizing:border-box;background-color:rgb(206 60 62 / 0.9);box-shadow:0 0 15px rgb(0 0 0 / 0.1);border-radius:10px;z-index:2}.small-avatar.svelte-3278tr.svelte-3278tr{--avatar-size:20px;--offset:calc(
      (var(--app-size) / 2) + (var(--app-icon-size, 32px) / 2) - (var(--avatar-size) * 3 / 4)
    );position:absolute;top:var(--offset);left:var(--offset)}.app-item.svelte-3278tr .drag-handle.svelte-3278tr{display:flex;position:absolute;left:0;opacity:0;cursor:grab;color:var(--service-drag-handle-color)}.app-item.svelte-3278tr:hover .drag-handle.svelte-3278tr{opacity:1}.app-item.svelte-3278tr .app-settings-button.svelte-3278tr:active{background-color:var(--theme-8)}.app-item.svelte-3278tr .name.svelte-3278tr{pointer-events:none;margin:5px 0 0;color:var(--service-title-color);font-size:10px;line-height:13px;font-weight:normal;overflow:hidden;max-width:100%;display:block;text-overflow:ellipsis;max-height:28px;text-align:center}.disabled.svelte-3278tr.svelte-3278tr{filter:grayscale()}.sortable-drag{width:var(--app-size);height:var(--app-size)}`
  );
}
function lr(o) {
  let e, t;
  return {
    c() {
      (e = k("span")), (t = V(o[6])), s(e, "class", "badge svelte-3278tr");
    },
    m(n, i) {
      y(n, e, i), f(e, t);
    },
    p(n, i) {
      i & 64 && Y(t, n[6]);
    },
    d(n) {
      n && C(e);
    },
  };
}
function rr(o) {
  let e, t, n, i;
  return (
    (t = new Ki({
      props: {
        src: o[1].avatar,
        name: o[1].name,
        customBgColor: yt(o[1].name),
        colored: !0,
      },
    })),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          B(t.$$.fragment),
          Se(n, "display", "contents"),
          Se(n, "--avatar-size", "20px"),
          s(e, "class", "small-avatar svelte-3278tr");
      },
      m(l, r) {
        y(l, e, r), f(e, n), P(t, n, null), (i = !0);
      },
      p(l, r) {
        let c = {};
        r & 2 && (c.src = l[1].avatar),
          r & 2 && (c.name = l[1].name),
          r & 2 && (c.customBgColor = yt(l[1].name)),
          t.$set(c);
      },
      i(l) {
        i || (_(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        v(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && C(e), z(t);
      },
    }
  );
}
function Uu(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b,
    w,
    S = o[0].name + "",
    L,
    I,
    N,
    H,
    O,
    F,
    D,
    J = o[3].areNotificationsEnabled && lr(o);
  l = new zi({
    props: {
      favIconUrl: o[0].iconUrl,
      appUrl: o[0].customUrl || o[0].recipeMetaData.welcomeURL,
      alt: o[0].name,
    },
  });
  let Z = o[1] && rr(o);
  (p = new lt({ props: { width: "10", height: "2" } })),
    (g = new nr({ props: { width: "10", height: "15" } }));
  let ee = {
    appId: o[0].id,
    appItemElement: o[5],
    popperContent: o[8],
    getPopper: o[9],
  };
  return (
    (H = new or({ props: ee })),
    o[19](H),
    {
      c() {
        (e = k("li")),
          (t = k("div")),
          (n = k("div")),
          J && J.c(),
          (i = x()),
          B(l.$$.fragment),
          (r = x()),
          Z && Z.c(),
          (c = x()),
          (a = k("button")),
          B(p.$$.fragment),
          (d = x()),
          (m = k("div")),
          B(g.$$.fragment),
          (b = x()),
          (w = k("span")),
          (L = V(S)),
          (N = x()),
          B(H.$$.fragment),
          s(a, "class", "app-settings-button svelte-3278tr"),
          s(a, "aria-label", (u = M("ntp_workspace_list__show_actions"))),
          s(m, "class", "drag-handle svelte-3278tr"),
          s(n, "class", "icon-wrapper svelte-3278tr"),
          s(w, "class", "name svelte-3278tr"),
          s(e, "role", "button"),
          s(e, "class", "app-item svelte-3278tr"),
          s(e, "data-testid", (I = "launchpad-workspace-app-item-" + o[0].id)),
          s(e, "draggable", "true"),
          te(e, "disabled", o[2]),
          te(e, "new-disabled", o[2]);
      },
      m(X, ie) {
        y(X, e, ie),
          f(e, t),
          f(t, n),
          J && J.m(n, null),
          f(n, i),
          P(l, n, null),
          f(n, r),
          Z && Z.m(n, null),
          f(n, c),
          f(n, a),
          P(p, a, null),
          f(n, d),
          f(n, m),
          P(g, m, null),
          f(e, b),
          f(e, w),
          f(w, L),
          o[18](e),
          y(X, N, ie),
          P(H, X, ie),
          (O = !0),
          F ||
            ((D = [
              Q(a, "click", xt(o[11])),
              Q(a, "contextmenu", xt(He(o[11]))),
              be((h = o[7].call(null, t))),
              Q(e, "click", o[10]),
              Q(e, "contextmenu", He(o[11])),
              Q(e, "dragstart", o[12]),
              Q(e, "dragover", He(o[16])),
              Q(e, "dragenter", He(o[17])),
            ]),
            (F = !0));
      },
      p(X, [ie]) {
        X[3].areNotificationsEnabled
          ? J
            ? J.p(X, ie)
            : ((J = lr(X)), J.c(), J.m(n, i))
          : J && (J.d(1), (J = null));
        let oe = {};
        ie & 1 && (oe.favIconUrl = X[0].iconUrl),
          ie & 1 &&
            (oe.appUrl = X[0].customUrl || X[0].recipeMetaData.welcomeURL),
          ie & 1 && (oe.alt = X[0].name),
          l.$set(oe),
          X[1]
            ? Z
              ? (Z.p(X, ie), ie & 2 && _(Z, 1))
              : ((Z = rr(X)), Z.c(), _(Z, 1), Z.m(n, c))
            : Z &&
              (U(),
              v(Z, 1, 1, () => {
                Z = null;
              }),
              W()),
          (!O || ie & 1) && S !== (S = X[0].name + "") && Y(L, S),
          (!O ||
            (ie & 1 &&
              I !== (I = "launchpad-workspace-app-item-" + X[0].id))) &&
            s(e, "data-testid", I),
          (!O || ie & 4) && te(e, "disabled", X[2]),
          (!O || ie & 4) && te(e, "new-disabled", X[2]);
        let le = {};
        ie & 1 && (le.appId = X[0].id),
          ie & 32 && (le.appItemElement = X[5]),
          H.$set(le);
      },
      i(X) {
        O ||
          (_(l.$$.fragment, X),
          _(Z),
          _(p.$$.fragment, X),
          _(g.$$.fragment, X),
          _(H.$$.fragment, X),
          (O = !0));
      },
      o(X) {
        v(l.$$.fragment, X),
          v(Z),
          v(p.$$.fragment, X),
          v(g.$$.fragment, X),
          v(H.$$.fragment, X),
          (O = !1);
      },
      d(X) {
        X && C(e),
          J && J.d(),
          z(l),
          Z && Z.d(),
          z(p),
          z(g),
          o[18](null),
          X && C(N),
          o[19](null),
          z(H, X),
          (F = !1),
          he(D);
      },
    }
  );
}
function Wu(o, e, t) {
  let n,
    i,
    l,
    { app: r } = e,
    { account: c } = e,
    { index: a } = e,
    { globalMute: p } = e,
    { disabled: u = !1 } = e,
    [d, m, g] = Re(),
    h,
    b,
    w = (F) => {
      let D = F.ctrlKey || F.metaKey;
      $.actions.sendAnalyticsEvent("launchpad.app-icon-clicked", {
        "app.should-open-as-tab": D,
      }),
        D
          ? $.actions.activateAppAsTabById(
              r.id,
              a,
              "launchpad.app-icon-clicked"
            )
          : $.actions.activateAppById(r.id, a, "launchpad.app-icon-clicked"),
        $.actions.explore("activated_app_on_launchpad");
    },
    S = () => {
      if (h.getIsVisible()) {
        h.hide();
        return;
      }
      $.actions.sendAnalyticsEvent("launchpad.app-icon-right-clicked", void 0),
        h.show(),
        $.actions.showApplicationPopupSilently(r.id);
    },
    L = (F) => {
      F?.dataTransfer?.setData("applicationData", JSON.stringify(r));
    };
  function I(F) {
    pe.call(this, o, F);
  }
  function N(F) {
    pe.call(this, o, F);
  }
  function H(F) {
    fe[F ? "unshift" : "push"](() => {
      (b = F), t(5, b);
    });
  }
  function O(F) {
    fe[F ? "unshift" : "push"](() => {
      (h = F), t(4, h);
    });
  }
  return (
    (o.$$set = (F) => {
      "app" in F && t(0, (r = F.app)),
        "account" in F && t(1, (c = F.account)),
        "index" in F && t(13, (a = F.index)),
        "globalMute" in F && t(14, (p = F.globalMute)),
        "disabled" in F && t(2, (u = F.disabled));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16385) {
        e: t(3, (n = vi(r, p ?? !1)));
      }
      if (o.$$.dirty & 8) {
        e: t(15, (i = n.unreadMessages));
      }
      if (o.$$.dirty & 32768) {
        e: t(6, (l = Number(i) > 99 ? "99+" : i ?? ""));
      }
    }),
    [r, c, u, n, h, b, l, d, m, g, w, S, L, a, p, i, I, N, H, O]
  );
}
var Vn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          Wu,
          Uu,
          T,
          { app: 0, account: 1, index: 13, globalMute: 14, disabled: 2 },
          Ru
        );
    }
  },
  Gn = Vn;
A();
var Ou = (o) => {
    let { oldIndex: e = 0, newIndex: t = 0, from: n, item: i } = o,
      l = n.querySelectorAll("#launchpad-app-items-sortable-container > li"),
      r;
    e > t ? (r = l[e + 1]) : (r = l[e]), r && n.insertBefore(i, r);
  },
  ar = (o) => (e) => {
    let t = !1,
      n,
      i = () => {
        t = !0;
      },
      l = so.create(e, {
        group: { name: "launchpad-workspace", pull: !0, put: !1 },
        touchStartThreshold: 5,
        direction: "horizontal",
        revertOnSpill: !0,
        onStart: (r) => {
          (t = !1),
            r.item.addEventListener("drop", i),
            (n = () => r.item.removeEventListener("drop", i));
        },
        onEnd: (r) => {
          if ((n?.(), !t)) {
            Ou(r);
            return;
          }
          o(r);
        },
      });
    return {
      destroy() {
        l.destroy(), n?.();
      },
    };
  };
function Ku(o) {
  R(
    o,
    "svelte-1ivsobg",
    ".d-contents.svelte-1ivsobg.svelte-1ivsobg{display:contents}.app-section.svelte-1ivsobg>h3.svelte-1ivsobg{font-size:12px;font-weight:normal;line-height:14px;text-transform:uppercase;color:var(--launchpad-header-secondary-text);padding:0;margin-bottom:16px}.apps.svelte-1ivsobg.svelte-1ivsobg{--app-size:65px;--app-icon-size:37px;--column-gap:0;--row-gap:20px;--columns:8;list-style-type:none;display:grid;grid-template-columns:repeat(var(--columns), var(--app-size));gap:var(--row-gap) var(--column-gap);justify-content:space-between;margin:0;padding:0}.apps.collapsed.svelte-1ivsobg li{display:none}.apps.collapsed.svelte-1ivsobg .action-button-wrapper{border:var(--service-hide-button-border);background-color:var(--service-hide-button-background)}.apps.collapsed.svelte-1ivsobg li:nth-child(-n + 4){display:initial}.app-section.svelte-1ivsobg.svelte-1ivsobg{margin-bottom:40px}.pro-badge-wrapper.svelte-1ivsobg.svelte-1ivsobg{position:absolute;top:-7px;right:-3px}.disabled-app-tooltip.svelte-1ivsobg.svelte-1ivsobg{width:175px;padding:5px}@media(min-width: 826px){.apps.svelte-1ivsobg.svelte-1ivsobg{--columns:6;--row-gap:24px}.apps.collapsed.svelte-1ivsobg li:nth-child(-n + 5){display:initial}}@media(min-width: 946px){.apps.svelte-1ivsobg.svelte-1ivsobg{--columns:8}.apps.collapsed.svelte-1ivsobg li:nth-child(-n + 7){display:initial}}.link.svelte-1ivsobg.svelte-1ivsobg{text-decoration:none}.add-app-button.svelte-1ivsobg.svelte-1ivsobg{display:flex;justify-content:center}"
  );
}
function sr(o, e, t) {
  let n = o.slice();
  (n[23] = e[t]), (n[26] = t);
  let i = n[26] >= n[4];
  return (n[24] = i), n;
}
function cr(o) {
  let e,
    t = o[0].title + "",
    n;
  return {
    c() {
      (e = k("h3")), (n = V(t)), s(e, "class", "svelte-1ivsobg");
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 1 && t !== (t = i[0].title + "") && Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function pr(o) {
  let e, t;
  return (
    (e = new Xi({
      props: { popperContent: o[9], currentStep: o[3], isModal: !1 },
    })),
    e.$on("confirm", o[15]),
    e.$on("cancel", o[16]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 8 && (l.currentStep = n[3]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Yu(o) {
  let e, t;
  return (
    (e = new Gn({
      props: {
        disabled: o[24],
        app: o[23].application,
        account: o[23].account,
        globalMute: o[1],
        index: o[26],
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 17 && (l.disabled = n[24]),
          i & 1 && (l.app = n[23].application),
          i & 1 && (l.account = n[23].account),
          i & 2 && (l.globalMute = n[1]),
          i & 1 && (l.index = n[26]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Ju(o) {
  let e, t;
  return (
    (e = new Ue({
      props: {
        tooltipPlacement: "top",
        $$slots: { tooltip: [Qu], default: [Xu] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 134217747 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Xu(o) {
  let e, t, n;
  return (
    (e = new Gn({
      props: {
        disabled: o[24],
        app: o[23].application,
        account: o[23].account,
        globalMute: o[1],
        index: o[26],
      },
    })),
    {
      c() {
        B(e.$$.fragment), (t = x());
      },
      m(i, l) {
        P(e, i, l), y(i, t, l), (n = !0);
      },
      p(i, l) {
        let r = {};
        l & 17 && (r.disabled = i[24]),
          l & 1 && (r.app = i[23].application),
          l & 1 && (r.account = i[23].account),
          l & 2 && (r.globalMute = i[1]),
          l & 1 && (r.index = i[26]),
          e.$set(r);
      },
      i(i) {
        n || (_(e.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(e.$$.fragment, i), (n = !1);
      },
      d(i) {
        z(e, i), i && C(t);
      },
    }
  );
}
function Qu(o) {
  let e,
    t = M("ntp_workspace_list__tooltip_disabled_app", [o[4].toString()]) + "",
    n,
    i;
  return {
    c() {
      (e = k("span")),
        (n = V(t)),
        (i = x()),
        s(e, "class", "disabled-app-tooltip svelte-1ivsobg");
    },
    m(l, r) {
      y(l, e, r), f(e, n), y(l, i, r);
    },
    p(l, r) {
      r & 16 &&
        t !==
          (t =
            M("ntp_workspace_list__tooltip_disabled_app", [l[4].toString()]) +
            "") &&
        Y(n, t);
    },
    d(l) {
      l && C(e), l && C(i);
    },
  };
}
function ur(o, e) {
  let t,
    n,
    i,
    l,
    r,
    c = [Ju, Yu],
    a = [];
  function p(u, d) {
    return u[24] ? 0 : 1;
  }
  return (
    (n = p(e, -1)),
    (i = a[n] = c[n](e)),
    {
      key: o,
      first: null,
      c() {
        (t = ae()), i.c(), (l = ae()), (this.first = t);
      },
      m(u, d) {
        y(u, t, d), a[n].m(u, d), y(u, l, d), (r = !0);
      },
      p(u, d) {
        e = u;
        let m = n;
        (n = p(e, d)),
          n === m
            ? a[n].p(e, d)
            : (U(),
              v(a[m], 1, 1, () => {
                a[m] = null;
              }),
              W(),
              (i = a[n]),
              i ? i.p(e, d) : ((i = a[n] = c[n](e)), i.c()),
              _(i, 1),
              i.m(l.parentNode, l));
      },
      i(u) {
        r || (_(i), (r = !0));
      },
      o(u) {
        v(i), (r = !1);
      },
      d(u) {
        u && C(t), a[n].d(u), u && C(l);
      },
    }
  );
}
function fr(o) {
  let e,
    t,
    n,
    i = !o[6] && o[0].isAddApplicationButtonVisible && dr(o),
    l = o[0].applications.length > 7 && gr(o);
  return {
    c() {
      i && i.c(), (e = x()), l && l.c(), (t = ae());
    },
    m(r, c) {
      i && i.m(r, c), y(r, e, c), l && l.m(r, c), y(r, t, c), (n = !0);
    },
    p(r, c) {
      !r[6] && r[0].isAddApplicationButtonVisible
        ? i
          ? (i.p(r, c), c & 65 && _(i, 1))
          : ((i = dr(r)), i.c(), _(i, 1), i.m(e.parentNode, e))
        : i &&
          (U(),
          v(i, 1, 1, () => {
            i = null;
          }),
          W()),
        r[0].applications.length > 7
          ? l
            ? (l.p(r, c), c & 1 && _(l, 1))
            : ((l = gr(r)), l.c(), _(l, 1), l.m(t.parentNode, t))
          : l &&
            (U(),
            v(l, 1, 1, () => {
              l = null;
            }),
            W());
    },
    i(r) {
      n || (_(i), _(l), (n = !0));
    },
    o(r) {
      v(i), v(l), (n = !1);
    },
    d(r) {
      i && i.d(r), r && C(e), l && l.d(r), r && C(t);
    },
  };
}
function dr(o) {
  let e,
    t,
    n,
    i,
    l = [tf, ef],
    r = [];
  function c(a, p) {
    return a[0].manageButtonLink ? 0 : 1;
  }
  return (
    (e = c(o, -1)),
    (t = r[e] = l[e](o)),
    {
      c() {
        t.c(), (n = ae());
      },
      m(a, p) {
        r[e].m(a, p), y(a, n, p), (i = !0);
      },
      p(a, p) {
        let u = e;
        (e = c(a, p)),
          e === u
            ? r[e].p(a, p)
            : (U(),
              v(r[u], 1, 1, () => {
                r[u] = null;
              }),
              W(),
              (t = r[e]),
              t ? t.p(a, p) : ((t = r[e] = l[e](a)), t.c()),
              _(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        i || (_(t), (i = !0));
      },
      o(a) {
        v(t), (i = !1);
      },
      d(a) {
        r[e].d(a), a && C(n);
      },
    }
  );
}
function ef(o) {
  let e, t, n, i, l, r;
  return (
    (t = new et({
      props: {
        ariaLabel: M("ntp_workspace_list__add_app_long"),
        dataTestId: "launchpad-workspace-add-new-button",
        label: M("ntp_workspace_list__add_new"),
        $$slots: { default: [nf] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", o[14]),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "add-app-button svelte-1ivsobg");
      },
      m(c, a) {
        y(c, e, a),
          P(t, e, null),
          (i = !0),
          l || ((r = be((n = o[8].call(null, e)))), (l = !0));
      },
      p(c, a) {
        let p = {};
        a & 134217760 && (p.$$scope = { dirty: a, ctx: c }), t.$set(p);
      },
      i(c) {
        i || (_(t.$$.fragment, c), (i = !0));
      },
      o(c) {
        v(t.$$.fragment, c), (i = !1);
      },
      d(c) {
        c && C(e), z(t), (l = !1), r();
      },
    }
  );
}
function tf(o) {
  let e, t, n, i, l, r, c;
  return (
    (t = new et({
      props: {
        ariaLabel: M("ntp_workspace_list__add_app_long"),
        dataTestId: "launchpad-workspace-add-new-button",
        label: M("ntp_workspace_list__add_new"),
        $$slots: { default: [of] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = k("a")),
          B(t.$$.fragment),
          s(e, "href", (n = o[0].manageButtonLink)),
          s(e, "target", "_blank"),
          s(e, "rel", "noreferrer"),
          s(e, "class", "link svelte-1ivsobg"),
          s(e, "data-node-type", "collection-link");
      },
      m(a, p) {
        y(a, e, p),
          P(t, e, null),
          (l = !0),
          r || ((c = be((i = o[8].call(null, e)))), (r = !0));
      },
      p(a, p) {
        let u = {};
        p & 134217760 && (u.$$scope = { dirty: p, ctx: a }),
          t.$set(u),
          (!l || (p & 1 && n !== (n = a[0].manageButtonLink))) &&
            s(e, "href", n);
      },
      i(a) {
        l || (_(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        v(t.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && C(e), z(t), (r = !1), c();
      },
    }
  );
}
function mr(o) {
  let e, t, n;
  return (
    (t = new It({})),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "pro-badge-wrapper svelte-1ivsobg");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function nf(o) {
  let e, t, n, i;
  e = new Bt({ props: { width: "14", height: "14" } });
  let l = o[5] && mr(o);
  return {
    c() {
      B(e.$$.fragment), (t = x()), l && l.c(), (n = ae());
    },
    m(r, c) {
      P(e, r, c), y(r, t, c), l && l.m(r, c), y(r, n, c), (i = !0);
    },
    p(r, c) {
      r[5]
        ? l
          ? c & 32 && _(l, 1)
          : ((l = mr(r)), l.c(), _(l, 1), l.m(n.parentNode, n))
        : l &&
          (U(),
          v(l, 1, 1, () => {
            l = null;
          }),
          W());
    },
    i(r) {
      i || (_(e.$$.fragment, r), _(l), (i = !0));
    },
    o(r) {
      v(e.$$.fragment, r), v(l), (i = !1);
    },
    d(r) {
      z(e, r), r && C(t), l && l.d(r), r && C(n);
    },
  };
}
function _r(o) {
  let e, t, n;
  return (
    (t = new It({})),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "pro-badge-wrapper svelte-1ivsobg");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function of(o) {
  let e, t, n, i;
  e = new Bt({ props: { width: "14", height: "14" } });
  let l = o[5] && _r(o);
  return {
    c() {
      B(e.$$.fragment), (t = x()), l && l.c(), (n = ae());
    },
    m(r, c) {
      P(e, r, c), y(r, t, c), l && l.m(r, c), y(r, n, c), (i = !0);
    },
    p(r, c) {
      r[5]
        ? l
          ? c & 32 && _(l, 1)
          : ((l = _r(r)), l.c(), _(l, 1), l.m(n.parentNode, n))
        : l &&
          (U(),
          v(l, 1, 1, () => {
            l = null;
          }),
          W());
    },
    i(r) {
      i || (_(e.$$.fragment, r), _(l), (i = !0));
    },
    o(r) {
      v(e.$$.fragment, r), v(l), (i = !1);
    },
    d(r) {
      z(e, r), r && C(t), l && l.d(r), r && C(n);
    },
  };
}
function gr(o) {
  let e,
    t,
    n,
    i,
    l = [rf, lf],
    r = [];
  function c(a, p) {
    return a[6] ? 0 : 1;
  }
  return (
    (e = c(o, -1)),
    (t = r[e] = l[e](o)),
    {
      c() {
        t.c(), (n = ae());
      },
      m(a, p) {
        r[e].m(a, p), y(a, n, p), (i = !0);
      },
      p(a, p) {
        let u = e;
        (e = c(a, p)),
          e === u
            ? r[e].p(a, p)
            : (U(),
              v(r[u], 1, 1, () => {
                r[u] = null;
              }),
              W(),
              (t = r[e]),
              t ? t.p(a, p) : ((t = r[e] = l[e](a)), t.c()),
              _(t, 1),
              t.m(n.parentNode, n));
      },
      i(a) {
        i || (_(t), (i = !0));
      },
      o(a) {
        v(t), (i = !1);
      },
      d(a) {
        r[e].d(a), a && C(n);
      },
    }
  );
}
function lf(o) {
  let e, t;
  return (
    (e = new et({
      props: {
        dataTestId: "launchpad-workspace-hide-apps-button",
        ariaLabel: M("ntp_workspace_list__hide_apps_long"),
        label: M("ntp_workspace_list__hide_apps_short"),
        $$slots: { default: [af] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[13]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 134217728 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function rf(o) {
  let e, t;
  return (
    (e = new et({
      props: {
        dataTestId: "launchpad-workspace-show-apps-button",
        ariaLabel: M("ntp_workspace_list__show_all_apps"),
        label: M("ntp_workspace_list__show_all"),
        $$slots: { default: [sf] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[13]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 134217728 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function af(o) {
  let e, t;
  return (
    (e = new Ze({ props: { width: "14", height: "14" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function sf(o) {
  let e, t;
  return (
    (e = new lt({ props: { width: "14", height: "14" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p: j,
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function cf(o) {
  let e,
    t,
    n,
    i,
    l,
    r = [],
    c = new Map(),
    a,
    p,
    u,
    d,
    m,
    g = o[0].isTitleVisible && cr(o),
    h = o[7] && pr(o),
    b = o[0].applications,
    w = (L) => L[23].application.id;
  for (let L = 0; L < b.length; L += 1) {
    let I = sr(o, b, L),
      N = w(I);
    c.set(N, (r[L] = ur(N, I)));
  }
  let S = !o[0].isLoading && fr(o);
  return {
    c() {
      (e = k("div")),
        g && g.c(),
        (t = x()),
        (n = k("ul")),
        h && h.c(),
        (i = x()),
        (l = k("div"));
      for (let L = 0; L < r.length; L += 1) r[L].c();
      (p = x()),
        S && S.c(),
        s(l, "id", "launchpad-app-items-sortable-container"),
        s(l, "class", "d-contents svelte-1ivsobg"),
        s(n, "class", "apps svelte-1ivsobg"),
        te(n, "collapsed", o[6]),
        s(e, "class", "app-section svelte-1ivsobg"),
        s(e, "data-testid", o[2]);
    },
    m(L, I) {
      y(L, e, I),
        g && g.m(e, null),
        f(e, t),
        f(e, n),
        h && h.m(n, null),
        f(n, i),
        f(n, l);
      for (let N = 0; N < r.length; N += 1) r[N] && r[N].m(l, null);
      f(n, p),
        S && S.m(n, null),
        (u = !0),
        d || ((m = be((a = o[12].call(null, l)))), (d = !0));
    },
    p(L, [I]) {
      L[0].isTitleVisible
        ? g
          ? g.p(L, I)
          : ((g = cr(L)), g.c(), g.m(e, t))
        : g && (g.d(1), (g = null)),
        L[7]
          ? h
            ? (h.p(L, I), I & 128 && _(h, 1))
            : ((h = pr(L)), h.c(), _(h, 1), h.m(n, i))
          : h &&
            (U(),
            v(h, 1, 1, () => {
              h = null;
            }),
            W()),
        I & 19 &&
          ((b = L[0].applications),
          U(),
          (r = Me(r, I, w, 1, L, b, c, l, ze, ur, null, sr)),
          W()),
        L[0].isLoading
          ? S &&
            (U(),
            v(S, 1, 1, () => {
              S = null;
            }),
            W())
          : S
          ? (S.p(L, I), I & 1 && _(S, 1))
          : ((S = fr(L)), S.c(), _(S, 1), S.m(n, null)),
        (!u || I & 64) && te(n, "collapsed", L[6]),
        (!u || I & 4) && s(e, "data-testid", L[2]);
    },
    i(L) {
      if (!u) {
        _(h);
        for (let I = 0; I < b.length; I += 1) _(r[I]);
        _(S), (u = !0);
      }
    },
    o(L) {
      v(h);
      for (let I = 0; I < r.length; I += 1) v(r[I]);
      v(S), (u = !1);
    },
    d(L) {
      L && C(e), g && g.d(), h && h.d();
      for (let I = 0; I < r.length; I += 1) r[I].d();
      S && S.d(), (d = !1), m();
    },
  };
}
function pf(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    [d, m, g] = Re(),
    { state: h } = e,
    { globalMute: b } = e,
    { dataTestId: w = "" } = e,
    { appsLimit: S = 1 / 0 } = e,
    L = $.stores.canBeShared;
  re(o, L, (Z) => t(20, (u = Z)));
  let I = $.stores.walkthrough;
  re(o, I, (Z) => t(19, (p = Z)));
  let N = ar((Z) => {
      let ee = h.applications[Z?.oldIndex || 0];
      if (!ee) return;
      let X = (Z?.newIndex ?? 0) - (Z?.oldIndex ?? 0);
      $.actions.sendAnalyticsEvent("launchpad.app-list-reordered", void 0),
        $.actions.changeAppPositionInOrderById(ee.application.id, X);
    }),
    H = () => {
      let Z = !r;
      $.actions.sendAnalyticsEvent("launchpad.app-list-minimized", {
        "new-value": Z,
      }),
        t(6, (r = Z));
    },
    O = () => {
      if (
        ($.actions.sendAnalyticsEvent(
          "launchpad.add-application-icon-clicked",
          void 0
        ),
        a)
      ) {
        $.actions.showLimitsReachedModal({
          source: "launchpad.add-application-icon-clicked",
        });
        return;
      }
      $.actions.showMarketplaceModal({
        source: "launchpad.add-application-icon-clicked",
      });
    },
    F = () => {
      i && $.actions.confirmWalkthrough(i);
    },
    D = () => {
      i && $.actions.sendAnalyticsEvent("walkthrough.skip-button-clicked", i),
        $.actions.switchWalkthrough(!1);
    },
    J = (Z) => {
      if (!g) return;
      let ee = g();
      ee &&
        setTimeout(() => {
          ee.update().catch(xe);
        }, 50);
    };
  (o.$$set = (Z) => {
    "state" in Z && t(0, (h = Z.state)),
      "globalMute" in Z && t(1, (b = Z.globalMute)),
      "dataTestId" in Z && t(2, (w = Z.dataTestId)),
      "appsLimit" in Z && t(17, (S = Z.appsLimit));
  }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1048576) {
        e: t(18, (n = u?.hasSharingAppsFeature));
      }
      if (o.$$.dirty & 524288) {
        e: t(3, (i = p?.currentStep ?? null));
      }
      if (o.$$.dirty & 8) {
        e: t(
          7,
          (l =
            i?.step === "customApps" &&
            (!i?.context || i?.context !== "appSaveModal"))
        );
      }
      if (o.$$.dirty & 131072) {
        e: t(4, (c = S === null ? 1 / 0 : S));
      }
      if (o.$$.dirty & 17) {
        e: t(5, (a = c <= h.applications.length));
      }
      if (o.$$.dirty & 262144) {
        e: J(n);
      }
    });
  e: t(6, (r = !1));
  return [h, b, w, i, c, a, r, l, d, m, L, I, N, H, O, F, D, S, n, p, u];
}
var Dn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          pf,
          cf,
          T,
          { state: 0, globalMute: 1, dataTestId: 2, appsLimit: 17 },
          Ku
        );
    }
  },
  gt = Dn;
A();
A();
function uf(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(
          t,
          "d",
          "M12.9849 5.47111V3.46857H11.9578V5.47111H9.94251V6.49166H11.9578V8.49405H12.9849V6.49166H15V5.47111H12.9849ZM5.50206 6.58884C6.05828 6.58884 6.60195 6.42496 7.06449 6.11792C7.52696 5.81087 7.88738 5.37444 8.10028 4.86383C8.3131 4.35321 8.36885 3.79134 8.26027 3.24927C8.15177 2.7072 7.88393 2.20928 7.49065 1.81846C7.09736 1.42766 6.59631 1.16151 6.05072 1.05369C5.50523 0.945871 4.93978 1.00121 4.42591 1.21273C3.91204 1.42424 3.47283 1.78242 3.16383 2.24197C2.85483 2.70152 2.6899 3.2418 2.68992 3.79449C2.69079 4.53533 2.98735 5.24558 3.51454 5.76943C4.04173 6.29328 4.7565 6.58796 5.50206 6.58884ZM5.50206 2.09352C5.84062 2.09351 6.17162 2.19325 6.45311 2.38015C6.73459 2.56705 6.95401 2.8327 7.08364 3.1435C7.2132 3.45431 7.24709 3.79633 7.18106 4.12629C7.11504 4.45625 6.95196 4.75934 6.71258 4.99723C6.47321 5.23512 6.16817 5.39713 5.83611 5.46277C5.50405 5.52841 5.15987 5.49472 4.84707 5.36599C4.53427 5.23725 4.26693 5.01923 4.07883 4.7395C3.89072 4.45978 3.79033 4.13091 3.79033 3.79449C3.79085 3.34354 3.97136 2.91121 4.29226 2.59233C4.61315 2.27345 5.04823 2.09406 5.50206 2.09352ZM5.50206 7.90949C4.5177 7.90782 3.54272 8.09939 2.63309 8.4732C1.72346 8.84702 0.897114 9.39571 0.201522 10.0878L0 10.288V14H11.0041V10.288L10.8026 10.0878C10.107 9.39571 9.28065 8.84702 8.37105 8.4732C7.46138 8.09939 6.48641 7.90782 5.50206 7.90949ZM9.9037 12.9066H1.10041V10.7488C1.11758 10.7334 1.16644 10.6871 1.18346 10.6721C2.36228 9.59865 3.90314 9.00323 5.50206 9.00323C7.10095 9.00323 8.64182 9.59865 9.82066 10.6721C9.83804 10.6871 9.88668 10.7334 9.9037 10.7488V12.9066Z"
        ),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 16 16"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function ff(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Rn = class extends E {
    constructor(e) {
      super(), q(this, e, ff, uf, T, { width: 0, height: 1, className: 2 });
    }
  },
  br = Rn;
function df(o) {
  R(
    o,
    "svelte-wr2uqt",
    ".header.svelte-wr2uqt{display:flex;align-items:center;justify-content:space-between;padding-left:4px;margin-bottom:15px}.right-buttons.svelte-wr2uqt{display:flex;align-items:center;column-gap:8px}.title.svelte-wr2uqt{font-size:12px;font-weight:normal;line-height:14px;text-transform:uppercase;color:var(--launchpad-header-secondary-text);padding:0}.invite-block.svelte-wr2uqt{margin-top:15px;background:rgb(0 0 0 / 0.08);border:1px solid rgb(0 0 0 / 0.08);padding:10px 23px;border-radius:8px;display:flex;align-items:center;justify-content:space-between;column-gap:18px}.workspace-action.svelte-wr2uqt{display:flex;align-items:center;font-size:12px;font-weight:400;background:var(--workspace-team-buttons-background);border-radius:30px;text-decoration:none;white-space:nowrap;color:inherit;padding:6px 10px;transition:var(--animation-time);cursor:pointer}.disabled.svelte-wr2uqt{opacity:0.45;cursor:default;pointer-events:none}.big-size.svelte-wr2uqt{padding:8px 10px}.workspace-action.svelte-wr2uqt:hover{background-color:var(--workspace-team-buttons-hover)}.workspace-action.svelte-wr2uqt:active{background-color:var(--workspace-team-buttons-active)}.workspace-action.svelte-wr2uqt .icon{margin-right:4px}.learn-more.svelte-wr2uqt{text-decoration:underline;color:inherit}"
  );
}
function vr(o) {
  let e,
    t,
    n,
    i,
    l = M("ntp_launchpad_team_invite__text") + "",
    r,
    c,
    a,
    p,
    u;
  return {
    c() {
      (e = k("div")),
        (t = k("button")),
        (t.textContent = `${M("ntp_launchpad_team_invite__button")}`),
        (n = x()),
        (i = k("div")),
        (r = V(l)),
        (c = x()),
        (a = k("a")),
        (a.textContent = `${M("ntp_launchpad_team_invite__learn_more")}`),
        s(t, "class", "workspace-action big-size svelte-wr2uqt"),
        s(a, "class", "learn-more svelte-wr2uqt"),
        s(a, "href", "https://www.meetsidekick.com/teams/"),
        s(a, "target", "_blank"),
        s(i, "class", "text"),
        s(e, "class", "invite-block svelte-wr2uqt");
    },
    m(d, m) {
      y(d, e, m),
        f(e, t),
        f(e, n),
        f(e, i),
        f(i, r),
        f(i, c),
        f(i, a),
        p || ((u = Q(t, "click", o[4])), (p = !0));
    },
    p: j,
    d(d) {
      d && C(e), (p = !1), u();
    },
  };
}
function mf(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p = M("ntp_launchpad_team_invite__manage_button") + "",
    u,
    d,
    m,
    g,
    h,
    b = M("ntp_launchpad_team_invite__invite_right_button") + "",
    w,
    S,
    L,
    I,
    N;
  (c = new ct({ props: { width: "18", height: "18" } })),
    (g = new br({ props: { width: "14", height: "14" } }));
  let H = o[0] && vr(o);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (n = k("div")),
        (n.textContent = `${M("ntp_launchpad_team_invite__header_title")}`),
        (i = x()),
        (l = k("div")),
        (r = k("a")),
        B(c.$$.fragment),
        (a = x()),
        (u = V(p)),
        (d = x()),
        (m = k("button")),
        B(g.$$.fragment),
        (h = x()),
        (w = V(b)),
        (S = x()),
        H && H.c(),
        s(n, "class", "title svelte-wr2uqt"),
        s(r, "href", o[1]),
        s(r, "target", "_blank"),
        s(r, "rel", "noopener noreferrer"),
        s(r, "class", "workspace-action svelte-wr2uqt"),
        te(r, "disabled", o[2]),
        s(m, "class", "workspace-action svelte-wr2uqt"),
        s(l, "class", "right-buttons svelte-wr2uqt"),
        s(t, "class", "header svelte-wr2uqt"),
        s(e, "class", "team-invite-section");
    },
    m(O, F) {
      y(O, e, F),
        f(e, t),
        f(t, n),
        f(t, i),
        f(t, l),
        f(l, r),
        P(c, r, null),
        f(r, a),
        f(r, u),
        f(l, d),
        f(l, m),
        P(g, m, null),
        f(m, h),
        f(m, w),
        f(e, S),
        H && H.m(e, null),
        (L = !0),
        I || ((N = [Q(r, "click", o[5]), Q(m, "click", o[3])]), (I = !0));
    },
    p(O, [F]) {
      (!L || F & 2) && s(r, "href", O[1]),
        (!L || F & 4) && te(r, "disabled", O[2]),
        O[0]
          ? H
            ? H.p(O, F)
            : ((H = vr(O)), H.c(), H.m(e, null))
          : H && (H.d(1), (H = null));
    },
    i(O) {
      L || (_(c.$$.fragment, O), _(g.$$.fragment, O), (L = !0));
    },
    o(O) {
      v(c.$$.fragment, O), v(g.$$.fragment, O), (L = !1);
    },
    d(O) {
      O && C(e), z(c), z(g), H && H.d(), (I = !1), he(N);
    },
  };
}
function _f(o, e, t) {
  let n,
    { showInviteBlock: i } = e,
    { manageButtonLink: l } = e,
    { canManageTeamApplications: r } = e,
    c = () => {
      $.actions.startInvitingTeammates({ source: "ntp-invite-button" }),
        $.actions.sendAnalyticsEvent(
          "launchpad.invite-teams-button-clicked",
          void 0
        );
    },
    a = () => {
      $.actions.startInvitingTeammates({ source: "ntp-promo-button" }),
        $.actions.sendAnalyticsEvent(
          "launchpad.invite-teams-promo-clicked",
          void 0
        );
    },
    p = (u) => {
      n &&
        ($.actions.sendAnalyticsEvent(
          "launchpad.manage-teams-button-clicked",
          void 0
        ),
        u.preventDefault());
    };
  return (
    (o.$$set = (u) => {
      "showInviteBlock" in u && t(0, (i = u.showInviteBlock)),
        "manageButtonLink" in u && t(1, (l = u.manageButtonLink)),
        "canManageTeamApplications" in u &&
          t(6, (r = u.canManageTeamApplications));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 66) {
        e: t(2, (n = !r || !l));
      }
    }),
    [i, l, n, c, a, p, r]
  );
}
var Un = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          _f,
          mf,
          T,
          {
            showInviteBlock: 0,
            manageButtonLink: 1,
            canManageTeamApplications: 6,
          },
          df
        );
    }
  },
  kr = Un;
function gf(o) {
  R(
    o,
    "svelte-33to52",
    ".app-list.svelte-33to52{height:auto;visibility:visible}.app-list.minimized.svelte-33to52{height:0;visibility:hidden}"
  );
}
function wr(o) {
  let e, t;
  return (
    (e = new gt({
      props: {
        dataTestId: "launchpad-workspace-team-section",
        state: {
          title: M("ntp_workspace_list__title_team_apps"),
          isTitleVisible: !0,
          isLoading: o[11],
          isAddApplicationButtonVisible: o[7],
          applications: o[1] ?? [],
          manageButtonLink: o[5],
        },
        globalMute: o[2],
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2210 &&
          (l.state = {
            title: M("ntp_workspace_list__title_team_apps"),
            isTitleVisible: !0,
            isLoading: n[11],
            isAddApplicationButtonVisible: n[7],
            applications: n[1] ?? [],
            manageButtonLink: n[5],
          }),
          i & 4 && (l.globalMute = n[2]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function yr(o) {
  let e, t;
  return (
    (e = new kr({
      props: {
        manageButtonLink: o[5],
        canManageTeamApplications: o[6],
        showInviteBlock: !0,
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 32 && (l.manageButtonLink = n[5]),
          i & 64 && (l.canManageTeamApplications = n[6]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Cr(o) {
  let e, t;
  return (
    (e = new gt({
      props: {
        dataTestId: "launchpad-workspace-shared-section",
        state: {
          title: M("ntp_workspace_list__title_shared_apps"),
          isTitleVisible: !0,
          isLoading: o[11],
          isAddApplicationButtonVisible: !1,
          applications: o[8],
        },
        globalMute: o[2],
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2304 &&
          (l.state = {
            title: M("ntp_workspace_list__title_shared_apps"),
            isTitleVisible: !0,
            isLoading: n[11],
            isAddApplicationButtonVisible: !1,
            applications: n[8],
          }),
          i & 4 && (l.globalMute = n[2]),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function hf(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c = o[10] && wr(o);
  n = new gt({
    props: {
      dataTestId: "launchpad-workspace-personal-section",
      state: {
        title: M("ntp_workspace_list__title_my_apps"),
        isTitleVisible: Boolean(o[10] || o[8].length),
        isLoading: o[11],
        isAddApplicationButtonVisible: !0,
        applications: o[9],
      },
      globalMute: o[2],
      appsLimit: o[3],
    },
  });
  let a = !o[10] && o[4] && yr(o),
    p = o[8].length && Cr(o);
  return {
    c() {
      (e = k("div")),
        c && c.c(),
        (t = x()),
        B(n.$$.fragment),
        (i = x()),
        a && a.c(),
        (l = x()),
        p && p.c(),
        s(e, "class", "app-list svelte-33to52"),
        te(e, "minimized", o[0].isMinimized);
    },
    m(u, d) {
      y(u, e, d),
        c && c.m(e, null),
        f(e, t),
        P(n, e, null),
        f(e, i),
        a && a.m(e, null),
        f(e, l),
        p && p.m(e, null),
        (r = !0);
    },
    p(u, [d]) {
      u[10]
        ? c
          ? (c.p(u, d), d & 1024 && _(c, 1))
          : ((c = wr(u)), c.c(), _(c, 1), c.m(e, t))
        : c &&
          (U(),
          v(c, 1, 1, () => {
            c = null;
          }),
          W());
      let m = {};
      d & 3840 &&
        (m.state = {
          title: M("ntp_workspace_list__title_my_apps"),
          isTitleVisible: Boolean(u[10] || u[8].length),
          isLoading: u[11],
          isAddApplicationButtonVisible: !0,
          applications: u[9],
        }),
        d & 4 && (m.globalMute = u[2]),
        d & 8 && (m.appsLimit = u[3]),
        n.$set(m),
        !u[10] && u[4]
          ? a
            ? (a.p(u, d), d & 1040 && _(a, 1))
            : ((a = yr(u)), a.c(), _(a, 1), a.m(e, l))
          : a &&
            (U(),
            v(a, 1, 1, () => {
              a = null;
            }),
            W()),
        u[8].length
          ? p
            ? (p.p(u, d), d & 256 && _(p, 1))
            : ((p = Cr(u)), p.c(), _(p, 1), p.m(e, null))
          : p &&
            (U(),
            v(p, 1, 1, () => {
              p = null;
            }),
            W()),
        (!r || d & 1) && te(e, "minimized", u[0].isMinimized);
    },
    i(u) {
      r || (_(c), _(n.$$.fragment, u), _(a), _(p), (r = !0));
    },
    o(u) {
      v(c), v(n.$$.fragment, u), v(a), v(p), (r = !1);
    },
    d(u) {
      u && C(e), c && c.d(), z(n), a && a.d(), p && p.d();
    },
  };
}
function bf(o, e, t) {
  let n,
    i,
    l,
    r,
    { workspace: c } = e,
    { personalServices: a } = e,
    { teamServices: p } = e,
    { globalMute: u } = e,
    { personalServicesLimit: d = 1 / 0 } = e,
    { b2bEnabled: m } = e,
    { manageButtonLink: g } = e,
    { canManageTeamApplications: h } = e,
    { canAddNewTeamApplications: b } = e;
  return (
    (o.$$set = (w) => {
      "workspace" in w && t(0, (c = w.workspace)),
        "personalServices" in w && t(12, (a = w.personalServices)),
        "teamServices" in w && t(1, (p = w.teamServices)),
        "globalMute" in w && t(2, (u = w.globalMute)),
        "personalServicesLimit" in w && t(3, (d = w.personalServicesLimit)),
        "b2bEnabled" in w && t(4, (m = w.b2bEnabled)),
        "manageButtonLink" in w && t(5, (g = w.manageButtonLink)),
        "canManageTeamApplications" in w &&
          t(6, (h = w.canManageTeamApplications)),
        "canAddNewTeamApplications" in w &&
          t(7, (b = w.canAddNewTeamApplications));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 4098) {
        e: t(11, (n = a === null && p === null));
      }
      if (o.$$.dirty & 3) {
        e: t(10, (i = c.isTeamWorkspace && p?.length));
      }
      if (o.$$.dirty & 4096) {
        e: t(9, (l = a?.filter(({ application: w }) => !w.sharedToMe) ?? []));
      }
      if (o.$$.dirty & 4096) {
        e: t(8, (r = a?.filter(({ application: w }) => w.sharedToMe) ?? []));
      }
    }),
    [c, p, u, d, m, g, h, b, r, l, i, n, a]
  );
}
var Wn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          bf,
          hf,
          T,
          {
            workspace: 0,
            personalServices: 12,
            teamServices: 1,
            globalMute: 2,
            personalServicesLimit: 3,
            b2bEnabled: 4,
            manageButtonLink: 5,
            canManageTeamApplications: 6,
            canAddNewTeamApplications: 7,
          },
          gf
        );
    }
  },
  xr = Wn;
function Sr(o) {
  let e, t, n, i;
  return (
    (e = new tr({
      props: {
        workspace: o[0],
        canInvite: o[5],
        avatar: o[1],
        teamAdminLinks: o[3],
        b2bEnabled: o[6],
      },
    })),
    (n = new xr({
      props: {
        globalMute: o[7],
        personalServices: o[9],
        personalServicesLimit: o[8],
        teamServices: o[10],
        workspace: o[0],
        b2bEnabled: o[6],
        canManageTeamApplications: o[4],
        canAddNewTeamApplications: o[2],
        manageButtonLink: o[3]?.applications,
      },
    })),
    {
      c() {
        B(e.$$.fragment), (t = x()), B(n.$$.fragment);
      },
      m(l, r) {
        P(e, l, r), y(l, t, r), P(n, l, r), (i = !0);
      },
      p(l, r) {
        let c = {};
        r & 1 && (c.workspace = l[0]),
          r & 32 && (c.canInvite = l[5]),
          r & 2 && (c.avatar = l[1]),
          r & 8 && (c.teamAdminLinks = l[3]),
          r & 64 && (c.b2bEnabled = l[6]),
          e.$set(c);
        let a = {};
        r & 128 && (a.globalMute = l[7]),
          r & 512 && (a.personalServices = l[9]),
          r & 256 && (a.personalServicesLimit = l[8]),
          r & 1024 && (a.teamServices = l[10]),
          r & 1 && (a.workspace = l[0]),
          r & 64 && (a.b2bEnabled = l[6]),
          r & 16 && (a.canManageTeamApplications = l[4]),
          r & 4 && (a.canAddNewTeamApplications = l[2]),
          r & 8 && (a.manageButtonLink = l[3]?.applications),
          n.$set(a);
      },
      i(l) {
        i || (_(e.$$.fragment, l), _(n.$$.fragment, l), (i = !0));
      },
      o(l) {
        v(e.$$.fragment, l), v(n.$$.fragment, l), (i = !1);
      },
      d(l) {
        z(e, l), l && C(t), z(n, l);
      },
    }
  );
}
function vf(o) {
  let e,
    t,
    n = o[0] && Sr(o);
  return {
    c() {
      n && n.c(), (e = ae());
    },
    m(i, l) {
      n && n.m(i, l), y(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[0]
        ? n
          ? (n.p(i, l), l & 1 && _(n, 1))
          : ((n = Sr(i)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (U(),
          v(n, 1, 1, () => {
            n = null;
          }),
          W());
    },
    i(i) {
      t || (_(n), (t = !0));
    },
    o(i) {
      v(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && C(e);
    },
  };
}
function kf(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b = $.stores.workspaceList;
  return (
    re(o, b, (w) => t(12, (h = w))),
    (o.$$.update = () => {
      if (o.$$.dirty & 4096) {
        e: t(0, (n = h?.currentWorkspace ?? null));
      }
      if (o.$$.dirty & 4096) {
        e: t(10, (i = h?.teamServices ?? null));
      }
      if (o.$$.dirty & 4096) {
        e: t(9, (l = h?.personalServices ?? null));
      }
      if (o.$$.dirty & 4096) {
        e: t(8, (r = h?.personalServicesLimit ?? 1 / 0));
      }
      if (o.$$.dirty & 4096) {
        e: t(7, (c = h?.settings.globalMute ?? !1));
      }
      if (o.$$.dirty & 4096) {
        e: t(6, (a = h?.isB2BEnabled ?? !1));
      }
      if (o.$$.dirty & 4096) {
        e: t(5, (p = h?.settings.canInvite ?? !1));
      }
      if (o.$$.dirty & 4096) {
        e: t(4, (u = h?.canManageTeamApplications ?? !1));
      }
      if (o.$$.dirty & 4096) {
        e: t(3, (d = h?.teamAdminLinks ?? null));
      }
      if (o.$$.dirty & 4096) {
        e: t(2, (m = h?.canAddNewTeamApplications ?? !1));
      }
      if (o.$$.dirty & 1) {
        e: t(1, (g = n?.avatar));
      }
    }),
    [n, g, m, d, u, p, a, c, r, l, i, b, h]
  );
}
var On = class extends E {
    constructor(e) {
      super(), q(this, e, kf, vf, T, {});
    }
  },
  Ir = On;
A();
A();
function wf(o) {
  let e, t, n, i, l, r, c, a, p, u;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        (n = G("path")),
        (i = G("path")),
        (l = G("path")),
        (r = G("path")),
        (c = G("path")),
        (a = G("path")),
        (p = G("path")),
        s(
          t,
          "d",
          "M7.00813 3.07735C6.55856 3.52692 5.82968 3.52692 5.38011 3.07735L4.26795 1.96519C3.81838 1.51563 3.81838 0.786737 4.26795 0.337173C4.71751 -0.112391 5.4464 -0.112391 5.89596 0.337173L7.00813 1.44934C7.45769 1.8989 7.45769 2.62779 7.00813 3.07735Z"
        ),
        s(t, "fill", "white"),
        s(
          n,
          "d",
          "M28.9886 1.44961C28.5391 1.89918 28.5391 2.62807 28.9886 3.07763C29.4382 3.52719 30.1671 3.52719 30.6167 3.07763L31.7288 1.96547C32.1784 1.5159 32.1784 0.787013 31.7288 0.337449C31.2793 -0.112115 30.5504 -0.112114 30.1008 0.33745L28.9886 1.44961Z"
        ),
        s(n, "fill", "white"),
        s(
          i,
          "d",
          "M0 11.0347C0 10.3989 0.515401 9.88352 1.15118 9.88352H3.34889C3.98467 9.88352 4.50007 10.3989 4.50007 11.0347C4.50007 11.6705 3.98467 12.1859 3.34889 12.1859H1.15118C0.515401 12.1859 0 11.6705 0 11.0347Z"
        ),
        s(i, "fill", "white"),
        s(
          l,
          "d",
          "M31.5005 11.0347C31.5005 10.3989 32.0159 9.88352 32.6517 9.88352H34.8494C35.4852 9.88352 36.0006 10.3989 36.0006 11.0347C36.0006 11.6705 35.4852 12.1859 34.8494 12.1859H32.6517C32.0159 12.1859 31.5005 11.6705 31.5005 11.0347Z"
        ),
        s(l, "fill", "white"),
        s(
          r,
          "d",
          "M7.00693 20.6979C7.45649 20.2483 7.45649 19.5194 7.00693 19.0699C6.55736 18.6203 5.82847 18.6203 5.37891 19.0699L4.26674 20.182C3.81718 20.6316 3.81718 21.3605 4.26674 21.8101C4.71631 22.2596 5.4452 22.2596 5.89476 21.8101L7.00693 20.6979Z"
        ),
        s(r, "fill", "white"),
        s(
          c,
          "d",
          "M29.069 19.0702C29.5185 18.6206 30.2474 18.6206 30.697 19.0702L31.8091 20.1823C32.2587 20.6319 32.2587 21.3608 31.8091 21.8103C31.3596 22.2599 30.6307 22.2599 30.1811 21.8103L29.069 20.6982C28.6194 20.2486 28.6194 19.5197 29.069 19.0702Z"
        ),
        s(c, "fill", "white"),
        s(
          a,
          "d",
          "M19.4388 31.7037H16.5879C15.3303 31.7037 14.2365 30.8418 13.9424 29.6191L13.1977 26.5236H22.7854L22.0926 29.5836C21.8119 30.8234 20.71 31.7037 19.4388 31.7037Z"
        ),
        s(a, "fill", "white"),
        s(
          p,
          "d",
          "M12.091 21.9232L12.5683 23.9073H23.3778L23.7471 22.2761C23.9879 21.2126 24.6806 20.3145 25.4528 19.5447C26.8893 18.1125 28.5196 15.5463 28.5196 11.9243C28.5196 5.85443 22.8161 1.66831 17.9497 1.66831C13.0834 1.66831 7.48443 5.74977 7.48443 11.9243C7.48443 15.7986 9.27636 18.4239 10.7141 19.7801C11.3428 20.3731 11.8889 21.083 12.091 21.9232Z"
        ),
        s(p, "fill", "white"),
        s(e, "class", (u = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 36 32"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(d, m) {
      y(d, e, m),
        f(e, t),
        f(e, n),
        f(e, i),
        f(e, l),
        f(e, r),
        f(e, c),
        f(e, a),
        f(e, p);
    },
    p(d, [m]) {
      m & 4 && u !== (u = `icon ${d[2]}`) && s(e, "class", u),
        m & 1 && s(e, "width", d[0]),
        m & 2 && s(e, "height", d[1]);
    },
    i: j,
    o: j,
    d(d) {
      d && C(e);
    },
  };
}
function yf(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Zn = class extends E {
    constructor(e) {
      super(), q(this, e, yf, wf, T, { width: 0, height: 1, className: 2 });
    }
  },
  Br = Zn;
A();
function Cf(o) {
  R(
    o,
    "svelte-tpd6cq",
    ".inner.svelte-tpd6cq{padding:20px 25px}.confirm-button.svelte-tpd6cq{margin-top:20px}h3.svelte-tpd6cq{color:var(--text-primary-color);font-size:16px;line-height:22px;margin:0}ul.svelte-tpd6cq{margin:0;padding:0;list-style:none}li.svelte-tpd6cq{font-size:14px;line-height:21px;margin:14px 0;padding-left:26px}.ico.svelte-tpd6cq{background:transparent no-repeat center;border-radius:50%;font-style:normal;display:inline-flex;justify-content:center;align-items:center;width:18px;height:18px;margin-left:-26px;margin-right:8px;vertical-align:text-bottom;box-sizing:border-box}.ico.svelte-tpd6cq:not(.finished){border:1px solid}"
  );
}
function Pr(o, e, t) {
  let n = o.slice();
  return (n[7] = e[t]), (n[9] = t), n;
}
function xf(o) {
  let e = o[9] + 1 + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    d(n) {
      n && C(t);
    },
  };
}
function Sf(o) {
  let e, t, n, i;
  return {
    c() {
      (e = G("svg")),
        (t = G("circle")),
        (n = G("circle")),
        (i = G("path")),
        s(t, "cx", "9"),
        s(t, "cy", "9"),
        s(t, "r", "9"),
        s(t, "fill", "#73D864"),
        s(n, "cx", "9"),
        s(n, "cy", "9"),
        s(n, "r", "8.5"),
        s(n, "stroke", "black"),
        s(n, "stroke-opacity", "0.05"),
        s(i, "d", "M5 9.5L8.15966 12L13 6"),
        s(i, "stroke", "white"),
        s(i, "stroke-width", "1.5"),
        s(e, "width", "18"),
        s(e, "height", "18"),
        s(e, "viewBox", "0 0 18 18"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      y(l, e, r), f(e, t), f(e, n), f(e, i);
    },
    d(l) {
      l && C(e);
    },
  };
}
function zr(o) {
  let e,
    t,
    n,
    i = (o[2][o[7].key] ?? o[7].key) + "",
    l,
    r;
  function c(u, d) {
    return u[7].finished ? Sf : xf;
  }
  let a = c(o, -1),
    p = a(o);
  return {
    c() {
      (e = k("li")),
        (t = k("i")),
        p.c(),
        (n = x()),
        (l = V(i)),
        (r = x()),
        s(t, "class", "ico svelte-tpd6cq"),
        te(t, "finished", o[7].finished),
        s(e, "class", "svelte-tpd6cq");
    },
    m(u, d) {
      y(u, e, d), f(e, t), p.m(t, null), f(t, n), f(e, l), f(e, r);
    },
    p(u, d) {
      a !== (a = c(u, d)) && (p.d(1), (p = a(u)), p && (p.c(), p.m(t, n))),
        d & 2 && te(t, "finished", u[7].finished),
        d & 2 && i !== (i = (u[2][u[7].key] ?? u[7].key) + "") && Y(l, i);
    },
    d(u) {
      u && C(e), p.d();
    },
  };
}
function If(o) {
  let e = M("ntp_walkthrough__button_text") + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p: j,
    d(n) {
      n && C(t);
    },
  };
}
function Bf(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p = o[1],
    u = [];
  for (let d = 0; d < p.length; d += 1) u[d] = zr(Pr(o, p, d));
  return (
    (c = new ce({
      props: { $$slots: { default: [If] }, $$scope: { ctx: o } },
    })),
    c.$on("click", o[5]),
    {
      c() {
        (e = k("div")),
          (t = k("h3")),
          (t.textContent = `${M("ntp_walkthrough__title")}`),
          (n = x()),
          (i = k("ul"));
        for (let d = 0; d < u.length; d += 1) u[d].c();
        (l = x()),
          (r = k("div")),
          B(c.$$.fragment),
          s(t, "class", "svelte-tpd6cq"),
          s(i, "class", "svelte-tpd6cq"),
          s(r, "class", "confirm-button svelte-tpd6cq"),
          s(e, "class", "inner svelte-tpd6cq");
      },
      m(d, m) {
        y(d, e, m), f(e, t), f(e, n), f(e, i);
        for (let g = 0; g < u.length; g += 1) u[g] && u[g].m(i, null);
        f(e, l), f(e, r), P(c, r, null), (a = !0);
      },
      p(d, m) {
        if (m & 6) {
          p = d[1];
          let h;
          for (h = 0; h < p.length; h += 1) {
            let b = Pr(d, p, h);
            u[h] ? u[h].p(b, m) : ((u[h] = zr(b)), u[h].c(), u[h].m(i, null));
          }
          for (; h < u.length; h += 1) u[h].d(1);
          u.length = p.length;
        }
        let g = {};
        m & 1024 && (g.$$scope = { dirty: m, ctx: d }), c.$set(g);
      },
      i(d) {
        a || (_(c.$$.fragment, d), (a = !0));
      },
      o(d) {
        v(c.$$.fragment, d), (a = !1);
      },
      d(d) {
        d && C(e), Pe(u, d), z(c);
      },
    }
  );
}
function Pf(o) {
  let e, t, n, i, l, r, c;
  return (
    (t = new Ie({
      props: {
        width: 275,
        minWidth: 275,
        $$slots: { default: [Bf] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = k("div")), B(t.$$.fragment);
      },
      m(a, p) {
        y(a, e, p),
          P(t, e, null),
          (l = !0),
          r ||
            ((c = [be((n = o[0].call(null, e))), be((i = o[3].call(null, e)))]),
            (r = !0));
      },
      p(a, [p]) {
        let u = {};
        p & 1026 && (u.$$scope = { dirty: p, ctx: a }), t.$set(u);
      },
      i(a) {
        l || (_(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        v(t.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && C(e), z(t), (r = !1), he(c);
      },
    }
  );
}
function zf(o, e, t) {
  let { anchorElement: n } = e,
    i = ve(),
    { popperContent: l } = e,
    { steps: r } = e,
    c = {
      ["sidebar"]: M("ntp_walkthrough__step_sidebar"),
      ["sessions"]: M("ntp_walkthrough__step_sessions"),
      ["customApps"]: M("ntp_walkthrough__step_custom_apps"),
      ["multiAccount"]: M("ntp_walkthrough__step_multi_accounts"),
      ["splitView"]: M("ntp_walkthrough__step_split_view"),
      ["search"]: M("ntp_walkthrough__step_global_search"),
      ["final"]: M("ntp_walkthrough__step_final"),
      ["tasks"]: "",
      ["collections"]: "",
      ["help"]: "",
    },
    a = (u) =>
      rt({
        trigger: n,
        popup: u,
        callback: () => {
          i("close");
        },
      });
  function p(u) {
    pe.call(this, o, u);
  }
  return (
    (o.$$set = (u) => {
      "anchorElement" in u && t(4, (n = u.anchorElement)),
        "popperContent" in u && t(0, (l = u.popperContent)),
        "steps" in u && t(1, (r = u.steps));
    }),
    [l, r, c, a, n, p]
  );
}
var Kn = class extends E {
    constructor(e) {
      super(),
        q(
          this,
          e,
          zf,
          Pf,
          T,
          { anchorElement: 4, popperContent: 0, steps: 1 },
          Cf
        );
    }
  },
  Mr = Kn;
A();
function Mf(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(t, "fill-rule", "evenodd"),
        s(t, "clip-rule", "evenodd"),
        s(
          t,
          "d",
          "M0.130859 2.27828L2.11986 0.421875L9.00036 6.84368L15.8809 0.421875L17.8699 2.27828L9.00036 10.5565L0.130859 2.27828Z"
        ),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 18 11"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function Lf(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Yn = class extends E {
    constructor(e) {
      super(), q(this, e, Lf, Mf, T, { width: 0, height: 1, className: 2 });
    }
  },
  Lr = Yn;
function Af(o) {
  R(
    o,
    "svelte-fecvs1",
    ".walkthrough-button.svelte-fecvs1.svelte-fecvs1{outline:none;position:relative;width:60px;height:60px;cursor:pointer;transform-origin:center center;backface-visibility:hidden;-webkit-font-smoothing:antialiased;border-radius:50%;overflow:hidden;background:#000;box-shadow:0 1px 4px rgba(0 0 0 / 0.08), 0 3px 21px rgba(0 0 0 / 0.08)}.walkthrough-button.open.svelte-fecvs1.svelte-fecvs1{background:var(--popup-bg-color)}.walkthrough-button.svelte-fecvs1 .svelte-fecvs1{cursor:pointer}.walkthrough-icon-wrapper.svelte-fecvs1.svelte-fecvs1{display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;width:100%;opacity:1;transform:rotate(0deg) scale(1);transition:transform 0.16s linear 0s, opacity 0.08s linear 0s}.walkthrough-icon-wrapper.svelte-fecvs1 .expand-icon{fill:var(--text-primary-color)}.walkthrough-icon-wrapper.svelte-fecvs1 .walkthrough-icon{fill:#fff}"
  );
}
function Ar(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m = o[3] && $r(o),
    g = [Tf, $f],
    h = [];
  function b(w, S) {
    return w[3] ? 1 : 0;
  }
  return (
    (r = b(o, -1)),
    (c = h[r] = g[r](o)),
    {
      c() {
        (e = k("div")),
          m && m.c(),
          (t = x()),
          (n = k("div")),
          (i = k("button")),
          (l = k("div")),
          c.c(),
          s(l, "class", "walkthrough-icon-wrapper svelte-fecvs1"),
          s(i, "class", "walkthrough-button svelte-fecvs1"),
          te(i, "open", o[3]),
          s(n, "class", "walkthrough");
      },
      m(w, S) {
        y(w, e, S),
          m && m.m(e, null),
          f(e, t),
          f(e, n),
          f(n, i),
          f(i, l),
          h[r].m(l, null),
          o[12](n),
          (p = !0),
          u ||
            ((d = [be((a = o[6].call(null, i))), Q(i, "click", o[9])]),
            (u = !0));
      },
      p(w, S) {
        w[3]
          ? m
            ? (m.p(w, S), S & 8 && _(m, 1))
            : ((m = $r(w)), m.c(), _(m, 1), m.m(e, t))
          : m &&
            (U(),
            v(m, 1, 1, () => {
              m = null;
            }),
            W());
        let L = r;
        (r = b(w, S)),
          r !== L &&
            (U(),
            v(h[L], 1, 1, () => {
              h[L] = null;
            }),
            W(),
            (c = h[r]),
            c || ((c = h[r] = g[r](w)), c.c()),
            _(c, 1),
            c.m(l, null)),
          (!p || S & 8) && te(i, "open", w[3]);
      },
      i(w) {
        p || (_(m), _(c), (p = !0));
      },
      o(w) {
        v(m), v(c), (p = !1);
      },
      d(w) {
        w && C(e), m && m.d(), h[r].d(), o[12](null), (u = !1), he(d);
      },
    }
  );
}
function $r(o) {
  let e, t;
  return (
    (e = new Mr({
      props: { steps: o[2], popperContent: o[7], anchorElement: o[1] },
    })),
    e.$on("click", o[10]),
    e.$on("close", o[0]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.steps = n[2]), i & 2 && (l.anchorElement = n[1]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function $f(o) {
  let e, t;
  return (
    (e = new Lr({
      props: { className: "expand-icon", width: "18px", height: "10px" },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Tf(o) {
  let e, t;
  return (
    (e = new Br({
      props: { className: "walkthrough-icon", width: "36px", height: "32px" },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function qf(o) {
  let e,
    t,
    n = o[5] && o[4] && Ar(o);
  return {
    c() {
      n && n.c(), (e = ae());
    },
    m(i, l) {
      n && n.m(i, l), y(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[5] && i[4]
        ? n
          ? (n.p(i, l), l & 48 && _(n, 1))
          : ((n = Ar(i)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (U(),
          v(n, 1, 1, () => {
            n = null;
          }),
          W());
    },
    i(i) {
      t || (_(n), (t = !0));
    },
    o(i) {
      v(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && C(e);
    },
  };
}
function Ef(o, e, t) {
  let n,
    i,
    l,
    r,
    [c, a] = Re({
      placement: "top-end",
      modifiers: [{ name: "offset", options: { offset: [0, 4] } }],
    }),
    p = $.stores.walkthrough;
  re(o, p, (w) => t(11, (l = w)));
  let u,
    d = !1,
    m = () => {
      t(3, (d = !d)),
        $.actions.sendAnalyticsEvent(
          d ? "walkthrough.lamp-opened" : "walkthrough.lamp-closed",
          { completedSteps: u.filter((w) => w.finished).map((w) => w.key) }
        );
    },
    g = () => {
      t(3, (d = !1)),
        $.actions.sendAnalyticsEvent("walkthrough.lamp-closed", {
          completedSteps: u.filter((w) => w.finished).map((w) => w.key),
        });
    },
    h = () => {
      g();
      let w = u.find((S) => !S.finished);
      w &&
        $.actions.sendAnalyticsEvent("walkthrough.continue-button-clicked", {
          step: w.key,
        }),
        $.actions.switchWalkthrough(!0);
    };
  function b(w) {
    fe[w ? "unshift" : "push"](() => {
      (r = w), t(1, r);
    });
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 2048) {
        e: t(5, (n = l?.isAvailable ?? !1));
      }
      if (o.$$.dirty & 2048) {
        e: t(4, (i = l?.isPostponed ?? !1));
      }
      if (o.$$.dirty & 2048) {
        e: t(2, (u = l?.steps ?? []));
      }
    }),
    [g, r, u, d, i, n, c, a, p, m, h, l, b]
  );
}
var Jn = class extends E {
    constructor(e) {
      super(), q(this, e, Ef, qf, T, { hidePopup: 0 }, Af);
    }
    get hidePopup() {
      return this.$$.ctx[0];
    }
  },
  Tr = Jn;
A();
A();
function jf(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(
          t,
          "d",
          "M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"
        ),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 28 32"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function Nf(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var Xn = class extends E {
    constructor(e) {
      super(), q(this, e, Nf, jf, T, { width: 0, height: 1, className: 2 });
    }
  },
  qr = Xn;
function Hf(o) {
  R(
    o,
    "svelte-1bfqnew",
    ".intercom-button.svelte-1bfqnew.svelte-1bfqnew{outline:none;position:relative;z-index:999999;width:60px;height:60px;transform-origin:center center;backface-visibility:hidden;-webkit-font-smoothing:antialiased;border-radius:50%;overflow:hidden;background-color:#000;box-shadow:rgb(0 0 0 / 0.06) 0 1px 6px 0, rgb(0 0 0 / 0.16) 0 2px 32px 0}.intercom-button.svelte-1bfqnew .svelte-1bfqnew{cursor:pointer}.intercom-icon-wrapper.svelte-1bfqnew.svelte-1bfqnew{display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:absolute;top:0;bottom:0;width:100%;opacity:1;transform:rotate(0deg) scale(1);transition:transform 0.16s linear 0s, opacity 0.08s linear 0s}.intercom-icon-wrapper .intercom-icon{fill:#fff}"
  );
}
function Er(o) {
  let e, t, n, i, l, r, c;
  return (
    (i = new qr({
      props: { className: "intercom-icon", width: "28px", height: "32px" },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("button")),
          (n = k("div")),
          B(i.$$.fragment),
          s(n, "class", "intercom-icon-wrapper svelte-1bfqnew"),
          s(t, "class", "intercom-button svelte-1bfqnew"),
          s(e, "class", "intercom-launcher");
      },
      m(a, p) {
        y(a, e, p),
          f(e, t),
          f(t, n),
          P(i, n, null),
          (l = !0),
          r || ((c = Q(t, "click", o[2])), (r = !0));
      },
      p: j,
      i(a) {
        l || (_(i.$$.fragment, a), (l = !0));
      },
      o(a) {
        v(i.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && C(e), z(i), (r = !1), c();
      },
    }
  );
}
function Ff(o) {
  let e,
    t,
    n = o[1] && Er(o);
  return {
    c() {
      n && n.c(), (e = ae());
    },
    m(i, l) {
      n && n.m(i, l), y(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[1]
        ? n
          ? (n.p(i, l), l & 2 && _(n, 1))
          : ((n = Er(i)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (U(),
          v(n, 1, 1, () => {
            n = null;
          }),
          W());
    },
    i(i) {
      t || (_(n), (t = !0));
    },
    o(i) {
      v(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && C(e);
    },
  };
}
function Vf(o, e, t) {
  let n,
    i,
    l = j,
    r = () => (l(), (l = it(n, (u) => t(1, (i = u)))), n);
  o.$$.on_destroy.push(() => l());
  let { userInfo: c } = e,
    { userId: a } = e,
    p = () => {
      i && st(c, a);
    };
  o.$$set = (u) => {
    "userInfo" in u && t(3, (c = u.userInfo)),
      "userId" in u && t(4, (a = u.userId));
  };
  e: r(t(0, (n = $.stores.isIntercomAvailable)));
  return [n, i, p, c, a];
}
var Qn = class extends E {
    constructor(e) {
      super(), q(this, e, Vf, Ff, T, { userInfo: 3, userId: 4 }, Hf);
    }
  },
  jr = Qn;
A();
A();
function Gf(o) {
  let e, t, n;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        s(t, "d", "M0 19L19.36 0L12 14H22L2.464 33L9.5 19H0Z"),
        s(t, "fill", "currentColor"),
        s(e, "class", (n = `icon ${o[2]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "fill", "currentColor"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      y(i, e, l), f(e, t);
    },
    p(i, [l]) {
      l & 4 && n !== (n = `icon ${i[2]}`) && s(e, "class", n),
        l & 1 && s(e, "width", i[0]),
        l & 2 && s(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && C(e);
    },
  };
}
function Df(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { className: l = "" } = e;
  return (
    (o.$$set = (r) => {
      "width" in r && t(0, (n = r.width)),
        "height" in r && t(1, (i = r.height)),
        "className" in r && t(2, (l = r.className));
    }),
    [n, i, l]
  );
}
var ei = class extends E {
    constructor(e) {
      super(), q(this, e, Df, Gf, T, { width: 0, height: 1, className: 2 });
    }
  },
  Nr = ei;
A();
A();
function Rf(o) {
  R(
    o,
    "svelte-1jr327y",
    ".shortcuts-wrap-item.svelte-1jr327y{padding:3px 4px;border-top:1px solid var(--launchpad-shortcuts-popup-border-color)}.shortcuts-item.svelte-1jr327y{display:flex;align-items:center;justify-content:space-between;border-radius:4px;padding:7px 10px 8px 18px;min-height:52px}.shortcuts-item.svelte-1jr327y:hover{background:var(--launchpad-shortcuts-popup-hover-item)}.shortcuts-item-name.svelte-1jr327y{font-size:13px;color:var(--launchpad-shortcuts-popup-name)}.shortcuts-item-description.svelte-1jr327y{color:#8a8a8a;font-size:12px}"
  );
}
function Uf(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d = o[3].default,
    m = ke(d, o, o[2], null);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (n = k("div")),
        (i = k("div")),
        (l = V(o[0])),
        (r = x()),
        (c = k("div")),
        (a = V(o[1])),
        (p = x()),
        m && m.c(),
        s(i, "class", "shortcuts-item-name svelte-1jr327y"),
        s(c, "class", "shortcuts-item-description svelte-1jr327y"),
        s(n, "class", "shortcuts-item-info"),
        s(t, "class", "shortcuts-item svelte-1jr327y"),
        s(e, "class", "shortcuts-wrap-item svelte-1jr327y");
    },
    m(g, h) {
      y(g, e, h),
        f(e, t),
        f(t, n),
        f(n, i),
        f(i, l),
        f(n, r),
        f(n, c),
        f(c, a),
        f(t, p),
        m && m.m(t, null),
        (u = !0);
    },
    p(g, [h]) {
      (!u || h & 1) && Y(l, g[0]),
        (!u || h & 2) && Y(a, g[1]),
        m &&
          m.p &&
          (!u || h & 4) &&
          ye(m, d, g, g[2], u ? we(d, g[2], h, null) : Ce(g[2]), null);
    },
    i(g) {
      u || (_(m, g), (u = !0));
    },
    o(g) {
      v(m, g), (u = !1);
    },
    d(g) {
      g && C(e), m && m.d(g);
    },
  };
}
function Wf(o, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { name: l = "" } = e,
    { description: r = "" } = e;
  return (
    (o.$$set = (c) => {
      "name" in c && t(0, (l = c.name)),
        "description" in c && t(1, (r = c.description)),
        "$$scope" in c && t(2, (i = c.$$scope));
    }),
    [l, r, i, n]
  );
}
var ti = class extends E {
    constructor(e) {
      super(), q(this, e, Wf, Uf, T, { name: 0, description: 1 }, Rf);
    }
  },
  Fe = ti;
function Of(o) {
  R(
    o,
    "svelte-ej3lc6",
    ".shortcuts-popup.svelte-ej3lc6{width:300px}.shortcuts-popup-header.svelte-ej3lc6{font-size:18px;font-weight:700;padding:21px 22px 20px;color:var(--launchpad-shortcuts-popup-title)}.show-shortcuts.svelte-ej3lc6{width:250px;margin:15px auto;display:flex;flex-direction:column}"
  );
}
function Zf(o) {
  let e, t;
  return (
    (e = new Oe({ props: { keys: o[5] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 32 && (l.keys = n[5]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Kf(o) {
  let e, t;
  return (
    (e = new Oe({ props: { keys: o[4] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 16 && (l.keys = n[4]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Yf(o) {
  let e, t;
  return (
    (e = new Oe({ props: { keys: o[1] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2 && (l.keys = n[1]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Jf(o) {
  let e, t;
  return (
    (e = new Oe({ props: { keys: o[3] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 8 && (l.keys = n[3]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Xf(o) {
  let e, t;
  return (
    (e = new Oe({ props: { keys: o[2] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.keys = n[2]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Qf(o) {
  let e, t;
  return (
    (e = new Mi({ props: { checked: o[0] } })),
    e.$on("change", o[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 1 && (l.checked = n[0]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function ed(o) {
  let e = M("ntp_shortcuts__button_text") + "",
    t;
  return {
    c() {
      t = V(e);
    },
    m(n, i) {
      y(n, t, i);
    },
    p: j,
    d(n) {
      n && C(t);
    },
  };
}
function td(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h, b, w, S, L;
  return (
    (i = new Fe({
      props: {
        name: M("ntp_shortcuts__toggle_split_view_title"),
        $$slots: { default: [Zf] },
        $$scope: { ctx: o },
      },
    })),
    (r = new Fe({
      props: {
        name: M("ntp_shortcuts__last_split_view_title"),
        $$slots: { default: [Kf] },
        $$scope: { ctx: o },
      },
    })),
    (a = new Fe({
      props: {
        name: M("ntp_shortcuts__open_app_split_view_title"),
        description: M("ntp_shortcuts__open_app_split_view_description"),
        $$slots: { default: [Yf] },
        $$scope: { ctx: o },
      },
    })),
    (u = new Fe({
      props: {
        name: M("ntp_shortcuts__tabs_switcher_title"),
        description: M("ntp_shortcuts__tabs_switcher_description"),
        $$slots: { default: [Jf] },
        $$scope: { ctx: o },
      },
    })),
    (m = new Fe({
      props: {
        name: M("ntp_shortcuts__global_search_title"),
        $$slots: { default: [Xf] },
        $$scope: { ctx: o },
      },
    })),
    (h = new Fe({
      props: {
        name: M("ntp_shortcuts__headless_mode_title"),
        description: M("ntp_shortcuts__headless_mode_description"),
        $$slots: { default: [Qf] },
        $$scope: { ctx: o },
      },
    })),
    (S = new ce({
      props: { $$slots: { default: [ed] }, $$scope: { ctx: o } },
    })),
    S.$on("click", o[8]),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (t.textContent = `${M("ntp_shortcuts__title")}`),
          (n = x()),
          B(i.$$.fragment),
          (l = x()),
          B(r.$$.fragment),
          (c = x()),
          B(a.$$.fragment),
          (p = x()),
          B(u.$$.fragment),
          (d = x()),
          B(m.$$.fragment),
          (g = x()),
          B(h.$$.fragment),
          (b = x()),
          (w = k("div")),
          B(S.$$.fragment),
          s(t, "class", "shortcuts-popup-header svelte-ej3lc6"),
          s(w, "class", "show-shortcuts svelte-ej3lc6"),
          s(e, "class", "shortcuts-popup svelte-ej3lc6");
      },
      m(I, N) {
        y(I, e, N),
          f(e, t),
          f(e, n),
          P(i, e, null),
          f(e, l),
          P(r, e, null),
          f(e, c),
          P(a, e, null),
          f(e, p),
          P(u, e, null),
          f(e, d),
          P(m, e, null),
          f(e, g),
          P(h, e, null),
          f(e, b),
          f(e, w),
          P(S, w, null),
          (L = !0);
      },
      p(I, [N]) {
        let H = {};
        N & 1056 && (H.$$scope = { dirty: N, ctx: I }), i.$set(H);
        let O = {};
        N & 1040 && (O.$$scope = { dirty: N, ctx: I }), r.$set(O);
        let F = {};
        N & 1026 && (F.$$scope = { dirty: N, ctx: I }), a.$set(F);
        let D = {};
        N & 1032 && (D.$$scope = { dirty: N, ctx: I }), u.$set(D);
        let J = {};
        N & 1028 && (J.$$scope = { dirty: N, ctx: I }), m.$set(J);
        let Z = {};
        N & 1025 && (Z.$$scope = { dirty: N, ctx: I }), h.$set(Z);
        let ee = {};
        N & 1024 && (ee.$$scope = { dirty: N, ctx: I }), S.$set(ee);
      },
      i(I) {
        L ||
          (_(i.$$.fragment, I),
          _(r.$$.fragment, I),
          _(a.$$.fragment, I),
          _(u.$$.fragment, I),
          _(m.$$.fragment, I),
          _(h.$$.fragment, I),
          _(S.$$.fragment, I),
          (L = !0));
      },
      o(I) {
        v(i.$$.fragment, I),
          v(r.$$.fragment, I),
          v(a.$$.fragment, I),
          v(u.$$.fragment, I),
          v(m.$$.fragment, I),
          v(h.$$.fragment, I),
          v(S.$$.fragment, I),
          (L = !1);
      },
      d(I) {
        I && C(e), z(i), z(r), z(a), z(u), z(m), z(h), z(S);
      },
    }
  );
}
function nd(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    p,
    u = $.stores.launchpadMainState;
  re(o, u, (g) => t(9, (p = g)));
  let d = () => {
      let g = !n;
      $.actions.sendAnalyticsEvent(
        "launchpad.shortcuts-popup.headless-mode-changed",
        { "new-value": Yi(g) }
      ),
        $.actions.changeIsHeadlessModeEnabled(g);
    },
    m = () => {
      $.actions.sendAnalyticsEvent(
        "launchpad.shortcuts-popup.show-all-shortcuts-clicked",
        void 0
      ),
        $.actions.toggleHelp({
          source: "launchpad.shortcuts-popup.show-all-shortcuts-clicked",
        });
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 512) {
        e: t(0, (n = p?.shortcutsPopupData?.isHeadlessModeEnabled));
      }
      if (o.$$.dirty & 512) {
        e: t(5, (i = p?.shortcutsPopupData?.openSplitMenuKeys ?? []));
      }
      if (o.$$.dirty & 512) {
        e: t(4, (l = p?.shortcutsPopupData?.openLastSplitPanelKeys ?? []));
      }
      if (o.$$.dirty & 512) {
        e: t(3, (r = p?.shortcutsPopupData?.switchTabKeys ?? []));
      }
      if (o.$$.dirty & 512) {
        e: t(2, (c = p?.shortcutsPopupData?.globalSearchKeys ?? []));
      }
      if (o.$$.dirty & 512) {
        e: t(1, (a = p?.shortcutsPopupData?.openInSplitViewKeys ?? []));
      }
    }),
    [n, a, c, r, l, i, u, d, m, p]
  );
}
var ni = class extends E {
    constructor(e) {
      super(), q(this, e, nd, td, T, {}, Of);
    }
  },
  Hr = ni;
function id(o) {
  R(
    o,
    "svelte-1xpussa",
    ".shortcut-popup-wrap-button.svelte-1xpussa{position:relative}.shortcuts-popup-button.svelte-1xpussa{outline:none;position:relative;min-width:190px;max-width:min-content;height:60px;cursor:pointer;-webkit-font-smoothing:antialiased;border-radius:30px;background:#000;box-shadow:0 1px 4px rgba(0 0 0 / 0.08), 0 3px 21px rgba(0 0 0 / 0.08);display:flex;align-items:center;padding:8px;transition:width 0.3s ease-in-out}.shortcuts-popup-button.clicked.svelte-1xpussa{min-width:0;max-width:60px;overflow:hidden}.hide-icon.svelte-1xpussa{transform:rotate(180deg)}.shortcuts-popup-icon.svelte-1xpussa{background-color:rgba(255 255 255 / 0.08);color:#fff;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:10px}.shortcuts-popup-text.svelte-1xpussa{font-size:14px;font-weight:500;line-height:17px;color:#fff}"
  );
}
function Fr(o) {
  let e, t;
  return (
    (e = new Nr({ props: { width: "22", height: "33" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Vr(o) {
  let e, t, n;
  return (
    (t = new Ze({ props: { width: "17", height: "17" } })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "hide-icon svelte-1xpussa");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function Gr(o) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.textContent = `${M("ntp_launchpad_shortcuts__title_button_text")}`),
        s(e, "class", "shortcuts-popup-text svelte-1xpussa");
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    d(t) {
      t && C(e);
    },
  };
}
function Dr(o) {
  let e, t;
  return (
    (e = new je({
      props: {
        anchorElement: o[2],
        isTop: !0,
        $$slots: { default: [od] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[4]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.anchorElement = n[2]),
          i & 64 && (l.$$scope = { dirty: i, ctx: n }),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function od(o) {
  let e, t;
  return (
    (e = new Hr({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function ld(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u = !o[1] && Fr(o),
    d = o[1] && Vr(o),
    m = !o[0] && Gr(o),
    g = o[1] && Dr(o);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (n = k("div")),
        u && u.c(),
        (i = x()),
        d && d.c(),
        (l = x()),
        m && m.c(),
        (r = x()),
        g && g.c(),
        s(n, "class", "shortcuts-popup-icon svelte-1xpussa"),
        s(t, "class", "shortcuts-popup-button svelte-1xpussa"),
        te(t, "clicked", o[0]),
        s(e, "class", "shortcut-popup-wrap-button svelte-1xpussa");
    },
    m(h, b) {
      y(h, e, b),
        f(e, t),
        f(t, n),
        u && u.m(n, null),
        f(n, i),
        d && d.m(n, null),
        f(t, l),
        m && m.m(t, null),
        o[5](t),
        f(e, r),
        g && g.m(e, null),
        (c = !0),
        a || ((p = Q(t, "click", o[3])), (a = !0));
    },
    p(h, [b]) {
      h[1]
        ? u &&
          (U(),
          v(u, 1, 1, () => {
            u = null;
          }),
          W())
        : u
        ? b & 2 && _(u, 1)
        : ((u = Fr(h)), u.c(), _(u, 1), u.m(n, i)),
        h[1]
          ? d
            ? b & 2 && _(d, 1)
            : ((d = Vr(h)), d.c(), _(d, 1), d.m(n, null))
          : d &&
            (U(),
            v(d, 1, 1, () => {
              d = null;
            }),
            W()),
        h[0]
          ? m && (m.d(1), (m = null))
          : m
          ? m.p(h, b)
          : ((m = Gr(h)), m.c(), m.m(t, null)),
        (!c || b & 1) && te(t, "clicked", h[0]),
        h[1]
          ? g
            ? (g.p(h, b), b & 2 && _(g, 1))
            : ((g = Dr(h)), g.c(), _(g, 1), g.m(e, null))
          : g &&
            (U(),
            v(g, 1, 1, () => {
              g = null;
            }),
            W());
    },
    i(h) {
      c || (_(u), _(d), _(g), (c = !0));
    },
    o(h) {
      v(u), v(d), v(g), (c = !1);
    },
    d(h) {
      h && C(e),
        u && u.d(),
        d && d.d(),
        m && m.d(),
        o[5](null),
        g && g.d(),
        (a = !1),
        p();
    },
  };
}
function rd(o, e, t) {
  let { isShortcutsPopupClosed: n } = e,
    i = !1,
    l = null,
    r = () => {
      t(1, (i = !i)),
        i &&
          $.actions.sendAnalyticsEvent(
            "launchpad.shortcuts-popup.opened",
            void 0
          );
    },
    c = () => {
      n || $.actions.setShortcutsPopupClosed(), r();
    };
  function a(p) {
    fe[p ? "unshift" : "push"](() => {
      (l = p), t(2, l);
    });
  }
  return (
    (o.$$set = (p) => {
      "isShortcutsPopupClosed" in p && t(0, (n = p.isShortcutsPopupClosed));
    }),
    [n, i, l, r, c, a]
  );
}
var ii = class extends E {
    constructor(e) {
      super(), q(this, e, rd, ld, T, { isShortcutsPopupClosed: 0 }, id);
    }
  },
  Rr = ii;
A();
A();
function ad(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h, b;
  return {
    c() {
      (e = G("svg")),
        (t = G("g")),
        (n = G("circle")),
        (i = G("path")),
        (l = G("path")),
        (r = G("path")),
        (c = G("path")),
        (a = G("path")),
        (p = G("path")),
        (u = G("path")),
        (d = G("path")),
        (m = G("defs")),
        (g = G("clipPath")),
        (h = G("rect")),
        s(n, "cx", "25"),
        s(n, "cy", "25"),
        s(n, "r", "25"),
        s(n, "fill", "white"),
        s(n, "fill-opacity", o[2]),
        s(
          i,
          "d",
          "M15.2293 14.7179C14.8297 15.1149 14.1818 15.1149 13.7822 14.7179L12.7937 13.7356C12.3941 13.3386 12.3941 12.6948 12.7937 12.2978C13.1933 11.9007 13.8412 11.9007 14.2408 12.2978L15.2293 13.28C15.629 13.6771 15.629 14.3208 15.2293 14.7179Z"
        ),
        s(i, "fill", "currentColor"),
        s(
          l,
          "d",
          "M34.7673 13.2803C34.3676 13.6773 34.3677 14.3211 34.7673 14.7181C35.1669 15.1151 35.8148 15.1151 36.2144 14.7181L37.2029 13.7359C37.6025 13.3388 37.6025 12.6951 37.2029 12.298C36.8033 11.901 36.1554 11.901 35.7558 12.298L34.7673 13.2803Z"
        ),
        s(l, "fill", "currentColor"),
        s(
          r,
          "d",
          "M9 21.7456C9 21.1841 9.45813 20.7289 10.0233 20.7289H11.9767C12.5419 20.7289 13 21.1841 13 21.7456C13 22.3071 12.5419 22.7623 11.9767 22.7623H10.0233C9.45813 22.7623 9 22.3071 9 21.7456Z"
        ),
        s(r, "fill", "currentColor"),
        s(
          c,
          "d",
          "M37 21.7456C37 21.1841 37.4581 20.7289 38.0233 20.7289H39.9767C40.5419 20.7289 41 21.1841 41 21.7456C41 22.3071 40.5419 22.7623 39.9767 22.7623H38.0233C37.4581 22.7623 37 22.3071 37 21.7456Z"
        ),
        s(c, "fill", "currentColor"),
        s(
          a,
          "d",
          "M15.2283 30.2799C15.6279 29.8829 15.6279 29.2391 15.2283 28.8421C14.8287 28.4451 14.1808 28.4451 13.7812 28.8421L12.7926 29.8243C12.393 30.2214 12.393 30.8651 12.7926 31.2622C13.1922 31.6592 13.8401 31.6592 14.2397 31.2622L15.2283 30.2799Z"
        ),
        s(a, "fill", "currentColor"),
        s(
          p,
          "d",
          "M34.8387 28.8423C35.2383 28.4453 35.8861 28.4453 36.2858 28.8423L37.2743 29.8246C37.6739 30.2216 37.6739 30.8654 37.2743 31.2624C36.8747 31.6595 36.2268 31.6595 35.8272 31.2624L34.8387 30.2802C34.439 29.8831 34.439 29.2394 34.8387 28.8423Z"
        ),
        s(p, "fill", "currentColor"),
        s(
          u,
          "d",
          "M26.2786 40H23.7445C22.6267 40 21.6545 39.2388 21.393 38.159L20.7311 35.4251H29.2534L28.6375 38.1276C28.388 39.2226 27.4086 40 26.2786 40Z"
        ),
        s(u, "fill", "currentColor"),
        s(
          d,
          "d",
          "M19.7474 31.3621L20.1716 33.1144H29.7799L30.1082 31.6737C30.3222 30.7345 30.9379 29.9414 31.6243 29.2615C32.9012 27.9966 34.3504 25.7302 34.3504 22.5313C34.3504 17.1705 29.2806 13.4734 24.955 13.4734C20.6295 13.4734 15.6527 17.0781 15.6527 22.5313C15.6527 25.953 17.2455 28.2716 18.5235 29.4694C19.0823 29.993 19.5677 30.62 19.7474 31.3621Z"
        ),
        s(d, "fill", "currentColor"),
        s(t, "clip-path", "url(#clip0_2767_104400)"),
        s(h, "width", "50"),
        s(h, "height", "50"),
        s(h, "fill", "white"),
        s(g, "id", "clip0_2767_104400"),
        s(e, "class", (b = `icon ${o[3]}`)),
        s(e, "width", o[0]),
        s(e, "height", o[1]),
        s(e, "viewBox", "0 0 50 50"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(w, S) {
      y(w, e, S),
        f(e, t),
        f(t, n),
        f(t, i),
        f(t, l),
        f(t, r),
        f(t, c),
        f(t, a),
        f(t, p),
        f(t, u),
        f(t, d),
        f(e, m),
        f(m, g),
        f(g, h);
    },
    p(w, [S]) {
      S & 4 && s(n, "fill-opacity", w[2]),
        S & 8 && b !== (b = `icon ${w[3]}`) && s(e, "class", b),
        S & 1 && s(e, "width", w[0]),
        S & 2 && s(e, "height", w[1]);
    },
    i: j,
    o: j,
    d(w) {
      w && C(e);
    },
  };
}
function sd(o, e, t) {
  let { width: n = "100%" } = e,
    { height: i = "100%" } = e,
    { circleOpacity: l = 0.08 } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (c) => {
      "width" in c && t(0, (n = c.width)),
        "height" in c && t(1, (i = c.height)),
        "circleOpacity" in c && t(2, (l = c.circleOpacity)),
        "className" in c && t(3, (r = c.className));
    }),
    [n, i, l, r]
  );
}
var oi = class extends E {
    constructor(e) {
      super(),
        q(this, e, sd, ad, T, {
          width: 0,
          height: 1,
          circleOpacity: 2,
          className: 3,
        });
    }
  },
  Ur = oi;
A();
function cd(o) {
  let e;
  return {
    c() {
      (e = k("p")),
        (e.textContent = `${M("walkthrough_final__description_explore")}`);
    },
    m(t, n) {
      y(t, e, n);
    },
    p: j,
    d(t) {
      t && C(e);
    },
  };
}
function pd(o) {
  let e, t;
  return (
    (e = new Di({
      props: {
        header: M("walkthrough_final__title_explore"),
        buttonText: M("walkthrough_final__button_text_explore"),
        hasSkip: !0,
        arrowPosition: { offset: 160, dir: "bottom" },
        $$slots: { default: [cd] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("confirm", o[0]),
    e.$on("cancel", o[1]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function ud(o) {
  let e, t, n;
  return (
    (t = new Ie({
      props: {
        width: li,
        minWidth: li,
        maxWidth: li,
        $$slots: { default: [pd] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = k("div")), B(t.$$.fragment), s(e, "class", "wrap");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p(i, [l]) {
        let r = {};
        l & 4 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
var li = 320;
function fd(o) {
  function e(n) {
    pe.call(this, o, n);
  }
  function t(n) {
    pe.call(this, o, n);
  }
  return [e, t];
}
var ri = class extends E {
    constructor(e) {
      super(), q(this, e, fd, ud, T, {});
    }
  },
  Wr = ri;
function dd(o) {
  R(
    o,
    "svelte-2xdpuh",
    ".explore-sidekick.svelte-2xdpuh{padding:8px 8px 4px;min-width:300px;max-height:80vh;overflow:auto}.explore-sidekick-button-wrapper.svelte-2xdpuh{position:relative;background:#000;border-radius:60px;min-width:300px;cursor:pointer;color:var(--explore-sidekick-button-wrapper-color)}.explore-sidekick-button-wrapper.no-progress.svelte-2xdpuh{min-width:auto}.explore-sidekick-icon.svelte-2xdpuh{width:60px;height:60px;padding:5px}.explore-sidekick-button.svelte-2xdpuh{display:flex}.title.svelte-2xdpuh{display:flex;margin-bottom:4px;font-size:16px;line-height:19px;font-weight:600;-webkit-font-smoothing:antialiased}.progress.svelte-2xdpuh{margin:13px 19px 19px 7px;width:100%}.progress-percentage.svelte-2xdpuh{margin-left:auto;font-weight:400}.popup-header.svelte-2xdpuh{padding:15px 11px 11px}.popup-title.svelte-2xdpuh{display:inline-block;font-size:18px;line-height:21px;margin-bottom:15px;font-weight:600}.walkthrough-popup.svelte-2xdpuh{position:absolute;top:-200px;right:0}"
  );
}
function Or(o) {
  let e, t, n, i, l, r, c, a, p, u;
  return (
    (p = new zt({
      props: {
        currentProgress: o[0],
        maxProgress: 100,
        bgColor: "blue",
        transitionTimeInMs: 300,
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (n = k("span")),
          (n.textContent = `${M("ntp_help__explore")} Sidekick`),
          (i = x()),
          (l = k("span")),
          (r = V(o[0])),
          (c = V("%")),
          (a = x()),
          B(p.$$.fragment),
          s(l, "class", "progress-percentage svelte-2xdpuh"),
          s(t, "class", "title svelte-2xdpuh"),
          s(e, "class", "progress svelte-2xdpuh"),
          s(e, "data-testid", "launchpad-footer.explore-button.progress"),
          s(e, "data-qa-progress", o[0]);
      },
      m(d, m) {
        y(d, e, m),
          f(e, t),
          f(t, n),
          f(t, i),
          f(t, l),
          f(l, r),
          f(l, c),
          f(e, a),
          P(p, e, null),
          (u = !0);
      },
      p(d, m) {
        (!u || m & 1) && Y(r, d[0]);
        let g = {};
        m & 1 && (g.currentProgress = d[0]),
          p.$set(g),
          (!u || m & 1) && s(e, "data-qa-progress", d[0]);
      },
      i(d) {
        u || (_(p.$$.fragment, d), (u = !0));
      },
      o(d) {
        v(p.$$.fragment, d), (u = !1);
      },
      d(d) {
        d && C(e), z(p);
      },
    }
  );
}
function Zr(o) {
  let e, t;
  return (
    (e = new je({
      props: {
        anchorElement: o[2],
        isTop: !0,
        marginBottom: 4,
        $$slots: { default: [md] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[8]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 4 && (l.anchorElement = n[2]),
          i & 65537 && (l.$$scope = { dirty: i, ctx: n }),
          e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function md(o) {
  let e, t, n, i, l, r, c, a;
  return (
    (l = new zt({
      props: {
        currentProgress: o[0],
        maxProgress: 100,
        bgColor: "blue",
        transitionTimeInMs: 300,
      },
    })),
    (c = new co({ props: { gateway: $ } })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (n = k("span")),
          (n.textContent = "Explore Sidekick"),
          (i = x()),
          B(l.$$.fragment),
          (r = x()),
          B(c.$$.fragment),
          s(n, "class", "popup-title svelte-2xdpuh"),
          s(t, "class", "popup-header svelte-2xdpuh"),
          s(e, "class", "explore-sidekick svelte-2xdpuh");
      },
      m(p, u) {
        y(p, e, u),
          f(e, t),
          f(t, n),
          f(t, i),
          P(l, t, null),
          f(e, r),
          P(c, e, null),
          (a = !0);
      },
      p(p, u) {
        let d = {};
        u & 1 && (d.currentProgress = p[0]), l.$set(d);
      },
      i(p) {
        a || (_(l.$$.fragment, p), _(c.$$.fragment, p), (a = !0));
      },
      o(p) {
        v(l.$$.fragment, p), v(c.$$.fragment, p), (a = !1);
      },
      d(p) {
        p && C(e), z(l), z(c);
      },
    }
  );
}
function Kr(o) {
  let e, t, n;
  return (
    (t = new Wr({})),
    t.$on("confirm", o[9]),
    t.$on("cancel", o[10]),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "walkthrough-popup svelte-2xdpuh");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p: j,
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function _d(o) {
  let e, t, n, i, l, r, c, a, p, u, d;
  i = new Ur({
    props: { circleOpacity: o[4] ? 0 : 0.08, width: "50", height: "50" },
  });
  let m = !o[4] && Or(o),
    g = o[1] && Zr(o),
    h = o[3]?.step === "final" && Kr(o);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (n = k("div")),
        B(i.$$.fragment),
        (l = x()),
        m && m.c(),
        (r = x()),
        g && g.c(),
        (c = x()),
        h && h.c(),
        (a = ae()),
        s(n, "class", "explore-sidekick-icon svelte-2xdpuh"),
        s(t, "class", "explore-sidekick-button svelte-2xdpuh"),
        s(t, "data-testid", "launchpad-footer.explore-button"),
        s(e, "class", "explore-sidekick-button-wrapper svelte-2xdpuh"),
        te(e, "no-progress", o[4]);
    },
    m(b, w) {
      y(b, e, w),
        f(e, t),
        f(t, n),
        P(i, n, null),
        f(t, l),
        m && m.m(t, null),
        o[14](t),
        f(e, r),
        g && g.m(e, null),
        y(b, c, w),
        h && h.m(b, w),
        y(b, a, w),
        (p = !0),
        u || ((d = Q(t, "click", o[7])), (u = !0));
    },
    p(b, [w]) {
      let S = {};
      w & 16 && (S.circleOpacity = b[4] ? 0 : 0.08),
        i.$set(S),
        b[4]
          ? m &&
            (U(),
            v(m, 1, 1, () => {
              m = null;
            }),
            W())
          : m
          ? (m.p(b, w), w & 16 && _(m, 1))
          : ((m = Or(b)), m.c(), _(m, 1), m.m(t, null)),
        b[1]
          ? g
            ? (g.p(b, w), w & 2 && _(g, 1))
            : ((g = Zr(b)), g.c(), _(g, 1), g.m(e, null))
          : g &&
            (U(),
            v(g, 1, 1, () => {
              g = null;
            }),
            W()),
        (!p || w & 16) && te(e, "no-progress", b[4]),
        b[3]?.step === "final"
          ? h
            ? (h.p(b, w), w & 8 && _(h, 1))
            : ((h = Kr(b)), h.c(), _(h, 1), h.m(a.parentNode, a))
          : h &&
            (U(),
            v(h, 1, 1, () => {
              h = null;
            }),
            W());
    },
    i(b) {
      p || (_(i.$$.fragment, b), _(m), _(g), _(h), (p = !0));
    },
    o(b) {
      v(i.$$.fragment, b), v(m), v(g), v(h), (p = !1);
    },
    d(b) {
      b && C(e),
        z(i),
        m && m.d(),
        o[14](null),
        g && g.d(),
        b && C(c),
        h && h.d(b),
        b && C(a),
        (u = !1),
        d();
    },
  };
}
var gd = 250;
function hd(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    { helpPanel: p, walkthrough: u, launchpadPopupId: d } = $.stores;
  re(o, p, (I) => t(13, (a = I))), re(o, u, (I) => t(12, (c = I)));
  let m = !1;
  d.subscribe((I) => {
    I?.openPopup !== "explore-sidekick"
      ? t(1, (m = !1))
      : (g.focus(), t(1, (m = !0)));
  });
  let g,
    h = () => {
      $.actions.sendAnalyticsEvent(
        m
          ? "launchpad.explore-sidekick-closed"
          : "launchpad.explore-sidekick-opened",
        void 0
      ),
        t(1, (m = !m));
    },
    b = (I) => {
      (I.detail.nativeEvent && Ii(I.detail.nativeEvent)) || h();
    },
    w = () => {
      l &&
        (setTimeout(() => {
          h(), g.focus();
        }, gd),
        $.actions.confirmWalkthrough(l));
    },
    S = () => {
      l && $.actions.switchWalkthrough(!1);
    };
  function L(I) {
    fe[I ? "unshift" : "push"](() => {
      (g = I), t(2, g);
    });
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 8192) {
        e: t(11, (n = a?.progress));
      }
      if (o.$$.dirty & 2048) {
        e: t(0, (i = n ? Math.floor(n * 100) : 0));
      }
      if (o.$$.dirty & 4096) {
        e: t(3, (l = c?.currentStep ?? null));
      }
      if (o.$$.dirty & 2049) {
        e: t(4, (r = i === 100 || typeof n > "u"));
      }
    }),
    [i, m, g, l, r, p, u, h, b, w, S, n, c, a, L]
  );
}
var ai = class extends E {
    constructor(e) {
      super(), q(this, e, hd, _d, T, {}, dd);
    }
  },
  Yr = ai;
A();
function bd(o) {
  R(
    o,
    "svelte-g58mof",
    ".banner.svelte-g58mof{padding:26px 35px;display:flex;flex-direction:column;justify-content:space-between;column-gap:34px;background-color:rgb(0 0 0 / 0.4);border-radius:8px;position:relative}.title.svelte-g58mof{color:rgb(255 255 255 / 0.7)}.content.svelte-g58mof{display:flex;align-items:center;justify-content:space-between;margin-top:12px}.progress-bar.svelte-g58mof{width:250px;position:relative;max-width:250px}.icons.svelte-g58mof{width:240px;display:flex;align-items:center;min-width:240px}.fake-input.svelte-g58mof{background:rgba(255 255 255 / 0.16);border-radius:6px;padding:5px 10px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:260px;color:rgba(255 255 255 / 0.16)}.fake-input-text.svelte-g58mof{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.fake-input-btn.svelte-g58mof{font-weight:700;font-size:12px}.close-button.svelte-g58mof{color:rgba(255 255 255 / 0.5);position:absolute;top:6px;right:6px;cursor:pointer;outline:none;border:none}.invitation-stats.svelte-g58mof{display:flex;flex-direction:row;align-items:center;column-gap:7px;position:absolute;top:-38px;right:0}.v-delimiter.svelte-g58mof{width:0;height:12px;border:0.5px solid rgba(0 0 0 / 0.08)}"
  );
}
function vd(o) {
  let e,
    t =
      (o[0]
        ? M("ntp_invitation_banner__socials_copied")
        : M("ntp_invitation_banner__socials_copy")) + "",
    n;
  return {
    c() {
      (e = k("span")),
        (n = V(t)),
        s(e, "class", "fake-input-btn svelte-g58mof");
    },
    m(i, l) {
      y(i, e, l), f(e, n);
    },
    p(i, l) {
      l & 1 &&
        t !==
          (t =
            (i[0]
              ? M("ntp_invitation_banner__socials_copied")
              : M("ntp_invitation_banner__socials_copy")) + "") &&
        Y(n, t);
    },
    d(i) {
      i && C(e);
    },
  };
}
function kd(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b,
    w,
    S,
    L,
    I = M("ntp_billing_popup__invites_stats_activations") + "",
    N,
    H,
    O,
    F,
    D,
    J,
    Z,
    ee = M("ntp_billing_popup__invites_stats_downloads") + "",
    X,
    ie,
    oe,
    le,
    se,
    de,
    ue,
    Ve,
    Be;
  return (
    (p = new ce({
      props: { $$slots: { default: [vd] }, $$scope: { ctx: o } },
    })),
    p.$on("click", o[6]),
    (m = new ft({ props: { invitationLink: o[1] } })),
    (oe = new ut({
      props: { isGreyStyled: !0, activations: o[4], breakpoints: o[3] },
    })),
    (de = new De({ props: { width: "14px", height: "14px" } })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (t.textContent = `${M("ntp_launchpad_invitation_banner__text")}`),
          (n = x()),
          (i = k("div")),
          (l = k("div")),
          (r = k("span")),
          (c = V(o[1])),
          (a = x()),
          B(p.$$.fragment),
          (u = x()),
          (d = k("div")),
          B(m.$$.fragment),
          (g = x()),
          (h = k("div")),
          (b = k("div")),
          (w = k("div")),
          (S = V(o[4])),
          (L = x()),
          (N = V(I)),
          (H = x()),
          (O = k("span")),
          (F = x()),
          (D = k("div")),
          (J = V(o[2])),
          (Z = x()),
          (X = V(ee)),
          (ie = x()),
          B(oe.$$.fragment),
          (le = x()),
          (se = k("button")),
          B(de.$$.fragment),
          s(t, "class", "title svelte-g58mof"),
          s(r, "class", "fake-input-text svelte-g58mof"),
          s(l, "class", "fake-input svelte-g58mof"),
          s(d, "class", "icons svelte-g58mof"),
          s(w, "class", "sign-ups"),
          s(O, "class", "v-delimiter svelte-g58mof"),
          s(D, "class", "downloads"),
          s(b, "class", "invitation-stats svelte-g58mof"),
          s(h, "class", "progress-bar svelte-g58mof"),
          s(i, "class", "content svelte-g58mof"),
          s(se, "class", "close-button svelte-g58mof"),
          s(e, "class", "banner svelte-g58mof");
      },
      m(me, ne) {
        y(me, e, ne),
          f(e, t),
          f(e, n),
          f(e, i),
          f(i, l),
          f(l, r),
          f(r, c),
          f(l, a),
          P(p, l, null),
          f(i, u),
          f(i, d),
          P(m, d, null),
          f(i, g),
          f(i, h),
          f(h, b),
          f(b, w),
          f(w, S),
          f(w, L),
          f(w, N),
          f(b, H),
          f(b, O),
          f(b, F),
          f(b, D),
          f(D, J),
          f(D, Z),
          f(D, X),
          f(h, ie),
          P(oe, h, null),
          f(e, le),
          f(e, se),
          P(de, se, null),
          (ue = !0),
          Ve || ((Be = Q(se, "click", o[7])), (Ve = !0));
      },
      p(me, [ne]) {
        (!ue || ne & 2) && Y(c, me[1]);
        let _e = {};
        ne & 513 && (_e.$$scope = { dirty: ne, ctx: me }), p.$set(_e);
        let Ge = {};
        ne & 2 && (Ge.invitationLink = me[1]),
          m.$set(Ge),
          (!ue || ne & 16) && Y(S, me[4]),
          (!ue || ne & 4) && Y(J, me[2]);
        let Ne = {};
        ne & 16 && (Ne.activations = me[4]),
          ne & 8 && (Ne.breakpoints = me[3]),
          oe.$set(Ne);
      },
      i(me) {
        ue ||
          (_(p.$$.fragment, me),
          _(m.$$.fragment, me),
          _(oe.$$.fragment, me),
          _(de.$$.fragment, me),
          (ue = !0));
      },
      o(me) {
        v(p.$$.fragment, me),
          v(m.$$.fragment, me),
          v(oe.$$.fragment, me),
          v(de.$$.fragment, me),
          (ue = !1);
      },
      d(me) {
        me && C(e), z(p), z(m), z(oe), z(de), (Ve = !1), Be();
      },
    }
  );
}
function wd(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a = $.stores.billingDetailsPopupState;
  re(o, a, (m) => t(8, (c = m)));
  let p = !1,
    u = () => {
      t(0, (p = !0)),
        $.actions.sendAnalyticsEvent(
          "launchpad.invitations.copy-link-button-clicked",
          void 0
        ),
        window.navigator.clipboard.writeText(n).catch(xe);
    },
    d = () => {
      $.actions.changeWasInvitationBannerClosed();
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 256) {
        e: t(
          1,
          (n =
            c?.invitationsBlockState?.invitationLink ??
            "https://join.meetsidekick.com")
        );
      }
      if (o.$$.dirty & 256) {
        e: t(4, (i = c?.invitationsBlockState?.activations ?? 0));
      }
      if (o.$$.dirty & 256) {
        e: t(3, (l = c?.invitationsBlockState?.breakpoints ?? []));
      }
      if (o.$$.dirty & 256) {
        e: t(2, (r = c?.invitationsBlockState?.downloads ?? 0));
      }
    }),
    [p, n, r, l, i, a, u, d, c]
  );
}
var si = class extends E {
    constructor(e) {
      super(), q(this, e, wd, kd, T, {}, bd);
    }
  },
  Jr = si;
function yd(o) {
  R(
    o,
    "svelte-164xjpl",
    `.launchpad.svelte-164xjpl.svelte-164xjpl{--spinner-color:var(--border-color);--dropdown-button-color:var(--text-primary-color);--dropdown-button-background:var(--launchpad-widget-background);--dropdown-button-background-hover:var(--launchpad-widget-row-hover);--dropdown-menu-color:var(--text-primary-color);--dropdown-menu-border:transparent;--dropdown-menu-background:var(--launchpad-widget-row-hover);--dropdown-menu-background-hover:var(--launchpad-widget-row-hover);--dropdown-menu-background-selected:#2975c1;color:var(--launchpad-text-primary-color);min-height:100vh;background-size:cover;background-attachment:fixed;overflow-x:hidden;transition:all 0.1s ease 0s;user-select:none}.launchpad-thumbnail-background.svelte-164xjpl.svelte-164xjpl{background-color:var(--background-primary);background-repeat:no-repeat;background-size:cover;position:fixed;inset:0;z-index:-1;transform:translateZ(0);pointer-events:none}.is-photo-background.svelte-164xjpl.svelte-164xjpl::before{content:'';background-image:linear-gradient(0deg, rgb(0 0 0 / 0.5) 0%, transparent 24.29%),
      linear-gradient(180deg, rgb(0 0 0 / 0.3) 0%, transparent 20.4%),
      linear-gradient(180deg, rgb(0 0 0 / 0.5) 0%, transparent 100%);width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:0;pointer-events:none}.blur.svelte-164xjpl.svelte-164xjpl{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:0;backdrop-filter:blur(10px);pointer-events:none}.wrapper.svelte-164xjpl.svelte-164xjpl{opacity:0.99999}main.svelte-164xjpl.svelte-164xjpl{width:var(--page-max-width);margin:0 auto 60px}.invitation-banner.svelte-164xjpl.svelte-164xjpl{margin-top:30px}main.svelte-164xjpl header.svelte-164xjpl{margin-bottom:45px}.background-image-author.svelte-164xjpl a.svelte-164xjpl{color:rgb(255 255 255 / 0.7);font-size:12px;line-height:16px;position:fixed;bottom:18px;left:24px;text-decoration:none;z-index:1}.background-image-author.svelte-164xjpl span.svelte-164xjpl{color:#fff}.launchpad-footer-buttons.svelte-164xjpl.svelte-164xjpl{position:fixed;right:20px;bottom:20px;display:flex;column-gap:20px;z-index:10000}`
  );
}
function Xr(o) {
  let e;
  return {
    c() {
      (e = k("div")), s(e, "class", "blur svelte-164xjpl");
    },
    m(t, n) {
      y(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function Qr(o) {
  let e, t;
  return (
    (e = new Ul({ props: { updateInfo: o[14] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 16384 && (l.updateInfo = n[14]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function ea(o) {
  let e, t, n;
  return (
    (t = new Jr({})),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "invitation-banner svelte-164xjpl");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function ta(o) {
  let e, t;
  return (
    (e = new Nl({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function na(o) {
  let e,
    t,
    n = M("ntp__photo") + "",
    i,
    l,
    r,
    c;
  return {
    c() {
      (e = k("div")),
        (t = k("a")),
        (i = V(n)),
        (l = x()),
        (r = k("span")),
        (c = V(o[5])),
        s(r, "class", "svelte-164xjpl"),
        s(t, "href", o[4]),
        s(t, "rel", "noopener noreferrer"),
        s(t, "target", "_blank"),
        s(t, "class", "svelte-164xjpl"),
        s(e, "class", "background-image-author svelte-164xjpl");
    },
    m(a, p) {
      y(a, e, p), f(e, t), f(t, i), f(t, l), f(t, r), f(r, c);
    },
    p(a, p) {
      p & 32 && Y(c, a[5]), p & 16 && s(t, "href", a[4]);
    },
    d(a) {
      a && C(e);
    },
  };
}
function ia(o) {
  let e, t;
  return (
    (e = new Rr({ props: { isShortcutsPopupClosed: o[11] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      p(n, i) {
        let l = {};
        i & 2048 && (l.isShortcutsPopupClosed = n[11]), e.$set(l);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Cd(o) {
  let e, t;
  return (
    (e = new Tr({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function xd(o) {
  let e, t;
  return (
    (e = new Yr({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function Sd(o) {
  let e,
    t,
    n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b,
    w,
    S,
    L,
    I,
    N,
    H,
    O,
    F,
    D,
    J,
    Z,
    ee,
    X,
    ie = o[7] && Xr(o);
  (r = new jl({})), (u = new _o({})), (m = new yo({}));
  let oe = o[14] && Qr(o),
    le = !o[9] && ea(o),
    se = o[8] && ta(o);
  S = new Ir({});
  let de = o[5] && o[4] && o[0] && na(o),
    ue = o[12] && ia(o),
    Ve = [xd, Cd],
    Be = [];
  function me(ne, _e) {
    return ne[10] ? 0 : 1;
  }
  return (
    (O = me(o, -1)),
    (F = Be[O] = Ve[O](o)),
    (J = new jr({ props: { userInfo: o[13], userId: o[1] } })),
    (ee = new Dl({})),
    {
      c() {
        (e = k("div")),
          (t = x()),
          (n = k("div")),
          ie && ie.c(),
          (i = x()),
          (l = k("div")),
          B(r.$$.fragment),
          (c = x()),
          (a = k("main")),
          (p = k("header")),
          B(u.$$.fragment),
          (d = x()),
          B(m.$$.fragment),
          (g = x()),
          oe && oe.c(),
          (h = x()),
          le && le.c(),
          (b = x()),
          se && se.c(),
          (w = x()),
          B(S.$$.fragment),
          (L = x()),
          de && de.c(),
          (I = x()),
          (N = k("div")),
          ue && ue.c(),
          (H = x()),
          F.c(),
          (D = x()),
          B(J.$$.fragment),
          (Z = x()),
          B(ee.$$.fragment),
          s(e, "class", "launchpad-thumbnail-background svelte-164xjpl"),
          Se(e, "background-image", o[3]),
          s(p, "class", "svelte-164xjpl"),
          s(a, "class", "svelte-164xjpl"),
          s(N, "class", "launchpad-footer-buttons svelte-164xjpl"),
          s(l, "class", "wrapper svelte-164xjpl"),
          s(n, "class", "launchpad svelte-164xjpl"),
          s(n, "data-testid", "launchpad"),
          te(n, "has-background", o[0]),
          te(n, "is-photo-background", o[6]),
          Se(n, "background-image", o[2]);
      },
      m(ne, _e) {
        y(ne, e, _e),
          y(ne, t, _e),
          y(ne, n, _e),
          ie && ie.m(n, null),
          f(n, i),
          f(n, l),
          P(r, l, null),
          f(l, c),
          f(l, a),
          f(a, p),
          P(u, p, null),
          f(p, d),
          P(m, p, null),
          f(p, g),
          oe && oe.m(p, null),
          f(p, h),
          le && le.m(p, null),
          f(a, b),
          se && se.m(a, null),
          f(a, w),
          P(S, a, null),
          f(l, L),
          de && de.m(l, null),
          f(l, I),
          f(l, N),
          ue && ue.m(N, null),
          f(N, H),
          Be[O].m(N, null),
          f(N, D),
          P(J, N, null),
          y(ne, Z, _e),
          P(ee, ne, _e),
          (X = !0);
      },
      p(ne, [_e]) {
        _e & 8 && Se(e, "background-image", ne[3]),
          ne[7]
            ? ie || ((ie = Xr(ne)), ie.c(), ie.m(n, i))
            : ie && (ie.d(1), (ie = null)),
          ne[14]
            ? oe
              ? (oe.p(ne, _e), _e & 16384 && _(oe, 1))
              : ((oe = Qr(ne)), oe.c(), _(oe, 1), oe.m(p, h))
            : oe &&
              (U(),
              v(oe, 1, 1, () => {
                oe = null;
              }),
              W()),
          ne[9]
            ? le &&
              (U(),
              v(le, 1, 1, () => {
                le = null;
              }),
              W())
            : le
            ? _e & 512 && _(le, 1)
            : ((le = ea(ne)), le.c(), _(le, 1), le.m(p, null)),
          ne[8]
            ? se
              ? _e & 256 && _(se, 1)
              : ((se = ta(ne)), se.c(), _(se, 1), se.m(a, w))
            : se &&
              (U(),
              v(se, 1, 1, () => {
                se = null;
              }),
              W()),
          ne[5] && ne[4] && ne[0]
            ? de
              ? de.p(ne, _e)
              : ((de = na(ne)), de.c(), de.m(l, I))
            : de && (de.d(1), (de = null)),
          ne[12]
            ? ue
              ? (ue.p(ne, _e), _e & 4096 && _(ue, 1))
              : ((ue = ia(ne)), ue.c(), _(ue, 1), ue.m(N, H))
            : ue &&
              (U(),
              v(ue, 1, 1, () => {
                ue = null;
              }),
              W());
        let Ge = O;
        (O = me(ne, _e)),
          O !== Ge &&
            (U(),
            v(Be[Ge], 1, 1, () => {
              Be[Ge] = null;
            }),
            W(),
            (F = Be[O]),
            F || ((F = Be[O] = Ve[O](ne)), F.c()),
            _(F, 1),
            F.m(N, D));
        let Ne = {};
        _e & 8192 && (Ne.userInfo = ne[13]),
          _e & 2 && (Ne.userId = ne[1]),
          J.$set(Ne),
          (!X || _e & 1) && te(n, "has-background", ne[0]),
          (!X || _e & 64) && te(n, "is-photo-background", ne[6]),
          _e & 4 && Se(n, "background-image", ne[2]);
      },
      i(ne) {
        X ||
          (_(r.$$.fragment, ne),
          _(u.$$.fragment, ne),
          _(m.$$.fragment, ne),
          _(oe),
          _(le),
          _(se),
          _(S.$$.fragment, ne),
          _(ue),
          _(F),
          _(J.$$.fragment, ne),
          _(ee.$$.fragment, ne),
          (X = !0));
      },
      o(ne) {
        v(r.$$.fragment, ne),
          v(u.$$.fragment, ne),
          v(m.$$.fragment, ne),
          v(oe),
          v(le),
          v(se),
          v(S.$$.fragment, ne),
          v(ue),
          v(F),
          v(J.$$.fragment, ne),
          v(ee.$$.fragment, ne),
          (X = !1);
      },
      d(ne) {
        ne && C(e),
          ne && C(t),
          ne && C(n),
          ie && ie.d(),
          z(r),
          z(u),
          z(m),
          oe && oe.d(),
          le && le.d(),
          se && se.d(),
          z(S),
          de && de.d(),
          ue && ue.d(),
          Be[O].d(),
          z(J),
          ne && C(Z),
          z(ee, ne);
      },
    }
  );
}
var ci = "wallpaper-cached";
function Id(o, e, t) {
  let n,
    i,
    l,
    r,
    c,
    a,
    p,
    u,
    d,
    m,
    g,
    h,
    b,
    w,
    S,
    L,
    I,
    N,
    H,
    O = localStorage.getItem(ci),
    F = $.stores.launchpadMainState;
  re(o, F, (ee) => t(20, (H = ee)));
  let D = $.stores.currentWallpaper;
  re(o, D, (ee) => t(19, (N = ee)));
  let J = (ee) => `url(${ee})`;
  function Z() {
    let ee = localStorage.getItem("auth-state")?.split(".")[1];
    if (!ee) return "";
    let X = atob(ee),
      ie = vt(X);
    return ie ? ie.uuid : "";
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 1048576) {
        e: t(14, (n = H?.updateInfo));
      }
      if (o.$$.dirty & 1048576) {
        e: t(13, (i = H?.userInfo));
      }
      if (o.$$.dirty & 1048576) {
        e: t(1, (l = H?.userId ?? Z()));
      }
      if (o.$$.dirty & 1048576) {
        e: t(12, (r = !!H?.shortcutsPopupData));
      }
      if (o.$$.dirty & 1048576) {
        e: t(11, (c = H?.shortcutsPopupData?.isShortcutsPopupClosed ?? !1));
      }
      if (o.$$.dirty & 1048576) {
        e: t(10, (a = H?.isExploreSidekickNtpMode));
      }
      if (o.$$.dirty & 1048576) {
        e: t(9, (p = H?.wasInvitationBannerClosed ?? !0));
      }
      if (o.$$.dirty & 1048576) {
        e: t(8, (u = H?.shouldShowVerticalTabsBanner));
      }
      if (o.$$.dirty & 1048578) {
        e: t(
          0,
          (d =
            H?.hasBackground ??
            vt(localStorage.getItem(`${l}_app-settings`))?.showPhotoBackground)
        );
      }
      if (o.$$.dirty & 524288) {
        e: t(7, (m = N?.blur ?? !0));
      }
      if (o.$$.dirty & 524289) {
        e: t(6, (g = d && N?.groupId !== 1));
      }
      if (o.$$.dirty & 524288) {
        e: t(18, (h = N?.url ?? O));
      }
      if (o.$$.dirty & 524288) {
        e: t(17, (b = N?.thumbnailUrl ?? null));
      }
      if (o.$$.dirty & 524288) {
        e: t(5, (w = N?.author ?? null));
      }
      if (o.$$.dirty & 524288) {
        e: t(4, (S = N?.originalUrl ?? null));
      }
      if (o.$$.dirty & 131073) {
        e: t(3, (L = b && d ? J(b) : ""));
      }
      if (o.$$.dirty & 262145) {
        e: t(2, (I = h && d ? J(h) : ""));
      }
      if (o.$$.dirty & 3) {
        e: d !== void 0 &&
          localStorage.setItem(
            `${l}_app-settings`,
            JSON.stringify({ showPhotoBackground: d })
          );
      }
      if (o.$$.dirty & 131072) {
        e: b &&
          fo(b)
            .then((ee) => (ee ? mo(ee) : null))
            .then((ee) => (ee ? localStorage.setItem(ci, ee) : void 0))
            .catch((ee) => {
              if (ee instanceof Error && ee.name === "QuotaExceededError") {
                console.warn(ee), localStorage.removeItem(ci);
                return;
              }
              xe(ee);
            });
      }
    }),
    [d, l, I, L, S, w, g, m, u, p, a, c, r, i, n, F, D, b, h, N, H]
  );
}
var pi = class extends E {
    constructor(e) {
      super(), q(this, e, Id, Sd, T, {}, yd);
    }
  },
  oa = pi;
A();
A();
A();
function Bd(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h, b, w, S;
  return {
    c() {
      (e = G("svg")),
        (t = G("path")),
        (n = G("path")),
        (i = G("path")),
        (l = G("path")),
        (r = G("path")),
        (c = G("path")),
        (a = G("path")),
        (p = G("path")),
        (u = G("path")),
        (d = G("path")),
        (m = G("path")),
        (g = G("path")),
        (h = G("path")),
        (b = G("path")),
        (w = G("path")),
        (S = G("path")),
        s(
          t,
          "d",
          "M69.045 25.289c-11.307-.043-22.053 2.944-31.218 8.675-14.591 9.19-21.97 25.675-16.722 44.81 17.57 64.016 87.673 58.742 104.555 4.906 4.124-13.149-2.187-28.967-11.56-40.019-11.537-13.63-29.39-18.382-45.055-18.372Z"
        ),
        s(t, "fill", "#A2CCFF"),
        s(t, "fill-opacity", ".3"),
        s(
          n,
          "d",
          "m123.623 108.654-52.537 14.787a2.748 2.748 0 0 1-3.003-1.238l-39.84-71.702a1.56 1.56 0 0 1 1-2.363l52.538-14.786a2.741 2.741 0 0 1 2.999 1.234l39.833 71.702a1.562 1.562 0 0 1-.99 2.366Z"
        ),
        s(n, "fill", "#263238"),
        s(n, "stroke", "#000"),
        s(n, "stroke-width", ".354"),
        s(n, "stroke-miterlimit", "10"),
        s(i, "d", "M70.346 120.297s30.359-7.222 50.794-14.299l-50.794 14.299Z"),
        s(i, "fill", "#884849"),
        s(
          l,
          "d",
          "m121.14 105.998-50.794 14.299-39.288-70.705L81.85 35.297l39.289 70.701Z"
        ),
        s(l, "fill", "#fff"),
        s(l, "stroke", "#263238"),
        s(l, "stroke-width", ".354"),
        s(l, "stroke-miterlimit", "10"),
        s(
          r,
          "d",
          "m66.806 50.27 3.944-1.11M39.454 57.97l24.3-6.84M62.481 54.663l9.797-2.758M47.468 58.89l12.34-3.473M40.978 60.715l4.198-1.182M54.718 60.025l19.087-5.372M42.506 63.463l8.014-2.257"
        ),
        s(r, "stroke", "#263238"),
        s(r, "stroke-width", ".354"),
        s(r, "stroke-miterlimit", "10"),
        s(
          c,
          "d",
          "M84.493 48.202a4.544 4.544 0 0 0-4.951-2.044c-1.829.516-2.568 2.263-1.655 3.908a4.534 4.534 0 0 0 4.95 2.044c1.812-.513 2.569-2.264 1.656-3.908Z"
        ),
        s(c, "fill", "#fff"),
        s(c, "stroke", "#263238"),
        s(c, "stroke-width", ".354"),
        s(c, "stroke-miterlimit", "10"),
        s(
          a,
          "d",
          "m50.202 69.104-3.944 1.11M77.554 61.404l-24.3 6.84M57.579 70.204l-9.797 2.758M72.592 65.977l-12.34 3.473M79.082 64.152l-4.198 1.182M68.394 70.334 49.31 75.707M80.61 66.897l-8.018 2.256"
        ),
        s(a, "stroke", "#263238"),
        s(a, "stroke-width", ".354"),
        s(a, "stroke-miterlimit", "10"),
        s(
          p,
          "d",
          "M91.298 60.45a4.534 4.534 0 0 0-4.952-2.045c-1.828.513-2.567 2.264-1.655 3.89a4.531 4.531 0 0 0 4.951 2.045c1.825-.499 2.568-2.25 1.656-3.89Z"
        ),
        s(p, "fill", "#fff"),
        s(p, "stroke", "#263238"),
        s(p, "stroke-width", ".354"),
        s(p, "stroke-miterlimit", "10"),
        s(
          u,
          "d",
          "m80.415 74.759 3.944-1.11M53.063 82.458l24.3-6.84M76.09 79.155l9.796-2.759M61.077 83.381l12.34-3.476M54.587 85.206l4.198-1.181M68.327 84.513l19.084-5.369M56.115 87.954l8.014-2.256"
        ),
        s(u, "stroke", "#263238"),
        s(u, "stroke-width", ".354"),
        s(u, "stroke-miterlimit", "10"),
        s(
          d,
          "d",
          "M98.321 75.01c.606-1.542-.484-3.413-2.434-4.18-1.95-.767-4.023-.139-4.63 1.403-.605 1.541.485 3.413 2.435 4.18 1.95.766 4.023.138 4.63-1.403Z"
        ),
        s(d, "fill", "#fff"),
        s(d, "stroke", "#263238"),
        s(d, "stroke-width", ".354"),
        s(d, "stroke-miterlimit", "10"),
        s(
          m,
          "d",
          "m63.81 93.595-3.943 1.11M91.163 85.896l-24.3 6.84M71.188 94.695l-9.796 2.755M86.201 90.469l-12.34 3.473M92.691 88.64l-4.198 1.181M82.003 94.826l-19.084 5.372M94.215 91.388l-8.014 2.256"
        ),
        s(m, "stroke", "#263238"),
        s(m, "stroke-width", ".354"),
        s(m, "stroke-miterlimit", "10"),
        s(
          g,
          "d",
          "M104.903 84.937a4.536 4.536 0 0 0-4.951-2.044c-1.829.516-2.568 2.264-1.655 3.908a4.534 4.534 0 0 0 4.951 2.044c1.829-.502 2.571-2.27 1.655-3.908Z"
        ),
        s(g, "fill", "#fff"),
        s(g, "stroke", "#263238"),
        s(g, "stroke-width", ".354"),
        s(g, "stroke-miterlimit", "10"),
        s(
          h,
          "d",
          "m94.024 99.25 3.944-1.11M66.672 106.949l24.3-6.839M89.7 103.643l9.796-2.755M74.686 107.869l12.34-3.473M68.196 109.697l4.198-1.184M81.936 109.004l19.084-5.372M69.724 112.442l8.014-2.256"
        ),
        s(h, "stroke", "#263238"),
        s(h, "stroke-width", ".354"),
        s(h, "stroke-miterlimit", "10"),
        s(
          b,
          "d",
          "M111.929 99.498c.606-1.541-.484-3.412-2.434-4.18-1.951-.766-4.023-.138-4.629 1.404-.606 1.541.484 3.412 2.434 4.179 1.951.767 4.023.139 4.629-1.403Z"
        ),
        s(b, "fill", "#fff"),
        s(b, "stroke", "#263238"),
        s(b, "stroke-width", ".354"),
        s(b, "stroke-miterlimit", "10"),
        s(
          w,
          "d",
          "m64.656 36.496-6.677 1.878c-.506.02-1.061-.018-1.217-.276-.354-.665.1-1.288.24-1.875a2.688 2.688 0 0 0-.293-1.99 4.658 4.658 0 0 0-5.09-2.098c-1.874.53-2.63 2.324-1.697 4.007a4.39 4.39 0 0 0 1.967 1.768s1.354.605 1.627 1.093c.145.258-.234.562-.62.792L45.7 41.822a1.719 1.719 0 0 0-1.1 2.6l.973 1.746 23.367-6.574-.973-1.75a3.017 3.017 0 0 0-3.31-1.348ZM52.762 34.21a1.49 1.49 0 0 1 1.63.672.844.844 0 0 1-.544 1.28 1.485 1.485 0 0 1-1.627-.668.849.849 0 0 1 .541-1.284Z"
        ),
        s(w, "fill", "#58AFF3"),
        s(w, "stroke", "#263238"),
        s(w, "stroke-width", ".354"),
        s(w, "stroke-miterlimit", "10"),
        s(
          S,
          "d",
          "m79.064 48.407 2.883 2.013 2.97-6.66M85.763 60.464l2.882 2.008 2.971-6.656"
        ),
        s(S, "stroke", "#58AFF3"),
        s(S, "stroke-width", "2.122"),
        s(S, "stroke-linecap", "round"),
        s(S, "stroke-linejoin", "round"),
        s(e, "width", "145"),
        s(e, "height", "146"),
        s(e, "fill", "none"),
        s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(L, I) {
      y(L, e, I),
        f(e, t),
        f(e, n),
        f(e, i),
        f(e, l),
        f(e, r),
        f(e, c),
        f(e, a),
        f(e, p),
        f(e, u),
        f(e, d),
        f(e, m),
        f(e, g),
        f(e, h),
        f(e, b),
        f(e, w),
        f(e, S);
    },
    p: j,
    i: j,
    o: j,
    d(L) {
      L && C(e);
    },
  };
}
var ui = class extends E {
    constructor(e) {
      super(), q(this, e, null, Bd, T, {});
    }
  },
  la = ui;
function Pd(o) {
  R(
    o,
    "svelte-ex8gh0",
    ".container.svelte-ex8gh0.svelte-ex8gh0{position:fixed;inset:0;padding:60px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;z-index:999;pointer-events:none}.pmf-survey.svelte-ex8gh0.svelte-ex8gh0{pointer-events:all;display:flex;align-items:center;position:relative}.image.svelte-ex8gh0.svelte-ex8gh0{flex:0 0 auto}.content.svelte-ex8gh0.svelte-ex8gh0{font-size:14px;line-height:1.5;margin:0 0 0 10px;padding:22px 30px 22px 16px;max-width:555px}.content.svelte-ex8gh0 p.svelte-ex8gh0{margin-top:0}.close-button.svelte-ex8gh0.svelte-ex8gh0{position:absolute;z-index:1;top:4px;right:4px;display:flex;padding:8px}@media(min-width: 640px){.content.svelte-ex8gh0.svelte-ex8gh0{font-size:16px}}"
  );
}
function zd(o) {
  let e;
  return {
    c() {
      e = V("Sure thing!");
    },
    m(t, n) {
      y(t, e, n);
    },
    d(t) {
      t && C(e);
    },
  };
}
function Md(o) {
  let e, t, n, i, l, r, c, a, p, u, d, m, g, h;
  return (
    (n = new la({})),
    (a = new ce({
      props: {
        mod: "primary",
        openInNewTab: !0,
        href: o[0],
        $$slots: { default: [zd] },
        $$scope: { ctx: o },
      },
    })),
    a.$on("click", o[1]),
    (d = new We({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          B(n.$$.fragment),
          (i = x()),
          (l = k("div")),
          (r = k("p")),
          (r.textContent = `Hey there! Would you be open to complete a 3 minute survey about your experience with
          Sidekick?`),
          (c = x()),
          B(a.$$.fragment),
          (p = x()),
          (u = k("button")),
          B(d.$$.fragment),
          s(t, "class", "image svelte-ex8gh0"),
          s(r, "class", "svelte-ex8gh0"),
          s(l, "class", "content svelte-ex8gh0"),
          s(u, "class", "close-button svelte-ex8gh0"),
          s(e, "class", "pmf-survey svelte-ex8gh0");
      },
      m(b, w) {
        y(b, e, w),
          f(e, t),
          P(n, t, null),
          f(e, i),
          f(e, l),
          f(l, r),
          f(l, c),
          P(a, l, null),
          f(e, p),
          f(e, u),
          P(d, u, null),
          (m = !0),
          g || ((h = Q(u, "click", o[2])), (g = !0));
      },
      p(b, w) {
        let S = {};
        w & 1 && (S.href = b[0]),
          w & 8 && (S.$$scope = { dirty: w, ctx: b }),
          a.$set(S);
      },
      i(b) {
        m ||
          (_(n.$$.fragment, b),
          _(a.$$.fragment, b),
          _(d.$$.fragment, b),
          (m = !0));
      },
      o(b) {
        v(n.$$.fragment, b), v(a.$$.fragment, b), v(d.$$.fragment, b), (m = !1);
      },
      d(b) {
        b && C(e), z(n), z(a), z(d), (g = !1), h();
      },
    }
  );
}
function Ld(o) {
  let e, t, n;
  return (
    (t = new Ie({
      props: {
        width: "min(50vw, 628px)",
        $$slots: { default: [Md] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = k("div")),
          B(t.$$.fragment),
          s(e, "class", "container svelte-ex8gh0");
      },
      m(i, l) {
        y(i, e, l), P(t, e, null), (n = !0);
      },
      p(i, [l]) {
        let r = {};
        l & 9 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        n || (_(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        v(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && C(e), z(t);
      },
    }
  );
}
function Ad(o, e, t) {
  let n = "",
    i = () => {
      $.actions.sendAnalyticsEvent("pmf-survey.ok-btn-clicked", void 0),
        $.actions.submitPmfSurvey();
    },
    l = () => {
      $.actions.sendAnalyticsEvent("pmf-survey.ignore-btn-clicked", void 0),
        $.actions.ignorePmfSurvey();
    };
  return (
    Te(async () => {
      $.actions.sendAnalyticsEvent("pmf-survey.auto-shown", void 0);
      let { url: r } = await $.queries.loadPmfSurvey();
      t(0, (n = r));
    }),
    [n, i, l]
  );
}
var fi = class extends E {
    constructor(e) {
      super(), q(this, e, Ad, Ld, T, {}, Pd);
    }
  },
  ra = fi;
function aa(o) {
  let e, t;
  return (
    (e = new ra({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function sa(o) {
  let e, t;
  return (
    (e = new po({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function ca(o) {
  let e, t;
  return (
    (e = new uo({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(n, i) {
        P(e, n, i), (t = !0);
      },
      i(n) {
        t || (_(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        v(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        z(e, n);
      },
    }
  );
}
function $d(o) {
  let e,
    t,
    n,
    i,
    l,
    r = o[0] && aa(o),
    c = o[1]?.beforeProductHuntPopupVisible && sa(o),
    a = o[1]?.productHuntLivePopupVisible && ca(o);
  return (
    (i = new oa({})),
    {
      c() {
        r && r.c(),
          (e = x()),
          c && c.c(),
          (t = x()),
          a && a.c(),
          (n = x()),
          B(i.$$.fragment);
      },
      m(p, u) {
        r && r.m(p, u),
          y(p, e, u),
          c && c.m(p, u),
          y(p, t, u),
          a && a.m(p, u),
          y(p, n, u),
          P(i, p, u),
          (l = !0);
      },
      p(p, [u]) {
        p[0]
          ? r
            ? u & 1 && _(r, 1)
            : ((r = aa(p)), r.c(), _(r, 1), r.m(e.parentNode, e))
          : r &&
            (U(),
            v(r, 1, 1, () => {
              r = null;
            }),
            W()),
          p[1]?.beforeProductHuntPopupVisible
            ? c
              ? u & 2 && _(c, 1)
              : ((c = sa(p)), c.c(), _(c, 1), c.m(t.parentNode, t))
            : c &&
              (U(),
              v(c, 1, 1, () => {
                c = null;
              }),
              W()),
          p[1]?.productHuntLivePopupVisible
            ? a
              ? u & 2 && _(a, 1)
              : ((a = ca(p)), a.c(), _(a, 1), a.m(n.parentNode, n))
            : a &&
              (U(),
              v(a, 1, 1, () => {
                a = null;
              }),
              W());
      },
      i(p) {
        l || (_(r), _(c), _(a), _(i.$$.fragment, p), (l = !0));
      },
      o(p) {
        v(r), v(c), v(a), v(i.$$.fragment, p), (l = !1);
      },
      d(p) {
        r && r.d(p),
          p && C(e),
          c && c.d(p),
          p && C(t),
          a && a.d(p),
          p && C(n),
          z(i, p);
      },
    }
  );
}
function Td(o, e, t) {
  let n,
    i,
    l,
    r,
    c = $.stores.theme;
  re(o, c, (u) => t(6, (i = u)));
  let a = $.stores.isPmfSurveyVisible;
  re(o, a, (u) => t(0, (l = u)));
  let p = $.stores.productHuntPopupState;
  return (
    re(o, p, (u) => t(1, (r = u))),
    (o.$$.update = () => {
      if (o.$$.dirty & 64) {
        e: t(5, (n = i ?? localStorage.getItem("theme") ?? "auto"));
      }
      if (o.$$.dirty & 32) {
        e: n && Qi(n);
      }
    }),
    [l, r, c, a, p, n, i]
  );
}
var di = class extends E {
    constructor(e) {
      super(), q(this, e, Td, $d, T, {});
    }
  },
  pa = di;
var ua = document.getElementById("app");
Ae(ua, "Couldn't find container with id: #app");
var qd = ki({ target: ua, component: pa, gateway: $ });
Object.assign(globalThis, { sidekickDebug: { app: qd, gateway: $ } });
