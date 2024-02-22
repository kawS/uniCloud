"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  _easycom_unicloud_db2();
}
const _easycom_unicloud_db = () => "../../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (emptyList + _easycom_unicloud_db + copyRight)();
}
const emptyList = () => "../../../components/emptyList/index.js";
const copyRight = () => "../../../components/copyright/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref(true);
    let sno = common_vendor.ref(null);
    let serName = common_vendor.ref(null);
    let where = common_vendor.ref(null);
    common_vendor.ref(null);
    let detList = common_vendor.ref([]);
    let aList = common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    let classType = common_vendor.ref("All");
    let isShowFilter = common_vendor.ref(false);
    let filterStr = common_vendor.ref(null);
    let isShowCard = common_vendor.ref(false);
    let showCardDet = common_vendor.ref(null);
    common_vendor.onLoad((options) => {
      sno.value = options.no;
      serName.value = decodeURIComponent(options.name);
      where.value = decodeURIComponent(options.where);
    });
    const changeLeader = (FoB) => {
      if (FoB.showF == "1") {
        FoB.showF = "0";
      } else {
        FoB.showF = "1";
      }
    };
    const showDet = (item) => {
      let copy = JSON.parse(JSON.stringify(item));
      if (copy.showF) {
        copy.showF = "1";
      }
      showCardDet.value = copy;
      isShowCard.value = true;
    };
    const _showLoading = (duration = 1e3) => {
      common_vendor.index.showLoading({
        title: "加载中",
        mask: true
      });
      setTimeout(function() {
        common_vendor.index.hideLoading();
      }, duration);
    };
    const filterColor = (type) => {
      if (common_vendor.index.pageScrollTo) {
        common_vendor.index.pageScrollTo({
          scrollTop: 0
        });
      }
      _showLoading();
      filterStr.value = type;
      detList.value = aList.value.filter((item) => {
        return item.typeEnergy == type;
      });
      classType.value = "Pokemon";
      isShowFilter.value = false;
    };
    const resetList = () => {
      _showLoading();
      filterStr.value = "";
      detList.value = aList.value;
      classType.value = "All";
      isShowFilter.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: `overflow: ${common_vendor.unref(isShowCard) == true ? "hidden" : ""}`,
        b: common_vendor.w(({
          data,
          loading,
          error,
          options
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : loading ? {} : common_vendor.e({
            d: common_vendor.t(common_vendor.unref(serName)),
            e: common_vendor.t(common_vendor.unref(sno)),
            f: common_vendor.t(data.length),
            g: common_vendor.f(data, (item, k1, i1) => {
              return common_vendor.e({
                a: item.showF
              }, item.showF ? common_vendor.e({
                b: item.showF == "1"
              }, item.showF == "1" ? {
                c: common_vendor.f(item.effect[0], (skill, index, i2) => {
                  return {
                    a: common_vendor.t(skill),
                    b: index
                  };
                })
              } : {
                d: common_vendor.f(item.effect[1], (skill, index, i2) => {
                  return {
                    a: common_vendor.t(skill),
                    b: index
                  };
                })
              }) : {
                e: common_vendor.f(item.effect[0], (skill, index, i2) => {
                  return {
                    a: common_vendor.t(skill),
                    b: index
                  };
                })
              }, {
                f: item.showF
              }, item.showF ? common_vendor.e({
                g: item.showF == "1"
              }, item.showF == "1" ? {
                h: item.img[0]
              } : {
                i: item.img[1]
              }) : {
                j: item.img[0]
              }, {
                k: common_vendor.t(item.type),
                l: common_vendor.o(($event) => showDet(item), item._id),
                m: item.showF
              }, item.showF ? common_vendor.e({
                n: item.showF == "1"
              }, item.showF == "1" ? {
                o: common_vendor.t(item.name[0])
              } : {
                p: common_vendor.t(item.name[1])
              }) : {
                q: common_vendor.t(item.name[0])
              }, {
                r: item.showF
              }, item.showF ? {
                s: common_vendor.t(item.showF == "1" ? "反" : "正"),
                t: common_vendor.o(($event) => changeLeader(item), item._id)
              } : {}, {
                v: item._id
              });
            }),
            h: data.length == 0
          }, data.length == 0 ? {
            i: "c841092d-1-" + i0 + ",c841092d-0"
          } : {}), {
            c: loading,
            j: i0,
            k: s0
          });
        }, {
          name: "d",
          path: "b",
          vueId: "c841092d-0"
        }),
        c: common_vendor.p({
          collection: "demoDB",
          where: `pack == '${common_vendor.unref(where)}'`
        }),
        d: common_vendor.unref(filterStr) == "Red" ? 1 : "",
        e: common_vendor.o(($event) => filterColor("Red")),
        f: common_vendor.unref(filterStr) == "Blue" ? 1 : "",
        g: common_vendor.o(($event) => filterColor("Blue")),
        h: common_vendor.unref(filterStr) == "Green" ? 1 : "",
        i: common_vendor.o(($event) => filterColor("Green")),
        j: common_vendor.unref(filterStr) == "Yellow" ? 1 : "",
        k: common_vendor.o(($event) => filterColor("Yellow")),
        l: common_vendor.o(resetList),
        m: common_vendor.o(($event) => common_vendor.isRef(isShowFilter) ? isShowFilter.value = false : isShowFilter = false),
        n: common_vendor.unref(isShowFilter),
        o: common_vendor.unref(isShowCard)
      }, common_vendor.unref(isShowCard) ? common_vendor.e({
        p: common_vendor.unref(showCardDet).showF
      }, common_vendor.unref(showCardDet).showF ? common_vendor.e({
        q: common_vendor.unref(showCardDet).showF == "1"
      }, common_vendor.unref(showCardDet).showF == "1" ? {
        r: common_vendor.unref(showCardDet).img[0]
      } : {
        s: common_vendor.unref(showCardDet).img[1]
      }) : {
        t: common_vendor.unref(showCardDet).img[0]
      }, {
        v: common_vendor.unref(showCardDet).showF
      }, common_vendor.unref(showCardDet).showF ? {
        w: common_vendor.t(common_vendor.unref(showCardDet).showF == "1" ? "反" : "正"),
        x: common_vendor.o(($event) => changeLeader(common_vendor.unref(showCardDet)))
      } : {}, {
        y: common_vendor.unref(showCardDet).showF
      }, common_vendor.unref(showCardDet).showF ? common_vendor.e({
        z: common_vendor.unref(showCardDet).showF == "1"
      }, common_vendor.unref(showCardDet).showF == "1" ? {
        A: common_vendor.t(common_vendor.unref(showCardDet).name[0])
      } : {
        B: common_vendor.t(common_vendor.unref(showCardDet).name[0])
      }) : {
        C: common_vendor.t(common_vendor.unref(showCardDet).name[0])
      }, {
        D: common_vendor.unref(showCardDet).showF
      }, common_vendor.unref(showCardDet).showF ? common_vendor.e({
        E: common_vendor.unref(showCardDet).showF == "1"
      }, common_vendor.unref(showCardDet).showF == "1" ? {
        F: common_vendor.f(common_vendor.unref(showCardDet).effect[0], (skill, index, i0) => {
          return {
            a: common_vendor.t(skill),
            b: index
          };
        })
      } : {
        G: common_vendor.f(common_vendor.unref(showCardDet).effect[1], (skill, index, i0) => {
          return {
            a: common_vendor.t(skill),
            b: index
          };
        })
      }) : {
        H: common_vendor.f(common_vendor.unref(showCardDet).effect[0], (skill, index, i0) => {
          return {
            a: common_vendor.t(skill),
            b: index
          };
        })
      }, {
        I: common_vendor.o(($event) => {
          common_vendor.isRef(isShowCard) ? isShowCard.value = false : isShowCard = false;
          common_vendor.unref(showCardDet).showF = "1";
        }),
        J: common_vendor.unref(isShowCard) ? 1 : ""
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c841092d"], ["__file", "/Users/kaws-mac/Desktop/uniCloud/subCardList/pages/list/index.vue"]]);
wx.createPage(MiniProgramPage);
