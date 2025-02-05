import { a as In, b as ki } from "../chunk-TMIVBZLD.js";
import { b as Gn } from "../chunk-OFC5237D.js";
import "../chunk-ZLUD5SWZ.js";
import { a as oi } from "../chunk-5JS46TXG.js";
import { a as gn, b as _i, c as $n } from "../chunk-LMSBN3QA.js";
import { a as ri } from "../chunk-Q3TMK7K4.js";
import {
  a as hi,
  b as bi,
  c as Tn,
  d as lt,
  e as vi,
} from "../chunk-EWDLAJ62.js";
import { a as gi } from "../chunk-PV4OLDEG.js";
import { a as ai, c as ci, j as cn } from "../chunk-L7L2JV5F.js";
import {
  a as at,
  b as Tt,
  d as st,
  e as It,
  f as Ct,
} from "../chunk-2P36QRXC.js";
import {
  $ as Ne,
  A as pn,
  B as T,
  C as ne,
  Ca as kn,
  D as F,
  Da as Ge,
  E as M,
  F as fe,
  Fa as ut,
  G as Z,
  Ga as mi,
  H as ze,
  I as je,
  Ia as Qe,
  J as c,
  Ja as wn,
  Ka as nt,
  L as ae,
  M as Je,
  Ma as Ke,
  N as se,
  Oa as pi,
  P as oe,
  Pa as St,
  Qa as yn,
  S as Me,
  Sa as Le,
  Ta as Sn,
  U as _n,
  V as ye,
  Va as et,
  Y as pe,
  Z as _e,
  _ as fi,
  a as ui,
  aa as G,
  b as j,
  ba as K,
  ca as d,
  da as _,
  e as Te,
  ea as Kn,
  f as Ft,
  fa as Ze,
  g as P,
  ga as Xe,
  i as vt,
  j as fn,
  ja as Ae,
  k as ue,
  ka as I,
  l as be,
  la as C,
  m as ve,
  ma as E,
  n as ke,
  na as D,
  o as we,
  oa as x,
  p as dn,
  pa as di,
  q as De,
  r as qe,
  ra as hn,
  s as xe,
  ua as me,
  v as mn,
  va as ct,
  w as h,
  x as R,
  xa as bn,
  y as w,
  ya as $t,
  z as y,
  za as vn,
} from "../chunk-RRSEJBGM.js";
import {
  d as L,
  e as Fn,
  f as un,
  l as xt,
  m as bt,
} from "../chunk-MKPTDAGU.js";
import "../chunk-XYG7YXOD.js";
import "../chunk-3ZYQDD7H.js";
import {
  Q as ii,
  V as rn,
  W as li,
  k as ti,
  m as ni,
  n as si,
} from "../chunk-OBPWZYQZ.js";
import { a as Dt, k as ei } from "../chunk-QGLCH3FC.js";
import { a as an } from "../chunk-MQVGYSOB.js";
import { f as O, l as Pe } from "../chunk-LGMSABOQ.js";
O();
O();
O();
var Ra = async () => {
    let e = (
      await new Promise((n) => {
        chrome.windows.getCurrent(n);
      })
    )?.id;
    return (
      Pe(
        e !== void 0,
        "WindowId must be defined to get client info for sidecar"
      ),
      { type: "sidecar", windowId: e }
    );
  },
  H = di({ id: "gateway-for-sidecar", clientInfo: Ra() });
O();
O();
O();
O();
O();
O();
O();
O();
function Ua(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M7.943.67A.447.447 0 007.554 0h-7.1a.447.447 0 00-.389.67l3.55 6.107a.451.451 0 00.779 0L7.944.67z"
        ),
        c(n, "fill", "currentColor"),
        c(n, "fill-opacity", ".24"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Wa(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Rn = class extends x {
    constructor(e) {
      super(), D(this, e, Wa, Ua, P, { width: 0, height: 1, className: 2 });
    }
  },
  Cn = Rn;
O();
function Za(o) {
  R(
    o,
    "svelte-12kd9jz",
    ".collection-folder-icon.svelte-12kd9jz.svelte-12kd9jz{--size:24px;display:flex;align-items:center;justify-content:center;width:var(--size);min-width:var(--size);height:var(--size);margin-right:6px;border-radius:50%}.collection-folder-icon.svelte-12kd9jz>span.svelte-12kd9jz{width:1em;height:1em;font-weight:400;font-size:14px;line-height:1;text-transform:uppercase;color:#000;text-align:center}"
  );
}
function Xa(o) {
  let e;
  return {
    c() {
      (e = T("span")),
        (e.textContent = "\u{1F4C1}"),
        c(e, "class", "svelte-12kd9jz");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Ya(o) {
  let e, n;
  return {
    c() {
      (e = T("span")), (n = F(o[0])), c(e, "class", "svelte-12kd9jz");
    },
    m(t, s) {
      w(t, e, s), h(e, n);
    },
    p(t, s) {
      s & 1 && ae(n, t[0]);
    },
    d(t) {
      t && y(e);
    },
  };
}
function Ja(o) {
  let e;
  function n(i, l) {
    return i[0] ? Ya : Xa;
  }
  let t = n(o, -1),
    s = t(o);
  return {
    c() {
      (e = T("div")),
        s.c(),
        c(e, "class", "collection-folder-icon svelte-12kd9jz");
    },
    m(i, l) {
      w(i, e, l), s.m(e, null);
    },
    p(i, [l]) {
      t === (t = n(i, l)) && s
        ? s.p(i, l)
        : (s.d(1), (s = t(i)), s && (s.c(), s.m(e, null)));
    },
    i: j,
    o: j,
    d(i) {
      i && y(e), s.d();
    },
  };
}
function Qa(o, e, n) {
  let { emoji: t = null } = e;
  return (
    (o.$$set = (s) => {
      "emoji" in s && n(0, (t = s.emoji));
    }),
    [t]
  );
}
var Un = class extends x {
    constructor(e) {
      super(), D(this, e, Qa, Ja, P, { emoji: 0 }, Za);
    }
  },
  ft = Un;
O();
function ec(o) {
  R(
    o,
    "svelte-c8nzgx",
    ".divider.svelte-c8nzgx{display:block;height:1px;width:100%;background-color:var(--border-color)}"
  );
}
function wi(o) {
  let e, n;
  return (
    (e = new Ge({
      props: { $$slots: { default: [tc] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[4]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 512 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function tc(o) {
  let e = L("sidecar_collections__share") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function yi(o) {
  let e, n, t, s;
  return (
    (e = new Ge({
      props: { $$slots: { default: [nc] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[2]),
    (t = new Ge({
      props: { $$slots: { default: [sc] }, $$scope: { ctx: o } },
    })),
    t.$on("click", o[3]),
    {
      c() {
        I(e.$$.fragment), (n = M()), I(t.$$.fragment);
      },
      m(i, l) {
        C(e, i, l), w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        let a = {};
        l & 512 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
        let r = {};
        l & 512 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        s || (d(e.$$.fragment, i), d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(e.$$.fragment, i), _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        E(e, i), i && y(n), E(t, i);
      },
    }
  );
}
function nc(o) {
  let e = L("sidecar_collections__edit") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function sc(o) {
  let e = L("sidecar_collections__add_nested_collection") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function $i(o) {
  let e, n, t, s;
  return (
    (t = new Ge({
      props: {
        useErrorColor: !0,
        $$slots: { default: [oc] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", o[5]),
    {
      c() {
        (e = T("div")),
          (n = M()),
          I(t.$$.fragment),
          c(e, "class", "divider svelte-c8nzgx");
      },
      m(i, l) {
        w(i, e, l), w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        let a = {};
        l & 512 && (a.$$scope = { dirty: l, ctx: i }), t.$set(a);
      },
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(e), i && y(n), E(t, i);
      },
    }
  );
}
function oc(o) {
  let e = L("sidecar_collections__delete") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function ic(o) {
  let e,
    n,
    t,
    s,
    i = !o[1].folderUuid && o[1].permissions.share && wi(o),
    l = o[1].permissions.edit && yi(o),
    a = o[1].permissions.destroy && $i(o);
  return {
    c() {
      i && i.c(), (e = M()), l && l.c(), (n = M()), a && a.c(), (t = fe());
    },
    m(r, u) {
      i && i.m(r, u),
        w(r, e, u),
        l && l.m(r, u),
        w(r, n, u),
        a && a.m(r, u),
        w(r, t, u),
        (s = !0);
    },
    p(r, u) {
      !r[1].folderUuid && r[1].permissions.share
        ? i
          ? (i.p(r, u), u & 2 && d(i, 1))
          : ((i = wi(r)), i.c(), d(i, 1), i.m(e.parentNode, e))
        : i &&
          (G(),
          _(i, 1, 1, () => {
            i = null;
          }),
          K()),
        r[1].permissions.edit
          ? l
            ? (l.p(r, u), u & 2 && d(l, 1))
            : ((l = yi(r)), l.c(), d(l, 1), l.m(n.parentNode, n))
          : l &&
            (G(),
            _(l, 1, 1, () => {
              l = null;
            }),
            K()),
        r[1].permissions.destroy
          ? a
            ? (a.p(r, u), u & 2 && d(a, 1))
            : ((a = $i(r)), a.c(), d(a, 1), a.m(t.parentNode, t))
          : a &&
            (G(),
            _(a, 1, 1, () => {
              a = null;
            }),
            K());
    },
    i(r) {
      s || (d(i), d(l), d(a), (s = !0));
    },
    o(r) {
      _(i), _(l), _(a), (s = !1);
    },
    d(r) {
      i && i.d(r), r && y(e), l && l.d(r), r && y(n), a && a.d(r), r && y(t);
    },
  };
}
function lc(o) {
  let e, n, t;
  function s(l) {
    o[7](l);
  }
  let i = { offset: [8, 0], $$slots: { default: [ic] }, $$scope: { ctx: o } };
  return (
    o[0] !== void 0 && (i.isMenuVisible = o[0]),
    (e = new ut({ props: i })),
    _e.push(() => Ae(e, "isMenuVisible", s)),
    {
      c() {
        I(e.$$.fragment);
      },
      m(l, a) {
        C(e, l, a), (t = !0);
      },
      p(l, [a]) {
        let r = {};
        a & 514 && (r.$$scope = { dirty: a, ctx: l }),
          !n &&
            a & 1 &&
            ((n = !0), (r.isMenuVisible = l[0]), Ne(() => (n = !1))),
          e.$set(r);
      },
      i(l) {
        t || (d(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        _(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function rc(o, e, n) {
  let t = ye(),
    { folder: s } = e,
    { isMenuVisible: i = !1 } = e,
    { chunkType: l } = e,
    a = (p) => {
      p.stopPropagation(), t("edit");
    },
    r = () => {
      t("createNestedFolder");
    },
    u = () => {
      H.actions.showCollectionShareModal({
        uuid: s.uuid,
        canShareByEmail: s.permissions.shareByEmail,
        canShareByPublicUrl: s.permissions.shareByPublicUrl,
        shareLink: s.publicUrl,
        sharingRecipients: [],
        teamUuid: s.teamUuid,
        collectionsScope: l,
      });
    },
    f = () => {
      t("delete", s);
    };
  function m(p) {
    (i = p), n(0, i);
  }
  return (
    (o.$$set = (p) => {
      "folder" in p && n(1, (s = p.folder)),
        "isMenuVisible" in p && n(0, (i = p.isMenuVisible)),
        "chunkType" in p && n(6, (l = p.chunkType));
    }),
    [i, s, a, r, u, f, l, m]
  );
}
var Wn = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          rc,
          lc,
          P,
          { folder: 1, isMenuVisible: 0, chunkType: 6 },
          ec
        );
    }
  },
  Si = Wn;
O();
function ac(o) {
  R(
    o,
    "svelte-rwzthn",
    ".edit-collection.svelte-rwzthn.svelte-rwzthn{display:flex;justify-content:space-between;align-items:center;position:relative;min-height:32px;border-radius:4px;background-color:var(--theme-8);padding:0 8px;width:100%}.edit-collection.svelte-rwzthn.svelte-rwzthn:hover{background-color:var(--theme-8)}.edit-collection.svelte-rwzthn>input.svelte-rwzthn{all:unset;width:100%;height:32px;padding:0;padding-right:8px;border:none;background-color:transparent;outline:none;color:var(--text-primary-color)}.edit-collection.is-error.svelte-rwzthn.svelte-rwzthn{outline:1px solid var(--error-color)}"
  );
}
function cc(o) {
  let e, n;
  return (
    (e = new st({ props: { width: "12", height: "7" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function uc(o) {
  let e, n, t, s, i, l, a, r, u;
  return (
    (s = new me({
      props: {
        type: "submit",
        dataTestId: "collection-editor.submit-button",
        mod: "round",
        $$slots: { default: [cc] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("form")),
          (n = T("input")),
          (t = M()),
          (i = T("div")),
          I(s.$$.fragment),
          c(n, "type", "text"),
          c(n, "data-testid", "collection-editor.input"),
          c(n, "placeholder", o[1]),
          c(n, "class", "svelte-rwzthn"),
          se(i, "display", "contents"),
          se(i, "--round-button-bg", "transparent"),
          se(i, "--round-button-bg-hover", "rgba(25, 119, 243, 0.08)"),
          se(i, "--round-button-bg-active", "rgba(25, 119, 243, 0.12)"),
          c(e, "class", "edit-collection svelte-rwzthn"),
          c(e, "data-testid", "collection-editor.form"),
          oe(e, "is-error", o[3]);
      },
      m(f, m) {
        w(f, e, m),
          h(e, n),
          o[12](n),
          Je(n, o[0]),
          h(e, t),
          h(e, i),
          C(s, i, null),
          (a = !0),
          r ||
            ((u = [
              Z(n, "input", o[13]),
              Z(n, "blur", o[5]),
              Z(n, "keydown", o[6]),
              Z(n, "click", je(o[11])),
              xe((l = o[7].call(null, e))),
              Z(e, "submit", ze(o[4])),
            ]),
            (r = !0));
      },
      p(f, [m]) {
        (!a || m & 2) && c(n, "placeholder", f[1]),
          m & 1 && n.value !== f[0] && Je(n, f[0]);
        let p = {};
        m & 262144 && (p.$$scope = { dirty: m, ctx: f }),
          s.$set(p),
          (!a || m & 8) && oe(e, "is-error", f[3]);
      },
      i(f) {
        a || (d(s.$$.fragment, f), (a = !0));
      },
      o(f) {
        _(s.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && y(e), o[12](null), E(s), (r = !1), Te(u);
      },
    }
  );
}
function fc(o, e, n) {
  let t = ye(),
    { name: s = "" } = e,
    { noCloseOnBlur: i = !1 } = e,
    { isLink: l = !1 } = e,
    { placeholder: a = "" } = e,
    { canBeEmpty: r = !1 } = e,
    u,
    f = !1,
    m = !1,
    p = (A) => {
      if ((n(0, (s = s.trim())), !A)) {
        if ((!s.length && !r) || (l && (!ii(s) || !li(s)))) {
          n(3, (m = !0));
          return;
        }
        n(3, (m = !1)), t("edited", s);
      }
    },
    g = () => {
      p(!1);
    },
    v = () => {
      f || i || p(!1);
    },
    b = (A) => {
      (A.code !== "Enter" && A.code !== "Escape") ||
        ((f = !0),
        A.code === "Enter"
          ? p(!1)
          : A.code === "Escape" && (p(!0), t("cancel")));
    },
    $ = (A) =>
      at(A, () => {
        p(!1);
      }),
    k = async () => {
      let A = await window.navigator.clipboard.readText(),
        B = !s && l;
      rn(A) && B ? n(0, (s = A)) : B && n(0, (s = "https://"));
    };
  Me(async () => {
    await k();
  });
  function z(A) {
    pe.call(this, o, A);
  }
  function S(A) {
    _e[A ? "unshift" : "push"](() => {
      (u = A), n(2, u);
    });
  }
  function N() {
    (s = this.value), n(0, s);
  }
  return (
    (o.$$set = (A) => {
      "name" in A && n(0, (s = A.name)),
        "noCloseOnBlur" in A && n(8, (i = A.noCloseOnBlur)),
        "isLink" in A && n(9, (l = A.isLink)),
        "placeholder" in A && n(1, (a = A.placeholder)),
        "canBeEmpty" in A && n(10, (r = A.canBeEmpty));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: s && n(3, (m = !1));
      }
      if (o.$$.dirty & 4) {
        e: u && ((f = !1), setTimeout(() => u?.focus(), 150));
      }
    }),
    [s, a, u, m, g, v, b, $, i, l, r, z, S, N]
  );
}
var Zn = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          fc,
          uc,
          P,
          {
            name: 0,
            noCloseOnBlur: 8,
            isLink: 9,
            placeholder: 1,
            canBeEmpty: 10,
          },
          ac
        );
    }
  },
  kt = Zn;
O();
var Re = Ke({});
O();
function dc(o) {
  R(
    o,
    "svelte-ejwyym",
    ".remove-popup.svelte-ejwyym.svelte-ejwyym{background-color:var(--sidecar-remove-popup-bg);border-radius:10px;padding:26px 31px 23px;border:1px solid var(--sidecar-remove-border-color);cursor:default}.remove-popup.svelte-ejwyym .description.svelte-ejwyym{font-size:13px;line-height:18px}.remove-header.svelte-ejwyym.svelte-ejwyym{font-weight:700;font-size:16px;color:var(--sidecar-remove-text-color);display:flex;align-items:center}.remove-title.svelte-ejwyym.svelte-ejwyym{margin-left:10px}.info.svelte-ejwyym.svelte-ejwyym{border:1px solid var(--sidecar-remove-border-counter-color);border-radius:4px;display:flex;align-items:center;padding:6px 12px 6px 7px;margin-bottom:34px;font-size:12px}.name.svelte-ejwyym.svelte-ejwyym{font-weight:600;max-width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.count.svelte-ejwyym.svelte-ejwyym{color:var(--sidecar-remove-count-color);margin-left:auto;white-space:nowrap}.remove-close.svelte-ejwyym.svelte-ejwyym{position:absolute;right:12px;top:12px}"
  );
}
function mc(o) {
  let e = L("sidecar_collections__delete") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function pc(o) {
  let e = L("sidecar_collections__cancel") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function _c(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m = L("sidecar_collections__delete_collection_description") + "",
    p,
    g,
    v,
    b,
    $ = L("sidecar_collections__delete_collection_question") + "",
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le,
    J,
    ie,
    te,
    U,
    ee,
    Ie,
    de,
    $e,
    Se,
    Ce;
  return (
    (t = new St({ props: { width: "12px" } })),
    (l = new $n({ props: { width: "22", height: "22" } })),
    (A = new ft({ props: { emoji: o[0] } })),
    (ee = new me({
      props: {
        mod: "light",
        dataTestId: "collections-delete-popup.delete-button",
        $$slots: { default: [mc] },
        $$scope: { ctx: o },
      },
    })),
    ee.$on("click", o[4]),
    (de = new me({
      props: {
        dataTestId: "collections-delete-popup.cancel-button",
        $$slots: { default: [pc] },
        $$scope: { ctx: o },
      },
    })),
    de.$on("click", o[3]),
    {
      c() {
        (e = T("div")),
          (n = T("button")),
          I(t.$$.fragment),
          (s = M()),
          (i = T("div")),
          I(l.$$.fragment),
          (a = M()),
          (r = T("div")),
          (r.textContent = `${L(
            "sidecar_collections__delete_collection_title"
          )}?`),
          (u = M()),
          (f = T("p")),
          (p = F(m)),
          (g = M()),
          (v = T("br")),
          (b = M()),
          (k = F($)),
          (z = F("?")),
          (S = M()),
          (N = T("div")),
          I(A.$$.fragment),
          (B = M()),
          (V = T("div")),
          (q = F(o[1])),
          (le = M()),
          (J = T("div")),
          (ie = F(o[2])),
          (te = M()),
          (U = T("div")),
          I(ee.$$.fragment),
          (Ie = M()),
          I(de.$$.fragment),
          c(n, "class", "remove-close svelte-ejwyym"),
          c(n, "data-testid", "collections-delete-popup.close-button"),
          c(r, "class", "remove-title svelte-ejwyym"),
          c(i, "class", "remove-header svelte-ejwyym"),
          c(f, "class", "description svelte-ejwyym"),
          c(V, "class", "name svelte-ejwyym"),
          c(J, "class", "count svelte-ejwyym"),
          c(N, "class", "info svelte-ejwyym"),
          c(e, "class", "remove-popup svelte-ejwyym"),
          c(e, "data-testid", "collections-delete-popup");
      },
      m(W, he) {
        w(W, e, he),
          h(e, n),
          C(t, n, null),
          h(e, s),
          h(e, i),
          C(l, i, null),
          h(i, a),
          h(i, r),
          h(e, u),
          h(e, f),
          h(f, p),
          h(f, g),
          h(f, v),
          h(f, b),
          h(f, k),
          h(f, z),
          h(e, S),
          h(e, N),
          C(A, N, null),
          h(N, B),
          h(N, V),
          h(V, q),
          h(N, le),
          h(N, J),
          h(J, ie),
          h(e, te),
          h(e, U),
          C(ee, U, null),
          h(U, Ie),
          C(de, U, null),
          ($e = !0),
          Se || ((Ce = Z(n, "click", o[3])), (Se = !0));
      },
      p(W, he) {
        let Ee = {};
        he & 1 && (Ee.emoji = W[0]),
          A.$set(Ee),
          (!$e || he & 2) && ae(q, W[1]),
          (!$e || he & 4) && ae(ie, W[2]);
        let Ve = {};
        he & 128 && (Ve.$$scope = { dirty: he, ctx: W }), ee.$set(Ve);
        let He = {};
        he & 128 && (He.$$scope = { dirty: he, ctx: W }), de.$set(He);
      },
      i(W) {
        $e ||
          (d(t.$$.fragment, W),
          d(l.$$.fragment, W),
          d(A.$$.fragment, W),
          d(ee.$$.fragment, W),
          d(de.$$.fragment, W),
          ($e = !0));
      },
      o(W) {
        _(t.$$.fragment, W),
          _(l.$$.fragment, W),
          _(A.$$.fragment, W),
          _(ee.$$.fragment, W),
          _(de.$$.fragment, W),
          ($e = !1);
      },
      d(W) {
        W && y(e), E(t), E(l), E(A), E(ee), E(de), (Se = !1), Ce();
      },
    }
  );
}
function hc(o) {
  let e, n;
  return (
    (e = new hn({
      props: {
        width: 258,
        minWidth: 258,
        height: "auto",
        $$slots: { default: [_c] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 135 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function gc(o) {
  let e, n;
  return (
    (e = new gn({
      props: { $$slots: { default: [hc] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 135 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function bc(o, e, n) {
  let t,
    s = ye(),
    { emoji: i } = e,
    { folderName: l } = e,
    { linksCount: a } = e,
    r = () => {
      s("close");
    },
    u = () => {
      s("remove");
    };
  return (
    (o.$$set = (f) => {
      "emoji" in f && n(0, (i = f.emoji)),
        "folderName" in f && n(1, (l = f.folderName)),
        "linksCount" in f && n(5, (a = f.linksCount));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 32) {
        e: n(2, (t = a > 99 ? "99+ links" : `${cn(a, "link", "links")}`));
      }
    }),
    [i, l, t, r, u, a]
  );
}
var Xn = class extends x {
    constructor(e) {
      super(),
        D(this, e, bc, gc, P, { emoji: 0, folderName: 1, linksCount: 5 }, dc);
    }
  },
  Ti = Xn;
O();
function vc(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M5.37504 1.22222L4.17504 0H0V11H12V1.22222H5.37504ZM11.1 10.0833H0.9V0.916667H3.8022L5.0022 2.13889H11.1V10.0833ZM3.93174 6.53889H5.58V8.21755H6.42V6.53889H8.06814V5.68333H6.42V4.00455H5.58V5.68333H3.93174V6.53889Z"
        ),
        c(n, "fill", "currentColor"),
        c(n, "fill-opacity", "0.7"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 12 11"),
        c(e, "fill", "currentColor"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function kc(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Yn = class extends x {
    constructor(e) {
      super(), D(this, e, kc, vc, P, { width: 0, height: 1, className: 2 });
    }
  },
  Ii = Yn;
function wc(o) {
  R(
    o,
    "svelte-t1bqik",
    ".actions.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{display:flex;align-items:center;gap:4px}.actions.svelte-t1bqik .add-folder-icon.svelte-t1bqik.svelte-t1bqik{display:flex;align-items:center;justify-content:center;transition:opacity 0.1s linear;opacity:0;height:24px;width:24px;border-radius:50%}.actions.svelte-t1bqik .add-folder-icon.svelte-t1bqik.svelte-t1bqik:hover{background-color:var(--round-button-hover)}.actions.svelte-t1bqik .add-folder-icon.svelte-t1bqik.svelte-t1bqik:active{background-color:var(--round-button-active)}.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{position:relative;min-height:32px;padding:6px 8px;border-radius:4px;cursor:pointer;margin:0}.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:where([drop-position='into']){background:#0b5fce60}.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:where([drop-position='above']),.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:where([drop-position='below']){position:relative}.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:where([drop-position='above'])::after,.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:where([drop-position='below'])::after{pointer-events:none;background:#0b5fce;content:'';display:block;height:2px;margin:0;position:absolute;top:-1px;width:100%}.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:where([drop-position='below'])::after{bottom:-1px;top:auto}.header.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:hover{background-color:var(--collection-hover)}.header.svelte-t1bqik:hover .add-folder-icon.svelte-t1bqik.svelte-t1bqik{opacity:1}.header.svelte-t1bqik .container.svelte-t1bqik.svelte-t1bqik{width:100%;height:100%;display:flex;justify-content:space-between;align-items:center}.header.is-expanded.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik::before{border:4px solid transparent;border-top:7px solid #b2b2b2;border-bottom:0;left:11px}.header.is-expanded.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:hover::before{border-top-color:#808080;border-left-color:transparent}.header.is-open-context-menu.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{background-color:var(--collection-hover)}.header.is-open-context-menu.svelte-t1bqik .context-menu.svelte-t1bqik.svelte-t1bqik{display:flex;opacity:1}.header.is-drag-enter.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{outline:1px solid dodgerblue}.icon-and-name.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{display:flex;align-items:center;min-width:0}.icon-and-name.full-width.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{width:100%}.emoji-picker-wrapper.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{position:absolute;left:auto;top:40px;display:flex;flex-direction:column;padding:12px 2px 12px 8px;width:250px;height:270px;background:var(--popup-bg-color);overflow-y:scroll;border-radius:8px;z-index:5;box-shadow:0 0 12px rgb(0 0 0 / 0.2)}.name.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{padding-right:2px;color:var(--collection-title-color);max-width:154px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.header.svelte-t1bqik:not(.is-open-context-menu, :hover) .actions.svelte-t1bqik>.context-menu.svelte-t1bqik>*{opacity:0}.toggler.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{--size:16px;width:var(--size);min-width:var(--size);height:var(--size);display:flex;align-items:center;justify-content:center;border-radius:50%}.toggler.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:hover{background-color:var(--round-button-hover)}.toggler.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik:active{background-color:var(--round-button-active)}.toggler.is-expanded.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{transform:rotate(180deg)}.items-count.svelte-t1bqik.svelte-t1bqik.svelte-t1bqik{color:var(--text-secondary-color);font-size:12px}"
  );
}
function Ci(o) {
  let e, n;
  return (
    (e = new Tt({
      props: { $$slots: { default: [yc] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        (s[0] & 16) | (s[1] & 4) && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function yc(o) {
  let e, n, t, s, i, l, a;
  return (
    (n = new It({ props: { emojisSections: o[4].emojisSections } })),
    n.$on("findEmoji", o[27]),
    n.$on("changeBackgroundEmoji", o[16]),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "emoji-picker-wrapper svelte-t1bqik");
      },
      m(r, u) {
        w(r, e, u),
          C(n, e, null),
          (i = !0),
          l ||
            ((a = [
              xe((t = o[19].call(null, e))),
              xe((s = o[13].call(null, e))),
            ]),
            (l = !0));
      },
      p(r, u) {
        let f = {};
        u[0] & 16 && (f.emojisSections = r[4].emojisSections), n.$set(f);
      },
      i(r) {
        i || (d(n.$$.fragment, r), (i = !0));
      },
      o(r) {
        _(n.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && y(e), E(n), (l = !1), Te(a);
      },
    }
  );
}
function $c(o) {
  let e,
    n = o[1].name + "",
    t;
  return {
    c() {
      (e = T("span")), (t = F(n)), c(e, "class", "name svelte-t1bqik");
    },
    m(s, i) {
      w(s, e, i), h(e, t);
    },
    p(s, i) {
      i[0] & 2 && n !== (n = s[1].name + "") && ae(t, n);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Sc(o) {
  let e, n;
  return (
    (e = new kt({ props: { name: o[7] } })),
    e.$on("edited", o[21]),
    e.$on("cancel", o[18]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 128 && (i.name = t[7]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Ei(o) {
  let e, n, t, s, i, l, a, r;
  n = new Qe({
    props: {
      hideOnMouseDown: !0,
      $$slots: { tooltip: [Ic], default: [Tc] },
      $$scope: { ctx: o },
    },
  });
  let u =
      (o[1].permissions.edit ||
        o[1].permissions.share ||
        o[1].permissions.destroy) &&
      zi(o),
    f = o[1]?.children?.length && Mi(o);
  return (
    (a = new Cn({ props: { width: "9", height: "7" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          (t = M()),
          u && u.c(),
          (s = M()),
          f && f.c(),
          (i = M()),
          (l = T("div")),
          I(a.$$.fragment),
          c(l, "class", "toggler svelte-t1bqik"),
          oe(l, "is-expanded", o[0]),
          c(e, "class", "actions svelte-t1bqik");
      },
      m(m, p) {
        w(m, e, p),
          C(n, e, null),
          h(e, t),
          u && u.m(e, null),
          h(e, s),
          f && f.m(e, null),
          h(e, i),
          h(e, l),
          C(a, l, null),
          (r = !0);
      },
      p(m, p) {
        let g = {};
        p[1] & 4 && (g.$$scope = { dirty: p, ctx: m }),
          n.$set(g),
          m[1].permissions.edit ||
          m[1].permissions.share ||
          m[1].permissions.destroy
            ? u
              ? (u.p(m, p), p[0] & 2 && d(u, 1))
              : ((u = zi(m)), u.c(), d(u, 1), u.m(e, s))
            : u &&
              (G(),
              _(u, 1, 1, () => {
                u = null;
              }),
              K()),
          m[1]?.children?.length
            ? f
              ? f.p(m, p)
              : ((f = Mi(m)), f.c(), f.m(e, i))
            : f && (f.d(1), (f = null)),
          (!r || p[0] & 1) && oe(l, "is-expanded", m[0]);
      },
      i(m) {
        r || (d(n.$$.fragment, m), d(u), d(a.$$.fragment, m), (r = !0));
      },
      o(m) {
        _(n.$$.fragment, m), _(u), _(a.$$.fragment, m), (r = !1);
      },
      d(m) {
        m && y(e), E(n), u && u.d(), f && f.d(), E(a);
      },
    }
  );
}
function Tc(o) {
  let e, n, t, s, i;
  return (
    (n = new Ii({ props: { width: "14px", height: "14px" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "add-folder-icon svelte-t1bqik");
      },
      m(l, a) {
        w(l, e, a),
          C(n, e, null),
          (t = !0),
          s || ((i = Z(e, "click", je(ze(o[20])))), (s = !0));
      },
      p: j,
      i(l) {
        t || (d(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        _(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && y(e), E(n), (s = !1), i();
      },
    }
  );
}
function Ic(o) {
  let e = L("sidecar_collections__add_nested_collection") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function zi(o) {
  let e, n, t, s;
  function i(a) {
    o[28](a);
  }
  let l = { chunkType: o[2], folder: o[1] };
  return (
    o[3] !== void 0 && (l.isMenuVisible = o[3]),
    (n = new Si({ props: l })),
    _e.push(() => Ae(n, "isMenuVisible", i)),
    n.$on("edit", o[17]),
    n.$on("delete", o[22]),
    n.$on("createNestedFolder", o[20]),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          c(e, "class", "context-menu svelte-t1bqik");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), (s = !0);
      },
      p(a, r) {
        let u = {};
        r[0] & 4 && (u.chunkType = a[2]),
          r[0] & 2 && (u.folder = a[1]),
          !t &&
            r[0] & 8 &&
            ((t = !0), (u.isMenuVisible = a[3]), Ne(() => (t = !1))),
          n.$set(u);
      },
      i(a) {
        s || (d(n.$$.fragment, a), (s = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && y(e), E(n);
      },
    }
  );
}
function Mi(o) {
  let e,
    n = o[1].children.length + "",
    t;
  return {
    c() {
      (e = T("div")), (t = F(n)), c(e, "class", "items-count svelte-t1bqik");
    },
    m(s, i) {
      w(s, e, i), h(e, t);
    },
    p(s, i) {
      i[0] & 2 && n !== (n = s[1].children.length + "") && ae(t, n);
    },
    d(s) {
      s && y(e);
    },
  };
}
function Ni(o) {
  let e, n, t;
  return (
    (n = new Ti({
      props: { emoji: o[5].emoji, folderName: o[5].name, linksCount: o[6] },
    })),
    n.$on("remove", o[23]),
    n.$on("close", o[24]),
    {
      c() {
        (e = T("div")), I(n.$$.fragment);
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i[0] & 32 && (l.emoji = s[5].emoji),
          i[0] & 32 && (l.folderName = s[5].name),
          i[0] & 64 && (l.linksCount = s[6]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Cc(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k = o[4] && o[10] && Ci(o);
  l = new ft({ props: { emoji: o[1].emoji } });
  let z = [Sc, $c],
    S = [];
  function N(V, q) {
    return V[9] ? 0 : 1;
  }
  (r = N(o, [-1, -1])), (u = S[r] = z[r](o));
  let A = !o[9] && Ei(o),
    B = o[5] && Ni(o);
  return {
    c() {
      (e = T("div")),
        k && k.c(),
        (n = M()),
        (t = T("div")),
        (s = T("div")),
        (i = T("div")),
        I(l.$$.fragment),
        (a = M()),
        u.c(),
        (f = M()),
        A && A.c(),
        (p = M()),
        B && B.c(),
        (g = fe()),
        c(s, "class", "icon-and-name svelte-t1bqik"),
        oe(s, "full-width", o[9]),
        c(t, "class", "container svelte-t1bqik"),
        c(t, "data-collection-node", o[11]),
        c(t, "data-node-type", "collection-folder"),
        c(e, "class", "header svelte-t1bqik"),
        c(e, "draggable", "true"),
        c(e, "data-collection-node", o[11]),
        oe(e, "is-expanded", o[0]),
        oe(e, "is-open-context-menu", o[3]),
        oe(e, "is-drag-enter", o[8]);
    },
    m(V, q) {
      w(V, e, q),
        k && k.m(e, null),
        h(e, n),
        h(e, t),
        h(t, s),
        h(s, i),
        C(l, i, null),
        h(s, a),
        S[r].m(s, null),
        h(t, f),
        A && A.m(t, null),
        w(V, p, q),
        B && B.m(V, q),
        w(V, g, q),
        (v = !0),
        b ||
          (($ = [
            Z(i, "click", je(o[15])),
            Z(e, "click", je(o[14])),
            Z(e, "contextmenu", je(ze(o[25]))),
            xe((m = o[12].call(null, e))),
          ]),
          (b = !0));
    },
    p(V, q) {
      V[4] && V[10]
        ? k
          ? (k.p(V, q), q[0] & 1040 && d(k, 1))
          : ((k = Ci(V)), k.c(), d(k, 1), k.m(e, n))
        : k &&
          (G(),
          _(k, 1, 1, () => {
            k = null;
          }),
          K());
      let le = {};
      q[0] & 2 && (le.emoji = V[1].emoji), l.$set(le);
      let J = r;
      (r = N(V, q)),
        r === J
          ? S[r].p(V, q)
          : (G(),
            _(S[J], 1, 1, () => {
              S[J] = null;
            }),
            K(),
            (u = S[r]),
            u ? u.p(V, q) : ((u = S[r] = z[r](V)), u.c()),
            d(u, 1),
            u.m(s, null)),
        (!v || q[0] & 512) && oe(s, "full-width", V[9]),
        V[9]
          ? A &&
            (G(),
            _(A, 1, 1, () => {
              A = null;
            }),
            K())
          : A
          ? (A.p(V, q), q[0] & 512 && d(A, 1))
          : ((A = Ei(V)), A.c(), d(A, 1), A.m(t, null)),
        (!v || q[0] & 1) && oe(e, "is-expanded", V[0]),
        (!v || q[0] & 8) && oe(e, "is-open-context-menu", V[3]),
        (!v || q[0] & 256) && oe(e, "is-drag-enter", V[8]),
        V[5]
          ? B
            ? (B.p(V, q), q[0] & 32 && d(B, 1))
            : ((B = Ni(V)), B.c(), d(B, 1), B.m(g.parentNode, g))
          : B &&
            (G(),
            _(B, 1, 1, () => {
              B = null;
            }),
            K());
    },
    i(V) {
      v || (d(k), d(l.$$.fragment, V), d(u), d(A), d(B), (v = !0));
    },
    o(V) {
      _(k), _(l.$$.fragment, V), _(u), _(A), _(B), (v = !1);
    },
    d(V) {
      V && y(e),
        k && k.d(),
        E(l),
        S[r].d(),
        A && A.d(),
        V && y(p),
        B && B.d(V),
        V && y(g),
        (b = !1),
        Te($);
    },
  };
}
function Ec(o, e, n) {
  let t,
    s,
    i = ye(),
    { folder: l } = e,
    { isExpanded: a } = e,
    { index: r } = e,
    { chunkType: u } = e,
    f = !1,
    m,
    p = null,
    g = 0,
    v = l?.name,
    b = JSON.stringify({
      id: l.uuid,
      type: "folder",
      parentId: l.folderUuid,
      index: r,
      teamId: l.teamUuid,
      chunkType: u,
      dropForbidden: !(l.permissions.drop ?? !0),
      dragForbidden: !(l.permissions.drag ?? !0),
    }),
    $,
    [k, z] = $t({
      placement: "bottom-start",
      modifiers: [
        {
          name: "sameWidth",
          enabled: !0,
          phase: "beforeWrite",
          fn: (W) => {
            let he = W.state.elements.reference.getBoundingClientRect().width;
            W.state.styles.popper &&
              ((W.state.styles.popper.width = `${he}px`),
              (W.state.styles.popper.minWidth = `${he}px`));
          },
        },
      ],
    }),
    S = () => {
      n(0, (a = !a)), Re.update((W) => ({ ...W, [l.uuid]: a }));
    },
    N = () => {
      !l.permissions.edit || u === "bookmarks" || n(10, (t = !t));
    },
    A = (W) => {
      u !== "bookmarks" &&
        (H.actions.updateCollection(l.uuid, { emoji: W.detail.value.symbol }),
        N());
    },
    B = () => {
      n(9, (s = !0)), n(3, (f = !1));
    },
    V = () => {
      n(9, (s = !1));
    },
    q = (W) => at(W, () => N()),
    le = () => {
      i("createNestedFolder", l.uuid);
    },
    J = ({ detail: W }) => {
      V(),
        n(3, (f = !1)),
        W !== l.name &&
          (n(7, (v = W)),
          H.actions.sendAnalyticsEvent("collections.folder-name-edited", {
            scope: u,
          }),
          u === "bookmarks"
            ? H.actions.updateBookmark(l.uuid, { title: W })
            : H.actions.renameCollection(l.uuid, W));
    },
    ie = (W) => {
      H.actions.sendAnalyticsEvent("collections.folder-deleted", { scope: u }),
        u === "bookmarks"
          ? H.actions.removeBookmarkFolder(W)
          : H.actions.deleteCollection(W);
    },
    te = ({ detail: W }) => {
      W.children.length ? (Ie(W), n(5, (p = W))) : ie(l.uuid);
    },
    U = () => {
      p && (ie(p.uuid), ee(), n(6, (g = 0)));
    },
    ee = () => {
      n(6, (g = 0)), n(5, (p = null));
    },
    Ie = (W) => {
      W && de(W.children);
    },
    de = (W) => {
      W.forEach((he) => {
        switch (he.type) {
          case "folder":
            de(he.children);
            break;
          case "link":
            n(6, (g += 1));
            break;
          default:
            break;
        }
      });
    },
    $e = () => {
      n(3, (f = !f));
    };
  Me(async () => {
    n(4, (m = await Ct()));
  });
  function Se(W) {
    pe.call(this, o, W);
  }
  function Ce(W) {
    (f = W), n(3, f);
  }
  o.$$set = (W) => {
    "folder" in W && n(1, (l = W.folder)),
      "isExpanded" in W && n(0, (a = W.isExpanded)),
      "index" in W && n(26, (r = W.index)),
      "chunkType" in W && n(2, (u = W.chunkType));
  };
  e: n(10, (t = !1));
  e: n(9, (s = !1));
  e: n(8, ($ = !1));
  return [
    a,
    l,
    u,
    f,
    m,
    p,
    g,
    v,
    $,
    s,
    t,
    b,
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le,
    J,
    te,
    U,
    ee,
    $e,
    r,
    Se,
    Ce,
  ];
}
var Jn = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          Ec,
          Cc,
          P,
          { folder: 1, isExpanded: 0, index: 26, chunkType: 2 },
          wc,
          [-1, -1]
        );
    }
  },
  Ai = Jn;
function zc(o) {
  R(
    o,
    "svelte-1en2kzm",
    ".folder-children.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm{list-style-type:none;padding:0;margin:0;margin-left:16px;margin-top:3px}.emoji-picker-wrapper.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm{position:absolute;left:auto;top:40px;display:flex;flex-direction:column;padding:12px 2px 12px 8px;width:250px;height:270px;background:var(--popup-bg-color);overflow-y:scroll;border-radius:8px;z-index:5;box-shadow:0 0 12px rgb(0 0 0 / 0.2)}.empty.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm{color:#808080;padding:8px 8px 8px 28px;cursor:default}.add-link-wrapper.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm{display:flex;align-items:center;column-gap:10px;cursor:pointer;padding:8px 8px 8px 18px;border-radius:4px;position:relative}.add-link-wrapper.svelte-1en2kzm>span.svelte-1en2kzm.svelte-1en2kzm{font-size:12px;color:var(--collection-link-text-color);position:relative}.add-link-wrapper.svelte-1en2kzm .add-url.svelte-1en2kzm.svelte-1en2kzm{display:none;position:absolute;right:7px;color:var(--accent-color);background:var(--collections-link-add-blur-bg);padding-left:30px}.add-link-wrapper.svelte-1en2kzm .add-url.svelte-1en2kzm>.add-url-button.svelte-1en2kzm{padding:2px 6px;border-radius:3px;text-transform:uppercase}.add-link-wrapper.svelte-1en2kzm .add-url.svelte-1en2kzm>.add-url-button.svelte-1en2kzm:hover{background-color:rgba(26 140 255 / 0.12)}.add-link-wrapper.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm:hover{background-color:var(--collection-hover)}.add-link-wrapper.svelte-1en2kzm:hover .add-url.svelte-1en2kzm.svelte-1en2kzm{display:block}.emoji-with-input.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm{display:flex;align-items:center;padding-left:8px;margin-bottom:4px}.emoji-with-input.svelte-1en2kzm .emoji-icon.svelte-1en2kzm.svelte-1en2kzm{cursor:pointer}.link-editor-wrapper.svelte-1en2kzm.svelte-1en2kzm.svelte-1en2kzm{padding-left:10px}"
  );
}
function Li(o, e, n) {
  let t = o.slice();
  return (t[26] = e[n]), (t[3] = n), t;
}
function ji(o) {
  let e, n;
  return (
    (e = new Tt({
      props: { $$slots: { default: [Mc] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 268435584 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Mc(o) {
  let e, n, t, s, i, l, a;
  return (
    (n = new It({ props: { emojisSections: o[7].emojisSections } })),
    n.$on("findEmoji", o[24]),
    n.$on("changeBackgroundEmoji", o[16]),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "emoji-picker-wrapper svelte-1en2kzm");
      },
      m(r, u) {
        w(r, e, u),
          C(n, e, null),
          (i = !0),
          l ||
            ((a = [
              xe((t = o[15].call(null, e))),
              xe((s = o[13].call(null, e))),
            ]),
            (l = !0));
      },
      p(r, u) {
        let f = {};
        u & 128 && (f.emojisSections = r[7].emojisSections), n.$set(f);
      },
      i(r) {
        i || (d(n.$$.fragment, r), (i = !0));
      },
      o(r) {
        _(n.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && y(e), E(n), (l = !1), Te(a);
      },
    }
  );
}
function Vi(o) {
  let e,
    n,
    t = [],
    s = new Map(),
    i,
    l,
    a,
    r = o[5] && Hi(o),
    u = o[0].children,
    f = (v) => `${v[26].uuid}-${v[3]}`;
  for (let v = 0; v < u.length; v += 1) {
    let b = Li(o, u, v),
      $ = f(b);
    s.set($, (t[v] = qi($, b)));
  }
  let m = null;
  u.length || (m = Oi(o));
  let p = o[4] && Bi(o),
    g = o[0].permissions.edit && Pi(o);
  return {
    c() {
      (e = T("ul")), r && r.c(), (n = M());
      for (let v = 0; v < t.length; v += 1) t[v].c();
      m && m.c(),
        (i = M()),
        p && p.c(),
        (l = M()),
        g && g.c(),
        c(e, "class", "folder-children svelte-1en2kzm");
    },
    m(v, b) {
      w(v, e, b), r && r.m(e, null), h(e, n);
      for (let $ = 0; $ < t.length; $ += 1) t[$] && t[$].m(e, null);
      m && m.m(e, null),
        h(e, i),
        p && p.m(e, null),
        h(e, l),
        g && g.m(e, null),
        (a = !0);
    },
    p(v, b) {
      v[5]
        ? r
          ? (r.p(v, b), b & 32 && d(r, 1))
          : ((r = Hi(v)), r.c(), d(r, 1), r.m(e, n))
        : r &&
          (G(),
          _(r, 1, 1, () => {
            r = null;
          }),
          K()),
        b & 7 &&
          ((u = v[0].children),
          G(),
          (t = Xe(t, b, f, 1, v, u, s, e, Ze, qi, i, Li)),
          K(),
          !u.length && m
            ? m.p(v, b)
            : u.length
            ? m && (m.d(1), (m = null))
            : ((m = Oi(v)), m.c(), m.m(e, i))),
        v[4]
          ? p
            ? (p.p(v, b), b & 16 && d(p, 1))
            : ((p = Bi(v)), p.c(), d(p, 1), p.m(e, l))
          : p &&
            (G(),
            _(p, 1, 1, () => {
              p = null;
            }),
            K()),
        v[0].permissions.edit
          ? g
            ? (g.p(v, b), b & 1 && d(g, 1))
            : ((g = Pi(v)), g.c(), d(g, 1), g.m(e, null))
          : g &&
            (G(),
            _(g, 1, 1, () => {
              g = null;
            }),
            K());
    },
    i(v) {
      if (!a) {
        d(r);
        for (let b = 0; b < u.length; b += 1) d(t[b]);
        d(p), d(g), (a = !0);
      }
    },
    o(v) {
      _(r);
      for (let b = 0; b < t.length; b += 1) _(t[b]);
      _(p), _(g), (a = !1);
    },
    d(v) {
      v && y(e), r && r.d();
      for (let b = 0; b < t.length; b += 1) t[b].d();
      m && m.d(), p && p.d(), g && g.d();
    },
  };
}
function Hi(o) {
  let e, n, t, s, i, l, a, r, u;
  return (
    (t = new ft({ props: { emoji: o[6] } })),
    (i = new kt({
      props: {
        name: o[8],
        noCloseOnBlur: !0,
        placeholder: L("sidecar_collections__add_new_folder_placeholder"),
        canBeEmpty: !0,
      },
    })),
    i.$on("edited", o[21]),
    i.$on("cancel", o[19]),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          I(t.$$.fragment),
          (s = M()),
          I(i.$$.fragment),
          c(n, "class", "emoji-icon svelte-1en2kzm"),
          c(e, "class", "emoji-with-input svelte-1en2kzm");
      },
      m(f, m) {
        w(f, e, m),
          h(e, n),
          C(t, n, null),
          h(e, s),
          C(i, e, null),
          (a = !0),
          r ||
            ((u = [
              Z(n, "click", je(ze(o[14]))),
              xe((l = o[12].call(null, e))),
            ]),
            (r = !0));
      },
      p(f, m) {
        let p = {};
        m & 64 && (p.emoji = f[6]), t.$set(p);
        let g = {};
        m & 256 && (g.name = f[8]), i.$set(g);
      },
      i(f) {
        a || (d(t.$$.fragment, f), d(i.$$.fragment, f), (a = !0));
      },
      o(f) {
        _(t.$$.fragment, f), _(i.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && y(e), E(t), E(i), (r = !1), Te(u);
      },
    }
  );
}
function Oi(o) {
  let e;
  return {
    c() {
      (e = T("li")),
        (e.textContent = `${L("sidecar_collections__empty")}`),
        c(e, "class", "empty svelte-1en2kzm");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function qi(o, e) {
  let n, t, s;
  return (
    (t = new En({
      props: { node: e[26], depth: e[1] + 1, index: e[3], chunkType: e[2] },
    })),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), I(t.$$.fragment), (this.first = n);
      },
      m(i, l) {
        w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        e = i;
        let a = {};
        l & 1 && (a.node = e[26]),
          l & 2 && (a.depth = e[1] + 1),
          l & 1 && (a.index = e[3]),
          l & 4 && (a.chunkType = e[2]),
          t.$set(a);
      },
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(n), E(t, i);
      },
    }
  );
}
function Bi(o) {
  let e, n, t;
  return (
    (n = new kt({ props: { name: o[9], isLink: !0 } })),
    n.$on("edited", o[22]),
    n.$on("cancel", o[18]),
    {
      c() {
        (e = T("li")),
          I(n.$$.fragment),
          c(e, "class", "link-editor-wrapper svelte-1en2kzm");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 512 && (l.name = s[9]), n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Pi(o) {
  let e, n, t, s, i, l, a, r, u, f;
  return (
    (n = new nt({ props: { width: "10" } })),
    {
      c() {
        (e = T("li")),
          I(n.$$.fragment),
          (t = M()),
          (s = T("span")),
          (s.textContent = `${L("sidecar_collections__add_active_tab")}`),
          (i = M()),
          (l = T("div")),
          (a = T("button")),
          (a.textContent = `${L("sidecar_collections__add_url")}`),
          c(s, "class", "svelte-1en2kzm"),
          c(a, "class", "add-url-button svelte-1en2kzm"),
          c(l, "class", "add-url svelte-1en2kzm"),
          c(e, "class", "add-link-wrapper svelte-1en2kzm");
      },
      m(m, p) {
        w(m, e, p),
          C(n, e, null),
          h(e, t),
          h(e, s),
          h(e, i),
          h(e, l),
          h(l, a),
          (r = !0),
          u ||
            ((f = [Z(a, "click", je(ze(o[18]))), Z(e, "click", o[17])]),
            (u = !0));
      },
      p: j,
      i(m) {
        r || (d(n.$$.fragment, m), (r = !0));
      },
      o(m) {
        _(n.$$.fragment, m), (r = !1);
      },
      d(m) {
        m && y(e), E(n), (u = !1), Te(f);
      },
    }
  );
}
function Nc(o) {
  let e, n, t, s, i;
  (n = new Ai({
    props: { folder: o[0], isExpanded: o[11], index: o[3], chunkType: o[2] },
  })),
    n.$on("createNestedFolder", o[20]);
  let l = o[7] && o[10] && ji(o),
    a = o[11] && Vi(o);
  return {
    c() {
      (e = T("div")),
        I(n.$$.fragment),
        (t = M()),
        l && l.c(),
        (s = M()),
        a && a.c();
    },
    m(r, u) {
      w(r, e, u),
        C(n, e, null),
        h(e, t),
        l && l.m(e, null),
        h(e, s),
        a && a.m(e, null),
        (i = !0);
    },
    p(r, [u]) {
      let f = {};
      u & 1 && (f.folder = r[0]),
        u & 2048 && (f.isExpanded = r[11]),
        u & 8 && (f.index = r[3]),
        u & 4 && (f.chunkType = r[2]),
        n.$set(f),
        r[7] && r[10]
          ? l
            ? (l.p(r, u), u & 1152 && d(l, 1))
            : ((l = ji(r)), l.c(), d(l, 1), l.m(e, s))
          : l &&
            (G(),
            _(l, 1, 1, () => {
              l = null;
            }),
            K()),
        r[11]
          ? a
            ? (a.p(r, u), u & 2048 && d(a, 1))
            : ((a = Vi(r)), a.c(), d(a, 1), a.m(e, null))
          : a &&
            (G(),
            _(a, 1, 1, () => {
              a = null;
            }),
            K());
    },
    i(r) {
      i || (d(n.$$.fragment, r), d(l), d(a), (i = !0));
    },
    o(r) {
      _(n.$$.fragment, r), _(l), _(a), (i = !1);
    },
    d(r) {
      r && y(e), E(n), l && l.d(), a && a.d();
    },
  };
}
function Ac(o, e, n) {
  let t, s, i;
  ue(o, Re, (U) => n(23, (i = U)));
  let l = L("sidecar_collections__untitled"),
    { folder: a } = e,
    { depth: r } = e,
    { index: u } = e,
    { chunkType: f } = e,
    m = !1,
    p = !1,
    g = null,
    v,
    b = "",
    $ = "",
    [k, z] = $t({
      placement: "bottom-start",
      modifiers: [
        {
          name: "sameWidth",
          enabled: !0,
          phase: "beforeWrite",
          fn: (U) => {
            let ee = U.state.elements.reference.getBoundingClientRect().width;
            U.state.styles.popper &&
              ((U.state.styles.popper.width = `${ee}px`),
              (U.state.styles.popper.minWidth = `${ee}px`));
          },
        },
      ],
    }),
    S = () => {
      f !== "bookmarks" && n(10, (s = !s));
    },
    N = (U) =>
      at(U, () => {
        S();
      }),
    A = (U) => {
      f !== "bookmarks" && (n(6, (g = U.detail.value.symbol)), S());
    },
    B = () => {
      H.actions.sendAnalyticsEvent("collections.new-link-added", {
        scope: f,
        isFromTab: !0,
      }),
        f === "bookmarks"
          ? H.actions.addCurrentTabToBookmarksCollection(a.uuid)
          : H.actions.addCurrentTabToCollection(a.uuid);
    },
    V = () => {
      n(4, (m = !m)), n(9, ($ = ""));
    },
    q = () => {
      n(8, (b = "")), n(6, (g = null)), n(5, (p = !1));
    },
    le = () => {
      n(5, (p = !0)), Re.update((U) => ({ ...U, [a.uuid]: !0 }));
    },
    J = ({ detail: U }) => {
      n(8, (b = U));
      let ee = U;
      U.length || (ee = l),
        H.actions.sendAnalyticsEvent("collections.folder-created", {
          scope: f,
        }),
        f === "bookmarks"
          ? H.actions.createBookmarkFolder({ parentId: a.uuid, title: ee })
          : H.actions.createCollection({
              name: ee,
              emoji: g,
              parentId: a.uuid ?? "",
              teamId: "",
            }),
        q();
    },
    ie = ({ detail: U }) => {
      n(4, (m = !1)),
        U &&
          (n(9, ($ = "")),
          H.actions.sendAnalyticsEvent("collections.new-link-added", {
            scope: f,
          }),
          f === "bookmarks"
            ? H.actions.addLinkToBookmarksCollection(a.uuid, U)
            : H.actions.createCollectionLink(a.uuid, { link: U }));
    };
  Me(async () => {
    n(7, (v = await Ct()));
  });
  function te(U) {
    pe.call(this, o, U);
  }
  (o.$$set = (U) => {
    "folder" in U && n(0, (a = U.folder)),
      "depth" in U && n(1, (r = U.depth)),
      "index" in U && n(3, (u = U.index)),
      "chunkType" in U && n(2, (f = U.chunkType));
  }),
    (o.$$.update = () => {
      if (o.$$.dirty & 8388609) {
        e: n(11, (t = i[a?.uuid] ?? !1));
      }
    });
  e: n(10, (s = !1));
  return [
    a,
    r,
    f,
    u,
    m,
    p,
    g,
    v,
    b,
    $,
    s,
    t,
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le,
    J,
    ie,
    i,
    te,
  ];
}
var Qn = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          Ac,
          Nc,
          P,
          { folder: 0, depth: 1, index: 3, chunkType: 2 },
          zc
        );
    }
  },
  Di = Qn;
O();
O();
function Lc(o) {
  let e = L("sidecar_collections__edit") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function jc(o) {
  let e = L("sidecar_collections__delete") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Vc(o) {
  let e, n, t, s;
  return (
    (e = new Ge({
      props: { $$slots: { default: [Lc] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[1]),
    (t = new Ge({
      props: {
        useErrorColor: !0,
        $$slots: { default: [jc] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("click", o[2]),
    {
      c() {
        I(e.$$.fragment), (n = M()), I(t.$$.fragment);
      },
      m(i, l) {
        C(e, i, l), w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        let a = {};
        l & 128 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
        let r = {};
        l & 128 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
      },
      i(i) {
        s || (d(e.$$.fragment, i), d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(e.$$.fragment, i), _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        E(e, i), i && y(n), E(t, i);
      },
    }
  );
}
function Hc(o) {
  let e, n, t;
  function s(l) {
    o[5](l);
  }
  let i = { offset: [8, 0], $$slots: { default: [Vc] }, $$scope: { ctx: o } };
  return (
    o[0] !== void 0 && (i.isMenuVisible = o[0]),
    (e = new ut({ props: i })),
    _e.push(() => Ae(e, "isMenuVisible", s)),
    {
      c() {
        I(e.$$.fragment);
      },
      m(l, a) {
        C(e, l, a), (t = !0);
      },
      p(l, [a]) {
        let r = {};
        a & 128 && (r.$$scope = { dirty: a, ctx: l }),
          !n &&
            a & 1 &&
            ((n = !0), (r.isMenuVisible = l[0]), Ne(() => (n = !1))),
          e.$set(r);
      },
      i(l) {
        t || (d(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        _(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function Oc(o, e, n) {
  let t = ye(),
    { link: s } = e,
    { isMenuVisible: i = !1 } = e,
    { chunkType: l } = e,
    a = () => {
      t("edit");
    },
    r = () => {
      H.actions.sendAnalyticsEvent("collections.link-deleted", { scope: l }),
        l === "bookmarks"
          ? H.actions.removeBookmark(s.uuid)
          : H.actions.deleteLink(s.uuid);
    };
  function u(f) {
    (i = f), n(0, i);
  }
  return (
    (o.$$set = (f) => {
      "link" in f && n(3, (s = f.link)),
        "isMenuVisible" in f && n(0, (i = f.isMenuVisible)),
        "chunkType" in f && n(4, (l = f.chunkType));
    }),
    [i, a, r, s, l, u]
  );
}
var es = class extends x {
    constructor(e) {
      super(),
        D(this, e, Oc, Hc, P, { link: 3, isMenuVisible: 0, chunkType: 4 });
    }
  },
  xi = es;
O();
function qc(o) {
  R(
    o,
    "svelte-1n8za1w",
    ".link-editor.svelte-1n8za1w{display:flex;flex-direction:column;border:1px solid var(--collections-link-editor-border);background-color:var(--collections-link-editor-bg);padding:11px 9px 13px;border-radius:8px}.buttons-wrapper.svelte-1n8za1w{margin-top:13px}.input.svelte-1n8za1w{width:100%;display:inline;color:var(--input-with-slots-color);background-color:var(--input-with-slots-backround);outline:0;padding:10px;border:1px solid var(--marketplace-input-border);border-radius:8px}.input.svelte-1n8za1w:not(:last-child){margin-bottom:14px}.input.is-error.svelte-1n8za1w{border:1px solid var(--error-color)}.input-title.svelte-1n8za1w{font-size:12px;color:#999;margin-bottom:2px;text-align:left}"
  );
}
function Bc(o) {
  let e = L("save") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Pc(o) {
  let e = L("sidecar_collections__cancel") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Dc(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p, g, v, b, $, k, z, S;
  return (
    (v = new me({
      props: {
        mod: "light",
        size: "small",
        type: "submit",
        $$slots: { default: [Bc] },
        $$scope: { ctx: o },
      },
    })),
    ($ = new me({
      props: {
        mod: "grey",
        size: "small",
        $$slots: { default: [Pc] },
        $$scope: { ctx: o },
      },
    })),
    $.$on("click", o[4]),
    {
      c() {
        (e = T("form")),
          (n = T("div")),
          (t = T("div")),
          (t.textContent = `${L("sidecar_collections__name")}`),
          (s = M()),
          (i = T("input")),
          (a = M()),
          (r = T("div")),
          (r.textContent = "URL"),
          (u = M()),
          (f = T("input")),
          (p = M()),
          (g = T("div")),
          I(v.$$.fragment),
          (b = M()),
          I($.$$.fragment),
          c(t, "class", "input-title svelte-1n8za1w"),
          c(i, "class", "input svelte-1n8za1w"),
          c(i, "type", "text"),
          c(i, "placeholder", (l = L("sidecar_collections__link_name"))),
          oe(i, "is-error", o[2]),
          c(r, "class", "input-title svelte-1n8za1w"),
          c(f, "class", "input svelte-1n8za1w"),
          c(f, "type", "text"),
          c(f, "placeholder", (m = L("sidecar_collections__link"))),
          oe(f, "is-error", o[3]),
          c(n, "class", "inputs-wrapper"),
          c(g, "class", "buttons-wrapper svelte-1n8za1w"),
          c(e, "class", "link-editor svelte-1n8za1w");
      },
      m(N, A) {
        w(N, e, A),
          h(e, n),
          h(n, t),
          h(n, s),
          h(n, i),
          Je(i, o[0]),
          h(n, a),
          h(n, r),
          h(n, u),
          h(n, f),
          Je(f, o[1]),
          h(e, p),
          h(e, g),
          C(v, g, null),
          h(g, b),
          C($, g, null),
          (k = !0),
          z ||
            ((S = [
              Z(i, "input", o[6]),
              Z(f, "input", o[7]),
              Z(e, "submit", ze(o[5])),
            ]),
            (z = !0));
      },
      p(N, [A]) {
        A & 1 && i.value !== N[0] && Je(i, N[0]),
          (!k || A & 4) && oe(i, "is-error", N[2]),
          A & 2 && f.value !== N[1] && Je(f, N[1]),
          (!k || A & 8) && oe(f, "is-error", N[3]);
        let B = {};
        A & 512 && (B.$$scope = { dirty: A, ctx: N }), v.$set(B);
        let V = {};
        A & 512 && (V.$$scope = { dirty: A, ctx: N }), $.$set(V);
      },
      i(N) {
        k || (d(v.$$.fragment, N), d($.$$.fragment, N), (k = !0));
      },
      o(N) {
        _(v.$$.fragment, N), _($.$$.fragment, N), (k = !1);
      },
      d(N) {
        N && y(e), E(v), E($), (z = !1), Te(S);
      },
    }
  );
}
function xc(o, e, n) {
  let t = ye(),
    { name: s } = e,
    { url: i } = e,
    l = !1,
    a = !1,
    r = () => {
      t("cancel");
    },
    u = () => {
      n(3, (a = !i || !rn(i))),
        n(2, (l = !s)),
        !(a || l) && t("linkEdited", { url: i, name: s });
    };
  function f() {
    (s = this.value), n(0, s);
  }
  function m() {
    (i = this.value), n(1, i);
  }
  return (
    (o.$$set = (p) => {
      "name" in p && n(0, (s = p.name)), "url" in p && n(1, (i = p.url));
    }),
    [s, i, l, a, r, u, f, m]
  );
}
var ts = class extends x {
    constructor(e) {
      super(), D(this, e, xc, Dc, P, { name: 0, url: 1 }, qc);
    }
  },
  Fi = ts;
function Fc(o) {
  R(
    o,
    "svelte-16g4i5g",
    ".link.svelte-16g4i5g.svelte-16g4i5g{display:flex;align-items:center;position:relative;border-radius:4px;padding-left:8px;user-select:none}.link.is-open-context-menu.svelte-16g4i5g.svelte-16g4i5g{background-color:var(--collection-hover)}.link.is-open-context-menu.svelte-16g4i5g .context-menu.svelte-16g4i5g{display:flex;opacity:1}.link.svelte-16g4i5g.svelte-16g4i5g:where([drop-position='above']),.link.svelte-16g4i5g.svelte-16g4i5g:where([drop-position='below']){position:relative}.link.svelte-16g4i5g.svelte-16g4i5g:where([drop-position='above'])::after,.link.svelte-16g4i5g.svelte-16g4i5g:where([drop-position='below'])::after{background:#0b5fce;content:'';display:block;height:2px;margin:0;position:absolute;top:-1px;width:100%}.link.svelte-16g4i5g.svelte-16g4i5g:where([drop-position='below'])::after{bottom:-1px;top:auto}.link.svelte-16g4i5g.svelte-16g4i5g:hover{background-color:var(--collection-hover)}.link.svelte-16g4i5g button.svelte-16g4i5g{position:relative;display:block;flex:1;text-decoration:none;color:inherit;min-height:32px;padding:8px 0 8px 32px;overflow:hidden;text-align:left}.link-icon.svelte-16g4i5g.svelte-16g4i5g{width:16px;height:16px;display:block;margin-right:8px;position:absolute;top:50%;left:8px;transform:translateY(-50%)}.link-name.svelte-16g4i5g.svelte-16g4i5g{display:block;flex:1 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--collection-link-text-color)}.actions.svelte-16g4i5g.svelte-16g4i5g{min-width:24px;padding-right:8px;gap:4px}.link.svelte-16g4i5g:not(.is-open-context-menu, :hover) .actions.svelte-16g4i5g{opacity:0}"
  );
}
function Gc(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a = o[0].name + "",
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $;
  s = new bn({ props: { favIconUrl: "", appUrl: o[0].url } });
  function k(S) {
    o[11](S);
  }
  let z = { link: o[0], chunkType: o[1] };
  return (
    o[2] !== void 0 && (z.isMenuVisible = o[2]),
    (p = new xi({ props: z })),
    _e.push(() => Ae(p, "isMenuVisible", k)),
    p.$on("edit", o[6]),
    {
      c() {
        (e = T("div")),
          (n = T("button")),
          (t = T("span")),
          I(s.$$.fragment),
          (i = M()),
          (l = T("span")),
          (r = F(a)),
          (u = M()),
          (f = T("div")),
          (m = T("span")),
          I(p.$$.fragment),
          c(t, "class", "link-icon svelte-16g4i5g"),
          c(l, "class", "link-name svelte-16g4i5g"),
          c(n, "data-collection-node", o[4]),
          c(n, "data-node-type", "collection-link"),
          c(n, "class", "svelte-16g4i5g"),
          c(m, "class", "context-menu svelte-16g4i5g"),
          c(f, "class", "actions svelte-16g4i5g"),
          c(e, "class", "link svelte-16g4i5g"),
          oe(e, "is-open-context-menu", o[2]);
      },
      m(S, N) {
        w(S, e, N),
          h(e, n),
          h(n, t),
          C(s, t, null),
          h(n, i),
          h(n, l),
          h(l, r),
          h(e, u),
          h(e, f),
          h(f, m),
          C(p, m, null),
          (v = !0),
          b ||
            (($ = [Z(n, "click", o[10]), Z(e, "contextmenu", je(ze(o[8])))]),
            (b = !0));
      },
      p(S, N) {
        let A = {};
        N & 1 && (A.appUrl = S[0].url),
          s.$set(A),
          (!v || N & 1) && a !== (a = S[0].name + "") && ae(r, a);
        let B = {};
        N & 1 && (B.link = S[0]),
          N & 2 && (B.chunkType = S[1]),
          !g &&
            N & 4 &&
            ((g = !0), (B.isMenuVisible = S[2]), Ne(() => (g = !1))),
          p.$set(B),
          (!v || N & 4) && oe(e, "is-open-context-menu", S[2]);
      },
      i(S) {
        v || (d(s.$$.fragment, S), d(p.$$.fragment, S), (v = !0));
      },
      o(S) {
        _(s.$$.fragment, S), _(p.$$.fragment, S), (v = !1);
      },
      d(S) {
        S && y(e), E(s), E(p), (b = !1), Te($);
      },
    }
  );
}
function Kc(o) {
  let e, n;
  return (
    (e = new Fi({ props: { name: o[0].name, url: o[0].url } })),
    e.$on("cancel", o[5]),
    e.$on("linkEdited", o[7]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.name = t[0].name), s & 1 && (i.url = t[0].url), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Rc(o) {
  let e,
    n,
    t,
    s,
    i = [Kc, Gc],
    l = [];
  function a(r, u) {
    return r[3] ? 0 : 1;
  }
  return (
    (e = a(o, -1)),
    (n = l[e] = i[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(r, u) {
        l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, [u]) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? l[e].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (n = l[e]),
              n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
              d(n, 1),
              n.m(t.parentNode, t));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        l[e].d(r), r && y(t);
      },
    }
  );
}
function Uc(o, e, n) {
  let { link: t } = e,
    { index: s } = e,
    { chunkType: i } = e,
    l = JSON.stringify({
      id: t.uuid,
      type: "link",
      parentId: t.folderUuid,
      index: s,
      chunkType: i,
    }),
    a = !1,
    r = !1,
    u = () => {
      n(3, (r = !r));
    },
    f = () => {
      u();
    },
    m = () => {
      n(2, (a = !1)), u();
    },
    p = ({ detail: $ }) => {
      H.actions.sendAnalyticsEvent("collections.link-edited", { scope: i }),
        i === "bookmarks"
          ? H.actions.updateBookmark(t.uuid, { title: $.name, url: $.url })
          : H.actions.updateCollectionsLink(t.uuid, {
              name: $.name,
              url: $.url,
            }),
        f();
    },
    g = () => {
      n(2, (a = !a));
    },
    v = () => H.actions.createTab(t.url);
  function b($) {
    (a = $), n(2, a);
  }
  return (
    (o.$$set = ($) => {
      "link" in $ && n(0, (t = $.link)),
        "index" in $ && n(9, (s = $.index)),
        "chunkType" in $ && n(1, (i = $.chunkType));
    }),
    [t, i, a, r, l, f, m, p, g, s, v, b]
  );
}
var ns = class extends x {
    constructor(e) {
      super(), D(this, e, Uc, Rc, P, { link: 0, index: 9, chunkType: 1 }, Fc);
    }
  },
  Gi = ns;
function Wc(o) {
  let e, n, t;
  return (
    (n = new Gi({ props: { link: o[0], index: o[2], chunkType: o[3] } })),
    {
      c() {
        (e = T("li")), I(n.$$.fragment), c(e, "class", "collection-node");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 1 && (l.link = s[0]),
          i & 4 && (l.index = s[2]),
          i & 8 && (l.chunkType = s[3]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Zc(o) {
  let e, n, t;
  return (
    (n = new Di({
      props: { folder: o[0], depth: o[1], index: o[2], chunkType: o[3] },
    })),
    {
      c() {
        (e = T("li")),
          I(n.$$.fragment),
          c(e, "class", "collection-node"),
          c(e, "draggable", "false");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 1 && (l.folder = s[0]),
          i & 2 && (l.depth = s[1]),
          i & 4 && (l.index = s[2]),
          i & 8 && (l.chunkType = s[3]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Xc(o) {
  let e,
    n,
    t,
    s,
    i = [Zc, Wc],
    l = [];
  function a(r, u) {
    return r[0].type === "folder" ? 0 : r[0].type === "link" ? 1 : -1;
  }
  return (
    ~(e = a(o, -1)) && (n = l[e] = i[e](o)),
    {
      c() {
        n && n.c(), (t = fe());
      },
      m(r, u) {
        ~e && l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, [u]) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? ~e && l[e].p(r, u)
            : (n &&
                (G(),
                _(l[f], 1, 1, () => {
                  l[f] = null;
                }),
                K()),
              ~e
                ? ((n = l[e]),
                  n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
                  d(n, 1),
                  n.m(t.parentNode, t))
                : (n = null));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        ~e && l[e].d(r), r && y(t);
      },
    }
  );
}
function Yc(o, e, n) {
  let { node: t } = e,
    { depth: s = 0 } = e,
    { index: i } = e,
    { chunkType: l } = e;
  return (
    (o.$$set = (a) => {
      "node" in a && n(0, (t = a.node)),
        "depth" in a && n(1, (s = a.depth)),
        "index" in a && n(2, (i = a.index)),
        "chunkType" in a && n(3, (l = a.chunkType));
    }),
    [t, s, i, l]
  );
}
var ss = class extends x {
    constructor(e) {
      super(),
        D(this, e, Yc, Xc, P, { node: 0, depth: 1, index: 2, chunkType: 3 });
    }
  },
  En = ss;
O();
function Jc(o) {
  R(
    o,
    "svelte-hrp1cr",
    ".wrapper.svelte-hrp1cr{padding:0 0 0 6px;display:flex;align-items:center;justify-content:space-between}h3.svelte-hrp1cr{margin:0;font-size:10px;font-weight:400;color:var(--text-secondary-color);text-transform:uppercase}"
  );
}
function Ki(o) {
  let e, n;
  return (
    (e = new _i({ props: { mode: "light" } })),
    e.$on("click", o[2]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Qc(o) {
  let e,
    n,
    t,
    s,
    i,
    l = o[1] && Ki(o);
  return {
    c() {
      (e = T("div")),
        (n = T("h3")),
        (t = F(o[0])),
        (s = M()),
        l && l.c(),
        c(n, "class", "svelte-hrp1cr"),
        c(e, "class", "wrapper svelte-hrp1cr");
    },
    m(a, r) {
      w(a, e, r), h(e, n), h(n, t), h(e, s), l && l.m(e, null), (i = !0);
    },
    p(a, [r]) {
      (!i || r & 1) && ae(t, a[0]),
        a[1]
          ? l
            ? r & 2 && d(l, 1)
            : ((l = Ki(a)), l.c(), d(l, 1), l.m(e, null))
          : l &&
            (G(),
            _(l, 1, 1, () => {
              l = null;
            }),
            K());
    },
    i(a) {
      i || (d(l), (i = !0));
    },
    o(a) {
      _(l), (i = !1);
    },
    d(a) {
      a && y(e), l && l.d();
    },
  };
}
function eu(o, e, n) {
  let { headerTitle: t } = e,
    { canAdd: s } = e;
  function i(l) {
    pe.call(this, o, l);
  }
  return (
    (o.$$set = (l) => {
      "headerTitle" in l && n(0, (t = l.headerTitle)),
        "canAdd" in l && n(1, (s = l.canAdd));
    }),
    [t, s, i]
  );
}
var os = class extends x {
    constructor(e) {
      super(), D(this, e, eu, Qc, P, { headerTitle: 0, canAdd: 1 }, Jc);
    }
  },
  zn = os;
O();
O();
var tu = 1e3,
  Mt = "drop-position",
  nu = "drop-area",
  is = "text/collection-node",
  zt = null,
  Gt = null,
  ls = (o) => {
    Gt = o;
  },
  rs = () => Gt;
var as = (o) => o.id === "empty",
  Ri = (o) =>
    o.dataset.nodeType === "collection-folder" ||
    o.dataset.nodeType === "collection-link" ||
    as(o),
  Nt = (o) => an(o.dataset?.collectionNode ?? null),
  Ui = (o) => an(o.dataset?.groupInfo ?? null),
  Wi = (o) => Boolean(fn(Re)[o]),
  At = () => {
    Gt?.parentElement?.removeAttribute(Mt),
      Gt?.removeAttribute(Mt),
      Gt?.removeAttribute(nu),
      zt !== null && (clearTimeout(zt), (zt = null));
  },
  Mn = (o) => o.chunkType === "shared",
  Kt = (o) => o.chunkType === "bookmarks",
  Zi = (o, e, n) => {
    let t = Nt(e),
      s = e.getBoundingClientRect(),
      i = (o.clientY - s.top) / s.height,
      l;
    return (
      t?.type === "folder"
        ? (t.parentId === null && n?.type === "link") ||
          (t.parentId === null && !n) ||
          (t.parentId === null && n?.parentId !== null) ||
          Mn(t) !== Mn(n)
          ? (l = "into")
          : i <= 0.25
          ? (l = "above")
          : i <= 0.75 || Wi(t.id)
          ? (l = "into")
          : (l = "below")
        : (l = i <= 0.5 ? "above" : "below"),
      l
    );
  },
  Xi = (o, e) => {
    o === "into" &&
      e &&
      !Wi(e.id) &&
      !zt &&
      (zt = setTimeout(() => {
        Re.update((n) => ({ ...n, [e.id]: !0 })), (zt = null);
      }, tu));
  },
  Yi = (o) => an(o.dataTransfer?.getData(is)) ?? null,
  cs = (o, e) => {
    let n = o.id === e.id,
      t = Kt(o) !== Kt(e),
      s = Mn(o) !== Mn(e),
      i = (o.dropForbidden || e.dropForbidden) ?? !1;
    return n || s || t || i;
  };
var mt = null,
  Ji = !1,
  Qi = (o) => {
    let e = Nt(o.target);
    (mt = e),
      e?.type === "folder" &&
        ((Ji = Boolean(fn(Re)[e.id])),
        Re.update((n) => ({ ...n, [e.id]: !1 }))),
      o.dataTransfer?.setData(is, JSON.stringify(e));
  },
  el = (o) => {
    let e = o.composedPath().find((i) => i instanceof HTMLElement && Ri(i));
    if (!e) return;
    let n = Nt(e),
      t = rs();
    t && n?.id !== Nt(t)?.id && At();
    let s;
    if (
      ((!mt || (as(e) && mt?.type !== "link") || mt?.dragForbidden) &&
        (s = "into"),
      mt && n && cs(mt, n))
    ) {
      At();
      return;
    }
    (s ??= mt ? Zi(o, e, mt) : "into"),
      e.parentElement?.setAttribute(Mt, s),
      Xi(s, n),
      ls(e);
  },
  us = (o) => {
    o.relatedTarget?.parentElement === null ||
      o.currentTarget?.contains(o.relatedTarget) ||
      (At(), ls(null));
  },
  tl = (o, e) => {
    let n = Yi(o),
      t = rs();
    if (!t) return;
    let s = Nt(t);
    if (!s || (n && cs(n, s))) return;
    let { dropNodeInsideFolder: i, updateNodePosition: l, createLink: a } = e;
    if (!n) {
      let f = t?.parentElement?.getAttribute(Mt),
        m = o.dataTransfer?.getData("url");
      if ((At(), !m)) return;
      let p = s.index + (f === "below" ? 1 : 0),
        g = s.type === "folder" ? s.id : s.parentId;
      if (!g) return;
      a(m, f === "into" ? 0 : p, g);
      return;
    }
    if ((Ji && Re.update((f) => ({ ...f, [n.id]: !0 })), t.id === "empty")) {
      let f = Ui(t);
      l(n.type, n.id, null, 0, f?.teamId, s.chunkType === "bookmarks");
    }
    let r = t.parentElement?.getAttribute(Mt);
    if ((At(), !r || !s)) return;
    if (s?.type === "folder" && r === "into") {
      i(n.type, n.id, s.id, Kt(s));
      return;
    }
    let u = s.index + (r === "below" ? 1 : 0);
    u > n.index && s.parentId === n.parentId && (u -= 1),
      !(u === n.index && s.parentId === n.parentId && s.teamId === n.teamId) &&
        l(n.type, n.id, s.parentId, u, s.teamId, Kt(s));
  };
function su(o) {
  R(
    o,
    "svelte-nzlx0s",
    "ul.svelte-nzlx0s{list-style-type:none;padding:0;margin-top:6px}.empty.svelte-nzlx0s{color:#808080;padding:8px 8px 8px 28px;cursor:default}.empty.svelte-nzlx0s:where([drop-area='true']){outline:2px solid #0b5fce;border-radius:4px;color:transparent}.creation-wrapper.svelte-nzlx0s{display:flex;align-items:center;padding-left:8px}.emoji-picker-wrapper.svelte-nzlx0s{position:absolute;left:auto;top:40px;display:flex;flex-direction:column;padding:12px 2px 12px 8px;width:250px;height:270px;background:var(--popup-bg-color);overflow-y:scroll;border-radius:8px;z-index:5;box-shadow:0 0 12px rgb(0 0 0 / 0.2)}"
  );
}
function nl(o, e, n) {
  let t = o.slice();
  return (t[23] = e[n]), (t[25] = n), t;
}
function sl(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a = [],
    r = new Map(),
    u,
    f,
    m;
  (n = new zn({ props: { headerTitle: o[1], canAdd: o[3] } })),
    n.$on("click", o[15]);
  let p = o[6] && o[9] && ol(o),
    g = o[5] && il(o),
    v = o[0],
    b = (k) => `${k[23].uuid}-${k[23].name}-${k[25]}`;
  for (let k = 0; k < v.length; k += 1) {
    let z = nl(o, v, k),
      S = b(z);
    r.set(S, (a[k] = rl(S, z)));
  }
  let $ = null;
  return (
    v.length || ($ = ll(o)),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          (t = M()),
          (s = T("ul")),
          p && p.c(),
          (i = M()),
          g && g.c(),
          (l = M());
        for (let k = 0; k < a.length; k += 1) a[k].c();
        $ && $.c(),
          c(s, "class", "svelte-nzlx0s"),
          c(e, "class", "collections-chunk");
      },
      m(k, z) {
        w(k, e, z),
          C(n, e, null),
          h(e, t),
          h(e, s),
          p && p.m(s, null),
          h(s, i),
          g && g.m(s, null),
          h(s, l);
        for (let S = 0; S < a.length; S += 1) a[S] && a[S].m(s, null);
        $ && $.m(s, null),
          (u = !0),
          f ||
            ((m = [
              Z(s, "dragstart", Qi),
              Z(s, "dragover", ze(el)),
              Z(s, "dragleave", us),
              Z(s, "dragend", us),
              Z(s, "drop", ze(o[19])),
            ]),
            (f = !0));
      },
      p(k, z) {
        let S = {};
        z & 2 && (S.headerTitle = k[1]),
          z & 8 && (S.canAdd = k[3]),
          n.$set(S),
          k[6] && k[9]
            ? p
              ? (p.p(k, z), z & 576 && d(p, 1))
              : ((p = ol(k)), p.c(), d(p, 1), p.m(s, i))
            : p &&
              (G(),
              _(p, 1, 1, () => {
                p = null;
              }),
              K()),
          k[5]
            ? g
              ? (g.p(k, z), z & 32 && d(g, 1))
              : ((g = il(k)), g.c(), d(g, 1), g.m(s, l))
            : g &&
              (G(),
              _(g, 1, 1, () => {
                g = null;
              }),
              K()),
          z & 1041 &&
            ((v = k[0]),
            G(),
            (a = Xe(a, z, b, 1, k, v, r, s, Ze, rl, null, nl)),
            K(),
            !v.length && $
              ? $.p(k, z)
              : v.length
              ? $ && ($.d(1), ($ = null))
              : (($ = ll(k)), $.c(), $.m(s, null)));
      },
      i(k) {
        if (!u) {
          d(n.$$.fragment, k), d(p), d(g);
          for (let z = 0; z < v.length; z += 1) d(a[z]);
          u = !0;
        }
      },
      o(k) {
        _(n.$$.fragment, k), _(p), _(g);
        for (let z = 0; z < a.length; z += 1) _(a[z]);
        u = !1;
      },
      d(k) {
        k && y(e), E(n), p && p.d(), g && g.d();
        for (let z = 0; z < a.length; z += 1) a[z].d();
        $ && $.d(), (f = !1), Te(m);
      },
    }
  );
}
function ol(o) {
  let e, n;
  return (
    (e = new Tt({
      props: { $$slots: { default: [ou] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 67108928 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function ou(o) {
  let e, n, t, s, i, l, a;
  return (
    (n = new It({ props: { emojisSections: o[6].emojisSections } })),
    n.$on("findEmoji", o[21]),
    n.$on("changeBackgroundEmoji", o[17]),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "emoji-picker-wrapper svelte-nzlx0s");
      },
      m(r, u) {
        w(r, e, u),
          C(n, e, null),
          (i = !0),
          l ||
            ((a = [
              xe((t = o[14].call(null, e))),
              xe((s = o[12].call(null, e))),
            ]),
            (l = !0));
      },
      p(r, u) {
        let f = {};
        u & 64 && (f.emojisSections = r[6].emojisSections), n.$set(f);
      },
      i(r) {
        i || (d(n.$$.fragment, r), (i = !0));
      },
      o(r) {
        _(n.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && y(e), E(n), (l = !1), Te(a);
      },
    }
  );
}
function il(o) {
  let e, n, t, s, i, l, a, r, u;
  return (
    (t = new ft({ props: { emoji: o[7] ? o[7].symbol : null } })),
    (i = new kt({
      props: {
        placeholder: L("sidecar_collections__add_new_folder_placeholder"),
        canBeEmpty: !0,
        name: o[8],
        noCloseOnBlur: !0,
      },
    })),
    i.$on("edited", o[16]),
    i.$on("cancel", o[18]),
    {
      c() {
        (e = T("div")),
          (n = T("button")),
          I(t.$$.fragment),
          (s = M()),
          I(i.$$.fragment),
          c(e, "class", "creation-wrapper svelte-nzlx0s");
      },
      m(f, m) {
        w(f, e, m),
          h(e, n),
          C(t, n, null),
          h(e, s),
          C(i, e, null),
          (a = !0),
          r ||
            ((u = [
              Z(n, "click", je(ze(o[13]))),
              xe((l = o[11].call(null, e))),
            ]),
            (r = !0));
      },
      p(f, m) {
        let p = {};
        m & 128 && (p.emoji = f[7] ? f[7].symbol : null), t.$set(p);
        let g = {};
        m & 256 && (g.name = f[8]), i.$set(g);
      },
      i(f) {
        a || (d(t.$$.fragment, f), d(i.$$.fragment, f), (a = !0));
      },
      o(f) {
        _(t.$$.fragment, f), _(i.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && y(e), E(t), E(i), (r = !1), Te(u);
      },
    }
  );
}
function ll(o) {
  let e,
    n = L("sidecar_collections__empty") + "",
    t,
    s;
  return {
    c() {
      (e = T("li")),
        (t = F(n)),
        (s = M()),
        c(e, "class", "empty svelte-nzlx0s"),
        c(e, "id", "empty"),
        c(e, "data-group-info", o[10]);
    },
    m(i, l) {
      w(i, e, l), h(e, t), h(e, s);
    },
    p: j,
    d(i) {
      i && y(e);
    },
  };
}
function rl(o, e) {
  let n, t, s;
  return (
    (t = new En({ props: { node: e[23], index: e[25], chunkType: e[4] } })),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), I(t.$$.fragment), (this.first = n);
      },
      m(i, l) {
        w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        e = i;
        let a = {};
        l & 1 && (a.node = e[23]),
          l & 1 && (a.index = e[25]),
          l & 16 && (a.chunkType = e[4]),
          t.$set(a);
      },
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(n), E(t, i);
      },
    }
  );
}
function iu(o) {
  let e,
    n,
    t = (o[2] || o[0].length) && sl(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[2] || s[0].length
        ? t
          ? (t.p(s, i), i & 5 && d(t, 1))
          : ((t = sl(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function lu(o, e, n) {
  let t,
    s = L("sidecar_collections__untitled"),
    { folders: i } = e,
    { headerTitle: l } = e,
    { teamId: a } = e,
    { visibleWhenEmpty: r = !1 } = e,
    { canAdd: u = !1 } = e,
    { chunkType: f } = e,
    m = !1,
    p,
    g = null,
    v = "",
    b = JSON.stringify({ teamId: a }),
    [$, k] = $t({
      placement: "bottom-start",
      modifiers: [
        {
          name: "sameWidth",
          enabled: !0,
          phase: "beforeWrite",
          fn: (J) => {
            let ie = J.state.elements.reference.getBoundingClientRect().width;
            J.state.styles.popper &&
              ((J.state.styles.popper.width = `${ie}px`),
              (J.state.styles.popper.minWidth = `${ie}px`));
          },
        },
      ],
    }),
    z = () => {
      f !== "bookmarks" && n(9, (t = !t));
    },
    S = (J) => at(J, () => z()),
    N = () => {
      n(5, (m = !m));
    },
    A = ({ detail: J }) => {
      if (!u) return;
      N();
      let ie = J;
      J.length || (ie = s),
        H.actions.sendAnalyticsEvent("collections.folder-created", {
          scope: f,
        }),
        H.actions.createCollection({
          name: ie,
          emoji: g?.symbol ?? void 0,
          parentId: "",
          teamId: a,
        }),
        n(8, (v = ""));
    },
    B = (J) => {
      n(7, (g = J.detail.value)), z();
    },
    V = () => {
      n(9, (t = !1)),
        n(5, (m = !1)),
        n(7, (g = null)),
        n(8, (v = L("sidecar_collections__untitled")));
    },
    q = (J) => {
      tl(J, {
        updateNodePosition: (ie, te, U, ee, Ie, de) => {
          if (de) {
            H.actions.moveBookmark(te, { parentId: U ?? Gn, index: ee });
            return;
          }
          ie === "folder"
            ? H.actions.updateCollection(te, {
                folderUuid: U,
                index: ee,
                teamUuid: Ie,
              })
            : U &&
              H.actions.updateCollectionsLink(te, { folderUuid: U, index: ee });
        },
        dropNodeInsideFolder: (ie, te, U, ee) => {
          if (ee) {
            H.actions.moveBookmark(te, { parentId: U ?? Gn });
            return;
          }
          ie === "link"
            ? H.actions.updateCollectionsLink(te, { folderUuid: U })
            : H.actions.updateCollection(te, { folderUuid: U });
        },
        createLink: (ie, te, U) => {
          H.actions.sendAnalyticsEvent("collections.new-link-added", {
            scope: f,
            isFromTab: !0,
          }),
            f === "bookmarks"
              ? H.actions.addLinkToBookmarksCollection(U, ie, te)
              : H.actions.createCollectionLink(U, { link: ie }, te);
        },
      });
    };
  Me(async () => {
    n(6, (p = await Ct()));
  });
  function le(J) {
    pe.call(this, o, J);
  }
  o.$$set = (J) => {
    "folders" in J && n(0, (i = J.folders)),
      "headerTitle" in J && n(1, (l = J.headerTitle)),
      "teamId" in J && n(20, (a = J.teamId)),
      "visibleWhenEmpty" in J && n(2, (r = J.visibleWhenEmpty)),
      "canAdd" in J && n(3, (u = J.canAdd)),
      "chunkType" in J && n(4, (f = J.chunkType));
  };
  e: n(9, (t = !1));
  return [i, l, r, u, f, m, p, g, v, t, b, $, k, z, S, N, A, B, V, q, a, le];
}
var fs = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          lu,
          iu,
          P,
          {
            folders: 0,
            headerTitle: 1,
            teamId: 20,
            visibleWhenEmpty: 2,
            canAdd: 3,
            chunkType: 4,
          },
          su
        );
    }
  },
  Lt = fs;
O();
function ru(o) {
  R(
    o,
    "svelte-z83vku",
    ".wrapper.svelte-z83vku{position:relative;display:flex;flex-direction:column;align-items:center;padding:20px;background:var(--yellow-sticker-bg-color);border-radius:4px}.close-btn.svelte-z83vku{position:absolute;top:0;right:0;padding:6px 6px 16px 16px}.title.svelte-z83vku{margin-top:13px;font-size:14px;margin-bottom:0}.text.svelte-z83vku{color:var(--hint-text-color-secondary);font-size:12px;line-height:16px;text-align:center;margin-top:6px;margin-bottom:0}"
  );
}
var au = (o) => ({}),
  al = (o) => ({}),
  cu = (o) => ({}),
  cl = (o) => ({});
function uu(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p, g, v;
  t = new St({ props: { width: "8", height: "8" } });
  let b = o[6].icon,
    $ = be(b, o, o[5], cl),
    k = o[6].button,
    z = be(k, o, o[5], al);
  return {
    c() {
      (e = T("div")),
        (n = T("button")),
        I(t.$$.fragment),
        (s = M()),
        $ && $.c(),
        (i = M()),
        (l = T("h4")),
        (a = F(o[0])),
        (r = M()),
        (u = T("p")),
        (f = F(o[1])),
        (m = M()),
        z && z.c(),
        c(n, "class", "close-btn svelte-z83vku"),
        c(n, "data-testid", o[3]),
        c(l, "class", "title svelte-z83vku"),
        c(u, "class", "text svelte-z83vku"),
        c(e, "class", "wrapper svelte-z83vku"),
        c(e, "data-testid", o[2]);
    },
    m(S, N) {
      w(S, e, N),
        h(e, n),
        C(t, n, null),
        h(e, s),
        $ && $.m(e, null),
        h(e, i),
        h(e, l),
        h(l, a),
        h(e, r),
        h(e, u),
        h(u, f),
        h(e, m),
        z && z.m(e, null),
        (p = !0),
        g || ((v = Z(n, "click", o[7])), (g = !0));
    },
    p(S, [N]) {
      (!p || N & 8) && c(n, "data-testid", S[3]),
        $ &&
          $.p &&
          (!p || N & 32) &&
          ke($, b, S, S[5], p ? ve(b, S[5], N, cu) : we(S[5]), cl),
        (!p || N & 1) && ae(a, S[0]),
        (!p || N & 2) && ae(f, S[1]),
        z &&
          z.p &&
          (!p || N & 32) &&
          ke(z, k, S, S[5], p ? ve(k, S[5], N, au) : we(S[5]), al),
        (!p || N & 4) && c(e, "data-testid", S[2]);
    },
    i(S) {
      p || (d(t.$$.fragment, S), d($, S), d(z, S), (p = !0));
    },
    o(S) {
      _(t.$$.fragment, S), _($, S), _(z, S), (p = !1);
    },
    d(S) {
      S && y(e), E(t), $ && $.d(S), z && z.d(S), (g = !1), v();
    },
  };
}
function fu(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { title: i } = e,
    { description: l } = e,
    { hintTestId: a } = e,
    { closeButtonTestId: r } = e,
    u = ye(),
    f = () => u("close");
  return (
    (o.$$set = (m) => {
      "title" in m && n(0, (i = m.title)),
        "description" in m && n(1, (l = m.description)),
        "hintTestId" in m && n(2, (a = m.hintTestId)),
        "closeButtonTestId" in m && n(3, (r = m.closeButtonTestId)),
        "$$scope" in m && n(5, (s = m.$$scope));
    }),
    [i, l, a, r, u, s, t, f]
  );
}
var ds = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          fu,
          uu,
          P,
          { title: 0, description: 1, hintTestId: 2, closeButtonTestId: 3 },
          ru
        );
    }
  },
  Nn = ds;
O();
function du(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M32.8858 23.4357H27.0525L25.2498 17.888L23.4482 23.4357H17.6139L22.3335 26.8646L20.5303 32.4123L25.2498 28.9835L29.9694 32.4123L28.1668 26.8646L32.8858 23.4357ZM25.8254 28.1913L25.2498 27.7732L24.6743 28.1913L22.3932 29.8487L23.2645 27.1671L23.4842 26.4905L22.9089 26.0722L20.6274 24.4149H24.1587L24.3786 23.7383L25.2498 21.0565L26.1211 23.7383L26.3412 24.4149H29.8715L27.5903 26.0722L27.0147 26.4905L27.2346 27.1671L28.1059 29.8487L25.8254 28.1913ZM28 12.9896H1.14441e-05V13.9688H28V12.9896ZM28 0H1.14441e-05V0.979167H28V0ZM0 27.0512H14V26.0721H0V27.0512Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 33 33"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function mu(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var ms = class extends x {
    constructor(e) {
      super(), D(this, e, mu, du, P, { width: 0, height: 1, className: 2 });
    }
  },
  ul = ms;
O();
function pu(o) {
  R(
    o,
    "svelte-lnoury",
    ".shortcuts-hint.svelte-lnoury.svelte-lnoury{display:flex;flex-direction:column;position:relative;margin:auto 0 0;padding:12px;border-radius:4px;border:1px solid var(--theme-12);color:var(--theme-85);letter-spacing:-0.01em;font-size:12px;row-gap:10px}.shortcuts-hint.svelte-lnoury .row.svelte-lnoury{display:flex;align-items:center;justify-content:space-between;width:100%}.shortcuts-hint.svelte-lnoury.svelte-lnoury::after{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--session-hint-bg);opacity:0.25;content:''}"
  );
}
function _u(o) {
  let e, n, t, s, i, l, a, r, u, f, m;
  return (
    (i = new Le({ props: { keys: o[0] } })),
    (f = new Le({ props: { keys: ["Drag & Drop"] } })),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (t = T("span")),
          (t.textContent = `${L(
            "sidecar_collections__show_collections_panel_title"
          )}`),
          (s = M()),
          I(i.$$.fragment),
          (l = M()),
          (a = T("div")),
          (r = T("span")),
          (r.textContent = `${L(
            "sidecar_collections__show_collections_panel_description"
          )}`),
          (u = M()),
          I(f.$$.fragment),
          c(n, "class", "row svelte-lnoury"),
          c(a, "class", "row svelte-lnoury"),
          c(e, "class", "shortcuts-hint svelte-lnoury"),
          c(e, "data-testid", "collections-shortcut-hint");
      },
      m(p, g) {
        w(p, e, g),
          h(e, n),
          h(n, t),
          h(n, s),
          C(i, n, null),
          h(e, l),
          h(e, a),
          h(a, r),
          h(a, u),
          C(f, a, null),
          (m = !0);
      },
      p(p, [g]) {
        let v = {};
        g & 1 && (v.keys = p[0]), i.$set(v);
      },
      i(p) {
        m || (d(i.$$.fragment, p), d(f.$$.fragment, p), (m = !0));
      },
      o(p) {
        _(i.$$.fragment, p), _(f.$$.fragment, p), (m = !1);
      },
      d(p) {
        p && y(e), E(i), E(f);
      },
    }
  );
}
function hu(o, e, n) {
  let { collectionsPanelShortcut: t } = e;
  return (
    (o.$$set = (s) => {
      "collectionsPanelShortcut" in s && n(0, (t = s.collectionsPanelShortcut));
    }),
    [t]
  );
}
var ps = class extends x {
    constructor(e) {
      super(), D(this, e, hu, _u, P, { collectionsPanelShortcut: 0 }, pu);
    }
  },
  fl = ps;
O();
function gu(o) {
  R(
    o,
    "svelte-1e86333",
    ".limits-error.svelte-1e86333{position:fixed;padding:14px 20px 14px 25px;background-color:#292929;z-index:1;border-radius:4px;border:1px solid rgb(255 255 255 / 0.08);box-shadow:0 8px 30px rgb(0 0 0 / 0.1);right:8px;left:8px;font-size:12px;line-height:16px;color:#f0f0f0;border-left:3px solid var(--field-border-error-color);user-select:none}.close-button.svelte-1e86333{position:absolute;top:0;right:0;padding:8px;color:#999}"
  );
}
function bu(o) {
  let e, n, t, s, i, l, a, r, u;
  return (
    (l = new ct({ props: { width: "8px", height: "8px" } })),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (t = F(o[0])),
          (s = M()),
          (i = T("button")),
          I(l.$$.fragment),
          c(i, "class", "close-button svelte-1e86333"),
          c(e, "class", "limits-error svelte-1e86333");
      },
      m(f, m) {
        w(f, e, m),
          h(e, n),
          h(n, t),
          h(e, s),
          h(e, i),
          C(l, i, null),
          (a = !0),
          r || ((u = Z(i, "click", o[1])), (r = !0));
      },
      p(f, [m]) {
        (!a || m & 1) && ae(t, f[0]);
      },
      i(f) {
        a || (d(l.$$.fragment, f), (a = !0));
      },
      o(f) {
        _(l.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && y(e), E(l), (r = !1), u();
      },
    }
  );
}
function vu(o, e, n) {
  let t = ye(),
    { message: s = "Unknown error" } = e,
    i = null,
    l = () => {
      i && clearTimeout(i), t("close");
    };
  return (
    Me(() => {
      i = setTimeout(() => {
        l();
      }, 5e3);
    }),
    (o.$$set = (a) => {
      "message" in a && n(0, (s = a.message));
    }),
    [s, l]
  );
}
var _s = class extends x {
    constructor(e) {
      super(), D(this, e, vu, bu, P, { message: 0 }, gu);
    }
  },
  dl = _s;
O();
function ku(o) {
  R(
    o,
    "svelte-1xt4u9r",
    ".wrapper.svelte-1xt4u9r{display:flex;align-items:center;justify-content:space-between;width:100%;padding:9px;border:1px solid var(--collections-invite-team-border);border-radius:8px;column-gap:8px}"
  );
}
function wu(o) {
  let e = L("sidecar_collections__invite_team_button") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function yu(o) {
  let e, n, t, s, i;
  return (
    (s = new me({
      props: { mod: "light", $$slots: { default: [wu] }, $$scope: { ctx: o } },
    })),
    s.$on("click", o[0]),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (n.textContent = `${L(
            "sidecar_collections__invite_team_block_text"
          )}`),
          (t = M()),
          I(s.$$.fragment),
          c(e, "class", "wrapper svelte-1xt4u9r");
      },
      m(l, a) {
        w(l, e, a), h(e, n), h(e, t), C(s, e, null), (i = !0);
      },
      p(l, [a]) {
        let r = {};
        a & 2 && (r.$$scope = { dirty: a, ctx: l }), s.$set(r);
      },
      i(l) {
        i || (d(s.$$.fragment, l), (i = !0));
      },
      o(l) {
        _(s.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && y(e), E(s);
      },
    }
  );
}
function $u(o) {
  return [
    () => {
      H.actions.startInvitingTeammates({ source: "collections" }),
        H.actions.sendAnalyticsEvent(
          "collections.invite-teammates.clicked",
          void 0
        );
    },
  ];
}
var hs = class extends x {
    constructor(e) {
      super(), D(this, e, $u, yu, P, {}, ku);
    }
  },
  ml = hs;
O();
function Su(o) {
  R(
    o,
    "svelte-1v7z0jf",
    ".wrapper.svelte-1v7z0jf{position:relative;display:flex;align-items:center;padding:14px;background:var(--yellow-sticker-bg-color);border-radius:4px}.text.svelte-1v7z0jf{margin-right:8px;font-weight:bold}"
  );
}
function Tu(o) {
  let e = L("sidecar_collections__import_bookmarks_button") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Iu(o) {
  let e, n, t, s, i;
  return (
    (s = new me({
      props: { $$slots: { default: [Tu] }, $$scope: { ctx: o } },
    })),
    s.$on("click", o[0]),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (n.textContent = `${L(
            "sidecar_collections__import_bookmarks_text"
          )}`),
          (t = M()),
          I(s.$$.fragment),
          c(n, "class", "text svelte-1v7z0jf"),
          c(e, "class", "wrapper svelte-1v7z0jf");
      },
      m(l, a) {
        w(l, e, a), h(e, n), h(e, t), C(s, e, null), (i = !0);
      },
      p(l, [a]) {
        let r = {};
        a & 2 && (r.$$scope = { dirty: a, ctx: l }), s.$set(r);
      },
      i(l) {
        i || (d(s.$$.fragment, l), (i = !0));
      },
      o(l) {
        _(s.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && y(e), E(s);
      },
    }
  );
}
function Cu(o) {
  function e(n) {
    pe.call(this, o, n);
  }
  return [e];
}
var gs = class extends x {
    constructor(e) {
      super(), D(this, e, Cu, Iu, P, {}, Su);
    }
  },
  pl = gs;
O();
function Eu(o) {
  R(
    o,
    "svelte-11ljj9b",
    ".wrapper.svelte-11ljj9b{position:relative}.success-popup.svelte-11ljj9b{background-color:var(--background-primary);width:100%;padding:18px;display:flex;flex-direction:column;row-gap:12px;border:1px solid var(--collections-import-success-popup-border);box-shadow:0 2px 20px rgb(0 0 0 / 0.08);border-radius:8px}.popup-wrapper.svelte-11ljj9b{position:absolute;top:calc(100% + 8px);left:0;right:0;z-index:10;width:100%}.popup-arrow.svelte-11ljj9b{position:absolute;left:50%;top:-21px;height:18px;z-index:20}.line.svelte-11ljj9b{width:2px;height:100%;background-color:#f56130;position:relative}.line.svelte-11ljj9b::after{content:'';display:block;width:6px;height:6px;border-radius:50%;background-color:#f56130;bottom:-3px;position:absolute;left:-2px;right:0;transform:translateX(0)}.circles.svelte-11ljj9b{width:8px;height:4px;border-radius:0 0 100px 100px;position:relative;background-color:#f56130;margin-left:-3px;z-index:50}.circles.svelte-11ljj9b::after,.circles.svelte-11ljj9b::before{display:block;position:absolute;content:'';border-radius:0 0 100px 100px;top:0;left:0}.circles.svelte-11ljj9b::after{width:16px;height:8px;background-color:rgb(245 97 48 / 0.6);z-index:40;margin-left:-4px}.circles.svelte-11ljj9b::before{width:24px;height:12px;background-color:rgb(245 97 48 / 0.3);z-index:30;margin-left:-8px}"
  );
}
function _l(o) {
  let e, n, t, s, i, l, a, r, u;
  return (
    (r = new me({
      props: { $$slots: { default: [zu] }, $$scope: { ctx: o } },
    })),
    r.$on("click", o[2]),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (n.innerHTML = `<div class="circles svelte-11ljj9b"></div> 
        <div class="line svelte-11ljj9b"></div>`),
          (t = M()),
          (s = T("div")),
          (i = T("div")),
          (i.textContent = `${L(
            "sidecar_collections__bookmarks_success_import_popup_text"
          )}`),
          (l = M()),
          (a = T("div")),
          I(r.$$.fragment),
          c(n, "class", "popup-arrow svelte-11ljj9b"),
          c(i, "class", "text"),
          c(a, "class", "button"),
          c(s, "class", "success-popup svelte-11ljj9b"),
          c(e, "class", "popup-wrapper svelte-11ljj9b");
      },
      m(f, m) {
        w(f, e, m),
          h(e, n),
          h(e, t),
          h(e, s),
          h(s, i),
          h(s, l),
          h(s, a),
          C(r, a, null),
          (u = !0);
      },
      p(f, m) {
        let p = {};
        m & 8 && (p.$$scope = { dirty: m, ctx: f }), r.$set(p);
      },
      i(f) {
        u || (d(r.$$.fragment, f), (u = !0));
      },
      o(f) {
        _(r.$$.fragment, f), (u = !1);
      },
      d(f) {
        f && y(e), E(r);
      },
    }
  );
}
function zu(o) {
  let e = L("sidecar_collections__bookmarks_success_import_popup_button") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Mu(o) {
  let e, n, t, s;
  n = new Lt({
    props: {
      folders: o[1],
      teamId: null,
      headerTitle: L("sidecar_collections__bookmarks_section_title"),
      chunkType: "bookmarks",
      canAdd: !1,
    },
  });
  let i = !o[0] && o[1][0]?.children?.length && _l(o);
  return {
    c() {
      (e = T("div")),
        I(n.$$.fragment),
        (t = M()),
        i && i.c(),
        c(e, "class", "wrapper svelte-11ljj9b");
    },
    m(l, a) {
      w(l, e, a), C(n, e, null), h(e, t), i && i.m(e, null), (s = !0);
    },
    p(l, [a]) {
      let r = {};
      a & 2 && (r.folders = l[1]),
        n.$set(r),
        !l[0] && l[1][0]?.children?.length
          ? i
            ? (i.p(l, a), a & 3 && d(i, 1))
            : ((i = _l(l)), i.c(), d(i, 1), i.m(e, null))
          : i &&
            (G(),
            _(i, 1, 1, () => {
              i = null;
            }),
            K());
    },
    i(l) {
      s || (d(n.$$.fragment, l), d(i), (s = !0));
    },
    o(l) {
      _(n.$$.fragment, l), _(i), (s = !1);
    },
    d(l) {
      l && y(e), E(n), i && i.d();
    },
  };
}
function Nu(o, e, n) {
  let { folders: t } = e,
    { isImportSuccessPopupShown: s = !1 } = e,
    i = () => {
      H.actions.closeBookmarksSuccessPopup(), n(0, (s = !0));
    };
  return (
    (o.$$set = (l) => {
      "folders" in l && n(1, (t = l.folders)),
        "isImportSuccessPopupShown" in l &&
          n(0, (s = l.isImportSuccessPopupShown));
    }),
    [s, t, i]
  );
}
var bs = class extends x {
    constructor(e) {
      super(),
        D(this, e, Nu, Mu, P, { folders: 1, isImportSuccessPopupShown: 0 }, Eu);
    }
  },
  hl = bs;
function Au(o) {
  R(
    o,
    "svelte-1ut5ne4",
    ".collections-list.svelte-1ut5ne4{display:flex;flex:1 0 auto;flex-direction:column;margin:8px}.invite-block.svelte-1ut5ne4{margin-top:8px}.mb-20.svelte-1ut5ne4{height:20px}.mb-10.svelte-1ut5ne4{height:10px}.import-button.has-content.svelte-1ut5ne4{margin-top:16px}"
  );
}
function gl(o) {
  let e, n;
  return (
    (e = new dl({ props: { message: o[0] } })),
    e.$on("close", o[17]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.message = t[0]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Lu(o) {
  let e, n;
  return (
    (e = new pl({})),
    e.$on("click", o[18]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function ju(o) {
  let e, n;
  return (
    (e = new Nn({
      props: {
        title: L("sidecar_collections__welcome_to_collections_title"),
        description: L(
          "sidecar_collections__welcome_to_collections_description"
        ),
        hintTestId: "welcome-to-collections.hint",
        closeButtonTestId: "welcome-to-collections.close-button",
        $$slots: { button: [Ou], icon: [Vu] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[16]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 16778240 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Vu(o) {
  let e, n;
  return (
    (e = new ul({ props: { slot: "icon", width: "36", height: "36" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function bl(o) {
  let e, n;
  return (
    (e = new me({
      props: { $$slots: { default: [Hu] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[18]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 16777216 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Hu(o) {
  let e = L("sidecar_collections__welcome_to_collections_import_button") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Ou(o) {
  let e,
    n,
    t = !o[10] && bl(o);
  return {
    c() {
      (e = T("div")),
        t && t.c(),
        c(e, "slot", "button"),
        c(e, "class", "import-button svelte-1ut5ne4"),
        oe(e, "has-content", !o[10]);
    },
    m(s, i) {
      w(s, e, i), t && t.m(e, null), (n = !0);
    },
    p(s, i) {
      s[10]
        ? t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K())
        : t
        ? (t.p(s, i), i & 1024 && d(t, 1))
        : ((t = bl(s)), t.c(), d(t, 1), t.m(e, null)),
        (!n || i & 1024) && oe(e, "has-content", !s[10]);
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      s && y(e), t && t.d();
    },
  };
}
function vl(o) {
  let e, n, t, s, i, l, a;
  return (
    (t = new zn({
      props: { headerTitle: L("sidecar_collections__team"), canAdd: !1 },
    })),
    (l = new ml({})),
    {
      c() {
        (e = T("div")),
          (n = M()),
          I(t.$$.fragment),
          (s = M()),
          (i = T("div")),
          I(l.$$.fragment),
          c(e, "class", "mb-10 svelte-1ut5ne4"),
          c(i, "class", "invite-block svelte-1ut5ne4");
      },
      m(r, u) {
        w(r, e, u),
          w(r, n, u),
          C(t, r, u),
          w(r, s, u),
          w(r, i, u),
          C(l, i, null),
          (a = !0);
      },
      p: j,
      i(r) {
        a || (d(t.$$.fragment, r), d(l.$$.fragment, r), (a = !0));
      },
      o(r) {
        _(t.$$.fragment, r), _(l.$$.fragment, r), (a = !1);
      },
      d(r) {
        r && y(e), r && y(n), E(t, r), r && y(s), r && y(i), E(l);
      },
    }
  );
}
function kl(o) {
  let e, n;
  return (
    (e = new hl({
      props: { isImportSuccessPopupShown: o[9], folders: [o[11]] },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 512 && (i.isImportSuccessPopupShown = t[9]),
          s & 2048 && (i.folders = [t[11]]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function wl(o) {
  let e, n;
  return (
    (e = new Lt({
      props: {
        folders: o[5],
        teamId: o[6],
        visibleWhenEmpty: o[2],
        headerTitle: L("sidecar_collections__team"),
        canAdd: !0,
        chunkType: "team",
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 32 && (i.folders = t[5]),
          s & 64 && (i.teamId = t[6]),
          s & 4 && (i.visibleWhenEmpty = t[2]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function qu(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k = o[0] && gl(o),
    z = [ju, Lu],
    S = [];
  function N(q, le) {
    return q[7] ? 0 : q[10] ? -1 : 1;
  }
  ~(t = N(o, -1)) && (s = S[t] = z[t](o));
  let A = !o[6] && o[1] && !o[5].length && vl(o),
    B = o[11] && kl(o),
    V = o[6] && wl(o);
  return (
    (m = new Lt({
      props: {
        folders: o[4],
        teamId: null,
        headerTitle: L("sidecar_collections__shared"),
        chunkType: "shared",
      },
    })),
    (g = new Lt({
      props: {
        canAdd: !0,
        folders: o[3],
        teamId: null,
        visibleWhenEmpty: !0,
        headerTitle: L("sidecar_collections__personal"),
        chunkType: "personal",
      },
    })),
    (b = new fl({ props: { collectionsPanelShortcut: o[8] } })),
    {
      c() {
        (e = T("div")),
          k && k.c(),
          (n = M()),
          s && s.c(),
          (i = M()),
          A && A.c(),
          (l = M()),
          (a = T("div")),
          (r = M()),
          B && B.c(),
          (u = M()),
          V && V.c(),
          (f = M()),
          I(m.$$.fragment),
          (p = M()),
          I(g.$$.fragment),
          (v = M()),
          I(b.$$.fragment),
          c(a, "class", "mb-20 svelte-1ut5ne4"),
          c(e, "class", "collections-list svelte-1ut5ne4");
      },
      m(q, le) {
        w(q, e, le),
          k && k.m(e, null),
          h(e, n),
          ~t && S[t].m(e, null),
          h(e, i),
          A && A.m(e, null),
          h(e, l),
          h(e, a),
          h(e, r),
          B && B.m(e, null),
          h(e, u),
          V && V.m(e, null),
          h(e, f),
          C(m, e, null),
          h(e, p),
          C(g, e, null),
          h(e, v),
          C(b, e, null),
          ($ = !0);
      },
      p(q, [le]) {
        q[0]
          ? k
            ? (k.p(q, le), le & 1 && d(k, 1))
            : ((k = gl(q)), k.c(), d(k, 1), k.m(e, n))
          : k &&
            (G(),
            _(k, 1, 1, () => {
              k = null;
            }),
            K());
        let J = t;
        (t = N(q, le)),
          t === J
            ? ~t && S[t].p(q, le)
            : (s &&
                (G(),
                _(S[J], 1, 1, () => {
                  S[J] = null;
                }),
                K()),
              ~t
                ? ((s = S[t]),
                  s ? s.p(q, le) : ((s = S[t] = z[t](q)), s.c()),
                  d(s, 1),
                  s.m(e, i))
                : (s = null)),
          !q[6] && q[1] && !q[5].length
            ? A
              ? (A.p(q, le), le & 98 && d(A, 1))
              : ((A = vl(q)), A.c(), d(A, 1), A.m(e, l))
            : A &&
              (G(),
              _(A, 1, 1, () => {
                A = null;
              }),
              K()),
          q[11]
            ? B
              ? (B.p(q, le), le & 2048 && d(B, 1))
              : ((B = kl(q)), B.c(), d(B, 1), B.m(e, u))
            : B &&
              (G(),
              _(B, 1, 1, () => {
                B = null;
              }),
              K()),
          q[6]
            ? V
              ? (V.p(q, le), le & 64 && d(V, 1))
              : ((V = wl(q)), V.c(), d(V, 1), V.m(e, f))
            : V &&
              (G(),
              _(V, 1, 1, () => {
                V = null;
              }),
              K());
        let ie = {};
        le & 16 && (ie.folders = q[4]), m.$set(ie);
        let te = {};
        le & 8 && (te.folders = q[3]), g.$set(te);
        let U = {};
        le & 256 && (U.collectionsPanelShortcut = q[8]), b.$set(U);
      },
      i(q) {
        $ ||
          (d(k),
          d(s),
          d(A),
          d(B),
          d(V),
          d(m.$$.fragment, q),
          d(g.$$.fragment, q),
          d(b.$$.fragment, q),
          ($ = !0));
      },
      o(q) {
        _(k),
          _(s),
          _(A),
          _(B),
          _(V),
          _(m.$$.fragment, q),
          _(g.$$.fragment, q),
          _(b.$$.fragment, q),
          ($ = !1);
      },
      d(q) {
        q && y(e),
          k && k.d(),
          ~t && S[t].d(),
          A && A.d(),
          B && B.d(),
          V && V.d(),
          E(m),
          E(g),
          E(b);
      },
    }
  );
}
function Bu(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k,
    z,
    S = H.stores.collections;
  ue(o, S, (ie) => n(20, (b = ie)));
  let N = H.stores.collectionsBookmarks;
  ue(o, N, (ie) => n(22, (k = ie)));
  let A = H.stores.lastCreatedCollection;
  ue(o, A, (ie) => n(23, (z = ie)));
  let B = H.stores.collectionsError;
  ue(o, B, (ie) => n(21, ($ = ie)));
  let V,
    q = () => H.actions.changeIsHiddenWelcomeToCollections(!0),
    le = () => {
      n(0, (g = ""));
    },
    J = () => H.actions.importBookmarks();
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 8388608) {
        e: n(19, (V = z?.uuid));
      }
      if (o.$$.dirty & 4194304) {
        e: n(11, (t = k?.bookmarks));
      }
      if (o.$$.dirty & 4194304) {
        e: n(10, (s = k?.areBookmarksImported));
      }
      if (o.$$.dirty & 4194304) {
        e: n(9, (i = k?.isImportSuccessPopupShown));
      }
      if (o.$$.dirty & 1048576) {
        e: n(8, (l = b?.collectionsPanelShortcut ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(7, (a = !b?.isHiddenWelcomeToCollections));
      }
      if (o.$$.dirty & 1048576) {
        e: n(6, (r = b?.teamId ?? null));
      }
      if (o.$$.dirty & 1048576) {
        e: n(5, (u = b?.team ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(4, (f = b?.shared ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(3, (m = b?.private ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(2, (p = b?.alwaysShowTeamSection));
      }
      if (o.$$.dirty & 2097152) {
        e: n(0, (g = $?.message));
      }
      if (o.$$.dirty & 1048576) {
        e: n(1, (v = b?.isB2bEnabled));
      }
      if (o.$$.dirty & 524288) {
        e: V && Re.update((ie) => ({ ...ie, [V]: ie[V] ?? !0 }));
      }
    }),
    [g, v, p, m, f, u, r, a, l, i, s, t, S, N, A, B, q, le, J, V, b, $, k, z]
  );
}
var vs = class extends x {
    constructor(e) {
      super(), D(this, e, Bu, qu, P, {}, Au);
    }
  },
  yl = vs;
O();
function Pu(o) {
  R(
    o,
    "svelte-1dsndgi",
    ".sidecar-layout.svelte-1dsndgi{display:flex;flex-direction:column;height:100vh;border-right:1px solid var(--select-bg);box-shadow:1px 0 4px rgb(0 0 0 / 0.15);overflow:hidden}.content.svelte-1dsndgi{display:flex;flex-grow:1;flex-direction:column;overflow-y:auto}main.svelte-1dsndgi{display:flex;flex-direction:column;flex-grow:1;position:relative}"
  );
}
var Du = (o) => ({}),
  $l = (o) => ({}),
  xu = (o) => ({}),
  Sl = (o) => ({});
function Tl(o) {
  let e,
    n,
    t = o[2].footer,
    s = be(t, o, o[1], $l);
  return {
    c() {
      (e = T("footer")), s && s.c();
    },
    m(i, l) {
      w(i, e, l), s && s.m(e, null), (n = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!n || l & 2) &&
        ke(s, t, i, i[1], n ? ve(t, i[1], l, Du) : we(i[1]), $l);
    },
    i(i) {
      n || (d(s, i), (n = !0));
    },
    o(i) {
      _(s, i), (n = !1);
    },
    d(i) {
      i && y(e), s && s.d(i);
    },
  };
}
function Fu(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r = o[2].header,
    u = be(r, o, o[1], Sl),
    f = o[2].default,
    m = be(f, o, o[1], null),
    p = o[0].footer && Tl(o);
  return {
    c() {
      (e = T("div")),
        (n = T("div")),
        u && u.c(),
        (t = M()),
        (s = T("div")),
        (i = T("main")),
        m && m.c(),
        (l = M()),
        p && p.c(),
        c(i, "class", "svelte-1dsndgi"),
        c(s, "class", "content svelte-1dsndgi"),
        c(e, "class", "sidecar-layout svelte-1dsndgi"),
        c(e, "data-testid", "sidecar-layout");
    },
    m(g, v) {
      w(g, e, v),
        h(e, n),
        u && u.m(n, null),
        h(e, t),
        h(e, s),
        h(s, i),
        m && m.m(i, null),
        h(e, l),
        p && p.m(e, null),
        (a = !0);
    },
    p(g, [v]) {
      u &&
        u.p &&
        (!a || v & 2) &&
        ke(u, r, g, g[1], a ? ve(r, g[1], v, xu) : we(g[1]), Sl),
        m &&
          m.p &&
          (!a || v & 2) &&
          ke(m, f, g, g[1], a ? ve(f, g[1], v, null) : we(g[1]), null),
        g[0].footer
          ? p
            ? (p.p(g, v), v & 1 && d(p, 1))
            : ((p = Tl(g)), p.c(), d(p, 1), p.m(e, null))
          : p &&
            (G(),
            _(p, 1, 1, () => {
              p = null;
            }),
            K());
    },
    i(g) {
      a || (d(u, g), d(m, g), d(p), (a = !0));
    },
    o(g) {
      _(u, g), _(m, g), _(p), (a = !1);
    },
    d(g) {
      g && y(e), u && u.d(g), m && m.d(g), p && p.d();
    },
  };
}
function Gu(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    i = dn(t);
  return (
    (o.$$set = (l) => {
      "$$scope" in l && n(1, (s = l.$$scope));
    }),
    [i, s, t]
  );
}
var ks = class extends x {
    constructor(e) {
      super(), D(this, e, Gu, Fu, P, {}, Pu);
    }
  },
  tt = ks;
O();
O();
function Ku(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M7.372 14.37L1.5 8.144l5.872-6.228-.772-.772-6.6 7 6.6 7 .772-.772zm8 0L9.5 8.144l5.872-6.228-.772-.772-6.6 7 6.6 7 .772-.772z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Ru(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var ws = class extends x {
    constructor(e) {
      super(), D(this, e, Ru, Ku, P, { width: 0, height: 1, className: 2 });
    }
  },
  Il = ws;
O();
function Uu(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p, g, v;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("g")),
        (t = ne("rect")),
        (s = ne("rect")),
        (i = ne("rect")),
        (l = ne("rect")),
        (a = ne("rect")),
        (r = ne("rect")),
        (u = ne("rect")),
        (f = ne("rect")),
        (m = ne("defs")),
        (p = ne("clipPath")),
        (g = ne("rect")),
        c(t, "y", "4"),
        c(t, "width", "4"),
        c(t, "height", "1"),
        c(t, "transform", "rotate(-90 0 4)"),
        c(t, "fill", "currentColor"),
        c(s, "x", "5"),
        c(s, "y", "1"),
        c(s, "width", "5"),
        c(s, "height", "1"),
        c(s, "transform", "rotate(180 5 1)"),
        c(s, "fill", "currentColor"),
        c(i, "width", "4"),
        c(i, "height", "1"),
        c(i, "transform", "matrix(4.37114e-08 -1 -1 -4.37114e-08 14 4)"),
        c(i, "fill", "currentColor"),
        c(l, "width", "5"),
        c(l, "height", "1"),
        c(l, "transform", "matrix(1 8.74228e-08 8.74228e-08 -1 9 1)"),
        c(l, "fill", "currentColor"),
        c(a, "x", "14"),
        c(a, "y", "10"),
        c(a, "width", "4"),
        c(a, "height", "1"),
        c(a, "transform", "rotate(90 14 10)"),
        c(a, "fill", "currentColor"),
        c(r, "x", "9"),
        c(r, "y", "13"),
        c(r, "width", "5"),
        c(r, "height", "1"),
        c(r, "fill", "currentColor"),
        c(u, "width", "4"),
        c(u, "height", "1"),
        c(u, "transform", "matrix(-1.31134e-07 1 1 1.31134e-07 0 10)"),
        c(u, "fill", "currentColor"),
        c(f, "width", "5"),
        c(f, "height", "1"),
        c(f, "transform", "matrix(-1 -1.74846e-07 -1.74846e-07 1 5 13)"),
        c(f, "fill", "currentColor"),
        c(n, "clip-path", "url(#clip0_2288_46573)"),
        c(g, "width", "14"),
        c(g, "height", "14"),
        c(g, "fill", "white"),
        c(p, "id", "clip0_2288_46573"),
        c(e, "class", (v = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 14 14"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(b, $) {
      w(b, e, $),
        h(e, n),
        h(n, t),
        h(n, s),
        h(n, i),
        h(n, l),
        h(n, a),
        h(n, r),
        h(n, u),
        h(n, f),
        h(e, m),
        h(m, p),
        h(p, g);
    },
    p(b, [$]) {
      $ & 4 && v !== (v = `icon ${b[2]}`) && c(e, "class", v),
        $ & 1 && c(e, "width", b[0]),
        $ & 2 && c(e, "height", b[1]);
    },
    i: j,
    o: j,
    d(b) {
      b && y(e);
    },
  };
}
function Wu(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var ys = class extends x {
    constructor(e) {
      super(), D(this, e, Wu, Uu, P, { width: 0, height: 1, className: 2 });
    }
  },
  Cl = ys;
function Zu(o) {
  R(
    o,
    "svelte-prsgde",
    "header.svelte-prsgde{display:flex;align-items:center;justify-content:space-between;padding:0 16px 0 8px;border-bottom:1px solid var(--sidebar-border)}h1.svelte-prsgde{padding:12px 8px;margin:0;font-weight:500;font-size:14px;line-height:20px}.tabs.svelte-prsgde{display:flex;margin:0;margin-bottom:-1px;gap:8px}.tab.svelte-prsgde{font-weight:500;font-size:14px;line-height:20px;border-bottom:2px solid transparent;padding:12px 8px 11px;color:#616161}.tab.is-active.svelte-prsgde{color:var(--text-primary-color);cursor:default;border-bottom-color:#1977f3}.right-side.svelte-prsgde{display:flex;align-items:center;column-gap:8px}"
  );
}
var Xu = (o) => ({}),
  El = (o) => ({});
function zl(o, e, n) {
  let t = o.slice();
  return (t[12] = e[n]), t;
}
function Yu(o) {
  let e,
    n = o[2],
    t = [];
  for (let s = 0; s < n.length; s += 1) t[s] = Ml(zl(o, n, s));
  return {
    c() {
      e = T("ul");
      for (let s = 0; s < t.length; s += 1) t[s].c();
      c(e, "class", "tabs svelte-prsgde");
    },
    m(s, i) {
      w(s, e, i);
      for (let l = 0; l < t.length; l += 1) t[l] && t[l].m(e, null);
    },
    p(s, i) {
      if (i & 4) {
        n = s[2];
        let l;
        for (l = 0; l < n.length; l += 1) {
          let a = zl(s, n, l);
          t[l] ? t[l].p(a, i) : ((t[l] = Ml(a)), t[l].c(), t[l].m(e, null));
        }
        for (; l < t.length; l += 1) t[l].d(1);
        t.length = n.length;
      }
    },
    i: j,
    o: j,
    d(s) {
      s && y(e), pn(t, s);
    },
  };
}
function Ju(o) {
  let e,
    n,
    t,
    s,
    i = [ef, Qu],
    l = [];
  function a(r, u) {
    return r[4] ? 0 : 1;
  }
  return (
    (n = a(o, -1)),
    (t = l[n] = i[n](o)),
    {
      c() {
        (e = T("h1")), t.c(), c(e, "class", "svelte-prsgde");
      },
      m(r, u) {
        w(r, e, u), l[n].m(e, null), (s = !0);
      },
      p(r, u) {
        let f = n;
        (n = a(r, u)),
          n === f
            ? l[n].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (t = l[n]),
              t ? t.p(r, u) : ((t = l[n] = i[n](r)), t.c()),
              d(t, 1),
              t.m(e, null));
      },
      i(r) {
        s || (d(t), (s = !0));
      },
      o(r) {
        _(t), (s = !1);
      },
      d(r) {
        r && y(e), l[n].d();
      },
    }
  );
}
function Ml(o) {
  let e,
    n,
    t = o[12].title + "",
    s,
    i,
    l,
    a;
  return {
    c() {
      (e = T("li")),
        (n = T("button")),
        (s = F(t)),
        (i = M()),
        c(n, "class", "tab svelte-prsgde"),
        oe(n, "is-active", o[12].isActive);
    },
    m(r, u) {
      w(r, e, u),
        h(e, n),
        h(n, s),
        h(e, i),
        l ||
          ((a = Z(n, "click", function () {
            Ft(o[12].onClick) && o[12].onClick.apply(this, arguments);
          })),
          (l = !0));
    },
    p(r, u) {
      (o = r),
        u & 4 && t !== (t = o[12].title + "") && ae(s, t),
        u & 4 && oe(n, "is-active", o[12].isActive);
    },
    d(r) {
      r && y(e), (l = !1), a();
    },
  };
}
function Qu(o) {
  let e,
    n = o[8].default,
    t = be(n, o, o[11], null);
  return {
    c() {
      t && t.c();
    },
    m(s, i) {
      t && t.m(s, i), (e = !0);
    },
    p(s, i) {
      t &&
        t.p &&
        (!e || i & 2048) &&
        ke(t, n, s, s[11], e ? ve(n, s[11], i, null) : we(s[11]), null);
    },
    i(s) {
      e || (d(t, s), (e = !0));
    },
    o(s) {
      _(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function ef(o) {
  let e, n;
  return {
    c() {
      (e = T("div")), (n = F(o[4]));
    },
    m(t, s) {
      w(t, e, s), h(e, n);
    },
    p(t, s) {
      s & 16 && ae(n, t[4]);
    },
    i: j,
    o: j,
    d(t) {
      t && y(e);
    },
  };
}
function Nl(o) {
  let e, n;
  return (
    (e = new Qe({
      props: {
        tooltipPlacement: "left",
        $$slots: { tooltip: [sf], default: [nf] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2048 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function tf(o) {
  let e, n;
  return (
    (e = new Cl({ props: { width: "14px", height: "14px" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function nf(o) {
  let e, n;
  return (
    (e = new me({
      props: {
        dataTestId: "sidecar-header.fullscreen-button",
        mod: "round",
        $$slots: { default: [tf] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[9]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2048 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function sf(o) {
  let e = L("sidecar__fullscreen") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function of(o) {
  let e, n;
  return (
    (e = new Il({ props: { width: "14", height: "14" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function lf(o) {
  let e, n;
  return (
    (e = new ct({ props: { width: "14", height: "14" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function rf(o) {
  let e,
    n,
    t,
    s,
    i = [lf, of],
    l = [];
  function a(f, m) {
    return f[5] ? 0 : 1;
  }
  (e = a(o, -1)), (n = l[e] = i[e](o));
  let r = o[8]["close-icon"],
    u = be(r, o, o[11], El);
  return {
    c() {
      n.c(), (t = M()), u && u.c();
    },
    m(f, m) {
      l[e].m(f, m), w(f, t, m), u && u.m(f, m), (s = !0);
    },
    p(f, m) {
      let p = e;
      (e = a(f, m)),
        e !== p &&
          (G(),
          _(l[p], 1, 1, () => {
            l[p] = null;
          }),
          K(),
          (n = l[e]),
          n || ((n = l[e] = i[e](f)), n.c()),
          d(n, 1),
          n.m(t.parentNode, t)),
        u &&
          u.p &&
          (!s || m & 2048) &&
          ke(u, r, f, f[11], s ? ve(r, f[11], m, Xu) : we(f[11]), El);
    },
    i(f) {
      s || (d(n), d(u, f), (s = !0));
    },
    o(f) {
      _(n), _(u, f), (s = !1);
    },
    d(f) {
      l[e].d(f), f && y(t), u && u.d(f);
    },
  };
}
function af(o) {
  let e, n;
  return (
    (e = new me({
      props: {
        dataTestId: "sidecar-header.close-button",
        mod: "round",
        $$slots: { default: [rf] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[10]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2080 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Al(o) {
  let e, n;
  return (
    (e = new Le({ props: { keys: o[1] } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2 && (i.keys = t[1]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function cf(o) {
  let e,
    n,
    t,
    s,
    i = o[1] && Al(o);
  return {
    c() {
      (e = F(o[0])), (n = M()), i && i.c(), (t = fe());
    },
    m(l, a) {
      w(l, e, a), w(l, n, a), i && i.m(l, a), w(l, t, a), (s = !0);
    },
    p(l, a) {
      (!s || a & 1) && ae(e, l[0]),
        l[1]
          ? i
            ? (i.p(l, a), a & 2 && d(i, 1))
            : ((i = Al(l)), i.c(), d(i, 1), i.m(t.parentNode, t))
          : i &&
            (G(),
            _(i, 1, 1, () => {
              i = null;
            }),
            K());
    },
    i(l) {
      s || (d(i), (s = !0));
    },
    o(l) {
      _(i), (s = !1);
    },
    d(l) {
      l && y(e), l && y(n), i && i.d(l), l && y(t);
    },
  };
}
function uf(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u = [Ju, Yu],
    f = [];
  function m(g, v) {
    return g[7].default || (g[4] && !g[2].length) ? 0 : g[2].length ? 1 : -1;
  }
  ~(n = m(o, -1)) && (t = f[n] = u[n](o));
  let p = o[3] && Nl(o);
  return (
    (a = new Qe({
      props: {
        tooltipPlacement: "left",
        $$slots: { tooltip: [cf], default: [af] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("header")),
          t && t.c(),
          (s = M()),
          (i = T("div")),
          p && p.c(),
          (l = M()),
          I(a.$$.fragment),
          c(i, "class", "right-side svelte-prsgde"),
          c(e, "class", "svelte-prsgde");
      },
      m(g, v) {
        w(g, e, v),
          ~n && f[n].m(e, null),
          h(e, s),
          h(e, i),
          p && p.m(i, null),
          h(i, l),
          C(a, i, null),
          (r = !0);
      },
      p(g, [v]) {
        let b = n;
        (n = m(g, v)),
          n === b
            ? ~n && f[n].p(g, v)
            : (t &&
                (G(),
                _(f[b], 1, 1, () => {
                  f[b] = null;
                }),
                K()),
              ~n
                ? ((t = f[n]),
                  t ? t.p(g, v) : ((t = f[n] = u[n](g)), t.c()),
                  d(t, 1),
                  t.m(e, s))
                : (t = null)),
          g[3]
            ? p
              ? (p.p(g, v), v & 8 && d(p, 1))
              : ((p = Nl(g)), p.c(), d(p, 1), p.m(i, l))
            : p &&
              (G(),
              _(p, 1, 1, () => {
                p = null;
              }),
              K());
        let $ = {};
        v & 2083 && ($.$$scope = { dirty: v, ctx: g }), a.$set($);
      },
      i(g) {
        r || (d(t), d(p), d(a.$$.fragment, g), (r = !0));
      },
      o(g) {
        _(t), _(p), _(a.$$.fragment, g), (r = !1);
      },
      d(g) {
        g && y(e), ~n && f[n].d(), p && p.d(), E(a);
      },
    }
  );
}
function ff(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    i = dn(t),
    { closeTooltipText: l } = e,
    { shortcutKeys: a = [] } = e,
    { tabs: r = [] } = e,
    { canBeExpanded: u = !1 } = e,
    { title: f = "" } = e,
    { useCrossIcon: m = !1 } = e,
    p = ye(),
    g = () => p("toggleSidecarFullscreen"),
    v = () => p("close");
  return (
    (o.$$set = (b) => {
      "closeTooltipText" in b && n(0, (l = b.closeTooltipText)),
        "shortcutKeys" in b && n(1, (a = b.shortcutKeys)),
        "tabs" in b && n(2, (r = b.tabs)),
        "canBeExpanded" in b && n(3, (u = b.canBeExpanded)),
        "title" in b && n(4, (f = b.title)),
        "useCrossIcon" in b && n(5, (m = b.useCrossIcon)),
        "$$scope" in b && n(11, (s = b.$$scope));
    }),
    [l, a, r, u, f, m, p, i, t, g, v, s]
  );
}
var $s = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          ff,
          uf,
          P,
          {
            closeTooltipText: 0,
            shortcutKeys: 1,
            tabs: 2,
            canBeExpanded: 3,
            title: 4,
            useCrossIcon: 5,
          },
          Zu
        );
    }
  },
  pt = $s;
function df(o) {
  let e, n;
  return (
    (e = new yl({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function mf(o) {
  let e, n;
  return (
    (e = new pt({
      props: {
        slot: "header",
        useCrossIcon: o[0],
        tabs: o[1]
          ? [
              { title: L("sidecar_collections__title"), isActive: !0 },
              { title: L("sidecar_tasks__title"), onClick: o[5] },
            ]
          : [],
        closeTooltipText: L("sidecar_collections__close_collections"),
        title: L("sidecar_collections__title"),
      },
    })),
    e.$on("close", o[6]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.useCrossIcon = t[0]),
          s & 2 &&
            (i.tabs = t[1]
              ? [
                  { title: L("sidecar_collections__title"), isActive: !0 },
                  { title: L("sidecar_tasks__title"), onClick: t[5] },
                ]
              : []),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function pf(o) {
  let e, n;
  return (
    (e = new tt({
      props: { $$slots: { header: [mf], default: [df] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 131 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function _f(o, e, n) {
  let t,
    s,
    i = H.stores.collectionsAndTasksEnableState;
  ue(o, i, (f) => n(4, (s = f)));
  let { isFloatingSidecar: l = !1 } = e,
    { source: a } = e;
  Me(
    () => (
      H.actions.sendAnalyticsEvent("collections.auto-opened", { source: a }),
      () => {
        H.actions.sendAnalyticsEvent("collections.auto-closed", { source: a });
      }
    )
  );
  let r = () => H.actions.toggleTasks({ source: "collections" });
  function u(f) {
    pe.call(this, o, f);
  }
  return (
    (o.$$set = (f) => {
      "isFloatingSidecar" in f && n(0, (l = f.isFloatingSidecar)),
        "source" in f && n(3, (a = f.source));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(1, (t = s?.isTasksEnabled));
      }
    }),
    [l, t, i, a, s, r, u]
  );
}
var Ss = class extends x {
    constructor(e) {
      super(), D(this, e, _f, pf, P, { isFloatingSidecar: 0, source: 3 });
    }
  },
  An = Ss;
O();
O();
O();
function hf(o) {
  R(
    o,
    "svelte-6k28vc",
    ".help-footer.svelte-6k28vc{margin:24px 8px 16px}.versions.svelte-6k28vc{color:#999;font-size:12px}.links.svelte-6k28vc{display:flex;padding:10px 0 6px}a.svelte-6k28vc{color:var(--help-text-color);font-size:12px;margin-right:17px;text-decoration:none}a.svelte-6k28vc:hover{text-decoration:underline}"
  );
}
function Ll(o) {
  let e, n, t, s, i, l, a, r;
  return {
    c() {
      (e = T("div")),
        (n = F("ver. ")),
        (t = T("span")),
        (s = F(o[1])),
        (i = F(" (")),
        (l = T("span")),
        (a = F(o[0])),
        (r = F(")")),
        c(t, "data-testid", "help-browser-version"),
        c(l, "data-testid", "help-extesion-version"),
        c(e, "class", "versions svelte-6k28vc");
    },
    m(u, f) {
      w(u, e, f), h(e, n), h(e, t), h(t, s), h(e, i), h(e, l), h(l, a), h(e, r);
    },
    p(u, f) {
      f & 2 && ae(s, u[1]), f & 1 && ae(a, u[0]);
    },
    d(u) {
      u && y(e);
    },
  };
}
function gf(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u = o[0] && o[0] && Ll(o);
  return {
    c() {
      (e = T("div")),
        u && u.c(),
        (n = M()),
        (t = T("div")),
        (s = T("a")),
        (s.textContent = `${L("sidecar_help__privacy_policy")}`),
        (i = M()),
        (l = T("a")),
        (l.textContent = `${L("sidecar_help__terms_and_conditions")}`),
        c(s, "href", "https://www.meetsidekick.com/privacy-policy"),
        c(s, "target", "_blank"),
        c(s, "rel", "noreferrer"),
        c(s, "data-testid", "sidecar-help.footer.privacy-link"),
        c(s, "class", "svelte-6k28vc"),
        c(l, "href", "https://www.meetsidekick.com/terms-of-use"),
        c(l, "target", "_blank"),
        c(l, "data-testid", "sidecar-help.footer.terms-link"),
        c(l, "rel", "noreferrer"),
        c(l, "class", "svelte-6k28vc"),
        c(t, "class", "links svelte-6k28vc"),
        c(e, "class", "help-footer svelte-6k28vc");
    },
    m(f, m) {
      w(f, e, m),
        u && u.m(e, null),
        h(e, n),
        h(e, t),
        h(t, s),
        h(t, i),
        h(t, l),
        a || ((r = [Z(s, "click", o[4]), Z(l, "click", o[5])]), (a = !0));
    },
    p(f, [m]) {
      f[0] && f[0]
        ? u
          ? u.p(f, m)
          : ((u = Ll(f)), u.c(), u.m(e, n))
        : u && (u.d(1), (u = null));
    },
    i: j,
    o: j,
    d(f) {
      f && y(e), u && u.d(), (a = !1), Te(r);
    },
  };
}
function bf(o, e, n) {
  let t,
    s,
    i,
    l = H.stores.helpPanel;
  ue(o, l, (u) => n(3, (i = u)));
  let a = () =>
      H.actions.sendAnalyticsEvent("help.privacy-policy-clicked", void 0),
    r = () =>
      H.actions.sendAnalyticsEvent("help.terms-and-conditions-clicked", void 0);
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 8) {
        e: n(1, (t = i?.browserVersion ?? ""));
      }
      if (o.$$.dirty & 8) {
        e: n(0, (s = i?.extensionVersion ?? ""));
      }
    }),
    [s, t, l, i, a, r]
  );
}
var Ts = class extends x {
    constructor(e) {
      super(), D(this, e, bf, gf, P, {}, hf);
    }
  },
  jl = Ts;
O();
function vf(o) {
  R(
    o,
    "svelte-1gk6h9i",
    "a.svelte-1gk6h9i.svelte-1gk6h9i{align-items:center;background:var(--help-bg-item);border-radius:4px;box-sizing:border-box;color:var(--help-text-color);cursor:pointer;display:flex;font-weight:600;padding:12px 13px 13px 7px;transition:var(--animation-time);text-decoration:none;margin-bottom:5px;width:100%}a.svelte-1gk6h9i .help-icon.svelte-1gk6h9i{display:flex;flex-shrink:1;color:#f0641e}a.svelte-1gk6h9i span.svelte-1gk6h9i{margin-left:10px}a.svelte-1gk6h9i.svelte-1gk6h9i:hover{background-color:var(--help-bg-item-hover)}a.svelte-1gk6h9i .icon.svelte-1gk6h9i{margin-left:auto}"
  );
}
function Vl(o) {
  let e, n, t;
  return (
    (n = new et({ props: { width: "6", height: "10" } })),
    {
      c() {
        (e = T("div")), I(n.$$.fragment), c(e, "class", "icon svelte-1gk6h9i");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function kf(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f = o[5].default,
    m = be(f, o, o[4], null),
    p = o[2] && Vl(o);
  return {
    c() {
      (e = T("a")),
        (n = T("div")),
        m && m.c(),
        (t = M()),
        (s = T("span")),
        (i = F(o[1])),
        (l = M()),
        p && p.c(),
        c(n, "class", "help-icon svelte-1gk6h9i"),
        c(s, "class", "svelte-1gk6h9i"),
        c(e, "href", o[0]),
        c(e, "target", "_blank"),
        c(e, "rel", "noreferrer"),
        c(e, "data-testid", o[3]),
        c(e, "class", "svelte-1gk6h9i");
    },
    m(g, v) {
      w(g, e, v),
        h(e, n),
        m && m.m(n, null),
        h(e, t),
        h(e, s),
        h(s, i),
        h(e, l),
        p && p.m(e, null),
        (a = !0),
        r || ((u = Z(e, "click", o[6])), (r = !0));
    },
    p(g, [v]) {
      m &&
        m.p &&
        (!a || v & 16) &&
        ke(m, f, g, g[4], a ? ve(f, g[4], v, null) : we(g[4]), null),
        (!a || v & 2) && ae(i, g[1]),
        g[2]
          ? p
            ? v & 4 && d(p, 1)
            : ((p = Vl(g)), p.c(), d(p, 1), p.m(e, null))
          : p &&
            (G(),
            _(p, 1, 1, () => {
              p = null;
            }),
            K()),
        (!a || v & 1) && c(e, "href", g[0]),
        (!a || v & 8) && c(e, "data-testid", g[3]);
    },
    i(g) {
      a || (d(m, g), d(p), (a = !0));
    },
    o(g) {
      _(m, g), _(p), (a = !1);
    },
    d(g) {
      g && y(e), m && m.d(g), p && p.d(), (r = !1), u();
    },
  };
}
function wf(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { urlLink: i } = e,
    { textHelpLink: l } = e,
    { withArrow: a } = e,
    { dataTestId: r = "" } = e;
  function u(f) {
    pe.call(this, o, f);
  }
  return (
    (o.$$set = (f) => {
      "urlLink" in f && n(0, (i = f.urlLink)),
        "textHelpLink" in f && n(1, (l = f.textHelpLink)),
        "withArrow" in f && n(2, (a = f.withArrow)),
        "dataTestId" in f && n(3, (r = f.dataTestId)),
        "$$scope" in f && n(4, (s = f.$$scope));
    }),
    [i, l, a, r, s, t, u]
  );
}
var Is = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          wf,
          kf,
          P,
          { urlLink: 0, textHelpLink: 1, withArrow: 2, dataTestId: 3 },
          vf
        );
    }
  },
  Ut = Is;
O();
function yf(o) {
  let e, n, t, s;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        (t = ne("rect")),
        c(
          n,
          "d",
          "M20 22H5.5A2.5 2.5 0 013 19.5m0 0A2.5 2.5 0 015.5 17H20V1.5a.5.5 0 00-.5-.5H6a3 3 0 00-3 3v15.5z"
        ),
        c(n, "stroke", "#F0641E"),
        c(n, "stroke-miterlimit", "10"),
        c(t, "x", "6"),
        c(t, "y", "4"),
        c(t, "width", "11"),
        c(t, "height", "4"),
        c(t, "rx", ".5"),
        c(t, "stroke", "#F0641E"),
        c(t, "stroke-miterlimit", "10"),
        c(e, "class", (s = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      w(i, e, l), h(e, n), h(e, t);
    },
    p(i, [l]) {
      l & 4 && s !== (s = `icon ${i[2]}`) && c(e, "class", s),
        l & 1 && c(e, "width", i[0]),
        l & 2 && c(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && y(e);
    },
  };
}
function $f(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Cs = class extends x {
    constructor(e) {
      super(), D(this, e, $f, yf, P, { width: 0, height: 1, className: 2 });
    }
  },
  Hl = Cs;
O();
function Sf(o) {
  let e, n, t, s;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        (t = ne("path")),
        c(
          n,
          "d",
          "M3.773 5.81v-.5h-.5v.5h.5zm17.46 0h.5v-.5h-.5v.5zM3.772 8.798l.353.354.147-.147v-.207h-.5zM1.07 11.501l-.353-.354-.354.354.354.353.353-.353zm2.703 2.702h.5v-.207l-.147-.146-.353.353zm0 2.989h-.5v.5h.5v-.5zm17.46 0v.5h.5v-.5h-.5zM3.772 6.31h17.46v-1H3.772v1zm.5 2.488V5.81h-1v2.988h1zm-2.85 3.056l2.703-2.702-.707-.707-2.702 2.702.707.707zm2.703 1.996l-2.702-2.703-.707.707 2.702 2.703.707-.707zm.147 3.342v-2.989h-1v2.989h1zm16.96-.5H3.772v1h17.46v-1zm-.5-10.882v11.382h1V5.81h-1z"
        ),
        c(n, "fill", "#F0641E"),
        c(t, "stroke", "#F0641E"),
        c(t, "stroke-miterlimit", "10"),
        c(
          t,
          "d",
          "M6.328 8.682h11.596M6.328 13.877h11.596M6.328 11.434h8.164M11.582 3.43V.74M11.582 22.2v-2.691M1.531 21.452l1.902-1.902M20.208 3.634l1.902-1.902M3.797 3.784L1.895 1.881M22.474 21.44l-1.903-1.902"
        ),
        c(e, "class", (s = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      w(i, e, l), h(e, n), h(e, t);
    },
    p(i, [l]) {
      l & 4 && s !== (s = `icon ${i[2]}`) && c(e, "class", s),
        l & 1 && c(e, "width", i[0]),
        l & 2 && c(e, "height", i[1]);
    },
    i: j,
    o: j,
    d(i) {
      i && y(e);
    },
  };
}
function Tf(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Es = class extends x {
    constructor(e) {
      super(), D(this, e, Tf, Sf, P, { width: 0, height: 1, className: 2 });
    }
  },
  Ol = Es;
O();
function If(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M6 7.702H4.149a3.15 3.15 0 00-3.15 3.15v0A3.15 3.15 0 004.15 14h1.85m0-6.298l12.484-5.243M6 7.702V14m0 0l12.483 4.898m0-16.44l2.823-1.185a.5.5 0 01.694.46v17.812a.5.5 0 01-.683.465l-2.834-1.112m0-16.44v16.44M8.156 14.78l1.156 5.74a.1.1 0 00.098.08h3.038a.1.1 0 00.099-.118l-.828-4.37"
        ),
        c(n, "stroke", "#F0641E"),
        c(n, "stroke-miterlimit", "10"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Cf(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var zs = class extends x {
    constructor(e) {
      super(), D(this, e, Cf, If, P, { width: 0, height: 1, className: 2 });
    }
  },
  ql = zs;
O();
O();
function Ef(o) {
  R(
    o,
    "svelte-15dhvt7",
    ".help-shortcut.svelte-15dhvt7{align-items:baseline;display:flex;padding:8px 0;justify-content:space-between}.keys.svelte-15dhvt7{align-items:baseline;display:flex}.after-keys.svelte-15dhvt7{white-space:nowrap;margin-left:4px}"
  );
}
function Bl(o) {
  let e, n;
  return {
    c() {
      (e = T("div")), (n = F(o[2])), c(e, "class", "after-keys svelte-15dhvt7");
    },
    m(t, s) {
      w(t, e, s), h(e, n);
    },
    p(t, s) {
      s & 4 && ae(n, t[2]);
    },
    d(t) {
      t && y(e);
    },
  };
}
function zf(o) {
  let e, n, t, s, i, l, a, r;
  l = new Le({ props: { keys: o[1] } });
  let u = o[2] && Bl(o);
  return {
    c() {
      (e = T("div")),
        (n = T("div")),
        (t = F(o[0])),
        (s = M()),
        (i = T("div")),
        I(l.$$.fragment),
        (a = M()),
        u && u.c(),
        c(n, "class", "title"),
        c(i, "class", "keys svelte-15dhvt7"),
        c(e, "class", "help-shortcut svelte-15dhvt7"),
        c(e, "data-testid", "sidecar-help.shortcuts.shortcut");
    },
    m(f, m) {
      w(f, e, m),
        h(e, n),
        h(n, t),
        h(e, s),
        h(e, i),
        C(l, i, null),
        h(i, a),
        u && u.m(i, null),
        (r = !0);
    },
    p(f, [m]) {
      (!r || m & 1) && ae(t, f[0]);
      let p = {};
      m & 2 && (p.keys = f[1]),
        l.$set(p),
        f[2]
          ? u
            ? u.p(f, m)
            : ((u = Bl(f)), u.c(), u.m(i, null))
          : u && (u.d(1), (u = null));
    },
    i(f) {
      r || (d(l.$$.fragment, f), (r = !0));
    },
    o(f) {
      _(l.$$.fragment, f), (r = !1);
    },
    d(f) {
      f && y(e), E(l), u && u.d();
    },
  };
}
function Mf(o, e, n) {
  let { title: t } = e,
    { keys: s } = e,
    { after: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "title" in l && n(0, (t = l.title)),
        "keys" in l && n(1, (s = l.keys)),
        "after" in l && n(2, (i = l.after));
    }),
    [t, s, i]
  );
}
var Ms = class extends x {
    constructor(e) {
      super(), D(this, e, Mf, zf, P, { title: 0, keys: 1, after: 2 }, Ef);
    }
  },
  Ue = Ms;
function Nf(o) {
  R(
    o,
    "svelte-f9fc26",
    ".help-shortcuts.svelte-f9fc26.svelte-f9fc26{background-color:var(--help-bg-item);border-radius:4px;color:var(--help-secondary-text-color);font-size:12px;padding:12px 10px}.shortcuts-header.svelte-f9fc26.svelte-f9fc26{color:#999;text-transform:uppercase;font-size:10px;margin-top:10px}.shortcuts-header.svelte-f9fc26.svelte-f9fc26:first-child{margin-top:0}.more-link.svelte-f9fc26.svelte-f9fc26{background-color:var(--help-shortcut-bg-link);border-radius:25px;color:var(--help-text-color);font-weight:600;margin-top:10px;padding:6px 12px;text-align:center;transition:var(--animation-time);position:relative;width:100%}.more-link.svelte-f9fc26.svelte-f9fc26:hover{background-color:var(--help-shortcut-bg-link-hover)}.more-link.svelte-f9fc26 .link-icon.svelte-f9fc26{position:absolute;top:7px;right:10px}"
  );
}
function Af(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le,
    J,
    ie,
    te,
    U,
    ee,
    Ie,
    de,
    $e,
    Se,
    Ce = L("sidecar_help__configure_shortcuts") + "",
    W,
    he,
    Ee,
    Ve,
    He,
    Oe,
    ge;
  return (
    (s = new Ue({
      props: {
        title: L("sidecar_help__shortcut_toggle_split_view"),
        keys: o[5],
      },
    })),
    (l = new Ue({
      props: { title: L("sidecar_help__shortcut_last_split_view"), keys: o[6] },
    })),
    (r = new Ue({
      props: {
        title: L("sidecar_help__shortcut_open_app_tab_split_view"),
        keys: o[4],
      },
    })),
    (p = new Ue({
      props: {
        title: L("sidecar_help__shortcut_switch_apps_tabs"),
        keys: o[10],
      },
    })),
    (v = new Ue({
      props: {
        title: L("sidecar_help__shortcut_open_sidebar_apps"),
        keys: o[7],
      },
    })),
    ($ = new Ue({
      props: { title: L("sidecar_help__shortcut_close_app_tab"), keys: o[3] },
    })),
    (z = new Ue({
      props: {
        title: L("sidecar_help__shortcut_app_settings"),
        keys: ["Right-click"],
      },
    })),
    (B = new Ue({
      props: {
        title: L("sidecar_help__shortcut_open_new_tab_ntp"),
        keys: o[2],
      },
    })),
    (q = new Ue({
      props: {
        title: L("sidecar_help__shortcut_open_global_search"),
        keys: o[11],
      },
    })),
    (J = new Ue({
      props: { title: L("sidecar_help__shortcut_toggle_sidebar"), keys: o[0] },
    })),
    (te = new Ue({
      props: { title: L("sidecar_help__shortcut_manage_sessions"), keys: o[9] },
    })),
    (ee = new Ue({
      props: { title: L("sidecar_help__shortcut_switch_sessions"), keys: o[8] },
    })),
    (de = new Ue({
      props: {
        title: L("sidecar_help__shortcut_open_learning_center"),
        keys: o[1],
      },
    })),
    (Ve = new et({ props: { width: "6", height: "10" } })),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (n.textContent = `${L("sidecar_help__split_view_spaced")}`),
          (t = M()),
          I(s.$$.fragment),
          (i = M()),
          I(l.$$.fragment),
          (a = M()),
          I(r.$$.fragment),
          (u = M()),
          (f = T("div")),
          (f.textContent = `${L("sidecar_help__applications")}`),
          (m = M()),
          I(p.$$.fragment),
          (g = M()),
          I(v.$$.fragment),
          (b = M()),
          I($.$$.fragment),
          (k = M()),
          I(z.$$.fragment),
          (S = M()),
          (N = T("div")),
          (N.textContent = `${L("sidecar_help__commands")}`),
          (A = M()),
          I(B.$$.fragment),
          (V = M()),
          I(q.$$.fragment),
          (le = M()),
          I(J.$$.fragment),
          (ie = M()),
          I(te.$$.fragment),
          (U = M()),
          I(ee.$$.fragment),
          (Ie = M()),
          I(de.$$.fragment),
          ($e = M()),
          (Se = T("button")),
          (W = F(Ce)),
          (he = M()),
          (Ee = T("div")),
          I(Ve.$$.fragment),
          c(n, "class", "shortcuts-header svelte-f9fc26"),
          c(f, "class", "shortcuts-header svelte-f9fc26"),
          c(N, "class", "shortcuts-header svelte-f9fc26"),
          c(Ee, "class", "link-icon svelte-f9fc26"),
          c(Se, "class", "more-link svelte-f9fc26"),
          c(Se, "data-testid", "sidecar-help.shortcuts.configure-button"),
          c(e, "class", "help-shortcuts svelte-f9fc26"),
          c(e, "data-testid", "sidecar-help.shortcuts");
      },
      m(X, re) {
        w(X, e, re),
          h(e, n),
          h(e, t),
          C(s, e, null),
          h(e, i),
          C(l, e, null),
          h(e, a),
          C(r, e, null),
          h(e, u),
          h(e, f),
          h(e, m),
          C(p, e, null),
          h(e, g),
          C(v, e, null),
          h(e, b),
          C($, e, null),
          h(e, k),
          C(z, e, null),
          h(e, S),
          h(e, N),
          h(e, A),
          C(B, e, null),
          h(e, V),
          C(q, e, null),
          h(e, le),
          C(J, e, null),
          h(e, ie),
          C(te, e, null),
          h(e, U),
          C(ee, e, null),
          h(e, Ie),
          C(de, e, null),
          h(e, $e),
          h(e, Se),
          h(Se, W),
          h(Se, he),
          h(Se, Ee),
          C(Ve, Ee, null),
          (He = !0),
          Oe || ((ge = Z(Se, "click", o[13])), (Oe = !0));
      },
      p(X, [re]) {
        let it = {};
        re & 32 && (it.keys = X[5]), s.$set(it);
        let rt = {};
        re & 64 && (rt.keys = X[6]), l.$set(rt);
        let We = {};
        re & 16 && (We.keys = X[4]), r.$set(We);
        let wt = {};
        re & 1024 && (wt.keys = X[10]), p.$set(wt);
        let gt = {};
        re & 128 && (gt.keys = X[7]), v.$set(gt);
        let Ye = {};
        re & 8 && (Ye.keys = X[3]), $.$set(Ye);
        let yt = {};
        re & 4 && (yt.keys = X[2]), B.$set(yt);
        let qt = {};
        re & 2048 && (qt.keys = X[11]), q.$set(qt);
        let Be = {};
        re & 1 && (Be.keys = X[0]), J.$set(Be);
        let Zt = {};
        re & 512 && (Zt.keys = X[9]), te.$set(Zt);
        let Bt = {};
        re & 256 && (Bt.keys = X[8]), ee.$set(Bt);
        let Xt = {};
        re & 2 && (Xt.keys = X[1]), de.$set(Xt);
      },
      i(X) {
        He ||
          (d(s.$$.fragment, X),
          d(l.$$.fragment, X),
          d(r.$$.fragment, X),
          d(p.$$.fragment, X),
          d(v.$$.fragment, X),
          d($.$$.fragment, X),
          d(z.$$.fragment, X),
          d(B.$$.fragment, X),
          d(q.$$.fragment, X),
          d(J.$$.fragment, X),
          d(te.$$.fragment, X),
          d(ee.$$.fragment, X),
          d(de.$$.fragment, X),
          d(Ve.$$.fragment, X),
          (He = !0));
      },
      o(X) {
        _(s.$$.fragment, X),
          _(l.$$.fragment, X),
          _(r.$$.fragment, X),
          _(p.$$.fragment, X),
          _(v.$$.fragment, X),
          _($.$$.fragment, X),
          _(z.$$.fragment, X),
          _(B.$$.fragment, X),
          _(q.$$.fragment, X),
          _(J.$$.fragment, X),
          _(te.$$.fragment, X),
          _(ee.$$.fragment, X),
          _(de.$$.fragment, X),
          _(Ve.$$.fragment, X),
          (He = !1);
      },
      d(X) {
        X && y(e),
          E(s),
          E(l),
          E(r),
          E(p),
          E(v),
          E($),
          E(z),
          E(B),
          E(q),
          E(J),
          E(te),
          E(ee),
          E(de),
          E(Ve),
          (Oe = !1),
          ge();
      },
    }
  );
}
function Lf(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $ = H.stores.helpPanel;
  ue(o, $, (z) => n(14, (b = z)));
  let k = () => {
    H.actions.sendAnalyticsEvent("help.configure-shortcuts-clicked", void 0),
      H.actions.openChromeSettingsTab();
  };
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 16384) {
        e: n(11, (t = b?.globalSearchShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(10, (s = b?.switchTabShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(9, (i = b?.manageSessionShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(8, (l = b?.switchSessionShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(7, (a = b?.activateServiceShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(6, (r = b?.openLastSplitPanelShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(5, (u = b?.openSplitMenuShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(4, (f = b?.openInSplitViewShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(3, (m = b?.browserCloseTabShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(2, (p = b?.createNewTabShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(1, (g = b?.openHelpShortcutKeys ?? []));
      }
      if (o.$$.dirty & 16384) {
        e: n(0, (v = b?.toggleSidebarShortcutKeys ?? []));
      }
    }),
    [v, g, p, m, f, u, r, a, l, i, s, t, $, k, b]
  );
}
var Ns = class extends x {
    constructor(e) {
      super(), D(this, e, Lf, Af, P, {}, Nf);
    }
  },
  Pl = Ns;
O();
O();
function jf(o) {
  R(
    o,
    "svelte-o7k0da",
    ".feature.svelte-o7k0da.svelte-o7k0da{border:1px solid transparent;border-radius:4px;margin-bottom:2px}.feature.svelte-o7k0da .feature-arrow.svelte-o7k0da{transition:transform 0.3s ease-in-out;margin-left:auto;margin-top:4px}.feature.svelte-o7k0da.svelte-o7k0da:hover{border:1px solid rgb(25 119 243 / 0.3)}.feature.opened.svelte-o7k0da.svelte-o7k0da{border:1px solid var(--help-feature-border)}.feature.opened.svelte-o7k0da .feature-arrow.svelte-o7k0da{transform:rotate(-90deg)}.feature.svelte-o7k0da .button.svelte-o7k0da{display:flex;padding:9px 12px;align-items:start}.feature.svelte-o7k0da .number.svelte-o7k0da{display:flex;justify-content:center;align-items:center;flex-shrink:0;margin-right:8px;margin-top:3px;font-size:12px;font-weight:400;line-height:20px;border:1px solid var(--help-feature-number);width:16px;height:16px;border-radius:50%;color:var(--help-feature-number)}.feature.svelte-o7k0da .number.checked.svelte-o7k0da{border:1px solid var(--help-feature-checked-border);background-color:var(--help-feature-checked-bg);color:#fff}.feature.svelte-o7k0da .title.svelte-o7k0da{font-size:12px;font-weight:600;margin-top:2px;padding-right:4px}.feature.svelte-o7k0da .description.svelte-o7k0da{font-size:12px;line-height:18px;padding:9px 0 4px;color:var(--help-feature-desc)}.feature.svelte-o7k0da .content.svelte-o7k0da{padding:0 9px 12px 35px}.feature.svelte-o7k0da .actions.svelte-o7k0da{margin-top:8px;display:flex;flex-wrap:wrap;gap:8px}.feature.svelte-o7k0da .done-icon.svelte-o7k0da{margin-right:4px}"
  );
}
var Vf = (o) => ({}),
  Dl = (o) => ({}),
  Hf = (o) => ({}),
  xl = (o) => ({}),
  Of = (o) => ({}),
  Fl = (o) => ({});
function Gl(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $ = [Bf, qf],
    k = [];
  function z(B, V) {
    return B[4] ? 0 : 1;
  }
  (t = z(o, -1)), (s = k[t] = $[t](o));
  let S = o[11].title,
    N = be(S, o, o[14], Fl);
  u = new et({ props: { width: "6", height: "10" } });
  let A = o[5] && Kl(o);
  return {
    c() {
      (e = T("div")),
        (n = T("button")),
        s.c(),
        (i = M()),
        (l = T("div")),
        N && N.c(),
        (a = M()),
        (r = T("div")),
        I(u.$$.fragment),
        (f = M()),
        A && A.c(),
        c(l, "class", "title svelte-o7k0da"),
        c(l, "data-testid", "feature-item.title"),
        c(r, "class", "feature-arrow svelte-o7k0da"),
        c(n, "class", "button svelte-o7k0da"),
        c(
          e,
          "class",
          (m = "feature " + (o[5] ? "opened" : "") + " svelte-o7k0da")
        ),
        c(e, "data-testid", (p = "feature-item-" + o[0]));
    },
    m(B, V) {
      w(B, e, V),
        h(e, n),
        k[t].m(n, null),
        h(n, i),
        h(n, l),
        N && N.m(l, null),
        h(n, a),
        h(n, r),
        C(u, r, null),
        h(e, f),
        A && A.m(e, null),
        o[13](e),
        (g = !0),
        v || ((b = Z(n, "click", o[6])), (v = !0));
    },
    p(B, V) {
      let q = t;
      (t = z(B, V)),
        t === q
          ? k[t].p(B, V)
          : (G(),
            _(k[q], 1, 1, () => {
              k[q] = null;
            }),
            K(),
            (s = k[t]),
            s ? s.p(B, V) : ((s = k[t] = $[t](B)), s.c()),
            d(s, 1),
            s.m(n, i)),
        N &&
          N.p &&
          (!g || V & 16384) &&
          ke(N, S, B, B[14], g ? ve(S, B[14], V, Of) : we(B[14]), Fl),
        B[5]
          ? A
            ? (A.p(B, V), V & 32 && d(A, 1))
            : ((A = Kl(B)), A.c(), d(A, 1), A.m(e, null))
          : A &&
            (G(),
            _(A, 1, 1, () => {
              A = null;
            }),
            K()),
        (!g ||
          (V & 32 &&
            m !==
              (m = "feature " + (B[5] ? "opened" : "") + " svelte-o7k0da"))) &&
          c(e, "class", m),
        (!g || (V & 1 && p !== (p = "feature-item-" + B[0]))) &&
          c(e, "data-testid", p);
    },
    i(B) {
      g || (d(s), d(N, B), d(u.$$.fragment, B), d(A), (g = !0));
    },
    o(B) {
      _(s), _(N, B), _(u.$$.fragment, B), _(A), (g = !1);
    },
    d(B) {
      B && y(e),
        k[t].d(),
        N && N.d(B),
        E(u),
        A && A.d(),
        o[13](null),
        (v = !1),
        b();
    },
  };
}
function qf(o) {
  let e, n;
  return {
    c() {
      (e = T("span")),
        (n = F(o[1])),
        c(e, "class", "number svelte-o7k0da"),
        c(e, "data-testid", "feature-item.number");
    },
    m(t, s) {
      w(t, e, s), h(e, n);
    },
    p(t, s) {
      s & 2 && ae(n, t[1]);
    },
    i: j,
    o: j,
    d(t) {
      t && y(e);
    },
  };
}
function Bf(o) {
  let e, n, t;
  return (
    (n = new Tn({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          c(e, "class", "number checked svelte-o7k0da"),
          c(e, "data-testid", "feature-item.number-checked");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p: j,
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Kl(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f = o[11].default,
    m = be(f, o, o[14], null),
    p = o[11].animation,
    g = be(p, o, o[14], xl),
    v = o[11].actions,
    b = be(v, o, o[14], Dl),
    $ = [Df, Pf],
    k = [];
  function z(S, N) {
    return S[4] ? 0 : 1;
  }
  return (
    (a = z(o, -1)),
    (r = k[a] = $[a](o)),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          m && m.c(),
          (t = M()),
          g && g.c(),
          (s = M()),
          (i = T("div")),
          b && b.c(),
          (l = M()),
          r.c(),
          c(n, "class", "description svelte-o7k0da"),
          c(i, "class", "actions svelte-o7k0da"),
          c(e, "class", "content svelte-o7k0da"),
          c(e, "data-testid", "feature-item.content");
      },
      m(S, N) {
        w(S, e, N),
          h(e, n),
          m && m.m(n, null),
          h(e, t),
          g && g.m(e, null),
          h(e, s),
          h(e, i),
          b && b.m(i, null),
          h(i, l),
          k[a].m(i, null),
          (u = !0);
      },
      p(S, N) {
        m &&
          m.p &&
          (!u || N & 16384) &&
          ke(m, f, S, S[14], u ? ve(f, S[14], N, null) : we(S[14]), null),
          g &&
            g.p &&
            (!u || N & 16384) &&
            ke(g, p, S, S[14], u ? ve(p, S[14], N, Hf) : we(S[14]), xl),
          b &&
            b.p &&
            (!u || N & 16384) &&
            ke(b, v, S, S[14], u ? ve(v, S[14], N, Vf) : we(S[14]), Dl);
        let A = a;
        (a = z(S, N)),
          a === A
            ? k[a].p(S, N)
            : (G(),
              _(k[A], 1, 1, () => {
                k[A] = null;
              }),
              K(),
              (r = k[a]),
              r ? r.p(S, N) : ((r = k[a] = $[a](S)), r.c()),
              d(r, 1),
              r.m(i, null));
      },
      i(S) {
        u || (d(m, S), d(g, S), d(b, S), d(r), (u = !0));
      },
      o(S) {
        _(m, S), _(g, S), _(b, S), _(r), (u = !1);
      },
      d(S) {
        S && y(e), m && m.d(S), g && g.d(S), b && b.d(S), k[a].d();
      },
    }
  );
}
function Pf(o) {
  let e, n, t;
  return (
    (e = new me({
      props: {
        size: "small",
        dataTestId: "feature-item.mark-as-done-button",
        $$slots: { default: [xf] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[12]),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(n, "--btn-bg", "var(--help-feature-button-bg)"),
          se(n, "--btn-fg", "var(--accent-color)"),
          se(n, "--btn-bg-hover", "var(--help-feature-button-bg-hover)");
      },
      m(s, i) {
        w(s, n, i), C(e, n, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 16384 && (l.$$scope = { dirty: i, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (d(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && e && y(n), E(e, s);
      },
    }
  );
}
function Df(o) {
  let e, n, t;
  return (
    (e = new me({
      props: {
        size: "small",
        disabled: !0,
        dataTestId: "feature-item.done-button",
        $$slots: { default: [Ff] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(n, "--btn-bg", "transparent"),
          se(n, "--btn-fg", "var(--accent-color)");
      },
      m(s, i) {
        w(s, n, i), C(e, n, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 16384 && (l.$$scope = { dirty: i, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (d(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && e && y(n), E(e, s);
      },
    }
  );
}
function xf(o) {
  let e,
    n,
    t,
    s = L("sidecar_help__mark_as_done") + "",
    i,
    l;
  return (
    (n = new st({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          (t = M()),
          (i = F(s)),
          c(e, "class", "done-icon svelte-o7k0da");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), w(a, t, r), w(a, i, r), (l = !0);
      },
      p: j,
      i(a) {
        l || (d(n.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(n), a && y(t), a && y(i);
      },
    }
  );
}
function Ff(o) {
  let e,
    n,
    t,
    s = L("sidecar_help__done") + "",
    i,
    l;
  return (
    (n = new st({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          (t = M()),
          (i = F(s)),
          c(e, "class", "done-icon svelte-o7k0da");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), w(a, t, r), w(a, i, r), (l = !0);
      },
      p: j,
      i(a) {
        l || (d(n.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(n), a && y(t), a && y(i);
      },
    }
  );
}
function Gf(o) {
  let e,
    n,
    t = o[3] && Gl(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[3]
        ? t
          ? (t.p(s, i), i & 8 && d(t, 1))
          : ((t = Gl(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function Kf(o, e, n) {
  let t,
    s,
    i,
    { $$slots: l = {}, $$scope: a } = e,
    { id: r } = e,
    { completed: u = [] } = e,
    { available: f = [] } = e,
    { expandedId: m } = e,
    p,
    g = null;
  Me(() => {
    if (!g) return;
    let z = Array.from(g.parentElement?.children || []).indexOf(g);
    n(1, (p = `${z + 1}`));
  });
  let v = () => {
      let z = r !== m;
      H.actions.sendAnalyticsEvent("help.explore-item.expand", {
        "explore-item.id": r,
        "new-value": z ? "expanded" : "collapsed",
      }),
        z ? n(8, (m = r)) : n(8, (m = null));
    },
    b = (z) => {
      H.actions.addItemCompleteList(z);
    },
    $ = () => b(r);
  function k(z) {
    _e[z ? "unshift" : "push"](() => {
      (g = z), n(2, g);
    });
  }
  return (
    (o.$$set = (z) => {
      "id" in z && n(0, (r = z.id)),
        "completed" in z && n(9, (u = z.completed)),
        "available" in z && n(10, (f = z.available)),
        "expandedId" in z && n(8, (m = z.expandedId)),
        "$$scope" in z && n(14, (a = z.$$scope));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 257) {
        e: n(5, (t = r === m));
      }
      if (o.$$.dirty & 513) {
        e: n(4, (s = u.includes(r)));
      }
      if (o.$$.dirty & 1025) {
        e: n(3, (i = f.includes(r)));
      }
    }),
    [r, p, g, i, s, t, v, b, m, u, f, l, $, k, a]
  );
}
var As = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          Kf,
          Gf,
          P,
          { id: 0, completed: 9, available: 10, expandedId: 8 },
          jf
        );
    }
  },
  ot = As;
O();
O();
function Rf(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M9.33333 5.09091V3.18182C9.33333 2.33795 8.98213 1.52864 8.357 0.931935C7.73193 0.335224 6.88407 0 6 0C5.11593 0 4.2681 0.335224 3.64298 0.931935C3.01785 1.52864 2.66667 2.33795 2.66667 3.18182V5.09091H0V14H12V5.09091H9.33333ZM3.66667 3.18182C3.66667 2.59111 3.9125 2.02459 4.35009 1.6069C4.78767 1.1892 5.38113 0.954545 6 0.954545C6.61887 0.954545 7.21233 1.1892 7.64993 1.6069C8.08753 2.02459 8.33333 2.59111 8.33333 3.18182V5.09091H3.66667V3.18182ZM11 13.0455H1V6.04545H11V13.0455ZM6 10.7654C6.1326 10.7654 6.2598 10.7151 6.35353 10.6256C6.44733 10.5361 6.5 10.4147 6.5 10.2881V8.80282C6.5 8.67625 6.44733 8.55483 6.35353 8.46535C6.2598 8.37582 6.1326 8.32555 6 8.32555C5.8674 8.32555 5.7402 8.37582 5.64647 8.46535C5.55267 8.55483 5.5 8.67625 5.5 8.80282V10.2881C5.5 10.4147 5.55267 10.5361 5.64647 10.6256C5.7402 10.7151 5.8674 10.7654 6 10.7654Z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 12 14"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Uf(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Ls = class extends x {
    constructor(e) {
      super(), D(this, e, Uf, Rf, P, { width: 0, height: 1, className: 2 });
    }
  },
  Rl = Ls;
O();
function Wf(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M7 2L8.48328 5.04312L12 5.43769L9.4 7.71302L10.0902 11L7 9.36311L3.90983 11L4.6 7.71302L2 5.43769L5.51672 5.04312L7 2Z"
        ),
        c(n, "stroke", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 14 12"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Zf(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var js = class extends x {
    constructor(e) {
      super(), D(this, e, Zf, Wf, P, { width: 0, height: 1, className: 2 });
    }
  },
  Ul = js;
function Xf(o) {
  R(
    o,
    "svelte-c1ny7a",
    ".feature-arrow.svelte-c1ny7a.svelte-c1ny7a{transition:transform 0.3s ease-in-out;margin-left:auto;margin-top:4px}.tip.svelte-c1ny7a.svelte-c1ny7a{background-color:rgb(0 0 0 / 0.9);color:#fafafa;border-radius:3px;font-size:12px;line-height:16px;opacity:0;position:absolute;top:-60px;left:-1px;transition:opacity 0.3s ease-in-out;pointer-events:none;width:248px;padding:9px 12px 12px}.tip.svelte-c1ny7a.svelte-c1ny7a::after{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:7px 7px 0;border-color:rgb(0 0 0 / 0.9) transparent transparent transparent;left:calc(50% - 7px);bottom:-7px}.feature.svelte-c1ny7a.svelte-c1ny7a{border:1px solid transparent;border-radius:4px;margin-bottom:2px}.feature.svelte-c1ny7a.svelte-c1ny7a:hover{border:1px solid rgb(25 119 243 / 0.3)}.feature.svelte-c1ny7a:hover .tip.svelte-c1ny7a{opacity:1}.feature.opened.svelte-c1ny7a.svelte-c1ny7a{border:1px solid var(--help-feature-border)}.feature.opened.svelte-c1ny7a .feature-arrow.svelte-c1ny7a{transform:rotate(-90deg)}.content.svelte-c1ny7a.svelte-c1ny7a{padding:0 9px 12px 35px}.button.svelte-c1ny7a.svelte-c1ny7a{display:flex;padding:9px 12px;align-items:end;cursor:pointer}.icon.svelte-c1ny7a.svelte-c1ny7a{border:1px solid var(--help-feature-number);border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;margin-right:8px}.icon.checked.svelte-c1ny7a.svelte-c1ny7a{border:1px solid var(--help-feature-checked-border);background-color:var(--help-feature-checked-bg);color:#fff}.title.svelte-c1ny7a.svelte-c1ny7a{font-weight:600;font-size:12px}.description.svelte-c1ny7a.svelte-c1ny7a{font-size:12px;line-height:18px;padding-top:4px;padding-bottom:4px}.locked.svelte-c1ny7a.svelte-c1ny7a{font-size:12px;position:relative}.locked-icon.svelte-c1ny7a.svelte-c1ny7a{margin-left:2px;margin-right:11px}.text.svelte-c1ny7a.svelte-c1ny7a{font-weight:600;color:#999}.actions.svelte-c1ny7a.svelte-c1ny7a{margin-top:8px;display:flex;gap:8px}.done-icon.svelte-c1ny7a.svelte-c1ny7a{margin-right:4px}"
  );
}
var Yf = (o) => ({}),
  Wl = (o) => ({}),
  Jf = (o) => ({}),
  Zl = (o) => ({}),
  Qf = (o) => ({}),
  Xl = (o) => ({});
function Yl(o) {
  let e,
    n,
    t,
    s,
    i = [td, ed],
    l = [];
  function a(r, u) {
    return r[1] ? 0 : 1;
  }
  return (
    (e = a(o, -1)),
    (n = l[e] = i[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(r, u) {
        l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, u) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? l[e].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (n = l[e]),
              n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
              d(n, 1),
              n.m(t.parentNode, t));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        l[e].d(r), r && y(t);
      },
    }
  );
}
function ed(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $ = [sd, nd],
    k = [];
  function z(B, V) {
    return B[3] ? 0 : 1;
  }
  (t = z(o, -1)), (s = k[t] = $[t](o));
  let S = o[10].title,
    N = be(S, o, o[12], Xl);
  u = new et({ props: { width: "6", height: "10" } });
  let A = o[4] && Jl(o);
  return {
    c() {
      (e = T("div")),
        (n = T("button")),
        s.c(),
        (i = M()),
        (l = T("div")),
        N && N.c(),
        (a = M()),
        (r = T("div")),
        I(u.$$.fragment),
        (f = M()),
        A && A.c(),
        c(l, "class", "title svelte-c1ny7a"),
        c(l, "data-testid", "feature-item.title"),
        c(r, "class", "feature-arrow svelte-c1ny7a"),
        c(n, "class", "button svelte-c1ny7a"),
        c(
          e,
          "class",
          (m = "feature " + (o[4] ? "opened" : "") + " svelte-c1ny7a")
        ),
        c(e, "data-testid", (p = "feature-item-" + o[0]));
    },
    m(B, V) {
      w(B, e, V),
        h(e, n),
        k[t].m(n, null),
        h(n, i),
        h(n, l),
        N && N.m(l, null),
        h(n, a),
        h(n, r),
        C(u, r, null),
        h(e, f),
        A && A.m(e, null),
        (g = !0),
        v || ((b = Z(n, "click", o[5])), (v = !0));
    },
    p(B, V) {
      let q = t;
      (t = z(B, V)),
        t === q
          ? k[t].p(B, V)
          : (G(),
            _(k[q], 1, 1, () => {
              k[q] = null;
            }),
            K(),
            (s = k[t]),
            s ? s.p(B, V) : ((s = k[t] = $[t](B)), s.c()),
            d(s, 1),
            s.m(n, i)),
        N &&
          N.p &&
          (!g || V & 4096) &&
          ke(N, S, B, B[12], g ? ve(S, B[12], V, Qf) : we(B[12]), Xl),
        B[4]
          ? A
            ? (A.p(B, V), V & 16 && d(A, 1))
            : ((A = Jl(B)), A.c(), d(A, 1), A.m(e, null))
          : A &&
            (G(),
            _(A, 1, 1, () => {
              A = null;
            }),
            K()),
        (!g ||
          (V & 16 &&
            m !==
              (m = "feature " + (B[4] ? "opened" : "") + " svelte-c1ny7a"))) &&
          c(e, "class", m),
        (!g || (V & 1 && p !== (p = "feature-item-" + B[0]))) &&
          c(e, "data-testid", p);
    },
    i(B) {
      g || (d(s), d(N, B), d(u.$$.fragment, B), d(A), (g = !0));
    },
    o(B) {
      _(s), _(N, B), _(u.$$.fragment, B), _(A), (g = !1);
    },
    d(B) {
      B && y(e), k[t].d(), N && N.d(B), E(u), A && A.d(), (v = !1), b();
    },
  };
}
function td(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p;
  return (
    (s = new Rl({ props: { width: "12", height: "14" } })),
    (u = new et({ props: { width: "6", height: "10" } })),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (t = T("div")),
          I(s.$$.fragment),
          (i = M()),
          (l = T("div")),
          (l.textContent = `${L("sidecar_help__secret_feature_title")}`),
          (a = M()),
          (r = T("div")),
          I(u.$$.fragment),
          (f = M()),
          (m = T("div")),
          (m.textContent = `${L("sidecar_help__secret_feature_description")}`),
          c(t, "class", "locked-icon svelte-c1ny7a"),
          c(t, "data-testid", "feature-item.number-locked"),
          c(l, "class", "text svelte-c1ny7a"),
          c(l, "data-testid", "feature-item.title"),
          c(r, "class", "feature-arrow svelte-c1ny7a"),
          c(m, "class", "tip svelte-c1ny7a"),
          c(n, "class", "button svelte-c1ny7a"),
          c(e, "class", "feature locked svelte-c1ny7a"),
          c(e, "data-testid", "feature-item-secret");
      },
      m(g, v) {
        w(g, e, v),
          h(e, n),
          h(n, t),
          C(s, t, null),
          h(n, i),
          h(n, l),
          h(n, a),
          h(n, r),
          C(u, r, null),
          h(n, f),
          h(n, m),
          (p = !0);
      },
      p: j,
      i(g) {
        p || (d(s.$$.fragment, g), d(u.$$.fragment, g), (p = !0));
      },
      o(g) {
        _(s.$$.fragment, g), _(u.$$.fragment, g), (p = !1);
      },
      d(g) {
        g && y(e), E(s), E(u);
      },
    }
  );
}
function nd(o) {
  let e, n, t;
  return (
    (n = new Ul({ props: { width: "14", height: "12" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "icon svelte-c1ny7a"),
          c(e, "data-testid", "feature-item.number");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p: j,
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function sd(o) {
  let e, n, t;
  return (
    (n = new Tn({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "icon svelte-c1ny7a"),
          c(e, "data-testid", "feature-item.number-checked"),
          oe(e, "checked", o[3]);
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        (!t || i & 8) && oe(e, "checked", s[3]);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Jl(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f = o[10].default,
    m = be(f, o, o[12], null),
    p = o[10].animation,
    g = be(p, o, o[12], Zl),
    v = o[10].actions,
    b = be(v, o, o[12], Wl),
    $ = [id, od],
    k = [];
  function z(S, N) {
    return S[3] ? 0 : 1;
  }
  return (
    (a = z(o, -1)),
    (r = k[a] = $[a](o)),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          m && m.c(),
          (t = M()),
          g && g.c(),
          (s = M()),
          (i = T("div")),
          b && b.c(),
          (l = M()),
          r.c(),
          c(n, "class", "description svelte-c1ny7a"),
          c(i, "class", "actions svelte-c1ny7a"),
          c(e, "class", "content svelte-c1ny7a"),
          c(e, "data-testid", "feature-item.content");
      },
      m(S, N) {
        w(S, e, N),
          h(e, n),
          m && m.m(n, null),
          h(e, t),
          g && g.m(e, null),
          h(e, s),
          h(e, i),
          b && b.m(i, null),
          h(i, l),
          k[a].m(i, null),
          (u = !0);
      },
      p(S, N) {
        m &&
          m.p &&
          (!u || N & 4096) &&
          ke(m, f, S, S[12], u ? ve(f, S[12], N, null) : we(S[12]), null),
          g &&
            g.p &&
            (!u || N & 4096) &&
            ke(g, p, S, S[12], u ? ve(p, S[12], N, Jf) : we(S[12]), Zl),
          b &&
            b.p &&
            (!u || N & 4096) &&
            ke(b, v, S, S[12], u ? ve(v, S[12], N, Yf) : we(S[12]), Wl);
        let A = a;
        (a = z(S, N)),
          a === A
            ? k[a].p(S, N)
            : (G(),
              _(k[A], 1, 1, () => {
                k[A] = null;
              }),
              K(),
              (r = k[a]),
              r ? r.p(S, N) : ((r = k[a] = $[a](S)), r.c()),
              d(r, 1),
              r.m(i, null));
      },
      i(S) {
        u || (d(m, S), d(g, S), d(b, S), d(r), (u = !0));
      },
      o(S) {
        _(m, S), _(g, S), _(b, S), _(r), (u = !1);
      },
      d(S) {
        S && y(e), m && m.d(S), g && g.d(S), b && b.d(S), k[a].d();
      },
    }
  );
}
function od(o) {
  let e, n, t;
  return (
    (e = new me({
      props: {
        size: "small",
        dataTestId: "feature-item.mark-as-done-button",
        $$slots: { default: [ld] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[11]),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(n, "--btn-bg", "var(--help-feature-button-bg)"),
          se(n, "--btn-fg", "var(--accent-color)"),
          se(n, "--btn-bg-hover", "var(--help-feature-button-bg-hover)");
      },
      m(s, i) {
        w(s, n, i), C(e, n, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 4096 && (l.$$scope = { dirty: i, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (d(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && e && y(n), E(e, s);
      },
    }
  );
}
function id(o) {
  let e, n, t;
  return (
    (e = new me({
      props: {
        size: "small",
        dataTestId: "feature-item.done-button",
        disabled: !0,
        $$slots: { default: [rd] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(n, "--btn-bg", "transparent"),
          se(n, "--btn-fg", "var(--accent-color)");
      },
      m(s, i) {
        w(s, n, i), C(e, n, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 4096 && (l.$$scope = { dirty: i, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (d(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && e && y(n), E(e, s);
      },
    }
  );
}
function ld(o) {
  let e,
    n,
    t,
    s = L("sidecar_help__mark_as_done") + "",
    i,
    l;
  return (
    (n = new st({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          (t = M()),
          (i = F(s)),
          c(e, "class", "done-icon svelte-c1ny7a");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), w(a, t, r), w(a, i, r), (l = !0);
      },
      p: j,
      i(a) {
        l || (d(n.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(n), a && y(t), a && y(i);
      },
    }
  );
}
function rd(o) {
  let e,
    n,
    t,
    s = L("sidecar_help__done") + "",
    i,
    l;
  return (
    (n = new st({ props: { width: "10", height: "9" } })),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          (t = M()),
          (i = F(s)),
          c(e, "class", "done-icon svelte-c1ny7a");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), w(a, t, r), w(a, i, r), (l = !0);
      },
      p: j,
      i(a) {
        l || (d(n.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(n), a && y(t), a && y(i);
      },
    }
  );
}
function ad(o) {
  let e,
    n,
    t = o[2] && Yl(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[2]
        ? t
          ? (t.p(s, i), i & 4 && d(t, 1))
          : ((t = Yl(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function cd(o, e, n) {
  let t,
    s,
    i,
    { $$slots: l = {}, $$scope: a } = e,
    { id: r } = e,
    { completed: u } = e,
    { available: f } = e,
    { expandedId: m } = e,
    { isLocked: p = !0 } = e,
    g = () => {
      n(7, (m = r !== m ? r : null));
    },
    v = ($) => {
      H.actions.addItemCompleteList($);
    },
    b = () => v(r);
  return (
    (o.$$set = ($) => {
      "id" in $ && n(0, (r = $.id)),
        "completed" in $ && n(8, (u = $.completed)),
        "available" in $ && n(9, (f = $.available)),
        "expandedId" in $ && n(7, (m = $.expandedId)),
        "isLocked" in $ && n(1, (p = $.isLocked)),
        "$$scope" in $ && n(12, (a = $.$$scope));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 129) {
        e: n(4, (t = r === m));
      }
      if (o.$$.dirty & 257) {
        e: n(3, (s = u.includes(r)));
      }
      if (o.$$.dirty & 513) {
        e: n(2, (i = f.includes(r)));
      }
    }),
    [r, p, i, s, t, g, v, m, u, f, l, b, a]
  );
}
var Vs = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          cd,
          ad,
          P,
          { id: 0, completed: 8, available: 9, expandedId: 7, isLocked: 1 },
          Xf
        );
    }
  },
  Ql = Vs;
O();
function ud(o) {
  let e, n, t, s, i;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        (t = ne("path")),
        (s = ne("circle")),
        c(
          n,
          "d",
          "M13 6L11.2017 10.4958C11.1326 10.6685 11.316 10.8337 11.4805 10.7471L20.5 6M13 6L11.2017 1.50416C11.1326 1.3315 11.3159 1.16629 11.4805 1.2529L20.5 6M13 6H20.5"
        ),
        c(n, "stroke", "#F0641E"),
        c(n, "stroke-miterlimit", "10"),
        c(
          t,
          "d",
          "M10 6H5.73333C3.67147 6 2 7.67147 2 9.73333V9.73333C2 11.7952 3.67147 13.4667 5.73333 13.4667H16.2333C18.0375 13.4667 19.5 14.9292 19.5 16.7333V16.7333C19.5 18.5375 18.0375 20 16.2333 20H9"
        ),
        c(t, "stroke", "#F0641E"),
        c(t, "stroke-miterlimit", "10"),
        c(s, "cx", "5"),
        c(s, "cy", "20"),
        c(s, "r", "2"),
        c(s, "stroke", "#F0641E"),
        c(s, "stroke-miterlimit", "10"),
        c(e, "class", (i = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 23 23"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, a) {
      w(l, e, a), h(e, n), h(e, t), h(e, s);
    },
    p(l, [a]) {
      a & 4 && i !== (i = `icon ${l[2]}`) && c(e, "class", i),
        a & 1 && c(e, "width", l[0]),
        a & 2 && c(e, "height", l[1]);
    },
    i: j,
    o: j,
    d(l) {
      l && y(e);
    },
  };
}
function fd(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Hs = class extends x {
    constructor(e) {
      super(), D(this, e, fd, ud, P, { width: 0, height: 1, className: 2 });
    }
  },
  er = Hs;
function dd(o) {
  R(
    o,
    "svelte-fko3m9",
    ".help-getting-started.svelte-fko3m9.svelte-fko3m9{display:block;white-space:unset;text-align:initial;width:100%;background-color:var(--help-getting-start-bg);border-radius:4px;margin:4px 0;padding:12px 13px 13px 7px;position:relative;overflow:hidden;transition:background-color 0.3s}.help-getting-started.svelte-fko3m9 span.svelte-fko3m9{font-weight:600;margin-left:10px}.help-getting-started.is-completed.svelte-fko3m9.svelte-fko3m9{background-color:var(--help-bg-item)}.help-getting-started.is-completed.svelte-fko3m9 span.svelte-fko3m9{font-weight:normal}.help-getting-started.svelte-fko3m9 p.svelte-fko3m9{font-size:12px;line-height:16px;padding-left:34px;margin:0;color:var(--help-getting-start-desc)}.help-getting-started.svelte-fko3m9 .help-dropdown-icon.svelte-fko3m9{margin-left:auto;transition:transform 0.3s}.help-getting-started.opened.svelte-fko3m9 .help-dropdown-icon.svelte-fko3m9{transform:rotate(-90deg)}.help-getting-content.svelte-fko3m9.svelte-fko3m9{display:flex;align-items:center}.progress-features.svelte-fko3m9.svelte-fko3m9{position:absolute;bottom:0;left:0;height:2px;background-color:#1977f3;transition:width 0.3s}.count-features.svelte-fko3m9.svelte-fko3m9{font-size:12px;line-height:16px;font-weight:500;color:#1977f3;position:absolute;top:16px;right:28px}.features.svelte-fko3m9.svelte-fko3m9{padding-bottom:10px}.learn-more.svelte-fko3m9.svelte-fko3m9{color:var(--accent-color)}"
  );
}
function tr(o) {
  let e, n, t;
  return {
    c() {
      (e = T("p")),
        (e.textContent = `${L("sidecar_help__checklist_not_completed")}`),
        (n = M()),
        (t = T("div")),
        c(e, "class", "svelte-fko3m9"),
        c(t, "class", "progress-features svelte-fko3m9"),
        se(t, "width", "calc(" + o[2] + " * 100%)");
    },
    m(s, i) {
      w(s, e, i), w(s, n, i), w(s, t, i);
    },
    p(s, i) {
      i[0] & 4 && se(t, "width", "calc(" + s[2] + " * 100%)");
    },
    d(s) {
      s && y(e), s && y(n), s && y(t);
    },
  };
}
function md(o) {
  let e = L("sidecar_help__import_description") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function pd(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__import_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function _d(o) {
  let e = L("sidecar_help__import") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function hd(o) {
  let e, n;
  return (
    (e = new me({
      props: {
        slot: "actions",
        size: "small",
        dataTestId: "feature-item.import-button",
        $$slots: { default: [_d] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[15]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[1] & 512 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function gd(o) {
  let e = L("sidecar_help__switch_tabs_tooltip") + "",
    n,
    t,
    s,
    i,
    l,
    a;
  return (
    (s = new Le({ props: { keys: o[10] } })),
    (l = new lt({ props: { data: o[6]?.tabSwitcher } })),
    {
      c() {
        (n = F(e)), (t = M()), I(s.$$.fragment), (i = M()), I(l.$$.fragment);
      },
      m(r, u) {
        w(r, n, u), w(r, t, u), C(s, r, u), w(r, i, u), C(l, r, u), (a = !0);
      },
      p(r, u) {
        let f = {};
        u[0] & 1024 && (f.keys = r[10]), s.$set(f);
        let m = {};
        u[0] & 64 && (m.data = r[6]?.tabSwitcher), l.$set(m);
      },
      i(r) {
        a || (d(s.$$.fragment, r), d(l.$$.fragment, r), (a = !0));
      },
      o(r) {
        _(s.$$.fragment, r), _(l.$$.fragment, r), (a = !1);
      },
      d(r) {
        r && y(n), r && y(t), E(s, r), r && y(i), E(l, r);
      },
    }
  );
}
function bd(o) {
  let e,
    n = L("sidecar_sessions__jump_to_tabs") + "",
    t,
    s,
    i,
    l;
  return (
    (i = new Le({ props: { keys: o[10] } })),
    {
      c() {
        (e = T("div")),
          (t = F(n)),
          (s = M()),
          I(i.$$.fragment),
          c(e, "slot", "title");
      },
      m(a, r) {
        w(a, e, r), h(e, t), h(e, s), C(i, e, null), (l = !0);
      },
      p(a, r) {
        let u = {};
        r[0] & 1024 && (u.keys = a[10]), i.$set(u);
      },
      i(a) {
        l || (d(i.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(i.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(i);
      },
    }
  );
}
function vd(o) {
  let e = L("sidecar_help__try_global_search_description") + "",
    n,
    t,
    s,
    i,
    l,
    a;
  return (
    (s = new Le({ props: { keys: o[9] } })),
    (l = new lt({ props: { data: o[6]?.search } })),
    {
      c() {
        (n = F(e)), (t = M()), I(s.$$.fragment), (i = M()), I(l.$$.fragment);
      },
      m(r, u) {
        w(r, n, u), w(r, t, u), C(s, r, u), w(r, i, u), C(l, r, u), (a = !0);
      },
      p(r, u) {
        let f = {};
        u[0] & 512 && (f.keys = r[9]), s.$set(f);
        let m = {};
        u[0] & 64 && (m.data = r[6]?.search), l.$set(m);
      },
      i(r) {
        a || (d(s.$$.fragment, r), d(l.$$.fragment, r), (a = !0));
      },
      o(r) {
        _(s.$$.fragment, r), _(l.$$.fragment, r), (a = !1);
      },
      d(r) {
        r && y(n), r && y(t), E(s, r), r && y(i), E(l, r);
      },
    }
  );
}
function kd(o) {
  let e,
    n = L("sidecar_help__try_global_search_title") + "",
    t,
    s,
    i,
    l;
  return (
    (i = new Le({ props: { keys: o[9] } })),
    {
      c() {
        (e = T("div")),
          (t = F(n)),
          (s = M()),
          I(i.$$.fragment),
          c(e, "slot", "title");
      },
      m(a, r) {
        w(a, e, r), h(e, t), h(e, s), C(i, e, null), (l = !0);
      },
      p(a, r) {
        let u = {};
        r[0] & 512 && (u.keys = a[9]), i.$set(u);
      },
      i(a) {
        l || (d(i.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(i.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(i);
      },
    }
  );
}
function wd(o) {
  let e = L("sidecar_help__customize_app_description") + "",
    n,
    t,
    s,
    i;
  return (
    (s = new lt({ props: { data: o[6]?.appSettings } })),
    {
      c() {
        (n = F(e)), (t = M()), I(s.$$.fragment);
      },
      m(l, a) {
        w(l, n, a), w(l, t, a), C(s, l, a), (i = !0);
      },
      p(l, a) {
        let r = {};
        a[0] & 64 && (r.data = l[6]?.appSettings), s.$set(r);
      },
      i(l) {
        i || (d(s.$$.fragment, l), (i = !0));
      },
      o(l) {
        _(s.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && y(n), l && y(t), E(s, l);
      },
    }
  );
}
function yd(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__customize_app_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function $d(o) {
  let e = L("sidecar_help__add_account_to_app_description") + "",
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u;
  return (
    (l = new lt({ props: { data: o[6]?.multiaccounts } })),
    {
      c() {
        (n = F(e)),
          (t = M()),
          (s = T("a")),
          (s.textContent = `${L("sidecar_help__learn_more")}`),
          (i = M()),
          I(l.$$.fragment),
          c(s, "class", "learn-more svelte-fko3m9"),
          c(
            s,
            "href",
            "https://help.meetsidekick.com/en/articles/4094004-multiple-accounts-for-applications"
          ),
          c(s, "target", "_blank"),
          c(s, "rel", "noreferrer");
      },
      m(f, m) {
        w(f, n, m),
          w(f, t, m),
          w(f, s, m),
          w(f, i, m),
          C(l, f, m),
          (a = !0),
          r || ((u = Z(s, "click", o[16])), (r = !0));
      },
      p(f, m) {
        let p = {};
        m[0] & 64 && (p.data = f[6]?.multiaccounts), l.$set(p);
      },
      i(f) {
        a || (d(l.$$.fragment, f), (a = !0));
      },
      o(f) {
        _(l.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && y(n), f && y(t), f && y(s), f && y(i), E(l, f), (r = !1), u();
      },
    }
  );
}
function Sd(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__add_account_to_app_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Td(o) {
  let e = L("sidecar_help__organize_tabs_by_sessions_description_1") + "",
    n,
    t,
    s,
    i,
    l =
      L("sidecar_help__organize_tabs_by_sessions_description_2_with_html") + "",
    a,
    r,
    u,
    f;
  return (
    (s = new Le({ props: { keys: o[8] } })),
    (u = new lt({ props: { data: o[6]?.sessions } })),
    {
      c() {
        (n = F(e)),
          (t = M()),
          I(s.$$.fragment),
          (i = M()),
          (a = F(l)),
          (r = M()),
          I(u.$$.fragment);
      },
      m(m, p) {
        w(m, n, p),
          w(m, t, p),
          C(s, m, p),
          w(m, i, p),
          w(m, a, p),
          w(m, r, p),
          C(u, m, p),
          (f = !0);
      },
      p(m, p) {
        let g = {};
        p[0] & 256 && (g.keys = m[8]), s.$set(g);
        let v = {};
        p[0] & 64 && (v.data = m[6]?.sessions), u.$set(v);
      },
      i(m) {
        f || (d(s.$$.fragment, m), d(u.$$.fragment, m), (f = !0));
      },
      o(m) {
        _(s.$$.fragment, m), _(u.$$.fragment, m), (f = !1);
      },
      d(m) {
        m && y(n), m && y(t), E(s, m), m && y(i), m && y(a), m && y(r), E(u, m);
      },
    }
  );
}
function Id(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L(
          "sidecar_help__organize_tabs_by_sessions_title"
        )}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Cd(o) {
  let e = L("sidecar_help__messengers_description") + "",
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u;
  return (
    (l = new lt({ props: { data: o[6]?.messengers } })),
    {
      c() {
        (n = F(e)),
          (t = M()),
          (s = T("a")),
          (s.textContent = `${L("sidecar_help__learn_more")}`),
          (i = M()),
          I(l.$$.fragment),
          c(s, "class", "learn-more svelte-fko3m9"),
          c(
            s,
            "href",
            "https://help.meetsidekick.com/en/articles/4093978-working-with-applications"
          ),
          c(s, "target", "_blank"),
          c(s, "rel", "noreferrer");
      },
      m(f, m) {
        w(f, n, m),
          w(f, t, m),
          w(f, s, m),
          w(f, i, m),
          C(l, f, m),
          (a = !0),
          r || ((u = Z(s, "click", o[16])), (r = !0));
      },
      p(f, m) {
        let p = {};
        m[0] & 64 && (p.data = f[6]?.messengers), l.$set(p);
      },
      i(f) {
        a || (d(l.$$.fragment, f), (a = !0));
      },
      o(f) {
        _(l.$$.fragment, f), (a = !1);
      },
      d(f) {
        f && y(n), f && y(t), f && y(s), f && y(i), E(l, f), (r = !1), u();
      },
    }
  );
}
function Ed(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__messengers_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function zd(o) {
  let e = L("sidecar_help__split_view_description_1") + "",
    n,
    t,
    s,
    i,
    l = L("sidecar_help__split_view_description_2") + "",
    a,
    r,
    u,
    f;
  return (
    (s = new Le({ props: { keys: o[7] } })),
    (u = new lt({ props: { data: o[6]?.splitview } })),
    {
      c() {
        (n = F(e)),
          (t = M()),
          I(s.$$.fragment),
          (i = M()),
          (a = F(l)),
          (r = M()),
          I(u.$$.fragment);
      },
      m(m, p) {
        w(m, n, p),
          w(m, t, p),
          C(s, m, p),
          w(m, i, p),
          w(m, a, p),
          w(m, r, p),
          C(u, m, p),
          (f = !0);
      },
      p(m, p) {
        let g = {};
        p[0] & 128 && (g.keys = m[7]), s.$set(g);
        let v = {};
        p[0] & 64 && (v.data = m[6]?.splitview), u.$set(v);
      },
      i(m) {
        f || (d(s.$$.fragment, m), d(u.$$.fragment, m), (f = !0));
      },
      o(m) {
        _(s.$$.fragment, m), _(u.$$.fragment, m), (f = !1);
      },
      d(m) {
        m && y(n), m && y(t), E(s, m), m && y(i), m && y(a), m && y(r), E(u, m);
      },
    }
  );
}
function Md(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__split_view_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Nd(o) {
  let e = L("sidecar_help__mute_notifications_description") + "",
    n,
    t,
    s,
    i;
  return (
    (s = new lt({ props: { data: o[6]?.mute } })),
    {
      c() {
        (n = F(e)), (t = M()), I(s.$$.fragment);
      },
      m(l, a) {
        w(l, n, a), w(l, t, a), C(s, l, a), (i = !0);
      },
      p(l, a) {
        let r = {};
        a[0] & 64 && (r.data = l[6]?.mute), s.$set(r);
      },
      i(l) {
        i || (d(s.$$.fragment, l), (i = !0));
      },
      o(l) {
        _(s.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && y(n), l && y(t), E(s, l);
      },
    }
  );
}
function Ad(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__mute_notifications_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Ld(o) {
  let e = L("sidecar_help__mute_notifications_description") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function jd(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.textContent = `${L("sidecar_help__mute_notifications_title")}`),
        c(e, "slot", "title");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Vd(o) {
  let e = L("sidecar_help__invite") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Hd(o) {
  let e, n;
  return (
    (e = new me({
      props: {
        slot: "actions",
        size: "small",
        dataTestId: "feature-item.invite-button",
        $$slots: { default: [Vd] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[14]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[1] & 512 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Od(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r = o[1].length + "",
    u,
    f,
    m = o[11].length + "",
    p,
    g,
    v,
    b,
    $,
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le,
    J,
    ie,
    te,
    U,
    ee,
    Ie,
    de,
    $e,
    Se,
    Ce,
    W,
    he,
    Ee,
    Ve,
    He,
    Oe,
    ge,
    X,
    re,
    it,
    rt,
    We,
    wt,
    gt,
    Ye,
    yt,
    qt;
  (t = new er({ props: { width: "23", height: "23" } })),
    (b = new et({ props: { width: "6", height: "10" } }));
  let Be = !o[5] && tr(o);
  function Zt(Q) {
    o[19](Q);
  }
  let Bt = {
    completed: o[1],
    available: o[11],
    id: "import-data",
    $$slots: { actions: [hd], title: [pd], default: [md] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Bt.expandedId = o[3]),
    (N = new ot({ props: Bt })),
    _e.push(() => Ae(N, "expandedId", Zt)),
    N.$on("complete", o[20]);
  function Xt(Q) {
    o[21](Q);
  }
  let Ko = {
    completed: o[1],
    available: o[11],
    id: "tab-switcher",
    $$slots: { title: [bd], default: [gd] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Ko.expandedId = o[3]),
    (V = new ot({ props: Ko })),
    _e.push(() => Ae(V, "expandedId", Xt)),
    V.$on("complete", o[22]);
  function qa(Q) {
    o[23](Q);
  }
  let Ro = {
    completed: o[1],
    available: o[11],
    id: "global-search",
    $$slots: { title: [kd], default: [vd] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Ro.expandedId = o[3]),
    (J = new ot({ props: Ro })),
    _e.push(() => Ae(J, "expandedId", qa)),
    J.$on("complete", o[24]);
  function Ba(Q) {
    o[25](Q);
  }
  let Uo = {
    completed: o[1],
    available: o[11],
    id: "customize-app",
    $$slots: { title: [yd], default: [wd] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Uo.expandedId = o[3]),
    (U = new ot({ props: Uo })),
    _e.push(() => Ae(U, "expandedId", Ba)),
    U.$on("complete", o[26]);
  function Pa(Q) {
    o[27](Q);
  }
  let Wo = {
    completed: o[1],
    available: o[11],
    id: "app-accounts",
    $$slots: { title: [Sd], default: [$d] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Wo.expandedId = o[3]),
    (de = new ot({ props: Wo })),
    _e.push(() => Ae(de, "expandedId", Pa)),
    de.$on("complete", o[28]);
  function Da(Q) {
    o[29](Q);
  }
  let Zo = {
    completed: o[1],
    available: o[11],
    id: "sessions",
    $$slots: { title: [Id], default: [Td] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Zo.expandedId = o[3]),
    (Ce = new ot({ props: Zo })),
    _e.push(() => Ae(Ce, "expandedId", Da)),
    Ce.$on("complete", o[30]);
  function xa(Q) {
    o[31](Q);
  }
  let Xo = {
    completed: o[1],
    available: o[11],
    id: "messengers",
    $$slots: { title: [Ed], default: [Cd] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Xo.expandedId = o[3]),
    (Ee = new ot({ props: Xo })),
    _e.push(() => Ae(Ee, "expandedId", xa)),
    Ee.$on("complete", o[32]);
  function Fa(Q) {
    o[33](Q);
  }
  let Yo = {
    completed: o[1],
    available: o[11],
    id: "split-view",
    $$slots: { title: [Md], default: [zd] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Yo.expandedId = o[3]),
    (Oe = new ot({ props: Yo })),
    _e.push(() => Ae(Oe, "expandedId", Fa)),
    Oe.$on("complete", o[34]);
  function Ga(Q) {
    o[35](Q);
  }
  let Jo = {
    completed: o[1],
    available: o[11],
    id: "global-mute",
    $$slots: { title: [Ad], default: [Nd] },
    $$scope: { ctx: o },
  };
  o[3] !== void 0 && (Jo.expandedId = o[3]),
    (re = new ot({ props: Jo })),
    _e.push(() => Ae(re, "expandedId", Ga)),
    re.$on("complete", o[36]);
  function Ka(Q) {
    o[37](Q);
  }
  let Qo = {
    isLocked: o[4],
    completed: o[1],
    available: o[11],
    id: "free-sidekick-pro",
    $$slots: { actions: [Hd], title: [jd], default: [Ld] },
    $$scope: { ctx: o },
  };
  return (
    o[3] !== void 0 && (Qo.expandedId = o[3]),
    (We = new Ql({ props: Qo })),
    _e.push(() => Ae(We, "expandedId", Ka)),
    We.$on("complete", o[38]),
    {
      c() {
        (e = T("button")),
          (n = T("div")),
          I(t.$$.fragment),
          (s = M()),
          (i = T("span")),
          (i.textContent = `${L("sidecar_help__explore")} Sidekick`),
          (l = M()),
          (a = T("span")),
          (u = F(r)),
          (f = F("/")),
          (p = F(m)),
          (g = M()),
          (v = T("div")),
          I(b.$$.fragment),
          ($ = M()),
          Be && Be.c(),
          (z = M()),
          (S = T("div")),
          I(N.$$.fragment),
          (B = M()),
          I(V.$$.fragment),
          (le = M()),
          I(J.$$.fragment),
          (te = M()),
          I(U.$$.fragment),
          (Ie = M()),
          I(de.$$.fragment),
          (Se = M()),
          I(Ce.$$.fragment),
          (he = M()),
          I(Ee.$$.fragment),
          (He = M()),
          I(Oe.$$.fragment),
          (X = M()),
          I(re.$$.fragment),
          (rt = M()),
          I(We.$$.fragment),
          c(i, "class", "svelte-fko3m9"),
          c(a, "class", "count-features svelte-fko3m9"),
          c(a, "data-testid", "explored-features-count"),
          c(v, "class", "help-dropdown-icon svelte-fko3m9"),
          c(n, "class", "help-getting-content svelte-fko3m9"),
          c(
            e,
            "class",
            (k =
              "help-getting-started " +
              (o[0] ? "opened" : "") +
              " svelte-fko3m9")
          ),
          c(e, "data-testid", "explore"),
          oe(e, "is-completed", o[5]),
          c(S, "class", "features svelte-fko3m9"),
          (S.hidden = gt = !o[0]),
          c(S, "data-testid", "features-list");
      },
      m(Q, ce) {
        w(Q, e, ce),
          h(e, n),
          C(t, n, null),
          h(n, s),
          h(n, i),
          h(n, l),
          h(n, a),
          h(a, u),
          h(a, f),
          h(a, p),
          h(n, g),
          h(n, v),
          C(b, v, null),
          h(e, $),
          Be && Be.m(e, null),
          w(Q, z, ce),
          w(Q, S, ce),
          C(N, S, null),
          h(S, B),
          C(V, S, null),
          h(S, le),
          C(J, S, null),
          h(S, te),
          C(U, S, null),
          h(S, Ie),
          C(de, S, null),
          h(S, Se),
          C(Ce, S, null),
          h(S, he),
          C(Ee, S, null),
          h(S, He),
          C(Oe, S, null),
          h(S, X),
          C(re, S, null),
          h(S, rt),
          C(We, S, null),
          (Ye = !0),
          yt || ((qt = Z(e, "click", o[18])), (yt = !0));
      },
      p(Q, ce) {
        (!Ye || ce[0] & 2) && r !== (r = Q[1].length + "") && ae(u, r),
          Q[5]
            ? Be && (Be.d(1), (Be = null))
            : Be
            ? Be.p(Q, ce)
            : ((Be = tr(Q)), Be.c(), Be.m(e, null)),
          (!Ye ||
            (ce[0] & 1 &&
              k !==
                (k =
                  "help-getting-started " +
                  (Q[0] ? "opened" : "") +
                  " svelte-fko3m9"))) &&
            c(e, "class", k),
          (!Ye || ce[0] & 33) && oe(e, "is-completed", Q[5]);
        let Yt = {};
        ce[0] & 2 && (Yt.completed = Q[1]),
          ce[1] & 512 && (Yt.$$scope = { dirty: ce, ctx: Q }),
          !A &&
            ce[0] & 8 &&
            ((A = !0), (Yt.expandedId = Q[3]), Ne(() => (A = !1))),
          N.$set(Yt);
        let Jt = {};
        ce[0] & 2 && (Jt.completed = Q[1]),
          (ce[0] & 1088) | (ce[1] & 512) &&
            (Jt.$$scope = { dirty: ce, ctx: Q }),
          !q &&
            ce[0] & 8 &&
            ((q = !0), (Jt.expandedId = Q[3]), Ne(() => (q = !1))),
          V.$set(Jt);
        let Qt = {};
        ce[0] & 2 && (Qt.completed = Q[1]),
          (ce[0] & 576) | (ce[1] & 512) && (Qt.$$scope = { dirty: ce, ctx: Q }),
          !ie &&
            ce[0] & 8 &&
            ((ie = !0), (Qt.expandedId = Q[3]), Ne(() => (ie = !1))),
          J.$set(Qt);
        let en = {};
        ce[0] & 2 && (en.completed = Q[1]),
          (ce[0] & 64) | (ce[1] & 512) && (en.$$scope = { dirty: ce, ctx: Q }),
          !ee &&
            ce[0] & 8 &&
            ((ee = !0), (en.expandedId = Q[3]), Ne(() => (ee = !1))),
          U.$set(en);
        let tn = {};
        ce[0] & 2 && (tn.completed = Q[1]),
          (ce[0] & 64) | (ce[1] & 512) && (tn.$$scope = { dirty: ce, ctx: Q }),
          !$e &&
            ce[0] & 8 &&
            (($e = !0), (tn.expandedId = Q[3]), Ne(() => ($e = !1))),
          de.$set(tn);
        let nn = {};
        ce[0] & 2 && (nn.completed = Q[1]),
          (ce[0] & 320) | (ce[1] & 512) && (nn.$$scope = { dirty: ce, ctx: Q }),
          !W &&
            ce[0] & 8 &&
            ((W = !0), (nn.expandedId = Q[3]), Ne(() => (W = !1))),
          Ce.$set(nn);
        let sn = {};
        ce[0] & 2 && (sn.completed = Q[1]),
          (ce[0] & 64) | (ce[1] & 512) && (sn.$$scope = { dirty: ce, ctx: Q }),
          !Ve &&
            ce[0] & 8 &&
            ((Ve = !0), (sn.expandedId = Q[3]), Ne(() => (Ve = !1))),
          Ee.$set(sn);
        let on = {};
        ce[0] & 2 && (on.completed = Q[1]),
          (ce[0] & 192) | (ce[1] & 512) && (on.$$scope = { dirty: ce, ctx: Q }),
          !ge &&
            ce[0] & 8 &&
            ((ge = !0), (on.expandedId = Q[3]), Ne(() => (ge = !1))),
          Oe.$set(on);
        let ln = {};
        ce[0] & 2 && (ln.completed = Q[1]),
          (ce[0] & 64) | (ce[1] & 512) && (ln.$$scope = { dirty: ce, ctx: Q }),
          !it &&
            ce[0] & 8 &&
            ((it = !0), (ln.expandedId = Q[3]), Ne(() => (it = !1))),
          re.$set(ln);
        let Pt = {};
        ce[0] & 16 && (Pt.isLocked = Q[4]),
          ce[0] & 2 && (Pt.completed = Q[1]),
          ce[1] & 512 && (Pt.$$scope = { dirty: ce, ctx: Q }),
          !wt &&
            ce[0] & 8 &&
            ((wt = !0), (Pt.expandedId = Q[3]), Ne(() => (wt = !1))),
          We.$set(Pt),
          (!Ye || (ce[0] & 1 && gt !== (gt = !Q[0]))) && (S.hidden = gt);
      },
      i(Q) {
        Ye ||
          (d(t.$$.fragment, Q),
          d(b.$$.fragment, Q),
          d(N.$$.fragment, Q),
          d(V.$$.fragment, Q),
          d(J.$$.fragment, Q),
          d(U.$$.fragment, Q),
          d(de.$$.fragment, Q),
          d(Ce.$$.fragment, Q),
          d(Ee.$$.fragment, Q),
          d(Oe.$$.fragment, Q),
          d(re.$$.fragment, Q),
          d(We.$$.fragment, Q),
          (Ye = !0));
      },
      o(Q) {
        _(t.$$.fragment, Q),
          _(b.$$.fragment, Q),
          _(N.$$.fragment, Q),
          _(V.$$.fragment, Q),
          _(J.$$.fragment, Q),
          _(U.$$.fragment, Q),
          _(de.$$.fragment, Q),
          _(Ce.$$.fragment, Q),
          _(Ee.$$.fragment, Q),
          _(Oe.$$.fragment, Q),
          _(re.$$.fragment, Q),
          _(We.$$.fragment, Q),
          (Ye = !1);
      },
      d(Q) {
        Q && y(e),
          E(t),
          E(b),
          Be && Be.d(),
          Q && y(z),
          Q && y(S),
          E(N),
          E(V),
          E(J),
          E(U),
          E(de),
          E(Ce),
          E(Ee),
          E(Oe),
          E(re),
          E(We),
          (yt = !1),
          qt();
      },
    }
  );
}
function qd(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g = Object.values(ai),
    v = H.stores.helpPanel;
  ue(o, v, (X) => n(17, (p = X)));
  let b = !1,
    $ = () => {
      n(3, (k = g.find((X) => !a.includes(X)) ?? null));
    },
    k = null,
    z = () => {
      H.actions.sendAnalyticsEvent("help.expand", {
        "help.checklist.id": void 0,
        "new-value": b ? "collapsed" : "expanded",
      }),
        n(0, (b = !b));
    },
    S = () => {
      H.actions.sendAnalyticsEvent(
        "help.explore-item.invite-button-clicked",
        void 0
      ),
        H.actions.showInvitationsPopup();
    },
    N = () => {
      H.actions.sendAnalyticsEvent(
        "help.explore-item.import-button-clicked",
        void 0
      ),
        H.actions.openChromeImport();
    },
    A = () => {
      H.actions.sendAnalyticsEvent("help.explore-item.link-clicked", void 0);
    },
    B = () => z();
  function V(X) {
    (k = X), n(3, k);
  }
  function q(X) {
    pe.call(this, o, X);
  }
  function le(X) {
    (k = X), n(3, k);
  }
  function J(X) {
    pe.call(this, o, X);
  }
  function ie(X) {
    (k = X), n(3, k);
  }
  function te(X) {
    pe.call(this, o, X);
  }
  function U(X) {
    (k = X), n(3, k);
  }
  function ee(X) {
    pe.call(this, o, X);
  }
  function Ie(X) {
    (k = X), n(3, k);
  }
  function de(X) {
    pe.call(this, o, X);
  }
  function $e(X) {
    (k = X), n(3, k);
  }
  function Se(X) {
    pe.call(this, o, X);
  }
  function Ce(X) {
    (k = X), n(3, k);
  }
  function W(X) {
    pe.call(this, o, X);
  }
  function he(X) {
    (k = X), n(3, k);
  }
  function Ee(X) {
    pe.call(this, o, X);
  }
  function Ve(X) {
    (k = X), n(3, k);
  }
  function He(X) {
    pe.call(this, o, X);
  }
  function Oe(X) {
    (k = X), n(3, k);
  }
  function ge(X) {
    pe.call(this, o, X);
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty[0] & 131072) {
        e: n(10, (t = p?.switchTabShortcutKeys ?? []));
      }
      if (o.$$.dirty[0] & 131072) {
        e: n(9, (s = p?.globalSearchShortcutKeys ?? []));
      }
      if (o.$$.dirty[0] & 131072) {
        e: n(8, (i = p?.manageSessionShortcutKeys ?? []));
      }
      if (o.$$.dirty[0] & 131072) {
        e: n(7, (l = p?.openInSplitViewShortcutKeys ?? []));
      }
      if (o.$$.dirty[0] & 131072) {
        e: n(1, (a = p?.completedList ?? []));
      }
      if (o.$$.dirty[0] & 131072) {
        e: n(2, (r = p?.progress ?? 0.12));
      }
      if (o.$$.dirty[0] & 131072) {
        e: n(6, (u = p?.videosReadyToUse));
      }
      if (o.$$.dirty[0] & 4) {
        e: n(5, (f = r === 1));
      }
      if (o.$$.dirty[0] & 2) {
        e: n(4, (m = a.length < g.length - ci.length));
      }
      if (o.$$.dirty[0] & 1) {
        e: b && $();
      }
    }),
    [
      b,
      a,
      r,
      k,
      m,
      f,
      u,
      l,
      i,
      s,
      t,
      g,
      v,
      z,
      S,
      N,
      A,
      p,
      B,
      V,
      q,
      le,
      J,
      ie,
      te,
      U,
      ee,
      Ie,
      de,
      $e,
      Se,
      Ce,
      W,
      he,
      Ee,
      Ve,
      He,
      Oe,
      ge,
    ]
  );
}
var Os = class extends x {
    constructor(e) {
      super(), D(this, e, qd, Od, P, {}, dd, [-1, -1]);
    }
  },
  nr = Os;
function Bd(o) {
  R(
    o,
    "svelte-15nb2ld",
    ".help.svelte-15nb2ld{display:flex;flex-direction:column;height:100%}.title-header.svelte-15nb2ld{color:var(--help-second-title-color);font-size:10px;font-weight:500;margin:16px 6px 5px;letter-spacing:0.02em;line-height:16px;text-transform:uppercase}.help-content.svelte-15nb2ld{margin:0 8px;flex-grow:1}.support-feedback.svelte-15nb2ld{display:flex;justify-content:space-between;gap:10px}"
  );
}
function Pd(o) {
  let e, n;
  return (
    (e = new nr({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Dd(o) {
  let e, n, t, s;
  return (
    (t = new vi({ props: { isSidecar: !0, gateway: H } })),
    {
      c() {
        (e = T("div")),
          (e.textContent = `${L("sidecar_help__getting_started")}`),
          (n = M()),
          I(t.$$.fragment),
          c(e, "class", "title-header svelte-15nb2ld");
      },
      m(i, l) {
        w(i, e, l), w(i, n, l), C(t, i, l), (s = !0);
      },
      p: j,
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(e), i && y(n), E(t, i);
      },
    }
  );
}
function xd(o) {
  let e, n;
  return (
    (e = new Hl({ props: { width: "23", height: "23" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Fd(o) {
  let e, n;
  return (
    (e = new ql({ props: { width: "23", height: "23" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Gd(o) {
  let e, n;
  return (
    (e = new Ol({ props: { width: "23", height: "23" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Kd(o) {
  let e, n;
  return (
    (e = new hi({ props: { width: "23", height: "23" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Rd(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le = [Dd, Pd],
    J = [];
  function ie(te, U) {
    return te[1] ? 0 : 1;
  }
  return (
    (t = ie(o, -1)),
    (s = J[t] = le[t](o)),
    (r = new Ut({
      props: {
        textHelpLink: L("sidecar_help__learning_link_text"),
        withArrow: !0,
        urlLink: o[2]?.learningCenter ?? "",
        dataTestId: "sidecar-help.help-center-link",
        $$slots: { default: [xd] },
        $$scope: { ctx: o },
      },
    })),
    r.$on("click", o[4]),
    (f = new Ut({
      props: {
        textHelpLink: L("sidecar_help__whats_new_link_text"),
        withArrow: !0,
        urlLink: o[2]?.whatsNew ?? "",
        dataTestId: "sidecar-help.what-is-new-link",
        $$slots: { default: [Fd] },
        $$scope: { ctx: o },
      },
    })),
    f.$on("click", o[5]),
    (b = new Ut({
      props: {
        textHelpLink: L("sidecar_help__feedback_link_text"),
        urlLink: o[0]?.feedbackUrl ?? "",
        withArrow: !1,
        dataTestId: "sidecar-help.feedback-link",
        $$slots: { default: [Gd] },
        $$scope: { ctx: o },
      },
    })),
    b.$on("click", o[6]),
    (k = new Ut({
      props: {
        textHelpLink: L("sidecar_help__discord_link_text"),
        urlLink: o[2]?.discordCommunity ?? "",
        withArrow: !1,
        dataTestId: "sidecar-help.sidekick-community-link",
        $$slots: { default: [Kd] },
        $$scope: { ctx: o },
      },
    })),
    k.$on("click", o[7]),
    (A = new Pl({})),
    (V = new jl({})),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          s.c(),
          (i = M()),
          (l = T("div")),
          (l.textContent = `${L("sidecar_help__support_and_feedback")}`),
          (a = M()),
          I(r.$$.fragment),
          (u = M()),
          I(f.$$.fragment),
          (m = M()),
          (p = T("div")),
          (p.textContent = `${L("sidecar_help__support_and_feedback")}`),
          (g = M()),
          (v = T("div")),
          I(b.$$.fragment),
          ($ = M()),
          I(k.$$.fragment),
          (z = M()),
          (S = T("div")),
          (S.textContent = `${L("sidecar_help__shortcuts")}`),
          (N = M()),
          I(A.$$.fragment),
          (B = M()),
          I(V.$$.fragment),
          c(l, "class", "title-header svelte-15nb2ld"),
          c(p, "class", "title-header svelte-15nb2ld"),
          c(v, "class", "support-feedback svelte-15nb2ld"),
          c(S, "class", "title-header svelte-15nb2ld"),
          c(n, "class", "help-content svelte-15nb2ld"),
          c(e, "class", "help svelte-15nb2ld");
      },
      m(te, U) {
        w(te, e, U),
          h(e, n),
          J[t].m(n, null),
          h(n, i),
          h(n, l),
          h(n, a),
          C(r, n, null),
          h(n, u),
          C(f, n, null),
          h(n, m),
          h(n, p),
          h(n, g),
          h(n, v),
          C(b, v, null),
          h(v, $),
          C(k, v, null),
          h(n, z),
          h(n, S),
          h(n, N),
          C(A, n, null),
          h(e, B),
          C(V, e, null),
          (q = !0);
      },
      p(te, [U]) {
        let ee = t;
        (t = ie(te, U)),
          t === ee
            ? J[t].p(te, U)
            : (G(),
              _(J[ee], 1, 1, () => {
                J[ee] = null;
              }),
              K(),
              (s = J[t]),
              s ? s.p(te, U) : ((s = J[t] = le[t](te)), s.c()),
              d(s, 1),
              s.m(n, i));
        let Ie = {};
        U & 4 && (Ie.urlLink = te[2]?.learningCenter ?? ""),
          U & 256 && (Ie.$$scope = { dirty: U, ctx: te }),
          r.$set(Ie);
        let de = {};
        U & 4 && (de.urlLink = te[2]?.whatsNew ?? ""),
          U & 256 && (de.$$scope = { dirty: U, ctx: te }),
          f.$set(de);
        let $e = {};
        U & 1 && ($e.urlLink = te[0]?.feedbackUrl ?? ""),
          U & 256 && ($e.$$scope = { dirty: U, ctx: te }),
          b.$set($e);
        let Se = {};
        U & 4 && (Se.urlLink = te[2]?.discordCommunity ?? ""),
          U & 256 && (Se.$$scope = { dirty: U, ctx: te }),
          k.$set(Se);
      },
      i(te) {
        q ||
          (d(s),
          d(r.$$.fragment, te),
          d(f.$$.fragment, te),
          d(b.$$.fragment, te),
          d(k.$$.fragment, te),
          d(A.$$.fragment, te),
          d(V.$$.fragment, te),
          (q = !0));
      },
      o(te) {
        _(s),
          _(r.$$.fragment, te),
          _(f.$$.fragment, te),
          _(b.$$.fragment, te),
          _(k.$$.fragment, te),
          _(A.$$.fragment, te),
          _(V.$$.fragment, te),
          (q = !1);
      },
      d(te) {
        te && y(e), J[t].d(), E(r), E(f), E(b), E(k), E(A), E(V);
      },
    }
  );
}
function Ud(o, e, n) {
  let t,
    s,
    i,
    l = H.stores.helpPanel;
  ue(o, l, (m) => n(0, (i = m)));
  let a = () =>
      H.actions.sendAnalyticsEvent("help.help-center-clicked", void 0),
    r = () => H.actions.sendAnalyticsEvent("help.whats-new-clicked", void 0),
    u = () => H.actions.sendAnalyticsEvent("help.feedback-clicked", void 0),
    f = () =>
      H.actions.sendAnalyticsEvent("help.join-community-clicked", void 0);
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(2, (t = i?.helpLinks));
      }
      if (o.$$.dirty & 1) {
        e: n(1, (s = i?.useExploreSidekickV2));
      }
    }),
    [i, s, t, l, a, r, u, f]
  );
}
var qs = class extends x {
    constructor(e) {
      super(), D(this, e, Ud, Rd, P, {}, Bd);
    }
  },
  sr = qs;
function Wd(o) {
  let e, n;
  return (
    (e = new sr({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Zd(o) {
  let e = L("sidecar_help__title") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Xd(o) {
  let e, n;
  return (
    (e = new pt({
      props: {
        slot: "header",
        closeTooltipText: L("sidecar_help__close_help"),
        useCrossIcon: o[0],
        $$slots: { default: [Zd] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[2]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.useCrossIcon = t[0]),
          s & 16 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Yd(o) {
  let e, n;
  return (
    (e = new tt({
      props: { $$slots: { header: [Xd], default: [Wd] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 17 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Jd(o, e, n) {
  let t,
    { isFloatingSidecar: s = !1 } = e,
    i = H.stores.sidecar;
  ue(o, i, (a) => n(3, (t = a))),
    Me(() => {
      Pe(
        t?.mode === "help",
        `Failed to mount sidecar view: mode must be equal ${"help"}, but received ${
          t?.mode
        }`
      );
      let { source: a } = t;
      return (
        H.actions.sendAnalyticsEvent("help.auto-opened", { source: a }),
        H.actions.explore("help"),
        () => {
          H.actions.sendAnalyticsEvent("help.auto-closed", { source: a });
        }
      );
    });
  function l(a) {
    pe.call(this, o, a);
  }
  return (
    (o.$$set = (a) => {
      "isFloatingSidecar" in a && n(0, (s = a.isFloatingSidecar));
    }),
    [s, i, l]
  );
}
var Bs = class extends x {
    constructor(e) {
      super(), D(this, e, Jd, Yd, P, { isFloatingSidecar: 0 });
    }
  },
  Ln = Bs;
O();
O();
O();
O();
function Qd(o) {
  R(
    o,
    "svelte-1t9f3xx",
    ".chevron.svelte-1t9f3xx{width:12px;height:12px;display:flex;align-items:center;justify-content:center;transition:transform 100ms ease}.chevron.down.svelte-1t9f3xx{transform:rotate(90deg)}.chevron.up.svelte-1t9f3xx{transform:rotate(270deg)}"
  );
}
function em(o) {
  let e, n, t, s;
  return (
    (n = new kn({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", (t = De(`chevron ${o[0]}`) + " svelte-1t9f3xx"));
      },
      m(i, l) {
        w(i, e, l), C(n, e, null), (s = !0);
      },
      p(i, [l]) {
        (!s ||
          (l & 1 && t !== (t = De(`chevron ${i[0]}`) + " svelte-1t9f3xx"))) &&
          c(e, "class", t);
      },
      i(i) {
        s || (d(n.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(n.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(e), E(n);
      },
    }
  );
}
function tm(o, e, n) {
  let { direction: t = "down" } = e;
  return (
    (o.$$set = (s) => {
      "direction" in s && n(0, (t = s.direction));
    }),
    [t]
  );
}
var Ds = class extends x {
    constructor(e) {
      super(), D(this, e, tm, em, P, { direction: 0 }, Qd);
    }
  },
  ir = Ds;
O();
O();
O();
var Fe = {
  pinned: "pinned",
  usual: "usual",
  empty: "empty",
  ignored: "ignored",
};
O();
function nm(o) {
  R(
    o,
    "svelte-1cec2oz",
    ".item.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz{display:flex;align-items:center;position:relative;border-radius:4px;margin-bottom:3px;width:100%}.item.svelte-1cec2oz .actions.svelte-1cec2oz.svelte-1cec2oz{min-width:52px;padding-right:4px}.item.svelte-1cec2oz .actions.hidden.svelte-1cec2oz.svelte-1cec2oz{opacity:0}.item.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz:hover{background-color:var(--session-hover)}.item.svelte-1cec2oz:hover .actions.hidden.svelte-1cec2oz.svelte-1cec2oz{opacity:1}.item.is-active.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz{background-color:var(--active-session-bg)}.item.is-active.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz:hover{background-color:var(--active-session-bg)}.item.is-selected.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz{background-color:var(--session-selected)}.item.is-selected.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz:hover{background-color:var(--session-selected)}.item.hidden.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz{display:none}.item.with-padding.svelte-1cec2oz.svelte-1cec2oz.svelte-1cec2oz{padding-left:8px}.item.svelte-1cec2oz>a.svelte-1cec2oz.svelte-1cec2oz{position:relative;display:block;flex:1;text-decoration:none;color:inherit;min-height:32px;padding:8px 0 8px 32px;overflow:hidden}.item.svelte-1cec2oz>a.svelte-1cec2oz>.icon.svelte-1cec2oz{width:16px;height:16px;display:block;margin-right:8px;position:absolute;top:50%;left:8px;transform:translateY(-50%)}@media(max-width: 160px){.item.svelte-1cec2oz>a.svelte-1cec2oz>.icon.svelte-1cec2oz{left:50%;transform:translate3d(-50%, -50%, 0);margin:0}}.item.svelte-1cec2oz>a.svelte-1cec2oz>.name.svelte-1cec2oz{display:block;flex:1 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--session-link-text-color)}@media(max-width: 160px){.item.svelte-1cec2oz>a.svelte-1cec2oz>.name.svelte-1cec2oz{display:none}}@media(max-width: 160px){.item.svelte-1cec2oz>a.svelte-1cec2oz.svelte-1cec2oz{padding:0;width:100%;min-width:100%}}"
  );
}
var sm = (o) => ({}),
  lr = (o) => ({}),
  om = (o) => ({}),
  rr = (o) => ({});
function im(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v = o[15].icon,
    b = be(v, o, o[14], rr),
    $ = o[15].actions,
    k = be($, o, o[14], lr);
  return {
    c() {
      (e = T("li")),
        (n = T("a")),
        (t = T("div")),
        b && b.c(),
        (s = M()),
        (i = T("span")),
        (l = F(o[2])),
        (a = M()),
        (r = T("div")),
        k && k.c(),
        c(t, "class", "icon svelte-1cec2oz"),
        c(t, "data-testid", "session-tab.icon"),
        c(i, "class", "name svelte-1cec2oz"),
        c(i, "data-testid", "session-tab.name"),
        c(n, "href", o[4]),
        c(n, "data-testid", "session-tab.link"),
        c(n, "class", "svelte-1cec2oz"),
        c(
          r,
          "class",
          (u = De(`actions ${o[10] ? "hidden" : ""}`) + " svelte-1cec2oz")
        ),
        c(
          e,
          "class",
          (f =
            De(`item ${o[3]} ${o[9] ? "with-padding" : ""}`) +
            " svelte-1cec2oz")
        ),
        c(e, "data-session-tab-id", o[7]),
        c(e, "data-session-id", o[8]),
        c(e, "data-drag-subgroup", o[5]),
        c(e, "data-testid", o[6]),
        oe(e, "is-active", o[0]),
        oe(e, "is-selected", o[1]);
    },
    m(z, S) {
      w(z, e, S),
        h(e, n),
        h(n, t),
        b && b.m(t, null),
        h(n, s),
        h(n, i),
        h(i, l),
        o[16](n),
        h(e, a),
        h(e, r),
        k && k.m(r, null),
        (m = !0),
        p ||
          ((g = [
            Z(n, "dblclick", ze(o[17])),
            Z(n, "click", ze(o[18])),
            Z(e, "contextmenu", je(ze(o[13]))),
            Z(e, "mouseleave", o[19]),
            Z(e, "mouseenter", o[20]),
          ]),
          (p = !0));
    },
    p(z, [S]) {
      b &&
        b.p &&
        (!m || S & 16384) &&
        ke(b, v, z, z[14], m ? ve(v, z[14], S, om) : we(z[14]), rr),
        (!m || S & 4) && ae(l, z[2]),
        (!m || S & 16) && c(n, "href", z[4]),
        k &&
          k.p &&
          (!m || S & 16384) &&
          ke(k, $, z, z[14], m ? ve($, z[14], S, sm) : we(z[14]), lr),
        (!m ||
          (S & 1024 &&
            u !==
              (u =
                De(`actions ${z[10] ? "hidden" : ""}`) + " svelte-1cec2oz"))) &&
          c(r, "class", u),
        (!m ||
          (S & 520 &&
            f !==
              (f =
                De(`item ${z[3]} ${z[9] ? "with-padding" : ""}`) +
                " svelte-1cec2oz"))) &&
          c(e, "class", f),
        (!m || S & 128) && c(e, "data-session-tab-id", z[7]),
        (!m || S & 256) && c(e, "data-session-id", z[8]),
        (!m || S & 32) && c(e, "data-drag-subgroup", z[5]),
        (!m || S & 64) && c(e, "data-testid", z[6]),
        (!m || S & 521) && oe(e, "is-active", z[0]),
        (!m || S & 522) && oe(e, "is-selected", z[1]);
    },
    i(z) {
      m || (d(b, z), d(k, z), (m = !0));
    },
    o(z) {
      _(b, z), _(k, z), (m = !1);
    },
    d(z) {
      z && y(e), b && b.d(z), o[16](null), k && k.d(z), (p = !1), Te(g);
    },
  };
}
function lm(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    i = ye(),
    { isActive: l = !1 } = e,
    { isSelected: a = !1 } = e,
    { name: r = "" } = e,
    { className: u = "" } = e,
    { href: f = "#" } = e,
    { dragSubGroup: m = Fe.empty } = e,
    { dataTestId: p = "" } = e,
    { sessionTabId: g = null } = e,
    { sessionId: v = null } = e,
    { usePadding: b = !0 } = e,
    { showActionsOnHover: $ = !1 } = e,
    k,
    z = (q) => {
      k.blur(), i("contextmenu", q);
    };
  function S(q) {
    _e[q ? "unshift" : "push"](() => {
      (k = q), n(11, k);
    });
  }
  let N = () => i("dbclick"),
    A = () => i("click"),
    B = () => i("mouseleave"),
    V = () => i("mouseenter");
  return (
    (o.$$set = (q) => {
      "isActive" in q && n(0, (l = q.isActive)),
        "isSelected" in q && n(1, (a = q.isSelected)),
        "name" in q && n(2, (r = q.name)),
        "className" in q && n(3, (u = q.className)),
        "href" in q && n(4, (f = q.href)),
        "dragSubGroup" in q && n(5, (m = q.dragSubGroup)),
        "dataTestId" in q && n(6, (p = q.dataTestId)),
        "sessionTabId" in q && n(7, (g = q.sessionTabId)),
        "sessionId" in q && n(8, (v = q.sessionId)),
        "usePadding" in q && n(9, (b = q.usePadding)),
        "showActionsOnHover" in q && n(10, ($ = q.showActionsOnHover)),
        "$$scope" in q && n(14, (s = q.$$scope));
    }),
    [l, a, r, u, f, m, p, g, v, b, $, k, i, z, s, t, S, N, A, B, V]
  );
}
var xs = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          lm,
          im,
          P,
          {
            isActive: 0,
            isSelected: 1,
            name: 2,
            className: 3,
            href: 4,
            dragSubGroup: 5,
            dataTestId: 6,
            sessionTabId: 7,
            sessionId: 8,
            usePadding: 9,
            showActionsOnHover: 10,
          },
          nm
        );
    }
  },
  jt = xs;
function rm(o) {
  R(
    o,
    "svelte-15btsbb",
    ".icon.svelte-15btsbb{display:block;position:absolute;height:16px;width:16px}.actions.svelte-15btsbb{transition:var(--animation-time);opacity:0}.actions.visible.svelte-15btsbb{opacity:1}"
  );
}
var am = (o) => ({}),
  ar = (o) => ({});
function cm(o) {
  let e, n, t;
  return (
    (n = new bn({ props: { favIconUrl: o[1].favIconUrl, appUrl: o[1].url } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "icon svelte-15btsbb"),
          c(e, "slot", "icon");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 2 && (l.favIconUrl = s[1].favIconUrl),
          i & 2 && (l.appUrl = s[1].url),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function um(o) {
  let e,
    n,
    t = o[11].actions,
    s = be(t, o, o[13], ar);
  return {
    c() {
      (e = T("div")),
        s && s.c(),
        c(e, "class", "actions svelte-15btsbb"),
        c(e, "slot", "actions"),
        oe(e, "visible", o[6] || o[0]);
    },
    m(i, l) {
      w(i, e, l), s && s.m(e, null), (n = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!n || l & 8192) &&
        ke(s, t, i, i[13], n ? ve(t, i[13], l, am) : we(i[13]), ar),
        (!n || l & 65) && oe(e, "visible", i[6] || i[0]);
    },
    i(i) {
      n || (d(s, i), (n = !0));
    },
    o(i) {
      _(s, i), (n = !1);
    },
    d(i) {
      i && y(e), s && s.d(i);
    },
  };
}
function fm(o) {
  let e, n;
  return (
    (e = new jt({
      props: {
        name: o[1].title,
        href: o[1].url,
        isActive: o[3],
        isSelected: o[4],
        sessionTabId: o[1].id,
        sessionId: o[2],
        dataTestId: "session-tab.item-" + o[1].id,
        dragSubGroup: o[7],
        usePadding: o[5],
        className: "session-tab",
        $$slots: { actions: [um], icon: [cm] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[8]),
    e.$on("contextmenu", o[12]),
    e.$on("mouseenter", o[9]),
    e.$on("mouseleave", o[10]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 2 && (i.name = t[1].title),
          s & 2 && (i.href = t[1].url),
          s & 8 && (i.isActive = t[3]),
          s & 16 && (i.isSelected = t[4]),
          s & 2 && (i.sessionTabId = t[1].id),
          s & 4 && (i.sessionId = t[2]),
          s & 2 && (i.dataTestId = "session-tab.item-" + t[1].id),
          s & 128 && (i.dragSubGroup = t[7]),
          s & 32 && (i.usePadding = t[5]),
          s & 8259 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function dm(o, e, n) {
  let t,
    { $$slots: s = {}, $$scope: i } = e,
    l = ye(),
    { sessionTab: a } = e,
    { sessionId: r } = e,
    { isActive: u } = e,
    { isSelected: f = !1 } = e,
    { usePadding: m = !0 } = e,
    { isHovered: p = !1 } = e,
    { areActionsVisible: g = !1 } = e,
    v = () => {
      H.actions.openSessionTab(a.id);
    },
    b = () => {
      n(0, (p = !0)), l("mouseenter");
    },
    $ = () => {
      n(0, (p = !1)), l("mouseleave");
    };
  function k(z) {
    pe.call(this, o, z);
  }
  return (
    (o.$$set = (z) => {
      "sessionTab" in z && n(1, (a = z.sessionTab)),
        "sessionId" in z && n(2, (r = z.sessionId)),
        "isActive" in z && n(3, (u = z.isActive)),
        "isSelected" in z && n(4, (f = z.isSelected)),
        "usePadding" in z && n(5, (m = z.usePadding)),
        "isHovered" in z && n(0, (p = z.isHovered)),
        "areActionsVisible" in z && n(6, (g = z.areActionsVisible)),
        "$$scope" in z && n(13, (i = z.$$scope));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 2) {
        e: n(7, (t = a.pinned ? Fe.pinned : Fe.usual));
      }
    }),
    [p, a, r, u, f, m, g, t, v, b, $, s, k, i]
  );
}
var Fs = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          dm,
          fm,
          P,
          {
            sessionTab: 1,
            sessionId: 2,
            isActive: 3,
            isSelected: 4,
            usePadding: 5,
            isHovered: 0,
            areActionsVisible: 6,
          },
          rm
        );
    }
  },
  Vt = Fs;
O();
var jn = (o, e) =>
  window.outerHeight - o < e ? window.outerHeight - (e + 50) : o;
var Vn = (o, e) => ({ x: o + 1, y: e + 8 });
O();
function mm(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M3 2H4V3H5V4H6V5H7V6H8V7H9V8H10V9H11V10H12V11H13V13H12V12H11V11H10V10H9V12H8V11H7V10H6V9H4V6H5V5H4V4H3V2ZM9 2.55469H8V5.55859H9V2.55469ZM10 5.50977H11V7.50195H10V5.50977ZM13 4.60938H12V9.73242H13V4.60938Z"
        ),
        c(n, "fill", "currentColor"),
        c(n, "fill-opacity", "0.72"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 16"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function pm(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Gs = class extends x {
    constructor(e) {
      super(), D(this, e, pm, mm, P, { width: 0, height: 1, className: 2 });
    }
  },
  Ks = Gs;
O();
function _m(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(n, "fill-rule", "evenodd"),
        c(n, "clip-rule", "evenodd"),
        c(
          n,
          "d",
          "M9 3H8V4H7V5H6V6H4V9H6V10H7V11H8V12H9V11V10V9V6V5V4V3ZM10 5.50586H11V9.49414H10V5.50586ZM13 4.43359H12V10.5664H13V4.43359Z"
        ),
        c(n, "fill", "currentColor"),
        c(n, "fill-opacity", "0.72"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 16 16"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function hm(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Rs = class extends x {
    constructor(e) {
      super(), D(this, e, hm, _m, P, { width: 0, height: 1, className: 2 });
    }
  },
  Us = Rs;
O();
function gm(o) {
  let e,
    n = o[5].default,
    t = be(n, o, o[7], null);
  return {
    c() {
      t && t.c();
    },
    m(s, i) {
      t && t.m(s, i), (e = !0);
    },
    p(s, i) {
      t &&
        t.p &&
        (!e || i & 128) &&
        ke(t, n, s, s[7], e ? ve(n, s[7], i, null) : we(s[7]), null);
    },
    i(s) {
      e || (d(t, s), (e = !0));
    },
    o(s) {
      _(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function bm(o) {
  let e, n, t, s;
  return (
    (e = new me({
      props: {
        mod: "round",
        dataTestId: o[1] || void 0,
        pressed: o[2],
        $$slots: { default: [gm] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[6]),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(n, "--round-button-bg", "transparent"),
          se(n, "--round-button-bg-hover", "var(--round-button-hover)"),
          se(n, "--round-button-bg-active", "var(--round-button-active)"),
          se(n, "--round-button-size", (t = o[0] + "px")),
          se(n, "--round-button-padding", o[3]);
      },
      m(i, l) {
        w(i, n, l), C(e, n, null), (s = !0);
      },
      p(i, [l]) {
        l & 1 && t !== (t = i[0] + "px") && se(n, "--round-button-size", t);
        let a = {};
        l & 2 && (a.dataTestId = i[1] || void 0),
          l & 4 && (a.pressed = i[2]),
          l & 128 && (a.$$scope = { dirty: l, ctx: i }),
          e.$set(a);
      },
      i(i) {
        s || (d(e.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && e && y(n), E(e, i);
      },
    }
  );
}
function vm(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { size: i = 16 } = e,
    { padding: l = null } = e,
    { dataTestId: a = null } = e,
    { pressed: r = !1 } = e,
    u = typeof l == "number" ? `${l}px` : void 0;
  function f(m) {
    pe.call(this, o, m);
  }
  return (
    (o.$$set = (m) => {
      "size" in m && n(0, (i = m.size)),
        "padding" in m && n(4, (l = m.padding)),
        "dataTestId" in m && n(1, (a = m.dataTestId)),
        "pressed" in m && n(2, (r = m.pressed)),
        "$$scope" in m && n(7, (s = m.$$scope));
    }),
    [i, a, r, u, l, t, f, s]
  );
}
var Ws = class extends x {
    constructor(e) {
      super(),
        D(this, e, vm, bm, P, {
          size: 0,
          padding: 4,
          dataTestId: 1,
          pressed: 2,
        });
    }
  },
  Wt = Ws;
function km(o) {
  R(
    o,
    "svelte-4x0kzd",
    ".actions.svelte-4x0kzd{display:flex;align-items:center;justify-content:flex-end;gap:2px;padding:0 4px}"
  );
}
function wm(o) {
  let e, n, t, s, i;
  (e = new Wt({
    props: {
      dataTestId: "vertical-session-tab.context-menu-button",
      pressed: o[4],
      $$slots: { default: [$m] },
      $$scope: { ctx: o },
    },
  })),
    e.$on("click", o[10]);
  let l = o[0].audible && cr(o);
  return (
    (s = new Wt({
      props: {
        dataTestId: "vertical-session-tab.close-button",
        $$slots: { default: [Em] },
        $$scope: { ctx: o },
      },
    })),
    s.$on("click", o[7]),
    {
      c() {
        I(e.$$.fragment), (n = M()), l && l.c(), (t = M()), I(s.$$.fragment);
      },
      m(a, r) {
        C(e, a, r),
          w(a, n, r),
          l && l.m(a, r),
          w(a, t, r),
          C(s, a, r),
          (i = !0);
      },
      p(a, r) {
        let u = {};
        r & 16 && (u.pressed = a[4]),
          r & 131072 && (u.$$scope = { dirty: r, ctx: a }),
          e.$set(u),
          a[0].audible
            ? l
              ? (l.p(a, r), r & 1 && d(l, 1))
              : ((l = cr(a)), l.c(), d(l, 1), l.m(t.parentNode, t))
            : l &&
              (G(),
              _(l, 1, 1, () => {
                l = null;
              }),
              K());
        let f = {};
        r & 131072 && (f.$$scope = { dirty: r, ctx: a }), s.$set(f);
      },
      i(a) {
        i || (d(e.$$.fragment, a), d(l), d(s.$$.fragment, a), (i = !0));
      },
      o(a) {
        _(e.$$.fragment, a), _(l), _(s.$$.fragment, a), (i = !1);
      },
      d(a) {
        E(e, a), a && y(n), l && l.d(a), a && y(t), E(s, a);
      },
    }
  );
}
function ym(o) {
  let e,
    n,
    t = o[0].audible && ur(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, i) {
      s[0].audible
        ? t
          ? (t.p(s, i), i & 1 && d(t, 1))
          : ((t = ur(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function $m(o) {
  let e, n;
  return (
    (e = new vn({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function cr(o) {
  let e,
    n,
    t,
    s,
    i = [Tm, Sm],
    l = [];
  function a(r, u) {
    return r[0].muted ? 0 : 1;
  }
  return (
    (e = a(o, -1)),
    (n = l[e] = i[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(r, u) {
        l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, u) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? l[e].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (n = l[e]),
              n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
              d(n, 1),
              n.m(t.parentNode, t));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        l[e].d(r), r && y(t);
      },
    }
  );
}
function Sm(o) {
  let e, n;
  return (
    (e = new Wt({
      props: {
        dataTestId: "vertical-session-tab.mute-button",
        padding: 0,
        $$slots: { default: [Im] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[9]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 131072 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Tm(o) {
  let e, n;
  return (
    (e = new Wt({
      props: {
        dataTestId: "vertical-session-tab.unmute-button",
        padding: 0,
        $$slots: { default: [Cm] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[8]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 131072 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Im(o) {
  let e, n;
  return (
    (e = new Us({ props: { width: "16px", height: "16px" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Cm(o) {
  let e, n;
  return (
    (e = new Ks({ props: { width: "16px", height: "16px" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Em(o) {
  let e, n;
  return (
    (e = new ct({ props: { width: "12", height: "12" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function ur(o) {
  let e,
    n,
    t,
    s,
    i = [Mm, zm],
    l = [];
  function a(r, u) {
    return r[0].muted ? 0 : 1;
  }
  return (
    (e = a(o, -1)),
    (n = l[e] = i[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(r, u) {
        l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, u) {
        let f = e;
        (e = a(r, u)),
          e !== f &&
            (G(),
            _(l[f], 1, 1, () => {
              l[f] = null;
            }),
            K(),
            (n = l[e]),
            n || ((n = l[e] = i[e](r)), n.c()),
            d(n, 1),
            n.m(t.parentNode, t));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        l[e].d(r), r && y(t);
      },
    }
  );
}
function zm(o) {
  let e, n;
  return (
    (e = new Us({ props: { width: "16px", height: "16px" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Mm(o) {
  let e, n;
  return (
    (e = new Ks({ props: { width: "16px", height: "16px" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Nm(o) {
  let e,
    n,
    t,
    s,
    i = [ym, wm],
    l = [];
  function a(r, u) {
    return r[5] ? 1 : 0;
  }
  return (
    (n = a(o, -1)),
    (t = l[n] = i[n](o)),
    {
      c() {
        (e = T("div")),
          t.c(),
          c(e, "slot", "actions"),
          c(e, "class", "actions svelte-4x0kzd");
      },
      m(r, u) {
        w(r, e, u), l[n].m(e, null), (s = !0);
      },
      p(r, u) {
        let f = n;
        (n = a(r, u)),
          n === f
            ? l[n].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (t = l[n]),
              t ? t.p(r, u) : ((t = l[n] = i[n](r)), t.c()),
              d(t, 1),
              t.m(e, null));
      },
      i(r) {
        s || (d(t), (s = !0));
      },
      o(r) {
        _(t), (s = !1);
      },
      d(r) {
        r && y(e), l[n].d();
      },
    }
  );
}
function Am(o) {
  let e, n, t;
  function s(l) {
    o[14](l);
  }
  let i = {
    sessionTab: o[0],
    sessionId: o[1],
    isActive: o[2],
    usePadding: !1,
    areActionsVisible: o[5] || o[0].muted || o[0].audible,
    $$slots: { actions: [Nm] },
    $$scope: { ctx: o },
  };
  return (
    o[3] !== void 0 && (i.isHovered = o[3]),
    (e = new Vt({ props: i })),
    _e.push(() => Ae(e, "isHovered", s)),
    e.$on("contextmenu", o[15]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(l, a) {
        C(e, l, a), (t = !0);
      },
      p(l, [a]) {
        let r = {};
        a & 1 && (r.sessionTab = l[0]),
          a & 2 && (r.sessionId = l[1]),
          a & 4 && (r.isActive = l[2]),
          a & 33 && (r.areActionsVisible = l[5] || l[0].muted || l[0].audible),
          a & 131121 && (r.$$scope = { dirty: a, ctx: l }),
          !n && a & 8 && ((n = !0), (r.isHovered = l[3]), Ne(() => (n = !1))),
          e.$set(r);
      },
      i(l) {
        t || (d(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        _(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
var Lm = 300;
function jm(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    { sessionTab: r } = e,
    { sessionId: u } = e,
    { isActive: f } = e,
    m = H.stores.verticalTabContextMenu;
  ue(o, m, (N) => n(13, (a = N)));
  let p = !1,
    g = null;
  Me(() => () => {
    g && clearTimeout(g);
  });
  let v = () => {
      H.actions.sendAnalyticsEvent("sessions.tab.close-clicked", void 0),
        H.actions.removeSessionTab(u, r.id);
    },
    b = () => {
      H.actions.changeSessionTabMuting(u, r.id, !1),
        H.actions.sendAnalyticsEvent("sessions.tab.mute-click", {
          "new-value": "unmuted",
        });
    },
    $ = () => {
      H.actions.changeSessionTabMuting(u, r.id, !0),
        H.actions.sendAnalyticsEvent("sessions.tab.mute-click", {
          "new-value": "muted",
        });
    },
    k = (N) => {
      if (s) {
        H.actions.hideTabContextMenu();
        return;
      }
      H.actions.showTabContextMenu({
        position: Vn(N.clientX, N.clientY),
        sessionId: u,
        tab: r,
        topOffset: jn(N.clientY, Lm),
      });
    };
  function z(N) {
    (p = N), n(3, p);
  }
  let S = (N) => k(N.detail);
  return (
    (o.$$set = (N) => {
      "sessionTab" in N && n(0, (r = N.sessionTab)),
        "sessionId" in N && n(1, (u = N.sessionId)),
        "isActive" in N && n(2, (f = N.isActive));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 8192) {
        e: n(12, (t = a?.idWithActiveMenu ?? null));
      }
      if (o.$$.dirty & 4097) {
        e: n(4, (s = r.id === t));
      }
      if (o.$$.dirty & 8208) {
        e: n(11, (i = s && a?.isHovered));
      }
      if (o.$$.dirty & 2056) {
        e: n(5, (l = i || p));
      }
      if (o.$$.dirty & 48) {
        e: s &&
          (g = setTimeout(() => {
            l || H.actions.hideTabContextMenu();
          }, 100));
      }
    }),
    [r, u, f, p, s, l, m, v, b, $, k, i, t, a, z, S]
  );
}
var Zs = class extends x {
    constructor(e) {
      super(),
        D(this, e, jm, Am, P, { sessionTab: 0, sessionId: 1, isActive: 2 }, km);
    }
  },
  Hn = Zs;
O();
O();
var On = "data-session-id",
  Js = "sessionId",
  Qs = "data-session-tab-id",
  eo = "sessionTabId",
  Ys = !1,
  Xs,
  fr = () => {
    Ys = !0;
  },
  dr =
    ({
      orderedSessionTab: o,
      movedSessionTabToSession: e,
      rerenderRequested: n,
      group: t = { name: "session-tabs", pull: !0, put: !0 },
    }) =>
    (s) => {
      let i = (a) => (r) => {
          if ((Xs?.(), !Ys)) {
            n();
            return;
          }
          a?.(r);
        },
        l = bi.create(s, {
          group: t,
          touchStartThreshold: 5,
          direction: "vertical",
          filter: ".create-new-tab-item",
          onStart: (a) => {
            (Ys = !1),
              a.item.addEventListener("drop", fr),
              (Xs = () => a.item.removeEventListener("drop", fr));
          },
          onAdd: i(e),
          onUpdate: i(o),
          onEnd: i(),
          setData: (a, r) => {
            let u = r.getAttribute(Qs);
            u !== null && a.setData(eo, u);
            let f = r.getAttribute(On);
            f !== null && a.setData(Js, f);
          },
          onMove: (a) => {
            let r = a.related.getAttribute("data-drag-subgroup");
            if (r === Fe.ignored) return !1;
            if (r === Fe.empty) return !a.willInsertAfter;
            let u = a.dragged.getAttribute("data-drag-subgroup");
            if (r === u) return !0;
            let f = [...a.to.children],
              m = f.indexOf(a.related);
            return u === Fe.pinned
              ? m === 0 && !a.willInsertAfter
              : u === Fe.usual
              ? m + 1 === f.length && a.willInsertAfter
              : !1;
          },
        });
      return {
        destroy() {
          l.destroy(), Xs?.();
        },
      };
    };
function Vm(o) {
  R(
    o,
    "svelte-1ekdvf",
    ".tabs.svelte-1ekdvf{list-style-type:none;padding:0;margin:0;margin-top:3px}.tabs.with-margin.svelte-1ekdvf{margin-left:16px}.empty.svelte-1ekdvf{color:#808080;padding:8px 8px 8px 28px;cursor:default}"
  );
}
var Hm = (o) => ({ createNewTabShortcutKeys: o & 64 }),
  mr = (o) => ({ createNewTabShortcutKeys: o[6] });
function pr(o, e, n) {
  let t = o.slice();
  return (t[16] = e[n]), t;
}
var Om = (o) => ({ sessionTab: o & 4 }),
  _r = (o) => ({ sessionTab: o[16] }),
  qm = (o) => ({ createNewTabShortcutKeys: o & 64 }),
  hr = (o) => ({ createNewTabShortcutKeys: o[6] });
function gr(o) {
  let e,
    n = o[14].actionTab,
    t = be(n, o, o[13], hr);
  return {
    c() {
      t && t.c();
    },
    m(s, i) {
      t && t.m(s, i), (e = !0);
    },
    p(s, i) {
      t &&
        t.p &&
        (!e || i & 8256) &&
        ke(t, n, s, s[13], e ? ve(n, s[13], i, qm) : we(s[13]), hr);
    },
    i(s) {
      e || (d(t, s), (e = !0));
    },
    o(s) {
      _(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function Bm(o) {
  let e = [],
    n = new Map(),
    t,
    s,
    i = o[2],
    l = (a) => a[16].id;
  for (let a = 0; a < i.length; a += 1) {
    let r = pr(o, i, a),
      u = l(r);
    n.set(u, (e[a] = br(u, r)));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1) e[a].c();
      t = fe();
    },
    m(a, r) {
      for (let u = 0; u < e.length; u += 1) e[u] && e[u].m(a, r);
      w(a, t, r), (s = !0);
    },
    p(a, r) {
      r & 8196 &&
        ((i = a[2]),
        G(),
        (e = Xe(e, r, l, 1, a, i, n, t.parentNode, Ze, br, t, pr)),
        K());
    },
    i(a) {
      if (!s) {
        for (let r = 0; r < i.length; r += 1) d(e[r]);
        s = !0;
      }
    },
    o(a) {
      for (let r = 0; r < e.length; r += 1) _(e[r]);
      s = !1;
    },
    d(a) {
      for (let r = 0; r < e.length; r += 1) e[r].d(a);
      a && y(t);
    },
  };
}
function Pm(o) {
  let e, n, t;
  return {
    c() {
      (e = T("li")),
        (n = F("Empty")),
        c(e, "class", "empty svelte-1ekdvf"),
        c(e, "data-drag-subgroup", (t = Fe.empty));
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p: j,
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function br(o, e) {
  let n,
    t,
    s = e[14].tab,
    i = be(s, e, e[13], _r);
  return {
    key: o,
    first: null,
    c() {
      (n = fe()), i && i.c(), (this.first = n);
    },
    m(l, a) {
      w(l, n, a), i && i.m(l, a), (t = !0);
    },
    p(l, a) {
      (e = l),
        i &&
          i.p &&
          (!t || a & 8196) &&
          ke(i, s, e, e[13], t ? ve(s, e[13], a, Om) : we(e[13]), _r);
    },
    i(l) {
      t || (d(i, l), (t = !0));
    },
    o(l) {
      _(i, l), (t = !1);
    },
    d(l) {
      l && y(n), i && i.d(l);
    },
  };
}
function vr(o) {
  let e,
    n = o[14].actionTab,
    t = be(n, o, o[13], mr);
  return {
    c() {
      t && t.c();
    },
    m(s, i) {
      t && t.m(s, i), (e = !0);
    },
    p(s, i) {
      t &&
        t.p &&
        (!e || i & 8256) &&
        ke(t, n, s, s[13], e ? ve(n, s[13], i, Hm) : we(s[13]), mr);
    },
    i(s) {
      e || (d(t, s), (e = !0));
    },
    o(s) {
      _(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function kr(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p = o[1] && o[4] && gr(o),
    g = [Pm, Bm],
    v = [];
  function b(k, z) {
    return k[2].length === 0 ? 0 : 1;
  }
  (t = b(o, -1)), (s = v[t] = g[t](o));
  let $ = o[1] && !o[4] && vr(o);
  return {
    c() {
      p && p.c(),
        (e = M()),
        (n = T("ul")),
        s.c(),
        (i = M()),
        $ && $.c(),
        c(
          n,
          "class",
          (l = De(`tabs ${o[3] ? "with-margin" : ""}`) + " svelte-1ekdvf")
        ),
        c(n, "data-session-id", o[0]),
        c(n, "data-testid", (a = "session-tabs-" + o[0]));
    },
    m(k, z) {
      p && p.m(k, z),
        w(k, e, z),
        w(k, n, z),
        v[t].m(n, null),
        h(n, i),
        $ && $.m(n, null),
        (u = !0),
        f || ((m = xe((r = o[8].call(null, n)))), (f = !0));
    },
    p(k, z) {
      k[1] && k[4]
        ? p
          ? (p.p(k, z), z & 18 && d(p, 1))
          : ((p = gr(k)), p.c(), d(p, 1), p.m(e.parentNode, e))
        : p &&
          (G(),
          _(p, 1, 1, () => {
            p = null;
          }),
          K());
      let S = t;
      (t = b(k, z)),
        t === S
          ? v[t].p(k, z)
          : (G(),
            _(v[S], 1, 1, () => {
              v[S] = null;
            }),
            K(),
            (s = v[t]),
            s ? s.p(k, z) : ((s = v[t] = g[t](k)), s.c()),
            d(s, 1),
            s.m(n, i)),
        k[1] && !k[4]
          ? $
            ? ($.p(k, z), z & 18 && d($, 1))
            : (($ = vr(k)), $.c(), d($, 1), $.m(n, null))
          : $ &&
            (G(),
            _($, 1, 1, () => {
              $ = null;
            }),
            K()),
        (!u ||
          (z & 8 &&
            l !==
              (l =
                De(`tabs ${k[3] ? "with-margin" : ""}`) + " svelte-1ekdvf"))) &&
          c(n, "class", l),
        (!u || z & 1) && c(n, "data-session-id", k[0]),
        (!u || (z & 1 && a !== (a = "session-tabs-" + k[0]))) &&
          c(n, "data-testid", a);
    },
    i(k) {
      u || (d(p), d(s), d($), (u = !0));
    },
    o(k) {
      _(p), _(s), _($), (u = !1);
    },
    d(k) {
      p && p.d(k), k && y(e), k && y(n), v[t].d(), $ && $.d(), (f = !1), m();
    },
  };
}
function Dm(o) {
  let e = o[5],
    n,
    t,
    s = kr(o);
  return {
    c() {
      s.c(), (n = fe());
    },
    m(i, l) {
      s.m(i, l), w(i, n, l), (t = !0);
    },
    p(i, [l]) {
      l & 32 && P(e, (e = i[5]))
        ? (G(),
          _(s, 1, 1, j),
          K(),
          (s = kr(i)),
          s.c(),
          d(s, 1),
          s.m(n.parentNode, n))
        : s.p(i, l);
    },
    i(i) {
      t || (d(s), (t = !0));
    },
    o(i) {
      _(s), (t = !1);
    },
    d(i) {
      i && y(n), s.d(i);
    },
  };
}
function xm(o, e, n) {
  let t,
    s,
    { $$slots: i = {}, $$scope: l } = e,
    { sessionId: a } = e,
    { isActiveSession: r } = e,
    { tabs: u } = e,
    { useMargin: f = !0 } = e,
    { name: m = "session-tab" } = e,
    { canPullItems: p = !0 } = e,
    { canPutItems: g = !0 } = e,
    { shouldOpenNewTabsOnTop: v = !1 } = e,
    b = H.stores.sessionsList;
  ue(o, b, (S) => n(12, (s = S)));
  let $ = 0,
    k = () => n(5, ($ = Math.random())),
    z = dr({
      group: { name: m, pull: p, put: g },
      orderedSessionTab: (S) => {
        if (S.oldIndex === void 0)
          throw new Error("oldIndex should be provided");
        if (S.newIndex === void 0)
          throw new Error("newIndex should be provided");
        H.actions.sendAnalyticsEvent("sessions.tab.dnd", { type: "reorder" }),
          H.actions.reorderSessionTab(a, S.oldIndex, S.newIndex);
      },
      movedSessionTabToSession: (S) => {
        let N = S.to.getAttribute(On);
        Pe(
          N,
          "Failed to handle session tab moved to session: no destination sessionId"
        );
        let A = S.item.getAttribute(On);
        Pe(
          A,
          "Failed to handle session tab moved to session: no departure sessionId"
        );
        let B = S.item.getAttribute(Qs);
        Pe(
          B,
          "Failed to handle session tab moved to session: no sessionTabId to move"
        ),
          H.actions.sendAnalyticsEvent("sessions.tab.dnd", {
            type: "move-to-session",
          }),
          H.actions.moveSessionTabToSession(B, N, A, S.newIndex),
          S.from.children.length === 0 && k();
      },
      rerenderRequested: k,
    });
  return (
    (o.$$set = (S) => {
      "sessionId" in S && n(0, (a = S.sessionId)),
        "isActiveSession" in S && n(1, (r = S.isActiveSession)),
        "tabs" in S && n(2, (u = S.tabs)),
        "useMargin" in S && n(3, (f = S.useMargin)),
        "name" in S && n(9, (m = S.name)),
        "canPullItems" in S && n(10, (p = S.canPullItems)),
        "canPutItems" in S && n(11, (g = S.canPutItems)),
        "shouldOpenNewTabsOnTop" in S && n(4, (v = S.shouldOpenNewTabsOnTop)),
        "$$scope" in S && n(13, (l = S.$$scope));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 4096) {
        e: n(6, (t = s?.createNewTabShortcutKeys ?? []));
      }
    }),
    [a, r, u, f, v, $, t, b, z, m, p, g, s, l, i]
  );
}
var to = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          xm,
          Dm,
          P,
          {
            sessionId: 0,
            isActiveSession: 1,
            tabs: 2,
            useMargin: 3,
            name: 9,
            canPullItems: 10,
            canPutItems: 11,
            shouldOpenNewTabsOnTop: 4,
          },
          Vm
        );
    }
  },
  ht = to;
function Fm(o) {
  R(
    o,
    "svelte-eiziio",
    ".tab-group.svelte-eiziio{position:relative;padding:0 5px}.tab-group.svelte-eiziio::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;border-radius:6px;background-color:var(--group-color);opacity:0.15;transition:background-color 300ms ease-in-out}.tab-group-header-button.svelte-eiziio{position:relative;cursor:pointer;display:flex;width:100%;padding:0 6px}.tab-group-title.svelte-eiziio{margin:6px 0;font-size:12px;line-height:28px;font-weight:600;text-transform:capitalize}@media(max-width: 160px){.tab-group-title.svelte-eiziio{display:none}}.tab-group-actions.svelte-eiziio{margin-left:auto;display:flex;justify-content:center;align-items:center;gap:4px}@media(max-width: 160px){.tab-group-actions.svelte-eiziio{margin:6px auto}.tab-group-header-button.svelte-eiziio{padding:0}}@media(max-width: 160px){.chevron.svelte-eiziio{display:none}}.truncatable-group-list.svelte-eiziio{overflow:hidden}.truncatable-group-list.full.svelte-eiziio{height:100%}.truncatable-group-list.truncated.svelte-eiziio{height:0}"
  );
}
function Gm(o) {
  let e, n;
  return (
    (e = new vn({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Km(o) {
  let e, n;
  return (
    (e = new Hn({
      props: {
        sessionId: o[0],
        sessionTab: o[14],
        isActive: Boolean(o[1] && o[1] === o[14].browserId),
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.sessionId = t[0]),
          s & 16384 && (i.sessionTab = t[14]),
          s & 16386 && (i.isActive = Boolean(t[1] && t[1] === t[14].browserId)),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Rm(o) {
  let e,
    n,
    t,
    s = o[2].title + "",
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k,
    z,
    S;
  return (
    (r = new me({
      props: {
        mod: "round",
        dataTestId: "vertical-session-tab.close-button",
        className: "context-menu-button",
        $$slots: { default: [Gm] },
        $$scope: { ctx: o },
      },
    })),
    r.$on("click", o[6]),
    (p = new ir({ props: { direction: o[3] ? "up" : "down" } })),
    (b = new ht({
      props: {
        name: "tab-groups",
        tabs: o[2].tabs,
        sessionId: o[0],
        isActiveSession: !0,
        useMargin: !1,
        $$slots: {
          tab: [
            Km,
            ({ sessionTab: N }) => ({ 14: N }),
            ({ sessionTab: N }) => (N ? 16384 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          (t = T("span")),
          (i = F(s)),
          (l = M()),
          (a = T("div")),
          (u = T("div")),
          I(r.$$.fragment),
          (f = M()),
          (m = T("div")),
          I(p.$$.fragment),
          (g = M()),
          (v = T("div")),
          I(b.$$.fragment),
          c(t, "class", "tab-group-title svelte-eiziio"),
          se(u, "display", "contents"),
          se(u, "--round-button-bg", "transparent"),
          se(u, "--round-button-bg-hover", "var(--round-button-hover)"),
          se(u, "--round-button-bg-active", "var(--round-button-active)"),
          se(u, "--round-button-size", "16px"),
          c(m, "class", "chevron svelte-eiziio"),
          c(a, "class", "tab-group-actions svelte-eiziio"),
          c(n, "class", "tab-group-header-button svelte-eiziio"),
          c(
            v,
            "class",
            ($ =
              "truncatable-group-list " +
              (o[3] ? "full" : "truncated") +
              " svelte-eiziio")
          ),
          c(e, "class", "tab-group svelte-eiziio"),
          se(e, "--group-color", o[2].color);
      },
      m(N, A) {
        w(N, e, A),
          h(e, n),
          h(n, t),
          h(t, i),
          h(n, l),
          h(n, a),
          h(a, u),
          C(r, u, null),
          h(a, f),
          h(a, m),
          C(p, m, null),
          h(e, g),
          h(e, v),
          C(b, v, null),
          (k = !0),
          z ||
            ((S = [
              Z(n, "mouseenter", o[7]),
              Z(n, "mouseleave", o[8]),
              Z(n, "click", o[5]),
            ]),
            (z = !0));
      },
      p(N, [A]) {
        (!k || A & 4) && s !== (s = N[2].title + "") && ae(i, s);
        let B = {};
        A & 32768 && (B.$$scope = { dirty: A, ctx: N }), r.$set(B);
        let V = {};
        A & 8 && (V.direction = N[3] ? "up" : "down"), p.$set(V);
        let q = {};
        A & 4 && (q.tabs = N[2].tabs),
          A & 1 && (q.sessionId = N[0]),
          A & 49155 && (q.$$scope = { dirty: A, ctx: N }),
          b.$set(q),
          (!k ||
            (A & 8 &&
              $ !==
                ($ =
                  "truncatable-group-list " +
                  (N[3] ? "full" : "truncated") +
                  " svelte-eiziio"))) &&
            c(v, "class", $),
          (!k || A & 4) && se(e, "--group-color", N[2].color);
      },
      i(N) {
        k ||
          (d(r.$$.fragment, N),
          d(p.$$.fragment, N),
          d(b.$$.fragment, N),
          (k = !0));
      },
      o(N) {
        _(r.$$.fragment, N), _(p.$$.fragment, N), _(b.$$.fragment, N), (k = !1);
      },
      d(N) {
        N && y(e), E(r), E(p), E(b), (z = !1), Te(S);
      },
    }
  );
}
function Um(o, e, n) {
  let t,
    s,
    i,
    l,
    { sessionId: a } = e,
    { activeTabId: r } = e,
    { group: u } = e,
    f = H.stores.verticalTabGroupContextMenu;
  ue(o, f, (k) => n(13, (l = k)));
  let m = !1,
    p = !0,
    g = () => {
      n(3, (p = !p));
    },
    v = (k) => {
      H.actions.showTabGroupContextMenu({
        position: Vn(k.clientX, k.clientY),
        sessionId: a,
        tabGroup: u,
        topOffset: jn(k.clientY, 200),
      });
    },
    b = () => {
      n(9, (m = !0));
    },
    $ = () => {
      n(9, (m = !1));
    };
  return (
    (o.$$set = (k) => {
      "sessionId" in k && n(0, (a = k.sessionId)),
        "activeTabId" in k && n(1, (r = k.activeTabId)),
        "group" in k && n(2, (u = k.group));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 8196) {
        e: n(11, (t = l?.idWithActiveMenu === u.id));
      }
      if (o.$$.dirty & 10240) {
        e: n(12, (s = t && l?.isHovered));
      }
      if (o.$$.dirty & 4608) {
        e: n(10, (i = s || m));
      }
      if (o.$$.dirty & 3072) {
        e: t &&
          setTimeout(() => {
            i || H.actions.hideTabGroupContextMenu();
          }, 100);
      }
    }),
    [a, r, u, p, f, g, v, b, $, m, i, t, s, l]
  );
}
var no = class extends x {
    constructor(e) {
      super(),
        D(this, e, Um, Rm, P, { sessionId: 0, activeTabId: 1, group: 2 }, Fm);
    }
  },
  wr = no;
O();
var Wm = (o) => ({}),
  yr = (o) => ({ slot: "actionTab" });
function Zm(o) {
  let e, n;
  return (
    (e = new Hn({
      props: {
        sessionId: o[2],
        sessionTab: o[7],
        isActive: Boolean(o[3] && o[3] === o[7].browserId),
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 4 && (i.sessionId = t[2]),
          s & 128 && (i.sessionTab = t[7]),
          s & 136 && (i.isActive = Boolean(t[3] && t[3] === t[7].browserId)),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Xm(o) {
  let e,
    n = o[5].actionTab,
    t = be(n, o, o[6], yr);
  return {
    c() {
      t && t.c();
    },
    m(s, i) {
      t && t.m(s, i), (e = !0);
    },
    p(s, i) {
      t &&
        t.p &&
        (!e || i & 64) &&
        ke(t, n, s, s[6], e ? ve(n, s[6], i, Wm) : we(s[6]), yr);
    },
    i(s) {
      e || (d(t, s), (e = !0));
    },
    o(s) {
      _(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function Ym(o) {
  let e, n;
  return (
    (e = new ht({
      props: {
        name: o[0],
        tabs: o[1],
        sessionId: o[2],
        isActiveSession: !0,
        canPutItems: !1,
        useMargin: !1,
        shouldOpenNewTabsOnTop: o[4],
        $$slots: {
          actionTab: [Xm],
          tab: [
            Zm,
            ({ sessionTab: t }) => ({ 7: t }),
            ({ sessionTab: t }) => (t ? 128 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 1 && (i.name = t[0]),
          s & 2 && (i.tabs = t[1]),
          s & 4 && (i.sessionId = t[2]),
          s & 16 && (i.shouldOpenNewTabsOnTop = t[4]),
          s & 204 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Jm(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { name: i } = e,
    { tabs: l } = e,
    { sessionId: a } = e,
    { activeTabId: r } = e,
    { shouldOpenNewTabsOnTop: u } = e;
  return (
    (o.$$set = (f) => {
      "name" in f && n(0, (i = f.name)),
        "tabs" in f && n(1, (l = f.tabs)),
        "sessionId" in f && n(2, (a = f.sessionId)),
        "activeTabId" in f && n(3, (r = f.activeTabId)),
        "shouldOpenNewTabsOnTop" in f && n(4, (u = f.shouldOpenNewTabsOnTop)),
        "$$scope" in f && n(6, (s = f.$$scope));
    }),
    [i, l, a, r, u, t, s]
  );
}
var so = class extends x {
    constructor(e) {
      super(),
        D(this, e, Jm, Ym, P, {
          name: 0,
          tabs: 1,
          sessionId: 2,
          activeTabId: 3,
          shouldOpenNewTabsOnTop: 4,
        });
    }
  },
  oo = so;
O();
function Qm(o) {
  R(
    o,
    "svelte-kj5a49",
    "@media(max-width: 160px){.plus-icon.svelte-kj5a49{margin-left:2px}}@media(max-width: 160px){.hotkey.svelte-kj5a49{display:none}}"
  );
}
function ep(o) {
  let e, n, t;
  return (
    (n = new nt({ props: { width: "11", height: "11" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "slot", "icon"),
          c(e, "class", "plus-icon svelte-kj5a49");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p: j,
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function tp(o) {
  let e, n, t;
  return (
    (n = new Le({ props: { keys: o[1] } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "hotkey svelte-kj5a49"),
          c(e, "slot", "actions");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 2 && (l.keys = s[1]), n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function np(o) {
  let e, n;
  return (
    (e = new jt({
      props: {
        sessionId: o[0],
        name: L("sidecar_sessions__new_tab"),
        className: "create-new-tab-item",
        dataTestId: "session-tabs-" + o[0] + ".create-new-tab-button",
        dragSubGroup: Fe.ignored,
        usePadding: !1,
        showActionsOnHover: !0,
        $$slots: { actions: [tp], icon: [ep] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[2]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 1 && (i.sessionId = t[0]),
          s & 1 &&
            (i.dataTestId = "session-tabs-" + t[0] + ".create-new-tab-button"),
          s & 10 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function sp(o, e, n) {
  let { sessionId: t } = e,
    { createNewTabShortcutKeys: s } = e,
    i = () => H.actions.createNewTab();
  return (
    (o.$$set = (l) => {
      "sessionId" in l && n(0, (t = l.sessionId)),
        "createNewTabShortcutKeys" in l &&
          n(1, (s = l.createNewTabShortcutKeys));
    }),
    [t, s, i]
  );
}
var io = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          sp,
          np,
          P,
          { sessionId: 0, createNewTabShortcutKeys: 1 },
          Qm
        );
    }
  },
  $r = io;
function op(o) {
  R(
    o,
    "svelte-rfs5w",
    ".session-content.svelte-rfs5w{display:flex;flex-direction:column;height:100%}.session-content.svelte-rfs5w:hover .create-new-tab-item{opacity:0.4}.session-content.svelte-rfs5w .create-new-tab-item{opacity:0;transition:opacity 0.2s ease}.session-content.svelte-rfs5w .create-new-tab-item:hover{opacity:1}.tabs-list.svelte-rfs5w{margin:6px 0}.tabs-list.pinned.svelte-rfs5w{background:var(--vertical-tabs-pinned-tabs-bg-color);border-radius:6px}.tabs-list-header.svelte-rfs5w{padding:0 8px}@media(max-width: 160px){.tabs-list-header.svelte-rfs5w{visibility:hidden;word-break:keep-all;white-space:nowrap}}.title.svelte-rfs5w{color:var(--vertical-tabs-title-color);font-size:10px;font-style:normal;font-weight:400;line-height:normal;text-transform:uppercase;-webkit-font-smoothing:antialiased;margin:10px 0}"
  );
}
function Sr(o, e, n) {
  let t = o.slice();
  return (t[7] = e[n]), t;
}
function Tr(o) {
  let e,
    n,
    t = [],
    s = new Map(),
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p = o[0].length && Ir(o),
    g = o[3],
    v = (b) => b[7].id;
  for (let b = 0; b < g.length; b += 1) {
    let $ = Sr(o, g, b),
      k = v($);
    s.set(k, (t[b] = Cr(k, $)));
  }
  return (
    (f = new oo({
      props: {
        name: "regular-session-tabs",
        tabs: o[1],
        sessionId: o[2],
        activeTabId: o[4],
        shouldOpenNewTabsOnTop: o[6],
        $$slots: { actionTab: [ip] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("div")), p && p.c(), (n = M());
        for (let b = 0; b < t.length; b += 1) t[b].c();
        (i = M()),
          (l = T("div")),
          (a = T("div")),
          (r = T("h3")),
          (r.textContent = `${L("sessions_vertical_tabs_view__header")}`),
          (u = M()),
          I(f.$$.fragment),
          c(r, "class", "title svelte-rfs5w"),
          c(a, "class", "tabs-list-header svelte-rfs5w"),
          c(l, "class", "tabs-list svelte-rfs5w"),
          c(e, "class", "session-content svelte-rfs5w");
      },
      m(b, $) {
        w(b, e, $), p && p.m(e, null), h(e, n);
        for (let k = 0; k < t.length; k += 1) t[k] && t[k].m(e, null);
        h(e, i), h(e, l), h(l, a), h(a, r), h(l, u), C(f, l, null), (m = !0);
      },
      p(b, $) {
        b[0].length
          ? p
            ? (p.p(b, $), $ & 1 && d(p, 1))
            : ((p = Ir(b)), p.c(), d(p, 1), p.m(e, n))
          : p &&
            (G(),
            _(p, 1, 1, () => {
              p = null;
            }),
            K()),
          $ & 28 &&
            ((g = b[3]),
            G(),
            (t = Xe(t, $, v, 1, b, g, s, e, Ze, Cr, i, Sr)),
            K());
        let k = {};
        $ & 2 && (k.tabs = b[1]),
          $ & 4 && (k.sessionId = b[2]),
          $ & 16 && (k.activeTabId = b[4]),
          $ & 64 && (k.shouldOpenNewTabsOnTop = b[6]),
          $ & 1060 && (k.$$scope = { dirty: $, ctx: b }),
          f.$set(k);
      },
      i(b) {
        if (!m) {
          d(p);
          for (let $ = 0; $ < g.length; $ += 1) d(t[$]);
          d(f.$$.fragment, b), (m = !0);
        }
      },
      o(b) {
        _(p);
        for (let $ = 0; $ < t.length; $ += 1) _(t[$]);
        _(f.$$.fragment, b), (m = !1);
      },
      d(b) {
        b && y(e), p && p.d();
        for (let $ = 0; $ < t.length; $ += 1) t[$].d();
        E(f);
      },
    }
  );
}
function Ir(o) {
  let e, n, t;
  return (
    (n = new oo({
      props: {
        name: "pinned-session-tabs",
        tabs: o[0],
        sessionId: o[2],
        activeTabId: o[4],
        shouldOpenNewTabsOnTop: o[6],
      },
    })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "tabs-list pinned svelte-rfs5w");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 1 && (l.tabs = s[0]),
          i & 4 && (l.sessionId = s[2]),
          i & 16 && (l.activeTabId = s[4]),
          i & 64 && (l.shouldOpenNewTabsOnTop = s[6]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Cr(o, e) {
  let n, t, s;
  return (
    (t = new wr({
      props: { sessionId: e[2], activeTabId: e[4], group: e[7] },
    })),
    {
      key: o,
      first: null,
      c() {
        (n = T("div")),
          I(t.$$.fragment),
          c(n, "class", "tabs-list svelte-rfs5w"),
          (this.first = n);
      },
      m(i, l) {
        w(i, n, l), C(t, n, null), (s = !0);
      },
      p(i, l) {
        e = i;
        let a = {};
        l & 4 && (a.sessionId = e[2]),
          l & 16 && (a.activeTabId = e[4]),
          l & 8 && (a.group = e[7]),
          t.$set(a);
      },
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(n), E(t);
      },
    }
  );
}
function ip(o) {
  let e, n;
  return (
    (e = new $r({
      props: {
        slot: "actionTab",
        sessionId: o[2],
        createNewTabShortcutKeys: o[5],
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 4 && (i.sessionId = t[2]),
          s & 32 && (i.createNewTabShortcutKeys = t[5]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function lp(o) {
  let e,
    n,
    t = o[2] && Tr(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[2]
        ? t
          ? (t.p(s, i), i & 4 && d(t, 1))
          : ((t = Tr(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function rp(o, e, n) {
  let { pinnedTabs: t = [] } = e,
    { regularTabs: s } = e,
    { sessionId: i } = e,
    { tabGroups: l = [] } = e,
    { activeTabId: a } = e,
    { createNewTabShortcutKeys: r } = e,
    { shouldOpenNewTabsOnTop: u } = e;
  return (
    (o.$$set = (f) => {
      "pinnedTabs" in f && n(0, (t = f.pinnedTabs)),
        "regularTabs" in f && n(1, (s = f.regularTabs)),
        "sessionId" in f && n(2, (i = f.sessionId)),
        "tabGroups" in f && n(3, (l = f.tabGroups)),
        "activeTabId" in f && n(4, (a = f.activeTabId)),
        "createNewTabShortcutKeys" in f &&
          n(5, (r = f.createNewTabShortcutKeys)),
        "shouldOpenNewTabsOnTop" in f && n(6, (u = f.shouldOpenNewTabsOnTop));
    }),
    [t, s, i, l, a, r, u]
  );
}
var lo = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          rp,
          lp,
          P,
          {
            pinnedTabs: 0,
            regularTabs: 1,
            sessionId: 2,
            tabGroups: 3,
            activeTabId: 4,
            createNewTabShortcutKeys: 5,
            shouldOpenNewTabsOnTop: 6,
          },
          op
        );
    }
  },
  Er = lo;
O();
function ap(o) {
  R(
    o,
    "svelte-mwwh55",
    ".footer.svelte-mwwh55{display:flex;align-items:center;padding:16px;width:100%;border-top:1px solid var(--vertical-tabs-border-color)}.text.svelte-mwwh55{margin-left:8px;font-size:12px;font-style:normal;font-weight:400;line-height:normal;-webkit-font-smoothing:antialiased}@media(max-width: 160px){.text.svelte-mwwh55{display:none}}.hotkey.svelte-mwwh55{margin-left:auto}@media(max-width: 160px){.hotkey.svelte-mwwh55{display:none}}.icon-wrapper.svelte-mwwh55{width:14px;height:14px;display:flex;justify-content:center;align-items:center}"
  );
}
function cp(o) {
  let e, n, t, s, i, l, a, r, u, f, m;
  return (
    (t = new nt({ props: { width: "10", height: "10" } })),
    (r = new Le({ props: { keys: o[0] } })),
    {
      c() {
        (e = T("button")),
          (n = T("div")),
          I(t.$$.fragment),
          (s = M()),
          (i = T("span")),
          (i.textContent = `${L("sessions_vertical_tabs_view__footer")}`),
          (l = M()),
          (a = T("div")),
          I(r.$$.fragment),
          c(n, "class", "icon-wrapper svelte-mwwh55"),
          c(i, "class", "text svelte-mwwh55"),
          c(a, "class", "hotkey svelte-mwwh55"),
          c(e, "class", "footer svelte-mwwh55");
      },
      m(p, g) {
        w(p, e, g),
          h(e, n),
          C(t, n, null),
          h(e, s),
          h(e, i),
          h(e, l),
          h(e, a),
          C(r, a, null),
          (u = !0),
          f || ((m = Z(e, "click", o[1])), (f = !0));
      },
      p(p, [g]) {
        let v = {};
        g & 1 && (v.keys = p[0]), r.$set(v);
      },
      i(p) {
        u || (d(t.$$.fragment, p), d(r.$$.fragment, p), (u = !0));
      },
      o(p) {
        _(t.$$.fragment, p), _(r.$$.fragment, p), (u = !1);
      },
      d(p) {
        p && y(e), E(t), E(r), (f = !1), m();
      },
    }
  );
}
function up(o, e, n) {
  let { createNewTabShortcutKeys: t } = e;
  function s(i) {
    pe.call(this, o, i);
  }
  return (
    (o.$$set = (i) => {
      "createNewTabShortcutKeys" in i && n(0, (t = i.createNewTabShortcutKeys));
    }),
    [t, s]
  );
}
var ro = class extends x {
    constructor(e) {
      super(), D(this, e, up, cp, P, { createNewTabShortcutKeys: 0 }, ap);
    }
  },
  zr = ro;
O();
O();
function fp(o) {
  let e, n, t, s, i, l, a;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("g")),
        (t = ne("path")),
        (s = ne("defs")),
        (i = ne("clipPath")),
        (l = ne("rect")),
        c(t, "id", "Vector"),
        c(
          t,
          "d",
          "M11.4675 0.681641L10.635 1.49914C10.5233 1.61106 10.4498 1.75544 10.425 1.91164L10.2675 2.92414L6.855 6.35914L4.995 5.99914C4.89512 5.99211 4.79488 5.99211 4.695 5.99914C4.29782 6.00081 3.91751 6.15995 3.6375 6.44164L2.4525 7.58164L6 11.1591L0.75 16.4091V17.2491H1.5L6.825 11.9541L10.41 15.5316L11.595 14.3541C11.7691 14.1787 11.8972 13.963 11.9678 13.7262C12.0385 13.4894 12.0496 13.2388 12 12.9966L11.6325 11.1291L15.0375 7.72414L16.05 7.56664C16.2195 7.54977 16.3782 7.47571 16.5 7.35664L17.3325 6.51664L11.4675 0.681641ZM14.865 6.60664L14.505 6.66664L14.25 6.92164L10.8375 10.3341L10.4175 10.7616L10.53 11.3541L10.905 13.2141C10.9173 13.2747 10.9141 13.3374 10.8957 13.3963C10.8774 13.4553 10.8445 13.5087 10.8 13.5516L10.4175 13.9416L4.0425 7.58164L4.4325 7.19164C4.50219 7.12166 4.59626 7.08134 4.695 7.07914H4.77L6.6375 7.45414L7.2225 7.57414L7.65 7.14664L11.0625 3.74914L11.325 3.48664L11.3775 3.12664L11.505 2.31664L15.675 6.48664L14.865 6.60664Z"
        ),
        c(t, "fill", "currentColor"),
        c(n, "id", "long-pin-icon"),
        c(n, "clip-path", "url(#clip0_3495_15027)"),
        c(l, "width", "18"),
        c(l, "height", "18"),
        c(l, "fill", "white"),
        c(i, "id", "clip0_3495_15027"),
        c(e, "class", (a = `icon ${o[2]}`)),
        c(e, "xmlns", "http://www.w3.org/2000/svg"),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 18 18"),
        c(e, "fill", "none");
    },
    m(r, u) {
      w(r, e, u), h(e, n), h(n, t), h(e, s), h(s, i), h(i, l);
    },
    p(r, [u]) {
      u & 4 && a !== (a = `icon ${r[2]}`) && c(e, "class", a),
        u & 1 && c(e, "width", r[0]),
        u & 2 && c(e, "height", r[1]);
    },
    i: j,
    o: j,
    d(r) {
      r && y(e);
    },
  };
}
function dp(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var ao = class extends x {
    constructor(e) {
      super(), D(this, e, dp, fp, P, { width: 0, height: 1, className: 2 });
    }
  },
  Mr = ao;
O();
O();
function mp(o) {
  R(
    o,
    "svelte-n1z7ow",
    ".avatar.svelte-n1z7ow.svelte-n1z7ow{--size:24px;display:flex;align-items:center;justify-content:center;width:var(--size);min-width:var(--size);height:var(--size);margin-right:6px;border-radius:50%}.avatar.is-temporary.svelte-n1z7ow.svelte-n1z7ow{background-color:rgb(0 0 0 / 0.08) !important}.avatar.svelte-n1z7ow>span.svelte-n1z7ow{width:1em;height:1em;font-weight:400;font-size:12px;line-height:1;text-transform:uppercase;color:#000;text-align:center}"
  );
}
function pp(o) {
  let e, n;
  return (
    (e = new In({ props: { width: "8", height: "12" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function _p(o) {
  let e, n;
  return {
    c() {
      (e = T("span")), (n = F(o[1])), c(e, "class", "svelte-n1z7ow");
    },
    m(t, s) {
      w(t, e, s), h(e, n);
    },
    p(t, s) {
      s & 2 && ae(n, t[1]);
    },
    i: j,
    o: j,
    d(t) {
      t && y(e);
    },
  };
}
function hp(o) {
  let e,
    n,
    t,
    s,
    i = [_p, pp],
    l = [];
  function a(r, u) {
    return r[0] ? 1 : 0;
  }
  return (
    (n = a(o, -1)),
    (t = l[n] = i[n](o)),
    {
      c() {
        (e = T("div")),
          t.c(),
          c(e, "class", "avatar svelte-n1z7ow"),
          c(e, "data-testid", "session-header.avatar"),
          se(e, "background-color", o[2]),
          oe(e, "is-temporary", o[0]);
      },
      m(r, u) {
        w(r, e, u), l[n].m(e, null), (s = !0);
      },
      p(r, [u]) {
        let f = n;
        (n = a(r, u)),
          n === f
            ? l[n].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (t = l[n]),
              t ? t.p(r, u) : ((t = l[n] = i[n](r)), t.c()),
              d(t, 1),
              t.m(e, null)),
          (!s || u & 4) && se(e, "background-color", r[2]),
          (!s || u & 1) && oe(e, "is-temporary", r[0]);
      },
      i(r) {
        s || (d(t), (s = !0));
      },
      o(r) {
        _(t), (s = !1);
      },
      d(r) {
        r && y(e), l[n].d();
      },
    }
  );
}
function gp(o, e, n) {
  let t,
    s,
    { isTemporary: i } = e,
    { sessionName: l = "" } = e;
  return (
    (o.$$set = (a) => {
      "isTemporary" in a && n(0, (i = a.isTemporary)),
        "sessionName" in a && n(3, (l = a.sessionName));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 8) {
        e: n(2, (t = xt(l) || "#fff"));
      }
      if (o.$$.dirty & 9) {
        e: n(1, (s = i ? "" : un(l ?? "")));
      }
    }),
    [i, s, t, l]
  );
}
var co = class extends x {
    constructor(e) {
      super(), D(this, e, gp, hp, P, { isTemporary: 0, sessionName: 3 }, mp);
    }
  },
  Ht = co;
O();
O();
O();
function bp(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p, g;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("rect")),
        (t = ne("animate")),
        (s = ne("animate")),
        (i = ne("animate")),
        (l = ne("rect")),
        (a = ne("animate")),
        (r = ne("animate")),
        (u = ne("animate")),
        (f = ne("rect")),
        (m = ne("animate")),
        (p = ne("animate")),
        (g = ne("animate")),
        c(t, "attributeName", "opacity"),
        c(t, "attributeType", "XML"),
        c(t, "values", "0.2; 1; .2"),
        c(t, "begin", "0s"),
        c(t, "dur", "0.6s"),
        c(t, "repeatCount", "indefinite"),
        c(s, "attributeName", "height"),
        c(s, "attributeType", "XML"),
        c(s, "values", "10; 20; 10"),
        c(s, "begin", "0s"),
        c(s, "dur", "0.6s"),
        c(s, "repeatCount", "indefinite"),
        c(i, "attributeName", "y"),
        c(i, "attributeType", "XML"),
        c(i, "values", "10; 5; 10"),
        c(i, "begin", "0s"),
        c(i, "dur", "0.6s"),
        c(i, "repeatCount", "indefinite"),
        c(n, "x", "0"),
        c(n, "y", "10"),
        c(n, "width", "4"),
        c(n, "height", "10"),
        c(n, "fill", "#FFF"),
        c(n, "opacity", "0.2"),
        c(a, "attributeName", "opacity"),
        c(a, "attributeType", "XML"),
        c(a, "values", "0.2; 1; .2"),
        c(a, "begin", "0.15s"),
        c(a, "dur", "0.6s"),
        c(a, "repeatCount", "indefinite"),
        c(r, "attributeName", "height"),
        c(r, "attributeType", "XML"),
        c(r, "values", "10; 20; 10"),
        c(r, "begin", "0.15s"),
        c(r, "dur", "0.6s"),
        c(r, "repeatCount", "indefinite"),
        c(u, "attributeName", "y"),
        c(u, "attributeType", "XML"),
        c(u, "values", "10; 5; 10"),
        c(u, "begin", "0.15s"),
        c(u, "dur", "0.6s"),
        c(u, "repeatCount", "indefinite"),
        c(l, "x", "8"),
        c(l, "y", "10"),
        c(l, "width", "4"),
        c(l, "height", "10"),
        c(l, "fill", "#FFF"),
        c(l, "opacity", "0.2"),
        c(m, "attributeName", "opacity"),
        c(m, "attributeType", "XML"),
        c(m, "values", "0.2; 1; .2"),
        c(m, "begin", "0.3s"),
        c(m, "dur", "0.6s"),
        c(m, "repeatCount", "indefinite"),
        c(p, "attributeName", "height"),
        c(p, "attributeType", "XML"),
        c(p, "values", "10; 20; 10"),
        c(p, "begin", "0.3s"),
        c(p, "dur", "0.6s"),
        c(p, "repeatCount", "indefinite"),
        c(g, "attributeName", "y"),
        c(g, "attributeType", "XML"),
        c(g, "values", "10; 5; 10"),
        c(g, "begin", "0.3s"),
        c(g, "dur", "0.6s"),
        c(g, "repeatCount", "indefinite"),
        c(f, "x", "16"),
        c(f, "y", "10"),
        c(f, "width", "4"),
        c(f, "height", "10"),
        c(f, "fill", "#FFF"),
        c(f, "opacity", "0.2"),
        c(e, "class", o[2]),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "x", "0px"),
        c(e, "y", "0px"),
        c(e, "viewBox", "0 0 24 30"),
        se(e, "enable-background", "new 0 0 50 50"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(v, b) {
      w(v, e, b),
        h(e, n),
        h(n, t),
        h(n, s),
        h(n, i),
        h(e, l),
        h(l, a),
        h(l, r),
        h(l, u),
        h(e, f),
        h(f, m),
        h(f, p),
        h(f, g);
    },
    p(v, [b]) {
      b & 4 && c(e, "class", v[2]),
        b & 1 && c(e, "width", v[0]),
        b & 2 && c(e, "height", v[1]);
    },
    i: j,
    o: j,
    d(v) {
      v && y(e);
    },
  };
}
function vp(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var uo = class extends x {
    constructor(e) {
      super(), D(this, e, vp, bp, P, { width: 0, height: 1, className: 2 });
    }
  },
  Nr = uo;
function kp(o) {
  R(
    o,
    "svelte-1kky3mm",
    ".name.svelte-1kky3mm.svelte-1kky3mm{padding-right:2px;margin-right:10px;color:var(--session-title-color);font-weight:600;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.is-temporary.svelte-1kky3mm .name.svelte-1kky3mm{font-style:italic}.is-active-session.session-hovered.svelte-1kky3mm .name.svelte-1kky3mm{max-width:100%}.avatar-and-name.svelte-1kky3mm.svelte-1kky3mm{display:flex;align-items:center;min-width:0}.count.svelte-1kky3mm.svelte-1kky3mm{margin-left:1em;color:var(--session-count-color);white-space:nowrap}.is-active-session.svelte-1kky3mm .count.svelte-1kky3mm{color:var(--accent-color)}.session-hovered.svelte-1kky3mm .count.svelte-1kky3mm{display:none}.save.svelte-1kky3mm.svelte-1kky3mm{font-size:11px;background:var(--activate-session-btn-bg);border:1px solid var(--activate-session-btn-border);border-radius:18px;padding:2px 10px;transition:border-color 100ms, background-color 100ms, color 100ms;margin-left:0.5em;min-height:22px}.save.svelte-1kky3mm.svelte-1kky3mm:hover{color:#fff;border-color:var(--activate-session-btn-border-hover);background-color:var(--accent-color)}.activate.svelte-1kky3mm.svelte-1kky3mm{font-size:11px;background:var(--activate-session-btn-bg);border:1px solid var(--activate-session-btn-border);border-radius:18px;padding:2px 10px;transition:border-color 100ms, background-color 100ms, color 100ms;min-height:22px;min-width:60px}.activate.svelte-1kky3mm.svelte-1kky3mm:disabled{background-color:var(--activate-session-btn-loading);border-color:var(--activate-session-btn-loading)}.activate.svelte-1kky3mm.svelte-1kky3mm:hover{color:#fff;border-color:var(--activate-session-btn-border-hover);background-color:var(--accent-color)}.right-part.svelte-1kky3mm.svelte-1kky3mm{display:flex;align-items:center}.right-part.svelte-1kky3mm .context-menu.svelte-1kky3mm{margin-left:6px;display:none}.right-part.svelte-1kky3mm .activate.svelte-1kky3mm{display:none}.right-part.is-open-context-menu.svelte-1kky3mm .context-menu.svelte-1kky3mm{display:flex;opacity:1}.header.svelte-1kky3mm.svelte-1kky3mm{display:flex;justify-content:space-between;align-items:center;position:relative;min-height:32px;padding:4px 8px;border-radius:4px}.header.svelte-1kky3mm.svelte-1kky3mm:hover{background-color:var(--session-hover)}.header.svelte-1kky3mm:hover .count.svelte-1kky3mm{display:none}.header.svelte-1kky3mm:hover .activate.svelte-1kky3mm{display:flex}.header.svelte-1kky3mm:hover .context-menu.svelte-1kky3mm{display:flex}.header.svelte-1kky3mm:not(:hover) .session-on-hover.svelte-1kky3mm{display:none}.header.is-active-session.svelte-1kky3mm.svelte-1kky3mm{background-color:var(--active-session-bg)}.header.is-active-session.is-open-context-menu.svelte-1kky3mm.svelte-1kky3mm{background-color:var(--active-session-bg)}.header.is-active-session.svelte-1kky3mm.svelte-1kky3mm:hover{background-color:var(--active-session-bg)}.header.is-drag-enter.svelte-1kky3mm.svelte-1kky3mm::after{width:100%;left:0;height:100%;position:absolute;content:'';border:2px solid var(--accent-color);border-radius:4px}.header.is-expanded.svelte-1kky3mm.svelte-1kky3mm::before{border:4px solid transparent;border-top:7px solid #b2b2b2;border-bottom:0;left:11px}.header.is-expanded.svelte-1kky3mm.svelte-1kky3mm:hover::before{border-top-color:#808080;border-left-color:transparent}.header.is-open-context-menu.svelte-1kky3mm.svelte-1kky3mm{background-color:var(--session-hover)}.header.is-open-context-menu.svelte-1kky3mm .count.svelte-1kky3mm{display:none}.toggler.svelte-1kky3mm.svelte-1kky3mm{--size:16px;width:var(--size);min-width:var(--size);height:var(--size);display:flex;align-items:center;justify-content:center;margin-left:3px;border-radius:50%}.toggler.svelte-1kky3mm.svelte-1kky3mm:hover{background-color:var(--round-button-hover)}.toggler.svelte-1kky3mm.svelte-1kky3mm:active{background-color:var(--round-button-active)}.toggler.is-expanded.svelte-1kky3mm.svelte-1kky3mm{transform:rotate(180deg)}.open-new-window.svelte-1kky3mm.svelte-1kky3mm{margin-left:0.5em}"
  );
}
function Ar(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a = [yp, wp],
    r = [];
  function u(f, m) {
    return f[14] ? 0 : 1;
  }
  return (
    (n = u(o, [-1, -1])),
    (t = r[n] = a[n](o)),
    {
      c() {
        (e = T("button")),
          t.c(),
          c(e, "class", "activate svelte-1kky3mm"),
          (e.disabled = o[14]),
          c(e, "aria-label", "Activate"),
          c(e, "data-testid", "session-header.activate-button");
      },
      m(f, m) {
        w(f, e, m),
          r[n].m(e, null),
          (s = !0),
          i || ((l = Z(e, "click", je(o[23]))), (i = !0));
      },
      p(f, m) {
        let p = n;
        (n = u(f, m)),
          n === p
            ? r[n].p(f, m)
            : (G(),
              _(r[p], 1, 1, () => {
                r[p] = null;
              }),
              K(),
              (t = r[n]),
              t ? t.p(f, m) : ((t = r[n] = a[n](f)), t.c()),
              d(t, 1),
              t.m(e, null)),
          (!s || m[0] & 16384) && (e.disabled = f[14]);
      },
      i(f) {
        s || (d(t), (s = !0));
      },
      o(f) {
        _(t), (s = !1);
      },
      d(f) {
        f && y(e), r[n].d(), (i = !1), l();
      },
    }
  );
}
function wp(o) {
  let e = L("sidecar_sessions__activate") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && y(n);
    },
  };
}
function yp(o) {
  let e, n;
  return (
    (e = new Nr({ props: { width: "10" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Lr(o) {
  let e, n, t;
  return {
    c() {
      (e = T("button")),
        (e.textContent = `${L("save")}`),
        c(e, "class", "save session-on-hover svelte-1kky3mm"),
        c(e, "data-testid", "session-header.save-button"),
        c(e, "aria-label", "Save session");
    },
    m(s, i) {
      w(s, e, i), n || ((t = Z(e, "click", je(o[24]))), (n = !0));
    },
    p: j,
    d(s) {
      s && y(e), (n = !1), t();
    },
  };
}
function jr(o) {
  let e, n, t;
  return (
    (n = new Qe({
      props: {
        tooltip: o[12]
          ? L("sidecar_sessions__open_session_window")
          : L("sidecar_sessions__open_in_window"),
        $$slots: { default: [Sp] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "open-new-window svelte-1kky3mm"),
          oe(e, "session-on-hover", !o[12]);
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i[0] & 4096 &&
          (l.tooltip = s[12]
            ? L("sidecar_sessions__open_session_window")
            : L("sidecar_sessions__open_in_window")),
          i[1] & 4 && (l.$$scope = { dirty: i, ctx: s }),
          n.$set(l),
          (!t || i[0] & 4096) && oe(e, "session-on-hover", !s[12]);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function $p(o) {
  let e, n;
  return (
    (e = new ki({ props: { width: "14", height: "13" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Sp(o) {
  let e, n, t;
  return (
    (e = new me({
      props: {
        mod: "round",
        dataTestId: "session-header.open-button",
        $$slots: { default: [$p] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[25]),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(n, "--round-button-bg", "transparent"),
          se(n, "--round-button-bg-hover", "transparent"),
          se(n, "--round-button-bg-active", "transparent");
      },
      m(s, i) {
        w(s, n, i), C(e, n, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i[1] & 4 && (l.$$scope = { dirty: i, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (d(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && e && y(n), E(e, s);
      },
    }
  );
}
function Vr(o) {
  let e,
    n,
    t = o[1] && Hr(o),
    s = o[2] && Or(o);
  return {
    c() {
      (e = T("span")),
        t && t.c(),
        (n = M()),
        s && s.c(),
        c(e, "class", "count svelte-1kky3mm"),
        oe(e, "is-active-session", o[1]);
    },
    m(i, l) {
      w(i, e, l), t && t.m(e, null), h(e, n), s && s.m(e, null);
    },
    p(i, l) {
      i[1]
        ? t
          ? t.p(i, l)
          : ((t = Hr(i)), t.c(), t.m(e, n))
        : t && (t.d(1), (t = null)),
        i[2]
          ? s
            ? s.p(i, l)
            : ((s = Or(i)), s.c(), s.m(e, null))
          : s && (s.d(1), (s = null)),
        l[0] & 2 && oe(e, "is-active-session", i[1]);
    },
    d(i) {
      i && y(e), t && t.d(), s && s.d();
    },
  };
}
function Hr(o) {
  let e;
  return {
    c() {
      (e = T("span")), (e.textContent = `${L("sidecar_sessions__active")}`);
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Or(o) {
  let e, n;
  return {
    c() {
      (e = T("span")),
        (n = F(o[2])),
        c(e, "data-testid", "session-header.tabs-count");
    },
    m(t, s) {
      w(t, e, s), h(e, n);
    },
    p(t, s) {
      s[0] & 4 && ae(n, t[2]);
    },
    d(t) {
      t && y(e);
    },
  };
}
function qr(o) {
  let e, n, t, s;
  function i(a) {
    o[29](a);
  }
  let l = { menuItems: o[15] };
  return (
    o[20] !== void 0 && (l.isMenuVisible = o[20]),
    (n = new ut({ props: l })),
    _e.push(() => Ae(n, "isMenuVisible", i)),
    {
      c() {
        (e = T("span")),
          I(n.$$.fragment),
          c(e, "class", "context-menu svelte-1kky3mm"),
          c(e, "data-testid", "session-header.context-menu-button");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), (s = !0);
      },
      p(a, r) {
        let u = {};
        r[0] & 32768 && (u.menuItems = a[15]),
          !t &&
            r[0] & 1048576 &&
            ((t = !0), (u.isMenuVisible = a[20]), Ne(() => (t = !1))),
          n.$set(u);
      },
      i(a) {
        s || (d(n.$$.fragment, a), (s = !0));
      },
      o(a) {
        _(n.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && y(e), E(n);
      },
    }
  );
}
function Br(o) {
  let e, n, t;
  return (
    (n = new Cn({ props: { width: "9", height: "7" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "toggler svelte-1kky3mm"),
          c(e, "data-testid", "session-header.show-tabs-button"),
          oe(e, "is-expanded", o[18]);
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        (!t || i[0] & 262144) && oe(e, "is-expanded", s[18]);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Tp(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p, g, v, b, $;
  t = new Ht({ props: { sessionName: o[0].name, isTemporary: o[13] } });
  let k =
      !o[12] && !o[1] && !o[13] && o[9] && o[11] === "activate-button" && Ar(o),
    z = o[13] && o[8] && Lr(o),
    S = !o[1] && o[9] && jr(o),
    N = !o[20] && Vr(o),
    A = o[16] && qr(o),
    B = o[10] && Br(o);
  return {
    c() {
      (e = T("div")),
        (n = T("div")),
        I(t.$$.fragment),
        (s = M()),
        (i = T("span")),
        (l = F(o[7])),
        (a = M()),
        (r = T("div")),
        k && k.c(),
        (u = M()),
        z && z.c(),
        (f = M()),
        S && S.c(),
        (m = M()),
        N && N.c(),
        (p = M()),
        A && A.c(),
        (g = M()),
        B && B.c(),
        c(i, "class", "name svelte-1kky3mm"),
        c(i, "data-testid", "session-header.name"),
        c(n, "class", "avatar-and-name svelte-1kky3mm"),
        c(r, "class", "right-part svelte-1kky3mm"),
        oe(r, "is-open-context-menu", o[20]),
        c(e, "class", "header svelte-1kky3mm"),
        oe(e, "is-active-session", o[1]),
        oe(e, "is-temporary", o[13]),
        oe(e, "is-drag-enter", o[17]),
        oe(e, "is-expanded", o[18]),
        oe(e, "session-hovered", o[19]),
        oe(e, "is-open-context-menu", o[20]);
    },
    m(V, q) {
      w(V, e, q),
        h(e, n),
        C(t, n, null),
        h(n, s),
        h(n, i),
        h(i, l),
        h(e, a),
        h(e, r),
        k && k.m(r, null),
        h(r, u),
        z && z.m(r, null),
        h(r, f),
        S && S.m(r, null),
        h(r, m),
        N && N.m(r, null),
        h(r, p),
        A && A.m(r, null),
        h(r, g),
        B && B.m(r, null),
        (v = !0),
        b ||
          (($ = [
            Z(e, "click", je(o[22])),
            Z(e, "contextmenu", je(ze(o[21]))),
            Z(e, "dragenter", ze(o[26])),
            Z(e, "dragleave", ze(o[27])),
            Z(e, "drop", o[28]),
          ]),
          (b = !0));
    },
    p(V, q) {
      let le = {};
      q[0] & 1 && (le.sessionName = V[0].name),
        q[0] & 8192 && (le.isTemporary = V[13]),
        t.$set(le),
        (!v || q[0] & 128) && ae(l, V[7]),
        !V[12] && !V[1] && !V[13] && V[9] && V[11] === "activate-button"
          ? k
            ? (k.p(V, q), q[0] & 14850 && d(k, 1))
            : ((k = Ar(V)), k.c(), d(k, 1), k.m(r, u))
          : k &&
            (G(),
            _(k, 1, 1, () => {
              k = null;
            }),
            K()),
        V[13] && V[8]
          ? z
            ? z.p(V, q)
            : ((z = Lr(V)), z.c(), z.m(r, f))
          : z && (z.d(1), (z = null)),
        !V[1] && V[9]
          ? S
            ? (S.p(V, q), q[0] & 514 && d(S, 1))
            : ((S = jr(V)), S.c(), d(S, 1), S.m(r, m))
          : S &&
            (G(),
            _(S, 1, 1, () => {
              S = null;
            }),
            K()),
        V[20]
          ? N && (N.d(1), (N = null))
          : N
          ? N.p(V, q)
          : ((N = Vr(V)), N.c(), N.m(r, p)),
        V[16]
          ? A
            ? (A.p(V, q), q[0] & 65536 && d(A, 1))
            : ((A = qr(V)), A.c(), d(A, 1), A.m(r, g))
          : A &&
            (G(),
            _(A, 1, 1, () => {
              A = null;
            }),
            K()),
        V[10]
          ? B
            ? (B.p(V, q), q[0] & 1024 && d(B, 1))
            : ((B = Br(V)), B.c(), d(B, 1), B.m(r, null))
          : B &&
            (G(),
            _(B, 1, 1, () => {
              B = null;
            }),
            K()),
        (!v || q[0] & 1048576) && oe(r, "is-open-context-menu", V[20]),
        (!v || q[0] & 2) && oe(e, "is-active-session", V[1]),
        (!v || q[0] & 8192) && oe(e, "is-temporary", V[13]),
        (!v || q[0] & 131072) && oe(e, "is-drag-enter", V[17]),
        (!v || q[0] & 262144) && oe(e, "is-expanded", V[18]),
        (!v || q[0] & 524288) && oe(e, "session-hovered", V[19]),
        (!v || q[0] & 1048576) && oe(e, "is-open-context-menu", V[20]);
    },
    i(V) {
      v || (d(t.$$.fragment, V), d(k), d(S), d(A), d(B), (v = !0));
    },
    o(V) {
      _(t.$$.fragment, V), _(k), _(S), _(A), _(B), (v = !1);
    },
    d(V) {
      V && y(e),
        E(t),
        k && k.d(),
        z && z.d(),
        S && S.d(),
        N && N.d(),
        A && A.d(),
        B && B.d(),
        (b = !1),
        Te($);
    },
  };
}
function Ip(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r = j,
    u = () => (r(), (r = vt(le, (re) => n(17, (a = re)))), le),
    f,
    m = j,
    p = () => (m(), (m = vt(V, (re) => n(18, (f = re)))), V),
    g,
    v = j,
    b = () => (v(), (v = vt(J, (re) => n(19, (g = re)))), J),
    $,
    k = j,
    z = () => (k(), (k = vt(q, (re) => n(20, ($ = re)))), q);
  o.$$.on_destroy.push(() => r()),
    o.$$.on_destroy.push(() => m()),
    o.$$.on_destroy.push(() => v()),
    o.$$.on_destroy.push(() => k());
  let S = ye(),
    { session: N } = e,
    { isActiveSession: A } = e,
    { tabsCount: B } = e,
    { isExpanded: V } = e;
  p();
  let { isOpenContextMenu: q } = e;
  z();
  let { isDragEnter: le } = e;
  u();
  let { isHovered: J } = e;
  b();
  let { displayName: ie } = e,
    { canAddSessions: te } = e,
    { isSessionAvailable: U } = e,
    { isExpandable: ee = !0 } = e,
    { activationMethod: Ie = "activate-button" } = e,
    de = !1,
    $e = () => S("openContextMenu"),
    Se = () => {
      if (Ie === "click") {
        Ce();
        return;
      }
      S("toggleExpanded");
    },
    Ce = () => {
      n(14, (de = !0)),
        H.actions.sendAnalyticsEvent("sessions.activate-clicked", {
          source: "sidecar",
        }),
        H.actions.explore("activated_session"),
        H.actions.switchSessionOfWindow(N.id);
    },
    W = () => {
      H.actions.sendAnalyticsEvent("sessions.save-button-clicked", void 0),
        H.actions.saveSession(N.id),
        S("edit");
    },
    he = () => {
      s
        ? (Pe(N.windowId, "No session.windowId to handle open session window"),
          H.actions.revealSessionWindow(N.windowId))
        : (H.actions.sendAnalyticsEvent("sessions.open-in-new-window-clicked", {
            source: "sidecar",
          }),
          H.actions.createWindowForSession(N.id));
    },
    Ee = () => {
      s &&
        (Pe(N.windowId, "No session.windowId to handle close session"),
        H.actions.closeSession(N.windowId));
    },
    Ve = (re) => {
      if ([...(re?.dataTransfer?.types ?? [])].includes("sidebarapplication")) {
        qe(le, (a = !1), a);
        return;
      }
      qe(le, (a = !0), a);
    },
    He = () => qe(le, (a = !1), a),
    Oe = (re) => {
      let it = re.dataTransfer?.getData(eo),
        rt = re.dataTransfer?.getData(Js);
      it &&
        rt &&
        (H.actions.sendAnalyticsEvent("sessions.tab.dnd", {
          type: "move-to-session",
        }),
        H.actions.moveSessionTabToSession(it, N.id, rt),
        He());
    },
    ge = () => (B > 0 ? S("toggleSessionRemovePopup") : S("removeSession"));
  function X(re) {
    ($ = re), q.set($);
  }
  return (
    (o.$$set = (re) => {
      "session" in re && n(0, (N = re.session)),
        "isActiveSession" in re && n(1, (A = re.isActiveSession)),
        "tabsCount" in re && n(2, (B = re.tabsCount)),
        "isExpanded" in re && p(n(3, (V = re.isExpanded))),
        "isOpenContextMenu" in re && z(n(4, (q = re.isOpenContextMenu))),
        "isDragEnter" in re && u(n(5, (le = re.isDragEnter))),
        "isHovered" in re && b(n(6, (J = re.isHovered))),
        "displayName" in re && n(7, (ie = re.displayName)),
        "canAddSessions" in re && n(8, (te = re.canAddSessions)),
        "isSessionAvailable" in re && n(9, (U = re.isSessionAvailable)),
        "isExpandable" in re && n(10, (ee = re.isExpandable)),
        "activationMethod" in re && n(11, (Ie = re.activationMethod));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty[0] & 1) {
        e: n(13, (t = N.isTemporary));
      }
      if (o.$$.dirty[0] & 1) {
        e: n(12, (s = Boolean(N.windowId)));
      }
      if (o.$$.dirty[0] & 12290) {
        e: n(16, (i = !(t && s && A)));
      }
      if (o.$$.dirty[0] & 12802) {
        e: n(
          15,
          (l = [
            {
              isVisible: !A && !s && U,
              title: L("sidecar_sessions__activate"),
              click: Ce,
              testId: "context-menu-activate-session",
            },
            {
              isVisible: !A && U,
              title: s
                ? L("sidecar_sessions__open_session_window")
                : L("sidecar_sessions__open_in_window"),
              click: he,
              testId: "context-menu-open-session",
            },
            {
              isVisible: t && U,
              title: L("save"),
              click: W,
              testId: "context-menu-save-session",
            },
            {
              isVisible: !t && U,
              title: L("sidecar_sessions__rename"),
              click: () => S("edit"),
              testId: "context-menu-rename-session",
            },
            {
              isVisible: s && !A && !t,
              title: L("sidecar_sessions__close_session_window"),
              click: Ee,
              testId: "context-menu-close-saved-session",
            },
            {
              isVisible: t && s,
              title: L("sidecar_sessions__delete_and_close_window"),
              click: Ee,
              testId: "context-menu-close-temporary-session",
            },
            {
              isVisible: !t || !s,
              title: L("sidecar_sessions__delete"),
              isDisabled: s,
              tooltip:
                s && A
                  ? L("sidecar_sessions__delete_session_active_tooltip")
                  : s && !A
                  ? L("sidecar_sessions__close_session_window_to_delete_it")
                  : void 0,
              click: ge,
              testId: "context-menu-delete-session",
            },
          ].filter((re) => re.isVisible))
        );
      }
    }),
    [
      N,
      A,
      B,
      V,
      q,
      le,
      J,
      ie,
      te,
      U,
      ee,
      Ie,
      s,
      t,
      de,
      l,
      i,
      a,
      f,
      g,
      $,
      $e,
      Se,
      Ce,
      W,
      he,
      Ve,
      He,
      Oe,
      X,
    ]
  );
}
var fo = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          Ip,
          Tp,
          P,
          {
            session: 0,
            isActiveSession: 1,
            tabsCount: 2,
            isExpanded: 3,
            isOpenContextMenu: 4,
            isDragEnter: 5,
            isHovered: 6,
            displayName: 7,
            canAddSessions: 8,
            isSessionAvailable: 9,
            isExpandable: 10,
            activationMethod: 11,
          },
          kp,
          [-1, -1]
        );
    }
  },
  Pr = fo;
O();
function Cp(o) {
  R(
    o,
    "svelte-1upp9br",
    ".avatar.svelte-1upp9br.svelte-1upp9br{--size:24px;display:flex;align-items:center;justify-content:center;width:var(--size);min-width:var(--size);height:var(--size);margin-right:6px;border-radius:50%;background-color:#ebebeb}.edit-session.svelte-1upp9br.svelte-1upp9br{display:flex;justify-content:space-between;align-items:center;position:relative;min-height:32px;border-radius:4px;background-color:var(--theme-8);padding:0 8px}.edit-session.svelte-1upp9br.svelte-1upp9br:hover{background-color:var(--theme-8)}.edit-session.svelte-1upp9br>input.svelte-1upp9br{all:unset;width:100%;height:32px;padding:0;padding-right:8px;border:none;background-color:transparent;outline:none;color:var(--text-primary-color)}"
  );
}
function Ep(o) {
  let e, n;
  return (
    (e = new st({ props: { width: "12", height: "7" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function zp(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p;
  return (
    (r = new me({
      props: {
        dataTestId: "session-editor.submit-button",
        mod: "round",
        $$slots: { default: [Ep] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("form")),
          (n = T("div")),
          (t = T("span")),
          (s = F(o[2])),
          (i = M()),
          (l = T("input")),
          (a = M()),
          (u = T("div")),
          I(r.$$.fragment),
          c(n, "class", "avatar svelte-1upp9br"),
          c(n, "data-testid", "session-editor.avatar"),
          c(l, "type", "text"),
          c(l, "data-testid", "session-editor.input"),
          c(l, "class", "svelte-1upp9br"),
          se(u, "display", "contents"),
          se(u, "--round-button-bg", "transparent"),
          se(u, "--round-button-bg-hover", "rgba(25, 119, 243, 0.08)"),
          se(u, "--round-button-bg-active", "rgba(25, 119, 243, 0.12)"),
          c(e, "class", "edit-session svelte-1upp9br"),
          c(e, "data-testid", "session-editor.form");
      },
      m(g, v) {
        w(g, e, v),
          h(e, n),
          h(n, t),
          h(t, s),
          h(e, i),
          h(e, l),
          o[7](l),
          Je(l, o[1]),
          h(e, a),
          h(e, u),
          C(r, u, null),
          (f = !0),
          m ||
            ((p = [
              Z(l, "input", o[8]),
              Z(l, "blur", o[3]),
              Z(l, "keydown", o[4]),
            ]),
            (m = !0));
      },
      p(g, [v]) {
        (!f || v & 4) && ae(s, g[2]), v & 2 && l.value !== g[1] && Je(l, g[1]);
        let b = {};
        v & 4096 && (b.$$scope = { dirty: v, ctx: g }), r.$set(b);
      },
      i(g) {
        f || (d(r.$$.fragment, g), (f = !0));
      },
      o(g) {
        _(r.$$.fragment, g), (f = !1);
      },
      d(g) {
        g && y(e), o[7](null), E(r), (m = !1), Te(p);
      },
    }
  );
}
function Mp(o, e, n) {
  let t,
    s,
    i,
    l = ye(),
    { session: a } = e,
    r,
    u = !1,
    f = (b) => {
      if (b || s === t) {
        n(1, (s = t)), l("edited");
        return;
      }
      n(1, (s = s.trim())),
        H.actions.sendAnalyticsEvent("sessions.rename-clicked", void 0),
        H.actions.renameSession(a.id, s),
        l("edited");
    },
    m = () => {
      u || f(!1);
    },
    p = (b) => {
      (b.code !== "Enter" && b.code !== "Escape") ||
        ((u = !0), b.code === "Enter" ? f(!1) : b.code === "Escape" && f(!0));
    };
  function g(b) {
    _e[b ? "unshift" : "push"](() => {
      (r = b), n(0, r);
    });
  }
  function v() {
    (s = this.value), n(1, s), n(6, t), n(5, a);
  }
  return (
    (o.$$set = (b) => {
      "session" in b && n(5, (a = b.session));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 32) {
        e: n(6, (t = a.name ?? ""));
      }
      if (o.$$.dirty & 64) {
        e: n(1, (s = t));
      }
      if (o.$$.dirty & 2) {
        e: n(2, (i = un(s)));
      }
      if (o.$$.dirty & 1) {
        e: r && ((u = !1), setTimeout(() => r?.focus(), 150));
      }
    }),
    [r, s, i, m, p, a, t, g, v]
  );
}
var mo = class extends x {
    constructor(e) {
      super(), D(this, e, Mp, zp, P, { session: 5 }, Cp);
    }
  },
  Dr = mo;
O();
O();
function Np(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M.817 5.503l1.969 1.969L.448 9.81a.556.556 0 10.787.787L3.572 8.26l1.97 1.969.654.654a.554.554 0 00.787 0 .555.555 0 000-.787l-.326-.326 3.256-4.7.182.182a.557.557 0 10.787-.787l-.653-.654-1.497-1.497L6.581.163a.556.556 0 10-.787.787l.182.182-4.7 3.256-.326-.326a.556.556 0 10-.787.787l.654.654zm5.96-3.571L7.944 3.1l1.168 1.168-3.256 4.7-1.89-1.89-1.89-1.89 4.7-3.256z"
        ),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "fill", "currentColor"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function Ap(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var po = class extends x {
    constructor(e) {
      super(), D(this, e, Ap, Np, P, { width: 0, height: 1, className: 2 });
    }
  },
  xr = po;
O();
var { Boolean: Lp } = mn;
function jp(o) {
  R(
    o,
    "svelte-16et97r",
    ".danger.svelte-16et97r{color:var(--error-color)}.session-list.svelte-16et97r{position:relative}.session-list.svelte-16et97r::after{content:'';position:absolute;bottom:0;width:100%;height:10px;background:linear-gradient(0deg, rgb(0 0 0 / 0.04) 0%, rgb(0 0 0 / 0) 100%);opacity:0;transition:var(--animation-time)}.session-list.has-gradient.svelte-16et97r::after{opacity:1}.session-list-inner.svelte-16et97r{max-height:150px;overflow:auto}.session.svelte-16et97r{display:flex;align-items:center;width:160px}.session-name.svelte-16et97r{flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:110px}.session-icon.svelte-16et97r{flex-shrink:0;display:flex;justify-content:center;align-items:center;margin-right:8px;width:24px;height:24px;border-radius:50%;color:#000;background-color:var(--background-color)}.session-info.svelte-16et97r{margin-left:auto}.session-info.active.svelte-16et97r{color:var(--accent-color)}.menu-item-wrapper.svelte-16et97r .arrow-icon{transform:rotate(90deg);margin-left:50px}"
  );
}
function Fr(o, e, n) {
  let t = o.slice();
  return (t[27] = e[n]), t;
}
function Gr(o) {
  let e, n, t;
  return (
    (n = new Ge({
      props: {
        withArrow: !0,
        arrowClassName: "arrow-icon",
        $$slots: { default: [Vp] },
        $$scope: { ctx: o },
      },
    })),
    n.$on("click", o[12]),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "menu-item-wrapper svelte-16et97r");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 1073741824 && (l.$$scope = { dirty: i, ctx: s }), n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Vp(o) {
  let e = L("sidecar_sessions__move_to_session") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Kr(o) {
  let e,
    n,
    t,
    s,
    i,
    l = o[4],
    a = [];
  for (let u = 0; u < l.length; u += 1) a[u] = Ur(Fr(o, l, u));
  let r = (u) =>
    _(a[u], 1, 1, () => {
      a[u] = null;
    });
  return {
    c() {
      (e = T("div")), (n = T("div"));
      for (let u = 0; u < a.length; u += 1) a[u].c();
      c(n, "class", "session-list-inner svelte-16et97r"),
        c(e, "class", "session-list svelte-16et97r"),
        oe(e, "has-gradient", o[8] && !o[6]);
    },
    m(u, f) {
      w(u, e, f), h(e, n);
      for (let m = 0; m < a.length; m += 1) a[m] && a[m].m(n, null);
      o[25](n), (t = !0), s || ((i = Z(n, "scroll", o[19])), (s = !0));
    },
    p(u, f) {
      if (f & 24592) {
        l = u[4];
        let m;
        for (m = 0; m < l.length; m += 1) {
          let p = Fr(u, l, m);
          a[m]
            ? (a[m].p(p, f), d(a[m], 1))
            : ((a[m] = Ur(p)), a[m].c(), d(a[m], 1), a[m].m(n, null));
        }
        for (G(), m = l.length; m < a.length; m += 1) r(m);
        K();
      }
      (!t || f & 320) && oe(e, "has-gradient", u[8] && !u[6]);
    },
    i(u) {
      if (!t) {
        for (let f = 0; f < l.length; f += 1) d(a[f]);
        t = !0;
      }
    },
    o(u) {
      a = a.filter(Lp);
      for (let f = 0; f < a.length; f += 1) _(a[f]);
      t = !1;
    },
    d(u) {
      u && y(e), pn(a, u), o[25](null), (s = !1), i();
    },
  };
}
function Hp(o) {
  let e = Fn(o[27].name ?? "", 0).toUpperCase() + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p(t, s) {
      s & 16 &&
        e !== (e = Fn(t[27].name ?? "", 0).toUpperCase() + "") &&
        ae(n, e);
    },
    i: j,
    o: j,
    d(t) {
      t && y(n);
    },
  };
}
function Op(o) {
  let e, n;
  return (
    (e = new In({ props: { width: "8", height: "12" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Rr(o) {
  let e = L("sidecar_sessions__active") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function qp(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a = bt(o[27], o[27].tabsList) + "",
    r,
    u,
    f,
    m = o[13](o[27]),
    p,
    g = o[27].tabsOrder.length + "",
    v,
    b,
    $,
    k = [Op, Hp],
    z = [];
  function S(A, B) {
    return A[27].isTemporary ? 0 : 1;
  }
  (t = S(o, -1)), (s = z[t] = k[t](o));
  let N = m && Rr(o);
  return {
    c() {
      (e = T("div")),
        (n = T("div")),
        s.c(),
        (i = M()),
        (l = T("div")),
        (r = F(a)),
        (u = M()),
        (f = T("span")),
        N && N.c(),
        (p = M()),
        (v = F(g)),
        (b = M()),
        c(n, "class", "session-icon svelte-16et97r"),
        se(n, "--background-color", xt(o[27].name)),
        c(l, "class", "session-name svelte-16et97r"),
        c(f, "class", "session-info svelte-16et97r"),
        oe(f, "active", o[13](o[27])),
        c(e, "class", "session svelte-16et97r");
    },
    m(A, B) {
      w(A, e, B),
        h(e, n),
        z[t].m(n, null),
        h(e, i),
        h(e, l),
        h(l, r),
        h(e, u),
        h(e, f),
        N && N.m(f, null),
        h(f, p),
        h(f, v),
        w(A, b, B),
        ($ = !0);
    },
    p(A, B) {
      let V = t;
      (t = S(A, B)),
        t === V
          ? z[t].p(A, B)
          : (G(),
            _(z[V], 1, 1, () => {
              z[V] = null;
            }),
            K(),
            (s = z[t]),
            s ? s.p(A, B) : ((s = z[t] = k[t](A)), s.c()),
            d(s, 1),
            s.m(n, null)),
        (!$ || B & 16) && se(n, "--background-color", xt(A[27].name)),
        (!$ || B & 16) &&
          a !== (a = bt(A[27], A[27].tabsList) + "") &&
          ae(r, a),
        B & 16 && (m = A[13](A[27])),
        m
          ? N
            ? N.p(A, B)
            : ((N = Rr(A)), N.c(), N.m(f, p))
          : N && (N.d(1), (N = null)),
        (!$ || B & 16) && g !== (g = A[27].tabsOrder.length + "") && ae(v, g),
        (!$ || B & 8208) && oe(f, "active", A[13](A[27]));
    },
    i(A) {
      $ || (d(s), ($ = !0));
    },
    o(A) {
      _(s), ($ = !1);
    },
    d(A) {
      A && y(e), z[t].d(), N && N.d(), A && y(b);
    },
  };
}
function Ur(o) {
  let e, n;
  function t() {
    return o[24](o[27]);
  }
  return (
    (e = new Ge({
      props: {
        dataTestId: `context-menu.move-to-session.session-${o[27].id}`,
        $$slots: { default: [qp] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", t),
    {
      c() {
        I(e.$$.fragment);
      },
      m(s, i) {
        C(e, s, i), (n = !0);
      },
      p(s, i) {
        o = s;
        let l = {};
        i & 16 &&
          (l.dataTestId = `context-menu.move-to-session.session-${o[27].id}`),
          i & 1073741840 && (l.$$scope = { dirty: i, ctx: o }),
          e.$set(l);
      },
      i(s) {
        n || (d(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        _(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(e, s);
      },
    }
  );
}
function Wr(o) {
  let e, n;
  return (
    (e = new Ge({
      props: { $$slots: { default: [Bp] }, $$scope: { ctx: o } },
    })),
    e.$on("click", o[18]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1073741824 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Bp(o) {
  let e;
  return {
    c() {
      e = F("Reload");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && y(e);
    },
  };
}
function Pp(o) {
  let e;
  return {
    c() {
      e = F("Duplicate");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && y(e);
    },
  };
}
function Dp(o) {
  let e = (o[2].pinned ? L("sidecar_sessions__unpin") : "Pin") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p(t, s) {
      s & 4 &&
        e !== (e = (t[2].pinned ? L("sidecar_sessions__unpin") : "Pin") + "") &&
        ae(n, e);
    },
    d(t) {
      t && y(n);
    },
  };
}
function Zr(o) {
  let e, n, t, s;
  return (
    (e = new mi({})),
    (t = new Ge({
      props: { $$slots: { default: [xp] }, $$scope: { ctx: o } },
    })),
    t.$on("click", o[17]),
    {
      c() {
        I(e.$$.fragment), (n = M()), I(t.$$.fragment);
      },
      m(i, l) {
        C(e, i, l), w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        let a = {};
        l & 1073741824 && (a.$$scope = { dirty: l, ctx: i }), t.$set(a);
      },
      i(i) {
        s || (d(e.$$.fragment, i), d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(e.$$.fragment, i), _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        E(e, i), i && y(n), E(t, i);
      },
    }
  );
}
function xp(o) {
  let e;
  return {
    c() {
      (e = T("span")),
        (e.textContent = "Close"),
        c(e, "class", "danger svelte-16et97r");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    d(n) {
      n && y(e);
    },
  };
}
function Fp(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f = o[7] && Gr(o),
    m = o[1] && Kr(o),
    p = o[10] && Wr(o);
  (s = new Ge({ props: { $$slots: { default: [Pp] }, $$scope: { ctx: o } } })),
    s.$on("click", o[16]),
    (l = new Ge({
      props: { $$slots: { default: [Dp] }, $$scope: { ctx: o } },
    })),
    l.$on("click", o[15]);
  let g = !o[9] && Zr(o);
  return {
    c() {
      f && f.c(),
        (e = M()),
        m && m.c(),
        (n = M()),
        p && p.c(),
        (t = M()),
        I(s.$$.fragment),
        (i = M()),
        I(l.$$.fragment),
        (a = M()),
        g && g.c(),
        (r = fe());
    },
    m(v, b) {
      f && f.m(v, b),
        w(v, e, b),
        m && m.m(v, b),
        w(v, n, b),
        p && p.m(v, b),
        w(v, t, b),
        C(s, v, b),
        w(v, i, b),
        C(l, v, b),
        w(v, a, b),
        g && g.m(v, b),
        w(v, r, b),
        (u = !0);
    },
    p(v, b) {
      v[7]
        ? f
          ? (f.p(v, b), b & 128 && d(f, 1))
          : ((f = Gr(v)), f.c(), d(f, 1), f.m(e.parentNode, e))
        : f &&
          (G(),
          _(f, 1, 1, () => {
            f = null;
          }),
          K()),
        v[1]
          ? m
            ? (m.p(v, b), b & 2 && d(m, 1))
            : ((m = Kr(v)), m.c(), d(m, 1), m.m(n.parentNode, n))
          : m &&
            (G(),
            _(m, 1, 1, () => {
              m = null;
            }),
            K()),
        v[10]
          ? p
            ? (p.p(v, b), b & 1024 && d(p, 1))
            : ((p = Wr(v)), p.c(), d(p, 1), p.m(t.parentNode, t))
          : p &&
            (G(),
            _(p, 1, 1, () => {
              p = null;
            }),
            K());
      let $ = {};
      b & 1073741824 && ($.$$scope = { dirty: b, ctx: v }), s.$set($);
      let k = {};
      b & 1073741828 && (k.$$scope = { dirty: b, ctx: v }),
        l.$set(k),
        v[9]
          ? g &&
            (G(),
            _(g, 1, 1, () => {
              g = null;
            }),
            K())
          : g
          ? (g.p(v, b), b & 512 && d(g, 1))
          : ((g = Zr(v)), g.c(), d(g, 1), g.m(r.parentNode, r));
    },
    i(v) {
      u ||
        (d(f),
        d(m),
        d(p),
        d(s.$$.fragment, v),
        d(l.$$.fragment, v),
        d(g),
        (u = !0));
    },
    o(v) {
      _(f),
        _(m),
        _(p),
        _(s.$$.fragment, v),
        _(l.$$.fragment, v),
        _(g),
        (u = !1);
    },
    d(v) {
      f && f.d(v),
        v && y(e),
        m && m.d(v),
        v && y(n),
        p && p.d(v),
        v && y(t),
        E(s, v),
        v && y(i),
        E(l, v),
        v && y(a),
        g && g.d(v),
        v && y(r);
    },
  };
}
function Gp(o) {
  let e, n, t;
  function s(l) {
    o[26](l);
  }
  let i = {
    offset: [8, 0],
    className: o[3],
    dataTestId: "session-tab.context-menu-button",
    $$slots: { default: [Fp] },
    $$scope: { ctx: o },
  };
  return (
    o[0] !== void 0 && (i.isMenuVisible = o[0]),
    (e = new ut({ props: i })),
    _e.push(() => Ae(e, "isMenuVisible", s)),
    {
      c() {
        I(e.$$.fragment);
      },
      m(l, a) {
        C(e, l, a), (t = !0);
      },
      p(l, [a]) {
        let r = {};
        a & 8 && (r.className = l[3]),
          a & 1073743862 && (r.$$scope = { dirty: a, ctx: l }),
          !n &&
            a & 1 &&
            ((n = !0), (r.isMenuVisible = l[0]), Ne(() => (n = !1))),
          e.$set(r);
      },
      i(l) {
        t || (d(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        _(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function Kp(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    { sessionTab: m } = e,
    { sessionId: p } = e,
    { isMenuVisible: g = !1 } = e,
    { isSessionsMenuVisible: v = !1 } = e,
    { buttonClassName: b = "" } = e,
    $,
    k = !1,
    z = H.stores.sessionsList;
  ue(o, z, (ee) => n(23, (f = ee)));
  let S = (ee) => {
      ee.stopPropagation(), n(1, (v = !v));
    },
    N = (ee) => Boolean(t?.id === ee.id),
    A = (ee) => {
      if (p === ee.id) return;
      let Ie = ee.id,
        de = ee.tabsList?.filter(({ pinned: Ce }) => Ce).length ?? 0,
        $e = ee.tabsOrder?.length ?? 0,
        Se = m.pinned ? de : $e;
      H.actions.moveSessionTabToSession(m.id, Ie, p, Se);
    },
    B = () => {
      t?.id &&
        (H.actions.sendAnalyticsEvent("sessions.tab.pin-clicked", {
          "new-value": m.pinned ? "disabled" : "enabled",
        }),
        H.actions.changeSessionTabPinning(p, m.id, !m.pinned));
    },
    V = () => {
      H.actions.sendAnalyticsEvent("sessions.tab.duplicate-clicked", void 0),
        H.actions.duplicateSessionTab(p, m.id);
    },
    q = () => {
      H.actions.sendAnalyticsEvent("sessions.tab.close-clicked", void 0),
        H.actions.removeSessionTab(p, m.id);
    },
    le = () => {
      H.actions.sendAnalyticsEvent("sessions.tab.reload-click", void 0),
        H.actions.reloadSessionTab(p, m.id);
    },
    J = ri(() => {
      n(6, (k = Math.round($.scrollTop) + $.offsetHeight === $.scrollHeight));
    }, 100),
    ie = (ee) => A(ee);
  function te(ee) {
    _e[ee ? "unshift" : "push"](() => {
      ($ = ee), n(5, $);
    });
  }
  function U(ee) {
    (g = ee), n(0, g);
  }
  return (
    (o.$$set = (ee) => {
      "sessionTab" in ee && n(2, (m = ee.sessionTab)),
        "sessionId" in ee && n(20, (p = ee.sessionId)),
        "isMenuVisible" in ee && n(0, (g = ee.isMenuVisible)),
        "isSessionsMenuVisible" in ee && n(1, (v = ee.isSessionsMenuVisible)),
        "buttonClassName" in ee && n(3, (b = ee.buttonClassName));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 8388608) {
        e: n(21, (t = f?.currentSession));
      }
      if (o.$$.dirty & 8388608) {
        e: n(22, (s = f?.sessions ?? []));
      }
      if (o.$$.dirty & 4194304) {
        e: n(
          4,
          (i = [...s].sort((ee, Ie) =>
            ee.isTemporary === Ie.isTemporary ? 0 : Ie.isTemporary ? -1 : 1
          ))
        );
      }
      if (o.$$.dirty & 3145728) {
        e: n(10, (l = p === t?.id));
      }
      if (o.$$.dirty & 4) {
        e: n(9, (a = m.pinned && !m.browserId));
      }
      if (o.$$.dirty & 16) {
        e: n(8, (r = i.length > 4));
      }
      if (o.$$.dirty & 16) {
        e: n(7, (u = i.length > 1));
      }
      if (o.$$.dirty & 3) {
        e: !g && v && n(1, (v = !1));
      }
    }),
    [
      g,
      v,
      m,
      b,
      i,
      $,
      k,
      u,
      r,
      a,
      l,
      z,
      S,
      N,
      A,
      B,
      V,
      q,
      le,
      J,
      p,
      t,
      s,
      f,
      ie,
      te,
      U,
    ]
  );
}
var _o = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          Kp,
          Gp,
          P,
          {
            sessionTab: 2,
            sessionId: 20,
            isMenuVisible: 0,
            isSessionsMenuVisible: 1,
            buttonClassName: 3,
          },
          jp
        );
    }
  },
  Xr = _o;
function Rp(o) {
  R(
    o,
    "svelte-107ti3v",
    ".pin-icon.svelte-107ti3v{opacity:0.5}.pin-icon.pin-icon-is-active.svelte-107ti3v{opacity:1}.session-tab-menu.svelte-107ti3v{padding:0 4px}.actions.svelte-107ti3v{display:flex;align-items:center}"
  );
}
function Up(o) {
  let e, n, t, s;
  return (
    (n = new xr({ props: { width: "12", height: "12" } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(
            e,
            "class",
            (t =
              De(`pin-icon ${o[5] ? "pin-icon-is-active" : ""}`) +
              " svelte-107ti3v")
          );
      },
      m(i, l) {
        w(i, e, l), C(n, e, null), (s = !0);
      },
      p(i, l) {
        (!s ||
          (l & 32 &&
            t !==
              (t =
                De(`pin-icon ${i[5] ? "pin-icon-is-active" : ""}`) +
                " svelte-107ti3v"))) &&
          c(e, "class", t);
      },
      i(i) {
        s || (d(n.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(n.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(e), E(n);
      },
    }
  );
}
function Wp(o) {
  let e, n, t, s;
  return (
    (e = new me({
      props: {
        mod: "round",
        dataTestId: "session-tab.pin-button" + (o[5] ? "-active" : ""),
        className: "pin-button",
        $$slots: { default: [Up] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[6]),
    {
      c() {
        (n = T("div")),
          I(e.$$.fragment),
          se(n, "display", "contents"),
          se(
            n,
            "--round-button-bg",
            (t = o[5] ? "var(--round-button-active)" : "transparent")
          ),
          se(n, "--round-button-bg-hover", "var(--round-button-hover)"),
          se(n, "--round-button-bg-active", "var(--round-button-active)");
      },
      m(i, l) {
        w(i, n, l), C(e, n, null), (s = !0);
      },
      p(i, l) {
        l & 32 &&
          t !== (t = i[5] ? "var(--round-button-active)" : "transparent") &&
          se(n, "--round-button-bg", t);
        let a = {};
        l & 32 &&
          (a.dataTestId = "session-tab.pin-button" + (i[5] ? "-active" : "")),
          l & 2080 && (a.$$scope = { dirty: l, ctx: i }),
          e.$set(a);
      },
      i(i) {
        s || (d(e.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(e.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && e && y(n), E(e, i);
      },
    }
  );
}
function Zp(o) {
  let e = L("sidecar_collections__pinned_tabs_reopen_tooltip") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Xp(o) {
  let e = L("sidecar_collections__unpin_tab_from_session") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function Yp(o) {
  let e;
  function n(i, l) {
    return i[5] ? Xp : Zp;
  }
  let t = n(o, -1),
    s = t(o);
  return {
    c() {
      s.c(), (e = fe());
    },
    m(i, l) {
      s.m(i, l), w(i, e, l);
    },
    p(i, l) {
      t === (t = n(i, l)) && s
        ? s.p(i, l)
        : (s.d(1), (s = t(i)), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(i) {
      s.d(i), i && y(e);
    },
  };
}
function Jp(o) {
  let e, n, t, s, i, l, a, r;
  function u(p) {
    o[8](p);
  }
  function f(p) {
    o[9](p);
  }
  let m = {
    sessionTab: o[0],
    sessionId: o[1],
    buttonClassName: "session-tab-menu-button",
  };
  return (
    o[3] !== void 0 && (m.isSessionsMenuVisible = o[3]),
    o[4] !== void 0 && (m.isMenuVisible = o[4]),
    (t = new Xr({ props: m })),
    _e.push(() => Ae(t, "isSessionsMenuVisible", u)),
    _e.push(() => Ae(t, "isMenuVisible", f)),
    (a = new Qe({
      props: {
        extraTooltipPadding: !o[5],
        $$slots: { tooltip: [Yp], default: [Wp] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (e = T("div")),
          (n = T("div")),
          I(t.$$.fragment),
          (l = M()),
          I(a.$$.fragment),
          c(n, "class", "session-tab-menu svelte-107ti3v"),
          c(e, "class", "actions svelte-107ti3v"),
          c(e, "slot", "actions");
      },
      m(p, g) {
        w(p, e, g), h(e, n), C(t, n, null), h(e, l), C(a, e, null), (r = !0);
      },
      p(p, g) {
        let v = {};
        g & 1 && (v.sessionTab = p[0]),
          g & 2 && (v.sessionId = p[1]),
          !s &&
            g & 8 &&
            ((s = !0), (v.isSessionsMenuVisible = p[3]), Ne(() => (s = !1))),
          !i &&
            g & 16 &&
            ((i = !0), (v.isMenuVisible = p[4]), Ne(() => (i = !1))),
          t.$set(v);
        let b = {};
        g & 32 && (b.extraTooltipPadding = !p[5]),
          g & 2080 && (b.$$scope = { dirty: g, ctx: p }),
          a.$set(b);
      },
      i(p) {
        r || (d(t.$$.fragment, p), d(a.$$.fragment, p), (r = !0));
      },
      o(p) {
        _(t.$$.fragment, p), _(a.$$.fragment, p), (r = !1);
      },
      d(p) {
        p && y(e), E(t), E(a);
      },
    }
  );
}
function Qp(o) {
  let e, n;
  return (
    (e = new Vt({
      props: {
        sessionTab: o[0],
        sessionId: o[1],
        isActive: o[2],
        areActionsVisible: o[5],
        $$slots: { actions: [Jp] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("contextmenu", o[10]),
    e.$on("mouseleave", o[7]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 1 && (i.sessionTab = t[0]),
          s & 2 && (i.sessionId = t[1]),
          s & 4 && (i.isActive = t[2]),
          s & 32 && (i.areActionsVisible = t[5]),
          s & 2107 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function e1(o, e, n) {
  let t,
    { sessionTab: s } = e,
    { sessionId: i } = e,
    { isActive: l } = e,
    a = !1,
    r = !1,
    u = () => {
      H.actions.sendAnalyticsEvent("sessions.tab.pin-clicked", {
        "new-value": s.pinned ? "disabled" : "enabled",
      }),
        H.actions.changeSessionTabPinning(i, s.id, !s.pinned);
    },
    f = () => {
      n(4, (r = !1));
    };
  function m(v) {
    (a = v), n(3, a);
  }
  function p(v) {
    (r = v), n(4, r);
  }
  let g = () => n(4, (r = !0));
  return (
    (o.$$set = (v) => {
      "sessionTab" in v && n(0, (s = v.sessionTab)),
        "sessionId" in v && n(1, (i = v.sessionId)),
        "isActive" in v && n(2, (l = v.isActive));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1) {
        e: n(5, (t = s.pinned));
      }
    }),
    [s, i, l, a, r, t, u, f, m, p, g]
  );
}
var ho = class extends x {
    constructor(e) {
      super(),
        D(this, e, e1, Qp, P, { sessionTab: 0, sessionId: 1, isActive: 2 }, Rp);
    }
  },
  Yr = ho;
O();
function t1(o) {
  R(
    o,
    "svelte-3fkaoh",
    ".session-remove-popup.svelte-3fkaoh.svelte-3fkaoh{background-color:var(--sidecar-remove-popup-bg);border-radius:10px;padding:26px 31px 23px;border:1px solid var(--sidecar-remove-border-color);cursor:default}.session-remove-popup.svelte-3fkaoh p.svelte-3fkaoh{font-size:13px;line-height:18px}.session-remove-header.svelte-3fkaoh.svelte-3fkaoh{font-weight:700;font-size:16px;color:var(--sidecar-remove-text-color);display:flex;align-items:center}.session-remove-title.svelte-3fkaoh.svelte-3fkaoh{margin-left:10px}.session-info.svelte-3fkaoh.svelte-3fkaoh{border:1px solid var(--sidecar-remove-border-counter-color);border-radius:4px;display:flex;align-items:center;padding:6px 12px 6px 7px;margin-bottom:34px;font-size:12px}.session-name.svelte-3fkaoh.svelte-3fkaoh{font-weight:600;max-width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.session-count-tabs.svelte-3fkaoh.svelte-3fkaoh{color:var(--sidecar-remove-count-color);margin-left:auto;white-space:nowrap}.session-remove-close.svelte-3fkaoh.svelte-3fkaoh{position:absolute;right:12px;top:12px}"
  );
}
function n1(o) {
  let e = L("sidecar_sessions__delete") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function s1(o) {
  let e = L("sidecar_sessions__cancel") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function o1(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m = L("sidecar_sessions__remove_description") + "",
    p,
    g,
    v,
    b,
    $ = L("sidecar_sessions__remove_question") + "",
    k,
    z,
    S,
    N,
    A,
    B,
    V,
    q,
    le,
    J,
    ie,
    te,
    U,
    ee,
    Ie,
    de,
    $e,
    Se,
    Ce;
  return (
    (t = new St({ props: { width: "12px" } })),
    (l = new $n({ props: { width: "22", height: "22" } })),
    (A = new Ht({ props: { isTemporary: o[1], sessionName: o[0] } })),
    (ee = new me({
      props: {
        mod: "light",
        dataTestId: "session-delete-popup.delete-button",
        $$slots: { default: [n1] },
        $$scope: { ctx: o },
      },
    })),
    ee.$on("click", o[4]),
    (de = new me({
      props: {
        dataTestId: "session-delete-popup.cancel-button",
        $$slots: { default: [s1] },
        $$scope: { ctx: o },
      },
    })),
    de.$on("click", o[3]),
    {
      c() {
        (e = T("div")),
          (n = T("button")),
          I(t.$$.fragment),
          (s = M()),
          (i = T("div")),
          I(l.$$.fragment),
          (a = M()),
          (r = T("div")),
          (r.textContent = `${L("sidecar_sessions__delete_session")}?`),
          (u = M()),
          (f = T("p")),
          (p = F(m)),
          (g = M()),
          (v = T("br")),
          (b = M()),
          (k = F($)),
          (z = F("?")),
          (S = M()),
          (N = T("div")),
          I(A.$$.fragment),
          (B = M()),
          (V = T("div")),
          (q = F(o[0])),
          (le = M()),
          (J = T("div")),
          (ie = F(o[2])),
          (te = M()),
          (U = T("div")),
          I(ee.$$.fragment),
          (Ie = M()),
          I(de.$$.fragment),
          c(n, "class", "session-remove-close svelte-3fkaoh"),
          c(n, "data-testid", "session-delete-popup.close-button"),
          c(r, "class", "session-remove-title svelte-3fkaoh"),
          c(i, "class", "session-remove-header svelte-3fkaoh"),
          c(f, "class", "svelte-3fkaoh"),
          c(V, "class", "session-name svelte-3fkaoh"),
          c(J, "class", "session-count-tabs svelte-3fkaoh"),
          c(N, "class", "session-info svelte-3fkaoh"),
          c(e, "class", "session-remove-popup svelte-3fkaoh"),
          c(e, "data-testid", "session-delete-popup");
      },
      m(W, he) {
        w(W, e, he),
          h(e, n),
          C(t, n, null),
          h(e, s),
          h(e, i),
          C(l, i, null),
          h(i, a),
          h(i, r),
          h(e, u),
          h(e, f),
          h(f, p),
          h(f, g),
          h(f, v),
          h(f, b),
          h(f, k),
          h(f, z),
          h(e, S),
          h(e, N),
          C(A, N, null),
          h(N, B),
          h(N, V),
          h(V, q),
          h(N, le),
          h(N, J),
          h(J, ie),
          h(e, te),
          h(e, U),
          C(ee, U, null),
          h(U, Ie),
          C(de, U, null),
          ($e = !0),
          Se || ((Ce = Z(n, "click", o[3])), (Se = !0));
      },
      p(W, he) {
        let Ee = {};
        he & 2 && (Ee.isTemporary = W[1]),
          he & 1 && (Ee.sessionName = W[0]),
          A.$set(Ee),
          (!$e || he & 1) && ae(q, W[0]),
          (!$e || he & 4) && ae(ie, W[2]);
        let Ve = {};
        he & 128 && (Ve.$$scope = { dirty: he, ctx: W }), ee.$set(Ve);
        let He = {};
        he & 128 && (He.$$scope = { dirty: he, ctx: W }), de.$set(He);
      },
      i(W) {
        $e ||
          (d(t.$$.fragment, W),
          d(l.$$.fragment, W),
          d(A.$$.fragment, W),
          d(ee.$$.fragment, W),
          d(de.$$.fragment, W),
          ($e = !0));
      },
      o(W) {
        _(t.$$.fragment, W),
          _(l.$$.fragment, W),
          _(A.$$.fragment, W),
          _(ee.$$.fragment, W),
          _(de.$$.fragment, W),
          ($e = !1);
      },
      d(W) {
        W && y(e), E(t), E(l), E(A), E(ee), E(de), (Se = !1), Ce();
      },
    }
  );
}
function i1(o) {
  let e, n;
  return (
    (e = new hn({
      props: {
        width: 258,
        minWidth: 258,
        height: "auto",
        $$slots: { default: [o1] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 135 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function l1(o) {
  let e, n;
  return (
    (e = new gn({
      props: { $$slots: { default: [i1] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 135 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function r1(o, e, n) {
  let t,
    { tabsCount: s } = e,
    { sessionName: i } = e,
    { isTemporary: l } = e,
    a = ye(),
    r = () => {
      a("close");
    },
    u = () => {
      a("removeSession");
    };
  return (
    (o.$$set = (f) => {
      "tabsCount" in f && n(5, (s = f.tabsCount)),
        "sessionName" in f && n(0, (i = f.sessionName)),
        "isTemporary" in f && n(1, (l = f.isTemporary));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 32) {
        e: n(2, (t = s > 99 ? "99+ tabs" : `${cn(s, "tab", "tabs")}`));
      }
    }),
    [i, l, t, r, u, s]
  );
}
var go = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          r1,
          l1,
          P,
          { tabsCount: 5, sessionName: 0, isTemporary: 1 },
          t1
        );
    }
  },
  Jr = go;
function a1(o) {
  R(
    o,
    "svelte-efwdxp",
    ".session.svelte-efwdxp{cursor:pointer;animation:svelte-efwdxp-fade-in var(--animation-time);user-select:none}@keyframes svelte-efwdxp-fade-in{from{opacity:0}to{opacity:1}}.session.is-in-edit-mode.svelte-efwdxp{cursor:inherit}"
  );
}
function c1(o) {
  let e, n;
  return (
    (e = new Pr({
      props: {
        session: o[0],
        isActiveSession: o[11],
        tabsCount: o[9],
        displayName: o[10],
        isDragEnter: o[14],
        isOpenContextMenu: o[15],
        isHovered: o[16],
        isExpanded: o[13],
        canAddSessions: o[2],
        isSessionAvailable: o[3],
        activationMethod: o[6],
        isExpandable: !o[5],
      },
    })),
    e.$on("edit", o[25]),
    e.$on("toggleExpanded", o[17]),
    e.$on("openContextMenu", o[18]),
    e.$on("toggleSessionRemovePopup", o[26]),
    e.$on("removeSession", o[27]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 1 && (i.session = t[0]),
          s[0] & 2048 && (i.isActiveSession = t[11]),
          s[0] & 512 && (i.tabsCount = t[9]),
          s[0] & 1024 && (i.displayName = t[10]),
          s[0] & 4 && (i.canAddSessions = t[2]),
          s[0] & 8 && (i.isSessionAvailable = t[3]),
          s[0] & 64 && (i.activationMethod = t[6]),
          s[0] & 32 && (i.isExpandable = !t[5]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function u1(o) {
  let e, n;
  return (
    (e = new Dr({ props: { session: o[0] } })),
    e.$on("edited", o[24]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 1 && (i.session = t[0]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Qr(o) {
  let e, n;
  return (
    (e = new ht({
      props: {
        sessionId: o[0].id,
        tabs: o[0].tabsList,
        isActiveSession: o[11],
        $$slots: {
          actionTab: [
            p1,
            ({ createNewTabShortcutKeys: t }) => ({ 37: t }),
            ({ createNewTabShortcutKeys: t }) => [0, t ? 64 : 0],
          ],
          tab: [
            f1,
            ({ sessionTab: t }) => ({ 38: t }),
            ({ sessionTab: t }) => [0, t ? 128 : 0],
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 1 && (i.sessionId = t[0].id),
          s[0] & 1 && (i.tabs = t[0].tabsList),
          s[0] & 2048 && (i.isActiveSession = t[11]),
          (s[0] & 17) | (s[1] & 448) && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function f1(o) {
  let e, n;
  return (
    (e = new Yr({
      props: {
        sessionId: o[0].id,
        sessionTab: o[38],
        isActive: Boolean(o[4] && o[4] === o[38].browserId),
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 1 && (i.sessionId = t[0].id),
          s[1] & 128 && (i.sessionTab = t[38]),
          (s[0] & 16) | (s[1] & 128) &&
            (i.isActive = Boolean(t[4] && t[4] === t[38].browserId)),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function d1(o) {
  let e, n;
  return (
    (e = new nt({ props: { width: "10", height: "10", slot: "icon" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function m1(o) {
  let e, n;
  return (
    (e = new Le({ props: { keys: o[37], slot: "actions" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[1] & 64 && (i.keys = t[37]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function p1(o) {
  let e, n;
  return (
    (e = new jt({
      props: {
        sessionId: o[0].id,
        name: L("sidecar_sessions__new_tab"),
        className: "create-new-tab-item",
        dataTestId: "session-tabs-" + o[0].id + ".create-new-tab-button",
        dragSubGroup: Fe.ignored,
        $$slots: { actions: [m1], icon: [d1] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("click", o[33]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 1 && (i.sessionId = t[0].id),
          s[0] & 1 &&
            (i.dataTestId =
              "session-tabs-" + t[0].id + ".create-new-tab-button"),
          s[1] & 320 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function ea(o) {
  let e, n;
  return (
    (e = new Jr({
      props: {
        sessionName: o[10],
        isTemporary: o[0].isTemporary,
        tabsCount: o[9],
      },
    })),
    e.$on("close", o[26]),
    e.$on("removeSession", o[27]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s[0] & 1024 && (i.sessionName = t[10]),
          s[0] & 1 && (i.isTemporary = t[0].isTemporary),
          s[0] & 512 && (i.tabsCount = t[9]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function _1(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m = [u1, c1],
    p = [];
  function g($, k) {
    return $[7] ? 0 : 1;
  }
  (n = g(o, [-1, -1])), (t = p[n] = m[n](o));
  let v = !o[5] && o[12] && Qr(o),
    b = o[8] && ea(o);
  return {
    c() {
      (e = T("li")),
        t.c(),
        (s = M()),
        v && v.c(),
        (l = M()),
        b && b.c(),
        (a = fe()),
        c(e, "data-testid", (i = "session.item-" + o[0].id)),
        c(e, "class", "session svelte-efwdxp"),
        oe(e, "is-in-edit-mode", o[7]);
    },
    m($, k) {
      w($, e, k),
        p[n].m(e, null),
        h(e, s),
        v && v.m(e, null),
        w($, l, k),
        b && b.m($, k),
        w($, a, k),
        (r = !0),
        u ||
          ((f = [
            Z(e, "mouseover", o[19]),
            Z(e, "mouseout", o[20]),
            Z(e, "dragenter", je(ze(o[21]))),
            Z(e, "dragleave", je(ze(o[22]))),
            Z(e, "dragend", je(ze(o[23]))),
          ]),
          (u = !0));
    },
    p($, k) {
      let z = n;
      (n = g($, k)),
        n === z
          ? p[n].p($, k)
          : (G(),
            _(p[z], 1, 1, () => {
              p[z] = null;
            }),
            K(),
            (t = p[n]),
            t ? t.p($, k) : ((t = p[n] = m[n]($)), t.c()),
            d(t, 1),
            t.m(e, s)),
        !$[5] && $[12]
          ? v
            ? (v.p($, k), k[0] & 4128 && d(v, 1))
            : ((v = Qr($)), v.c(), d(v, 1), v.m(e, null))
          : v &&
            (G(),
            _(v, 1, 1, () => {
              v = null;
            }),
            K()),
        (!r || (k[0] & 1 && i !== (i = "session.item-" + $[0].id))) &&
          c(e, "data-testid", i),
        (!r || k[0] & 128) && oe(e, "is-in-edit-mode", $[7]),
        $[8]
          ? b
            ? (b.p($, k), k[0] & 256 && d(b, 1))
            : ((b = ea($)), b.c(), d(b, 1), b.m(a.parentNode, a))
          : b &&
            (G(),
            _(b, 1, 1, () => {
              b = null;
            }),
            K());
    },
    i($) {
      r || (d(t), d(v), d(b), (r = !0));
    },
    o($) {
      _(t), _(v), _(b), (r = !1);
    },
    d($) {
      $ && y(e),
        p[n].d(),
        v && v.d(),
        $ && y(l),
        b && b.d($),
        $ && y(a),
        (u = !1),
        Te(f);
    },
  };
}
function h1(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u = j,
    f = () => (u(), (u = vt(k, (ge) => n(31, (r = ge)))), k),
    m,
    p,
    g,
    v;
  o.$$.on_destroy.push(() => u());
  let { session: b } = e,
    { activeSessionId: $ } = e,
    { editingSessionId: k } = e;
  f();
  let { canAddSessions: z } = e,
    { isSessionAvailable: S } = e,
    { activeTabId: N = null } = e,
    { isDragDisabled: A = !1 } = e,
    { showHeaderOnly: B = !1 } = e,
    { activationMethod: V = "activate-button" } = e,
    q,
    le = Ke(!1);
  ue(o, le, (ge) => n(12, (p = ge)));
  let J = Ke(!1);
  ue(o, J, (ge) => n(35, (m = ge)));
  let ie = Ke(!1);
  ue(o, ie, (ge) => n(32, (v = ge)));
  let te = Ke(!1);
  ue(o, te, (ge) => n(36, (g = ge)));
  let U = !1,
    ee = () => qe(le, (p = !p), p),
    Ie = () => qe(ie, (v = !0), v),
    de = () => qe(te, (g = !0), g),
    $e = () => qe(te, (g = !1), g),
    Se = () => {
      A ||
        (q && clearTimeout(q),
        (q = setTimeout(() => qe(le, (p = !0), p), 650)));
    },
    Ce = () => {
      q && clearTimeout(q);
    },
    W = () => {
      qe(J, (m = !1), m);
    },
    he = () => qe(k, (r = null), r),
    Ee = () => qe(k, (r = b.id), r),
    Ve = () => n(8, (U = !U)),
    He = () => {
      H.actions.sendAnalyticsEvent("sessions.delete-clicked", void 0),
        H.actions.removeSessionById(b.id);
    },
    Oe = () => H.actions.createNewTab({ index: 0 });
  return (
    (o.$$set = (ge) => {
      "session" in ge && n(0, (b = ge.session)),
        "activeSessionId" in ge && n(28, ($ = ge.activeSessionId)),
        "editingSessionId" in ge && f(n(1, (k = ge.editingSessionId))),
        "canAddSessions" in ge && n(2, (z = ge.canAddSessions)),
        "isSessionAvailable" in ge && n(3, (S = ge.isSessionAvailable)),
        "activeTabId" in ge && n(4, (N = ge.activeTabId)),
        "isDragDisabled" in ge && n(29, (A = ge.isDragDisabled)),
        "showHeaderOnly" in ge && n(5, (B = ge.showHeaderOnly)),
        "activationMethod" in ge && n(6, (V = ge.activationMethod));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty[0] & 268435457) {
        e: n(11, (t = Boolean(b.id === $)));
      }
      if (o.$$.dirty[0] & 1) {
        e: n(30, (s = b.tabsList));
      }
      if (o.$$.dirty[0] & 1073741825) {
        e: n(10, (i = bt(b, s)));
      }
      if ((o.$$.dirty[0] & 1) | (o.$$.dirty[1] & 1)) {
        e: n(7, (l = b.id === r));
      }
      if (o.$$.dirty[0] & 1) {
        e: n(9, (a = b.tabsOrder.length));
      }
      if ((o.$$.dirty[0] & 128) | (o.$$.dirty[1] & 2)) {
        e: l && v && qe(ie, (v = !1), v);
      }
      if (o.$$.dirty[0] & 1073741824) {
        e: s && s.length === 0 && qe(le, (p = !1), p);
      }
    }),
    [
      b,
      k,
      z,
      S,
      N,
      B,
      V,
      l,
      U,
      a,
      i,
      t,
      p,
      le,
      J,
      ie,
      te,
      ee,
      Ie,
      de,
      $e,
      Se,
      Ce,
      W,
      he,
      Ee,
      Ve,
      He,
      $,
      A,
      s,
      r,
      v,
      Oe,
    ]
  );
}
var bo = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          h1,
          _1,
          P,
          {
            session: 0,
            activeSessionId: 28,
            editingSessionId: 1,
            canAddSessions: 2,
            isSessionAvailable: 3,
            activeTabId: 4,
            isDragDisabled: 29,
            showHeaderOnly: 5,
            activationMethod: 6,
          },
          a1,
          [-1, -1]
        );
    }
  },
  qn = bo;
O();
function g1(o) {
  R(
    o,
    "svelte-37ti6y",
    ".add-new-session.svelte-37ti6y.svelte-37ti6y{width:100%;justify-content:flex-start;padding:8px;margin-bottom:8px;color:var(--add-session-text-color);transition:color 250ms}.add-new-session.svelte-37ti6y>.plus-icon.svelte-37ti6y{--size:24px;display:flex;align-items:center;justify-content:center;width:var(--size);min-width:var(--size);height:var(--size);margin-right:6px;background-color:var(--add-session-btn-icon-bg);border-radius:50%;transition:background-color 250ms}.add-new-session.svelte-37ti6y.svelte-37ti6y:hover{color:var(--add-session-text-color-hover)}.add-new-session.svelte-37ti6y:hover>.plus-icon.svelte-37ti6y{background-color:var(--add-session-btn-icon-bg-hover)}.add-new-session.svelte-37ti6y.svelte-37ti6y:disabled{cursor:not-allowed;opacity:0.7;pointer-events:none}"
  );
}
function ta(o) {
  let e, n;
  return (
    (e = new wn({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function b1(o) {
  let e,
    n,
    t,
    s,
    i = L("sidecar_sessions__add_new_session") + "",
    l,
    a,
    r,
    u,
    f;
  t = new nt({ props: { width: "12", height: "12" } });
  let m = o[1] && ta(o);
  return {
    c() {
      (e = T("button")),
        (n = T("span")),
        I(t.$$.fragment),
        (s = M()),
        (l = F(i)),
        (a = M()),
        m && m.c(),
        c(n, "class", "plus-icon svelte-37ti6y"),
        c(e, "class", "add-new-session svelte-37ti6y"),
        c(e, "aria-label", "Add new session"),
        c(e, "data-testid", "sessions.add-new-session-button");
    },
    m(p, g) {
      w(p, e, g),
        h(e, n),
        C(t, n, null),
        h(e, s),
        h(e, l),
        h(e, a),
        m && m.m(e, null),
        (r = !0),
        u ||
          ((f = Z(e, "click", function () {
            Ft(o[0] ? o[2] : o[3]) &&
              (o[0] ? o[2] : o[3]).apply(this, arguments);
          })),
          (u = !0));
    },
    p(p, [g]) {
      (o = p),
        o[1]
          ? m
            ? g & 2 && d(m, 1)
            : ((m = ta(o)), m.c(), d(m, 1), m.m(e, null))
          : m &&
            (G(),
            _(m, 1, 1, () => {
              m = null;
            }),
            K());
    },
    i(p) {
      r || (d(t.$$.fragment, p), d(m), (r = !0));
    },
    o(p) {
      _(t.$$.fragment, p), _(m), (r = !1);
    },
    d(p) {
      p && y(e), E(t), m && m.d(), (u = !1), f();
    },
  };
}
function v1(o, e, n) {
  let t = ye(),
    { canAddSessions: s } = e,
    { useProBadges: i } = e,
    l = () => {
      H.actions.sendAnalyticsEvent("sessions.add-new-clicked", {
        source: "sidecar",
      }),
        H.actions.explore("created_session");
      let r = ei();
      H.actions.createUserSession(r), t("added", { id: r });
    },
    a = () => {
      H.actions.startPlanUpgrade({
        source: "sidecar.sessions-become-pro.upgrade-button-clicked",
      });
    };
  return (
    (o.$$set = (r) => {
      "canAddSessions" in r && n(0, (s = r.canAddSessions)),
        "useProBadges" in r && n(1, (i = r.useProBadges));
    }),
    [s, i, l, a]
  );
}
var vo = class extends x {
    constructor(e) {
      super(),
        D(this, e, v1, b1, P, { canAddSessions: 0, useProBadges: 1 }, g1);
    }
  },
  Bn = vo;
O();
function ko(
  o,
  {
    delay: e = 0,
    duration: n = 400,
    easing: t = gi,
    start: s = 0,
    opacity: i = 0,
  } = {}
) {
  let l = getComputedStyle(o),
    a = +l.opacity,
    r = l.transform === "none" ? "" : l.transform,
    u = 1 - s,
    f = a * (1 - i);
  return {
    delay: e,
    duration: n,
    easing: t,
    css: (m, p) => `
			transform: ${r} scale(${1 - u * p});
			opacity: ${a - f * p}
		`,
  };
}
function k1(o) {
  R(
    o,
    "svelte-9rhzf0",
    ".container.svelte-9rhzf0{display:flex;flex:1}.menu-button.svelte-9rhzf0{display:flex;justify-content:flex-start;width:calc(100% - 1px)}.menu-button-text.svelte-9rhzf0{font-size:14px;font-style:normal;font-weight:600;margin:0 8px;text-overflow:ellipsis;overflow:hidden}.chevron.svelte-9rhzf0{width:12px;height:12px;display:flex;align-items:center;justify-content:center;transition:transform 100ms ease}.chevron.down.svelte-9rhzf0{transform:rotate(90deg)}.chevron.up.svelte-9rhzf0{transform:rotate(270deg)}.menu.svelte-9rhzf0{--sessions-menu-margin:10px;background:var(--popup-bg-color);position:absolute;z-index:1;width:calc(100vw - calc(var(--sessions-menu-margin) * 2));left:var(--sessions-menu-margin);top:36px;border-radius:8px;box-shadow:0 4px 20px 0 var(--vertical-tabs-switch-session-context-menu-shadow);padding:10px;border:1px solid var(--vertical-tabs-switch-session-context-menu-border)}.sessions.svelte-9rhzf0{list-style-type:none;padding:0}.shortcut.svelte-9rhzf0{display:flex;justify-content:center;align-items:center;gap:6px;padding:10px 8px;background:var(--vertical-tabs-switch-session-shortcut-bg-color)}"
  );
}
function na(o, e, n) {
  let t = o.slice();
  (t[16] = e[n]), (t[19] = n);
  let s = t[5] === null || t[19] < t[5];
  return (t[17] = s), t;
}
function sa(o) {
  let e,
    n,
    t,
    s,
    i = [],
    l = new Map(),
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b;
  (n = new Bn({ props: { canAddSessions: o[6], useProBadges: o[7] } })),
    n.$on("added", o[10]);
  let $ = o[1],
    k = (z) => z[16].id;
  for (let z = 0; z < $.length; z += 1) {
    let S = na(o, $, z),
      N = k(S);
    l.set(N, (i[z] = oa(N, S)));
  }
  return (
    (u = new Le({ props: { keys: o[4] } })),
    {
      c() {
        (e = T("div")), I(n.$$.fragment), (t = M()), (s = T("ul"));
        for (let z = 0; z < i.length; z += 1) i[z].c();
        (a = M()),
          (r = T("div")),
          I(u.$$.fragment),
          (f = M()),
          (m = T("span")),
          (m.textContent = `${L(
            "sessions_vertical_tabs_context_menu__shortcut_promo_postfix"
          )}`),
          c(s, "class", "sessions svelte-9rhzf0"),
          c(r, "class", "shortcut svelte-9rhzf0"),
          c(e, "class", "menu svelte-9rhzf0");
      },
      m(z, S) {
        w(z, e, S), C(n, e, null), h(e, t), h(e, s);
        for (let N = 0; N < i.length; N += 1) i[N] && i[N].m(s, null);
        h(e, a),
          h(e, r),
          C(u, r, null),
          h(r, f),
          h(r, m),
          (g = !0),
          v || ((b = Z(e, "mouseenter", o[13])), (v = !0));
      },
      p(z, S) {
        let N = {};
        S & 64 && (N.canAddSessions = z[6]),
          S & 128 && (N.useProBadges = z[7]),
          n.$set(N),
          S & 611 &&
            (($ = z[1]),
            G(),
            (i = Xe(i, S, k, 1, z, $, l, s, Ze, oa, null, na)),
            K());
        let A = {};
        S & 16 && (A.keys = z[4]), u.$set(A);
      },
      i(z) {
        if (!g) {
          d(n.$$.fragment, z);
          for (let S = 0; S < $.length; S += 1) d(i[S]);
          d(u.$$.fragment, z),
            fi(() => {
              g && (p || (p = Kn(e, ko, { duration: 250 }, !0)), p.run(1));
            }),
            (g = !0);
        }
      },
      o(z) {
        _(n.$$.fragment, z);
        for (let S = 0; S < i.length; S += 1) _(i[S]);
        _(u.$$.fragment, z),
          p || (p = Kn(e, ko, { duration: 250 }, !1)),
          p.run(0),
          (g = !1);
      },
      d(z) {
        z && y(e), E(n);
        for (let S = 0; S < i.length; S += 1) i[S].d();
        E(u), z && p && p.end(), (v = !1), b();
      },
    }
  );
}
function oa(o, e) {
  let n, t, s;
  return (
    (t = new qn({
      props: {
        session: e[16],
        activeSessionId: e[0].id,
        editingSessionId: e[9],
        canAddSessions: e[6],
        isSessionAvailable: e[17],
        showHeaderOnly: !0,
        activationMethod: "click",
      },
    })),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), I(t.$$.fragment), (this.first = n);
      },
      m(i, l) {
        w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        e = i;
        let a = {};
        l & 2 && (a.session = e[16]),
          l & 1 && (a.activeSessionId = e[0].id),
          l & 64 && (a.canAddSessions = e[6]),
          l & 34 && (a.isSessionAvailable = e[17]),
          t.$set(a);
      },
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(n), E(t, i);
      },
    }
  );
}
function w1(o) {
  let e, n, t, s, i, l, a, r, u, f, m, p, g, v;
  (t = new Ht({
    props: { isTemporary: o[0].isTemporary, sessionName: o[0].name },
  })),
    (u = new kn({ props: { width: "12", height: "12" } }));
  let b = o[2] && sa(o);
  return {
    c() {
      (e = T("div")),
        (n = T("button")),
        I(t.$$.fragment),
        (s = M()),
        (i = T("div")),
        (l = F(o[3])),
        (a = M()),
        (r = T("div")),
        I(u.$$.fragment),
        (m = M()),
        b && b.c(),
        c(i, "class", "menu-button-text svelte-9rhzf0"),
        c(
          r,
          "class",
          (f = De(`chevron ${o[2] ? "up" : "down"}`) + " svelte-9rhzf0")
        ),
        c(n, "class", "menu-button svelte-9rhzf0"),
        c(e, "class", "container svelte-9rhzf0");
    },
    m($, k) {
      w($, e, k),
        h(e, n),
        C(t, n, null),
        h(n, s),
        h(n, i),
        h(i, l),
        h(n, a),
        h(n, r),
        C(u, r, null),
        h(e, m),
        b && b.m(e, null),
        (p = !0),
        g ||
          ((v = [Z(n, "click", o[11]), Z(e, "mouseleave", o[12])]), (g = !0));
    },
    p($, [k]) {
      let z = {};
      k & 1 && (z.isTemporary = $[0].isTemporary),
        k & 1 && (z.sessionName = $[0].name),
        t.$set(z),
        (!p || k & 8) && ae(l, $[3]),
        (!p ||
          (k & 4 &&
            f !==
              (f =
                De(`chevron ${$[2] ? "up" : "down"}`) + " svelte-9rhzf0"))) &&
          c(r, "class", f),
        $[2]
          ? b
            ? (b.p($, k), k & 4 && d(b, 1))
            : ((b = sa($)), b.c(), d(b, 1), b.m(e, null))
          : b &&
            (G(),
            _(b, 1, 1, () => {
              b = null;
            }),
            K());
    },
    i($) {
      p || (d(t.$$.fragment, $), d(u.$$.fragment, $), d(b), (p = !0));
    },
    o($) {
      _(t.$$.fragment, $), _(u.$$.fragment, $), _(b), (p = !1);
    },
    d($) {
      $ && y(e), E(t), E(u), b && b.d(), (g = !1), Te(v);
    },
  };
}
function y1(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    { currentSession: f } = e,
    { sessions: m } = e,
    p = H.stores.sessionsList;
  ue(o, p, (S) => n(14, (u = S)));
  let g = !1,
    v = Ke(null);
  ue(o, v, (S) => n(15, (r = S)));
  let b = (S) => {
      qe(v, (r = S.detail.id), r);
    },
    $ = () => {
      n(2, (g = !g));
    },
    k = () => {
      n(2, (g = !1));
    },
    z = () => {
      n(2, (g = !0));
    };
  return (
    (o.$$set = (S) => {
      "currentSession" in S && n(0, (f = S.currentSession)),
        "sessions" in S && n(1, (m = S.sessions));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 16384) {
        e: n(7, (t = u?.useProBadges ?? !1));
      }
      if (o.$$.dirty & 16384) {
        e: n(6, (s = u?.canAddSessions ?? !1));
      }
      if (o.$$.dirty & 16384) {
        e: n(5, (i = u?.maxSessionsAvailable ?? null));
      }
      if (o.$$.dirty & 16384) {
        e: n(4, (l = u?.switchSessionShortcutKeys ?? []));
      }
      if (o.$$.dirty & 1) {
        e: n(3, (a = bt(f, f.tabsList)));
      }
    }),
    [f, m, g, a, l, i, s, t, p, v, b, $, k, z, u]
  );
}
var wo = class extends x {
    constructor(e) {
      super(), D(this, e, y1, w1, P, { currentSession: 0, sessions: 1 }, k1);
    }
  },
  ia = wo;
function $1(o) {
  R(
    o,
    "svelte-9wcn6z",
    ".header.svelte-9wcn6z.svelte-9wcn6z{display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 16px;border-bottom:1px solid var(--vertical-tabs-border-color);gap:4px}.header.svelte-9wcn6z .sessions-menu.svelte-9wcn6z{display:flex;flex:1;height:100%;padding:0 5px;overflow:hidden;align-items:center}@media(max-width: 160px){.header.svelte-9wcn6z .sessions-menu.svelte-9wcn6z{display:none}}@media(max-width: 100px){.header.svelte-9wcn6z.svelte-9wcn6z{padding:0}}.actions.svelte-9wcn6z.svelte-9wcn6z{display:flex;gap:13px;margin-left:auto}.actions.svelte-9wcn6z .session-pin-button{padding:0}@media(max-width: 160px){.actions.svelte-9wcn6z .search-button{display:none}}@media(max-width: 160px){.actions.svelte-9wcn6z.svelte-9wcn6z{margin-right:auto}}.pin-tooltip.svelte-9wcn6z.svelte-9wcn6z{display:flex;align-items:center;gap:6px}"
  );
}
function la(o) {
  let e, n, t;
  return (
    (n = new ia({ props: { currentSession: o[0], sessions: o[1] } })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "sessions-menu svelte-9wcn6z");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 1 && (l.currentSession = s[0]),
          i & 2 && (l.sessions = s[1]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function S1(o) {
  let e, n;
  return (
    (e = new yn({ props: { width: "18", height: "18" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function T1(o) {
  let e, n;
  return (
    (e = new Mr({ props: { width: "18", height: "18" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function I1(o) {
  let e,
    n,
    t =
      (o[2]
        ? L("sessions_vertical_tabs__unpin")
        : L("sessions_vertical_tabs__pin")) + "",
    s,
    i,
    l,
    a;
  return (
    (l = new Le({ props: { keys: o[3] } })),
    {
      c() {
        (e = T("div")),
          (n = T("span")),
          (s = F(t)),
          (i = M()),
          I(l.$$.fragment),
          c(e, "class", "pin-tooltip svelte-9wcn6z"),
          c(e, "slot", "tooltip");
      },
      m(r, u) {
        w(r, e, u), h(e, n), h(n, s), h(e, i), C(l, e, null), (a = !0);
      },
      p(r, u) {
        (!a || u & 4) &&
          t !==
            (t =
              (r[2]
                ? L("sessions_vertical_tabs__unpin")
                : L("sessions_vertical_tabs__pin")) + "") &&
          ae(s, t);
        let f = {};
        u & 8 && (f.keys = r[3]), l.$set(f);
      },
      i(r) {
        a || (d(l.$$.fragment, r), (a = !0));
      },
      o(r) {
        _(l.$$.fragment, r), (a = !1);
      },
      d(r) {
        r && y(e), E(l);
      },
    }
  );
}
function C1(o) {
  let e, n;
  return (
    (e = new Qe({
      props: {
        tooltipPlacement: "bottom-start",
        $$slots: { tooltip: [I1], default: [T1] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 140 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function E1(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f = o[0] && la(o);
  return (
    (s = new me({
      props: {
        className: "session-pin-button search-button",
        mod: "round",
        dataTestId: "sidecar-session.search-button",
        $$slots: { default: [S1] },
        $$scope: { ctx: o },
      },
    })),
    s.$on("click", o[5]),
    (a = new me({
      props: {
        className: "session-pin-button",
        mod: "round",
        dataTestId: "sidecar-session.pin-button" + (o[2] ? "-active" : ""),
        pressed: o[2],
        $$slots: { default: [C1] },
        $$scope: { ctx: o },
      },
    })),
    a.$on("click", o[4]),
    {
      c() {
        (e = T("div")),
          f && f.c(),
          (n = M()),
          (t = T("div")),
          (i = T("div")),
          I(s.$$.fragment),
          (l = M()),
          (r = T("div")),
          I(a.$$.fragment),
          se(i, "display", "contents"),
          se(i, "--round-button-bg", "transparent"),
          se(i, "--round-button-bg-hover", "var(--round-button-hover)"),
          se(i, "--round-button-bg-active", "var(--round-button-active)"),
          se(r, "display", "contents"),
          se(r, "--round-button-bg", "transparent"),
          se(r, "--round-button-bg-hover", "var(--round-button-hover)"),
          se(r, "--round-button-bg-active", "var(--round-button-active)"),
          c(t, "class", "actions svelte-9wcn6z"),
          c(e, "class", "header svelte-9wcn6z");
      },
      m(m, p) {
        w(m, e, p),
          f && f.m(e, null),
          h(e, n),
          h(e, t),
          h(t, i),
          C(s, i, null),
          h(t, l),
          h(t, r),
          C(a, r, null),
          (u = !0);
      },
      p(m, [p]) {
        m[0]
          ? f
            ? (f.p(m, p), p & 1 && d(f, 1))
            : ((f = la(m)), f.c(), d(f, 1), f.m(e, n))
          : f &&
            (G(),
            _(f, 1, 1, () => {
              f = null;
            }),
            K());
        let g = {};
        p & 128 && (g.$$scope = { dirty: p, ctx: m }), s.$set(g);
        let v = {};
        p & 4 &&
          (v.dataTestId =
            "sidecar-session.pin-button" + (m[2] ? "-active" : "")),
          p & 4 && (v.pressed = m[2]),
          p & 140 && (v.$$scope = { dirty: p, ctx: m }),
          a.$set(v);
      },
      i(m) {
        u || (d(f), d(s.$$.fragment, m), d(a.$$.fragment, m), (u = !0));
      },
      o(m) {
        _(f), _(s.$$.fragment, m), _(a.$$.fragment, m), (u = !1);
      },
      d(m) {
        m && y(e), f && f.d(), E(s), E(a);
      },
    }
  );
}
function z1(o, e, n) {
  let t = ye(),
    { currentSession: s } = e,
    { sessions: i } = e,
    { isPinned: l = !1 } = e,
    { pinVerticalTabsSidecarKeys: a } = e,
    r = () => {
      if (l) {
        H.actions.unpinSidecar();
        return;
      }
      H.actions.pinSidecar();
    },
    u = () => {
      t("openSearch");
    };
  return (
    (o.$$set = (f) => {
      "currentSession" in f && n(0, (s = f.currentSession)),
        "sessions" in f && n(1, (i = f.sessions)),
        "isPinned" in f && n(2, (l = f.isPinned)),
        "pinVerticalTabsSidecarKeys" in f &&
          n(3, (a = f.pinVerticalTabsSidecarKeys));
    }),
    [s, i, l, a, r, u]
  );
}
var yo = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          z1,
          E1,
          P,
          {
            currentSession: 0,
            sessions: 1,
            isPinned: 2,
            pinVerticalTabsSidecarKeys: 3,
          },
          $1
        );
    }
  },
  ra = yo;
O();
O();
function M1(o) {
  R(
    o,
    "svelte-1uai5jv",
    ".input.svelte-1uai5jv{display:flex;flex:1}.input.svelte-1uai5jv .search-input{background:transparent;height:100%;display:flex;flex-direction:row;align-items:center;column-gap:10px;width:100%;padding:0;color:var(--vertical-tabs-input-color)}.input.svelte-1uai5jv .search-input input{font-size:12px}.input.svelte-1uai5jv .search-input input::placeholder{font-size:12px}"
  );
}
function N1(o) {
  let e, n;
  return (
    (e = new yn({ props: { width: "16", height: "16" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function A1(o) {
  let e,
    n,
    t,
    s = {
      placeholder: L("sessions_vertical_tabs_view__search_placeholder"),
      className: "search-input",
      value: o[0],
      inputError: o[2],
      $$slots: { prepend: [N1] },
      $$scope: { ctx: o },
    };
  return (
    (n = new pi({ props: s })),
    o[3](n),
    n.$on("input", o[4]),
    {
      c() {
        (e = T("div")), I(n.$$.fragment), c(e, "class", "input svelte-1uai5jv");
      },
      m(i, l) {
        w(i, e, l), C(n, e, null), (t = !0);
      },
      p(i, [l]) {
        let a = {};
        l & 1 && (a.value = i[0]),
          l & 32 && (a.$$scope = { dirty: l, ctx: i }),
          n.$set(a);
      },
      i(i) {
        t || (d(n.$$.fragment, i), (t = !0));
      },
      o(i) {
        _(n.$$.fragment, i), (t = !1);
      },
      d(i) {
        i && y(e), o[3](null), E(n);
      },
    }
  );
}
function L1(o, e, n) {
  let { value: t } = e,
    s,
    i = Ke(!1);
  Me(() => {
    s.focus();
  });
  function l(r) {
    _e[r ? "unshift" : "push"](() => {
      (s = r), n(1, s);
    });
  }
  function a(r) {
    pe.call(this, o, r);
  }
  return (
    (o.$$set = (r) => {
      "value" in r && n(0, (t = r.value));
    }),
    [t, s, i, l, a]
  );
}
var $o = class extends x {
    constructor(e) {
      super(), D(this, e, L1, A1, P, { value: 0 }, M1);
    }
  },
  aa = $o;
O();
function j1(o) {
  R(
    o,
    "svelte-kxez48",
    ".header.svelte-kxez48{display:flex;align-items:center;padding:12px;border-bottom:1px solid var(--vertical-tabs-border-color)}"
  );
}
function V1(o) {
  let e, n;
  return (
    (e = new ct({ props: { width: "14", height: "14" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function H1(o) {
  let e, n, t, s, i, l;
  return (
    (n = new aa({ props: { value: o[0] } })),
    n.$on("input", o[2]),
    (s = new me({
      props: {
        className: "session-pin-button",
        mod: "round",
        dataTestId: "sidecar-session.search-button",
        $$slots: { default: [V1] },
        $$scope: { ctx: o },
      },
    })),
    s.$on("click", o[1]),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          (t = M()),
          (i = T("div")),
          I(s.$$.fragment),
          se(i, "display", "contents"),
          se(i, "--round-button-bg", "transparent"),
          se(i, "--round-button-bg-hover", "var(--round-button-hover)"),
          se(i, "--round-button-bg-active", "var(--round-button-active)"),
          se(i, "--round-button-size", "20px"),
          c(e, "class", "header svelte-kxez48");
      },
      m(a, r) {
        w(a, e, r), C(n, e, null), h(e, t), h(e, i), C(s, i, null), (l = !0);
      },
      p(a, [r]) {
        let u = {};
        r & 1 && (u.value = a[0]), n.$set(u);
        let f = {};
        r & 32 && (f.$$scope = { dirty: r, ctx: a }), s.$set(f);
      },
      i(a) {
        l || (d(n.$$.fragment, a), d(s.$$.fragment, a), (l = !0));
      },
      o(a) {
        _(n.$$.fragment, a), _(s.$$.fragment, a), (l = !1);
      },
      d(a) {
        a && y(e), E(n), E(s);
      },
    }
  );
}
function O1(o, e, n) {
  let t = ye(),
    { value: s } = e,
    i = !1,
    l = () => {
      t("close");
    },
    a = () => {
      i ||
        (H.actions.sendAnalyticsEvent("sidecar.search-by-opened-tabs-used"),
        (i = !0));
    };
  return (
    (o.$$set = (r) => {
      "value" in r && n(0, (s = r.value));
    }),
    [s, l, a]
  );
}
var So = class extends x {
    constructor(e) {
      super(), D(this, e, O1, H1, P, { value: 0 }, j1);
    }
  },
  ca = So;
O();
O();
function q1(o) {
  R(
    o,
    "svelte-1ggifes",
    ".actions.svelte-1ggifes{margin:2px;min-width:62px}.copy-button.svelte-1ggifes{padding:3px;font-size:12px;line-height:12px;border-radius:2px;transition:background 150ms ease-in-out;background:var(--vertical-tabs-copy-btn-bg);min-width:inherit}.copy-button.svelte-1ggifes:hover{background:var(--vertical-tabs-copy-btn-hover)}"
  );
}
function B1(o) {
  let e,
    n,
    t =
      (o[3]
        ? L("sessions_vertical_tabs_view__copied")
        : L("sessions_vertical_tabs_view__copy_link")) + "",
    s,
    i,
    l;
  return {
    c() {
      (e = T("div")),
        (n = T("button")),
        (s = F(t)),
        c(n, "class", "copy-button svelte-1ggifes"),
        c(e, "slot", "actions"),
        c(e, "class", "actions svelte-1ggifes");
    },
    m(a, r) {
      w(a, e, r), h(e, n), h(n, s), i || ((l = Z(n, "click", o[5])), (i = !0));
    },
    p(a, r) {
      r & 8 &&
        t !==
          (t =
            (a[3]
              ? L("sessions_vertical_tabs_view__copied")
              : L("sessions_vertical_tabs_view__copy_link")) + "") &&
        ae(s, t);
    },
    d(a) {
      a && y(e), (i = !1), l();
    },
  };
}
function P1(o) {
  let e, n;
  return (
    (e = new Vt({
      props: {
        sessionTab: o[0],
        sessionId: o[1],
        isActive: o[2],
        usePadding: !1,
        $$slots: { actions: [B1] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 1 && (i.sessionTab = t[0]),
          s & 2 && (i.sessionId = t[1]),
          s & 4 && (i.isActive = t[2]),
          s & 73 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function D1(o, e, n) {
  let { sessionTab: t } = e,
    { sessionId: s } = e,
    { isActive: i } = e,
    l = !1,
    a = (u) => {
      navigator.clipboard
        .writeText(u)
        .then(() => {
          n(3, (l = !0)),
            setTimeout(() => {
              n(3, (l = !1));
            }, 1e3);
        })
        .catch(Dt);
    },
    r = () => a(t.url);
  return (
    (o.$$set = (u) => {
      "sessionTab" in u && n(0, (t = u.sessionTab)),
        "sessionId" in u && n(1, (s = u.sessionId)),
        "isActive" in u && n(2, (i = u.isActive));
    }),
    [t, s, i, l, a, r]
  );
}
var To = class extends x {
    constructor(e) {
      super(),
        D(this, e, D1, P1, P, { sessionTab: 0, sessionId: 1, isActive: 2 }, q1);
    }
  },
  ua = To;
function x1(o) {
  let e, n;
  return (
    (e = new ua({
      props: {
        sessionTab: o[4],
        sessionId: o[2],
        isActive: Boolean(o[3] && o[3] === o[4].browserId),
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 16 && (i.sessionTab = t[4]),
          s & 4 && (i.sessionId = t[2]),
          s & 24 && (i.isActive = Boolean(t[3] && t[3] === t[4].browserId)),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function F1(o) {
  let e, n;
  return (
    (e = new ht({
      props: {
        name: o[0],
        tabs: o[1],
        sessionId: o[2],
        isActiveSession: !0,
        canPutItems: !1,
        useMargin: !1,
        $$slots: {
          tab: [
            x1,
            ({ sessionTab: t }) => ({ 4: t }),
            ({ sessionTab: t }) => (t ? 16 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 1 && (i.name = t[0]),
          s & 2 && (i.tabs = t[1]),
          s & 4 && (i.sessionId = t[2]),
          s & 60 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function G1(o, e, n) {
  let { name: t } = e,
    { tabs: s } = e,
    { sessionId: i } = e,
    { activeTabId: l } = e;
  return (
    (o.$$set = (a) => {
      "name" in a && n(0, (t = a.name)),
        "tabs" in a && n(1, (s = a.tabs)),
        "sessionId" in a && n(2, (i = a.sessionId)),
        "activeTabId" in a && n(3, (l = a.activeTabId));
    }),
    [t, s, i, l]
  );
}
var Io = class extends x {
    constructor(e) {
      super(),
        D(this, e, G1, F1, P, {
          name: 0,
          tabs: 1,
          sessionId: 2,
          activeTabId: 3,
        });
    }
  },
  fa = Io;
function K1(o) {
  R(
    o,
    "svelte-1s6i4a0",
    ".content.svelte-1s6i4a0{margin:6px 6px 54px;padding:0 5px;-webkit-font-smoothing:antialiased;overflow:hidden}@media(max-width: 160px){.content.svelte-1s6i4a0{margin:0 0 54px;padding:0 4px}}.footer.svelte-1s6i4a0{margin-top:auto;width:100%;position:fixed;bottom:0;background:var(--vertical-tabs-footer-bg);backdrop-filter:blur(7.5px);-webkit-font-smoothing:antialiased}"
  );
}
function R1(o) {
  let e, n;
  return (
    (e = new tt({
      props: {
        $$slots: { footer: [X1], header: [Z1], default: [W1] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 16785395 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function U1(o) {
  let e, n;
  return (
    (e = new tt({
      props: { $$slots: { header: [J1], default: [Y1] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 16779304 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function da(o) {
  let e, n, t;
  return (
    (n = new Er({
      props: {
        sessionId: o[5],
        pinnedTabs: o[10],
        regularTabs: o[9],
        tabGroups: o[8],
        activeTabId: o[11],
        createNewTabShortcutKeys: o[7],
        shouldOpenNewTabsOnTop: o[4],
      },
    })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "content svelte-1s6i4a0");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 32 && (l.sessionId = s[5]),
          i & 1024 && (l.pinnedTabs = s[10]),
          i & 512 && (l.regularTabs = s[9]),
          i & 256 && (l.tabGroups = s[8]),
          i & 2048 && (l.activeTabId = s[11]),
          i & 128 && (l.createNewTabShortcutKeys = s[7]),
          i & 16 && (l.shouldOpenNewTabsOnTop = s[4]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function W1(o) {
  let e,
    n,
    t = o[5] && da(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, i) {
      s[5]
        ? t
          ? (t.p(s, i), i & 32 && d(t, 1))
          : ((t = da(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function Z1(o) {
  let e, n;
  return (
    (e = new ra({
      props: {
        slot: "header",
        pinVerticalTabsSidecarKeys: o[6],
        currentSession: o[1],
        sessions: o[12],
        isPinned: o[0],
      },
    })),
    e.$on("openSearch", o[16]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 64 && (i.pinVerticalTabsSidecarKeys = t[6]),
          s & 2 && (i.currentSession = t[1]),
          s & 4096 && (i.sessions = t[12]),
          s & 1 && (i.isPinned = t[0]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function X1(o) {
  let e, n, t;
  return (
    (n = new zr({ props: { createNewTabShortcutKeys: o[7] } })),
    n.$on("click", o[22]),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "slot", "footer"),
          c(e, "class", "footer svelte-1s6i4a0");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 128 && (l.createNewTabShortcutKeys = s[7]), n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function ma(o) {
  let e, n, t;
  return (
    (n = new fa({
      props: {
        name: "vertical-tabs-search-list",
        tabs: o[3],
        sessionId: o[5],
        activeTabId: o[11],
      },
    })),
    {
      c() {
        (e = T("div")),
          I(n.$$.fragment),
          c(e, "class", "content svelte-1s6i4a0");
      },
      m(s, i) {
        w(s, e, i), C(n, e, null), (t = !0);
      },
      p(s, i) {
        let l = {};
        i & 8 && (l.tabs = s[3]),
          i & 32 && (l.sessionId = s[5]),
          i & 2048 && (l.activeTabId = s[11]),
          n.$set(l);
      },
      i(s) {
        t || (d(n.$$.fragment, s), (t = !0));
      },
      o(s) {
        _(n.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && y(e), E(n);
      },
    }
  );
}
function Y1(o) {
  let e,
    n,
    t = o[5] && ma(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, i) {
      s[5]
        ? t
          ? (t.p(s, i), i & 32 && d(t, 1))
          : ((t = ma(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function J1(o) {
  let e, n;
  return (
    (e = new ca({ props: { slot: "header", value: o[15] } })),
    e.$on("close", o[17]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Q1(o) {
  let e,
    n,
    t,
    s,
    i = [U1, R1],
    l = [];
  function a(r, u) {
    return r[2] ? 0 : 1;
  }
  return (
    (e = a(o, -1)),
    (n = l[e] = i[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(r, u) {
        l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, [u]) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? l[e].p(r, u)
            : (G(),
              _(l[f], 1, 1, () => {
                l[f] = null;
              }),
              K(),
              (n = l[e]),
              n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
              d(n, 1),
              n.m(t.parentNode, t));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        l[e].d(r), r && y(t);
      },
    }
  );
}
function e_(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    { isPinned: k } = e,
    z = H.stores.sessionsList;
  ue(o, z, (ie) => n(20, (b = ie)));
  let S = H.stores.sessionListActiveTab;
  ue(o, S, (ie) => n(21, ($ = ie)));
  let N = !1,
    A = Ke("");
  ue(o, A, (ie) => n(19, (v = ie)));
  let B = (ie, te) =>
      ie.title?.toLowerCase().includes(te) || ie.url.toLowerCase().includes(te),
    V,
    q = () => {
      n(2, (N = !0));
    },
    le = () => {
      n(2, (N = !1)), A.set("");
    },
    J = () => H.actions.createNewTab();
  return (
    (o.$$set = (ie) => {
      "isPinned" in ie && n(0, (k = ie.isPinned));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 1048576) {
        e: n(1, (t = b?.currentSession));
      }
      if (o.$$.dirty & 1048576) {
        e: n(12, (s = b?.sessions ?? []));
      }
      if (o.$$.dirty & 2097152) {
        e: n(11, (i = $?.tabId ?? void 0));
      }
      if (o.$$.dirty & 2) {
        e: n(10, (l = t?.pinnedTabs ?? []));
      }
      if (o.$$.dirty & 2) {
        e: n(9, (a = t?.regularTabs ?? []));
      }
      if (o.$$.dirty & 2) {
        e: n(18, (r = t?.tabsList ?? []));
      }
      if (o.$$.dirty & 2) {
        e: n(8, (u = t?.tabGroups ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(7, (f = b?.createNewTabShortcutKeys ?? []));
      }
      if (o.$$.dirty & 1048576) {
        e: n(6, (m = b?.pinVerticalTabsSidecarKeys ?? []));
      }
      if (o.$$.dirty & 2) {
        e: n(5, (p = t?.id));
      }
      if (o.$$.dirty & 1048576) {
        e: n(4, (g = b?.shouldOpenNewTabsOnTop ?? !1));
      }
      if (o.$$.dirty & 786432) {
        e: n(3, (V = v ? r.filter((ie) => B(ie, v.toLowerCase())) : r));
      }
    }),
    [k, t, N, V, g, p, m, f, u, a, l, i, s, z, S, A, q, le, r, v, b, $, J]
  );
}
var Co = class extends x {
    constructor(e) {
      super(), D(this, e, e_, Q1, P, { isPinned: 0 }, K1);
    }
  },
  pa = Co;
O();
O();
O();
var { window: t_ } = mn;
function n_(o) {
  let e, n, t;
  return {
    c() {
      (e = T("div")), se(e, "height", "100%");
    },
    m(s, i) {
      w(s, e, i), o[8](e), n || ((t = Z(t_, "resize", o[1])), (n = !0));
    },
    p: j,
    i: j,
    o: j,
    d(s) {
      s && y(e), o[8](null), (n = !1), t();
    },
  };
}
var _a = si(5),
  s_ = ni(16),
  Mo = new Map(),
  Ot = new Map(),
  ha = new oi(),
  No = new Map(),
  o_ = (o) => {
    Ot.has(o) && (clearTimeout(Ot.get(o)), Ot.delete(o));
  },
  i_ = (o) => {
    let e = document.createElement("iframe");
    return (
      (e.style.position = "absolute"),
      (e.style.display = "none"),
      (e.style.border = "0"),
      e.addEventListener("load", () => {
        Promise.race([
          new Promise((n) => {
            let t = (s) => {
              s.data === "pong_lcp" &&
                (window.removeEventListener("message", t, !1), n(void 0));
            };
            e.contentWindow?.postMessage("ping_lcp", "*"),
              window.addEventListener("message", t, !1);
          }),
          new Promise((n) => {
            setTimeout(n, ti(10));
          }),
        ])
          .then(() => {
            No.set(o, !0), ha.emit("rendered", o);
          })
          .catch(Dt);
      }),
      Mo.set(o, e),
      window.document.body.appendChild(e),
      e
    );
  },
  l_ = (o) => (o_(o), Mo.get(o) || i_(o)),
  Eo = (o, e, n = 0) => {
    if (n > s_ || !e.parentNode) return;
    let t = e.getBoundingClientRect();
    if (!t.height || !t.width) {
      requestAnimationFrame(() => Eo(o, e, n + 1));
      return;
    }
    let { style: s } = o;
    (s.display = "block"),
      (s.left = `${t.left}px`),
      (s.top = `${t.top}px`),
      (s.width = `${t.width}px`),
      (s.height = `${t.height}px`);
  },
  r_ = (o, e) => {
    o.src || (o.src = e);
  },
  a_ = (o, e) => {
    o.sandbox = e;
  },
  c_ = (o, e) => {
    e.remove(), Mo.delete(o), Ot.delete(o), No.delete(o);
  },
  u_ = (o, e, n) => {
    if (Ot.has(o)) return;
    let t = setTimeout(() => {
      Pe(e, "No iframe to destroy"), c_(o, e);
    }, n);
    Ot.set(o, t);
  },
  f_ = (o, e, n) => {
    let t = typeof o == "number" ? o : parseInt(o, e);
    return Number.isNaN(t) ? n : t;
  },
  d_ = (o) => No.get(o),
  m_ = (o, e) =>
    ha.on("rendered", (n) => {
      n === o && e();
    });
function p_(o, e, n) {
  let t = ye(),
    { name: s } = e,
    { src: i } = e,
    { sandbox: l = "" } = e,
    { timeout: a = _a } = e,
    r = null,
    u = null,
    f = !1,
    m,
    p = null,
    g = () => {
      p && cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          (p = null), !(!r || !u) && Eo(r, u);
        }));
    },
    v = () => {
      t("rendered");
    },
    b = () => {
      m?.(), (m = m_(s, v)), d_(s) && Promise.resolve().then(v).catch(Dt);
    };
  Me(() => {
    n(7, (f = !0));
  }),
    _n(() => {
      if (
        (n(7, (f = !1)), m?.(), !r || (n(6, (r.style.display = "none"), r), !s))
      )
        return;
      let k = f_(a, 10, _a);
      u_(s, r, k);
    });
  function $(k) {
    _e[k ? "unshift" : "push"](() => {
      (u = k), n(0, u);
    });
  }
  return (
    (o.$$set = (k) => {
      "name" in k && n(2, (s = k.name)),
        "src" in k && n(3, (i = k.src)),
        "sandbox" in k && n(4, (l = k.sandbox)),
        "timeout" in k && n(5, (a = k.timeout));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 140) {
        e: s && f && i && n(6, (r = l_(s)));
      }
      if (o.$$.dirty & 4) {
        e: s && b();
      }
      if (o.$$.dirty & 65) {
        e: r && u && Eo(r, u);
      }
      if (o.$$.dirty & 72) {
        e: r && i && r_(r, i);
      }
      if (o.$$.dirty & 80) {
        e: r && l && a_(r, l);
      }
    }),
    [u, g, s, i, l, a, r, f, $]
  );
}
var zo = class extends x {
    constructor(e) {
      super(),
        D(this, e, p_, n_, P, { name: 2, src: 3, sandbox: 4, timeout: 5 });
    }
  },
  ga = zo;
O();
function __(o) {
  R(
    o,
    "svelte-1nxris7",
    `.tasks-skeleton.svelte-1nxris7{background:var(--tasks-background);position:absolute;inset:0;z-index:1}.header.svelte-1nxris7,.body.svelte-1nxris7{padding:12px 15px}.header.svelte-1nxris7{border-bottom:1px solid var(--tasks-border)}.box.svelte-1nxris7{border-radius:4px;background:linear-gradient(
        115deg,
        rgb(255 255 255 / 0) 30%,
        var(--tasks-skeleton-glow) 50%,
        rgb(255 255 255 / 0) 65%
      ),
      var(--tasks-skeleton-color);background-repeat:repeat-y;background-size:300px 100%;background-position:-300px 0;animation:svelte-1nxris7-shine 3s infinite}.icon.svelte-1nxris7{border-radius:999px;background:var(--tasks-skeleton-icon-color);position:relative}.icon-plus.svelte-1nxris7::before,.icon-plus.svelte-1nxris7::after{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);background:var(--tasks-skeleton-color);border-radius:3px;width:10px;height:2px}.icon-plus.svelte-1nxris7::after{transform:translate(-50%, -50%) rotate(90deg)}@keyframes svelte-1nxris7-shine{to{background-position:600px 0}}`
  );
}
function h_(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        (e.innerHTML = `<div class="header svelte-1nxris7"><div class="box svelte-1nxris7" style="width: 120px; height: 20px; margin-bottom: 5px"></div> 
    <div class="box svelte-1nxris7" style="width: 83px; height: 10px; margin-bottom: 8px"></div> 
    <div class="box svelte-1nxris7" style="height: 5px"></div></div> 

  <div class="body svelte-1nxris7"><div class="box svelte-1nxris7" style="height: 36px; margin-bottom: 8px; padding: 9px 10px"><div class="icon icon-plus svelte-1nxris7" style="width: 18px; height: 18px"></div></div> 
    <div class="box svelte-1nxris7" style="height: 112px; margin-bottom: 11px; animation-delay: 100ms"></div> 
    <div class="box svelte-1nxris7" style="height: 112px; margin-bottom: 11px; animation-delay: 200ms"></div> 
    <div class="box svelte-1nxris7" style="height: 112px; margin-bottom: 11px; animation-delay: 300ms"></div> 
    <div class="box svelte-1nxris7" style="height: 112px; animation-delay: 400ms"></div></div>`),
        c(e, "class", "tasks-skeleton svelte-1nxris7");
    },
    m(n, t) {
      w(n, e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && y(e);
    },
  };
}
var Ao = class extends x {
    constructor(e) {
      super(), D(this, e, null, h_, P, {}, __);
    }
  },
  ba = Ao;
function va(o) {
  let e, n;
  return (
    (e = new ba({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function g_(o) {
  let e, n, t, s;
  (e = new ga({ props: { name: "tasks", src: o[0] } })),
    e.$on("rendered", o[6]);
  let i = !o[2] && va(o);
  return {
    c() {
      I(e.$$.fragment), (n = M()), i && i.c(), (t = fe());
    },
    m(l, a) {
      C(e, l, a), w(l, n, a), i && i.m(l, a), w(l, t, a), (s = !0);
    },
    p(l, a) {
      let r = {};
      a & 1 && (r.src = l[0]),
        e.$set(r),
        l[2]
          ? i &&
            (G(),
            _(i, 1, 1, () => {
              i = null;
            }),
            K())
          : i
          ? a & 4 && d(i, 1)
          : ((i = va(l)), i.c(), d(i, 1), i.m(t.parentNode, t));
    },
    i(l) {
      s || (d(e.$$.fragment, l), d(i), (s = !0));
    },
    o(l) {
      _(e.$$.fragment, l), _(i), (s = !1);
    },
    d(l) {
      E(e, l), l && y(n), i && i.d(l), l && y(t);
    },
  };
}
function b_(o) {
  let e, n;
  return (
    (e = new pt({
      props: {
        slot: "header",
        tabs: o[3]
          ? [
              { title: L("sidecar_collections__title"), onClick: o[8] },
              { title: L("sidecar_tasks__title"), isActive: !0 },
            ]
          : [],
        closeTooltipText: L("sidecar_tasks__close_tasks"),
        title: L("sidecar_tasks__title"),
        canBeExpanded: !0,
        useCrossIcon: o[1],
      },
    })),
    e.$on("close", o[9]),
    e.$on("toggleSidecarFullscreen", o[10]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 8 &&
          (i.tabs = t[3]
            ? [
                { title: L("sidecar_collections__title"), onClick: t[8] },
                { title: L("sidecar_tasks__title"), isActive: !0 },
              ]
            : []),
          s & 2 && (i.useCrossIcon = t[1]),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function v_(o) {
  let e, n;
  return (
    (e = new tt({
      props: { $$slots: { header: [b_], default: [g_] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 4111 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function k_(o, e, n) {
  let t,
    s,
    i,
    { src: l } = e,
    { isFloatingSidecar: a = !1 } = e,
    r = H.stores.collectionsAndTasksEnableState;
  ue(o, r, (b) => n(7, (i = b)));
  let u = H.stores.sidecar;
  ue(o, u, (b) => n(11, (s = b)));
  let f = !1,
    m = () => {
      n(2, (f = !0));
    };
  Me(() => {
    Pe(
      s?.mode === "tasks",
      `Failed to mount sidecar view: mode must be equal ${"tasks"}, but received ${
        s?.mode
      }`
    ),
      H.actions.sendAnalyticsEvent("task-tracker.auto-opened", void 0);
  });
  let p = () => H.actions.toggleCollections({ source: "tasks" });
  function g(b) {
    pe.call(this, o, b);
  }
  function v(b) {
    pe.call(this, o, b);
  }
  return (
    (o.$$set = (b) => {
      "src" in b && n(0, (l = b.src)),
        "isFloatingSidecar" in b && n(1, (a = b.isFloatingSidecar));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 128) {
        e: n(3, (t = i?.isCollectionsEnabled));
      }
    }),
    [l, a, f, t, r, u, m, i, p, g, v]
  );
}
var Lo = class extends x {
    constructor(e) {
      super(), D(this, e, k_, v_, P, { src: 0, isFloatingSidecar: 1 });
    }
  },
  Pn = Lo;
O();
function w_(o) {
  R(
    o,
    "svelte-1abecjk",
    ".sidecar-container.svelte-1abecjk{height:100vh;overscroll-behavior:none;background:var(--background-primary);color:var(--text-primary-color)}.sidecar-container.glass.svelte-1abecjk{background:var(--background-glass);box-shadow:2px 0 20px 0 var(--sidecar-shadow), 1px 0 4px 0 var(--sidecar-shadow);backdrop-filter:blur(7.5px);min-width:288px;overflow:hidden}"
  );
}
function y_(o) {
  let e,
    n,
    t,
    s,
    i,
    l = o[4].default,
    a = be(l, o, o[3], null);
  return {
    c() {
      (e = T("div")),
        a && a.c(),
        c(e, "class", "sidecar-container svelte-1abecjk"),
        c(e, "data-testid", o[1]),
        c(
          e,
          "style",
          (n = o[2]
            ? `background-color: rgb(${o[2].red} ${o[2].green} ${o[2].blue} / ${o[2].alpha})`
            : "")
        ),
        oe(e, "glass", o[0]);
    },
    m(r, u) {
      w(r, e, u),
        a && a.m(e, null),
        (t = !0),
        s ||
          ((i = [Z(e, "mouseleave", o[5]), Z(e, "mouseenter", o[6])]),
          (s = !0));
    },
    p(r, [u]) {
      a &&
        a.p &&
        (!t || u & 8) &&
        ke(a, l, r, r[3], t ? ve(l, r[3], u, null) : we(r[3]), null),
        (!t || u & 2) && c(e, "data-testid", r[1]),
        (!t ||
          (u & 4 &&
            n !==
              (n = r[2]
                ? `background-color: rgb(${r[2].red} ${r[2].green} ${r[2].blue} / ${r[2].alpha})`
                : ""))) &&
          c(e, "style", n),
        (!t || u & 1) && oe(e, "glass", r[0]);
    },
    i(r) {
      t || (d(a, r), (t = !0));
    },
    o(r) {
      _(a, r), (t = !1);
    },
    d(r) {
      r && y(e), a && a.d(r), (s = !1), Te(i);
    },
  };
}
function $_(o, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { isGlass: i = !1 } = e,
    { testId: l } = e,
    { color: a = null } = e;
  function r(f) {
    pe.call(this, o, f);
  }
  function u(f) {
    pe.call(this, o, f);
  }
  return (
    (o.$$set = (f) => {
      "isGlass" in f && n(0, (i = f.isGlass)),
        "testId" in f && n(1, (l = f.testId)),
        "color" in f && n(2, (a = f.color)),
        "$$scope" in f && n(3, (s = f.$$scope));
    }),
    [i, l, a, s, t, r, u]
  );
}
var jo = class extends x {
    constructor(e) {
      super(), D(this, e, $_, y_, P, { isGlass: 0, testId: 1, color: 2 }, w_);
    }
  },
  Dn = jo;
function Vo(o) {
  let e = o.slice(),
    n = e[1];
  return (e[12] = n.mode), (e[13] = n.payload), (e[14] = n.source), e;
}
function ka(o) {
  let e,
    n,
    t,
    s,
    i = [C_, I_, T_, S_],
    l = [];
  function a(r, u) {
    return r[12] === "help"
      ? 0
      : r[12] === "sessions"
      ? 1
      : r[12] === "collections"
      ? 2
      : r[12] === "tasks"
      ? 3
      : -1;
  }
  return (
    ~(e = a(o, -1)) && (n = l[e] = i[e](o)),
    {
      c() {
        n && n.c(), (t = fe());
      },
      m(r, u) {
        ~e && l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, u) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? ~e && l[e].p(r, u)
            : (n &&
                (G(),
                _(l[f], 1, 1, () => {
                  l[f] = null;
                }),
                K()),
              ~e
                ? ((n = l[e]),
                  n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
                  d(n, 1),
                  n.m(t.parentNode, t))
                : (n = null));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        ~e && l[e].d(r), r && y(t);
      },
    }
  );
}
function S_(o) {
  let e, n;
  return (
    (e = new Pn({ props: { src: o[13].src, isFloatingSidecar: !0 } })),
    e.$on("close", o[6]),
    e.$on("toggleSidecarFullscreen", o[8]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2 && (i.src = t[13].src), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function T_(o) {
  let e, n;
  return (
    (e = new An({ props: { source: o[14], isFloatingSidecar: !0 } })),
    e.$on("close", o[6]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2 && (i.source = t[14]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function I_(o) {
  let e, n;
  return (
    (e = new pa({ props: { isPinned: o[0] } })),
    e.$on("close", o[6]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.isPinned = t[0]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function C_(o) {
  let e, n;
  return (
    (e = new Ln({ props: { isFloatingSidecar: !0 } })),
    e.$on("close", o[6]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function E_(o) {
  let e,
    n,
    t = o[1] && ka(Vo(o));
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, i) {
      s[1]
        ? t
          ? (t.p(Vo(s), i), i & 2 && d(t, 1))
          : ((t = ka(Vo(s))), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function z_(o) {
  let e, n;
  return (
    (e = new Dn({
      props: {
        isGlass: o[2],
        testId: "floating-sidecar-" + o[1]?.mode,
        color: o[1]?.theme === "auto" ? o[1]?.chromeColor : null,
        $$slots: { default: [E_] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("mouseleave", o[7]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 4 && (i.isGlass = t[2]),
          s & 2 && (i.testId = "floating-sidecar-" + t[1]?.mode),
          s & 2 &&
            (i.color = t[1]?.theme === "auto" ? t[1]?.chromeColor : null),
          s & 32771 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function M_(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u = H.stores.sidecar;
  ue(o, u, (b) => n(1, (r = b)));
  let f = H.stores.verticalTabContextMenu;
  ue(o, f, (b) => n(10, (a = b)));
  let m = H.stores.verticalTabGroupContextMenu;
  ue(o, m, (b) => n(9, (l = b)));
  let p = () => H.actions.closeSidecar(),
    g = () => {
      t || i || H.actions.hideSidecar(200);
    },
    v = () => H.actions.toggleFullscreen();
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 2) {
        e: n(0, (t = r?.isPinned ?? !1));
      }
      if (o.$$.dirty & 1) {
        e: n(2, (s = !t));
      }
      if (o.$$.dirty & 1536) {
        e: i = Boolean(a?.idWithActiveMenu) || Boolean(l?.idWithActiveMenu);
      }
    }),
    [t, r, s, u, f, m, p, g, v, l, a]
  );
}
var Ho = class extends x {
    constructor(e) {
      super(), D(this, e, M_, z_, P, {});
    }
  },
  ya = Ho;
O();
O();
O();
O();
function N_(o) {
  R(
    o,
    "svelte-1meaaa5",
    "h3.svelte-1meaaa5{margin:0 0 6px 6px;font-size:10px;font-weight:500;line-height:16px;color:var(--text-secondary-color);letter-spacing:0.02em;text-transform:uppercase}ul.svelte-1meaaa5{list-style-type:none;padding:0}.separator.svelte-1meaaa5{width:100%;height:1px;margin:14px 0;background-color:var(--select-bg)}"
  );
}
function $a(o, e, n) {
  let t = o.slice();
  return (t[10] = e[n]), (t[12] = n), t;
}
function Sa(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a = [],
    r = new Map(),
    u,
    f,
    m,
    p = o[7] && Ta(o),
    g = o[0],
    v = ($) => $[10].id;
  for (let $ = 0; $ < g.length; $ += 1) {
    let k = $a(o, g, $),
      z = v(k);
    r.set(z, (a[$] = Ia(z, k)));
  }
  let b = o[5] && Ca(o);
  return {
    c() {
      (e = T("div")),
        (n = T("h3")),
        (t = F(o[2])),
        (s = M()),
        p && p.c(),
        (i = M()),
        (l = T("ul"));
      for (let $ = 0; $ < a.length; $ += 1) a[$].c();
      (u = M()),
        b && b.c(),
        (f = fe()),
        c(n, "data-testid", "sessions-chunk.title"),
        c(n, "class", "svelte-1meaaa5"),
        c(l, "class", "svelte-1meaaa5"),
        c(e, "data-testid", o[3]);
    },
    m($, k) {
      w($, e, k),
        h(e, n),
        h(n, t),
        h(n, s),
        p && p.m(n, null),
        h(e, i),
        h(e, l);
      for (let z = 0; z < a.length; z += 1) a[z] && a[z].m(l, null);
      w($, u, k), b && b.m($, k), w($, f, k), (m = !0);
    },
    p($, k) {
      (!m || k & 4) && ae(t, $[2]),
        $[7]
          ? p
            ? k & 128 && d(p, 1)
            : ((p = Ta($)), p.c(), d(p, 1), p.m(n, null))
          : p &&
            (G(),
            _(p, 1, 1, () => {
              p = null;
            }),
            K()),
        k & 851 &&
          ((g = $[0]),
          G(),
          (a = Xe(a, k, v, 1, $, g, r, l, Ze, Ia, null, $a)),
          K()),
        (!m || k & 8) && c(e, "data-testid", $[3]),
        $[5]
          ? b || ((b = Ca($)), b.c(), b.m(f.parentNode, f))
          : b && (b.d(1), (b = null));
    },
    i($) {
      if (!m) {
        d(p);
        for (let k = 0; k < g.length; k += 1) d(a[k]);
        m = !0;
      }
    },
    o($) {
      _(p);
      for (let k = 0; k < a.length; k += 1) _(a[k]);
      m = !1;
    },
    d($) {
      $ && y(e), p && p.d();
      for (let k = 0; k < a.length; k += 1) a[k].d();
      $ && y(u), b && b.d($), $ && y(f);
    },
  };
}
function Ta(o) {
  let e, n;
  return (
    (e = new wn({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Ia(o, e) {
  let n, t, s;
  return (
    (t = new qn({
      props: {
        canAddSessions: e[8],
        session: e[10],
        activeTabId: e[1],
        activeSessionId: e[4],
        editingSessionId: e[6],
        isSessionAvailable: e[9] === null || e[12] < e[9],
      },
    })),
    {
      key: o,
      first: null,
      c() {
        (n = fe()), I(t.$$.fragment), (this.first = n);
      },
      m(i, l) {
        w(i, n, l), C(t, i, l), (s = !0);
      },
      p(i, l) {
        e = i;
        let a = {};
        l & 256 && (a.canAddSessions = e[8]),
          l & 1 && (a.session = e[10]),
          l & 2 && (a.activeTabId = e[1]),
          l & 16 && (a.activeSessionId = e[4]),
          l & 64 && (a.editingSessionId = e[6]),
          l & 513 && (a.isSessionAvailable = e[9] === null || e[12] < e[9]),
          t.$set(a);
      },
      i(i) {
        s || (d(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        _(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && y(n), E(t, i);
      },
    }
  );
}
function Ca(o) {
  let e;
  return {
    c() {
      (e = T("div")),
        c(e, "class", "separator svelte-1meaaa5"),
        c(e, "role", "separator"),
        c(e, "data-testid", "sessions-chunk.separator");
    },
    m(n, t) {
      w(n, e, t);
    },
    d(n) {
      n && y(e);
    },
  };
}
function A_(o) {
  let e,
    n,
    t = o[0]?.length && Sa(o);
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[0]?.length
        ? t
          ? (t.p(s, i), i & 1 && d(t, 1))
          : ((t = Sa(s)), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function L_(o, e, n) {
  let { sessions: t } = e,
    { activeTabId: s } = e,
    { headerText: i } = e,
    { dataTestIdContainer: l } = e,
    { activeSessionId: a } = e,
    { isSeparatorVisible: r = !1 } = e,
    { editingSessionId: u } = e,
    { shouldUseProBadge: f = !1 } = e,
    { canAddSessions: m = !1 } = e,
    { maxSessionsCount: p = null } = e;
  return (
    (o.$$set = (g) => {
      "sessions" in g && n(0, (t = g.sessions)),
        "activeTabId" in g && n(1, (s = g.activeTabId)),
        "headerText" in g && n(2, (i = g.headerText)),
        "dataTestIdContainer" in g && n(3, (l = g.dataTestIdContainer)),
        "activeSessionId" in g && n(4, (a = g.activeSessionId)),
        "isSeparatorVisible" in g && n(5, (r = g.isSeparatorVisible)),
        "editingSessionId" in g && n(6, (u = g.editingSessionId)),
        "shouldUseProBadge" in g && n(7, (f = g.shouldUseProBadge)),
        "canAddSessions" in g && n(8, (m = g.canAddSessions)),
        "maxSessionsCount" in g && n(9, (p = g.maxSessionsCount));
    }),
    [t, s, i, l, a, r, u, f, m, p]
  );
}
var Oo = class extends x {
    constructor(e) {
      super(),
        D(
          this,
          e,
          L_,
          A_,
          P,
          {
            sessions: 0,
            activeTabId: 1,
            headerText: 2,
            dataTestIdContainer: 3,
            activeSessionId: 4,
            isSeparatorVisible: 5,
            editingSessionId: 6,
            shouldUseProBadge: 7,
            canAddSessions: 8,
            maxSessionsCount: 9,
          },
          N_
        );
    }
  },
  xn = Oo;
O();
function j_(o) {
  R(
    o,
    "svelte-62sgek",
    ".sessions-hint.svelte-62sgek{position:relative;margin:auto 0 0;padding:12px;border-radius:4px;border:1px solid var(--theme-12);color:var(--theme-85);letter-spacing:-0.01em;font-size:12px;line-height:19px}.sessions-hint.svelte-62sgek::after{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--session-hint-bg);opacity:0.25;content:''}"
  );
}
function Ea(o) {
  let e = L("sidecar_sessions__hint_press") + "",
    n,
    t,
    s,
    i,
    l = L("sidecar_sessions__hint_2") + "",
    a,
    r;
  return (
    (s = new Le({ props: { keys: o[0] } })),
    {
      c() {
        (n = F(e)), (t = M()), I(s.$$.fragment), (i = M()), (a = F(l));
      },
      m(u, f) {
        w(u, n, f), w(u, t, f), C(s, u, f), w(u, i, f), w(u, a, f), (r = !0);
      },
      p(u, f) {
        let m = {};
        f & 1 && (m.keys = u[0]), s.$set(m);
      },
      i(u) {
        r || (d(s.$$.fragment, u), (r = !0));
      },
      o(u) {
        _(s.$$.fragment, u), (r = !1);
      },
      d(u) {
        u && y(n), u && y(t), E(s, u), u && y(i), u && y(a);
      },
    }
  );
}
function V_(o) {
  let e,
    n = L("sidecar_sessions__hint_1") + "",
    t,
    s,
    i,
    l = o[0].length && Ea(o);
  return {
    c() {
      (e = T("div")),
        (t = F(n)),
        (s = M()),
        l && l.c(),
        c(e, "class", "sessions-hint svelte-62sgek"),
        c(e, "data-testid", "sessions-hint");
    },
    m(a, r) {
      w(a, e, r), h(e, t), h(e, s), l && l.m(e, null), (i = !0);
    },
    p(a, [r]) {
      a[0].length
        ? l
          ? (l.p(a, r), r & 1 && d(l, 1))
          : ((l = Ea(a)), l.c(), d(l, 1), l.m(e, null))
        : l &&
          (G(),
          _(l, 1, 1, () => {
            l = null;
          }),
          K());
    },
    i(a) {
      i || (d(l), (i = !0));
    },
    o(a) {
      _(l), (i = !1);
    },
    d(a) {
      a && y(e), l && l.d();
    },
  };
}
function H_(o, e, n) {
  let { switchSessionShortcutKeys: t } = e;
  return (
    (o.$$set = (s) => {
      "switchSessionShortcutKeys" in s &&
        n(0, (t = s.switchSessionShortcutKeys));
    }),
    [t]
  );
}
var qo = class extends x {
    constructor(e) {
      super(), D(this, e, H_, V_, P, { switchSessionShortcutKeys: 0 }, j_);
    }
  },
  za = qo;
O();
function O_(o) {
  let e, n, t;
  return {
    c() {
      (e = ne("svg")),
        (n = ne("path")),
        c(
          n,
          "d",
          "M0 8v28h36V8H0zm35 27H1V9h34v26zM32 0H4v1h28V0zm-6 18H10v1h16v-1zm-4 7H10v1h12v-1z"
        ),
        c(n, "fill", "currentColor"),
        c(e, "class", (t = `icon ${o[2]}`)),
        c(e, "width", o[0]),
        c(e, "height", o[1]),
        c(e, "viewBox", "0 0 36 36"),
        c(e, "fill", "none"),
        c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      w(s, e, i), h(e, n);
    },
    p(s, [i]) {
      i & 4 && t !== (t = `icon ${s[2]}`) && c(e, "class", t),
        i & 1 && c(e, "width", s[0]),
        i & 2 && c(e, "height", s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && y(e);
    },
  };
}
function q_(o, e, n) {
  let { width: t = "100%" } = e,
    { height: s = "100%" } = e,
    { className: i = "" } = e;
  return (
    (o.$$set = (l) => {
      "width" in l && n(0, (t = l.width)),
        "height" in l && n(1, (s = l.height)),
        "className" in l && n(2, (i = l.className));
    }),
    [t, s, i]
  );
}
var Bo = class extends x {
    constructor(e) {
      super(), D(this, e, q_, O_, P, { width: 0, height: 1, className: 2 });
    }
  },
  Ma = Bo;
function B_(o) {
  R(
    o,
    "svelte-khaumk",
    ".sessions-list.svelte-khaumk{display:flex;flex:1 0 auto;flex-direction:column;margin:8px}"
  );
}
function Na(o) {
  let e, n;
  return (
    (e = new Nn({
      props: {
        title: L("sidecar_sessions__welcome_to_sessions"),
        description: L("sidecar_sessions__welcome_description"),
        hintTestId: "welcome-to-sessions.hint",
        closeButtonTestId: "welcome-to-sessions.close-button",
        $$slots: { icon: [P_] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[14]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 2097152 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function P_(o) {
  let e, n;
  return (
    (e = new Ma({ props: { slot: "icon", width: "36", height: "36" } })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function D_(o) {
  let e,
    n,
    t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g = o[9] && Na(o);
  return (
    (t = new Bn({ props: { canAddSessions: o[5], useProBadges: o[6] } })),
    t.$on("added", o[13]),
    (i = new xn({
      props: {
        activeTabId: o[8],
        activeSessionId: o[0],
        editingSessionId: o[12],
        canAddSessions: o[5],
        sessions: o[1],
        headerText: L("sidecar_sessions__active_session"),
        dataTestIdContainer: "sessions-chunk.active-sessions",
        isSeparatorVisible: Boolean(o[2]?.length || o[3]?.length),
      },
    })),
    (a = new xn({
      props: {
        activeTabId: o[8],
        activeSessionId: o[0],
        editingSessionId: o[12],
        sessions: o[3],
        canAddSessions: o[5],
        headerText: L("sidecar_sessions__temporary_sessions"),
        dataTestIdContainer: "sessions-chunk.temp-sessions",
        isSeparatorVisible: Boolean(o[2]?.length),
      },
    })),
    (u = new xn({
      props: {
        activeTabId: o[8],
        activeSessionId: o[0],
        editingSessionId: o[12],
        sessions: o[2],
        headerText: L("sidecar_sessions__saved_sessions"),
        dataTestIdContainer: "sessions-chunk.saved-sessions",
        shouldUseProBadge: o[6],
        maxSessionsCount: o[4] ? o[4] - 1 : null,
      },
    })),
    (m = new za({ props: { switchSessionShortcutKeys: o[7] } })),
    {
      c() {
        (e = T("div")),
          g && g.c(),
          (n = M()),
          I(t.$$.fragment),
          (s = M()),
          I(i.$$.fragment),
          (l = M()),
          I(a.$$.fragment),
          (r = M()),
          I(u.$$.fragment),
          (f = M()),
          I(m.$$.fragment),
          c(e, "class", "sessions-list svelte-khaumk");
      },
      m(v, b) {
        w(v, e, b),
          g && g.m(e, null),
          h(e, n),
          C(t, e, null),
          h(e, s),
          C(i, e, null),
          h(e, l),
          C(a, e, null),
          h(e, r),
          C(u, e, null),
          h(e, f),
          C(m, e, null),
          (p = !0);
      },
      p(v, [b]) {
        v[9]
          ? g
            ? (g.p(v, b), b & 512 && d(g, 1))
            : ((g = Na(v)), g.c(), d(g, 1), g.m(e, n))
          : g &&
            (G(),
            _(g, 1, 1, () => {
              g = null;
            }),
            K());
        let $ = {};
        b & 32 && ($.canAddSessions = v[5]),
          b & 64 && ($.useProBadges = v[6]),
          t.$set($);
        let k = {};
        b & 256 && (k.activeTabId = v[8]),
          b & 1 && (k.activeSessionId = v[0]),
          b & 32 && (k.canAddSessions = v[5]),
          b & 2 && (k.sessions = v[1]),
          b & 12 &&
            (k.isSeparatorVisible = Boolean(v[2]?.length || v[3]?.length)),
          i.$set(k);
        let z = {};
        b & 256 && (z.activeTabId = v[8]),
          b & 1 && (z.activeSessionId = v[0]),
          b & 8 && (z.sessions = v[3]),
          b & 32 && (z.canAddSessions = v[5]),
          b & 4 && (z.isSeparatorVisible = Boolean(v[2]?.length)),
          a.$set(z);
        let S = {};
        b & 256 && (S.activeTabId = v[8]),
          b & 1 && (S.activeSessionId = v[0]),
          b & 4 && (S.sessions = v[2]),
          b & 64 && (S.shouldUseProBadge = v[6]),
          b & 16 && (S.maxSessionsCount = v[4] ? v[4] - 1 : null),
          u.$set(S);
        let N = {};
        b & 128 && (N.switchSessionShortcutKeys = v[7]), m.$set(N);
      },
      i(v) {
        p ||
          (d(g),
          d(t.$$.fragment, v),
          d(i.$$.fragment, v),
          d(a.$$.fragment, v),
          d(u.$$.fragment, v),
          d(m.$$.fragment, v),
          (p = !0));
      },
      o(v) {
        _(g),
          _(t.$$.fragment, v),
          _(i.$$.fragment, v),
          _(a.$$.fragment, v),
          _(u.$$.fragment, v),
          _(m.$$.fragment, v),
          (p = !1);
      },
      d(v) {
        v && y(e), g && g.d(), E(t), E(i), E(a), E(u), E(m);
      },
    }
  );
}
function x_(o, e, n) {
  let t,
    s,
    i,
    l,
    a,
    r,
    u,
    f,
    m,
    p,
    g,
    v,
    b,
    $,
    k,
    z = H.stores.sessionsList;
  ue(o, z, (q) => n(17, ($ = q)));
  let S = H.stores.sessionListActiveTab;
  ue(o, S, (q) => n(18, (k = q)));
  let N = Ke(null);
  ue(o, N, (q) => n(19, (b = q)));
  let A = (q) => {
      qe(N, (b = q.detail.id), b);
    },
    B = () => H.actions.changeIsHiddenWelcomeToSessions(!0),
    V = (q) => q.preventDefault();
  return (
    Me(() => document.addEventListener("dragover", V)),
    _n(() => document.removeEventListener("dragover", V)),
    (o.$$.update = () => {
      if (o.$$.dirty & 131072) {
        e: n(9, (t = !$?.isHiddenWelcomeToSessions));
      }
      if (o.$$.dirty & 131072) {
        e: n(16, (s = $?.sessions ?? []));
      }
      if (o.$$.dirty & 262144) {
        e: n(8, (i = k?.tabId ?? void 0));
      }
      if (o.$$.dirty & 131072) {
        e: n(7, (l = $?.switchSessionShortcutKeys ?? []));
      }
      if (o.$$.dirty & 131072) {
        e: n(15, (a = $?.currentSession));
      }
      if (o.$$.dirty & 131072) {
        e: n(6, (r = $?.useProBadges ?? !1));
      }
      if (o.$$.dirty & 131072) {
        e: n(5, (u = $?.canAddSessions ?? !1));
      }
      if (o.$$.dirty & 131072) {
        e: n(4, (f = $?.maxSessionsAvailable ?? null));
      }
      if (o.$$.dirty & 32768) {
        e: n(0, (m = a?.id));
      }
      if (o.$$.dirty & 65537) {
        e: n(3, (p = s.filter((q) => q.isTemporary && q.id !== m)));
      }
      if (o.$$.dirty & 65537) {
        e: n(2, (g = s.filter((q) => !q.isTemporary && q.id !== m)));
      }
      if (o.$$.dirty & 32768) {
        e: n(1, (v = a ? [a] : []));
      }
    }),
    [m, v, g, p, f, u, r, l, i, t, z, S, N, A, B, a, s, $, k]
  );
}
var Po = class extends x {
    constructor(e) {
      super(), D(this, e, x_, D_, P, {}, B_);
    }
  },
  Aa = Po;
function F_(o) {
  let e, n;
  return (
    (e = new Aa({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function G_(o) {
  let e = L("sidecar_sessions__title") + "",
    n;
  return {
    c() {
      n = F(e);
    },
    m(t, s) {
      w(t, n, s);
    },
    p: j,
    d(t) {
      t && y(n);
    },
  };
}
function K_(o) {
  let e, n;
  return (
    (e = new pt({
      props: {
        slot: "header",
        closeTooltipText: L("sidecar_sessions__close_sessions"),
        shortcutKeys: o[0],
        $$slots: { default: [G_] },
        $$scope: { ctx: o },
      },
    })),
    e.$on("close", o[4]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.shortcutKeys = t[0]),
          s & 32 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function R_(o) {
  let e, n;
  return (
    (e = new tt({
      props: { $$slots: { header: [K_], default: [F_] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 33 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function U_(o, e, n) {
  let t,
    s,
    i = H.stores.sidecar;
  ue(o, i, (r) => n(3, (s = r)));
  let { source: l } = e;
  Me(
    () => (
      H.actions.sendAnalyticsEvent("sessions.manager.auto-opened", {
        source: l,
      }),
      () => {
        H.actions.sendAnalyticsEvent("sessions.manager.auto-closed", {
          source: l,
        });
      }
    )
  );
  function a(r) {
    pe.call(this, o, r);
  }
  return (
    (o.$$set = (r) => {
      "source" in r && n(2, (l = r.source));
    }),
    (o.$$.update = () => {
      if (o.$$.dirty & 8) {
        e: n(0, (t = s?.sessionShortcutKeys ?? []));
      }
    }),
    [t, i, l, s, a]
  );
}
var Do = class extends x {
    constructor(e) {
      super(), D(this, e, U_, R_, P, { source: 2 });
    }
  },
  La = Do;
function xo(o) {
  let e = o.slice(),
    n = e[0];
  return (e[4] = n.mode), (e[5] = n.payload), (e[6] = n.source), e;
}
function ja(o) {
  let e,
    n,
    t,
    s,
    i = [Y_, X_, Z_, W_],
    l = [];
  function a(r, u) {
    return r[4] === "help"
      ? 0
      : r[4] === "sessions"
      ? 1
      : r[4] === "collections"
      ? 2
      : r[4] === "tasks"
      ? 3
      : -1;
  }
  return (
    ~(e = a(o, -1)) && (n = l[e] = i[e](o)),
    {
      c() {
        n && n.c(), (t = fe());
      },
      m(r, u) {
        ~e && l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, u) {
        let f = e;
        (e = a(r, u)),
          e === f
            ? ~e && l[e].p(r, u)
            : (n &&
                (G(),
                _(l[f], 1, 1, () => {
                  l[f] = null;
                }),
                K()),
              ~e
                ? ((n = l[e]),
                  n ? n.p(r, u) : ((n = l[e] = i[e](r)), n.c()),
                  d(n, 1),
                  n.m(t.parentNode, t))
                : (n = null));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        ~e && l[e].d(r), r && y(t);
      },
    }
  );
}
function W_(o) {
  let e, n;
  return (
    (e = new Pn({ props: { src: o[5].src } })),
    e.$on("close", o[2]),
    e.$on("toggleSidecarFullscreen", o[3]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.src = t[5].src), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Z_(o) {
  let e, n;
  return (
    (e = new An({ props: { source: o[6] } })),
    e.$on("close", o[2]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.source = t[6]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function X_(o) {
  let e, n;
  return (
    (e = new La({ props: { source: o[6] } })),
    e.$on("close", o[2]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, s) {
        let i = {};
        s & 1 && (i.source = t[6]), e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function Y_(o) {
  let e, n;
  return (
    (e = new Ln({})),
    e.$on("close", o[2]),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p: j,
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function J_(o) {
  let e,
    n,
    t = o[0] && ja(xo(o));
  return {
    c() {
      t && t.c(), (e = fe());
    },
    m(s, i) {
      t && t.m(s, i), w(s, e, i), (n = !0);
    },
    p(s, i) {
      s[0]
        ? t
          ? (t.p(xo(s), i), i & 1 && d(t, 1))
          : ((t = ja(xo(s))), t.c(), d(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          _(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(s) {
      n || (d(t), (n = !0));
    },
    o(s) {
      _(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && y(e);
    },
  };
}
function Q_(o) {
  let e, n;
  return (
    (e = new Dn({
      props: {
        testId: "sidecar-$" + o[0]?.mode,
        color: o[0]?.theme === "auto" ? o[0]?.chromeColor : null,
        $$slots: { default: [J_] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      p(t, [s]) {
        let i = {};
        s & 1 && (i.testId = "sidecar-$" + t[0]?.mode),
          s & 1 &&
            (i.color = t[0]?.theme === "auto" ? t[0]?.chromeColor : null),
          s & 129 && (i.$$scope = { dirty: s, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function eh(o, e, n) {
  let t,
    s = H.stores.sidecar;
  return (
    ue(o, s, (a) => n(0, (t = a))),
    [t, s, () => H.actions.closeSidecar(), () => H.actions.toggleFullscreen()]
  );
}
var Fo = class extends x {
    constructor(e) {
      super(), D(this, e, eh, Q_, P, {});
    }
  },
  Va = Fo;
function th(o) {
  let e, n;
  return (
    (e = new Va({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function nh(o) {
  let e, n;
  return (
    (e = new ya({})),
    {
      c() {
        I(e.$$.fragment);
      },
      m(t, s) {
        C(e, t, s), (n = !0);
      },
      i(t) {
        n || (d(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        _(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        E(e, t);
      },
    }
  );
}
function sh(o) {
  let e,
    n,
    t,
    s,
    i = [nh, th],
    l = [];
  function a(r, u) {
    return r[0] ? 0 : 1;
  }
  return (
    (e = a(o, -1)),
    (n = l[e] = i[e](o)),
    {
      c() {
        n.c(), (t = fe());
      },
      m(r, u) {
        l[e].m(r, u), w(r, t, u), (s = !0);
      },
      p(r, [u]) {
        let f = e;
        (e = a(r, u)),
          e !== f &&
            (G(),
            _(l[f], 1, 1, () => {
              l[f] = null;
            }),
            K(),
            (n = l[e]),
            n || ((n = l[e] = i[e](r)), n.c()),
            d(n, 1),
            n.m(t.parentNode, t));
      },
      i(r) {
        s || (d(n), (s = !0));
      },
      o(r) {
        _(n), (s = !1);
      },
      d(r) {
        l[e].d(r), r && y(t);
      },
    }
  );
}
function oh(o, e, n) {
  let t,
    s,
    i,
    l,
    a = H.stores.sidecar;
  return (
    ue(o, a, (r) => n(4, (l = r))),
    (o.$$.update = () => {
      if (o.$$.dirty & 16) {
        e: n(0, (t = l?.isVerticalTabsModeEnabled));
      }
      if (o.$$.dirty & 16) {
        e: n(3, (s = l?.theme));
      }
      if (o.$$.dirty & 16) {
        e: n(2, (i = l?.chromeColor));
      }
      if (o.$$.dirty & 12) {
        e: s &&
          (Sn(s),
          s === "auto" && i?.isLight
            ? Sn("light")
            : s === "auto" && !i?.isLight && Sn("dark"));
      }
    }),
    [t, a, i, s, l]
  );
}
var Go = class extends x {
    constructor(e) {
      super(), D(this, e, oh, sh, P, {});
    }
  },
  Ha = Go;
var Oa = document.getElementById("app");
Pe(Oa, "Couldn't find container with id: #app");
var ih = ui({ target: Oa, component: Ha, gateway: H });
Object.assign(globalThis, { sidekickDebug: { app: ih, gateway: H } });
