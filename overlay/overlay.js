import { a as xs, b as un, c as qs, d as Hs } from "../chunk-AU46PDZY.js";
import { a as Ce, b as ws, c as Sn } from "../chunk-LMSBN3QA.js";
import {
  B as ns,
  a as Zi,
  b as Ki,
  q as Qi,
  r as eo,
  u as Yi,
  y as to,
} from "../chunk-EVVMRBSW.js";
import { a as no } from "../chunk-PRJNHMLU.js";
import { H as Li, K as Vi, S as Xn, a as mn } from "../chunk-I3ILDBO5.js";
import { a as Wi } from "../chunk-Q3TMK7K4.js";
import {
  A as Kt,
  B as Qt,
  C as js,
  a as us,
  b as ps,
  c as fs,
  d as ds,
  e as ms,
  f as ao,
  g as _s,
  h as hs,
  i as $s,
  j as yt,
  k as nt,
  l as ys,
  m as Ss,
  n as Zt,
  o as An,
  p as En,
  q as In,
  r as qt,
  s as Ms,
  t as Ps,
  u as zs,
  v as co,
  w as Bs,
  x as Ns,
  z as Ls,
} from "../chunk-MBGC2IY3.js";
import {
  a as q,
  b as Oe,
  e as io,
  f as so,
  g as yn,
  h as ss,
  i as as,
  j as Cn,
  k as cs,
  l as gs,
  m as vs,
  n as bs,
  o as ks,
  p as Ft,
  q as Me,
  r as Te,
  s as xn,
  u as Nt,
  v as As,
  w as Es,
  x as Ts,
  y as Yt,
} from "../chunk-RLVH4ZXF.js";
import { a as ls, b as Cs, c as Is, d as Us } from "../chunk-2P36QRXC.js";
import {
  $ as Qe,
  A as Ae,
  B as v,
  C as F,
  D as V,
  Da as ro,
  E as S,
  Ea as is,
  F as fe,
  Fa as kn,
  G as X,
  H as wt,
  Ha as wn,
  I as hn,
  Ia as Bt,
  J as c,
  Ja as Gt,
  Ka as Et,
  L as ee,
  M as Ne,
  Ma as it,
  N as lt,
  Oa as $n,
  P as ie,
  Pa as dt,
  Q as vn,
  Qa as It,
  R as mt,
  Ra as cn,
  S as ye,
  Sa as St,
  Ta as Ds,
  U as bn,
  V as oe,
  Va as Vs,
  Y as ue,
  Z as we,
  a as os,
  aa as Q,
  b as L,
  ba as Y,
  ca as _,
  d as je,
  da as h,
  e as Se,
  fa as ct,
  g as U,
  ga as ut,
  h as Je,
  ha as He,
  i as kt,
  ia as Ve,
  ja as Ye,
  k as ve,
  ka as y,
  l as We,
  la as C,
  m as Ge,
  ma as x,
  n as Fe,
  na as j,
  o as Ze,
  oa as H,
  p as gn,
  q as at,
  r as tt,
  ra as $e,
  s as gt,
  ua as pe,
  v as $t,
  va as qe,
  w as f,
  wa as rt,
  x as Z,
  xa as ht,
  y as w,
  ya as At,
  z as $,
  za as rs,
} from "../chunk-RRSEJBGM.js";
import { a as Ji, c as oo, d as Wt } from "../chunk-ZEHGPMWH.js";
import { a as xt, e as Xi, h as lo } from "../chunk-PDVOFPAZ.js";
import { d as A, e as Rt, f as es, g as ts } from "../chunk-MKPTDAGU.js";
import "../chunk-XYG7YXOD.js";
import { l as Gi } from "../chunk-3ZYQDD7H.js";
import {
  J as Ui,
  M as ji,
  Q as Yn,
  R as _n,
  W as Ot,
  Z as Hi,
  aa as Oi,
  ca as Ri,
  da as Jn,
  k as zt,
  l as qi,
  n as Di,
} from "../chunk-OBPWZYQZ.js";
import { a as ft, d as Ni, k as an } from "../chunk-QGLCH3FC.js";
import { a as Fi } from "../chunk-MQVGYSOB.js";
import { f as N, l as pt } from "../chunk-LGMSABOQ.js";
N();
N();
N();
N();
function dd(o) {
  Z(
    o,
    "svelte-1p6ngdf",
    ".footer.svelte-1p6ngdf{align-items:center;margin-top:12px;display:flex;flex-direction:column;flex-shrink:0;justify-content:center;padding:2px 12px 17px}"
  );
}
function md(o) {
  let e,
    n =
      (o[0]
        ? A("overlay_add_app__footer_add_new_button_text")
        : A("overlay_add_app__footer_add_button_text")) + "",
    t;
  return {
    c() {
      (e = v("strong")), (t = V(n));
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 1 &&
        n !==
          (n =
            (l[0]
              ? A("overlay_add_app__footer_add_new_button_text")
              : A("overlay_add_app__footer_add_button_text")) + "") &&
        ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function _d(o) {
  let e, n, t;
  return (
    (n = new pe({
      props: {
        dataTestId: "add-app-add-application-button",
        size: "large",
        $$slots: { default: [md] },
        $$scope: { ctx: o },
      },
    })),
    n.$on("click", o[1]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "footer svelte-1p6ngdf");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, [r]) {
        let i = {};
        r & 5 && (i.$$scope = { dirty: r, ctx: l }), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function gd(o, e, n) {
  let { isAppAlreadyAdded: t = !1 } = e;
  function l(r) {
    ue.call(this, o, r);
  }
  return (
    (o.$$set = (r) => {
      "isAppAlreadyAdded" in r && n(0, (t = r.isAppAlreadyAdded));
    }),
    [t, l]
  );
}
var uo = class extends H {
    constructor(e) {
      super(), j(this, e, gd, _d, U, { isAppAlreadyAdded: 0 }, dd);
    }
  },
  Os = uo;
N();
function hd(o) {
  Z(
    o,
    "svelte-18o9i7s",
    ".header.svelte-18o9i7s{align-items:center;display:flex;flex-direction:row;font-size:14px;font-weight:600;justify-content:space-between;line-height:20px;padding:12px 14px 10px}.row.svelte-18o9i7s{align-items:center;display:flex;flex-direction:row;flex-grow:1}.icon.svelte-18o9i7s{background-position:center;background-repeat:no-repeat;background-size:contain;height:25px;margin-right:14px;width:25px}.title.svelte-18o9i7s{color:var(--text-primary-color);font-size:13px;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:300px;margin-right:5px}.close-icon.svelte-18o9i7s{color:#808080}.close-icon.svelte-18o9i7s:hover{color:var(--inverted-text-color)}"
  );
}
function vd(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = A("overlay_add_app__header_title", [o[0]]) + "",
    a,
    u,
    p,
    d,
    m,
    g,
    b;
  return (
    (l = new ht({ props: { favIconUrl: o[1], alt: o[1] } })),
    (d = new qe({ props: { width: "14", height: "14" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (t = v("div")),
          y(l.$$.fragment),
          (r = S()),
          (i = v("div")),
          (a = V(s)),
          (u = S()),
          (p = v("button")),
          y(d.$$.fragment),
          c(t, "class", "icon svelte-18o9i7s"),
          c(i, "class", "title svelte-18o9i7s"),
          c(i, "data-testid", "add-app-header-title"),
          c(n, "class", "row svelte-18o9i7s"),
          c(p, "class", "close-icon svelte-18o9i7s"),
          c(p, "data-testid", "add-app-header-close-button"),
          c(e, "class", "header svelte-18o9i7s");
      },
      m(k, E) {
        w(k, e, E),
          f(e, n),
          f(n, t),
          C(l, t, null),
          f(n, r),
          f(n, i),
          f(i, a),
          f(e, u),
          f(e, p),
          C(d, p, null),
          (m = !0),
          g || ((b = X(p, "click", o[3])), (g = !0));
      },
      p(k, [E]) {
        let I = {};
        E & 2 && (I.favIconUrl = k[1]),
          E & 2 && (I.alt = k[1]),
          l.$set(I),
          (!m || E & 1) &&
            s !== (s = A("overlay_add_app__header_title", [k[0]]) + "") &&
            ee(a, s);
      },
      i(k) {
        m || (_(l.$$.fragment, k), _(d.$$.fragment, k), (m = !0));
      },
      o(k) {
        h(l.$$.fragment, k), h(d.$$.fragment, k), (m = !1);
      },
      d(k) {
        k && $(e), x(l), x(d), (g = !1), b();
      },
    }
  );
}
function bd(o, e, n) {
  let t = oe(),
    { appName: l = "" } = e,
    { avatarUrl: r = "" } = e,
    i = () => t("close");
  return (
    (o.$$set = (s) => {
      "appName" in s && n(0, (l = s.appName)),
        "avatarUrl" in s && n(1, (r = s.avatarUrl));
    }),
    [l, r, t, i]
  );
}
var po = class extends H {
    constructor(e) {
      super(), j(this, e, bd, vd, U, { appName: 0, avatarUrl: 1 }, hd);
    }
  },
  Rs = po;
N();
function kd(o) {
  Z(
    o,
    "svelte-95dn1r",
    ".toggle-wrapper.svelte-95dn1r{display:flex;flex-flow:nowrap;flex-direction:row;flex-grow:1;justify-content:space-between}.title.svelte-95dn1r{color:var(--text-primary-color);font-size:13px;line-height:16px}.caption.svelte-95dn1r{color:var(--add-app-popup-caption);font-size:11px;line-height:16px}"
  );
}
function wd(o) {
  let e, n, t, l, r, i, s, a, u, p;
  return (
    (u = new Oe({ props: { dataTestId: o[3], checked: o[0] } })),
    u.$on("change", o[4]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (t = v("div")),
          (l = V(o[1])),
          (r = S()),
          (i = v("div")),
          (s = V(o[2])),
          (a = S()),
          y(u.$$.fragment),
          c(t, "class", "title svelte-95dn1r"),
          c(i, "class", "caption svelte-95dn1r"),
          c(e, "class", "toggle-wrapper svelte-95dn1r");
      },
      m(d, m) {
        w(d, e, m),
          f(e, n),
          f(n, t),
          f(t, l),
          f(n, r),
          f(n, i),
          f(i, s),
          f(e, a),
          C(u, e, null),
          (p = !0);
      },
      p(d, [m]) {
        (!p || m & 2) && ee(l, d[1]), (!p || m & 4) && ee(s, d[2]);
        let g = {};
        m & 8 && (g.dataTestId = d[3]), m & 1 && (g.checked = d[0]), u.$set(g);
      },
      i(d) {
        p || (_(u.$$.fragment, d), (p = !0));
      },
      o(d) {
        h(u.$$.fragment, d), (p = !1);
      },
      d(d) {
        d && $(e), x(u);
      },
    }
  );
}
function $d(o, e, n) {
  let { title: t = "" } = e,
    { caption: l = "" } = e,
    { value: r = !1 } = e,
    { dataTestId: i = "" } = e,
    s = () => {
      n(0, (r = !r));
    };
  return (
    (o.$$set = (a) => {
      "title" in a && n(1, (t = a.title)),
        "caption" in a && n(2, (l = a.caption)),
        "value" in a && n(0, (r = a.value)),
        "dataTestId" in a && n(3, (i = a.dataTestId));
    }),
    [r, t, l, i, s]
  );
}
var fo = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          $d,
          wd,
          U,
          { title: 1, caption: 2, value: 0, dataTestId: 3 },
          kd
        );
    }
  },
  Ws = fo;
N();
function Gs(o) {
  let e, n;
  return (
    (e = new ss({
      props: {
        accounts: o[8],
        hasMultiAccountsSupport: o[5],
        recipe: o[0],
        currentAccountId: o[2],
        appName: o[3],
        startUrl: o[4],
        isAddingAllowed: o[6],
        useProBadges: o[7],
      },
    })),
    e.$on("add", o[9]),
    e.$on("edit", o[10]),
    e.$on("delete", o[11]),
    e.$on("activate", o[12]),
    e.$on("tryAdd", o[13]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 256 && (r.accounts = t[8]),
          l & 32 && (r.hasMultiAccountsSupport = t[5]),
          l & 1 && (r.recipe = t[0]),
          l & 4 && (r.currentAccountId = t[2]),
          l & 8 && (r.appName = t[3]),
          l & 16 && (r.startUrl = t[4]),
          l & 64 && (r.isAddingAllowed = t[6]),
          l & 128 && (r.useProBadges = t[7]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function yd(o) {
  let e,
    n,
    t = o[0] && Gs(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, [r]) {
      l[0]
        ? t
          ? (t.p(l, r), r & 1 && _(t, 1))
          : ((t = Gs(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function Cd(o, e, n) {
  let t,
    l = L,
    r = () => (l(), (l = kt(a, (M) => n(8, (t = M)))), a);
  o.$$.on_destroy.push(() => l());
  let i = oe(),
    { recipe: s } = e,
    { accounts: a } = e;
  r();
  let { currentAccountId: u = null } = e,
    { appName: p } = e,
    { startUrl: d } = e,
    { hasMultiAccountsSupport: m } = e,
    { isAddingAllowed: g } = e,
    { useProBadges: b } = e,
    k = ({ detail: M }) => {
      tt(
        a,
        (t = [
          ...t,
          {
            name: M.newAccountValue,
            startUrl: M.newAccountUrl,
            avatar: "",
            id: an(),
            isPrivate: M.isPrivate,
          },
        ]),
        t
      ),
        i("added");
    },
    E = ({ detail: M }) => {
      tt(
        a,
        (t = t.map((B) =>
          B.id !== M.id
            ? B
            : { ...B, name: M.newAccountValue, startUrl: M.newAccountUrl }
        )),
        t
      ),
        i("edited", M);
    },
    I = ({ detail: M }) => {
      tt(a, (t = t.filter((B) => B.id !== M.id)), t),
        i("deleted", M),
        !(u !== M.id || !t[0]) &&
          i("activate", { account: t[0], openAsTab: !1 });
    };
  function T(M) {
    ue.call(this, o, M);
  }
  function P(M) {
    ue.call(this, o, M);
  }
  return (
    (o.$$set = (M) => {
      "recipe" in M && n(0, (s = M.recipe)),
        "accounts" in M && r(n(1, (a = M.accounts))),
        "currentAccountId" in M && n(2, (u = M.currentAccountId)),
        "appName" in M && n(3, (p = M.appName)),
        "startUrl" in M && n(4, (d = M.startUrl)),
        "hasMultiAccountsSupport" in M && n(5, (m = M.hasMultiAccountsSupport)),
        "isAddingAllowed" in M && n(6, (g = M.isAddingAllowed)),
        "useProBadges" in M && n(7, (b = M.useProBadges));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 312) {
        e: t.length === 0 &&
          !m &&
          tt(
            a,
            (t = [
              {
                name: `${p} ${A("components_accounts__account")}`,
                startUrl: d ?? "",
                avatar: "",
                id: an(),
                isPrivate: !1,
              },
            ]),
            t
          );
      }
    }),
    [s, a, u, p, d, m, g, b, t, k, E, I, T, P]
  );
}
var mo = class extends H {
    constructor(e) {
      super(),
        j(this, e, Cd, yd, U, {
          recipe: 0,
          accounts: 1,
          currentAccountId: 2,
          appName: 3,
          startUrl: 4,
          hasMultiAccountsSupport: 5,
          isAddingAllowed: 6,
          useProBadges: 7,
        });
    }
  },
  Fs = mo;
N();
function xd(o) {
  Z(
    o,
    "svelte-1k9qo34",
    ".body.svelte-1k9qo34{padding:14px 12px 0;overflow-y:auto}.body-wrapper.svelte-1k9qo34{position:relative;display:flex;flex-direction:column;overflow-y:hidden}.body-wrapper.svelte-1k9qo34::after{content:'';position:absolute;bottom:0;width:100%;height:10px;background:linear-gradient(360deg, rgb(0 0 0 / 0.07) 0%, rgb(255 255 255 / 0) 100%);opacity:0;transition:var(--animation-time)}.body-wrapper.has-gradient.svelte-1k9qo34::after{opacity:1}.card.svelte-1k9qo34{background:var(--background-secondary);border-radius:8px;display:flex;flex-direction:column;padding:17px;margin-top:10px}.body.svelte-1k9qo34 .card-wrapper{margin-bottom:10px}.toggles-card.svelte-1k9qo34{row-gap:16px}.add-account.svelte-1k9qo34{color:#1a1a1a;font-size:12px;font-weight:600;line-height:16px;padding:8px;min-height:61px;margin-top:0}.separator.svelte-1k9qo34{background:var(--border-color);flex-shrink:0;height:1px;width:100%}"
  );
}
function Zs(o) {
  let e, n, t;
  return (
    (n = new cs({
      props: {
        dataTestId: "add-app-already-have-account-hint",
        $$slots: { default: [Sd] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")), y(n.$$.fragment), c(e, "class", "card-wrapper");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r[1] & 32 && (i.$$scope = { dirty: r, ctx: l }), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function Sd(o) {
  let e,
    n = A("overlay_add_app__info_card_text") + "",
    t;
  return {
    c() {
      (e = new vn(!1)), (t = fe()), (e.a = t);
    },
    m(l, r) {
      e.m(n, l, r), w(l, t, r);
    },
    p: L,
    d(l) {
      l && $(t), l && e.d();
    },
  };
}
function Ad(o) {
  let e, n;
  return (
    (e = new as({
      props: {
        currentAccountId: o[4],
        hasMultiAccountsSupport: o[14],
        recipe: o[9],
        useProBadges: o[11],
        isAddingAllowed: o[10],
        accounts: o[2],
        appName: o[1]?.name ?? "",
        startUrl: o[1]?.url ?? "",
      },
    })),
    e.$on("activate", o[18]),
    e.$on("add", o[17]),
    e.$on("delete", o[19]),
    e.$on("edit", o[20]),
    e.$on("tryAdd", o[16]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l[0] & 16 && (r.currentAccountId = t[4]),
          l[0] & 16384 && (r.hasMultiAccountsSupport = t[14]),
          l[0] & 512 && (r.recipe = t[9]),
          l[0] & 2048 && (r.useProBadges = t[11]),
          l[0] & 1024 && (r.isAddingAllowed = t[10]),
          l[0] & 4 && (r.accounts = t[2]),
          l[0] & 2 && (r.appName = t[1]?.name ?? ""),
          l[0] & 2 && (r.startUrl = t[1]?.url ?? ""),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Ed(o) {
  let e, n;
  return (
    (e = new Fs({
      props: {
        accounts: o[13],
        currentAccountId: o[4],
        hasMultiAccountsSupport: o[14],
        recipe: o[9],
        useProBadges: o[11],
        isAddingAllowed: o[10],
        appName: o[1]?.name ?? "",
        startUrl: o[1]?.url ?? "",
      },
    })),
    e.$on("activate", o[18]),
    e.$on("added", o[23]),
    e.$on("edited", o[22]),
    e.$on("deleted", o[24]),
    e.$on("tryAdd", o[16]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l[0] & 8192 && (r.accounts = t[13]),
          l[0] & 16 && (r.currentAccountId = t[4]),
          l[0] & 16384 && (r.hasMultiAccountsSupport = t[14]),
          l[0] & 512 && (r.recipe = t[9]),
          l[0] & 2048 && (r.useProBadges = t[11]),
          l[0] & 1024 && (r.isAddingAllowed = t[10]),
          l[0] & 2 && (r.appName = t[1]?.name ?? ""),
          l[0] & 2 && (r.startUrl = t[1]?.url ?? ""),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Id(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P;
  (e = new Rs({ props: { avatarUrl: o[1]?.icon?.src, appName: o[1]?.name } })),
    e.$on("close", o[29]);
  let M = o[3] && Zs(o),
    B = [Ed, Ad],
    O = [];
  function z(D, R) {
    return D[8] ? 0 : 1;
  }
  (u = z(o, [-1, -1])), (p = O[u] = B[u](o));
  function G(D) {
    o[30](D);
  }
  let W = {
    dataTestId: "add-app-pin-to-sidebar-toggle",
    title: A("overlay_add_app__toggle_pin_title"),
    caption: A("overlay_add_app__toggle_pin_caption"),
  };
  return (
    o[5] !== void 0 && (W.value = o[5]),
    (g = new Ws({ props: W })),
    we.push(() => Ye(g, "value", G)),
    (E = new Os({ props: { isAppAlreadyAdded: o[12] } })),
    E.$on("click", o[21]),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          (t = v("div")),
          (l = S()),
          (r = v("div")),
          (i = v("div")),
          M && M.c(),
          (s = S()),
          (a = v("div")),
          p.c(),
          (d = S()),
          (m = v("div")),
          y(g.$$.fragment),
          (k = S()),
          y(E.$$.fragment),
          c(t, "class", "separator svelte-1k9qo34"),
          c(a, "class", "card add-account svelte-1k9qo34"),
          c(m, "class", "card toggles-card svelte-1k9qo34"),
          c(i, "class", "body svelte-1k9qo34"),
          c(r, "class", "body-wrapper svelte-1k9qo34"),
          ie(r, "has-gradient", o[7] && !o[6]);
      },
      m(D, R) {
        C(e, D, R),
          w(D, n, R),
          w(D, t, R),
          w(D, l, R),
          w(D, r, R),
          f(r, i),
          M && M.m(i, null),
          f(i, s),
          f(i, a),
          O[u].m(a, null),
          f(i, d),
          f(i, m),
          C(g, m, null),
          o[31](i),
          w(D, k, R),
          C(E, D, R),
          (I = !0),
          T || ((P = X(i, "scroll", o[25])), (T = !0));
      },
      p(D, R) {
        let K = {};
        R[0] & 2 && (K.avatarUrl = D[1]?.icon?.src),
          R[0] & 2 && (K.appName = D[1]?.name),
          e.$set(K),
          D[3]
            ? M
              ? (M.p(D, R), R[0] & 8 && _(M, 1))
              : ((M = Zs(D)), M.c(), _(M, 1), M.m(i, s))
            : M &&
              (Q(),
              h(M, 1, 1, () => {
                M = null;
              }),
              Y());
        let ne = u;
        (u = z(D, R)),
          u === ne
            ? O[u].p(D, R)
            : (Q(),
              h(O[ne], 1, 1, () => {
                O[ne] = null;
              }),
              Y(),
              (p = O[u]),
              p ? p.p(D, R) : ((p = O[u] = B[u](D)), p.c()),
              _(p, 1),
              p.m(a, null));
        let te = {};
        !b && R[0] & 32 && ((b = !0), (te.value = D[5]), Qe(() => (b = !1))),
          g.$set(te),
          (!I || R[0] & 192) && ie(r, "has-gradient", D[7] && !D[6]);
        let le = {};
        R[0] & 4096 && (le.isAppAlreadyAdded = D[12]), E.$set(le);
      },
      i(D) {
        I ||
          (_(e.$$.fragment, D),
          _(M),
          _(p),
          _(g.$$.fragment, D),
          _(E.$$.fragment, D),
          (I = !0));
      },
      o(D) {
        h(e.$$.fragment, D),
          h(M),
          h(p),
          h(g.$$.fragment, D),
          h(E.$$.fragment, D),
          (I = !1);
      },
      d(D) {
        x(e, D),
          D && $(n),
          D && $(t),
          D && $(l),
          D && $(r),
          M && M.d(),
          O[u].d(),
          x(g),
          o[31](null),
          D && $(k),
          x(E, D),
          (T = !1),
          P();
      },
    }
  );
}
function Td(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 415,
        maxHeight: "calc(100vh - 344px)",
        $$slots: { default: [Id] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        (l[0] & 32767) | (l[1] & 32) && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Md(o) {
  let e, n;
  return (
    (e = new Ce({
      props: {
        dataTestId: "add-app-popup",
        $$slots: { default: [Td] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[32]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        (l[0] & 32767) | (l[1] & 32) && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Pd(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g = L,
    b = () => (g(), (g = kt(s, (_e) => n(2, (m = _e)))), s),
    k;
  o.$$.on_destroy.push(() => g());
  let E = oe(),
    { source: I } = e,
    T = q.stores.addApplicationModal;
  ve(o, T, (_e) => n(28, (k = _e)));
  let P = !1,
    M = !1,
    B = null,
    O = !0,
    z,
    G = !1,
    W = () => {
      u ||
        q.actions.showLimitsReachedModal({ source: "add-app-popup-accounts" });
    },
    D = ({ detail: _e }) => {
      if (!i) return;
      let Le = {
        name: _e.newAccountValue,
        recipe: i,
        startUrl: _e.newAccountUrl,
        isPrivate: _e.isPrivate,
      };
      q.actions.createAccount(Le),
        ae(),
        q.actions.explore("added_second_account");
    },
    R = ({ detail: _e }) => {
      n(4, (B = _e.account.id)),
        q.actions.sendAnalyticsEvent("account.activated", {
          "app.is-existed": !1,
        });
    },
    K = (_e) => {
      i && (q.actions.deleteAccount(_e.detail, i.id), me(_e));
    },
    ne = (_e) => {
      i && (q.actions.editAccount(_e.detail, i.id), se(_e));
    },
    te = () => {
      if (!t) return;
      let _e = m[0];
      pt(_e, "No accounts found to add custom app"),
        q.actions.addCustomApp({
          isPinned: O,
          currentAccountId: B ?? _e.id,
          accountsForCreating: m,
          details: { icon: t.icon, name: t.name ?? "", url: t.url ?? "" },
        });
    },
    le = () => {
      t &&
        q.actions.addApp(t.recipeId, {
          isPinned: O,
          currentAccountId: B ?? void 0,
          accountsForCreating: r ? m : void 0,
        });
    },
    re = () => {
      t?.recipeId === xt.id ? te() : le(),
        q.actions.confirmWalkthroughStep("customApps"),
        E("close");
    },
    se = ({ detail: _e }) => {
      q.actions.sendAnalyticsEvent("account.edited", {
        "app.is-existed": !1,
        "account.is-injected": _e.avatar !== "",
      });
    },
    ae = () => {
      q.actions.sendAnalyticsEvent("account.created", {
        "app.is-existed": !1,
        "app.is-custom": t?.recipeId === xt.id,
        "recipe.has-accounts-type": !!t?.recipe?.accountsType,
        "account.is-injected": !1,
      }),
        q.actions.explore("added_second_account");
    },
    me = ({ detail: _e }) => {
      q.actions.sendAnalyticsEvent("account.deleted", {
        "app.is-existed": !1,
        "account.is-injected": _e.avatar !== "",
      });
    },
    ce = Wi(() => {
      n(6, (G = Math.round(z.scrollTop) + z.offsetHeight === z.scrollHeight)),
        n(7, (d = z.scrollHeight > z.offsetHeight));
    }, 100);
  ye(
    () => (
      q.actions.sendAnalyticsEvent("app.add.auto-opened", { source: I }),
      () => q.actions.sendAnalyticsEvent("app.add.auto-closed", { source: I })
    )
  );
  function ke(_e) {
    ue.call(this, o, _e);
  }
  function Re(_e) {
    (O = _e), n(5, O);
  }
  function Pe(_e) {
    we[_e ? "unshift" : "push"](() => {
      (z = _e), n(0, z);
    });
  }
  function De(_e) {
    ue.call(this, o, _e);
  }
  return (
    (o.$$set = (_e) => {
      "source" in _e && n(26, (I = _e.source));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty[0] & 268435456) {
        e: n(1, (t = k));
      }
      if (o.$$.dirty[0] & 2) {
        e: n(14, (l = Boolean(t?.recipe?.accountsType)));
      }
      if (o.$$.dirty[0] & 2) {
        e: n(8, (r = t?.shouldCreateAccountsLocal));
      }
      if (o.$$.dirty[0] & 2) {
        e: n(9, (i = t?.recipe));
      }
      if (o.$$.dirty[0] & 2) {
        e: b(n(13, (s = it(t?.accounts ?? []))));
      }
      if (o.$$.dirty[0] & 2) {
        e: n(12, (a = t?.isAlreadyAdded));
      }
      if (o.$$.dirty[0] & 268435460) {
        e: n(
          10,
          (u = Boolean(k?.areMultipleAccountsAllowed || m.length === 0))
        );
      }
      if (o.$$.dirty[0] & 2) {
        e: n(11, (p = t?.useProBadges ?? !1));
      }
      if (o.$$.dirty[0] & 134217730) {
        e: t?.accounts &&
          !P &&
          (n(27, (P = !0)), n(3, (M = t.accounts.length !== 0)));
      }
      if (o.$$.dirty[0] & 5) {
        e: n(7, (d = z?.scrollHeight > z?.offsetHeight || m.length > 7));
      }
    }),
    [
      z,
      t,
      m,
      M,
      B,
      O,
      G,
      d,
      r,
      i,
      u,
      p,
      a,
      s,
      l,
      T,
      W,
      D,
      R,
      K,
      ne,
      re,
      se,
      ae,
      me,
      ce,
      I,
      P,
      k,
      ke,
      Re,
      Pe,
      De,
    ]
  );
}
var _o = class extends H {
    constructor(e) {
      super(), j(this, e, Pd, Md, U, { source: 26 }, xd, [-1, -1]);
    }
  },
  Ks = _o;
N();
N();
N();
function zd(o) {
  Z(
    o,
    "svelte-1bofu7",
    ".share-items.svelte-1bofu7{display:flex;align-items:center;justify-content:flex-start;margin-bottom:28px}.share-link.svelte-1bofu7{--size:22px;width:var(--size);height:var(--size);margin-right:26px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:var(--text-primary-color)}.share-link.svelte-1bofu7:hover{box-shadow:0 0 0 5px var(--theme-4);background:var(--theme-4)}.share-link.svelte-1bofu7:active{box-shadow:0 0 0 5px var(--theme-8);background:var(--theme-8)}.share-link.svelte-1bofu7:last-child{margin-right:0}"
  );
}
function Qs(o, e, n) {
  let t = o.slice();
  return (t[6] = e[n]), t;
}
function Ys(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = [o[6].componentProps ?? {}];
  var d = o[6].component;
  function m(b) {
    let k = {};
    for (let E = 0; E < p.length; E += 1) k = je(k, p[E]);
    return { props: k };
  }
  d && (n = mt(d, m(o)));
  function g() {
    return o[5](o[6]);
  }
  return {
    c() {
      (e = v("a")),
        n && y(n.$$.fragment),
        (t = S()),
        c(e, "class", (l = at(`share-link ${o[2]}`) + " svelte-1bofu7")),
        c(e, "data-testid", (r = o[3] + "-" + o[6].name)),
        c(e, "target", "_blank"),
        c(e, "href", (i = o[6].href)),
        c(e, "rel", "noopener noreferrer");
    },
    m(b, k) {
      w(b, e, k),
        n && C(n, e, null),
        f(e, t),
        (s = !0),
        a || ((u = X(e, "click", g)), (a = !0));
    },
    p(b, k) {
      o = b;
      let E = k & 1 ? He(p, [Ve(o[6].componentProps ?? {})]) : {};
      if (k & 1 && d !== (d = o[6].component)) {
        if (n) {
          Q();
          let I = n;
          h(I.$$.fragment, 1, 0, () => {
            x(I, 1);
          }),
            Y();
        }
        d
          ? ((n = mt(d, m(o))),
            y(n.$$.fragment),
            _(n.$$.fragment, 1),
            C(n, e, t))
          : (n = null);
      } else d && n.$set(E);
      (!s ||
        (k & 4 && l !== (l = at(`share-link ${o[2]}`) + " svelte-1bofu7"))) &&
        c(e, "class", l),
        (!s || (k & 9 && r !== (r = o[3] + "-" + o[6].name))) &&
          c(e, "data-testid", r),
        (!s || (k & 1 && i !== (i = o[6].href))) && c(e, "href", i);
    },
    i(b) {
      s || (n && _(n.$$.fragment, b), (s = !0));
    },
    o(b) {
      n && h(n.$$.fragment, b), (s = !1);
    },
    d(b) {
      b && $(e), n && x(n), (a = !1), u();
    },
  };
}
function Bd(o) {
  let e,
    n,
    t,
    l = o[0],
    r = [];
  for (let s = 0; s < l.length; s += 1) r[s] = Ys(Qs(o, l, s));
  let i = (s) =>
    h(r[s], 1, 1, () => {
      r[s] = null;
    });
  return {
    c() {
      e = v("div");
      for (let s = 0; s < r.length; s += 1) r[s].c();
      c(e, "class", (n = at(`share-items ${o[1]}`) + " svelte-1bofu7"));
    },
    m(s, a) {
      w(s, e, a);
      for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(e, null);
      t = !0;
    },
    p(s, [a]) {
      if (a & 29) {
        l = s[0];
        let u;
        for (u = 0; u < l.length; u += 1) {
          let p = Qs(s, l, u);
          r[u]
            ? (r[u].p(p, a), _(r[u], 1))
            : ((r[u] = Ys(p)), r[u].c(), _(r[u], 1), r[u].m(e, null));
        }
        for (Q(), u = l.length; u < r.length; u += 1) i(u);
        Y();
      }
      (!t ||
        (a & 2 && n !== (n = at(`share-items ${s[1]}`) + " svelte-1bofu7"))) &&
        c(e, "class", n);
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < l.length; a += 1) _(r[a]);
        t = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1) h(r[a]);
      t = !1;
    },
    d(s) {
      s && $(e), Ae(r, s);
    },
  };
}
function Nd(o, e, n) {
  let { shareLinks: t = [] } = e,
    { className: l = "" } = e,
    { itemClassName: r = "" } = e,
    { dataTestId: i = "" } = e,
    s = oe(),
    a = (u) => s("handleShareClick", { shareApp: u.name });
  return (
    (o.$$set = (u) => {
      "shareLinks" in u && n(0, (t = u.shareLinks)),
        "className" in u && n(1, (l = u.className)),
        "itemClassName" in u && n(2, (r = u.itemClassName)),
        "dataTestId" in u && n(3, (i = u.dataTestId));
    }),
    [t, l, r, i, s, a]
  );
}
var vo = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          Nd,
          Bd,
          U,
          { shareLinks: 0, className: 1, itemClassName: 2, dataTestId: 3 },
          zd
        );
    }
  },
  Js = vo;
N();
function qd(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M3.276 17.516h15.577c1.741 0 2.747-1.006 2.747-3V3.837c0-1.983-1.016-2.99-3.038-2.99H2.986C1.245.847.24 1.844.24 3.837v10.68c0 2.004 1.015 3 3.037 3zM9.768 9.67L2.464 2.462c.213-.087.464-.135.754-.135H18.62c.3 0 .561.048.774.155L12.11 9.67c-.416.416-.793.6-1.17.6-.387 0-.764-.184-1.17-.6zm-8.05 4.847V3.837v-.098l5.564 5.457-5.553 5.485c-.01-.048-.01-.106-.01-.164zM20.12 3.846v10.806l-5.524-5.456 5.524-5.428v.078zM3.218 16.036c-.27 0-.512-.039-.706-.126l5.786-5.718.628.62c.678.667 1.326.948 2.013.948.677 0 1.335-.28 2.012-.948l.629-.62 5.776 5.708a1.752 1.752 0 01-.736.136H3.218z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 22 18"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function Dd(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var bo = class extends H {
    constructor(e) {
      super(), j(this, e, Dd, qd, U, { width: 0, height: 1, className: 2 });
    }
  },
  Xs = bo;
function Ld(o) {
  Z(
    o,
    "svelte-fae416",
    ".checklist-success-dialog.svelte-fae416.svelte-fae416{padding:32px;max-width:100%}header.svelte-fae416.svelte-fae416{position:relative;font-size:14px}.header-title.svelte-fae416.svelte-fae416,.share-title.svelte-fae416.svelte-fae416{line-height:1.33;margin:0 0 16px;color:var(--theme-100)}.header-title.svelte-fae416.svelte-fae416{font-weight:700;font-size:23px}.share-title.svelte-fae416.svelte-fae416{font-weight:normal;font-size:16px}.invite-title.svelte-fae416.svelte-fae416{max-width:230px;font-size:16px;line-height:1.3;margin-bottom:14px}.close-button.svelte-fae416.svelte-fae416{position:absolute;top:-24px;right:-24px;display:flex;padding:8px}.block.svelte-fae416.svelte-fae416{padding:2px 32px 24px;margin:0 -32px 8px;border-bottom:1px solid var(--popup-border-color)}.block.svelte-fae416.svelte-fae416:last-child{border-bottom:0;margin-bottom:0;padding-top:16px;padding-bottom:0}.checklist-success-dialog.svelte-fae416 .is-success{margin-top:12px;margin-bottom:8px}.checklist-success-dialog.svelte-fae416 .block.svelte-fae416 .share-link{--size:32px;width:var(--size);height:var(--size);margin-right:42px}"
  );
}
function ea(o) {
  let e, n, t, l, r;
  return (
    (l = new Js({ props: { className: "is-success", shareLinks: o[1] } })),
    l.$on("handleShareClick", o[3]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (n.textContent = `${A("overlay_checklist_success__share_title")}`),
          (t = S()),
          y(l.$$.fragment),
          c(n, "class", "share-title svelte-fae416"),
          c(e, "class", "block svelte-fae416");
      },
      m(i, s) {
        w(i, e, s), f(e, n), f(e, t), C(l, e, null), (r = !0);
      },
      p(i, s) {
        let a = {};
        s & 2 && (a.shareLinks = i[1]), l.$set(a);
      },
      i(i) {
        r || (_(l.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(l.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && $(e), x(l);
      },
    }
  );
}
function Ud(o) {
  let e = A("overlay_checklist_success__button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function jd(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I;
  a = new dt({ props: { width: "12", height: "12" } });
  let T = o[0] && ea(o);
  return (
    (b = new pe({
      props: {
        size: "large",
        dataTestId: "features-explored-popup.invite-button",
        $$slots: { default: [Ud] },
        $$scope: { ctx: o },
      },
    })),
    b.$on("click", o[4]),
    {
      c() {
        (e = v("div")),
          (n = v("header")),
          (t = v("div")),
          (t.textContent = `${A("overlay_checklist_success__title")}`),
          (l = S()),
          (r = v("p")),
          (r.textContent = `${A("overlay_checklist_success__description")}`),
          (i = S()),
          (s = v("button")),
          y(a.$$.fragment),
          (u = S()),
          T && T.c(),
          (p = S()),
          (d = v("div")),
          (m = v("div")),
          (m.textContent = `${A("overlay_checklist_success__invite_title")}`),
          (g = S()),
          y(b.$$.fragment),
          c(t, "class", "header-title svelte-fae416"),
          c(s, "class", "close-button svelte-fae416"),
          c(s, "data-testid", "features-explored-popup.close-button"),
          c(n, "class", "svelte-fae416"),
          c(m, "class", "invite-title svelte-fae416"),
          c(d, "class", "block svelte-fae416"),
          c(e, "class", "checklist-success-dialog svelte-fae416"),
          c(e, "data-testid", "features-explored-popup");
      },
      m(P, M) {
        w(P, e, M),
          f(e, n),
          f(n, t),
          f(n, l),
          f(n, r),
          f(n, i),
          f(n, s),
          C(a, s, null),
          f(e, u),
          T && T.m(e, null),
          f(e, p),
          f(e, d),
          f(d, m),
          f(d, g),
          C(b, d, null),
          (k = !0),
          E || ((I = X(s, "click", o[2])), (E = !0));
      },
      p(P, M) {
        P[0]
          ? T
            ? (T.p(P, M), M & 1 && _(T, 1))
            : ((T = ea(P)), T.c(), _(T, 1), T.m(e, p))
          : T &&
            (Q(),
            h(T, 1, 1, () => {
              T = null;
            }),
            Y());
        let B = {};
        M & 256 && (B.$$scope = { dirty: M, ctx: P }), b.$set(B);
      },
      i(P) {
        k || (_(a.$$.fragment, P), _(T), _(b.$$.fragment, P), (k = !0));
      },
      o(P) {
        h(a.$$.fragment, P), h(T), h(b.$$.fragment, P), (k = !1);
      },
      d(P) {
        P && $(e), x(a), T && T.d(), x(b), (E = !1), I();
      },
    }
  );
}
function Hd(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 555,
        height: "auto",
        $$slots: { default: [jd] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 259 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Vd(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [Hd] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 259 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Od(o, e, n) {
  let t,
    l,
    r = oe(),
    { source: i } = e,
    { inviteLink: s } = e,
    a = () => r("close"),
    u = (d) => {
      q.actions.sendAnalyticsEvent("checklist-success.social-link-clicked", {
        "shared-to": d.detail.shareApp,
      }),
        a();
    },
    p = () => {
      q.actions.sendAnalyticsEvent(
        "checklist-success.invite-button-clicked",
        void 0
      ),
        q.actions.openLaunchpadWithInvitations();
    };
  return (
    ye(
      () => (
        q.actions.sendAnalyticsEvent("checklist-success.auto-opened", {
          source: i,
        }),
        () => {
          q.actions.sendAnalyticsEvent("checklist-success.auto-closed", {
            source: i,
          });
        }
      )
    ),
    (o.$$set = (d) => {
      "source" in d && n(5, (i = d.source)),
        "inviteLink" in d && n(0, (s = d.inviteLink));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(
          6,
          (t = encodeURIComponent(
            `${A("overlay_checklist_success__share_text")} ${s}`
          ))
        );
      }
      if (o.$$.dirty & 65) {
        e: n(
          1,
          (l = [
            {
              name: "twitter",
              href: `https://twitter.com/intent/tweet?text=${t}`,
              component: us,
            },
            {
              name: "facebook",
              href: `https://www.facebook.com/sharer/sharer.php?display=page&u=${s}`,
              component: ps,
            },
            {
              name: "linkedin",
              href: `https://www.linkedin.com/sharing/share-offsite/?url=${s}`,
              component: fs,
            },
            {
              name: "whatsapp",
              href: `https://api.whatsapp.com/send?text=${t}`,
              component: ds,
            },
            { name: "email", href: `mailto:?body=${t}`, component: Xs },
          ])
        );
      }
    }),
    [s, l, a, u, p, i, t]
  );
}
var ko = class extends H {
    constructor(e) {
      super(), j(this, e, Od, Vd, U, { source: 5, inviteLink: 0 }, Ld);
    }
  },
  ta = ko;
N();
N();
N();
function Rd(o) {
  let e, n, t, l, r, i;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("mask")),
        (l = F("path")),
        (r = F("path")),
        c(
          n,
          "d",
          "M31.2633 20.0008C31.2633 13.2397 25.7876 7.75882 19.0329 7.75882C12.2782 7.75882 6.80249 13.2397 6.80249 20.0008C6.80249 26.7619 12.2782 32.2428 19.0329 32.2428C22.5401 32.2428 25.7025 30.7651 27.9327 28.3979L34.2262 35.1881"
        ),
        c(n, "stroke", "currentColor"),
        c(n, "stroke-width", "1.5"),
        c(n, "stroke-miterlimit", "10"),
        c(n, "stroke-linecap", "round"),
        c(
          l,
          "d",
          "M20.5074 11.8821C20.5824 11.4785 20.316 11.0873 19.9076 11.0459C18.589 10.9122 17.2539 11.0712 15.9986 11.5152C14.5092 12.042 13.1848 12.9517 12.1583 14.1526C11.1319 15.3536 10.4397 16.8036 10.1513 18.3569C9.90818 19.6659 9.95912 21.0095 10.2965 22.2912C10.401 22.6882 10.8289 22.8904 11.2159 22.7535C11.6029 22.6166 11.8018 22.1924 11.7038 21.7938C11.4496 20.7598 11.4174 19.6807 11.6129 18.6283C11.8537 17.3315 12.4315 16.1211 13.2884 15.1185C14.1453 14.1159 15.251 13.3565 16.4944 12.9167C17.5035 12.5597 18.5745 12.4234 19.6354 12.5135C20.0445 12.5482 20.4325 12.2857 20.5074 11.8821Z"
        ),
        c(t, "id", "path-2-inside-1_15841_15347"),
        c(t, "fill", "white"),
        c(
          r,
          "d",
          "M20.5074 11.8821C20.5824 11.4785 20.316 11.0873 19.9076 11.0459C18.589 10.9122 17.2539 11.0712 15.9986 11.5152C14.5092 12.042 13.1848 12.9517 12.1583 14.1526C11.1319 15.3536 10.4397 16.8036 10.1513 18.3569C9.90818 19.6659 9.95912 21.0095 10.2965 22.2912C10.401 22.6882 10.8289 22.8904 11.2159 22.7535C11.6029 22.6166 11.8018 22.1924 11.7038 21.7938C11.4496 20.7598 11.4174 19.6807 11.6129 18.6283C11.8537 17.3315 12.4315 16.1211 13.2884 15.1185C14.1453 14.1159 15.251 13.3565 16.4944 12.9167C17.5035 12.5597 18.5745 12.4234 19.6354 12.5135C20.0445 12.5482 20.4325 12.2857 20.5074 11.8821Z"
        ),
        c(r, "stroke", "currentColor"),
        c(r, "stroke-width", "2"),
        c(r, "mask", "url(#path-2-inside-1_15841_15347)"),
        c(e, "class", (i = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 42 42"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, a) {
      w(s, e, a), f(e, n), f(e, t), f(t, l), f(e, r);
    },
    p(s, [a]) {
      a & 4 && i !== (i = `icon ${s[2]}`) && c(e, "class", i),
        a & 1 && c(e, "width", s[0]),
        a & 2 && c(e, "height", s[1]);
    },
    i: L,
    o: L,
    d(s) {
      s && $(e);
    },
  };
}
function Wd(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var wo = class extends H {
    constructor(e) {
      super(), j(this, e, Wd, Rd, U, { width: 0, height: 1, className: 2 });
    }
  },
  na = wo;
function Gd(o) {
  Z(
    o,
    "svelte-njtvoc",
    ".wrapper.svelte-njtvoc{position:relative;margin-top:9px;padding:20px 15px;display:flex;align-items:center;background:rgb(244 211 49 / 0.25);color:var(--text-primary-color);border-radius:4px}.wrapper.svelte-njtvoc .magnifying-glass-icon{margin-right:16px}h2.svelte-njtvoc{font-size:14px;font-weight:bold;margin:0;margin-bottom:6px}p.svelte-njtvoc{margin:0;font-size:12px}.close-btn.svelte-njtvoc{position:absolute;top:0;right:0;padding:8px 8px 16px 16px}"
  );
}
function Fd(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g;
  return (
    (t = new dt({ props: { width: "8", height: "8" } })),
    (r = new na({
      props: { width: "42", height: "42", className: "magnifying-glass-icon" },
    })),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          y(t.$$.fragment),
          (l = S()),
          y(r.$$.fragment),
          (i = S()),
          (s = v("div")),
          (a = v("h2")),
          (a.textContent = `${A("overlay_global_search__welcome_title")}`),
          (u = S()),
          (p = v("p")),
          (p.textContent = `${A(
            "overlay_global_search__welcome_description"
          )}`),
          c(n, "data-testid", "global-search-welcome-button-close"),
          c(n, "class", "close-btn svelte-njtvoc"),
          c(a, "class", "svelte-njtvoc"),
          c(p, "class", "svelte-njtvoc"),
          c(e, "class", "wrapper svelte-njtvoc"),
          c(e, "data-testid", "global-search-welcome-hint");
      },
      m(b, k) {
        w(b, e, k),
          f(e, n),
          C(t, n, null),
          f(e, l),
          C(r, e, null),
          f(e, i),
          f(e, s),
          f(s, a),
          f(s, u),
          f(s, p),
          (d = !0),
          m || ((g = X(n, "click", o[1])), (m = !0));
      },
      p: L,
      i(b) {
        d || (_(t.$$.fragment, b), _(r.$$.fragment, b), (d = !0));
      },
      o(b) {
        h(t.$$.fragment, b), h(r.$$.fragment, b), (d = !1);
      },
      d(b) {
        b && $(e), x(t), x(r), (m = !1), g();
      },
    }
  );
}
function Zd(o) {
  let e = oe();
  return [e, () => e("close")];
}
var $o = class extends H {
    constructor(e) {
      super(), j(this, e, Zd, Fd, U, {}, Gd);
    }
  },
  oa = $o;
N();
function Kd(o) {
  Z(o, "svelte-1sedvht", ".wrap.svelte-1sedvht{z-index:2}");
}
function Qd(o) {
  let e,
    n = A("components_walkthrough__search_description_1") + "",
    t,
    l,
    r,
    i,
    s = A("components_walkthrough__search_description_2") + "",
    a,
    u,
    p,
    d;
  return (
    (r = new St({ props: { keys: o[1] } })),
    {
      c() {
        (e = v("p")),
          (t = V(n)),
          (l = S()),
          y(r.$$.fragment),
          (i = S()),
          (a = V(s)),
          (u = S()),
          (p = v("p")),
          (p.textContent = `${A(
            "components_walkthrough__search_description_3"
          )}`);
      },
      m(m, g) {
        w(m, e, g),
          f(e, t),
          f(e, l),
          C(r, e, null),
          f(e, i),
          f(e, a),
          w(m, u, g),
          w(m, p, g),
          (d = !0);
      },
      p(m, g) {
        let b = {};
        g & 2 && (b.keys = m[1]), r.$set(b);
      },
      i(m) {
        d || (_(r.$$.fragment, m), (d = !0));
      },
      o(m) {
        h(r.$$.fragment, m), (d = !1);
      },
      d(m) {
        m && $(e), x(r), m && $(u), m && $(p);
      },
    }
  );
}
function Yd(o) {
  let e, n;
  return (
    (e = new gs({
      props: {
        header: A("components_walkthrough__search_title"),
        arrowPosition: "top",
        $$slots: { default: [Qd] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("confirm", o[2]),
    e.$on("cancel", o[3]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 18 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Jd(o) {
  let e, n, t, l, r, i;
  return (
    (n = new $e({
      props: {
        width: 255,
        minWidth: 255,
        $$slots: { default: [Yd] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")), y(n.$$.fragment), c(e, "class", "wrap svelte-1sedvht");
      },
      m(s, a) {
        w(s, e, a),
          C(n, e, null),
          (l = !0),
          r || ((i = gt((t = o[0].call(null, e)))), (r = !0));
      },
      p(s, [a]) {
        let u = {};
        a & 18 && (u.$$scope = { dirty: a, ctx: s }), n.$set(u);
      },
      i(s) {
        l || (_(n.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(n.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && $(e), x(n), (r = !1), i();
      },
    }
  );
}
function Xd(o, e, n) {
  let { popperContent: t } = e,
    { keys: l } = e;
  function r(s) {
    ue.call(this, o, s);
  }
  function i(s) {
    ue.call(this, o, s);
  }
  return (
    (o.$$set = (s) => {
      "popperContent" in s && n(0, (t = s.popperContent)),
        "keys" in s && n(1, (l = s.keys));
    }),
    [t, l, r, i]
  );
}
var yo = class extends H {
    constructor(e) {
      super(), j(this, e, Xd, Jd, U, { popperContent: 0, keys: 1 }, Kd);
    }
  },
  la = yo;
N();
var { window: tm } = $t;
function ra(o, e, n) {
  let t = o.slice();
  return (t[16] = e[n]), (t[18] = n), t;
}
function ia(o) {
  let e, n, t;
  function l(...i) {
    return o[10](o[16], ...i);
  }
  function r() {
    return o[11](o[16]);
  }
  return (
    (n = new bs({
      props: {
        item: o[16],
        copyShortcutKeys: o[2],
        isActive: o[3] === o[18],
        dataTestId: "global-search-popup-search-item",
      },
    })),
    n.$on("open", l),
    n.$on("copy", r),
    {
      c() {
        (e = v("li")), y(n.$$.fragment);
      },
      m(i, s) {
        w(i, e, s), C(n, e, null), (t = !0);
      },
      p(i, s) {
        o = i;
        let a = {};
        s & 1 && (a.item = o[16]),
          s & 4 && (a.copyShortcutKeys = o[2]),
          s & 8 && (a.isActive = o[3] === o[18]),
          n.$set(a);
      },
      i(i) {
        t || (_(n.$$.fragment, i), (t = !0));
      },
      o(i) {
        h(n.$$.fragment, i), (t = !1);
      },
      d(i) {
        i && $(e), x(n);
      },
    }
  );
}
function sa(o) {
  let e, n, t;
  return (
    (n = new hs({})),
    n.$on("importRequested", o[12]),
    {
      c() {
        (e = v("li")), y(n.$$.fragment);
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p: L,
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function nm(o) {
  let e,
    n = lo(o[1]),
    t,
    l,
    r,
    i,
    s = o[0],
    a = [];
  for (let d = 0; d < s.length; d += 1) a[d] = ia(ra(o, s, d));
  let u = (d) =>
      h(a[d], 1, 1, () => {
        a[d] = null;
      }),
    p = n && sa(o);
  return {
    c() {
      for (let d = 0; d < a.length; d += 1) a[d].c();
      (e = S()), p && p.c(), (t = fe());
    },
    m(d, m) {
      for (let g = 0; g < a.length; g += 1) a[g] && a[g].m(d, m);
      w(d, e, m),
        p && p.m(d, m),
        w(d, t, m),
        (l = !0),
        r || ((i = X(tm, "keydown", o[4])), (r = !0));
    },
    p(d, [m]) {
      if (m & 109) {
        s = d[0];
        let g;
        for (g = 0; g < s.length; g += 1) {
          let b = ra(d, s, g);
          a[g]
            ? (a[g].p(b, m), _(a[g], 1))
            : ((a[g] = ia(b)), a[g].c(), _(a[g], 1), a[g].m(e.parentNode, e));
        }
        for (Q(), g = s.length; g < a.length; g += 1) u(g);
        Y();
      }
      m & 2 && (n = lo(d[1])),
        n
          ? p
            ? (p.p(d, m), m & 2 && _(p, 1))
            : ((p = sa(d)), p.c(), _(p, 1), p.m(t.parentNode, t))
          : p &&
            (Q(),
            h(p, 1, 1, () => {
              p = null;
            }),
            Y());
    },
    i(d) {
      if (!l) {
        for (let m = 0; m < s.length; m += 1) _(a[m]);
        _(p), (l = !0);
      }
    },
    o(d) {
      a = a.filter(Boolean);
      for (let m = 0; m < a.length; m += 1) h(a[m]);
      h(p), (l = !1);
    },
    d(d) {
      Ae(a, d), d && $(e), p && p.d(d), d && $(t), (r = !1), i();
    },
  };
}
function om(o, e, n) {
  let t,
    l = oe(),
    { searchResult: r } = e,
    { totalHistoryCount: i } = e,
    { copyShortcutKeys: s } = e,
    a = 0,
    u = () => n(3, (a = 0)),
    p = (P) => {
      if (!P.isComposing)
        switch (P.code) {
          case "Enter": {
            P.preventDefault();
            let M = r[a];
            M && m(M), k();
            return;
          }
          case "ArrowUp":
            P.preventDefault(), n(3, (a = Ft(a, t, -1)));
            return;
          case "ArrowDown":
            P.preventDefault(), n(3, (a = Ft(a, t, 1)));
            return;
          case "KeyC": {
            if ((!P.ctrlKey && !P.metaKey) || ks(P.target)) return;
            let M = r[a];
            if (!M) return;
            P.preventDefault(), g(M.url);
            break;
          }
          default:
        }
    },
    d = (P, M) => {
      m(P, M.detail.openInNewTab), M.detail.openInNewTab || k();
    },
    m = (P, M = !1) => {
      q.actions.sendAnalyticsEvent("global-search.suggestion-selected", {
        type: P.type,
      }),
        q.actions.confirmWalkthroughStep("search");
      let B = P.type === "service" ? P.serviceId : null;
      q.actions.openSearchItem({
        item: P,
        source: "global-search.suggestion-selected",
        openInAppWithId: B,
        openInActiveTab: !1,
        openInNewTab: M,
      });
    },
    g = (P) => {
      window.navigator.clipboard.writeText(P).catch(ft).finally(k);
    },
    b = () => {
      q.actions.sendAnalyticsEvent(
        "global-search.import-button-clicked",
        void 0
      ),
        q.actions.openChromeImport(),
        k();
    },
    k = () => l("close"),
    E = (P, M) => d(P, M),
    I = (P) => g(P.url),
    T = () => b();
  return (
    (o.$$set = (P) => {
      "searchResult" in P && n(0, (r = P.searchResult)),
        "totalHistoryCount" in P && n(1, (i = P.totalHistoryCount)),
        "copyShortcutKeys" in P && n(2, (s = P.copyShortcutKeys));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(9, (t = r.length ?? 0));
      }
      if (o.$$.dirty & 520) {
        e: t <= a && n(3, (a = 0));
      }
      if (o.$$.dirty & 1) {
        e: r.length && q.actions.explore("performed_global_search");
      }
    }),
    [r, i, s, a, p, d, g, b, u, t, E, I, T]
  );
}
var Co = class extends H {
    constructor(e) {
      super(),
        j(this, e, om, nm, U, {
          searchResult: 0,
          totalHistoryCount: 1,
          copyShortcutKeys: 2,
          resetIndex: 8,
        });
    }
    get resetIndex() {
      return this.$$.ctx[8];
    }
  },
  aa = Co;
N();
N();
N();
function lm(o) {
  Z(
    o,
    "svelte-7oy2b",
    ".command.svelte-7oy2b{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--text-primary-color);padding:8px;margin:0 0 2px;border-radius:8px;transition:var(--animation-time) background;width:100%}.command.svelte-7oy2b:hover,.command.svelte-7oy2b:focus{background-color:var(--search-item-background-hover)}.command.is-active.svelte-7oy2b{background-color:var(--search-item-background-selected)}.title.svelte-7oy2b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hint.svelte-7oy2b{margin-left:8px}"
  );
}
function ca(o) {
  let e, n, t, l;
  n = new St({ props: { keys: o[1].shortcutKeys } });
  let r = o[1].shortcutHint && ua(o);
  return {
    c() {
      (e = v("span")),
        y(n.$$.fragment),
        (t = S()),
        r && r.c(),
        c(e, "class", "shortcuts");
    },
    m(i, s) {
      w(i, e, s), C(n, e, null), f(e, t), r && r.m(e, null), (l = !0);
    },
    p(i, s) {
      let a = {};
      s & 2 && (a.keys = i[1].shortcutKeys),
        n.$set(a),
        i[1].shortcutHint
          ? r
            ? r.p(i, s)
            : ((r = ua(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null));
    },
    i(i) {
      l || (_(n.$$.fragment, i), (l = !0));
    },
    o(i) {
      h(n.$$.fragment, i), (l = !1);
    },
    d(i) {
      i && $(e), x(n), r && r.d();
    },
  };
}
function ua(o) {
  let e,
    n = o[1].shortcutHint + "",
    t;
  return {
    c() {
      (e = v("span")), (t = V(n)), c(e, "class", "hint svelte-7oy2b");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 2 && n !== (n = l[1].shortcutHint + "") && ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function rm(o) {
  let e,
    n,
    t = o[1].name + "",
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d = o[1].shortcutKeys && ca(o);
  return {
    c() {
      (e = v("button")),
        (n = v("span")),
        (l = V(t)),
        (i = S()),
        d && d.c(),
        c(n, "class", "title svelte-7oy2b"),
        c(n, "title", (r = o[1].name)),
        c(e, "class", "command svelte-7oy2b"),
        c(e, "data-testid", (s = "global-search-popup.command-" + o[1].id)),
        ie(e, "is-active", o[0]);
    },
    m(m, g) {
      w(m, e, g),
        f(e, n),
        f(n, l),
        f(e, i),
        d && d.m(e, null),
        o[4](e),
        (a = !0),
        u || ((p = X(e, "click", o[3])), (u = !0));
    },
    p(m, [g]) {
      (!a || g & 2) && t !== (t = m[1].name + "") && ee(l, t),
        (!a || (g & 2 && r !== (r = m[1].name))) && c(n, "title", r),
        m[1].shortcutKeys
          ? d
            ? (d.p(m, g), g & 2 && _(d, 1))
            : ((d = ca(m)), d.c(), _(d, 1), d.m(e, null))
          : d &&
            (Q(),
            h(d, 1, 1, () => {
              d = null;
            }),
            Y()),
        (!a ||
          (g & 2 && s !== (s = "global-search-popup.command-" + m[1].id))) &&
          c(e, "data-testid", s),
        (!a || g & 1) && ie(e, "is-active", m[0]);
    },
    i(m) {
      a || (_(d), (a = !0));
    },
    o(m) {
      h(d), (a = !1);
    },
    d(m) {
      m && $(e), d && d.d(), o[4](null), (u = !1), p();
    },
  };
}
function im(o, e, n) {
  let { isActive: t = !1 } = e,
    { command: l } = e,
    r;
  function i(a) {
    ue.call(this, o, a);
  }
  function s(a) {
    we[a ? "unshift" : "push"](() => {
      (r = a), n(2, r);
    });
  }
  return (
    (o.$$set = (a) => {
      "isActive" in a && n(0, (t = a.isActive)),
        "command" in a && n(1, (l = a.command));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 5) {
        e: r &&
          t &&
          r.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
      }
    }),
    [t, l, r, i, s]
  );
}
var xo = class extends H {
    constructor(e) {
      super(), j(this, e, im, rm, U, { isActive: 0, command: 1 }, lm);
    }
  },
  So = xo;
function sm(o) {
  Z(
    o,
    "svelte-60wr9g",
    ".commands-section.svelte-60wr9g{margin-bottom:16px}.section-title.svelte-60wr9g{font-size:12px;text-transform:uppercase;font-weight:300;margin-bottom:8px}"
  );
}
function pa(o, e, n) {
  let t = o.slice();
  return (t[10] = e[n]), (t[12] = n), t;
}
function fa(o, e, n) {
  let t = o.slice();
  return (t[10] = e[n]), (t[12] = n), t;
}
function da(o) {
  let e, n, t, l;
  function r() {
    return o[6](o[10]);
  }
  return (
    (n = new So({ props: { command: o[10], isActive: o[2] === o[12] } })),
    n.$on("click", r),
    {
      c() {
        (e = v("li")), y(n.$$.fragment), (t = S());
      },
      m(i, s) {
        w(i, e, s), C(n, e, null), f(e, t), (l = !0);
      },
      p(i, s) {
        o = i;
        let a = {};
        s & 1 && (a.command = o[10]),
          s & 4 && (a.isActive = o[2] === o[12]),
          n.$set(a);
      },
      i(i) {
        l || (_(n.$$.fragment, i), (l = !0));
      },
      o(i) {
        h(n.$$.fragment, i), (l = !1);
      },
      d(i) {
        i && $(e), x(n);
      },
    }
  );
}
function ma(o) {
  let e, n, t, l;
  function r() {
    return o[7](o[10]);
  }
  return (
    (n = new So({
      props: { command: o[10], isActive: o[2] === o[12] + o[0].length },
    })),
    n.$on("click", r),
    {
      c() {
        (e = v("li")), y(n.$$.fragment), (t = S());
      },
      m(i, s) {
        w(i, e, s), C(n, e, null), f(e, t), (l = !0);
      },
      p(i, s) {
        o = i;
        let a = {};
        s & 2 && (a.command = o[10]),
          s & 5 && (a.isActive = o[2] === o[12] + o[0].length),
          n.$set(a);
      },
      i(i) {
        l || (_(n.$$.fragment, i), (l = !0));
      },
      o(i) {
        h(n.$$.fragment, i), (l = !1);
      },
      d(i) {
        i && $(e), x(n);
      },
    }
  );
}
function am(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d = o[0],
    m = [];
  for (let I = 0; I < d.length; I += 1) m[I] = da(fa(o, d, I));
  let g = (I) =>
      h(m[I], 1, 1, () => {
        m[I] = null;
      }),
    b = o[1],
    k = [];
  for (let I = 0; I < b.length; I += 1) k[I] = ma(pa(o, b, I));
  let E = (I) =>
    h(k[I], 1, 1, () => {
      k[I] = null;
    });
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (n.textContent = `${A("overlay_global_search__shortcuts_title")}`),
        (t = S());
      for (let I = 0; I < m.length; I += 1) m[I].c();
      (l = S()),
        (r = v("div")),
        (i = v("div")),
        (i.textContent = `${A("overlay_global_search__commands_title")}`),
        (s = S());
      for (let I = 0; I < k.length; I += 1) k[I].c();
      c(n, "class", "section-title svelte-60wr9g"),
        c(e, "class", "commands-section svelte-60wr9g"),
        c(i, "class", "section-title svelte-60wr9g");
    },
    m(I, T) {
      w(I, e, T), f(e, n), f(e, t);
      for (let P = 0; P < m.length; P += 1) m[P] && m[P].m(e, null);
      w(I, l, T), w(I, r, T), f(r, i), f(r, s);
      for (let P = 0; P < k.length; P += 1) k[P] && k[P].m(r, null);
      (a = !0), u || ((p = X(window, "keydown", o[3])), (u = !0));
    },
    p(I, [T]) {
      if (T & 21) {
        d = I[0];
        let P;
        for (P = 0; P < d.length; P += 1) {
          let M = fa(I, d, P);
          m[P]
            ? (m[P].p(M, T), _(m[P], 1))
            : ((m[P] = da(M)), m[P].c(), _(m[P], 1), m[P].m(e, null));
        }
        for (Q(), P = d.length; P < m.length; P += 1) g(P);
        Y();
      }
      if (T & 23) {
        b = I[1];
        let P;
        for (P = 0; P < b.length; P += 1) {
          let M = pa(I, b, P);
          k[P]
            ? (k[P].p(M, T), _(k[P], 1))
            : ((k[P] = ma(M)), k[P].c(), _(k[P], 1), k[P].m(r, null));
        }
        for (Q(), P = b.length; P < k.length; P += 1) E(P);
        Y();
      }
    },
    i(I) {
      if (!a) {
        for (let T = 0; T < d.length; T += 1) _(m[T]);
        for (let T = 0; T < b.length; T += 1) _(k[T]);
        a = !0;
      }
    },
    o(I) {
      m = m.filter(Boolean);
      for (let T = 0; T < m.length; T += 1) h(m[T]);
      k = k.filter(Boolean);
      for (let T = 0; T < k.length; T += 1) h(k[T]);
      a = !1;
    },
    d(I) {
      I && $(e), Ae(m, I), I && $(l), I && $(r), Ae(k, I), (u = !1), p();
    },
  };
}
function cm(o, e, n) {
  let t,
    l = oe(),
    { shortcutCommands: r } = e,
    { commands: i } = e,
    s = 0,
    a = (g) => {
      if (!g.isComposing)
        switch (g.code) {
          case "Enter": {
            g.preventDefault();
            let b = t[s];
            b && u(b);
            break;
          }
          case "ArrowUp":
            g.preventDefault(), n(2, (s = Ft(s, t.length, -1)));
            break;
          case "ArrowDown":
            g.preventDefault(), n(2, (s = Ft(s, t.length, 1)));
            break;
          default:
        }
    },
    u = (g) => {
      q.actions.sendAnalyticsEvent("user-commands.activated", { type: g.id }),
        q.actions.activateCommand(g.id),
        (g.id === "open-current-in-split-view" ||
          g.id === "open-collections-or-tasks" ||
          g.id === "share-with-friends" ||
          r.includes(g)) &&
          p();
    },
    p = () => l("close"),
    d = (g) => u(g),
    m = (g) => u(g);
  return (
    (o.$$set = (g) => {
      "shortcutCommands" in g && n(0, (r = g.shortcutCommands)),
        "commands" in g && n(1, (i = g.commands));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 3) {
        e: n(5, (t = [...r, ...i]));
      }
      if (o.$$.dirty & 36) {
        e: t.length <= s && n(2, (s = 0));
      }
    }),
    [r, i, s, a, u, t, d, m]
  );
}
var Ao = class extends H {
    constructor(e) {
      super(), j(this, e, cm, am, U, { shortcutCommands: 0, commands: 1 }, sm);
    }
  },
  _a = Ao;
function pm(o) {
  Z(
    o,
    "svelte-16s7jfh",
    "main.svelte-16s7jfh{padding:20px;display:flex;flex-direction:column;flex:0 1 auto}header.svelte-16s7jfh{flex:0}.search-content.svelte-16s7jfh{display:flex;flex-direction:column;flex:0 1 auto;position:relative;width:100%;margin-top:10px}.search-results.svelte-16s7jfh{flex:0 1 auto;list-style:none;overflow-x:hidden;overflow-y:auto;margin:0 -16px;padding:0 16px 16px;max-height:calc(80vh - 234px)}"
  );
}
function ga(o) {
  let e, n;
  return (
    (e = new la({ props: { popperContent: o[12], keys: o[9] } })),
    e.$on("confirm", o[17]),
    e.$on("cancel", o[18]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 512 && (r.keys = t[9]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function ha(o) {
  let e, n;
  return (
    (e = new oa({})),
    e.$on("close", o[16]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function fm(o) {
  let e, n;
  return (
    (e = new _a({ props: { shortcutCommands: o[5], commands: o[4] } })),
    e.$on("close", o[15]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 32 && (r.shortcutCommands = t[5]),
          l & 16 && (r.commands = t[4]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function dm(o) {
  let e,
    n,
    t = { searchResult: o[2], totalHistoryCount: o[3], copyShortcutKeys: o[8] };
  return (
    (e = new aa({ props: t })),
    o[24](e),
    e.$on("close", o[15]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(l, r) {
        C(e, l, r), (n = !0);
      },
      p(l, r) {
        let i = {};
        r & 4 && (i.searchResult = l[2]),
          r & 8 && (i.totalHistoryCount = l[3]),
          r & 256 && (i.copyShortcutKeys = l[8]),
          e.$set(i);
      },
      i(l) {
        n || (_(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        h(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        o[24](null), x(e, l);
      },
    }
  );
}
function mm(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E;
  function I(z) {
    o[23](z);
  }
  let T = {};
  o[0] !== void 0 && (T.query = o[0]),
    (t = new ms({ props: T })),
    we.push(() => Ye(t, "query", I));
  let P = o[10] && !o[7] && ha(o),
    M = [dm, fm],
    B = [];
  function O(z, G) {
    return z[2] ? 0 : z[0] === "" ? 1 : -1;
  }
  return (
    ~(p = O(o, -1)) && (d = B[p] = M[p](o)),
    (g = new _s({ props: { copyShortcutKeys: o[2] ? o[8] : void 0 } })),
    {
      c() {
        (e = v("main")),
          (n = v("header")),
          y(t.$$.fragment),
          (i = S()),
          P && P.c(),
          (s = S()),
          (a = v("div")),
          (u = v("ul")),
          d && d.c(),
          (m = S()),
          y(g.$$.fragment),
          c(n, "class", "svelte-16s7jfh"),
          c(u, "class", "search-results svelte-16s7jfh"),
          c(u, "data-testid", "global-search-search-results"),
          c(a, "class", "search-content svelte-16s7jfh"),
          c(e, "class", "svelte-16s7jfh");
      },
      m(z, G) {
        w(z, e, G),
          f(e, n),
          C(t, n, null),
          f(e, i),
          P && P.m(e, null),
          f(e, s),
          f(e, a),
          f(a, u),
          ~p && B[p].m(u, null),
          f(a, m),
          C(g, a, null),
          (b = !0),
          k || ((E = gt((r = o[11].call(null, n)))), (k = !0));
      },
      p(z, G) {
        let W = {};
        !l && G & 1 && ((l = !0), (W.query = z[0]), Qe(() => (l = !1))),
          t.$set(W),
          z[10] && !z[7]
            ? P
              ? (P.p(z, G), G & 1152 && _(P, 1))
              : ((P = ha(z)), P.c(), _(P, 1), P.m(e, s))
            : P &&
              (Q(),
              h(P, 1, 1, () => {
                P = null;
              }),
              Y());
        let D = p;
        (p = O(z, G)),
          p === D
            ? ~p && B[p].p(z, G)
            : (d &&
                (Q(),
                h(B[D], 1, 1, () => {
                  B[D] = null;
                }),
                Y()),
              ~p
                ? ((d = B[p]),
                  d ? d.p(z, G) : ((d = B[p] = M[p](z)), d.c()),
                  _(d, 1),
                  d.m(u, null))
                : (d = null));
        let R = {};
        G & 260 && (R.copyShortcutKeys = z[2] ? z[8] : void 0), g.$set(R);
      },
      i(z) {
        b || (_(t.$$.fragment, z), _(P), _(d), _(g.$$.fragment, z), (b = !0));
      },
      o(z) {
        h(t.$$.fragment, z), h(P), h(d), h(g.$$.fragment, z), (b = !1);
      },
      d(z) {
        z && $(e), x(t), P && P.d(), ~p && B[p].d(), x(g), (k = !1), E();
      },
    }
  );
}
function _m(o) {
  let e,
    n,
    t,
    l = o[6] && ga(o);
  return (
    (n = new $e({
      props: {
        width: 740,
        height: "auto",
        maxHeight: "80vh",
        dataTestId: "global-search-popup",
        $$slots: { default: [mm] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        l && l.c(), (e = S()), y(n.$$.fragment);
      },
      m(r, i) {
        l && l.m(r, i), w(r, e, i), C(n, r, i), (t = !0);
      },
      p(r, i) {
        r[6]
          ? l
            ? (l.p(r, i), i & 64 && _(l, 1))
            : ((l = ga(r)), l.c(), _(l, 1), l.m(e.parentNode, e))
          : l &&
            (Q(),
            h(l, 1, 1, () => {
              l = null;
            }),
            Y());
        let s = {};
        i & 1073743295 && (s.$$scope = { dirty: i, ctx: r }), n.$set(s);
      },
      i(r) {
        t || (_(l), _(n.$$.fragment, r), (t = !0));
      },
      o(r) {
        h(l), h(n.$$.fragment, r), (t = !1);
      },
      d(r) {
        l && l.d(r), r && $(e), x(n, r);
      },
    }
  );
}
function gm(o) {
  let e, n;
  return (
    (e = new Ce({
      props: {
        isFixedOnTop: !0,
        $$slots: { default: [_m] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[15]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1073743871 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function hm(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g = oe(),
    { source: b } = e,
    k = "",
    E = null,
    I = 0,
    T,
    [P, M] = At({
      placement: "bottom-end",
      modifiers: [{ name: "offset", options: { offset: [0, 32] } }],
    }),
    B = q.stores.globalSearch;
  ve(o, B, (se) => n(21, (d = se)));
  let O = q.stores.walkthrough;
  ve(o, O, (se) => n(22, (m = se)));
  let z = [],
    G = Jn(
      () => q.actions.sendAnalyticsEvent("global-search.auto-used", void 0),
      zt(1)
    ),
    W = Jn(() => {
      let se = Ni();
      if (!se) return;
      let ae = se.startTransaction({ ...Ji.SEARCH_TRX }),
        me = qi(z.reduce((ke, Re) => ke + Re) / z.length);
      z = [];
      let ce = ae.startTimestamp + me;
      ae.finish(ce);
    }, zt(1)),
    D = async () => {
      k && G();
      let se = k;
      performance.mark("request-started");
      let { result: ae, meta: me } = await q.queries.searchGlobally({
        text: se,
        maxResults: 20,
      });
      if ((performance.mark("request-finished"), se !== k)) return;
      n(2, (E = ae)), n(3, (I = me.totalHistoryCount));
      let ce = performance.measure(
        "request-duration",
        "request-started",
        "request-finished"
      );
      z.push(Number(ce.duration.toFixed())), W();
    },
    R = () => {
      n(0, (k = "")), g("close");
    },
    K = () => {
      q.actions.changeIsHiddenWelcomeGlobalSearch(!0);
    },
    ne = () => {
      s && q.actions.confirmWalkthrough(s);
    },
    te = () => {
      s && q.actions.sendAnalyticsEvent("walkthrough.skip-button-clicked", s),
        q.actions.switchWalkthrough(!1);
    };
  ye(
    () => (
      q.actions.sendAnalyticsEvent("global-search.auto-opened", { source: b }),
      () => {
        q.actions.sendAnalyticsEvent("global-search.auto-closed", {
          source: b,
        });
      }
    )
  );
  function le(se) {
    (k = se), n(0, k);
  }
  function re(se) {
    we[se ? "unshift" : "push"](() => {
      (T = se), n(1, T);
    });
  }
  return (
    (o.$$set = (se) => {
      "source" in se && n(19, (b = se.source));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2097152) {
        e: n(10, (t = d?.isUnexplored ?? !1));
      }
      if (o.$$.dirty & 2097152) {
        e: n(9, (l = d?.globalSearchShortcutKeys ?? []));
      }
      if (o.$$.dirty & 2097152) {
        e: n(8, (r = d?.copyShortcutKeys ?? []));
      }
      if (o.$$.dirty & 2097152) {
        e: n(7, (i = d?.isHiddenWelcomeGlobalSearch ?? !1));
      }
      if (o.$$.dirty & 4194304) {
        e: n(20, (s = m?.currentStep ?? null));
      }
      if (o.$$.dirty & 1048576) {
        e: n(6, (a = s?.step === "search"));
      }
      if (o.$$.dirty & 2097152) {
        e: n(5, (u = d?.shortcutCommands ?? []));
      }
      if (o.$$.dirty & 2097152) {
        e: n(4, (p = d?.commands ?? []));
      }
      if (o.$$.dirty & 3) {
        e: k !== null && T?.resetIndex();
      }
      if (o.$$.dirty & 1) {
        e: k ? D().catch(ft) : n(2, (E = null));
      }
    }),
    [
      k,
      T,
      E,
      I,
      p,
      u,
      a,
      i,
      r,
      l,
      t,
      P,
      M,
      B,
      O,
      R,
      K,
      ne,
      te,
      b,
      s,
      d,
      m,
      le,
      re,
    ]
  );
}
var Eo = class extends H {
    constructor(e) {
      super(), j(this, e, hm, gm, U, { source: 19 }, pm);
    }
  },
  va = Eo;
N();
N();
N();
N();
function vm(o) {
  Z(
    o,
    "svelte-156whiz",
    ".wrapper.svelte-156whiz.svelte-156whiz{flex:0 0 auto}.wide-wrapper.svelte-156whiz.svelte-156whiz{flex:1 1 100%}form.svelte-156whiz.svelte-156whiz{display:flex;height:36px;padding:8px 10px;align-items:center;background:var(--input-with-submit-background);color:var(--input-with-submit-color);border-radius:3px;gap:4px}form.focused.svelte-156whiz.svelte-156whiz{box-shadow:inset 0 0 0 2px var(--input-with-submit-border-focus)}form.invalid.svelte-156whiz.svelte-156whiz{box-shadow:inset 0 0 0 2px var(--input-with-submit-border-invalid)}form.svelte-156whiz.svelte-156whiz,form.svelte-156whiz .svelte-156whiz{box-sizing:border-box}input.svelte-156whiz.svelte-156whiz{all:unset;flex:1 1 auto}.error.svelte-156whiz.svelte-156whiz{color:var(--error-color);font-size:11px;margin-top:4px}"
  );
}
function ba(o) {
  let e, n;
  return {
    c() {
      (e = v("div")), (n = V(o[5])), c(e, "class", "error svelte-156whiz");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 32 && ee(n, t[5]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function bm(o) {
  let e, n, t, l, r, i, s, a, u;
  (r = new ws({ props: { type: "submit", dataTestId: "submit-button" } })),
    r.$on("focus", o[13]),
    r.$on("blur", o[14]);
  let p = o[5] && o[3] && ba(o);
  return {
    c() {
      (e = v("div")),
        (n = v("form")),
        (t = v("input")),
        (l = S()),
        y(r.$$.fragment),
        (i = S()),
        p && p.c(),
        c(t, "placeholder", o[0]),
        c(t, "class", "svelte-156whiz"),
        c(n, "class", "svelte-156whiz"),
        ie(n, "focused", o[4]),
        ie(n, "invalid", o[5]),
        c(e, "class", "wrapper svelte-156whiz"),
        ie(e, "wide-wrapper", o[2]);
    },
    m(d, m) {
      w(d, e, m),
        f(e, n),
        f(n, t),
        Ne(t, o[6]),
        f(n, l),
        C(r, n, null),
        f(e, i),
        p && p.m(e, null),
        (s = !0),
        a ||
          ((u = [
            X(t, "input", o[10]),
            X(t, "focus", o[11]),
            X(t, "blur", o[12]),
            X(t, "paste", o[9]),
            X(n, "submit", wt(o[7])),
          ]),
          (a = !0));
    },
    p(d, [m]) {
      (!s || m & 1) && c(t, "placeholder", d[0]),
        m & 64 && t.value !== d[6] && Ne(t, d[6]),
        (!s || m & 16) && ie(n, "focused", d[4]),
        (!s || m & 32) && ie(n, "invalid", d[5]),
        d[5] && d[3]
          ? p
            ? p.p(d, m)
            : ((p = ba(d)), p.c(), p.m(e, null))
          : p && (p.d(1), (p = null)),
        (!s || m & 4) && ie(e, "wide-wrapper", d[2]);
    },
    i(d) {
      s || (_(r.$$.fragment, d), (s = !0));
    },
    o(d) {
      h(r.$$.fragment, d), (s = !1);
    },
    d(d) {
      d && $(e), x(r), p && p.d(), (a = !1), Se(u);
    },
  };
}
function km(o, e, n) {
  let t,
    l = L,
    r = () => (l(), (l = kt(u, (B) => n(6, (t = B)))), u);
  o.$$.on_destroy.push(() => l());
  let i = oe(),
    { placeholder: s = "" } = e,
    { validate: a = () => null } = e,
    { value: u = it("") } = e;
  r();
  let { wide: p = !1 } = e,
    { isVisibleError: d = !0 } = e,
    m = !1,
    g = null,
    b = () => {
      if ((n(5, (g = a(t))), g)) {
        i("error", g);
        return;
      }
      i("submit", t), tt(u, (t = ""), t);
    };
  function k(B) {
    ue.call(this, o, B);
  }
  function E() {
    (t = this.value), u.set(t);
  }
  let I = () => n(4, (m = !0)),
    T = () => n(4, (m = !1)),
    P = () => n(4, (m = !0)),
    M = () => n(4, (m = !1));
  return (
    (o.$$set = (B) => {
      "placeholder" in B && n(0, (s = B.placeholder)),
        "validate" in B && n(8, (a = B.validate)),
        "value" in B && r(n(1, (u = B.value))),
        "wide" in B && n(2, (p = B.wide)),
        "isVisibleError" in B && n(3, (d = B.isVisibleError));
    }),
    [s, u, p, d, m, g, t, b, a, k, E, I, T, P, M]
  );
}
var Io = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          km,
          bm,
          U,
          { placeholder: 0, validate: 8, value: 1, wide: 2, isVisibleError: 3 },
          vm
        );
    }
  },
  Tn = Io;
function wm(o) {
  Z(
    o,
    "svelte-fr493x",
    ".description.svelte-fr493x{display:flex;justify-content:space-between}.error.svelte-fr493x{color:var(--error-color)}"
  );
}
function $m(o) {
  let e;
  return {
    c() {
      e = V(o[1]);
    },
    m(n, t) {
      w(n, e, t);
    },
    p(n, t) {
      t & 2 && ee(e, n[1]);
    },
    d(n) {
      n && $(e);
    },
  };
}
function ka(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_account_tab__info_team_title"),
        $$slots: { default: [ym] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 262148 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function ym(o) {
  let e;
  return {
    c() {
      e = V(o[2]);
    },
    m(n, t) {
      w(n, e, t);
    },
    p(n, t) {
      t & 4 && ee(e, n[2]);
    },
    d(n) {
      n && $(e);
    },
  };
}
function wa(o) {
  let e, n, t, l, r, i;
  (e = new Me({
    props: {
      name: A("overlay_settings_account_tab__info_pricing_plan_title"),
      $$slots: { default: [xm] },
      $$scope: { ctx: o },
    },
  })),
    (t = new Me({
      props: {
        name: A("overlay_settings_account_tab__info_code_title"),
        $$slots: { description: [Im], default: [Em] },
        $$scope: { ctx: o },
      },
    }));
  let s = !o[4] && !o[7] && !o[8] && ya(o);
  return {
    c() {
      y(e.$$.fragment),
        (n = S()),
        y(t.$$.fragment),
        (l = S()),
        s && s.c(),
        (r = fe());
    },
    m(a, u) {
      C(e, a, u),
        w(a, n, u),
        C(t, a, u),
        w(a, l, u),
        s && s.m(a, u),
        w(a, r, u),
        (i = !0);
    },
    p(a, u) {
      let p = {};
      u & 262232 && (p.$$scope = { dirty: u, ctx: a }), e.$set(p);
      let d = {};
      u & 262657 && (d.$$scope = { dirty: u, ctx: a }),
        t.$set(d),
        !a[4] && !a[7] && !a[8]
          ? s
            ? (s.p(a, u), u & 400 && _(s, 1))
            : ((s = ya(a)), s.c(), _(s, 1), s.m(r.parentNode, r))
          : s &&
            (Q(),
            h(s, 1, 1, () => {
              s = null;
            }),
            Y());
    },
    i(a) {
      i || (_(e.$$.fragment, a), _(t.$$.fragment, a), _(s), (i = !0));
    },
    o(a) {
      h(e.$$.fragment, a), h(t.$$.fragment, a), h(s), (i = !1);
    },
    d(a) {
      x(e, a), a && $(n), x(t, a), a && $(l), s && s.d(a), a && $(r);
    },
  };
}
function $a(o) {
  let e, n;
  return (
    (e = new pe({
      props: { size: "small", $$slots: { default: [Cm] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[14]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 262144 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Cm(o) {
  let e = A("overlay_settings_account_tab__info_pricing_plan_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function xm(o) {
  let e,
    n,
    t,
    l,
    r = o[4] && o[6] && $a(o);
  return {
    c() {
      (e = V(o[3])), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      w(i, e, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      (!l || s & 8) && ee(e, i[3]),
        i[4] && i[6]
          ? r
            ? (r.p(i, s), s & 80 && _(r, 1))
            : ((r = $a(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(r), (l = !0));
    },
    o(i) {
      h(r), (l = !1);
    },
    d(i) {
      i && $(e), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function Sm(o) {
  let e, n;
  return (
    (e = new Tn({
      props: {
        placeholder: A("overlay_settings_account_tab__info_code_placeholder"),
        isVisibleError: !1,
        validate: o[12],
      },
    })),
    e.$on("submit", o[11]),
    e.$on("error", o[13]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Am(o) {
  let e;
  return {
    c() {
      e = V(o[0]);
    },
    m(n, t) {
      w(n, e, t);
    },
    p(n, t) {
      t & 1 && ee(e, n[0]);
    },
    i: L,
    o: L,
    d(n) {
      n && $(e);
    },
  };
}
function Em(o) {
  let e,
    n,
    t,
    l,
    r = [Am, Sm],
    i = [];
  function s(a, u) {
    return a[0] ? 0 : 1;
  }
  return (
    (e = s(o, -1)),
    (n = i[e] = r[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(a, u) {
        i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, u) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? i[e].p(a, u)
            : (Q(),
              h(i[p], 1, 1, () => {
                i[p] = null;
              }),
              Y(),
              (n = i[e]),
              n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
              _(n, 1),
              n.m(t.parentNode, t));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        i[e].d(a), a && $(t);
      },
    }
  );
}
function Im(o) {
  let e, n, t, l, r;
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (n.textContent = `${A(
          "overlay_settings_account_tab__info_code_description"
        )}`),
        (t = S()),
        (l = v("span")),
        (r = V(o[9])),
        c(l, "class", "error svelte-fr493x"),
        c(e, "class", "description svelte-fr493x"),
        c(e, "slot", "description");
    },
    m(i, s) {
      w(i, e, s), f(e, n), f(e, t), f(e, l), f(l, r);
    },
    p(i, s) {
      s & 512 && ee(r, i[9]);
    },
    d(i) {
      i && $(e);
    },
  };
}
function ya(o) {
  let e, n;
  return (
    (e = new Me({
      props: { $$slots: { default: [Mm] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 262144 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Tm(o) {
  let e = A("overlay_settings_account_tab__info_upgrade_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Mm(o) {
  let e, n;
  return (
    (e = new pe({
      props: { size: "small", $$slots: { default: [Tm] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[10]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 262144 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Pm(o) {
  let e, n, t, l, r;
  e = new Me({
    props: {
      name: A("overlay_settings_account_tab__info_account_type_title"),
      $$slots: { default: [$m] },
      $$scope: { ctx: o },
    },
  });
  let i = !o[5] && ka(o),
    s = o[5] && wa(o);
  return {
    c() {
      y(e.$$.fragment),
        (n = S()),
        i && i.c(),
        (t = S()),
        s && s.c(),
        (l = fe());
    },
    m(a, u) {
      C(e, a, u),
        w(a, n, u),
        i && i.m(a, u),
        w(a, t, u),
        s && s.m(a, u),
        w(a, l, u),
        (r = !0);
    },
    p(a, u) {
      let p = {};
      u & 262146 && (p.$$scope = { dirty: u, ctx: a }),
        e.$set(p),
        a[5]
          ? i &&
            (Q(),
            h(i, 1, 1, () => {
              i = null;
            }),
            Y())
          : i
          ? (i.p(a, u), u & 32 && _(i, 1))
          : ((i = ka(a)), i.c(), _(i, 1), i.m(t.parentNode, t)),
        a[5]
          ? s
            ? (s.p(a, u), u & 32 && _(s, 1))
            : ((s = wa(a)), s.c(), _(s, 1), s.m(l.parentNode, l))
          : s &&
            (Q(),
            h(s, 1, 1, () => {
              s = null;
            }),
            Y());
    },
    i(a) {
      r || (_(e.$$.fragment, a), _(i), _(s), (r = !0));
    },
    o(a) {
      h(e.$$.fragment, a), h(i), h(s), (r = !1);
    },
    d(a) {
      x(e, a), a && $(n), i && i.d(a), a && $(t), s && s.d(a), a && $(l);
    },
  };
}
function zm(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "account-info-section",
        $$slots: { default: [Pm] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 263167 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var Bm = /https:\/\/join.meetsidekick.com\/(?<code>.{5})/,
  Nm = "code";
function qm(o, e, n) {
  let { accountType: t } = e,
    { teamName: l } = e,
    { billingPlanName: r } = e,
    { cancelLink: i } = e,
    { isPersonalAccount: s } = e,
    { inviterCode: a } = e,
    { userReferralCode: u } = e,
    { showCustomerPortalButton: p } = e,
    { hasActiveInvitesBonus: d } = e,
    { isTemporaryUser: m } = e,
    g = "",
    b = () => {
      q.actions.sendAnalyticsEvent("settings.upgrade-button-clicked", void 0),
        q.actions.startPlanUpgrade({
          source: "settings.upgrade-button-clicked",
        });
    },
    k = (B) => Bm.exec(B)?.groups?.[Nm] || B,
    E = (B) => B?.name === Gi.name,
    I = async (B) => {
      let O = k(B.detail);
      try {
        await q.queries.updateInviterCode(O);
      } catch (z) {
        if ((n(0, (a = null)), E(z) && [400, 404].includes(z.status))) {
          n(
            9,
            (g = A("overlay_settings_account_tab__info_code_invalid_error"))
          );
          return;
        }
        throw z;
      }
      n(0, (a = O)), n(9, (g = ""));
    },
    T = (B) => {
      if (!B) return A("overlay_settings_account_tab__info_code_empty_error");
      let O = k(B);
      return O.length !== 5
        ? A("overlay_settings_account_tab__info_code_wrong_error")
        : O === u
        ? A("overlay_settings_account_tab__info_code_disallowed_error")
        : "";
    },
    P = (B) => {
      n(9, (g = B.detail));
    },
    M = () => {
      p &&
        (q.actions.openCustomerPortal(),
        q.actions.sendAnalyticsEvent(
          "settings.customer-portal-clicked",
          void 0
        ));
    };
  return (
    (o.$$set = (B) => {
      "accountType" in B && n(1, (t = B.accountType)),
        "teamName" in B && n(2, (l = B.teamName)),
        "billingPlanName" in B && n(3, (r = B.billingPlanName)),
        "cancelLink" in B && n(4, (i = B.cancelLink)),
        "isPersonalAccount" in B && n(5, (s = B.isPersonalAccount)),
        "inviterCode" in B && n(0, (a = B.inviterCode)),
        "userReferralCode" in B && n(15, (u = B.userReferralCode)),
        "showCustomerPortalButton" in B &&
          n(6, (p = B.showCustomerPortalButton)),
        "hasActiveInvitesBonus" in B && n(7, (d = B.hasActiveInvitesBonus)),
        "isTemporaryUser" in B && n(8, (m = B.isTemporaryUser));
    }),
    [a, t, l, r, i, s, p, d, m, g, b, I, T, P, M, u]
  );
}
var To = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          qm,
          zm,
          U,
          {
            accountType: 1,
            teamName: 2,
            billingPlanName: 3,
            cancelLink: 4,
            isPersonalAccount: 5,
            inviterCode: 0,
            userReferralCode: 15,
            showCustomerPortalButton: 6,
            hasActiveInvitesBonus: 7,
            isTemporaryUser: 8,
          },
          wm
        );
    }
  },
  Ca = To;
N();
N();
N();
function Dm(o) {
  Z(
    o,
    "svelte-1z0upky",
    ".progress-bar.svelte-1z0upky{flex:1 1 100%}label.svelte-1z0upky{display:flex;flex-direction:column;font-size:14px;color:var(--theme-70);margin:0;gap:4px 12px}.description.svelte-1z0upky{margin-top:8px;font-size:12px;line-height:1.5;color:var(--theme-85)}progress.svelte-1z0upky{appearance:none;width:100%;height:5px}progress.svelte-1z0upky::-webkit-progress-bar{background:rgb(113 208 99 / 0.2);border-radius:5px;overflow:hidden}progress.svelte-1z0upky::-webkit-progress-value{background:#71d063;min-width:10px}"
  );
}
var Lm = (o) => ({}),
  xa = (o) => ({});
function Um(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a = o[3].label,
    u = We(a, o, o[2], xa),
    p = o[3].default,
    d = We(p, o, o[2], null);
  return {
    c() {
      (e = v("div")),
        (n = v("label")),
        u && u.c(),
        (t = S()),
        (l = v("progress")),
        (r = S()),
        (i = v("div")),
        d && d.c(),
        c(n, "for", ""),
        c(n, "class", "svelte-1z0upky"),
        c(l, "max", o[0]),
        (l.value = o[1]),
        c(l, "data-testid", "progress-bar"),
        c(l, "class", "svelte-1z0upky"),
        c(i, "class", "description svelte-1z0upky"),
        c(e, "class", "progress-bar svelte-1z0upky");
    },
    m(m, g) {
      w(m, e, g),
        f(e, n),
        u && u.m(n, null),
        f(e, t),
        f(e, l),
        f(e, r),
        f(e, i),
        d && d.m(i, null),
        (s = !0);
    },
    p(m, [g]) {
      u &&
        u.p &&
        (!s || g & 4) &&
        Fe(u, a, m, m[2], s ? Ge(a, m[2], g, Lm) : Ze(m[2]), xa),
        (!s || g & 1) && c(l, "max", m[0]),
        (!s || g & 2) && (l.value = m[1]),
        d &&
          d.p &&
          (!s || g & 4) &&
          Fe(d, p, m, m[2], s ? Ge(p, m[2], g, null) : Ze(m[2]), null);
    },
    i(m) {
      s || (_(u, m), _(d, m), (s = !0));
    },
    o(m) {
      h(u, m), h(d, m), (s = !1);
    },
    d(m) {
      m && $(e), u && u.d(m), d && d.d(m);
    },
  };
}
function jm(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    { max: r } = e,
    { value: i } = e;
  return (
    (o.$$set = (s) => {
      "max" in s && n(0, (r = s.max)),
        "value" in s && n(1, (i = s.value)),
        "$$scope" in s && n(2, (l = s.$$scope));
    }),
    [r, i, l, t]
  );
}
var Mo = class extends H {
    constructor(e) {
      super(), j(this, e, jm, Um, U, { max: 0, value: 1 }, Dm);
    }
  },
  Sa = Mo;
function Hm(o) {
  Z(o, "svelte-yqwmr6", "p.svelte-yqwmr6{margin:0}");
}
function Aa(o, e, n) {
  let t = o.slice();
  return (t[8] = e[n]), t;
}
var Vm = (o) => ({}),
  Ea = (o) => ({});
function Ia(o) {
  let e,
    n = o[6]["bonus-list"],
    t = We(n, o, o[7], Ea),
    l = t || Om(o);
  return {
    c() {
      l && l.c();
    },
    m(r, i) {
      l && l.m(r, i), (e = !0);
    },
    p(r, i) {
      t
        ? t.p &&
          (!e || i & 128) &&
          Fe(t, n, r, r[7], e ? Ge(n, r[7], i, Vm) : Ze(r[7]), Ea)
        : l && l.p && (!e || i & 8) && l.p(r, e ? i : -1);
    },
    i(r) {
      e || (_(l, r), (e = !0));
    },
    o(r) {
      h(l, r), (e = !1);
    },
    d(r) {
      l && l.d(r);
    },
  };
}
function Ta(o) {
  let e,
    n = o[8].requiredActivations + "",
    t,
    l,
    r = A("components_referral_progress__signups") + "",
    i,
    s,
    a = o[8].durationInMonths
      ? `\u{1F389} ${o[8].durationInMonths} ${A(
          "components_referral_progress__months"
        )}`
      : "\u{1F381} Forever free",
    u,
    p,
    d;
  return {
    c() {
      (e = v("p")),
        (t = V(n)),
        (l = S()),
        (i = V(r)),
        (s = V(`
          =
          `)),
        (u = V(a)),
        (p = S()),
        c(e, "data-testid", (d = "upgrade-bonus-" + o[8].durationInMonths)),
        c(e, "class", "svelte-yqwmr6");
    },
    m(m, g) {
      w(m, e, g), f(e, t), f(e, l), f(e, i), f(e, s), f(e, u), f(e, p);
    },
    p(m, g) {
      g & 8 && n !== (n = m[8].requiredActivations + "") && ee(t, n),
        g & 8 &&
          a !==
            (a = m[8].durationInMonths
              ? `\u{1F389} ${m[8].durationInMonths} ${A(
                  "components_referral_progress__months"
                )}`
              : "\u{1F381} Forever free") &&
          ee(u, a),
        g & 8 &&
          d !== (d = "upgrade-bonus-" + m[8].durationInMonths) &&
          c(e, "data-testid", d);
    },
    d(m) {
      m && $(e);
    },
  };
}
function Om(o) {
  let e,
    n,
    t,
    l,
    r = o[3],
    i = [];
  for (let s = 0; s < r.length; s += 1) i[s] = Ta(Aa(o, r, s));
  return {
    c() {
      (e = v("p")),
        (n = v("strong")),
        (n.textContent = `${A("components_referral_progress__bonuses_title")}`),
        (t = S());
      for (let s = 0; s < i.length; s += 1) i[s].c();
      (l = fe()), c(e, "class", "svelte-yqwmr6");
    },
    m(s, a) {
      w(s, e, a), f(e, n), w(s, t, a);
      for (let u = 0; u < i.length; u += 1) i[u] && i[u].m(s, a);
      w(s, l, a);
    },
    p(s, a) {
      if (a & 8) {
        r = s[3];
        let u;
        for (u = 0; u < r.length; u += 1) {
          let p = Aa(s, r, u);
          i[u]
            ? i[u].p(p, a)
            : ((i[u] = Ta(p)), i[u].c(), i[u].m(l.parentNode, l));
        }
        for (; u < i.length; u += 1) i[u].d(1);
        i.length = r.length;
      }
    },
    d(s) {
      s && $(e), s && $(t), Ae(i, s), s && $(l);
    },
  };
}
function Rm(o) {
  let e,
    n,
    t = o[5] && o[3].length && Ia(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[5] && l[3].length
        ? t
          ? (t.p(l, r), r & 40 && _(t, 1))
          : ((t = Ia(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function Wm(o) {
  let e, n;
  return (
    (e = new xn({ props: { width: "14", height: "14" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Gm(o) {
  let e = A("components_referral_progress__tooltip") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Fm(o) {
  let e,
    n,
    t,
    l = A("components_referral_progress__downloaded") + "",
    r,
    i,
    s,
    a,
    u,
    p = A("components_referral_progress__signed_up") + "",
    d,
    m,
    g,
    b;
  return (
    (g = new Bt({
      props: { $$slots: { tooltip: [Gm], default: [Wm] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = v("span")),
          (n = V(o[1])),
          (t = S()),
          (r = V(l)),
          (i = S()),
          (s = v("span")),
          (a = V(o[2])),
          (u = S()),
          (d = V(p)),
          (m = S()),
          y(g.$$.fragment),
          c(e, "class", o[4]),
          c(e, "data-testid", "progress-bar-downloaded-count"),
          c(s, "class", o[4]),
          c(s, "data-testid", "progress-bar-signedup-count");
      },
      m(k, E) {
        w(k, e, E),
          f(e, n),
          f(e, t),
          f(e, r),
          w(k, i, E),
          w(k, s, E),
          f(s, a),
          f(s, u),
          f(s, d),
          f(s, m),
          C(g, s, null),
          (b = !0);
      },
      p(k, E) {
        (!b || E & 2) && ee(n, k[1]),
          (!b || E & 16) && c(e, "class", k[4]),
          (!b || E & 4) && ee(a, k[2]);
        let I = {};
        E & 128 && (I.$$scope = { dirty: E, ctx: k }),
          g.$set(I),
          (!b || E & 16) && c(s, "class", k[4]);
      },
      i(k) {
        b || (_(g.$$.fragment, k), (b = !0));
      },
      o(k) {
        h(g.$$.fragment, k), (b = !1);
      },
      d(k) {
        k && $(e), k && $(i), k && $(s), x(g);
      },
    }
  );
}
function Zm(o) {
  let e, n;
  return (
    (e = new Sa({
      props: {
        max: o[0],
        value: o[2],
        $$slots: { label: [Fm], default: [Rm] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1 && (r.max = t[0]),
          l & 4 && (r.value = t[2]),
          l & 190 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Km(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    { requiredActivations: r } = e,
    { downloads: i } = e,
    { activations: s } = e,
    { obtainedBonusesByInvites: a } = e,
    { referralsCountClassName: u = "" } = e,
    { isBonusesSectionVisible: p = !0 } = e;
  return (
    (o.$$set = (d) => {
      "requiredActivations" in d && n(0, (r = d.requiredActivations)),
        "downloads" in d && n(1, (i = d.downloads)),
        "activations" in d && n(2, (s = d.activations)),
        "obtainedBonusesByInvites" in d &&
          n(3, (a = d.obtainedBonusesByInvites)),
        "referralsCountClassName" in d && n(4, (u = d.referralsCountClassName)),
        "isBonusesSectionVisible" in d && n(5, (p = d.isBonusesSectionVisible)),
        "$$scope" in d && n(7, (l = d.$$scope));
    }),
    [r, i, s, a, u, p, t, l]
  );
}
var Po = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          Km,
          Zm,
          U,
          {
            requiredActivations: 0,
            downloads: 1,
            activations: 2,
            obtainedBonusesByInvites: 3,
            referralsCountClassName: 4,
            isBonusesSectionVisible: 5,
          },
          Hm
        );
    }
  },
  Ma = Po;
function Qm(o) {
  Z(
    o,
    "svelte-17gqheg",
    ".referrals-actions.svelte-17gqheg{flex:1 1 100%;display:flex;margin-top:8px}.referral-progressbar.svelte-17gqheg{width:100%}.referral-progressbar.svelte-17gqheg .referrals-count{font-size:13px;color:var(--settings-popup-referrals-count)}"
  );
}
function Pa(o) {
  let e, n, t;
  return (
    (n = new pe({
      props: {
        size: "small",
        dataTestId: "invite-button",
        $$slots: { default: [Ym] },
        $$scope: { ctx: o },
      },
    })),
    n.$on("click", o[6]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "referrals-actions svelte-17gqheg");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r & 256 && (i.$$scope = { dirty: r, ctx: l }), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function Ym(o) {
  let e = A("overlay_settings_account_tab__referral_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Jm(o) {
  let e, n, t, l, r;
  n = new Ma({
    props: {
      requiredActivations: o[0],
      downloads: o[1],
      activations: o[2],
      obtainedBonusesByInvites: o[3],
      referralsCountClassName: "referrals-count",
      isBonusesSectionVisible: o[4],
    },
  });
  let i = o[5] && Pa(o);
  return {
    c() {
      (e = v("div")),
        y(n.$$.fragment),
        (t = S()),
        i && i.c(),
        (l = fe()),
        c(e, "class", "referral-progressbar svelte-17gqheg");
    },
    m(s, a) {
      w(s, e, a),
        C(n, e, null),
        w(s, t, a),
        i && i.m(s, a),
        w(s, l, a),
        (r = !0);
    },
    p(s, a) {
      let u = {};
      a & 1 && (u.requiredActivations = s[0]),
        a & 2 && (u.downloads = s[1]),
        a & 4 && (u.activations = s[2]),
        a & 8 && (u.obtainedBonusesByInvites = s[3]),
        a & 16 && (u.isBonusesSectionVisible = s[4]),
        n.$set(u),
        s[5]
          ? i
            ? (i.p(s, a), a & 32 && _(i, 1))
            : ((i = Pa(s)), i.c(), _(i, 1), i.m(l.parentNode, l))
          : i &&
            (Q(),
            h(i, 1, 1, () => {
              i = null;
            }),
            Y());
    },
    i(s) {
      r || (_(n.$$.fragment, s), _(i), (r = !0));
    },
    o(s) {
      h(n.$$.fragment, s), h(i), (r = !1);
    },
    d(s) {
      s && $(e), x(n), s && $(t), i && i.d(s), s && $(l);
    },
  };
}
function Xm(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        title: A("overlay_settings_account_tab__referral_title"),
        $$slots: { default: [Jm] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 319 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function e_(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "referral-section",
        $$slots: { default: [Xm] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 319 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function t_(o, e, n) {
  let { requiredActivations: t } = e,
    { downloads: l } = e,
    { activations: r } = e,
    { obtainedBonusesByInvites: i } = e,
    { isPersonalAccount: s } = e,
    { isTemporaryUser: a } = e,
    { canInviteUsers: u } = e,
    p = () => {
      if (a) {
        q.actions.showSignUpModal({ source: "settings.invite-button-clicked" });
        return;
      }
      q.actions.sendAnalyticsEvent("settings.invite-button-clicked", void 0),
        q.actions.openLaunchpadWithInvitations();
    };
  return (
    (o.$$set = (d) => {
      "requiredActivations" in d && n(0, (t = d.requiredActivations)),
        "downloads" in d && n(1, (l = d.downloads)),
        "activations" in d && n(2, (r = d.activations)),
        "obtainedBonusesByInvites" in d &&
          n(3, (i = d.obtainedBonusesByInvites)),
        "isPersonalAccount" in d && n(4, (s = d.isPersonalAccount)),
        "isTemporaryUser" in d && n(7, (a = d.isTemporaryUser)),
        "canInviteUsers" in d && n(5, (u = d.canInviteUsers));
    }),
    [t, l, r, i, s, u, p, a]
  );
}
var zo = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          t_,
          e_,
          U,
          {
            requiredActivations: 0,
            downloads: 1,
            activations: 2,
            obtainedBonusesByInvites: 3,
            isPersonalAccount: 4,
            isTemporaryUser: 7,
            canInviteUsers: 5,
          },
          Qm
        );
    }
  },
  za = zo;
N();
N();
function n_(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M8.557 10.125h.886l.27-4.875H8.287l.269 4.875zM9 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.875A6.375 6.375 0 1115.375 9 6.383 6.383 0 019 15.375zm0-3.98a.687.687 0 100 1.374.687.687 0 000-1.374z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "currentColor"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function o_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Bo = class extends H {
    constructor(e) {
      super(), j(this, e, o_, n_, U, { width: 0, height: 1, className: 2 });
    }
  },
  Mn = Bo;
function l_(o) {
  Z(
    o,
    "svelte-weg4zx",
    ".temporary-user-info-secion.svelte-weg4zx{display:flex;margin:8px;background:#f4d33180;border-radius:6px;padding:16px;align-items:start;gap:8px}.temporary-user-info-secion.svelte-weg4zx .alert-icon{flex-shrink:0;color:var(--text-primary-color)}.temporary-user-info-secion.svelte-weg4zx .login-icon{margin-right:5px}p.svelte-weg4zx{margin:0;color:var(--text-primary-color)}"
  );
}
function r_(o) {
  let e,
    n,
    t = A("overlay_settings_account_tab__temporary_sign_up") + "",
    l,
    r;
  return (
    (e = new $s({
      props: { width: "16", height: "16", className: "login-icon" },
    })),
    {
      c() {
        y(e.$$.fragment), (n = S()), (l = V(t));
      },
      m(i, s) {
        C(e, i, s), w(i, n, s), w(i, l, s), (r = !0);
      },
      p: L,
      i(i) {
        r || (_(e.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(e.$$.fragment, i), (r = !1);
      },
      d(i) {
        x(e, i), i && $(n), i && $(l);
      },
    }
  );
}
function i_(o) {
  let e, n, t, l, r, i, s;
  return (
    (n = new Mn({
      props: { width: "19", height: "19", className: "alert-icon" },
    })),
    (i = new pe({
      props: { size: "small", $$slots: { default: [r_] }, $$scope: { ctx: o } },
    })),
    i.$on("click", o[0]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("p")),
          (l.textContent = `${A(
            "overlay_settings_account_tab__temporary_description"
          )}`),
          (r = S()),
          y(i.$$.fragment),
          c(l, "class", "svelte-weg4zx"),
          c(e, "class", "temporary-user-info-secion svelte-weg4zx");
      },
      m(a, u) {
        w(a, e, u),
          C(n, e, null),
          f(e, t),
          f(e, l),
          f(e, r),
          C(i, e, null),
          (s = !0);
      },
      p(a, [u]) {
        let p = {};
        u & 2 && (p.$$scope = { dirty: u, ctx: a }), i.$set(p);
      },
      i(a) {
        s || (_(n.$$.fragment, a), _(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        h(n.$$.fragment, a), h(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && $(e), x(n), x(i);
      },
    }
  );
}
function s_(o) {
  return [
    () => {
      q.actions.sendAnalyticsEvent("settings.sign-up-button-clicked", void 0),
        q.actions.showSignUpModal({
          source: "settings.sign-up-button-clicked",
        });
    },
  ];
}
var No = class extends H {
    constructor(e) {
      super(), j(this, e, s_, i_, U, {}, l_);
    }
  },
  Ba = No;
N();
N();
function a_(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M8.616 10V6.667h-.943v2.5h-6.29V.833h6.29v2.5h.943V0H.44v10h8.176zM4.214 4.583v.834h7.98l-1.729 1.527.667.59L14 5l-2.868-2.534-.667.59 1.73 1.527H4.214z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 14 10"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function c_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var qo = class extends H {
    constructor(e) {
      super(), j(this, e, c_, a_, U, { width: 0, height: 1, className: 2 });
    }
  },
  Na = qo;
N();
function u_(o) {
  Z(
    o,
    "svelte-1iso05k",
    ".sign-out-popup.svelte-1iso05k.svelte-1iso05k{padding:29px 25px 26px}.sign-out-popup.svelte-1iso05k .icon{margin-right:0;color:#999}.sign-out-header.svelte-1iso05k.svelte-1iso05k{display:flex;align-items:center;margin-bottom:11px}.sign-out-title.svelte-1iso05k.svelte-1iso05k{margin-left:10px;font-size:16px;font-weight:700;color:var(--sign-out-title)}.sign-out-description.svelte-1iso05k.svelte-1iso05k{font-size:12px;line-height:18px;color:var(--sign-out-description)}.sign-out-close.svelte-1iso05k.svelte-1iso05k{position:absolute;right:12px;top:12px;color:#999}.sign-out-info.svelte-1iso05k.svelte-1iso05k{background-color:var(--sign-out-background-user-info);border-radius:9px;margin:14px 0 24px}.info-user.svelte-1iso05k.svelte-1iso05k{margin-left:10px}.info-user.svelte-1iso05k>div.svelte-1iso05k{max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sign-out-info-user.svelte-1iso05k.svelte-1iso05k{padding:12px 16px 13px;font-size:12px;border-bottom:2px solid var(--sign-out-border-user-info);display:flex;align-items:center}.sign-out-info-data.svelte-1iso05k.svelte-1iso05k{padding:19px 20px;font-size:13px}.info-data-item.svelte-1iso05k.svelte-1iso05k{display:flex;justify-content:space-between;line-height:22px}.info-data-name.svelte-1iso05k.svelte-1iso05k{color:var(--sign-out-user-info-name)}.info-data-count.svelte-1iso05k.svelte-1iso05k{color:var(--sign-out-user-info-count)}.sign-out-buttons.svelte-1iso05k.svelte-1iso05k{display:flex;justify-content:space-between;width:94%}"
  );
}
function p_(o) {
  let e = A("overlay_settings_account_tab__sign_out_cancel_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function f_(o) {
  let e = A("overlay_settings_account_tab__sign_out_delete_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function d_(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne,
    te,
    le,
    re,
    se,
    ae,
    me,
    ce,
    ke,
    Re,
    Pe,
    De,
    _e,
    Le,
    ze,
    Xe,
    xe,
    be,
    he,
    de;
  return (
    (t = new dt({ props: { width: "12px" } })),
    (i = new Sn({ props: { width: "22", height: "22" } })),
    (b = new yt({ props: { src: o[0], name: o[1] || o[2], colored: !0 } })),
    (ze = new pe({
      props: { $$slots: { default: [p_] }, $$scope: { ctx: o } },
    })),
    ze.$on("click", o[6]),
    (xe = new pe({
      props: { mod: "light", $$slots: { default: [f_] }, $$scope: { ctx: o } },
    })),
    xe.$on("click", o[7]),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("div")),
          y(i.$$.fragment),
          (s = S()),
          (a = v("div")),
          (a.textContent = `${A(
            "overlay_settings_account_tab__sign_out_title"
          )}`),
          (u = S()),
          (p = v("div")),
          (p.textContent = `${A(
            "overlay_settings_account_tab__sign_out_description"
          )}`),
          (d = S()),
          (m = v("div")),
          (g = v("div")),
          y(b.$$.fragment),
          (k = S()),
          (E = v("div")),
          (I = v("div")),
          (T = V(o[1])),
          (P = S()),
          (M = v("div")),
          (B = V(o[2])),
          (O = S()),
          (z = v("div")),
          (G = v("div")),
          (W = v("div")),
          (W.textContent = `${A(
            "overlay_settings_account_tab__sign_out_browser_history_title"
          )}`),
          (D = S()),
          (R = v("div")),
          (K = V(o[5])),
          (ne = S()),
          (te = v("div")),
          (le = v("div")),
          (le.textContent = `${A(
            "overlay_settings_account_tab__sign_out_passwords_title"
          )}`),
          (re = S()),
          (se = v("div")),
          (ae = V(o[4])),
          (me = S()),
          (ce = v("div")),
          (ke = v("div")),
          (ke.textContent = `${A(
            "overlay_settings_account_tab__sign_out_other_data_title"
          )}`),
          (Re = S()),
          (Pe = v("div")),
          (De = V(o[3])),
          (_e = S()),
          (Le = v("div")),
          y(ze.$$.fragment),
          (Xe = S()),
          y(xe.$$.fragment),
          c(n, "class", "sign-out-close svelte-1iso05k"),
          c(a, "class", "sign-out-title svelte-1iso05k"),
          c(r, "class", "sign-out-header svelte-1iso05k"),
          c(p, "class", "sign-out-description svelte-1iso05k"),
          c(I, "class", "info-user-name svelte-1iso05k"),
          c(M, "class", "info-user-email svelte-1iso05k"),
          c(E, "class", "info-user svelte-1iso05k"),
          c(g, "class", "sign-out-info-user svelte-1iso05k"),
          c(W, "class", "info-data-name svelte-1iso05k"),
          c(R, "class", "info-data-count svelte-1iso05k"),
          c(G, "class", "info-data-item svelte-1iso05k"),
          c(le, "class", "info-data-name svelte-1iso05k"),
          c(se, "class", "info-data-count svelte-1iso05k"),
          c(te, "class", "info-data-item svelte-1iso05k"),
          c(ke, "class", "info-data-name svelte-1iso05k"),
          c(Pe, "class", "info-data-count svelte-1iso05k"),
          c(ce, "class", "info-data-item svelte-1iso05k"),
          c(z, "class", "sign-out-info-data svelte-1iso05k"),
          c(m, "class", "sign-out-info svelte-1iso05k"),
          c(Le, "class", "sign-out-buttons svelte-1iso05k"),
          c(e, "class", "sign-out-popup svelte-1iso05k");
      },
      m(Ie, Ke) {
        w(Ie, e, Ke),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          C(i, r, null),
          f(r, s),
          f(r, a),
          f(e, u),
          f(e, p),
          f(e, d),
          f(e, m),
          f(m, g),
          C(b, g, null),
          f(g, k),
          f(g, E),
          f(E, I),
          f(I, T),
          f(E, P),
          f(E, M),
          f(M, B),
          f(m, O),
          f(m, z),
          f(z, G),
          f(G, W),
          f(G, D),
          f(G, R),
          f(R, K),
          f(z, ne),
          f(z, te),
          f(te, le),
          f(te, re),
          f(te, se),
          f(se, ae),
          f(z, me),
          f(z, ce),
          f(ce, ke),
          f(ce, Re),
          f(ce, Pe),
          f(Pe, De),
          f(e, _e),
          f(e, Le),
          C(ze, Le, null),
          f(Le, Xe),
          C(xe, Le, null),
          (be = !0),
          he || ((de = X(n, "click", o[8])), (he = !0));
      },
      p(Ie, Ke) {
        let Ue = {};
        Ke & 1 && (Ue.src = Ie[0]),
          Ke & 6 && (Ue.name = Ie[1] || Ie[2]),
          b.$set(Ue),
          (!be || Ke & 2) && ee(T, Ie[1]),
          (!be || Ke & 4) && ee(B, Ie[2]),
          (!be || Ke & 32) && ee(K, Ie[5]),
          (!be || Ke & 16) && ee(ae, Ie[4]),
          (!be || Ke & 8) && ee(De, Ie[3]);
        let ge = {};
        Ke & 2048 && (ge.$$scope = { dirty: Ke, ctx: Ie }), ze.$set(ge);
        let Be = {};
        Ke & 2048 && (Be.$$scope = { dirty: Ke, ctx: Ie }), xe.$set(Be);
      },
      i(Ie) {
        be ||
          (_(t.$$.fragment, Ie),
          _(i.$$.fragment, Ie),
          _(b.$$.fragment, Ie),
          _(ze.$$.fragment, Ie),
          _(xe.$$.fragment, Ie),
          (be = !0));
      },
      o(Ie) {
        h(t.$$.fragment, Ie),
          h(i.$$.fragment, Ie),
          h(b.$$.fragment, Ie),
          h(ze.$$.fragment, Ie),
          h(xe.$$.fragment, Ie),
          (be = !1);
      },
      d(Ie) {
        Ie && $(e), x(t), x(i), x(b), x(ze), x(xe), (he = !1), de();
      },
    }
  );
}
function m_(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 375,
        minWidth: 375,
        height: "auto",
        $$slots: { default: [d_] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2111 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function __(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [m_] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 2111 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function g_(o, e, n) {
  let t,
    l,
    r,
    i = oe(),
    { userAvatar: s } = e,
    { userName: a } = e,
    { userEmail: u } = e,
    { profileStatistics: p } = e,
    d = () => {
      q.actions.sendAnalyticsEventWithOptions(
        "settings.sign-out-button-clicked",
        void 0,
        { disableBatching: !0 }
      ),
        q.actions.signOut();
    },
    m = () => q.actions.signOutWithClearData(),
    g = () => i("handleSignOutClose");
  return (
    (o.$$set = (b) => {
      "userAvatar" in b && n(0, (s = b.userAvatar)),
        "userName" in b && n(1, (a = b.userName)),
        "userEmail" in b && n(2, (u = b.userEmail)),
        "profileStatistics" in b && n(9, (p = b.profileStatistics));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 512) {
        e: n(5, (t = p?.browsingHistory ?? 0));
      }
      if (o.$$.dirty & 512) {
        e: n(4, (l = p?.passwords ?? 0));
      }
      if (o.$$.dirty & 512) {
        e: n(3, (r = (p?.autofill ?? 0) + (p?.bookmarks ?? 0)));
      }
    }),
    [s, a, u, r, l, t, d, m, g, p]
  );
}
var Do = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          g_,
          __,
          U,
          { userAvatar: 0, userName: 1, userEmail: 2, profileStatistics: 9 },
          u_
        );
    }
  },
  qa = Do;
function h_(o) {
  Z(
    o,
    "svelte-y0n4o2",
    ".user-info.svelte-y0n4o2{--avatar-size:32px;display:flex;align-items:center;padding:8px;gap:8px}.user-info.svelte-y0n4o2 .icon{margin-right:4px;color:var(--text-primary-color)}.user-details.svelte-y0n4o2{display:flex;flex-direction:column;flex:1 1 auto;overflow:hidden}.user-name.svelte-y0n4o2{color:var(--settings-popup-user-name);overflow:hidden;text-overflow:ellipsis}.user-email.svelte-y0n4o2{color:var(--settings-popup-user-email);overflow:hidden;text-overflow:ellipsis}"
  );
}
function Da(o) {
  let e, n;
  return {
    c() {
      (e = v("div")), (n = V(o[2])), c(e, "class", "user-email svelte-y0n4o2");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 4 && ee(n, t[2]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function v_(o) {
  let e,
    n,
    t = A("overlay_settings_account_tab__sign_out") + "",
    l,
    r;
  return (
    (e = new Na({ props: { width: "14", height: "10" } })),
    {
      c() {
        y(e.$$.fragment), (n = S()), (l = V(t));
      },
      m(i, s) {
        C(e, i, s), w(i, n, s), w(i, l, s), (r = !0);
      },
      p: L,
      i(i) {
        r || (_(e.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(e.$$.fragment, i), (r = !1);
      },
      d(i) {
        x(e, i), i && $(n), i && $(l);
      },
    }
  );
}
function La(o) {
  let e, n;
  return (
    (e = new qa({
      props: {
        userAvatar: o[0],
        userName: o[1],
        userEmail: o[2],
        profileStatistics: o[3],
      },
    })),
    e.$on("handleSignOutClose", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.userAvatar = t[0]),
          l & 2 && (r.userName = t[1]),
          l & 4 && (r.userEmail = t[2]),
          l & 8 && (r.profileStatistics = t[3]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function b_(o) {
  let e,
    n,
    t,
    l,
    r,
    i = (o[1] || o[2]) + "",
    s,
    a,
    u,
    p,
    d,
    m;
  n = new yt({
    props: {
      src: o[0],
      name: o[1] || o[2],
      colored: !0,
      dataTestId: "global-settings.account.user-info.avatar",
    },
  });
  let g = o[1] && Da(o);
  (p = new pe({
    props: {
      mod: "grey",
      size: "small",
      dataTestId: "global-settings.account.user-info.sign-out-button",
      $$slots: { default: [v_] },
      $$scope: { ctx: o },
    },
  })),
    p.$on("click", o[5]);
  let b = o[4] && La(o);
  return {
    c() {
      (e = v("div")),
        y(n.$$.fragment),
        (t = S()),
        (l = v("div")),
        (r = v("div")),
        (s = V(i)),
        (a = S()),
        g && g.c(),
        (u = S()),
        y(p.$$.fragment),
        (d = S()),
        b && b.c(),
        c(r, "class", "user-name svelte-y0n4o2"),
        c(l, "class", "user-details svelte-y0n4o2"),
        c(l, "data-testid", "global-settings.account.user-info.details"),
        c(e, "class", "user-info svelte-y0n4o2");
    },
    m(k, E) {
      w(k, e, E),
        C(n, e, null),
        f(e, t),
        f(e, l),
        f(l, r),
        f(r, s),
        f(l, a),
        g && g.m(l, null),
        f(e, u),
        C(p, e, null),
        f(e, d),
        b && b.m(e, null),
        (m = !0);
    },
    p(k, E) {
      let I = {};
      E & 1 && (I.src = k[0]),
        E & 6 && (I.name = k[1] || k[2]),
        n.$set(I),
        (!m || E & 6) && i !== (i = (k[1] || k[2]) + "") && ee(s, i),
        k[1]
          ? g
            ? g.p(k, E)
            : ((g = Da(k)), g.c(), g.m(l, null))
          : g && (g.d(1), (g = null));
      let T = {};
      E & 128 && (T.$$scope = { dirty: E, ctx: k }),
        p.$set(T),
        k[4]
          ? b
            ? (b.p(k, E), E & 16 && _(b, 1))
            : ((b = La(k)), b.c(), _(b, 1), b.m(e, null))
          : b &&
            (Q(),
            h(b, 1, 1, () => {
              b = null;
            }),
            Y());
    },
    i(k) {
      m || (_(n.$$.fragment, k), _(p.$$.fragment, k), _(b), (m = !0));
    },
    o(k) {
      h(n.$$.fragment, k), h(p.$$.fragment, k), h(b), (m = !1);
    },
    d(k) {
      k && $(e), x(n), g && g.d(), x(p), b && b.d();
    },
  };
}
function k_(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [b_] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 159 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function w_(o, e, n) {
  let { userAvatar: t } = e,
    { userName: l } = e,
    { userEmail: r } = e,
    { profileStatistics: i } = e,
    s = !1,
    a = () => n(4, (s = !0)),
    u = () => n(4, (s = !1));
  return (
    (o.$$set = (p) => {
      "userAvatar" in p && n(0, (t = p.userAvatar)),
        "userName" in p && n(1, (l = p.userName)),
        "userEmail" in p && n(2, (r = p.userEmail)),
        "profileStatistics" in p && n(3, (i = p.profileStatistics));
    }),
    [t, l, r, i, s, a, u]
  );
}
var Lo = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          w_,
          k_,
          U,
          { userAvatar: 0, userName: 1, userEmail: 2, profileStatistics: 3 },
          h_
        );
    }
  },
  Ua = Lo;
function $_(o) {
  let e, n;
  return (
    (e = new Ua({
      props: {
        userAvatar: o[16],
        userName: o[18],
        userEmail: o[17],
        profileStatistics: o[3],
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 65536 && (r.userAvatar = t[16]),
          l & 262144 && (r.userName = t[18]),
          l & 131072 && (r.userEmail = t[17]),
          l & 8 && (r.profileStatistics = t[3]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function y_(o) {
  let e, n;
  return (
    (e = new Ba({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function C_(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a = [y_, $_],
    u = [];
  function p(d, m) {
    return d[8] ? 0 : 1;
  }
  return (
    (e = p(o, -1)),
    (n = u[e] = a[e](o)),
    (l = new Ca({
      props: {
        accountType: o[0],
        billingPlanName: o[13],
        cancelLink: o[9],
        hasActiveInvitesBonus: o[4],
        inviterCode: o[7],
        isPersonalAccount: o[15],
        showCustomerPortalButton: o[5],
        teamName: o[14],
        userReferralCode: o[6],
        isTemporaryUser: o[8],
      },
    })),
    l.$on("close", o[21]),
    (i = new za({
      props: {
        obtainedBonusesByInvites: o[2],
        requiredActivations: o[12],
        downloads: o[11],
        activations: o[10],
        isPersonalAccount: o[15],
        isTemporaryUser: o[8],
        canInviteUsers: o[1],
      },
    })),
    {
      c() {
        n.c(), (t = S()), y(l.$$.fragment), (r = S()), y(i.$$.fragment);
      },
      m(d, m) {
        u[e].m(d, m), w(d, t, m), C(l, d, m), w(d, r, m), C(i, d, m), (s = !0);
      },
      p(d, [m]) {
        let g = e;
        (e = p(d, m)),
          e === g
            ? u[e].p(d, m)
            : (Q(),
              h(u[g], 1, 1, () => {
                u[g] = null;
              }),
              Y(),
              (n = u[e]),
              n ? n.p(d, m) : ((n = u[e] = a[e](d)), n.c()),
              _(n, 1),
              n.m(t.parentNode, t));
        let b = {};
        m & 1 && (b.accountType = d[0]),
          m & 8192 && (b.billingPlanName = d[13]),
          m & 512 && (b.cancelLink = d[9]),
          m & 16 && (b.hasActiveInvitesBonus = d[4]),
          m & 128 && (b.inviterCode = d[7]),
          m & 32768 && (b.isPersonalAccount = d[15]),
          m & 32 && (b.showCustomerPortalButton = d[5]),
          m & 16384 && (b.teamName = d[14]),
          m & 64 && (b.userReferralCode = d[6]),
          m & 256 && (b.isTemporaryUser = d[8]),
          l.$set(b);
        let k = {};
        m & 4 && (k.obtainedBonusesByInvites = d[2]),
          m & 4096 && (k.requiredActivations = d[12]),
          m & 2048 && (k.downloads = d[11]),
          m & 1024 && (k.activations = d[10]),
          m & 32768 && (k.isPersonalAccount = d[15]),
          m & 256 && (k.isTemporaryUser = d[8]),
          m & 2 && (k.canInviteUsers = d[1]),
          i.$set(k);
      },
      i(d) {
        s || (_(n), _(l.$$.fragment, d), _(i.$$.fragment, d), (s = !0));
      },
      o(d) {
        h(n), h(l.$$.fragment, d), h(i.$$.fragment, d), (s = !1);
      },
      d(d) {
        u[e].d(d), d && $(t), x(l, d), d && $(r), x(i, d);
      },
    }
  );
}
function x_(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z = q.stores.globalSettingsAccountTab;
  ve(o, z, (W) => n(20, (O = W))), q.actions.loadInvitationStats();
  function G(W) {
    ue.call(this, o, W);
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 1048576) {
        e: n(18, (t = O?.userName ?? ""));
      }
      if (o.$$.dirty & 1048576) {
        e: n(17, (l = O?.userEmail ?? ""));
      }
      if (o.$$.dirty & 1048576) {
        e: n(16, (r = O?.userAvatar ?? ""));
      }
      if (o.$$.dirty & 1048576) {
        e: n(0, (i = O?.accountType ?? ""));
      }
      if (o.$$.dirty & 1) {
        e: n(15, (s = i === "Personal"));
      }
      if (o.$$.dirty & 1048576) {
        e: n(14, (a = O?.teamName ?? ""));
      }
      if (o.$$.dirty & 1048576) {
        e: n(13, (u = O?.billingPlanName ?? "Early access"));
      }
      if (o.$$.dirty & 1048576) {
        e: n(12, (p = O?.requiredActivations ?? 0));
      }
      if (o.$$.dirty & 1048576) {
        e: n(11, (d = O?.downloads ?? 0));
      }
      if (o.$$.dirty & 1048576) {
        e: n(10, (m = O?.activations ?? 0));
      }
      if (o.$$.dirty & 1048576) {
        e: n(9, (g = O?.cancelLink));
      }
      if (o.$$.dirty & 1048576) {
        e: n(8, (b = O?.isTemporaryUser ?? !1));
      }
      if (o.$$.dirty & 1048576) {
        e: n(7, (k = O?.inviterCode ?? ""));
      }
      if (o.$$.dirty & 1048576) {
        e: n(6, (E = O?.userReferralCode));
      }
      if (o.$$.dirty & 1048576) {
        e: n(5, (I = O?.showCustomerPortalButton ?? !1));
      }
      if (o.$$.dirty & 1048576) {
        e: n(4, (T = O?.hasActiveInvitesBonus ?? !1));
      }
      if (o.$$.dirty & 1048576) {
        e: n(3, (P = O?.profileStatistics ?? null));
      }
      if (o.$$.dirty & 1048576) {
        e: n(2, (M = O?.obtainedBonusesByInvites ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(1, (B = O?.canInviteUsers ?? !1));
      }
    }),
    [i, B, M, P, T, I, E, k, b, g, m, d, p, u, a, s, r, l, t, z, O, G]
  );
}
var Uo = class extends H {
    constructor(e) {
      super(), j(this, e, x_, C_, U, {});
    }
  },
  ja = Uo;
N();
N();
N();
function S_(o) {
  Z(
    o,
    "svelte-vbzx1k",
    ".statistic-list.svelte-vbzx1k{display:flex;flex-wrap:wrap;gap:8px;padding:0 8px 8px;margin:0}.statistic-item.svelte-vbzx1k{display:flex;gap:4px}.statistic-item-value.svelte-vbzx1k{font-size:14px;font-weight:500;color:var(--settings-popup-statistic-value-color)}.statistic-item-description.svelte-vbzx1k{font-size:11px;line-height:17px;color:var(--settings-popup-statistic-description-color)}"
  );
}
function Ha(o, e, n) {
  let t = o.slice();
  return (t[1] = e[n]), t;
}
function Va(o) {
  let e,
    n,
    t = o[1].value + "",
    l,
    r,
    i,
    s,
    a = o[1].description + "",
    u,
    p;
  return {
    c() {
      (e = v("li")),
        (n = v("span")),
        (l = V(t)),
        (i = S()),
        (s = v("span")),
        (u = V(a)),
        (p = S()),
        c(n, "class", "statistic-item-value svelte-vbzx1k"),
        c(n, "style", (r = o[1].color ? `color: ${o[1].color}` : "")),
        c(s, "class", "statistic-item-description svelte-vbzx1k"),
        c(e, "class", "statistic-item svelte-vbzx1k"),
        c(e, "data-testid", "statistic-list-item");
    },
    m(d, m) {
      w(d, e, m), f(e, n), f(n, l), f(e, i), f(e, s), f(s, u), f(e, p);
    },
    p(d, m) {
      m & 1 && t !== (t = d[1].value + "") && ee(l, t),
        m & 1 &&
          r !== (r = d[1].color ? `color: ${d[1].color}` : "") &&
          c(n, "style", r),
        m & 1 && a !== (a = d[1].description + "") && ee(u, a);
    },
    d(d) {
      d && $(e);
    },
  };
}
function A_(o) {
  let e,
    n = o[0],
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = Va(Ha(o, n, l));
  return {
    c() {
      e = v("ul");
      for (let l = 0; l < t.length; l += 1) t[l].c();
      c(e, "class", "statistic-list svelte-vbzx1k"),
        c(e, "data-testid", "statistic-list");
    },
    m(l, r) {
      w(l, e, r);
      for (let i = 0; i < t.length; i += 1) t[i] && t[i].m(e, null);
    },
    p(l, [r]) {
      if (r & 1) {
        n = l[0];
        let i;
        for (i = 0; i < n.length; i += 1) {
          let s = Ha(l, n, i);
          t[i] ? t[i].p(s, r) : ((t[i] = Va(s)), t[i].c(), t[i].m(e, null));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = n.length;
      }
    },
    i: L,
    o: L,
    d(l) {
      l && $(e), Ae(t, l);
    },
  };
}
function E_(o, e, n) {
  let { list: t } = e;
  return (
    (o.$$set = (l) => {
      "list" in l && n(0, (t = l.list));
    }),
    [t]
  );
}
var jo = class extends H {
    constructor(e) {
      super(), j(this, e, E_, A_, U, { list: 0 }, S_);
    }
  },
  Pn = jo;
function I_(o) {
  Z(
    o,
    "svelte-1s0tg7a",
    ".speed-link.svelte-1s0tg7a{font-size:12px;line-height:16px;color:var(--accent-color);font-weight:400;text-decoration:none;padding-left:8px;display:flex;align-items:center;column-gap:6px}"
  );
}
function T_(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[1] ? o[0] : !1, disabled: !o[1] } })),
    e.$on("change", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 3 && (r.checked = t[1] ? t[0] : !1),
          l & 2 && (r.disabled = !t[1]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Oa(o) {
  let e, n;
  return (
    (e = new Gt({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function M_(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Oa(o);
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (n.textContent = `${A(
          "overlay_settings_adblock_tab__block_ads_title"
        )}`),
        (t = S()),
        r && r.c(),
        c(e, "slot", "name");
    },
    m(i, s) {
      w(i, e, s), f(e, n), f(e, t), r && r.m(e, null), (l = !0);
    },
    p(i, s) {
      i[3]
        ? r
          ? s & 8 && _(r, 1)
          : ((r = Oa(i)), r.c(), _(r, 1), r.m(e, null))
        : r &&
          (Q(),
          h(r, 1, 1, () => {
            r = null;
          }),
          Y());
    },
    i(i) {
      l || (_(r), (l = !0));
    },
    o(i) {
      h(r), (l = !1);
    },
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function Ra(o) {
  let e, n, t, l;
  return (
    (n = new Cn({ props: { width: "16px", height: "16px" } })),
    {
      c() {
        (e = v("a")),
          y(n.$$.fragment),
          (t = v("span")),
          (t.textContent = `${A(
            "overlay_settings_adblock_tab__sidekick_fast_link_title"
          )}`),
          c(e, "class", "speed-link svelte-1s0tg7a"),
          c(e, "href", o[2]),
          c(e, "target", "_blank"),
          c(e, "rel", "noreferrer");
      },
      m(r, i) {
        w(r, e, i), C(n, e, null), f(e, t), (l = !0);
      },
      p(r, i) {
        (!l || i & 4) && c(e, "href", r[2]);
      },
      i(r) {
        l || (_(n.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(n.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(e), x(n);
      },
    }
  );
}
function Wa(o) {
  let e, n;
  return (
    (e = new Pn({ props: { list: o[4] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16 && (r.list = t[4]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function P_(o) {
  let e, n, t, l, r;
  e = new Me({
    props: { $$slots: { name: [M_], default: [T_] }, $$scope: { ctx: o } },
  });
  let i = !o[1] && Ra(o),
    s = o[0] && o[1] && Wa(o);
  return {
    c() {
      y(e.$$.fragment),
        (n = S()),
        i && i.c(),
        (t = S()),
        s && s.c(),
        (l = fe());
    },
    m(a, u) {
      C(e, a, u),
        w(a, n, u),
        i && i.m(a, u),
        w(a, t, u),
        s && s.m(a, u),
        w(a, l, u),
        (r = !0);
    },
    p(a, u) {
      let p = {};
      u & 139 && (p.$$scope = { dirty: u, ctx: a }),
        e.$set(p),
        a[1]
          ? i &&
            (Q(),
            h(i, 1, 1, () => {
              i = null;
            }),
            Y())
          : i
          ? (i.p(a, u), u & 2 && _(i, 1))
          : ((i = Ra(a)), i.c(), _(i, 1), i.m(t.parentNode, t)),
        a[0] && a[1]
          ? s
            ? (s.p(a, u), u & 3 && _(s, 1))
            : ((s = Wa(a)), s.c(), _(s, 1), s.m(l.parentNode, l))
          : s &&
            (Q(),
            h(s, 1, 1, () => {
              s = null;
            }),
            Y());
    },
    i(a) {
      r || (_(e.$$.fragment, a), _(i), _(s), (r = !0));
    },
    o(a) {
      h(e.$$.fragment, a), h(i), h(s), (r = !1);
    },
    d(a) {
      x(e, a), a && $(n), i && i.d(a), a && $(t), s && s.d(a), a && $(l);
    },
  };
}
function z_(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "settings-item.block-ads",
        $$slots: { default: [P_] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 159 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function B_(o, e, n) {
  let t,
    { useAdBlocker: l } = e,
    { blockedAdsCount: r } = e,
    { canUseByPlan: i } = e,
    { whySidekickFast: s } = e,
    { useProBadges: a } = e,
    u = () => {
      q.actions.sendAnalyticsEvent("settings.adblock-change", {
        "new-value": nt(!l),
      }),
        q.actions.changeUseAdBlocker(!l);
    };
  return (
    (o.$$set = (p) => {
      "useAdBlocker" in p && n(0, (l = p.useAdBlocker)),
        "blockedAdsCount" in p && n(5, (r = p.blockedAdsCount)),
        "canUseByPlan" in p && n(1, (i = p.canUseByPlan)),
        "whySidekickFast" in p && n(2, (s = p.whySidekickFast)),
        "useProBadges" in p && n(3, (a = p.useProBadges));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 32) {
        e: n(
          4,
          (t = [
            {
              value: r,
              color: "#f2994a",
              description: A(
                "overlay_settings_adblock_tab__block_ads_description"
              ),
            },
          ])
        );
      }
    }),
    [l, i, s, a, t, r, u]
  );
}
var Ho = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          B_,
          z_,
          U,
          {
            useAdBlocker: 0,
            blockedAdsCount: 5,
            canUseByPlan: 1,
            whySidekickFast: 2,
            useProBadges: 3,
          },
          I_
        );
    }
  },
  Ga = Ho;
N();
N();
N();
function N_(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M17.41 8L16.82 7.41L12.41 11.82L8 7.41L7.41 8L11.82 12.41L7.41 16.82L8 17.41L12.41 13L16.82 17.41L17.41 16.82L13 12.41L17.41 8Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "6.407407407407391 6.407407407407391 12 12"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function q_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Vo = class extends H {
    constructor(e) {
      super(), j(this, e, q_, N_, U, { width: 0, height: 1, className: 2 });
    }
  },
  zn = Vo;
function D_(o) {
  Z(
    o,
    "svelte-1j73nfx",
    ".domain-list.svelte-1j73nfx{all:unset;display:block;list-style:none;padding:8px}.domain.svelte-1j73nfx{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;min-height:25px;gap:4px}.domain.svelte-1j73nfx:last-child{margin-bottom:0}.domain-address.svelte-1j73nfx{color:var(--settings-popup-domain-color);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.remove-domain.svelte-1j73nfx{width:16px;height:16px;opacity:0.75;margin-right:11px;color:var(--text-primary-color);flex-shrink:0}"
  );
}
function Fa(o, e, n) {
  let t = o.slice();
  return (t[3] = e[n]), t;
}
function Za(o) {
  let e,
    n,
    t = so(o[3]) + "",
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d;
  s = new zn({ props: { width: "13", height: "13" } });
  function m() {
    return o[2](o[3]);
  }
  return {
    c() {
      (e = v("li")),
        (n = v("div")),
        (l = V(t)),
        (r = S()),
        (i = v("button")),
        y(s.$$.fragment),
        (a = S()),
        c(n, "class", "domain-address svelte-1j73nfx"),
        c(i, "class", "remove-domain svelte-1j73nfx"),
        c(e, "class", "domain svelte-1j73nfx"),
        c(e, "data-testid", "settings-item.domain-list.domain");
    },
    m(g, b) {
      w(g, e, b),
        f(e, n),
        f(n, l),
        f(e, r),
        f(e, i),
        C(s, i, null),
        f(e, a),
        (u = !0),
        p || ((d = X(i, "click", m)), (p = !0));
    },
    p(g, b) {
      (o = g), (!u || b & 1) && t !== (t = so(o[3]) + "") && ee(l, t);
    },
    i(g) {
      u || (_(s.$$.fragment, g), (u = !0));
    },
    o(g) {
      h(s.$$.fragment, g), (u = !1);
    },
    d(g) {
      g && $(e), x(s), (p = !1), d();
    },
  };
}
function L_(o) {
  let e,
    n,
    t = o[0],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = Za(Fa(o, t, i));
  let r = (i) =>
    h(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v("ul");
      for (let i = 0; i < l.length; i += 1) l[i].c();
      c(e, "class", "domain-list svelte-1j73nfx");
    },
    m(i, s) {
      w(i, e, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(e, null);
      n = !0;
    },
    p(i, [s]) {
      if (s & 3) {
        t = i[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          let u = Fa(i, t, a);
          l[a]
            ? (l[a].p(u, s), _(l[a], 1))
            : ((l[a] = Za(u)), l[a].c(), _(l[a], 1), l[a].m(e, null));
        }
        for (Q(), a = t.length; a < l.length; a += 1) r(a);
        Y();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < t.length; s += 1) _(l[s]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1) h(l[s]);
      n = !1;
    },
    d(i) {
      i && $(e), Ae(l, i);
    },
  };
}
function U_(o, e, n) {
  let { domains: t } = e,
    l = oe(),
    r = (i) => l("removeDomain", i);
  return (
    (o.$$set = (i) => {
      "domains" in i && n(0, (t = i.domains));
    }),
    [t, l, r]
  );
}
var Oo = class extends H {
    constructor(e) {
      super(), j(this, e, U_, L_, U, { domains: 0 }, D_);
    }
  },
  Ka = Oo;
function j_(o) {
  let e, n;
  return (
    (e = new Tn({
      props: {
        placeholder: A("overlay_settings_domain_list__placeholder"),
        validate: o[3],
        value: o[2],
        wide: !0,
      },
    })),
    e.$on("submit", o[4]),
    e.$on("paste", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function H_(o) {
  let e, n, t, l;
  return (
    (e = new Me({
      props: {
        title: o[1],
        dataTestId: "settings-item.allow-adblocker-domains",
        $$slots: { default: [j_] },
        $$scope: { ctx: o },
      },
    })),
    (t = new Ka({ props: { domains: o[0] } })),
    t.$on("removeDomain", o[6]),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 2 && (s.title = r[1]),
          i & 512 && (s.$$scope = { dirty: i, ctx: r }),
          e.$set(s);
        let a = {};
        i & 1 && (a.domains = r[0]), t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function V_(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [H_] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 515 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function O_(o, e, n) {
  let t,
    { domains: l } = e,
    { title: r } = e,
    i = oe(),
    s = it("");
  ve(o, s, (m) => n(7, (t = m)));
  let a = (m) =>
      m
        ? l?.includes(m)
          ? A("overlay_settings_domain_list__domain_in_list_error")
          : !Yn(m) || !Ot(m)
          ? A("overlay_settings_domain_list__invalid_error")
          : null
        : A("overlay_settings_domain_list__empty_error"),
    u = (m) => {
      let g = Yn(m.detail);
      g && i("addDomain", _n(g) ?? g);
    },
    p = (m) => {
      let g = m.clipboardData?.getData("Text") ?? "";
      tt(s, (t = yn(g)), t), m.stopPropagation(), m.preventDefault();
    };
  function d(m) {
    ue.call(this, o, m);
  }
  return (
    (o.$$set = (m) => {
      "domains" in m && n(0, (l = m.domains)),
        "title" in m && n(1, (r = m.title));
    }),
    [l, r, s, a, u, p, d]
  );
}
var Ro = class extends H {
    constructor(e) {
      super(), j(this, e, O_, V_, U, { domains: 0, title: 1 });
    }
  },
  Jt = Ro;
function Qa(o) {
  let e, n;
  return (
    (e = new Jt({
      props: {
        title: A("overlay_settings_adblock_tab__domains_title"),
        domains: o[3],
      },
    })),
    e.$on("addDomain", o[7]),
    e.$on("removeDomain", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 8 && (r.domains = t[3]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function R_(o) {
  let e, n, t, l;
  e = new Ga({
    props: {
      useAdBlocker: o[5],
      blockedAdsCount: o[4],
      canUseByPlan: o[2],
      whySidekickFast: o[1],
      useProBadges: o[0],
    },
  });
  let r = o[5] && o[3] && o[2] && Qa(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, [s]) {
      let a = {};
      s & 32 && (a.useAdBlocker = i[5]),
        s & 16 && (a.blockedAdsCount = i[4]),
        s & 4 && (a.canUseByPlan = i[2]),
        s & 2 && (a.whySidekickFast = i[1]),
        s & 1 && (a.useProBadges = i[0]),
        e.$set(a),
        i[5] && i[3] && i[2]
          ? r
            ? (r.p(i, s), s & 44 && _(r, 1))
            : ((r = Qa(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function W_(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = q.stores.globalSettingsAdBlockerTab;
  ve(o, p, (g) => n(9, (u = g)));
  let d = ({ detail: g }) => {
      q.actions.sendAnalyticsEvent(
        "settings.adblock-whitelist-item-added",
        void 0
      ),
        q.actions.addAdBlockerDomain(g);
    },
    m = ({ detail: g }) => {
      q.actions.sendAnalyticsEvent(
        "settings.adblock-whitelist-item-removed",
        void 0
      ),
        q.actions.removeAdBlockerDomain(g);
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 512) {
        e: n(5, (t = u?.useAdBlocker ?? !1));
      }
      if (o.$$.dirty & 512) {
        e: n(4, (l = u?.blockedAdsCount ?? 0));
      }
      if (o.$$.dirty & 512) {
        e: n(3, (r = u?.adBlockerWhiteList ?? []));
      }
      if (o.$$.dirty & 512) {
        e: n(2, (i = u?.canUseAdblockerByPlan ?? !0));
      }
      if (o.$$.dirty & 512) {
        e: n(1, (s = u?.whySidekickFast ?? ""));
      }
      if (o.$$.dirty & 512) {
        e: n(0, (a = u?.useProBadges ?? !1));
      }
    }),
    [a, s, i, r, l, t, p, d, m, u]
  );
}
var Wo = class extends H {
    constructor(e) {
      super(), j(this, e, W_, R_, U, {});
    }
  },
  Ya = Wo;
N();
N();
N();
function G_(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("svg")),
        (n = F("circle")),
        (t = F("path")),
        c(n, "cx", "6"),
        c(n, "cy", "6"),
        c(n, "r", "6"),
        c(n, "fill", "white"),
        c(
          t,
          "d",
          "M6 7.15493e-08C6.78793 8.09453e-08 7.56815 0.155194 8.2961 0.456723C9.02405 0.758251 9.68549 1.20021 10.2426 1.75736C10.7998 2.31451 11.2417 2.97595 11.5433 3.7039C11.8448 4.43185 12 5.21207 12 6C12 6.78793 11.8448 7.56815 11.5433 8.2961C11.2417 9.02405 10.7998 9.68549 10.2426 10.2426C9.68549 10.7998 9.02405 11.2417 8.2961 11.5433C7.56815 11.8448 6.78793 12 6 12L6 6L6 7.15493e-08Z"
        ),
        c(t, "fill", "black"),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 12 12"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, t);
    },
    p(r, [i]) {
      i & 4 && l !== (l = `icon ${r[2]}`) && c(e, "class", l),
        i & 1 && c(e, "width", r[0]),
        i & 2 && c(e, "height", r[1]);
    },
    i: L,
    o: L,
    d(r) {
      r && $(e);
    },
  };
}
function F_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Go = class extends H {
    constructor(e) {
      super(), j(this, e, F_, G_, U, { width: 0, height: 1, className: 2 });
    }
  },
  Ja = Go;
N();
function Z_(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("circle")),
        c(n, "cx", "6"),
        c(n, "cy", "6"),
        c(n, "r", "6"),
        c(n, "fill", "black"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 12 12"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function K_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Fo = class extends H {
    constructor(e) {
      super(), j(this, e, K_, Z_, U, { width: 0, height: 1, className: 2 });
    }
  },
  Xa = Fo;
N();
function Q_(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("circle")),
        c(n, "cx", "6"),
        c(n, "cy", "6"),
        c(n, "r", "6"),
        c(n, "fill", "white"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 12 12"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function Y_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Zo = class extends H {
    constructor(e) {
      super(), j(this, e, Y_, Q_, U, { width: 0, height: 1, className: 2 });
    }
  },
  ec = Zo;
N();
function J_(o) {
  Z(
    o,
    "svelte-dai9hx",
    "button.svelte-dai9hx.svelte-dai9hx{display:flex;position:relative;cursor:pointer;margin:0 0 14px 8px;align-items:center;justify-content:center;width:50px;height:30px;background-color:var(--settings-popup-theme-switch-background);border-radius:7px;transition:var(--animation-time)}button.selected.svelte-dai9hx.svelte-dai9hx{background-color:var(--settings-popup-theme-switch-background-selected)}button.svelte-dai9hx.svelte-dai9hx:hover{background-color:var(--settings-popup-theme-switch-background-hover)}button.svelte-dai9hx.svelte-dai9hx:first-child{margin-left:0}button.svelte-dai9hx .icon-wrapper.svelte-dai9hx{width:12px;height:12px}button.svelte-dai9hx .theme-text.svelte-dai9hx{position:absolute;top:100%;font-size:10px;line-height:14px;color:var(--text-primary-color)}"
  );
}
function X_(o) {
  let e, n, t, l, r, i, s, a, u;
  var p = o[2];
  function d(m) {
    return {};
  }
  return (
    p && (t = mt(p, d(o))),
    {
      c() {
        (e = v("button")),
          (n = v("span")),
          t && y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          (i = V(o[1])),
          c(n, "class", "icon-wrapper svelte-dai9hx"),
          c(r, "class", "theme-text svelte-dai9hx"),
          c(e, "class", "svelte-dai9hx"),
          ie(e, "selected", o[0]);
      },
      m(m, g) {
        w(m, e, g),
          f(e, n),
          t && C(t, n, null),
          f(e, l),
          f(e, r),
          f(r, i),
          (s = !0),
          a || ((u = X(e, "click", o[3])), (a = !0));
      },
      p(m, [g]) {
        if (g & 4 && p !== (p = m[2])) {
          if (t) {
            Q();
            let b = t;
            h(b.$$.fragment, 1, 0, () => {
              x(b, 1);
            }),
              Y();
          }
          p
            ? ((t = mt(p, d(m))),
              y(t.$$.fragment),
              _(t.$$.fragment, 1),
              C(t, n, null))
            : (t = null);
        }
        (!s || g & 2) && ee(i, m[1]), (!s || g & 1) && ie(e, "selected", m[0]);
      },
      i(m) {
        s || (t && _(t.$$.fragment, m), (s = !0));
      },
      o(m) {
        t && h(t.$$.fragment, m), (s = !1);
      },
      d(m) {
        m && $(e), t && x(t), (a = !1), u();
      },
    }
  );
}
function e0(o, e, n) {
  let { isSelected: t = !1 } = e,
    { text: l } = e,
    { icon: r } = e;
  function i(s) {
    ue.call(this, o, s);
  }
  return (
    (o.$$set = (s) => {
      "isSelected" in s && n(0, (t = s.isSelected)),
        "text" in s && n(1, (l = s.text)),
        "icon" in s && n(2, (r = s.icon));
    }),
    [t, l, r, i]
  );
}
var Ko = class extends H {
    constructor(e) {
      super(), j(this, e, e0, X_, U, { isSelected: 0, text: 1, icon: 2 }, J_);
    }
  },
  tc = Ko;
function n0(o) {
  Z(
    o,
    "svelte-1sxmtyg",
    ".theme-buttons.svelte-1sxmtyg{display:flex}.manage-colors.svelte-1sxmtyg{padding:8px;display:flex;justify-content:flex-end}"
  );
}
function nc(o, e, n) {
  let t = o.slice();
  return (t[4] = e[n]), t;
}
function oc(o) {
  let e, n;
  function t() {
    return o[3](o[4]);
  }
  return (
    (e = new tc({
      props: {
        icon: o[4].icon,
        text: o[4].text,
        isSelected: o[4].theme === o[0],
      },
    })),
    e.$on("click", t),
    {
      c() {
        y(e.$$.fragment);
      },
      m(l, r) {
        C(e, l, r), (n = !0);
      },
      p(l, r) {
        o = l;
        let i = {};
        r & 1 && (i.isSelected = o[4].theme === o[0]), e.$set(i);
      },
      i(l) {
        n || (_(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        h(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        x(e, l);
      },
    }
  );
}
function o0(o) {
  let e,
    n,
    t = o[1],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = oc(nc(o, t, i));
  let r = (i) =>
    h(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v("div");
      for (let i = 0; i < l.length; i += 1) l[i].c();
      c(e, "class", "theme-buttons svelte-1sxmtyg");
    },
    m(i, s) {
      w(i, e, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(e, null);
      n = !0;
    },
    p(i, s) {
      if (s & 3) {
        t = i[1];
        let a;
        for (a = 0; a < t.length; a += 1) {
          let u = nc(i, t, a);
          l[a]
            ? (l[a].p(u, s), _(l[a], 1))
            : ((l[a] = oc(u)), l[a].c(), _(l[a], 1), l[a].m(e, null));
        }
        for (Q(), a = t.length; a < l.length; a += 1) r(a);
        Y();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < t.length; s += 1) _(l[s]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1) h(l[s]);
      n = !1;
    },
    d(i) {
      i && $(e), Ae(l, i);
    },
  };
}
function l0(o) {
  let e = A("overlay_settings_appearance_tab__theme_manage_colors") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function r0(o) {
  let e, n, t, l, r;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_appearance_tab__theme_title"),
        dataTestId: "settings-item.theme",
        $$slots: { default: [o0] },
        $$scope: { ctx: o },
      },
    })),
    (l = new pe({
      props: {
        mod: "grey",
        size: "small",
        $$slots: { default: [l0] },
        $$scope: { ctx: o },
      },
    })),
    l.$on("click", o[2]),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          (t = v("div")),
          y(l.$$.fragment),
          c(t, "class", "manage-colors svelte-1sxmtyg");
      },
      m(i, s) {
        C(e, i, s), w(i, n, s), w(i, t, s), C(l, t, null), (r = !0);
      },
      p(i, s) {
        let a = {};
        s & 129 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
        let u = {};
        s & 128 && (u.$$scope = { dirty: s, ctx: i }), l.$set(u);
      },
      i(i) {
        r || (_(e.$$.fragment, i), _(l.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(e.$$.fragment, i), h(l.$$.fragment, i), (r = !1);
      },
      d(i) {
        x(e, i), i && $(n), i && $(t), x(l);
      },
    }
  );
}
function i0(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [r0] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 129 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function s0(o, e, n) {
  let { theme: t } = e,
    l = [
      {
        theme: "light",
        icon: ec,
        text: A("overlay_settings_appearance_tab__theme_light"),
      },
      {
        theme: "dark",
        icon: Xa,
        text: A("overlay_settings_appearance_tab__theme_dark"),
      },
      {
        theme: "auto",
        icon: Ja,
        text: A("overlay_settings_appearance_tab__theme_auto"),
      },
    ],
    r = () => {
      q.actions.openManageColors(),
        q.actions.sendAnalyticsEvent("settings.manage-colors-opened", void 0);
    },
    i = (s) => {
      q.actions.sendAnalyticsEvent("settings.theme-changed", {
        "new-value": s.theme,
      }),
        q.actions.changeTheme(s.theme);
    };
  return (
    (o.$$set = (s) => {
      "theme" in s && n(0, (t = s.theme));
    }),
    [t, l, r, i]
  );
}
var Qo = class extends H {
    constructor(e) {
      super(), j(this, e, s0, i0, U, { theme: 0 }, n0);
    }
  },
  lc = Qo;
N();
N();
function a0(o) {
  Z(
    o,
    "svelte-osnuym",
    ".dropdown.svelte-osnuym{position:relative;background-color:var(--dropdown-button-background);border-radius:3px}.dropdown.disabled.svelte-osnuym{color:var(--dropdown-button-color-disabled);background-color:var(--dropdown-button-background-disabled)}.dropdown.svelte-osnuym:not(.disabled):hover,.dropdown:not(.disabled).opened.svelte-osnuym{background-color:var(--dropdown-button-background-hover)}.dropdown-button.svelte-osnuym{justify-content:space-between;font-size:12px;line-height:22px;padding:0 8px;width:100%;height:100%}.dropdown-button.svelte-osnuym .icon{margin-left:10px;transform:rotate(180deg)}.dropdown-button.opened.svelte-osnuym .icon{transform:none}.options-list.svelte-osnuym{position:absolute;display:none;list-style-type:none;padding:2px;margin:0;outline:none;background-color:var(--dropdown-menu-background);color:var(--dropdown-menu-color);box-shadow:0 2px 8px rgb(0 0 0 / 0.3);border:1px solid var(--dropdown-menu-border);border-radius:3px;overflow:auto;z-index:1000}.options-list.opened.svelte-osnuym{display:initial}.option.svelte-osnuym{font-size:12px;line-height:20px;padding:0 4px;cursor:pointer;user-select:none;border-radius:3px;margin-bottom:3px}.option.svelte-osnuym:last-child{margin-bottom:0}.option.svelte-osnuym:hover{background-color:var(--dropdown-menu-background-hover)}.option.selected.svelte-osnuym{background-color:var(--dropdown-menu-background-selected)}.placeholder.svelte-osnuym{color:var(--dropdown-menu-background-placeholder)}"
  );
}
function rc(o, e, n) {
  let t = o.slice();
  return (t[20] = e[n]), t;
}
function ic(o) {
  let e,
    n = o[20].label + "",
    t,
    l,
    r,
    i;
  function s() {
    return o[17](o[20]);
  }
  return {
    c() {
      (e = v("li")),
        (t = V(n)),
        (l = S()),
        c(e, "class", "option svelte-osnuym"),
        ie(e, "selected", o[20].label === o[7]?.label);
    },
    m(a, u) {
      w(a, e, u), f(e, t), f(e, l), r || ((i = X(e, "click", s)), (r = !0));
    },
    p(a, u) {
      (o = a),
        u & 8 && n !== (n = o[20].label + "") && ee(t, n),
        u & 136 && ie(e, "selected", o[20].label === o[7]?.label);
    },
    d(a) {
      a && $(e), (r = !1), i();
    },
  };
}
function c0(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = o[3],
    a = [];
  for (let u = 0; u < s.length; u += 1) a[u] = ic(rc(o, s, u));
  return {
    c() {
      e = v("ul");
      for (let u = 0; u < a.length; u += 1) a[u].c();
      c(e, "class", (n = at(`options-list ${o[2]}`) + " svelte-osnuym")),
        c(e, "role", "listbox"),
        c(e, "tabindex", "-1"),
        c(e, "data-testid", (t = o[5] + ".list")),
        ie(e, "opened", o[8]);
    },
    m(u, p) {
      w(u, e, p);
      for (let d = 0; d < a.length; d += 1) a[d] && a[d].m(e, null);
      r || ((i = gt((l = o[11].call(null, e)))), (r = !0));
    },
    p(u, p) {
      if (p & 16520) {
        s = u[3];
        let d;
        for (d = 0; d < s.length; d += 1) {
          let m = rc(u, s, d);
          a[d] ? a[d].p(m, p) : ((a[d] = ic(m)), a[d].c(), a[d].m(e, null));
        }
        for (; d < a.length; d += 1) a[d].d(1);
        a.length = s.length;
      }
      p & 4 &&
        n !== (n = at(`options-list ${u[2]}`) + " svelte-osnuym") &&
        c(e, "class", n),
        p & 32 && t !== (t = u[5] + ".list") && c(e, "data-testid", t),
        p & 260 && ie(e, "opened", u[8]);
    },
    d(u) {
      u && $(e), Ae(a, u), (r = !1), i();
    },
  };
}
function u0(o) {
  let e,
    n,
    t = (o[7] ? o[7].label : o[0]) + "",
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k;
  return (
    (i = new ys({ props: { width: "11", height: "11" } })),
    (p = new Cs({
      props: {
        isInnerElement: !0,
        $$slots: { default: [c0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          (l = V(t)),
          (r = S()),
          y(i.$$.fragment),
          (u = S()),
          y(p.$$.fragment),
          c(n, "class", "dropdown-button svelte-osnuym"),
          c(n, "type", "button"),
          (n.disabled = o[4]),
          c(n, "data-testid", (s = o[5] + ".button")),
          ie(n, "opened", o[8]),
          ie(n, "placeholder", o[0]),
          c(e, "class", (d = at(`dropdown ${o[1]}`) + " svelte-osnuym")),
          lt(e, "min-width", o[6]),
          ie(e, "disabled", o[4]);
      },
      m(E, I) {
        w(E, e, I),
          f(e, n),
          f(n, l),
          f(n, r),
          C(i, n, null),
          o[16](n),
          f(e, u),
          C(p, e, null),
          (g = !0),
          b ||
            ((k = [
              X(n, "click", o[12]),
              gt((a = o[10].call(null, n))),
              gt((m = o[13].call(null, e))),
            ]),
            (b = !0));
      },
      p(E, [I]) {
        (!g || I & 129) &&
          t !== (t = (E[7] ? E[7].label : E[0]) + "") &&
          ee(l, t),
          (!g || I & 16) && (n.disabled = E[4]),
          (!g || (I & 32 && s !== (s = E[5] + ".button"))) &&
            c(n, "data-testid", s),
          (!g || I & 256) && ie(n, "opened", E[8]),
          (!g || I & 1) && ie(n, "placeholder", E[0]);
        let T = {};
        I & 8389036 && (T.$$scope = { dirty: I, ctx: E }),
          p.$set(T),
          (!g ||
            (I & 2 && d !== (d = at(`dropdown ${E[1]}`) + " svelte-osnuym"))) &&
            c(e, "class", d),
          (!g || I & 64) && lt(e, "min-width", E[6]),
          (!g || I & 18) && ie(e, "disabled", E[4]);
      },
      i(E) {
        g || (_(i.$$.fragment, E), _(p.$$.fragment, E), (g = !0));
      },
      o(E) {
        h(i.$$.fragment, E), h(p.$$.fragment, E), (g = !1);
      },
      d(E) {
        E && $(e), x(i), o[16](null), x(p), (b = !1), Se(k);
      },
    }
  );
}
function p0(o, e, n) {
  let t = oe(),
    { className: l = "" } = e,
    { listClassName: r = "" } = e,
    { options: i = [] } = e,
    { disabled: s = !1 } = e,
    { dataTestId: a = "" } = e,
    { value: u = i?.[0]?.value } = e,
    { minWidth: p = "auto" } = e,
    { placeholder: d = "Empty" } = e,
    m = !1,
    g,
    [b, k] = At({
      placement: "bottom-start",
      modifiers: [
        {
          name: "sameWidth",
          enabled: !0,
          phase: "beforeWrite",
          fn: (z) => {
            let G = z.state.elements.reference.getBoundingClientRect().width;
            z.state.styles.popper &&
              ((z.state.styles.popper.width = `${G}px`),
              (z.state.styles.popper.minWidth = `${G}px`));
          },
        },
      ],
    }),
    E = () => {
      n(8, (m = !m));
    },
    I = (z) => ls(z, () => n(8, (m = !1))),
    T = (z) => {
      n(15, (u = z.value)),
        n(8, (m = !1)),
        n(0, (d = "")),
        t("select", z),
        z.callback?.(z);
    },
    P,
    M;
  ye(
    () => (
      (P = new IntersectionObserver(
        (z) => {
          z[0]?.isIntersecting || n(8, (m = !1));
        },
        { threshold: 0 }
      )),
      P.observe(M),
      () => {
        P.disconnect();
      }
    )
  );
  function B(z) {
    we[z ? "unshift" : "push"](() => {
      (M = z), n(9, M);
    });
  }
  let O = (z) => T(z);
  return (
    (o.$$set = (z) => {
      "className" in z && n(1, (l = z.className)),
        "listClassName" in z && n(2, (r = z.listClassName)),
        "options" in z && n(3, (i = z.options)),
        "disabled" in z && n(4, (s = z.disabled)),
        "dataTestId" in z && n(5, (a = z.dataTestId)),
        "value" in z && n(15, (u = z.value)),
        "minWidth" in z && n(6, (p = z.minWidth)),
        "placeholder" in z && n(0, (d = z.placeholder));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 32904) {
        e: n(7, (g = i.find((z) => z.value === u) ?? i[0])),
          n(15, (u = g?.value));
      }
    }),
    [d, l, r, i, s, a, p, g, m, M, b, k, E, I, T, u, B, O]
  );
}
var Yo = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          p0,
          u0,
          U,
          {
            className: 1,
            listClassName: 2,
            options: 3,
            disabled: 4,
            dataTestId: 5,
            value: 15,
            minWidth: 6,
            placeholder: 0,
          },
          a0
        );
    }
  },
  vt = Yo;
function f0(o) {
  let e, n;
  return (
    (e = new vt({
      props: {
        value: o[0] ?? void 0,
        options: o[3],
        dataTestId: "global-settings.appearance.sidebar-width.dropdown",
      },
    })),
    e.$on("select", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.value = t[0] ?? void 0), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function d0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[1], dataTestId: "show-switch" } })),
    e.$on("change", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.checked = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function m0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[2], dataTestId: "grayscale-switch" } })),
    e.$on("change", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4 && (r.checked = t[2]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function _0(o) {
  let e, n, t, l, r, i;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_appearance_tab__sidebar_width_title"),
        dataTestId: "settings-item.sidebar-width",
        $$slots: { default: [f0] },
        $$scope: { ctx: o },
      },
    })),
    (t = new Me({
      props: {
        name: A("overlay_settings_appearance_tab__show_sidebar_title"),
        dataTestId: "settings-item.show-sidebar",
        $$slots: { default: [d0] },
        $$scope: { ctx: o },
      },
    })),
    (r = new Me({
      props: {
        name: A(
          "overlay_settings_appearance_tab__sidebar_icons_grayscale_title"
        ),
        $$slots: { default: [m0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          y(t.$$.fragment),
          (l = S()),
          y(r.$$.fragment);
      },
      m(s, a) {
        C(e, s, a), w(s, n, a), C(t, s, a), w(s, l, a), C(r, s, a), (i = !0);
      },
      p(s, a) {
        let u = {};
        a & 257 && (u.$$scope = { dirty: a, ctx: s }), e.$set(u);
        let p = {};
        a & 258 && (p.$$scope = { dirty: a, ctx: s }), t.$set(p);
        let d = {};
        a & 260 && (d.$$scope = { dirty: a, ctx: s }), r.$set(d);
      },
      i(s) {
        i ||
          (_(e.$$.fragment, s),
          _(t.$$.fragment, s),
          _(r.$$.fragment, s),
          (i = !0));
      },
      o(s) {
        h(e.$$.fragment, s), h(t.$$.fragment, s), h(r.$$.fragment, s), (i = !1);
      },
      d(s) {
        x(e, s), s && $(n), x(t, s), s && $(l), x(r, s);
      },
    }
  );
}
function g0(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [_0] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 263 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function h0(o, e, n) {
  let { sidebarSize: t } = e,
    { showSidebar: l } = e,
    { inactiveServiceGrayscale: r } = e,
    i = [
      {
        label: A("overlay_settings_appearance_tab__size_small"),
        value: "small",
      },
      {
        label: A("overlay_settings_appearance_tab__size_medium"),
        value: "medium",
      },
      {
        label: A("overlay_settings_appearance_tab__size_large"),
        value: "large",
      },
      { label: A("overlay_settings_appearance_tab__size_huge"), value: "huge" },
    ],
    s = (d) => {
      q.actions.sendAnalyticsEvent("settings.sidebar-size-changed", {
        "new-value": d,
      }),
        q.actions.changeSidebarSize(d);
    },
    a = (d) => s(d.detail.value),
    u = () => {
      let d = !l;
      q.actions.sendAnalyticsEvent("settings.sidebar-hide-state-changed", {
        "new-value": nt(d),
      }),
        q.actions.toggleSidebarVisibility(d);
    },
    p = () => {
      let d = !r;
      q.actions.sendAnalyticsEvent("settings.sidebar-grayscale-changed", {
        "new-value": nt(d),
      }),
        q.actions.toggleInactiveServiceGrayscale(d);
    };
  return (
    (o.$$set = (d) => {
      "sidebarSize" in d && n(0, (t = d.sidebarSize)),
        "showSidebar" in d && n(1, (l = d.showSidebar)),
        "inactiveServiceGrayscale" in d &&
          n(2, (r = d.inactiveServiceGrayscale));
    }),
    [t, l, r, i, s, a, u, p]
  );
}
var Jo = class extends H {
    constructor(e) {
      super(),
        j(this, e, h0, g0, U, {
          sidebarSize: 0,
          showSidebar: 1,
          inactiveServiceGrayscale: 2,
        });
    }
  },
  sc = Jo;
N();
function v0(o) {
  let e, n;
  return (
    (e = new vt({ props: { value: o[0], options: o[1] } })),
    e.$on("select", o[3]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.value = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function b0(o) {
  let e, n;
  return (
    (e = new Me({
      props: { name: o[2], $$slots: { default: [v0] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 129 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function k0(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "time-format-section",
        $$slots: { default: [b0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 129 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var Xo = "12",
  el = "24";
function w0(o, e, n) {
  let t,
    { use12Format: l } = e,
    r = `${Xo}h`,
    i = `${el}h`,
    s = [
      { label: i, value: el, use12Format: !1 },
      { label: r, value: Xo, use12Format: !0 },
    ],
    a = A("settings_appearance__time_format", [`${i} / ${r}`]),
    u = (p) => {
      q.actions.sendAnalyticsEvent("settings.time-format-changed", {
        "new-value": p.detail.value,
      }),
        q.actions.use12HFormatInClock(Boolean(p.detail.use12Format));
    };
  return (
    (o.$$set = (p) => {
      "use12Format" in p && n(4, (l = p.use12Format));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(0, (t = l ? Xo : el));
      }
    }),
    [t, s, a, u, l]
  );
}
var tl = class extends H {
    constructor(e) {
      super(), j(this, e, w0, k0, U, { use12Format: 4 });
    }
  },
  ac = tl;
N();
N();
N();
function $0(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("rect")),
        c(
          n,
          "d",
          "M11.27 5.445l.73.688L7.265 11 4 7.644l.73-.688L7.264 9.56l4.006-4.116z"
        ),
        c(n, "fill", "currentColor"),
        c(t, "x", ".5"),
        c(t, "y", ".5"),
        c(t, "width", "15"),
        c(t, "height", "15"),
        c(t, "rx", "7.5"),
        c(t, "stroke", "currentColor"),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 16"),
        c(e, "fill", "none"),
        c(e, "data-testid", "selected-icon"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, t);
    },
    p(r, [i]) {
      i & 4 && l !== (l = `icon ${r[2]}`) && c(e, "class", l),
        i & 1 && c(e, "width", r[0]),
        i & 2 && c(e, "height", r[1]);
    },
    i: L,
    o: L,
    d(r) {
      r && $(e);
    },
  };
}
function y0(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var nl = class extends H {
    constructor(e) {
      super(), j(this, e, y0, $0, U, { width: 0, height: 1, className: 2 });
    }
  },
  cc = nl;
function C0(o) {
  Z(
    o,
    "svelte-1k45dit",
    ".wallpaper-button.svelte-1k45dit.svelte-1k45dit{--color:var(--settings-popup-wallpaper-color);unset:all;display:flex;flex-direction:column;border-radius:8px;max-width:100%;max-height:100%;border:0;height:64px;justify-content:center;align-items:center;color:transparent;fill:transparent;background:var(--settings-popup-wallpaper-background);background-size:cover;position:relative;overflow:hidden;cursor:pointer;outline:none}.wallpaper-button.svelte-1k45dit .icon,.wallpaper-button.svelte-1k45dit span.svelte-1k45dit{position:relative;z-index:1;margin-top:8px}.wallpaper-button.svelte-1k45dit .icon{opacity:0}.wallpaper-button.selected.svelte-1k45dit.svelte-1k45dit,.wallpaper-button.svelte-1k45dit.svelte-1k45dit:hover{color:var(--color)}.wallpaper-button.selected.svelte-1k45dit .icon,.wallpaper-button.svelte-1k45dit:hover .icon{opacity:1}.wallpaper-button.svelte-1k45dit.svelte-1k45dit::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:var(--animation-time);opacity:0}.wallpaper-button.selected.svelte-1k45dit.svelte-1k45dit::before{background-color:var(--settings-popup-wallpaper-overlay-background-selected);opacity:var(--settings-popup-wallpaper-overlay-opacity-selected)}.wallpaper-button.svelte-1k45dit.svelte-1k45dit:hover::before{background-color:var(--settings-popup-wallpaper-overlay-background-hover);opacity:var(--settings-popup-wallpaper-overlay-opacity-hover)}"
  );
}
function x0(o) {
  let e, n, t, l, r, i, s, a;
  return (
    (n = new cc({ props: { width: "16", height: "16" } })),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("span")),
          (r = V(o[2])),
          c(l, "class", "svelte-1k45dit"),
          c(e, "class", "wallpaper-button svelte-1k45dit"),
          lt(e, "background-image", "url(" + o[0].url + ")"),
          ie(e, "selected", o[1]);
      },
      m(u, p) {
        w(u, e, p),
          C(n, e, null),
          f(e, t),
          f(e, l),
          f(l, r),
          (i = !0),
          s || ((a = X(e, "click", o[3])), (s = !0));
      },
      p(u, [p]) {
        (!i || p & 4) && ee(r, u[2]),
          (!i || p & 1) && lt(e, "background-image", "url(" + u[0].url + ")"),
          (!i || p & 2) && ie(e, "selected", u[1]);
      },
      i(u) {
        i || (_(n.$$.fragment, u), (i = !0));
      },
      o(u) {
        h(n.$$.fragment, u), (i = !1);
      },
      d(u) {
        u && $(e), x(n), (s = !1), a();
      },
    }
  );
}
function S0(o, e, n) {
  let t,
    { wallpaper: l } = e,
    { isSelected: r } = e,
    i = () => {
      r ||
        (q.actions.sendAnalyticsEvent("settings.preferred-wallpaper-changed", {
          "new-value": l.id,
        }),
        q.actions.changePreferredWallpaperId(l.id));
    };
  return (
    (o.$$set = (s) => {
      "wallpaper" in s && n(0, (l = s.wallpaper)),
        "isSelected" in s && n(1, (r = s.isSelected));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2) {
        e: n(
          2,
          (t = r
            ? A("overlay_settings_appearance_tab__wallpaper_selected")
            : A("overlay_settings_appearance_tab__wallpaper_select"))
        );
      }
    }),
    [l, r, t, i]
  );
}
var ol = class extends H {
    constructor(e) {
      super(), j(this, e, S0, x0, U, { wallpaper: 0, isSelected: 1 }, C0);
    }
  },
  ll = ol;
N();
N();
function A0(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M14.522 4.125l-.875.835c.603.719.98 1.586 1.09 2.501a4.687 4.687 0 01-.475 2.67 4.967 4.967 0 01-1.892 2.018 5.297 5.297 0 01-2.729.745H5.716v-1.93l-2.639 2.518L5.716 16v-1.931h3.925a6.572 6.572 0 003.413-.943A6.157 6.157 0 0015.4 10.58a5.813 5.813 0 00.546-3.35 5.926 5.926 0 00-1.425-3.106zm-8.163-1.02h3.926v1.932l2.638-2.519L10.285 0v1.931H6.359a6.573 6.573 0 00-3.412.943A6.158 6.158 0 00.6 5.42a5.814 5.814 0 00-.547 3.35 5.928 5.928 0 001.424 3.106l.878-.838a4.765 4.765 0 01-1.09-2.5c-.11-.915.055-1.84.473-2.67A4.965 4.965 0 013.631 3.85a5.295 5.295 0 012.728-.744z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 16"),
        c(e, "fill", "none"),
        c(e, "data-testid", "shuffle-icon"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function E0(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var rl = class extends H {
    constructor(e) {
      super(), j(this, e, E0, A0, U, { width: 0, height: 1, className: 2 });
    }
  },
  uc = rl;
function I0(o) {
  Z(
    o,
    "svelte-1gfrnqy",
    ".shuffle-button.svelte-1gfrnqy.svelte-1gfrnqy{color:var(--settings-popup-wallpaper-color-shuffle);background:var(--settings-popup-wallpaper-background);flex-direction:column;border-radius:8px;height:64px}.shuffle-button.svelte-1gfrnqy .icon,.shuffle-button.svelte-1gfrnqy span.svelte-1gfrnqy{position:relative;z-index:1;margin-top:8px}.shuffle-button.selected.svelte-1gfrnqy.svelte-1gfrnqy{background-color:var(--settings-popup-wallpaper-background-shuffle-selected)}.shuffle-button.svelte-1gfrnqy.svelte-1gfrnqy:hover{background-color:var(--settings-popup-wallpaper-background-shuffle-hover)}"
  );
}
function T0(o) {
  let e, n, t, l, r, i, s;
  return (
    (n = new uc({ props: { width: "16", height: "16" } })),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("span")),
          (l.textContent = `${A(
            "overlay_settings_appearance_tab__shuffle_button_text"
          )}`),
          c(l, "class", "svelte-1gfrnqy"),
          c(e, "class", "shuffle-button svelte-1gfrnqy"),
          ie(e, "selected", o[0]);
      },
      m(a, u) {
        w(a, e, u),
          C(n, e, null),
          f(e, t),
          f(e, l),
          (r = !0),
          i || ((s = X(e, "click", o[1])), (i = !0));
      },
      p(a, [u]) {
        (!r || u & 1) && ie(e, "selected", a[0]);
      },
      i(a) {
        r || (_(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        h(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && $(e), x(n), (i = !1), s();
      },
    }
  );
}
function M0(o, e, n) {
  let { isSelected: t } = e,
    l = () => {
      t || q.actions.enableWallpapersRotate();
    };
  return (
    (o.$$set = (r) => {
      "isSelected" in r && n(0, (t = r.isSelected));
    }),
    [t, l]
  );
}
var il = class extends H {
    constructor(e) {
      super(), j(this, e, M0, T0, U, { isSelected: 0 }, I0);
    }
  },
  pc = il;
function P0(o) {
  Z(
    o,
    "svelte-1tcjzhx",
    ".wallpapers.svelte-1tcjzhx{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:8px}.divider.svelte-1tcjzhx{display:block;height:2px;background:var(--popup-bg-color);border:0;margin:0 -8px}"
  );
}
function fc(o, e, n) {
  let t = o.slice();
  return (t[6] = e[n]), t;
}
function dc(o, e, n) {
  let t = o.slice();
  return (t[6] = e[n]), t;
}
function z0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[0], dataTestId: "photo-switch" } })),
    e.$on("change", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.checked = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function mc(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[2]?.length && _c(o);
  t = new pc({ props: { isSelected: o[4] } });
  let s = o[3] && hc(o);
  return {
    c() {
      i && i.c(),
        (e = S()),
        (n = v("div")),
        y(t.$$.fragment),
        (l = S()),
        s && s.c(),
        c(n, "class", "wallpapers svelte-1tcjzhx");
    },
    m(a, u) {
      i && i.m(a, u),
        w(a, e, u),
        w(a, n, u),
        C(t, n, null),
        f(n, l),
        s && s.m(n, null),
        (r = !0);
    },
    p(a, u) {
      a[2]?.length
        ? i
          ? (i.p(a, u), u & 4 && _(i, 1))
          : ((i = _c(a)), i.c(), _(i, 1), i.m(e.parentNode, e))
        : i &&
          (Q(),
          h(i, 1, 1, () => {
            i = null;
          }),
          Y());
      let p = {};
      u & 16 && (p.isSelected = a[4]),
        t.$set(p),
        a[3]
          ? s
            ? (s.p(a, u), u & 8 && _(s, 1))
            : ((s = hc(a)), s.c(), _(s, 1), s.m(n, null))
          : s &&
            (Q(),
            h(s, 1, 1, () => {
              s = null;
            }),
            Y());
    },
    i(a) {
      r || (_(i), _(t.$$.fragment, a), _(s), (r = !0));
    },
    o(a) {
      h(i), h(t.$$.fragment, a), h(s), (r = !1);
    },
    d(a) {
      i && i.d(a), a && $(e), a && $(n), x(t), s && s.d();
    },
  };
}
function _c(o) {
  let e,
    n = [],
    t = new Map(),
    l,
    r,
    i,
    s = o[2],
    a = (u) => u[6].id;
  for (let u = 0; u < s.length; u += 1) {
    let p = dc(o, s, u),
      d = a(p);
    t.set(d, (n[u] = gc(d, p)));
  }
  return {
    c() {
      e = v("div");
      for (let u = 0; u < n.length; u += 1) n[u].c();
      (l = S()),
        (r = v("hr")),
        c(e, "class", "wallpapers svelte-1tcjzhx"),
        c(r, "class", "divider svelte-1tcjzhx");
    },
    m(u, p) {
      w(u, e, p);
      for (let d = 0; d < n.length; d += 1) n[d] && n[d].m(e, null);
      w(u, l, p), w(u, r, p), (i = !0);
    },
    p(u, p) {
      p & 22 &&
        ((s = u[2]),
        Q(),
        (n = ut(n, p, a, 1, u, s, t, e, ct, gc, null, dc)),
        Y());
    },
    i(u) {
      if (!i) {
        for (let p = 0; p < s.length; p += 1) _(n[p]);
        i = !0;
      }
    },
    o(u) {
      for (let p = 0; p < n.length; p += 1) h(n[p]);
      i = !1;
    },
    d(u) {
      u && $(e);
      for (let p = 0; p < n.length; p += 1) n[p].d();
      u && $(l), u && $(r);
    },
  };
}
function gc(o, e) {
  let n, t, l;
  return (
    (t = new ll({
      props: { wallpaper: e[6], isSelected: e[6].id === e[1] && !e[4] },
    })),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), y(t.$$.fragment), (this.first = n);
      },
      m(r, i) {
        w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        e = r;
        let s = {};
        i & 4 && (s.wallpaper = e[6]),
          i & 22 && (s.isSelected = e[6].id === e[1] && !e[4]),
          t.$set(s);
      },
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(n), x(t, r);
      },
    }
  );
}
function hc(o) {
  let e = [],
    n = new Map(),
    t,
    l,
    r = o[3],
    i = (s) => s[6].id;
  for (let s = 0; s < r.length; s += 1) {
    let a = fc(o, r, s),
      u = i(a);
    n.set(u, (e[s] = vc(u, a)));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1) e[s].c();
      t = fe();
    },
    m(s, a) {
      for (let u = 0; u < e.length; u += 1) e[u] && e[u].m(s, a);
      w(s, t, a), (l = !0);
    },
    p(s, a) {
      a & 26 &&
        ((r = s[3]),
        Q(),
        (e = ut(e, a, i, 1, s, r, n, t.parentNode, ct, vc, t, fc)),
        Y());
    },
    i(s) {
      if (!l) {
        for (let a = 0; a < r.length; a += 1) _(e[a]);
        l = !0;
      }
    },
    o(s) {
      for (let a = 0; a < e.length; a += 1) h(e[a]);
      l = !1;
    },
    d(s) {
      for (let a = 0; a < e.length; a += 1) e[a].d(s);
      s && $(t);
    },
  };
}
function vc(o, e) {
  let n, t, l;
  return (
    (t = new ll({
      props: { wallpaper: e[6], isSelected: e[6].id === e[1] && !e[4] },
    })),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), y(t.$$.fragment), (this.first = n);
      },
      m(r, i) {
        w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        e = r;
        let s = {};
        i & 8 && (s.wallpaper = e[6]),
          i & 26 && (s.isSelected = e[6].id === e[1] && !e[4]),
          t.$set(s);
      },
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(n), x(t, r);
      },
    }
  );
}
function B0(o) {
  let e, n, t, l;
  e = new Me({
    props: {
      name: A("overlay_settings_appearance_tab__photo_background"),
      $$slots: { default: [z0] },
      $$scope: { ctx: o },
    },
  });
  let r = o[0] && mc(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      let a = {};
      s & 2049 && (a.$$scope = { dirty: s, ctx: i }),
        e.$set(a),
        i[0]
          ? r
            ? (r.p(i, s), s & 1 && _(r, 1))
            : ((r = mc(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function N0(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "wallpapers-section",
        $$slots: { default: [B0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 2079 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function q0(o, e, n) {
  let { showPhotoBackground: t } = e,
    { preferredWallpaperId: l } = e,
    { gradients: r = [] } = e,
    { wallpapers: i = [] } = e,
    { wallpapersRotateEnabled: s } = e,
    a = () => {
      let u = !t;
      q.actions.sendAnalyticsEvent("settings.wallpaper-visibility-changed", {
        "new-value": nt(u),
      }),
        q.actions.toggleShowingPhotoBackground(u);
    };
  return (
    (o.$$set = (u) => {
      "showPhotoBackground" in u && n(0, (t = u.showPhotoBackground)),
        "preferredWallpaperId" in u && n(1, (l = u.preferredWallpaperId)),
        "gradients" in u && n(2, (r = u.gradients)),
        "wallpapers" in u && n(3, (i = u.wallpapers)),
        "wallpapersRotateEnabled" in u && n(4, (s = u.wallpapersRotateEnabled));
    }),
    [t, l, r, i, s, a]
  );
}
var sl = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          q0,
          N0,
          U,
          {
            showPhotoBackground: 0,
            preferredWallpaperId: 1,
            gradients: 2,
            wallpapers: 3,
            wallpapersRotateEnabled: 4,
          },
          P0
        );
    }
  },
  bc = sl;
function D0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[0] } })),
    e.$on("change", o[13]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.checked = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function L0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[1] } })),
    e.$on("change", o[14]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.checked = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U0(o) {
  let e,
    n =
      A(
        "overlay_settings_appearance_tab__hover_icons_toolbar_hide_description"
      ) + "";
  return {
    c() {
      (e = v("div")), c(e, "slot", "description");
    },
    m(t, l) {
      w(t, e, l), (e.innerHTML = n);
    },
    p: L,
    d(t) {
      t && $(e);
    },
  };
}
function j0(o) {
  let e, n, t, l;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_appearance_tab__headless_title"),
        dataTestId: "settings-item-headless-mode",
        $$slots: { default: [D0] },
        $$scope: { ctx: o },
      },
    })),
    (t = new Me({
      props: {
        name: A("overlay_settings_appearance_tab__hover_icons_toolbar_hide"),
        dataTestId: "settings-item-toolbar-hover-icons",
        $$slots: { description: [U0], default: [L0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 65537 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
        let a = {};
        i & 65538 && (a.$$scope = { dirty: i, ctx: r }), t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function H0(o) {
  let e, n, t, l, r, i, s, a, u, p;
  return (
    (e = new lc({ props: { theme: o[11] } })),
    (t = new sc({
      props: {
        sidebarSize: o[10],
        showSidebar: o[9],
        inactiveServiceGrayscale: o[8],
      },
    })),
    (r = new Te({
      props: { $$slots: { default: [j0] }, $$scope: { ctx: o } },
    })),
    (s = new ac({ props: { use12Format: o[7] } })),
    (u = new bc({
      props: {
        showPhotoBackground: o[6],
        gradients: o[5],
        wallpapers: o[4],
        preferredWallpaperId: o[3],
        wallpapersRotateEnabled: o[2],
      },
    })),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          y(t.$$.fragment),
          (l = S()),
          y(r.$$.fragment),
          (i = S()),
          y(s.$$.fragment),
          (a = S()),
          y(u.$$.fragment);
      },
      m(d, m) {
        C(e, d, m),
          w(d, n, m),
          C(t, d, m),
          w(d, l, m),
          C(r, d, m),
          w(d, i, m),
          C(s, d, m),
          w(d, a, m),
          C(u, d, m),
          (p = !0);
      },
      p(d, [m]) {
        let g = {};
        m & 2048 && (g.theme = d[11]), e.$set(g);
        let b = {};
        m & 1024 && (b.sidebarSize = d[10]),
          m & 512 && (b.showSidebar = d[9]),
          m & 256 && (b.inactiveServiceGrayscale = d[8]),
          t.$set(b);
        let k = {};
        m & 65539 && (k.$$scope = { dirty: m, ctx: d }), r.$set(k);
        let E = {};
        m & 128 && (E.use12Format = d[7]), s.$set(E);
        let I = {};
        m & 64 && (I.showPhotoBackground = d[6]),
          m & 32 && (I.gradients = d[5]),
          m & 16 && (I.wallpapers = d[4]),
          m & 8 && (I.preferredWallpaperId = d[3]),
          m & 4 && (I.wallpapersRotateEnabled = d[2]),
          u.$set(I);
      },
      i(d) {
        p ||
          (_(e.$$.fragment, d),
          _(t.$$.fragment, d),
          _(r.$$.fragment, d),
          _(s.$$.fragment, d),
          _(u.$$.fragment, d),
          (p = !0));
      },
      o(d) {
        h(e.$$.fragment, d),
          h(t.$$.fragment, d),
          h(r.$$.fragment, d),
          h(s.$$.fragment, d),
          h(u.$$.fragment, d),
          (p = !1);
      },
      d(d) {
        x(e, d),
          d && $(n),
          x(t, d),
          d && $(l),
          x(r, d),
          d && $(i),
          x(s, d),
          d && $(a),
          x(u, d);
      },
    }
  );
}
function V0(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E = q.stores.globalSettingsAppearanceTab;
  ve(o, E, (P) => n(15, (k = P)));
  let I = () => {
      let P = !g;
      q.actions.sendAnalyticsEvent("settings.headless-mode-changed", {
        "new-value": nt(P),
      }),
        q.actions.changeIsHeadlessModeEnabled(P);
    },
    T = (P) => {
      let M = P.target.checked;
      q.actions.sendAnalyticsEvent(
        "settings.toolbar-icons-hide-on-hover-changed",
        { "new-value": nt(M) }
      ),
        q.actions.changeIsHideToolbarIconsOnHoverEnabled(M);
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 32768) {
        e: n(11, (t = k?.theme ?? null));
      }
      if (o.$$.dirty & 32768) {
        e: n(10, (l = k?.sidebarSize ?? null));
      }
      if (o.$$.dirty & 32768) {
        e: n(9, (r = k?.showSidebar ?? !1));
      }
      if (o.$$.dirty & 32768) {
        e: n(8, (i = k?.inactiveServiceGrayscale ?? !1));
      }
      if (o.$$.dirty & 32768) {
        e: n(7, (s = k?.use12Format ?? !1));
      }
      if (o.$$.dirty & 32768) {
        e: n(6, (a = k?.showPhotoBackground ?? !1));
      }
      if (o.$$.dirty & 32768) {
        e: n(5, (u = k?.gradients ?? []));
      }
      if (o.$$.dirty & 32768) {
        e: n(4, (p = k?.wallpapers ?? []));
      }
      if (o.$$.dirty & 32768) {
        e: n(3, (d = k?.preferredWallpaperId ?? null));
      }
      if (o.$$.dirty & 32768) {
        e: n(2, (m = k?.rotateWallpapersEnabled ?? !1));
      }
      if (o.$$.dirty & 32768) {
        e: n(0, (g = k?.isHeadlessModeEnabled ?? !1));
      }
      if (o.$$.dirty & 32768) {
        e: n(1, (b = k?.isToolbarIconsHideOnHoverEnabled ?? !1));
      }
    }),
    [g, b, m, d, p, u, a, s, i, r, l, t, E, I, T, k]
  );
}
var al = class extends H {
    constructor(e) {
      super(), j(this, e, V0, H0, U, {});
    }
  },
  kc = al;
N();
function wc(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [W0] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2050 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function O0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[1] } })),
    e.$on("change", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.checked = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function R0(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A(
          "overlay_settings_cpu_monitor_tab__notifications_description"
        )}`),
        c(e, "slot", "description");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function W0(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_cpu_monitor_tab__notifications_title"),
        dataTestId: "setting-item-cpu-monitor-discarder",
        $$slots: { description: [R0], default: [O0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2050 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function $c(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [F0] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2065 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function G0(o) {
  let e, n;
  return (
    (e = new Oe({ props: { disabled: !o[4], checked: o[0] } })),
    e.$on("change", o[9]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16 && (r.disabled = !t[4]), l & 1 && (r.checked = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function F0(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_cpu_monitor_tab__suspend_title"),
        dataTestId: "setting-item-cpu-monitor-discarder",
        $$slots: { default: [G0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2065 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Z0(o) {
  let e,
    n,
    t,
    l,
    r = o[2] && wc(o),
    i = o[4] && $c(o);
  return (
    (t = new Jt({
      props: {
        title: A("overlay_settings_cpu_monitor_tab__allow_domains_title"),
        domains: o[3],
      },
    })),
    t.$on("addDomain", o[6]),
    t.$on("removeDomain", o[7]),
    {
      c() {
        r && r.c(), (e = S()), i && i.c(), (n = S()), y(t.$$.fragment);
      },
      m(s, a) {
        r && r.m(s, a),
          w(s, e, a),
          i && i.m(s, a),
          w(s, n, a),
          C(t, s, a),
          (l = !0);
      },
      p(s, [a]) {
        s[2]
          ? r
            ? (r.p(s, a), a & 4 && _(r, 1))
            : ((r = wc(s)), r.c(), _(r, 1), r.m(e.parentNode, e))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y()),
          s[4]
            ? i
              ? (i.p(s, a), a & 16 && _(i, 1))
              : ((i = $c(s)), i.c(), _(i, 1), i.m(n.parentNode, n))
            : i &&
              (Q(),
              h(i, 1, 1, () => {
                i = null;
              }),
              Y());
        let u = {};
        a & 8 && (u.domains = s[3]), t.$set(u);
      },
      i(s) {
        l || (_(r), _(i), _(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(r), h(i), h(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        r && r.d(s), s && $(e), i && i.d(s), s && $(n), x(t, s);
      },
    }
  );
}
function K0(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u = q.stores.globalSettingsCpuMonitorTab;
  ve(o, u, (b) => n(10, (a = b)));
  let p = ({ detail: b }) => {
      q.actions.sendAnalyticsEvent(
        "settings.cpu-monitor-whitelist-item-added",
        void 0
      ),
        q.actions.addCpuMonitorDomain(b);
    },
    d = ({ detail: b }) => {
      q.actions.sendAnalyticsEvent(
        "settings.cpu-monitor-whitelist-item-removed",
        void 0
      ),
        q.actions.removeCpuMonitorDomain(b);
    },
    m = () => {
      let b = !s;
      q.actions.sendAnalyticsEvent(
        "settings.cpu-monitor-notifications-changed",
        { "new-value": nt(b) }
      ),
        q.actions.changeEnableCpuMonitorNotification(b);
    },
    g = () => {
      let b = !l;
      q.actions.sendAnalyticsEvent(
        "settings.cpu-monitor-auto-discard-changed",
        { "new-value": nt(b) }
      ),
        q.actions.changeEnableCpuMonitorAutoDiscard(b);
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 1024) {
        e: n(4, (t = a?.configEnableAutoDiscard ?? !0));
      }
      if (o.$$.dirty & 1024) {
        e: n(0, (l = a?.enableAutoDiscard ?? !0));
      }
      if (o.$$.dirty & 1024) {
        e: n(3, (r = a?.cpuMonitorWhitelistDomains ?? []));
      }
      if (o.$$.dirty & 1024) {
        e: n(2, (i = a?.configEnableHighCpuNotifications ?? !0));
      }
      if (o.$$.dirty & 1024) {
        e: n(1, (s = a?.enableHighCpuNotifications ?? !0));
      }
    }),
    [l, s, i, r, t, u, p, d, m, g, a]
  );
}
var cl = class extends H {
    constructor(e) {
      super(), j(this, e, K0, Z0, U, {});
    }
  },
  yc = cl;
N();
function Q0(o) {
  Z(
    o,
    "svelte-jzns0l",
    ".ctrl-tab-name.svelte-jzns0l{flex-shrink:0;display:flex;column-gap:3px}.label.svelte-jzns0l{margin-right:6px}"
  );
}
function Cc(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        size: "small",
        disabled: o[1],
        $$slots: { default: [Y0] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.disabled = t[1]),
          l & 1024 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Y0(o) {
  let e = A("overlay_settings_other_tab__make_default_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function J0(o) {
  let e,
    n,
    t = !o[0] && Cc(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[0]
        ? t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y())
        : t
        ? (t.p(l, r), r & 1 && _(t, 1))
        : ((t = Cc(l)), t.c(), _(t, 1), t.m(e.parentNode, e));
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function X0(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: o[0]
          ? A("overlay_settings_other_tab__your_browser_title")
          : A("overlay_settings_other_tab__default_browser_title"),
        dataTestId: "settings-item-default-browser",
        minHeight: 42,
        $$slots: { default: [J0] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 &&
          (r.name = t[0]
            ? A("overlay_settings_other_tab__your_browser_title")
            : A("overlay_settings_other_tab__default_browser_title")),
          l & 1027 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function eg(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[2] } })),
    e.$on("change", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4 && (r.checked = t[2]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function tg(o) {
  let e;
  return {
    c() {
      e = V("Ctrl");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && $(e);
    },
  };
}
function ng(o) {
  let e;
  return {
    c() {
      e = V("Tab");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && $(e);
    },
  };
}
function og(o) {
  let e, n, t, l, r, i;
  return (
    (t = new cn({
      props: { $$slots: { default: [tg] }, $$scope: { ctx: o } },
    })),
    (r = new cn({
      props: { $$slots: { default: [ng] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = v("div")),
          (n = v("span")),
          (n.textContent = `${A(
            "overlay_settings_other_tab__activate_switcher_title"
          )}`),
          y(t.$$.fragment),
          (l = S()),
          y(r.$$.fragment),
          c(n, "class", "label svelte-jzns0l"),
          c(e, "slot", "name"),
          c(e, "class", "ctrl-tab-name svelte-jzns0l");
      },
      m(s, a) {
        w(s, e, a), f(e, n), C(t, e, null), f(e, l), C(r, e, null), (i = !0);
      },
      p(s, a) {
        let u = {};
        a & 1024 && (u.$$scope = { dirty: a, ctx: s }), t.$set(u);
        let p = {};
        a & 1024 && (p.$$scope = { dirty: a, ctx: s }), r.$set(p);
      },
      i(s) {
        i || (_(t.$$.fragment, s), _(r.$$.fragment, s), (i = !0));
      },
      o(s) {
        h(t.$$.fragment, s), h(r.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && $(e), x(t), x(r);
      },
    }
  );
}
function lg(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        dataTestId: "settings-item-ctrl-tab-order",
        $$slots: { name: [og], default: [eg] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1028 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function rg(o) {
  let e, n, t, l;
  return (
    (e = new Te({
      props: { $$slots: { default: [X0] }, $$scope: { ctx: o } },
    })),
    (t = new Te({
      props: { $$slots: { default: [lg] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, [i]) {
        let s = {};
        i & 1027 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
        let a = {};
        i & 1028 && (a.$$scope = { dirty: i, ctx: r }), t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function ig(o, e, n) {
  let t,
    l,
    r = q.stores.globalSettingsOtherTab;
  ve(o, r, (g) => n(6, (l = g)));
  let i = !1,
    s = null,
    a = null,
    u = !1,
    p = () => {
      q.queries
        .loadDefaultBrowserQuery()
        .then((g) => {
          n(0, (i = g)), n(1, (u = !1));
        })
        .catch(ft);
    },
    d = () => {
      let g = t ? "appearance" : "mru";
      q.actions.sendAnalyticsEvent("settings.ctrl-tab-order-changed", {
        "new-value": nt(!t),
      }),
        q.actions.changeCtrlTabOrder(g);
    },
    m = () => {
      q.actions.makeSidekickDefaultBrowser(),
        n(1, (u = !0)),
        q.actions.sendAnalyticsEvent(
          "settings.make-browser-default-clicked",
          void 0
        ),
        s && clearTimeout(s),
        (s = setTimeout(p, 4e3));
    };
  return (
    ye(() => {
      p(), (a = setInterval(p, 1e4));
    }),
    bn(() => {
      a && clearInterval(a), s && clearTimeout(s);
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 64) {
        e: n(2, (t = (l?.ctrlTabOrder ?? "mru") === "mru"));
      }
    }),
    [i, u, t, r, d, m, l]
  );
}
var ul = class extends H {
    constructor(e) {
      super(), j(this, e, ig, rg, U, {}, Q0);
    }
  },
  xc = ul;
N();
N();
function sg(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[0], dataTestId: "user-agent-switch" } })),
    e.$on("change", o[1]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.checked = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function ag(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A(
          "overlay_settings_privacy_tab__user_agent_description"
        )}`),
        c(e, "slot", "description");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function cg(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_privacy_tab__user_agent_title"),
        $$slots: { description: [ag], default: [sg] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 5 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function ug(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "user-agent-section",
        $$slots: { default: [cg] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 5 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function pg(o, e, n) {
  let { useRandomUserAgent: t } = e,
    l = () => {
      let r = !t;
      q.actions.sendAnalyticsEvent("settings.random-useragent-changed", {
        "new-value": nt(r),
      }),
        q.actions.useRandomUserAgent(r);
    };
  return (
    (o.$$set = (r) => {
      "useRandomUserAgent" in r && n(0, (t = r.useRandomUserAgent));
    }),
    [t, l]
  );
}
var pl = class extends H {
    constructor(e) {
      super(), j(this, e, pg, ug, U, { useRandomUserAgent: 0 });
    }
  },
  Sc = pl;
N();
N();
function fg(o) {
  Z(
    o,
    "svelte-1ts6dw8",
    ".checkbox.svelte-1ts6dw8{--checkbox-background:var(--launchpad-documents-group-checkbox-background);--checkbox-border:var(--launchpad-documents-group-checkbox-border);display:flex;align-items:flex-start;cursor:pointer}.checkbox.disabled.svelte-1ts6dw8{opacity:0.4;cursor:default}.check-area.svelte-1ts6dw8{--size:12px;display:flex;align-items:center;justify-content:center;width:var(--size);min-width:var(--size);height:var(--size);margin-right:6px;box-sizing:border-box;border-radius:3px;background:var(--checkbox-background);border:1px solid var(--checkbox-border)}.label.svelte-1ts6dw8{margin:0;font-size:12px;line-height:1;user-select:none}"
  );
}
function Ac(o) {
  let e, n;
  return (
    (e = new xs({ props: { width: "8", height: "7" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Ec(o) {
  let e, n;
  return {
    c() {
      (e = v("p")), (n = V(o[2])), c(e, "class", "label svelte-1ts6dw8");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 4 && ee(n, t[2]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function dg(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a = o[0] && Ac(o),
    u = o[2] && Ec(o);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = v("div")),
        a && a.c(),
        (l = S()),
        u && u.c(),
        c(t, "class", "check-area svelte-1ts6dw8"),
        c(n, "class", "checkbox svelte-1ts6dw8"),
        ie(n, "checked", o[0]),
        ie(n, "disabled", o[1]),
        c(e, "class", "checkbox svelte-1ts6dw8");
    },
    m(p, d) {
      w(p, e, d),
        f(e, n),
        f(n, t),
        a && a.m(t, null),
        f(n, l),
        u && u.m(n, null),
        (r = !0),
        i || ((s = X(n, "click", o[4])), (i = !0));
    },
    p(p, [d]) {
      p[0]
        ? a
          ? d & 1 && _(a, 1)
          : ((a = Ac(p)), a.c(), _(a, 1), a.m(t, null))
        : a &&
          (Q(),
          h(a, 1, 1, () => {
            a = null;
          }),
          Y()),
        p[2]
          ? u
            ? u.p(p, d)
            : ((u = Ec(p)), u.c(), u.m(n, null))
          : u && (u.d(1), (u = null)),
        (!r || d & 1) && ie(n, "checked", p[0]),
        (!r || d & 2) && ie(n, "disabled", p[1]);
    },
    i(p) {
      r || (_(a), (r = !0));
    },
    o(p) {
      h(a), (r = !1);
    },
    d(p) {
      p && $(e), a && a.d(), u && u.d(), (i = !1), s();
    },
  };
}
function mg(o, e, n) {
  let { checked: t = !1 } = e,
    { disabled: l = !1 } = e,
    { label: r = "" } = e,
    i = oe(),
    s = () => {
      l || (n(0, (t = !t)), i("change"));
    };
  return (
    (o.$$set = (a) => {
      "checked" in a && n(0, (t = a.checked)),
        "disabled" in a && n(1, (l = a.disabled)),
        "label" in a && n(2, (r = a.label));
    }),
    [t, l, r, i, s]
  );
}
var fl = class extends H {
    constructor(e) {
      super(), j(this, e, mg, dg, U, { checked: 0, disabled: 1, label: 2 }, fg);
    }
  },
  Ic = fl;
function _g(o) {
  Z(
    o,
    "svelte-ei819b",
    ".description.svelte-ei819b{margin-top:0}.proxy-site-list.svelte-ei819b{all:unset;display:block;list-style:none;padding:8px}.proxy-site.svelte-ei819b{display:flex;color:var(--settings-popup-domain-color);justify-content:space-between;align-items:center;margin-bottom:2px;min-height:25px;gap:4px}.proxy-site.svelte-ei819b:last-child{margin-bottom:0}.proxy-site-disclaimer.svelte-ei819b{padding:0 8px 8px;color:var(--settings-popup-item-description-color)}"
  );
}
function Tc(o, e, n) {
  let t = o.slice();
  return (t[9] = e[n]), t;
}
function gg(o) {
  let e, n;
  return (
    (e = new Oe({
      props: { disabled: !o[2], dataTestId: "vpn-switch", checked: o[1] },
    })),
    e.$on("change", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4 && (r.disabled = !t[2]), l & 2 && (r.checked = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Mc(o) {
  let e, n;
  return (
    (e = new Ic({
      props: {
        checked: o[0],
        disabled: !o[2] || o[0],
        label: A("overlay_settings_privacy_tab__vpn_laws_label"),
      },
    })),
    e.$on("change", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.checked = t[0]),
          l & 5 && (r.disabled = !t[2] || t[0]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function hg(o) {
  let e,
    n,
    t,
    l,
    r = o[2] && Mc(o);
  return {
    c() {
      (e = v("div")),
        (n = v("p")),
        (n.textContent = `${A(
          "overlay_settings_privacy_tab__vpn_description"
        )}`),
        (t = S()),
        r && r.c(),
        c(n, "class", "description svelte-ei819b"),
        c(e, "slot", "description");
    },
    m(i, s) {
      w(i, e, s), f(e, n), f(e, t), r && r.m(e, null), (l = !0);
    },
    p(i, s) {
      i[2]
        ? r
          ? (r.p(i, s), s & 4 && _(r, 1))
          : ((r = Mc(i)), r.c(), _(r, 1), r.m(e, null))
        : r &&
          (Q(),
          h(r, 1, 1, () => {
            r = null;
          }),
          Y());
    },
    i(i) {
      l || (_(r), (l = !0));
    },
    o(i) {
      h(r), (l = !1);
    },
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function Pc(o) {
  let e,
    n,
    t,
    l,
    r = o[3],
    i = [];
  for (let a = 0; a < r.length; a += 1) i[a] = zc(Tc(o, r, a));
  let s = (a) =>
    h(i[a], 1, 1, () => {
      i[a] = null;
    });
  return {
    c() {
      e = v("ul");
      for (let a = 0; a < i.length; a += 1) i[a].c();
      (n = S()),
        (t = v("div")),
        (t.textContent = `${A(
          "overlay_settings_privacy_tab__vpn_proxy_description"
        )}`),
        c(e, "class", "proxy-site-list svelte-ei819b"),
        c(t, "class", "proxy-site-disclaimer svelte-ei819b");
    },
    m(a, u) {
      w(a, e, u);
      for (let p = 0; p < i.length; p += 1) i[p] && i[p].m(e, null);
      w(a, n, u), w(a, t, u), (l = !0);
    },
    p(a, u) {
      if (u & 11) {
        r = a[3];
        let p;
        for (p = 0; p < r.length; p += 1) {
          let d = Tc(a, r, p);
          i[p]
            ? (i[p].p(d, u), _(i[p], 1))
            : ((i[p] = zc(d)), i[p].c(), _(i[p], 1), i[p].m(e, null));
        }
        for (Q(), p = r.length; p < i.length; p += 1) s(p);
        Y();
      }
    },
    i(a) {
      if (!l) {
        for (let u = 0; u < r.length; u += 1) _(i[u]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1) h(i[u]);
      l = !1;
    },
    d(a) {
      a && $(e), Ae(i, a), a && $(n), a && $(t);
    },
  };
}
function zc(o) {
  let e,
    n,
    t = o[9].name + "",
    l,
    r,
    i,
    s,
    a;
  function u() {
    return o[8](o[9]);
  }
  return (
    (i = new Oe({
      props: { disabled: !o[1] || !o[0], checked: o[9].enabled },
    })),
    i.$on("change", u),
    {
      c() {
        (e = v("li")),
          (n = v("span")),
          (l = V(t)),
          (r = S()),
          y(i.$$.fragment),
          (s = S()),
          c(n, "class", "proxy-site-name"),
          c(e, "class", "proxy-site svelte-ei819b");
      },
      m(p, d) {
        w(p, e, d), f(e, n), f(n, l), f(e, r), C(i, e, null), f(e, s), (a = !0);
      },
      p(p, d) {
        (o = p), (!a || d & 8) && t !== (t = o[9].name + "") && ee(l, t);
        let m = {};
        d & 3 && (m.disabled = !o[1] || !o[0]),
          d & 8 && (m.checked = o[9].enabled),
          i.$set(m);
      },
      i(p) {
        a || (_(i.$$.fragment, p), (a = !0));
      },
      o(p) {
        h(i.$$.fragment, p), (a = !1);
      },
      d(p) {
        p && $(e), x(i);
      },
    }
  );
}
function vg(o) {
  let e, n, t, l;
  e = new Me({
    props: {
      name: A("overlay_settings_privacy_tab__vpn_title"),
      label: o[2] ? "" : A("overlay_settings_privacy_tab__vpn_label"),
      $$slots: { description: [hg], default: [gg] },
      $$scope: { ctx: o },
    },
  });
  let r = o[2] && Pc(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      let a = {};
      s & 4 &&
        (a.label = i[2] ? "" : A("overlay_settings_privacy_tab__vpn_label")),
        s & 4103 && (a.$$scope = { dirty: s, ctx: i }),
        e.$set(a),
        i[2]
          ? r
            ? (r.p(i, s), s & 4 && _(r, 1))
            : ((r = Pc(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function bg(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        disabled: !o[2],
        dataTestId: "vpn-section",
        $$slots: { default: [vg] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 4 && (r.disabled = !t[2]),
          l & 4111 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function kg(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a = q.stores.globalSettingsPrivacyTab;
  ve(o, a, (m) => n(5, (s = m)));
  let u = () => q.actions.confirmLocalLawsForVPN(),
    p = () => q.actions.toggleUseProxy(!r),
    d = (m) => q.actions.toggleSelectedSites(m.id);
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 32) {
        e: n(3, (t = s?.proxySites ?? []));
      }
      if (o.$$.dirty & 32) {
        e: n(2, (l = s?.canUseProxy));
      }
      if (o.$$.dirty & 32) {
        e: n(1, (r = s?.useProxy ?? !1));
      }
      if (o.$$.dirty & 32) {
        e: n(0, (i = s?.isConfirmedLocalLawsForVPN));
      }
    }),
    [i, r, l, t, a, s, u, p, d]
  );
}
var dl = class extends H {
    constructor(e) {
      super(), j(this, e, kg, bg, U, {}, _g);
    }
  },
  Bc = dl;
function Nc(o) {
  let e, n;
  return (
    (e = new Sc({ props: { useRandomUserAgent: o[0] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.useRandomUserAgent = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function wg(o) {
  let e,
    n,
    t,
    l = o[1] && Nc(o);
  return (
    (n = new Bc({})),
    {
      c() {
        l && l.c(), (e = S()), y(n.$$.fragment);
      },
      m(r, i) {
        l && l.m(r, i), w(r, e, i), C(n, r, i), (t = !0);
      },
      p(r, [i]) {
        r[1]
          ? l
            ? (l.p(r, i), i & 2 && _(l, 1))
            : ((l = Nc(r)), l.c(), _(l, 1), l.m(e.parentNode, e))
          : l &&
            (Q(),
            h(l, 1, 1, () => {
              l = null;
            }),
            Y());
      },
      i(r) {
        t || (_(l), _(n.$$.fragment, r), (t = !0));
      },
      o(r) {
        h(l), h(n.$$.fragment, r), (t = !1);
      },
      d(r) {
        l && l.d(r), r && $(e), x(n, r);
      },
    }
  );
}
function $g(o, e, n) {
  let t,
    l,
    r,
    i = q.stores.globalSettingsPrivacyTab;
  return (
    ve(o, i, (s) => n(3, (r = s))),
    (o.$$.update = () => {
      if (o.$$.dirty & 8) {
        e: n(1, (t = r?.canUseRandomUserAgent ?? !1));
      }
      if (o.$$.dirty & 8) {
        e: n(0, (l = r?.useRandomUserAgent ?? !1));
      }
    }),
    [l, t, i, r]
  );
}
var ml = class extends H {
    constructor(e) {
      super(), j(this, e, $g, wg, U, {});
    }
  },
  qc = ml;
N();
N();
function yg(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[0], dataTestId: "discarding-switch" } })),
    e.$on("change", o[9]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.checked = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Dc(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_suspender_tab__suspend_after"),
        $$slots: { default: [Cg] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1026 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Cg(o) {
  let e, n;
  return (
    (e = new vt({
      props: { value: o[1] === null ? void 0 : o[1], options: o[3] },
    })),
    e.$on("select", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.value = t[1] === null ? void 0 : t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function xg(o) {
  let e, n, t, l, r, i;
  (e = new Me({
    props: {
      name: A("overlay_settings_suspender_tab__title"),
      dataTestId: "setting-item-tabs-suspender",
      $$slots: { default: [yg] },
      $$scope: { ctx: o },
    },
  })),
    (t = new Pn({ props: { list: o[2] } }));
  let s = o[0] && Dc(o);
  return {
    c() {
      y(e.$$.fragment),
        (n = S()),
        y(t.$$.fragment),
        (l = S()),
        s && s.c(),
        (r = fe());
    },
    m(a, u) {
      C(e, a, u),
        w(a, n, u),
        C(t, a, u),
        w(a, l, u),
        s && s.m(a, u),
        w(a, r, u),
        (i = !0);
    },
    p(a, u) {
      let p = {};
      u & 1025 && (p.$$scope = { dirty: u, ctx: a }), e.$set(p);
      let d = {};
      u & 4 && (d.list = a[2]),
        t.$set(d),
        a[0]
          ? s
            ? (s.p(a, u), u & 1 && _(s, 1))
            : ((s = Dc(a)), s.c(), _(s, 1), s.m(r.parentNode, r))
          : s &&
            (Q(),
            h(s, 1, 1, () => {
              s = null;
            }),
            Y());
    },
    i(a) {
      i || (_(e.$$.fragment, a), _(t.$$.fragment, a), _(s), (i = !0));
    },
    o(a) {
      h(e.$$.fragment, a), h(t.$$.fragment, a), h(s), (i = !1);
    },
    d(a) {
      x(e, a), a && $(n), x(t, a), a && $(l), s && s.d(a), a && $(r);
    },
  };
}
function Sg(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "suspend-section",
        $$slots: { default: [xg] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1031 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Ag(o, e, n) {
  let t,
    l,
    r,
    { useTabsDiscarding: i } = e,
    { savedTabsMemory: s } = e,
    { discardedTabsCount: a } = e,
    { minutesBeforeDiscard: u } = e,
    p = Object.values(no).map((g) => ({
      label: `${g} ${A("overlay_settings_suspender_tab__minutes")}`,
      value: g,
    })),
    d = (g) => {
      q.actions.changeMinutesBeforeDiscard(g.detail.value),
        q.actions.sendAnalyticsEvent("settings.tab-suspender-time-change", {
          "new-value": u,
          "new-value-as-time": Di(Number(u)),
        });
    },
    m = () => {
      let g = !i;
      q.actions.sendAnalyticsEvent("settings.tab-suspender-changed", {
        "new-value": nt(g),
      }),
        q.actions.toggleTabsDiscarding(g);
    };
  return (
    (o.$$set = (g) => {
      "useTabsDiscarding" in g && n(0, (i = g.useTabsDiscarding)),
        "savedTabsMemory" in g && n(5, (s = g.savedTabsMemory)),
        "discardedTabsCount" in g && n(6, (a = g.discardedTabsCount)),
        "minutesBeforeDiscard" in g && n(1, (u = g.minutesBeforeDiscard));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 33) {
        e: n(
          8,
          (t =
            i && s
              ? {
                  value: Xi(s, {
                    sizeThreshold: 1e3,
                    removeZero: !0,
                    uppercaseSize: !0,
                    excludeRounding: ["mb"],
                  }),
                  color: "#59b64b",
                }
              : { value: "0 MB" })
        );
      }
      if (o.$$.dirty & 65) {
        e: n(7, (l = i && a ? { value: a, color: "#4da1f4" } : { value: 0 }));
      }
      if (o.$$.dirty & 384) {
        e: n(
          2,
          (r = [
            {
              description: A("overlay_settings_suspender_tab__memory_saved"),
              ...t,
            },
            {
              description: A("overlay_settings_suspender_tab__suspended"),
              ...l,
            },
          ])
        );
      }
    }),
    [i, u, r, p, d, s, a, l, t, m]
  );
}
var _l = class extends H {
    constructor(e) {
      super(),
        j(this, e, Ag, Sg, U, {
          useTabsDiscarding: 0,
          savedTabsMemory: 5,
          discardedTabsCount: 6,
          minutesBeforeDiscard: 1,
        });
    }
  },
  Lc = _l;
function Uc(o) {
  let e, n;
  return (
    (e = new Jt({
      props: {
        title: A("overlay_settings_suspender_tab__domain_list_title"),
        domains: o[2],
      },
    })),
    e.$on("addDomain", o[6]),
    e.$on("removeDomain", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4 && (r.domains = t[2]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Eg(o) {
  let e, n, t, l;
  e = new Lc({
    props: {
      useTabsDiscarding: o[4],
      savedTabsMemory: o[1],
      discardedTabsCount: o[0],
      minutesBeforeDiscard: o[3],
    },
  });
  let r = o[2] && Uc(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, [s]) {
      let a = {};
      s & 16 && (a.useTabsDiscarding = i[4]),
        s & 2 && (a.savedTabsMemory = i[1]),
        s & 1 && (a.discardedTabsCount = i[0]),
        s & 8 && (a.minutesBeforeDiscard = i[3]),
        e.$set(a),
        i[2]
          ? r
            ? (r.p(i, s), s & 4 && _(r, 1))
            : ((r = Uc(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function Ig(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u = q.stores.globalSettingsSuspenderTab;
  ve(o, u, (m) => n(8, (a = m)));
  let p = ({ detail: m }) => {
      q.actions.sendAnalyticsEvent(
        "settings.tab-suspender-whitelist-item-added",
        void 0
      ),
        q.actions.addNonDiscardableDomain(m);
    },
    d = ({ detail: m }) => {
      q.actions.sendAnalyticsEvent(
        "settings.tab-suspender-whitelist-item-removed",
        void 0
      ),
        q.actions.removeNonDiscardableDomain(m);
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 256) {
        e: n(4, (t = a?.useTabsDiscarding ?? !1));
      }
      if (o.$$.dirty & 256) {
        e: n(3, (l = a?.minutesBeforeDiscard ?? "10"));
      }
      if (o.$$.dirty & 256) {
        e: n(2, (r = a?.noneDiscardableDomains ?? []));
      }
      if (o.$$.dirty & 256) {
        e: n(1, (i = a?.savedTabsMemory ?? 0));
      }
      if (o.$$.dirty & 256) {
        e: n(0, (s = a?.discardedTabsCount ?? 0));
      }
    }),
    [s, i, r, l, t, u, p, d, a]
  );
}
var gl = class extends H {
    constructor(e) {
      super(), j(this, e, Ig, Eg, U, {});
    }
  },
  jc = gl;
N();
function Tg(o) {
  Z(
    o,
    "svelte-g9xbab",
    ".tabs-navigation.svelte-g9xbab{display:flex;flex-direction:column;min-width:165px;padding:10px;flex-shrink:0;overflow:auto}.tab-buttons.svelte-g9xbab{display:flex;flex-direction:column;flex:1 0 auto}.tab-button.svelte-g9xbab{all:unset;cursor:pointer;font-size:14px;font-weight:500;padding:8px;min-height:35px;border-radius:4px;color:var(--settings-popup-nav-button-color);background-color:var(--settings-popup-nav-button-background);margin-bottom:2px;box-sizing:border-box}.tab-button.svelte-g9xbab:hover{color:var(--settings-popup-nav-button-color-hover);background-color:var(--settings-popup-nav-button-background-hover)}.tab-button.svelte-g9xbab:active{color:var(--settings-popup-nav-button-color-active);background-color:var(--settings-popup-nav-button-background-active)}.tab-button.active.svelte-g9xbab{color:var(--settings-popup-nav-button-color-selected);background-color:var(--settings-popup-nav-button-background-selected)}.tab-button.active.svelte-g9xbab:hover{background-color:var(--settings-popup-nav-button-background-hover)}.import-link.svelte-g9xbab,.shortcuts-link.svelte-g9xbab,.help-link.svelte-g9xbab{all:unset;display:block;font-size:12px;color:#8c8c8c;cursor:pointer;padding:4px 8px}.import-link.svelte-g9xbab:hover,.shortcuts-link.svelte-g9xbab:hover,.help-link.svelte-g9xbab:hover{color:var(--accent-color)}"
  );
}
function Hc(o, e, n) {
  let t = o.slice();
  return (t[9] = e[n]), t;
}
function Vc(o) {
  let e,
    n = o[9].text + "",
    t,
    l,
    r,
    i,
    s;
  function a() {
    return o[6](o[9]);
  }
  return {
    c() {
      (e = v("button")),
        (t = V(n)),
        (l = S()),
        c(e, "class", "tab-button svelte-g9xbab"),
        c(e, "data-testid", (r = "global-settings.tab-button." + o[9].tab)),
        ie(e, "active", o[9].tab === o[1]);
    },
    m(u, p) {
      w(u, e, p), f(e, t), f(e, l), i || ((s = X(e, "click", a)), (i = !0));
    },
    p(u, p) {
      (o = u),
        p & 1 && n !== (n = o[9].text + "") && ee(t, n),
        p & 1 &&
          r !== (r = "global-settings.tab-button." + o[9].tab) &&
          c(e, "data-testid", r),
        p & 3 && ie(e, "active", o[9].tab === o[1]);
    },
    d(u) {
      u && $(e), (i = !1), s();
    },
  };
}
function Mg(o) {
  let e,
    n,
    t,
    l,
    r = A("overlay_settings__tabs_navigation_import") + "",
    i,
    s,
    a,
    u,
    p,
    d,
    m = o[0],
    g = [];
  for (let b = 0; b < m.length; b += 1) g[b] = Vc(Hc(o, m, b));
  return {
    c() {
      (e = v("div")), (n = v("div"));
      for (let b = 0; b < g.length; b += 1) g[b].c();
      (t = S()),
        (l = v("button")),
        (i = S()),
        (s = v("button")),
        (s.textContent = `${A(
          "overlay_settings__tabs_navigation_configure_shortcuts"
        )}`),
        (a = S()),
        (u = v("a")),
        (u.textContent = `${A(
          "overlay_settings__tabs_navigation_learning_center"
        )}`),
        c(n, "class", "tab-buttons svelte-g9xbab"),
        c(l, "class", "import-link svelte-g9xbab"),
        c(l, "data-testid", "global-settings.footer.import-link"),
        c(s, "class", "shortcuts-link svelte-g9xbab"),
        c(s, "data-testid", "global-settings.footer.shortcuts-link"),
        c(u, "class", "help-link svelte-g9xbab"),
        c(u, "href", "https://help.meetsidekick.com/en/"),
        c(u, "target", "_blank"),
        c(u, "rel", "noreferrer"),
        c(u, "data-testid", "global-settings.footer.help-link"),
        c(e, "class", "tabs-navigation svelte-g9xbab"),
        c(e, "data-testid", "tabs-navigation");
    },
    m(b, k) {
      w(b, e, k), f(e, n);
      for (let E = 0; E < g.length; E += 1) g[E] && g[E].m(n, null);
      f(e, t),
        f(e, l),
        (l.innerHTML = r),
        f(e, i),
        f(e, s),
        f(e, a),
        f(e, u),
        p ||
          ((d = [
            X(l, "click", o[5]),
            X(s, "click", o[3]),
            X(u, "click", o[4]),
          ]),
          (p = !0));
    },
    p(b, [k]) {
      if (k & 7) {
        m = b[0];
        let E;
        for (E = 0; E < m.length; E += 1) {
          let I = Hc(b, m, E);
          g[E] ? g[E].p(I, k) : ((g[E] = Vc(I)), g[E].c(), g[E].m(n, null));
        }
        for (; E < g.length; E += 1) g[E].d(1);
        g.length = m.length;
      }
    },
    i: L,
    o: L,
    d(b) {
      b && $(e), Ae(g, b), (p = !1), Se(d);
    },
  };
}
function Pg(o, e, n) {
  let t = oe(),
    { tabs: l } = e,
    { selectedTab: r } = e,
    i = () => {
      t("close");
    },
    s = (m) => {
      q.actions.sendAnalyticsEvent("settings.section-switched", {
        "new-value": m.tab,
      }),
        t("tabSelected", m);
    },
    a = () => {
      q.actions.sendAnalyticsEvent(
        "settings.configure-shortcuts-link-clicked",
        void 0
      ),
        q.actions.openChromeShortcuts(),
        i();
    },
    u = () => {
      q.actions.sendAnalyticsEvent("settings.help-link-clicked", void 0), i();
    },
    p = () => {
      q.actions.sendAnalyticsEvent("settings.import-link-clicked", void 0),
        q.actions.openChromeImport(),
        i();
    },
    d = (m) => s(m);
  return (
    (o.$$set = (m) => {
      "tabs" in m && n(0, (l = m.tabs)),
        "selectedTab" in m && n(1, (r = m.selectedTab));
    }),
    [l, r, s, a, u, p, d]
  );
}
var hl = class extends H {
    constructor(e) {
      super(), j(this, e, Pg, Mg, U, { tabs: 0, selectedTab: 1 }, Tg);
    }
  },
  Oc = hl;
N();
N();
function zg(o) {
  Z(
    o,
    "svelte-1fu3w0a",
    ".form.svelte-1fu3w0a{margin:8px;padding:14px 15px 17px;border-radius:6px;background:var(--settings-popup-distraction-form-bg);border:1px solid rgb(0 0 0 / 0.08)}.line.svelte-1fu3w0a{margin-bottom:10px}.label.svelte-1fu3w0a{display:flex;align-items:center;font-style:normal;font-weight:400;font-size:12px;color:var(--settings-popup-distraction-form-label-color)}.title.svelte-1fu3w0a{font-style:normal;font-weight:400;font-size:10px;text-transform:uppercase;color:var(--settings-popup-distraction-list-banner-color);margin-bottom:5px;grid-column:1 / 3}.input.svelte-1fu3w0a{all:unset;width:100%;box-sizing:border-box;padding:7px 10px;height:30px;color:var(--settings-popup-distraction-form-input-color);background:var(--settings-popup-distraction-form-input-bg);border-radius:4px;cursor:text}.input.svelte-1fu3w0a::placeholder{font-style:normal;font-weight:400;font-size:12px;line-height:1;color:#999}.buttons.svelte-1fu3w0a{margin-top:16px}.add.svelte-1fu3w0a{display:flex;align-items:center;justify-content:flex-start;width:100%;padding:8px;color:var(--settings-popup-distraction-add-color)}.add.svelte-1fu3w0a .add-icon{--bg-color:rgb(191 191 191 / 0.39);width:21px;height:21px;padding:5px;background:rgb(0 0 0 / 0.08);border-radius:50%;background-color:var(--bg-color)}.add.svelte-1fu3w0a:hover .add-icon{--bg-color:rgb(191 191 191 / 0.45)}.add.svelte-1fu3w0a:active .add-icon{--bg-color:rgb(191 191 191 / 0.49)}.add.svelte-1fu3w0a:focus:not(:active) .add-icon{box-shadow:0 0 0 0.125em rgb(0 0 0 / 0.24)}.add-label.svelte-1fu3w0a{display:inline-block;margin-left:10px}"
  );
}
function Bg(o) {
  let e, n, t, l, r, i, s;
  return (
    (n = new Et({
      props: { width: "11", height: "11", className: "add-icon" },
    })),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("span")),
          (l.textContent = `${A("settings_distraction_blocker__new")}`),
          c(l, "class", "add-label svelte-1fu3w0a"),
          c(e, "class", "add svelte-1fu3w0a");
      },
      m(a, u) {
        w(a, e, u),
          C(n, e, null),
          f(e, t),
          f(e, l),
          (r = !0),
          i || ((s = X(e, "click", o[3])), (i = !0));
      },
      p: L,
      i(a) {
        r || (_(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        h(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && $(e), x(n), (i = !1), s();
      },
    }
  );
}
function Ng(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P, M, B;
  return (
    (E = new pe({
      props: {
        type: "submit",
        mod: "light",
        size: "small",
        $$slots: { default: [qg] },
        $$scope: { ctx: o },
      },
    })),
    (T = new pe({
      props: {
        mod: "grey",
        size: "small",
        $$slots: { default: [Dg] },
        $$scope: { ctx: o },
      },
    })),
    T.$on("click", o[4]),
    {
      c() {
        (e = v("form")),
          (n = v("div")),
          (t = v("div")),
          (t.textContent = `${A("settings_distraction_blocker__form_go")}`),
          (l = S()),
          (r = v("input")),
          (s = S()),
          (a = v("div")),
          (u = v("div")),
          (u.textContent = `${A("settings_distraction_blocker__form_to")}`),
          (p = S()),
          (d = v("label")),
          (m = v("input")),
          (b = S()),
          (k = v("div")),
          y(E.$$.fragment),
          (I = S()),
          y(T.$$.fragment),
          c(t, "class", "title svelte-1fu3w0a"),
          c(r, "class", "input svelte-1fu3w0a"),
          c(r, "type", "text"),
          (r.required = !0),
          (r.autofocus = !0),
          c(
            r,
            "placeholder",
            (i = A("settings_distraction_blocker__form_go_placeholder"))
          ),
          c(n, "class", "line svelte-1fu3w0a"),
          c(u, "class", "title svelte-1fu3w0a"),
          c(m, "class", "input svelte-1fu3w0a"),
          c(m, "type", "text"),
          (m.required = !0),
          c(
            m,
            "placeholder",
            (g = A("settings_distraction_blocker__form_to_placeholder"))
          ),
          c(d, "class", "label svelte-1fu3w0a"),
          c(a, "class", "line svelte-1fu3w0a"),
          c(k, "class", "buttons svelte-1fu3w0a"),
          c(e, "class", "form svelte-1fu3w0a");
      },
      m(O, z) {
        w(O, e, z),
          f(e, n),
          f(n, t),
          f(n, l),
          f(n, r),
          Ne(r, o[1]),
          f(e, s),
          f(e, a),
          f(a, u),
          f(a, p),
          f(a, d),
          f(d, m),
          Ne(m, o[2]),
          f(e, b),
          f(e, k),
          C(E, k, null),
          f(k, I),
          C(T, k, null),
          (P = !0),
          r.focus(),
          M ||
            ((B = [
              X(r, "input", o[6]),
              X(m, "input", o[7]),
              X(e, "submit", o[5]),
            ]),
            (M = !0));
      },
      p(O, z) {
        z & 2 && r.value !== O[1] && Ne(r, O[1]),
          z & 4 && m.value !== O[2] && Ne(m, O[2]);
        let G = {};
        z & 512 && (G.$$scope = { dirty: z, ctx: O }), E.$set(G);
        let W = {};
        z & 512 && (W.$$scope = { dirty: z, ctx: O }), T.$set(W);
      },
      i(O) {
        P || (_(E.$$.fragment, O), _(T.$$.fragment, O), (P = !0));
      },
      o(O) {
        h(E.$$.fragment, O), h(T.$$.fragment, O), (P = !1);
      },
      d(O) {
        O && $(e), x(E), x(T), (M = !1), Se(B);
      },
    }
  );
}
function qg(o) {
  let e = A("settings_distraction_blocker__save") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Dg(o) {
  let e = A("settings_distraction_blocker__cancel") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Lg(o) {
  let e,
    n,
    t,
    l,
    r = [Ng, Bg],
    i = [];
  function s(a, u) {
    return a[0] ? 0 : 1;
  }
  return (
    (e = s(o, -1)),
    (n = i[e] = r[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(a, u) {
        i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, [u]) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? i[e].p(a, u)
            : (Q(),
              h(i[p], 1, 1, () => {
                i[p] = null;
              }),
              Y(),
              (n = i[e]),
              n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
              _(n, 1),
              n.m(t.parentNode, t));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        i[e].d(a), a && $(t);
      },
    }
  );
}
function Ug(o, e, n) {
  let t = !1,
    l,
    r,
    i = oe(),
    s = () => {
      n(0, (t = !0));
    },
    a = () => n(0, (t = !1)),
    u = (m) => {
      m.preventDefault(),
        i("add", { id: an(), from: l, to: r }),
        n(0, (t = !1)),
        n(1, (l = "")),
        n(2, (r = ""));
    };
  function p() {
    (l = this.value), n(1, l);
  }
  function d() {
    (r = this.value), n(2, r);
  }
  return [t, l, r, s, a, u, p, d];
}
var vl = class extends H {
    constructor(e) {
      super(), j(this, e, Ug, Lg, U, {}, zg);
    }
  },
  Rc = vl;
N();
function jg(o) {
  Z(
    o,
    "svelte-1eoiakm",
    ".wrapper.svelte-1eoiakm.svelte-1eoiakm{padding:8px}.header.svelte-1eoiakm.svelte-1eoiakm{font-weight:400;font-size:12px;line-height:14px;color:var(--settings-popup-distraction-schedule-header-color)}.weekdays.svelte-1eoiakm.svelte-1eoiakm{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;grid-column-gap:3px;margin:9px 0;padding:0}.day.svelte-1eoiakm.svelte-1eoiakm{display:flex;justify-content:center;align-items:center;height:30px;margin:0;padding:0;background:var(--settings-popup-distraction-schedule-weekday-bg);border-radius:4px;cursor:pointer;font-weight:590;font-size:12px;text-align:center;color:var(--settings-popup-distraction-schedule-weekday-color)}.day.on.svelte-1eoiakm.svelte-1eoiakm{color:var(--settings-popup-distraction-schedule-weekday-selected-color);background:var(--settings-popup-distraction-schedule-weekday-selected-bg)}.settings.svelte-1eoiakm.svelte-1eoiakm{display:grid;grid-auto-flow:column;grid-column-gap:5px}.distraction-blocker-settings-dropdown-list{max-height:120px}.cell.svelte-1eoiakm.svelte-1eoiakm{display:grid;grid-auto-flow:row;grid-row-gap:2px;grid-template-rows:max-content 1fr}.cell-label.svelte-1eoiakm.svelte-1eoiakm{font-weight:400;font-size:10px;line-height:16px;text-transform:uppercase;color:var(--settings-popup-distraction-schedule-time-label-color)}.checkbox.svelte-1eoiakm.svelte-1eoiakm{margin-left:5px}.checkbox.svelte-1eoiakm label.svelte-1eoiakm{color:var(--settings-popup-distraction-schedule-header-color);display:flex;align-items:center}.checkbox.svelte-1eoiakm input.svelte-1eoiakm{margin-right:7px}"
  );
}
function Wc(o, e, n) {
  let t = o.slice();
  return (t[14] = e[n].id), (t[15] = e[n].label), t;
}
function Gc(o) {
  let e,
    n = o[15] + "",
    t,
    l,
    r,
    i;
  function s() {
    return o[10](o[14]);
  }
  return {
    c() {
      (e = v("button")),
        (t = V(n)),
        (l = S()),
        c(e, "class", "day svelte-1eoiakm"),
        ie(e, "on", o[1][o[14]]);
    },
    m(a, u) {
      w(a, e, u), f(e, t), f(e, l), r || ((i = X(e, "click", s)), (r = !0));
    },
    p(a, u) {
      (o = a), u & 34 && ie(e, "on", o[1][o[14]]);
    },
    d(a) {
      a && $(e), (r = !1), i();
    },
  };
}
function Hg(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z = A("settings_distraction_blocker__allDay") + "",
    G,
    W,
    D,
    R,
    K = o[5],
    ne = [];
  for (let te = 0; te < K.length; te += 1) ne[te] = Gc(Wc(o, K, te));
  return (
    (p = new vt({
      props: {
        value: o[4](o[0].from),
        options: o[3],
        disabled: o[0].allDay,
        listClassName: "distraction-blocker-settings-dropdown-list",
      },
    })),
    p.$on("select", o[7]),
    (k = new vt({
      props: {
        value: o[4](o[0].to),
        options: o[2],
        disabled: o[0].allDay,
        listClassName: "distraction-blocker-settings-dropdown-list",
      },
    })),
    k.$on("select", o[8]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (n.textContent = `${A("settings_distraction_blocker__schedule")}`),
          (t = S()),
          (l = v("div"));
        for (let te = 0; te < ne.length; te += 1) ne[te].c();
        (r = S()),
          (i = v("div")),
          (s = v("div")),
          (a = v("div")),
          (a.textContent = `${A("settings_distraction_blocker__from")}`),
          (u = S()),
          y(p.$$.fragment),
          (d = S()),
          (m = v("div")),
          (g = v("div")),
          (g.textContent = `${A("settings_distraction_blocker__until")}`),
          (b = S()),
          y(k.$$.fragment),
          (E = S()),
          (I = v("div")),
          (T = v("div")),
          (T.textContent = `${A("settings_distraction_blocker__or")}`),
          (P = S()),
          (M = v("label")),
          (B = v("input")),
          (O = S()),
          (G = V(z)),
          c(n, "class", "header svelte-1eoiakm"),
          c(l, "class", "weekdays svelte-1eoiakm"),
          c(a, "class", "cell-label svelte-1eoiakm"),
          c(s, "class", "cell svelte-1eoiakm"),
          c(g, "class", "cell-label svelte-1eoiakm"),
          c(m, "class", "cell svelte-1eoiakm"),
          c(T, "class", "cell-label svelte-1eoiakm"),
          c(B, "type", "checkbox"),
          c(B, "class", "svelte-1eoiakm"),
          c(M, "class", "svelte-1eoiakm"),
          c(I, "class", "cell checkbox svelte-1eoiakm"),
          c(i, "class", "settings svelte-1eoiakm"),
          c(e, "class", "wrapper svelte-1eoiakm");
      },
      m(te, le) {
        w(te, e, le), f(e, n), f(e, t), f(e, l);
        for (let re = 0; re < ne.length; re += 1) ne[re] && ne[re].m(l, null);
        f(e, r),
          f(e, i),
          f(i, s),
          f(s, a),
          f(s, u),
          C(p, s, null),
          f(i, d),
          f(i, m),
          f(m, g),
          f(m, b),
          C(k, m, null),
          f(i, E),
          f(i, I),
          f(I, T),
          f(I, P),
          f(I, M),
          f(M, B),
          (B.checked = o[0].allDay),
          f(M, O),
          f(M, G),
          (W = !0),
          D || ((R = [X(B, "change", o[11]), X(B, "change", o[9])]), (D = !0));
      },
      p(te, [le]) {
        if (le & 98) {
          K = te[5];
          let ae;
          for (ae = 0; ae < K.length; ae += 1) {
            let me = Wc(te, K, ae);
            ne[ae]
              ? ne[ae].p(me, le)
              : ((ne[ae] = Gc(me)), ne[ae].c(), ne[ae].m(l, null));
          }
          for (; ae < ne.length; ae += 1) ne[ae].d(1);
          ne.length = K.length;
        }
        let re = {};
        le & 1 && (re.value = te[4](te[0].from)),
          le & 8 && (re.options = te[3]),
          le & 1 && (re.disabled = te[0].allDay),
          p.$set(re);
        let se = {};
        le & 1 && (se.value = te[4](te[0].to)),
          le & 4 && (se.options = te[2]),
          le & 1 && (se.disabled = te[0].allDay),
          k.$set(se),
          le & 1 && (B.checked = te[0].allDay);
      },
      i(te) {
        W || (_(p.$$.fragment, te), _(k.$$.fragment, te), (W = !0));
      },
      o(te) {
        h(p.$$.fragment, te), h(k.$$.fragment, te), (W = !1);
      },
      d(te) {
        te && $(e), Ae(ne, te), x(p), x(k), (D = !1), Se(R);
      },
    }
  );
}
function Vg(o, e, n) {
  let t,
    l,
    r,
    { schedule: i } = e,
    s = oe(),
    a = (I) => {
      let T = (P) => P.toString().padStart(2, "0");
      return `${T(I.hours)}:${T(I.minutes)}`;
    },
    u = (() => {
      let I = [];
      for (let M = 0; M < 24; M += 1)
        for (let B = 0; B < 60; B += 15) {
          let O = { hours: M, minutes: B },
            z = a(O);
          I.push({ label: z, value: z, time: O });
        }
      let T = { hours: 24, minutes: 0 },
        P = a(T);
      return I.push({ label: P, value: P, time: T }), I;
    })(),
    p = [
      { id: 1, label: A("settings_distraction_blocker__monday_short") },
      { id: 2, label: A("settings_distraction_blocker__tuesday_short") },
      { id: 3, label: A("settings_distraction_blocker__wednesday_short") },
      { id: 4, label: A("settings_distraction_blocker__thursday_short") },
      { id: 5, label: A("settings_distraction_blocker__friday_short") },
      { id: 6, label: A("settings_distraction_blocker__saturday_short") },
      { id: 0, label: A("settings_distraction_blocker__sunday_short") },
    ],
    d = (I) => {
      let T = !r[I];
      s("change", {
        reason: "weekday",
        schedule: {
          ...i,
          weekdays: T ? [...i.weekdays, I] : i.weekdays.filter((P) => P !== I),
        },
      });
    },
    m = (I) => {
      I.detail.time &&
        s("change", {
          reason: "time",
          schedule: { ...i, from: I.detail.time },
        });
    },
    g = (I) => {
      I.detail.time &&
        s("change", { reason: "time", schedule: { ...i, to: I.detail.time } });
    },
    b = (I) => {
      pt(
        I.target instanceof HTMLInputElement,
        "Target must be HTML input to handle change all day input"
      ),
        s("change", {
          reason: "allDay",
          schedule: { ...i, allDay: I.target.checked },
        });
    },
    k = (I) => d(I);
  function E() {
    (i.allDay = this.checked), n(0, i);
  }
  return (
    (o.$$set = (I) => {
      "schedule" in I && n(0, (i = I.schedule));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(
          3,
          (t = u.slice(
            0,
            u.findIndex((I) => Xn(I.time, i.to))
          ))
        );
      }
      if (o.$$.dirty & 1) {
        e: n(2, (l = u.slice(u.findIndex((I) => Xn(I.time, i.from)) + 1)));
      }
      if (o.$$.dirty & 1) {
        e: n(1, (r = Object.fromEntries(i.weekdays.map((I) => [I, !0]))));
      }
    }),
    [i, r, l, t, a, p, d, m, g, b, k, E]
  );
}
var bl = class extends H {
    constructor(e) {
      super(), j(this, e, Vg, Hg, U, { schedule: 0 }, jg);
    }
  },
  Fc = bl;
N();
function Og(o) {
  Z(
    o,
    "svelte-1xsv32u",
    ".wrapper.svelte-1xsv32u{position:relative;padding:20px;background-color:var(--settings-popup-distraction-banner-bg);background-image:url('/shared/assets/images/settings_distraction_blocker_banner.svg');background-repeat:no-repeat;background-position:right;background-size:contain;border:1px solid rgb(0 0 0 / 0.08);border-radius:6px}.close.svelte-1xsv32u{position:absolute;top:0;right:0;padding:8px;color:var(--settings-popup-distraction-banner-close-button)}.message.svelte-1xsv32u{max-width:50%;font-style:normal;font-weight:700;font-size:14px;line-height:17px;letter-spacing:-0.015em;color:var(--settings-popup-distraction-banner-color)}"
  );
}
function Rg(o) {
  let e, n, t, l, r, i, s, a;
  return (
    (t = new dt({ props: { width: "8", height: "8" } })),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("div")),
          (r.textContent = `${A("settings_distraction_blocker__banner")}`),
          c(n, "class", "close svelte-1xsv32u"),
          c(r, "class", "message svelte-1xsv32u"),
          c(e, "class", "wrapper svelte-1xsv32u");
      },
      m(u, p) {
        w(u, e, p),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          (i = !0),
          s || ((a = X(n, "click", o[1])), (s = !0));
      },
      p: L,
      i(u) {
        i || (_(t.$$.fragment, u), (i = !0));
      },
      o(u) {
        h(t.$$.fragment, u), (i = !1);
      },
      d(u) {
        u && $(e), x(t), (s = !1), a();
      },
    }
  );
}
function Wg(o) {
  let e = oe();
  return [e, () => e("close")];
}
var kl = class extends H {
    constructor(e) {
      super(), j(this, e, Wg, Rg, U, {}, Og);
    }
  },
  Zc = kl;
N();
N();
function Gg(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M14.3536 8.35355C14.5488 8.15829 14.5488 7.84171 14.3536 7.64645L11.1716 4.46447C10.9763 4.2692 10.6597 4.2692 10.4645 4.46447C10.2692 4.65973 10.2692 4.97631 10.4645 5.17157L13.2929 8L10.4645 10.8284C10.2692 11.0237 10.2692 11.3403 10.4645 11.5355C10.6597 11.7308 10.9763 11.7308 11.1716 11.5355L14.3536 8.35355ZM2 8.5L14 8.5L14 7.5L2 7.5L2 8.5Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 16"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function Fg(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var wl = class extends H {
    constructor(e) {
      super(), j(this, e, Fg, Gg, U, { width: 0, height: 1, className: 2 });
    }
  },
  Kc = wl;
function Zg(o) {
  Z(
    o,
    "svelte-ldfcaf",
    ".banner.svelte-ldfcaf{width:150px;margin:32px auto;font-style:normal;font-weight:400;font-size:12px;line-height:14px;text-align:center;color:var(--settings-popup-distraction-list-banner-color)}.wrapper.svelte-ldfcaf{padding:8px}.header.svelte-ldfcaf{font-weight:400;font-size:10px;line-height:1.6;text-transform:uppercase;color:var(--settings-popup-distraction-list-header-color);margin-bottom:10px}.list.svelte-ldfcaf{margin:0;padding:0;display:grid;grid-auto-rows:max-content;grid-gap:10px}.item.svelte-ldfcaf{display:flex;align-items:center;width:100%}.item-input.svelte-ldfcaf{width:135px;height:22px;display:inline-block;padding:3px 7px;background:var(--settings-popup-distraction-list-input-bg);border-radius:4px;font-weight:400;font-size:12px;color:var(--settings-popup-distraction-list-input-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-arrow.svelte-ldfcaf{margin:0 5px}.item-delete.svelte-ldfcaf{margin-left:25px}"
  );
}
function Qc(o, e, n) {
  let t = o.slice();
  return (t[4] = e[n]), t;
}
function Kg(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[0],
    s = [];
  for (let u = 0; u < i.length; u += 1) s[u] = Yc(Qc(o, i, u));
  let a = (u) =>
    h(s[u], 1, 1, () => {
      s[u] = null;
    });
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (n.textContent = `${A("settings_distraction_blocker__rules")}`),
        (t = S()),
        (l = v("ul"));
      for (let u = 0; u < s.length; u += 1) s[u].c();
      c(n, "class", "header svelte-ldfcaf"),
        c(l, "class", "list svelte-ldfcaf"),
        c(e, "class", "wrapper svelte-ldfcaf");
    },
    m(u, p) {
      w(u, e, p), f(e, n), f(e, t), f(e, l);
      for (let d = 0; d < s.length; d += 1) s[d] && s[d].m(l, null);
      r = !0;
    },
    p(u, p) {
      if (p & 7) {
        i = u[0];
        let d;
        for (d = 0; d < i.length; d += 1) {
          let m = Qc(u, i, d);
          s[d]
            ? (s[d].p(m, p), _(s[d], 1))
            : ((s[d] = Yc(m)), s[d].c(), _(s[d], 1), s[d].m(l, null));
        }
        for (Q(), d = i.length; d < s.length; d += 1) a(d);
        Y();
      }
    },
    i(u) {
      if (!r) {
        for (let p = 0; p < i.length; p += 1) _(s[p]);
        r = !0;
      }
    },
    o(u) {
      s = s.filter(Boolean);
      for (let p = 0; p < s.length; p += 1) h(s[p]);
      r = !1;
    },
    d(u) {
      u && $(e), Ae(s, u);
    },
  };
}
function Qg(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A("settings_distraction_blocker__list_empty")}`),
        c(e, "class", "banner svelte-ldfcaf");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    i: L,
    o: L,
    d(n) {
      n && $(e);
    },
  };
}
function Yc(o) {
  let e,
    n,
    t = o[2](o[4].from) + "",
    l,
    r,
    i,
    s,
    a,
    u,
    p = o[2](o[4].to) + "",
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T;
  (s = new Kc({ props: { width: "16", height: "16" } })),
    (b = new dt({ props: { width: "10", height: "10" } }));
  function P() {
    return o[3](o[4]);
  }
  return {
    c() {
      (e = v("li")),
        (n = v("div")),
        (l = V(t)),
        (r = S()),
        (i = v("span")),
        y(s.$$.fragment),
        (a = S()),
        (u = v("div")),
        (d = V(p)),
        (m = S()),
        (g = v("button")),
        y(b.$$.fragment),
        (k = S()),
        c(n, "class", "item-input svelte-ldfcaf"),
        c(i, "class", "item-arrow svelte-ldfcaf"),
        c(u, "class", "item-input svelte-ldfcaf"),
        c(g, "class", "item-delete svelte-ldfcaf"),
        c(e, "class", "item svelte-ldfcaf");
    },
    m(M, B) {
      w(M, e, B),
        f(e, n),
        f(n, l),
        f(e, r),
        f(e, i),
        C(s, i, null),
        f(e, a),
        f(e, u),
        f(u, d),
        f(e, m),
        f(e, g),
        C(b, g, null),
        f(e, k),
        (E = !0),
        I || ((T = X(g, "click", P)), (I = !0));
    },
    p(M, B) {
      (o = M),
        (!E || B & 1) && t !== (t = o[2](o[4].from) + "") && ee(l, t),
        (!E || B & 1) && p !== (p = o[2](o[4].to) + "") && ee(d, p);
    },
    i(M) {
      E || (_(s.$$.fragment, M), _(b.$$.fragment, M), (E = !0));
    },
    o(M) {
      h(s.$$.fragment, M), h(b.$$.fragment, M), (E = !1);
    },
    d(M) {
      M && $(e), x(s), x(b), (I = !1), T();
    },
  };
}
function Yg(o) {
  let e,
    n,
    t,
    l,
    r = [Qg, Kg],
    i = [];
  function s(a, u) {
    return a[0].length === 0 ? 0 : 1;
  }
  return (
    (e = s(o, -1)),
    (n = i[e] = r[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(a, u) {
        i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, [u]) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? i[e].p(a, u)
            : (Q(),
              h(i[p], 1, 1, () => {
                i[p] = null;
              }),
              Y(),
              (n = i[e]),
              n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
              _(n, 1),
              n.m(t.parentNode, t));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        i[e].d(a), a && $(t);
      },
    }
  );
}
function Jg(o, e, n) {
  let { rules: t } = e,
    l = oe(),
    r = (s) =>
      s === Vi.newtab ? A("settings_distraction_blocker__home") : Hi(s),
    i = (s) => l("delete", s.id);
  return (
    (o.$$set = (s) => {
      "rules" in s && n(0, (t = s.rules));
    }),
    [t, l, r, i]
  );
}
var $l = class extends H {
    constructor(e) {
      super(), j(this, e, Jg, Yg, U, { rules: 0 }, Zg);
    }
  },
  Jc = $l;
N();
function e2(o) {
  Z(
    o,
    "svelte-1b0gnks",
    ".banner.svelte-1b0gnks{margin:8px}.add-button.svelte-1b0gnks .add-icon{min-width:21px;min-height:21px}.items.svelte-1b0gnks .item-delete{margin-left:15px}"
  );
}
function Xc(o) {
  let e, n, t;
  return (
    (n = new Zc({})),
    n.$on("close", o[5]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "banner svelte-1b0gnks");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p: L,
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function t2(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[1] } })),
    e.$on("change", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.checked = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function eu(o) {
  let e, n;
  return (
    (e = new Fc({ props: { schedule: o[2] } })),
    e.$on("change", o[9]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4 && (r.schedule = t[2]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function n2(o) {
  let e, n, t, l;
  e = new Me({
    props: {
      name: A("settings_distraction_blocker__activate"),
      dataTestId: "settings-item-distraction-blocker-activate",
      $$slots: { default: [t2] },
      $$scope: { ctx: o },
    },
  });
  let r = o[1] && eu(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      let a = {};
      s & 2050 && (a.$$scope = { dirty: s, ctx: i }),
        e.$set(a),
        i[1]
          ? r
            ? (r.p(i, s), s & 2 && _(r, 1))
            : ((r = eu(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function o2(o) {
  let e, n, t;
  return (
    (n = new Rc({})),
    n.$on("add", o[7]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "add-button svelte-1b0gnks");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p: L,
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function l2(o) {
  let e, n, t;
  return (
    (n = new Jc({ props: { rules: o[0] } })),
    n.$on("delete", o[8]),
    {
      c() {
        (e = v("div")), y(n.$$.fragment), c(e, "class", "items svelte-1b0gnks");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r & 1 && (i.rules = l[0]), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function r2(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a = !o[3] && Xc(o);
  return (
    (n = new Te({
      props: { $$slots: { default: [n2] }, $$scope: { ctx: o } },
    })),
    (l = new Te({
      props: {
        groupBottom: !0,
        $$slots: { default: [o2] },
        $$scope: { ctx: o },
      },
    })),
    (i = new Te({
      props: { groupTop: !0, $$slots: { default: [l2] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        a && a.c(),
          (e = S()),
          y(n.$$.fragment),
          (t = S()),
          y(l.$$.fragment),
          (r = S()),
          y(i.$$.fragment);
      },
      m(u, p) {
        a && a.m(u, p),
          w(u, e, p),
          C(n, u, p),
          w(u, t, p),
          C(l, u, p),
          w(u, r, p),
          C(i, u, p),
          (s = !0);
      },
      p(u, [p]) {
        u[3]
          ? a &&
            (Q(),
            h(a, 1, 1, () => {
              a = null;
            }),
            Y())
          : a
          ? (a.p(u, p), p & 8 && _(a, 1))
          : ((a = Xc(u)), a.c(), _(a, 1), a.m(e.parentNode, e));
        let d = {};
        p & 2054 && (d.$$scope = { dirty: p, ctx: u }), n.$set(d);
        let m = {};
        p & 2048 && (m.$$scope = { dirty: p, ctx: u }), l.$set(m);
        let g = {};
        p & 2049 && (g.$$scope = { dirty: p, ctx: u }), i.$set(g);
      },
      i(u) {
        s ||
          (_(a),
          _(n.$$.fragment, u),
          _(l.$$.fragment, u),
          _(i.$$.fragment, u),
          (s = !0));
      },
      o(u) {
        h(a),
          h(n.$$.fragment, u),
          h(l.$$.fragment, u),
          h(i.$$.fragment, u),
          (s = !1);
      },
      d(u) {
        a && a.d(u), u && $(e), x(n, u), u && $(t), x(l, u), u && $(r), x(i, u);
      },
    }
  );
}
function i2(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a = q.stores.globalSettingsDistractionBlocker;
  ve(o, a, (b) => n(10, (s = b)));
  let u = () => {
      q.actions.changeIsHiddenWelcomeToDistractionBlocker(!0);
    },
    p = () => {
      let b = !l;
      q.actions.sendAnalyticsEvent(
        b
          ? "distraction-blocker.settings.activated"
          : "distraction-blocker.settings.deactivated",
        void 0
      ),
        q.actions.changeEnableDistractionBlocker(b);
    },
    d = (b) => {
      q.actions.sendAnalyticsEvent(
        "distraction-blocker.settings.url-added",
        void 0
      ),
        q.actions.changeDistractionBlockerRules([...r, b.detail]);
    },
    m = (b) => {
      q.actions.sendAnalyticsEvent(
        "distraction-blocker.settings.url-deleted",
        void 0
      ),
        q.actions.changeDistractionBlockerRules(
          r.filter((k) => k.id !== b.detail)
        );
    },
    g = (b) => {
      switch (b.detail.reason) {
        case "time":
          q.actions.sendAnalyticsEvent(
            "distraction-blocker.settings.schedule.time-changed",
            void 0
          );
          break;
        case "weekday":
          q.actions.sendAnalyticsEvent(
            "distraction-blocker.settings.schedule.day-changed",
            void 0
          );
          break;
        case "allDay":
          q.actions.sendAnalyticsEvent(
            b.detail.schedule.allDay
              ? "distraction-blocker.settings.schedule.all-day-activated"
              : "distraction-blocker.settings.schedule.all-day-deactivated",
            void 0
          );
          break;
        default:
          pt(!0, "Unexpected reason");
      }
      q.actions.changeDistractionBlockerSchedule(b.detail.schedule);
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 1024) {
        e: n(3, (t = s?.isHiddenWelcome ?? !1));
      }
      if (o.$$.dirty & 1024) {
        e: n(1, (l = s?.enabled ?? !1));
      }
      if (o.$$.dirty & 1024) {
        e: n(0, (r = s?.rules ?? []));
      }
      if (o.$$.dirty & 1024) {
        e: n(
          2,
          (i = s?.schedule ?? {
            allDay: !0,
            from: { hours: 0, minutes: 0 },
            to: { hours: 0, minutes: 0 },
            weekdays: [],
          })
        );
      }
    }),
    [r, l, i, t, a, u, p, d, m, g, s]
  );
}
var yl = class extends H {
    constructor(e) {
      super(), j(this, e, i2, r2, U, {}, e2);
    }
  },
  tu = yl;
N();
N();
N();
N();
function s2(o) {
  Z(
    o,
    "svelte-ngojwv",
    ".calendar-create-title-container.svelte-ngojwv{padding:15px 16px;font-size:12px;line-height:14px;background-color:var(--settings-popup-distraction-form-bg)}.calendar-create-title-container.svelte-ngojwv .calendar-save-button{margin-right:7px;font-weight:590}.calendar-create-title-container.svelte-ngojwv .calendar-cancel-button{font-weight:590}.title.svelte-ngojwv{color:var(--settings-popup-item-subtitle-color);font-weight:400;font-size:11px;margin-bottom:9px}.input.svelte-ngojwv{padding:12px 14px;background:var(--input-with-slots-backround);margin-bottom:15px;outline:none;flex:1 1 0;color:var(--search-input-color);caret-color:var(--search-input-placeholder-color);border-radius:6px;width:100%;border:1px solid var(--settings-popup-input-border);height:32px}.input.svelte-ngojwv::placeholder{color:var(--search-input-placeholder-color)}.input[placeholder].svelte-ngojwv{text-overflow:ellipsis}.invalid.svelte-ngojwv{border:1px solid var(--input-with-submit-border-invalid)}.validation-message.svelte-ngojwv{color:var(--settings-popup-input-invalid)}"
  );
}
function a2(o) {
  let e;
  return {
    c() {
      (e = v("p")),
        (e.textContent = `${o[4]}`),
        c(e, "class", "validation-message svelte-ngojwv");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function c2(o) {
  let e;
  return {
    c() {
      (e = v("p")),
        (e.textContent = `${o[5]}`),
        c(e, "class", "validation-message svelte-ngojwv");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function u2(o) {
  let e =
      A("overlay_settings_integrations_tab__calendar_list_save_button_text") +
      "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function p2(o) {
  let e =
      A("overlay_settings_integrations_tab__calendar_list_cancel_button_text") +
      "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function f2(o) {
  let e,
    n,
    t =
      (o[1]
        ? A("overlay_settings_integrations_tab__calendar_list_add_title_text")
        : A(
            "overlay_settings_integrations_tab__calendar_list_edit_title_text"
          )) + "",
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I;
  function T(B, O) {
    if ((O & 4 && (i = null), i == null && (i = !!(B[2] && B[6]())), i))
      return c2;
    if (B[2]) return a2;
  }
  let P = T(o, -1),
    M = P && P(o);
  return (
    (m = new pe({
      props: {
        mod: "light",
        size: "small",
        className: "calendar-save-button",
        disabled: o[2] || (!o[3] && !o[1]),
        $$slots: { default: [u2] },
        $$scope: { ctx: o },
      },
    })),
    m.$on("click", o[7]),
    (b = new pe({
      props: {
        mod: "grey",
        size: "small",
        className: "calendar-cancel-button",
        $$slots: { default: [p2] },
        $$scope: { ctx: o },
      },
    })),
    b.$on("click", o[10]),
    {
      c() {
        (e = v("section")),
          (n = v("div")),
          (l = V(t)),
          (r = S()),
          M && M.c(),
          (s = S()),
          (a = v("input")),
          (d = S()),
          y(m.$$.fragment),
          (g = S()),
          y(b.$$.fragment),
          c(n, "class", "title svelte-ngojwv"),
          c(
            a,
            "class",
            (u = "input " + (o[2] ? "invalid" : "") + " svelte-ngojwv")
          ),
          c(
            a,
            "placeholder",
            (p = A(
              "overlay_settings_integrations_tab__calendar_list_title_placeholder_text"
            ))
          ),
          c(a, "data-validation-message", o[4]),
          (a.autofocus = !0),
          c(e, "class", "calendar-create-title-container svelte-ngojwv");
      },
      m(B, O) {
        w(B, e, O),
          f(e, n),
          f(n, l),
          f(e, r),
          M && M.m(e, null),
          f(e, s),
          f(e, a),
          Ne(a, o[0]),
          f(e, d),
          C(m, e, null),
          f(e, g),
          C(b, e, null),
          (k = !0),
          a.focus(),
          E ||
            ((I = [
              X(a, "input", o[12]),
              X(a, "keydown", o[9]),
              X(a, "input", o[8]),
            ]),
            (E = !0));
      },
      p(B, [O]) {
        (!k || O & 2) &&
          t !==
            (t =
              (B[1]
                ? A(
                    "overlay_settings_integrations_tab__calendar_list_add_title_text"
                  )
                : A(
                    "overlay_settings_integrations_tab__calendar_list_edit_title_text"
                  )) + "") &&
          ee(l, t),
          P === (P = T(B, O)) && M
            ? M.p(B, O)
            : (M && M.d(1), (M = P && P(B)), M && (M.c(), M.m(e, s))),
          (!k ||
            (O & 4 &&
              u !==
                (u = "input " + (B[2] ? "invalid" : "") + " svelte-ngojwv"))) &&
            c(a, "class", u),
          O & 1 && a.value !== B[0] && Ne(a, B[0]);
        let z = {};
        O & 14 && (z.disabled = B[2] || (!B[3] && !B[1])),
          O & 32768 && (z.$$scope = { dirty: O, ctx: B }),
          m.$set(z);
        let G = {};
        O & 32768 && (G.$$scope = { dirty: O, ctx: B }), b.$set(G);
      },
      i(B) {
        k || (_(m.$$.fragment, B), _(b.$$.fragment, B), (k = !0));
      },
      o(B) {
        h(m.$$.fragment, B), h(b.$$.fragment, B), (k = !1);
      },
      d(B) {
        B && $(e), M && M.d(), x(m), x(b), (E = !1), Se(I);
      },
    }
  );
}
function d2(o, e, n) {
  let t = oe(),
    { calendars: l = [] } = e,
    { currentCalendarTitle: r } = e,
    { isAddingCalendarTitle: i } = e,
    s = !1,
    a = !1,
    u = A(
      "overlay_settings_integrations_tab__calendar_list_validation_input_text"
    ),
    p = A(
      "overlay_settings_integrations_tab__calendar_list_validation_empty_input_text"
    ),
    d = () => l.some((T) => r === T.name),
    m = () => !r.length,
    g = () => {
      n(2, (s = d() || m())), !s && t("add", r);
    },
    b = () => {
      n(3, (a = !0)), n(2, (s = !1));
    },
    k = (T) => {
      T.key === "Enter" && !s && g();
    },
    E = () => {
      t("close");
    };
  function I() {
    (r = this.value), n(0, r);
  }
  return (
    (o.$$set = (T) => {
      "calendars" in T && n(11, (l = T.calendars)),
        "currentCalendarTitle" in T && n(0, (r = T.currentCalendarTitle)),
        "isAddingCalendarTitle" in T && n(1, (i = T.isAddingCalendarTitle));
    }),
    [r, i, s, a, u, p, m, g, b, k, E, l, I]
  );
}
var Cl = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          d2,
          f2,
          U,
          { calendars: 11, currentCalendarTitle: 0, isAddingCalendarTitle: 1 },
          s2
        );
    }
  },
  nu = Cl;
N();
N();
function m2(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b;
  return {
    c() {
      (e = F("svg")),
        (n = F("g")),
        (t = F("path")),
        (l = F("path")),
        (r = F("path")),
        (i = F("path")),
        (s = F("path")),
        (a = F("path")),
        (u = F("path")),
        (p = F("path")),
        (d = F("defs")),
        (m = F("clipPath")),
        (g = F("rect")),
        c(t, "d", "M12.2101 3.78906H3.78906V12.2101H12.2101V3.78906Z"),
        c(t, "fill", "white"),
        c(l, "d", "M12.2109 16.0004L16.0004 12.2109H12.2109V16.0004Z"),
        c(l, "fill", "#EA4335"),
        c(r, "d", "M16.0004 3.78906H12.2109V12.2101H16.0004V3.78906Z"),
        c(r, "fill", "#FBBC04"),
        c(i, "d", "M12.2101 12.2109H3.78906V16.0004H12.2101V12.2109Z"),
        c(i, "fill", "#34A853"),
        c(
          s,
          "d",
          "M0 12.2109V14.7373C0 15.4351 0.565263 16.0004 1.26316 16.0004H3.78947V12.2109H0Z"
        ),
        c(s, "fill", "#188038"),
        c(
          a,
          "d",
          "M16.0004 3.78947V1.26316C16.0004 0.565263 15.4351 0 14.7373 0H12.2109V3.78947H16.0004Z"
        ),
        c(a, "fill", "#1967D2"),
        c(
          u,
          "d",
          "M12.2105 0H1.26316C0.565263 0 0 0.565263 0 1.26316V12.2105H3.78947V3.78947H12.2105V0Z"
        ),
        c(u, "fill", "#4285F4"),
        c(
          p,
          "d",
          "M5.51681 10.3219C5.20208 10.1093 4.98418 9.79878 4.86523 9.38826L5.59576 9.08721C5.66208 9.33984 5.77786 9.53563 5.94313 9.67457C6.10734 9.81352 6.30734 9.88194 6.54103 9.88194C6.77997 9.88194 6.98523 9.80931 7.15681 9.66405C7.32839 9.51878 7.41471 9.33352 7.41471 9.10931C7.41471 8.87984 7.32418 8.69247 7.14313 8.5472C6.96207 8.40194 6.73471 8.32931 6.46313 8.32931H6.04103V7.60615H6.41997C6.65365 7.60615 6.8505 7.54299 7.0105 7.41668C7.1705 7.29036 7.2505 7.11773 7.2505 6.89773C7.2505 6.70194 7.17892 6.54615 7.03576 6.42931C6.8926 6.31247 6.71155 6.25352 6.49155 6.25352C6.27681 6.25352 6.10629 6.31036 5.97997 6.4251C5.85374 6.54014 5.75884 6.6854 5.70418 6.84721L4.98102 6.54615C5.07681 6.27457 5.2526 6.03457 5.5105 5.8272C5.76839 5.61984 6.09787 5.51562 6.49787 5.51562C6.79366 5.51562 7.05997 5.57247 7.29576 5.6872C7.53155 5.80194 7.71681 5.96089 7.8505 6.16299C7.98418 6.36615 8.0505 6.59352 8.0505 6.84615C8.0505 7.10405 7.98839 7.32194 7.86418 7.50089C7.73997 7.67984 7.58734 7.81668 7.40629 7.91247V7.95563C7.64007 8.05201 7.84314 8.21032 7.99366 8.41352C8.14629 8.61878 8.22313 8.86405 8.22313 9.15036C8.22313 9.43668 8.1505 9.69247 8.00523 9.91668C7.85997 10.1409 7.65892 10.3177 7.40418 10.4462C7.14839 10.5746 6.86102 10.6398 6.54208 10.6398C6.1726 10.6409 5.83155 10.5346 5.51681 10.3219ZM10.0042 6.69668L9.20208 7.27668L8.80102 6.66826L10.24 5.63036H10.7915V10.5262H10.0042V6.69668Z"
        ),
        c(p, "fill", "#4285F4"),
        c(n, "clip-path", "url(#clip0_609_23862)"),
        c(g, "width", "16"),
        c(g, "height", "16"),
        c(g, "fill", "white"),
        c(m, "id", "clip0_609_23862"),
        c(e, "class", (b = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 16"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(k, E) {
      w(k, e, E),
        f(e, n),
        f(n, t),
        f(n, l),
        f(n, r),
        f(n, i),
        f(n, s),
        f(n, a),
        f(n, u),
        f(n, p),
        f(e, d),
        f(d, m),
        f(m, g);
    },
    p(k, [E]) {
      E & 4 && b !== (b = `icon ${k[2]}`) && c(e, "class", b),
        E & 1 && c(e, "width", k[0]),
        E & 2 && c(e, "height", k[1]);
    },
    i: L,
    o: L,
    d(k) {
      k && $(e);
    },
  };
}
function _2(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var xl = class extends H {
    constructor(e) {
      super(), j(this, e, _2, m2, U, { width: 0, height: 1, className: 2 });
    }
  },
  ou = xl;
N();
function g2(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M3.1875 15.8945C2.90417 15.8945 2.65625 15.7882 2.44375 15.5757C2.23125 15.3632 2.125 15.1153 2.125 14.832V4.207C2.125 3.92366 2.23125 3.67575 2.44375 3.46325C2.65625 3.25075 2.90417 3.1445 3.1875 3.1445H10.3594L9.29688 4.207H3.1875V14.832H13.8125V8.6695L14.875 7.607V14.832C14.875 15.1153 14.7688 15.3632 14.5562 15.5757C14.3438 15.7882 14.0958 15.8945 13.8125 15.8945H3.1875ZM11.7229 3.28616L12.4844 4.02991L7.4375 9.05908V10.582H8.94271L14.0073 5.51741L14.751 6.26116L9.38542 11.6445H6.375V8.63408L11.7229 3.28616ZM14.751 6.26116L11.7229 3.28616L13.4937 1.51533C13.6944 1.31463 13.9442 1.21429 14.243 1.21429C14.5418 1.21429 14.7938 1.32054 14.999 1.53304L16.4865 3.03825C16.6872 3.25075 16.7875 3.50145 16.7875 3.79035C16.7875 4.07926 16.6812 4.32439 16.4688 4.52575L14.751 6.26116Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 18 18"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "fill", "currentColor"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]),
        r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function h2(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Sl = class extends H {
    constructor(e) {
      super(), j(this, e, h2, g2, U, { width: 0, height: 1, className: 2 });
    }
  },
  lu = Sl;
N();
function v2(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M15 4.33464H11.6667V3.0013C11.6667 2.64768 11.5262 2.30854 11.2761 2.05849C11.0261 1.80844 10.687 1.66797 10.3333 1.66797H7.66667C7.31305 1.66797 6.97391 1.80844 6.72386 2.05849C6.47381 2.30854 6.33333 2.64768 6.33333 3.0013V4.33464H3V5.33464H4.24L5.17333 15.668H12.8267L13.76 5.33464H15V4.33464ZM7.33333 3.0013C7.33333 2.9129 7.36845 2.82811 7.43096 2.7656C7.49348 2.70309 7.57826 2.66797 7.66667 2.66797H10.3333C10.4217 2.66797 10.5065 2.70309 10.569 2.7656C10.6315 2.82811 10.6667 2.9129 10.6667 3.0013V4.33464H7.33333V3.0013ZM11.9067 14.668H6.09333L5.24667 5.33464H12.7533L11.9067 14.668Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "currentColor"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function b2(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Al = class extends H {
    constructor(e) {
      super(), j(this, e, b2, v2, U, { width: 0, height: 1, className: 2 });
    }
  },
  ru = Al;
function k2(o) {
  Z(
    o,
    "svelte-19sxsz0",
    ".content.svelte-19sxsz0{margin-top:6px;height:36px;padding:3px 8px;border-radius:6px;display:flex;align-items:center}.content.svelte-19sxsz0:hover{background-color:var(--setings-calendar-edit-item-hover)}.content.svelte-19sxsz0 .menu-button{width:20px;height:20px}.content.svelte-19sxsz0 .calendar-edit-icon{cursor:pointer;color:var(--setings-calendar-edit-icon-passive);transition:hover ease-in 0.3s}.content.svelte-19sxsz0 .calendar-edit-icon:last-child{margin:0 5px}.content.svelte-19sxsz0 .calendar-edit-icon:hover{color:var(--setings-calendar-edit-icon-hover)}.email.svelte-19sxsz0{color:var(--text-primary-color);flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;margin-right:5px}.edit-title.svelte-19sxsz0{width:100%;margin-right:8px}.input.svelte-19sxsz0{height:30px;width:100%;outline:none;flex:1 1 0;border-radius:3px;padding:7px 4px;color:var(--setings-calendar-edit-input-color);background-color:var(--setings-calendar-edit-input-background-color);border:none}.danger.svelte-19sxsz0{background-color:var(--setings-calendar-edit-error-color);border:1px solid var(--setings-calendar-edit-border-error)}.cancel-icon.svelte-19sxsz0{background-color:var(--setings-calendar-edit-item-hover);border-radius:20px;margin-left:2px;min-width:24px;height:24px}.calendar-icon.svelte-19sxsz0{margin-right:8px;display:flex}"
  );
}
function w2(o) {
  let e,
    n = o[0].name + "",
    t;
  return {
    c() {
      (e = v("span")), (t = V(n)), c(e, "class", "email svelte-19sxsz0");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 1 && n !== (n = l[0].name + "") && ee(t, n);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function $2(o) {
  let e, n, t;
  return (
    (n = new wn({
      props: {
        showTooltip: o[4],
        displayInlineFlex: !1,
        tooltipPlacement: "bottom-start",
        $$slots: { tooltip: [C2], default: [y2] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "edit-title svelte-19sxsz0");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r & 16 && (i.showTooltip = l[4]),
          r & 131100 && (i.$$scope = { dirty: r, ctx: l }),
          n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function y2(o) {
  let e, n, t, l;
  return {
    c() {
      (e = v("input")),
        c(e, "class", "input svelte-19sxsz0"),
        c(
          e,
          "placeholder",
          (n = A(
            "overlay_settings_integrations_tab__calendar_edit_title_placeholder_text"
          ))
        ),
        (e.autofocus = !0),
        ie(e, "danger", o[4]);
    },
    m(r, i) {
      w(r, e, i),
        Ne(e, o[2]),
        e.focus(),
        t ||
          ((l = [
            X(e, "input", o[13]),
            X(e, "keydown", o[5]),
            X(e, "input", o[9]),
          ]),
          (t = !0));
    },
    p(r, i) {
      i & 4 && e.value !== r[2] && Ne(e, r[2]), i & 16 && ie(e, "danger", r[4]);
    },
    d(r) {
      r && $(e), (t = !1), Se(l);
    },
  };
}
function C2(o) {
  let e,
    n =
      (o[3]
        ? A(
            "overlay_settings_integrations_tab__calendar_list_validation_input_text"
          )
        : A(
            "overlay_settings_integrations_tab__calendar_list_title_placeholder_text"
          )) + "",
    t;
  return {
    c() {
      (e = v("span")),
        (t = V(n)),
        c(e, "class", "tooltip"),
        c(e, "slot", "tooltip");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 8 &&
        n !==
          (n =
            (l[3]
              ? A(
                  "overlay_settings_integrations_tab__calendar_list_validation_input_text"
                )
              : A(
                  "overlay_settings_integrations_tab__calendar_list_title_placeholder_text"
                )) + "") &&
        ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function x2(o) {
  let e, n, t, l, r, i, s, a, u, p;
  return (
    (n = new lu({
      props: { className: "calendar-edit-icon", width: "18", height: "18" },
    })),
    (i = new ru({
      props: { className: "calendar-edit-icon", width: "18", height: "18" },
    })),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          (l = S()),
          (r = v("button")),
          y(i.$$.fragment),
          c(
            e,
            "title",
            (t = A(
              "overlay_settings_integrations_tab__calendar_list_edit_title_text"
            ))
          ),
          c(
            r,
            "title",
            (s = A(
              "overlay_settings_integrations_tab__calendar_list_edit_title_remove"
            ))
          );
      },
      m(d, m) {
        w(d, e, m),
          C(n, e, null),
          w(d, l, m),
          w(d, r, m),
          C(i, r, null),
          (a = !0),
          u || ((p = [X(e, "click", o[6]), X(r, "click", o[10])]), (u = !0));
      },
      p: L,
      i(d) {
        a || (_(n.$$.fragment, d), _(i.$$.fragment, d), (a = !0));
      },
      o(d) {
        h(n.$$.fragment, d), h(i.$$.fragment, d), (a = !1);
      },
      d(d) {
        d && $(e), x(n), d && $(l), d && $(r), x(i), (u = !1), Se(p);
      },
    }
  );
}
function S2(o) {
  let e, n, t, l, r, i, s;
  return (
    (e = new pe({
      props: {
        mod: "light",
        size: "small",
        className: "save-button",
        disabled: o[4],
        $$slots: { default: [A2] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[8]),
    (l = new qe({ props: { width: "8", height: "8" } })),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          (t = v("button")),
          y(l.$$.fragment),
          c(t, "class", "cancel-icon svelte-19sxsz0");
      },
      m(a, u) {
        C(e, a, u),
          w(a, n, u),
          w(a, t, u),
          C(l, t, null),
          (r = !0),
          i || ((s = X(t, "click", o[7])), (i = !0));
      },
      p(a, u) {
        let p = {};
        u & 16 && (p.disabled = a[4]),
          u & 131072 && (p.$$scope = { dirty: u, ctx: a }),
          e.$set(p);
      },
      i(a) {
        r || (_(e.$$.fragment, a), _(l.$$.fragment, a), (r = !0));
      },
      o(a) {
        h(e.$$.fragment, a), h(l.$$.fragment, a), (r = !1);
      },
      d(a) {
        x(e, a), a && $(n), a && $(t), x(l), (i = !1), s();
      },
    }
  );
}
function A2(o) {
  let e =
      A("overlay_settings_integrations_tab__calendar_list_save_button_text") +
      "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function E2(o) {
  let e, n, t, l, r, i, s, a, u, p;
  t = new ou({ props: { width: "16", height: "16" } });
  let d = [$2, w2],
    m = [];
  function g(I, T) {
    return I[1] ? 0 : 1;
  }
  (r = g(o, -1)), (i = m[r] = d[r](o));
  let b = [S2, x2],
    k = [];
  function E(I, T) {
    return I[1] ? 0 : 1;
  }
  return (
    (a = E(o, -1)),
    (u = k[a] = b[a](o)),
    {
      c() {
        (e = v("section")),
          (n = v("span")),
          y(t.$$.fragment),
          (l = S()),
          i.c(),
          (s = S()),
          u.c(),
          c(n, "class", "calendar-icon svelte-19sxsz0"),
          c(e, "class", "content svelte-19sxsz0");
      },
      m(I, T) {
        w(I, e, T),
          f(e, n),
          C(t, n, null),
          f(e, l),
          m[r].m(e, null),
          f(e, s),
          k[a].m(e, null),
          (p = !0);
      },
      p(I, [T]) {
        let P = r;
        (r = g(I, T)),
          r === P
            ? m[r].p(I, T)
            : (Q(),
              h(m[P], 1, 1, () => {
                m[P] = null;
              }),
              Y(),
              (i = m[r]),
              i ? i.p(I, T) : ((i = m[r] = d[r](I)), i.c()),
              _(i, 1),
              i.m(e, s));
        let M = a;
        (a = E(I, T)),
          a === M
            ? k[a].p(I, T)
            : (Q(),
              h(k[M], 1, 1, () => {
                k[M] = null;
              }),
              Y(),
              (u = k[a]),
              u ? u.p(I, T) : ((u = k[a] = b[a](I)), u.c()),
              _(u, 1),
              u.m(e, null));
      },
      i(I) {
        p || (_(t.$$.fragment, I), _(i), _(u), (p = !0));
      },
      o(I) {
        h(t.$$.fragment, I), h(i), h(u), (p = !1);
      },
      d(I) {
        I && $(e), x(t), m[r].d(), k[a].d();
      },
    }
  );
}
function I2(o, e, n) {
  let t,
    l = oe(),
    { calendar: r } = e,
    { calendars: i } = e,
    { activeEditingCalendar: s } = e,
    a,
    u = r.name,
    p = !1,
    d = () => r.name !== u,
    m = () => (d() ? i.some((M) => u === M.name) : !1),
    g = (M) => {
      M.key !== "Enter" || p || E();
    },
    b = () => {
      l("changeActiveEditingCalendar", r.name);
    },
    k = () => {
      n(2, (u = r.name)), l("changeActiveEditingCalendar", null);
    },
    E = () => {
      if (m()) {
        n(3, (p = !0));
        return;
      }
      if (!d) {
        k();
        return;
      }
      l("changeActiveEditingCalendar", null),
        l("updateCalendarName", { calendarName: u, prevName: r.name });
    },
    I = () => {
      n(3, (p = !1));
    },
    T = () => {
      q.actions.removeCalendar(r.name);
    };
  function P() {
    (u = this.value), n(2, u), n(12, s), n(0, r), n(1, a);
  }
  return (
    (o.$$set = (M) => {
      "calendar" in M && n(0, (r = M.calendar)),
        "calendars" in M && n(11, (i = M.calendars)),
        "activeEditingCalendar" in M && n(12, (s = M.activeEditingCalendar));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 4099) {
        e: n(1, (a = s === r.name)), a || n(2, (u = r.name));
      }
      if (o.$$.dirty & 12) {
        e: n(4, (t = !u.length || p));
      }
    }),
    [r, a, u, p, t, g, b, k, E, I, T, i, s, P]
  );
}
var El = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          I2,
          E2,
          U,
          { calendar: 0, calendars: 11, activeEditingCalendar: 12 },
          k2
        );
    }
  },
  iu = El;
function T2(o) {
  Z(
    o,
    "svelte-1uf7sw6",
    ".header.svelte-1uf7sw6{display:flex;justify-content:space-between;align-items:center;padding:0 9px 0 8px;margin-bottom:15px}.header.svelte-1uf7sw6 .add-button{padding:2px 8px;transition:transform 0.3s ease-in-out}.header.svelte-1uf7sw6 .add-icon{margin-right:4px}.header.svelte-1uf7sw6 .rotate{transform:rotate(45deg)}.title.svelte-1uf7sw6{font-size:13px;font-weight:700}"
  );
}
function su(o, e, n) {
  let t = o.slice();
  return (t[10] = e[n]), t;
}
function M2(o) {
  let e,
    n,
    t =
      (o[1]
        ? A(
            "overlay_settings_integrations_tab__calendar_list_cancel_button_text"
          )
        : A(
            "overlay_settings_integrations_tab__calendar_list_add_button_text"
          )) + "",
    l,
    r;
  return (
    (e = new Et({
      props: {
        className: `add-icon ${o[1] ? "rotate" : ""}`,
        width: "10",
        height: "10",
      },
    })),
    {
      c() {
        y(e.$$.fragment), (n = S()), (l = V(t));
      },
      m(i, s) {
        C(e, i, s), w(i, n, s), w(i, l, s), (r = !0);
      },
      p(i, s) {
        let a = {};
        s & 2 && (a.className = `add-icon ${i[1] ? "rotate" : ""}`),
          e.$set(a),
          (!r || s & 2) &&
            t !==
              (t =
                (i[1]
                  ? A(
                      "overlay_settings_integrations_tab__calendar_list_cancel_button_text"
                    )
                  : A(
                      "overlay_settings_integrations_tab__calendar_list_add_button_text"
                    )) + "") &&
            ee(l, t);
      },
      i(i) {
        r || (_(e.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(e.$$.fragment, i), (r = !1);
      },
      d(i) {
        x(e, i), i && $(n), i && $(l);
      },
    }
  );
}
function au(o) {
  let e, n;
  return (
    (e = new nu({
      props: {
        calendars: o[0],
        currentCalendarTitle: o[2],
        isAddingCalendarTitle: o[1],
      },
    })),
    e.$on("close", o[5]),
    e.$on("add", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.calendars = t[0]),
          l & 4 && (r.currentCalendarTitle = t[2]),
          l & 2 && (r.isAddingCalendarTitle = t[1]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function cu(o, e) {
  let n, t, l;
  return (
    (t = new iu({
      props: { calendar: e[10], calendars: e[0], activeEditingCalendar: e[3] },
    })),
    t.$on("edit", e[9]),
    t.$on("changeActiveEditingCalendar", e[4]),
    t.$on("updateCalendarName", e[8]),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), y(t.$$.fragment), (this.first = n);
      },
      m(r, i) {
        w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        e = r;
        let s = {};
        i & 1 && (s.calendar = e[10]),
          i & 1 && (s.calendars = e[0]),
          i & 8 && (s.activeEditingCalendar = e[3]),
          t.$set(s);
      },
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(n), x(t, r);
      },
    }
  );
}
function P2(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = [],
    a = new Map(),
    u,
    p;
  (l = new pe({
    props: {
      className: "add-button",
      mod: "grey",
      size: "small",
      $$slots: { default: [M2] },
      $$scope: { ctx: o },
    },
  })),
    l.$on("click", o[6]);
  let d = o[1] && au(o),
    m = o[0],
    g = (b) => b[10].name;
  for (let b = 0; b < m.length; b += 1) {
    let k = su(o, m, b),
      E = g(k);
    a.set(E, (s[b] = cu(E, k)));
  }
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (n.textContent = `${A(
          "overlay_settings_integrations_tab__calendar_list_title"
        )}`),
        (t = S()),
        y(l.$$.fragment),
        (r = S()),
        d && d.c(),
        (i = S());
      for (let b = 0; b < s.length; b += 1) s[b].c();
      (u = fe()),
        c(n, "class", "title svelte-1uf7sw6"),
        c(e, "class", "header svelte-1uf7sw6");
    },
    m(b, k) {
      w(b, e, k),
        f(e, n),
        f(e, t),
        C(l, e, null),
        w(b, r, k),
        d && d.m(b, k),
        w(b, i, k);
      for (let E = 0; E < s.length; E += 1) s[E] && s[E].m(b, k);
      w(b, u, k), (p = !0);
    },
    p(b, [k]) {
      let E = {};
      k & 8194 && (E.$$scope = { dirty: k, ctx: b }),
        l.$set(E),
        b[1]
          ? d
            ? (d.p(b, k), k & 2 && _(d, 1))
            : ((d = au(b)), d.c(), _(d, 1), d.m(i.parentNode, i))
          : d &&
            (Q(),
            h(d, 1, 1, () => {
              d = null;
            }),
            Y()),
        k & 793 &&
          ((m = b[0]),
          Q(),
          (s = ut(s, k, g, 1, b, m, a, u.parentNode, ct, cu, u, su)),
          Y());
    },
    i(b) {
      if (!p) {
        _(l.$$.fragment, b), _(d);
        for (let k = 0; k < m.length; k += 1) _(s[k]);
        p = !0;
      }
    },
    o(b) {
      h(l.$$.fragment, b), h(d);
      for (let k = 0; k < s.length; k += 1) h(s[k]);
      p = !1;
    },
    d(b) {
      b && $(e), x(l), b && $(r), d && d.d(b), b && $(i);
      for (let k = 0; k < s.length; k += 1) s[k].d(b);
      b && $(u);
    },
  };
}
var z2 = !1;
function B2(o, e, n) {
  let { calendars: t = [] } = e,
    l = !1,
    r = A(
      "overlay_settings_integrations_tab__calendar_list_default_title_name"
    ),
    i = null,
    s = ({ detail: g }) => {
      n(3, (i = g));
    },
    a = () => {
      n(1, (l = !1));
    },
    u = () => {
      l ? (n(1, (l = !1)), a()) : n(1, (l = !0)),
        n(
          2,
          (r = A(
            "overlay_settings_integrations_tab__calendar_list_default_title_name"
          ))
        );
    },
    p = ({ detail: g }) => {
      q.actions.sendAnalyticsEvent(
        "settings.integrations.add-new-calendar-button-clicked",
        void 0
      ),
        q.actions.showCalendarModal({
          source: "settings.integrations.add-new-calendar-button-clicked",
          calendarName: g,
        }),
        a();
    },
    d = ({ detail: { calendarName: g, prevName: b } }) => {
      q.actions.sendAnalyticsEvent(
        "settings.integrations.rename-new-calendar-button-clicked",
        void 0
      ),
        q.actions.updateCalendarInfo(g, z2, b);
    },
    m = (g) => {
      a(), n(1, (l = !1)), n(2, (r = g.detail));
    };
  return (
    (o.$$set = (g) => {
      "calendars" in g && n(0, (t = g.calendars));
    }),
    [t, l, r, i, s, a, u, p, d, m]
  );
}
var Il = class extends H {
    constructor(e) {
      super(), j(this, e, B2, P2, U, { calendars: 0 }, T2);
    }
  },
  uu = Il;
function N2(o) {
  let e, n;
  return (
    (e = new Oe({ props: { checked: o[0], dataTestId: "calendar-switch" } })),
    e.$on("change", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.checked = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function pu(o) {
  let e = A("overlay_settings_integrations_tab__calendar_description") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function q2(o) {
  let e,
    n = !o[0] && pu(o);
  return {
    c() {
      (e = v("div")), n && n.c(), c(e, "slot", "description");
    },
    m(t, l) {
      w(t, e, l), n && n.m(e, null);
    },
    p(t, l) {
      t[0]
        ? n && (n.d(1), (n = null))
        : n
        ? n.p(t, l)
        : ((n = pu(t)), n.c(), n.m(e, null));
    },
    d(t) {
      t && $(e), n && n.d();
    },
  };
}
function fu(o) {
  let e, n;
  return (
    (e = new uu({ props: { calendars: o[1] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.calendars = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function D2(o) {
  let e, n, t, l;
  e = new Me({
    props: {
      name: A("overlay_settings_integrations_tab__calendar_title"),
      $$slots: { description: [q2], default: [N2] },
      $$scope: { ctx: o },
    },
  });
  let r = o[0] && fu(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      let a = {};
      s & 9 && (a.$$scope = { dirty: s, ctx: i }),
        e.$set(a),
        i[0]
          ? r
            ? (r.p(i, s), s & 1 && _(r, 1))
            : ((r = fu(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function L2(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "calendar-section",
        $$slots: { default: [D2] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 11 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U2(o, e, n) {
  let { enableCalendarsIntegration: t } = e,
    { calendars: l } = e,
    r = () => {
      let i = !t;
      q.actions.toggleCalendarsIntegration(i),
        q.actions.sendAnalyticsEvent(
          "settings.integrations.calendars-changed",
          { "new-value": nt(i) }
        );
    };
  return (
    (o.$$set = (i) => {
      "enableCalendarsIntegration" in i &&
        n(0, (t = i.enableCalendarsIntegration)),
        "calendars" in i && n(1, (l = i.calendars));
    }),
    [t, l, r]
  );
}
var Tl = class extends H {
    constructor(e) {
      super(),
        j(this, e, U2, L2, U, { enableCalendarsIntegration: 0, calendars: 1 });
    }
  },
  du = Tl;
N();
function j2(o) {
  let e, n;
  return (
    (e = new Nt({
      props: { alwaysAuth: !0, scope: "EMAIL_SIGNATURES", type: "google" },
    })),
    e.$on("auth", o[0]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function H2(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A(
          "overlay_settings_integrations_tab__gmail_description"
        )}`),
        c(e, "slot", "description");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function V2(o) {
  let e, n;
  return (
    (e = new Me({
      props: {
        name: A("overlay_settings_integrations_tab__gmail_title"),
        $$slots: { description: [H2], default: [j2] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function O2(o) {
  let e, n;
  return (
    (e = new Te({
      props: {
        dataTestId: "gmail-section",
        $$slots: { default: [V2] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 2 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function R2(o) {
  return [
    ({ detail: n }) => {
      q.actions.makeGmailSignature(n, "integrations");
    },
  ];
}
var Ml = class extends H {
    constructor(e) {
      super(), j(this, e, R2, O2, U, {});
    }
  },
  gu = Ml;
function hu(o) {
  let e, n;
  return (
    (e = new gu({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function W2(o) {
  let e,
    n,
    t,
    l = o[0] && hu(o);
  return (
    (n = new du({
      props: { enableCalendarsIntegration: o[2], calendars: o[1] },
    })),
    {
      c() {
        l && l.c(), (e = S()), y(n.$$.fragment);
      },
      m(r, i) {
        l && l.m(r, i), w(r, e, i), C(n, r, i), (t = !0);
      },
      p(r, [i]) {
        r[0]
          ? l
            ? i & 1 && _(l, 1)
            : ((l = hu(r)), l.c(), _(l, 1), l.m(e.parentNode, e))
          : l &&
            (Q(),
            h(l, 1, 1, () => {
              l = null;
            }),
            Y());
        let s = {};
        i & 4 && (s.enableCalendarsIntegration = r[2]),
          i & 2 && (s.calendars = r[1]),
          n.$set(s);
      },
      i(r) {
        t || (_(l), _(n.$$.fragment, r), (t = !0));
      },
      o(r) {
        h(l), h(n.$$.fragment, r), (t = !1);
      },
      d(r) {
        l && l.d(r), r && $(e), x(n, r);
      },
    }
  );
}
function G2(o, e, n) {
  let t,
    l,
    r,
    i,
    s = q.stores.globalSettingsIntegrationsTab;
  return (
    ve(o, s, (a) => n(4, (i = a))),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(2, (t = i?.enableCalendarsIntegration ?? !1));
      }
      if (o.$$.dirty & 16) {
        e: n(1, (l = i?.calendars ?? []));
      }
      if (o.$$.dirty & 16) {
        e: n(0, (r = i?.isGmailSectionEnabled ?? !1));
      }
    }),
    [r, l, t, s, i]
  );
}
var Pl = class extends H {
    constructor(e) {
      super(), j(this, e, G2, W2, U, {});
    }
  },
  vu = Pl;
function F2(o) {
  Z(
    o,
    "svelte-67z77y",
    ".settings-popup.svelte-67z77y{display:flex;height:100%;max-width:100%}.settings-popup-tabs.svelte-67z77y{flex:1 1 auto;overflow:hidden;overflow-y:auto}.settings-popup-tabs.svelte-67z77y::-webkit-scrollbar{display:none}"
  );
}
function Z2(o) {
  let e, n;
  return (
    (e = new ja({})),
    e.$on("close", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function K2(o) {
  let e, n;
  return (
    (e = new vu({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Q2(o) {
  let e, n;
  return (
    (e = new tu({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Y2(o) {
  let e, n;
  return (
    (e = new xc({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function J2(o) {
  let e, n;
  return (
    (e = new qc({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function X2(o) {
  let e, n;
  return (
    (e = new yc({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function eh(o) {
  let e, n;
  return (
    (e = new jc({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function th(o) {
  let e, n;
  return (
    (e = new Ya({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function nh(o) {
  let e, n;
  return (
    (e = new kc({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function oh(o) {
  let e, n, t, l, r, i, s, a;
  (n = new Oc({ props: { tabs: o[1], selectedTab: o[0] } })),
    n.$on("tabSelected", o[3]),
    n.$on("close", o[7]);
  let u = [nh, th, eh, X2, J2, Y2, Q2, K2, Z2],
    p = [];
  function d(m, g) {
    return m[0] === "appearance"
      ? 0
      : m[0] === "ad-blocker"
      ? 1
      : m[0] === "tab-suspender"
      ? 2
      : m[0] === "cpu-monitor"
      ? 3
      : m[0] === "privacy"
      ? 4
      : m[0] === "other"
      ? 5
      : m[0] === "distraction-blocker"
      ? 6
      : m[0] === "integrations"
      ? 7
      : m[0] === "account"
      ? 8
      : -1;
  }
  return (
    ~(r = d(o, -1)) && (i = p[r] = u[r](o)),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("div")),
          i && i.c(),
          c(l, "class", "settings-popup-tabs svelte-67z77y"),
          c(l, "data-testid", (s = "global-settings.tab-content." + o[0])),
          c(e, "class", "settings-popup svelte-67z77y"),
          c(e, "data-testid", "global-settings-popup");
      },
      m(m, g) {
        w(m, e, g),
          C(n, e, null),
          f(e, t),
          f(e, l),
          ~r && p[r].m(l, null),
          (a = !0);
      },
      p(m, g) {
        let b = {};
        g & 2 && (b.tabs = m[1]), g & 1 && (b.selectedTab = m[0]), n.$set(b);
        let k = r;
        (r = d(m, g)),
          r !== k &&
            (i &&
              (Q(),
              h(p[k], 1, 1, () => {
                p[k] = null;
              }),
              Y()),
            ~r
              ? ((i = p[r]),
                i || ((i = p[r] = u[r](m)), i.c()),
                _(i, 1),
                i.m(l, null))
              : (i = null)),
          (!a ||
            (g & 1 && s !== (s = "global-settings.tab-content." + m[0]))) &&
            c(l, "data-testid", s);
      },
      i(m) {
        a || (_(n.$$.fragment, m), _(i), (a = !0));
      },
      o(m) {
        h(n.$$.fragment, m), h(i), (a = !1);
      },
      d(m) {
        m && $(e), x(n), ~r && p[r].d();
      },
    }
  );
}
function lh(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 580,
        height: 440,
        $$slots: { default: [oh] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1027 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function rh(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [lh] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[9]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1027 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function ih(o, e, n) {
  let t,
    l,
    r,
    i = q.stores.globalSettingsModal;
  ve(o, i, (g) => n(6, (r = g)));
  let { tabId: s = "appearance" } = e,
    { source: a } = e,
    u = (g) => {
      n(0, (t = g.detail.tab));
    };
  ye(
    () => (
      q.actions.sendAnalyticsEvent("settings.auto-opened", { source: a }),
      q.actions.explore("opened_settings"),
      () => q.actions.sendAnalyticsEvent("settings.auto-closed", { source: a })
    )
  );
  function p(g) {
    ue.call(this, o, g);
  }
  function d(g) {
    ue.call(this, o, g);
  }
  function m(g) {
    ue.call(this, o, g);
  }
  return (
    (o.$$set = (g) => {
      "tabId" in g && n(4, (s = g.tabId)),
        "source" in g && n(5, (a = g.source));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(0, (t = s));
      }
      if (o.$$.dirty & 64) {
        e: n(
          1,
          (l = Zi([
            { tab: "appearance", text: A("settings__appearance") },
            { tab: "ad-blocker", text: A("settings__adblocker") },
            r?.cpuMonitorEnabled
              ? { tab: "cpu-monitor", text: A("settings__cpu_monitor") }
              : null,
            { tab: "tab-suspender", text: A("settings__tab_suspender") },
            { tab: "privacy", text: A("settings__privacy") },
            { tab: "other", text: A("settings__other") },
            r?.isDistractionBlockerEnabled
              ? {
                  tab: "distraction-blocker",
                  text: A("settings__distraction_blocker"),
                }
              : null,
            r?.calendarIntegrationsEnabled
              ? { tab: "integrations", text: A("settings__integrations") }
              : null,
            { tab: "account", text: A("settings__account") },
          ]))
        );
      }
    }),
    [t, l, i, u, s, a, r, p, d, m]
  );
}
var zl = class extends H {
    constructor(e) {
      super(), j(this, e, ih, rh, U, { tabId: 4, source: 5 }, F2);
    }
  },
  bu = zl;
N();
N();
N();
N();
var Bn = [
  { label: A("overlay_marketplace__tab_text_all"), key: "all" },
  { label: A("overlay_marketplace__tab_text_add_from_tab"), key: "fromTab" },
  { label: A("overlay_marketplace__tab_text_add_custom_app"), key: "addApp" },
];
function sh(o) {
  Z(
    o,
    "svelte-1mzo980",
    ".tabs.svelte-1mzo980{margin:12px 29px 0;display:flex;flex-direction:row;column-gap:20px}.tab.svelte-1mzo980{font-weight:600;font-size:14px;line-height:19px;padding:0 12px 7px;color:var(--popup-footer-color);border-bottom:2px solid transparent}.tab.active.svelte-1mzo980{border-bottom-color:var(--accent-color)}.tab.active.svelte-1mzo980,.tab.svelte-1mzo980:hover{color:var(--text-primary-color)}"
  );
}
function ku(o, e, n) {
  let t = o.slice();
  return (t[15] = e[n]), (t[17] = n), t;
}
function ah(o) {
  let e,
    n = o[15].label + "",
    t,
    l,
    r,
    i,
    s;
  function a() {
    return o[12](o[15], o[17]);
  }
  return {
    c() {
      (e = v("button")),
        (t = V(n)),
        (l = S()),
        c(e, "class", "tab svelte-1mzo980"),
        c(e, "data-testid", (r = o[15].testId)),
        ie(e, "active", o[17] === o[0]);
    },
    m(u, p) {
      w(u, e, p), f(e, t), f(e, l), i || ((s = X(e, "click", a)), (i = !0));
    },
    p(u, p) {
      (o = u),
        p & 8 && n !== (n = o[15].label + "") && ee(t, n),
        p & 8 && r !== (r = o[15].testId) && c(e, "data-testid", r),
        p & 1 && ie(e, "active", o[17] === o[0]);
    },
    i: L,
    o: L,
    d(u) {
      u && $(e), (i = !1), s();
    },
  };
}
function ch(o) {
  let e,
    n = o[15].label + "",
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p;
  function d() {
    return o[11](o[15], o[17]);
  }
  let m = o[2] && wu(o);
  return {
    c() {
      (e = v("button")),
        (t = V(n)),
        (i = S()),
        m && m.c(),
        (s = fe()),
        c(e, "class", "tab svelte-1mzo980"),
        c(e, "data-testid", (l = o[15].testId)),
        ie(e, "active", o[17] === o[0]);
    },
    m(g, b) {
      w(g, e, b),
        f(e, t),
        w(g, i, b),
        m && m.m(g, b),
        w(g, s, b),
        (a = !0),
        u || ((p = [gt((r = o[4].call(null, e))), X(e, "click", d)]), (u = !0));
    },
    p(g, b) {
      (o = g),
        (!a || b & 8) && n !== (n = o[15].label + "") && ee(t, n),
        (!a || (b & 8 && l !== (l = o[15].testId))) && c(e, "data-testid", l),
        (!a || b & 1) && ie(e, "active", o[17] === o[0]),
        o[2]
          ? m
            ? (m.p(o, b), b & 4 && _(m, 1))
            : ((m = wu(o)), m.c(), _(m, 1), m.m(s.parentNode, s))
          : m &&
            (Q(),
            h(m, 1, 1, () => {
              m = null;
            }),
            Y());
    },
    i(g) {
      a || (_(m), (a = !0));
    },
    o(g) {
      h(m), (a = !1);
    },
    d(g) {
      g && $(e), g && $(i), m && m.d(g), g && $(s), (u = !1), Se(p);
    },
  };
}
function wu(o) {
  let e, n;
  return (
    (e = new Ss({ props: { popperContent: o[5], currentStep: o[1] } })),
    e.$on("confirm", o[7]),
    e.$on("cancel", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.currentStep = t[1]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function $u(o) {
  let e,
    n,
    t,
    l,
    r = [ch, ah],
    i = [];
  function s(a, u) {
    return a[15].key === "addApp" ? 0 : 1;
  }
  return (
    (e = s(o, -1)),
    (n = i[e] = r[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(a, u) {
        i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, u) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? i[e].p(a, u)
            : (Q(),
              h(i[p], 1, 1, () => {
                i[p] = null;
              }),
              Y(),
              (n = i[e]),
              n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
              _(n, 1),
              n.m(t.parentNode, t));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        i[e].d(a), a && $(t);
      },
    }
  );
}
function uh(o) {
  let e,
    n,
    t = o[3],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = $u(ku(o, t, i));
  let r = (i) =>
    h(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v("div");
      for (let i = 0; i < l.length; i += 1) l[i].c();
      c(e, "class", "tabs svelte-1mzo980");
    },
    m(i, s) {
      w(i, e, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(e, null);
      n = !0;
    },
    p(i, [s]) {
      if (s & 943) {
        t = i[3];
        let a;
        for (a = 0; a < t.length; a += 1) {
          let u = ku(i, t, a);
          l[a]
            ? (l[a].p(u, s), _(l[a], 1))
            : ((l[a] = $u(u)), l[a].c(), _(l[a], 1), l[a].m(e, null));
        }
        for (Q(), a = t.length; a < l.length; a += 1) r(a);
        Y();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < t.length; s += 1) _(l[s]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1) h(l[s]);
      n = !1;
    },
    d(i) {
      i && $(e), Ae(l, i);
    },
  };
}
function ph(o, e, n) {
  let t,
    l,
    r,
    i,
    s = oe(),
    { activeTabIndex: a } = e,
    [u, p] = At(),
    d = q.stores.walkthrough;
  ve(o, d, (T) => n(10, (i = T)));
  let m = (T) => {
      switch (T.key) {
        case "all":
          return "from-all";
        case "fromTab":
          return "from-tab";
        case "addApp":
          return "from-custom";
        default:
          throw new Error(`incorrect tab key ${T.key}`);
      }
    },
    g = () => {
      l && q.actions.confirmWalkthrough(l);
    },
    b = () => {
      l && q.actions.sendAnalyticsEvent("walkthrough.skip-button-clicked", l),
        q.actions.switchWalkthrough(!1);
    },
    k = (T, P) => {
      s("click", P);
    },
    E = (T, P) => k(T, P),
    I = (T, P) => k(T, P);
  (o.$$set = (T) => {
    "activeTabIndex" in T && n(0, (a = T.activeTabIndex));
  }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1024) {
        e: n(1, (l = i?.currentStep ?? null));
      }
      if (o.$$.dirty & 2) {
        e: n(
          2,
          (r = l?.step === "customApps" && l?.context !== "appSaveModal")
        );
      }
    });
  e: n(
    3,
    (t = Bn.map((T) => ({ ...T, testId: `recipe-chooser-${m(T)}-button` })))
  );
  return [a, l, r, t, u, p, d, g, b, k, i, E, I];
}
var Bl = class extends H {
    constructor(e) {
      super(), j(this, e, ph, uh, U, { activeTabIndex: 0 }, sh);
    }
  },
  yu = Bl;
N();
function fh(o) {
  Z(
    o,
    "svelte-1dr3x2s",
    ".recipe-header.svelte-1dr3x2s{display:flex;align-items:center;justify-content:space-between;margin-left:29px}.recipe-title.svelte-1dr3x2s{font-weight:500;line-height:24px;font-size:18px;margin-top:20px;color:var(--inverted-text-color)}.shortcut.svelte-1dr3x2s{color:#808080;display:flex;align-self:flex-start;align-items:center;line-height:10px;margin:9px 9px 0 0}.shortcut.svelte-1dr3x2s:hover{color:var(--inverted-text-color)}"
  );
}
function dh(o) {
  let e, n, t, l, r, i, s, a;
  return (
    (r = new qe({ props: { width: "14", height: "14" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (n.textContent = `${A("overlay_marketplace__header_title")}`),
          (t = S()),
          (l = v("button")),
          y(r.$$.fragment),
          c(n, "class", "recipe-title svelte-1dr3x2s"),
          c(l, "class", "shortcut svelte-1dr3x2s"),
          c(l, "data-testid", "recipe-chooser-close-button"),
          c(e, "class", "recipe-header svelte-1dr3x2s");
      },
      m(u, p) {
        w(u, e, p),
          f(e, n),
          f(e, t),
          f(e, l),
          C(r, l, null),
          (i = !0),
          s || ((a = X(l, "click", o[0])), (s = !0));
      },
      p: L,
      i(u) {
        i || (_(r.$$.fragment, u), (i = !0));
      },
      o(u) {
        h(r.$$.fragment, u), (i = !1);
      },
      d(u) {
        u && $(e), x(r), (s = !1), a();
      },
    }
  );
}
function mh(o) {
  function e(n) {
    ue.call(this, o, n);
  }
  return [e];
}
var Nl = class extends H {
    constructor(e) {
      super(), j(this, e, mh, dh, U, {}, fh);
    }
  },
  Cu = Nl;
N();
N();
N();
function _h(o) {
  Z(
    o,
    "svelte-23j3ou",
    ".separator.svelte-23j3ou{margin-bottom:10px}.app-form-inputs.svelte-23j3ou .app-form-input{padding:6px}.app-form-inputs.svelte-23j3ou .app-form-input:hover{border-color:var(--marketplace-input-border-hover)}.app-form-inputs.svelte-23j3ou .app-form-input:focus-within{border-color:var(--marketplace-input-border-focus)}.app-form-inputs.svelte-23j3ou .app-form-input:not(.error):focus-within{background-color:var(--input-with-submit-background)}"
  );
}
function gh(o) {
  let e = A("overlay_marketplace__add_app_url_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function hh(o) {
  let e = A("overlay_marketplace__add_app_name_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function vh(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a = {
      placeholder: A("overlay_marketplace__add_app_url_placeholder"),
      inputClassName: "app-form-input",
      inputError: o[4],
      value: o[0],
      dataTestId: "recipe-chooser-custom-app-url-input",
      $$slots: { default: [gh] },
      $$scope: { ctx: o },
    };
  (n = new io({ props: a })),
    o[9](n),
    n.$on("blur", o[10]),
    n.$on("paste", o[6]);
  let u = {
    placeholder: A("overlay_marketplace__add_app_name_placeholder"),
    inputClassName: "app-form-input",
    inputError: o[5],
    value: o[1],
    dataTestId: "recipe-chooser-custom-app-name-input",
    $$slots: { default: [hh] },
    $$scope: { ctx: o },
  };
  return (
    (i = new io({ props: u })),
    o[11](i),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("div")),
          (r = S()),
          y(i.$$.fragment),
          c(l, "class", "separator svelte-23j3ou"),
          c(e, "class", "app-form-inputs svelte-23j3ou");
      },
      m(p, d) {
        w(p, e, d),
          C(n, e, null),
          f(e, t),
          f(e, l),
          f(e, r),
          C(i, e, null),
          (s = !0);
      },
      p(p, [d]) {
        let m = {};
        d & 1 && (m.value = p[0]),
          d & 65536 && (m.$$scope = { dirty: d, ctx: p }),
          n.$set(m);
        let g = {};
        d & 2 && (g.value = p[1]),
          d & 65536 && (g.$$scope = { dirty: d, ctx: p }),
          i.$set(g);
      },
      i(p) {
        s || (_(n.$$.fragment, p), _(i.$$.fragment, p), (s = !0));
      },
      o(p) {
        h(n.$$.fragment, p), h(i.$$.fragment, p), (s = !1);
      },
      d(p) {
        p && $(e), o[9](null), x(n), o[11](null), x(i);
      },
    }
  );
}
function bh(o, e, n) {
  let t,
    l = L,
    r = () => (l(), (l = kt(d, (z) => n(12, (t = z)))), d),
    i,
    s,
    a,
    u = L,
    p = () => (u(), (u = kt(m, (z) => n(15, (a = z)))), m);
  o.$$.on_destroy.push(() => l()), o.$$.on_destroy.push(() => u());
  let { appUrl: d } = e;
  r();
  let { appName: m } = e;
  p();
  let g,
    b,
    k = it(!1);
  ve(o, k, (z) => n(14, (s = z)));
  let E = it(!1);
  ve(o, E, (z) => n(13, (i = z)));
  let I = () => g.focus(),
    T = () => {
      let z = a.trim();
      tt(E, (i = !z.length), i), tt(m, (a = z), a);
      let G = t.trim();
      return (
        tt(k, (s = !G || !Ot(G)), s),
        tt(d, (t = ji(G)), t),
        s ? g.focus() : i && b.focus(),
        s || i
      );
    },
    P = (z) => {
      let G = z.clipboardData?.getData("Text") ?? "";
      tt(d, (t = yn(G)), t), z.stopPropagation(), z.preventDefault();
    };
  function M(z) {
    we[z ? "unshift" : "push"](() => {
      (g = z), n(2, g);
    });
  }
  function B(z) {
    ue.call(this, o, z);
  }
  function O(z) {
    we[z ? "unshift" : "push"](() => {
      (b = z), n(3, b);
    });
  }
  return (
    (o.$$set = (z) => {
      "appUrl" in z && r(n(0, (d = z.appUrl))),
        "appName" in z && p(n(1, (m = z.appName)));
    }),
    [d, m, g, b, k, E, P, I, T, M, B, O]
  );
}
var ql = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          bh,
          vh,
          U,
          { appUrl: 0, appName: 1, focusUrlInput: 7, validate: 8 },
          _h
        );
    }
    get focusUrlInput() {
      return this.$$.ctx[7];
    }
    get validate() {
      return this.$$.ctx[8];
    }
  },
  xu = ql;
N();
function kh(o) {
  Z(
    o,
    "svelte-1ad00m9",
    ".picker.svelte-1ad00m9.svelte-1ad00m9{background-color:var(--dropdown-button-background);border-radius:4px;max-width:120px;width:100%;min-width:100px;padding:5px;height:100px;min-height:100px;margin-right:12px;position:relative;text-align:center}.picker.svelte-1ad00m9 .clear-button.svelte-1ad00m9{--size:25px;--offset:-5px;position:absolute;top:var(--offset);right:var(--offset);width:var(--size);height:var(--size)}.picker.svelte-1ad00m9.svelte-1ad00m9:hover{background-color:var(--dropdown-button-background-hover)}.icon.svelte-1ad00m9.svelte-1ad00m9{display:flex;width:100%;height:100%;cursor:pointer;justify-content:center}.icon.svelte-1ad00m9 img.svelte-1ad00m9{width:100%;height:100%;object-fit:contain}.icon.svelte-1ad00m9.svelte-1ad00m9:hover::before{opacity:1}.no-icon.svelte-1ad00m9.svelte-1ad00m9{display:flex;flex-direction:column;justify-content:center;flex-grow:1;height:100%;align-items:center;color:var(--text-primary-color)}.plus-icon.svelte-1ad00m9.svelte-1ad00m9{margin-top:20px;margin-bottom:20px}"
  );
}
function wh(o) {
  let e, n, t, l, r;
  return {
    c() {
      (e = v("img")),
        Je(e.src, (n = o[3])) || c(e, "src", n),
        c(e, "alt", (t = o[1].name)),
        c(e, "class", "svelte-1ad00m9");
    },
    m(i, s) {
      w(i, e, s), l || ((r = X(e, "error", o[7])), (l = !0));
    },
    p(i, s) {
      s & 8 && !Je(e.src, (n = i[3])) && c(e, "src", n),
        s & 2 && t !== (t = i[1].name) && c(e, "alt", t);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), (l = !1), r();
    },
  };
}
function $h(o) {
  let e, n, t, l, r, i;
  return (
    (t = new Et({ props: { width: "23", height: "23" } })),
    {
      c() {
        (e = v("div")),
          (n = v("span")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          (r.textContent = `${A("overlay_marketplace__add_app_custom_icon")}`),
          c(n, "class", "plus-icon svelte-1ad00m9"),
          c(e, "class", "no-icon svelte-1ad00m9");
      },
      m(s, a) {
        w(s, e, a), f(e, n), C(t, n, null), f(e, l), f(e, r), (i = !0);
      },
      p: L,
      i(s) {
        i || (_(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        h(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && $(e), x(t);
      },
    }
  );
}
function Su(o) {
  let e, n, t, l, r;
  return (
    (n = new Es({})),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          c(e, "class", "clear-button svelte-1ad00m9");
      },
      m(i, s) {
        w(i, e, s),
          C(n, e, null),
          (t = !0),
          l || ((r = X(e, "click", o[6])), (l = !0));
      },
      p: L,
      i(i) {
        t || (_(n.$$.fragment, i), (t = !0));
      },
      o(i) {
        h(n.$$.fragment, i), (t = !1);
      },
      d(i) {
        i && $(e), x(n), (l = !1), r();
      },
    }
  );
}
function yh(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u = [$h, wh],
    p = [];
  function d(b, k) {
    return b[1].url ? (b[1].url ? 1 : -1) : 0;
  }
  ~(t = d(o, -1)) && (l = p[t] = u[t](o));
  let m = { dataTestId: "recipe-chooser-custom-app-icon-input" };
  (i = new As({ props: m })), o[9](i), i.$on("change", o[5]);
  let g = o[4] && Su(o);
  return {
    c() {
      (e = v("div")),
        (n = v("label")),
        l && l.c(),
        (r = S()),
        y(i.$$.fragment),
        (s = S()),
        g && g.c(),
        c(n, "class", "icon svelte-1ad00m9"),
        c(e, "class", "picker svelte-1ad00m9");
    },
    m(b, k) {
      w(b, e, k),
        f(e, n),
        ~t && p[t].m(n, null),
        f(n, r),
        C(i, n, null),
        f(e, s),
        g && g.m(e, null),
        (a = !0);
    },
    p(b, [k]) {
      let E = t;
      (t = d(b, k)),
        t === E
          ? ~t && p[t].p(b, k)
          : (l &&
              (Q(),
              h(p[E], 1, 1, () => {
                p[E] = null;
              }),
              Y()),
            ~t
              ? ((l = p[t]),
                l ? l.p(b, k) : ((l = p[t] = u[t](b)), l.c()),
                _(l, 1),
                l.m(n, r))
              : (l = null));
      let I = {};
      i.$set(I),
        b[4]
          ? g
            ? (g.p(b, k), k & 16 && _(g, 1))
            : ((g = Su(b)), g.c(), _(g, 1), g.m(e, null))
          : g &&
            (Q(),
            h(g, 1, 1, () => {
              g = null;
            }),
            Y());
    },
    i(b) {
      a || (_(l), _(i.$$.fragment, b), _(g), (a = !0));
    },
    o(b) {
      h(l), h(i.$$.fragment, b), h(g), (a = !1);
    },
    d(b) {
      b && $(e), ~t && p[t].d(), o[9](null), x(i), g && g.d();
    },
  };
}
function Ch(o, e, n) {
  let t,
    l,
    r,
    i = L,
    s = () => (i(), (i = kt(u, (E) => n(1, (r = E)))), u);
  o.$$.on_destroy.push(() => i());
  let a = oe(),
    { iconData: u } = e;
  s();
  let { appUrl: p } = e,
    d,
    m = (E) => {
      let I = E.target,
        [T] = I.files;
      if (!T) return;
      let P = URL.createObjectURL(T);
      tt(u, (r = { url: P, file: T, name: T.name, isCustom: !0 }), r);
    },
    g = () => {
      d.resetState(),
        tt(u, (r = { url: "", name: "", isCustom: !1 }), r),
        a("clear");
    },
    b = () => {
      let E = Ui(p);
      n(3, (l = Oi(E) ?? ""));
    };
  function k(E) {
    we[E ? "unshift" : "push"](() => {
      (d = E), n(2, d);
    });
  }
  return (
    (o.$$set = (E) => {
      "iconData" in E && s(n(0, (u = E.iconData))),
        "appUrl" in E && n(8, (p = E.appUrl));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2) {
        e: n(4, (t = r.isCustom));
      }
      if (o.$$.dirty & 2) {
        e: n(3, (l = r.url));
      }
    }),
    [u, r, d, l, t, m, g, b, p, k]
  );
}
var Dl = class extends H {
    constructor(e) {
      super(), j(this, e, Ch, yh, U, { iconData: 0, appUrl: 8 }, kh);
    }
  },
  Au = Dl;
function xh(o) {
  Z(
    o,
    "svelte-4zs9jx",
    ".not-found-text.svelte-4zs9jx{white-space:pre-wrap;font-size:16px;line-height:21px;max-width:450px;text-align:center;margin:32px auto 21px;color:var(--text-primary-color)}.wrapper.svelte-4zs9jx{background:var(--popup-section-content-background-color);border-radius:6px;padding:15px 22px 25px}.header.svelte-4zs9jx{color:var(--text-primary-color);font-weight:600;font-size:14px;line-height:19px;margin-bottom:20px;display:flex}.row.svelte-4zs9jx{display:flex}.col.svelte-4zs9jx{display:flex;flex-direction:column;flex-grow:1;margin-left:9px}.form.svelte-4zs9jx{display:contents}.button.svelte-4zs9jx{width:auto;font-weight:normal;margin-top:15px}"
  );
}
function Eu(o) {
  let e;
  return {
    c() {
      (e = v("div")), c(e, "class", "not-found-text svelte-4zs9jx");
    },
    m(n, t) {
      w(n, e, t), (e.innerHTML = o[0]);
    },
    p(n, t) {
      t & 1 && (e.innerHTML = n[0]);
    },
    d(n) {
      n && $(e);
    },
  };
}
function Sh(o) {
  let e = A("overlay_marketplace__add_app_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Ah(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I = o[0] && Eu(o);
  (i = new Au({ props: { iconData: o[6], appUrl: o[2] } })),
    i.$on("clear", o[8]);
  let T = { appName: o[4], appUrl: o[5] };
  return (
    (p = new xu({ props: T })),
    o[10](p),
    p.$on("blur", o[8]),
    (g = new pe({
      props: {
        type: "submit",
        dataTestId: "recipe-chooser-custom-app-add-button",
        $$slots: { default: [Sh] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I && I.c(),
          (e = S()),
          (n = v("div")),
          (t = v("span")),
          (t.textContent = `${A("overlay_marketplace__add_app_custom_title")}`),
          (l = S()),
          (r = v("div")),
          y(i.$$.fragment),
          (s = S()),
          (a = v("div")),
          (u = v("form")),
          y(p.$$.fragment),
          (d = S()),
          (m = v("div")),
          y(g.$$.fragment),
          c(t, "class", "header svelte-4zs9jx"),
          c(m, "class", "button svelte-4zs9jx"),
          c(u, "class", "form svelte-4zs9jx"),
          c(a, "class", "col svelte-4zs9jx"),
          c(r, "class", "row svelte-4zs9jx"),
          c(n, "class", "wrapper svelte-4zs9jx"),
          c(n, "data-testid", "recipe-chooser-custom-app-form");
      },
      m(P, M) {
        I && I.m(P, M),
          w(P, e, M),
          w(P, n, M),
          f(n, t),
          f(n, l),
          f(n, r),
          C(i, r, null),
          f(r, s),
          f(r, a),
          f(a, u),
          C(p, u, null),
          f(u, d),
          f(u, m),
          C(g, m, null),
          (b = !0),
          k || ((E = X(u, "submit", wt(o[7]))), (k = !0));
      },
      p(P, [M]) {
        P[0]
          ? I
            ? I.p(P, M)
            : ((I = Eu(P)), I.c(), I.m(e.parentNode, e))
          : I && (I.d(1), (I = null));
        let B = {};
        M & 4 && (B.appUrl = P[2]), i.$set(B);
        let O = {};
        p.$set(O);
        let z = {};
        M & 131072 && (z.$$scope = { dirty: M, ctx: P }), g.$set(z);
      },
      i(P) {
        b ||
          (_(i.$$.fragment, P),
          _(p.$$.fragment, P),
          _(g.$$.fragment, P),
          (b = !0));
      },
      o(P) {
        h(i.$$.fragment, P), h(p.$$.fragment, P), h(g.$$.fragment, P), (b = !1);
      },
      d(P) {
        I && I.d(P),
          P && $(e),
          P && $(n),
          x(i),
          o[10](null),
          x(p),
          x(g),
          (k = !1),
          E();
      },
    }
  );
}
function Eh(o, e, n) {
  let t,
    l,
    r,
    i,
    s = oe(),
    a = q.stores.marketplaceModal;
  ve(o, a, (M) => n(12, (l = M)));
  let { notFoundText: u = null } = e,
    { onMountFocus: p = !1 } = e,
    d = it("");
  ve(o, d, (M) => n(13, (i = M)));
  let m = it("");
  ve(o, m, (M) => n(2, (r = M)));
  let g = it({ url: "", name: "", isCustom: !1 });
  ve(o, g, (M) => n(11, (t = M)));
  let b,
    k = (M) =>
      new Promise((B, O) => {
        let z = new FileReader();
        z.readAsDataURL(M),
          (z.onload = () => B(z.result)),
          (z.onerror = (G) => O(G));
      }),
    E = async () => {
      let { name: M, url: B, isCustom: O } = t;
      return O
        ? { src: await k(t.file), name: M || void 0 }
        : { src: B || `${r}/favicon.ico`, name: M || void 0 };
    },
    I = async () => {
      if (b.validate()) return;
      let B = {
        source: "marketplace.app-selected",
        recipeId: xt.id,
        name: i,
        url: r,
        icon: await E(),
      };
      q.actions.sendAnalyticsEvent("marketplace.app-selected", {
        "app.is-custom": !0,
        "app.recipe-id": B.recipeId,
      }),
        q.actions.showAddApplicationModal(B),
        s("success"),
        s("close");
    },
    T = () => {
      if (t.isCustom) return;
      let M = r;
      if (!M || !Ot(M)) return;
      let O = t.url.trim(),
        z =
          M && l?.endpoint
            ? `${l.endpoint}/desktop/sites/favicon/?url=${_n(M)}`
            : "";
      O !== z && tt(g, (t = { url: z, name: "", isCustom: !1 }), t);
    };
  ye(() => {
    p && b.focusUrlInput();
  });
  function P(M) {
    we[M ? "unshift" : "push"](() => {
      (b = M), n(1, b);
    });
  }
  return (
    (o.$$set = (M) => {
      "notFoundText" in M && n(0, (u = M.notFoundText)),
        "onMountFocus" in M && n(9, (p = M.onMountFocus));
    }),
    [u, b, r, a, d, m, g, I, T, p, P]
  );
}
var Ll = class extends H {
    constructor(e) {
      super(), j(this, e, Eh, Ah, U, { notFoundText: 0, onMountFocus: 9 }, xh);
    }
  },
  Xt = Ll;
N();
N();
function Ih(o) {
  Z(
    o,
    "svelte-7hwmj",
    ".recipe-preview-placeholder.svelte-7hwmj{--app-item-icon-bg-size:72px;--app-item-icon-border-radius:18px;--app-item-icon-size:40px;--app-icon-size:var(--app-item-icon-size);cursor:pointer;background:var(--service-in-recipe-chooser-background-color);border-radius:var(--app-item-icon-border-radius);width:var(--app-item-icon-bg-size);height:var(--app-item-icon-bg-size);display:flex;justify-content:center;align-items:center}.recipe-preview-name.svelte-7hwmj{margin:0.5rem 0 0;color:var(--marketplace-app-title-text);font-size:11px;line-height:15px;font-weight:400;overflow:hidden;max-width:100%;display:block;text-overflow:ellipsis;min-height:28px;text-align:center}@media(max-width: 1600px){.recipe-preview-placeholder.svelte-7hwmj{--app-item-icon-bg-size:64px;--app-item-icon-border-radius:16px}}@media(max-width: 1024px){.recipe-preview-placeholder.svelte-7hwmj{--app-item-icon-bg-size:56px;--app-item-icon-border-radius:14px}}@media(max-width: 768px){.recipe-preview-placeholder.svelte-7hwmj{--app-item-icon-bg-size:48px;--app-item-icon-border-radius:12px}}"
  );
}
function Th(o) {
  let e,
    n,
    t,
    l,
    r = o[0].name + "",
    i,
    s,
    a,
    u;
  return (
    (n = new ht({
      props: { favIconUrl: o[0].firstIconToShow, alt: o[0].name },
    })),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("div")),
          (i = V(r)),
          c(e, "class", "recipe-preview-placeholder svelte-7hwmj"),
          c(l, "class", "recipe-preview-name svelte-7hwmj");
      },
      m(p, d) {
        w(p, e, d),
          C(n, e, null),
          w(p, t, d),
          w(p, l, d),
          f(l, i),
          (s = !0),
          a || ((u = [X(e, "click", o[2]), X(l, "click", o[1])]), (a = !0));
      },
      p(p, [d]) {
        let m = {};
        d & 1 && (m.favIconUrl = p[0].firstIconToShow),
          d & 1 && (m.alt = p[0].name),
          n.$set(m),
          (!s || d & 1) && r !== (r = p[0].name + "") && ee(i, r);
      },
      i(p) {
        s || (_(n.$$.fragment, p), (s = !0));
      },
      o(p) {
        h(n.$$.fragment, p), (s = !1);
      },
      d(p) {
        p && $(e), x(n), p && $(t), p && $(l), (a = !1), Se(u);
      },
    }
  );
}
function Mh(o, e, n) {
  let { recipe: t } = e;
  function l(i) {
    ue.call(this, o, i);
  }
  function r(i) {
    ue.call(this, o, i);
  }
  return (
    (o.$$set = (i) => {
      "recipe" in i && n(0, (t = i.recipe));
    }),
    [t, l, r]
  );
}
var jl = class extends H {
    constructor(e) {
      super(), j(this, e, Mh, Th, U, { recipe: 0 }, Ih);
    }
  },
  Iu = jl;
function Ph(o) {
  Z(
    o,
    "svelte-gzoayq",
    ".recipes-list.svelte-gzoayq{--app-launch-list-size:72px;--app-item-gap:21px;list-style:none;margin:0.5rem 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fill, var(--app-launch-list-size));column-gap:var(--app-item-gap);row-gap:calc(var(--app-item-gap) / 4);justify-content:space-between}.recipes-section-name.svelte-gzoayq{font-size:14px;font-weight:600;letter-spacing:0.02em;color:var(--text-primary-color);margin:0 8px 12px}.recipe-preview.svelte-gzoayq{display:flex;justify-content:flex-start;flex-direction:column;align-items:center;cursor:pointer}@media(max-width: 1600px){.recipes-list.svelte-gzoayq{--app-launch-list-size:64px;--app-item-gap:21px}}@media(max-width: 1024px){.recipes-list.svelte-gzoayq{--app-launch-list-size:56px;--app-item-gap:21px}}@media(max-width: 768px){.recipes-list.svelte-gzoayq{--app-launch-list-size:48px;--app-item-gap:21px}}"
  );
}
function Tu(o, e, n) {
  let t = o.slice();
  return (t[4] = e[n]), t;
}
function Mu(o, e) {
  let n, t, l, r, i;
  function s() {
    return e[3](e[4]);
  }
  return (
    (t = new Iu({ props: { recipe: e[4] } })),
    t.$on("click", s),
    {
      key: o,
      first: null,
      c() {
        (n = v("li")),
          y(t.$$.fragment),
          (l = S()),
          c(n, "class", "recipe-preview svelte-gzoayq"),
          c(n, "data-testid", (r = "recipe-chooser-from-all-item-" + e[4].id)),
          (this.first = n);
      },
      m(a, u) {
        w(a, n, u), C(t, n, null), f(n, l), (i = !0);
      },
      p(a, u) {
        e = a;
        let p = {};
        u & 2 && (p.recipe = e[4]),
          t.$set(p),
          (!i ||
            (u & 2 && r !== (r = "recipe-chooser-from-all-item-" + e[4].id))) &&
            c(n, "data-testid", r);
      },
      i(a) {
        i || (_(t.$$.fragment, a), (i = !0));
      },
      o(a) {
        h(t.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && $(n), x(t);
      },
    }
  );
}
function zh(o) {
  let e,
    n,
    t,
    l,
    r = [],
    i = new Map(),
    s,
    a = o[1],
    u = (p) => p[4].id;
  for (let p = 0; p < a.length; p += 1) {
    let d = Tu(o, a, p),
      m = u(d);
    i.set(m, (r[p] = Mu(m, d)));
  }
  return {
    c() {
      (e = v("h2")), (n = V(o[0])), (t = S()), (l = v("ul"));
      for (let p = 0; p < r.length; p += 1) r[p].c();
      c(e, "class", "recipes-section-name svelte-gzoayq"),
        c(l, "class", "recipes-list svelte-gzoayq");
    },
    m(p, d) {
      w(p, e, d), f(e, n), w(p, t, d), w(p, l, d);
      for (let m = 0; m < r.length; m += 1) r[m] && r[m].m(l, null);
      s = !0;
    },
    p(p, [d]) {
      (!s || d & 1) && ee(n, p[0]),
        d & 6 &&
          ((a = p[1]),
          Q(),
          (r = ut(r, d, u, 1, p, a, i, l, ct, Mu, null, Tu)),
          Y());
    },
    i(p) {
      if (!s) {
        for (let d = 0; d < a.length; d += 1) _(r[d]);
        s = !0;
      }
    },
    o(p) {
      for (let d = 0; d < r.length; d += 1) h(r[d]);
      s = !1;
    },
    d(p) {
      p && $(e), p && $(t), p && $(l);
      for (let d = 0; d < r.length; d += 1) r[d].d();
    },
  };
}
function Bh(o, e, n) {
  let t = oe(),
    { header: l = "" } = e,
    { recipes: r = [] } = e,
    i = (s) => t("click", s.id);
  return (
    (o.$$set = (s) => {
      "header" in s && n(0, (l = s.header)),
        "recipes" in s && n(1, (r = s.recipes));
    }),
    [l, r, t, i]
  );
}
var Hl = class extends H {
    constructor(e) {
      super(), j(this, e, Bh, zh, U, { header: 0, recipes: 1 }, Ph);
    }
  },
  Vl = Hl;
N();
var Nn = (o, e) => {
  let n = typeof o == "string" ? Ki(o) : o;
  return new RegExp(n, e);
};
function Nh(o) {
  Z(
    o,
    "svelte-78po2o",
    ".recipes-recommended-block.svelte-78po2o{margin-bottom:1rem}"
  );
}
function Pu(o) {
  let e, n, t;
  return (
    (n = new Vl({
      props: {
        header: A("overlay_marketplace__recipes_list_title"),
        recipes: o[1],
      },
    })),
    n.$on("click", o[8]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "recipes-recommended-block svelte-78po2o");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r & 2 && (i.recipes = l[1]), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function qh(o) {
  let e, n;
  return (
    (e = new Vl({ props: { header: o[2], recipes: o[0] } })),
    e.$on("click", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4 && (r.header = t[2]), l & 1 && (r.recipes = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Dh(o) {
  let e, n, t, l;
  return (
    (t = new Xt({ props: { notFoundText: o[7] } })),
    t.$on("close", o[13]),
    {
      c() {
        (e = v("p")),
          (n = S()),
          y(t.$$.fragment),
          c(e, "class", "recipes-not-found-text");
      },
      m(r, i) {
        w(r, e, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p: L,
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(e), r && $(n), x(t, r);
      },
    }
  );
}
function Lh(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[5] && Pu(o),
    s = [Dh, qh],
    a = [];
  function u(p, d) {
    return p[4] ? 0 : p[3] ? 1 : -1;
  }
  return (
    ~(n = u(o, -1)) && (t = a[n] = s[n](o)),
    {
      c() {
        i && i.c(), (e = S()), t && t.c(), (l = fe());
      },
      m(p, d) {
        i && i.m(p, d), w(p, e, d), ~n && a[n].m(p, d), w(p, l, d), (r = !0);
      },
      p(p, [d]) {
        p[5]
          ? i
            ? (i.p(p, d), d & 32 && _(i, 1))
            : ((i = Pu(p)), i.c(), _(i, 1), i.m(e.parentNode, e))
          : i &&
            (Q(),
            h(i, 1, 1, () => {
              i = null;
            }),
            Y());
        let m = n;
        (n = u(p, d)),
          n === m
            ? ~n && a[n].p(p, d)
            : (t &&
                (Q(),
                h(a[m], 1, 1, () => {
                  a[m] = null;
                }),
                Y()),
              ~n
                ? ((t = a[n]),
                  t ? t.p(p, d) : ((t = a[n] = s[n](p)), t.c()),
                  _(t, 1),
                  t.m(l.parentNode, l))
                : (t = null));
      },
      i(p) {
        r || (_(i), _(t), (r = !0));
      },
      o(p) {
        h(i), h(t), (r = !1);
      },
      d(p) {
        i && i.d(p), p && $(e), ~n && a[n].d(p), p && $(l);
      },
    }
  );
}
function Uh(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d = oe(),
    { isSearchActive: m = !1 } = e,
    { searchQuery: g = "" } = e,
    b = q.stores.marketplaceModal;
  ve(o, b, (T) => n(12, (p = T)));
  let k = A("overlay_marketplace__recipes_list_not_found_text"),
    E = (T) => {
      if (T.detail === xt.id) {
        d("customRecipeClick");
        return;
      }
      q.actions.sendAnalyticsEvent("marketplace.app-selected", {
        "app.is-custom": !1,
        "app.recipe-id": T.detail,
      }),
        q.actions.showAddApplicationModal({
          source: "marketplace.app-selected",
          recipeId: T.detail,
        });
    };
  function I(T) {
    ue.call(this, o, T);
  }
  return (
    (o.$$set = (T) => {
      "isSearchActive" in T && n(9, (m = T.isSearchActive)),
        "searchQuery" in T && n(10, (g = T.searchQuery));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 4096) {
        e: n(11, (t = p?.allRecipes ?? []));
      }
      if (o.$$.dirty & 4096) {
        e: n(1, (l = p?.popularRecipes ?? []));
      }
      if (o.$$.dirty & 514) {
        e: n(5, (r = !m && l.length > 0));
      }
      if (o.$$.dirty & 3584) {
        e: n(0, (i = m ? t.filter((T) => T.name.search(Nn(g, "i")) >= 0) : t));
      }
      if (o.$$.dirty & 1025) {
        e: i &&
          g.length > 0 &&
          q.actions.sendAnalyticsEvent("marketplace.search-used", void 0);
      }
      if (o.$$.dirty & 513) {
        e: n(4, (s = m && i.length === 0));
      }
      if (o.$$.dirty & 1) {
        e: n(3, (a = i.length > 0));
      }
      if (o.$$.dirty & 512) {
        e: n(
          2,
          (u = m
            ? A("overlay_marketplace__recipes_list_search_result")
            : A("overlay_marketplace__recipes_list_all"))
        );
      }
    }),
    [i, l, u, a, s, r, b, k, E, m, g, t, p, I]
  );
}
var Ol = class extends H {
    constructor(e) {
      super(),
        j(this, e, Uh, Lh, U, { isSearchActive: 9, searchQuery: 10 }, Nh);
    }
  },
  zu = Ol;
N();
function jh(o) {
  Z(
    o,
    "svelte-11e2yky",
    ".recipe-search-form.svelte-11e2yky{display:flex;align-items:center;background:var(--background-secondary);border-radius:4px;padding:12px 13px}.recipe-search-input.svelte-11e2yky{border:0;background:transparent;font-size:14px;line-height:20px;margin-left:9px;outline:none;flex-shrink:0;width:100%;padding-right:20px;color:var(--inverted-text-color)}"
  );
}
function Hh(o) {
  let e, n, t, l, r, i, s, a, u, p;
  return (
    (t = new It({ props: { width: "14", height: "14" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("input")),
          c(r, "data-testid", "recipe-chooser-search-input"),
          c(r, "class", "recipe-search-input svelte-11e2yky"),
          c(r, "type", "text"),
          c(r, "title", (i = A("overlay_marketplace__search_form_title"))),
          c(
            r,
            "placeholder",
            (s = A("overlay_marketplace__search_form_placeholder"))
          ),
          c(e, "class", "recipe-search-form svelte-11e2yky");
      },
      m(d, m) {
        w(d, e, m),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          o[4](r),
          Ne(r, o[0]),
          (a = !0),
          u || ((p = X(r, "input", o[5])), (u = !0));
      },
      p(d, [m]) {
        m & 1 && r.value !== d[0] && Ne(r, d[0]);
      },
      i(d) {
        a || (_(t.$$.fragment, d), (a = !0));
      },
      o(d) {
        h(t.$$.fragment, d), (a = !1);
      },
      d(d) {
        d && $(e), x(t), o[4](null), (u = !1), p();
      },
    }
  );
}
function Vh(o, e, n) {
  let t,
    { searchQuery: l } = e,
    { onMountFocus: r = !1 } = e,
    i = () => {
      t.focus();
    };
  ye(() => {
    r && i();
  });
  function s(u) {
    we[u ? "unshift" : "push"](() => {
      (t = u), n(1, t);
    });
  }
  function a() {
    (l = this.value), n(0, l);
  }
  return (
    (o.$$set = (u) => {
      "searchQuery" in u && n(0, (l = u.searchQuery)),
        "onMountFocus" in u && n(2, (r = u.onMountFocus));
    }),
    [l, t, r, i, s, a]
  );
}
var Rl = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          Vh,
          Hh,
          U,
          { searchQuery: 0, onMountFocus: 2, focus: 3 },
          jh
        );
    }
    get focus() {
      return this.$$.ctx[3];
    }
  },
  Bu = Rl;
N();
N();
function Oh(o) {
  Z(
    o,
    "svelte-57hru5",
    ".icon.svelte-57hru5.svelte-57hru5{--app-icon-size:16px;width:16px;height:16px;margin-right:9px}.text.svelte-57hru5.svelte-57hru5{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.tab-item-left.svelte-57hru5.svelte-57hru5{font-size:13px;line-height:16px;display:flex;flex-direction:row;color:var(--marketplace-fromtab-title-text);max-width:100%}.tab-item-right.svelte-57hru5.svelte-57hru5{font-weight:600;font-size:12px;line-height:16px;color:var(--accent-color);display:none;flex-shrink:0}.tab-item.svelte-57hru5.svelte-57hru5{align-items:center;display:flex;flex-direction:row;justify-content:space-between;border-radius:4px;cursor:pointer;padding:7px 9px;margin-bottom:2px}.tab-item.svelte-57hru5.svelte-57hru5:hover{background-color:var(--icon-bg-filled)}.tab-item.svelte-57hru5:hover .tab-item-right.svelte-57hru5{display:block}.tab-item.svelte-57hru5:hover .tab-item-left.svelte-57hru5{max-width:calc(100% - 150px)}"
  );
}
function Rh(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = o[0].title + "",
    a,
    u,
    p,
    d,
    m,
    g;
  return (
    (l = new ht({ props: { favIconUrl: o[0].favIconUrl || null } })),
    {
      c() {
        (e = v("li")),
          (n = v("div")),
          (t = v("div")),
          y(l.$$.fragment),
          (r = S()),
          (i = v("span")),
          (a = V(s)),
          (u = S()),
          (p = v("div")),
          (p.textContent = `${A("overlay_marketplace__tabs_list_add_as_app")}`),
          c(t, "class", "icon svelte-57hru5"),
          c(i, "class", "text svelte-57hru5"),
          c(n, "class", "tab-item-left svelte-57hru5"),
          c(p, "class", "tab-item-right svelte-57hru5"),
          c(e, "class", "tab-item svelte-57hru5"),
          c(e, "data-testid", "recipe-chooser-item-link");
      },
      m(b, k) {
        w(b, e, k),
          f(e, n),
          f(n, t),
          C(l, t, null),
          f(n, r),
          f(n, i),
          f(i, a),
          f(e, u),
          f(e, p),
          (d = !0),
          m || ((g = X(e, "click", o[1])), (m = !0));
      },
      p(b, [k]) {
        let E = {};
        k & 1 && (E.favIconUrl = b[0].favIconUrl || null),
          l.$set(E),
          (!d || k & 1) && s !== (s = b[0].title + "") && ee(a, s);
      },
      i(b) {
        d || (_(l.$$.fragment, b), (d = !0));
      },
      o(b) {
        h(l.$$.fragment, b), (d = !1);
      },
      d(b) {
        b && $(e), x(l), (m = !1), g();
      },
    }
  );
}
function Wh(o, e, n) {
  let { tab: t } = e;
  function l(r) {
    ue.call(this, o, r);
  }
  return (
    (o.$$set = (r) => {
      "tab" in r && n(0, (t = r.tab));
    }),
    [t, l]
  );
}
var Wl = class extends H {
    constructor(e) {
      super(), j(this, e, Wh, Rh, U, { tab: 0 }, Oh);
    }
  },
  Nu = Wl;
function Gh(o) {
  Z(
    o,
    "svelte-1chete3",
    ".header.svelte-1chete3{font-size:14px;line-height:19px;font-weight:600;color:var(--text-primary-color)}.tabs-list.svelte-1chete3{list-style:none;overflow-x:hidden;overflow-y:auto}"
  );
}
function qu(o, e, n) {
  let t = o.slice();
  return (t[10] = e[n]), t;
}
function Fh(o) {
  let e, n;
  return (
    (e = new Xt({ props: { notFoundText: o[2] } })),
    e.$on("close", o[9]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Zh(o) {
  let e,
    n,
    t,
    l = [],
    r = new Map(),
    i,
    s = o[0],
    a = (u) => u[10].id;
  for (let u = 0; u < s.length; u += 1) {
    let p = qu(o, s, u),
      d = a(p);
    r.set(d, (l[u] = Du(d, p)));
  }
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A("overlay_marketplace__tabs_list_title")}`),
        (n = S()),
        (t = v("ul"));
      for (let u = 0; u < l.length; u += 1) l[u].c();
      c(e, "class", "header svelte-1chete3"),
        c(t, "class", "tabs-list svelte-1chete3");
    },
    m(u, p) {
      w(u, e, p), w(u, n, p), w(u, t, p);
      for (let d = 0; d < l.length; d += 1) l[d] && l[d].m(t, null);
      i = !0;
    },
    p(u, p) {
      p & 9 &&
        ((s = u[0]),
        Q(),
        (l = ut(l, p, a, 1, u, s, r, t, ct, Du, null, qu)),
        Y());
    },
    i(u) {
      if (!i) {
        for (let p = 0; p < s.length; p += 1) _(l[p]);
        i = !0;
      }
    },
    o(u) {
      for (let p = 0; p < l.length; p += 1) h(l[p]);
      i = !1;
    },
    d(u) {
      u && $(e), u && $(n), u && $(t);
      for (let p = 0; p < l.length; p += 1) l[p].d();
    },
  };
}
function Du(o, e) {
  let n, t, l;
  function r() {
    return e[8](e[10]);
  }
  return (
    (t = new Nu({ props: { tab: e[10] } })),
    t.$on("click", r),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), y(t.$$.fragment), (this.first = n);
      },
      m(i, s) {
        w(i, n, s), C(t, i, s), (l = !0);
      },
      p(i, s) {
        e = i;
        let a = {};
        s & 1 && (a.tab = e[10]), t.$set(a);
      },
      i(i) {
        l || (_(t.$$.fragment, i), (l = !0));
      },
      o(i) {
        h(t.$$.fragment, i), (l = !1);
      },
      d(i) {
        i && $(n), x(t, i);
      },
    }
  );
}
function Kh(o) {
  let e,
    n,
    t,
    l,
    r = [Zh, Fh],
    i = [];
  function s(a, u) {
    return a[0].length ? 0 : 1;
  }
  return (
    (e = s(o, -1)),
    (n = i[e] = r[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(a, u) {
        i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, [u]) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? i[e].p(a, u)
            : (Q(),
              h(i[p], 1, 1, () => {
                i[p] = null;
              }),
              Y(),
              (n = i[e]),
              n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
              _(n, 1),
              n.m(t.parentNode, t));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        i[e].d(a), a && $(t);
      },
    }
  );
}
function Qh(o, e, n) {
  let t,
    l,
    r,
    { isSearchActive: i = !1 } = e,
    { searchQuery: s = "" } = e,
    a = q.stores.marketplaceModalTabs;
  ve(o, a, (g) => n(7, (r = g)));
  let u = A("overlay_marketplace__tabs_list_not_found_text"),
    p = (g) => {
      pt(g.url, "Tab should be type of string to add tab as app handler");
      let b = {
        source: "marketplace.app-selected",
        recipeId: xt.id,
        name: g.title || "",
        url: g.url,
        icon: { src: g.favIconUrl || "", type: "svg", name: "ico" },
      };
      q.actions.sendAnalyticsEvent("marketplace.app-selected", {
        "app.is-custom": !0,
        "app.recipe-id": b.recipeId,
      }),
        q.actions.showAddApplicationModal(b);
    },
    d = (g) => p(g);
  function m(g) {
    ue.call(this, o, g);
  }
  return (
    (o.$$set = (g) => {
      "isSearchActive" in g && n(4, (i = g.isSearchActive)),
        "searchQuery" in g && n(5, (s = g.searchQuery));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 128) {
        e: n(6, (t = r ?? []));
      }
      if (o.$$.dirty & 112) {
        e: n(
          0,
          (l = i
            ? t.filter((g) => g.title && g.title.search(Nn(s, "i")) >= 0)
            : t)
        );
      }
    }),
    [l, a, u, p, i, s, t, r, d, m]
  );
}
var Gl = class extends H {
    constructor(e) {
      super(), j(this, e, Qh, Kh, U, { isSearchActive: 4, searchQuery: 5 }, Gh);
    }
  },
  Lu = Gl;
function Yh(o) {
  Z(
    o,
    "svelte-10m3rjp",
    ".add-app-content.svelte-10m3rjp{padding:25px 29px 26px}.recipe-search-form-wrap.svelte-10m3rjp{background-color:var(--popup-bg-color);position:sticky;top:0;left:16px;right:16px;padding:0 0 25px}.recipe-search-form-wrap.svelte-10m3rjp::before{background-color:var(--popup-bg-color);content:'';position:absolute;top:-16px;left:0;right:0;height:16px}.recipes-content.svelte-10m3rjp{padding:16px 29px 30px;flex:1 1 auto;overflow-y:scroll}.separator.svelte-10m3rjp{height:1px;width:100%;background:var(--marketplace-separator);flex-shrink:0}"
  );
}
function Jh(o) {
  let e, n, t, l, r, i, s, a, u;
  function p(k) {
    o[10](k);
  }
  let d = { onMountFocus: !0 };
  o[0] !== void 0 && (d.searchQuery = o[0]),
    (t = new Bu({ props: d })),
    o[9](t),
    we.push(() => Ye(t, "searchQuery", p));
  let m = [t3, e3],
    g = [];
  function b(k, E) {
    return k[4] === "all" ? 0 : 1;
  }
  return (
    (i = b(o, -1)),
    (s = g[i] = m[i](o)),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (r = S()),
          s.c(),
          c(n, "class", "recipe-search-form-wrap svelte-10m3rjp"),
          c(e, "class", "recipes-content svelte-10m3rjp"),
          c(
            e,
            "data-testid",
            (a =
              "recipe-chooser-section-" +
              (o[4] === "fromTab" ? "from-tab" : "from-all"))
          );
      },
      m(k, E) {
        w(k, e, E), f(e, n), C(t, n, null), f(e, r), g[i].m(e, null), (u = !0);
      },
      p(k, E) {
        let I = {};
        !l && E & 1 && ((l = !0), (I.searchQuery = k[0]), Qe(() => (l = !1))),
          t.$set(I);
        let T = i;
        (i = b(k, E)),
          i === T
            ? g[i].p(k, E)
            : (Q(),
              h(g[T], 1, 1, () => {
                g[T] = null;
              }),
              Y(),
              (s = g[i]),
              s ? s.p(k, E) : ((s = g[i] = m[i](k)), s.c()),
              _(s, 1),
              s.m(e, null)),
          (!u ||
            (E & 16 &&
              a !==
                (a =
                  "recipe-chooser-section-" +
                  (k[4] === "fromTab" ? "from-tab" : "from-all")))) &&
            c(e, "data-testid", a);
      },
      i(k) {
        u || (_(t.$$.fragment, k), _(s), (u = !0));
      },
      o(k) {
        h(t.$$.fragment, k), h(s), (u = !1);
      },
      d(k) {
        k && $(e), o[9](null), x(t), g[i].d();
      },
    }
  );
}
function Xh(o) {
  let e, n, t;
  return (
    (n = new Xt({ props: { onMountFocus: !0 } })),
    n.$on("close", o[7]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "add-app-content svelte-10m3rjp"),
          c(e, "data-testid", "recipe-chooser-section-from-custom");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p: L,
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function e3(o) {
  let e, n;
  return (
    (e = new Lu({ props: { searchQuery: o[0], isSearchActive: o[3] } })),
    e.$on("close", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.searchQuery = t[0]),
          l & 8 && (r.isSearchActive = t[3]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function t3(o) {
  let e, n;
  return (
    (e = new zu({ props: { searchQuery: o[0], isSearchActive: o[3] } })),
    e.$on("close", o[7]),
    e.$on("customRecipeClick", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.searchQuery = t[0]),
          l & 8 && (r.isSearchActive = t[3]),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function n3(o) {
  let e, n, t, l, r, i, s, a, u, p;
  (e = new Cu({})),
    e.$on("click", o[7]),
    (t = new yu({ props: { activeTabIndex: o[1] } })),
    t.$on("click", o[5]);
  let d = [Xh, Jh],
    m = [];
  function g(b, k) {
    return b[4] === "addApp" ? 0 : 1;
  }
  return (
    (s = g(o, -1)),
    (a = m[s] = d[s](o)),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          y(t.$$.fragment),
          (l = S()),
          (r = v("div")),
          (i = S()),
          a.c(),
          (u = fe()),
          c(r, "class", "separator svelte-10m3rjp");
      },
      m(b, k) {
        C(e, b, k),
          w(b, n, k),
          C(t, b, k),
          w(b, l, k),
          w(b, r, k),
          w(b, i, k),
          m[s].m(b, k),
          w(b, u, k),
          (p = !0);
      },
      p(b, k) {
        let E = {};
        k & 2 && (E.activeTabIndex = b[1]), t.$set(E);
        let I = s;
        (s = g(b, k)),
          s === I
            ? m[s].p(b, k)
            : (Q(),
              h(m[I], 1, 1, () => {
                m[I] = null;
              }),
              Y(),
              (a = m[s]),
              a ? a.p(b, k) : ((a = m[s] = d[s](b)), a.c()),
              _(a, 1),
              a.m(u.parentNode, u));
      },
      i(b) {
        p || (_(e.$$.fragment, b), _(t.$$.fragment, b), _(a), (p = !0));
      },
      o(b) {
        h(e.$$.fragment, b), h(t.$$.fragment, b), h(a), (p = !1);
      },
      d(b) {
        x(e, b),
          b && $(n),
          x(t, b),
          b && $(l),
          b && $(r),
          b && $(i),
          m[s].d(b),
          b && $(u);
      },
    }
  );
}
function o3(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: "var(--page-max-width)",
        maxHeight: "calc(100vh - 250px)",
        $$slots: { default: [n3] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 8223 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function l3(o) {
  let e, n;
  return (
    (e = new Ce({
      props: {
        dataTestId: "recipe-chooser-popup",
        isFixedOnTop: !0,
        $$slots: { default: [o3] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[11]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 8223 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var Uu = "";
function r3(o, e, n) {
  let t,
    l,
    r,
    { source: i } = e,
    s,
    a = Uu,
    u = oe(),
    p = (E) => {
      s && s.focus(), n(1, (t = E.detail)), n(0, (a = ""));
    },
    d = () => {
      n(1, (t = 2));
    },
    m = () => {
      u("close");
    };
  ye(
    () => (
      q.actions.sendAnalyticsEvent("marketplace.auto-opened", { source: i }),
      () =>
        q.actions.sendAnalyticsEvent("marketplace.auto-closed", { source: i })
    )
  );
  function g(E) {
    we[E ? "unshift" : "push"](() => {
      (s = E), n(2, s);
    });
  }
  function b(E) {
    (a = E), n(0, a);
  }
  function k(E) {
    ue.call(this, o, E);
  }
  (o.$$set = (E) => {
    "source" in E && n(8, (i = E.source));
  }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2) {
        e: n(4, (l = Bn[t]?.key));
      }
      if (o.$$.dirty & 1) {
        e: n(3, (r = a !== Uu));
      }
    });
  e: n(1, (t = 0));
  return [a, t, s, r, l, p, d, m, i, g, b, k];
}
var Fl = class extends H {
    constructor(e) {
      super(), j(this, e, r3, l3, U, { source: 8 }, Yh);
    }
  },
  ju = Fl;
N();
N();
N();
function i3(o) {
  Z(
    o,
    "svelte-115ioat",
    "ul.svelte-115ioat.svelte-115ioat{list-style-type:none}input.svelte-115ioat.svelte-115ioat{all:unset;font-size:14px;line-height:16px;height:38px;padding:0 0 0 32px;overflow:hidden}button.svelte-115ioat.svelte-115ioat{position:absolute;opacity:0;right:10px}.search-bar.svelte-115ioat.svelte-115ioat{flex:0 0 auto;position:relative;display:flex;align-items:center;border-radius:4px;margin:0 10px;background-color:var(--app-sharing-dialog-search-input-background)}.search-bar.has-query.svelte-115ioat.svelte-115ioat{background-color:rgb(26 140 255 / 0.16)}.search-bar.has-query.svelte-115ioat button.svelte-115ioat{opacity:1}.search-bar.has-query.svelte-115ioat input.svelte-115ioat{padding-right:32px}.search-bar.svelte-115ioat .search-icon-app-sharing{left:10px;position:absolute}.app-list.svelte-115ioat.svelte-115ioat{flex:1 1 auto;overflow-y:auto;padding:0 10px 12px}.app-list.svelte-115ioat h2.svelte-115ioat{font-size:13px;line-height:16px;margin-bottom:8px}.app-list.svelte-115ioat ul.svelte-115ioat{padding:0;margin-bottom:14px}.app-list.svelte-115ioat ul li.svelte-115ioat{--app-icon-size:24px;display:flex;align-items:center;height:38px;padding:0 7px;font-size:12px;line-height:19px;border-radius:4px;cursor:pointer;transition:background-color 100ms;margin-bottom:2px}.app-list.svelte-115ioat ul li.svelte-115ioat:hover,.app-list.svelte-115ioat ul li.is-active.svelte-115ioat{background-color:var(--app-sharing-dialog-selected-app-in-sidebar-background)}.app-name.svelte-115ioat.svelte-115ioat{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:inline-block;margin-left:10px}.not-found.svelte-115ioat.svelte-115ioat{display:flex;flex-direction:column;align-items:center;text-align:center;height:200px;justify-content:center}.not-found.svelte-115ioat h3.svelte-115ioat{margin-bottom:12px}"
  );
}
function Hu(o, e, n) {
  let t = o.slice();
  return (t[12] = e[n]), t;
}
function Vu(o, e, n) {
  let t = o.slice();
  return (t[12] = e[n]), t;
}
function Ou(o) {
  let e,
    n,
    t,
    l,
    r = o[3],
    i = [];
  for (let a = 0; a < r.length; a += 1) i[a] = Ru(Vu(o, r, a));
  let s = (a) =>
    h(i[a], 1, 1, () => {
      i[a] = null;
    });
  return {
    c() {
      (e = v("h2")),
        (e.textContent = `${A("overlay_share_app__sidebar_shared_title")}`),
        (n = S()),
        (t = v("ul"));
      for (let a = 0; a < i.length; a += 1) i[a].c();
      c(e, "class", "svelte-115ioat"), c(t, "class", "svelte-115ioat");
    },
    m(a, u) {
      w(a, e, u), w(a, n, u), w(a, t, u);
      for (let p = 0; p < i.length; p += 1) i[p] && i[p].m(t, null);
      l = !0;
    },
    p(a, u) {
      if (u & 25) {
        r = a[3];
        let p;
        for (p = 0; p < r.length; p += 1) {
          let d = Vu(a, r, p);
          i[p]
            ? (i[p].p(d, u), _(i[p], 1))
            : ((i[p] = Ru(d)), i[p].c(), _(i[p], 1), i[p].m(t, null));
        }
        for (Q(), p = r.length; p < i.length; p += 1) s(p);
        Y();
      }
    },
    i(a) {
      if (!l) {
        for (let u = 0; u < r.length; u += 1) _(i[u]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1) h(i[u]);
      l = !1;
    },
    d(a) {
      a && $(e), a && $(n), a && $(t), Ae(i, a);
    },
  };
}
function Ru(o) {
  let e,
    n,
    t,
    l,
    r = o[12].appName + "",
    i,
    s,
    a,
    u,
    p;
  n = new ht({ props: { favIconUrl: o[12].appIcon, alt: o[12].appName } });
  function d() {
    return o[9](o[12]);
  }
  return {
    c() {
      (e = v("li")),
        y(n.$$.fragment),
        (t = S()),
        (l = v("span")),
        (i = V(r)),
        (s = S()),
        c(l, "class", "app-name svelte-115ioat"),
        c(e, "class", "svelte-115ioat"),
        ie(e, "is-active", o[0] && o[0].id === o[12].id);
    },
    m(m, g) {
      w(m, e, g),
        C(n, e, null),
        f(e, t),
        f(e, l),
        f(l, i),
        f(e, s),
        (a = !0),
        u || ((p = X(e, "click", d)), (u = !0));
    },
    p(m, g) {
      o = m;
      let b = {};
      g & 8 && (b.favIconUrl = o[12].appIcon),
        g & 8 && (b.alt = o[12].appName),
        n.$set(b),
        (!a || g & 8) && r !== (r = o[12].appName + "") && ee(i, r),
        (!a || g & 9) && ie(e, "is-active", o[0] && o[0].id === o[12].id);
    },
    i(m) {
      a || (_(n.$$.fragment, m), (a = !0));
    },
    o(m) {
      h(n.$$.fragment, m), (a = !1);
    },
    d(m) {
      m && $(e), x(n), (u = !1), p();
    },
  };
}
function s3(o) {
  let e, n, t, l;
  return {
    c() {
      (e = v("div")),
        (n = v("h3")),
        (n.textContent = `${A("overlay_share_app__sidebar_not_found_title")}`),
        (t = S()),
        (l = v("p")),
        (l.textContent = `${A(
          "overlay_share_app__sidebar_not_found_description"
        )}`),
        c(n, "class", "svelte-115ioat"),
        c(e, "class", "not-found svelte-115ioat");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, t), f(e, l);
    },
    p: L,
    i: L,
    o: L,
    d(r) {
      r && $(e);
    },
  };
}
function a3(o) {
  let e,
    n,
    t = o[2],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = Wu(Hu(o, t, i));
  let r = (i) =>
    h(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v("ul");
      for (let i = 0; i < l.length; i += 1) l[i].c();
      c(e, "class", "svelte-115ioat");
    },
    m(i, s) {
      w(i, e, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(e, null);
      n = !0;
    },
    p(i, s) {
      if (s & 21) {
        t = i[2];
        let a;
        for (a = 0; a < t.length; a += 1) {
          let u = Hu(i, t, a);
          l[a]
            ? (l[a].p(u, s), _(l[a], 1))
            : ((l[a] = Wu(u)), l[a].c(), _(l[a], 1), l[a].m(e, null));
        }
        for (Q(), a = t.length; a < l.length; a += 1) r(a);
        Y();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < t.length; s += 1) _(l[s]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1) h(l[s]);
      n = !1;
    },
    d(i) {
      i && $(e), Ae(l, i);
    },
  };
}
function Wu(o) {
  let e,
    n,
    t,
    l,
    r = o[12].appName + "",
    i,
    s,
    a,
    u,
    p;
  n = new ht({ props: { favIconUrl: o[12].appIcon, alt: o[12].appName } });
  function d() {
    return o[10](o[12]);
  }
  return {
    c() {
      (e = v("li")),
        y(n.$$.fragment),
        (t = S()),
        (l = v("span")),
        (i = V(r)),
        (s = S()),
        c(l, "class", "app-name svelte-115ioat"),
        c(e, "class", "svelte-115ioat"),
        ie(e, "is-active", o[0] && o[0].id === o[12].id);
    },
    m(m, g) {
      w(m, e, g),
        C(n, e, null),
        f(e, t),
        f(e, l),
        f(l, i),
        f(e, s),
        (a = !0),
        u || ((p = X(e, "click", d)), (u = !0));
    },
    p(m, g) {
      o = m;
      let b = {};
      g & 4 && (b.favIconUrl = o[12].appIcon),
        g & 4 && (b.alt = o[12].appName),
        n.$set(b),
        (!a || g & 4) && r !== (r = o[12].appName + "") && ee(i, r),
        (!a || g & 5) && ie(e, "is-active", o[0] && o[0].id === o[12].id);
    },
    i(m) {
      a || (_(n.$$.fragment, m), (a = !0));
    },
    o(m) {
      h(n.$$.fragment, m), (a = !1);
    },
    d(m) {
      m && $(e), x(n), (u = !1), p();
    },
  };
}
function c3(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T;
  (n = new It({
    props: { width: "14px", className: "search-icon-app-sharing" },
  })),
    (a = new qe({ props: { width: "12px", height: "12px" } }));
  let P = o[3].length && Ou(o),
    M = [a3, s3],
    B = [];
  function O(z, G) {
    return z[2].length ? 0 : 1;
  }
  return (
    (b = O(o, -1)),
    (k = B[b] = M[b](o)),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("input")),
          (i = S()),
          (s = v("button")),
          y(a.$$.fragment),
          (u = S()),
          (p = v("div")),
          P && P.c(),
          (d = S()),
          (m = v("h2")),
          (m.textContent = `${A("overlay_share_app__sidebar_your_app_title")}`),
          (g = S()),
          k.c(),
          c(l, "type", "text"),
          c(
            l,
            "placeholder",
            (r = A("overlay_share_app__sidebar_placeholder"))
          ),
          c(l, "class", "svelte-115ioat"),
          c(s, "class", "svelte-115ioat"),
          c(e, "class", "search-bar svelte-115ioat"),
          ie(e, "has-query", o[1]),
          c(m, "class", "svelte-115ioat"),
          c(p, "class", "app-list svelte-115ioat");
      },
      m(z, G) {
        w(z, e, G),
          C(n, e, null),
          f(e, t),
          f(e, l),
          Ne(l, o[1]),
          f(e, i),
          f(e, s),
          C(a, s, null),
          w(z, u, G),
          w(z, p, G),
          P && P.m(p, null),
          f(p, d),
          f(p, m),
          f(p, g),
          B[b].m(p, null),
          (E = !0),
          I || ((T = [X(l, "input", o[7]), X(s, "click", o[8])]), (I = !0));
      },
      p(z, [G]) {
        G & 2 && l.value !== z[1] && Ne(l, z[1]),
          (!E || G & 2) && ie(e, "has-query", z[1]),
          z[3].length
            ? P
              ? (P.p(z, G), G & 8 && _(P, 1))
              : ((P = Ou(z)), P.c(), _(P, 1), P.m(p, d))
            : P &&
              (Q(),
              h(P, 1, 1, () => {
                P = null;
              }),
              Y());
        let W = b;
        (b = O(z, G)),
          b === W
            ? B[b].p(z, G)
            : (Q(),
              h(B[W], 1, 1, () => {
                B[W] = null;
              }),
              Y(),
              (k = B[b]),
              k ? k.p(z, G) : ((k = B[b] = M[b](z)), k.c()),
              _(k, 1),
              k.m(p, null));
      },
      i(z) {
        E || (_(n.$$.fragment, z), _(a.$$.fragment, z), _(P), _(k), (E = !0));
      },
      o(z) {
        h(n.$$.fragment, z), h(a.$$.fragment, z), h(P), h(k), (E = !1);
      },
      d(z) {
        z && $(e),
          x(n),
          x(a),
          z && $(u),
          z && $(p),
          P && P.d(),
          B[b].d(),
          (I = !1),
          Se(T);
      },
    }
  );
}
function u3(o, e, n) {
  let t,
    l,
    r,
    { apps: i } = e,
    { selectedApp: s } = e,
    a = oe(),
    u = "",
    p = (k) => {
      a("appSelected", k);
    };
  function d() {
    (u = this.value), n(1, u);
  }
  let m = () => n(1, (u = "")),
    g = (k) => p(k),
    b = (k) => p(k);
  return (
    (o.$$set = (k) => {
      "apps" in k && n(5, (i = k.apps)),
        "selectedApp" in k && n(0, (s = k.selectedApp));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 34) {
        e: n(
          6,
          (t = Li(
            i?.filter((k) =>
              u ? k.appName.toLowerCase().includes(u.toLowerCase()) : !0
            ),
            (k) => k.appName
          ))
        );
      }
      if (o.$$.dirty & 64) {
        e: n(3, (l = t.filter((k) => k.isShared)));
      }
      if (o.$$.dirty & 64) {
        e: n(2, (r = t.filter((k) => !k.isShared)));
      }
    }),
    [s, u, r, l, p, i, t, d, m, g, b]
  );
}
var Zl = class extends H {
    constructor(e) {
      super(), j(this, e, u3, c3, U, { apps: 5, selectedApp: 0 }, i3);
    }
  },
  Gu = Zl;
N();
function f3(o) {
  Z(
    o,
    "svelte-eudlln",
    ".image-wrapper.svelte-eudlln.svelte-eudlln{background-color:rgb(0 0 0 / 0.25);border-radius:8px;cursor:pointer;position:relative}.image-wrapper.svelte-eudlln .preview-img.svelte-eudlln{border-radius:8px;width:420px;height:234px;position:relative;z-index:-1}.image-wrapper.svelte-eudlln .play-icon.svelte-eudlln{position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);color:#fff}.faq-block.svelte-eudlln.svelte-eudlln{margin:0 0 24px}.faq-question.svelte-eudlln.svelte-eudlln{font-weight:bold;margin:0 0 8px}"
  );
}
function Fu(o) {
  let e, n, t, l, r, i, s, a, u;
  return (
    (i = new Is({ props: { width: "64", height: "64" } })),
    {
      c() {
        (e = v("button")),
          (n = v("img")),
          (l = S()),
          (r = v("div")),
          y(i.$$.fragment),
          c(n, "alt", "p2p sharing"),
          Je(n.src, (t = "/shared/assets/images/sharing_preview.png")) ||
            c(n, "src", t),
          c(n, "class", "preview-img svelte-eudlln"),
          c(r, "class", "play-icon svelte-eudlln"),
          c(e, "class", "image-wrapper svelte-eudlln");
      },
      m(p, d) {
        w(p, e, d),
          f(e, n),
          f(e, l),
          f(e, r),
          C(i, r, null),
          (s = !0),
          a || ((u = X(e, "click", o[1])), (a = !0));
      },
      p: L,
      i(p) {
        s || (_(i.$$.fragment, p), (s = !0));
      },
      o(p) {
        h(i.$$.fragment, p), (s = !1);
      },
      d(p) {
        p && $(e), x(i), (a = !1), u();
      },
    }
  );
}
function d3(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = A("overlay_share_app__main_answer_1") + "",
    a,
    u,
    p,
    d,
    m,
    g = A("overlay_share_app__main_answer_2") + "",
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D = A("overlay_share_app__main_answer_3") + "",
    R,
    K,
    ne = o[0] && Fu(o);
  return {
    c() {
      ne && ne.c(),
        (e = S()),
        (n = v("h2")),
        (n.textContent = "FAQ"),
        (t = S()),
        (l = v("div")),
        (r = v("div")),
        (r.textContent = `${A("overlay_share_app__main_question_1")}`),
        (i = S()),
        (a = V(s)),
        (u = S()),
        (p = v("div")),
        (d = v("div")),
        (d.textContent = `${A("overlay_share_app__main_question_2")}`),
        (m = S()),
        (b = V(g)),
        (k = S()),
        (E = v("ul")),
        (I = v("li")),
        (I.textContent = `${A("overlay_share_app__main_list_1")}`),
        (T = S()),
        (P = v("li")),
        (P.textContent = `${A("overlay_share_app__main_list_2")}`),
        (M = S()),
        (B = v("li")),
        (B.textContent = `${A("overlay_share_app__main_list_3")}`),
        (O = S()),
        (z = v("div")),
        (G = v("div")),
        (G.textContent = `${A("overlay_share_app__main_question_3")}`),
        (W = S()),
        (R = V(D)),
        c(r, "class", "faq-question svelte-eudlln"),
        c(l, "class", "faq-block svelte-eudlln"),
        c(d, "class", "faq-question svelte-eudlln"),
        c(p, "class", "faq-block svelte-eudlln"),
        c(G, "class", "faq-question svelte-eudlln"),
        c(z, "class", "faq-block svelte-eudlln");
    },
    m(te, le) {
      ne && ne.m(te, le),
        w(te, e, le),
        w(te, n, le),
        w(te, t, le),
        w(te, l, le),
        f(l, r),
        f(l, i),
        f(l, a),
        w(te, u, le),
        w(te, p, le),
        f(p, d),
        f(p, m),
        f(p, b),
        f(p, k),
        f(p, E),
        f(E, I),
        f(E, T),
        f(E, P),
        f(E, M),
        f(E, B),
        w(te, O, le),
        w(te, z, le),
        f(z, G),
        f(z, W),
        f(z, R),
        (K = !0);
    },
    p(te, [le]) {
      te[0]
        ? ne
          ? (ne.p(te, le), le & 1 && _(ne, 1))
          : ((ne = Fu(te)), ne.c(), _(ne, 1), ne.m(e.parentNode, e))
        : ne &&
          (Q(),
          h(ne, 1, 1, () => {
            ne = null;
          }),
          Y());
    },
    i(te) {
      K || (_(ne), (K = !0));
    },
    o(te) {
      h(ne), (K = !1);
    },
    d(te) {
      ne && ne.d(te),
        te && $(e),
        te && $(n),
        te && $(t),
        te && $(l),
        te && $(u),
        te && $(p),
        te && $(O),
        te && $(z);
    },
  };
}
function m3(o, e, n) {
  let { videoSrc: t } = e,
    l = () => {
      t &&
        (q.actions.sendAnalyticsEvent(
          "share-app.video-preview-clicked",
          void 0
        ),
        q.actions.showVideoModal({
          source: "share-app.video-preview-clicked",
          url: t,
        }));
    };
  return (
    (o.$$set = (r) => {
      "videoSrc" in r && n(0, (t = r.videoSrc));
    }),
    [t, l]
  );
}
var Kl = class extends H {
    constructor(e) {
      super(), j(this, e, m3, d3, U, { videoSrc: 0 }, f3);
    }
  },
  Zu = Kl;
N();
N();
function _3(o) {
  Z(
    o,
    "svelte-am7rox",
    ".user-row.svelte-am7rox.svelte-am7rox{display:grid;grid-template-columns:220px 1fr 25px;grid-template-rows:auto;align-items:center;gap:8px;margin-bottom:8px}.user-row.is-expired.svelte-am7rox.svelte-am7rox{opacity:0.4;pointer-events:none}.menu-button.svelte-am7rox.svelte-am7rox{--size:16px;width:var(--size);min-width:var(--size);height:var(--size);border-radius:50%}.menu-button.opened.svelte-am7rox.svelte-am7rox,.menu-button.svelte-am7rox.svelte-am7rox:hover{background-color:var(--round-button-active)}.user-info.svelte-am7rox.svelte-am7rox,.expires.svelte-am7rox.svelte-am7rox{font-size:12px;line-height:16px}.user-info.svelte-am7rox.svelte-am7rox{display:flex;align-items:center}.user-info.svelte-am7rox .avatar.svelte-am7rox{margin-right:8px}.user-info.svelte-am7rox .user-email.svelte-am7rox{overflow:hidden;text-overflow:ellipsis;max-width:190px}"
  );
}
function Ku(o) {
  let e, n, t, l, r, i;
  return (
    (n = new is({
      props: {
        triggerElement: o[4],
        menuItems: [
          {
            title: A("overlay_share_app__user_row_change_title"),
            click: o[10],
          },
          {
            title: A("overlay_share_app__user_row_remove_title"),
            click: o[11],
          },
        ],
      },
    })),
    n.$on("outsideClick", o[12]),
    {
      c() {
        (e = v("div")), y(n.$$.fragment), c(e, "class", "context-menu");
      },
      m(s, a) {
        w(s, e, a),
          C(n, e, null),
          (l = !0),
          r || ((i = gt((t = o[6].call(null, e)))), (r = !0));
      },
      p(s, a) {
        let u = {};
        a & 16 && (u.triggerElement = s[4]),
          a & 1 &&
            (u.menuItems = [
              {
                title: A("overlay_share_app__user_row_change_title"),
                click: s[10],
              },
              {
                title: A("overlay_share_app__user_row_remove_title"),
                click: s[11],
              },
            ]),
          n.$set(u);
      },
      i(s) {
        l || (_(n.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(n.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && $(e), x(n), (r = !1), i();
      },
    }
  );
}
function g3(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = (o[2] || "") + "",
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M;
  (l = new yt({ props: { name: o[1] } })),
    (k = new rs({ props: { width: "13" } }));
  let B = o[0] && Ku(o);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = v("div")),
        y(l.$$.fragment),
        (r = S()),
        (i = v("span")),
        (s = V(o[1])),
        (a = S()),
        (u = v("div")),
        (d = V(p)),
        (m = S()),
        (g = v("div")),
        (b = v("button")),
        y(k.$$.fragment),
        (I = S()),
        B && B.c(),
        c(t, "class", "avatar svelte-am7rox"),
        c(i, "class", "user-email svelte-am7rox"),
        c(n, "class", "user-info svelte-am7rox"),
        c(u, "class", "expires svelte-am7rox"),
        c(b, "class", "menu-button svelte-am7rox"),
        ie(b, "opened", o[0]),
        c(e, "class", "user-row svelte-am7rox"),
        ie(e, "is-expired", o[3]);
    },
    m(O, z) {
      w(O, e, z),
        f(e, n),
        f(n, t),
        C(l, t, null),
        f(n, r),
        f(n, i),
        f(i, s),
        f(e, a),
        f(e, u),
        f(u, d),
        f(e, m),
        f(e, g),
        f(g, b),
        C(k, b, null),
        o[8](b),
        f(g, I),
        B && B.m(g, null),
        (T = !0),
        P ||
          ((M = [gt((E = o[5].call(null, b))), X(b, "click", hn(o[9]))]),
          (P = !0));
    },
    p(O, [z]) {
      let G = {};
      z & 2 && (G.name = O[1]),
        l.$set(G),
        (!T || z & 2) && ee(s, O[1]),
        (!T || z & 4) && p !== (p = (O[2] || "") + "") && ee(d, p),
        (!T || z & 1) && ie(b, "opened", O[0]),
        O[0]
          ? B
            ? (B.p(O, z), z & 1 && _(B, 1))
            : ((B = Ku(O)), B.c(), _(B, 1), B.m(g, null))
          : B &&
            (Q(),
            h(B, 1, 1, () => {
              B = null;
            }),
            Y()),
        (!T || z & 8) && ie(e, "is-expired", O[3]);
    },
    i(O) {
      T || (_(l.$$.fragment, O), _(k.$$.fragment, O), _(B), (T = !0));
    },
    o(O) {
      h(l.$$.fragment, O), h(k.$$.fragment, O), h(B), (T = !1);
    },
    d(O) {
      O && $(e), x(l), x(k), o[8](null), B && B.d(), (P = !1), Se(M);
    },
  };
}
function h3(o, e, n) {
  let t,
    { isMenuVisible: l = !1 } = e,
    [r, i] = At({ placement: "top-end" }),
    s = oe(),
    { email: a } = e,
    { expires: u } = e,
    { isExpired: p } = e;
  function d(E) {
    we[E ? "unshift" : "push"](() => {
      (t = E), n(4, t);
    });
  }
  let m = () => n(0, (l = !l)),
    g = () => {
      s("requestDatepicker"), n(0, (l = !1));
    },
    b = () => {
      s("remove"), n(0, (l = !1));
    },
    k = () => n(0, (l = !1));
  return (
    (o.$$set = (E) => {
      "isMenuVisible" in E && n(0, (l = E.isMenuVisible)),
        "email" in E && n(1, (a = E.email)),
        "expires" in E && n(2, (u = E.expires)),
        "isExpired" in E && n(3, (p = E.isExpired));
    }),
    [l, a, u, p, t, r, i, s, d, m, g, b, k]
  );
}
var Ql = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          h3,
          g3,
          U,
          { isMenuVisible: 0, email: 1, expires: 2, isExpired: 3 },
          _3
        );
    }
  },
  Qu = Ql;
N();
var qn = (o) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o);
var { Boolean: v3 } = $t;
function b3(o) {
  Z(
    o,
    "svelte-ai3tol",
    "input.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{all:unset}.app.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{display:flex;align-items:center;margin-bottom:16px}.app.svelte-ai3tol .app-icon-wrapper.svelte-ai3tol.svelte-ai3tol{--size:48px;--app-icon-size:30px;width:var(--size);height:var(--size);margin-right:13px;display:flex;align-items:center;justify-content:center;background-color:var(--app-sharing-dialog-app-icon-substrate);border-radius:9px;box-shadow:0 1px 11px rgb(0 0 0 / 0.13)}.app.svelte-ai3tol h2.svelte-ai3tol.svelte-ai3tol{font-size:16px;line-height:21px}.share-fields.svelte-ai3tol .share-submit-button{width:100%}.tooltip.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{font-weight:normal;font-size:13px;line-height:17px;letter-spacing:-0.01em;color:var(--input-with-tooltip-tooltip-color)}label.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{font-size:13px;line-height:16px;font-weight:bold}.email.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{position:relative;display:flex;flex-direction:column;height:100%}.email.svelte-ai3tol label.svelte-ai3tol.svelte-ai3tol{top:-24px;position:absolute}.email.svelte-ai3tol input.svelte-ai3tol.svelte-ai3tol{font-size:13px;line-height:17px;background-color:var(--app-sharing-dialog-share-input-background);border-radius:4px;height:100%;padding:0 10px}.email.svelte-ai3tol input.svelte-ai3tol.svelte-ai3tol::placeholder{color:#bfbfbf}.email.svelte-ai3tol input.error.svelte-ai3tol.svelte-ai3tol{background-color:var(--field-background-error-color);border:1px solid var(--field-border-error-color)}.note-description.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{opacity:0;position:absolute;right:0;left:0;bottom:-25px;display:flex;align-items:center;padding:4px 0;padding-left:10px;border:1px solid var(--app-sharing-dialog-row-input-border);border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:var(--app-sharing-dialog-note-text);transition:opacity 100ms}.note-description.svelte-ai3tol .warning.svelte-ai3tol.svelte-ai3tol{--size:14px;width:var(--size);height:var(--size);display:flex;align-items:center;justify-content:center;background-color:var(--app-sharing-dialog-warning-icon-background);border-radius:50%;margin-right:5px}.row-fields.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{position:relative;display:grid;grid-template-columns:70px auto;gap:2px 32px;align-items:center;margin-bottom:56px}.row-fields.svelte-ai3tol label.svelte-ai3tol.svelte-ai3tol{display:flex;align-items:center;min-height:28px;align-self:start}.row-fields.svelte-ai3tol textarea.svelte-ai3tol.svelte-ai3tol{width:100%}.row-fields.svelte-ai3tol textarea.svelte-ai3tol.svelte-ai3tol:focus{border-bottom-left-radius:0;border-bottom-right-radius:0}.row-fields.svelte-ai3tol textarea.svelte-ai3tol:focus+.note-description.svelte-ai3tol{opacity:1}.row-fields.svelte-ai3tol input.svelte-ai3tol.svelte-ai3tol,.row-fields.svelte-ai3tol textarea.svelte-ai3tol.svelte-ai3tol{min-height:28px;all:unset;box-sizing:border-box;display:block;border-radius:4px;padding:6px 12px;font-size:13px;line-height:16px;border:1px solid transparent;transition:border-color 100ms;width:190px}.row-fields.svelte-ai3tol input.svelte-ai3tol.svelte-ai3tol:hover,.row-fields.svelte-ai3tol input.svelte-ai3tol.svelte-ai3tol:focus,.row-fields.svelte-ai3tol textarea.svelte-ai3tol.svelte-ai3tol:hover,.row-fields.svelte-ai3tol textarea.svelte-ai3tol.svelte-ai3tol:focus{border-color:var(--app-sharing-dialog-row-input-border)}.row-fields.svelte-ai3tol input.svelte-ai3tol.svelte-ai3tol::placeholder,.row-fields.svelte-ai3tol textarea.svelte-ai3tol.svelte-ai3tol::placeholder{color:var(--placeholder-color)}.row-fields.svelte-ai3tol .note.svelte-ai3tol.svelte-ai3tol{position:relative;margin-bottom:30px}.row-fields.svelte-ai3tol .actions.svelte-ai3tol.svelte-ai3tol{display:flex;gap:8px}.share-fields.svelte-ai3tol.svelte-ai3tol.svelte-ai3tol{display:grid;grid-template-columns:220px 105px auto;grid-template-rows:28px;gap:5px;margin-bottom:25px}.users.svelte-ai3tol .users-header.svelte-ai3tol.svelte-ai3tol{font-size:12px;line-height:16px;font-weight:bold;display:grid;grid-template-columns:220px 1fr 25px;grid-template-rows:auto;gap:8px;margin-bottom:12px}.app-sharing-dropdown{--dropdown-button-background:var(--app-sharing-dialog-share-input-background);white-space:nowrap;text-overflow:ellipsis;min-height:28px;height:100%}"
  );
}
function Yu(o, e, n) {
  let t = o.slice();
  return (t[30] = e[n]), t;
}
function k3(o) {
  let e = A("overlay_share_app__selected_save_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function w3(o) {
  let e, n, t, l, r, i, s;
  return {
    c() {
      (e = v("div")),
        (n = v("label")),
        (n.textContent = `${A("overlay_share_app__selected_share_label")}`),
        (t = S()),
        (l = v("input")),
        c(n, "for", "share"),
        c(n, "class", "svelte-ai3tol"),
        c(l, "id", "share"),
        c(
          l,
          "placeholder",
          (r = A("overlay_share_app__selected_share_placeholder"))
        ),
        c(l, "class", "svelte-ai3tol"),
        ie(l, "error", o[6]),
        c(e, "class", "email svelte-ai3tol");
    },
    m(a, u) {
      w(a, e, u),
        f(e, n),
        f(e, t),
        f(e, l),
        o[23](l),
        Ne(l, o[4]),
        i || ((s = [X(l, "input", o[24]), X(l, "input", o[17])]), (i = !0));
    },
    p(a, u) {
      u[0] & 16 && l.value !== a[4] && Ne(l, a[4]),
        u[0] & 64 && ie(l, "error", a[6]);
    },
    d(a) {
      a && $(e), o[23](null), (i = !1), Se(s);
    },
  };
}
function $3(o) {
  let e,
    n = A("overlay_share_app__selected_tooltip_1") + "",
    t,
    l,
    r,
    i,
    s = A("overlay_share_app__selected_tooltip_2") + "",
    a;
  return {
    c() {
      (e = v("div")),
        (t = V(n)),
        (l = S()),
        (r = v("br")),
        (i = S()),
        (a = V(s)),
        c(e, "class", "tooltip svelte-ai3tol"),
        c(e, "slot", "tooltip");
    },
    m(u, p) {
      w(u, e, p), f(e, t), f(e, l), f(e, r), f(e, i), f(e, a);
    },
    p: L,
    d(u) {
      u && $(e);
    },
  };
}
function y3(o) {
  let e = A("overlay_share_app__selected_share_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function C3(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        size: "small",
        type: "submit",
        disabled: !o[8],
        className: "share-submit-button",
        $$slots: { default: [y3] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l[0] & 256 && (r.disabled = !t[8]),
          l[1] & 4 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Ju(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u = o[0],
    p = [];
  for (let m = 0; m < u.length; m += 1) p[m] = Xu(Yu(o, u, m));
  let d = (m) =>
    h(p[m], 1, 1, () => {
      p[m] = null;
    });
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = v("div")),
        (t.textContent = `${A("overlay_share_app__selected_share_with")}`),
        (l = S()),
        (r = v("div")),
        (r.textContent = `${A("overlay_share_app__selected_expires_at")}`),
        (i = S()),
        (s = v("div"));
      for (let m = 0; m < p.length; m += 1) p[m].c();
      c(n, "class", "users-header svelte-ai3tol"),
        c(s, "class", "users-list"),
        c(e, "class", "users svelte-ai3tol");
    },
    m(m, g) {
      w(m, e, g), f(e, n), f(n, t), f(n, l), f(n, r), f(e, i), f(e, s);
      for (let b = 0; b < p.length; b += 1) p[b] && p[b].m(s, null);
      a = !0;
    },
    p(m, g) {
      if (g[0] & 69633) {
        u = m[0];
        let b;
        for (b = 0; b < u.length; b += 1) {
          let k = Yu(m, u, b);
          p[b]
            ? (p[b].p(k, g), _(p[b], 1))
            : ((p[b] = Xu(k)), p[b].c(), _(p[b], 1), p[b].m(s, null));
        }
        for (Q(), b = u.length; b < p.length; b += 1) d(b);
        Y();
      }
    },
    i(m) {
      if (!a) {
        for (let g = 0; g < u.length; g += 1) _(p[g]);
        a = !0;
      }
    },
    o(m) {
      p = p.filter(v3);
      for (let g = 0; g < p.length; g += 1) h(p[g]);
      a = !1;
    },
    d(m) {
      m && $(e), Ae(p, m);
    },
  };
}
function Xu(o) {
  let e, n;
  function t() {
    return o[26](o[30]);
  }
  function l() {
    return o[27](o[30]);
  }
  return (
    (e = new Qu({
      props: {
        email: o[30].email,
        expires: o[30].expiration_date,
        isExpired: !1,
      },
    })),
    e.$on("remove", t),
    e.$on("requestDatepicker", l),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        o = r;
        let s = {};
        i[0] & 1 && (s.email = o[30].email),
          i[0] & 1 && (s.expires = o[30].expiration_date),
          e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function x3(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne,
    te = A("overlay_share_app__selected_note_description") + "",
    le,
    re,
    se,
    ae,
    me,
    ce,
    ke,
    Re,
    Pe,
    De,
    _e,
    Le,
    ze,
    Xe,
    xe,
    be,
    he,
    de;
  (t = new ht({ props: { favIconUrl: o[11], alt: o[10] } })),
    (ae = new pe({
      props: {
        size: "small",
        disabled: !o[9],
        type: "submit",
        $$slots: { default: [k3] },
        $$scope: { ctx: o },
      },
    })),
    (ke = new Bt({
      props: {
        tooltipPlacement: "top-start",
        externalShowTooltip: o[6],
        displayInlineFlex: !1,
        $$slots: { tooltip: [$3], default: [w3] },
        $$scope: { ctx: o },
      },
    }));
  function Ie(ge) {
    o[25](ge);
  }
  let Ke = { className: "app-sharing-dropdown", options: o[13] };
  o[5] !== void 0 && (Ke.value = o[5]),
    (De = new vt({ props: Ke })),
    we.push(() => Ye(De, "value", Ie)),
    (ze = new Bt({
      props: {
        externalShowTooltip: !!o[8],
        tooltip: A("overlay_share_app__selected_tooltip_enter_email"),
        tooltipPlacement: "top",
        $$slots: { default: [C3] },
        $$scope: { ctx: o },
      },
    }));
  let Ue = o[0].length && Ju(o);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        y(t.$$.fragment),
        (l = S()),
        (r = v("div")),
        (i = v("h2")),
        (s = V(o[10])),
        (a = S()),
        (u = v("form")),
        (p = v("label")),
        (p.textContent = `${A("overlay_share_app__selected_username_label")}`),
        (d = S()),
        (m = v("input")),
        (b = S()),
        (k = v("label")),
        (k.textContent = `${A("overlay_share_app__selected_password_label")}`),
        (E = S()),
        (I = v("input")),
        (P = S()),
        (M = v("label")),
        (M.textContent = `${A("overlay_share_app__selected_note_label")}`),
        (B = S()),
        (O = v("div")),
        (z = v("textarea")),
        (D = S()),
        (R = v("div")),
        (K = v("div")),
        (K.innerHTML = "<span>!</span>"),
        (ne = S()),
        (le = V(te)),
        (re = S()),
        (se = v("div")),
        y(ae.$$.fragment),
        (me = S()),
        (ce = v("form")),
        y(ke.$$.fragment),
        (Re = S()),
        (Pe = v("div")),
        y(De.$$.fragment),
        (Le = S()),
        y(ze.$$.fragment),
        (Xe = S()),
        Ue && Ue.c(),
        (xe = fe()),
        c(n, "class", "app-icon-wrapper svelte-ai3tol"),
        c(i, "class", "svelte-ai3tol"),
        c(r, "class", "app-content"),
        c(e, "class", "app svelte-ai3tol"),
        c(p, "for", "uname"),
        c(p, "class", "svelte-ai3tol"),
        c(m, "id", "uname"),
        c(
          m,
          "placeholder",
          (g = A("overlay_share_app__selected_username_placeholder"))
        ),
        c(m, "type", "text"),
        c(m, "class", "svelte-ai3tol"),
        c(k, "for", "password"),
        c(k, "class", "svelte-ai3tol"),
        c(I, "id", "password"),
        c(
          I,
          "placeholder",
          (T = A("overlay_share_app__selected_password_placeholder"))
        ),
        c(I, "type", "password"),
        c(I, "class", "svelte-ai3tol"),
        c(M, "for", "note"),
        c(M, "class", "svelte-ai3tol"),
        c(z, "id", "note"),
        c(z, "rows", (G = 1)),
        c(
          z,
          "placeholder",
          (W = A("overlay_share_app__selected_note_placeholder"))
        ),
        c(z, "class", "svelte-ai3tol"),
        c(K, "class", "warning svelte-ai3tol"),
        c(R, "class", "note-description svelte-ai3tol"),
        c(O, "class", "note svelte-ai3tol"),
        c(se, "class", "actions svelte-ai3tol"),
        c(u, "class", "row-fields svelte-ai3tol"),
        c(Pe, "class", "dropdown-wrapper"),
        c(ce, "class", "share-fields svelte-ai3tol");
    },
    m(ge, Be) {
      w(ge, e, Be),
        f(e, n),
        C(t, n, null),
        f(e, l),
        f(e, r),
        f(r, i),
        f(i, s),
        w(ge, a, Be),
        w(ge, u, Be),
        f(u, p),
        f(u, d),
        f(u, m),
        Ne(m, o[1]),
        f(u, b),
        f(u, k),
        f(u, E),
        f(u, I),
        Ne(I, o[2]),
        f(u, P),
        f(u, M),
        f(u, B),
        f(u, O),
        f(O, z),
        Ne(z, o[3]),
        f(O, D),
        f(O, R),
        f(R, K),
        f(R, ne),
        f(R, le),
        f(u, re),
        f(u, se),
        C(ae, se, null),
        w(ge, me, Be),
        w(ge, ce, Be),
        C(ke, ce, null),
        f(ce, Re),
        f(ce, Pe),
        C(De, Pe, null),
        f(ce, Le),
        C(ze, ce, null),
        w(ge, Xe, Be),
        Ue && Ue.m(ge, Be),
        w(ge, xe, Be),
        (be = !0),
        he ||
          ((de = [
            X(m, "input", o[20]),
            X(I, "input", o[21]),
            X(z, "input", o[22]),
            X(u, "submit", wt(o[14])),
            X(ce, "submit", wt(o[15])),
          ]),
          (he = !0));
    },
    p(ge, Be) {
      let _t = {};
      Be[0] & 2048 && (_t.favIconUrl = ge[11]),
        Be[0] & 1024 && (_t.alt = ge[10]),
        t.$set(_t),
        (!be || Be[0] & 1024) && ee(s, ge[10]),
        Be[0] & 2 && m.value !== ge[1] && Ne(m, ge[1]),
        Be[0] & 4 && I.value !== ge[2] && Ne(I, ge[2]),
        Be[0] & 8 && Ne(z, ge[3]);
      let et = {};
      Be[0] & 512 && (et.disabled = !ge[9]),
        Be[1] & 4 && (et.$$scope = { dirty: Be, ctx: ge }),
        ae.$set(et);
      let Ee = {};
      Be[0] & 64 && (Ee.externalShowTooltip = ge[6]),
        (Be[0] & 208) | (Be[1] & 4) && (Ee.$$scope = { dirty: Be, ctx: ge }),
        ke.$set(Ee);
      let ot = {};
      !_e && Be[0] & 32 && ((_e = !0), (ot.value = ge[5]), Qe(() => (_e = !1))),
        De.$set(ot);
      let bt = {};
      Be[0] & 256 && (bt.externalShowTooltip = !!ge[8]),
        (Be[0] & 256) | (Be[1] & 4) && (bt.$$scope = { dirty: Be, ctx: ge }),
        ze.$set(bt),
        ge[0].length
          ? Ue
            ? (Ue.p(ge, Be), Be[0] & 1 && _(Ue, 1))
            : ((Ue = Ju(ge)), Ue.c(), _(Ue, 1), Ue.m(xe.parentNode, xe))
          : Ue &&
            (Q(),
            h(Ue, 1, 1, () => {
              Ue = null;
            }),
            Y());
    },
    i(ge) {
      be ||
        (_(t.$$.fragment, ge),
        _(ae.$$.fragment, ge),
        _(ke.$$.fragment, ge),
        _(De.$$.fragment, ge),
        _(ze.$$.fragment, ge),
        _(Ue),
        (be = !0));
    },
    o(ge) {
      h(t.$$.fragment, ge),
        h(ae.$$.fragment, ge),
        h(ke.$$.fragment, ge),
        h(De.$$.fragment, ge),
        h(ze.$$.fragment, ge),
        h(Ue),
        (be = !1);
    },
    d(ge) {
      ge && $(e),
        x(t),
        ge && $(a),
        ge && $(u),
        x(ae),
        ge && $(me),
        ge && $(ce),
        x(ke),
        x(De),
        x(ze),
        ge && $(Xe),
        Ue && Ue.d(ge),
        ge && $(xe),
        (he = !1),
        Se(de);
    },
  };
}
function S3(o, e, n) {
  let t,
    l,
    r,
    i,
    s = oe(),
    { selectedApp: a } = e,
    { recipients: u } = e,
    p = "",
    d = "",
    m = "",
    g = "",
    b = "",
    k = !1,
    E,
    I = [
      { label: "1 day", value: "P1D" },
      { label: "3 days", value: "P3D" },
      { label: "1 week", value: "P1W" },
      { label: "1 month", value: "P1M" },
      { label: "1 year", value: "P1Y" },
      { label: "No expiration", value: "" },
    ],
    T = () => {
      n(1, (p = a.username)), n(2, (d = a.password || "")), n(3, (m = a.note));
    },
    P = () => {
      n(4, (g = "")), n(5, (b = "")), n(8, (t = ""));
    },
    M = () => {
      s("updateCredential", {
        ...a,
        username: p,
        password: d,
        note: m,
        hasPassword: Boolean(d),
      });
    },
    B = () => {
      if (!qn(t)) {
        n(6, (k = !0)), E.focus();
        return;
      }
      s("share", { appId: a.id, email: t, expiration: b }), n(6, (k = !1));
    },
    O = (se) => {
      s("openDatepicker", {
        recipientId: se.uuid,
        expiredAt: Date.parse(se.expiration_date || "") || Date.now(),
      });
    },
    z = () => {
      n(6, (k = !1));
    },
    G = ({ recipientId: se, expiredAt: ae }) => {
      let me = u.find((ce) => ce.uuid === se);
      pt(me, "Failed to set expiration date: recipient not found"),
        s("share", { appId: a.id, email: me.email, expiration: ae });
    };
  function W() {
    (p = this.value), n(1, p);
  }
  function D() {
    (d = this.value), n(2, d);
  }
  function R() {
    (m = this.value), n(3, m);
  }
  function K(se) {
    we[se ? "unshift" : "push"](() => {
      (E = se), n(7, E);
    });
  }
  function ne() {
    (g = this.value), n(4, g);
  }
  function te(se) {
    (b = se), n(5, b);
  }
  let le = (se) => s("removeRecipient", se.uuid),
    re = (se) => O(se);
  return (
    (o.$$set = (se) => {
      "selectedApp" in se && n(18, (a = se.selectedApp)),
        "recipients" in se && n(0, (u = se.recipients));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty[0] & 16) {
        e: n(8, (t = g.trim()));
      }
      if (o.$$.dirty[0] & 262144) {
        e: n(11, (l = a?.appIcon));
      }
      if (o.$$.dirty[0] & 262144) {
        e: n(10, (r = a?.appName));
      }
      if (o.$$.dirty[0] & 262158) {
        e: n(
          9,
          (i =
            p !== a?.username ||
            m !== a?.note ||
            d !== (a?.hasPassword ? a?.password : ""))
        );
      }
      if (o.$$.dirty[0] & 262144) {
        e: a && (T(), P(), n(6, (k = !1)));
      }
    }),
    [
      u,
      p,
      d,
      m,
      g,
      b,
      k,
      E,
      t,
      i,
      r,
      l,
      s,
      I,
      M,
      B,
      O,
      z,
      a,
      G,
      W,
      D,
      R,
      K,
      ne,
      te,
      le,
      re,
    ]
  );
}
var Yl = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          S3,
          x3,
          U,
          { selectedApp: 18, recipients: 0, setExpirationDate: 19 },
          b3,
          [-1, -1]
        );
    }
    get setExpirationDate() {
      return this.$$.ctx[19];
    }
  },
  ep = Yl;
N();
N();
var tp = (o, e) => {
  let n = [];
  for (let t = o; t <= e; t++) n.push(t);
  return n;
};
N();
function A3(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(n, "d", "M18 8l-6 6.5 6 6.5"),
        c(n, "stroke-width", "1.2"),
        c(n, "stroke", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function E3(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Jl = class extends H {
    constructor(e) {
      super(), j(this, e, E3, A3, U, { width: 0, height: 1, className: 2 });
    }
  },
  Xl = Jl;
function I3(o) {
  Z(
    o,
    "svelte-1lv0v90",
    ".prev-next-buttons.svelte-1lv0v90.svelte-1lv0v90{width:30px;height:30px}.prev-next-buttons.reversed.svelte-1lv0v90.svelte-1lv0v90{transform:rotate(180deg)}.wrapper.svelte-1lv0v90.svelte-1lv0v90{display:inline-block;padding:20px 30px;border-radius:8px;box-shadow:0 3px 30px rgb(0 0 0 / 0.05);background-color:var(--datepicker-background)}.header.svelte-1lv0v90.svelte-1lv0v90{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}.header.svelte-1lv0v90>h1.svelte-1lv0v90{font-weight:600;font-size:16px;line-height:21px}.header.svelte-1lv0v90>.buttons.svelte-1lv0v90{display:flex;align-items:center}.days-of-week.svelte-1lv0v90.svelte-1lv0v90{display:flex;align-items:center}.days-of-week.svelte-1lv0v90>div.svelte-1lv0v90{display:flex;align-items:center;justify-content:center;height:37px;width:42px;font-size:14px;font-weight:600;color:#bfbfbf}.grid.svelte-1lv0v90.svelte-1lv0v90{display:flex;align-items:center;flex-wrap:wrap;max-width:300px}.day.svelte-1lv0v90.svelte-1lv0v90{width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-size:13px;line-height:17px;cursor:pointer;transition:background-color 100ms, color 100ms;border-radius:50%}.day.svelte-1lv0v90.svelte-1lv0v90:not(.empty, .selected):hover{background-color:var(--datepicker-day-hover)}.day.empty.svelte-1lv0v90.svelte-1lv0v90{cursor:default;pointer-events:none}.day.selected.svelte-1lv0v90.svelte-1lv0v90{background-color:#f56b3d;font-weight:700;color:#fff}.submit.svelte-1lv0v90.svelte-1lv0v90{margin-top:15px}.datepicker-submit-button{width:100%}"
  );
}
function np(o, e, n) {
  let t = o.slice();
  return (t[16] = e[n]), t;
}
function op(o, e, n) {
  let t = o.slice();
  return (t[19] = e[n]), t;
}
function lp(o) {
  let e,
    n = o[19] + "",
    t;
  return {
    c() {
      (e = v("div")), (t = V(n)), c(e, "class", "svelte-1lv0v90");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p: L,
    d(l) {
      l && $(e);
    },
  };
}
function rp(o) {
  let e,
    n = (o[16] || "") + "",
    t,
    l,
    r,
    i;
  function s() {
    return o[12](o[16]);
  }
  return {
    c() {
      (e = v("button")),
        (t = V(n)),
        (l = S()),
        c(e, "class", "day svelte-1lv0v90"),
        ie(e, "empty", !o[16]),
        ie(e, "selected", to(o[2], new Date(o[1], o[0], o[16])));
    },
    m(a, u) {
      w(a, e, u), f(e, t), f(e, l), r || ((i = X(e, "click", s)), (r = !0));
    },
    p(a, u) {
      (o = a),
        u & 16 && n !== (n = (o[16] || "") + "") && ee(t, n),
        u & 16 && ie(e, "empty", !o[16]),
        u & 23 && ie(e, "selected", to(o[2], new Date(o[1], o[0], o[16])));
    },
    d(a) {
      a && $(e), (r = !1), i();
    },
  };
}
function T3(o) {
  let e = A("components_date_picker__submit_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function M3(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P, M, B;
  (a = new Xl({})), (d = new Xl({}));
  let O = o[5],
    z = [];
  for (let D = 0; D < O.length; D += 1) z[D] = lp(op(o, O, D));
  let G = o[4],
    W = [];
  for (let D = 0; D < G.length; D += 1) W[D] = rp(np(o, G, D));
  return (
    (T = new pe({
      props: {
        mod: "grey",
        className: "datepicker-submit-button",
        $$slots: { default: [T3] },
        $$scope: { ctx: o },
      },
    })),
    T.$on("click", o[9]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (t = v("h1")),
          (l = V(o[3])),
          (r = S()),
          (i = v("div")),
          (s = v("button")),
          y(a.$$.fragment),
          (u = S()),
          (p = v("button")),
          y(d.$$.fragment),
          (m = S()),
          (g = v("div"));
        for (let D = 0; D < z.length; D += 1) z[D].c();
        (b = S()), (k = v("div"));
        for (let D = 0; D < W.length; D += 1) W[D].c();
        (E = S()),
          (I = v("div")),
          y(T.$$.fragment),
          c(t, "class", "svelte-1lv0v90"),
          c(s, "class", "prev-next-buttons svelte-1lv0v90"),
          c(p, "class", "prev-next-buttons reversed svelte-1lv0v90"),
          c(i, "class", "buttons svelte-1lv0v90"),
          c(n, "class", "header svelte-1lv0v90"),
          c(g, "class", "days-of-week svelte-1lv0v90"),
          c(k, "class", "grid svelte-1lv0v90"),
          c(I, "class", "submit svelte-1lv0v90"),
          c(e, "class", "wrapper svelte-1lv0v90");
      },
      m(D, R) {
        w(D, e, R),
          f(e, n),
          f(n, t),
          f(t, l),
          f(n, r),
          f(n, i),
          f(i, s),
          C(a, s, null),
          f(i, u),
          f(i, p),
          C(d, p, null),
          f(e, m),
          f(e, g);
        for (let K = 0; K < z.length; K += 1) z[K] && z[K].m(g, null);
        f(e, b), f(e, k);
        for (let K = 0; K < W.length; K += 1) W[K] && W[K].m(k, null);
        f(e, E),
          f(e, I),
          C(T, I, null),
          (P = !0),
          M || ((B = [X(s, "click", o[7]), X(p, "click", o[6])]), (M = !0));
      },
      p(D, [R]) {
        if (((!P || R & 8) && ee(l, D[3]), R & 32)) {
          O = D[5];
          let ne;
          for (ne = 0; ne < O.length; ne += 1) {
            let te = op(D, O, ne);
            z[ne]
              ? z[ne].p(te, R)
              : ((z[ne] = lp(te)), z[ne].c(), z[ne].m(g, null));
          }
          for (; ne < z.length; ne += 1) z[ne].d(1);
          z.length = O.length;
        }
        if (R & 279) {
          G = D[4];
          let ne;
          for (ne = 0; ne < G.length; ne += 1) {
            let te = np(D, G, ne);
            W[ne]
              ? W[ne].p(te, R)
              : ((W[ne] = rp(te)), W[ne].c(), W[ne].m(k, null));
          }
          for (; ne < W.length; ne += 1) W[ne].d(1);
          W.length = G.length;
        }
        let K = {};
        R & 4194304 && (K.$$scope = { dirty: R, ctx: D }), T.$set(K);
      },
      i(D) {
        P ||
          (_(a.$$.fragment, D),
          _(d.$$.fragment, D),
          _(T.$$.fragment, D),
          (P = !0));
      },
      o(D) {
        h(a.$$.fragment, D), h(d.$$.fragment, D), h(T.$$.fragment, D), (P = !1);
      },
      d(D) {
        D && $(e), x(a), x(d), Ae(z, D), Ae(W, D), x(T), (M = !1), Se(B);
      },
    }
  );
}
function P3(o, e, n) {
  let t,
    l,
    r = oe(),
    { value: i = null } = e,
    { initialDate: s = Date.now() } = e,
    a = new Date(s),
    u = a.getMonth(),
    p = a.getFullYear(),
    d = new Date(p, u, a.getDate()),
    m = [
      A("components_date_picker__monday_short"),
      A("components_date_picker__tuesday_short"),
      A("components_date_picker__wednesday_short"),
      A("components_date_picker__thursday_short"),
      A("components_date_picker__friday_short"),
      A("components_date_picker__saturday_short"),
      A("components_date_picker__sunday_short"),
    ],
    g = (P, M) => {
      let B = (D, R) =>
          Array.from({ length: Math.ceil(D.length / R) }, (ne, te) => {
            let le = R * te,
              re = D.slice(le, le + R);
            return re.length < R
              ? [...re, ...Array.from({ length: R - re.length })]
              : D.slice(le, le + R);
          }),
        O = new Date(P, M, 1),
        z = tp(1, Yi(O)),
        G = eo(Qi(O), "EEEEEE"),
        W = m.findIndex((D) => D === G);
      return B(W === 0 ? z : [...Array.from({ length: W }), ...z], 7).flat();
    },
    b = () => {
      n(0, (u = u === 11 ? 0 : u + 1)), n(1, (p = u === 0 ? p + 1 : p));
    },
    k = () => {
      n(0, (u = u === 0 ? 11 : u - 1)), n(1, (p = u === 11 ? p - 1 : p));
    },
    E = (P) => {
      P && n(2, (d = new Date(p, u, P)));
    },
    I = () => {
      n(10, (i = d.getTime())), r("change", i);
    },
    T = (P) => E(P);
  return (
    (o.$$set = (P) => {
      "value" in P && n(10, (i = P.value)),
        "initialDate" in P && n(11, (s = P.initialDate));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 3) {
        e: n(4, (t = g(p, u)));
      }
      if (o.$$.dirty & 3) {
        e: n(3, (l = eo(new Date(p, u, 1), "LLLL yyyy")));
      }
    }),
    [u, p, d, l, t, m, b, k, E, I, i, s, T]
  );
}
var er = class extends H {
    constructor(e) {
      super(), j(this, e, P3, M3, U, { value: 10, initialDate: 11 }, I3);
    }
  },
  ip = er;
function z3(o) {
  Z(
    o,
    "svelte-14e246n",
    `.content.svelte-14e246n.svelte-14e246n{--aside-width:200px;--header-height:48px;display:grid;grid-template-columns:var(--aside-width) auto auto;grid-template-rows:var(--header-height) 1fr;grid-template-areas:'header header header'
      'aside main main';height:100%}header.svelte-14e246n.svelte-14e246n{grid-area:header;display:flex;align-items:center;border-bottom:1px solid var(--app-sharing-dialog-section-border);padding-left:19px;gap:16px}header.svelte-14e246n h1.svelte-14e246n{font-size:16px}header.svelte-14e246n .close.svelte-14e246n{--size:18px;--offset:12px;position:absolute;top:var(--offset);right:var(--offset);width:var(--size);height:var(--size)}aside.svelte-14e246n.svelte-14e246n{grid-area:aside;border-right:1px solid var(--app-sharing-dialog-section-border);padding:12px 0 0;display:flex;flex-direction:column;overflow:hidden}main.svelte-14e246n.svelte-14e246n{grid-area:main;padding:12px 28px;overflow-y:auto}.main-page-btn.svelte-14e246n.svelte-14e246n{color:var(--accent-color)}.main-page-btn.svelte-14e246n span.svelte-14e246n{margin-left:4px}.inner-overlay.svelte-14e246n.svelte-14e246n{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgb(0 0 0 / 0.2);display:flex;align-items:center;justify-content:center}.inner-overlay.svelte-14e246n>div.svelte-14e246n{position:absolute;z-index:2}`
  );
}
function B3(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P, M, B, O, z;
  (i = new xn({ props: { width: "14px", height: "14px" } })),
    (d = new qe({ props: { width: "12px", height: "12px" } })),
    (b = new Gu({ props: { apps: o[6], selectedApp: o[4] } })),
    b.$on("appSelected", o[10]);
  let G = [q3, N3],
    W = [];
  function D(K, ne) {
    return K[2] ? 1 : 0;
  }
  (I = D(o, -1)), (T = W[I] = G[I](o));
  let R = o[0] !== null && ap(o);
  return {
    c() {
      (e = v("div")),
        (n = v("header")),
        (t = v("h1")),
        (t.textContent = `${A("overlay_share_app__title")}`),
        (l = S()),
        (r = v("button")),
        y(i.$$.fragment),
        (s = S()),
        (a = v("span")),
        (a.textContent = `${A("overlay_share_app__button_text")}`),
        (u = S()),
        (p = v("button")),
        y(d.$$.fragment),
        (m = S()),
        (g = v("aside")),
        y(b.$$.fragment),
        (k = S()),
        (E = v("main")),
        T.c(),
        (P = S()),
        R && R.c(),
        (M = fe()),
        c(t, "class", "svelte-14e246n"),
        c(a, "class", "svelte-14e246n"),
        c(r, "class", "main-page-btn svelte-14e246n"),
        c(p, "class", "close svelte-14e246n"),
        c(n, "class", "svelte-14e246n"),
        c(g, "class", "svelte-14e246n"),
        c(E, "class", "svelte-14e246n"),
        c(e, "class", "content svelte-14e246n");
    },
    m(K, ne) {
      w(K, e, ne),
        f(e, n),
        f(n, t),
        f(n, l),
        f(n, r),
        C(i, r, null),
        f(r, s),
        f(r, a),
        f(n, u),
        f(n, p),
        C(d, p, null),
        f(e, m),
        f(e, g),
        C(b, g, null),
        f(e, k),
        f(e, E),
        W[I].m(E, null),
        w(K, P, ne),
        R && R.m(K, ne),
        w(K, M, ne),
        (B = !0),
        O || ((z = [X(r, "click", o[9]), X(p, "click", o[8])]), (O = !0));
    },
    p(K, ne) {
      let te = {};
      ne & 64 && (te.apps = K[6]),
        ne & 16 && (te.selectedApp = K[4]),
        b.$set(te);
      let le = I;
      (I = D(K, ne)),
        I === le
          ? W[I].p(K, ne)
          : (Q(),
            h(W[le], 1, 1, () => {
              W[le] = null;
            }),
            Y(),
            (T = W[I]),
            T ? T.p(K, ne) : ((T = W[I] = G[I](K)), T.c()),
            _(T, 1),
            T.m(E, null)),
        K[0] !== null
          ? R
            ? (R.p(K, ne), ne & 1 && _(R, 1))
            : ((R = ap(K)), R.c(), _(R, 1), R.m(M.parentNode, M))
          : R &&
            (Q(),
            h(R, 1, 1, () => {
              R = null;
            }),
            Y());
    },
    i(K) {
      B ||
        (_(i.$$.fragment, K),
        _(d.$$.fragment, K),
        _(b.$$.fragment, K),
        _(T),
        _(R),
        (B = !0));
    },
    o(K) {
      h(i.$$.fragment, K),
        h(d.$$.fragment, K),
        h(b.$$.fragment, K),
        h(T),
        h(R),
        (B = !1);
    },
    d(K) {
      K && $(e),
        x(i),
        x(d),
        x(b),
        W[I].d(),
        K && $(P),
        R && R.d(K),
        K && $(M),
        (O = !1),
        Se(z);
    },
  };
}
function N3(o) {
  let e, n;
  return (
    (e = new Zu({ props: { videoSrc: o[5] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 32 && (r.videoSrc = t[5]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function q3(o) {
  let e,
    n,
    t = o[4] && sp(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[4]
        ? t
          ? (t.p(l, r), r & 16 && _(t, 1))
          : ((t = sp(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function sp(o) {
  let e, n, t;
  function l(i) {
    o[20](i);
  }
  let r = { recipients: o[3] };
  return (
    o[4] !== void 0 && (r.selectedApp = o[4]),
    (e = new ep({ props: r })),
    o[19](e),
    we.push(() => Ye(e, "selectedApp", l)),
    e.$on("updateCredential", o[11]),
    e.$on("share", o[12]),
    e.$on("removeRecipient", o[13]),
    e.$on("openDatepicker", o[14]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(i, s) {
        C(e, i, s), (t = !0);
      },
      p(i, s) {
        let a = {};
        s & 8 && (a.recipients = i[3]),
          !n &&
            s & 16 &&
            ((n = !0), (a.selectedApp = i[4]), Qe(() => (n = !1))),
          e.$set(a);
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        h(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        o[19](null), x(e, i);
      },
    }
  );
}
function ap(o) {
  let e, n, t, l, r, i;
  return (
    (t = new ip({ props: { initialDate: o[0].expiredAt } })),
    t.$on("change", o[16]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          c(n, "class", "svelte-14e246n"),
          c(e, "class", "inner-overlay svelte-14e246n");
      },
      m(s, a) {
        w(s, e, a),
          f(e, n),
          C(t, n, null),
          (l = !0),
          r || ((i = [X(n, "click", hn(j3)), X(e, "click", o[15])]), (r = !0));
      },
      p(s, a) {
        let u = {};
        a & 1 && (u.initialDate = s[0].expiredAt), t.$set(u);
      },
      i(s) {
        l || (_(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && $(e), x(t), (r = !1), Se(i);
      },
    }
  );
}
function D3(o) {
  let e,
    n,
    t = o[7] && B3(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[7] && t.p(l, r);
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function L3(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 670,
        height: 420,
        $$slots: { default: [D3] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4194431 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U3(o) {
  let e, n;
  return (
    (e = new Ce({
      props: {
        dataTestId: "share-app-popup",
        $$slots: { default: [L3] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 4194431 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var j3 = () => {};
function H3(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a = oe(),
    u = q.stores.shareApplicationModal;
  ve(o, u, (W) => n(18, (s = W)));
  let { source: p } = e,
    d = null,
    m = null,
    g = !1,
    b = () => {
      q.actions.clearSelectedApp(), a("close");
    },
    k = () => n(2, (g = !g)),
    E = ({ detail: W }) => {
      n(2, (g = !1)), q.actions.changeSelectedAppShareApp(W.id);
    },
    I = ({ detail: W }) => {
      q.actions.updateAppCredentials(W);
    },
    T = ({ detail: W }) => q.actions.shareApp(W),
    P = ({ detail: W }) => q.actions.removeSharingRecipient(W),
    M = ({ detail: W }) => n(0, (d = W)),
    B = () => n(0, (d = null)),
    O = ({ detail: W }) => {
      !m ||
        !d ||
        (m.setExpirationDate({ recipientId: d.recipientId, expiredAt: W }),
        n(0, (d = null)));
    };
  ye(
    () => (
      q.actions.sendAnalyticsEvent("share-app.auto-opened", { source: p }),
      () => q.actions.sendAnalyticsEvent("share-app.auto-closed", { source: p })
    )
  );
  function z(W) {
    we[W ? "unshift" : "push"](() => {
      (m = W), n(1, m);
    });
  }
  function G(W) {
    (r = W), n(4, r), n(18, s);
  }
  return (
    (o.$$set = (W) => {
      "source" in W && n(17, (p = W.source));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 262144) {
        e: n(6, (t = s?.apps));
      }
      if (o.$$.dirty & 262144) {
        e: n(5, (l = s?.howToWorksVideo));
      }
      if (o.$$.dirty & 262144) {
        e: n(4, (r = s?.selectedApp ?? void 0));
      }
      if (o.$$.dirty & 262144) {
        e: n(3, (i = s?.recipients || []));
      }
      if (o.$$.dirty & 262144) {
        e: s?.selectedApp === null && n(2, (g = !0));
      }
    }),
    [d, m, g, i, r, l, t, u, b, k, E, I, T, P, M, B, O, p, s, z, G]
  );
}
var tr = class extends H {
    constructor(e) {
      super(), j(this, e, H3, U3, U, { source: 17 }, z3);
    }
  },
  cp = tr;
N();
N();
N();
N();
function V3(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne,
    te,
    le,
    re,
    se,
    ae,
    me,
    ce,
    ke,
    Re,
    Pe,
    De,
    _e,
    Le,
    ze,
    Xe,
    xe,
    be,
    he,
    de,
    Ie,
    Ke,
    Ue,
    ge,
    Be,
    _t,
    et,
    Ee,
    ot,
    bt,
    Lt,
    Ut,
    Pt,
    jt,
    fn,
    sn,
    Ht,
    Vt,
    dn;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("path")),
        (l = F("path")),
        (r = F("path")),
        (i = F("path")),
        (s = F("path")),
        (a = F("path")),
        (u = F("path")),
        (p = F("path")),
        (d = F("path")),
        (m = F("path")),
        (g = F("path")),
        (b = F("path")),
        (k = F("path")),
        (E = F("path")),
        (I = F("path")),
        (T = F("path")),
        (P = F("path")),
        (M = F("path")),
        (B = F("path")),
        (O = F("path")),
        (z = F("path")),
        (G = F("path")),
        (W = F("path")),
        (D = F("path")),
        (R = F("path")),
        (K = F("path")),
        (ne = F("path")),
        (te = F("path")),
        (le = F("path")),
        (re = F("path")),
        (se = F("path")),
        (ae = F("path")),
        (me = F("path")),
        (ce = F("path")),
        (ke = F("path")),
        (Re = F("path")),
        (Pe = F("path")),
        (De = F("path")),
        (_e = F("path")),
        (Le = F("path")),
        (ze = F("path")),
        (Xe = F("path")),
        (xe = F("path")),
        (be = F("path")),
        (he = F("path")),
        (de = F("path")),
        (Ie = F("path")),
        (Ke = F("path")),
        (Ue = F("path")),
        (ge = F("path")),
        (Be = F("path")),
        (_t = F("path")),
        (et = F("path")),
        (Ee = F("path")),
        (ot = F("path")),
        (bt = F("path")),
        (Lt = F("path")),
        (Ut = F("path")),
        (Pt = F("path")),
        (jt = F("path")),
        (fn = F("path")),
        (sn = F("path")),
        (Ht = F("path")),
        (Vt = F("path")),
        (dn = F("path")),
        c(
          n,
          "d",
          "M255.753 141.191c-8.359-53.306-39.236-100.476-80.325-117.551C109.502-3.77 28.374 42.802-9.855 96.861c-38.452 54.434-32.47 120.028-.46 177.934 25.15 45.493 110.891 74.463 187.882 32.105 60.957-33.53 88.823-97.827 78.186-165.709z"
        ),
        c(n, "fill", "#92C6E3"),
        c(
          t,
          "d",
          "M255.753 141.191c-8.359-53.306-39.236-100.476-80.325-117.551C109.502-3.77 28.374 42.802-9.855 96.861c-38.452 54.434-32.47 120.028-.46 177.934 25.15 45.493 110.891 74.463 187.882 32.105 60.957-33.53 88.823-97.827 78.186-165.709z"
        ),
        c(t, "fill", "#fff"),
        c(t, "fill-opacity", ".7"),
        c(
          l,
          "d",
          "M98.058 249.888c-8.409 5.502-17.89 20.182-22.63 26.142-4.741 5.961-4.733 14.525-6.722 16.817-1.99 2.293-8.868-4.74-7.37-9.939 1.499-5.199 4.094-6.264 3.521-8.712-.573-2.448-1.99-3.979-.458-7.188 1.53-3.21 5.96-.148 10.398-3.21s8.867-16.211 14.37-29.966c5.501-13.755 17.127-13.461 18.503-15.597 1.375-2.137 9.17-29.975 17.128-28.591 7.958 1.383 22.336 15.441 17.759 23.121-4.577 7.68-9.94 7.5-16.375 11.93-6.436 4.429-5.658 5.354-9.94 9.939-4.282 4.585-7.369 5.355-9.636 5.961 0 0-3.21 3.52-5.2 6.116-1.99 2.595-3.348 3.177-3.348 3.177z"
        ),
        c(l, "fill", "#fff"),
        c(
          r,
          "d",
          "M82.74 258.206c2.645-4.962 10.586-16.883 18.831-24.161 8.245-7.279 34.429-18.209 34.429-18.209l5.092-1.016a21.07 21.07 0 0 0 1.433-2.096c4.585-7.639-9.784-21.705-17.734-23.08-7.95-1.376-15.753 26.445-17.128 28.59-1.376 2.146-12.994 1.834-18.504 15.598-5.51 13.763-9.94 26.912-14.37 29.966-4.429 3.054-8.866 0-10.397 3.21-1.531 3.209-.156 4.74.458 7.188.614 2.448-1.99 3.521-3.52 8.712-1.532 5.191 5.354 12.232 7.368 9.939a10.487 10.487 0 0 0 1.515-3.831 21.117 21.117 0 0 1-1.056-10.644c1.015-8.245 10.93-15.196 13.583-20.166z"
        ),
        c(r, "fill", "#92C6E3"),
        c(i, "opacity", ".5"),
        c(
          i,
          "d",
          "M82.74 258.206c2.645-4.962 10.586-16.883 18.831-24.161 8.245-7.279 34.429-18.209 34.429-18.209l5.092-1.016a21.07 21.07 0 0 0 1.433-2.096c4.585-7.639-9.784-21.705-17.734-23.08-7.95-1.376-15.753 26.445-17.128 28.59-1.376 2.146-12.994 1.834-18.504 15.598-5.51 13.763-9.94 26.912-14.37 29.966-4.429 3.054-8.866 0-10.397 3.21-1.531 3.209-.156 4.74.458 7.188.614 2.448-1.99 3.521-3.52 8.712-1.532 5.191 5.354 12.232 7.368 9.939a10.487 10.487 0 0 0 1.515-3.831 21.117 21.117 0 0 1-1.056-10.644c1.015-8.245 10.93-15.196 13.583-20.166z"
        ),
        c(i, "fill", "#fff"),
        c(
          s,
          "d",
          "M98.058 249.888c-8.409 5.502-17.89 20.182-22.63 26.142-4.741 5.961-4.733 14.525-6.722 16.817-1.99 2.293-8.868-4.74-7.37-9.939 1.499-5.199 4.094-6.264 3.521-8.712-.573-2.448-1.99-3.979-.458-7.188 1.53-3.21 5.96-.148 10.398-3.21s8.867-16.211 14.37-29.966c5.501-13.755 17.127-13.461 18.503-15.597 1.375-2.137 9.17-29.975 17.128-28.591 7.958 1.383 22.336 15.441 17.759 23.121-4.577 7.68-9.94 7.5-16.375 11.93-6.436 4.429-5.658 5.354-9.94 9.939-4.282 4.585-7.369 5.355-9.636 5.961 0 0-3.21 3.52-5.2 6.116-1.99 2.595-3.348 3.177-3.348 3.177z"
        ),
        c(s, "stroke", "#263238"),
        c(s, "stroke-miterlimit", "10"),
        c(s, "stroke-linecap", "round"),
        c(
          a,
          "d",
          "M96.895 250.706a16.43 16.43 0 0 1-5.412-1.277c-3.357-1.408-4.675-5.052-5.166-8.278-4.225 10.849-7.86 20.142-11.463 22.647-4.437 3.062-8.867 0-10.398 3.21-1.531 3.209-.156 4.74.459 7.188.614 2.448-1.99 3.521-3.521 8.712s5.355 12.232 7.369 9.94c2.014-2.293 1.99-10.857 6.722-16.818 4.511-5.69 13.304-19.306 21.41-25.324z"
        ),
        c(a, "fill", "#92C6E3"),
        c(u, "opacity", ".2"),
        c(
          u,
          "d",
          "M68.707 292.847c.116-.138.22-.286.31-.442l.074-.122c.09-.164.18-.344.27-.549 0 0 0-.074.041-.106.074-.181.148-.369.213-.565.026-.062.048-.125.066-.189.082-.229.155-.466.23-.712l.073-.262c.049-.188.106-.385.164-.59l.073-.294a21.115 21.115 0 0 1-1.056-10.644c.99-8.278 10.922-15.229 13.575-20.199a95.292 95.292 0 0 1 6.59-10.201c-1.808-1.769-2.644-4.422-3.012-6.845l-.72 1.834-.115.311-.72 1.834-.68 1.719-.115.287c-.22.557-.442 1.105-.663 1.637l-.115.287c-.22.549-.442 1.089-.663 1.638l-.655 1.539-.123.286c-.213.492-.425.966-.638 1.433l-.099.229-.597 1.294-.066.139c-.213.442-.417.868-.622 1.277-.041.091-.09.172-.131.246-.205.41-.41.819-.614 1.187l-.074.14-.581 1.023-.09.156c-.205.343-.401.663-.606.974l-.123.18c-.204.311-.41.598-.606.868l-.057.065c-.188.254-.385.492-.573.713l-.107.122c-.196.23-.4.426-.597.615l-.115.106c-.194.176-.4.34-.614.491a8.517 8.517 0 0 1-4.094 1.458c-.819.081-1.523.081-2.219.09-.64-.011-1.28.027-1.915.114a2.668 2.668 0 0 0-2.195 1.548 6.382 6.382 0 0 0-.696 2.595c-.008.293.008.586.05.876.016.138.04.275.073.41.23 1.089.729 2.087 1.032 3.275.069.281.099.57.09.859-.066 1.097-.819 2.023-1.638 3.455a18.223 18.223 0 0 0-1.948 4.397 6.813 6.813 0 0 0 .22 4.094 11.826 11.826 0 0 0 1.49 2.874c.206.294.419.573.64.818 1.768 2.195 3.987 3.374 4.978 2.227z"
        ),
        c(u, "fill", "#000"),
        c(
          p,
          "d",
          "M96.895 250.706a16.43 16.43 0 0 1-5.412-1.277c-3.357-1.408-4.675-5.052-5.166-8.278-4.225 10.849-7.86 20.142-11.463 22.647-4.437 3.062-8.867 0-10.398 3.21-1.531 3.209-.156 4.74.459 7.188.614 2.448-1.99 3.521-3.521 8.712s5.355 12.232 7.369 9.94c2.014-2.293 1.99-10.857 6.722-16.818 4.511-5.69 13.304-19.306 21.41-25.324z"
        ),
        c(p, "stroke", "#263238"),
        c(p, "stroke-miterlimit", "10"),
        c(p, "stroke-linecap", "round"),
        c(
          d,
          "d",
          "M61.164 168.078s7.492 10.087 15.442 9.972c7.95-.115 12.584-7.156 16.67-6.673 3.02.457 5.98 1.248 8.826 2.358 0 0 28.394-38.047 34.928-44.491 6.533-6.443 10.308-13.82 1.334-16.096-8.973-2.277-27.715 1.76-37.114 10.021-9.4 8.261-39.185 41.134-39.185 41.134l-.9 3.775z"
        ),
        c(d, "fill", "#92C6E3"),
        c(m, "opacity", ".5"),
        c(
          m,
          "d",
          "M61.164 168.078s7.492 10.087 15.442 9.972c7.95-.115 12.584-7.156 16.67-6.673 3.02.457 5.98 1.248 8.826 2.358 0 0 28.394-38.047 34.928-44.491 6.533-6.443 10.308-13.82 1.334-16.096-8.973-2.277-27.715 1.76-37.114 10.021-9.4 8.261-39.185 41.134-39.185 41.134l-.9 3.775z"
        ),
        c(m, "fill", "#000"),
        c(m, "stroke", "#263238"),
        c(m, "stroke-miterlimit", "10"),
        c(m, "stroke-linecap", "round"),
        c(
          g,
          "d",
          "M61.164 168.078s7.492 10.087 15.442 9.972c7.95-.115 12.584-7.156 16.67-6.673 3.02.457 5.98 1.248 8.826 2.358 0 0 28.394-38.047 34.928-44.491 6.533-6.443 10.308-13.82 1.334-16.096-8.973-2.277-27.715 1.76-37.114 10.021-9.4 8.261-39.185 41.134-39.185 41.134l-.9 3.775z"
        ),
        c(g, "stroke", "#263238"),
        c(g, "stroke-miterlimit", "10"),
        c(g, "stroke-linecap", "round"),
        c(
          b,
          "d",
          "M168.421 79.243s2.293-5.502 6.878-7.95a23.455 23.455 0 0 1 9.825-2.456l11.921-7.369s3.365-11.626 14.836-16.375c11.47-4.749 60.243-22.475 60.702-22.778.458-.303 6.116-3.062 6.116-2.603a5.748 5.748 0 0 1-.458 2.292c-.459 1.228-11.774 8.564-11.774 8.564s5.502-3.365 5.657-1.637c.156 1.727 0 2.137-1.989 3.365-1.99 1.228-5.658 3.512-6.419 3.97-.762.46-3.668 3.21-5.969 3.521-2.301.312-8.097.762-8.556 1.22-.458.459-15.45 14.983-20.338 19.118-4.888 4.135-12.846 7.95-12.846 7.95s-10.701 11.463-18.831 17.432c-8.13 5.968-13.608 7.491-13.608 7.491l-.614.606s.459 5.355.459 5.969c0 .614 4.437 15.744 2.456 24.153-1.982 8.409-5.813 11.929-5.813 11.929s-.606 9.94-3.054 13.608c-2.448 3.668-9.178 8.105-13.919 11.626-4.741 3.521-5.347 11.315-5.658 12.232-.311.917-4.093 16.515-6.116 20.33-2.022 3.815-8.187 5.969-9.211 6.272-.556.163-6.255 8.809-11.741 8.384a14.737 14.737 0 0 1-13.665-13.706 24.219 24.219 0 0 1 .164-4.528c1.22-9.334 4.913-13.207 4.913-13.207s7.835-30.613 7.066-38.718c-.77-8.106-.917-13.149 1.375-17.735 2.293-4.585 9.784-11.618 21.41-16.669 11.627-5.052 12.994-8.409 12.994-14.214a16.688 16.688 0 0 1 3.807-10.087z"
        ),
        c(b, "fill", "#fff"),
        c(
          k,
          "d",
          "m185.445 109.291-.09-.041s-.663 9.932-2.317 16.555c-1.654 6.624-8.605 10.923-8.605 10.923l-3.643 9.931s-8.278 7.606-13.575 7.606c-5.298 0-5.985-4.298-5.985-4.298-4.987-4.241-15.802-7.164-22.819-5.51-1.097 8.67-4.151 21.787-5.731 28.288 2.955 1.58 7.696 3.07 14.647 2.382a69.194 69.194 0 0 0 20.788-5.641c.696-2.784 2.047-6.468 4.913-8.589l1.596-1.171c-4.798 1.998-10.889 8.507-15.368 9.105-4.969.663-6.623-.328-6.288-2.317.336-1.99 7.222-.729 9.596-1.638 2.375-.908.336-1.318-4.634-1.981-4.97-.663-3.971-2.653-3.971-2.653s8.065.672 9.596 0c1.531-.671 12.281-3.275 17.194-7.614 4.912-4.34 5.338-13.551 5.338-13.551l3.815-1.907c.082-.909.115-1.474.115-1.474s3.824-3.512 5.813-11.929c.958-4.078.426-9.678-.385-14.476zM225.861 56.654c-9.563 4.143-11.463 2.865-11.463 2.865a18.356 18.356 0 0 1 2.325 1.99c1.384 1.343-.417 5.657-5.518 9.49-5.101 3.831-21.681 14.04-24.546 14.04-2.866 0-2.866-9.554-2.866-9.554a56.271 56.271 0 0 0-.72 18.013l.466-.459s5.502-1.531 13.608-7.492c8.106-5.96 18.831-17.43 18.831-17.43s7.95-3.824 12.847-7.95c2.685-2.269 8.408-7.672 13.1-12.16a132.938 132.938 0 0 1-16.064 8.647z"
        ),
        c(k, "fill", "#92C6E3"),
        c(E, "opacity", ".5"),
        c(
          E,
          "d",
          "M225.861 56.654c-9.563 4.143-11.463 2.865-11.463 2.865a18.356 18.356 0 0 1 2.325 1.99c1.384 1.343-.417 5.657-5.518 9.49-5.101 3.831-21.681 14.04-24.546 14.04-2.866 0-2.866-9.554-2.866-9.554a56.271 56.271 0 0 0-.72 18.013l.466-.459s5.502-1.531 13.608-7.492c8.106-5.96 18.831-17.43 18.831-17.43s7.95-3.824 12.847-7.95c2.685-2.269 8.408-7.672 13.1-12.16a132.938 132.938 0 0 1-16.064 8.647zM185.445 109.291l-.09-.041s-.663 9.932-2.317 16.555c-1.654 6.624-8.605 10.923-8.605 10.923l-3.643 9.931s-8.278 7.606-13.575 7.606c-5.298 0-5.985-4.298-5.985-4.298-4.987-4.241-15.802-7.164-22.819-5.51-1.097 8.67-4.151 21.787-5.731 28.288 2.955 1.58 7.696 3.07 14.647 2.382a69.194 69.194 0 0 0 20.788-5.641c.696-2.784 2.047-6.468 4.913-8.589l1.596-1.171c-4.798 1.998-10.889 8.507-15.368 9.105-4.969.663-6.623-.328-6.288-2.317.336-1.99 7.222-.729 9.596-1.638 2.375-.908.336-1.318-4.634-1.981-4.97-.663-3.971-2.653-3.971-2.653s8.065.672 9.596 0c1.531-.671 12.281-3.275 17.194-7.614 4.912-4.34 5.338-13.551 5.338-13.551l3.815-1.907c.082-.909.115-1.474.115-1.474s3.824-3.512 5.813-11.929c.958-4.078.426-9.678-.385-14.476z"
        ),
        c(E, "fill", "#fff"),
        c(
          I,
          "d",
          "M168.421 79.243s2.293-5.502 6.878-7.95a23.455 23.455 0 0 1 9.825-2.456l11.921-7.369s3.365-11.626 14.836-16.375c11.47-4.749 60.243-22.475 60.702-22.778.458-.303 6.116-3.062 6.116-2.603a5.748 5.748 0 0 1-.458 2.292c-.459 1.228-11.774 8.564-11.774 8.564s5.502-3.365 5.657-1.637c.156 1.727 0 2.137-1.989 3.365-1.99 1.228-5.658 3.512-6.419 3.97-.762.46-3.668 3.21-5.969 3.521-2.301.312-8.097.762-8.556 1.22-.458.459-15.45 14.983-20.338 19.118-4.888 4.135-12.846 7.95-12.846 7.95s-10.701 11.463-18.831 17.432c-8.13 5.968-13.608 7.491-13.608 7.491l-.614.606s.459 5.355.459 5.969c0 .614 4.437 15.744 2.456 24.153-1.982 8.409-5.813 11.929-5.813 11.929s-.606 9.94-3.054 13.608c-2.448 3.668-9.178 8.105-13.919 11.626-4.741 3.521-5.347 11.315-5.658 12.232-.311.917-4.093 16.515-6.116 20.33-2.022 3.815-8.187 5.969-9.211 6.272-.556.163-6.255 8.809-11.741 8.384a14.737 14.737 0 0 1-13.665-13.706 24.219 24.219 0 0 1 .164-4.528c1.22-9.334 4.913-13.207 4.913-13.207s7.835-30.613 7.066-38.718c-.77-8.106-.917-13.149 1.375-17.735 2.293-4.585 9.784-11.618 21.41-16.669 11.627-5.052 12.994-8.409 12.994-14.214a16.688 16.688 0 0 1 3.807-10.087v0z"
        ),
        c(I, "stroke", "#263238"),
        c(I, "stroke-miterlimit", "10"),
        c(I, "stroke-linecap", "round"),
        c(
          T,
          "d",
          "M179.881 132.04c1.617-6.876-.64-13.289-5.041-14.324-4.402-1.036-9.282 3.698-10.899 10.573-1.618 6.876.639 13.289 5.041 14.325 4.401 1.035 9.281-3.699 10.899-10.574z"
        ),
        c(T, "fill", "#92C6E3"),
        c(
          P,
          "d",
          "M152.048 160.897c-8.261 1.834-11.462-2.145-11.462-2.145s.917 6.116 9.637 7.033"
        ),
        c(P, "stroke", "#263238"),
        c(P, "stroke-linecap", "round"),
        c(P, "stroke-linejoin", "round"),
        c(
          M,
          "d",
          "M171.459 124.045s4.741 11.463.917 20.183c-3.823 8.719-9.334 12.043-19.724 13.763M161.521 161.044s-6.271 5.658-11.167 7.492c-4.896 1.834-8.712 5.052-12.838-.458"
        ),
        c(M, "stroke", "#263238"),
        c(M, "stroke-miterlimit", "10"),
        c(M, "stroke-linecap", "round"),
        c(
          B,
          "d",
          "M210.75 61.656s3.824-2.595 5.961-.147c2.136 2.448-.762 6.55-.762 6.55M184.149 72.972a114.46 114.46 0 0 0-1.81 12.387 27.717 27.717 0 0 0 .606 8.253"
        ),
        c(B, "stroke", "#263238"),
        c(B, "stroke-linecap", "round"),
        c(B, "stroke-linejoin", "round"),
        c(O, "d", "m148.141 128.565 9.161-4.864"),
        c(O, "stroke", "#263238"),
        c(O, "stroke-miterlimit", "10"),
        c(O, "stroke-linecap", "round"),
        c(
          z,
          "d",
          "M272.529 22.364c-.41.27-39.145 14.37-55.675 20.797 1.49.065 9.301.72 11.372 7.491a27.096 27.096 0 0 1 1.244 8.933c5.437-4.724 19.266-18.127 19.708-18.57.442-.442 6.263-.916 8.556-1.22 2.292-.302 5.199-3.062 5.969-3.52.769-.459 4.429-2.751 6.419-3.971 1.989-1.22 2.145-1.687 1.989-3.365-.155-1.679-5.657 1.637-5.657 1.637s11.315-7.368 11.773-8.564a5.732 5.732 0 0 0 .459-2.292c-.041-.418-5.699 2.333-6.157 2.644z"
        ),
        c(z, "fill", "#92C6E3"),
        c(z, "stroke", "#263238"),
        c(z, "stroke-linecap", "round"),
        c(z, "stroke-linejoin", "round"),
        c(G, "d", "m266.411 30.617-5.354 2.751"),
        c(G, "stroke", "#263238"),
        c(G, "stroke-linecap", "round"),
        c(G, "stroke-linejoin", "round"),
        c(
          W,
          "d",
          "M158.473 168.266a85.963 85.963 0 0 0-5.936 2.546 52.911 52.911 0 0 1-18.241 5.027c-4.978.418-9.211-1.809-11.529-3.381-.63 2.587-1.039 4.217-1.039 4.217s-3.693 3.872-4.913 13.206a24.219 24.219 0 0 0-.164 4.528 14.739 14.739 0 0 0 13.665 13.706c5.486.425 11.185-8.188 11.741-8.384 1.065-.303 7.23-2.457 9.211-6.272 1.982-3.815 5.813-19.413 6.116-20.33.148-.442.393-2.48 1.089-4.863z"
        ),
        c(W, "fill", "#263238"),
        c(W, "stroke", "#263238"),
        c(W, "stroke-miterlimit", "10"),
        c(W, "stroke-linecap", "round"),
        c(D, "d", "M125.682 181.186s6.55-2.825 13.165-.475"),
        c(D, "stroke", "#fff"),
        c(D, "stroke-width", ".75"),
        c(D, "stroke-linecap", "round"),
        c(D, "stroke-linejoin", "round"),
        c(
          R,
          "d",
          "M139.504 173.146c-8.441.95-13.329-2.137-15.81-4.577a292.675 292.675 0 0 1-1.417 5.887 22.634 22.634 0 0 0 14.5 3.275c9.105-1.122 17.366-4.847 21.026-6.698.033-.191.074-.387.123-.589a26.3 26.3 0 0 1 .483-1.932c0-.041 0-.082.041-.131.065-.213.131-.434.205-.655a.546.546 0 0 0 0-.099c.252-.756.55-1.497.892-2.218a43.458 43.458 0 0 1-20.043 7.737zM113.858 119.428s-1.482.753 3.865-2.76c5.346-3.512 3.733 1.572 7.369-7.45 3.635-9.023 7.647-15.745 14.221-18.193 6.575-2.448 25.996 1.073 25.996 1.073l4.585 3.21-6.387 12.379a12.004 12.004 0 0 0-9.931-.311c-5.199 2.292-7.958 5.043-7.369 7.491.59 2.448 5.502 9.178 5.502 9.178s-23.154-9.096-26.822-7.115c-3.668 1.982-14.844 6.043-15.458 6.354-.614.311 4.429-3.856 4.429-3.856z"
        ),
        c(R, "fill", "#92C6E3"),
        c(R, "stroke", "#263238"),
        c(R, "stroke-miterlimit", "10"),
        c(R, "stroke-linecap", "round"),
        c(
          K,
          "d",
          "M128.113 112.263a61.753 61.753 0 0 0 2.514-3.971c3.979-6.722 11.929-9.628 11.929-9.628M143.141 106.008a16.738 16.738 0 0 0-10.366 7.639"
        ),
        c(K, "stroke", "#263238"),
        c(K, "stroke-miterlimit", "10"),
        c(K, "stroke-linecap", "round"),
        c(
          ne,
          "d",
          "M138.892 127.869s-9.325-1.376-16.375 4.585c-7.049 5.96-6.255 12.355-6.255 12.355s-6.886 3.054-8.261 6.55a27.356 27.356 0 0 0-1.638 6.419s-3.668 3.52-6.73 7.033c-3.062 3.512-5.657 4.094-6.272 8.72-.614 4.626-.303 15.9 3.063 27.059 3.365 11.16 5.657 16.056 6.55 18.013.892 1.957 8.867 12.076 10.242 12.388 1.376.311 2.751.605 3.824 0 1.072-.606 9.006-2.457 8.719-4.741a6.027 6.027 0 0 0-1.228-3.365l-.303-.459s1.376-2.603.459-3.823c-.917-1.22-1.687-1.376-3.365-2.907-1.679-1.531-2.596-1.989-4.585-1.989-1.99 0-4.094.155-4.094.155s-3.062-1.228-3.062-10.095 2.751-16.514 4.094-20.469a23.822 23.822 0 0 0 1.375-7.033s1.073 1.531 8.564-1.989c7.492-3.521 9.179-13.452 9.179-13.452l-11.037 1.752a72.778 72.778 0 0 0 15.9-3.21c8.564-2.751 12.232-3.209 15.556-16.211"
        ),
        c(ne, "fill", "#fff"),
        c(
          te,
          "d",
          "M124.348 156.214c-1.572-2.104 7.369-8.187 9.735-10.521 2.367-2.333-7.63 3.946-9.997 4.47-2.366.524-4.47-1.056-3.152-8.416a24.907 24.907 0 0 1 6.477-12.282 18.993 18.993 0 0 0-4.913 2.981c-7.033 5.96-6.263 12.387-6.263 12.387s-6.886 3.054-8.262 6.55a27.366 27.366 0 0 0-1.637 6.419s-3.668 3.521-6.73 7.033c-3.062 3.513-5.658 4.094-6.272 8.72-.614 4.626-.303 15.9 3.062 27.06 3.365 11.16 5.658 16.056 6.55 18.013.893 1.956 8.867 12.076 10.243 12.387 1.375.311 2.751.606 3.823 0 1.073-.606 9.007-2.456 8.72-4.74a10.393 10.393 0 0 0-.336-1.638c-2.931.369-8.294 2.244-9.735 2.244-1.572 0-3.152-2.367-5.518-5.003-2.366-2.636-6.051-9.465-6.55-17.882-.499-8.416 3.152-16.309 3.152-20.256 0-3.946-4.732 5.265-3.684 1.319 1.048-3.947 5.264-9.735 8.417-11.315 3.152-1.581 6.844-2.629 8.187-5.257 1.343-2.628-4.732-.819-2.628-2.898 2.104-2.08 15.785-4.782 20.256-7.369 4.47-2.587-11.364.098-12.945-2.006z"
        ),
        c(te, "fill", "#92C6E3"),
        c(le, "opacity", ".5"),
        c(
          le,
          "d",
          "M124.348 156.214c-1.572-2.104 7.369-8.187 9.735-10.521 2.367-2.333-7.63 3.946-9.997 4.47-2.366.524-4.47-1.056-3.152-8.416a24.907 24.907 0 0 1 6.477-12.282 18.993 18.993 0 0 0-4.913 2.981c-7.033 5.96-6.263 12.387-6.263 12.387s-6.886 3.054-8.262 6.55a27.366 27.366 0 0 0-1.637 6.419s-3.668 3.521-6.73 7.033c-3.062 3.513-5.658 4.094-6.272 8.72-.614 4.626-.303 15.9 3.062 27.06 3.365 11.16 5.658 16.056 6.55 18.013.893 1.956 8.867 12.076 10.243 12.387 1.375.311 2.751.606 3.823 0 1.073-.606 9.007-2.456 8.72-4.74a10.393 10.393 0 0 0-.336-1.638c-2.931.369-8.294 2.244-9.735 2.244-1.572 0-3.152-2.367-5.518-5.003-2.366-2.636-6.051-9.465-6.55-17.882-.499-8.416 3.152-16.309 3.152-20.256 0-3.946-4.732 5.265-3.684 1.319 1.048-3.947 5.264-9.735 8.417-11.315 3.152-1.581 6.844-2.629 8.187-5.257 1.343-2.628-4.732-.819-2.628-2.898 2.104-2.08 15.785-4.782 20.256-7.369 4.47-2.587-11.364.098-12.945-2.006z"
        ),
        c(le, "fill", "#fff"),
        c(
          re,
          "d",
          "M138.892 127.869s-9.325-1.376-16.375 4.585c-7.049 5.96-6.255 12.355-6.255 12.355s-6.886 3.054-8.261 6.55a27.356 27.356 0 0 0-1.638 6.419s-3.668 3.52-6.73 7.033c-3.062 3.512-5.657 4.094-6.272 8.72-.614 4.626-.303 15.9 3.063 27.059 3.365 11.16 5.657 16.056 6.55 18.013.892 1.957 8.867 12.076 10.242 12.388 1.376.311 2.751.605 3.824 0 1.072-.606 9.006-2.457 8.719-4.741a6.027 6.027 0 0 0-1.228-3.365l-.303-.459s1.376-2.603.459-3.823c-.917-1.22-1.687-1.376-3.365-2.907-1.679-1.531-2.596-1.989-4.585-1.989-1.99 0-4.094.155-4.094.155s-3.062-1.228-3.062-10.095 2.751-16.514 4.094-20.469a23.822 23.822 0 0 0 1.375-7.033s1.073 1.531 8.564-1.989c7.492-3.521 9.179-13.452 9.179-13.452l-11.037 1.752a72.778 72.778 0 0 0 15.9-3.21c8.564-2.751 12.232-3.209 15.556-16.211"
        ),
        c(re, "stroke", "#263238"),
        c(re, "stroke-miterlimit", "10"),
        c(re, "stroke-linecap", "round"),
        c(se, "d", "m115.03 176.339-.876-7.017"),
        c(se, "stroke", "#263238"),
        c(se, "stroke-linecap", "round"),
        c(se, "stroke-linejoin", "round"),
        c(
          ae,
          "d",
          "M158.302 122.056c4.438-1.376 5.51-6.878 8.106-12.691a117.43 117.43 0 0 1 6.926-12.535 38.164 38.164 0 0 1-13.149-2.145c-6.886-2.457-14.991-.762-16.514.917-1.523 1.678-1.376-.459-1.073 4.74.303 5.199 2.293 12.691 4.094 15.295 1.801 2.603 2.907 4.093 2.907 4.093"
        ),
        c(ae, "fill", "#fff"),
        c(
          me,
          "d",
          "M171.371 96.814a38.918 38.918 0 0 1-11.225-2.13c-6.886-2.455-14.991-.76-16.514.918-1.523 1.678-1.376-.459-1.073 4.74.303 5.199 2.293 12.691 4.094 15.295l.655.917 24.44-19.552-.377-.188z"
        ),
        c(me, "fill", "#92C6E3"),
        c(ce, "opacity", ".5"),
        c(
          ce,
          "d",
          "M171.371 96.814a38.918 38.918 0 0 1-11.225-2.13c-6.886-2.455-14.991-.76-16.514.918-1.523 1.678-1.376-.459-1.073 4.74.303 5.199 2.293 12.691 4.094 15.295l.655.917 24.44-19.552-.377-.188z"
        ),
        c(ce, "fill", "#fff"),
        c(
          ke,
          "d",
          "M158.302 122.056c4.438-1.376 5.51-6.878 8.106-12.691a117.43 117.43 0 0 1 6.926-12.535 38.164 38.164 0 0 1-13.149-2.145c-6.886-2.457-14.991-.762-16.514.917-1.523 1.678-1.376-.459-1.073 4.74.303 5.199 2.293 12.691 4.094 15.295 1.801 2.603 2.907 4.093 2.907 4.093"
        ),
        c(ke, "stroke", "#263238"),
        c(ke, "stroke-miterlimit", "10"),
        c(ke, "stroke-linecap", "round"),
        c(
          Re,
          "d",
          "M157.238 113.033a31.21 31.21 0 0 0 8.048-.991c.352-.876.721-1.768 1.122-2.677a117.43 117.43 0 0 1 6.926-12.535 38.164 38.164 0 0 1-13.149-2.145c-6.886-2.457-14.991-.762-16.514.917-1.523 1.678-1.376-.459-1.073 4.74a45.65 45.65 0 0 0 1.548 8.835c2.472 2.063 6.525 3.79 13.092 3.856z"
        ),
        c(Re, "stroke", "#263238"),
        c(Re, "stroke-miterlimit", "10"),
        c(Re, "stroke-linecap", "round"),
        c(
          Pe,
          "d",
          "M162.943 66.34c.441-1.809.764-3.644.967-5.494.311-2.907-6.673-8.057-13.862-7.443-7.189.614-4.585 7.647-5.502 9.94-.917 2.292-7.803-.156-9.637 3.97-1.834 4.127 1.376 5.355 1.376 6.55 0 1.196-5.658 4.439-4.913 11.627.745 7.189 13.149 14.214 15.9 14.828 2.751.614 6.117-1.99 6.117-4.094s4.585-2.907 5.813-4.913c1.228-2.006-1.99-8.867-1.842-10.398.147-1.53 4.912-7.639 3.365-9.17-1.548-1.53 2.218-5.403 2.218-5.403z"
        ),
        c(Pe, "fill", "#263238"),
        c(Pe, "stroke", "#263238"),
        c(Pe, "stroke-miterlimit", "10"),
        c(Pe, "stroke-linecap", "round"),
        c(
          De,
          "d",
          "M155.624 68.06s2.374-.263 2.374-5.528c0-5.264-7.631-3.946-8.687-1.842-1.056 2.105-.262 6.05-2.89 7.107-2.628 1.056-6.845 1.048-6.845 3.152v2.899"
        ),
        c(De, "stroke", "#fff"),
        c(De, "stroke-width", ".75"),
        c(De, "stroke-linecap", "round"),
        c(De, "stroke-linejoin", "round"),
        c(
          _e,
          "d",
          "M148.773 72.267s-9.735-.524-14.738 8.417M150.106 74.633s-6.55.263-9.997 4.733"
        ),
        c(_e, "stroke", "#fff"),
        c(_e, "stroke-width", ".75"),
        c(_e, "stroke-linecap", "round"),
        c(_e, "stroke-linejoin", "round"),
        c(
          Le,
          "d",
          "M161.323 67.306c.434-.565 6.092 5.314 6.313 5.977.223.808.401 1.628.532 2.456a1.157 1.157 0 0 0 .491.77l3.955 2.71a1.187 1.187 0 0 1 .303 1.638l-1.376 1.98a1.158 1.158 0 0 0-.098 1.171c1.105 2.375 5.019 10.808 4.757 11.463a3.374 3.374 0 0 1-1.687 1.834c-.761.303-14.827 5.043-16.514 5.199-1.294.115-4.405-5.2-5.78-7.672a1.197 1.197 0 0 0-1.638-.417 4.093 4.093 0 0 1-3.897.106c-3.062-1.383-6.55-3.979-5.052-6.886 1.498-2.906 3.979-3.053 5.052-2.292.712.508 1.973 1.572 2.734 2.21a1.174 1.174 0 0 0 1.351.132l.647-.377a1.17 1.17 0 0 0 .32-1.801 3.713 3.713 0 0 1-.574-1.032s4.43-3.823 2.907-5.96c-1.523-2.137-5.658-5.355-5.199-7.034.458-1.678 6.55-3.823 9.17-3.823.974-.033 2.964.074 3.283-.352z"
        ),
        c(Le, "fill", "#fff"),
        c(
          ze,
          "d",
          "M154.028 78.49c1.523 2.137-2.907 5.96-2.907 5.96.135.373.328.721.573 1.032a1.166 1.166 0 0 1 .274.977 1.171 1.171 0 0 1-.593.824l-.647.377a1.17 1.17 0 0 1-1.351-.131c-.761-.639-2.022-1.703-2.735-2.21-1.072-.762-3.52-.615-5.051 2.292-1.531 2.906 1.989 5.502 5.051 6.885a4.099 4.099 0 0 0 3.898-.106 1.194 1.194 0 0 1 1.637.418c1.376 2.456 4.487 7.786 5.781 7.671 1.686-.155 15.752-4.912 16.514-5.199a3.374 3.374 0 0 0 1.687-1.834s-6.076 2.874-9.383-.106c-3.308-2.98-7.615-7.279-8.941-9.269-1.327-1.99 1.433-6.386-1.327-10.594-2.759-4.209-7.72-4.037-7.72-4.037-.418 1.687 3.709 4.897 5.24 7.05z"
        ),
        c(ze, "fill", "#92C6E3"),
        c(Xe, "opacity", ".5"),
        c(
          Xe,
          "d",
          "M154.028 78.49c1.523 2.137-2.907 5.96-2.907 5.96.135.373.328.721.573 1.032a1.166 1.166 0 0 1 .274.977 1.171 1.171 0 0 1-.593.824l-.647.377a1.17 1.17 0 0 1-1.351-.131c-.761-.639-2.022-1.703-2.735-2.21-1.072-.762-3.52-.615-5.051 2.292-1.531 2.906 1.989 5.502 5.051 6.885a4.099 4.099 0 0 0 3.898-.106 1.194 1.194 0 0 1 1.637.418c1.376 2.456 4.487 7.786 5.781 7.671 1.686-.155 15.752-4.912 16.514-5.199a3.374 3.374 0 0 0 1.687-1.834s-6.076 2.874-9.383-.106c-3.308-2.98-7.615-7.279-8.941-9.269-1.327-1.99 1.433-6.386-1.327-10.594-2.759-4.209-7.72-4.037-7.72-4.037-.418 1.687 3.709 4.897 5.24 7.05z"
        ),
        c(Xe, "fill", "#fff"),
        c(
          xe,
          "d",
          "M161.323 67.306c.434-.565 6.092 5.314 6.313 5.977.223.808.401 1.628.532 2.456a1.157 1.157 0 0 0 .491.77l3.955 2.71a1.187 1.187 0 0 1 .303 1.638l-1.376 1.98a1.158 1.158 0 0 0-.098 1.171c1.105 2.375 5.019 10.808 4.757 11.463a3.374 3.374 0 0 1-1.687 1.834c-.761.303-14.827 5.043-16.514 5.199-1.294.115-4.405-5.2-5.78-7.672a1.197 1.197 0 0 0-1.638-.417 4.093 4.093 0 0 1-3.897.106c-3.062-1.383-6.55-3.979-5.052-6.886 1.498-2.906 3.979-3.053 5.052-2.292.712.508 1.973 1.572 2.735 2.21a1.168 1.168 0 0 0 1.35.132l.647-.377a1.17 1.17 0 0 0 .32-1.801v0a3.713 3.713 0 0 1-.574-1.032s4.43-3.823 2.907-5.96c-1.523-2.137-5.658-5.355-5.199-7.034.458-1.678 6.55-3.823 9.17-3.823.974-.033 2.964.074 3.283-.352z"
        ),
        c(xe, "stroke", "#263238"),
        c(xe, "stroke-miterlimit", "10"),
        c(xe, "stroke-linecap", "round"),
        c(
          be,
          "d",
          "M165.615 75.493s-3.275 0-4.2.467c-.925.467-2.104 3.734-2.104 3.734l3.037-1.867 3.496-.696.934-2.563-1.163.925z"
        ),
        c(be, "fill", "#263238"),
        c(he, "d", "m165.843 78.76-2.8 1.4h2.8"),
        c(he, "fill", "#fff"),
        c(de, "d", "m165.843 78.76-2.8 1.4h2.8"),
        c(de, "stroke", "#263238"),
        c(de, "stroke-miterlimit", "10"),
        c(de, "stroke-linecap", "round"),
        c(
          Ie,
          "d",
          "M162.894 228.633a69.492 69.492 0 0 0-15.138 6.722c-7.173 4.429-19.118 11.47-24.465 11.798-5.346.327-7.033-1.376-10.242-2.596-3.21-1.219-4.913 2.751-4.913 5.044 0 2.292 0 3.365-1.531 5.51-1.531 2.145-5.486 10.054-5.486 10.054s-2.145 8.565 0 8.868c2.146.302 3.513-2.596 7.95-6.264 4.438-3.668 11.463-11.626 17.735-12.232 6.271-.606 34.256-3.521 45.85-9.006 11.593-5.486 10.856-3.979 14.222-6.55 3.365-2.571 2.136-7.492.458-10.857a14.11 14.11 0 0 0-3.824-4.913"
        ),
        c(Ie, "fill", "#fff"),
        c(
          Ke,
          "d",
          "M179.564 243.436c-1.375-.246-2.456-.606-2.456-1.114 0-1.326 3.971-1.326 5.96-3.971 1.99-2.644-.335-5.297-2.98-8.277-1.015-1.138-2.268-2.768-3.619-4.356l-13.542 2.915a69.52 69.52 0 0 0-15.139 6.722c-7.205 4.429-19.15 11.47-24.497 11.798-5.346.327-7.033-1.376-10.242-2.596-3.21-1.22-4.913 2.751-4.913 5.044 0 2.292 0 3.365-1.531 5.51-1.531 2.145-5.486 10.054-5.486 10.054s-2.145 8.564 0 8.867c2.146.303 3.513-2.595 7.95-6.263 4.438-3.668 11.463-11.626 17.735-12.232 6.271-.606 34.256-3.521 45.85-9.006 3.078-1.458 5.264-2.416 6.91-3.095z"
        ),
        c(Ke, "fill", "#92C6E3"),
        c(Ue, "opacity", ".5"),
        c(
          Ue,
          "d",
          "M179.564 243.436c-1.375-.246-2.456-.606-2.456-1.114 0-1.326 3.971-1.326 5.96-3.971 1.99-2.644-.335-5.297-2.98-8.277-1.015-1.138-2.268-2.768-3.619-4.356l-13.542 2.915a69.52 69.52 0 0 0-15.139 6.722c-7.205 4.429-19.15 11.47-24.497 11.798-5.346.327-7.033-1.376-10.242-2.596-3.21-1.22-4.913 2.751-4.913 5.044 0 2.292 0 3.365-1.531 5.51-1.531 2.145-5.486 10.054-5.486 10.054s-2.145 8.564 0 8.867c2.146.303 3.513-2.595 7.95-6.263 4.438-3.668 11.463-11.626 17.735-12.232 6.271-.606 34.256-3.521 45.85-9.006 3.078-1.458 5.264-2.416 6.91-3.095z"
        ),
        c(Ue, "fill", "#fff"),
        c(
          ge,
          "d",
          "M162.894 228.633a69.492 69.492 0 0 0-15.138 6.722c-7.173 4.429-19.118 11.47-24.465 11.798-5.346.327-7.033-1.376-10.242-2.596-3.21-1.219-4.913 2.751-4.913 5.044 0 2.292 0 3.365-1.531 5.51-1.531 2.145-5.486 10.054-5.486 10.054s-2.145 8.565 0 8.868c2.146.302 3.513-2.596 7.95-6.264 4.438-3.668 11.463-11.626 17.735-12.232 6.271-.606 34.256-3.521 45.85-9.006 11.593-5.486 10.856-3.979 14.222-6.55 3.365-2.571 2.136-7.492.458-10.857a14.11 14.11 0 0 0-3.824-4.913"
        ),
        c(ge, "stroke", "#263238"),
        c(ge, "stroke-miterlimit", "10"),
        c(ge, "stroke-linecap", "round"),
        c(
          Be,
          "d",
          "M187.998 230.778s-3.643-14.238-28.009-34.83c-16.375-13.853-23.703-16.817-33.029-8.564-9.325 8.253-7.491 13.616-4.094 18.831 3.398 5.216 17.121 15.139 28.436 20.191 11.315 5.051 22.786 12.076 29.205 11.462"
        ),
        c(Be, "fill", "#fff"),
        c(
          _t,
          "d",
          "M169.796 220.47c-3.316-.328 2.644 6.296-4.307 4.634-6.951-1.662-31.112-22.172-36.082-28.796-4.094-5.452-.549-9.997.818-11.462a24.393 24.393 0 0 0-3.275 2.456c-9.325 8.261-7.491 13.608-4.093 18.831 3.397 5.224 17.12 15.139 28.435 20.191 11.315 5.052 22.786 12.076 29.205 11.462l3.054-2.865c-.549-1.556-1.957-3.152-3.472-4.864-2.652-2.963-6.976-9.251-10.283-9.587z"
        ),
        c(_t, "fill", "#92C6E3"),
        c(et, "opacity", ".5"),
        c(
          et,
          "d",
          "M169.796 220.47c-3.316-.328 2.644 6.296-4.307 4.634-6.951-1.662-31.112-22.172-36.082-28.796-4.094-5.452-.549-9.997.818-11.462a24.393 24.393 0 0 0-3.275 2.456c-9.325 8.261-7.491 13.608-4.093 18.831 3.397 5.224 17.12 15.139 28.435 20.191 11.315 5.052 22.786 12.076 29.205 11.462l3.054-2.865c-.549-1.556-1.957-3.152-3.472-4.864-2.652-2.963-6.976-9.251-10.283-9.587z"
        ),
        c(et, "fill", "#fff"),
        c(
          Ee,
          "d",
          "M187.998 230.778s-3.643-14.238-28.009-34.83c-16.375-13.853-23.703-16.817-33.029-8.564-9.325 8.253-7.491 13.616-4.094 18.831 3.398 5.216 17.121 15.139 28.436 20.191 11.315 5.051 22.786 12.076 29.205 11.462"
        ),
        c(Ee, "stroke", "#263238"),
        c(Ee, "stroke-miterlimit", "10"),
        c(Ee, "stroke-linecap", "round"),
        c(
          ot,
          "d",
          "M150.507 244.23c-1.548-3.414-1.171-7.254-.426-10.218-.778.426-1.556.868-2.325 1.343-7.173 4.429-19.118 11.47-24.465 11.798-5.346.327-7.033-1.376-10.242-2.595-3.21-1.22-4.913 2.751-4.913 5.043 0 2.293 0 3.365-1.531 5.51-1.531 2.145-5.486 10.055-5.486 10.055s-2.145 8.564 0 8.867c2.146.303 3.513-2.596 7.95-6.264 4.438-3.668 11.463-11.626 17.735-12.232a308.505 308.505 0 0 0 31.26-4.593 13.263 13.263 0 0 1-7.557-6.714z"
        ),
        c(ot, "fill", "#92C6E3"),
        c(bt, "opacity", ".2"),
        c(
          bt,
          "d",
          "M150.507 244.23c-1.548-3.414-1.171-7.254-.426-10.218-.778.426-1.556.868-2.325 1.343-7.173 4.429-19.118 11.47-24.465 11.798-5.346.327-7.033-1.376-10.242-2.595-3.21-1.22-4.913 2.751-4.913 5.043 0 2.293 0 3.365-1.531 5.51-1.531 2.145-5.486 10.055-5.486 10.055s-2.145 8.564 0 8.867c2.146.303 3.513-2.596 7.95-6.264 4.438-3.668 11.463-11.626 17.735-12.232a308.505 308.505 0 0 0 31.26-4.593 13.263 13.263 0 0 1-7.557-6.714z"
        ),
        c(bt, "fill", "#000"),
        c(
          Lt,
          "d",
          "M150.507 244.23c-1.548-3.414-1.171-7.254-.426-10.218-.778.426-1.556.868-2.325 1.343-7.173 4.429-19.118 11.47-24.465 11.798-5.346.327-7.033-1.376-10.242-2.595-3.21-1.22-4.913 2.751-4.913 5.043 0 2.293 0 3.365-1.531 5.51-1.531 2.145-5.486 10.055-5.486 10.055s-2.145 8.564 0 8.867c2.146.303 3.513-2.596 7.95-6.264 4.438-3.668 11.463-11.626 17.735-12.232a308.505 308.505 0 0 0 31.26-4.593 13.263 13.263 0 0 1-7.557-6.714v0zM123.969 204.111s33.446 21.402 43.254 24.972c9.809 3.57 7.582-3.128 7.582-3.128"
        ),
        c(Lt, "stroke", "#263238"),
        c(Lt, "stroke-linecap", "round"),
        c(Lt, "stroke-linejoin", "round"),
        c(Ut, "d", "M153.848 246.023s9.366.892 15.605-4.912"),
        c(Ut, "stroke", "#263238"),
        c(Ut, "stroke-linecap", "round"),
        c(Ut, "stroke-linejoin", "round"),
        c(
          Pt,
          "d",
          "M151.793 126.174s-11.856-7.754-25.578-6.116c-13.722 1.637-30.015 15.671-40.577 27.674-10.562 12.003-57.518 77.47-57.518 77.47l-1.457-10.701a19.333 19.333 0 0 1 3.709-14.214l7.459-9.931s.745-12.216 7.368-18.488a95.328 95.328 0 0 1 14.271-11.012c1.712-1.179 18.832-18.332 30.908-30.597 12.077-12.264 26.733-21.05 40.013-17.333 13.28 3.718 18.602 6.551 21.697 9.285 3.095 2.735 3.201 2.456 3.201 2.456l-3.496 1.507z"
        ),
        c(Pt, "fill", "#92C6E3"),
        c(Pt, "stroke", "#263238"),
        c(Pt, "stroke-miterlimit", "10"),
        c(Pt, "stroke-linecap", "round"),
        c(
          jt,
          "d",
          "m71.31 155.273 2.76-3.104M37.832 190.356l32.34-34.019M116.471 118.24c-.868.344-1.736.729-2.612 1.179M153.28 125.838s-16.727-13.452-34.223-8.466"
        ),
        c(jt, "stroke", "#263238"),
        c(jt, "stroke-miterlimit", "10"),
        c(jt, "stroke-linecap", "round"),
        c(
          fn,
          "d",
          "M124.21 222.517s1.375-2.604.458-3.824c-.917-1.22-1.686-1.376-3.365-2.907-1.678-1.531-2.595-1.989-4.585-1.989-1.989 0-4.093.155-4.093.155s-3.062-1.228-3.062-10.095c.08-5.474.98-10.905 2.669-16.113a20.76 20.76 0 0 1-8.786 2.817 11.07 11.07 0 0 1-9.874-4.135 79.295 79.295 0 0 0 2.8 14.222c3.365 11.159 5.658 16.055 6.55 18.012.893 1.957 8.868 12.077 10.243 12.388 1.376.311 2.751.606 3.824 0 1.072-.606 9.006-2.456 8.719-4.741a6.03 6.03 0 0 0-1.228-3.365l-.27-.425z"
        ),
        c(fn, "fill", "#92C6E3"),
        c(sn, "opacity", ".2"),
        c(
          sn,
          "d",
          "M125.742 226.34c0-.246-.074-.467-.115-.671v-.197c0-.065-.065-.295-.098-.426s-.065-.221-.09-.319c-2.931.369-8.294 2.244-9.735 2.244-1.572 0-3.152-2.367-5.518-5.003-2.367-2.636-6.051-9.465-6.55-17.882-.32-5.043.876-9.89 1.883-13.828-.655.131-1.327.229-2.047.303a11.073 11.073 0 0 1-9.874-4.135c0 .213.049.434.073.647.041.376.09.753.14 1.146 0 .254.073.524.106.819.033.294.106.704.156 1.064.049.36.09.549.13.819.041.27.123.72.189 1.081l.147.818.197 1.114.172.819c.082.384.172.777.262 1.17.057.262.114.524.18.778.106.442.22.885.336 1.318.049.222.106.443.163.655.18.664.369 1.327.565 1.982 3.365 11.159 5.658 16.056 6.55 18.012.075.159.16.312.254.459.164.278.377.614.639.999.434.638.99 1.4 1.637 2.235l.385.499c2.718 3.578 6.452 7.991 7.369 8.188 1.375.303 2.751.606 3.823 0a9.327 9.327 0 0 1 1.228-.475l.631-.205c2.62-.851 7.041-2.309 6.812-4.028z"
        ),
        c(sn, "fill", "#000"),
        c(Ht, "d", "m123.334 219.79-1.924 1.597s1.425-.099 3.103 1.588"),
        c(Ht, "stroke", "#263238"),
        c(Ht, "stroke-linecap", "round"),
        c(Ht, "stroke-linejoin", "round"),
        c(
          Vt,
          "d",
          "M124.21 222.517s1.375-2.604.458-3.824c-.917-1.22-1.686-1.376-3.365-2.907-1.678-1.531-2.595-1.989-4.585-1.989-1.989 0-4.093.155-4.093.155s-3.062-1.228-3.062-10.095c.08-5.474.98-10.905 2.669-16.113a20.76 20.76 0 0 1-8.786 2.817 11.07 11.07 0 0 1-9.874-4.135 79.295 79.295 0 0 0 2.8 14.222c3.365 11.159 5.658 16.055 6.55 18.012.893 1.957 8.868 12.077 10.243 12.388 1.376.311 2.751.606 3.824 0 1.072-.606 9.006-2.456 8.719-4.741a6.03 6.03 0 0 0-1.228-3.365l-.27-.425zM241.926 64.965 212.021 93.04M209.217 95.668l-4.848 4.551M49.518 242.233l-5.22 4.904M88.13 205.995l-34.417 32.3M96.267 307.098l-3.454 3.242M117.831 286.853l-18.073 16.958M49.528 142.211l-5.23 4.904M88.142 105.973 54.06 137.967M234.514 79.128 190.67 120.27"
        ),
        c(Vt, "stroke", "#263238"),
        c(Vt, "stroke-linecap", "round"),
        c(Vt, "stroke-linejoin", "round"),
        c(
          dn,
          "d",
          "M282.862 173.044c-4.791-2.609-6.964-.436-8.702-2.609-1.737-2.174 4.784-7.837-8.272-13.464 0 0-.872-12.191-18.719-12.662-17.846-.472-13.056 12.19-17.846 15.236-4.791 3.046-6.092-1.744-10.882 1.309-4.791 3.053-2.61 9.144-6.528 10.01-3.919.865-9.145-3.919-13.929-.873-4.783 3.046-4.79 5.628-6.964 5.628-2.173 0-6.528-1.738-9.144 0a230.631 230.631 0 0 0-5.663 3.918h110.131s1.294-3.883-3.482-6.493zM97.69 87.034c-2.742-1.49-3.982-.25-4.982-1.49s2.74-4.482-4.722-7.712c0 0-.5-6.973-10.703-7.223-10.204-.25-7.463 6.972-10.204 8.713-2.74 1.74-3.48-1.042-6.253.74-2.772 1.782-1.49 5.211-3.731 5.732-2.24.521-5.211-2.24-7.963-.5-2.751 1.74-2.74 3.23-3.981 3.23-1.24 0-3.731-.99-5.211 0-1.48.99-3.231 2.242-3.231 2.242h62.96s.73-2.241-1.98-3.732z"
        ),
        c(dn, "fill", "#fff"),
        c(e, "width", "287"),
        c(e, "height", "343"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(Qn, fd) {
      w(Qn, e, fd),
        f(e, n),
        f(e, t),
        f(e, l),
        f(e, r),
        f(e, i),
        f(e, s),
        f(e, a),
        f(e, u),
        f(e, p),
        f(e, d),
        f(e, m),
        f(e, g),
        f(e, b),
        f(e, k),
        f(e, E),
        f(e, I),
        f(e, T),
        f(e, P),
        f(e, M),
        f(e, B),
        f(e, O),
        f(e, z),
        f(e, G),
        f(e, W),
        f(e, D),
        f(e, R),
        f(e, K),
        f(e, ne),
        f(e, te),
        f(e, le),
        f(e, re),
        f(e, se),
        f(e, ae),
        f(e, me),
        f(e, ce),
        f(e, ke),
        f(e, Re),
        f(e, Pe),
        f(e, De),
        f(e, _e),
        f(e, Le),
        f(e, ze),
        f(e, Xe),
        f(e, xe),
        f(e, be),
        f(e, he),
        f(e, de),
        f(e, Ie),
        f(e, Ke),
        f(e, Ue),
        f(e, ge),
        f(e, Be),
        f(e, _t),
        f(e, et),
        f(e, Ee),
        f(e, ot),
        f(e, bt),
        f(e, Lt),
        f(e, Ut),
        f(e, Pt),
        f(e, jt),
        f(e, fn),
        f(e, sn),
        f(e, Ht),
        f(e, Vt),
        f(e, dn);
    },
    p: L,
    i: L,
    o: L,
    d(Qn) {
      Qn && $(e);
    },
  };
}
var nr = class extends H {
    constructor(e) {
      super(), j(this, e, null, V3, U, {});
    }
  },
  up = nr;
var { window: O3 } = $t;
function R3(o) {
  Z(
    o,
    "svelte-5uvnui",
    ".signup-dialog.svelte-5uvnui{padding:16px;position:relative}.content.svelte-5uvnui{position:relative;margin:0 0 0 -16px;padding:16px 16px 16px 290px;min-height:417px}.signup-image.svelte-5uvnui{position:absolute;left:0;top:50%;transform:translateY(-50%)}h1.svelte-5uvnui{font-size:28px;line-height:30px;font-weight:900;margin:5px 0 22px;max-width:330px}.close-button.svelte-5uvnui{position:absolute;z-index:1;top:12px;right:12px;padding:8px}.description.svelte-5uvnui{font-size:13px;line-height:17px}.login-iframe.svelte-5uvnui{width:100%;border:0;flex:1 0 auto}.terms.svelte-5uvnui{font-size:12px;padding:0 16px;text-align:center;color:var(--text-secondary-color);max-width:530px;margin:16px auto 0}.terms.svelte-5uvnui .link-btn{color:var(--accent-color);text-decoration:none;padding:0}.terms.svelte-5uvnui .link-btn:hover,.terms.svelte-5uvnui .link-btn:focus{text-decoration:underline}"
  );
}
function pp(o) {
  let e, n, t, l, r;
  return (
    (n = new qe({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          c(e, "class", "close-button svelte-5uvnui");
      },
      m(i, s) {
        w(i, e, s),
          C(n, e, null),
          (t = !0),
          l || ((r = X(e, "click", o[5])), (l = !0));
      },
      p: L,
      i(i) {
        t || (_(n.$$.fragment, i), (t = !0));
      },
      o(i) {
        h(n.$$.fragment, i), (t = !1);
      },
      d(i) {
        i && $(e), x(n), (l = !1), r();
      },
    }
  );
}
function fp(o) {
  let e, n;
  return (
    (e = new Ts({ props: { size: 66 } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function W3(o) {
  let e = A("overlay_sign_up__open_terms_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function G3(o) {
  let e = A("overlay_sign_up__open_privacy_button_text") + "",
    n,
    t;
  return {
    c() {
      (n = V(e)), (t = S());
    },
    m(l, r) {
      w(l, n, r), w(l, t, r);
    },
    p: L,
    d(l) {
      l && $(n), l && $(t);
    },
  };
}
function F3(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T = A("overlay_sign_up__terms_1") + "",
    P,
    M,
    B,
    O,
    z = A("overlay_sign_up__terms_2") + "",
    G,
    W,
    D,
    R,
    K,
    ne,
    te,
    le = o[1] && pp(o);
  r = new up({});
  let re = !o[3] && fp(o);
  return (
    (B = new pe({
      props: {
        outline: !0,
        mod: "transparent",
        size: "small",
        className: "link-btn",
        $$slots: { default: [W3] },
        $$scope: { ctx: o },
      },
    })),
    B.$on("click", o[8]),
    (D = new pe({
      props: {
        outline: !0,
        mod: "transparent",
        size: "small",
        className: "link-btn",
        $$slots: { default: [G3] },
        $$scope: { ctx: o },
      },
    })),
    D.$on("click", o[9]),
    {
      c() {
        (e = v("div")),
          le && le.c(),
          (n = S()),
          (t = v("div")),
          (l = v("div")),
          y(r.$$.fragment),
          (i = S()),
          (s = v("header")),
          (a = v("h1")),
          (a.textContent = `${A("overlay_sign_up__title")}`),
          (u = S()),
          (p = v("p")),
          (p.textContent = `${A("overlay_sign_up__description")}`),
          (d = S()),
          re && re.c(),
          (m = S()),
          (g = v("iframe")),
          (E = S()),
          (I = v("p")),
          (P = V(T)),
          (M = S()),
          y(B.$$.fragment),
          (O = S()),
          (G = V(z)),
          (W = S()),
          y(D.$$.fragment),
          (R = V(".")),
          c(l, "class", "signup-image svelte-5uvnui"),
          c(a, "class", "svelte-5uvnui"),
          c(p, "class", "description svelte-5uvnui"),
          c(g, "class", "login-iframe svelte-5uvnui"),
          Je(g.src, (b = o[0])) || c(g, "src", b),
          c(g, "height", (k = `${o[3] ? o[4] : 0}px`)),
          c(g, "scrolling", "no"),
          c(
            g,
            "sandbox",
            "allow-scripts allow-same-origin allow-forms allow-popups"
          ),
          c(g, "title", "login iframe"),
          c(t, "class", "content svelte-5uvnui"),
          c(I, "class", "terms svelte-5uvnui"),
          c(e, "class", "signup-dialog svelte-5uvnui");
      },
      m(se, ae) {
        w(se, e, ae),
          le && le.m(e, null),
          f(e, n),
          f(e, t),
          f(t, l),
          C(r, l, null),
          f(t, i),
          f(t, s),
          f(s, a),
          f(t, u),
          f(t, p),
          f(t, d),
          re && re.m(t, null),
          f(t, m),
          f(t, g),
          o[12](g),
          f(e, E),
          f(e, I),
          f(I, P),
          f(I, M),
          C(B, I, null),
          f(I, O),
          f(I, G),
          f(I, W),
          C(D, I, null),
          f(I, R),
          (K = !0),
          ne || ((te = X(g, "load", o[6])), (ne = !0));
      },
      p(se, ae) {
        se[1]
          ? le
            ? (le.p(se, ae), ae & 2 && _(le, 1))
            : ((le = pp(se)), le.c(), _(le, 1), le.m(e, n))
          : le &&
            (Q(),
            h(le, 1, 1, () => {
              le = null;
            }),
            Y()),
          se[3]
            ? re &&
              (Q(),
              h(re, 1, 1, () => {
                re = null;
              }),
              Y())
            : re
            ? ae & 8 && _(re, 1)
            : ((re = fp(se)), re.c(), _(re, 1), re.m(t, m)),
          (!K || (ae & 1 && !Je(g.src, (b = se[0])))) && c(g, "src", b),
          (!K || (ae & 24 && k !== (k = `${se[3] ? se[4] : 0}px`))) &&
            c(g, "height", k);
        let me = {};
        ae & 65536 && (me.$$scope = { dirty: ae, ctx: se }), B.$set(me);
        let ce = {};
        ae & 65536 && (ce.$$scope = { dirty: ae, ctx: se }), D.$set(ce);
      },
      i(se) {
        K ||
          (_(le),
          _(r.$$.fragment, se),
          _(re),
          _(B.$$.fragment, se),
          _(D.$$.fragment, se),
          (K = !0));
      },
      o(se) {
        h(le),
          h(r.$$.fragment, se),
          h(re),
          h(B.$$.fragment, se),
          h(D.$$.fragment, se),
          (K = !1);
      },
      d(se) {
        se && $(e),
          le && le.d(),
          x(r),
          re && re.d(),
          o[12](null),
          x(B),
          x(D),
          (ne = !1),
          te();
      },
    }
  );
}
function Z3(o) {
  let e, n;
  return (
    (e = new $e({
      props: { width: 730, $$slots: { default: [F3] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 65567 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function K3(o) {
  let e, n, t, l;
  return (
    (e = new Ce({
      props: { $$slots: { default: [Z3] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0), t || ((l = X(O3, "message", o[7])), (t = !0));
      },
      p(r, [i]) {
        let s = {};
        i & 65567 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r), (t = !1), l();
      },
    }
  );
}
function Q3(o, e, n) {
  let { source: t } = e,
    { actualUsageDays: l } = e,
    { iframeSrc: r } = e,
    { isClosable: i } = e,
    s = null,
    a = !1,
    u = 0,
    p = oe(),
    d = () => {
      i && p("close");
    },
    m = () => {
      if (!s?.contentWindow) return;
      let P = { type: "REQUEST_CURRENT_SIZE" };
      s.contentWindow.postMessage(JSON.stringify(P), "*");
    },
    g = () => {
      s && r && (n(3, (a = !0)), m());
    },
    b = (P) => {
      if (!P.data) return;
      let M = Fi(P.data);
      !M || M.type !== "CURRENT_SIZE" || n(4, (u = M.scrollHeight));
    },
    k = () => I("https://www.meetsidekick.com/terms-of-use"),
    E = () => I("https://www.meetsidekick.com/privacy-policy"),
    I = (P) => {
      window.open(
        P,
        "_blank",
        "location=yes,scrollbars=yes,status=yes,noopener,noreferrer"
      );
    };
  ye(() => {
    let P = { source: t, "actual-usage-days": l, "is-closable": i };
    return (
      q.actions.sendAnalyticsEvent("sign-up-modal.auto-opened", P),
      () => q.actions.sendAnalyticsEvent("sign-up-modal.auto-closed", P)
    );
  });
  function T(P) {
    we[P ? "unshift" : "push"](() => {
      (s = P), n(2, s);
    });
  }
  return (
    (o.$$set = (P) => {
      "source" in P && n(10, (t = P.source)),
        "actualUsageDays" in P && n(11, (l = P.actualUsageDays)),
        "iframeSrc" in P && n(0, (r = P.iframeSrc)),
        "isClosable" in P && n(1, (i = P.isClosable));
    }),
    [r, i, s, a, u, d, g, b, k, E, t, l, T]
  );
}
var or = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          Q3,
          K3,
          U,
          { source: 10, actualUsageDays: 11, iframeSrc: 0, isClosable: 1 },
          R3
        );
    }
  },
  dp = or;
N();
function Y3(o) {
  Z(
    o,
    "svelte-1bmtagq",
    `.wrapper.svelte-1bmtagq{display:flex;flex-direction:column;height:100%}.banner.svelte-1bmtagq{border-radius:7px 7px 0 0}.close-button.svelte-1bmtagq{position:absolute;top:0;right:0;padding:12px;color:var(--distraction-intro-close-button-color)}.content.svelte-1bmtagq{height:100%;padding:30px 33px;display:grid;grid-template:'header  header' max-content
      'message message' 1fr
      'action  steps' max-content
      / 1fr max-content}.header.svelte-1bmtagq{grid-area:header;margin:0 0 10px;padding:0;color:var(--distraction-intro-header-color);font-style:normal;font-weight:700;font-size:20px;line-height:24px}.message.svelte-1bmtagq{grid-area:message;margin:0;padding:0;color:var(--distraction-intro-message-color);font-weight:400;font-size:14px;line-height:17px}.action.svelte-1bmtagq{grid-area:action}.steps.svelte-1bmtagq{grid-area:steps;align-self:center;margin:0;padding:0;display:grid;grid-auto-flow:column;grid-template-columns:max-content;grid-column-gap:10px}.step-button.svelte-1bmtagq{margin:0;padding:0;width:6px;height:6px;border-radius:50%;cursor:pointer;background:var(--distraction-intro-step-bg)}.step-button.active.svelte-1bmtagq{background:#1977f3}`
  );
}
function J3(o) {
  let e = o[4][o[0]] + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p(t, l) {
      l & 1 && e !== (e = t[4][t[0]] + "") && ee(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function X3(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d = o[2][o[0]] + "",
    m,
    g,
    b,
    k = o[3][o[0]] + "",
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne;
  return (
    (s = new qe({ props: { width: "12", height: "12" } })),
    (P = new pe({
      props: { $$slots: { default: [J3] }, $$scope: { ctx: o } },
    })),
    P.$on("click", o[6]),
    {
      c() {
        (e = v("div")),
          (n = v("img")),
          (r = S()),
          (i = v("button")),
          y(s.$$.fragment),
          (a = S()),
          (u = v("div")),
          (p = v("h1")),
          (m = V(d)),
          (g = S()),
          (b = v("p")),
          (E = V(k)),
          (I = S()),
          (T = v("div")),
          y(P.$$.fragment),
          (M = S()),
          (B = v("ul")),
          (O = v("li")),
          (z = v("button")),
          (G = S()),
          (W = v("li")),
          (D = v("button")),
          c(n, "class", "banner svelte-1bmtagq"),
          Je(n.src, (t = o[1][o[0]])) || c(n, "src", t),
          c(n, "alt", (l = A("distraction_blocker_intro__banner_alt"))),
          c(i, "class", "close-button svelte-1bmtagq"),
          c(p, "class", "header svelte-1bmtagq"),
          c(b, "class", "message svelte-1bmtagq"),
          c(T, "class", "action svelte-1bmtagq"),
          c(z, "class", "step-button svelte-1bmtagq"),
          ie(z, "active", o[0] === "start"),
          c(D, "class", "step-button svelte-1bmtagq"),
          ie(D, "active", o[0] === "finish"),
          c(B, "class", "steps svelte-1bmtagq"),
          c(u, "class", "content svelte-1bmtagq"),
          c(e, "class", "wrapper svelte-1bmtagq");
      },
      m(te, le) {
        w(te, e, le),
          f(e, n),
          f(e, r),
          f(e, i),
          C(s, i, null),
          f(e, a),
          f(e, u),
          f(u, p),
          f(p, m),
          f(u, g),
          f(u, b),
          f(b, E),
          f(u, I),
          f(u, T),
          C(P, T, null),
          f(u, M),
          f(u, B),
          f(B, O),
          f(O, z),
          f(B, G),
          f(B, W),
          f(W, D),
          (R = !0),
          K ||
            ((ne = [
              X(i, "click", o[5]),
              X(z, "click", o[8]),
              X(D, "click", o[9]),
            ]),
            (K = !0));
      },
      p(te, le) {
        (!R || (le & 1 && !Je(n.src, (t = te[1][te[0]])))) && c(n, "src", t),
          (!R || le & 1) && d !== (d = te[2][te[0]] + "") && ee(m, d),
          (!R || le & 1) && k !== (k = te[3][te[0]] + "") && ee(E, k);
        let re = {};
        le & 2049 && (re.$$scope = { dirty: le, ctx: te }),
          P.$set(re),
          (!R || le & 1) && ie(z, "active", te[0] === "start"),
          (!R || le & 1) && ie(D, "active", te[0] === "finish");
      },
      i(te) {
        R || (_(s.$$.fragment, te), _(P.$$.fragment, te), (R = !0));
      },
      o(te) {
        h(s.$$.fragment, te), h(P.$$.fragment, te), (R = !1);
      },
      d(te) {
        te && $(e), x(s), x(P), (K = !1), Se(ne);
      },
    }
  );
}
function ev(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 380,
        height: 440,
        $$slots: { default: [X3] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2049 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function tv(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [ev] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 2049 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var mp = "/shared/assets/images/distraction_blocker_intro";
function nv(o, e, n) {
  let t = oe(),
    { source: l } = e,
    r = "start",
    i = { start: `${mp}/start.svg`, finish: `${mp}/finish.svg` },
    s = {
      start: A("distraction_blocker_intro__start_header"),
      finish: A("distraction_blocker_intro__finish_header"),
    },
    a = {
      start: A("distraction_blocker_intro__start_message"),
      finish: A("distraction_blocker_intro__finish_message"),
    },
    u = {
      start: A("distraction_blocker_intro__start_action"),
      finish: A("distraction_blocker_intro__finish_action"),
    },
    p = () => {
      un.actions.sendAnalyticsEvent(
        "distraction-blocker.intro-modal.clicked-close",
        void 0
      ),
        t("close");
    },
    d = () => {
      switch (r) {
        case "start":
          n(0, (r = "finish"));
          break;
        case "finish":
          un.actions.sendAnalyticsEvent(
            "distraction-blocker.intro-modal.clicked-open",
            void 0
          ),
            un.actions.openDistractionBlockerSettings();
          break;
        default:
          pt(!0, "Unexpected state");
      }
    };
  ye(() => {
    un.actions.sendAnalyticsEvent(
      "distraction-blocker.intro-modal.auto-showed",
      { source: l }
    );
  });
  let m = () => n(0, (r = "start")),
    g = () => n(0, (r = "finish"));
  return (
    (o.$$set = (b) => {
      "source" in b && n(7, (l = b.source));
    }),
    [r, i, s, a, u, p, d, l, m, g]
  );
}
var lr = class extends H {
    constructor(e) {
      super(), j(this, e, nv, tv, U, { source: 7 }, Y3);
    }
  },
  _p = lr;
N();
N();
N();
var gp = (o) =>
  o.favIconUrl ? `url(${o.favIconUrl})` : o.url ? Ri(o.url, 16) : null;
function ov(o) {
  Z(
    o,
    "svelte-p5kh8n",
    ".type.svelte-p5kh8n.svelte-p5kh8n{margin-left:8px;text-align:right;color:rgb(75 77 82 / 0.6);color:var(--popup-title-color);grid-area:right}.actions.svelte-p5kh8n.svelte-p5kh8n{display:none;align-items:center;margin:-8px 0;gap:8px;color:var(--text-secondary-color)}.actions.svelte-p5kh8n .close-tab-button{padding:0}.actions.svelte-p5kh8n .close-tab-button:hover{color:var(--text-primary-color);background-color:transparent}.opened-tab.svelte-p5kh8n.svelte-p5kh8n{display:grid;font-size:12px;color:var(--text-primary-color);text-decoration:none;padding:8px;margin:0 0 2px;align-items:center;cursor:pointer;grid-template:'icon title right' auto / min-content 1fr auto;border-radius:8px}.opened-tab.svelte-p5kh8n.svelte-p5kh8n:hover,.opened-tab.svelte-p5kh8n.svelte-p5kh8n:focus{background-color:var(--search-item-background-hover)}.opened-tab.svelte-p5kh8n:hover .type.svelte-p5kh8n,.opened-tab.svelte-p5kh8n:focus .type.svelte-p5kh8n{display:none}.opened-tab.svelte-p5kh8n:hover .actions.svelte-p5kh8n,.opened-tab.svelte-p5kh8n:focus .actions.svelte-p5kh8n{display:flex}.opened-tab.is-active.svelte-p5kh8n.svelte-p5kh8n,.opened-tab.is-active.svelte-p5kh8n.svelte-p5kh8n:hover{background-color:var(--search-item-background-selected)}@keyframes svelte-p5kh8n-timeout-progress{to{stroke-dashoffset:0}}.icon.svelte-p5kh8n.svelte-p5kh8n{display:block;background-size:contain;grid-area:icon;background-repeat:no-repeat;background-position:50% 50%;width:16px;height:16px;margin-right:8px}.title.svelte-p5kh8n.svelte-p5kh8n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;grid-area:title;color:var(--search-result-item-color)}"
  );
}
function lv(o) {
  let e, n;
  return (
    (e = new zn({ props: { width: "10", height: "10" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function rv(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        className: "close-tab-button",
        dataTestId: "opened-tab-close-button",
        mod: "round",
        size: "small",
        $$slots: { default: [lv] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[9]),
    e.$on("contextmenu", o[10]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16384 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function iv(o) {
  let e = A("overlay_components_opened_tab__tooltip") + "",
    n,
    t,
    l,
    r;
  return (
    (l = new St({ props: { keys: o[3] } })),
    {
      c() {
        (n = V(e)), (t = S()), y(l.$$.fragment);
      },
      m(i, s) {
        w(i, n, s), w(i, t, s), C(l, i, s), (r = !0);
      },
      p(i, s) {
        let a = {};
        s & 8 && (a.keys = i[3]), l.$set(a);
      },
      i(i) {
        r || (_(l.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(l.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && $(n), i && $(t), x(l, i);
      },
    }
  );
}
function sv(o) {
  let e,
    n,
    t,
    l,
    r = o[0].title + "",
    i,
    s,
    a,
    u,
    p,
    d = o[0].type + "",
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O;
  return (
    (E = new vs({
      props: { dataTestId: "opened-tab-copy-button", copyShortcutKeys: o[2] },
    })),
    E.$on("copy", o[11]),
    (T = new Bt({
      props: { $$slots: { tooltip: [iv], default: [rv] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = v("a")),
          (n = v("span")),
          (t = S()),
          (l = v("span")),
          (i = V(r)),
          (u = S()),
          (p = v("span")),
          (m = V(d)),
          (b = S()),
          (k = v("span")),
          y(E.$$.fragment),
          (I = S()),
          y(T.$$.fragment),
          c(n, "class", "icon svelte-p5kh8n"),
          lt(n, "background-image", o[6]),
          c(l, "class", "title svelte-p5kh8n"),
          c(l, "title", (s = o[0].title)),
          c(l, "data-testid", (a = o[4] + "-title")),
          c(p, "class", "type svelte-p5kh8n"),
          c(p, "data-testid", (g = o[4] + "-type")),
          c(k, "class", "actions svelte-p5kh8n"),
          c(e, "class", "opened-tab svelte-p5kh8n"),
          c(e, "data-testid", o[4]),
          c(e, "href", (P = o[0].url)),
          ie(e, "is-active", o[1]);
      },
      m(z, G) {
        w(z, e, G),
          f(e, n),
          f(e, t),
          f(e, l),
          f(l, i),
          f(e, u),
          f(e, p),
          f(p, m),
          f(e, b),
          f(e, k),
          C(E, k, null),
          f(k, I),
          C(T, k, null),
          o[12](e),
          (M = !0),
          B ||
            ((O = [X(e, "click", wt(o[7])), X(e, "contextmenu", o[8])]),
            (B = !0));
      },
      p(z, [G]) {
        (!M || G & 64) && lt(n, "background-image", z[6]),
          (!M || G & 1) && r !== (r = z[0].title + "") && ee(i, r),
          (!M || (G & 1 && s !== (s = z[0].title))) && c(l, "title", s),
          (!M || (G & 16 && a !== (a = z[4] + "-title"))) &&
            c(l, "data-testid", a),
          (!M || G & 1) && d !== (d = z[0].type + "") && ee(m, d),
          (!M || (G & 16 && g !== (g = z[4] + "-type"))) &&
            c(p, "data-testid", g);
        let W = {};
        G & 4 && (W.copyShortcutKeys = z[2]), E.$set(W);
        let D = {};
        G & 16392 && (D.$$scope = { dirty: G, ctx: z }),
          T.$set(D),
          (!M || G & 16) && c(e, "data-testid", z[4]),
          (!M || (G & 1 && P !== (P = z[0].url))) && c(e, "href", P),
          (!M || G & 2) && ie(e, "is-active", z[1]);
      },
      i(z) {
        M || (_(E.$$.fragment, z), _(T.$$.fragment, z), (M = !0));
      },
      o(z) {
        h(E.$$.fragment, z), h(T.$$.fragment, z), (M = !1);
      },
      d(z) {
        z && $(e), x(E), x(T), o[12](null), (B = !1), Se(O);
      },
    }
  );
}
function av(o, e, n) {
  let t,
    l = oe(),
    { item: r } = e,
    { isActive: i } = e,
    { copyShortcutKeys: s } = e,
    { closeTabShortcutKeys: a } = e,
    { dataTestId: u = "" } = e,
    p,
    d = () => l("open"),
    m = (I) => {
      I.ctrlKey && (I.preventDefault(), I.stopPropagation(), d());
    },
    g = (I) => {
      I.stopPropagation(), I.preventDefault(), l("close");
    },
    b = (I) => {
      I.ctrlKey && (I.stopPropagation(), g(I));
    };
  function k(I) {
    ue.call(this, o, I);
  }
  function E(I) {
    we[I ? "unshift" : "push"](() => {
      (p = I), n(5, p);
    });
  }
  return (
    (o.$$set = (I) => {
      "item" in I && n(0, (r = I.item)),
        "isActive" in I && n(1, (i = I.isActive)),
        "copyShortcutKeys" in I && n(2, (s = I.copyShortcutKeys)),
        "closeTabShortcutKeys" in I && n(3, (a = I.closeTabShortcutKeys)),
        "dataTestId" in I && n(4, (u = I.dataTestId));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(6, (t = gp(r)));
      }
      if (o.$$.dirty & 34) {
        e: i &&
          p?.scrollIntoView &&
          p.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
      }
    }),
    [r, i, s, a, u, p, t, d, m, g, b, k, E]
  );
}
var rr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          av,
          sv,
          U,
          {
            item: 0,
            isActive: 1,
            copyShortcutKeys: 2,
            closeTabShortcutKeys: 3,
            dataTestId: 4,
          },
          ov
        );
    }
  },
  hp = rr;
N();
function cv(o) {
  Z(
    o,
    "svelte-1d40fx",
    ".hotkey-list.svelte-1d40fx{display:flex;border-top:1px solid var(--popup-footer-divider);padding:8px 16px;font-size:12px;background:var(--popup-bg-color);border-radius:0 0 8px 8px}.hotkey.svelte-1d40fx{display:flex;font-size:12px;margin-right:16px}.label.svelte-1d40fx{margin-left:7px;line-height:16px;color:var(--popup-footer-color)}.arrow-up.svelte-1d40fx,.arrow-down.svelte-1d40fx{display:inline-block}.arrow-down.svelte-1d40fx{transform:rotate(180deg)}"
  );
}
function uv(o) {
  let e, n, t, l, r, i;
  return (
    (n = new ao({ props: { width: "10", height: "10" } })),
    (r = new ao({ props: { width: "10", height: "10" } })),
    {
      c() {
        (e = v("span")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("span")),
          y(r.$$.fragment),
          c(e, "class", "arrow-up svelte-1d40fx"),
          c(l, "class", "arrow-down svelte-1d40fx");
      },
      m(s, a) {
        w(s, e, a),
          C(n, e, null),
          w(s, t, a),
          w(s, l, a),
          C(r, l, null),
          (i = !0);
      },
      p: L,
      i(s) {
        i || (_(n.$$.fragment, s), _(r.$$.fragment, s), (i = !0));
      },
      o(s) {
        h(n.$$.fragment, s), h(r.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && $(e), x(n), s && $(t), s && $(l), x(r);
      },
    }
  );
}
function pv(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E;
  return (
    (t = new cn({
      props: { $$slots: { default: [uv] }, $$scope: { ctx: o } },
    })),
    (a = new St({ props: { keys: o[0] } })),
    (g = new St({ props: { keys: o[1] } })),
    {
      c() {
        (e = v("div")),
          (n = v("span")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          (r.textContent = `${A("overlay_tab_switcher__navigate")}`),
          (i = S()),
          (s = v("span")),
          y(a.$$.fragment),
          (u = S()),
          (p = v("span")),
          (p.textContent = `${A("overlay_tab_switcher__global_search")}`),
          (d = S()),
          (m = v("span")),
          y(g.$$.fragment),
          (b = S()),
          (k = v("span")),
          (k.textContent = `${A("overlay_tab_switcher__close_tab")}`),
          c(r, "class", "label svelte-1d40fx"),
          c(n, "class", "hotkey svelte-1d40fx"),
          c(p, "class", "label svelte-1d40fx"),
          c(s, "class", "hotkey svelte-1d40fx"),
          c(k, "class", "label svelte-1d40fx"),
          c(m, "class", "hotkey svelte-1d40fx"),
          c(e, "class", "hotkey-list svelte-1d40fx"),
          c(e, "data-testid", "tabs-switcher-hotkey-list");
      },
      m(I, T) {
        w(I, e, T),
          f(e, n),
          C(t, n, null),
          f(n, l),
          f(n, r),
          f(e, i),
          f(e, s),
          C(a, s, null),
          f(s, u),
          f(s, p),
          f(e, d),
          f(e, m),
          C(g, m, null),
          f(m, b),
          f(m, k),
          (E = !0);
      },
      p(I, [T]) {
        let P = {};
        T & 4 && (P.$$scope = { dirty: T, ctx: I }), t.$set(P);
        let M = {};
        T & 1 && (M.keys = I[0]), a.$set(M);
        let B = {};
        T & 2 && (B.keys = I[1]), g.$set(B);
      },
      i(I) {
        E ||
          (_(t.$$.fragment, I),
          _(a.$$.fragment, I),
          _(g.$$.fragment, I),
          (E = !0));
      },
      o(I) {
        h(t.$$.fragment, I), h(a.$$.fragment, I), h(g.$$.fragment, I), (E = !1);
      },
      d(I) {
        I && $(e), x(t), x(a), x(g);
      },
    }
  );
}
function fv(o, e, n) {
  let { globalSearchShortcutKeys: t } = e,
    { closeTabShortcutKeys: l } = e;
  return (
    (o.$$set = (r) => {
      "globalSearchShortcutKeys" in r && n(0, (t = r.globalSearchShortcutKeys)),
        "closeTabShortcutKeys" in r && n(1, (l = r.closeTabShortcutKeys));
    }),
    [t, l]
  );
}
var ir = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          fv,
          pv,
          U,
          { globalSearchShortcutKeys: 0, closeTabShortcutKeys: 1 },
          cv
        );
    }
  },
  vp = ir;
var { window: sr } = $t;
function dv(o) {
  Z(
    o,
    "svelte-p62nzp",
    ".search-results.svelte-p62nzp{overflow-x:hidden;overflow-y:auto;padding:16px;margin:0;max-height:530px}"
  );
}
function bp(o, e, n) {
  let t = o.slice();
  return (t[21] = e[n]), (t[23] = n), t;
}
function kp(o, e) {
  let n, t, l, r;
  function i() {
    return e[16](e[21]);
  }
  function s() {
    return e[17](e[21]);
  }
  function a() {
    return e[18](e[21]);
  }
  return (
    (t = new hp({
      props: {
        item: e[21],
        copyShortcutKeys: e[3],
        closeTabShortcutKeys: e[2],
        isActive: e[0] === e[23],
      },
    })),
    t.$on("open", i),
    t.$on("close", s),
    t.$on("copy", a),
    {
      key: o,
      first: null,
      c() {
        (n = v("li")),
          y(t.$$.fragment),
          (l = S()),
          c(n, "data-testid", "tabs-switcher-item"),
          (this.first = n);
      },
      m(u, p) {
        w(u, n, p), C(t, n, null), f(n, l), (r = !0);
      },
      p(u, p) {
        e = u;
        let d = {};
        p & 2 && (d.item = e[21]),
          p & 8 && (d.copyShortcutKeys = e[3]),
          p & 4 && (d.closeTabShortcutKeys = e[2]),
          p & 3 && (d.isActive = e[0] === e[23]),
          t.$set(d);
      },
      i(u) {
        r || (_(t.$$.fragment, u), (r = !0));
      },
      o(u) {
        h(t.$$.fragment, u), (r = !1);
      },
      d(u) {
        u && $(n), x(t);
      },
    }
  );
}
function mv(o) {
  let e,
    n,
    t = [],
    l = new Map(),
    r,
    i,
    s,
    a = o[1],
    u = (p) => p[21].id;
  for (let p = 0; p < a.length; p += 1) {
    let d = bp(o, a, p),
      m = u(d);
    l.set(m, (t[p] = kp(m, d)));
  }
  return (
    (i = new vp({
      props: { globalSearchShortcutKeys: o[4], closeTabShortcutKeys: o[2] },
    })),
    {
      c() {
        (e = v("div")), (n = v("ul"));
        for (let p = 0; p < t.length; p += 1) t[p].c();
        (r = S()),
          y(i.$$.fragment),
          c(n, "class", "search-results svelte-p62nzp"),
          c(e, "data-testid", "tabs-switcher-popup");
      },
      m(p, d) {
        w(p, e, d), f(e, n);
        for (let m = 0; m < t.length; m += 1) t[m] && t[m].m(n, null);
        f(e, r), C(i, e, null), (s = !0);
      },
      p(p, d) {
        d & 911 &&
          ((a = p[1]),
          Q(),
          (t = ut(t, d, u, 1, p, a, l, n, ct, kp, null, bp)),
          Y());
        let m = {};
        d & 16 && (m.globalSearchShortcutKeys = p[4]),
          d & 4 && (m.closeTabShortcutKeys = p[2]),
          i.$set(m);
      },
      i(p) {
        if (!s) {
          for (let d = 0; d < a.length; d += 1) _(t[d]);
          _(i.$$.fragment, p), (s = !0);
        }
      },
      o(p) {
        for (let d = 0; d < t.length; d += 1) h(t[d]);
        h(i.$$.fragment, p), (s = !1);
      },
      d(p) {
        p && $(e);
        for (let d = 0; d < t.length; d += 1) t[d].d();
        x(i);
      },
    }
  );
}
function _v(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 640,
        height: "auto",
        $$slots: { default: [mv] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16777247 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function gv(o) {
  let e, n, t, l;
  return (
    (e = new Ce({
      props: {
        isFixedOnTop: !0,
        $$slots: { default: [_v] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i),
          (n = !0),
          t ||
            ((l = [
              X(sr, "keydown", o[10]),
              X(sr, "blur", o[6]),
              X(sr, "wheel", o[11]),
            ]),
            (t = !0));
      },
      p(r, [i]) {
        let s = {};
        i & 16777247 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r), (t = !1), Se(l);
      },
    }
  );
}
function hv(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u = oe(),
    p = q.stores.tabSwitcherModal;
  ve(o, p, (G) => n(15, (a = G)));
  let { source: d } = e,
    { tabOrder: m } = e,
    { isOpenedByCtrlTab: g } = e,
    b = () => {
      u("close");
    },
    k = (G) => {
      q.actions.sendAnalyticsEvent("tab-switcher.tab-url-copied", void 0),
        window.navigator.clipboard.writeText(G).catch(ft),
        b();
    },
    E = (G) => {
      q.actions.sendAnalyticsEvent("tab-switcher.tab-opened", void 0),
        q.actions.showFocusedTabInSwitcherByTabId(G);
    },
    I = new Set(),
    T = (G) => {
      I.has(G) ||
        (q.actions.sendAnalyticsEvent("tab-switcher.tab-closed", void 0),
        q.actions.closeFocusedTabInSwitcherByTabId(G),
        I.add(G));
    },
    P = (G) => {
      if (!G.isComposing)
        switch (G.code) {
          case "Enter":
            G.preventDefault(), E(t[s]?.id), q.actions.closeModal();
            return;
          case "ArrowUp":
            G.preventDefault(), q.actions.decrementFocusedTabIndexInSwitcher();
            return;
          case "ArrowDown":
            G.preventDefault(), q.actions.incrementFocusedTabIndexInSwitcher();
            return;
          case "Delete":
          case "Backspace": {
            if (!G.altKey) return;
            G.preventDefault(), T(t[s]?.id);
            return;
          }
          case "KeyC": {
            if (!G.ctrlKey && !G.metaKey) return;
            let W = t[s];
            if (!W) return;
            G.preventDefault(), k(W.url);
            break;
          }
          default:
        }
    },
    M = (G) => {
      G.preventDefault(),
        Math.sign(G.deltaY) < 0
          ? q.actions.incrementFocusedTabIndexInSwitcher()
          : q.actions.decrementFocusedTabIndexInSwitcher();
    };
  ye(() => {
    let G = { source: d, "ctrl-tab": g, "tab-order": m };
    return (
      q.actions.sendAnalyticsEvent("tab-switcher.auto-opened", G),
      q.actions.explore("opened_tab_switcher"),
      () => q.actions.sendAnalyticsEvent("tab-switcher.auto-closed", G)
    );
  });
  let B = (G) => E(G.id),
    O = (G) => T(G.id),
    z = (G) => k(G.url);
  return (
    (o.$$set = (G) => {
      "source" in G && n(12, (d = G.source)),
        "tabOrder" in G && n(13, (m = G.tabOrder)),
        "isOpenedByCtrlTab" in G && n(14, (g = G.isOpenedByCtrlTab));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 32768) {
        e: n(1, (t = a?.openedTabs ?? []));
      }
      if (o.$$.dirty & 32768) {
        e: n(4, (l = a?.globalSearchShortcutKeys ?? []));
      }
      if (o.$$.dirty & 32768) {
        e: n(3, (r = a?.copyShortcutKeys ?? []));
      }
      if (o.$$.dirty & 32768) {
        e: n(2, (i = a?.closeOpenedTabShortcutKeys ?? []));
      }
      if (o.$$.dirty & 32768) {
        e: n(0, (s = a?.activeIndex ?? 0));
      }
    }),
    [s, t, i, r, l, p, b, k, E, T, P, M, d, m, g, a, B, O, z]
  );
}
var ar = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          hv,
          gv,
          U,
          { source: 12, tabOrder: 13, isOpenedByCtrlTab: 14 },
          dv
        );
    }
  },
  wp = ar;
N();
N();
N();
N();
function vv(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M12.1661 4.05369L12.6641 3.54789C13.0562 3.14957 13.7053 3.14675 14.0371 3.59656C14.919 4.7919 15.4402 6.26956 15.4402 7.86896C15.4402 11.8476 12.2149 15.0729 8.23627 15.0729C6.92734 15.0729 5.69995 14.7238 4.64211 14.1136M4.5629 11.5494L3.8801 12.2641C3.4943 12.6678 2.84611 12.6808 2.50718 12.237C1.58192 11.0252 1.03235 9.51128 1.03235 7.86896C1.03235 3.89035 4.25766 0.665039 8.23627 0.665039C9.45796 0.665039 10.6086 0.969145 11.6167 1.50579M4.90272 9.72479V8.12789M7.29807 9.72479V8.12789M4.90272 8.12789V6.65249C4.90272 5.99104 5.43894 5.45482 6.1004 5.45482V5.45482C6.76186 5.45482 7.29807 5.99104 7.29807 6.65249V8.12789M4.90272 8.12789H7.29807M9.15534 9.72479V5.45482H10.2813C10.944 5.45482 11.4813 5.99208 11.4813 6.65482V8.52479C11.4813 9.18753 10.944 9.72479 10.2813 9.72479H9.15534Z"
        ),
        c(n, "stroke", "currentColor"),
        c(n, "stroke-width", "1.2"),
        c(n, "stroke-miterlimit", "10"),
        c(n, "stroke-linecap", "round"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 17 16"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function bv(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var cr = class extends H {
    constructor(e) {
      super(), j(this, e, bv, vv, U, { width: 0, height: 1, className: 2 });
    }
  },
  Dn = cr;
N();
function kv(o) {
  let e, n, t, l, r, i;
  return {
    c() {
      (e = F("svg")),
        (n = F("rect")),
        (t = F("path")),
        (l = F("path")),
        (r = F("path")),
        c(n, "width", "20"),
        c(n, "height", "20"),
        c(n, "transform", "translate(0.236328)"),
        c(n, "fill", "none"),
        c(
          t,
          "d",
          "M14.6793 13.7745V9.62097C14.6793 7.16717 12.6901 5.17798 10.2363 5.17798V5.17798C7.78253 5.17798 5.79333 7.16717 5.79333 9.62097V13.7745"
        ),
        c(t, "stroke", "#1977F3"),
        c(t, "stroke-width", "1.2"),
        c(t, "stroke-miterlimit", "10"),
        c(t, "stroke-linecap", "round"),
        c(
          l,
          "d",
          "M11.7742 14.8223V9.76932C11.7742 8.91998 11.0857 8.23145 10.2364 8.23145V8.23145C9.38702 8.23145 8.69849 8.91998 8.69849 9.76932V14.8223"
        ),
        c(l, "stroke", "#1977F3"),
        c(l, "stroke-width", "1.2"),
        c(l, "stroke-miterlimit", "10"),
        c(l, "stroke-linecap", "round"),
        c(
          r,
          "d",
          "M3.1123 6.12015V3.87598C3.1123 3.32369 3.56002 2.87598 4.1123 2.87598H6.38238M3.1123 13.8541V16.1241C3.1123 16.6764 3.56002 17.1241 4.1123 17.1241H6.38238M17.3605 13.8541V16.1241C17.3605 16.6764 16.9128 17.1241 16.3605 17.1241H14.1423M17.3605 6.12015V3.87598C17.3605 3.32369 16.9128 2.87598 16.3605 2.87598H14.1423"
        ),
        c(r, "stroke", "#1977F3"),
        c(r, "stroke-width", "1.2"),
        c(r, "stroke-miterlimit", "10"),
        c(r, "stroke-linecap", "round"),
        c(e, "class", (i = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 21 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, a) {
      w(s, e, a), f(e, n), f(e, t), f(e, l), f(e, r);
    },
    p(s, [a]) {
      a & 4 && i !== (i = `icon ${s[2]}`) && c(e, "class", i),
        a & 1 && c(e, "width", s[0]),
        a & 2 && c(e, "height", s[1]);
    },
    i: L,
    o: L,
    d(s) {
      s && $(e);
    },
  };
}
function wv(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var ur = class extends H {
    constructor(e) {
      super(), j(this, e, wv, kv, U, { width: 0, height: 1, className: 2 });
    }
  },
  Ln = ur;
N();
function $v(o) {
  let e, n, t, l, r, i, s, a;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (l = F("defs")),
        (r = F("linearGradient")),
        (i = F("stop")),
        (s = F("stop")),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M8.89529 0.820312C5.4352 0.820312 2.63025 3.62527 2.63025 7.08535V7.75134C1.56788 7.85556 0.737793 8.75145 0.737793 9.84121V11.3625C0.737793 12.5223 1.67799 13.4625 2.83779 13.4625H4.36875H4.96875V12.8625V8.34121V7.74121H4.36875H3.83025V7.08535C3.83025 4.28801 6.09795 2.02031 8.89529 2.02031C11.6926 2.02031 13.9603 4.28801 13.9603 7.08535V7.74041H13.4006H12.8006V8.34041L12.8006 12.8617V13.4617H13.4006H13.7783C13.7053 14.9467 12.4783 16.1282 10.9752 16.1282H8.7167C8.38533 16.1282 8.1167 16.3968 8.1167 16.7282C8.1167 17.0596 8.38533 17.3282 8.7167 17.3282H10.9752C13.1413 17.3282 14.9058 15.6093 14.9793 13.4612C16.1171 13.4358 17.0315 12.5055 17.0315 11.3617V9.84041C17.0315 8.75791 16.2125 7.86672 15.1603 7.75272V7.08535C15.1603 3.62527 12.3554 0.820312 8.89529 0.820312ZM1.93779 9.84121C1.93779 9.34415 2.34074 8.94121 2.83779 8.94121H3.76875V12.2625H2.83779C2.34074 12.2625 1.93779 11.8596 1.93779 11.3625V9.84121ZM14.9315 12.2617C15.4286 12.2617 15.8315 11.8588 15.8315 11.3617V9.84041C15.8315 9.34335 15.4286 8.94041 14.9315 8.94041H14.0006V12.2617H14.9315Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45037)" : "currentColor")
        ),
        c(i, "stop-color", "#FF3D3D"),
        c(s, "offset", "1"),
        c(s, "stop-color", "#5956FF"),
        c(r, "id", "paint0_linear_1034_45037"),
        c(r, "x1", "0.834291"),
        c(r, "y1", "13.1535"),
        c(r, "x2", "10.9371"),
        c(r, "y2", "1.01286"),
        c(r, "gradientUnits", "userSpaceOnUse"),
        c(e, "class", (a = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 18 18"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(u, p) {
      w(u, e, p), f(e, n), f(e, l), f(l, r), f(r, i), f(r, s);
    },
    p(u, [p]) {
      p & 8 &&
        t !== (t = u[3] ? "url(#paint0_linear_1034_45037)" : "currentColor") &&
        c(n, "fill", t),
        p & 4 && a !== (a = `icon ${u[2]}`) && c(e, "class", a),
        p & 1 && c(e, "width", u[0]),
        p & 2 && c(e, "height", u[1]);
    },
    i: L,
    o: L,
    d(u) {
      u && $(e);
    },
  };
}
function yv(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var pr = class extends H {
    constructor(e) {
      super(),
        j(this, e, yv, $v, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  pn = pr;
N();
function Cv(o) {
  let e, n, t, l, r, i;
  return {
    c() {
      (e = F("svg")),
        (n = F("rect")),
        (t = F("path")),
        (l = F("path")),
        (r = F("line")),
        c(n, "width", "20"),
        c(n, "height", "20"),
        c(n, "transform", "translate(0 0.192627)"),
        c(n, "fill", "none"),
        c(
          t,
          "d",
          "M15.1377 9.65407C15.1377 6.3684 12.4742 3.70483 9.18849 3.70483C5.90282 3.70483 3.23926 6.3684 3.23926 9.65407C3.23926 12.9397 5.90282 15.6033 9.18849 15.6033C10.8945 15.6033 12.4328 14.8852 13.5176 13.7348"
        ),
        c(t, "stroke", "#1977F3"),
        c(t, "stroke-width", "1.2"),
        c(t, "stroke-miterlimit", "10"),
        c(t, "stroke-linecap", "round"),
        c(
          l,
          "d",
          "M5.79919 9.65424C5.79919 7.78236 7.31666 6.26489 9.18854 6.26489"
        ),
        c(l, "stroke", "#1977F3"),
        c(l, "stroke-width", "1.2"),
        c(l, "stroke-miterlimit", "10"),
        c(l, "stroke-linecap", "round"),
        c(r, "x1", "13.7274"),
        c(r, "y1", "14.019"),
        c(r, "x2", "16.5089"),
        c(r, "y2", "16.8005"),
        c(r, "stroke", "#1977F3"),
        c(r, "stroke-width", "1.2"),
        c(r, "stroke-miterlimit", "10"),
        c(r, "stroke-linecap", "round"),
        c(e, "class", (i = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 21"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, a) {
      w(s, e, a), f(e, n), f(e, t), f(e, l), f(e, r);
    },
    p(s, [a]) {
      a & 4 && i !== (i = `icon ${s[2]}`) && c(e, "class", i),
        a & 1 && c(e, "width", s[0]),
        a & 2 && c(e, "height", s[1]);
    },
    i: L,
    o: L,
    d(s) {
      s && $(e);
    },
  };
}
function xv(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var fr = class extends H {
    constructor(e) {
      super(), j(this, e, xv, Cv, U, { width: 0, height: 1, className: 2 });
    }
  },
  Un = fr;
N();
function Sv(o) {
  let e, n, t, l, r;
  return {
    c() {
      (e = F("svg")),
        (n = F("rect")),
        (t = F("rect")),
        (l = F("line")),
        c(n, "width", "20"),
        c(n, "height", "20"),
        c(n, "transform", "translate(0 0.192627)"),
        c(n, "fill", "none"),
        c(t, "x", "2.71216"),
        c(t, "y", "4.44604"),
        c(t, "width", "14.5325"),
        c(t, "height", "11.7553"),
        c(t, "rx", "1"),
        c(t, "stroke", "currentColor"),
        c(t, "stroke-width", "1.2"),
        c(t, "stroke-miterlimit", "10"),
        c(t, "stroke-linecap", "round"),
        c(l, "x1", "6.83376"),
        c(l, "y1", "5.30068"),
        c(l, "x2", "6.83376"),
        c(l, "y2", "15.6015"),
        c(l, "stroke", "currentColor"),
        c(l, "stroke-width", "1.2"),
        c(l, "stroke-miterlimit", "10"),
        c(l, "stroke-linecap", "round"),
        c(e, "class", (r = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 21"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), f(e, t), f(e, l);
    },
    p(i, [s]) {
      s & 4 && r !== (r = `icon ${i[2]}`) && c(e, "class", r),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e);
    },
  };
}
function Av(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var dr = class extends H {
    constructor(e) {
      super(), j(this, e, Av, Sv, U, { width: 0, height: 1, className: 2 });
    }
  },
  en = dr;
N();
function Ev(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("svg")),
        (n = F("rect")),
        (t = F("path")),
        c(n, "width", "20"),
        c(n, "height", "20"),
        c(n, "transform", "translate(0.236328 0.114014)"),
        c(n, "fill", "none"),
        c(
          t,
          "d",
          "M12.8003 6.66573H9.10298C8.5507 6.66573 8.10298 6.21802 8.10298 5.66573V5.28784C8.10298 4.73556 7.65527 4.28784 7.10298 4.28784H3.96509C3.4128 4.28784 2.96509 4.73556 2.96509 5.28784V14.9404C2.96509 15.4927 3.4128 15.9404 3.96509 15.9404H16.4975C17.0498 15.9404 17.4975 15.4927 17.4975 14.9404V7.66573C17.4975 7.11345 17.0498 6.66573 16.4975 6.66573H12.8003ZM12.8003 6.66573V5.28784C12.8003 4.73556 12.3525 4.28784 11.8003 4.28784H10.1815M17.5075 8.66273V5.28784C17.5075 4.73556 17.0598 4.28784 16.5075 4.28784H14.6442"
        ),
        c(t, "stroke", "currentColor"),
        c(t, "stroke-width", "1.2"),
        c(t, "stroke-miterlimit", "10"),
        c(t, "stroke-linecap", "round"),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 21 21"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, t);
    },
    p(r, [i]) {
      i & 4 && l !== (l = `icon ${r[2]}`) && c(e, "class", l),
        i & 1 && c(e, "width", r[0]),
        i & 2 && c(e, "height", r[1]);
    },
    i: L,
    o: L,
    d(r) {
      r && $(e);
    },
  };
}
function Iv(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var mr = class extends H {
    constructor(e) {
      super(), j(this, e, Iv, Ev, U, { width: 0, height: 1, className: 2 });
    }
  },
  tn = mr;
N();
function Tv(o) {
  Z(
    o,
    "svelte-pteusx",
    ".feature.svelte-pteusx{display:flex;align-items:center;gap:10px}.icon.svelte-pteusx{width:20px;height:20px;color:#1977f3}.badge.svelte-pteusx{display:inline-block;padding:3px 6px;border-radius:2px;background:rgb(var(--theme-rgb) 0.05);color:var(--theme-70)}"
  );
}
function $p(o) {
  let e,
    n = o[0].badge + "",
    t;
  return {
    c() {
      (e = v("span")), (t = V(n)), c(e, "class", "badge svelte-pteusx");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 1 && n !== (n = l[0].badge + "") && ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function Mv(o) {
  let e,
    n,
    t,
    l,
    r = o[0].title + "",
    i,
    s,
    a;
  var u = o[0].icon;
  function p(m) {
    return {};
  }
  u && (t = mt(u, p(o)));
  let d = o[0]?.badge && $p(o);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        t && y(t.$$.fragment),
        (l = S()),
        (i = V(r)),
        (s = S()),
        d && d.c(),
        c(n, "class", "icon svelte-pteusx"),
        c(e, "class", "feature svelte-pteusx");
    },
    m(m, g) {
      w(m, e, g),
        f(e, n),
        t && C(t, n, null),
        f(e, l),
        f(e, i),
        f(e, s),
        d && d.m(e, null),
        (a = !0);
    },
    p(m, [g]) {
      if (g & 1 && u !== (u = m[0].icon)) {
        if (t) {
          Q();
          let b = t;
          h(b.$$.fragment, 1, 0, () => {
            x(b, 1);
          }),
            Y();
        }
        u
          ? ((t = mt(u, p(m))),
            y(t.$$.fragment),
            _(t.$$.fragment, 1),
            C(t, n, null))
          : (t = null);
      }
      (!a || g & 1) && r !== (r = m[0].title + "") && ee(i, r),
        m[0]?.badge
          ? d
            ? d.p(m, g)
            : ((d = $p(m)), d.c(), d.m(e, null))
          : d && (d.d(1), (d = null));
    },
    i(m) {
      a || (t && _(t.$$.fragment, m), (a = !0));
    },
    o(m) {
      t && h(t.$$.fragment, m), (a = !1);
    },
    d(m) {
      m && $(e), t && x(t), d && d.d();
    },
  };
}
function Pv(o, e, n) {
  let { feature: t } = e;
  return (
    (o.$$set = (l) => {
      "feature" in l && n(0, (t = l.feature));
    }),
    [t]
  );
}
var _r = class extends H {
    constructor(e) {
      super(), j(this, e, Pv, Mv, U, { feature: 0 }, Tv);
    }
  },
  yp = _r;
function zv(o) {
  Z(
    o,
    "svelte-12jpkm2",
    ".feature-list.svelte-12jpkm2{margin:8px 0 20px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}"
  );
}
function Cp(o, e, n) {
  let t = o.slice();
  return (t[1] = e[n]), t;
}
function xp(o) {
  let e, n;
  return (
    (e = new yp({ props: { feature: o[1] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Bv(o) {
  let e,
    n,
    t = o[0],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = xp(Cp(o, t, i));
  let r = (i) =>
    h(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v("ul");
      for (let i = 0; i < l.length; i += 1) l[i].c();
      c(e, "class", "feature-list svelte-12jpkm2");
    },
    m(i, s) {
      w(i, e, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(e, null);
      n = !0;
    },
    p(i, [s]) {
      if (s & 1) {
        t = i[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          let u = Cp(i, t, a);
          l[a]
            ? (l[a].p(u, s), _(l[a], 1))
            : ((l[a] = xp(u)), l[a].c(), _(l[a], 1), l[a].m(e, null));
        }
        for (Q(), a = t.length; a < l.length; a += 1) r(a);
        Y();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < t.length; s += 1) _(l[s]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1) h(l[s]);
      n = !1;
    },
    d(i) {
      i && $(e), Ae(l, i);
    },
  };
}
function Nv(o) {
  return [
    [
      { icon: In, title: A("overlay_upgrade_plan__features_unlimited_apps") },
      { icon: An, title: A("overlay_upgrade_plan__features_split_view") },
      { icon: Dn, title: A("overlay_upgrade_plan__features_adblock") },
      { icon: en, title: A("overlay_upgrade_plan__features_sidebar") },
      { icon: tn, title: A("overlay_upgrade_plan__features_tab_suspender") },
      { icon: Zt, title: A("overlay_upgrade_plan__features_multi_accounts") },
      { icon: En, title: A("overlay_upgrade_plan__features_tab_sessions") },
      {
        icon: Ln,
        title: A("overlay_upgrade_plan__features_fingerprinting_defense"),
      },
      {
        icon: qt,
        title: A("overlay_upgrade_plan__features_workspaces"),
        badge: A("overlay_upgrade_plan__features_workspaces_badge"),
      },
      { icon: Un, title: A("overlay_upgrade_plan__features_global_search") },
      { icon: pn, title: A("overlay_upgrade_plan__features_support") },
    ],
  ];
}
var gr = class extends H {
    constructor(e) {
      super(), j(this, e, Nv, Bv, U, {}, zv);
    }
  },
  Sp = gr;
N();
function qv(o) {
  Z(
    o,
    "svelte-8646t0",
    ".plan.svelte-8646t0.svelte-8646t0{width:calc(50% - 10px);border:1px solid var(--upgrade-popup-highlight-border-color);border-radius:8px;text-align:center;padding:20px;box-sizing:border-box}.plan-marked.svelte-8646t0.svelte-8646t0{background:var(--upgrade-popup-highlight-bg-color)}.plan-name.svelte-8646t0.svelte-8646t0{font-size:18px;font-weight:700;margin-bottom:1em;color:var(--upgrade-popup-bright-text-color)}.plan-monthly-price.svelte-8646t0.svelte-8646t0{font-size:16px;display:flex;align-items:flex-start;justify-content:center;margin-bottom:15px;color:var(--upgrade-popup-bright-text-color)}.plan-monthly-price.svelte-8646t0 span.svelte-8646t0{font-size:34px;font-weight:900;line-height:22px;margin-right:5px}.plan-yearly-price.svelte-8646t0.svelte-8646t0{font-size:14px;color:var(--upgrade-popup-text-color);margin-bottom:15px;line-height:22px}.plan-yearly-price.svelte-8646t0 .banner.svelte-8646t0{display:inline-block;padding:3px 6px;border-radius:2px;background:var(--upgrade-popup-banner-bg-color);font-size:12px;color:#e33f2e;margin-left:3px;line-height:16px}"
  );
}
function Ap(o) {
  let e, n;
  return {
    c() {
      (e = v("span")), (n = V(o[3])), c(e, "class", "banner svelte-8646t0");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 8 && ee(n, t[3]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function Dv(o) {
  let e = A("overlay_upgrade_plan__upgrade_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Lv(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u = A("overlay_upgrade_plan__month") + "",
    p,
    d,
    m,
    g,
    b,
    k = A("overlay_upgrade_plan__year") + "",
    E,
    I,
    T,
    P,
    M,
    B = o[3] && Ap(o);
  return (
    (P = new pe({
      props: { $$slots: { default: [Dv] }, $$scope: { ctx: o } },
    })),
    P.$on("click", o[9]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (t = V(o[0])),
          (l = S()),
          (r = v("div")),
          (i = v("span")),
          (s = V(o[1])),
          (a = V("/")),
          (p = V(u)),
          (d = S()),
          (m = v("div")),
          (g = V(o[2])),
          (b = V("/")),
          (E = V(k)),
          (I = S()),
          B && B.c(),
          (T = S()),
          y(P.$$.fragment),
          c(n, "class", "plan-name svelte-8646t0"),
          c(i, "class", "svelte-8646t0"),
          c(r, "class", "plan-monthly-price svelte-8646t0"),
          c(m, "class", "plan-yearly-price svelte-8646t0"),
          c(e, "class", "plan svelte-8646t0"),
          c(e, "data-testid", o[7]),
          ie(e, "plan-marked", o[4]);
      },
      m(O, z) {
        w(O, e, z),
          f(e, n),
          f(n, t),
          f(e, l),
          f(e, r),
          f(r, i),
          f(i, s),
          f(r, a),
          f(r, p),
          f(e, d),
          f(e, m),
          f(m, g),
          f(m, b),
          f(m, E),
          f(m, I),
          B && B.m(m, null),
          f(e, T),
          C(P, e, null),
          (M = !0);
      },
      p(O, [z]) {
        (!M || z & 1) && ee(t, O[0]),
          (!M || z & 2) && ee(s, O[1]),
          (!M || z & 4) && ee(g, O[2]),
          O[3]
            ? B
              ? B.p(O, z)
              : ((B = Ap(O)), B.c(), B.m(m, null))
            : B && (B.d(1), (B = null));
        let G = {};
        z & 1024 && (G.$$scope = { dirty: z, ctx: O }),
          P.$set(G),
          (!M || z & 128) && c(e, "data-testid", O[7]),
          (!M || z & 16) && ie(e, "plan-marked", O[4]);
      },
      i(O) {
        M || (_(P.$$.fragment, O), (M = !0));
      },
      o(O) {
        h(P.$$.fragment, O), (M = !1);
      },
      d(O) {
        O && $(e), B && B.d(), x(P);
      },
    }
  );
}
function Uv(o, e, n) {
  let { name: t = "" } = e,
    { monthlyPrice: l = "$8" } = e,
    { yearlyPrice: r = "$96" } = e,
    { banner: i = null } = e,
    { marked: s = !1 } = e,
    { planId: a } = e,
    { period: u } = e,
    { dataTestId: p = "" } = e,
    d = oe(),
    m = () => d("showUpgradePlan", { planId: a, period: u });
  return (
    (o.$$set = (g) => {
      "name" in g && n(0, (t = g.name)),
        "monthlyPrice" in g && n(1, (l = g.monthlyPrice)),
        "yearlyPrice" in g && n(2, (r = g.yearlyPrice)),
        "banner" in g && n(3, (i = g.banner)),
        "marked" in g && n(4, (s = g.marked)),
        "planId" in g && n(5, (a = g.planId)),
        "period" in g && n(6, (u = g.period)),
        "dataTestId" in g && n(7, (p = g.dataTestId));
    }),
    [t, l, r, i, s, a, u, p, d, m]
  );
}
var hr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          Uv,
          Lv,
          U,
          {
            name: 0,
            monthlyPrice: 1,
            yearlyPrice: 2,
            banner: 3,
            marked: 4,
            planId: 5,
            period: 6,
            dataTestId: 7,
          },
          qv
        );
    }
  },
  vr = hr;
function jv(o) {
  Z(
    o,
    "svelte-1fiirr2",
    ".upgrade-popup.svelte-1fiirr2{position:relative;padding:30px 50px}.close-button.svelte-1fiirr2{position:absolute;top:0;right:0;padding:12px}h1.svelte-1fiirr2,h2.svelte-1fiirr2{margin:0;color:var(--text-primary-color);text-align:center}h1.svelte-1fiirr2{font-size:30px;line-height:1.3em;font-weight:900;margin-bottom:30px}h2.svelte-1fiirr2{font-size:16px;line-height:22px;margin-bottom:25px}.plans.svelte-1fiirr2{display:flex;justify-content:space-between;margin-bottom:30px}"
  );
}
function Ep(o) {
  let e, n, t, l, r;
  return (
    (n = new vr({
      props: {
        dataTestId: "upgrade-popup-monthly-plan",
        monthlyPrice: o[3](Number(o[0].monthlyPlan.monthlyPrice)),
        name: A("overlay_upgrade_plan__monthly_name"),
        period: "month",
        planId: o[0].monthlyPlan.planId,
        yearlyPrice: o[3](Number(o[0].monthlyPlan.monthlyPrice) * 12),
      },
    })),
    n.$on("showUpgradePlan", o[6]),
    (l = new vr({
      props: {
        banner: `Save ${o[0].yearlyPlan.yearlySavings}`,
        dataTestId: "upgrade-popup-yearly-plan",
        marked: !0,
        monthlyPrice: o[3](o[0].yearlyPlan.monthlyPrice),
        name: A("overlay_upgrade_plan__yearly_name"),
        period: "year",
        planId: o[0].yearlyPlan.planId,
        yearlyPrice: o[3](o[0].yearlyPlan.yearlyPrice),
      },
    })),
    l.$on("showUpgradePlan", o[7]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          y(l.$$.fragment),
          c(e, "class", "plans svelte-1fiirr2");
      },
      m(i, s) {
        w(i, e, s), C(n, e, null), f(e, t), C(l, e, null), (r = !0);
      },
      p(i, s) {
        let a = {};
        s & 1 && (a.monthlyPrice = i[3](Number(i[0].monthlyPlan.monthlyPrice))),
          s & 1 && (a.planId = i[0].monthlyPlan.planId),
          s & 1 &&
            (a.yearlyPrice = i[3](Number(i[0].monthlyPlan.monthlyPrice) * 12)),
          n.$set(a);
        let u = {};
        s & 1 && (u.banner = `Save ${i[0].yearlyPlan.yearlySavings}`),
          s & 1 && (u.monthlyPrice = i[3](i[0].yearlyPlan.monthlyPrice)),
          s & 1 && (u.planId = i[0].yearlyPlan.planId),
          s & 1 && (u.yearlyPrice = i[3](i[0].yearlyPlan.yearlyPrice)),
          l.$set(u);
      },
      i(i) {
        r || (_(n.$$.fragment, i), _(l.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(n.$$.fragment, i), h(l.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && $(e), x(n), x(l);
      },
    }
  );
}
function Hv(o) {
  let e,
    n,
    t,
    l,
    r,
    i = A("overlay_upgrade_plan__title") + "",
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b;
  t = new qe({ props: { width: "12", height: "12" } });
  let k = o[0] && Ep(o);
  return (
    (d = new Sp({})),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("h1")),
          (s = S()),
          k && k.c(),
          (a = S()),
          (u = v("h2")),
          (u.textContent = `${A("overlay_upgrade_plan__second_title")}`),
          (p = S()),
          y(d.$$.fragment),
          c(n, "class", "close-button svelte-1fiirr2"),
          c(n, "data-testid", "upgrade-popup-button-close"),
          c(r, "class", "svelte-1fiirr2"),
          c(u, "class", "svelte-1fiirr2"),
          c(e, "class", "upgrade-popup svelte-1fiirr2"),
          c(e, "data-testid", "upgrade-popup");
      },
      m(E, I) {
        w(E, e, I),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          (r.innerHTML = i),
          f(e, s),
          k && k.m(e, null),
          f(e, a),
          f(e, u),
          f(e, p),
          C(d, e, null),
          (m = !0),
          g || ((b = X(n, "click", o[5])), (g = !0));
      },
      p(E, I) {
        E[0]
          ? k
            ? (k.p(E, I), I & 1 && _(k, 1))
            : ((k = Ep(E)), k.c(), _(k, 1), k.m(e, a))
          : k &&
            (Q(),
            h(k, 1, 1, () => {
              k = null;
            }),
            Y());
      },
      i(E) {
        m || (_(t.$$.fragment, E), _(k), _(d.$$.fragment, E), (m = !0));
      },
      o(E) {
        h(t.$$.fragment, E), h(k), h(d.$$.fragment, E), (m = !1);
      },
      d(E) {
        E && $(e), x(t), k && k.d(), x(d), (g = !1), b();
      },
    }
  );
}
function Vv(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 690,
        height: "auto",
        $$slots: { default: [Hv] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 257 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Ov(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [Vv] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 257 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Rv(o, e, n) {
  let t = oe(),
    { source: l } = e,
    r;
  q.queries
    .loadUpgradePlanModalState()
    .then((d) => {
      n(0, (r = d));
    })
    .catch(ft);
  let i = ({ planId: d, period: m }) => {
      q.actions.openUpgradePlanTab(d),
        q.actions.sendAnalyticsEvent(
          "upgrade-plan.auto-upgrade-button-clicked",
          { "subscription-period": m }
        ),
        t("close");
    },
    s = (d) => `$${d}`;
  ye(
    () => (
      q.actions.sendAnalyticsEvent("upgrade-plan.auto-opened", { source: l }),
      () =>
        q.actions.sendAnalyticsEvent("upgrade-plan.auto-closed", { source: l })
    )
  );
  let a = () => t("close"),
    u = ({ detail: d }) => i(d),
    p = ({ detail: d }) => i(d);
  return (
    (o.$$set = (d) => {
      "source" in d && n(4, (l = d.source));
    }),
    [r, t, i, s, l, a, u, p]
  );
}
var br = class extends H {
    constructor(e) {
      super(), j(this, e, Rv, Ov, U, { source: 4 }, jv);
    }
  },
  Ip = br;
N();
N();
function Wv(o) {
  Z(
    o,
    "svelte-uwu6i1",
    `.container.svelte-uwu6i1.svelte-uwu6i1{display:flex;flex-direction:column;width:238px;position:relative;border-radius:8px;--border-color:var(--b2b-upgrade-col-border);--border-size:1px}.gradient.svelte-uwu6i1.svelte-uwu6i1{--border-color:linear-gradient(
      to right,
      rgb(125 76 221 / 1),
      rgb(236 63 60 / 1),
      rgb(255 184 0 / 1)
    );--border-size:2px}.container.svelte-uwu6i1.svelte-uwu6i1::before{content:'';position:absolute;inset:0;border-radius:8px;padding:var(--border-size);background:var(--border-color);-webkit-mask:linear-gradient(var(--text-primary-color) 0 0) content-box,
      linear-gradient(var(--text-primary-color) 0 0);-webkit-mask-composite:xor;z-index:-1}.head-block.svelte-uwu6i1.svelte-uwu6i1{padding:24px;position:relative;height:171px;border-radius:8px 8px 25px 25px}.secondary.svelte-uwu6i1 .head-block.svelte-uwu6i1{background:var(--b2b-upgrade-col-secondary-bg)}.primary.svelte-uwu6i1 .head-block.svelte-uwu6i1{background:rgb(26 140 255 / 0.12)}.gradient.svelte-uwu6i1 .head-block.svelte-uwu6i1{background:rgb(255 166 112 / 0.15)}.header.svelte-uwu6i1.svelte-uwu6i1{color:var(--b2b-upgrade-col-header);font-size:20px;font-weight:700}.active-badge.svelte-uwu6i1.svelte-uwu6i1{border-radius:6px;background:rgb(89 182 75 / 0.12);padding:3px 8px;position:absolute;top:13px;right:13px;color:#59b64b;font-weight:600}.description.svelte-uwu6i1.svelte-uwu6i1{color:var(--b2b-upgrade-col-description);letter-spacing:-0.24px;margin-top:9px}.price.svelte-uwu6i1.svelte-uwu6i1{display:flex;flex-direction:row;column-gap:40px;color:var(--text-primary-color);font-size:35px;font-weight:700;margin-top:40px}.features.svelte-uwu6i1.svelte-uwu6i1{margin-top:16px;padding:0 22px}.features-label.svelte-uwu6i1.svelte-uwu6i1{color:var(--b2b-upgrade-col-features-label);font-size:10px;letter-spacing:0.8px;margin-top:16px;padding:0 22px}.action.svelte-uwu6i1.svelte-uwu6i1{display:flex;flex-direction:row;flex-grow:1;justify-content:center;align-items:end;margin-top:16px;margin-bottom:22px}`
  );
}
var Gv = (o) => ({}),
  Tp = (o) => ({}),
  Fv = (o) => ({}),
  Mp = (o) => ({}),
  Zv = (o) => ({}),
  Pp = (o) => ({}),
  Kv = (o) => ({}),
  zp = (o) => ({});
function Bp(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A("overlay_billing_team_upgrade__active")}`),
        c(e, "class", "active-badge svelte-uwu6i1");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function Np(o) {
  let e,
    n,
    t = o[6]["features-label"],
    l = We(t, o, o[5], Pp);
  return {
    c() {
      (e = v("div")), l && l.c(), c(e, "class", "features-label svelte-uwu6i1");
    },
    m(r, i) {
      w(r, e, i), l && l.m(e, null), (n = !0);
    },
    p(r, i) {
      l &&
        l.p &&
        (!n || i & 32) &&
        Fe(l, t, r, r[5], n ? Ge(t, r[5], i, Zv) : Ze(r[5]), Pp);
    },
    i(r) {
      n || (_(l, r), (n = !0));
    },
    o(r) {
      h(l, r), (n = !1);
    },
    d(r) {
      r && $(e), l && l.d(r);
    },
  };
}
function Qv(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T = o[0] && Bp(o),
    P = o[6].price,
    M = We(P, o, o[5], zp),
    B = o[4]["features-label"] && Np(o),
    O = o[6].features,
    z = We(O, o, o[5], Mp),
    G = o[6].action,
    W = We(G, o, o[5], Tp);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = v("div")),
        (l = V(o[2])),
        (r = S()),
        T && T.c(),
        (i = S()),
        (s = v("div")),
        (a = V(o[3])),
        (u = S()),
        (p = v("div")),
        M && M.c(),
        (d = S()),
        B && B.c(),
        (m = S()),
        (g = v("div")),
        z && z.c(),
        (b = S()),
        (k = v("div")),
        W && W.c(),
        c(t, "class", "header svelte-uwu6i1"),
        c(s, "class", "description svelte-uwu6i1"),
        c(p, "class", "price svelte-uwu6i1"),
        c(n, "class", "head-block svelte-uwu6i1"),
        c(g, "class", "features svelte-uwu6i1"),
        c(k, "class", "action svelte-uwu6i1"),
        c(e, "class", (E = at(`container ${o[1]}`) + " svelte-uwu6i1"));
    },
    m(D, R) {
      w(D, e, R),
        f(e, n),
        f(n, t),
        f(t, l),
        f(n, r),
        T && T.m(n, null),
        f(n, i),
        f(n, s),
        f(s, a),
        f(n, u),
        f(n, p),
        M && M.m(p, null),
        f(e, d),
        B && B.m(e, null),
        f(e, m),
        f(e, g),
        z && z.m(g, null),
        f(e, b),
        f(e, k),
        W && W.m(k, null),
        (I = !0);
    },
    p(D, [R]) {
      (!I || R & 4) && ee(l, D[2]),
        D[0]
          ? T
            ? T.p(D, R)
            : ((T = Bp(D)), T.c(), T.m(n, i))
          : T && (T.d(1), (T = null)),
        (!I || R & 8) && ee(a, D[3]),
        M &&
          M.p &&
          (!I || R & 32) &&
          Fe(M, P, D, D[5], I ? Ge(P, D[5], R, Kv) : Ze(D[5]), zp),
        D[4]["features-label"]
          ? B
            ? (B.p(D, R), R & 16 && _(B, 1))
            : ((B = Np(D)), B.c(), _(B, 1), B.m(e, m))
          : B &&
            (Q(),
            h(B, 1, 1, () => {
              B = null;
            }),
            Y()),
        z &&
          z.p &&
          (!I || R & 32) &&
          Fe(z, O, D, D[5], I ? Ge(O, D[5], R, Fv) : Ze(D[5]), Mp),
        W &&
          W.p &&
          (!I || R & 32) &&
          Fe(W, G, D, D[5], I ? Ge(G, D[5], R, Gv) : Ze(D[5]), Tp),
        (!I ||
          (R & 2 && E !== (E = at(`container ${D[1]}`) + " svelte-uwu6i1"))) &&
          c(e, "class", E);
    },
    i(D) {
      I || (_(M, D), _(B), _(z, D), _(W, D), (I = !0));
    },
    o(D) {
      h(M, D), h(B), h(z, D), h(W, D), (I = !1);
    },
    d(D) {
      D && $(e), T && T.d(), M && M.d(D), B && B.d(), z && z.d(D), W && W.d(D);
    },
  };
}
function Yv(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    r = gn(t),
    { isActive: i = !1 } = e,
    { mode: s } = e,
    { header: a } = e,
    { description: u } = e;
  return (
    (o.$$set = (p) => {
      "isActive" in p && n(0, (i = p.isActive)),
        "mode" in p && n(1, (s = p.mode)),
        "header" in p && n(2, (a = p.header)),
        "description" in p && n(3, (u = p.description)),
        "$$scope" in p && n(5, (l = p.$$scope));
    }),
    [i, s, a, u, r, l, t]
  );
}
var kr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          Yv,
          Qv,
          U,
          { isActive: 0, mode: 1, header: 2, description: 3 },
          Wv
        );
    }
  },
  jn = kr;
N();
function Jv(o) {
  Z(
    o,
    "svelte-4trls2",
    ".feature-list.svelte-4trls2{display:flex;flex-direction:column;row-gap:4px}.feature-item.svelte-4trls2{display:flex;flex-direction:row;align-items:center;height:20px;column-gap:10px;color:var(--billing-modal-feature-item)}.feature-item.negative.svelte-4trls2 .icon{color:#f00}.feature-item.secondary.svelte-4trls2 .icon{color:#c9c9c9}.feature-item.primary.svelte-4trls2 .icon{color:#2684ff}.feature-item-badge.svelte-4trls2{display:flex;align-items:center;justify-content:center;margin-left:auto;background:rgb(0 0 0 / 0.04);border-radius:100px;height:20px;width:20px;color:var(--billing-modal-feature-item-badge)}"
  );
}
function qp(o, e, n) {
  let t = o.slice();
  return (t[3] = e[n][0]), (t[4] = e[n][1]), (t[6] = n), t;
}
function Dp(o) {
  let e,
    n = o[1][o[3]] + "",
    t;
  return {
    c() {
      (e = v("div")),
        (t = V(n)),
        c(e, "class", "feature-item-badge svelte-4trls2");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 3 && n !== (n = l[1][l[3]] + "") && ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function Lp(o, e) {
  let n,
    t,
    l,
    r,
    i = e[4].text + "",
    s,
    a,
    u,
    p,
    d;
  var m = e[4].icon;
  function g(k) {
    return {
      props: {
        className: "icon",
        width: "20px",
        height: "20px",
        useGradient: k[2] === "gradient",
      },
    };
  }
  m && (t = mt(m, g(e)));
  let b = e[1][e[3]] && Dp(e);
  return {
    key: o,
    first: null,
    c() {
      (n = v("div")),
        t && y(t.$$.fragment),
        (l = S()),
        (r = v("span")),
        (s = V(i)),
        (a = S()),
        b && b.c(),
        (u = S()),
        c(n, "class", (p = at(`feature-item ${e[2]}`) + " svelte-4trls2")),
        (this.first = n);
    },
    m(k, E) {
      w(k, n, E),
        t && C(t, n, null),
        f(n, l),
        f(n, r),
        f(r, s),
        f(n, a),
        b && b.m(n, null),
        f(n, u),
        (d = !0);
    },
    p(k, E) {
      e = k;
      let I = {};
      if (
        (E & 4 && (I.useGradient = e[2] === "gradient"),
        E & 1 && m !== (m = e[4].icon))
      ) {
        if (t) {
          Q();
          let T = t;
          h(T.$$.fragment, 1, 0, () => {
            x(T, 1);
          }),
            Y();
        }
        m
          ? ((t = mt(m, g(e))),
            y(t.$$.fragment),
            _(t.$$.fragment, 1),
            C(t, n, l))
          : (t = null);
      } else m && t.$set(I);
      (!d || E & 1) && i !== (i = e[4].text + "") && ee(s, i),
        e[1][e[3]]
          ? b
            ? b.p(e, E)
            : ((b = Dp(e)), b.c(), b.m(n, u))
          : b && (b.d(1), (b = null)),
        (!d ||
          (E & 4 &&
            p !== (p = at(`feature-item ${e[2]}`) + " svelte-4trls2"))) &&
          c(n, "class", p);
    },
    i(k) {
      d || (t && _(t.$$.fragment, k), (d = !0));
    },
    o(k) {
      t && h(t.$$.fragment, k), (d = !1);
    },
    d(k) {
      k && $(n), t && x(t), b && b.d();
    },
  };
}
function Xv(o) {
  let e,
    n = [],
    t = new Map(),
    l,
    r = Object.entries(o[0]),
    i = (s) => s[6];
  for (let s = 0; s < r.length; s += 1) {
    let a = qp(o, r, s),
      u = i(a);
    t.set(u, (n[s] = Lp(u, a)));
  }
  return {
    c() {
      e = v("div");
      for (let s = 0; s < n.length; s += 1) n[s].c();
      c(e, "class", "feature-list svelte-4trls2");
    },
    m(s, a) {
      w(s, e, a);
      for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(e, null);
      l = !0;
    },
    p(s, [a]) {
      a & 7 &&
        ((r = Object.entries(s[0])),
        Q(),
        (n = ut(n, a, i, 1, s, r, t, e, ct, Lp, null, qp)),
        Y());
    },
    i(s) {
      if (!l) {
        for (let a = 0; a < r.length; a += 1) _(n[a]);
        l = !0;
      }
    },
    o(s) {
      for (let a = 0; a < n.length; a += 1) h(n[a]);
      l = !1;
    },
    d(s) {
      s && $(e);
      for (let a = 0; a < n.length; a += 1) n[a].d();
    },
  };
}
function e4(o, e, n) {
  let { features: t } = e,
    { limits: l = {} } = e,
    { mode: r } = e;
  return (
    (o.$$set = (i) => {
      "features" in i && n(0, (t = i.features)),
        "limits" in i && n(1, (l = i.limits)),
        "mode" in i && n(2, (r = i.mode));
    }),
    [t, l, r]
  );
}
var wr = class extends H {
    constructor(e) {
      super(), j(this, e, e4, Xv, U, { features: 0, limits: 1, mode: 2 }, Jv);
    }
  },
  Ct = wr;
N();
N();
function Up(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45008"),
        c(n, "x1", "0.555613"),
        c(n, "y1", "10.2175"),
        c(n, "x2", "7.78525"),
        c(n, "y2", "-1.53971"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function t4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Up(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M8.61427 4.23359C9.23011 3.16693 10.7697 3.16693 11.3856 4.23359L17.1044 14.1389C17.7202 15.2055 16.9504 16.5389 15.7187 16.5389H4.2811C3.04942 16.5389 2.27962 15.2055 2.89546 14.1389L8.61427 4.23359ZM10.3463 4.83359C10.1924 4.56693 9.80746 4.56693 9.6535 4.83359L3.93469 14.7389C3.78073 15.0055 3.97318 15.3389 4.2811 15.3389H15.7187C16.0266 15.3389 16.2191 15.0055 16.0651 14.7389L10.3463 4.83359ZM9.54093 12.0219V7.28359H10.5409V12.0219H9.54093ZM9.54093 12.8656V13.9906H10.5409V12.8656H9.54093Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45008)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45008)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Up(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function n4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var $r = class extends H {
    constructor(e) {
      super(),
        j(this, e, n4, t4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  jp = $r;
N();
function o4(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M2.13555 12.8H5.66214L5.66211 12.7854H6.86211H8.88445H10.9068H12.1068L12.1068 12.8H15.7277V10.9647C14.8969 10.6236 14.3926 9.95939 14.1111 9.27371C13.8273 8.58237 13.7394 7.80883 13.7394 7.10858C13.7394 5.6456 13.5354 4.14884 12.8598 3.04797C12.2483 2.05165 11.1572 1.22344 8.93412 1.22344C6.70833 1.22344 5.62665 2.04698 5.02312 3.03564C4.35401 4.13172 4.1552 5.62705 4.1552 7.10858C4.1552 7.69776 4.14619 8.511 3.89735 9.23486C3.63377 10.0016 3.08977 10.6969 2.13555 11.0129V12.8ZM1.93555 14H5.89978C6.0603 14.3945 6.29894 14.757 6.60591 15.064C7.21022 15.6683 8.02983 16.0078 8.88445 16.0078C9.73907 16.0078 10.5587 15.6683 11.163 15.064C11.47 14.757 11.7086 14.3945 11.8691 14H15.9277C16.48 14 16.9277 13.5523 16.9277 13V10.691C16.9277 10.3044 16.603 10.0106 16.2403 9.87679C15.2572 9.51399 14.9394 8.33887 14.9394 7.10858C14.9394 4.05328 14.1229 0.0234375 8.93412 0.0234375C3.74537 0.0234375 2.9552 4.02694 2.9552 7.10858C2.9552 8.32552 2.88312 9.58719 1.63009 9.91138C1.25582 10.0082 0.935547 10.3044 0.935547 10.691V13C0.935547 13.5523 1.38326 14 1.93555 14ZM7.45444 14.2155C7.38672 14.1477 7.3243 14.0757 7.26745 14H10.5014C10.4446 14.0757 10.3822 14.1477 10.3145 14.2155C9.9352 14.5947 9.42081 14.8078 8.88445 14.8078C8.34809 14.8078 7.8337 14.5947 7.45444 14.2155ZM11.5484 4.72674C11.7827 4.96105 11.7827 5.34095 11.5484 5.57527L9.84232 7.28133L11.5566 8.99561C11.7909 9.22992 11.7909 9.60982 11.5566 9.84413C11.3223 10.0784 10.9424 10.0784 10.7081 9.84413L8.99379 8.12985L7.29926 9.82438C7.06495 10.0587 6.68505 10.0587 6.45074 9.82438C6.21642 9.59006 6.21642 9.21017 6.45074 8.97585L8.14526 7.28133L6.44292 5.57899C6.20861 5.34467 6.20861 4.96477 6.44292 4.73046C6.67724 4.49615 7.05714 4.49615 7.29145 4.73046L8.99379 6.4328L10.6998 4.72674C10.9342 4.49242 11.3141 4.49242 11.5484 4.72674Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 17 17"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function l4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var yr = class extends H {
    constructor(e) {
      super(), j(this, e, l4, o4, U, { width: 0, height: 1, className: 2 });
    }
  },
  Hn = yr;
N();
function Hp(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45047"),
        c(n, "x1", "0.0947586"),
        c(n, "y1", "6.23524"),
        c(n, "x2", "3.85515"),
        c(n, "y2", "-2.54189"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function r4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Hp(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(
          n,
          "d",
          "M7.78677 2.08646C7.32747 1.29093 6.61849 0.669184 5.76984 0.31765C4.92116 -0.0338917 3.9802 -0.0955604 3.09289 0.142192C2.20559 0.379945 1.42153 0.903835 0.862323 1.63261C0.303109 2.36139 0 3.25433 0 4.17293C0 5.09153 0.303109 5.98446 0.862323 6.71327C1.42153 7.442 2.20559 7.96591 3.09289 8.2037C3.9802 8.44141 4.92116 8.37973 5.76984 8.02823C6.61849 7.67666 7.32747 7.05496 7.78677 6.25939H8.58144L9.97241 5.39003L11.3634 6.25939L12.7544 5.39003L14.1453 6.25939L16 5.10022V2.08646H7.78677ZM14.9915 4.54154L14.1453 5.07011L13.2888 4.53458L12.7544 4.20075L12.2199 4.53458L11.3634 5.07011L10.5069 4.53458L9.97241 4.20075L9.43793 4.53458L8.29225 5.25093H7.20555L6.91415 5.75391C6.56605 6.35745 6.02853 6.82927 5.38492 7.09613C4.74131 7.36292 4.02763 7.40994 3.3546 7.22974C2.68157 7.0496 2.08681 6.65234 1.6626 6.09964C1.23839 5.54693 1.00846 4.86967 1.00846 4.17293C1.00846 3.47619 1.23839 2.79892 1.6626 2.24624C2.08681 1.69353 2.68157 1.29627 3.3546 1.1161C4.02763 0.935925 4.74131 0.982905 5.38492 1.24976C6.02853 1.5166 6.56605 1.9884 6.91415 2.59194L7.20555 3.09492H14.9915V4.54154ZM2.78574 3.40789C2.63443 3.40789 2.48652 3.45275 2.36071 3.53683C2.2349 3.62092 2.13685 3.7404 2.07894 3.8802C2.02104 4.01992 2.00589 4.17376 2.03541 4.32218C2.06493 4.4706 2.13779 4.60691 2.24478 4.71388C2.35177 4.82091 2.48809 4.89373 2.63649 4.92329C2.78489 4.95278 2.93872 4.93762 3.07851 4.87975C3.2183 4.82182 3.33779 4.72375 3.42185 4.59794C3.50591 4.47213 3.55078 4.32427 3.55078 4.17293C3.55078 3.97005 3.47018 3.77546 3.32671 3.63198C3.18324 3.4885 2.98865 3.40789 2.78574 3.40789Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45047)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 9"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45047)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Hp(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function i4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var Cr = class extends H {
    constructor(e) {
      super(),
        j(this, e, i4, r4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  Vp = Cr;
N();
function Op(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45008"),
        c(n, "x1", "0.555613"),
        c(n, "y1", "10.2175"),
        c(n, "x2", "7.78525"),
        c(n, "y2", "-1.53971"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function s4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Op(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(
          n,
          "d",
          "M9.78677 8.08646C9.32747 7.29093 8.61849 6.66918 7.76984 6.31765C6.92116 5.96611 5.9802 5.90444 5.09289 6.14219C4.20559 6.37994 3.42153 6.90383 2.86232 7.63261C2.30311 8.36139 2 9.25433 2 10.1729C2 11.0915 2.30311 11.9845 2.86232 12.7133C3.42153 13.442 4.20559 13.9659 5.09289 14.2037C5.9802 14.4414 6.92116 14.3797 7.76984 14.0282C8.61849 13.6767 9.32747 13.055 9.78677 12.2594H10.5814L11.9724 11.39L13.3634 12.2594L14.7544 11.39L16.1453 12.2594L18 11.1002V8.08646H9.78677ZM16.9915 10.5415L16.1453 11.0701L15.2888 10.5346L14.7544 10.2007L14.2199 10.5346L13.3634 11.0701L12.5069 10.5346L11.9724 10.2007L11.4379 10.5346L10.2923 11.2509H9.20555L8.91415 11.7539C8.56605 12.3575 8.02853 12.8293 7.38492 13.0961C6.74131 13.3629 6.02763 13.4099 5.3546 13.2297C4.68157 13.0496 4.08681 12.6523 3.6626 12.0996C3.23839 11.5469 3.00846 10.8697 3.00846 10.1729C3.00846 9.47619 3.23839 8.79892 3.6626 8.24624C4.08681 7.69353 4.68157 7.29627 5.3546 7.1161C6.02763 6.93592 6.74131 6.9829 7.38492 7.24976C8.02853 7.5166 8.56605 7.9884 8.91415 8.59194L9.20555 9.09492H16.9915V10.5415ZM4.78574 9.40789C4.63443 9.40789 4.48652 9.45275 4.36071 9.53683C4.2349 9.62092 4.13685 9.7404 4.07894 9.8802C4.02104 10.0199 4.00589 10.1738 4.03541 10.3222C4.06493 10.4706 4.13779 10.6069 4.24478 10.7139C4.35177 10.8209 4.48809 10.8937 4.63649 10.9233C4.78489 10.9528 4.93872 10.9376 5.07851 10.8798C5.2183 10.8218 5.33779 10.7238 5.42185 10.5979C5.50591 10.4721 5.55078 10.3243 5.55078 10.1729C5.55078 9.97005 5.47018 9.77546 5.32671 9.63198C5.18324 9.4885 4.98865 9.40789 4.78574 9.40789Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45008)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45008)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Op(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function a4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var xr = class extends H {
    constructor(e) {
      super(),
        j(this, e, a4, s4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  Rp = xr;
N();
function Wp(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45008"),
        c(n, "x1", "0.555613"),
        c(n, "y1", "10.2175"),
        c(n, "x2", "7.78525"),
        c(n, "y2", "-1.53971"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function c4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Wp(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M6.06289 3.39531C4.54324 3.39531 3.31133 4.62723 3.31133 6.14687C3.31133 7.66652 4.54324 8.89844 6.06289 8.89844C7.58254 8.89844 8.81445 7.66652 8.81445 6.14687C8.81445 4.62723 7.58254 3.39531 6.06289 3.39531ZM2.11133 6.14687C2.11133 3.96449 3.8805 2.19531 6.06289 2.19531C8.24528 2.19531 10.0145 3.96449 10.0145 6.14687C10.0145 8.19892 8.4503 9.88563 6.44922 10.0798V13.9648C6.44922 14.7933 7.12079 15.4648 7.94922 15.4648H9.02272V16.4648H7.94922C6.56851 16.4648 5.44922 15.3456 5.44922 13.9648V10.0511C3.55826 9.75624 2.11133 8.12053 2.11133 6.14687ZM7.93784 5.55367L6.11723 7.37429L5.76367 7.72785L5.41012 7.37429L4.47652 6.4407L5.18363 5.73359L5.76367 6.31363L7.23074 4.84657L7.93784 5.55367ZM14.7305 13.9922L15.7774 12.9453L15.0703 12.2382L14.0234 13.2851L12.9766 12.2382L12.2695 12.9453L13.3163 13.9922L12.2695 15.039L12.9766 15.7461L14.0234 14.6993L15.0703 15.7461L15.7774 15.039L14.7305 13.9922ZM13.9702 11.1735C12.4439 11.1735 11.2067 12.4107 11.2067 13.937C11.2067 15.4633 12.4439 16.7006 13.9702 16.7006C15.4965 16.7006 16.7338 15.4633 16.7338 13.937C16.7338 12.4107 15.4965 11.1735 13.9702 11.1735ZM14.4789 10.0058V5.88281C14.4789 4.5021 13.3596 3.38281 11.9789 3.38281L10.9054 3.38281V4.38281H11.9789C12.8073 4.38281 13.4789 5.05439 13.4789 5.88281V10.0036C11.5217 10.2456 10.0067 11.9144 10.0067 13.937C10.0067 16.126 11.7812 17.9006 13.9702 17.9006C16.1592 17.9006 17.9338 16.126 17.9338 13.937C17.9338 11.9203 16.4277 10.2554 14.4789 10.0058Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45008)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45008)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Wp(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function u4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var Sr = class extends H {
    constructor(e) {
      super(),
        j(this, e, u4, c4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  Gp = Sr;
N();
function Fp(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45025"),
        c(n, "x1", "0.200101"),
        c(n, "y1", "10.4595"),
        c(n, "x2", "8.74705"),
        c(n, "y2", "0.0535566"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function p4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Fp(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(
          n,
          "d",
          "M5.57247 6.34217L6.01599 5.89863C6.82713 5.08746 7.86059 4.53504 8.98567 4.31124C10.1108 4.08744 11.2769 4.20231 12.3367 4.64131C13.3965 5.08032 14.3024 5.82375 14.9397 6.77758C15.4655 7.56456 15.7891 8.46561 15.8862 9.40107C15.9204 9.73066 16.1858 10 16.5172 10C16.8485 10 17.1198 9.73086 17.0915 9.4007C16.9906 8.22761 16.5951 7.09536 15.9373 6.111C15.1682 4.95986 14.0749 4.06266 12.7959 3.53285C11.5169 3.00304 10.1094 2.86441 8.75167 3.1345C7.39381 3.40458 6.14656 4.07125 5.16759 5.05019L4.72399 5.49373L3.11719 4V8H7.11719L5.57247 6.34217ZM14.6365 13.6321C14.5057 13.7959 14.3663 13.9526 14.2187 14.1014C13.4076 14.9127 12.3741 15.4652 11.2489 15.6891C10.1238 15.9129 8.95759 15.7981 7.89769 15.359C6.83782 14.9201 5.93193 14.1766 5.2946 13.2226C4.76877 12.4356 4.44523 11.5345 4.34816 10.599C4.31396 10.2694 4.04855 10 3.71719 10C3.38582 10 3.11453 10.2691 3.14291 10.5993C3.24374 11.7724 3.63926 12.9047 4.297 13.889C5.06617 15.0401 6.1594 15.9374 7.43844 16.4672C8.71751 16.9969 10.1249 17.1356 11.4827 16.8655C12.8405 16.5954 14.0878 15.9287 15.0668 14.9498C15.2162 14.8004 15.3509 14.6408 15.4847 14.4806L17.1172 16V12H13.1172L14.6365 13.6321Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45025)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45025)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Fp(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function f4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var Ar = class extends H {
    constructor(e) {
      super(),
        j(this, e, f4, p4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  Zp = Ar;
N();
function Kp(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45008"),
        c(n, "x1", "0.555613"),
        c(n, "y1", "10.2175"),
        c(n, "x2", "7.78525"),
        c(n, "y2", "-1.53971"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function d4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Kp(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M9.18791 4.11016C6.23361 4.11016 3.83867 6.50509 3.83867 9.45939C3.83867 12.4137 6.23361 14.8086 9.18791 14.8086C10.7219 14.8086 12.1043 14.1637 13.0805 13.1285C13.2808 12.916 13.5995 12.8821 13.8373 13.0326C13.9129 13.0618 13.9837 13.107 14.0447 13.1679L16.8261 15.9494C17.0604 16.1837 17.0604 16.5636 16.8261 16.7979C16.5918 17.0322 16.2119 17.0322 15.9776 16.7979L13.5364 14.3567C12.3803 15.3839 10.8567 16.0086 9.18791 16.0086C5.57086 16.0086 2.63867 13.0764 2.63867 9.45939C2.63867 5.84235 5.57086 2.91016 9.18791 2.91016C12.805 2.91016 15.7371 5.84235 15.7371 9.45939C15.7371 9.79076 15.4685 10.0594 15.1371 10.0594C14.8058 10.0594 14.5371 9.79076 14.5371 9.45939C14.5371 6.50509 12.1422 4.11016 9.18791 4.11016ZM9.68789 10.9906V9.96719H10.7152V8.96719H9.68789V7.93594H8.68789V8.96719H7.66055V9.96719H8.68789V10.9906H9.68789ZM6.34844 9.46133C6.34844 7.89314 7.6197 6.62187 9.18789 6.62187C10.7561 6.62187 12.0273 7.89314 12.0273 9.46133C12.0273 11.0295 10.7561 12.3008 9.18789 12.3008C7.6197 12.3008 6.34844 11.0295 6.34844 9.46133ZM9.18789 5.42188C6.95696 5.42188 5.14844 7.2304 5.14844 9.46133C5.14844 11.6923 6.95696 13.5008 9.18789 13.5008C11.4188 13.5008 13.2273 11.6923 13.2273 9.46133C13.2273 7.2304 11.4188 5.42188 9.18789 5.42188Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45008)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45008)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Kp(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function m4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var Er = class extends H {
    constructor(e) {
      super(),
        j(this, e, m4, d4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  Qp = Er;
N();
function Yp(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45008"),
        c(n, "x1", "0.555613"),
        c(n, "y1", "10.2175"),
        c(n, "x2", "7.78525"),
        c(n, "y2", "-1.53971"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function _4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Yp(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M3.6293 1.84375C2.74564 1.84375 2.0293 2.56009 2.0293 3.44375V12.6664C2.0293 13.5501 2.74564 14.2664 3.6293 14.2664H9.64062V15.9219H4.92187V16.9219H15.0352V15.9219H10.6406L10.6406 14.2664H16.3312C17.2149 14.2664 17.9312 13.5501 17.9312 12.6664V3.44375C17.9312 2.56009 17.2149 1.84375 16.3312 1.84375H3.6293ZM3.2293 3.44375C3.2293 3.22284 3.40838 3.04375 3.6293 3.04375H16.3312C16.5521 3.04375 16.7312 3.22284 16.7312 3.44375V12.6664C16.7312 12.8873 16.5521 13.0664 16.3312 13.0664H3.6293C3.40838 13.0664 3.2293 12.8873 3.2293 12.6664V3.44375ZM10.5039 5.17379L13.0293 5.71342V6.82321H10.5039V5.17379ZM10.5039 7.82321H13.0293V8.13012C13.0293 8.85134 12.641 9.5167 12.0131 9.87145L10.5039 10.724V7.82321ZM9.50391 5.1788V6.82321H7.00195V5.71342L9.50391 5.1788ZM9.50391 7.82321H7.00195V8.13012C7.00195 8.85134 7.39026 9.5167 8.0182 9.87145L9.50391 10.7108V7.82321ZM12.5049 10.7421L10.0156 12.1484L7.52632 10.7421C6.58441 10.21 6.00195 9.21195 6.00195 8.13012V4.90453L10.0156 4.04688L14.0293 4.90453V8.13012C14.0293 9.21195 13.4468 10.21 12.5049 10.7421Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45008)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45008)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Yp(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function g4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var Ir = class extends H {
    constructor(e) {
      super(),
        j(this, e, g4, _4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  Jp = Ir;
N();
function Xp(o) {
  let e, n, t, l;
  return {
    c() {
      (e = F("defs")),
        (n = F("linearGradient")),
        (t = F("stop")),
        (l = F("stop")),
        c(t, "stop-color", "#FF3D3D"),
        c(l, "offset", "1"),
        c(l, "stop-color", "#5956FF"),
        c(n, "id", "paint0_linear_1034_45008"),
        c(n, "x1", "0.555613"),
        c(n, "y1", "10.2175"),
        c(n, "x2", "7.78525"),
        c(n, "y2", "-1.53971"),
        c(n, "gradientUnits", "userSpaceOnUse");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(n, t), f(n, l);
    },
    d(r) {
      r && $(e);
    },
  };
}
function h4(o) {
  let e,
    n,
    t,
    l,
    r = o[3] && Xp(o);
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        r && r.c(),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M9.58366 4.85625C6.66913 4.85625 4.30645 7.21894 4.30645 10.1335C4.30645 12.2642 5.56927 14.1 7.38731 14.9333C7.44911 14.9492 7.50846 14.9749 7.56282 15.0099C8.18525 15.2681 8.86781 15.4107 9.58366 15.4107C12.4982 15.4107 14.8609 13.048 14.8609 10.1335C14.8609 9.80209 15.1295 9.53346 15.4609 9.53346C15.7922 9.53346 16.0609 9.80209 16.0609 10.1335C16.0609 13.7107 13.1609 16.6107 9.58366 16.6107C9.43763 16.6107 9.29273 16.6058 9.14912 16.5963C9.9039 17.0887 10.8051 17.3745 11.7732 17.3745C14.4295 17.3745 16.5829 15.2211 16.5829 12.5648C16.5829 12.2335 16.8515 11.9648 17.1829 11.9648C17.5142 11.9648 17.7829 12.2335 17.7829 12.5648C17.7829 15.8839 15.0923 18.5745 11.7732 18.5745C9.88135 18.5745 8.19337 17.6995 7.09275 16.3346C7.00655 16.2277 6.92393 16.1177 6.84508 16.005C4.63663 14.9731 3.10645 12.732 3.10645 10.1335C3.10645 6.5562 6.00639 3.65625 9.58366 3.65625C11.8234 3.65625 13.7973 4.79357 14.9596 6.51942C15.1447 6.79427 15.0719 7.16713 14.7971 7.35224C14.5222 7.53734 14.1494 7.46459 13.9643 7.18973C13.0155 5.78089 11.4074 4.85625 9.58366 4.85625ZM10.1038 7.79531C10.1038 7.46394 9.83518 7.19531 9.50381 7.19531C9.17244 7.19531 8.90381 7.46394 8.90381 7.79531V9.77002H6.9291C6.59773 9.77002 6.3291 10.0387 6.3291 10.37C6.3291 10.7014 6.59773 10.97 6.9291 10.97H8.90381V12.9452C8.90381 13.2766 9.17244 13.5452 9.50381 13.5452C9.83518 13.5452 10.1038 13.2766 10.1038 12.9452V10.97L12.079 10.97C12.4103 10.97 12.679 10.7014 12.679 10.37C12.679 10.0387 12.4103 9.77002 12.079 9.77002H10.1038V7.79531Z"
        ),
        c(
          n,
          "fill",
          (t = o[3] ? "url(#paint0_linear_1034_45008)" : "currentColor")
        ),
        c(e, "class", (l = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 20"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      w(i, e, s), f(e, n), r && r.m(e, null);
    },
    p(i, [s]) {
      s & 8 &&
        t !== (t = i[3] ? "url(#paint0_linear_1034_45008)" : "currentColor") &&
        c(n, "fill", t),
        i[3]
          ? r || ((r = Xp(i)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        s & 4 && l !== (l = `icon ${i[2]}`) && c(e, "class", l),
        s & 1 && c(e, "width", i[0]),
        s & 2 && c(e, "height", i[1]);
    },
    i: L,
    o: L,
    d(i) {
      i && $(e), r && r.d();
    },
  };
}
function v4(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e,
    { useGradient: i = !1 } = e;
  return (
    (o.$$set = (s) => {
      "width" in s && n(0, (t = s.width)),
        "height" in s && n(1, (l = s.height)),
        "className" in s && n(2, (r = s.className)),
        "useGradient" in s && n(3, (i = s.useGradient));
    }),
    [t, l, r, i]
  );
}
var Tr = class extends H {
    constructor(e) {
      super(),
        j(this, e, v4, h4, U, {
          width: 0,
          height: 1,
          className: 2,
          useGradient: 3,
        });
    }
  },
  ef = Tr;
var nn = {
    ...Bs,
    ["password-sharing"]: {
      text: A("billing_features__password_sharing"),
      icon: Vp,
    },
    ["premium-customer-support"]: {
      text: A("billing_features__premium_support"),
      icon: pn,
    },
  },
  Tt = {
    ...Ns,
    ["workspaces"]: {
      text: A("billing_features__workspaces_unlimited"),
      icon: qt,
    },
    ["premium-customer-support"]: {
      text: A("billing_features__premium_support"),
      icon: pn,
    },
  },
  tf = {
    ["vpn"]: { text: A("billing_features_vpn"), icon: Jp },
    ["privacy-management"]: {
      text: A("billing_features__privacy_management"),
      icon: Rp,
    },
    ["rules"]: { text: A("billing_features__rules"), icon: Gp },
    ["time-tracking"]: { text: A("billing_features__time_tracking"), icon: Qp },
    ["alerts"]: { text: A("billing_features__alerts"), icon: jp },
  };
var nf = {
    ["pinned-apps"]: { text: A("billing_features__pinned_apps"), icon: en },
    ["apps-per-workspace"]: {
      text: A("billing_features__pinned_apps"),
      icon: co,
    },
    ["accounts-per-app"]: {
      text: A("billing_features__accounts_per_app"),
      icon: Zt,
    },
    ["workspaces"]: { text: A("billing_features__workspaces"), icon: qt },
    ["global-search"]: { text: A("billing_features__global_search"), icon: It },
    ["tab-suspender"]: { text: A("billing_features__tab_suspender"), icon: tn },
    ["focus-mode"]: { text: A("billing_features__focus_mode"), icon: Hn },
    ["sync"]: { text: A("billing_features__sync"), icon: Zp },
  },
  Vn = {
    ["shared-apps"]: { text: A("billing_features__shared_apps"), icon: Ms },
    ["pre-installed-apps"]: {
      text: A("billing_features__pre_installed_apps"),
      icon: co,
    },
    ["shared-tasks"]: { text: A("billing_features__team_tasks"), icon: zs },
    ["shared-collections"]: {
      text: A("billing_features__team_collections"),
      icon: Ps,
    },
    ["workspaces"]: { text: A("billing_features__workspaces"), icon: ef },
  };
function b4(o) {
  Z(
    o,
    "svelte-1tafwic",
    ".container.svelte-1tafwic{display:flex;flex-direction:column;padding:40px;height:100%;justify-content:center;row-gap:40px}.close-button.svelte-1tafwic{position:absolute;top:0;right:0;padding:6px}.header.svelte-1tafwic{font-size:30px;font-weight:700;line-height:36px;text-align:center;color:var(--text-primary-color)}.price-row-container.svelte-1tafwic{display:flex;flex-direction:row;justify-content:center;column-gap:30px}.price-block.svelte-1tafwic{display:flex;flex-direction:column;row-gap:6px}.price-description.svelte-1tafwic{color:var(--b2b-upgrade-col-description);font-size:12px;font-weight:400;letter-spacing:-0.24px}.trial-block.svelte-1tafwic{border-radius:5px;background:rgba(26 140 255 / 0.12);color:var(--text-primary-color);display:flex;justify-content:center;align-items:center;padding:8px 0;margin-top:16px;margin-left:-5px;margin-right:-5px}.link-button.svelte-1tafwic{color:#1977f3;font-size:14px}"
  );
}
function k4(o) {
  let e;
  return {
    c() {
      e = V("$0");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && $(e);
    },
  };
}
function w4(o) {
  let e, n;
  return (
    (e = new Ct({ props: { features: Vn, limits: o[4], mode: "secondary" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16 && (r.limits = t[4]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function $4(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        mod: "transparent",
        strong: !0,
        $$slots: { default: [C4] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1024 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function y4(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        mod: "transparent",
        strong: !0,
        disabled: !0,
        $$slots: { default: [x4] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1024 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function C4(o) {
  let e;
  return {
    c() {
      (e = v("span")),
        (e.textContent = `${A("overlay_billing_team_upgrade__downgrade")}`),
        c(e, "class", "link-button svelte-1tafwic");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function x4(o) {
  let e = A("overlay_billing_team_upgrade__current_plan") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function S4(o) {
  let e,
    n,
    t,
    l,
    r = [y4, $4],
    i = [];
  function s(a, u) {
    return a[0] === "free" ? 0 : a[1] ? -1 : 1;
  }
  return (
    ~(e = s(o, -1)) && (n = i[e] = r[e](o)),
    {
      c() {
        n && n.c(), (t = fe());
      },
      m(a, u) {
        ~e && i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, u) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? ~e && i[e].p(a, u)
            : (n &&
                (Q(),
                h(i[p], 1, 1, () => {
                  i[p] = null;
                }),
                Y()),
              ~e
                ? ((n = i[e]),
                  n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
                  _(n, 1),
                  n.m(t.parentNode, t))
                : (n = null));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        ~e && i[e].d(a), a && $(t);
      },
    }
  );
}
function A4(o) {
  let e,
    n,
    t,
    l = o[2].moreThanBreakpointPrice + "",
    r,
    i,
    s,
    a = A("overlay_billing_team_upgrade__users") + "",
    u,
    p,
    d = o[2].usersBreakpoint + "",
    m,
    g,
    b,
    k,
    E,
    I = o[2].lessThanBreakpointPrice + "",
    T,
    P,
    M,
    B = A("overlay_billing_team_upgrade__users") + "",
    O,
    z,
    G = o[2].usersBreakpoint + "",
    W;
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = V("$")),
        (r = V(l)),
        (i = S()),
        (s = v("div")),
        (u = V(a)),
        (p = V(" > ")),
        (m = V(d)),
        (g = S()),
        (b = v("div")),
        (k = v("div")),
        (E = V("$")),
        (T = V(I)),
        (P = S()),
        (M = v("div")),
        (O = V(B)),
        (z = V(" < ")),
        (W = V(G)),
        c(n, "class", "price"),
        c(s, "class", "price-description svelte-1tafwic"),
        c(e, "class", "price-block svelte-1tafwic"),
        c(k, "class", "price"),
        c(M, "class", "price-description svelte-1tafwic"),
        c(b, "class", "price-block svelte-1tafwic");
    },
    m(D, R) {
      w(D, e, R),
        f(e, n),
        f(n, t),
        f(n, r),
        f(e, i),
        f(e, s),
        f(s, u),
        f(s, p),
        f(s, m),
        w(D, g, R),
        w(D, b, R),
        f(b, k),
        f(k, E),
        f(k, T),
        f(b, P),
        f(b, M),
        f(M, O),
        f(M, z),
        f(M, W);
    },
    p(D, R) {
      R & 4 && l !== (l = D[2].moreThanBreakpointPrice + "") && ee(r, l),
        R & 4 && d !== (d = D[2].usersBreakpoint + "") && ee(m, d),
        R & 4 && I !== (I = D[2].lessThanBreakpointPrice + "") && ee(T, I),
        R & 4 && G !== (G = D[2].usersBreakpoint + "") && ee(W, G);
    },
    d(D) {
      D && $(e), D && $(g), D && $(b);
    },
  };
}
function E4(o) {
  let e = A("overlay_billing_team_upgrade__all_free_features") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function of(o) {
  let e,
    n =
      A("overlay_billing_team_upgrade__trial_ends_in", [o[1].toString()]) + "";
  return {
    c() {
      (e = v("div")), c(e, "class", "trial-block svelte-1tafwic");
    },
    m(t, l) {
      w(t, e, l), (e.innerHTML = n);
    },
    p(t, l) {
      l & 2 &&
        n !==
          (n =
            A("overlay_billing_team_upgrade__trial_ends_in", [
              t[1].toString(),
            ]) + "") &&
        (e.innerHTML = n);
    },
    d(t) {
      t && $(e);
    },
  };
}
function I4(o) {
  let e, n, t, l;
  e = new Ct({ props: { features: Tt, mode: "gradient" } });
  let r = o[1] && of(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      i[1]
        ? r
          ? r.p(i, s)
          : ((r = of(i)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    i(i) {
      l || (_(e.$$.fragment, i), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function T4(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        mod: "primary",
        strong: !0,
        $$slots: { default: [P4] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1024 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function M4(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        mod: "transparent",
        strong: !0,
        disabled: !0,
        $$slots: { default: [z4] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1024 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function P4(o) {
  let e = A("overlay_billing_team_upgrade__upgrade") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function z4(o) {
  let e = A("overlay_billing_team_upgrade__current_plan") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function B4(o) {
  let e,
    n,
    t,
    l,
    r = [M4, T4],
    i = [];
  function s(a, u) {
    return a[0] === "pro" && !a[1] ? 0 : a[0] === "free" || a[1] ? 1 : -1;
  }
  return (
    ~(e = s(o, -1)) && (n = i[e] = r[e](o)),
    {
      c() {
        n && n.c(), (t = fe());
      },
      m(a, u) {
        ~e && i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, u) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? ~e && i[e].p(a, u)
            : (n &&
                (Q(),
                h(i[p], 1, 1, () => {
                  i[p] = null;
                }),
                Y()),
              ~e
                ? ((n = i[e]),
                  n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
                  _(n, 1),
                  n.m(t.parentNode, t))
                : (n = null));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        ~e && i[e].d(a), a && $(t);
      },
    }
  );
}
function N4(o) {
  let e = A("overlay_billing_team_upgrade__all_pro_features") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function q4(o) {
  let e, n;
  return (
    (e = new Ct({ props: { features: tf, mode: "primary" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function D4(o) {
  let e;
  return {
    c() {
      (e = v("span")),
        (e.textContent = `${A("overlay_billing_team_upgrade__contact_us")}`),
        c(e, "class", "link-button svelte-1tafwic");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function L4(o) {
  let e, n;
  return (
    (e = new pe({
      props: {
        mod: "transparent",
        strong: !0,
        openInNewTab: !0,
        href: o[3],
        $$slots: { default: [D4] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 8 && (r.href = t[3]),
          l & 1024 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U4(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k;
  return (
    (t = new qe({ props: { width: "12", height: "12" } })),
    (a = new jn({
      props: {
        isActive: o[0] === "free",
        mode: "secondary",
        header: "Team Free",
        description: A("overlay_billing_team_upgrade__free_description"),
        $$slots: { action: [S4], features: [w4], price: [k4] },
        $$scope: { ctx: o },
      },
    })),
    (p = new jn({
      props: {
        isActive: o[0] === "pro",
        mode: "gradient",
        header: "Team Pro",
        description: A("overlay_billing_team_upgrade__pro_description"),
        $$slots: {
          action: [B4],
          features: [I4],
          "features-label": [E4],
          price: [A4],
        },
        $$scope: { ctx: o },
      },
    })),
    (m = new jn({
      props: {
        isActive: o[0] === "enterprise",
        mode: "primary",
        header: "Enterprise",
        description: A("overlay_billing_team_upgrade__enterprise_description"),
        $$slots: { action: [L4], features: [q4], "features-label": [N4] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("div")),
          (r.textContent = `${A("overlay_billing_team_upgrade__header")}`),
          (i = S()),
          (s = v("div")),
          y(a.$$.fragment),
          (u = S()),
          y(p.$$.fragment),
          (d = S()),
          y(m.$$.fragment),
          c(n, "class", "close-button svelte-1tafwic"),
          c(r, "class", "header svelte-1tafwic"),
          c(s, "class", "price-row-container svelte-1tafwic"),
          c(e, "class", "container svelte-1tafwic");
      },
      m(E, I) {
        w(E, e, I),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          f(e, i),
          f(e, s),
          C(a, s, null),
          f(s, u),
          C(p, s, null),
          f(s, d),
          C(m, s, null),
          (g = !0),
          b || ((k = X(n, "click", o[7])), (b = !0));
      },
      p(E, I) {
        let T = {};
        I & 1 && (T.isActive = E[0] === "free"),
          I & 1043 && (T.$$scope = { dirty: I, ctx: E }),
          a.$set(T);
        let P = {};
        I & 1 && (P.isActive = E[0] === "pro"),
          I & 1031 && (P.$$scope = { dirty: I, ctx: E }),
          p.$set(P);
        let M = {};
        I & 1 && (M.isActive = E[0] === "enterprise"),
          I & 1032 && (M.$$scope = { dirty: I, ctx: E }),
          m.$set(M);
      },
      i(E) {
        g ||
          (_(t.$$.fragment, E),
          _(a.$$.fragment, E),
          _(p.$$.fragment, E),
          _(m.$$.fragment, E),
          (g = !0));
      },
      o(E) {
        h(t.$$.fragment, E),
          h(a.$$.fragment, E),
          h(p.$$.fragment, E),
          h(m.$$.fragment, E),
          (g = !1);
      },
      d(E) {
        E && $(e), x(t), x(a), x(p), x(m), (b = !1), k();
      },
    }
  );
}
function j4(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 856,
        height: "auto",
        maxHeight: 800,
        $$slots: { default: [U4] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1055 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function H4(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [j4] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1055 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function V4(o, e, n) {
  let t = oe(),
    { currentPlan: l } = e,
    { trialTimeLeftDays: r } = e,
    { price: i } = e,
    { enterpriseContactUrl: s } = e,
    { freeLimits: a } = e,
    u = () => {
      q.actions.deleteTeamPlanSubscription(), d();
    },
    p = () => {
      q.actions.openTeamUpgradePlanTab(), d();
    },
    d = () => {
      t("close");
    };
  function m(g) {
    ue.call(this, o, g);
  }
  return (
    (o.$$set = (g) => {
      "currentPlan" in g && n(0, (l = g.currentPlan)),
        "trialTimeLeftDays" in g && n(1, (r = g.trialTimeLeftDays)),
        "price" in g && n(2, (i = g.price)),
        "enterpriseContactUrl" in g && n(3, (s = g.enterpriseContactUrl)),
        "freeLimits" in g && n(4, (a = g.freeLimits));
    }),
    [l, r, i, s, a, u, p, d, m]
  );
}
var Mr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          V4,
          H4,
          U,
          {
            currentPlan: 0,
            trialTimeLeftDays: 1,
            price: 2,
            enterpriseContactUrl: 3,
            freeLimits: 4,
          },
          b4
        );
    }
  },
  lf = Mr;
N();
N();
function O4(o) {
  Z(
    o,
    "svelte-15jp6h8",
    ".video-popup.svelte-15jp6h8{max-width:100%;overflow:hidden;position:relative;border-radius:8px}video.svelte-15jp6h8{display:block;object-fit:contain;width:100%;height:100%}.close-button.svelte-15jp6h8{position:absolute;z-index:1;top:12px;right:12px;display:flex;padding:8px}"
  );
}
function rf(o) {
  let e, n, t, l;
  return {
    c() {
      (e = v("video")),
        (n = v("source")),
        (l = v("track")),
        Je(n.src, (t = o[0])) || c(n, "src", t),
        c(l, "kind", "captions"),
        (e.controls = !0),
        (e.autoplay = !0),
        c(e, "data-testid", "video-popup.content"),
        c(e, "class", "svelte-15jp6h8");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, l);
    },
    p(r, i) {
      i & 1 && !Je(n.src, (t = r[0])) && c(n, "src", t);
    },
    d(r) {
      r && $(e);
    },
  };
}
function R4(o) {
  let e,
    n,
    t,
    l,
    r = o[0],
    i,
    s,
    a;
  t = new dt({ props: { width: "12", height: "12" } });
  let u = rf(o);
  return {
    c() {
      (e = v("div")),
        (n = v("button")),
        y(t.$$.fragment),
        (l = S()),
        u.c(),
        c(n, "class", "close-button svelte-15jp6h8"),
        c(n, "data-testid", "video-popup.close-button"),
        c(e, "class", "video-popup svelte-15jp6h8");
    },
    m(p, d) {
      w(p, e, d),
        f(e, n),
        C(t, n, null),
        f(e, l),
        u.m(e, null),
        (i = !0),
        s || ((a = X(n, "click", o[3])), (s = !0));
    },
    p(p, d) {
      d & 1 && U(r, (r = p[0]))
        ? (u.d(1), (u = rf(p)), u.c(), u.m(e, null))
        : u.p(p, d);
    },
    i(p) {
      i || (_(t.$$.fragment, p), (i = !0));
    },
    o(p) {
      h(t.$$.fragment, p), (i = !1);
    },
    d(p) {
      p && $(e), x(t), u.d(p), (s = !1), a();
    },
  };
}
function W4(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: "calc(80vw)",
        maxWidth: 1440,
        maxHeight: "100%",
        className: "video-popup-container",
        dataTestId: "video-popup",
        $$slots: { default: [R4] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 33 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function G4(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [W4] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 33 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function F4(o, e, n) {
  let { source: t } = e,
    { url: l } = e,
    r = oe();
  ye(
    () => (
      q.actions.sendAnalyticsEvent("video-modal.auto-opened", { source: t }),
      () =>
        q.actions.sendAnalyticsEvent("video-modal.auto-closed", { source: t })
    )
  );
  let i = () => r("close");
  function s(a) {
    ue.call(this, o, a);
  }
  return (
    (o.$$set = (a) => {
      "source" in a && n(2, (t = a.source)), "url" in a && n(0, (l = a.url));
    }),
    [l, r, t, i, s]
  );
}
var Pr = class extends H {
    constructor(e) {
      super(), j(this, e, F4, G4, U, { source: 2, url: 0 }, O4);
    }
  },
  sf = Pr;
N();
function Z4(o) {
  Z(
    o,
    "svelte-1q2fk0b",
    ".cpu-monitor-alarm-close.svelte-1q2fk0b{width:20px;height:20px;display:flex;align-items:center;justify-content:center;position:absolute;top:10px;right:10px}.cpu-monitor-alarm.svelte-1q2fk0b{background:var(--popup-bg-color);border-radius:10px;border:1px solid var(--popup-border-color);color:var(--popup-text-color);position:relative;width:100%;padding:20px 30px;font-size:14px;line-height:1.5}.title-block.svelte-1q2fk0b{display:flex;align-items:center}.title.svelte-1q2fk0b{display:flex;align-items:center;font-size:1.3em;margin:0 0 0 10px}.tabs.svelte-1q2fk0b{margin-bottom:2em;padding:0}.tab.svelte-1q2fk0b{display:flex;align-items:center;margin-bottom:1em}.icon.svelte-1q2fk0b{min-width:20px;width:20px;margin-right:10px;padding:2px}.tab-title.svelte-1q2fk0b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"
  );
}
function af(o, e, n) {
  let t = o.slice();
  return (t[6] = e[n]), t;
}
function cf(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [J4] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 513 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function uf(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[6].title + "",
    s,
    a,
    u;
  return (
    (t = new ht({ props: { favIconUrl: o[6].favIconUrl } })),
    {
      c() {
        (e = v("li")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          (s = V(i)),
          (a = S()),
          c(n, "class", "icon svelte-1q2fk0b"),
          c(r, "class", "tab-title svelte-1q2fk0b"),
          c(e, "class", "tab svelte-1q2fk0b");
      },
      m(p, d) {
        w(p, e, d),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          f(r, s),
          f(e, a),
          (u = !0);
      },
      p(p, d) {
        let m = {};
        d & 1 && (m.favIconUrl = p[6].favIconUrl),
          t.$set(m),
          (!u || d & 1) && i !== (i = p[6].title + "") && ee(s, i);
      },
      i(p) {
        u || (_(t.$$.fragment, p), (u = !0));
      },
      o(p) {
        h(t.$$.fragment, p), (u = !1);
      },
      d(p) {
        p && $(e), x(t);
      },
    }
  );
}
function K4(o) {
  let e = A("overlay_cpu_monitor_alarm__suspend_tabs_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Q4(o) {
  let e = A("overlay_cpu_monitor_alarm__ignore_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Y4(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P;
  t = new qs({ props: { width: "22px" } });
  let M = o[0],
    B = [];
  for (let z = 0; z < M.length; z += 1) B[z] = uf(af(o, M, z));
  let O = (z) =>
    h(B[z], 1, 1, () => {
      B[z] = null;
    });
  return (
    (d = new pe({
      props: { $$slots: { default: [K4] }, $$scope: { ctx: o } },
    })),
    d.$on("click", o[2]),
    (g = new pe({
      props: { mod: "light", $$slots: { default: [Q4] }, $$scope: { ctx: o } },
    })),
    g.$on("click", o[3]),
    (E = new dt({ props: { width: "14px" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("h1")),
          (r.textContent = `${A("overlay_cpu_monitor_alarm__title")}`),
          (i = S()),
          (s = v("p")),
          (s.textContent = `${A("overlay_cpu_monitor_alarm__description")}`),
          (a = S()),
          (u = v("ul"));
        for (let z = 0; z < B.length; z += 1) B[z].c();
        (p = S()),
          y(d.$$.fragment),
          (m = S()),
          y(g.$$.fragment),
          (b = S()),
          (k = v("button")),
          y(E.$$.fragment),
          c(r, "class", "title svelte-1q2fk0b"),
          c(n, "class", "title-block svelte-1q2fk0b"),
          c(u, "class", "tabs svelte-1q2fk0b"),
          c(k, "class", "cpu-monitor-alarm-close svelte-1q2fk0b"),
          c(e, "class", "cpu-monitor-alarm svelte-1q2fk0b");
      },
      m(z, G) {
        w(z, e, G),
          f(e, n),
          C(t, n, null),
          f(n, l),
          f(n, r),
          f(e, i),
          f(e, s),
          f(e, a),
          f(e, u);
        for (let W = 0; W < B.length; W += 1) B[W] && B[W].m(u, null);
        f(e, p),
          C(d, e, null),
          f(e, m),
          C(g, e, null),
          f(e, b),
          f(e, k),
          C(E, k, null),
          (I = !0),
          T || ((P = X(k, "click", o[1])), (T = !0));
      },
      p(z, G) {
        if (G & 1) {
          M = z[0];
          let R;
          for (R = 0; R < M.length; R += 1) {
            let K = af(z, M, R);
            B[R]
              ? (B[R].p(K, G), _(B[R], 1))
              : ((B[R] = uf(K)), B[R].c(), _(B[R], 1), B[R].m(u, null));
          }
          for (Q(), R = M.length; R < B.length; R += 1) O(R);
          Y();
        }
        let W = {};
        G & 512 && (W.$$scope = { dirty: G, ctx: z }), d.$set(W);
        let D = {};
        G & 512 && (D.$$scope = { dirty: G, ctx: z }), g.$set(D);
      },
      i(z) {
        if (!I) {
          _(t.$$.fragment, z);
          for (let G = 0; G < M.length; G += 1) _(B[G]);
          _(d.$$.fragment, z),
            _(g.$$.fragment, z),
            _(E.$$.fragment, z),
            (I = !0);
        }
      },
      o(z) {
        h(t.$$.fragment, z), (B = B.filter(Boolean));
        for (let G = 0; G < B.length; G += 1) h(B[G]);
        h(d.$$.fragment, z), h(g.$$.fragment, z), h(E.$$.fragment, z), (I = !1);
      },
      d(z) {
        z && $(e), x(t), Ae(B, z), x(d), x(g), x(E), (T = !1), P();
      },
    }
  );
}
function J4(o) {
  let e, n;
  return (
    (e = new $e({
      props: { $$slots: { default: [Y4] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 513 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function X4(o) {
  let e,
    n,
    t = o[0].length && cf(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, [r]) {
      l[0].length
        ? t
          ? (t.p(l, r), r & 1 && _(t, 1))
          : ((t = cf(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function e5(o, e, n) {
  let t,
    l = null;
  q.queries
    .loadAlarmSettings()
    .then((u) => {
      n(4, (l = u));
    })
    .catch(ft);
  let r = oe(),
    i = () => {
      r("close");
    },
    s = () => {
      i(), q.actions.cpuMonitorDiscardTabs();
    },
    a = () => {
      i(), q.actions.cpuMonitorIgnoreHighLoadTabs();
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(0, (t = l?.tabs || []));
      }
    }),
    [t, i, s, a, l]
  );
}
var zr = class extends H {
    constructor(e) {
      super(), j(this, e, e5, X4, U, {}, Z4);
    }
  },
  pf = zr;
N();
function t5(o) {
  Z(
    o,
    "svelte-osqmcj",
    ".calendar-modal-header.svelte-osqmcj{text-align:center;line-height:30px;font-size:25px;font-weight:700;color:var(--text-primary-color);margin-bottom:30px}.calendar-modal-description.svelte-osqmcj{padding:8px;font-size:14px;line-height:20px}.calendar-modal.svelte-osqmcj{display:flex;flex-direction:column;align-items:center;padding:45px 45px 35px}.add-google-calendar-button.svelte-osqmcj{margin-top:30px}"
  );
}
function n5(o) {
  let e,
    n,
    t,
    l = A("overlay_calendar__description_1") + "",
    r;
  return {
    c() {
      (e = v("div")),
        (n = v("b")),
        (n.textContent = `${A("overlay_calendar__description_title_1")}`),
        (t = S()),
        (r = V(l)),
        c(e, "class", "calendar-modal-description svelte-osqmcj");
    },
    m(i, s) {
      w(i, e, s), f(e, n), f(e, t), f(e, r);
    },
    p: L,
    d(i) {
      i && $(e);
    },
  };
}
function o5(o) {
  let e, n;
  return (
    (e = new Ls({ props: { mod: "dark" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function l5(o) {
  let e, n, t, l, r, i, s, a;
  return (
    (l = new Te({
      props: { $$slots: { default: [n5] }, $$scope: { ctx: o } },
    })),
    (s = new Nt({
      props: {
        alwaysAuth: !0,
        type: "google",
        scope: "CALENDAR",
        $$slots: { default: [o5] },
        $$scope: { ctx: o },
      },
    })),
    s.$on("auth", o[0]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (n.textContent = `${A("overlay_calendar__title")}`),
          (t = S()),
          y(l.$$.fragment),
          (r = S()),
          (i = v("span")),
          y(s.$$.fragment),
          c(n, "class", "calendar-modal-header svelte-osqmcj"),
          c(i, "class", "add-google-calendar-button svelte-osqmcj"),
          c(e, "class", "calendar-modal svelte-osqmcj"),
          c(e, "data-testid", "calendar-popup");
      },
      m(u, p) {
        w(u, e, p),
          f(e, n),
          f(e, t),
          C(l, e, null),
          f(e, r),
          f(e, i),
          C(s, i, null),
          (a = !0);
      },
      p(u, p) {
        let d = {};
        p & 16 && (d.$$scope = { dirty: p, ctx: u }), l.$set(d);
        let m = {};
        p & 16 && (m.$$scope = { dirty: p, ctx: u }), s.$set(m);
      },
      i(u) {
        a || (_(l.$$.fragment, u), _(s.$$.fragment, u), (a = !0));
      },
      o(u) {
        h(l.$$.fragment, u), h(s.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && $(e), x(l), x(s);
      },
    }
  );
}
function r5(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 520,
        maxHeight: "auto",
        $$slots: { default: [l5] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function i5(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [r5] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[3]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 16 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function s5(o, e, n) {
  let { source: t } = e,
    {
      calendarName: l = A(
        "overlay_settings_integrations_tab__calendar_list_default_title_name"
      ),
    } = e,
    r = ({ detail: s }) => {
      q.actions.addCalendar(s, l),
        q.actions.sendAnalyticsEvent(
          "calendars.permission-popup.sign-in-button-clicked",
          void 0
        );
    };
  ye(
    () => (
      q.actions.sendAnalyticsEvent("calendars.permission-popup.auto-opened", {
        source: t,
      }),
      () =>
        q.actions.sendAnalyticsEvent("calendars.permission-popup.auto-closed", {
          source: t,
        })
    )
  );
  function i(s) {
    ue.call(this, o, s);
  }
  return (
    (o.$$set = (s) => {
      "source" in s && n(1, (t = s.source)),
        "calendarName" in s && n(2, (l = s.calendarName));
    }),
    [r, t, l, i]
  );
}
var Br = class extends H {
    constructor(e) {
      super(), j(this, e, s5, i5, U, { source: 1, calendarName: 2 }, t5);
    }
  },
  ff = Br;
N();
N();
N();
function a5(o) {
  Z(
    o,
    "svelte-1kquel9",
    ".input-with-button.svelte-1kquel9{display:flex;border-radius:4px;background:var(--field-background-color);padding:6px;line-height:16px;margin-bottom:8px}.input-with-button.has-error.svelte-1kquel9{outline:1px solid var(--error-color)}input.svelte-1kquel9{appearance:none;background:transparent;border:0;flex:1;margin:2px 4px;font-size:14px;outline:0;color:var(--field-color)}button.svelte-1kquel9{background:rgb(26 140 255 / 0.22);border-radius:3px;padding:2px 8px;font-size:12px;font-weight:bold;color:#1977f3}button.is-hidden.svelte-1kquel9{display:none}.button-icon.svelte-1kquel9{margin-right:4px}"
  );
}
var c5 = (o) => ({}),
  df = (o) => ({ class: "button-icon svelte-1kquel9" });
function u5(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = o[12]["button-icon"],
    d = We(p, o, o[11], df);
  return {
    c() {
      (e = v("div")),
        (n = v("input")),
        (t = S()),
        (l = v("button")),
        d && d.c(),
        (r = V(o[1])),
        c(n, "type", "text"),
        (n.readOnly = o[2]),
        c(n, "placeholder", o[3]),
        c(n, "class", "svelte-1kquel9"),
        c(l, "type", o[4]),
        c(l, "class", (i = at(o[6]) + " svelte-1kquel9")),
        ie(l, "is-hidden", o[5] && !o[0]),
        c(e, "class", "input-with-button svelte-1kquel9"),
        c(e, "data-testid", "input-with-button"),
        ie(e, "has-error", o[7]);
    },
    m(m, g) {
      w(m, e, g),
        f(e, n),
        o[15](n),
        Ne(n, o[0]),
        f(e, t),
        f(e, l),
        d && d.m(l, null),
        f(l, r),
        (s = !0),
        a ||
          ((u = [
            X(n, "input", o[16]),
            X(n, "focus", o[14]),
            X(l, "click", o[13]),
          ]),
          (a = !0));
    },
    p(m, [g]) {
      (!s || g & 4) && (n.readOnly = m[2]),
        (!s || g & 8) && c(n, "placeholder", m[3]),
        g & 1 && n.value !== m[0] && Ne(n, m[0]),
        d &&
          d.p &&
          (!s || g & 2048) &&
          Fe(d, p, m, m[11], s ? Ge(p, m[11], g, c5) : Ze(m[11]), df),
        (!s || g & 2) && ee(r, m[1]),
        (!s || g & 16) && c(l, "type", m[4]),
        (!s || (g & 64 && i !== (i = at(m[6]) + " svelte-1kquel9"))) &&
          c(l, "class", i),
        (!s || g & 97) && ie(l, "is-hidden", m[5] && !m[0]),
        (!s || g & 128) && ie(e, "has-error", m[7]);
    },
    i(m) {
      s || (_(d, m), (s = !0));
    },
    o(m) {
      h(d, m), (s = !1);
    },
    d(m) {
      m && $(e), o[15](null), d && d.d(m), (a = !1), Se(u);
    },
  };
}
function p5(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    { value: r } = e,
    { buttonText: i = "" } = e,
    { readonly: s = !1 } = e,
    { placeholder: a = "" } = e,
    { type: u = "button" } = e,
    { hideOnEmpty: p = !1 } = e,
    { buttonClassName: d = "" } = e,
    { hasError: m = !1 } = e,
    g,
    b = () => {
      g.focus();
    },
    k = () => {
      g.select();
    };
  function E(M) {
    ue.call(this, o, M);
  }
  function I(M) {
    ue.call(this, o, M);
  }
  function T(M) {
    we[M ? "unshift" : "push"](() => {
      (g = M), n(8, g);
    });
  }
  function P() {
    (r = this.value), n(0, r);
  }
  return (
    (o.$$set = (M) => {
      "value" in M && n(0, (r = M.value)),
        "buttonText" in M && n(1, (i = M.buttonText)),
        "readonly" in M && n(2, (s = M.readonly)),
        "placeholder" in M && n(3, (a = M.placeholder)),
        "type" in M && n(4, (u = M.type)),
        "hideOnEmpty" in M && n(5, (p = M.hideOnEmpty)),
        "buttonClassName" in M && n(6, (d = M.buttonClassName)),
        "hasError" in M && n(7, (m = M.hasError)),
        "$$scope" in M && n(11, (l = M.$$scope));
    }),
    [r, i, s, a, u, p, d, m, g, b, k, l, t, E, I, T, P]
  );
}
var Nr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          p5,
          u5,
          U,
          {
            value: 0,
            buttonText: 1,
            readonly: 2,
            placeholder: 3,
            type: 4,
            hideOnEmpty: 5,
            buttonClassName: 6,
            hasError: 7,
            focus: 9,
            select: 10,
          },
          a5
        );
    }
    get focus() {
      return this.$$.ctx[9];
    }
    get select() {
      return this.$$.ctx[10];
    }
  },
  On = Nr;
function f5(o) {
  let e,
    n,
    t = { value: o[0], readonly: !0, buttonText: o[2] };
  return (
    (e = new On({ props: t })),
    o[6](e),
    e.$on("focus", o[3]),
    e.$on("click", o[3]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(l, r) {
        C(e, l, r), (n = !0);
      },
      p(l, [r]) {
        let i = {};
        r & 1 && (i.value = l[0]), r & 4 && (i.buttonText = l[2]), e.$set(i);
      },
      i(l) {
        n || (_(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        h(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        o[6](null), x(e, l);
      },
    }
  );
}
function d5(o, e, n) {
  let t,
    l,
    r,
    { text: i } = e,
    { entity: s } = e,
    a,
    u = null,
    p = () => {
      if (u) {
        clearTimeout(u), (u = null);
        return;
      }
      (u = setTimeout(() => {
        n(2, (r = t));
      }, 1200)),
        a.focus(),
        a.select(),
        window.navigator.clipboard.writeText(i).catch(ft),
        n(2, (r = l));
    };
  function d(m) {
    we[m ? "unshift" : "push"](() => {
      (a = m), n(1, a);
    });
  }
  return (
    (o.$$set = (m) => {
      "text" in m && n(0, (i = m.text)), "entity" in m && n(4, (s = m.entity));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(
          5,
          (t = s
            ? `${A("components_copy_text_field__text")} ${s.toLowerCase()}`
            : A("components_copy_text_field__text"))
        );
      }
      if (o.$$.dirty & 16) {
        e: l = s
          ? `${ts(s)} ${A("components_copy_text_field__copied")}`
          : A("components_copy_text_field__text");
      }
      if (o.$$.dirty & 32) {
        e: n(2, (r = t));
      }
    }),
    [i, a, r, p, s, t, d]
  );
}
var qr = class extends H {
    constructor(e) {
      super(), j(this, e, d5, f5, U, { text: 0, entity: 4 });
    }
  },
  mf = qr;
N();
function m5(o) {
  Z(
    o,
    "svelte-17g6i52",
    ".wrapper.svelte-17g6i52.svelte-17g6i52{display:flex;align-items:center;justify-content:space-between}.wrapper.svelte-17g6i52 .row.svelte-17g6i52{display:flex;align-items:center;overflow:hidden}.email.svelte-17g6i52.svelte-17g6i52{color:var(--text-primary-color);font-size:12px;margin-left:10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.role.svelte-17g6i52.svelte-17g6i52{color:var(--text-secondary-color);text-transform:uppercase}.append.svelte-17g6i52.svelte-17g6i52{display:flex}.menu-button.svelte-17g6i52.svelte-17g6i52{margin-right:10px}"
  );
}
function _f(o) {
  let e, n, t, l;
  function r(s) {
    o[7](s);
  }
  let i = { offset: [8, 0], $$slots: { default: [h5] }, $$scope: { ctx: o } };
  return (
    o[3] !== void 0 && (i.isMenuVisible = o[3]),
    (n = new kn({ props: i })),
    we.push(() => Ye(n, "isMenuVisible", r)),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "menu-button svelte-17g6i52");
      },
      m(s, a) {
        w(s, e, a), C(n, e, null), (l = !0);
      },
      p(s, a) {
        let u = {};
        a & 512 && (u.$$scope = { dirty: a, ctx: s }),
          !t &&
            a & 8 &&
            ((t = !0), (u.isMenuVisible = s[3]), Qe(() => (t = !1))),
          n.$set(u);
      },
      i(s) {
        l || (_(n.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(n.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && $(e), x(n);
      },
    }
  );
}
function _5(o) {
  let e = A("overlay_collections__resend_collection_share") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function g5(o) {
  let e = A("overlay_collections__delete_collection_share") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function h5(o) {
  let e, n, t, l;
  return (
    (e = new ro({
      props: { $$slots: { default: [_5] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[4]),
    (t = new ro({
      props: {
        useErrorColor: !0,
        $$slots: { default: [g5] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", o[5]),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 512 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
        let a = {};
        i & 512 && (a.$$scope = { dirty: i, ctx: r }), t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function v5(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m;
  t = new yt({ props: { src: o[1], name: o[0], colored: !0 } });
  let g = o[2] !== "owner" && _f(o);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        y(t.$$.fragment),
        (l = S()),
        (r = v("div")),
        (i = V(o[0])),
        (s = S()),
        (a = v("div")),
        g && g.c(),
        (u = S()),
        (p = v("div")),
        (d = V(o[2])),
        c(r, "class", "email svelte-17g6i52"),
        c(n, "class", "row svelte-17g6i52"),
        c(p, "class", "role svelte-17g6i52"),
        c(a, "class", "append svelte-17g6i52"),
        c(e, "class", "wrapper svelte-17g6i52");
    },
    m(b, k) {
      w(b, e, k),
        f(e, n),
        C(t, n, null),
        f(n, l),
        f(n, r),
        f(r, i),
        f(e, s),
        f(e, a),
        g && g.m(a, null),
        f(a, u),
        f(a, p),
        f(p, d),
        (m = !0);
    },
    p(b, [k]) {
      let E = {};
      k & 2 && (E.src = b[1]),
        k & 1 && (E.name = b[0]),
        t.$set(E),
        (!m || k & 1) && ee(i, b[0]),
        b[2] !== "owner"
          ? g
            ? (g.p(b, k), k & 4 && _(g, 1))
            : ((g = _f(b)), g.c(), _(g, 1), g.m(a, u))
          : g &&
            (Q(),
            h(g, 1, 1, () => {
              g = null;
            }),
            Y()),
        (!m || k & 4) && ee(d, b[2]);
    },
    i(b) {
      m || (_(t.$$.fragment, b), _(g), (m = !0));
    },
    o(b) {
      h(t.$$.fragment, b), h(g), (m = !1);
    },
    d(b) {
      b && $(e), x(t), g && g.d();
    },
  };
}
function b5(o, e, n) {
  let t = oe(),
    { email: l } = e,
    { avatar: r = "" } = e,
    { role: i } = e,
    { uuid: s } = e,
    a = !1,
    u = () => {
      t("resend", { email: l });
    },
    p = () => {
      t("unshare", { uuid: s });
    };
  function d(m) {
    (a = m), n(3, a);
  }
  return (
    (o.$$set = (m) => {
      "email" in m && n(0, (l = m.email)),
        "avatar" in m && n(1, (r = m.avatar)),
        "role" in m && n(2, (i = m.role)),
        "uuid" in m && n(6, (s = m.uuid));
    }),
    [l, r, i, a, u, p, s, d]
  );
}
var Dr = class extends H {
    constructor(e) {
      super(),
        j(this, e, b5, v5, U, { email: 0, avatar: 1, role: 2, uuid: 6 }, m5);
    }
  },
  gf = Dr;
N();
function k5(o) {
  Z(
    o,
    "svelte-lxgass",
    ".wrapper.svelte-lxgass{display:flex;align-items:center;justify-content:space-between}.row.svelte-lxgass{display:flex;align-items:center}.team-name.svelte-lxgass{font-weight:600;font-size:12px;letter-spacing:-0.02em;color:var(--text-primary-color)}.team-logo.svelte-lxgass{width:32px;height:32px;min-width:32px;min-height:32px;border-radius:8px;margin-right:15px}.team-letter-logo.svelte-lxgass{display:flex;align-items:center;justify-content:center;background-color:#a0a0a0;color:#2e2e2e;font-weight:bold;font-size:14px}"
  );
}
function w5(o) {
  let e,
    n = Rt(o[0].name, 0) + "",
    t;
  return {
    c() {
      (e = v("div")),
        (t = V(n)),
        c(e, "class", "team-logo team-letter-logo svelte-lxgass");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r & 1 && n !== (n = Rt(l[0].name, 0) + "") && ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function $5(o) {
  let e, n;
  return {
    c() {
      (e = v("img")),
        Je(e.src, (n = o[0].logoUrl)) || c(e, "src", n),
        c(e, "alt", ""),
        c(e, "class", "team-logo svelte-lxgass");
    },
    m(t, l) {
      w(t, e, l);
    },
    p(t, l) {
      l & 1 && !Je(e.src, (n = t[0].logoUrl)) && c(e, "src", n);
    },
    d(t) {
      t && $(e);
    },
  };
}
function y5(o) {
  let e,
    n,
    t,
    l,
    r = o[0].name + "",
    i,
    s,
    a,
    u;
  function p(g, b) {
    return g[0].logoUrl ? $5 : w5;
  }
  let d = p(o, -1),
    m = d(o);
  return (
    (a = new Oe({ props: { checked: o[1] } })),
    a.$on("change", o[2]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          m.c(),
          (t = S()),
          (l = v("div")),
          (i = V(r)),
          (s = S()),
          y(a.$$.fragment),
          c(l, "class", "team-name svelte-lxgass"),
          c(n, "class", "row svelte-lxgass"),
          c(e, "class", "wrapper svelte-lxgass");
      },
      m(g, b) {
        w(g, e, b),
          f(e, n),
          m.m(n, null),
          f(n, t),
          f(n, l),
          f(l, i),
          f(e, s),
          C(a, e, null),
          (u = !0);
      },
      p(g, [b]) {
        d === (d = p(g, b)) && m
          ? m.p(g, b)
          : (m.d(1), (m = d(g)), m && (m.c(), m.m(n, t))),
          (!u || b & 1) && r !== (r = g[0].name + "") && ee(i, r);
        let k = {};
        b & 2 && (k.checked = g[1]), a.$set(k);
      },
      i(g) {
        u || (_(a.$$.fragment, g), (u = !0));
      },
      o(g) {
        h(a.$$.fragment, g), (u = !1);
      },
      d(g) {
        g && $(e), m.d(), x(a);
      },
    }
  );
}
function C5(o, e, n) {
  let t = oe(),
    { team: l } = e,
    { folderTeamUuid: r = null } = e,
    i = r === l.uuid,
    s = () => {
      n(1, (i = !i)), i ? t("share", l.uuid) : t("unShare");
    };
  return (
    (o.$$set = (a) => {
      "team" in a && n(0, (l = a.team)),
        "folderTeamUuid" in a && n(3, (r = a.folderTeamUuid));
    }),
    [l, i, s, r]
  );
}
var Lr = class extends H {
    constructor(e) {
      super(), j(this, e, C5, y5, U, { team: 0, folderTeamUuid: 3 }, k5);
    }
  },
  hf = Lr;
var { Boolean: x5 } = $t;
function S5(o) {
  Z(
    o,
    "svelte-8rpohp",
    ".wrapper.svelte-8rpohp{padding:24px 12px;position:relative}.close-button.svelte-8rpohp{position:absolute;top:0;right:0;padding:12px}.title.svelte-8rpohp{font-size:20px;color:var(--app-popup-empty-search-text);margin-bottom:20px;margin-left:8px}.input-wrapper.svelte-8rpohp{padding-top:8px}.input-wrapper.svelte-8rpohp .input-button{color:var(--text-secondary-color);background-color:var(--icon-bg-filled)}.input-wrapper.svelte-8rpohp .input-button:hover{background-color:var(--collections-secondary-hover-bg)}.sup-title.svelte-8rpohp{font-size:12px;color:var(--text-primary-color);margin-bottom:6px;text-align:left;margin-left:4px}.margin-wrapper.svelte-8rpohp{display:flex;flex-direction:column;row-gap:10px;margin-left:4px;max-height:300px;overflow-y:auto}.popup-section-content.svelte-8rpohp{padding:0 8px}.shared-users.svelte-8rpohp{margin-top:16px;margin-bottom:10px}.toggler-wrapper.svelte-8rpohp{display:flex;align-items:center;justify-content:space-between;width:100%;padding-top:11px;margin-bottom:13px}.share-title.svelte-8rpohp{font-size:14px;color:var(--text-primary-color);margin-bottom:2px}.title-wrapper.svelte-8rpohp{padding-top:7px;padding-left:3px}.teams-wrapper.svelte-8rpohp{display:flex;flex-direction:column;row-gap:10px;padding:0 7px 7px}"
  );
}
function vf(o, e, n) {
  let t = o.slice();
  return (t[23] = e[n]), t;
}
function bf(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [E5] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 67108875 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function A5(o) {
  let e, n;
  return (
    (e = new Us({ props: { slot: "button-icon", width: "9" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function kf(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[3],
    s = [];
  for (let u = 0; u < i.length; u += 1) s[u] = wf(vf(o, i, u));
  let a = (u) =>
    h(s[u], 1, 1, () => {
      s[u] = null;
    });
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (n.textContent = `${A("overlay_collections__people_with_access")}`),
        (t = S()),
        (l = v("div"));
      for (let u = 0; u < s.length; u += 1) s[u].c();
      c(n, "class", "sup-title svelte-8rpohp"),
        c(l, "class", "margin-wrapper svelte-8rpohp"),
        c(e, "class", "shared-users svelte-8rpohp");
    },
    m(u, p) {
      w(u, e, p), f(e, n), f(e, t), f(e, l);
      for (let d = 0; d < s.length; d += 1) s[d] && s[d].m(l, null);
      r = !0;
    },
    p(u, p) {
      if (p & 24584) {
        i = u[3];
        let d;
        for (d = 0; d < i.length; d += 1) {
          let m = vf(u, i, d);
          s[d]
            ? (s[d].p(m, p), _(s[d], 1))
            : ((s[d] = wf(m)), s[d].c(), _(s[d], 1), s[d].m(l, null));
        }
        for (Q(), d = i.length; d < s.length; d += 1) a(d);
        Y();
      }
    },
    i(u) {
      if (!r) {
        for (let p = 0; p < i.length; p += 1) _(s[p]);
        r = !0;
      }
    },
    o(u) {
      s = s.filter(x5);
      for (let p = 0; p < s.length; p += 1) h(s[p]);
      r = !1;
    },
    d(u) {
      u && $(e), Ae(s, u);
    },
  };
}
function wf(o) {
  let e, n;
  return (
    (e = new gf({
      props: {
        email: o[23].email,
        role: o[23].status,
        avatar: o[23].avatar ?? void 0,
        uuid: o[23].uuid,
      },
    })),
    e.$on("resend", o[13]),
    e.$on("unshare", o[14]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 8 && (r.email = t[23].email),
          l & 8 && (r.role = t[23].status),
          l & 8 && (r.avatar = t[23].avatar ?? void 0),
          l & 8 && (r.uuid = t[23].uuid),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function E5(o) {
  let e, n, t, l, r, i, s, a, u, p;
  function d(b) {
    o[18](b);
  }
  let m = {
    type: "submit",
    placeholder: A("overlay_collections__placeholder"),
    buttonText: A("overlay_collections__button_text"),
    hideOnEmpty: !0,
    buttonClassName: "input-button",
    hasError: o[1],
    $$slots: { "button-icon": [A5] },
    $$scope: { ctx: o },
  };
  o[0] !== void 0 && (m.value = o[0]),
    (r = new On({ props: m })),
    we.push(() => Ye(r, "value", d));
  let g = o[3]?.length && kf(o);
  return {
    c() {
      (e = v("div")),
        (n = v("form")),
        (t = v("div")),
        (t.textContent = `${A("overlay_collections__account_email")}`),
        (l = S()),
        y(r.$$.fragment),
        (s = S()),
        g && g.c(),
        c(t, "class", "sup-title svelte-8rpohp"),
        c(n, "class", "input-wrapper svelte-8rpohp"),
        c(e, "class", "popup-section-content svelte-8rpohp");
    },
    m(b, k) {
      w(b, e, k),
        f(e, n),
        f(n, t),
        f(n, l),
        C(r, n, null),
        f(e, s),
        g && g.m(e, null),
        (a = !0),
        u || ((p = X(n, "submit", wt(o[11]))), (u = !0));
    },
    p(b, k) {
      let E = {};
      k & 2 && (E.hasError = b[1]),
        k & 67108864 && (E.$$scope = { dirty: k, ctx: b }),
        !i && k & 1 && ((i = !0), (E.value = b[0]), Qe(() => (i = !1))),
        r.$set(E),
        b[3]?.length
          ? g
            ? (g.p(b, k), k & 8 && _(g, 1))
            : ((g = kf(b)), g.c(), _(g, 1), g.m(e, null))
          : g &&
            (Q(),
            h(g, 1, 1, () => {
              g = null;
            }),
            Y());
    },
    i(b) {
      a || (_(r.$$.fragment, b), _(g), (a = !0));
    },
    o(b) {
      h(r.$$.fragment, b), h(g), (a = !1);
    },
    d(b) {
      b && $(e), x(r), g && g.d(), (u = !1), p();
    },
  };
}
function $f(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [I5] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 67109136 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function I5(o) {
  let e, n, t, l, r, i;
  return (
    (r = new hf({ props: { folderTeamUuid: o[8], team: o[4] } })),
    r.$on("share", o[15]),
    r.$on("unShare", o[16]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (n.textContent = `${A("overlay_collections__share_with_team")}`),
          (t = S()),
          (l = v("div")),
          y(r.$$.fragment),
          c(n, "class", "sup-title svelte-8rpohp"),
          c(e, "class", "title-wrapper svelte-8rpohp"),
          c(l, "class", "teams-wrapper svelte-8rpohp");
      },
      m(s, a) {
        w(s, e, a), f(e, n), w(s, t, a), w(s, l, a), C(r, l, null), (i = !0);
      },
      p(s, a) {
        let u = {};
        a & 256 && (u.folderTeamUuid = s[8]),
          a & 16 && (u.team = s[4]),
          r.$set(u);
      },
      i(s) {
        i || (_(r.$$.fragment, s), (i = !0));
      },
      o(s) {
        h(r.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && $(e), s && $(t), s && $(l), x(r);
      },
    }
  );
}
function yf(o) {
  let e, n;
  return (
    (e = new Te({
      props: { $$slots: { default: [T5] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 67108996 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Cf(o) {
  let e, n;
  return (
    (e = new mf({
      props: { text: o[7] ?? "", entity: A("overlay_collections__link_text") },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 128 && (r.text = t[7] ?? ""), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function T5(o) {
  let e, n, t, l, r, i, s, a, u, p;
  (a = new Oe({ props: { checked: o[2] } })), a.$on("change", o[10]);
  let d = o[2] && Cf(o);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = v("div")),
        (l = v("div")),
        (l.textContent = `${A("overlay_collections__share_title")}`),
        (r = S()),
        (i = v("div")),
        (i.textContent = `${A("overlay_collections__share_description")}`),
        (s = S()),
        y(a.$$.fragment),
        (u = S()),
        d && d.c(),
        c(l, "class", "share-title svelte-8rpohp"),
        c(i, "class", "share-description"),
        c(n, "class", "toggler-wrapper svelte-8rpohp"),
        c(e, "class", "popup-section-content svelte-8rpohp");
    },
    m(m, g) {
      w(m, e, g),
        f(e, n),
        f(n, t),
        f(t, l),
        f(t, r),
        f(t, i),
        f(n, s),
        C(a, n, null),
        f(e, u),
        d && d.m(e, null),
        (p = !0);
    },
    p(m, g) {
      let b = {};
      g & 4 && (b.checked = m[2]),
        a.$set(b),
        m[2]
          ? d
            ? (d.p(m, g), g & 4 && _(d, 1))
            : ((d = Cf(m)), d.c(), _(d, 1), d.m(e, null))
          : d &&
            (Q(),
            h(d, 1, 1, () => {
              d = null;
            }),
            Y());
    },
    i(m) {
      p || (_(a.$$.fragment, m), _(d), (p = !0));
    },
    o(m) {
      h(a.$$.fragment, m), h(d), (p = !1);
    },
    d(m) {
      m && $(e), x(a), d && d.d();
    },
  };
}
function M5(o) {
  let e, n, t, l, r, i, s, a, u, p, d;
  t = new qe({ props: { width: "12", height: "12" } });
  let m = o[6] && bf(o),
    g = o[4] && !o[4].isJustMe && $f(o),
    b = o[5] && yf(o);
  return {
    c() {
      (e = v("div")),
        (n = v("button")),
        y(t.$$.fragment),
        (l = S()),
        (r = v("div")),
        (r.textContent = `${A("overlay_collections__title")}`),
        (i = S()),
        m && m.c(),
        (s = S()),
        g && g.c(),
        (a = S()),
        b && b.c(),
        c(n, "class", "close-button svelte-8rpohp"),
        c(r, "class", "title svelte-8rpohp"),
        c(e, "class", "wrapper svelte-8rpohp");
    },
    m(k, E) {
      w(k, e, E),
        f(e, n),
        C(t, n, null),
        f(e, l),
        f(e, r),
        f(e, i),
        m && m.m(e, null),
        f(e, s),
        g && g.m(e, null),
        f(e, a),
        b && b.m(e, null),
        (u = !0),
        p || ((d = X(n, "click", o[12])), (p = !0));
    },
    p(k, E) {
      k[6]
        ? m
          ? (m.p(k, E), E & 64 && _(m, 1))
          : ((m = bf(k)), m.c(), _(m, 1), m.m(e, s))
        : m &&
          (Q(),
          h(m, 1, 1, () => {
            m = null;
          }),
          Y()),
        k[4] && !k[4].isJustMe
          ? g
            ? (g.p(k, E), E & 16 && _(g, 1))
            : ((g = $f(k)), g.c(), _(g, 1), g.m(e, a))
          : g &&
            (Q(),
            h(g, 1, 1, () => {
              g = null;
            }),
            Y()),
        k[5]
          ? b
            ? (b.p(k, E), E & 32 && _(b, 1))
            : ((b = yf(k)), b.c(), _(b, 1), b.m(e, null))
          : b &&
            (Q(),
            h(b, 1, 1, () => {
              b = null;
            }),
            Y());
    },
    i(k) {
      u || (_(t.$$.fragment, k), _(m), _(g), _(b), (u = !0));
    },
    o(k) {
      h(t.$$.fragment, k), h(m), h(g), h(b), (u = !1);
    },
    d(k) {
      k && $(e), x(t), m && m.d(), g && g.d(), b && b.d(), (p = !1), d();
    },
  };
}
function P5(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 370,
        maxWidth: 370,
        maxHeight: "100%",
        $$slots: { default: [M5] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 67109375 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function z5(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [P5] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[19]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 67109375 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function B5(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b = oe(),
    k = q.stores.collectionsShareModal;
  ve(o, k, (D) => n(17, (g = D)));
  let E = !1,
    I = () => {
      t &&
        (n(2, (i = !i)),
        i &&
          q.actions.sendAnalyticsEvent("collections.shared-public", {
            scope: p,
          }),
        q.actions.updateCollection(t, { isPublic: i }));
    },
    T = () => {
      if (t) {
        if (!m || !qn(m)) {
          n(1, (E = !0));
          return;
        }
        n(1, (E = !1)),
          q.actions.shareCollection(t, m),
          q.actions.sendAnalyticsEvent("collections.shared-emails", {
            scope: p,
          }),
          n(0, (m = ""));
      }
    },
    P = () => {
      b("close");
    },
    M = (D) => {
      !t || !D.detail.email || q.actions.shareCollection(t, D.detail.email);
    },
    B = (D) => {
      t && q.actions.unshareCollection(t, D.detail.uuid);
    },
    O = ({ detail: D }) => {
      t &&
        (q.actions.sendAnalyticsEvent("collections.shared-with-team", {
          scope: p,
        }),
        q.actions.updateCollection(t, { teamUuid: D }));
    },
    z = () => {
      t && q.actions.updateCollection(t, { teamUuid: null });
    };
  function G(D) {
    (m = D), n(0, m);
  }
  function W(D) {
    ue.call(this, o, D);
  }
  o.$$.update = () => {
    if (o.$$.dirty & 131072) {
      e: t = g?.uuid;
    }
    if (o.$$.dirty & 131072) {
      e: n(8, (l = g?.teamUuid));
    }
    if (o.$$.dirty & 131072) {
      e: n(7, (r = g?.shareLink));
    }
    if (o.$$.dirty & 131072) {
      e: n(2, (i = Boolean(g?.shareLink)));
    }
    if (o.$$.dirty & 131072) {
      e: n(6, (s = g?.canShareByEmail));
    }
    if (o.$$.dirty & 131072) {
      e: n(5, (a = g?.canShareByPublicUrl));
    }
    if (o.$$.dirty & 131072) {
      e: n(4, (u = g?.team));
    }
    if (o.$$.dirty & 131072) {
      e: p = g?.collectionsScope ?? "personal";
    }
    if (o.$$.dirty & 131072) {
      e: n(3, (d = g?.sharingRecipients));
    }
    if (o.$$.dirty & 1) {
      e: m && n(1, (E = !1));
    }
  };
  e: n(0, (m = ""));
  return [m, E, i, d, u, a, s, r, l, k, I, T, P, M, B, O, z, g, G, W];
}
var Ur = class extends H {
    constructor(e) {
      super(), j(this, e, B5, z5, U, {}, S5);
    }
  },
  xf = Ur;
N();
function N5(o) {
  Z(
    o,
    "svelte-1fw8px9",
    ".collection-popup-container.svelte-1fw8px9{width:100%;height:100%;user-select:none}.cross-icon.svelte-1fw8px9{position:absolute;top:10px;right:10px;cursor:pointer;z-index:1}.title.svelte-1fw8px9{margin-bottom:10px;font-size:20px;font-style:normal;font-weight:700}.description.svelte-1fw8px9{margin-bottom:41px;font-size:14px;font-style:normal;font-weight:400;color:var(--collection-modal-description-color)}.content-container.svelte-1fw8px9{margin:27px 30px}.ellipse-container.svelte-1fw8px9{display:flex;margin-left:auto}.ellipse.svelte-1fw8px9{display:block;width:6px;height:6px;border-radius:50%;background-color:var(--collection-modal-default-color);margin-left:10px}.active.svelte-1fw8px9{background-color:var(--collection-modal-active-color)}.footer-content.svelte-1fw8px9{display:flex;align-items:center}"
  );
}
function q5(o) {
  let e = o[1][o[0]]?.buttonStepText + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p(t, l) {
      l & 1 && e !== (e = t[1][t[0]]?.buttonStepText + "") && ee(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function D5(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = o[1][o[0]]?.titleStepText + "",
    d,
    m,
    g,
    b = o[1][o[0]]?.descriptionText + "",
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D;
  return (
    (i = new qe({ props: { width: "14", height: "14" } })),
    (T = new pe({
      props: {
        className: "button",
        $$slots: { default: [q5] },
        $$scope: { ctx: o },
      },
    })),
    T.$on("click", o[4]),
    {
      c() {
        (e = v("div")),
          (n = v("img")),
          (l = S()),
          (r = v("div")),
          y(i.$$.fragment),
          (s = S()),
          (a = v("div")),
          (u = v("div")),
          (d = V(p)),
          (m = S()),
          (g = v("div")),
          (k = V(b)),
          (E = S()),
          (I = v("div")),
          y(T.$$.fragment),
          (P = S()),
          (M = v("div")),
          (B = v("span")),
          (O = S()),
          (z = v("span")),
          c(n, "width", "380"),
          c(n, "height", "240"),
          c(n, "class", "collection-image"),
          c(n, "alt", "collection-intro"),
          Je(n.src, (t = o[1][o[0]]?.imageSrc)) || c(n, "src", t),
          c(r, "class", "cross-icon svelte-1fw8px9"),
          c(u, "class", "title svelte-1fw8px9"),
          c(g, "class", "description svelte-1fw8px9"),
          c(B, "class", "ellipse svelte-1fw8px9"),
          ie(B, "active", !o[0]),
          c(z, "class", "ellipse svelte-1fw8px9"),
          ie(z, "active", o[0]),
          c(M, "class", "ellipse-container svelte-1fw8px9"),
          c(I, "class", "footer-content svelte-1fw8px9"),
          c(a, "class", "content-container svelte-1fw8px9"),
          c(e, "class", "collection-popup-container svelte-1fw8px9");
      },
      m(R, K) {
        w(R, e, K),
          f(e, n),
          f(e, l),
          f(e, r),
          C(i, r, null),
          f(e, s),
          f(e, a),
          f(a, u),
          f(u, d),
          f(a, m),
          f(a, g),
          f(g, k),
          f(a, E),
          f(a, I),
          C(T, I, null),
          f(I, P),
          f(I, M),
          f(M, B),
          f(M, O),
          f(M, z),
          (G = !0),
          W || ((D = [X(r, "click", o[2]), X(r, "keydown", o[3])]), (W = !0));
      },
      p(R, K) {
        (!G || (K & 1 && !Je(n.src, (t = R[1][R[0]]?.imageSrc)))) &&
          c(n, "src", t),
          (!G || K & 1) &&
            p !== (p = R[1][R[0]]?.titleStepText + "") &&
            ee(d, p),
          (!G || K & 1) &&
            b !== (b = R[1][R[0]]?.descriptionText + "") &&
            ee(k, b);
        let ne = {};
        K & 129 && (ne.$$scope = { dirty: K, ctx: R }),
          T.$set(ne),
          (!G || K & 1) && ie(B, "active", !R[0]),
          (!G || K & 1) && ie(z, "active", R[0]);
      },
      i(R) {
        G || (_(i.$$.fragment, R), _(T.$$.fragment, R), (G = !0));
      },
      o(R) {
        h(i.$$.fragment, R), h(T.$$.fragment, R), (G = !1);
      },
      d(R) {
        R && $(e), x(i), x(T), (W = !1), Se(D);
      },
    }
  );
}
function L5(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 380,
        height: 441,
        borderRadius: 10,
        $$slots: { default: [D5] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 129 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U5(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [L5] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 129 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function j5(o, e, n) {
  let t = oe(),
    l = 0,
    r = [
      {
        buttonStepText: A(
          "overlay_collections_session_modal_button_text_step_first"
        ),
        titleStepText: A(
          "overlay_collections_session_modal_title_text_step_first"
        ),
        descriptionText: A(
          "overlay_collections_session_modal_description_text_step_first"
        ),
        imageSrc: "/shared/assets/images/collection-popup-slide-1.png",
      },
      {
        buttonStepText: A(
          "overlay_collections_session_modal_button_text_step_second"
        ),
        titleStepText: A(
          "overlay_collections_session_modal_title_text_step_second"
        ),
        descriptionText: A(
          "overlay_collections_session_modal_description_text_step_second"
        ),
        imageSrc: "/shared/assets/images/collection-popup-slide-2.png",
      },
    ],
    i = () => {
      t("close");
    },
    s = (p) => {
      p.code === "Enter" && i();
    },
    a = () => {
      if (l !== r.length - 1) {
        n(0, (l += 1));
        return;
      }
      i(), q.actions.toggleCollections({ source: "popup" });
    };
  function u(p) {
    ue.call(this, o, p);
  }
  return [l, r, i, s, a, u];
}
var jr = class extends H {
    constructor(e) {
      super(), j(this, e, j5, U5, U, {}, N5);
    }
  },
  Sf = jr;
N();
function H5(o) {
  Z(
    o,
    "svelte-d2ou3t",
    ".collection-popup-container.svelte-d2ou3t{width:100%;height:100%;user-select:none}.cross-icon.svelte-d2ou3t{position:absolute;top:10px;right:10px;cursor:pointer;z-index:1}.title.svelte-d2ou3t{margin-bottom:10px;font-size:20px;font-style:normal;font-weight:700;line-height:23px;margin-right:10px}.description.svelte-d2ou3t{margin-bottom:41px;font-size:14px;font-style:normal;font-weight:400;margin-right:32px;color:var(--collection-modal-description-color)}.content-container.svelte-d2ou3t{margin:28px 30px}.ellipse-container.svelte-d2ou3t{display:flex;margin-left:auto}.ellipse.svelte-d2ou3t{display:block;width:6px;height:6px;border-radius:50%;background-color:var(--collection-modal-default-color);margin-left:10px}.active.svelte-d2ou3t{background-color:var(--collection-modal-active-color)}.footer-content.svelte-d2ou3t{display:flex;align-items:center;position:absolute;bottom:29px;left:33px;width:85%}"
  );
}
function Af(o, e, n) {
  let t = o.slice();
  return (t[7] = e[n]), (t[9] = n), t;
}
function V5(o) {
  let e = o[1][o[0]]?.buttonStepText + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p(t, l) {
      l & 1 && e !== (e = t[1][t[0]]?.buttonStepText + "") && ee(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function Ef(o) {
  let e;
  return {
    c() {
      (e = v("span")),
        c(e, "class", "ellipse svelte-d2ou3t"),
        ie(e, "active", o[0] === o[9]);
    },
    m(n, t) {
      w(n, e, t);
    },
    p(n, t) {
      t & 1 && ie(e, "active", n[0] === n[9]);
    },
    d(n) {
      n && $(e);
    },
  };
}
function O5(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = o[1][o[0]]?.titleStepText + "",
    d,
    m,
    g,
    b = o[1][o[0]]?.descriptionText + "",
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z;
  (i = new qe({ props: { width: "13", height: "13" } })),
    (T = new pe({
      props: {
        className: "button",
        $$slots: { default: [V5] },
        $$scope: { ctx: o },
      },
    })),
    T.$on("click", o[4]);
  let G = o[1],
    W = [];
  for (let D = 0; D < G.length; D += 1) W[D] = Ef(Af(o, G, D));
  return {
    c() {
      (e = v("div")),
        (n = v("img")),
        (l = S()),
        (r = v("div")),
        y(i.$$.fragment),
        (s = S()),
        (a = v("div")),
        (u = v("div")),
        (d = V(p)),
        (m = S()),
        (g = v("div")),
        (k = V(b)),
        (E = S()),
        (I = v("div")),
        y(T.$$.fragment),
        (P = S()),
        (M = v("div"));
      for (let D = 0; D < W.length; D += 1) W[D].c();
      c(n, "width", "380"),
        c(n, "height", "240"),
        c(n, "class", "collection-image"),
        c(n, "alt", "collection-intro"),
        Je(n.src, (t = o[1][o[0]]?.imageSrc)) || c(n, "src", t),
        c(r, "class", "cross-icon svelte-d2ou3t"),
        c(u, "class", "title svelte-d2ou3t"),
        c(g, "class", "description svelte-d2ou3t"),
        c(M, "class", "ellipse-container svelte-d2ou3t"),
        c(I, "class", "footer-content svelte-d2ou3t"),
        c(a, "class", "content-container svelte-d2ou3t"),
        c(e, "class", "collection-popup-container svelte-d2ou3t");
    },
    m(D, R) {
      w(D, e, R),
        f(e, n),
        f(e, l),
        f(e, r),
        C(i, r, null),
        f(e, s),
        f(e, a),
        f(a, u),
        f(u, d),
        f(a, m),
        f(a, g),
        f(g, k),
        f(a, E),
        f(a, I),
        C(T, I, null),
        f(I, P),
        f(I, M);
      for (let K = 0; K < W.length; K += 1) W[K] && W[K].m(M, null);
      (B = !0),
        O || ((z = [X(r, "click", o[2]), X(r, "keydown", o[3])]), (O = !0));
    },
    p(D, R) {
      (!B || (R & 1 && !Je(n.src, (t = D[1][D[0]]?.imageSrc)))) &&
        c(n, "src", t),
        (!B || R & 1) && p !== (p = D[1][D[0]]?.titleStepText + "") && ee(d, p),
        (!B || R & 1) &&
          b !== (b = D[1][D[0]]?.descriptionText + "") &&
          ee(k, b);
      let K = {};
      if ((R & 1025 && (K.$$scope = { dirty: R, ctx: D }), T.$set(K), R & 1)) {
        G = D[1];
        let ne;
        for (ne = 0; ne < G.length; ne += 1) {
          let te = Af(D, G, ne);
          W[ne]
            ? W[ne].p(te, R)
            : ((W[ne] = Ef(te)), W[ne].c(), W[ne].m(M, null));
        }
        for (; ne < W.length; ne += 1) W[ne].d(1);
        W.length = G.length;
      }
    },
    i(D) {
      B || (_(i.$$.fragment, D), _(T.$$.fragment, D), (B = !0));
    },
    o(D) {
      h(i.$$.fragment, D), h(T.$$.fragment, D), (B = !1);
    },
    d(D) {
      D && $(e), x(i), x(T), Ae(W, D), (O = !1), Se(z);
    },
  };
}
function R5(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 380,
        height: 441,
        borderRadius: 10,
        $$slots: { default: [O5] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1025 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function W5(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [R5] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1025 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function G5(o, e, n) {
  let t = oe(),
    l = 0,
    r = [
      {
        buttonStepText: A("overlay_verticals_tabs_modal_button_next_text"),
        titleStepText: A("overlay_verticals_tabs_modal_title_first_slide_text"),
        descriptionText: A(
          "overlay_verticals_tabs_modal_description_first_slide_text"
        ),
        imageSrc: "/shared/assets/images/vertical_tabs_modal_slide_1.png",
      },
      {
        buttonStepText: A("overlay_verticals_tabs_modal_button_next_text"),
        titleStepText: A(
          "overlay_verticals_tabs_modal_title_second_slide_text"
        ),
        descriptionText: A(
          "overlay_verticals_tabs_modal_description_second_slide_text"
        ),
        imageSrc: "/shared/assets/images/vertical_tabs_modal_slide_2.png",
      },
      {
        buttonStepText: A("overlay_verticals_tabs_modal_button_final_text"),
        titleStepText: A("overlay_verticals_tabs_modal_title_third_slide_text"),
        descriptionText: A(
          "overlay_verticals_tabs_modal_description_third_slide_text"
        ),
        imageSrc: "/shared/assets/images/vertical_tabs_modal_slide_3.png",
      },
    ],
    i = () => {
      t("close");
    },
    s = (p) => {
      p.code === "Enter" && i();
    },
    a = () => {
      if (l !== r.length - 1) {
        n(0, (l += 1));
        return;
      }
      i(), q.actions.tryShowVerticalSidecarView();
    };
  function u(p) {
    ue.call(this, o, p);
  }
  return [l, r, i, s, a, u];
}
var Hr = class extends H {
    constructor(e) {
      super(), j(this, e, G5, W5, U, {}, H5);
    }
  },
  If = Hr;
N();
N();
N();
function F5(o) {
  Z(
    o,
    "svelte-7iqco4",
    ".header.svelte-7iqco4{display:flex;flex-direction:row}.logo-wrapper.svelte-7iqco4{width:74px;height:74px;background:var(--background-primary);border:1px solid rgba(0 0 0 / 0.08);box-shadow:var(--workspace-modals-circle-shadow);border-radius:70px;display:flex;align-items:center;justify-content:center;margin-top:-50px}.mx-auto.svelte-7iqco4{margin-left:auto;margin-right:auto}.title.svelte-7iqco4{margin-top:13px;font-size:22px;line-height:26px;text-align:center;letter-spacing:-0.015em;color:var(--text-primary-color)}.close-button.svelte-7iqco4{height:12px}.subtitle.svelte-7iqco4{align-self:center;font-size:12px;line-height:16px;text-align:center;margin:6px 119px 0;letter-spacing:-0.015em;color:var(--workspace-modals-secondary-text)}"
  );
}
function Z5(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g;
  return (
    (t = new rt({ props: { height: "48px", width: "24px" } })),
    (i = new qe({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("button")),
          y(i.$$.fragment),
          (s = S()),
          (a = v("div")),
          (a.textContent = `${A(
            "overlay_workspace_management__preview_title"
          )}`),
          (u = S()),
          (p = v("div")),
          (p.textContent = `${A(
            "overlay_workspace_management__preview_subtitle"
          )}`),
          c(n, "class", "mx-auto logo-wrapper svelte-7iqco4"),
          c(r, "class", "close-button svelte-7iqco4"),
          c(e, "class", "header svelte-7iqco4"),
          c(a, "class", "title svelte-7iqco4"),
          c(p, "class", "subtitle svelte-7iqco4");
      },
      m(b, k) {
        w(b, e, k),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          C(i, r, null),
          w(b, s, k),
          w(b, a, k),
          w(b, u, k),
          w(b, p, k),
          (d = !0),
          m || ((g = X(r, "click", o[0])), (m = !0));
      },
      p: L,
      i(b) {
        d || (_(t.$$.fragment, b), _(i.$$.fragment, b), (d = !0));
      },
      o(b) {
        h(t.$$.fragment, b), h(i.$$.fragment, b), (d = !1);
      },
      d(b) {
        b && $(e),
          x(t),
          x(i),
          b && $(s),
          b && $(a),
          b && $(u),
          b && $(p),
          (m = !1),
          g();
      },
    }
  );
}
function K5(o) {
  let e = oe();
  return [
    () => {
      e("close");
    },
  ];
}
var Vr = class extends H {
    constructor(e) {
      super(), j(this, e, K5, Z5, U, {}, F5);
    }
  },
  Tf = Vr;
N();
N();
function Q5(o) {
  Z(
    o,
    "svelte-gu9wce",
    ".workspace.svelte-gu9wce.svelte-gu9wce{cursor:pointer}.workspace-active.svelte-gu9wce.svelte-gu9wce,.workspace-active.svelte-gu9wce.svelte-gu9wce:hover{background:var(--workspace-modals-active-workspace-bg)}.context-menu.svelte-gu9wce.svelte-gu9wce{position:absolute;top:4px;right:4px}.workspace-default-mark.svelte-gu9wce.svelte-gu9wce{position:absolute;top:8px;left:8px;font-weight:400;font-size:10px;color:var(--workspace-modals-default-mark-text);letter-spacing:0.05em}.workspace-avatar.svelte-gu9wce.svelte-gu9wce{display:flex;justify-content:center;align-items:center;margin-bottom:15px;box-shadow:var(--workspace-modals-circle-shadow);border-radius:50px}.workspace-avatar-border.svelte-gu9wce.svelte-gu9wce{border:2px solid var(--workspace-modals-active-workspace-border);border-radius:50px}.workspace-active.svelte-gu9wce .workspace-avatar.svelte-gu9wce{border:2px solid var(--error-color)}.workspace-name.svelte-gu9wce.svelte-gu9wce{font-weight:600;font-size:14px;line-height:17px;letter-spacing:-0.015em;color:var(--text-primary-color);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%;padding:0 16px}.add-workspace-pro-badge.svelte-gu9wce.svelte-gu9wce{user-select:none;position:absolute;top:9px;left:7px}"
  );
}
function Mf(o) {
  let e, n, t, l, r;
  function i(a) {
    o[14](a);
  }
  let s = { menuItems: o[7] };
  return (
    o[4] !== void 0 && (s.isMenuVisible = o[4]),
    (n = new kn({ props: s })),
    we.push(() => Ye(n, "isMenuVisible", i)),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          y(n.$$.fragment),
          lt(t, "display", "contents"),
          lt(t, "--button-size", "25px"),
          c(e, "class", "context-menu svelte-gu9wce");
      },
      m(a, u) {
        w(a, e, u), f(e, t), C(n, t, null), (r = !0);
      },
      p(a, u) {
        let p = {};
        u & 128 && (p.menuItems = a[7]),
          !l &&
            u & 16 &&
            ((l = !0), (p.isMenuVisible = a[4]), Qe(() => (l = !1))),
          n.$set(p);
      },
      i(a) {
        r || (_(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        h(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && $(e), x(n);
      },
    }
  );
}
function Pf(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = "DEFAULT"),
        c(e, "class", "workspace-default-mark svelte-gu9wce");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && $(e);
    },
  };
}
function Y5(o) {
  let e, n, t, l;
  return (
    (n = new Kt({ props: { state: o[0].avatar, hideMarginRight: !0 } })),
    n.$on("toggleAvatarPicker", o[9]),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          y(n.$$.fragment),
          lt(t, "display", "contents"),
          lt(t, "--avatar-size", "42px"),
          c(e, "class", "workspace-avatar-border svelte-gu9wce");
      },
      m(r, i) {
        w(r, e, i), f(e, t), C(n, t, null), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 1 && (s.state = r[0].avatar), n.$set(s);
      },
      i(r) {
        l || (_(n.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(n.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(e), x(n);
      },
    }
  );
}
function zf(o) {
  let e, n, t;
  return (
    (n = new Gt({})),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "add-workspace-pro-badge svelte-gu9wce");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function J5(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u = o[0].name + "",
    p,
    d,
    m,
    g,
    b,
    k = o[5] && Mf(o),
    E = o[1] && Pf(o);
  function I(M) {
    o[15](M);
  }
  let T = { $$slots: { default: [Y5] }, $$scope: { ctx: o } };
  o[6] !== void 0 && (T.isOpen = o[6]),
    (r = new Qt({ props: T })),
    we.push(() => Ye(r, "isOpen", I)),
    r.$on("changeBackground", o[12]),
    r.$on("changeBackgroundEmoji", o[11]),
    r.$on("toggleAvatarPicker", o[9]);
  let P = (o[2] || (o[3] && !o[1])) && zf(o);
  return {
    c() {
      (e = v("button")),
        k && k.c(),
        (n = S()),
        E && E.c(),
        (t = S()),
        (l = v("div")),
        y(r.$$.fragment),
        (s = S()),
        (a = v("div")),
        (p = V(u)),
        (d = S()),
        P && P.c(),
        c(l, "class", "workspace-avatar svelte-gu9wce"),
        c(a, "class", "workspace-name svelte-gu9wce"),
        c(e, "class", "workspace-wrapper workspace svelte-gu9wce"),
        (e.disabled = o[2]),
        ie(e, "workspace-active", o[0].isActive);
    },
    m(M, B) {
      w(M, e, B),
        k && k.m(e, null),
        f(e, n),
        E && E.m(e, null),
        f(e, t),
        f(e, l),
        C(r, l, null),
        f(e, s),
        f(e, a),
        f(a, p),
        f(e, d),
        P && P.m(e, null),
        (m = !0),
        g ||
          ((b = [
            X(e, "mouseover", o[8]),
            X(e, "focus", o[8]),
            X(e, "click", o[10]),
          ]),
          (g = !0));
    },
    p(M, [B]) {
      M[5]
        ? k
          ? (k.p(M, B), B & 32 && _(k, 1))
          : ((k = Mf(M)), k.c(), _(k, 1), k.m(e, n))
        : k &&
          (Q(),
          h(k, 1, 1, () => {
            k = null;
          }),
          Y()),
        M[1] ? E || ((E = Pf(M)), E.c(), E.m(e, t)) : E && (E.d(1), (E = null));
      let O = {};
      B & 4194305 && (O.$$scope = { dirty: B, ctx: M }),
        !i && B & 64 && ((i = !0), (O.isOpen = M[6]), Qe(() => (i = !1))),
        r.$set(O),
        (!m || B & 1) && u !== (u = M[0].name + "") && ee(p, u),
        M[2] || (M[3] && !M[1])
          ? P
            ? B & 14 && _(P, 1)
            : ((P = zf(M)), P.c(), _(P, 1), P.m(e, null))
          : P &&
            (Q(),
            h(P, 1, 1, () => {
              P = null;
            }),
            Y()),
        (!m || B & 4) && (e.disabled = M[2]),
        (!m || B & 1) && ie(e, "workspace-active", M[0].isActive);
    },
    i(M) {
      m || (_(k), _(r.$$.fragment, M), _(P), (m = !0));
    },
    o(M) {
      h(k), h(r.$$.fragment, M), h(P), (m = !1);
    },
    d(M) {
      M && $(e), k && k.d(), E && E.d(), x(r), P && P.d(), (g = !1), Se(b);
    },
  };
}
function X5(o, e, n) {
  let t,
    l,
    r = oe(),
    { workspace: i } = e,
    { isDefault: s = !1 } = e,
    { disabledByBilling: a = !1 } = e,
    { showProBadge: u = !1 } = e,
    p = !1,
    d = !1,
    m = !1,
    g = a ?? !1,
    b = {
      title: A("overlay_workspace_management__card_edit"),
      click: () => r("edit", i.id),
    },
    k = {
      title: A("overlay_workspace_management__card_close"),
      click: () => r("close", i.id),
    },
    E = {
      title: A("overlay_workspace_management__card_delete"),
      click: () => {
        (g = !0), r("delete", i.id);
      },
      isDisabled: !i.isRemovable,
      useErrorColor: !0,
    },
    I = {
      title: A("overlay_workspace_management__card_manage"),
      click: () => {
        i.manageButtonLink && window.open(i.manageButtonLink, "_blank");
      },
    },
    T = () => {
      g || n(5, (d = !0));
    },
    P = () => {
      if (a) {
        n(6, (m = !1));
        return;
      }
      n(6, (m = !m));
    },
    M = () => {
      m || g || r("activate", i.id);
    },
    B = ({ detail: { value: W } }) => {
      g ||
        (q.actions.sendAnalyticsEvent(
          "workspace-manager.workspace-icon-selected",
          void 0
        ),
        q.actions.changeBackgroundEmojiForWorkspace(i.id, W),
        P());
    },
    O = ({ detail: { value: W } }) => {
      g ||
        (q.actions.sendAnalyticsEvent(
          "workspace-manager.workspace-icon-selected",
          void 0
        ),
        q.actions.changeBackgroundForWorkspace(i.id, W),
        P());
    };
  function z(W) {
    (p = W), n(4, p);
  }
  function G(W) {
    (m = W), n(6, m);
  }
  return (
    (o.$$set = (W) => {
      "workspace" in W && n(0, (i = W.workspace)),
        "isDefault" in W && n(1, (s = W.isDefault)),
        "disabledByBilling" in W && n(2, (a = W.disabledByBilling)),
        "showProBadge" in W && n(3, (u = W.showProBadge));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 3) {
        e: n(13, (t = s || (!i.isRemovable && !i.shouldShowRemoveBtn)));
      }
      if (o.$$.dirty & 8193) {
        e: n(
          7,
          (l = [
            b,
            ...(i.isActive ? [k] : []),
            ...(i.manageButtonLink ? [I] : []),
            ...(t ? [] : [E]),
          ])
        );
      }
    }),
    [i, s, a, u, p, d, m, l, T, P, M, B, O, t, z, G]
  );
}
var Or = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          X5,
          J5,
          U,
          { workspace: 0, isDefault: 1, disabledByBilling: 2, showProBadge: 3 },
          Q5
        );
    }
  },
  Nf = Or;
function e6(o) {
  Z(
    o,
    "svelte-ubwpvh",
    ".workspaces-container.svelte-ubwpvh{display:flex;flex-flow:row wrap;column-gap:7px;margin:33px -17px 0 0;overflow-x:hidden;overflow-y:auto;padding:4px 4px 21px;row-gap:7px;flex:1;align-items:flex-start}.workspaces-container.svelte-ubwpvh .workspace-wrapper{position:relative;width:192px;min-height:117px;border-radius:8px;justify-content:center;align-items:center;display:flex;flex-direction:column;background:var(--workspace-modals-workspace-bg)}.workspaces-container.svelte-ubwpvh .workspace-wrapper:hover{background:var(--workspace-modals-workspace-bg-hover)}.workspaces-container.svelte-ubwpvh .workspace-wrapper:hover:disabled{background:var(--workspace-modals-workspace-bg);cursor:not-allowed}.add-workspace-pro-badge.svelte-ubwpvh{user-select:none;position:absolute;top:9px;left:7px}.add-workspace-text.svelte-ubwpvh{font-size:14px;line-height:16px;letter-spacing:-0.015em;color:var(--workspace-modals-add-workspace-text);user-select:none;white-space:pre-wrap}.add-workspace-plus.svelte-ubwpvh{margin-bottom:15px;display:flex;justify-content:center;align-items:center;height:42px;width:42px;background:var(--workspace-modals-add-workspace-plus-bg);color:var(--text-primary-color);border-radius:33px}"
  );
}
function qf(o, e, n) {
  let t = o.slice();
  return (t[11] = e[n]), (t[13] = n), t;
}
function Df(o, e) {
  let n, t, l;
  return (
    (t = new Nf({
      props: {
        isDefault: e[11].partitionDomain === oo,
        disabledByBilling: e[13] >= e[1],
        workspace: e[11],
        showProBadge: e[2],
      },
    })),
    t.$on("activate", e[6]),
    t.$on("delete", e[7]),
    t.$on("edit", e[8]),
    t.$on("close", e[9]),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), y(t.$$.fragment), (this.first = n);
      },
      m(r, i) {
        w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        e = r;
        let s = {};
        i & 1 && (s.isDefault = e[11].partitionDomain === oo),
          i & 3 && (s.disabledByBilling = e[13] >= e[1]),
          i & 1 && (s.workspace = e[11]),
          i & 4 && (s.showProBadge = e[2]),
          t.$set(s);
      },
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(n), x(t, r);
      },
    }
  );
}
function Lf(o) {
  let e, n, t;
  return (
    (n = new Gt({})),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "add-workspace-pro-badge svelte-ubwpvh");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function t6(o) {
  let e,
    n = [],
    t = new Map(),
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b = o[0],
    k = (I) => I[11].id;
  for (let I = 0; I < b.length; I += 1) {
    let T = qf(o, b, I),
      P = k(T);
    t.set(P, (n[I] = Df(P, T)));
  }
  s = new Et({ props: { height: "12px", width: "12px" } });
  let E = (o[2] || o[3]) && Lf(o);
  return {
    c() {
      e = v("div");
      for (let I = 0; I < n.length; I += 1) n[I].c();
      (l = S()),
        (r = v("button")),
        (i = v("div")),
        y(s.$$.fragment),
        (a = S()),
        (u = v("div")),
        (u.textContent = `${A(
          "overlay_workspace_management__add_button_text"
        )}`),
        (p = S()),
        E && E.c(),
        c(i, "class", "add-workspace-plus svelte-ubwpvh"),
        c(u, "class", "add-workspace-text svelte-ubwpvh"),
        (r.disabled = o[4]),
        c(r, "class", "workspace-wrapper"),
        c(e, "class", "workspaces-container svelte-ubwpvh");
    },
    m(I, T) {
      w(I, e, T);
      for (let P = 0; P < n.length; P += 1) n[P] && n[P].m(e, null);
      f(e, l),
        f(e, r),
        f(r, i),
        C(s, i, null),
        f(r, a),
        f(r, u),
        f(r, p),
        E && E.m(r, null),
        (d = !0),
        m || ((g = X(r, "click", o[5])), (m = !0));
    },
    p(I, [T]) {
      T & 7 &&
        ((b = I[0]), Q(), (n = ut(n, T, k, 1, I, b, t, e, ct, Df, l, qf)), Y()),
        I[2] || I[3]
          ? E
            ? T & 12 && _(E, 1)
            : ((E = Lf(I)), E.c(), _(E, 1), E.m(r, null))
          : E &&
            (Q(),
            h(E, 1, 1, () => {
              E = null;
            }),
            Y()),
        (!d || T & 16) && (r.disabled = I[4]);
    },
    i(I) {
      if (!d) {
        for (let T = 0; T < b.length; T += 1) _(n[T]);
        _(s.$$.fragment, I), _(E), (d = !0);
      }
    },
    o(I) {
      for (let T = 0; T < n.length; T += 1) h(n[T]);
      h(s.$$.fragment, I), h(E), (d = !1);
    },
    d(I) {
      I && $(e);
      for (let T = 0; T < n.length; T += 1) n[T].d();
      x(s), E && E.d(), (m = !1), g();
    },
  };
}
function n6(o, e, n) {
  let t,
    l,
    r = oe(),
    { workspaces: i } = e,
    { billingWorkspacesLimit: s } = e,
    { showProBadge: a } = e,
    u = () => r("add");
  function p(b) {
    ue.call(this, o, b);
  }
  function d(b) {
    ue.call(this, o, b);
  }
  function m(b) {
    ue.call(this, o, b);
  }
  function g(b) {
    ue.call(this, o, b);
  }
  return (
    (o.$$set = (b) => {
      "workspaces" in b && n(0, (i = b.workspaces)),
        "billingWorkspacesLimit" in b && n(1, (s = b.billingWorkspacesLimit)),
        "showProBadge" in b && n(2, (a = b.showProBadge));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 3) {
        e: n(3, (t = i.length >= s));
      }
      if (o.$$.dirty & 8) {
        e: n(4, (l = t));
      }
    }),
    [i, s, a, t, l, u, p, d, m, g]
  );
}
var Rr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          n6,
          t6,
          U,
          { workspaces: 0, billingWorkspacesLimit: 1, showProBadge: 2 },
          e6
        );
    }
  },
  Uf = Rr;
N();
function o6(o) {
  Z(
    o,
    "svelte-ta5nkh",
    ".delete-workspace-popup.svelte-ta5nkh.svelte-ta5nkh{padding:29px 25px 26px}.delete-workspace-popup.svelte-ta5nkh .icon{margin-right:0;color:#999}.delete-workspace-header.svelte-ta5nkh.svelte-ta5nkh{display:flex;align-items:center;margin-bottom:11px}.workspace-delete-title.svelte-ta5nkh.svelte-ta5nkh{margin-left:10px;font-size:16px;font-weight:700;color:var(--delete-title)}.workspace-delete-description.svelte-ta5nkh.svelte-ta5nkh{font-size:12px;line-height:18px;color:var(--delete-description)}.delete-workspace-close.svelte-ta5nkh.svelte-ta5nkh{position:absolute;right:12px;top:12px;color:#999}.workspace-delete-info.svelte-ta5nkh.svelte-ta5nkh{background-color:var(--delete-background-user-info);border-radius:9px;margin:14px 0 24px}.info-workspace.svelte-ta5nkh.svelte-ta5nkh{margin-left:10px}.info-workspace.svelte-ta5nkh>div.svelte-ta5nkh{max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;font-size:14px;color:var(--delete-title)}.workspace-delete-info-user.svelte-ta5nkh.svelte-ta5nkh{padding:12px 16px 13px;font-size:12px;border-bottom:2px solid var(--delete-border-user-info);display:flex;align-items:center}.workspace-delete-info-data.svelte-ta5nkh.svelte-ta5nkh{padding:19px 20px;font-size:13px}.info-data-item.svelte-ta5nkh.svelte-ta5nkh{display:flex;justify-content:space-between;line-height:22px}.info-data-name.svelte-ta5nkh.svelte-ta5nkh{color:var(--delete-user-info-name)}.info-data-count.svelte-ta5nkh.svelte-ta5nkh{color:var(--delete-user-info-count)}.workspace-delete-buttons.svelte-ta5nkh.svelte-ta5nkh{display:flex;column-gap:8px}"
  );
}
function jf(o) {
  let e, n;
  return (
    (e = new Kt({ props: { state: o[4], hideMarginRight: !0, noPicker: !0 } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 16 && (r.state = t[4]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function l6(o) {
  let e = A("overlay_workspace_management__cancel_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function r6(o) {
  let e = A("overlay_workspace_management__delete_button_text") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function i6(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne,
    te,
    le,
    re,
    se,
    ae,
    me,
    ce,
    ke,
    Re,
    Pe,
    De,
    _e,
    Le,
    ze,
    Xe;
  (t = new dt({ props: { width: "12px" } })),
    (i = new Sn({ props: { width: "22", height: "22" } }));
  let xe = o[4] && jf(o);
  return (
    (Pe = new pe({
      props: { $$slots: { default: [l6] }, $$scope: { ctx: o } },
    })),
    Pe.$on("click", o[5]),
    (_e = new pe({
      props: { mod: "light", $$slots: { default: [r6] }, $$scope: { ctx: o } },
    })),
    _e.$on("click", o[6]),
    {
      c() {
        (e = v("div")),
          (n = v("button")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("div")),
          y(i.$$.fragment),
          (s = S()),
          (a = v("div")),
          (a.textContent = `${A(
            "overlay_workspace_management__delete_title"
          )}`),
          (u = S()),
          (p = v("div")),
          (p.textContent = `${A(
            "overlay_workspace_management__delete_description"
          )}`),
          (d = S()),
          (m = v("div")),
          (g = v("div")),
          xe && xe.c(),
          (b = S()),
          (k = v("div")),
          (E = v("div")),
          (I = V(o[3])),
          (T = S()),
          (P = v("div")),
          (M = v("div")),
          (B = v("div")),
          (B.textContent = `${A(
            "overlay_workspace_management__delete_sessions_name"
          )}`),
          (O = S()),
          (z = v("div")),
          (G = V(o[2])),
          (W = S()),
          (D = v("div")),
          (R = v("div")),
          (R.textContent = `${A(
            "overlay_workspace_management__delete_apps_name"
          )}`),
          (K = S()),
          (ne = v("div")),
          (te = V(o[0])),
          (le = S()),
          (re = v("div")),
          (se = v("div")),
          (se.textContent = `${A(
            "overlay_workspace_management__delete_app_auth_name"
          )}`),
          (ae = S()),
          (me = v("div")),
          (ce = V(o[1])),
          (ke = S()),
          (Re = v("div")),
          y(Pe.$$.fragment),
          (De = S()),
          y(_e.$$.fragment),
          c(n, "class", "delete-workspace-close svelte-ta5nkh"),
          c(a, "class", "workspace-delete-title svelte-ta5nkh"),
          c(r, "class", "delete-workspace-header svelte-ta5nkh"),
          c(p, "class", "workspace-delete-description svelte-ta5nkh"),
          c(E, "class", "svelte-ta5nkh"),
          c(k, "class", "info-workspace svelte-ta5nkh"),
          c(g, "class", "workspace-delete-info-user svelte-ta5nkh"),
          c(B, "class", "info-data-name svelte-ta5nkh"),
          c(z, "class", "info-data-count svelte-ta5nkh"),
          c(M, "class", "info-data-item svelte-ta5nkh"),
          c(R, "class", "info-data-name svelte-ta5nkh"),
          c(ne, "class", "info-data-count svelte-ta5nkh"),
          c(D, "class", "info-data-item svelte-ta5nkh"),
          c(se, "class", "info-data-name svelte-ta5nkh"),
          c(me, "class", "info-data-count svelte-ta5nkh"),
          c(re, "class", "info-data-item svelte-ta5nkh"),
          c(P, "class", "workspace-delete-info-data svelte-ta5nkh"),
          c(m, "class", "workspace-delete-info svelte-ta5nkh"),
          c(Re, "class", "workspace-delete-buttons svelte-ta5nkh"),
          c(e, "class", "delete-workspace-popup svelte-ta5nkh");
      },
      m(be, he) {
        w(be, e, he),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          C(i, r, null),
          f(r, s),
          f(r, a),
          f(e, u),
          f(e, p),
          f(e, d),
          f(e, m),
          f(m, g),
          xe && xe.m(g, null),
          f(g, b),
          f(g, k),
          f(k, E),
          f(E, I),
          f(m, T),
          f(m, P),
          f(P, M),
          f(M, B),
          f(M, O),
          f(M, z),
          f(z, G),
          f(P, W),
          f(P, D),
          f(D, R),
          f(D, K),
          f(D, ne),
          f(ne, te),
          f(P, le),
          f(P, re),
          f(re, se),
          f(re, ae),
          f(re, me),
          f(me, ce),
          f(e, ke),
          f(e, Re),
          C(Pe, Re, null),
          f(Re, De),
          C(_e, Re, null),
          (Le = !0),
          ze || ((Xe = X(n, "click", o[5])), (ze = !0));
      },
      p(be, he) {
        be[4]
          ? xe
            ? (xe.p(be, he), he & 16 && _(xe, 1))
            : ((xe = jf(be)), xe.c(), _(xe, 1), xe.m(g, b))
          : xe &&
            (Q(),
            h(xe, 1, 1, () => {
              xe = null;
            }),
            Y()),
          (!Le || he & 8) && ee(I, be[3]),
          (!Le || he & 4) && ee(G, be[2]),
          (!Le || he & 1) && ee(te, be[0]),
          (!Le || he & 2) && ee(ce, be[1]);
        let de = {};
        he & 1024 && (de.$$scope = { dirty: he, ctx: be }), Pe.$set(de);
        let Ie = {};
        he & 1024 && (Ie.$$scope = { dirty: he, ctx: be }), _e.$set(Ie);
      },
      i(be) {
        Le ||
          (_(t.$$.fragment, be),
          _(i.$$.fragment, be),
          _(xe),
          _(Pe.$$.fragment, be),
          _(_e.$$.fragment, be),
          (Le = !0));
      },
      o(be) {
        h(t.$$.fragment, be),
          h(i.$$.fragment, be),
          h(xe),
          h(Pe.$$.fragment, be),
          h(_e.$$.fragment, be),
          (Le = !1);
      },
      d(be) {
        be && $(e), x(t), x(i), xe && xe.d(), x(Pe), x(_e), (ze = !1), Xe();
      },
    }
  );
}
function s6(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 375,
        minWidth: 375,
        height: "auto",
        $$slots: { default: [i6] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1055 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function a6(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [s6] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1055 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function c6(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a = oe(),
    { workspace: u } = e,
    p = async () => {
      if (!u?.id) return;
      let g = await q.queries.loadWorkspaceStatisticsState(u.id);
      n(2, (r = g.sessionsCount)),
        n(1, (i = g.applicationsAccountCount)),
        n(0, (s = g.applicationsCount));
    },
    d = () => a("close"),
    m = () => a("delete");
  ye(() => {
    p().catch(ft);
  }),
    (o.$$set = (g) => {
      "workspace" in g && n(7, (u = g.workspace));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 128) {
        e: n(4, (t = u?.avatar ?? null));
      }
      if (o.$$.dirty & 128) {
        e: n(3, (l = u?.name ?? ""));
      }
    });
  e: n(2, (r = 0));
  e: n(1, (i = 0));
  e: n(0, (s = 0));
  return [s, i, r, l, t, d, m, u];
}
var Wr = class extends H {
    constructor(e) {
      super(), j(this, e, c6, a6, U, { workspace: 7 }, o6);
    }
  },
  Hf = Wr;
function u6(o) {
  Z(
    o,
    "svelte-5xljwz",
    ".container.svelte-5xljwz{min-height:422px;padding:17px 17px 0;display:flex;flex-direction:column}"
  );
}
function p6(o) {
  let e, n, t, l, r;
  return (
    (n = new Tf({})),
    n.$on("close", o[5]),
    (l = new Uf({
      props: {
        workspaces: o[1],
        billingWorkspacesLimit: o[3],
        showProBadge: o[2],
      },
    })),
    l.$on("activate", o[7]),
    l.$on("add", o[6]),
    l.$on("close", o[12]),
    l.$on("delete", o[8]),
    l.$on("edit", o[11]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          y(l.$$.fragment),
          c(e, "class", "container svelte-5xljwz"),
          c(e, "data-testid", "manage-workspaces-popup");
      },
      m(i, s) {
        w(i, e, s), C(n, e, null), f(e, t), C(l, e, null), (r = !0);
      },
      p(i, s) {
        let a = {};
        s & 2 && (a.workspaces = i[1]),
          s & 8 && (a.billingWorkspacesLimit = i[3]),
          s & 4 && (a.showProBadge = i[2]),
          l.$set(a);
      },
      i(i) {
        r || (_(n.$$.fragment, i), _(l.$$.fragment, i), (r = !0));
      },
      o(i) {
        h(n.$$.fragment, i), h(l.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && $(e), x(n), x(l);
      },
    }
  );
}
function Vf(o) {
  let e, n;
  return (
    (e = new Hf({ props: { workspace: o[1].find(o[15]) ?? null } })),
    e.$on("close", o[9]),
    e.$on("delete", o[10]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 3 && (r.workspace = t[1].find(t[15]) ?? null), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function f6(o) {
  let e, n, t, l;
  e = new $e({
    props: {
      width: 632,
      maxHeight: "80vh",
      $$slots: { default: [p6] },
      $$scope: { ctx: o },
    },
  });
  let r = o[0] && Vf(o);
  return {
    c() {
      y(e.$$.fragment), (n = S()), r && r.c(), (t = fe());
    },
    m(i, s) {
      C(e, i, s), w(i, n, s), r && r.m(i, s), w(i, t, s), (l = !0);
    },
    p(i, s) {
      let a = {};
      s & 131086 && (a.$$scope = { dirty: s, ctx: i }),
        e.$set(a),
        i[0]
          ? r
            ? (r.p(i, s), s & 1 && _(r, 1))
            : ((r = Vf(i)), r.c(), _(r, 1), r.m(t.parentNode, t))
          : r &&
            (Q(),
            h(r, 1, 1, () => {
              r = null;
            }),
            Y());
    },
    i(i) {
      l || (_(e.$$.fragment, i), _(r), (l = !0));
    },
    o(i) {
      h(e.$$.fragment, i), h(r), (l = !1);
    },
    d(i) {
      x(e, i), i && $(n), r && r.d(i), i && $(t);
    },
  };
}
function d6(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [f6] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 131087 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function m6(o, e, n) {
  let t,
    l,
    r,
    i,
    s = oe(),
    a = q.stores.workspaceManagmentModal;
  ve(o, a, (M) => n(14, (i = M)));
  let { source: u } = e,
    p,
    d = () => {
      s("close");
    },
    m = () => {
      q.actions.sendAnalyticsEvent(
        "workspace-manager.add-workspace-clicked",
        void 0
      ),
        q.actions.showWorkspaceCreationModal({
          source: "workspace-manager.add-workspace-clicked",
        });
    },
    g = ({ detail: M }) => {
      let B = t.find(({ id: z }) => z === M),
        O = Boolean(B?.isActive);
      q.actions.sendAnalyticsEvent("workspace-manager.workspace-selected", {
        "is-active": O,
        "active-workspaces": t.filter((z) => z.isActive).length,
        workspaces: t.length,
      }),
        q.actions.openWorkspace(M),
        d();
    },
    b = ({ detail: M }) => {
      q.actions.sendAnalyticsEvent(
        "workspace-manager.delete-workspace-clicked",
        void 0
      ),
        n(0, (p = M));
    },
    k = () => {
      n(0, (p = null));
    },
    E = () => {
      p && (q.actions.deleteWorkspace(p), n(0, (p = null)));
    },
    I = ({ detail: M }) => {
      q.actions.sendAnalyticsEvent(
        "workspace-manager.edit-workspace-clicked",
        void 0
      ),
        q.actions.showWorkspaceEditingModal({
          source: "workspace-manager.edit-workspace-clicked",
          workspaceId: M,
        });
    },
    T = ({ detail: M }) => {
      q.actions.sendAnalyticsEvent(
        "workspace-manager.close-workspace-clicked",
        void 0
      ),
        q.actions.closeWorkspace(M);
    };
  ye(
    () => (
      q.actions.sendAnalyticsEvent("workspace-manager.auto-opened", {
        source: u,
      }),
      () => {
        q.actions.sendAnalyticsEvent("workspace-manager.auto-closed", {
          source: u,
        });
      }
    )
  );
  let P = ({ id: M }) => M === p;
  (o.$$set = (M) => {
    "source" in M && n(13, (u = M.source));
  }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16384) {
        e: n(1, (t = i?.workspaces ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(3, (l = i?.billingWorkspacesLimit ?? 1 / 0));
      }
      if (o.$$.dirty & 16384) {
        e: n(2, (r = i?.showProBadge ?? !1));
      }
    });
  e: n(0, (p = null));
  return [p, t, r, l, a, d, m, g, b, k, E, I, T, u, i, P];
}
var Gr = class extends H {
    constructor(e) {
      super(), j(this, e, m6, d6, U, { source: 13 }, u6);
    }
  },
  Of = Gr;
N();
N();
N();
N();
function _6(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M12.4297 2.33192L11.6681 1.57032C11.3022 1.20512 10.8065 1 10.2895 1C9.77256 1 9.27678 1.20512 8.91094 1.57032L1 9.48119V13H4.51881L12.4297 5.08907C12.7949 4.72323 13 4.22742 13 3.7105C13 3.19356 12.7949 2.69776 12.4297 2.33192ZM4.11494 12.0251H1.9749V9.88506L8.0345 3.82547L10.1745 5.96549L4.11494 12.0251ZM11.7404 4.39975L10.8638 5.27625L8.72376 3.13621L9.60026 2.25965C9.78328 2.07729 10.0311 1.97491 10.2894 1.97491C10.5479 1.97491 10.7957 2.07729 10.9787 2.25965L11.7405 3.02143C11.9228 3.20446 12.0252 3.45226 12.0252 3.71059C12.0252 3.96892 11.9228 4.21673 11.7405 4.39975H11.7404Z"
        ),
        c(n, "fill", "currentColor"),
        c(n, "fill-opacity", "0.85"),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 14 14"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]),
        r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function g6(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var Fr = class extends H {
    constructor(e) {
      super(), j(this, e, g6, _6, U, { width: 0, height: 1, className: 2 });
    }
  },
  Rf = Fr;
function h6(o) {
  Z(
    o,
    "svelte-ww69e0",
    ".container.svelte-ww69e0{display:flex;flex-direction:column;border-radius:8px}.header.svelte-ww69e0{padding:14px;display:flex;flex-direction:column;min-height:109px;border-radius:8px 8px 0 0}.body.svelte-ww69e0{display:flex;flex-direction:column;align-items:center}.title.svelte-ww69e0{font-weight:700;font-size:22px;line-height:26px;text-align:center;letter-spacing:-0.015em;margin-bottom:34px;margin-top:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%}.avatar-wrapper.svelte-ww69e0{border:2px solid var(--workspace-modals-create-workspace-avatar-border);box-shadow:var(--workspace-modals-circle-shadow);border-radius:50px;margin-top:-27.5px}.avatar-edit-button.svelte-ww69e0{position:absolute;margin-left:40px;margin-top:-20px;background:var(--workspace-modals-edit-button-bg);color:var(--workspace-modals-edit-button-icon);border:1px solid var(--workspace-modals-edit-button-border);box-shadow:0 0 9px rgba(0 0 0 / 0.09);border-radius:149.032px;padding:4px}.avatar-edit-button.svelte-ww69e0:hover{background:var(--workspace-modals-edit-button-bg-hover)}.close-button.svelte-ww69e0{align-self:flex-end}.input-wrapper.svelte-ww69e0{background:var(--workspace-modals-create-workspace-input-bg);border-radius:8px;padding:20px;width:395px;margin:18px 0}"
  );
}
function v6(o) {
  let e = o[6][o[1]].submit + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p(t, l) {
      l & 2 && e !== (e = t[6][t[1]].submit + "") && ee(n, e);
    },
    d(t) {
      t && $(n);
    },
  };
}
function b6(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = o[6][o[1]].subtitle + "",
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K;
  (l = new qe({ props: { width: "12", height: "12" } })),
    (g = new Kt({ props: { state: o[0], hideMarginRight: !0 } })),
    g.$on("toggleAvatarPicker", o[10]);
  function ne(re) {
    o[16](re);
  }
  let te = {};
  o[3] !== void 0 && (te.isOpen = o[3]),
    (E = new Qt({ props: te })),
    we.push(() => Ye(E, "isOpen", ne)),
    E.$on("changeBackground", o[12]),
    E.$on("changeBackgroundEmoji", o[11]),
    E.$on("toggleAvatarPicker", o[10]),
    (M = new Rf({ props: { width: "12px", height: "12px" } }));
  let le = {
    placeholder: A("overlay_components_workspace_universal__placeholder"),
    value: o[7],
    inputError: o[8],
  };
  return (
    (z = new $n({ props: le })),
    o[17](z),
    z.$on("keydown", o[13]),
    (W = new pe({
      props: {
        size: "large",
        disabled: o[2],
        $$slots: { default: [v6] },
        $$scope: { ctx: o },
      },
    })),
    W.$on("click", o[14]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (t = v("button")),
          y(l.$$.fragment),
          (r = S()),
          (i = v("div")),
          (a = V(s)),
          (p = S()),
          (d = v("div")),
          (m = v("div")),
          (b = v("div")),
          y(g.$$.fragment),
          (k = S()),
          y(E.$$.fragment),
          (T = S()),
          (P = v("button")),
          y(M.$$.fragment),
          (B = S()),
          (O = v("div")),
          y(z.$$.fragment),
          (G = S()),
          y(W.$$.fragment),
          c(t, "class", "close-button svelte-ww69e0"),
          c(i, "class", "title svelte-ww69e0"),
          c(n, "class", "header svelte-ww69e0"),
          c(
            n,
            "style",
            (u = `background: ${o[4]}; color: ${o[0].foregroundColor};`)
          ),
          lt(b, "display", "contents"),
          lt(b, "--avatar-size", "55px"),
          c(P, "class", "avatar-edit-button svelte-ww69e0"),
          c(m, "class", "avatar-wrapper svelte-ww69e0"),
          c(O, "class", "input-wrapper svelte-ww69e0"),
          c(d, "class", "body svelte-ww69e0"),
          c(e, "class", "container svelte-ww69e0");
      },
      m(re, se) {
        w(re, e, se),
          f(e, n),
          f(n, t),
          C(l, t, null),
          f(n, r),
          f(n, i),
          f(i, a),
          f(e, p),
          f(e, d),
          f(d, m),
          f(m, b),
          C(g, b, null),
          f(m, k),
          C(E, m, null),
          f(m, T),
          f(m, P),
          C(M, P, null),
          f(d, B),
          f(d, O),
          C(z, O, null),
          f(d, G),
          C(W, d, null),
          (D = !0),
          R || ((K = [X(t, "click", o[9]), X(P, "click", o[10])]), (R = !0));
      },
      p(re, se) {
        (!D || se & 2) && s !== (s = re[6][re[1]].subtitle + "") && ee(a, s),
          (!D ||
            (se & 17 &&
              u !==
                (u = `background: ${re[4]}; color: ${re[0].foregroundColor};`))) &&
            c(n, "style", u);
        let ae = {};
        se & 1 && (ae.state = re[0]), g.$set(ae);
        let me = {};
        !I && se & 8 && ((I = !0), (me.isOpen = re[3]), Qe(() => (I = !1))),
          E.$set(me);
        let ce = {};
        z.$set(ce);
        let ke = {};
        se & 4 && (ke.disabled = re[2]),
          se & 33554434 && (ke.$$scope = { dirty: se, ctx: re }),
          W.$set(ke);
      },
      i(re) {
        D ||
          (_(l.$$.fragment, re),
          _(g.$$.fragment, re),
          _(E.$$.fragment, re),
          _(M.$$.fragment, re),
          _(z.$$.fragment, re),
          _(W.$$.fragment, re),
          (D = !0));
      },
      o(re) {
        h(l.$$.fragment, re),
          h(g.$$.fragment, re),
          h(E.$$.fragment, re),
          h(M.$$.fragment, re),
          h(z.$$.fragment, re),
          h(W.$$.fragment, re),
          (D = !1);
      },
      d(re) {
        re && $(e),
          x(l),
          x(g),
          x(E),
          x(M),
          o[17](null),
          x(z),
          x(W),
          (R = !1),
          Se(K);
      },
    }
  );
}
function k6(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 436,
        height: 306,
        $$slots: { default: [b6] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 33554495 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function w6(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [k6] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[9]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 33554495 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var Wf = "var(--workspace-modals-create-workspace-bg);";
function $6(o, e, n) {
  let t,
    l,
    r = oe(),
    { mode: i = "create" } = e,
    { baseName: s = "" } = e,
    { avatar: a = { type: "Colored", text: "S", ...Wt } } = e,
    u = {
      create: {
        subtitle: A("overlay_components_workspace_universal__create_subtitle"),
        submit: A("overlay_components_workspace_universal__create_submit"),
      },
      edit: {
        subtitle: A("overlay_components_workspace_universal__edit_subtitle"),
        submit: A("overlay_components_workspace_universal__edit_submit"),
      },
    },
    p = !1,
    d = !1,
    m = !1,
    g = it(s);
  ve(o, g, (K) => n(21, (t = K)));
  let b = it(!1);
  ve(o, b, (K) => n(22, (l = K)));
  let k = a.backgroundColor === Wt.backgroundColor ? Wf : a.backgroundColor,
    E,
    I = { bg: Wt.backgroundColor, letterColor: Wt.foregroundColor },
    T,
    P = (K) => es(K, "S");
  g.subscribe((K) => {
    a.type === "Colored" && n(0, (a = { ...a, text: P(K) }));
  });
  let M = () => {
      r("close");
    },
    B = () => n(3, (d = !d)),
    O = ({ detail: { value: K } }) => {
      n(
        0,
        (a = {
          ...a,
          type: "Emoji",
          backgroundColor: "yellow",
          foregroundColor: Wt.foregroundColor,
          text: K.symbol,
        })
      ),
        n(4, (k = Wf)),
        (E = K),
        B(),
        (m = !0),
        i !== "create" &&
          q.actions.sendAnalyticsEvent("workspace-form.icon-selected", void 0);
    },
    z = ({ detail: { value: K } }) => {
      n(
        0,
        (a = {
          ...a,
          type: "Colored",
          text: P(t),
          foregroundColor: K.letterColor,
          backgroundColor: K.bg,
        })
      ),
        n(4, (k = K.bg)),
        (I = K),
        B(),
        (m = !0),
        i !== "create" &&
          q.actions.sendAnalyticsEvent("workspace-form.icon-selected", void 0);
    },
    G = (K) => {
      K.key === "Enter" && W();
    },
    W = () => {
      if (p) return;
      if ((n(2, (p = !0)), tt(g, (t = t.trim()), t), !t)) {
        q.actions.sendAnalyticsEvent("workspace-form.submitted", {
          "is-success": !1,
          "is-mode-edit": i === "edit",
        }),
          tt(b, (l = !0), l),
          n(2, (p = !1));
        return;
      }
      let ne =
          a.type === "Emoji" && E
            ? { type: "Emoji", value: E }
            : { type: "Color", value: I },
        te = m || i === "create";
      q.actions.sendAnalyticsEvent("workspace-form.submitted", {
        "is-success": !0,
        "is-mode-edit": i === "edit",
      }),
        r("submit", { name: t, avatar: te ? ne : void 0 });
    };
  ye(() => {
    T.focus();
  });
  function D(K) {
    (d = K), n(3, d);
  }
  function R(K) {
    we[K ? "unshift" : "push"](() => {
      (T = K), n(5, T);
    });
  }
  return (
    (o.$$set = (K) => {
      "mode" in K && n(1, (i = K.mode)),
        "baseName" in K && n(15, (s = K.baseName)),
        "avatar" in K && n(0, (a = K.avatar));
    }),
    [a, i, p, d, k, T, u, g, b, M, B, O, z, G, W, s, D, R]
  );
}
var Zr = class extends H {
    constructor(e) {
      super(), j(this, e, $6, w6, U, { mode: 1, baseName: 15, avatar: 0 }, h6);
    }
  },
  Rn = Zr;
function y6(o) {
  let e, n;
  return (
    (e = new Rn({})),
    e.$on("submit", o[0]),
    e.$on("close", o[1]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function C6(o, e, n) {
  let t = oe(),
    { source: l } = e,
    r = ({ detail: { name: s, avatar: a } }) => {
      pt(a, "Workspace can be created only with avatar"),
        q.actions.createWorkspace(s, a),
        t("close");
    },
    i = () => {
      q.actions.showWorkspacesManagementModal({
        source: "workspace-create-modal",
      });
    };
  return (
    ye(
      () => (
        q.actions.sendAnalyticsEvent("workspace-creation.auto-opened", {
          source: l,
        }),
        () => {
          q.actions.sendAnalyticsEvent("workspace-creation.auto-closed", {
            source: l,
          });
        }
      )
    ),
    (o.$$set = (s) => {
      "source" in s && n(2, (l = s.source));
    }),
    [r, i, l]
  );
}
var Kr = class extends H {
    constructor(e) {
      super(), j(this, e, C6, y6, U, { source: 2 });
    }
  },
  Ff = Kr;
N();
function Zf(o) {
  let e, n;
  return (
    (e = new Rn({
      props: { baseName: o[1].name, avatar: o[1].avatar, mode: "edit" },
    })),
    e.$on("close", o[4]),
    e.$on("submit", o[3]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.baseName = t[1].name),
          l & 2 && (r.avatar = t[1].avatar),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function x6(o) {
  let e,
    n,
    t = o[1]?.id === o[0] && Zf(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, [r]) {
      l[1]?.id === l[0]
        ? t
          ? (t.p(l, r), r & 3 && _(t, 1))
          : ((t = Zf(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function S6(o, e, n) {
  let t,
    l,
    r = q.stores.workspaceEditModal;
  ve(o, r, (p) => n(6, (l = p)));
  let { source: i } = e,
    { workspaceId: s } = e,
    a = ({ detail: p }) => {
      q.actions.editWorkspaceData(s, p), u();
    },
    u = () => {
      q.actions.showWorkspacesManagementModal({
        source: "workspace-edit-modal",
      });
    };
  return (
    ye(
      () => (
        q.actions.sendAnalyticsEvent("workspace-editing.auto-opened", {
          source: i,
        }),
        () => {
          q.actions.sendAnalyticsEvent("workspace-editing.auto-closed", {
            source: i,
          });
        }
      )
    ),
    (o.$$set = (p) => {
      "source" in p && n(5, (i = p.source)),
        "workspaceId" in p && n(0, (s = p.workspaceId));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 64) {
        e: n(1, (t = l?.workspace));
      }
    }),
    [s, t, r, a, u, i, l]
  );
}
var Qr = class extends H {
    constructor(e) {
      super(), j(this, e, S6, x6, U, { source: 5, workspaceId: 0 });
    }
  },
  Kf = Qr;
N();
N();
function A6(o) {
  Z(
    o,
    "svelte-1ov0dj4",
    ".container.svelte-1ov0dj4{display:flex;flex-direction:row;padding:43px 48px 34px 41px;height:100%;column-gap:30px}.close-button.svelte-1ov0dj4{position:absolute;top:0;right:0;padding:12px}.description-col.svelte-1ov0dj4{display:flex;flex-direction:column;max-width:50%}.description-subtitle.svelte-1ov0dj4{font-weight:700;font-size:16px;line-height:19px;color:var(--billing-modal-subtitle);margin-bottom:26px}.description-body.svelte-1ov0dj4{display:flex;flex-direction:column}.description-title.svelte-1ov0dj4{font-weight:900;font-size:36px;line-height:40px;color:var(--billing-modal-title);margin-bottom:14px}.description-text.svelte-1ov0dj4{margin-bottom:19px;margin-right:20px}.description-actions.svelte-1ov0dj4{display:flex;flex-direction:row;column-gap:11px;margin-top:auto}.features-col.svelte-1ov0dj4{display:flex;flex-direction:column;background:var(--billing-modal-col-background);border:1px solid var(--billing-modal-col-border);box-shadow:0 1px 25px rgb(0 0 0 / 0.07);border-radius:10px;padding:30px 51px 30px 30px;flex-shrink:0;min-width:260px;align-self:center}.features-title.svelte-1ov0dj4{font-size:14px;color:var(--billing-modal-col-title);margin-bottom:25px;display:flex;flex-direction:row;column-gap:6px;align-items:center}.features-label.svelte-1ov0dj4{font-size:10px;line-height:12px;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px}.features-list.svelte-1ov0dj4{display:flex;flex-direction:column}.description-additional.svelte-1ov0dj4{margin-bottom:5px}"
  );
}
var E6 = (o) => ({}),
  Qf = (o) => ({}),
  I6 = (o) => ({}),
  Yf = (o) => ({}),
  T6 = (o) => ({}),
  Jf = (o) => ({}),
  M6 = (o) => ({}),
  Xf = (o) => ({}),
  P6 = (o) => ({}),
  e1 = (o) => ({}),
  z6 = (o) => ({}),
  t1 = (o) => ({}),
  B6 = (o) => ({}),
  n1 = (o) => ({}),
  N6 = (o) => ({}),
  o1 = (o) => ({});
function l1(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u = o[10]["features-title"],
    p = We(u, o, o[12], Jf),
    d = o[10]["features-label"],
    m = We(d, o, o[12], Yf),
    g = o[10]["features-list"],
    b = We(g, o, o[12], Qf);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        p && p.c(),
        (t = S()),
        (l = v("div")),
        m && m.c(),
        (r = S()),
        (i = v("div")),
        b && b.c(),
        c(n, "class", "features-title svelte-1ov0dj4"),
        c(l, "class", "features-label svelte-1ov0dj4"),
        c(i, "class", "features-list svelte-1ov0dj4"),
        c(e, "class", "features-col svelte-1ov0dj4"),
        c(e, "style", (s = `padding-right: ${o[4]}px`));
    },
    m(k, E) {
      w(k, e, E),
        f(e, n),
        p && p.m(n, null),
        f(e, t),
        f(e, l),
        m && m.m(l, null),
        f(e, r),
        f(e, i),
        b && b.m(i, null),
        (a = !0);
    },
    p(k, E) {
      p &&
        p.p &&
        (!a || E & 4096) &&
        Fe(p, u, k, k[12], a ? Ge(u, k[12], E, T6) : Ze(k[12]), Jf),
        m &&
          m.p &&
          (!a || E & 4096) &&
          Fe(m, d, k, k[12], a ? Ge(d, k[12], E, I6) : Ze(k[12]), Yf),
        b &&
          b.p &&
          (!a || E & 4096) &&
          Fe(b, g, k, k[12], a ? Ge(g, k[12], E, E6) : Ze(k[12]), Qf),
        (!a || (E & 16 && s !== (s = `padding-right: ${k[4]}px`))) &&
          c(e, "style", s);
    },
    i(k) {
      a || (_(p, k), _(m, k), _(b, k), (a = !0));
    },
    o(k) {
      h(p, k), h(m, k), h(b, k), (a = !1);
    },
    d(k) {
      k && $(e), p && p.d(k), m && m.d(k), b && b.d(k);
    },
  };
}
function q6(o) {
  let e, n, t, l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P, M, B, O, z, G;
  t = new qe({ props: { width: "12", height: "12" } });
  let W = o[10]["description-subtitle"],
    D = We(W, o, o[12], o1),
    R = o[10]["description-prepend"],
    K = We(R, o, o[12], n1),
    ne = o[10]["description-additional"],
    te = We(ne, o, o[12], t1),
    le = o[10]["description-actions"],
    re = We(le, o, o[12], e1),
    se = o[10]["features-col"],
    ae = We(se, o, o[12], Xf),
    me = !o[7]["features-col"] && l1(o);
  return {
    c() {
      (e = v("div")),
        (n = v("button")),
        y(t.$$.fragment),
        (l = S()),
        (r = v("div")),
        (i = v("div")),
        D && D.c(),
        (s = S()),
        (a = v("div")),
        K && K.c(),
        (u = S()),
        (p = v("div")),
        (d = V(o[2])),
        (m = S()),
        (g = v("div")),
        (b = V(o[3])),
        (k = S()),
        (E = v("div")),
        te && te.c(),
        (I = S()),
        (T = v("div")),
        re && re.c(),
        (P = S()),
        ae && ae.c(),
        (M = S()),
        me && me.c(),
        c(n, "class", "close-button svelte-1ov0dj4"),
        c(i, "class", "description-subtitle svelte-1ov0dj4"),
        c(p, "class", "description-title svelte-1ov0dj4"),
        c(g, "class", "description-text svelte-1ov0dj4"),
        c(E, "class", "description-additional svelte-1ov0dj4"),
        c(a, "class", "description-body svelte-1ov0dj4"),
        c(T, "class", "description-actions svelte-1ov0dj4"),
        c(r, "class", "description-col svelte-1ov0dj4"),
        c(e, "class", "container svelte-1ov0dj4"),
        c(e, "style", (B = `background: ${o[5]}`));
    },
    m(ce, ke) {
      w(ce, e, ke),
        f(e, n),
        C(t, n, null),
        f(e, l),
        f(e, r),
        f(r, i),
        D && D.m(i, null),
        f(r, s),
        f(r, a),
        K && K.m(a, null),
        f(a, u),
        f(a, p),
        f(p, d),
        f(a, m),
        f(a, g),
        f(g, b),
        f(a, k),
        f(a, E),
        te && te.m(E, null),
        f(r, I),
        f(r, T),
        re && re.m(T, null),
        f(e, P),
        ae && ae.m(e, null),
        f(e, M),
        me && me.m(e, null),
        (O = !0),
        z || ((G = X(n, "click", o[6])), (z = !0));
    },
    p(ce, ke) {
      D &&
        D.p &&
        (!O || ke & 4096) &&
        Fe(D, W, ce, ce[12], O ? Ge(W, ce[12], ke, N6) : Ze(ce[12]), o1),
        K &&
          K.p &&
          (!O || ke & 4096) &&
          Fe(K, R, ce, ce[12], O ? Ge(R, ce[12], ke, B6) : Ze(ce[12]), n1),
        (!O || ke & 4) && ee(d, ce[2]),
        (!O || ke & 8) && ee(b, ce[3]),
        te &&
          te.p &&
          (!O || ke & 4096) &&
          Fe(te, ne, ce, ce[12], O ? Ge(ne, ce[12], ke, z6) : Ze(ce[12]), t1),
        re &&
          re.p &&
          (!O || ke & 4096) &&
          Fe(re, le, ce, ce[12], O ? Ge(le, ce[12], ke, P6) : Ze(ce[12]), e1),
        ae &&
          ae.p &&
          (!O || ke & 4096) &&
          Fe(ae, se, ce, ce[12], O ? Ge(se, ce[12], ke, M6) : Ze(ce[12]), Xf),
        ce[7]["features-col"]
          ? me &&
            (Q(),
            h(me, 1, 1, () => {
              me = null;
            }),
            Y())
          : me
          ? (me.p(ce, ke), ke & 128 && _(me, 1))
          : ((me = l1(ce)), me.c(), _(me, 1), me.m(e, null));
    },
    i(ce) {
      O ||
        (_(t.$$.fragment, ce),
        _(D, ce),
        _(K, ce),
        _(te, ce),
        _(re, ce),
        _(ae, ce),
        _(me),
        (O = !0));
    },
    o(ce) {
      h(t.$$.fragment, ce),
        h(D, ce),
        h(K, ce),
        h(te, ce),
        h(re, ce),
        h(ae, ce),
        h(me),
        (O = !1);
    },
    d(ce) {
      ce && $(e),
        x(t),
        D && D.d(ce),
        K && K.d(ce),
        te && te.d(ce),
        re && re.d(ce),
        ae && ae.d(ce),
        me && me.d(),
        (z = !1),
        G();
    },
  };
}
function D6(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: o[0],
        maxHeight: o[1],
        height: o[1],
        $$slots: { default: [q6] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.width = t[0]),
          l & 2 && (r.maxHeight = t[1]),
          l & 2 && (r.height = t[1]),
          l & 4252 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function L6(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [D6] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[11]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 4255 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U6(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    r = gn(t),
    i = oe(),
    { width: s } = e,
    { height: a } = e,
    { descriptionTitle: u } = e,
    { descriptionText: p } = e,
    { sideBackground: d = "rgba(130, 54, 255, 0.15)" } = e,
    { featuresColPaddingRight: m = 51 } = e,
    { backgroundRightPercents: g = 40 } = e,
    k = `linear-gradient(
      to right,
      transparent,
      transparent ${100 - g}%,
      ${d} ${g}%,
      ${d} 100%
    );`,
    E = () => {
      i("close");
    };
  function I(T) {
    ue.call(this, o, T);
  }
  return (
    (o.$$set = (T) => {
      "width" in T && n(0, (s = T.width)),
        "height" in T && n(1, (a = T.height)),
        "descriptionTitle" in T && n(2, (u = T.descriptionTitle)),
        "descriptionText" in T && n(3, (p = T.descriptionText)),
        "sideBackground" in T && n(8, (d = T.sideBackground)),
        "featuresColPaddingRight" in T && n(4, (m = T.featuresColPaddingRight)),
        "backgroundRightPercents" in T && n(9, (g = T.backgroundRightPercents)),
        "$$scope" in T && n(12, (l = T.$$scope));
    }),
    [s, a, u, p, m, k, E, r, d, g, t, I, l]
  );
}
var Yr = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          U6,
          L6,
          U,
          {
            width: 0,
            height: 1,
            descriptionTitle: 2,
            descriptionText: 3,
            sideBackground: 8,
            featuresColPaddingRight: 4,
            backgroundRightPercents: 9,
          },
          A6
        );
    }
  },
  Mt = Yr;
N();
function j6(o) {
  Z(
    o,
    "svelte-4ljb1p",
    ".description-additional.svelte-4ljb1p{color:#1977f3;align-self:baseline}.margin-left.svelte-4ljb1p{margin-left:5px}"
  );
}
function H6(o) {
  let e, n, t, l, r, i, s;
  return (
    (n = new Cn({ props: { width: "17", height: "17" } })),
    {
      c() {
        (e = v("button")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("span")),
          (l.textContent = `${A(
            "overlay_billing_plan_expire_soon__not_ready_question"
          )}`),
          c(l, "class", "margin-left svelte-4ljb1p"),
          c(e, "class", "description-additional svelte-4ljb1p");
      },
      m(a, u) {
        w(a, e, u),
          C(n, e, null),
          f(e, t),
          f(e, l),
          (r = !0),
          i || ((s = X(e, "click", o[0])), (i = !0));
      },
      p: L,
      i(a) {
        r || (_(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        h(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && $(e), x(n), (i = !1), s();
      },
    }
  );
}
function V6(o) {
  function e(n) {
    ue.call(this, o, n);
  }
  return [e];
}
var Jr = class extends H {
    constructor(e) {
      super(), j(this, e, V6, H6, U, {}, j6);
    }
  },
  on = Jr;
function O6(o) {
  Z(
    o,
    "svelte-bdz071",
    ".sidekick-logo.svelte-bdz071{background:#fff;box-shadow:0 1.6687px 3.3374px rgb(0 0 0 / 0.15);height:24px;width:24px;display:flex;justify-content:center;align-items:center;border-radius:6px}"
  );
}
function R6(o) {
  let e = A("overlay_billing_plan_expire_soon__subtitle_1") + "",
    n,
    t,
    l,
    r,
    i = A("overlay_billing_plan_expire_soon__subtitle_2") + "",
    s,
    a;
  return (
    (l = new Yt({ props: { label: o[0] } })),
    {
      c() {
        (n = V(e)), (t = S()), y(l.$$.fragment), (r = S()), (s = V(i));
      },
      m(u, p) {
        w(u, n, p), w(u, t, p), C(l, u, p), w(u, r, p), w(u, s, p), (a = !0);
      },
      p(u, p) {
        let d = {};
        p & 1 && (d.label = u[0]), l.$set(d);
      },
      i(u) {
        a || (_(l.$$.fragment, u), (a = !0));
      },
      o(u) {
        h(l.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && $(n), u && $(t), x(l, u), u && $(r), u && $(s);
      },
    }
  );
}
function W6(o) {
  let e = A("overlay_billing_plan_expire_soon__actions_upgrade") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function G6(o) {
  let e, n;
  return (
    (e = new pe({
      props: { mod: "light", $$slots: { default: [Z6] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 256 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function F6(o) {
  let e, n;
  return (
    (e = new pe({
      props: { mod: "light", $$slots: { default: [K6] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 256 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Z6(o) {
  let e = A("overlay_billing_plan_expire_soon__not_ready_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function K6(o) {
  let e = A("overlay_billing_plan_expire_soon__actions_invite") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Q6(o) {
  let e, n, t, l, r, i;
  (e = new pe({ props: { $$slots: { default: [W6] }, $$scope: { ctx: o } } })),
    e.$on("click", o[3]);
  let s = [F6, G6],
    a = [];
  function u(p, d) {
    return p[1] ? 1 : 0;
  }
  return (
    (t = u(o, -1)),
    (l = a[t] = s[t](o)),
    {
      c() {
        y(e.$$.fragment), (n = S()), l.c(), (r = fe());
      },
      m(p, d) {
        C(e, p, d), w(p, n, d), a[t].m(p, d), w(p, r, d), (i = !0);
      },
      p(p, d) {
        let m = {};
        d & 256 && (m.$$scope = { dirty: d, ctx: p }), e.$set(m);
        let g = t;
        (t = u(p, d)),
          t === g
            ? a[t].p(p, d)
            : (Q(),
              h(a[g], 1, 1, () => {
                a[g] = null;
              }),
              Y(),
              (l = a[t]),
              l ? l.p(p, d) : ((l = a[t] = s[t](p)), l.c()),
              _(l, 1),
              l.m(r.parentNode, r));
      },
      i(p) {
        i || (_(e.$$.fragment, p), _(l), (i = !0));
      },
      o(p) {
        h(e.$$.fragment, p), h(l), (i = !1);
      },
      d(p) {
        x(e, p), p && $(n), a[t].d(p), p && $(r);
      },
    }
  );
}
function r1(o) {
  let e = A("overlay_billing_plan_expire_soon__feature_title") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Y6(o) {
  let e, n, t, l, r, i, s, a, u;
  (n = new rt({ props: { width: "9px", height: "19px" } })),
    (i = new Yt({ props: { label: o[0] } }));
  let p = !o[1] && r1(o);
  return {
    c() {
      (e = v("div")),
        y(n.$$.fragment),
        (t = S()),
        (l = v("strong")),
        (r = V("Sidekick ")),
        y(i.$$.fragment),
        (s = S()),
        p && p.c(),
        (a = fe()),
        c(e, "class", "sidekick-logo svelte-bdz071");
    },
    m(d, m) {
      w(d, e, m),
        C(n, e, null),
        w(d, t, m),
        w(d, l, m),
        f(l, r),
        C(i, l, null),
        w(d, s, m),
        p && p.m(d, m),
        w(d, a, m),
        (u = !0);
    },
    p(d, m) {
      let g = {};
      m & 1 && (g.label = d[0]),
        i.$set(g),
        d[1]
          ? p && (p.d(1), (p = null))
          : p
          ? p.p(d, m)
          : ((p = r1(d)), p.c(), p.m(a.parentNode, a));
    },
    i(d) {
      u || (_(n.$$.fragment, d), _(i.$$.fragment, d), (u = !0));
    },
    o(d) {
      h(n.$$.fragment, d), h(i.$$.fragment, d), (u = !1);
    },
    d(d) {
      d && $(e),
        x(n),
        d && $(t),
        d && $(l),
        x(i),
        d && $(s),
        p && p.d(d),
        d && $(a);
    },
  };
}
function i1(o) {
  let e, n;
  return (
    (e = new on({})),
    e.$on("click", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function J6(o) {
  let e,
    n,
    t = !o[1] && i1(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[1]
        ? t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y())
        : t
        ? (t.p(l, r), r & 2 && _(t, 1))
        : ((t = i1(l)), t.c(), _(t, 1), t.m(e.parentNode, e));
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function X6(o) {
  let e = A("overlay_billing_plan_expire_soon__feature_label") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function eb(o) {
  let e, n;
  return (
    (e = new Ct({ props: { mode: "gradient", features: o[1] ? Tt : nn } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.features = t[1] ? Tt : nn), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function tb(o) {
  let e, n;
  return (
    (e = new Mt({
      props: {
        width: 690,
        height: 410,
        descriptionTitle: A("overlay_billing_plan_expire_soon__title"),
        descriptionText: A("overlay_billing_plan_expire_soon__description", [
          o[0],
        ]),
        $$slots: {
          "features-list": [eb],
          "features-label": [X6],
          "description-additional": [J6],
          "features-title": [Y6],
          "description-actions": [Q6],
          "description-subtitle": [R6],
        },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1 &&
          (r.descriptionText = A(
            "overlay_billing_plan_expire_soon__description",
            [t[0]]
          )),
          l & 259 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function nb(o, e, n) {
  let t = oe(),
    { planName: l } = e,
    { isTeamVersion: r } = e,
    i = () => {
      t("close");
    },
    s = () => {
      q.actions.showNotReadyToUpgradeModal("billing-plan-expire-soon"),
        q.actions.sendAnalyticsEvent(
          "monetization.expire-soon-modal.not-ready-clicked",
          void 0
        );
    },
    a = () => {
      q.actions.showUpgradeModal({
        source: "monetization.trial-expired-modal.upgrade-clicked",
      }),
        q.actions.sendAnalyticsEvent(
          "monetization.expire-soon-modal.upgrade-clicked",
          void 0
        );
    },
    u = () => {
      q.actions.openLaunchpadWithInvitations(),
        q.actions.sendAnalyticsEvent(
          "monetization.expire-soon-modal.invitations-clicked",
          void 0
        ),
        i();
    };
  function p(d) {
    ue.call(this, o, d);
  }
  return (
    (o.$$set = (d) => {
      "planName" in d && n(0, (l = d.planName)),
        "isTeamVersion" in d && n(1, (r = d.isTeamVersion));
    }),
    [l, r, s, a, u, p]
  );
}
var Xr = class extends H {
    constructor(e) {
      super(), j(this, e, nb, tb, U, { planName: 0, isTeamVersion: 1 }, O6);
    }
  },
  s1 = Xr;
N();
N();
function ob(o) {
  let e, n, t, l, r, i, s, a;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("path")),
        (l = F("defs")),
        (r = F("linearGradient")),
        (i = F("stop")),
        (s = F("stop")),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M11 5C11 4.20435 11.3161 3.44129 11.8787 2.87868C12.4413 2.31607 13.2044 2 14 2C14.7956 2 15.5587 2.31607 16.1213 2.87868C16.6839 3.44129 17 4.20435 17 5V6H19V5C19 3.67392 18.4732 2.40215 17.5355 1.46447C16.5979 0.526784 15.3261 0 14 0C12.6739 0 11.4022 0.526784 10.4645 1.46447C9.52678 2.40215 9 3.67392 9 5V8H4H2H0V20H14V8H11V5ZM9 10H2V18H12V10H11H9ZM7.7071 15.7071C7.5196 15.8946 7.2652 16 7 16C6.7348 16 6.4804 15.8946 6.2929 15.7071C6.1054 15.5196 6 15.2652 6 15V13C6 12.7348 6.1054 12.4804 6.2929 12.2929C6.4804 12.1054 6.7348 12 7 12C7.2652 12 7.5196 12.1054 7.7071 12.2929C7.8946 12.4804 8 12.7348 8 13V15C8 15.2652 7.8946 15.5196 7.7071 15.7071Z"
        ),
        c(n, "fill", "white"),
        c(t, "fill-rule", "evenodd"),
        c(t, "clip-rule", "evenodd"),
        c(
          t,
          "d",
          "M11 5C11 4.20435 11.3161 3.44129 11.8787 2.87868C12.4413 2.31607 13.2044 2 14 2C14.7956 2 15.5587 2.31607 16.1213 2.87868C16.6839 3.44129 17 4.20435 17 5V6H19V5C19 3.67392 18.4732 2.40215 17.5355 1.46447C16.5979 0.526784 15.3261 0 14 0C12.6739 0 11.4022 0.526784 10.4645 1.46447C9.52678 2.40215 9 3.67392 9 5V8H4H2H0V20H14V8H11V5ZM9 10H2V18H12V10H11H9ZM7.7071 15.7071C7.5196 15.8946 7.2652 16 7 16C6.7348 16 6.4804 15.8946 6.2929 15.7071C6.1054 15.5196 6 15.2652 6 15V13C6 12.7348 6.1054 12.4804 6.2929 12.2929C6.4804 12.1054 6.7348 12 7 12C7.2652 12 7.5196 12.1054 7.7071 12.2929C7.8946 12.4804 8 12.7348 8 13V15C8 15.2652 7.8946 15.5196 7.7071 15.7071Z"
        ),
        c(t, "fill", "url(#paint0_linear_2915_817)"),
        c(i, "offset", "0.146091"),
        c(i, "stop-color", "#FF3D3D"),
        c(s, "offset", "1"),
        c(s, "stop-color", "#5956FF"),
        c(r, "id", "paint0_linear_2915_817"),
        c(r, "x1", "-1.18024"),
        c(r, "y1", "20.2427"),
        c(r, "x2", "7.00438"),
        c(r, "y2", "-5.5328"),
        c(r, "gradientUnits", "userSpaceOnUse"),
        c(e, "class", (a = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 19 20"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(u, p) {
      w(u, e, p), f(e, n), f(e, t), f(e, l), f(l, r), f(r, i), f(r, s);
    },
    p(u, [p]) {
      p & 4 && a !== (a = `icon ${u[2]}`) && c(e, "class", a),
        p & 1 && c(e, "width", u[0]),
        p & 2 && c(e, "height", u[1]);
    },
    i: L,
    o: L,
    d(u) {
      u && $(e);
    },
  };
}
function lb(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var ti = class extends H {
    constructor(e) {
      super(), j(this, e, lb, ob, U, { width: 0, height: 1, className: 2 });
    }
  },
  a1 = ti;
N();
function rb(o) {
  let e, n, t, l, r, i, s;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("defs")),
        (l = F("linearGradient")),
        (r = F("stop")),
        (i = F("stop")),
        c(
          n,
          "d",
          "M18 13.7884L16.9866 12.782C16.7365 12.5352 16.5381 12.242 16.4031 11.9193C16.2682 11.5966 16.1991 11.2508 16.2 10.9015V7.4436C16.2 5.55782 15.4414 3.74928 14.0912 2.41583C12.7409 1.08237 10.9095 0.333252 9 0.333252C7.09044 0.333252 5.2591 1.08237 3.90883 2.41583C2.55856 3.74928 1.8 5.55782 1.8 7.4436V10.9015C1.80085 11.2508 1.73179 11.5968 1.5968 11.9195C1.46181 12.2423 1.26354 12.5355 1.0134 12.7824L0 13.7884V17.3333H5.445C5.54978 18.1916 5.96935 18.8694 6.62439 19.4429C7.27938 20.0166 8.12457 20.3333 9 20.3333C9.87543 20.3333 10.7206 20.0166 11.3756 19.4429C12.0307 18.8694 12.4502 18.1916 12.555 17.3333H18V13.7884ZM9 18.5535C8.60103 18.5531 8.21358 18.422 7.89813 18.1807C7.58277 17.9395 7.35732 17.7146 7.25715 17.3333H10.7428C10.6427 17.7146 10.4172 17.9395 10.1019 18.1807C9.78642 18.422 9.39897 18.5531 9 18.5535ZM16.2 15.3333H1.8V14.522L2.28951 14.0361C2.70627 13.6246 3.03659 13.1359 3.26149 12.598C3.48638 12.0601 3.60143 11.4835 3.6 10.9015V7.4436C3.6 6.02927 4.16893 4.67286 5.18162 3.67277C6.19432 2.67268 7.56783 2.11084 9 2.11084C10.4322 2.11084 11.8057 2.67268 12.8183 3.67277C13.8311 4.67286 14.4 6.02927 14.4 7.4436V10.9015C14.3985 11.4834 14.5135 12.0599 14.7384 12.5977C14.9633 13.1355 15.2937 13.6241 15.7105 14.0354L16.2 14.5218V15.3333Z"
        ),
        c(n, "fill", "url(#paint0_linear_2915_823)"),
        c(r, "offset", "0.146091"),
        c(r, "stop-color", "#FF3D3D"),
        c(i, "offset", "1"),
        c(i, "stop-color", "#5956FF"),
        c(l, "id", "paint0_linear_2915_823"),
        c(l, "x1", "-1.11812"),
        c(l, "y1", "20.5759"),
        c(l, "x2", "7.43177"),
        c(l, "y2", "-4.93273"),
        c(l, "gradientUnits", "userSpaceOnUse"),
        c(e, "class", (s = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 18 21"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(a, u) {
      w(a, e, u), f(e, n), f(e, t), f(t, l), f(l, r), f(l, i);
    },
    p(a, [u]) {
      u & 4 && s !== (s = `icon ${a[2]}`) && c(e, "class", s),
        u & 1 && c(e, "width", a[0]),
        u & 2 && c(e, "height", a[1]);
    },
    i: L,
    o: L,
    d(a) {
      a && $(e);
    },
  };
}
function ib(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var ni = class extends H {
    constructor(e) {
      super(), j(this, e, ib, rb, U, { width: 0, height: 1, className: 2 });
    }
  },
  c1 = ni;
N();
function sb(o) {
  let e, n, t, l, r, i, s;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("defs")),
        (l = F("linearGradient")),
        (r = F("stop")),
        (i = F("stop")),
        c(
          n,
          "d",
          "M10 0.666748C8.0222 0.666748 6.08879 1.25324 4.4443 2.35205C2.79981 3.45087 1.51809 5.01265 0.761211 6.83992C0.00433075 8.66715 -0.193699 10.6778 0.192151 12.6176C0.578001 14.5574 1.53041 16.3392 2.92894 17.7378C4.32746 19.1363 6.10929 20.0887 8.0491 20.4746C9.9889 20.8604 11.9996 20.6624 13.8268 19.9055C15.6541 19.1486 17.2159 17.8669 18.3147 16.2224C19.4135 14.5779 20 12.6445 20 10.6667C20 9.35355 19.7413 8.05317 19.2388 6.83992C18.7363 5.62666 17.9997 4.52427 17.0711 3.59568C16.1425 2.6671 15.0401 1.9305 13.8268 1.42795C12.6136 0.925408 11.3132 0.666748 10 0.666748ZM10 18.6667C8.4178 18.6667 6.87104 18.1975 5.55544 17.3185C4.23985 16.4394 3.21447 15.19 2.60897 13.7282C2.00347 12.2664 1.84504 10.6578 2.15372 9.10605C2.4624 7.55418 3.22433 6.12872 4.34315 5.0099C5.46197 3.89108 6.88743 3.12915 8.4393 2.82047C9.9911 2.51179 11.5997 2.67021 13.0615 3.27571C14.5233 3.88122 15.7727 4.90659 16.6518 6.22219C17.5308 7.53778 18 9.08445 18 10.6667C17.9976 12.7877 17.154 14.8211 15.6542 16.3209C14.1544 17.8207 12.121 18.6643 10 18.6667ZM10.6665 4.95825H8.6665V11.9582H14.667V9.95825H10.6665V4.95825Z"
        ),
        c(n, "fill", "url(#paint0_linear_2915_827)"),
        c(r, "offset", "0.146091"),
        c(r, "stop-color", "#FF3D3D"),
        c(i, "offset", "1"),
        c(i, "stop-color", "#5956FF"),
        c(l, "id", "paint0_linear_2915_827"),
        c(l, "x1", "-1.24236"),
        c(l, "y1", "20.9094"),
        c(l, "x2", "6.60311"),
        c(l, "y2", "-5.09831"),
        c(l, "gradientUnits", "userSpaceOnUse"),
        c(e, "class", (s = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 20 21"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(a, u) {
      w(a, e, u), f(e, n), f(e, t), f(t, l), f(l, r), f(l, i);
    },
    p(a, [u]) {
      u & 4 && s !== (s = `icon ${a[2]}`) && c(e, "class", s),
        u & 1 && c(e, "width", a[0]),
        u & 2 && c(e, "height", a[1]);
    },
    i: L,
    o: L,
    d(a) {
      a && $(e);
    },
  };
}
function ab(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var oi = class extends H {
    constructor(e) {
      super(), j(this, e, ab, sb, U, { width: 0, height: 1, className: 2 });
    }
  },
  u1 = oi;
N();
function cb(o) {
  let e, n, t, l, r, i, s;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        (t = F("defs")),
        (l = F("linearGradient")),
        (r = F("stop")),
        (i = F("stop")),
        c(
          n,
          "d",
          "M15.1206 7.72101H10.6423L11.6862 4.07105C11.886 3.37221 11.8084 2.62318 11.4694 1.98023C11.1304 1.33728 10.5564 0.850108 9.86689 0.620346L8.00581 0L3.83681 7.72101H0V19H5.63823H14.3929C14.3929 19 17 16.5718 17 10.6386V9.60087C17 9.10225 16.802 8.62413 16.4495 8.27159C16.097 7.91906 15.619 7.72101 15.1206 7.72101ZM1.87941 9.60087H3.75882V17.1202H1.87941V9.60087ZM15.1206 10.6386C15.236 12.9115 14.6737 15.1674 13.505 17.1202H5.63823V8.34051L8.90915 2.28277L9.27272 2.40383C9.50285 2.48 9.69455 2.64233 9.8076 2.85677C9.92074 3.07122 9.94639 3.32112 9.8793 3.5541L8.83538 7.20406L8.14996 9.60087H15.1206V10.6386Z"
        ),
        c(n, "fill", "url(#paint0_linear_2915_831)"),
        c(r, "offset", "0.146091"),
        c(r, "stop-color", "#FF3D3D"),
        c(i, "offset", "1"),
        c(i, "stop-color", "#5956FF"),
        c(l, "id", "paint0_linear_2915_831"),
        c(l, "x1", "-1.056"),
        c(l, "y1", "19.2305"),
        c(l, "x2", "7.10445"),
        c(l, "y2", "-4.97384"),
        c(l, "gradientUnits", "userSpaceOnUse"),
        c(e, "class", (s = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 17 19"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(a, u) {
      w(a, e, u), f(e, n), f(e, t), f(t, l), f(l, r), f(l, i);
    },
    p(a, [u]) {
      u & 4 && s !== (s = `icon ${a[2]}`) && c(e, "class", s),
        u & 1 && c(e, "width", a[0]),
        u & 2 && c(e, "height", a[1]);
    },
    i: L,
    o: L,
    d(a) {
      a && $(e);
    },
  };
}
function ub(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var li = class extends H {
    constructor(e) {
      super(), j(this, e, ub, cb, U, { width: 0, height: 1, className: 2 });
    }
  },
  p1 = li;
function pb(o) {
  Z(
    o,
    "svelte-u7isch",
    ".content.svelte-u7isch{padding:27px 67px 0}.main.svelte-u7isch .button{height:40px;margin:auto;width:166px;display:flex;margin-bottom:21px}.info.svelte-u7isch{text-align:center;color:var(--paid-trial-modal-info-text);background:var(--paid-trial-modal-info-background);border-radius:15px;font-weight:400;font-size:12px;line-height:16px;padding:14px 60px;margin:0 45px 21px}.reminder.svelte-u7isch{text-transform:uppercase;color:var(--paid-trial-modal-reminder-text);padding:4px 10px;position:absolute;bottom:10px;right:10px;border-radius:100px;background-color:var(--paid-trial-modal-reminder-background);cursor:pointer}.logo.svelte-u7isch{width:70px;height:70px;border-radius:64px;background-color:var(--paid-trial-modal-logo-background);position:absolute;left:190px;top:-35px;display:flex;justify-content:center;align-items:center}.header.svelte-u7isch{background-color:rgb(255 166 112 / 0.15);border-radius:20px 20px 25px 25px;padding:53px 42px 36px;display:flex;align-items:center;justify-content:center}.title.svelte-u7isch{font-size:26px;margin:0;color:var(--paid-trial-modal-title)}.item-title.svelte-u7isch{font-size:18px;color:var(--paid-trial-modal-item-title);margin-bottom:6px;font-weight:600}.item-description.svelte-u7isch{color:var(--paid-trial-modal-item-description);font-size:12px;line-height:14px}.item-info.svelte-u7isch{display:flex;flex-direction:column;align-items:start}.items.svelte-u7isch{display:flex;flex-direction:column}.item.svelte-u7isch{display:flex;align-items:start}.image.svelte-u7isch{margin-right:20px;background-color:var(--paid-trial-modal-icon-background);padding:8px;margin-bottom:32px;border-radius:37px;width:40px;height:40px;box-shadow:0 2px 10px 0 rgb(0 0 0 / 0.05)}.vertical-line.svelte-u7isch{position:absolute;width:2px;height:219px;left:86px;z-index:-1;background-color:var(--paid-trial-modal-line-color)}.peach-background.svelte-u7isch{background-color:var(--paid-trial-modal-icon-peach-background)}"
  );
}
function fb(o) {
  let e = A("overlay_paid_trial_modal_start_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function f1(o) {
  let e, n, t;
  return {
    c() {
      (e = v("span")),
        (e.textContent = `${A("overlay_paid_trial_modal_reminder_button")}`),
        c(e, "class", "reminder svelte-u7isch");
    },
    m(l, r) {
      w(l, e, r),
        n || ((t = [X(e, "click", o[3]), X(e, "keydown", o[2])]), (n = !0));
    },
    p: L,
    d(l) {
      l && $(e), (n = !1), Se(t);
    },
  };
}
function db(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne,
    te,
    le,
    re,
    se,
    ae,
    me,
    ce,
    ke,
    Re,
    Pe,
    De,
    _e,
    Le,
    ze,
    Xe,
    xe,
    be,
    he,
    de,
    Ie = A("overlay_paid_trial_modal_info_text") + "",
    Ke,
    Ue,
    ge,
    Be,
    _t;
  (n = new rt({
    props: { width: "22px", height: "44px", className: "collection-image" },
  })),
    (b = new a1({ props: { width: "24px", height: "24px" } })),
    (z = new c1({ props: { width: "24px", height: "24px" } })),
    (re = new u1({ props: { width: "24px", height: "24px" } })),
    (_e = new p1({ props: { width: "24px", height: "24px" } })),
    (Ue = new pe({
      props: {
        className: "button",
        $$slots: { default: [fb] },
        $$scope: { ctx: o },
      },
    })),
    Ue.$on("click", o[1]);
  let et = o[0] && f1(o);
  return {
    c() {
      (e = v("div")),
        y(n.$$.fragment),
        (t = S()),
        (l = v("section")),
        (r = v("h2")),
        (r.textContent = `${A("overlay_paid_trial_modal_title")}`),
        (i = S()),
        (s = v("section")),
        (a = v("div")),
        (u = v("div")),
        (p = v("span")),
        (d = S()),
        (m = v("div")),
        (g = v("div")),
        y(b.$$.fragment),
        (k = S()),
        (E = v("div")),
        (I = v("div")),
        (I.textContent = `${A("overlay_paid_trial_modal_item_title_first")}`),
        (T = S()),
        (P = v("div")),
        (P.textContent = `${A(
          "overlay_paid_trial_modal_item_description_first"
        )}`),
        (M = S()),
        (B = v("div")),
        (O = v("div")),
        y(z.$$.fragment),
        (G = S()),
        (W = v("div")),
        (D = v("div")),
        (D.textContent = `${A("overlay_paid_trial_modal_item_title_second")}`),
        (R = S()),
        (K = v("div")),
        (K.textContent = `${A(
          "overlay_paid_trial_modal_item_description_second"
        )}`),
        (ne = S()),
        (te = v("div")),
        (le = v("div")),
        y(re.$$.fragment),
        (se = S()),
        (ae = v("div")),
        (me = v("div")),
        (me.textContent = `${A("overlay_paid_trial_modal_item_title_third")}`),
        (ce = S()),
        (ke = v("div")),
        (ke.textContent = `${A(
          "overlay_paid_trial_modal_item_description_third"
        )}`),
        (Re = S()),
        (Pe = v("div")),
        (De = v("div")),
        y(_e.$$.fragment),
        (Le = S()),
        (ze = v("div")),
        (Xe = v("div")),
        (Xe.textContent = `${A("overlay_paid_trial_modal_item_title_last")}`),
        (xe = S()),
        (be = v("div")),
        (be.textContent = `${A(
          "overlay_paid_trial_modal_item_description_last"
        )}`),
        (he = S()),
        (de = v("div")),
        (Ke = S()),
        y(Ue.$$.fragment),
        (ge = S()),
        et && et.c(),
        (Be = fe()),
        c(e, "class", "logo svelte-u7isch"),
        c(r, "class", "title svelte-u7isch"),
        c(l, "class", "header svelte-u7isch"),
        c(p, "class", "vertical-line svelte-u7isch"),
        c(g, "class", "image peach-background svelte-u7isch"),
        c(I, "class", "item-title svelte-u7isch"),
        c(P, "class", "item-description svelte-u7isch"),
        c(E, "class", "item-info svelte-u7isch"),
        c(m, "class", "item svelte-u7isch"),
        c(O, "class", "image svelte-u7isch"),
        c(D, "class", "item-title svelte-u7isch"),
        c(K, "class", "item-description svelte-u7isch"),
        c(W, "class", "item-info svelte-u7isch"),
        c(B, "class", "item svelte-u7isch"),
        c(le, "class", "image svelte-u7isch"),
        c(me, "class", "item-title svelte-u7isch"),
        c(ke, "class", "item-description svelte-u7isch"),
        c(ae, "class", "item-info svelte-u7isch"),
        c(te, "class", "item svelte-u7isch"),
        c(De, "class", "image svelte-u7isch"),
        c(Xe, "class", "item-title svelte-u7isch"),
        c(be, "class", "item-description svelte-u7isch"),
        c(ze, "class", "item-info svelte-u7isch"),
        c(Pe, "class", "item svelte-u7isch"),
        c(u, "class", "content svelte-u7isch"),
        c(a, "class", "items svelte-u7isch"),
        c(de, "class", "info svelte-u7isch"),
        c(s, "class", "main svelte-u7isch");
    },
    m(Ee, ot) {
      w(Ee, e, ot),
        C(n, e, null),
        w(Ee, t, ot),
        w(Ee, l, ot),
        f(l, r),
        w(Ee, i, ot),
        w(Ee, s, ot),
        f(s, a),
        f(a, u),
        f(u, p),
        f(u, d),
        f(u, m),
        f(m, g),
        C(b, g, null),
        f(m, k),
        f(m, E),
        f(E, I),
        f(E, T),
        f(E, P),
        f(u, M),
        f(u, B),
        f(B, O),
        C(z, O, null),
        f(B, G),
        f(B, W),
        f(W, D),
        f(W, R),
        f(W, K),
        f(u, ne),
        f(u, te),
        f(te, le),
        C(re, le, null),
        f(te, se),
        f(te, ae),
        f(ae, me),
        f(ae, ce),
        f(ae, ke),
        f(u, Re),
        f(u, Pe),
        f(Pe, De),
        C(_e, De, null),
        f(Pe, Le),
        f(Pe, ze),
        f(ze, Xe),
        f(ze, xe),
        f(ze, be),
        f(s, he),
        f(s, de),
        (de.innerHTML = Ie),
        f(s, Ke),
        C(Ue, s, null),
        w(Ee, ge, ot),
        et && et.m(Ee, ot),
        w(Ee, Be, ot),
        (_t = !0);
    },
    p(Ee, ot) {
      let bt = {};
      ot & 32 && (bt.$$scope = { dirty: ot, ctx: Ee }),
        Ue.$set(bt),
        Ee[0]
          ? et
            ? et.p(Ee, ot)
            : ((et = f1(Ee)), et.c(), et.m(Be.parentNode, Be))
          : et && (et.d(1), (et = null));
    },
    i(Ee) {
      _t ||
        (_(n.$$.fragment, Ee),
        _(b.$$.fragment, Ee),
        _(z.$$.fragment, Ee),
        _(re.$$.fragment, Ee),
        _(_e.$$.fragment, Ee),
        _(Ue.$$.fragment, Ee),
        (_t = !0));
    },
    o(Ee) {
      h(n.$$.fragment, Ee),
        h(b.$$.fragment, Ee),
        h(z.$$.fragment, Ee),
        h(re.$$.fragment, Ee),
        h(_e.$$.fragment, Ee),
        h(Ue.$$.fragment, Ee),
        (_t = !1);
    },
    d(Ee) {
      Ee && $(e),
        x(n),
        Ee && $(t),
        Ee && $(l),
        Ee && $(i),
        Ee && $(s),
        x(b),
        x(z),
        x(re),
        x(_e),
        x(Ue),
        Ee && $(ge),
        et && et.d(Ee),
        Ee && $(Be);
    },
  };
}
function mb(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 450,
        height: 600,
        maxHeight: 600,
        borderRadius: 20,
        className: "paid-trial-modal",
        $$slots: { default: [db] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 33 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function _b(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [mb] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 33 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function gb(o, e, n) {
  let { shouldShowReminder: t } = e,
    l = oe(),
    r = () => {
      q.actions.sendAnalyticsEvent(
        "monetization.paid-trial-modal.start-clicked"
      ),
        q.actions.disableShowingPaidTrialModal(),
        q.actions.openPaidTrialPortal(),
        l("close");
    },
    i = (a) => {
      (a.key !== "Enter" && a.key !== "Escape") || l("close");
    },
    s = () => {
      q.actions.updatePaidTrialModalShowedDay(), l("close");
    };
  return (
    ye(() => {
      q.actions.sendAnalyticsEvent("monetization.paid-trial-modal.auto-opened");
    }),
    (o.$$set = (a) => {
      "shouldShowReminder" in a && n(0, (t = a.shouldShowReminder));
    }),
    [t, r, i, s]
  );
}
var ri = class extends H {
    constructor(e) {
      super(), j(this, e, gb, _b, U, { shouldShowReminder: 0 }, pb);
    }
  },
  d1 = ri;
N();
function hb(o) {
  Z(
    o,
    "svelte-bdz071",
    ".sidekick-logo.svelte-bdz071{background:#fff;box-shadow:0 1.6687px 3.3374px rgb(0 0 0 / 0.15);height:24px;width:24px;display:flex;justify-content:center;align-items:center;border-radius:6px}"
  );
}
function vb(o) {
  let e = A("overlay_billing_plan_has_expire__subtitle_1") + "",
    n,
    t,
    l,
    r,
    i = A("overlay_billing_plan_has_expire__subtitle_2") + "",
    s,
    a;
  return (
    (l = new Yt({ props: { label: o[0] } })),
    {
      c() {
        (n = V(e)), (t = S()), y(l.$$.fragment), (r = S()), (s = V(i));
      },
      m(u, p) {
        w(u, n, p), w(u, t, p), C(l, u, p), w(u, r, p), w(u, s, p), (a = !0);
      },
      p(u, p) {
        let d = {};
        p & 1 && (d.label = u[0]), l.$set(d);
      },
      i(u) {
        a || (_(l.$$.fragment, u), (a = !0));
      },
      o(u) {
        h(l.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && $(n), u && $(t), x(l, u), u && $(r), u && $(s);
      },
    }
  );
}
function bb(o) {
  let e = A("overlay_billing_plan_has_expire__actions_upgrade") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function kb(o) {
  let e, n;
  return (
    (e = new pe({
      props: { mod: "light", $$slots: { default: [$b] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 256 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function wb(o) {
  let e, n;
  return (
    (e = new pe({
      props: { mod: "light", $$slots: { default: [yb] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 256 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function $b(o) {
  let e = A("overlay_billing_plan_expire_soon__not_ready_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function yb(o) {
  let e = A("overlay_billing_plan_has_expire__actions_invite") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Cb(o) {
  let e, n, t, l, r, i;
  (e = new pe({ props: { $$slots: { default: [bb] }, $$scope: { ctx: o } } })),
    e.$on("click", o[3]);
  let s = [wb, kb],
    a = [];
  function u(p, d) {
    return p[1] ? 1 : 0;
  }
  return (
    (t = u(o, -1)),
    (l = a[t] = s[t](o)),
    {
      c() {
        y(e.$$.fragment), (n = S()), l.c(), (r = fe());
      },
      m(p, d) {
        C(e, p, d), w(p, n, d), a[t].m(p, d), w(p, r, d), (i = !0);
      },
      p(p, d) {
        let m = {};
        d & 256 && (m.$$scope = { dirty: d, ctx: p }), e.$set(m);
        let g = t;
        (t = u(p, d)),
          t === g
            ? a[t].p(p, d)
            : (Q(),
              h(a[g], 1, 1, () => {
                a[g] = null;
              }),
              Y(),
              (l = a[t]),
              l ? l.p(p, d) : ((l = a[t] = s[t](p)), l.c()),
              _(l, 1),
              l.m(r.parentNode, r));
      },
      i(p) {
        i || (_(e.$$.fragment, p), _(l), (i = !0));
      },
      o(p) {
        h(e.$$.fragment, p), h(l), (i = !1);
      },
      d(p) {
        x(e, p), p && $(n), a[t].d(p), p && $(r);
      },
    }
  );
}
function m1(o) {
  let e = A("overlay_billing_plan_has_expire__feature_title") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function xb(o) {
  let e, n, t, l, r, i, s, a, u;
  (n = new rt({ props: { width: "9px", height: "19px" } })),
    (i = new Yt({ props: { label: o[0] } }));
  let p = !o[1] && m1(o);
  return {
    c() {
      (e = v("div")),
        y(n.$$.fragment),
        (t = S()),
        (l = v("strong")),
        (r = V("Sidekick ")),
        y(i.$$.fragment),
        (s = S()),
        p && p.c(),
        (a = fe()),
        c(e, "class", "sidekick-logo svelte-bdz071");
    },
    m(d, m) {
      w(d, e, m),
        C(n, e, null),
        w(d, t, m),
        w(d, l, m),
        f(l, r),
        C(i, l, null),
        w(d, s, m),
        p && p.m(d, m),
        w(d, a, m),
        (u = !0);
    },
    p(d, m) {
      let g = {};
      m & 1 && (g.label = d[0]),
        i.$set(g),
        d[1]
          ? p && (p.d(1), (p = null))
          : p
          ? p.p(d, m)
          : ((p = m1(d)), p.c(), p.m(a.parentNode, a));
    },
    i(d) {
      u || (_(n.$$.fragment, d), _(i.$$.fragment, d), (u = !0));
    },
    o(d) {
      h(n.$$.fragment, d), h(i.$$.fragment, d), (u = !1);
    },
    d(d) {
      d && $(e),
        x(n),
        d && $(t),
        d && $(l),
        x(i),
        d && $(s),
        p && p.d(d),
        d && $(a);
    },
  };
}
function _1(o) {
  let e, n;
  return (
    (e = new on({})),
    e.$on("click", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Sb(o) {
  let e,
    n,
    t = !o[1] && _1(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[1]
        ? t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y())
        : t
        ? (t.p(l, r), r & 2 && _(t, 1))
        : ((t = _1(l)), t.c(), _(t, 1), t.m(e.parentNode, e));
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function Ab(o) {
  let e = A("overlay_billing_plan_has_expire__feature_label") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Eb(o) {
  let e, n;
  return (
    (e = new Ct({ props: { mode: "gradient", features: o[1] ? Tt : nn } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.features = t[1] ? Tt : nn), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Ib(o) {
  let e, n;
  return (
    (e = new Mt({
      props: {
        width: 690,
        height: 384,
        descriptionTitle: A("overlay_billing_plan_has_expire__title"),
        descriptionText: A("overlay_billing_plan_has_expire__description", [
          o[0],
        ]),
        $$slots: {
          "features-list": [Eb],
          "features-label": [Ab],
          "description-additional": [Sb],
          "features-title": [xb],
          "description-actions": [Cb],
          "description-subtitle": [vb],
        },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 1 &&
          (r.descriptionText = A(
            "overlay_billing_plan_has_expire__description",
            [t[0]]
          )),
          l & 259 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Tb(o, e, n) {
  let t = oe(),
    { planName: l } = e,
    { isTeamVersion: r } = e,
    i = () => {
      t("close");
    },
    s = () => {
      q.actions.showNotReadyToUpgradeModal("billing-plan-has-expired"),
        q.actions.sendAnalyticsEvent(
          "monetization.trial-expired-modal.not-ready-clicked",
          void 0
        );
    },
    a = () => {
      q.actions.showUpgradeModal({
        source: "monetization.trial-expired-modal.upgrade-clicked",
      }),
        q.actions.sendAnalyticsEvent(
          "monetization.trial-expired-modal.upgrade-clicked",
          void 0
        );
    },
    u = () => {
      q.actions.openLaunchpadWithInvitations(),
        q.actions.sendAnalyticsEvent(
          "monetization.trial-expired-modal.invitations-clicked",
          void 0
        ),
        i();
    };
  ye(() => {
    q.actions.sendAnalyticsEvent(
      "monetization.trial-expired-modal.auto-opened",
      void 0
    );
  });
  function p(d) {
    ue.call(this, o, d);
  }
  return (
    (o.$$set = (d) => {
      "planName" in d && n(0, (l = d.planName)),
        "isTeamVersion" in d && n(1, (r = d.isTeamVersion));
    }),
    [l, r, s, a, u, p]
  );
}
var ii = class extends H {
    constructor(e) {
      super(), j(this, e, Tb, Ib, U, { planName: 0, isTeamVersion: 1 }, hb);
    }
  },
  g1 = ii;
N();
function Mb(o) {
  Z(
    o,
    "svelte-oea2g9",
    ".subtitle-row.svelte-oea2g9{display:flex;flex-direction:row;align-items:center;column-gap:9px;font-weight:700;font-size:18px;color:var(--billing-modal-col-title)}.description-prepend.svelte-oea2g9{letter-spacing:0.215em;text-transform:uppercase;color:#757575;margin-bottom:10px;margin-top:10px}.sidekick-logo.svelte-oea2g9{background:#fff;box-shadow:0 1.6687px 3.3374px rgb(0 0 0 / 0.15);height:34px;width:34px;display:flex;justify-content:center;align-items:center;border-radius:10px}.image-col.svelte-oea2g9{display:flex;flex-direction:column;justify-content:center;margin-right:-48px}.billing-image.svelte-oea2g9{min-width:320px;min-height:372px;object-fit:contain;margin-left:-9px;box-shadow:0 16.9675px 28.2792px rgb(0 0 0 / 0.2);border-radius:5.2735px 0 0 5.2735px}"
  );
}
function Pb(o) {
  let e, n, t, l, r, i, s, a;
  return (
    (t = new rt({ props: { width: "13px", height: "28px" } })),
    (s = new js({})),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          (i = V("Sidekick ")),
          y(s.$$.fragment),
          c(n, "class", "sidekick-logo svelte-oea2g9"),
          c(e, "class", "subtitle-row svelte-oea2g9");
      },
      m(u, p) {
        w(u, e, p),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          f(r, i),
          C(s, r, null),
          (a = !0);
      },
      p: L,
      i(u) {
        a || (_(t.$$.fragment, u), _(s.$$.fragment, u), (a = !0));
      },
      o(u) {
        h(t.$$.fragment, u), h(s.$$.fragment, u), (a = !1);
      },
      d(u) {
        u && $(e), x(t), x(s);
      },
    }
  );
}
function zb(o) {
  let e;
  return {
    c() {
      (e = v("span")),
        (e.textContent = `${A(
          "overlay_billing_limits_reached__description_prepend"
        )}`),
        c(e, "class", "description-prepend svelte-oea2g9");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function Bb(o) {
  let e = A("overlay_billing_limits_reached__action_upgrade") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Nb(o) {
  let e = A("overlay_billing_limits_reached__action_invite") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function qb(o) {
  let e, n, t, l;
  return (
    (e = new pe({
      props: { $$slots: { default: [Bb] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[1]),
    (t = new pe({
      props: { mod: "light", $$slots: { default: [Nb] }, $$scope: { ctx: o } },
    })),
    t.$on("click", o[2]),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 128 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
        let a = {};
        i & 128 && (a.$$scope = { dirty: i, ctx: r }), t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function Db(o) {
  let e, n;
  return (
    (e = new on({})),
    e.$on("click", o[0]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Lb(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.innerHTML =
          '<img width="320" height="372" class="billing-image svelte-oea2g9" alt="billing" src="/shared/assets/images/billing_screen_preview.png"/>'),
        c(e, "class", "image-col svelte-oea2g9");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function Ub(o) {
  let e, n;
  return (
    (e = new Mt({
      props: {
        width: 690,
        height: 453,
        backgroundRightPercents: 41.75,
        descriptionTitle: A("overlay_billing_limits_reached__title"),
        descriptionText: A("overlay_billing_limits_reached__text"),
        $$slots: {
          "features-col": [Lb],
          "description-additional": [Db],
          "description-actions": [qb],
          "description-prepend": [zb],
          "description-subtitle": [Pb],
        },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 128 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function jb(o, e, n) {
  let t = oe(),
    { source: l } = e,
    r = () => {
      t("close");
    },
    i = () => {
      q.actions.showNotReadyToUpgradeModal("billing-limits-reached"),
        q.actions.sendAnalyticsEvent(
          "monetization.limit-modal.not-ready-clicked",
          void 0
        );
    },
    s = () => {
      q.actions.showUpgradeModal({
        source: "monetization.limit-modal.upgrade-clicked",
      }),
        q.actions.sendAnalyticsEvent(
          "monetization.limit-modal.upgrade-clicked",
          void 0
        );
    },
    a = () => {
      q.actions.openLaunchpadWithInvitations(),
        q.actions.sendAnalyticsEvent(
          "monetization.limit-modal.invitations-clicked",
          void 0
        ),
        r();
    };
  ye(() => {
    q.actions.sendAnalyticsEvent("monetization.limit-modal.auto-opened", {
      source: l,
    });
  });
  function u(p) {
    ue.call(this, o, p);
  }
  return (
    (o.$$set = (p) => {
      "source" in p && n(3, (l = p.source));
    }),
    [i, s, a, l, u]
  );
}
var si = class extends H {
    constructor(e) {
      super(), j(this, e, jb, Ub, U, { source: 3 }, Mb);
    }
  },
  h1 = si;
N();
N();
function Hb(o) {
  Z(
    o,
    "svelte-lh60r0",
    ".container.svelte-lh60r0{background-color:rgb(25 119 243 / 0.06);min-width:291px;max-width:300px;margin-bottom:36px;padding:18px 21px;border-radius:10px;box-shadow:0 5px 30px 0 rgb(0 0 0 / 0.15)}.feedback-title.svelte-lh60r0{font-size:14px;font-weight:700}.success.svelte-lh60r0{background-color:rgb(89 182 75 / 0.15);border-radius:10px;padding:18px 125px 17px 21px;height:52px;margin-bottom:70px}.section.svelte-lh60r0{width:100%}.section.svelte-lh60r0 div .dropdown-block.dropdown{width:249px;height:30px;background-color:rgb(0 0 0 / 0.08);margin-bottom:16px;margin-top:7px;font-size:12px}.section.svelte-lh60r0 .dropdown .dropdown-button{border-radius:4px;padding:6px 10px}.section.svelte-lh60r0 div .not-ready-reasons .option{padding:8px 10px;border-radius:3px}.section.svelte-lh60r0 div .not-ready-reasons .option.selected{background-color:rgb(25 119 243 / 0.08)}"
  );
}
function Vb(o) {
  let e, n, t, l, r, i, s;
  return (
    (l = new vt({
      props: {
        placeholder: A(
          "overlay_billing_not_ready__reason_dropdown_placeholder"
        ),
        listClassName: "not-ready-reasons",
        className: "dropdown-block",
        options: o[2],
        value: void 0,
      },
    })),
    l.$on("select", o[5]),
    (i = new pe({
      props: {
        disabled: !o[0],
        $$slots: { default: [Rb] },
        $$scope: { ctx: o },
      },
    })),
    i.$on("click", o[4]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (n.textContent = `${A(
            "overlay_billing_not_ready__reason_dropdown_title"
          )}`),
          (t = S()),
          y(l.$$.fragment),
          (r = S()),
          y(i.$$.fragment),
          c(n, "class", "feedback-title svelte-lh60r0"),
          c(e, "class", "container svelte-lh60r0");
      },
      m(a, u) {
        w(a, e, u),
          f(e, n),
          f(e, t),
          C(l, e, null),
          f(e, r),
          C(i, e, null),
          (s = !0);
      },
      p(a, u) {
        let p = {};
        u & 1 && (p.disabled = !a[0]),
          u & 64 && (p.$$scope = { dirty: u, ctx: a }),
          i.$set(p);
      },
      i(a) {
        s || (_(l.$$.fragment, a), _(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        h(l.$$.fragment, a), h(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && $(e), x(l), x(i);
      },
    }
  );
}
function Ob(o) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.textContent = `${A("overlay_billing_not_ready_feedback_sent")}`),
        c(e, "class", "success svelte-lh60r0");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    i: L,
    o: L,
    d(n) {
      n && $(e);
    },
  };
}
function Rb(o) {
  let e = A("overlay_billing_not_ready_feedback_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function Wb(o) {
  let e,
    n,
    t,
    l,
    r = [Ob, Vb],
    i = [];
  function s(a, u) {
    return a[1] ? 0 : 1;
  }
  return (
    (n = s(o, -1)),
    (t = i[n] = r[n](o)),
    {
      c() {
        (e = v("section")), t.c(), c(e, "class", "section svelte-lh60r0");
      },
      m(a, u) {
        w(a, e, u), i[n].m(e, null), (l = !0);
      },
      p(a, [u]) {
        let p = n;
        (n = s(a, u)),
          n === p
            ? i[n].p(a, u)
            : (Q(),
              h(i[p], 1, 1, () => {
                i[p] = null;
              }),
              Y(),
              (t = i[n]),
              t ? t.p(a, u) : ((t = i[n] = r[n](a)), t.c()),
              _(t, 1),
              t.m(e, null));
      },
      i(a) {
        l || (_(t), (l = !0));
      },
      o(a) {
        h(t), (l = !1);
      },
      d(a) {
        a && $(e), i[n].d();
      },
    }
  );
}
function Gb(o, e, n) {
  let t = null,
    l = !1,
    r = [
      {
        label: A("overlay_billing_not_ready__reason_features"),
        value: "missing features",
      },
      {
        label: A("overlay_billing_not_ready__reason_technical"),
        value: "technical issues",
      },
      {
        label: A("overlay_billing_not_ready__reason_expectations"),
        value: "not meet expectations",
      },
      { label: A("overlay_billing_not_ready__reason_other"), value: "other" },
    ],
    i = (u) => {
      n(0, (t = u));
    };
  return [
    t,
    l,
    r,
    i,
    () => {
      t &&
        (n(1, (l = !0)),
        q.actions.sendAnalyticsEvent(
          "monetization.not-ready-modal.reason-missing",
          { reason: t }
        ));
    },
    (u) => i(u.detail.value),
  ];
}
var ai = class extends H {
    constructor(e) {
      super(), j(this, e, Gb, Wb, U, {}, Hb);
    }
  },
  v1 = ai;
function Fb(o) {
  Z(
    o,
    "svelte-1l78igp",
    ".subtitle-row.svelte-1l78igp{display:flex;flex-direction:row;align-items:center;column-gap:9px;font-weight:700;font-size:18px;color:var(--billing-modal-col-title)}.free-plan-text.svelte-1l78igp{color:#f58e78}.sidekick-logo.svelte-1l78igp{background:#fff;box-shadow:0 1.6687px 3.3374px rgb(0 0 0 / 0.15);height:34px;width:34px;display:flex;justify-content:center;align-items:center;border-radius:10px}.features-title.svelte-1l78igp{font-weight:700;font-size:16px}.features-label.svelte-1l78igp{display:flex;flex-direction:row;justify-content:space-between;letter-spacing:0.08em;text-transform:uppercase}"
  );
}
function Zb(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[1].prefix + "",
    s,
    a,
    u,
    p;
  return (
    (t = new rt({ props: { width: "13px", height: "28px" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          (s = V(i)),
          (a = S()),
          (u = v("span")),
          (u.textContent = "Free"),
          c(n, "class", "sidekick-logo svelte-1l78igp"),
          c(u, "class", "free-plan-text svelte-1l78igp"),
          c(e, "class", "subtitle-row svelte-1l78igp");
      },
      m(d, m) {
        w(d, e, m),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          f(r, s),
          f(r, a),
          f(r, u),
          (p = !0);
      },
      p(d, m) {
        (!p || m & 2) && i !== (i = d[1].prefix + "") && ee(s, i);
      },
      i(d) {
        p || (_(t.$$.fragment, d), (p = !0));
      },
      o(d) {
        h(t.$$.fragment, d), (p = !1);
      },
      d(d) {
        d && $(e), x(t);
      },
    }
  );
}
function Kb(o) {
  let e, n;
  return (
    (e = new v1({})),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Qb(o) {
  let e;
  return {
    c() {
      (e = v("span")),
        (e.textContent = `${A("overlay_billing_not_ready__features_title", [
          o[4],
        ])}`),
        c(e, "class", "features-title svelte-1l78igp");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function Yb(o) {
  let e, n, t, l;
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (n.textContent = `${A("overlay_billing_not_ready__features_label_1")}`),
        (t = S()),
        (l = v("span")),
        (l.textContent = `${A("overlay_billing_not_ready__features_label_2")}`),
        c(e, "class", "features-label svelte-1l78igp");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, t), f(e, l);
    },
    p: L,
    d(r) {
      r && $(e);
    },
  };
}
function Jb(o) {
  let e, n;
  return (
    (e = new Ct({ props: { mode: "negative", features: o[2], limits: o[0] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.limits = t[0]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Xb(o) {
  let e, n;
  return (
    (e = new Mt({
      props: {
        width: 715,
        height: 424,
        descriptionTitle: A("overlay_billing_not_ready__title"),
        descriptionText: A("overlay_billing_not_ready__text", [o[5], o[3]]),
        sideBackground: "rgba(245, 97, 48, 0.15)",
        featuresColPaddingRight: 30,
        $$slots: {
          "features-list": [Jb],
          "features-label": [Yb],
          "features-title": [Qb],
          "description-actions": [Kb],
          "description-subtitle": [Zb],
        },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 515 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function e7(o, e, n) {
  let t = oe(),
    { limits: l } = e,
    { planName: r } = e,
    { isTeamVersion: i } = e,
    s = i ? Vn : nf,
    a = `${r.prefix} Pro`,
    u = `${r.prefix} Free`,
    p = `Sidekick ${r.prefix} Free`,
    d = () => {
      q.actions.sendAnalyticsEvent(
        "monetization.not-ready-modal.close-action-clicked",
        { "open-previous-modal": !1 }
      ),
        t("close");
    };
  return (
    (o.$$set = (m) => {
      "limits" in m && n(0, (l = m.limits)),
        "planName" in m && n(1, (r = m.planName)),
        "isTeamVersion" in m && n(7, (i = m.isTeamVersion));
    }),
    [l, r, s, a, u, p, d, i]
  );
}
var ci = class extends H {
    constructor(e) {
      super(),
        j(this, e, e7, Xb, U, { limits: 0, planName: 1, isTeamVersion: 7 }, Fb);
    }
  },
  b1 = ci;
N();
N();
function t7(o) {
  Z(
    o,
    "svelte-gtp4wt",
    ".footer.svelte-gtp4wt{display:flex;flex-direction:column;padding:12px 0 12px 12px;min-height:96px;border-top:1px solid transparent}.footer-scrolling.svelte-gtp4wt{border-top-color:rgb(0 0 0 / 0.08)}.footer-submit-btn.svelte-gtp4wt{display:flex;flex-direction:row;justify-content:center;margin-bottom:13px}"
  );
}
function n7(o) {
  let e = A("contacts_picker_modal__send_invites_btn") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function o7(o) {
  let e = A("contacts_picker_modal__back_btn") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function l7(o) {
  let e, n, t, l, r, i, s;
  return (
    (t = new pe({
      props: {
        disabled: o[1],
        size: "huge",
        $$slots: { default: [n7] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", o[3]),
    (i = new pe({
      props: {
        mod: "grey",
        size: "tiny",
        $$slots: { default: [o7] },
        $$scope: { ctx: o },
      },
    })),
    i.$on("click", o[2]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("span")),
          y(i.$$.fragment),
          c(n, "class", "footer-submit-btn svelte-gtp4wt"),
          c(e, "class", "footer svelte-gtp4wt"),
          ie(e, "footer-scrolling", o[0]);
      },
      m(a, u) {
        w(a, e, u),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          C(i, r, null),
          (s = !0);
      },
      p(a, [u]) {
        let p = {};
        u & 2 && (p.disabled = a[1]),
          u & 32 && (p.$$scope = { dirty: u, ctx: a }),
          t.$set(p);
        let d = {};
        u & 32 && (d.$$scope = { dirty: u, ctx: a }),
          i.$set(d),
          (!s || u & 1) && ie(e, "footer-scrolling", a[0]);
      },
      i(a) {
        s || (_(t.$$.fragment, a), _(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        h(t.$$.fragment, a), h(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && $(e), x(t), x(i);
      },
    }
  );
}
function r7(o, e, n) {
  let { showBorder: t } = e,
    { disabled: l = !1 } = e,
    r = oe(),
    i = () => r("back"),
    s = () => r("submit");
  return (
    (o.$$set = (a) => {
      "showBorder" in a && n(0, (t = a.showBorder)),
        "disabled" in a && n(1, (l = a.disabled));
    }),
    [t, l, i, s]
  );
}
var ui = class extends H {
    constructor(e) {
      super(), j(this, e, r7, l7, U, { showBorder: 0, disabled: 1 }, t7);
    }
  },
  Wn = ui;
N();
function i7(o) {
  Z(
    o,
    "svelte-h79hkb",
    ".contact-item.svelte-h79hkb{display:flex;flex-direction:row;column-gap:12px;align-items:center;padding:6px 11px 6px 18px;border-radius:4px}.contact-picked.svelte-h79hkb{background:var(--contacts-picker-contact-picked-bg-color)}.contact-name-col.svelte-h79hkb{display:flex;text-align:left;flex-direction:column;max-width:244px}.contact-name.svelte-h79hkb{font-size:13px;color:var(--contacts-picker-contact-name-color);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.contact-email.svelte-h79hkb{font-size:12px;color:var(--contacts-picker-contact-email-color);letter-spacing:-0.02em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.contact-checkbox.svelte-h79hkb{margin-left:auto;color:white}"
  );
}
function s7(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s = o[0].name + "",
    a,
    u,
    p,
    d = o[0].email + "",
    m,
    g,
    b,
    k,
    E,
    I,
    T;
  return (
    (n = new yt({
      props: {
        src: o[0].avatarUrl,
        name: o[0].email,
        transparent: !1,
        colored: !0,
      },
    })),
    (k = new Hs({ props: { checked: o[1] } })),
    {
      c() {
        (e = v("button")),
          (t = v("div")),
          y(n.$$.fragment),
          (l = S()),
          (r = v("div")),
          (i = v("span")),
          (a = V(s)),
          (u = S()),
          (p = v("span")),
          (m = V(d)),
          (g = S()),
          (b = v("div")),
          y(k.$$.fragment),
          lt(t, "display", "contents"),
          lt(t, "--avatar-size", "25px"),
          c(i, "class", "contact-name svelte-h79hkb"),
          c(p, "class", "contact-email svelte-h79hkb"),
          c(r, "class", "contact-name-col svelte-h79hkb"),
          c(b, "class", "contact-checkbox svelte-h79hkb"),
          c(e, "class", "contact-item svelte-h79hkb"),
          ie(e, "contact-picked", o[1]);
      },
      m(P, M) {
        w(P, e, M),
          f(e, t),
          C(n, t, null),
          f(e, l),
          f(e, r),
          f(r, i),
          f(i, a),
          f(r, u),
          f(r, p),
          f(p, m),
          f(e, g),
          f(e, b),
          C(k, b, null),
          (E = !0),
          I || ((T = X(e, "click", o[2])), (I = !0));
      },
      p(P, [M]) {
        let B = {};
        M & 1 && (B.src = P[0].avatarUrl),
          M & 1 && (B.name = P[0].email),
          n.$set(B),
          (!E || M & 1) && s !== (s = P[0].name + "") && ee(a, s),
          (!E || M & 1) && d !== (d = P[0].email + "") && ee(m, d);
        let O = {};
        M & 2 && (O.checked = P[1]),
          k.$set(O),
          (!E || M & 2) && ie(e, "contact-picked", P[1]);
      },
      i(P) {
        E || (_(n.$$.fragment, P), _(k.$$.fragment, P), (E = !0));
      },
      o(P) {
        h(n.$$.fragment, P), h(k.$$.fragment, P), (E = !1);
      },
      d(P) {
        P && $(e), x(n), x(k), (I = !1), T();
      },
    }
  );
}
function a7(o, e, n) {
  let { contact: t } = e,
    { isContactPicked: l } = e;
  function r(i) {
    ue.call(this, o, i);
  }
  return (
    (o.$$set = (i) => {
      "contact" in i && n(0, (t = i.contact)),
        "isContactPicked" in i && n(1, (l = i.isContactPicked));
    }),
    [t, l, r]
  );
}
var pi = class extends H {
    constructor(e) {
      super(), j(this, e, a7, s7, U, { contact: 0, isContactPicked: 1 }, i7);
    }
  },
  k1 = pi;
N();
function c7(o) {
  Z(
    o,
    "svelte-19msixb",
    ".header.svelte-19msixb{display:flex;flex-direction:row}.logo-wrapper.svelte-19msixb{width:70px;height:70px;background:var(--background-primary);border:1px solid rgba(0 0 0 / 0.08);box-shadow:var(--workspace-modals-circle-shadow);border-radius:70px;display:flex;align-items:center;justify-content:center;margin-top:-35px}.mx-auto.svelte-19msixb{margin-left:auto;margin-right:auto}"
  );
}
function u7(o) {
  let e, n, t, l;
  return (
    (t = new rt({ props: { height: "48px", width: "24px" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          c(n, "class", "mx-auto logo-wrapper svelte-19msixb"),
          c(e, "class", "header svelte-19msixb");
      },
      m(r, i) {
        w(r, e, i), f(e, n), C(t, n, null), (l = !0);
      },
      p: L,
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(e), x(t);
      },
    }
  );
}
var fi = class extends H {
    constructor(e) {
      super(), j(this, e, null, u7, U, {}, c7);
    }
  },
  w1 = fi;
N();
function p7(o) {
  Z(
    o,
    "svelte-1tb8gwj",
    ".input.svelte-1tb8gwj{margin-left:45px;margin-right:45px}.input.svelte-1tb8gwj .search-input{background:var(--contacts-picker-input-bg-color);border-radius:6px;height:44px;display:flex;flex-direction:row;align-items:center;column-gap:10px;padding:12px}.input.svelte-1tb8gwj .search-input input{font-size:14px}.input.svelte-1tb8gwj .search-input input::placeholder{font-size:14px;color:var(--contacts-picker-input-placeholder-color)}"
  );
}
function f7(o) {
  let e, n;
  return (
    (e = new It({ props: { width: "20", height: "20" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function d7(o) {
  let e, n, t;
  return (
    (n = new $n({
      props: {
        placeholder: A("contacts_picker_modal__search_contacts"),
        className: "search-input",
        value: o[0],
        inputError: o[1],
        $$slots: { prepend: [f7] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")), y(n.$$.fragment), c(e, "class", "input svelte-1tb8gwj");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, [r]) {
        let i = {};
        r & 1 && (i.value = l[0]),
          r & 4 && (i.$$scope = { dirty: r, ctx: l }),
          n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function m7(o, e, n) {
  let { filterString: t } = e,
    l = it(!1);
  return (
    (o.$$set = (r) => {
      "filterString" in r && n(0, (t = r.filterString));
    }),
    [t, l]
  );
}
var di = class extends H {
    constructor(e) {
      super(), j(this, e, m7, d7, U, { filterString: 0 }, p7);
    }
  },
  $1 = di;
N();
function _7(o) {
  Z(
    o,
    "svelte-173l1cs",
    ".switch-wrapper.svelte-173l1cs{display:flex;align-items:center;padding:14px;background:var(--invite-teammates-modal-option-switch-bg);border-radius:4px;-webkit-font-smoothing:antialiased}.label-wrapper.svelte-173l1cs{max-width:80%;display:flex;flex-direction:column;gap:3px}.switch.svelte-173l1cs{margin-left:auto}.switch-text.svelte-173l1cs{font-weight:600;color:var(--invite-teammates-modal-option-switch-text-color)}.switch-description.svelte-173l1cs{color:var(--invite-teammates-modal-option-switch-desc-color);font-weight:400;font-size:12px;line-height:14px}"
  );
}
var g7 = (o) => ({}),
  y1 = (o) => ({});
function C1(o) {
  let e, n;
  return {
    c() {
      (e = v("div")),
        (n = V(o[1])),
        c(e, "class", "switch-description svelte-173l1cs");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 2 && ee(n, t[1]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function h7(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p = o[5].label,
    d = We(p, o, o[4], y1),
    m = o[1] && C1(o);
  function g(k) {
    o[6](k);
  }
  let b = { disabled: o[2] };
  return (
    o[0] !== void 0 && (b.checked = o[0]),
    (s = new Oe({ props: b })),
    we.push(() => Ye(s, "checked", g)),
    s.$on("change", o[3]),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (t = v("div")),
          d && d.c(),
          (l = S()),
          m && m.c(),
          (r = S()),
          (i = v("div")),
          y(s.$$.fragment),
          c(t, "class", "switch-text svelte-173l1cs"),
          c(n, "class", "label-wrapper svelte-173l1cs"),
          c(i, "class", "switch svelte-173l1cs"),
          c(e, "class", "switch-wrapper svelte-173l1cs");
      },
      m(k, E) {
        w(k, e, E),
          f(e, n),
          f(n, t),
          d && d.m(t, null),
          f(n, l),
          m && m.m(n, null),
          f(e, r),
          f(e, i),
          C(s, i, null),
          (u = !0);
      },
      p(k, [E]) {
        d &&
          d.p &&
          (!u || E & 16) &&
          Fe(d, p, k, k[4], u ? Ge(p, k[4], E, g7) : Ze(k[4]), y1),
          k[1]
            ? m
              ? m.p(k, E)
              : ((m = C1(k)), m.c(), m.m(n, null))
            : m && (m.d(1), (m = null));
        let I = {};
        E & 4 && (I.disabled = k[2]),
          !a && E & 1 && ((a = !0), (I.checked = k[0]), Qe(() => (a = !1))),
          s.$set(I);
      },
      i(k) {
        u || (_(d, k), _(s.$$.fragment, k), (u = !0));
      },
      o(k) {
        h(d, k), h(s.$$.fragment, k), (u = !1);
      },
      d(k) {
        k && $(e), d && d.d(k), m && m.d(), x(s);
      },
    }
  );
}
function v7(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    r = oe(),
    { helpText: i = "" } = e,
    { checked: s } = e,
    { disabled: a = !1 } = e,
    u = () => {
      r("change", s);
    };
  function p(d) {
    (s = d), n(0, s);
  }
  return (
    (o.$$set = (d) => {
      "helpText" in d && n(1, (i = d.helpText)),
        "checked" in d && n(0, (s = d.checked)),
        "disabled" in d && n(2, (a = d.disabled)),
        "$$scope" in d && n(4, (l = d.$$scope));
    }),
    [s, i, a, u, l, t, p]
  );
}
var mi = class extends H {
    constructor(e) {
      super(),
        j(this, e, v7, h7, U, { helpText: 1, checked: 0, disabled: 2 }, _7);
    }
  },
  Gn = mi;
function k7(o) {
  Z(
    o,
    "svelte-1tqnner",
    ".body.svelte-1tqnner{display:flex;flex-direction:column;margin-top:24px;row-gap:16px;flex-grow:1;min-height:395px;-webkit-font-smoothing:antialiased}.switch-wrapper.svelte-1tqnner{margin:0 45px}.contacts-list.svelte-1tqnner{display:flex;flex-direction:column;row-gap:3px;overflow-y:auto;padding-left:45px;padding-right:45px;max-height:348px}.form-header.svelte-1tqnner{display:flex;justify-content:space-between;text-transform:uppercase;font-size:10px;line-height:12px;margin-bottom:8px;padding-left:18px;padding-right:11px}.form-header-text.svelte-1tqnner{color:var(--invite-teammates-modal-form-text)}.counter.svelte-1tqnner{border-radius:7px;background:var(--invite-teammates-modal-counter-bg);color:var(--invite-teammates-modal-counter-color);padding:2px 4px}"
  );
}
function x1(o, e, n) {
  let t = o.slice();
  (t[22] = e[n]), (t[25] = n);
  let l = t[4].includes(t[22].email);
  return (t[23] = l), t;
}
function S1(o) {
  let e, n, t, l;
  function r(s) {
    o[18](s);
  }
  let i = { $$slots: { label: [w7] }, $$scope: { ctx: o } };
  return (
    o[5] !== void 0 && (i.checked = o[5]),
    (n = new Gn({ props: i })),
    we.push(() => Ye(n, "checked", r)),
    n.$on("change", o[9]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "switch-wrapper svelte-1tqnner");
      },
      m(s, a) {
        w(s, e, a), C(n, e, null), (l = !0);
      },
      p(s, a) {
        let u = {};
        a & 67108865 && (u.$$scope = { dirty: a, ctx: s }),
          !t && a & 32 && ((t = !0), (u.checked = s[5]), Qe(() => (t = !1))),
          n.$set(u);
      },
      i(s) {
        l || (_(n.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(n.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && $(e), x(n);
      },
    }
  );
}
function w7(o) {
  let e,
    n = A("contacts_picker_modal__switch_label", [o[0]]) + "";
  return {
    c() {
      (e = v("span")), c(e, "slot", "label");
    },
    m(t, l) {
      w(t, e, l), (e.innerHTML = n);
    },
    p(t, l) {
      l & 1 &&
        n !== (n = A("contacts_picker_modal__switch_label", [t[0]]) + "") &&
        (e.innerHTML = n);
    },
    d(t) {
      t && $(e);
    },
  };
}
function A1(o, e) {
  let n, t, l;
  function r() {
    return e[19](e[22], e[23]);
  }
  return (
    (t = new k1({ props: { contact: e[22], isContactPicked: e[23] } })),
    t.$on("click", r),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), y(t.$$.fragment), (this.first = n);
      },
      m(i, s) {
        w(i, n, s), C(t, i, s), (l = !0);
      },
      p(i, s) {
        e = i;
        let a = {};
        s & 64 && (a.contact = e[22]),
          s & 80 && (a.isContactPicked = e[23]),
          t.$set(a);
      },
      i(i) {
        l || (_(t.$$.fragment, i), (l = !0));
      },
      o(i) {
        h(t.$$.fragment, i), (l = !1);
      },
      d(i) {
        i && $(n), x(t, i);
      },
    }
  );
}
function $7(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m = o[4].length + "",
    g,
    b,
    k = o[3].length + "",
    E,
    I,
    T = [],
    P = new Map(),
    M,
    B,
    O;
  (e = new w1({})), (l = new $1({ props: { filterString: o[7] } }));
  let z = o[1] && S1(o),
    G = o[6],
    W = (D) => D[25];
  for (let D = 0; D < G.length; D += 1) {
    let R = x1(o, G, D),
      K = W(R);
    P.set(K, (T[D] = A1(K, R)));
  }
  return (
    (B = new Wn({
      props: { disabled: o[4].length < o[2], showBorder: o[6].length >= 8 },
    })),
    B.$on("submit", o[11]),
    B.$on("back", o[12]),
    {
      c() {
        y(e.$$.fragment),
          (n = S()),
          (t = v("div")),
          y(l.$$.fragment),
          (r = S()),
          z && z.c(),
          (i = S()),
          (s = v("div")),
          (a = v("div")),
          (u = v("span")),
          (u.textContent = `${A("contacts_picker_modal__form_header")}`),
          (p = S()),
          (d = v("span")),
          (g = V(m)),
          (b = V("/")),
          (E = V(k)),
          (I = S());
        for (let D = 0; D < T.length; D += 1) T[D].c();
        (M = S()),
          y(B.$$.fragment),
          c(u, "class", "form-header-text svelte-1tqnner"),
          c(d, "class", "counter svelte-1tqnner"),
          c(a, "class", "form-header svelte-1tqnner"),
          c(s, "class", "contacts-list svelte-1tqnner"),
          c(t, "class", "body svelte-1tqnner");
      },
      m(D, R) {
        C(e, D, R),
          w(D, n, R),
          w(D, t, R),
          C(l, t, null),
          f(t, r),
          z && z.m(t, null),
          f(t, i),
          f(t, s),
          f(s, a),
          f(a, u),
          f(a, p),
          f(a, d),
          f(d, g),
          f(d, b),
          f(d, E),
          f(s, I);
        for (let K = 0; K < T.length; K += 1) T[K] && T[K].m(s, null);
        w(D, M, R), C(B, D, R), (O = !0);
      },
      p(D, R) {
        D[1]
          ? z
            ? (z.p(D, R), R & 2 && _(z, 1))
            : ((z = S1(D)), z.c(), _(z, 1), z.m(t, i))
          : z &&
            (Q(),
            h(z, 1, 1, () => {
              z = null;
            }),
            Y()),
          (!O || R & 16) && m !== (m = D[4].length + "") && ee(g, m),
          (!O || R & 8) && k !== (k = D[3].length + "") && ee(E, k),
          R & 336 &&
            ((G = D[6]),
            Q(),
            (T = ut(T, R, W, 1, D, G, P, s, ct, A1, null, x1)),
            Y());
        let K = {};
        R & 20 && (K.disabled = D[4].length < D[2]),
          R & 64 && (K.showBorder = D[6].length >= 8),
          B.$set(K);
      },
      i(D) {
        if (!O) {
          _(e.$$.fragment, D), _(l.$$.fragment, D), _(z);
          for (let R = 0; R < G.length; R += 1) _(T[R]);
          _(B.$$.fragment, D), (O = !0);
        }
      },
      o(D) {
        h(e.$$.fragment, D), h(l.$$.fragment, D), h(z);
        for (let R = 0; R < T.length; R += 1) h(T[R]);
        h(B.$$.fragment, D), (O = !1);
      },
      d(D) {
        x(e, D), D && $(n), D && $(t), x(l), z && z.d();
        for (let R = 0; R < T.length; R += 1) T[R].d();
        D && $(M), x(B, D);
      },
    }
  );
}
function y7(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        background: "var(--b2b-modal-bg)",
        borderRadius: 20,
        width: 450,
        height: 670,
        $$slots: { default: [$7] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 67108991 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function C7(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [y7] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[10]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 67108991 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function x7(o, e, n) {
  let t,
    l = oe(),
    { teamId: r } = e,
    { userDomain: i } = e,
    { initialEmails: s } = e,
    { isGSuite: a } = e,
    { minInvitationThreshold: u } = e,
    { contacts: p } = e,
    { type: d } = e,
    { teamCreationInfo: m } = e,
    g = it("");
  ve(o, g, (W) => n(17, (t = W)));
  let b = p.filter((W) => W.email.includes(i)).map((W) => W.email),
    k = [...s],
    E = s.length === p.length,
    I,
    T = (W, D) => {
      if (D) {
        n(4, (k = [...k, W]));
        return;
      }
      n(4, (k = k.filter((R) => R !== W)));
    },
    P = ({ detail: W }) => {
      if (W) {
        n(4, (k = mn([...k, ...b])));
        return;
      }
      n(4, (k = k.filter((D) => !D.includes(i))));
    },
    M = () => l("close"),
    B = () => {
      q.actions.sendAnalyticsEvent("team-b2b.user-invited", {
        source: d === "google" ? "google.contacts" : d,
      }),
        q.actions.inviteToTeam({ teamId: r, emails: k, teamCreationInfo: m });
    },
    O = () => q.actions.showInviteTeammatesModal(k, m);
  function z(W) {
    (E = W), n(5, E);
  }
  let G = (W, D) => T(W.email, !D);
  return (
    (o.$$set = (W) => {
      "teamId" in W && n(13, (r = W.teamId)),
        "userDomain" in W && n(0, (i = W.userDomain)),
        "initialEmails" in W && n(14, (s = W.initialEmails)),
        "isGSuite" in W && n(1, (a = W.isGSuite)),
        "minInvitationThreshold" in W && n(2, (u = W.minInvitationThreshold)),
        "contacts" in W && n(3, (p = W.contacts)),
        "type" in W && n(15, (d = W.type)),
        "teamCreationInfo" in W && n(16, (m = W.teamCreationInfo));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 131080) {
        e: n(
          6,
          (I = t
            ? p.filter(({ name: W, email: D }) => {
                let R = t.toLowerCase();
                return !!(
                  W.toLowerCase().includes(R) || D.toLowerCase().includes(R)
                );
              })
            : p)
        );
      }
    }),
    [i, a, u, p, k, E, I, g, T, P, M, B, O, r, s, d, m, t, z, G]
  );
}
var _i = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          x7,
          C7,
          U,
          {
            teamId: 13,
            userDomain: 0,
            initialEmails: 14,
            isGSuite: 1,
            minInvitationThreshold: 2,
            contacts: 3,
            type: 15,
            teamCreationInfo: 16,
          },
          k7
        );
    }
  },
  I1 = _i;
N();
function S7(o) {
  Z(
    o,
    "svelte-1uko9y3",
    `.wrapper.svelte-1uko9y3{display:flex;flex-direction:column;height:100%;-webkit-font-smoothing:antialiased}.banner.svelte-1uko9y3{border-radius:6px 6px 0 0}.close-button.svelte-1uko9y3{position:absolute;top:0;right:0;padding:12px;color:var(--b2b-intro-close-button-color)}.content.svelte-1uko9y3{height:100%;padding:30px 33px;display:grid;grid-template:'header  header' max-content
      'message message' 1fr
      'action  steps' max-content
      / 1fr max-content}.header.svelte-1uko9y3{grid-area:header;margin:0 0 10px;padding:0;color:var(--b2b-intro-header-color);font-style:normal;font-weight:700;font-size:20px;line-height:24px}.message.svelte-1uko9y3{grid-area:message;margin:0 0 50px;padding:0;color:var(--b2b-intro-message-color);font-weight:400;font-size:14px;line-height:17px}.action.svelte-1uko9y3{grid-area:action}.steps.svelte-1uko9y3{grid-area:steps;align-self:center;margin:0;padding:0;display:grid;grid-auto-flow:column;grid-template-columns:max-content;grid-column-gap:10px}.step-button.svelte-1uko9y3{margin:0;padding:0;width:6px;height:6px;border-radius:50%;cursor:pointer;background:var(--b2b-intro-step-bg)}.step-button.active.svelte-1uko9y3{background:#1977f3}`
  );
}
function T1(o, e, n) {
  let t = o.slice();
  return (t[9] = e[n]), (t[11] = n), t;
}
function M1(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d = o[2].headerText + "",
    m,
    g,
    b,
    k = o[2].descriptionText + "",
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G;
  (s = new qe({ props: { width: "12", height: "12" } })),
    (P = new pe({
      props: { $$slots: { default: [A7] }, $$scope: { ctx: o } },
    })),
    P.$on("click", o[4]);
  let W = o[1],
    D = [];
  for (let R = 0; R < W.length; R += 1) D[R] = P1(T1(o, W, R));
  return {
    c() {
      (e = v("div")),
        (n = v("img")),
        (r = S()),
        (i = v("button")),
        y(s.$$.fragment),
        (a = S()),
        (u = v("div")),
        (p = v("h1")),
        (m = V(d)),
        (g = S()),
        (b = v("p")),
        (E = V(k)),
        (I = S()),
        (T = v("div")),
        y(P.$$.fragment),
        (M = S()),
        (B = v("ul"));
      for (let R = 0; R < D.length; R += 1) D[R].c();
      c(n, "class", "banner svelte-1uko9y3"),
        Je(n.src, (t = o[2].banner)) || c(n, "src", t),
        c(n, "alt", (l = A("b2b_intro_modal__banner_alt"))),
        c(i, "class", "close-button svelte-1uko9y3"),
        c(p, "class", "header svelte-1uko9y3"),
        c(b, "class", "message svelte-1uko9y3"),
        c(T, "class", "action svelte-1uko9y3"),
        c(B, "class", "steps svelte-1uko9y3"),
        c(u, "class", "content svelte-1uko9y3"),
        c(e, "class", "wrapper svelte-1uko9y3");
    },
    m(R, K) {
      w(R, e, K),
        f(e, n),
        f(e, r),
        f(e, i),
        C(s, i, null),
        f(e, a),
        f(e, u),
        f(u, p),
        f(p, m),
        f(u, g),
        f(u, b),
        f(b, E),
        f(u, I),
        f(u, T),
        C(P, T, null),
        f(u, M),
        f(u, B);
      for (let ne = 0; ne < D.length; ne += 1) D[ne] && D[ne].m(B, null);
      (O = !0), z || ((G = X(i, "click", o[3])), (z = !0));
    },
    p(R, K) {
      (!O || (K & 4 && !Je(n.src, (t = R[2].banner)))) && c(n, "src", t),
        (!O || K & 4) && d !== (d = R[2].headerText + "") && ee(m, d),
        (!O || K & 4) && k !== (k = R[2].descriptionText + "") && ee(E, k);
      let ne = {};
      if (
        (K & 4096 && (ne.$$scope = { dirty: K, ctx: R }), P.$set(ne), K & 33)
      ) {
        W = R[1];
        let te;
        for (te = 0; te < W.length; te += 1) {
          let le = T1(R, W, te);
          D[te]
            ? D[te].p(le, K)
            : ((D[te] = P1(le)), D[te].c(), D[te].m(B, null));
        }
        for (; te < D.length; te += 1) D[te].d(1);
        D.length = W.length;
      }
    },
    i(R) {
      O || (_(s.$$.fragment, R), _(P.$$.fragment, R), (O = !0));
    },
    o(R) {
      h(s.$$.fragment, R), h(P.$$.fragment, R), (O = !1);
    },
    d(R) {
      R && $(e), x(s), x(P), Ae(D, R), (z = !1), G();
    },
  };
}
function A7(o) {
  let e = A("b2b_intro_modal__next_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function P1(o) {
  let e, n, t, l, r;
  function i() {
    return o[6](o[11]);
  }
  return {
    c() {
      (e = v("li")),
        (n = v("button")),
        (t = S()),
        c(n, "class", "step-button svelte-1uko9y3"),
        ie(n, "active", o[0] === o[11]);
    },
    m(s, a) {
      w(s, e, a), f(e, n), f(e, t), l || ((r = X(n, "click", i)), (l = !0));
    },
    p(s, a) {
      (o = s), a & 1 && ie(n, "active", o[0] === o[11]);
    },
    d(s) {
      s && $(e), (l = !1), r();
    },
  };
}
function E7(o) {
  let e,
    n,
    t = o[2] && M1(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, r) {
      l[2]
        ? t
          ? (t.p(l, r), r & 4 && _(t, 1))
          : ((t = M1(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function I7(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        background: "var(--b2b-modal-bg)",
        width: 380,
        borderRadius: 10,
        $$slots: { default: [E7] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4101 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function T7(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [I7] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 4101 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var Fn = "/shared/assets/images/b2b";
function M7(o, e, n) {
  let t,
    { step: l } = e,
    r = oe(),
    i = [
      {
        banner: `${Fn}/b2b_intro_step_1.png`,
        headerText: A("b2b_intro_modal__header_text_1"),
        descriptionText: A("b2b_intro_modal__description_text_1"),
      },
      {
        banner: `${Fn}/b2b_intro_step_2.png`,
        headerText: A("b2b_intro_modal__header_text_2"),
        descriptionText: A("b2b_intro_modal__description_text_2"),
      },
      {
        banner: `${Fn}/b2b_intro_step_3.png`,
        headerText: A("b2b_intro_modal__header_text_3"),
        descriptionText: A("b2b_intro_modal__description_text_3"),
      },
      {
        banner: `${Fn}/b2b_intro_step_4.png`,
        headerText: A("b2b_intro_modal__header_text_4"),
        descriptionText: A("b2b_intro_modal__description_text_4"),
      },
    ],
    s = i.length - 1,
    a = () => {
      q.actions.sendAnalyticsEvent("b2b.intro-popup.closed", void 0),
        r("close");
    },
    u = () => {
      let m = l + 1;
      if (m > s) {
        q.actions.sendAnalyticsEvent("b2b.intro-popup.passed", void 0),
          q.actions.continueFlowAfterIntro();
        return;
      }
      q.actions.showB2bIntroModal({ source: "auto-opened", step: m });
    },
    p = (m) => {
      q.actions.showB2bIntroModal({ source: "auto-opened", step: m });
    };
  ye(() =>
    l > s
      ? q.actions.continueFlowAfterIntro()
      : q.actions.sendAnalyticsEvent("b2b.intro-popup.auto-opened", void 0)
  );
  let d = (m) => p(m);
  return (
    (o.$$set = (m) => {
      "step" in m && n(0, (l = m.step));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(2, (t = i[l]));
      }
    }),
    [l, i, t, a, u, p, d]
  );
}
var gi = class extends H {
    constructor(e) {
      super(), j(this, e, M7, T7, U, { step: 0, introAssetsContent: 1 }, S7);
    }
    get introAssetsContent() {
      return this.$$.ctx[1];
    }
  },
  z1 = gi;
N();
N();
function P7(o) {
  let e, n, t;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        c(
          n,
          "d",
          "M13.4394 2.43933L12.5606 1.56048C12.1384 1.13904 11.5663 0.902344 10.9697 0.902344C10.3732 0.902344 9.8011 1.13904 9.37893 1.56048L0.25 10.6893V14.7499H4.31057L13.4394 5.62098C13.8608 5.19881 14.0975 4.62666 14.0975 4.03015C14.0975 3.43363 13.8608 2.86149 13.4394 2.43933ZM3.84452 13.6249H1.375V11.1554L8.36755 4.16283L10.8371 6.63233L3.84452 13.6249ZM12.644 4.82553L11.6325 5.83698L9.16292 3.36745L10.1744 2.35593C10.3856 2.1455 10.6715 2.02735 10.9697 2.02735C11.2679 2.02735 11.5538 2.1455 11.765 2.35593L12.6441 3.235C12.8545 3.4462 12.9726 3.73216 12.9726 4.03026C12.9726 4.32837 12.8543 4.61433 12.644 4.82553Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 15 15"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      w(l, e, r), f(e, n);
    },
    p(l, [r]) {
      r & 4 && t !== (t = `icon ${l[2]}`) && c(e, "class", t),
        r & 1 && c(e, "width", l[0]),
        r & 2 && c(e, "height", l[1]);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function z7(o, e, n) {
  let { width: t = "100%" } = e,
    { height: l = "100%" } = e,
    { className: r = "" } = e;
  return (
    (o.$$set = (i) => {
      "width" in i && n(0, (t = i.width)),
        "height" in i && n(1, (l = i.height)),
        "className" in i && n(2, (r = i.className));
    }),
    [t, l, r]
  );
}
var hi = class extends H {
    constructor(e) {
      super(), j(this, e, z7, P7, U, { width: 0, height: 1, className: 2 });
    }
  },
  B1 = hi;
function B7(o) {
  Z(
    o,
    "svelte-neu93w",
    ".wrapper.svelte-neu93w{width:100%;max-width:450px;padding:8px 8px 32px;position:relative;-webkit-font-smoothing:antialiased;border-radius:20px}.wrapper.svelte-neu93w .create-button{min-width:156px}.wrapper.svelte-neu93w .pencil-icon path{color:var(--invite-teammates-modal-pencil-icon-path)}.logo.svelte-neu93w{position:absolute;top:-35px;left:50%;transform:translate3d(-50%, 0, 0);box-shadow:0 0 8px rgb(0 0 0 / 0.09);background:var(--background-primary);width:70px;height:70px;min-width:70px;min-height:70px;display:flex;align-items:center;justify-content:center;border-radius:50%}.header.svelte-neu93w{background-color:var(--create-team-modal-header-bg-color);display:flex;flex-direction:column;align-items:center;row-gap:10px;padding:45px 30px 30px;border-radius:8px}.title.svelte-neu93w{font-size:26px;color:var(--create-team-modal-header-title-color);font-weight:600}.description.svelte-neu93w{text-align:center;width:320px;margin-top:10px;color:var(--create-team-modal-header-description-color);font-size:12px;line-height:14px}.content.svelte-neu93w{padding:32px 40px 80px}.block.svelte-neu93w{background-color:var(--background-secondary);padding:12px 9px;border-radius:8px}.block-title.svelte-neu93w{color:var(--create-team-modal-workspace-block-title);text-transform:uppercase;font-weight:500;font-size:10px;line-height:12px}.workspaces.svelte-neu93w{background-color:var(--create-team-modal-input-bg-color);padding:8px 10px;display:flex;align-items:center;margin-top:10px;border-radius:8px}.avatar.svelte-neu93w{width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:bold;color:var(--text-primary-color);border-radius:50%;margin-right:10px;border:none;outline:none}.workspace-block-title.svelte-neu93w{color:var(--text-primary-color);font-weight:700;font-size:13px;background-color:transparent;outline:none;border:none;width:100%}.create-button-wrapper.svelte-neu93w{display:flex;align-items:center;justify-content:center}.close-button.svelte-neu93w{position:absolute;right:14px;top:14px}.pencil-button.svelte-neu93w{min-width:28px;height:28px;background:var(--invite-teammates-modal-icon-bg);border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;margin-left:5px}"
  );
}
function N7(o) {
  let e,
    n =
      (o[1] === o[0].name || o[4].type === "Emoji"
        ? o[4].text
        : (Rt(o[1], 0) || "P").toUpperCase()) + "",
    t,
    l,
    r,
    i;
  return {
    c() {
      (e = v("button")),
        (t = V(n)),
        c(e, "class", "avatar svelte-neu93w"),
        c(
          e,
          "style",
          (l = `background-color: ${o[4].backgroundColor}; color: ${o[4].foregroundColor}`)
        );
    },
    m(s, a) {
      w(s, e, a), f(e, t), r || ((i = X(e, "click", o[5])), (r = !0));
    },
    p(s, a) {
      a & 19 &&
        n !==
          (n =
            (s[1] === s[0].name || s[4].type === "Emoji"
              ? s[4].text
              : (Rt(s[1], 0) || "P").toUpperCase()) + "") &&
        ee(t, n),
        a & 16 &&
          l !==
            (l = `background-color: ${s[4].backgroundColor}; color: ${s[4].foregroundColor}`) &&
          c(e, "style", l);
    },
    d(s) {
      s && $(e), (r = !1), i();
    },
  };
}
function q7(o) {
  let e = A("b2b_create_team_modal__create_team_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function D7(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R,
    K,
    ne,
    te,
    le;
  t = new rt({ props: { width: "24px", height: "44px" } });
  function re(ae) {
    o[12](ae);
  }
  let se = { $$slots: { default: [N7] }, $$scope: { ctx: o } };
  return (
    o[2] !== void 0 && (se.isOpen = o[2]),
    (k = new Qt({ props: se })),
    we.push(() => Ye(k, "isOpen", re)),
    k.$on("changeBackground", o[11]),
    k.$on("changeBackgroundEmoji", o[10]),
    k.$on("toggleAvatarPicker", o[5]),
    (O = new B1({
      props: { className: "pencil-icon", width: "13", height: "13" },
    })),
    (W = new pe({
      props: {
        className: "create-button",
        size: "large",
        $$slots: { default: [q7] },
        $$scope: { ctx: o },
      },
    })),
    W.$on("click", o[9]),
    (K = new qe({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          (l = S()),
          (r = v("div")),
          (i = v("div")),
          (i.textContent = `${A("b2b_create_team_modal__title")}`),
          (s = S()),
          (a = v("div")),
          (a.textContent = `${A("b2b_create_team_modal__description")}`),
          (u = S()),
          (p = v("div")),
          (d = v("div")),
          (m = v("div")),
          (m.textContent = `${A(
            "b2b_create_team_modal__workspaces_block_title"
          ).toUpperCase()}`),
          (g = S()),
          (b = v("div")),
          y(k.$$.fragment),
          (I = S()),
          (T = v("input")),
          (M = S()),
          (B = v("button")),
          y(O.$$.fragment),
          (z = S()),
          (G = v("div")),
          y(W.$$.fragment),
          (D = S()),
          (R = v("button")),
          y(K.$$.fragment),
          c(n, "class", "logo svelte-neu93w"),
          c(i, "class", "title svelte-neu93w"),
          c(a, "class", "description svelte-neu93w"),
          c(r, "class", "header svelte-neu93w"),
          c(m, "class", "block-title svelte-neu93w"),
          c(T, "class", "workspace-block-title svelte-neu93w"),
          c(
            T,
            "placeholder",
            (P = A("b2b_create_team_modal__team_workspace_placeholder"))
          ),
          c(B, "class", "pencil-button svelte-neu93w"),
          c(b, "class", "workspaces svelte-neu93w"),
          c(d, "class", "block svelte-neu93w"),
          c(p, "class", "content svelte-neu93w"),
          c(G, "class", "create-button-wrapper svelte-neu93w"),
          c(e, "class", "wrapper svelte-neu93w"),
          c(R, "class", "close-button svelte-neu93w");
      },
      m(ae, me) {
        w(ae, e, me),
          f(e, n),
          C(t, n, null),
          f(e, l),
          f(e, r),
          f(r, i),
          f(r, s),
          f(r, a),
          f(e, u),
          f(e, p),
          f(p, d),
          f(d, m),
          f(d, g),
          f(d, b),
          C(k, b, null),
          f(b, I),
          f(b, T),
          Ne(T, o[1]),
          o[14](T),
          f(b, M),
          f(b, B),
          C(O, B, null),
          f(e, z),
          f(e, G),
          C(W, G, null),
          w(ae, D, me),
          w(ae, R, me),
          C(K, R, null),
          (ne = !0),
          te ||
            ((le = [
              X(T, "input", o[13]),
              X(T, "keydown", o[8]),
              X(B, "click", o[7]),
              X(R, "click", o[6]),
            ]),
            (te = !0));
      },
      p(ae, me) {
        let ce = {};
        me & 131091 && (ce.$$scope = { dirty: me, ctx: ae }),
          !E && me & 4 && ((E = !0), (ce.isOpen = ae[2]), Qe(() => (E = !1))),
          k.$set(ce),
          me & 2 && T.value !== ae[1] && Ne(T, ae[1]);
        let ke = {};
        me & 131072 && (ke.$$scope = { dirty: me, ctx: ae }), W.$set(ke);
      },
      i(ae) {
        ne ||
          (_(t.$$.fragment, ae),
          _(k.$$.fragment, ae),
          _(O.$$.fragment, ae),
          _(W.$$.fragment, ae),
          _(K.$$.fragment, ae),
          (ne = !0));
      },
      o(ae) {
        h(t.$$.fragment, ae),
          h(k.$$.fragment, ae),
          h(O.$$.fragment, ae),
          h(W.$$.fragment, ae),
          h(K.$$.fragment, ae),
          (ne = !1);
      },
      d(ae) {
        ae && $(e),
          x(t),
          x(k),
          o[14](null),
          x(O),
          x(W),
          ae && $(D),
          ae && $(R),
          x(K),
          (te = !1),
          Se(le);
      },
    }
  );
}
function L7(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        background: "var(--b2b-modal-bg)",
        width: 450,
        maxWidth: 450,
        borderRadius: 20,
        $$slots: { default: [D7] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 131103 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U7(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [L7] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[15]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 131103 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function j7(o, e, n) {
  let t = oe(),
    { currentWorkspace: l } = e,
    r = A("b2b_create_team_modal__workspaces_default_input_value"),
    i = !1,
    s,
    { avatar: a } = l,
    u = () => {
      n(2, (i = !i));
    },
    p = () => {
      t("close");
    },
    d = () => {
      s.focus();
    },
    m = (M) => {
      M.key === "Enter" && g();
    },
    g = () => {
      q.actions.confirmTeamCreation({ teamName: r });
    },
    b = ({ detail: { value: M } }) => {
      q.actions.sendAnalyticsEvent(
        "workspace-manager.workspace-icon-selected",
        void 0
      ),
        q.actions.changeBackgroundEmojiForWorkspace(l.id, M),
        n(4, (a = { ...a, type: "Emoji", text: M.symbol })),
        u();
    },
    k = ({ detail: { value: M } }) => {
      q.actions.sendAnalyticsEvent(
        "workspace-manager.workspace-icon-selected",
        void 0
      ),
        q.actions.changeBackgroundForWorkspace(l.id, M),
        n(
          4,
          (a = {
            ...a,
            type: "Colored",
            backgroundColor: M.bg,
            foregroundColor: M.letterColor,
          })
        ),
        u();
    };
  function E(M) {
    (i = M), n(2, i);
  }
  function I() {
    (r = this.value), n(1, r);
  }
  function T(M) {
    we[M ? "unshift" : "push"](() => {
      (s = M), n(3, s);
    });
  }
  function P(M) {
    ue.call(this, o, M);
  }
  return (
    (o.$$set = (M) => {
      "currentWorkspace" in M && n(0, (l = M.currentWorkspace));
    }),
    [l, r, i, s, a, u, p, d, m, g, b, k, E, I, T, P]
  );
}
var vi = class extends H {
    constructor(e) {
      super(), j(this, e, j7, U7, U, { currentWorkspace: 0 }, B7);
    }
  },
  N1 = vi;
N();
N();
N();
function H7(o) {
  Z(
    o,
    "svelte-19msixb",
    ".header.svelte-19msixb{display:flex;flex-direction:row}.logo-wrapper.svelte-19msixb{width:70px;height:70px;background:var(--background-primary);border:1px solid rgba(0 0 0 / 0.08);box-shadow:var(--workspace-modals-circle-shadow);border-radius:70px;display:flex;align-items:center;justify-content:center;margin-top:-35px}.mx-auto.svelte-19msixb{margin-left:auto;margin-right:auto}"
  );
}
function V7(o) {
  let e, n, t, l;
  return (
    (t = new rt({ props: { height: "48px", width: "24px" } })),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          y(t.$$.fragment),
          c(n, "class", "mx-auto logo-wrapper svelte-19msixb"),
          c(e, "class", "header svelte-19msixb");
      },
      m(r, i) {
        w(r, e, i), f(e, n), C(t, n, null), (l = !0);
      },
      p: L,
      i(r) {
        l || (_(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && $(e), x(t);
      },
    }
  );
}
var bi = class extends H {
    constructor(e) {
      super(), j(this, e, null, V7, U, {}, H7);
    }
  },
  q1 = bi;
var O7 = (o) => ({}),
  D1 = (o) => ({}),
  R7 = (o) => ({}),
  L1 = (o) => ({});
function W7(o) {
  let e, n, t, l;
  e = new q1({});
  let r = o[3].body,
    i = We(r, o, o[5], L1),
    s = o[3].footer,
    a = We(s, o, o[5], D1);
  return {
    c() {
      y(e.$$.fragment), (n = S()), i && i.c(), (t = S()), a && a.c();
    },
    m(u, p) {
      C(e, u, p),
        w(u, n, p),
        i && i.m(u, p),
        w(u, t, p),
        a && a.m(u, p),
        (l = !0);
    },
    p(u, p) {
      i &&
        i.p &&
        (!l || p & 32) &&
        Fe(i, r, u, u[5], l ? Ge(r, u[5], p, R7) : Ze(u[5]), L1),
        a &&
          a.p &&
          (!l || p & 32) &&
          Fe(a, s, u, u[5], l ? Ge(s, u[5], p, O7) : Ze(u[5]), D1);
    },
    i(u) {
      l || (_(e.$$.fragment, u), _(i, u), _(a, u), (l = !0));
    },
    o(u) {
      h(e.$$.fragment, u), h(i, u), h(a, u), (l = !1);
    },
    d(u) {
      x(e, u), u && $(n), i && i.d(u), u && $(t), a && a.d(u);
    },
  };
}
function G7(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        background: "var(--b2b-modal-bg)",
        useNewShadow: !0,
        borderRadius: 20,
        width: o[0],
        height: o[1],
        maxHeight: o[2],
        $$slots: { default: [W7] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 1 && (r.width = t[0]),
          l & 2 && (r.height = t[1]),
          l & 4 && (r.maxHeight = t[2]),
          l & 32 && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function F7(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [G7] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[4]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 39 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Z7(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    { width: r } = e,
    { height: i } = e,
    { maxHeight: s = i } = e;
  function a(u) {
    ue.call(this, o, u);
  }
  return (
    (o.$$set = (u) => {
      "width" in u && n(0, (r = u.width)),
        "height" in u && n(1, (i = u.height)),
        "maxHeight" in u && n(2, (s = u.maxHeight)),
        "$$scope" in u && n(5, (l = u.$$scope));
    }),
    [r, i, s, t, a, l]
  );
}
var ki = class extends H {
    constructor(e) {
      super(), j(this, e, Z7, F7, U, { width: 0, height: 1, maxHeight: 2 });
    }
  },
  ln = ki;
function K7(o) {
  Z(
    o,
    "svelte-gvuikg",
    ".body.svelte-gvuikg.svelte-gvuikg{padding:0 50px;-webkit-font-smoothing:antialiased}.header.svelte-gvuikg.svelte-gvuikg{font-weight:600;font-size:26px;line-height:31px;text-align:center;margin:10px 0;color:var(--invite-teammates-modal-title)}.subheader.svelte-gvuikg.svelte-gvuikg{font-weight:400;font-size:12px;line-height:14px;max-width:290px;text-align:center;color:var(--invite-teammates-modal-secondary-text-color);margin-bottom:28px;margin-left:auto;margin-right:auto}.form-wrapper.svelte-gvuikg.svelte-gvuikg{display:flex;flex-direction:column;background:var(--field-background-color);border-radius:8px;width:100%;padding:12px;padding-bottom:6px;height:115px;overflow-y:auto}.form-wrapper.error.svelte-gvuikg.svelte-gvuikg{background:var(--invite-teammates-modal-bg-error-color);border:1px solid var(--invite-teammates-modal-field-border-error-color)}.input-tags-wrapper.svelte-gvuikg.svelte-gvuikg{display:flex;flex-direction:column;flex:1}.tiles.svelte-gvuikg.svelte-gvuikg{display:flex;flex-wrap:wrap;gap:7px}.tag.svelte-gvuikg.svelte-gvuikg{position:relative;background:var(--invite-teammates-modal-tag-bg);border-radius:3px;font-weight:400;font-size:12px;line-height:16px;padding:2px 7px;color:var(--invite-teammates-modal-tag-text)}.remove-button.svelte-gvuikg.svelte-gvuikg{position:absolute;top:calc(50% - 7px);right:0;height:14px;padding-left:8px;padding-right:4px;background:var(--invite-teammates-modal-remove-btn-bg);opacity:0;transition:opacity var(--transition-time)}.tag.svelte-gvuikg:hover>.remove-button.svelte-gvuikg{opacity:1}.input.svelte-gvuikg.svelte-gvuikg{all:unset;flex-grow:1;min-width:33%;flex-basis:33%}.form-header.svelte-gvuikg.svelte-gvuikg{display:flex;justify-content:space-between;text-transform:uppercase;font-size:10px;line-height:12px;margin-bottom:8px}.form-header-text.svelte-gvuikg.svelte-gvuikg{color:var(--invite-teammates-modal-form-text)}.counter.svelte-gvuikg.svelte-gvuikg{border-radius:7px;color:var(--invite-teammates-modal-counter-color);background:var(--invite-teammates-modal-counter-bg);padding:2px 4px}.counter.threshold-reached.svelte-gvuikg.svelte-gvuikg{background:var(--invite-teammates-modal-counter-active-bg)}.tooltip.svelte-gvuikg.svelte-gvuikg{padding:2px}.limit-warning-block.svelte-gvuikg.svelte-gvuikg{bottom:0;width:100%;padding:3px 7px;background:var(--invite-teammates-modal-warning-bg-color);border:1px solid var(--invite-teammates-modal-warning-border-color);border-radius:2px;color:var(--invite-teammates-modal-warning-text-color)}.social-media-text.svelte-gvuikg.svelte-gvuikg{text-align:center;font-weight:400;font-size:14px;line-height:16px;color:var(--invite-teammates-modal-secondary-text-color);margin-top:21px;margin-bottom:22px}.social-media-buttons.svelte-gvuikg.svelte-gvuikg{display:flex;align-items:center;justify-content:center}.switch-group.svelte-gvuikg.svelte-gvuikg{margin-top:11px}.footer.svelte-gvuikg.svelte-gvuikg{margin-top:auto}"
  );
}
function j1(o, e, n) {
  let t = o.slice();
  return (t[45] = e[n]), t;
}
function H1(o) {
  let e,
    n = o[45] + "",
    t,
    l,
    r,
    i,
    s,
    a,
    u;
  i = new qe({ props: { width: "12", height: "12" } });
  function p() {
    return o[28](o[45]);
  }
  return {
    c() {
      (e = v("div")),
        (t = V(n)),
        (l = S()),
        (r = v("button")),
        y(i.$$.fragment),
        c(r, "class", "remove-button svelte-gvuikg"),
        c(e, "class", "tag svelte-gvuikg");
    },
    m(d, m) {
      w(d, e, m),
        f(e, t),
        f(e, l),
        f(e, r),
        C(i, r, null),
        (s = !0),
        a || ((u = X(r, "click", p)), (a = !0));
    },
    p(d, m) {
      (o = d), (!s || m[0] & 32) && n !== (n = o[45] + "") && ee(t, n);
    },
    i(d) {
      s || (_(i.$$.fragment, d), (s = !0));
    },
    o(d) {
      h(i.$$.fragment, d), (s = !1);
    },
    d(d) {
      d && $(e), x(i), (a = !1), u();
    },
  };
}
function V1(o) {
  let e,
    n = A("invite_teammates_modal__warning", [`${o[2] - o[5].length}`]) + "",
    t;
  return {
    c() {
      (e = v("div")),
        (t = V(n)),
        c(e, "class", "limit-warning-block svelte-gvuikg");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, r) {
      r[0] & 36 &&
        n !==
          (n =
            A("invite_teammates_modal__warning", [`${l[2] - l[5].length}`]) +
            "") &&
        ee(t, n);
    },
    d(l) {
      l && $(e);
    },
  };
}
function Q7(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d = o[5],
    m = [];
  for (let k = 0; k < d.length; k += 1) m[k] = H1(j1(o, d, k));
  let g = (k) =>
      h(m[k], 1, 1, () => {
        m[k] = null;
      }),
    b = o[10] && o[5].length < o[2] && V1(o);
  return {
    c() {
      (e = v("div")), (n = v("div")), (t = v("div"));
      for (let k = 0; k < m.length; k += 1) m[k].c();
      (l = S()),
        (r = v("input")),
        (s = S()),
        b && b.c(),
        c(r, "id", "invite-teammates-input"),
        c(r, "class", "input svelte-gvuikg"),
        c(
          r,
          "placeholder",
          (i = o[5].length
            ? void 0
            : A("invite_teammates_modal__input_placeholder"))
        ),
        c(t, "class", "tiles svelte-gvuikg"),
        c(n, "class", "input-tags-wrapper svelte-gvuikg"),
        c(e, "class", "form-wrapper svelte-gvuikg"),
        ie(e, "error", o[12]);
    },
    m(k, E) {
      w(k, e, E), f(e, n), f(n, t);
      for (let I = 0; I < m.length; I += 1) m[I] && m[I].m(t, null);
      f(t, l),
        f(t, r),
        Ne(r, o[6]),
        o[30](r),
        f(e, s),
        b && b.m(e, null),
        (a = !0),
        u ||
          ((p = [
            X(r, "input", o[29]),
            X(r, "blur", o[15]),
            X(e, "click", o[13]),
            X(e, "keydown", o[14]),
          ]),
          (u = !0));
    },
    p(k, E) {
      if (E[0] & 65568) {
        d = k[5];
        let I;
        for (I = 0; I < d.length; I += 1) {
          let T = j1(k, d, I);
          m[I]
            ? (m[I].p(T, E), _(m[I], 1))
            : ((m[I] = H1(T)), m[I].c(), _(m[I], 1), m[I].m(t, l));
        }
        for (Q(), I = d.length; I < m.length; I += 1) g(I);
        Y();
      }
      (!a ||
        (E[0] & 32 &&
          i !==
            (i = k[5].length
              ? void 0
              : A("invite_teammates_modal__input_placeholder")))) &&
        c(r, "placeholder", i),
        E[0] & 64 && r.value !== k[6] && Ne(r, k[6]),
        k[10] && k[5].length < k[2]
          ? b
            ? b.p(k, E)
            : ((b = V1(k)), b.c(), b.m(e, null))
          : b && (b.d(1), (b = null)),
        (!a || E[0] & 4096) && ie(e, "error", k[12]);
    },
    i(k) {
      if (!a) {
        for (let E = 0; E < d.length; E += 1) _(m[E]);
        a = !0;
      }
    },
    o(k) {
      m = m.filter(Boolean);
      for (let E = 0; E < m.length; E += 1) h(m[E]);
      a = !1;
    },
    d(k) {
      k && $(e), Ae(m, k), o[30](null), b && b.d(), (u = !1), Se(p);
    },
  };
}
function Y7(o) {
  let e;
  return {
    c() {
      (e = v("span")),
        (e.textContent = `${o[21]()}`),
        c(e, "class", "tooltip svelte-gvuikg"),
        c(e, "slot", "tooltip");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: L,
    d(n) {
      n && $(e);
    },
  };
}
function O1(o) {
  let e, n, t, l;
  function r(s) {
    o[31](s);
  }
  let i = {
    helpText: A("invite_teammates_modal__switch_tooltip_text", [o[0]]),
    $$slots: { label: [J7] },
    $$scope: { ctx: o },
  };
  return (
    o[8] !== void 0 && (i.checked = o[8]),
    (n = new Gn({ props: i })),
    we.push(() => Ye(n, "checked", r)),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "switch-group svelte-gvuikg");
      },
      m(s, a) {
        w(s, e, a), C(n, e, null), (l = !0);
      },
      p(s, a) {
        let u = {};
        a[0] & 1 &&
          (u.helpText = A("invite_teammates_modal__switch_tooltip_text", [
            s[0],
          ])),
          (a[0] & 1) | (a[1] & 131072) && (u.$$scope = { dirty: a, ctx: s }),
          !t &&
            a[0] & 256 &&
            ((t = !0), (u.checked = s[8]), Qe(() => (t = !1))),
          n.$set(u);
      },
      i(s) {
        l || (_(n.$$.fragment, s), (l = !0));
      },
      o(s) {
        h(n.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && $(e), x(n);
      },
    }
  );
}
function J7(o) {
  let e,
    n = A("invite_teammates_modal__switch_label", [o[0]]) + "";
  return {
    c() {
      (e = v("span")), c(e, "slot", "label");
    },
    m(t, l) {
      w(t, e, l), (e.innerHTML = n);
    },
    p(t, l) {
      l[0] & 1 &&
        n !== (n = A("invite_teammates_modal__switch_label", [t[0]]) + "") &&
        (e.innerHTML = n);
    },
    d(t) {
      t && $(e);
    },
  };
}
function X7(o) {
  let e,
    n,
    t,
    l,
    r =
      (o[2] === 1
        ? A("invite_teammates_modal__subheader_with_already_initial_invited")
        : A("invite_teammates_modal__subheader")) + "",
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g = o[5].length + "",
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O,
    z,
    G,
    W,
    D,
    R;
  T = new wn({
    props: {
      showTooltip: o[12],
      displayInlineFlex: !1,
      tooltipPlacement: "bottom-start",
      $$slots: { tooltip: [Y7], default: [Q7] },
      $$scope: { ctx: o },
    },
  });
  let K = o[1] && O1(o),
    ne = { type: "google", scope: "CONTACTS", alwaysAuth: !0 };
  (G = new Nt({ props: ne })), o[32](G), G.$on("auth", o[17]);
  let te = { type: "slack", scope: "CONTACTS" };
  return (
    (D = new Nt({ props: te })),
    o[33](D),
    D.$on("auth", o[18]),
    {
      c() {
        (e = v("div")),
          (n = v("h2")),
          (n.textContent = `${A("invite_teammates_modal__header")}`),
          (t = S()),
          (l = v("div")),
          (i = V(r)),
          (s = S()),
          (a = v("div")),
          (u = v("div")),
          (p = v("span")),
          (p.textContent = `${A("invite_teammates_modal__form_header")}`),
          (d = S()),
          (m = v("span")),
          (b = V(g)),
          (k = V("/")),
          (E = V(o[2])),
          (I = S()),
          y(T.$$.fragment),
          (P = S()),
          K && K.c(),
          (M = S()),
          (B = v("div")),
          (B.textContent = `${A("invite_teammates_modal__social_media_text")}`),
          (O = S()),
          (z = v("div")),
          y(G.$$.fragment),
          (W = S()),
          y(D.$$.fragment),
          c(n, "class", "header svelte-gvuikg"),
          c(l, "class", "subheader svelte-gvuikg"),
          c(p, "class", "form-header-text svelte-gvuikg"),
          c(m, "class", "counter svelte-gvuikg"),
          ie(m, "threshold-reached", o[11]),
          c(u, "class", "form-header svelte-gvuikg"),
          c(B, "class", "social-media-text svelte-gvuikg"),
          c(z, "class", "social-media-buttons svelte-gvuikg"),
          c(e, "class", "body svelte-gvuikg"),
          c(e, "slot", "body");
      },
      m(le, re) {
        w(le, e, re),
          f(e, n),
          f(e, t),
          f(e, l),
          f(l, i),
          f(e, s),
          f(e, a),
          f(a, u),
          f(u, p),
          f(u, d),
          f(u, m),
          f(m, b),
          f(m, k),
          f(m, E),
          f(a, I),
          C(T, a, null),
          f(e, P),
          K && K.m(e, null),
          f(e, M),
          f(e, B),
          f(e, O),
          f(e, z),
          C(G, z, null),
          f(z, W),
          C(D, z, null),
          (R = !0);
      },
      p(le, re) {
        (!R || re[0] & 4) &&
          r !==
            (r =
              (le[2] === 1
                ? A(
                    "invite_teammates_modal__subheader_with_already_initial_invited"
                  )
                : A("invite_teammates_modal__subheader")) + "") &&
          ee(i, r),
          (!R || re[0] & 32) && g !== (g = le[5].length + "") && ee(b, g),
          (!R || re[0] & 4) && ee(E, le[2]),
          (!R || re[0] & 2048) && ie(m, "threshold-reached", le[11]);
        let se = {};
        re[0] & 4096 && (se.showTooltip = le[12]),
          (re[0] & 5732) | (re[1] & 131072) &&
            (se.$$scope = { dirty: re, ctx: le }),
          T.$set(se),
          le[1]
            ? K
              ? (K.p(le, re), re[0] & 2 && _(K, 1))
              : ((K = O1(le)), K.c(), _(K, 1), K.m(e, M))
            : K &&
              (Q(),
              h(K, 1, 1, () => {
                K = null;
              }),
              Y());
        let ae = {};
        G.$set(ae);
        let me = {};
        D.$set(me);
      },
      i(le) {
        R ||
          (_(T.$$.fragment, le),
          _(K),
          _(G.$$.fragment, le),
          _(D.$$.fragment, le),
          (R = !0));
      },
      o(le) {
        h(T.$$.fragment, le),
          h(K),
          h(G.$$.fragment, le),
          h(D.$$.fragment, le),
          (R = !1);
      },
      d(le) {
        le && $(e), x(T), K && K.d(), o[32](null), x(G), o[33](null), x(D);
      },
    }
  );
}
function e9(o) {
  let e, n, t;
  return (
    (n = new Wn({ props: { showBorder: !1, disabled: o[7] } })),
    n.$on("back", o[19]),
    n.$on("submit", o[20]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "footer svelte-gvuikg"),
          c(e, "slot", "footer");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r[0] & 128 && (i.disabled = l[7]), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function t9(o) {
  let e, n;
  return (
    (e = new ln({
      props: {
        width: 450,
        height: 580,
        $$slots: { footer: [e9], body: [X7] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[34]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        (l[0] & 8191) | (l[1] & 131072) && (r.$$scope = { dirty: l, ctx: t }),
          e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
var n9 =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
function o9(o, e, n) {
  let t,
    l,
    r = [",", " "],
    i = ["Enter", "Tab", ...r],
    s = oe(),
    { teamId: a } = e,
    { userDomain: u } = e,
    { isGSuite: p } = e,
    { minInvitationThreshold: d } = e,
    { initialEmails: m = [] } = e,
    { teamCreationInfo: g } = e,
    { chosenOauthType: b = null } = e,
    k,
    E,
    I = "",
    T = !1,
    P = !1,
    M = !0,
    B,
    O = !1,
    z = !1,
    G = "",
    W,
    D = () => {
      n(26, (T = !1)), n(27, (z = !1));
    },
    R = () => {
      n(6, (I = "")), n(10, (O = !1)), D();
    },
    K = () => {
      let de = [...W],
        Ie = de.pop();
      Ie && (n(5, (W = de)), n(6, (I = Ie)));
    },
    ne = (de) => {
      n(5, (W = mn([...W, ...de]))), R();
    },
    te = () => n9.test(I),
    le = () => {
      B.focus();
    },
    re = (de) => {
      if (I) {
        if (!te()) {
          n(26, (T = !0)), de && r.includes(de.key) && n(6, (I += de.key));
          return;
        }
        if (W.includes(I)) {
          n(27, (z = !0));
          return;
        }
        ne([I]);
      }
    },
    se = (de) => {
      de.key === "Backspace" && !I && K(),
        D(),
        i.includes(de.key) && (de.preventDefault(), re(de));
    },
    ae = () => re(),
    me = (de) => {
      n(5, (W = W.filter((Ie) => Ie !== de))), R();
    },
    ce = ({ detail: de }) => {
      (G = de), q.actions.showGoogleContactsPicker(de, W, g);
    },
    ke = () => {
      q.actions.showSlackContactsPicker(W, g);
    },
    Re = () => s("close"),
    Pe = () => {
      if (!t) {
        n(10, (O = !0));
        return;
      }
      q.actions.sendAnalyticsEvent("team-b2b.user-invited", {
        source: "email",
      }),
        q.actions.inviteToTeam({
          oauthKey: G,
          teamId: a,
          emails: W,
          allowApprovedDomains: M,
          teamCreationInfo: g,
        }),
        n(7, (P = !0));
    },
    De = () =>
      T
        ? A("invite_teammates_modal__error_tooltip_text")
        : z
        ? A("invite_teammates_modal__add_existing_email_warning_tooltip_text", [
            I,
          ])
        : "Invalid email",
    _e = (de) => me(de);
  function Le() {
    (I = this.value), n(6, I);
  }
  function ze(de) {
    we[de ? "unshift" : "push"](() => {
      (B = de), n(9, B);
    });
  }
  function Xe(de) {
    (M = de), n(8, M);
  }
  function xe(de) {
    we[de ? "unshift" : "push"](() => {
      (k = de), n(3, k);
    });
  }
  function be(de) {
    we[de ? "unshift" : "push"](() => {
      (E = de), n(4, E);
    });
  }
  function he(de) {
    ue.call(this, o, de);
  }
  return (
    (o.$$set = (de) => {
      "teamId" in de && n(22, (a = de.teamId)),
        "userDomain" in de && n(0, (u = de.userDomain)),
        "isGSuite" in de && n(1, (p = de.isGSuite)),
        "minInvitationThreshold" in de && n(2, (d = de.minInvitationThreshold)),
        "initialEmails" in de && n(23, (m = de.initialEmails)),
        "teamCreationInfo" in de && n(24, (g = de.teamCreationInfo)),
        "chosenOauthType" in de && n(25, (b = de.chosenOauthType));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty[0] & 33554456) {
        e: if (b)
          switch (b) {
            case "google":
              k?.openAuthPopup();
              break;
            case "slack":
              E?.openAuthPopup();
              break;
            default:
              break;
          }
      }
      if (o.$$.dirty[0] & 8388608) {
        e: n(5, (W = [...m]));
      }
      if (o.$$.dirty[0] & 36) {
        e: n(11, (t = W.length >= d));
      }
      if (o.$$.dirty[0] & 201326592) {
        e: n(12, (l = T || z));
      }
    }),
    [
      u,
      p,
      d,
      k,
      E,
      W,
      I,
      P,
      M,
      B,
      O,
      t,
      l,
      le,
      se,
      ae,
      me,
      ce,
      ke,
      Re,
      Pe,
      De,
      a,
      m,
      g,
      b,
      T,
      z,
      _e,
      Le,
      ze,
      Xe,
      xe,
      be,
      he,
    ]
  );
}
var wi = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          o9,
          t9,
          U,
          {
            teamId: 22,
            userDomain: 0,
            isGSuite: 1,
            minInvitationThreshold: 2,
            initialEmails: 23,
            teamCreationInfo: 24,
            chosenOauthType: 25,
          },
          K7,
          [-1, -1]
        );
    }
  },
  R1 = wi;
N();
function l9(o) {
  Z(
    o,
    "svelte-sv8ts3",
    ".body.svelte-sv8ts3{padding:0 100px;-webkit-font-smoothing:antialiased}.header.svelte-sv8ts3{font-weight:600;font-size:26px;line-height:31px;text-align:center;margin:10px 0;color:var(--invite-teammates-modal-title)}.text.svelte-sv8ts3{font-weight:400;font-size:12px;line-height:14px;text-align:center;margin-top:11px;color:var(--invite-teammates-modal-secondary-text-color)}.footer.svelte-sv8ts3{display:flex;justify-content:center;margin-top:28px}"
  );
}
function W1(o) {
  let e, n;
  return (
    (e = new ln({
      props: {
        width: 450,
        height: 249,
        $$slots: { footer: [s9], body: [r9] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[1]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 5 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function r9(o) {
  let e, n, t, l;
  return {
    c() {
      (e = v("div")),
        (n = v("h2")),
        (n.textContent = `${A("invite_teammates_success_modal__header")}`),
        (t = S()),
        (l = v("div")),
        (l.textContent = `${A("invite_teammates_success_modal__text")}`),
        c(n, "class", "header svelte-sv8ts3"),
        c(l, "class", "text svelte-sv8ts3"),
        c(e, "class", "body svelte-sv8ts3"),
        c(e, "slot", "body");
    },
    m(r, i) {
      w(r, e, i), f(e, n), f(e, t), f(e, l);
    },
    p: L,
    d(r) {
      r && $(e);
    },
  };
}
function i9(o) {
  let e = A("invite_teammates_success_modal__btn") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function s9(o) {
  let e, n, t;
  return (
    (n = new pe({
      props: {
        href: o[0],
        openInNewTab: !0,
        size: "huge",
        $$slots: { default: [i9] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "footer svelte-sv8ts3"),
          c(e, "slot", "footer");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r & 1 && (i.href = l[0]),
          r & 4 && (i.$$scope = { dirty: r, ctx: l }),
          n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function a9(o) {
  let e,
    n,
    t = o[0] && W1(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(l, r) {
      t && t.m(l, r), w(l, e, r), (n = !0);
    },
    p(l, [r]) {
      l[0]
        ? t
          ? (t.p(l, r), r & 1 && _(t, 1))
          : ((t = W1(l)), t.c(), _(t, 1), t.m(e.parentNode, e))
        : t &&
          (Q(),
          h(t, 1, 1, () => {
            t = null;
          }),
          Y());
    },
    i(l) {
      n || (_(t), (n = !0));
    },
    o(l) {
      h(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && $(e);
    },
  };
}
function c9(o, e, n) {
  let { manageWorkspaceLink: t } = e;
  function l(r) {
    ue.call(this, o, r);
  }
  return (
    (o.$$set = (r) => {
      "manageWorkspaceLink" in r && n(0, (t = r.manageWorkspaceLink));
    }),
    [t, l]
  );
}
var $i = class extends H {
    constructor(e) {
      super(), j(this, e, c9, a9, U, { manageWorkspaceLink: 0 }, l9);
    }
  },
  G1 = $i;
N();
function u9(o) {
  Z(
    o,
    "svelte-ppgigb",
    ".body.svelte-ppgigb{padding:0 50px;-webkit-font-smoothing:antialiased}.header.svelte-ppgigb{font-weight:600;font-size:26px;line-height:31px;text-align:center;margin:10px auto;color:var(--invite-teammates-modal-title);width:315px}.error-description.svelte-ppgigb{display:flex;align-items:center;margin-top:20px;padding:14px;background:var(--field-background-error-color);border:1px solid var(--invite-teammates-modal-error-border);border-radius:4px;font-weight:400;font-size:13px;line-height:16px;color:var(--invite-teammates-modal-error-text-color);letter-spacing:-0.05em}.text.svelte-ppgigb{margin-left:16px;flex:1}.icon.svelte-ppgigb{width:20px;height:20px}.footer.svelte-ppgigb{display:flex;justify-content:center;margin-top:40px}"
  );
}
function p9(o) {
  let e, n, t, l, r, i, s, a, u;
  return (
    (i = new Mn({})),
    {
      c() {
        (e = v("div")),
          (n = v("h2")),
          (n.textContent = `${A("invite_teammates_fail_modal__header")}`),
          (t = S()),
          (l = v("div")),
          (r = v("div")),
          y(i.$$.fragment),
          (s = S()),
          (a = v("div")),
          (a.textContent = `${A("invite_teammates_fail_modal__text")}`),
          c(n, "class", "header svelte-ppgigb"),
          c(r, "class", "icon svelte-ppgigb"),
          c(a, "class", "text svelte-ppgigb"),
          c(l, "class", "error-description svelte-ppgigb"),
          c(e, "class", "body svelte-ppgigb"),
          c(e, "slot", "body");
      },
      m(p, d) {
        w(p, e, d),
          f(e, n),
          f(e, t),
          f(e, l),
          f(l, r),
          C(i, r, null),
          f(l, s),
          f(l, a),
          (u = !0);
      },
      p: L,
      i(p) {
        u || (_(i.$$.fragment, p), (u = !0));
      },
      o(p) {
        h(i.$$.fragment, p), (u = !1);
      },
      d(p) {
        p && $(e), x(i);
      },
    }
  );
}
function f9(o) {
  let e = A("invite_teammates_fail_modal__btn") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function d9(o) {
  let e, n, t;
  return (
    (n = new pe({
      props: { size: "huge", $$slots: { default: [f9] }, $$scope: { ctx: o } },
    })),
    n.$on("click", o[0]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          c(e, "class", "footer svelte-ppgigb"),
          c(e, "slot", "footer");
      },
      m(l, r) {
        w(l, e, r), C(n, e, null), (t = !0);
      },
      p(l, r) {
        let i = {};
        r & 64 && (i.$$scope = { dirty: r, ctx: l }), n.$set(i);
      },
      i(l) {
        t || (_(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        h(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && $(e), x(n);
      },
    }
  );
}
function m9(o) {
  let e, n;
  return (
    (e = new ln({
      props: {
        width: 450,
        height: 310,
        $$slots: { footer: [d9], body: [p9] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 64 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function _9(o, e, n) {
  let { from: t = ns } = e,
    { initialEmails: l } = e,
    { teamCreationInfo: r } = e,
    { oauthKey: i = "" } = e,
    s = () => {
      if (t) {
        if (t === "slack") {
          q.actions.showSlackContactsPicker(l, r);
          return;
        }
        if (t === "google" && i) {
          q.actions.showGoogleContactsPicker(i, l, r);
          return;
        }
        q.actions.showInviteTeammatesModal(l, r);
      }
    };
  function a(u) {
    ue.call(this, o, u);
  }
  return (
    (o.$$set = (u) => {
      "from" in u && n(1, (t = u.from)),
        "initialEmails" in u && n(2, (l = u.initialEmails)),
        "teamCreationInfo" in u && n(3, (r = u.teamCreationInfo)),
        "oauthKey" in u && n(4, (i = u.oauthKey));
    }),
    [s, t, l, r, i, a]
  );
}
var yi = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          _9,
          m9,
          U,
          { from: 1, initialEmails: 2, teamCreationInfo: 3, oauthKey: 4 },
          u9
        );
    }
  },
  F1 = yi;
N();
N();
N();
function g9(o) {
  Z(
    o,
    "svelte-1wd3vli",
    ".price.svelte-1wd3vli{display:flex;flex-direction:row;column-gap:4px}.price-value.svelte-1wd3vli{color:var(--text-primary-color);font-weight:700;font-size:35px;line-height:42px}.price-value.disabled.svelte-1wd3vli{color:var(--text-secondary-color)}.price-period.svelte-1wd3vli{color:var(--text-primary-color);font-weight:400;font-size:16px;line-height:16px;letter-spacing:-0.02em;margin-top:6px}.price-period.disabled.svelte-1wd3vli{color:var(--text-secondary-color)}"
  );
}
function h9(o) {
  let e, n, t, l, r, i;
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (t = V("$")),
        (l = V(o[0])),
        (r = S()),
        (i = v("span")),
        (i.textContent = "/month"),
        c(n, "class", "price-value svelte-1wd3vli"),
        ie(n, "disabled", o[1]),
        c(i, "class", "price-period svelte-1wd3vli"),
        ie(i, "disabled", o[1]),
        c(e, "class", "price svelte-1wd3vli");
    },
    m(s, a) {
      w(s, e, a), f(e, n), f(n, t), f(n, l), f(e, r), f(e, i);
    },
    p(s, [a]) {
      a & 1 && ee(l, s[0]),
        a & 2 && ie(n, "disabled", s[1]),
        a & 2 && ie(i, "disabled", s[1]);
    },
    i: L,
    o: L,
    d(s) {
      s && $(e);
    },
  };
}
function v9(o, e, n) {
  let { price: t } = e,
    { disabled: l } = e;
  return (
    (o.$$set = (r) => {
      "price" in r && n(0, (t = r.price)),
        "disabled" in r && n(1, (l = r.disabled));
    }),
    [t, l]
  );
}
var Ci = class extends H {
    constructor(e) {
      super(), j(this, e, v9, h9, U, { price: 0, disabled: 1 }, g9);
    }
  },
  Z1 = Ci;
function b9(o) {
  Z(
    o,
    "svelte-3iqbft",
    `.card.svelte-3iqbft{--border-color:var(--billing-offers-border);--border-size:1px;width:100%;border-radius:8px;display:flex;position:relative;flex-direction:column;justify-content:center;align-items:center;padding:37px 0 24px}.card.svelte-3iqbft::before{content:'';position:absolute;inset:0;border-radius:8px;padding:var(--border-size);background:var(--border-color);-webkit-mask:linear-gradient(var(--text-primary-color) 0 0) content-box,
      linear-gradient(var(--text-primary-color) 0 0);-webkit-mask-composite:xor;z-index:-1}.card-disabled.svelte-3iqbft{background:var(--billing-offers-card-disabled-bg)}.card-headless.svelte-3iqbft{padding:55px 0 24px}.card-gradient.svelte-3iqbft{--border-color:linear-gradient(
      to right,
      rgba(125 76 221 / 1),
      rgba(236 63 60 / 1),
      rgba(255 184 0 / 1)
    );--border-size:2px}.badge.svelte-3iqbft{position:absolute;background:linear-gradient(62.79deg, #7d4cdd 23.97%, #ec3f3c 62.31%, #ffb800 96.14%), #59b64b;border-radius:18px;font-weight:700;font-size:18px;text-align:center;color:#fff;padding:4px;top:6px;right:6px}.sub-header.svelte-3iqbft{font-weight:700;font-size:12px;line-height:14px;color:var(--popup-text-color);padding-bottom:9px}.label.svelte-3iqbft{font-size:14px;letter-spacing:-0.02em;color:var(--text-secondary-color);margin-top:5px;margin-bottom:16px}.widget.svelte-3iqbft{min-height:64px;width:inherit;padding-left:22px;padding-right:22px}.submit-btn.svelte-3iqbft{margin-top:26px}`
  );
}
var k9 = (o) => ({}),
  K1 = (o) => ({});
function Q1(o) {
  let e, n;
  return {
    c() {
      (e = v("div")), (n = V(o[3])), c(e, "class", "sub-header svelte-3iqbft");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 8 && ee(n, t[3]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function Y1(o) {
  let e, n;
  return {
    c() {
      (e = v("div")), (n = V(o[2])), c(e, "class", "badge svelte-3iqbft");
    },
    m(t, l) {
      w(t, e, l), f(e, n);
    },
    p(t, l) {
      l & 4 && ee(n, t[2]);
    },
    d(t) {
      t && $(e);
    },
  };
}
function w9(o) {
  let e = A("overlay_billing_offer_upgrade") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function $9(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g,
    b = o[3] && Q1(o),
    k = o[2] && Y1(o);
  l = new Z1({ props: { price: o[0], disabled: o[4] } });
  let E = o[7].widget,
    I = We(E, o, o[9], K1);
  return (
    (m = new pe({
      props: {
        disabled: o[4] || o[6],
        size: "large",
        mod: o[4] || !o[5] ? "grey" : "primary",
        $$slots: { default: [w9] },
        $$scope: { ctx: o },
      },
    })),
    m.$on("click", o[8]),
    {
      c() {
        (e = v("div")),
          b && b.c(),
          (n = S()),
          k && k.c(),
          (t = S()),
          y(l.$$.fragment),
          (r = S()),
          (i = v("div")),
          (s = V(o[1])),
          (a = S()),
          (u = v("div")),
          I && I.c(),
          (p = S()),
          (d = v("div")),
          y(m.$$.fragment),
          c(i, "class", "label svelte-3iqbft"),
          c(u, "class", "widget svelte-3iqbft"),
          c(d, "class", "submit-btn svelte-3iqbft"),
          c(e, "class", "card svelte-3iqbft"),
          ie(e, "card-headless", !o[3]),
          ie(e, "card-disabled", o[4]),
          ie(e, "card-gradient", o[5]);
      },
      m(T, P) {
        w(T, e, P),
          b && b.m(e, null),
          f(e, n),
          k && k.m(e, null),
          f(e, t),
          C(l, e, null),
          f(e, r),
          f(e, i),
          f(i, s),
          f(e, a),
          f(e, u),
          I && I.m(u, null),
          f(e, p),
          f(e, d),
          C(m, d, null),
          (g = !0);
      },
      p(T, [P]) {
        T[3]
          ? b
            ? b.p(T, P)
            : ((b = Q1(T)), b.c(), b.m(e, n))
          : b && (b.d(1), (b = null)),
          T[2]
            ? k
              ? k.p(T, P)
              : ((k = Y1(T)), k.c(), k.m(e, t))
            : k && (k.d(1), (k = null));
        let M = {};
        P & 1 && (M.price = T[0]),
          P & 16 && (M.disabled = T[4]),
          l.$set(M),
          (!g || P & 2) && ee(s, T[1]),
          I &&
            I.p &&
            (!g || P & 512) &&
            Fe(I, E, T, T[9], g ? Ge(E, T[9], P, k9) : Ze(T[9]), K1);
        let B = {};
        P & 80 && (B.disabled = T[4] || T[6]),
          P & 48 && (B.mod = T[4] || !T[5] ? "grey" : "primary"),
          P & 512 && (B.$$scope = { dirty: P, ctx: T }),
          m.$set(B),
          (!g || P & 8) && ie(e, "card-headless", !T[3]),
          (!g || P & 16) && ie(e, "card-disabled", T[4]),
          (!g || P & 32) && ie(e, "card-gradient", T[5]);
      },
      i(T) {
        g || (_(l.$$.fragment, T), _(I, T), _(m.$$.fragment, T), (g = !0));
      },
      o(T) {
        h(l.$$.fragment, T), h(I, T), h(m.$$.fragment, T), (g = !1);
      },
      d(T) {
        T && $(e), b && b.d(), k && k.d(), x(l), I && I.d(T), x(m);
      },
    }
  );
}
function y9(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    { price: r } = e,
    { label: i } = e,
    { badge: s = null } = e,
    { header: a = null } = e,
    { disabled: u = !1 } = e,
    { gradient: p = !1 } = e,
    { buttonLoading: d = !1 } = e;
  function m(g) {
    ue.call(this, o, g);
  }
  return (
    (o.$$set = (g) => {
      "price" in g && n(0, (r = g.price)),
        "label" in g && n(1, (i = g.label)),
        "badge" in g && n(2, (s = g.badge)),
        "header" in g && n(3, (a = g.header)),
        "disabled" in g && n(4, (u = g.disabled)),
        "gradient" in g && n(5, (p = g.gradient)),
        "buttonLoading" in g && n(6, (d = g.buttonLoading)),
        "$$scope" in g && n(9, (l = g.$$scope));
    }),
    [r, i, s, a, u, p, d, t, m, l]
  );
}
var xi = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          y9,
          $9,
          U,
          {
            price: 0,
            label: 1,
            badge: 2,
            header: 3,
            disabled: 4,
            gradient: 5,
            buttonLoading: 6,
          },
          b9
        );
    }
  },
  rn = xi;
N();
function C9(o) {
  Z(
    o,
    "svelte-1vobv6u",
    ".timer-row.svelte-1vobv6u{display:flex;flex-direction:row;column-gap:3px}.block.svelte-1vobv6u{display:flex;flex-direction:column}.block-number.svelte-1vobv6u{display:flex;align-items:center;justify-content:center;background:rgba(26 140 255 / 0.12);border-radius:5px;width:59px;height:48px;font-weight:700;font-size:16px;line-height:19px;letter-spacing:-0.06em;color:var(--text-primary-color)}.block-label.svelte-1vobv6u{color:var(--text-secondary-color);text-align:center}.block-gap.svelte-1vobv6u{color:var(--text-primary-color);letter-spacing:-0.06em;font-weight:700;font-size:16px;line-height:19px;text-align:center;padding-top:14px}"
  );
}
function x9(o) {
  let e,
    n,
    t,
    l = (o[0] < 10 ? `0${o[0]}` : o[0]) + "",
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g = (o[1] < 10 ? `0${o[1]}` : o[1]) + "",
    b,
    k,
    E,
    I,
    T,
    P,
    M,
    B,
    O = (o[2] < 10 ? `0${o[2]}` : o[2]) + "",
    z,
    G,
    W;
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (t = v("div")),
        (r = V(l)),
        (i = S()),
        (s = v("div")),
        (s.textContent = `${A("overlay_billing_last_chance__hours")}`),
        (a = S()),
        (u = v("span")),
        (u.textContent = ":"),
        (p = S()),
        (d = v("div")),
        (m = v("div")),
        (b = V(g)),
        (k = S()),
        (E = v("div")),
        (E.textContent = `${A("overlay_billing_last_chance__min")}`),
        (I = S()),
        (T = v("span")),
        (T.textContent = ":"),
        (P = S()),
        (M = v("div")),
        (B = v("div")),
        (z = V(O)),
        (G = S()),
        (W = v("div")),
        (W.textContent = `${A("overlay_billing_last_chance__sec")}`),
        c(t, "class", "block-number svelte-1vobv6u"),
        c(s, "class", "block-label svelte-1vobv6u"),
        c(n, "class", "block svelte-1vobv6u"),
        c(u, "class", "block-gap svelte-1vobv6u"),
        c(m, "class", "block-number svelte-1vobv6u"),
        c(E, "class", "block-label svelte-1vobv6u"),
        c(d, "class", "block svelte-1vobv6u"),
        c(T, "class", "block-gap svelte-1vobv6u"),
        c(B, "class", "block-number svelte-1vobv6u"),
        c(W, "class", "block-label svelte-1vobv6u"),
        c(M, "class", "block svelte-1vobv6u"),
        c(e, "class", "timer-row svelte-1vobv6u");
    },
    m(D, R) {
      w(D, e, R),
        f(e, n),
        f(n, t),
        f(t, r),
        f(n, i),
        f(n, s),
        f(e, a),
        f(e, u),
        f(e, p),
        f(e, d),
        f(d, m),
        f(m, b),
        f(d, k),
        f(d, E),
        f(e, I),
        f(e, T),
        f(e, P),
        f(e, M),
        f(M, B),
        f(B, z),
        f(M, G),
        f(M, W);
    },
    p(D, [R]) {
      R & 1 && l !== (l = (D[0] < 10 ? `0${D[0]}` : D[0]) + "") && ee(r, l),
        R & 2 && g !== (g = (D[1] < 10 ? `0${D[1]}` : D[1]) + "") && ee(b, g),
        R & 4 && O !== (O = (D[2] < 10 ? `0${D[2]}` : D[2]) + "") && ee(z, O);
    },
    i: L,
    o: L,
    d(D) {
      D && $(e);
    },
  };
}
function S9(o, e, n) {
  let t = oe(),
    { hours: l } = e,
    { minutes: r } = e,
    { seconds: i } = e,
    s = null,
    a = () => {
      l === 0 && r === 0 && i === 0 && t("close"), n(0, (l -= 1));
    },
    u = () => {
      r === 0 && (a(), n(1, (r = 60))), n(1, (r -= 1));
    },
    p = () => {
      i <= 0 && (u(), n(2, (i = 60))), n(2, (i -= 1));
    };
  return (
    ye(() => {
      s = setInterval(() => {
        p();
      }, 1e3);
    }),
    bn(() => {
      s && clearInterval(s);
    }),
    (o.$$set = (d) => {
      "hours" in d && n(0, (l = d.hours)),
        "minutes" in d && n(1, (r = d.minutes)),
        "seconds" in d && n(2, (i = d.seconds));
    }),
    [l, r, i]
  );
}
var Si = class extends H {
    constructor(e) {
      super(), j(this, e, S9, x9, U, { hours: 0, minutes: 1, seconds: 2 }, C9);
    }
  },
  Zn = Si;
N();
function A9(o) {
  Z(
    o,
    "svelte-1yxvbjy",
    ".effective.svelte-1yxvbjy{display:flex;border:1px solid rgba(245 97 48 / 0.3);border-radius:5px;font-weight:700;font-size:14px;line-height:17px;justify-content:center;align-items:center;letter-spacing:-0.01em;color:rgba(245 97 48 / 0.6);height:48px;margin-bottom:16px}"
  );
}
function E9(o) {
  let e,
    n =
      A("overlay_billing_last_chance__effective_from", [
        o[0].toString(),
        A(o[1]),
      ]) + "",
    t;
  return {
    c() {
      (e = v("div")), (t = V(n)), c(e, "class", "effective svelte-1yxvbjy");
    },
    m(l, r) {
      w(l, e, r), f(e, t);
    },
    p(l, [r]) {
      r & 1 &&
        n !==
          (n =
            A("overlay_billing_last_chance__effective_from", [
              l[0].toString(),
              A(l[1]),
            ]) + "") &&
        ee(t, n);
    },
    i: L,
    o: L,
    d(l) {
      l && $(e);
    },
  };
}
function I9(o, e, n) {
  let { date: t } = e,
    { month: l } = e,
    r = `month_${l}`;
  return (
    (o.$$set = (i) => {
      "date" in i && n(0, (t = i.date)), "month" in i && n(2, (l = i.month));
    }),
    [t, r, l]
  );
}
var Ai = class extends H {
    constructor(e) {
      super(), j(this, e, I9, E9, U, { date: 0, month: 2 }, A9);
    }
  },
  J1 = Ai;
N();
N();
function T9(o) {
  Z(
    o,
    "svelte-1vshv4p",
    ".benefits-card.svelte-1vshv4p.svelte-1vshv4p{display:flex;flex-direction:column;width:100%}.benefits-btn.svelte-1vshv4p.svelte-1vshv4p{display:flex;flex-direction:row;column-gap:8px;border:1px solid var(--billing-offers-border);border-radius:6px;padding:17px 0;align-items:center;letter-spacing:-0.01em;font-weight:590;font-size:14px;line-height:17px;color:var(--text-primary-color)}.expand-icon.svelte-1vshv4p.svelte-1vshv4p{transform:rotate(90deg)}.opened.svelte-1vshv4p.svelte-1vshv4p{border-radius:6px 6px 0 0}.opened.svelte-1vshv4p .expand-icon.svelte-1vshv4p{transform:rotate(270deg)}.benefits-list.svelte-1vshv4p.svelte-1vshv4p{border-width:0 1px 1px;border-style:solid;border-color:var(--billing-offers-border);border-radius:0 0 6px 6px;display:grid;grid-template-columns:1fr 1fr 1.1fr;row-gap:8px;column-gap:8px;padding:15px 15px 20px}.feature.svelte-1vshv4p.svelte-1vshv4p{display:flex;align-items:center;column-gap:5px;color:var(--text-primary-color)}.icon.svelte-1vshv4p.svelte-1vshv4p{width:20px;height:20px;color:#1977f3}"
  );
}
function X1(o, e, n) {
  let t = o.slice();
  return (t[3] = e[n]), t;
}
function ed(o) {
  let e,
    n,
    t = o[2],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = td(X1(o, t, i));
  let r = (i) =>
    h(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v("div");
      for (let i = 0; i < l.length; i += 1) l[i].c();
      c(e, "class", "benefits-list svelte-1vshv4p");
    },
    m(i, s) {
      w(i, e, s);
      for (let a = 0; a < l.length; a += 1) l[a] && l[a].m(e, null);
      n = !0;
    },
    p(i, s) {
      if (s & 4) {
        t = i[2];
        let a;
        for (a = 0; a < t.length; a += 1) {
          let u = X1(i, t, a);
          l[a]
            ? (l[a].p(u, s), _(l[a], 1))
            : ((l[a] = td(u)), l[a].c(), _(l[a], 1), l[a].m(e, null));
        }
        for (Q(), a = t.length; a < l.length; a += 1) r(a);
        Y();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < t.length; s += 1) _(l[s]);
        n = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1) h(l[s]);
      n = !1;
    },
    d(i) {
      i && $(e), Ae(l, i);
    },
  };
}
function td(o) {
  let e,
    n,
    t,
    l,
    r = o[3].title + "",
    i,
    s,
    a;
  var u = o[3].icon;
  function p(d) {
    return {};
  }
  return (
    u && (t = mt(u, p(o))),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          t && y(t.$$.fragment),
          (l = S()),
          (i = V(r)),
          (s = S()),
          c(n, "class", "icon svelte-1vshv4p"),
          c(e, "class", "feature svelte-1vshv4p");
      },
      m(d, m) {
        w(d, e, m),
          f(e, n),
          t && C(t, n, null),
          f(e, l),
          f(e, i),
          f(e, s),
          (a = !0);
      },
      p(d, m) {
        if (u !== (u = d[3].icon)) {
          if (t) {
            Q();
            let g = t;
            h(g.$$.fragment, 1, 0, () => {
              x(g, 1);
            }),
              Y();
          }
          u
            ? ((t = mt(u, p(d))),
              y(t.$$.fragment),
              _(t.$$.fragment, 1),
              C(t, n, null))
            : (t = null);
        }
      },
      i(d) {
        a || (t && _(t.$$.fragment, d), (a = !0));
      },
      o(d) {
        t && h(t.$$.fragment, d), (a = !1);
      },
      d(d) {
        d && $(e), t && x(t);
      },
    }
  );
}
function M9(o) {
  let e, n, t, l, r, i, s, a, u, p;
  i = new Vs({ props: { width: "12", height: "12" } });
  let d = o[0] && ed(o);
  return {
    c() {
      (e = v("div")),
        (n = v("button")),
        (t = v("span")),
        (t.textContent = `${A(
          "overlay_billing_last_chance__benefits_of_pro"
        )}`),
        (l = S()),
        (r = v("span")),
        y(i.$$.fragment),
        (s = S()),
        d && d.c(),
        c(r, "class", "expand-icon svelte-1vshv4p"),
        c(n, "class", "benefits-btn svelte-1vshv4p"),
        ie(n, "opened", o[0]),
        c(e, "class", "benefits-card svelte-1vshv4p");
    },
    m(m, g) {
      w(m, e, g),
        f(e, n),
        f(n, t),
        f(n, l),
        f(n, r),
        C(i, r, null),
        f(e, s),
        d && d.m(e, null),
        (a = !0),
        u || ((p = X(n, "click", o[1])), (u = !0));
    },
    p(m, [g]) {
      (!a || g & 1) && ie(n, "opened", m[0]),
        m[0]
          ? d
            ? (d.p(m, g), g & 1 && _(d, 1))
            : ((d = ed(m)), d.c(), _(d, 1), d.m(e, null))
          : d &&
            (Q(),
            h(d, 1, 1, () => {
              d = null;
            }),
            Y());
    },
    i(m) {
      a || (_(i.$$.fragment, m), _(d), (a = !0));
    },
    o(m) {
      h(i.$$.fragment, m), h(d), (a = !1);
    },
    d(m) {
      m && $(e), x(i), d && d.d(), (u = !1), p();
    },
  };
}
function P9(o, e, n) {
  let t = !1,
    l = () => {
      n(0, (t = !t));
    },
    r = [
      { icon: In, title: A("overlay_upgrade_plan__features_unlimited_apps") },
      { icon: An, title: A("overlay_upgrade_plan__features_split_view") },
      { icon: Dn, title: A("overlay_upgrade_plan__features_adblock") },
      { icon: Zt, title: A("overlay_upgrade_plan__features_multi_accounts") },
      { icon: en, title: A("overlay_upgrade_plan__features_sidebar") },
      { icon: tn, title: A("overlay_upgrade_plan__features_tab_suspender") },
      { icon: qt, title: A("overlay_upgrade_plan__features_workspaces") },
      { icon: En, title: A("overlay_upgrade_plan__features_tab_sessions") },
      {
        icon: Ln,
        title: A("overlay_upgrade_plan__features_fingerprinting_defense"),
      },
      { icon: Hn, title: A("overlay_upgrade_plan__features_focus_mode") },
      { icon: Un, title: A("overlay_upgrade_plan__features_global_search") },
    ];
  return [t, l, r];
}
var Ei = class extends H {
    constructor(e) {
      super(), j(this, e, P9, M9, U, {}, T9);
    }
  },
  nd = Ei;
function z9(o) {
  Z(
    o,
    "svelte-9gqvg2",
    ".container.svelte-9gqvg2{padding:40px;display:flex;flex-direction:column;row-gap:25px}.header.svelte-9gqvg2{color:var(--text-primary-color);text-align:center;font-weight:700;font-size:30px;line-height:36px;padding-bottom:12px}.body.svelte-9gqvg2{display:flex;flex-direction:row;column-gap:20px}.close-btn.svelte-9gqvg2{position:absolute;top:0;right:0;padding:6px 6px 0 0;color:var(--text-secondary-color)}"
  );
}
var B9 = (o) => ({}),
  od = (o) => ({}),
  N9 = (o) => ({}),
  ld = (o) => ({});
function q9(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u,
    p,
    d,
    m,
    g = o[1].header,
    b = We(g, o, o[3], ld);
  r = new qe({ props: { width: "12", height: "12" } });
  let k = o[1].body,
    E = We(k, o, o[3], od);
  return (
    (u = new nd({})),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          b && b.c(),
          (t = S()),
          (l = v("button")),
          y(r.$$.fragment),
          (i = S()),
          (s = v("div")),
          E && E.c(),
          (a = S()),
          y(u.$$.fragment),
          c(n, "class", "header svelte-9gqvg2"),
          c(l, "class", "close-btn svelte-9gqvg2"),
          c(s, "class", "body svelte-9gqvg2"),
          c(e, "class", "container svelte-9gqvg2");
      },
      m(I, T) {
        w(I, e, T),
          f(e, n),
          b && b.m(n, null),
          f(e, t),
          f(e, l),
          C(r, l, null),
          f(e, i),
          f(e, s),
          E && E.m(s, null),
          f(e, a),
          C(u, e, null),
          (p = !0),
          d || ((m = X(l, "click", o[0])), (d = !0));
      },
      p(I, T) {
        b &&
          b.p &&
          (!p || T & 8) &&
          Fe(b, g, I, I[3], p ? Ge(g, I[3], T, N9) : Ze(I[3]), ld),
          E &&
            E.p &&
            (!p || T & 8) &&
            Fe(E, k, I, I[3], p ? Ge(k, I[3], T, B9) : Ze(I[3]), od);
      },
      i(I) {
        p ||
          (_(b, I),
          _(r.$$.fragment, I),
          _(E, I),
          _(u.$$.fragment, I),
          (p = !0));
      },
      o(I) {
        h(b, I), h(r.$$.fragment, I), h(E, I), h(u.$$.fragment, I), (p = !1);
      },
      d(I) {
        I && $(e), b && b.d(I), x(r), E && E.d(I), x(u), (d = !1), m();
      },
    }
  );
}
function D9(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        minWidth: 580,
        width: 580,
        maxHeight: 900,
        $$slots: { default: [q9] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 8 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function L9(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [D9] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[2]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 8 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U9(o, e, n) {
  let { $$slots: t = {}, $$scope: l } = e,
    r = oe(),
    i = () => {
      r("close");
    };
  function s(a) {
    ue.call(this, o, a);
  }
  return (
    (o.$$set = (a) => {
      "$$scope" in a && n(3, (l = a.$$scope));
    }),
    [i, t, s, l]
  );
}
var Ii = class extends H {
    constructor(e) {
      super(), j(this, e, U9, L9, U, {}, z9);
    }
  },
  Kn = Ii;
function j9(o) {
  let e = A("overlay_billing_last_chance__header") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function H9(o) {
  let e,
    n,
    t = [o[0].currentPrice.timer],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Zn({ props: l })),
    e.$on("close", o[3]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 1 ? He(t, [Ve(r[0].currentPrice.timer)]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function V9(o) {
  let e,
    n,
    t = [o[0].newPrice.effective],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new J1({ props: l })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 1 ? He(t, [Ve(r[0].newPrice.effective)]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function O9(o) {
  let e, n, t, l;
  return (
    (e = new rn({
      props: {
        header: A("overlay_billing_last_chance__current_price"),
        price: o[0].currentPrice.monthlyPrice,
        label: A("overlay_billing_last_chance__billed_annually"),
        buttonLoading: o[1],
        gradient: !0,
        $$slots: { widget: [H9] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[4]),
    e.$on("click", o[2]),
    (t = new rn({
      props: {
        header: A("overlay_billing_last_chance__new_price"),
        price: o[0].newPrice.monthlyPrice,
        label: A("overlay_billing_last_chance__billed_monthly"),
        disabled: !0,
        $$slots: { widget: [V9] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 1 && (s.price = r[0].currentPrice.monthlyPrice),
          i & 2 && (s.buttonLoading = r[1]),
          i & 129 && (s.$$scope = { dirty: i, ctx: r }),
          e.$set(s);
        let a = {};
        i & 1 && (a.price = r[0].newPrice.monthlyPrice),
          i & 129 && (a.$$scope = { dirty: i, ctx: r }),
          t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function R9(o) {
  let e, n;
  return (
    (e = new Kn({
      props: { $$slots: { body: [O9], header: [j9] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 131 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function W9(o, e, n) {
  let { payload: t } = e,
    l = !1,
    r = () => {
      n(1, (l = !0)),
        q.actions.openUpgradePlanTab(t.currentPrice.planId),
        q.actions.sendAnalyticsEvent(
          "monetization.last-chance-offer-modal.clicked",
          void 0
        ),
        setTimeout(() => {
          n(1, (l = !1));
        }, zt(5));
    };
  ye(() => {
    q.actions.sendAnalyticsEvent(
      "monetization.last-chance-offer-modal.showed",
      void 0
    );
  });
  function i(p) {
    ue.call(this, o, p);
  }
  function s(p) {
    ue.call(this, o, p);
  }
  function a(p) {
    ue.call(this, o, p);
  }
  function u(p) {
    ue.call(this, o, p);
  }
  return (
    (o.$$set = (p) => {
      "payload" in p && n(0, (t = p.payload));
    }),
    [t, l, r, i, s, a, u]
  );
}
var Ti = class extends H {
    constructor(e) {
      super(), j(this, e, W9, R9, U, { payload: 0 });
    }
  },
  rd = Ti;
N();
function G9(o) {
  Z(
    o,
    "svelte-1y9gy1g",
    `.text-gradient.svelte-1y9gy1g{background:linear-gradient(
      to right,
      rgb(125 76 221 / 1),
      rgb(236 63 60 / 1),
      rgb(255 184 0 / 1)
    );-webkit-background-clip:text;-webkit-text-fill-color:transparent}`
  );
}
function F9(o) {
  let e,
    n = A("overlay_billing_offer_limited_header") + "",
    t,
    l,
    r = A("overlay_billing_offer_save") + "",
    i,
    s,
    a = o[0].yearlyPrice.discountPercentage + "",
    u,
    p;
  return {
    c() {
      (e = new vn(!1)),
        (t = S()),
        (l = v("span")),
        (i = V(r)),
        (s = S()),
        (u = V(a)),
        (p = V("%")),
        (e.a = t),
        c(l, "class", "text-gradient svelte-1y9gy1g");
    },
    m(d, m) {
      e.m(n, d, m), w(d, t, m), w(d, l, m), f(l, i), f(l, s), f(l, u), f(l, p);
    },
    p(d, m) {
      m & 1 && a !== (a = d[0].yearlyPrice.discountPercentage + "") && ee(u, a);
    },
    d(d) {
      d && e.d(), d && $(t), d && $(l);
    },
  };
}
function Z9(o) {
  let e,
    n,
    t = [o[0].yearlyPrice.timer],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Zn({ props: l })),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 1 ? He(t, [Ve(r[0].yearlyPrice.timer)]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function K9(o) {
  let e, n, t, l;
  return (
    (e = new rn({
      props: {
        buttonLoading: o[1],
        label: A("overlay_billing_last_chance__billed_monthly"),
        price: o[0].monthlyPrice.price,
      },
    })),
    e.$on("click", o[3]),
    e.$on("close", o[4]),
    (t = new rn({
      props: {
        badge: `-${o[0].yearlyPrice.discountPercentage}%`,
        buttonLoading: o[1],
        label: A("overlay_billing_last_chance__billed_annually"),
        price: o[0].yearlyPrice.price,
        gradient: !0,
        $$slots: { widget: [Z9] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", o[6]),
    t.$on("close", o[7]),
    {
      c() {
        y(e.$$.fragment), (n = S()), y(t.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), w(r, n, i), C(t, r, i), (l = !0);
      },
      p(r, i) {
        let s = {};
        i & 2 && (s.buttonLoading = r[1]),
          i & 1 && (s.price = r[0].monthlyPrice.price),
          e.$set(s);
        let a = {};
        i & 1 && (a.badge = `-${r[0].yearlyPrice.discountPercentage}%`),
          i & 2 && (a.buttonLoading = r[1]),
          i & 1 && (a.price = r[0].yearlyPrice.price),
          i & 513 && (a.$$scope = { dirty: i, ctx: r }),
          t.$set(a);
      },
      i(r) {
        l || (_(e.$$.fragment, r), _(t.$$.fragment, r), (l = !0));
      },
      o(r) {
        h(e.$$.fragment, r), h(t.$$.fragment, r), (l = !1);
      },
      d(r) {
        x(e, r), r && $(n), x(t, r);
      },
    }
  );
}
function Q9(o) {
  let e, n;
  return (
    (e = new Kn({
      props: { $$slots: { body: [K9], header: [F9] }, $$scope: { ctx: o } },
    })),
    e.$on("close", o[8]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 515 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function Y9(o, e, n) {
  let { payload: t } = e,
    l = !1,
    r = (m) => {
      n(1, (l = !0)),
        q.actions.openUpgradePlanTab(m),
        q.actions.sendAnalyticsEvent(
          "monetization.discount-offer-popup.clicked",
          { "plan-id": m }
        ),
        setTimeout(() => {
          n(1, (l = !1));
        }, zt(5));
    };
  ye(() => {
    q.actions.sendAnalyticsEvent(
      "monetization.discount-offer-modal.showed",
      void 0
    );
  });
  let i = () => r(t.monthlyPrice.planId);
  function s(m) {
    ue.call(this, o, m);
  }
  function a(m) {
    ue.call(this, o, m);
  }
  let u = () => r(t.yearlyPrice.planId);
  function p(m) {
    ue.call(this, o, m);
  }
  function d(m) {
    ue.call(this, o, m);
  }
  return (
    (o.$$set = (m) => {
      "payload" in m && n(0, (t = m.payload));
    }),
    [t, l, r, i, s, a, u, p, d]
  );
}
var Mi = class extends H {
    constructor(e) {
      super(), j(this, e, Y9, Q9, U, { payload: 0 }, G9);
    }
  },
  id = Mi;
N();
N();
function J9(o) {
  Z(
    o,
    "svelte-13398h7",
    `.main.svelte-13398h7.svelte-13398h7{padding:25px}.main.svelte-13398h7 .button{height:40px;display:flex}.info.svelte-13398h7.svelte-13398h7{text-align:center;margin:0 25px 25px;font-size:14px;line-height:17px}.offer.svelte-13398h7.svelte-13398h7{position:relative;width:fit-content;min-width:220px;margin:0 auto;padding:35px 45px}.offer.svelte-13398h7.svelte-13398h7::before{content:'';position:absolute;inset:0;border-radius:8px;padding:2px;background:linear-gradient(62.79deg, #7d4cdd 23.97%, #ec3f3c 62.31%, #ffb800 96.14%), #59b64b;-webkit-mask:linear-gradient(var(--text-primary-color) 0 0) content-box,
        linear-gradient(var(--text-primary-color) 0 0);-webkit-mask-composite:xor}.offer-badge.svelte-13398h7.svelte-13398h7{color:#fff;background:linear-gradient(62.79deg, #7d4cdd 23.97%, #ec3f3c 62.31%, #ffb800 96.14%), #59b64b;border-radius:16px;position:absolute;font-weight:bold;top:-11px;right:-9px;padding:3px 9px}.offer-label.svelte-13398h7.svelte-13398h7{display:block;text-align:center;color:var(--popup-text-color);font-weight:bold;font-size:12px;line-height:14px;margin-bottom:8px}.warning.svelte-13398h7.svelte-13398h7{text-align:center;color:var(--cancel-discount-offer-modal-warning-text);background:var(--cancel-discount-offer-modal-warning-background);border-radius:15px;font-weight:400;font-size:12px;line-height:16px;padding:14px;margin:20px}.logo.svelte-13398h7.svelte-13398h7{width:70px;height:70px;border-radius:64px;background-color:var(--cancel-discount-offer-modal-logo-background);position:absolute;left:190px;top:-35px;display:flex;justify-content:center;align-items:center}.header.svelte-13398h7.svelte-13398h7{background-color:rgb(255 166 112 / 0.15);border-radius:20px 20px 25px 25px;padding:53px 42px 36px;display:flex;align-items:center;justify-content:center}.title.svelte-13398h7.svelte-13398h7{font-size:26px;margin:0;color:var(--cancel-discount-offer-modal-title)}.plan-monthly-price.svelte-13398h7.svelte-13398h7{font-size:16px;display:flex;align-items:flex-start;justify-content:center;margin-bottom:15px;color:var(--cancel-discount-offer-modal-bright-text-color)}.plan-monthly-price.svelte-13398h7 .bold.svelte-13398h7{font-size:34px;font-weight:900;line-height:22px;margin-right:5px}.plan-yearly-price.svelte-13398h7.svelte-13398h7{font-size:14px;color:var(--cancel-discount-offer-modal-text-color);line-height:22px;text-align:center}.plan-old-price.svelte-13398h7.svelte-13398h7{color:var(--popup-warning-text);text-decoration:line-through}.actions.svelte-13398h7.svelte-13398h7{display:flex;justify-content:center;align-items:center;gap:10px}`
  );
}
function X9(o) {
  let e = A("overlay_cancel_discount_offer_modal__claim_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function e8(o) {
  let e = A("overlay_cancel_discount_offer_modal__dismiss_button") + "",
    n;
  return {
    c() {
      n = V(e);
    },
    m(t, l) {
      w(t, n, l);
    },
    p: L,
    d(t) {
      t && $(n);
    },
  };
}
function t8(o) {
  let e,
    n,
    t,
    l,
    r,
    i,
    s,
    a,
    u = A("overlay_cancel_discount_offer_modal__description") + "",
    p,
    d,
    m,
    g,
    b,
    k,
    E,
    I,
    T = o[6](o[1]) + "",
    P,
    M,
    B,
    O = o[6](o[3]) + "",
    z,
    G,
    W = ` / ${A("overlay_cancel_discount_offer_modal__offer_month")}`,
    D,
    R,
    K,
    ne = o[6](o[0]) + "",
    te,
    le,
    re,
    se = o[6](o[2]) + "",
    ae,
    me,
    ce = ` / ${A("overlay_cancel_discount_offer_modal__offer_year")}`,
    ke,
    Re,
    Pe,
    De =
      A("overlay_cancel_discount_offer_modal__info_text", [o[5].format(o[4])]) +
      "",
    _e,
    Le,
    ze,
    Xe,
    xe,
    be;
  return (
    (n = new rt({
      props: { width: "22px", height: "44px", className: "collection-image" },
    })),
    (ze = new pe({
      props: {
        className: "button",
        $$slots: { default: [X9] },
        $$scope: { ctx: o },
      },
    })),
    ze.$on("click", o[7]),
    (xe = new pe({
      props: {
        className: "button",
        mod: "light",
        $$slots: { default: [e8] },
        $$scope: { ctx: o },
      },
    })),
    xe.$on("click", o[8]),
    {
      c() {
        (e = v("div")),
          y(n.$$.fragment),
          (t = S()),
          (l = v("section")),
          (r = v("h2")),
          (r.textContent = `${A(
            "overlay_cancel_discount_offer_modal__title"
          )}`),
          (i = S()),
          (s = v("section")),
          (a = v("div")),
          (p = S()),
          (d = v("div")),
          (m = v("span")),
          (m.textContent = `${A(
            "overlay_cancel_discount_offer_modal__offer_badge"
          )}`),
          (g = S()),
          (b = v("span")),
          (b.textContent = `${A(
            "overlay_cancel_discount_offer_modal__offer_label"
          )}`),
          (k = S()),
          (E = v("div")),
          (I = v("span")),
          (P = V(T)),
          (M = S()),
          (B = v("span")),
          (z = V(O)),
          (G = S()),
          (D = V(W)),
          (R = S()),
          (K = v("div")),
          (te = V(ne)),
          (le = S()),
          (re = v("span")),
          (ae = V(se)),
          (me = S()),
          (ke = V(ce)),
          (Re = S()),
          (Pe = v("div")),
          (_e = S()),
          (Le = v("div")),
          y(ze.$$.fragment),
          (Xe = S()),
          y(xe.$$.fragment),
          c(e, "class", "logo svelte-13398h7"),
          c(r, "class", "title svelte-13398h7"),
          c(l, "class", "header svelte-13398h7"),
          c(a, "class", "info svelte-13398h7"),
          c(m, "class", "offer-badge svelte-13398h7"),
          c(b, "class", "offer-label svelte-13398h7"),
          c(I, "class", "bold svelte-13398h7"),
          c(B, "class", "plan-old-price svelte-13398h7"),
          c(E, "class", "plan-monthly-price svelte-13398h7"),
          c(re, "class", "plan-old-price svelte-13398h7"),
          c(K, "class", "plan-yearly-price svelte-13398h7"),
          c(d, "class", "offer svelte-13398h7"),
          c(Pe, "class", "warning svelte-13398h7"),
          c(Le, "class", "actions svelte-13398h7"),
          c(s, "class", "main svelte-13398h7");
      },
      m(he, de) {
        w(he, e, de),
          C(n, e, null),
          w(he, t, de),
          w(he, l, de),
          f(l, r),
          w(he, i, de),
          w(he, s, de),
          f(s, a),
          (a.innerHTML = u),
          f(s, p),
          f(s, d),
          f(d, m),
          f(d, g),
          f(d, b),
          f(d, k),
          f(d, E),
          f(E, I),
          f(I, P),
          f(E, M),
          f(E, B),
          f(B, z),
          f(E, G),
          f(E, D),
          f(d, R),
          f(d, K),
          f(K, te),
          f(K, le),
          f(K, re),
          f(re, ae),
          f(K, me),
          f(K, ke),
          f(s, Re),
          f(s, Pe),
          (Pe.innerHTML = De),
          f(s, _e),
          f(s, Le),
          C(ze, Le, null),
          f(Le, Xe),
          C(xe, Le, null),
          (be = !0);
      },
      p(he, de) {
        (!be || de & 2) && T !== (T = he[6](he[1]) + "") && ee(P, T),
          (!be || de & 8) && O !== (O = he[6](he[3]) + "") && ee(z, O),
          (!be || de & 1) && ne !== (ne = he[6](he[0]) + "") && ee(te, ne),
          (!be || de & 4) && se !== (se = he[6](he[2]) + "") && ee(ae, se),
          (!be || de & 48) &&
            De !==
              (De =
                A("overlay_cancel_discount_offer_modal__info_text", [
                  he[5].format(he[4]),
                ]) + "") &&
            (Pe.innerHTML = De);
        let Ie = {};
        de & 4096 && (Ie.$$scope = { dirty: de, ctx: he }), ze.$set(Ie);
        let Ke = {};
        de & 4096 && (Ke.$$scope = { dirty: de, ctx: he }), xe.$set(Ke);
      },
      i(he) {
        be ||
          (_(n.$$.fragment, he),
          _(ze.$$.fragment, he),
          _(xe.$$.fragment, he),
          (be = !0));
      },
      o(he) {
        h(n.$$.fragment, he),
          h(ze.$$.fragment, he),
          h(xe.$$.fragment, he),
          (be = !1);
      },
      d(he) {
        he && $(e),
          x(n),
          he && $(t),
          he && $(l),
          he && $(i),
          he && $(s),
          x(ze),
          x(xe);
      },
    }
  );
}
function n8(o) {
  let e, n;
  return (
    (e = new $e({
      props: {
        width: 450,
        maxHeight: 600,
        borderRadius: 20,
        className: "paid-trial-modal",
        $$slots: { default: [t8] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 4159 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function o8(o) {
  let e, n;
  return (
    (e = new Ce({
      props: { $$slots: { default: [n8] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, [l]) {
        let r = {};
        l & 4159 && (r.$$scope = { dirty: l, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function l8(o, e, n) {
  let t,
    { source: l } = e,
    { yearlyPrice: r } = e,
    { monthlyPrice: i } = e,
    { oldYearlyPrice: s } = e,
    { oldMonthlyPrice: a } = e,
    { cancelAt: u } = e,
    { locale: p = void 0 } = e,
    d = oe(),
    m = (k) => `$${k}`,
    g = () => {
      q.actions.claimCancelDiscountOffer(), d("close");
    },
    b = () => {
      q.actions.dismissCancelDiscountOffer(), d("close");
    };
  return (
    ye(
      () => (
        q.actions.sendAnalyticsEvent("cancel-discount-offer.auto-opened", {
          source: l,
        }),
        () => {
          q.actions.sendAnalyticsEvent("cancel-discount-offer.auto-closed", {
            source: l,
          });
        }
      )
    ),
    (o.$$set = (k) => {
      "source" in k && n(9, (l = k.source)),
        "yearlyPrice" in k && n(0, (r = k.yearlyPrice)),
        "monthlyPrice" in k && n(1, (i = k.monthlyPrice)),
        "oldYearlyPrice" in k && n(2, (s = k.oldYearlyPrice)),
        "oldMonthlyPrice" in k && n(3, (a = k.oldMonthlyPrice)),
        "cancelAt" in k && n(4, (u = k.cancelAt)),
        "locale" in k && n(10, (p = k.locale));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1024) {
        e: n(
          5,
          (t = new Intl.DateTimeFormat(p, {
            day: "numeric",
            month: "short",
            year: "numeric",
          }))
        );
      }
    }),
    [r, i, s, a, u, t, m, g, b, l, p]
  );
}
var Pi = class extends H {
    constructor(e) {
      super(),
        j(
          this,
          e,
          l8,
          o8,
          U,
          {
            source: 9,
            yearlyPrice: 0,
            monthlyPrice: 1,
            oldYearlyPrice: 2,
            oldMonthlyPrice: 3,
            cancelAt: 4,
            locale: 10,
          },
          J9
        );
    }
  },
  sd = Pi;
function r8(o) {
  Z(
    o,
    "svelte-114nurt",
    ".overlay.svelte-114nurt{width:100%;overscroll-behavior:none}"
  );
}
function zi(o) {
  let e = o.slice(),
    n = e[1];
  return (e[12] = n.id), (e[13] = n.payload), e;
}
function ad(o) {
  let e,
    n,
    t,
    l,
    r = [
      L8,
      D8,
      q8,
      N8,
      B8,
      z8,
      P8,
      M8,
      T8,
      I8,
      E8,
      A8,
      S8,
      x8,
      C8,
      y8,
      $8,
      w8,
      k8,
      b8,
      v8,
      h8,
      g8,
      _8,
      m8,
      d8,
      f8,
      p8,
      u8,
      c8,
      a8,
      s8,
      i8,
    ],
    i = [];
  function s(a, u) {
    return a[12] === "global-settings"
      ? 0
      : a[12] === "tabs-switcher"
      ? 1
      : a[12] === "global-search"
      ? 2
      : a[12] === "add-application"
      ? 3
      : a[12] === "marketplace"
      ? 4
      : a[12] === "video"
      ? 5
      : a[12] === "checklist-success"
      ? 6
      : a[12] === "upgrade-plan"
      ? 7
      : a[12] === "team-upgrade-plan"
      ? 8
      : a[12] === "share-application"
      ? 9
      : a[12] === "signup"
      ? 10
      : a[12] === "distraction-blocker-intro"
      ? 11
      : a[12] === "calendar"
      ? 12
      : a[12] === "workspaces-management"
      ? 13
      : a[12] === "workspace-creation"
      ? 14
      : a[12] === "workspace-editing"
      ? 15
      : a[12] === "share-collection"
      ? 16
      : a[12] === "billing-not-ready"
      ? 17
      : a[12] === "billing-plan-expire-soon"
      ? 18
      : a[12] === "billing-plan-has-expired"
      ? 19
      : a[12] === "billing-last-chance"
      ? 20
      : a[12] === "billing-discount-offer"
      ? 21
      : a[12] === "billing-limits-reached"
      ? 22
      : a[12] === "contacts-picker-for-team"
      ? 23
      : a[12] === "b2b-intro"
      ? 24
      : a[12] === "team-create"
      ? 25
      : a[12] === "invite-teammates"
      ? 26
      : a[12] === "invite-teammates-success"
      ? 27
      : a[12] === "invite-teammates-fail"
      ? 28
      : a[12] === "collection-intro-modal"
      ? 29
      : a[12] === "vertical-tabs-modal"
      ? 30
      : a[12] === "paid-trial-modal"
      ? 31
      : a[12] === "cancel-discount-offer-modal"
      ? 32
      : -1;
  }
  return (
    ~(e = s(o, -1)) && (n = i[e] = r[e](o)),
    {
      c() {
        n && n.c(), (t = fe());
      },
      m(a, u) {
        ~e && i[e].m(a, u), w(a, t, u), (l = !0);
      },
      p(a, u) {
        let p = e;
        (e = s(a, u)),
          e === p
            ? ~e && i[e].p(a, u)
            : (n &&
                (Q(),
                h(i[p], 1, 1, () => {
                  i[p] = null;
                }),
                Y()),
              ~e
                ? ((n = i[e]),
                  n ? n.p(a, u) : ((n = i[e] = r[e](a)), n.c()),
                  _(n, 1),
                  n.m(t.parentNode, t))
                : (n = null));
      },
      i(a) {
        l || (_(n), (l = !0));
      },
      o(a) {
        h(n), (l = !1);
      },
      d(a) {
        ~e && i[e].d(a), a && $(t);
      },
    }
  );
}
function i8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new sd({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function s8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new d1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function a8(o) {
  let e, n;
  return (
    (e = new If({})),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function c8(o) {
  let e, n;
  return (
    (e = new Sf({})),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function u8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new F1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function p8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new G1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function f8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new R1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function d8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new N1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function m8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new z1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function _8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new I1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function g8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new h1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function h8(o) {
  let e, n;
  return (
    (e = new id({ props: { payload: o[13] } })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.payload = t[13]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function v8(o) {
  let e, n;
  return (
    (e = new rd({ props: { payload: o[13] } })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p(t, l) {
        let r = {};
        l & 2 && (r.payload = t[13]), e.$set(r);
      },
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function b8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new g1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function k8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new s1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function w8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new b1({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function $8(o) {
  let e, n;
  return (
    (e = new xf({})),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function y8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Kf({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function C8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Ff({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function x8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Of({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function S8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new ff({ props: l })),
    e.$on("close", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function A8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new _p({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function E8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new dp({ props: l })),
    e.$on("close", o[7]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function I8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new cp({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function T8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new lf({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function M8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Ip({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function P8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new ta({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function z8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new sf({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function B8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new ju({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function N8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new Ks({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function q8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new va({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function D8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new wp({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function L8(o) {
  let e,
    n,
    t = [o[13]],
    l = {};
  for (let r = 0; r < t.length; r += 1) l = je(l, t[r]);
  return (
    (e = new bu({ props: l })),
    e.$on("close", o[6]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(r, i) {
        C(e, r, i), (n = !0);
      },
      p(r, i) {
        let s = i & 2 ? He(t, [Ve(r[13])]) : {};
        e.$set(s);
      },
      i(r) {
        n || (_(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        h(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        x(e, r);
      },
    }
  );
}
function cd(o) {
  let e, n;
  return (
    (e = new pf({})),
    e.$on("close", o[5]),
    {
      c() {
        y(e.$$.fragment);
      },
      m(t, l) {
        C(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (_(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        x(e, t);
      },
    }
  );
}
function U8(o) {
  let e,
    n,
    t,
    l,
    r,
    i = o[1] && ad(zi(o)),
    s = o[0] === "cpu-monitor-alarm" && cd(o);
  return {
    c() {
      (e = v("div")),
        i && i.c(),
        (n = S()),
        s && s.c(),
        c(e, "class", "overlay svelte-114nurt"),
        c(e, "data-testid", "overlay");
    },
    m(a, u) {
      w(a, e, u),
        i && i.m(e, null),
        f(e, n),
        s && s.m(e, null),
        (t = !0),
        l || ((r = X(e, "click", o[6])), (l = !0));
    },
    p(a, [u]) {
      a[1]
        ? i
          ? (i.p(zi(a), u), u & 2 && _(i, 1))
          : ((i = ad(zi(a))), i.c(), _(i, 1), i.m(e, n))
        : i &&
          (Q(),
          h(i, 1, 1, () => {
            i = null;
          }),
          Y()),
        a[0] === "cpu-monitor-alarm"
          ? s
            ? (s.p(a, u), u & 1 && _(s, 1))
            : ((s = cd(a)), s.c(), _(s, 1), s.m(e, null))
          : s &&
            (Q(),
            h(s, 1, 1, () => {
              s = null;
            }),
            Y());
    },
    i(a) {
      t || (_(i), _(s), (t = !0));
    },
    o(a) {
      h(i), h(s), (t = !1);
    },
    d(a) {
      a && $(e), i && i.d(), s && s.d(), (l = !1), r();
    },
  };
}
function j8(o, e, n) {
  let t,
    l,
    r,
    i,
    s,
    a,
    u = q.stores.activeModalInfo;
  ve(o, u, (k) => n(10, (s = k)));
  let p = q.stores.activeCpuPopupId;
  ve(o, p, (k) => n(9, (i = k)));
  let d = q.stores.theme;
  ve(o, d, (k) => n(11, (a = k)));
  let m = () => q.actions.closeCpuPopup(),
    g = () => {
      r || q.actions.closeModal();
    },
    b = () => {
      l !== null && (q.actions.closeAllModalsById(l.id), r !== null && m());
    };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 2048) {
        e: n(8, (t = a));
      }
      if (o.$$.dirty & 256) {
        e: t && Ds(t);
      }
      if (o.$$.dirty & 1024) {
        e: n(1, (l = s));
      }
      if (o.$$.dirty & 512) {
        e: n(0, (r = i));
      }
    }),
    [r, l, u, p, d, m, g, b, t, i, s, a]
  );
}
var Bi = class extends H {
    constructor(e) {
      super(), j(this, e, j8, U8, U, {}, r8);
    }
  },
  ud = Bi;
var pd = document.getElementById("app");
pt(pd, "Couldn't find container with id: #app");
var H8 = os({ target: pd, component: ud, gateway: q });
Object.assign(globalThis, { sidekickDebug: { app: H8, gateway: q } });
