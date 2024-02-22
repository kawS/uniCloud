"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  copyRight();
}
const copyRight = () => "../../components/copyright/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const series = {
      pack: [
        { no: "FB01", name: "-AWAKENED PULSE-", img: "https://www.dbs-cardgame.com/fw/images/products/item/FB01.webp", type: "BOOSTER PACK" }
      ],
      deck: [
        { no: "FS01", name: "-SON GOKU-", img: "https://www.dbs-cardgame.com/fw/images/products/item/FS01.webp", type: "STARTER DECK" },
        { no: "FS02", name: "-VEGETA-", img: "https://www.dbs-cardgame.com/fw/images/products/item/FS02.webp", type: "STARTER DECK" },
        { no: "FS03", name: "-BROLY-", img: "https://www.dbs-cardgame.com/fw/images/products/item/FS03.webp", type: "STARTER DECK" },
        { no: "FS04", name: "-FRIEZA-", img: "https://www.dbs-cardgame.com/fw/images/products/item/FS04.webp", type: "STARTER DECK" }
      ]
    };
    common_vendor.onLoad((options) => {
    });
    const goSeries = (item) => {
      const pack = encodeURIComponent(`${item.type} ${item.name} [${item.no}]`);
      common_vendor.index.navigateTo({
        url: `/subCardList/pages/list/index?no=${item.no}&name=${encodeURIComponent(item.name)}&where=${pack}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(series.pack, (sitem, k0, i0) => {
          return {
            a: sitem.img,
            b: common_vendor.t(sitem.name),
            c: common_vendor.t(sitem.no),
            d: common_vendor.o(($event) => goSeries(sitem), sitem.no),
            e: sitem.no
          };
        }),
        b: common_vendor.f(series.deck, (sitem, k0, i0) => {
          return {
            a: sitem.img,
            b: common_vendor.t(sitem.name),
            c: common_vendor.t(sitem.no),
            d: common_vendor.o(($event) => goSeries(sitem), sitem.no),
            e: sitem.no
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/kaws-mac/Desktop/uniCloud/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
