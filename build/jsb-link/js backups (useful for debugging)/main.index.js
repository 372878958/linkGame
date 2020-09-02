window.__require = function t(e, o, i) {
function n(a, s) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return n(e[a][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) n(i[a]);
return n;
}({
AnimationEventComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "de0caS9b8ZD5pXl5YfBwk6u", "AnimationEventComponent");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = r.requireComponent, p = function() {
function t() {
this.clip = null;
this.callbackEvents = [];
}
n([ s({
type: cc.AnimationClip,
displayName: "要监听的动画"
}) ], t.prototype, "clip", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "要回调的函数"
}) ], t.prototype, "callbackEvents", void 0);
return t = n([ a("AnimationEventHandler") ], t);
}(), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callback = [];
e._animation = null;
return e;
}
e.prototype.onLoad = function() {
this._animation = this.getComponent(cc.Animation);
};
e.prototype.onEnable = function() {
this._animation && this._animation.on(cc.Animation.EventType.FINISHED, this.onFinished.bind(this));
};
e.prototype.onDisable = function() {
this._animation && this._animation.off(cc.Animation.EventType.FINISHED, this.onFinished.bind(this));
};
e.prototype.onFinished = function(t, e) {
for (var o = 0, i = this.callback; o < i.length; o++) {
var n = i[o];
if (n.clip && n.clip.name == e.name) for (var r = 0, a = n.callbackEvents; r < a.length; r++) {
var s = a[r];
s.emit([ s.customEventData ]);
}
}
};
n([ s({
type: p,
displayName: "监听"
}) ], e.prototype, "callback", void 0);
return e = n([ a, l(cc.Animation), c("扩展组件/动画事件") ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {} ],
ArchiveItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ed453pA0xFPxISCZuDqkmId", "ArchiveItem");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./gameData"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lockImg = null;
e.themeIconImg = null;
e.themeIconName = null;
e.progress = null;
e.progressLabel = null;
e.icons = [];
e.themeIcons = [];
e.themeNames = [];
e.id = null;
e.viewCallback = null;
return e;
}
e.prototype.setData = function(t) {
if (this.id != t) {
this.id = t;
this.lockImg.node.active = !0;
this.progress.progress = 0;
this.progressLabel.string = "(0/20)";
var e = r.gameData.archive[t];
if (e) if (e.length >= 20) {
this.lockImg.node.active = !1;
this.progress.progress = 1;
this.progressLabel.string = "(20/20)";
} else {
this.progress.progress = e.length / 20;
this.progressLabel.string = "(" + e.length + "/20)";
}
this.themeIconImg.spriteFrame = this.themeIcons[this.id];
this.themeIconName.spriteFrame = this.themeNames[this.id];
for (var o = 0; o < this.icons.length; ++o) {
this.icons[o].node.color = cc.color(94, 40, 17, 255);
this.icons[o].node.parent.color = this.icons[o].node.color;
r.setGridIcon(o, this.icons[o], this.id);
}
if (e) for (var i = 0, n = e; i < n.length; i++) {
var a = n[i];
if (this.icons[a]) {
this.icons[a].node.color = cc.Color.WHITE;
this.icons[a].node.parent.color = this.icons[a].node.color;
}
}
}
};
e.prototype.setViewCallback = function(t) {
this.viewCallback = t;
};
e.prototype.点击查看 = function() {
this.viewCallback && this.viewCallback(this.id);
};
n([ c({
type: cc.Sprite,
displayName: "锁头图标"
}) ], e.prototype, "lockImg", void 0);
n([ c({
type: cc.Sprite,
displayName: "主题图标"
}) ], e.prototype, "themeIconImg", void 0);
n([ c({
type: cc.Sprite,
displayName: "主题名称"
}) ], e.prototype, "themeIconName", void 0);
n([ c({
type: cc.ProgressBar,
displayName: "进度条"
}) ], e.prototype, "progress", void 0);
n([ c({
type: cc.Label,
displayName: "进度文字"
}) ], e.prototype, "progressLabel", void 0);
n([ c({
type: cc.Sprite,
displayName: "所有图标"
}) ], e.prototype, "icons", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./gameData": "gameData"
} ],
Archive: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2fffbOSrNlDf77mYC3V4HpJ", "Archive");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./ArchiveItem"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.items = [];
e.themeIcons = [];
e.themeNames = [];
e.viewItem = null;
e.scrollView = null;
return e;
}
e.prototype.onLoad = function() {
this.viewItem.themeIcons = this.themeIcons;
this.viewItem.themeNames = this.themeNames;
this.viewItem.node.active = !1;
for (var t = 0; t < this.items.length; ++t) {
this.items[t].themeIcons = this.themeIcons;
this.items[t].themeNames = this.themeNames;
this.items[t].setData(t);
this.items[t].setViewCallback(this.onViewItem.bind(this));
}
};
e.prototype.onViewItem = function(t) {
this.viewItem.setData(t);
this.viewItem.node.active = !0;
this.scrollView.node.active = !1;
};
e.prototype.关闭查看主题 = function() {
this.viewItem.node.active = !1;
this.scrollView.node.active = !0;
};
n([ c({
type: r.default,
displayName: "图鉴主题Item"
}) ], e.prototype, "items", void 0);
n([ c({
type: cc.SpriteFrame,
displayName: "主题图标"
}) ], e.prototype, "themeIcons", void 0);
n([ c({
type: cc.SpriteFrame,
displayName: "主题名称"
}) ], e.prototype, "themeNames", void 0);
n([ c({
type: r.default,
displayName: "查看界面"
}) ], e.prototype, "viewItem", void 0);
n([ c({
type: cc.ScrollView,
displayName: "滚动视图"
}) ], e.prototype, "scrollView", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./ArchiveItem": "ArchiveItem"
} ],
BindPhoneController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1e95507+VhPDZX+UBiy+cy0", "BindPhoneController");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../commonLib/lib/HttpLib"), a = t("../../../commonLib/lib/LoginLib"), s = t("../../../commonLib/component/PopBox/popBox"), c = t("../Construct"), l = t("../../../commonLib/component/nodeOperation"), p = cc._decorator, h = p.ccclass, u = p.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.phone_lab = null;
e.repeat_lab = null;
e._phonePath = r.HttpLib.BASE_PATH + "/smallgameapi/bindPhone.php";
return e;
}
e.prototype.start = function() {};
e.prototype.save_click = function() {
if (this.phone_lab.string == this.repeat_lab.string) {
var t = new r.HttpLib();
t.open(this.successCallback, this.failureCallback, this._phonePath, this, r.HttpMethod.POST);
var e = {
phone: this.phone_lab.string
};
t.setRequestHeader("cookie", "PHPSESSID=" + a.loginLib.loginToken);
t.send(e);
} else s.default.popBox("Please check out your phone number!");
};
e.prototype.successCallback = function(t) {
if (0 == t.code) {
c.construct.userInfo.phone = this.phone_lab.string;
s.default.popBox("Bind Successful!");
this.getComponent(l.default).closeSelf();
} else s.default.popBox("Bind failure!");
};
e.prototype.failureCallback = function(t, e, o) {
s.default.popBox("Bind failure!");
};
n([ u({
type: cc.EditBox,
displayName: "phone",
tooltip: "phone"
}) ], e.prototype, "phone_lab", void 0);
n([ u({
type: cc.EditBox,
displayName: "repeat",
tooltip: "repeat"
}) ], e.prototype, "repeat_lab", void 0);
return e = n([ h ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../commonLib/component/PopBox/popBox": "popBox",
"../../../commonLib/component/nodeOperation": "nodeOperation",
"../../../commonLib/lib/HttpLib": "HttpLib",
"../../../commonLib/lib/LoginLib": "LoginLib",
"../Construct": "Construct"
} ],
BlockInput: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fbf36bd4zxG576OxibAm+iN", "BlockInput");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = null, n = null, r = 0;
o.blockInput = function(t) {
void 0 === t && (t = null);
++r;
if (null == i) {
i = new cc.Node();
n = i.addComponent(cc.BlockInputEvents);
var e = i.addComponent(cc.Widget);
e.top = 0;
e.bottom = 0;
e.left = 0;
e.right = 0;
e.isAlignTop = !0;
e.isAlignBottom = !0;
e.isAlignLeft = !0;
e.isAlignRight = !0;
cc.game.addPersistRootNode(i);
}
i.active = !0;
t && n.scheduleOnce(a, t);
};
function a() {
--r < 0 && (r = 0);
0 == r && (i.active = !1);
}
o.unblockInput = a;
cc._RF.pop();
}, {} ],
Construct: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3774d+i5MNFoZfBZ0G/y80r", "Construct");
var i = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.construct = void 0;
var n = cc._decorator, r = n.ccclass, a = (n.property, function() {
function t() {
this.userInfo = {
property_num: 0,
phone: ""
};
}
return t = i([ r ], t);
}());
o.default = a;
o.construct = new a();
cc._RF.pop();
}, {} ],
HistoryController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "28608+EYOFOwYBKiJkOsp/O", "HistoryController");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../commonLib/component/tableView/tableView"), a = t("../../../commonLib/lib/HttpLib"), s = t("../../../commonLib/lib/LoginLib"), c = t("../../../commonLib/component/PopBox/popBox"), l = cc._decorator, p = l.ccclass, h = l.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.history_tb = null;
e._storePath = a.HttpLib.BASE_PATH + "/smallgameapi/exchangeRecords.php";
e._historyData = [];
e._pageNumber = 1;
e._pullRefresh = null;
return e;
}
e.prototype.start = function() {
this.getData();
};
e.prototype.getData = function(t) {
var e = this;
void 0 === t && (t = null);
var o = new a.HttpLib();
o.open(function(o) {
e.successCallback(o);
t && t();
}, function(o, i, n) {
e.failureCallback(o, i, n);
t && t();
}, this._storePath, this, a.HttpMethod.POST);
var i = {
page: this._pageNumber,
rows: 10
};
o.setRequestHeader("cookie", "PHPSESSID=" + s.loginLib.loginToken);
o.send(i);
};
e.prototype.successCallback = function(t) {
var e = t;
if (0 == e.code) {
if (e.data) if (e.data.length > 0) {
this._historyData = this._historyData.concat(e.data);
this.history_tb.setData(this._historyData);
} else 1 == this._pageNumber || (this._pageNumber -= 1);
} else c.default.popBox(e.msg);
};
e.prototype.failureCallback = function(t, e, o) {
c.default.popBox(e);
};
e.prototype.refreshData = function(t) {
void 0 === t && (t = null);
this._historyData = [];
this._pageNumber = 1;
this.getData(t);
};
e.prototype.getNextPage = function(t, e) {
this._pageNumber += 1;
this.getData(function() {
e.finish();
});
};
n([ h({
type: r.default,
displayName: "tableview",
tooltip: "tableview"
}) ], e.prototype, "history_tb", void 0);
return e = n([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../commonLib/component/PopBox/popBox": "popBox",
"../../../commonLib/component/tableView/tableView": "tableView",
"../../../commonLib/lib/HttpLib": "HttpLib",
"../../../commonLib/lib/LoginLib": "LoginLib"
} ],
HistoryTableItemComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5676aXbgvVHLYUVOQ/+o+tE", "HistoryTableItemComponent");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../commonLib/component/tableView/tableViewItem"), a = t("../../../commonLib/lib/HttpLib"), s = t("../../../commonLib/lib/LoginLib"), c = t("./HistoryController"), l = t("../../../commonLib/component/PopBox/popBox"), p = t("../../../commonLib/component/PopBox/messageBox"), h = cc._decorator, u = h.ccclass, d = h.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemName_lab = null;
e.itemDate_lab = null;
e.price_lab = null;
e.priceGame_lab = null;
e.status_lab = null;
e.status_btn = null;
e.finish_node = null;
e.historyController = null;
e._item_id = -1;
e._storePath = a.HttpLib.BASE_PATH + "/smallgameapi/delayExchange.php";
return e;
}
e.prototype.start = function() {};
e.prototype.onDataChange = function(t) {
var e = t;
this._item_id = e.id;
this.priceGame_lab.string = e.use_amount + "";
this.price_lab.string = e.item_amount + "";
this.itemName_lab.string = e.item_name;
this.itemDate_lab.string = e.create_time;
this.setStatus(e.status);
};
e.prototype.setStatus = function(t) {
this.status_btn.node.active = !1;
this.status_lab.node.active = !1;
this.finish_node.active = !1;
switch (t) {
case 0:
this.status_btn.node.active = !0;
break;

case 1:
this.status_lab.node.active = !0;
this.status_lab.string = "Converted";
this.finish_node.active = !0;
break;

case 2:
this.status_lab.node.active = !0;
this.status_lab.string = "Closed";
this.finish_node.active = !0;
break;

case 3:
this.status_lab.node.active = !0;
this.status_lab.string = "Canceled";
this.finish_node.active = !0;
break;

case 4:
this.status_lab.node.active = !0;
this.status_lab.string = "Checked";
this.finish_node.active = !0;
}
};
e.prototype.cancel_click = function() {
var t = this;
p.default.messageBox("Are you sure to cancel the order?", function() {
var e = new a.HttpLib();
e.open(t.successCallback, t.failureCallback, t._storePath, t, a.HttpMethod.POST);
var o = {
id: t._item_id
};
e.setRequestHeader("cookie", "PHPSESSID=" + s.loginLib.loginToken);
e.send(o);
}, function() {});
};
e.prototype.successCallback = function(t) {
var e = t;
if (0 == e.code) {
l.default.popBox("Successful！");
this.historyController.refreshData();
} else {
cc.log("取消失败！" + e.msg);
l.default.popBox("Failure!");
}
};
e.prototype.failureCallback = function(t, e, o) {
l.default.popBox(e);
};
n([ d({
type: cc.Label,
displayName: "商品名称",
tooltip: "商品名称"
}) ], e.prototype, "itemName_lab", void 0);
n([ d({
type: cc.Label,
displayName: "兑换日期",
tooltip: "兑换日期"
}) ], e.prototype, "itemDate_lab", void 0);
n([ d({
type: cc.Label,
displayName: "商品价值",
tooltip: "商品价值"
}) ], e.prototype, "price_lab", void 0);
n([ d({
type: cc.Label,
displayName: "商品价格",
tooltip: "商品价格"
}) ], e.prototype, "priceGame_lab", void 0);
n([ d({
type: cc.Label,
displayName: "订单状态",
tooltip: "订单状态"
}) ], e.prototype, "status_lab", void 0);
n([ d({
type: cc.Button,
displayName: "订单操作",
tooltip: "订单操作"
}) ], e.prototype, "status_btn", void 0);
n([ d({
type: cc.Node,
displayName: "完成订单背景",
tooltip: "完成订单背景"
}) ], e.prototype, "finish_node", void 0);
n([ d({
type: c.default,
displayName: "记录类",
tooltip: "记录类"
}) ], e.prototype, "historyController", void 0);
return e = n([ u ], e);
}(r.default);
o.default = f;
cc._RF.pop();
}, {
"../../../commonLib/component/PopBox/messageBox": "messageBox",
"../../../commonLib/component/PopBox/popBox": "popBox",
"../../../commonLib/component/tableView/tableViewItem": "tableViewItem",
"../../../commonLib/lib/HttpLib": "HttpLib",
"../../../commonLib/lib/LoginLib": "LoginLib",
"./HistoryController": "HistoryController"
} ],
HttpLib: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "36017sHdxdGJJ8HXTr5jzqj", "HttpLib");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.HttpLib = o.HttpMethod = o.HttpResponseType = void 0;
var i, n;
(function(t) {
t.ARRAY = "arraybuffer";
t.BLOB = "blob";
t.DOC = "document";
t.JSON = "json";
t.TEXT = "text";
})(i = o.HttpResponseType || (o.HttpResponseType = {}));
(function(t) {
t.GET = "GET";
t.POST = "POST";
})(n = o.HttpMethod || (o.HttpMethod = {}));
var r = function() {
function t() {
var e = this;
this.isShowWaitUI = !0;
this._xhr = new XMLHttpRequest();
this._xhr.responseType = i.JSON;
this._xhr.withCredentials = !0;
this._xhr.timeout = t.http_timeout;
this._xhr.onerror = this.onGetIOError.bind(this);
cc.sys.isNative ? this._xhr.onreadystatechange = function() {
if (4 == e._xhr.readyState) if (200 == e._xhr.status) {
cc.log("成功回调函数 = " + e._xhr.responseText);
var o = e._xhr.responseText;
"string" == typeof o && (o = JSON.parse(o));
e.isShowWaitUI && t.hideWaitUICallback && t.hideWaitUICallback(e);
e._isOver = !0;
e._callback_Success && e._callback_Success.call(e._cbThisArg, o);
} else {
cc.log("失败回调函数 this._xhr.status is " + e._xhr.status);
e._callback_Fail.call(e._cbThisArg, 80001, "请求失败，请联系服务器管理员！");
} else 1 == e._xhr.readyState ? cc.log("正在发送请求…… this._xhr.status is" + e._xhr.status) : cc.log("发送请求其他状态 readyState is" + e._xhr.readyState);
} : this._xhr.onload = this.onGetComplete.bind(this);
this._isOver = !1;
this._isLogPrint = !0;
}
t.setShowWaitUI = function(e) {
void 0 === e && (e = !0);
t.isShowWaitUI = e;
};
t.setShowWaitUICallback = function(e, o) {
t.showWaitUICallback = e;
t.hideWaitUICallback = o;
};
t.prototype.open = function(t, e, o, i, r) {
void 0 === r && (r = n.POST);
this._callback_Success = t;
this._callback_Fail = e;
this._cbThisArg = i;
this._Url = o;
this._xhr.open(r, this._Url);
this._xhr.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
};
t.prototype.close = function() {
this._xhr = null;
this._isOver = !0;
};
t.prototype.isClose = function() {
return this._isOver;
};
t.prototype.setResponseType = function(t) {
this._xhr && (this._xhr.responseType = t);
};
t.prototype.setRequestHeader = function(t, e) {
this._xhr && this._xhr.setRequestHeader(t, e);
};
t.prototype.getResponseHeader = function(t) {
if (this._xhr) return this._xhr.getResponseHeader(t);
};
t.prototype.setWithCredentials = function(t) {
if (this._xhr) return this._xhr.withCredentials = t;
};
t.prototype.showWaitUI = function() {
this.isShowWaitUI = t.isShowWaitUI;
t.isShowWaitUI = !0;
this.isShowWaitUI && t.showWaitUICallback && t.showWaitUICallback(this);
};
t.prototype.send = function(t) {
void 0 === t && (t = null);
this._isLogPrint && cc.log("http数据发送，url：" + this._Url);
if (this._xhr) if (this.isJSON(t)) {
var e = JSON.stringify(t);
this._isLogPrint && cc.log("http发送json对象:" + e);
this.showWaitUI();
this._xhr.send(e);
} else if ("string" == typeof t) {
this._isLogPrint && cc.log("http发送字符串对象:" + t);
this.showWaitUI();
this._xhr.send(t);
} else {
this._isLogPrint && cc.log("不发送数据");
this.showWaitUI();
this._xhr.send();
}
};
t.prototype.sendArray = function(t) {
void 0 === t && (t = null);
this._isLogPrint && cc.log("http数据发送，url：" + this._Url);
if (this._xhr) {
this._isLogPrint && cc.log("http发送数组对象:" + t);
this.showWaitUI();
this._xhr.send(t);
}
};
t.prototype.getURL = function() {
return this._Url;
};
t.prototype.abort = function() {
this._xhr.abort();
};
t.prototype.setIsLogPrint = function(t) {
this._isLogPrint = t;
};
t.prototype.onGetComplete = function(e, o) {
this.isShowWaitUI && t.hideWaitUICallback && t.hideWaitUICallback(this);
this._isOver = !0;
if (!e) {
console.log("event is null");
cc.log("event is null");
}
if (!o) {
console.log("event2 is null");
cc.log("event2 is null");
}
var i = e.currentTarget;
if (this._isLogPrint) {
console.log("收到的数据：" + i.response + ",来自：" + this._Url);
cc.log("收到的数据：" + i.response + ",来自：" + this._Url);
}
this._callback_Success && this._callback_Success.call(this._cbThisArg, i.response);
};
t.prototype.onGetIOError = function(e) {
this.isShowWaitUI && t.hideWaitUICallback && t.hideWaitUICallback(this);
this._isOver = !0;
cc.log("http连接错误，地址 === " + this._Url);
var o = e.currentTarget;
this._callback_Fail && this._callback_Fail.call(this._cbThisArg, -200, "http发生错误！", o);
};
t.prototype.isJSON = function(t) {
try {
return JSON.stringify(t).indexOf("{") > -1;
} catch (t) {
cc.log(t);
return !1;
}
};
t.BASE_PATH = "http://192.168.6.153";
t.http_timeout = 3e4;
t.isShowWaitUI = !0;
t.showWaitUICallback = null;
t.hideWaitUICallback = null;
return t;
}();
o.HttpLib = r;
cc._RF.pop();
}, {} ],
LoginLib: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b8896Uzt8dPbZksuC4Rba/9", "LoginLib");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.loginLib = void 0;
var i = t("./HttpLib"), n = function() {
function t() {
this.loginUrl = i.HttpLib.BASE_PATH + "/smallgameapi/login.php";
this.loginToken = "";
this.userId = "";
this.loginData = null;
this.deviceId = "";
this.appId = "69156";
this.ad_probability = 4;
}
t.prototype.LoginGame = function(t, e) {
void 0 === e && (e = "");
this._loginCallback = t;
var o = new i.HttpLib();
o.open(this.successCallback, this.failureCallback, this.loginUrl, this, i.HttpMethod.POST);
var n = {
app_id: this.appId,
client_id: e,
imei: "",
android_id: ""
};
if ("" == e) {
this.deviceId = this.getDeviceId();
if (this.deviceId && "" != this.deviceId && this.deviceId.includes(",")) {
var r = this.deviceId.split(",");
n.client_id = r[0];
n.imei = r[1];
n.android_id = r[2];
o.send(n);
}
} else o.send(n);
};
t.prototype.successCallback = function(t) {
console.log("success is：" + t.toString());
var e = t;
if (0 == e.code) {
this.loginData = e.data;
this.loginToken = this.loginData.session_id;
this.userId = this.loginData.uid;
this.loginData.ad_probability && (this.ad_probability = this.loginData.ad_probability);
this._loginCallback();
} else cc.log("code is " + e.code);
};
t.prototype.failureCallback = function(t, e, o) {};
t.prototype.getDeviceId = function() {
if (!cc.sys.isNative) return "000000000,0000000";
var t = null;
switch (cc.sys.os) {
case cc.sys.OS_IOS:
t = jsb.reflection.callStaticMethod("AppController", "getUUID:", "3333");
cc.log("ret is : " + t.toString());
console.log("ret is：" + t.toString());
break;

case cc.sys.OS_ANDROID:
t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIMEI2", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "title", "hahahahha");
cc.log("ret is : " + t.toString());
console.log("ret is：" + t.toString());
}
if (t) {
cc.log(".reflection.callStaticMethod.ret = " + t.toString());
return t.toString();
}
};
return t;
}();
o.loginLib = new n();
cc._RF.pop();
}, {
"./HttpLib": "HttpLib"
} ],
NodeListener: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f19b1/dpyZFHI/zAlCfXtkO", "NodeListener");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, a = cc._decorator, s = a.ccclass, c = a.property, l = a.menu;
(function(t) {
t[t["默认"] = 0] = "默认";
t[t["节点隐藏"] = 1] = "节点隐藏";
t[t["节点显示"] = 2] = "节点显示";
t[t["节点禁用"] = 3] = "节点禁用";
t[t["节点启用"] = 4] = "节点启用";
t[t["触摸开始"] = 5] = "触摸开始";
t[t["触摸移动"] = 6] = "触摸移动";
t[t["触摸结束"] = 7] = "触摸结束";
t[t["触摸取消"] = 8] = "触摸取消";
t[t["鼠标按下"] = 9] = "鼠标按下";
t[t["鼠标移动"] = 10] = "鼠标移动";
t[t["鼠标移入"] = 11] = "鼠标移入";
t[t["鼠标移出"] = 12] = "鼠标移出";
t[t["鼠标抬起"] = 13] = "鼠标抬起";
t[t["鼠标滚轮滚动"] = 14] = "鼠标滚轮滚动";
t[t["坐标变化"] = 15] = "坐标变化";
t[t["旋转变化"] = 16] = "旋转变化";
t[t["缩放变化"] = 17] = "缩放变化";
t[t["尺寸变化"] = 18] = "尺寸变化";
t[t["锚点变化"] = 19] = "锚点变化";
t[t["颜色变化"] = 20] = "颜色变化";
t[t["添加子节点"] = 21] = "添加子节点";
t[t["子节点被移除"] = 22] = "子节点被移除";
t[t["子节点顺序改变"] = 23] = "子节点顺序改变";
t[t["父节点变化"] = 24] = "父节点变化";
t[t["层级变化"] = 25] = "层级变化";
})(r || (r = {}));
cc.Enum(r);
var p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.eventType = r.默认;
e.callbackEvents = [];
return e;
}
e.prototype.start = function() {
var t = this;
switch (this.eventType) {
case r.节点显示:
this.node.on("active-in-hierarchy-changed", function() {
t.node.active && t.onEvent();
});
break;

case r.节点隐藏:
this.node.on("active-in-hierarchy-changed", function() {
t.node.active || t.onEvent();
});
break;

case r.触摸开始:
this.node.on(cc.Node.EventType.TOUCH_START, this.onEvent.bind(this));
break;

case r.触摸移动:
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onEvent.bind(this));
break;

case r.触摸结束:
this.node.on(cc.Node.EventType.TOUCH_END, this.onEvent.bind(this));
break;

case r.触摸取消:
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEvent.bind(this));
break;

case r.鼠标按下:
this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onEvent.bind(this));
break;

case r.鼠标移动:
this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onEvent.bind(this));
break;

case r.鼠标移入:
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onEvent.bind(this));
break;

case r.鼠标移出:
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onEvent.bind(this));
break;

case r.鼠标抬起:
this.node.on(cc.Node.EventType.MOUSE_UP, this.onEvent.bind(this));
break;

case r.鼠标滚轮滚动:
this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.onEvent.bind(this));
break;

case r.坐标变化:
this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onEvent.bind(this));
break;

case r.旋转变化:
this.node.on(cc.Node.EventType.ROTATION_CHANGED, this.onEvent.bind(this));
break;

case r.缩放变化:
this.node.on(cc.Node.EventType.SCALE_CHANGED, this.onEvent.bind(this));
break;

case r.尺寸变化:
this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onEvent.bind(this));
break;

case r.锚点变化:
this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.onEvent.bind(this));
break;

case r.颜色变化:
this.node.on(cc.Node.EventType.COLOR_CHANGED, this.onEvent.bind(this));
break;

case r.添加子节点:
this.node.on(cc.Node.EventType.CHILD_ADDED, this.onEvent.bind(this));
break;

case r.子节点被移除:
this.node.on(cc.Node.EventType.CHILD_REMOVED, this.onEvent.bind(this));
break;

case r.子节点顺序改变:
this.node.on(cc.Node.EventType.CHILD_REORDER, this.onEvent.bind(this));
break;

case r.父节点变化:
this.node.on(cc.Node.EventType.GROUP_CHANGED, this.onEvent.bind(this));
break;

case r.层级变化:
this.node.on(cc.Node.EventType.SIBLING_ORDER_CHANGED, this.onEvent.bind(this));
}
};
e.prototype.onEvent = function() {
if (this.callbackEvents && this.callbackEvents.length) for (var t = 0, e = this.callbackEvents; t < e.length; t++) {
var o = e[t];
o.emit([ o.customEventData ]);
}
};
e.prototype.onEnable = function() {
this.eventType == r.节点启用 && this.onEvent();
};
e.prototype.onDisable = function() {
this.eventType == r.节点禁用 && this.onEvent();
};
n([ c({
type: r,
displayName: "事件类型",
tooltip: "需要监听的事件类型"
}) ], e.prototype, "eventType", void 0);
n([ c({
type: cc.Component.EventHandler,
displayName: "操作",
tooltip: "监听事件触发的操作"
}) ], e.prototype, "callbackEvents", void 0);
return e = n([ s, l("扩展组件/节点事件监听") ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
RedBagDataHelper: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ac6af7TZ71MHYPFxxfl05u/", "RedBagDataHelper");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.redBagDataHelper = void 0;
var i = t("../Construct"), n = t("../../../commonLib/lib/HttpLib"), r = t("../../../commonLib/lib/LoginLib"), a = t("../../../commonLib/lib/ReportLib"), s = function() {
function t() {
this._httpFinishPath = n.HttpLib.BASE_PATH + "/smallgameapi/changeUserProperty.php";
}
t.prototype.adsFinished = function() {
var t = new n.HttpLib();
t.open(this.successFinishCallback, this.failureFinishCallback, this._httpFinishPath, this, n.HttpMethod.POST);
t.setRequestHeader("cookie", "PHPSESSID=" + r.loginLib.loginToken);
t.send({});
};
t.prototype.successFinishCallback = function(t) {
var e = JSON.parse(t);
if (0 == e.code) {
a.reportLib.tokenReceive(e.data.userInfo.property_num, e.data.userInfo.property_num - i.construct.userInfo.property_num, "redbag");
i.construct.userInfo.property_num = e.data.userInfo.property_num;
} else cc.log("successFinishCallback接口失败！" + e.code);
};
t.prototype.failureFinishCallback = function(t, e, o) {
cc.log("确认红包领取失败！" + t);
};
return t;
}();
o.default = s;
o.redBagDataHelper = new s();
cc._RF.pop();
}, {
"../../../commonLib/lib/HttpLib": "HttpLib",
"../../../commonLib/lib/LoginLib": "LoginLib",
"../../../commonLib/lib/ReportLib": "ReportLib",
"../Construct": "Construct"
} ],
RedPackets: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2826cD+wcNLKrZTUrSriraM", "RedPackets");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./advertising"), a = t("../../commonLib/lib/HttpLib"), s = t("../../commonLib/lib/LoginLib"), c = t("./Construct"), l = t("./redbag/RedBagDataHelper"), p = cc._decorator, h = p.ccclass, u = p.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.openNode = null;
e.openedNode = null;
e.moneyLable = null;
e.allLable = null;
e._httpPath = a.HttpLib.BASE_PATH + "/smallgameapi/getRoundSet.php";
e._getMoney = 0;
return e;
}
e.prototype.onLoad = function() {
this.openNode.active = !0;
this.openedNode.active = !1;
};
e.prototype.开红包看广告 = function() {
var t = this;
r.default.play(function() {
t.openNode.active = !1;
t.openedNode.active = !0;
l.redBagDataHelper.adsFinished();
});
var e = new a.HttpLib();
e.open(this.successCallback, this.failureCallback, this._httpPath, this, a.HttpMethod.POST);
e.setRequestHeader("cookie", "PHPSESSID=" + s.loginLib.loginToken);
e.send({});
};
e.prototype.successCallback = function(t) {
var e = t;
if (0 == e.code) {
this._getMoney = e.data.CouponNum;
this.moneyLable.string = this._getMoney + "";
this.allLable.string = c.construct.userInfo.property_num + this._getMoney + "";
} else cc.log("successCallback接口失败！" + e.code);
};
e.prototype.failureCallback = function(t, e, o) {
cc.log("获取红包失败！" + t);
};
e.prototype.getTestRedBag = function() {
l.redBagDataHelper.adsFinished();
};
n([ u({
type: cc.Node,
displayName: "开红包前节点",
tooltip: "开红包之前要显示的节点"
}) ], e.prototype, "openNode", void 0);
n([ u({
type: cc.Node,
displayName: "开红包后节点",
tooltip: "开红包之后要显示的节点"
}) ], e.prototype, "openedNode", void 0);
n([ u({
type: cc.Label,
displayName: "红包钱数"
}) ], e.prototype, "moneyLable", void 0);
n([ u({
type: cc.Label,
displayName: "总钱数"
}) ], e.prototype, "allLable", void 0);
return e = n([ h ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../commonLib/lib/HttpLib": "HttpLib",
"../../commonLib/lib/LoginLib": "LoginLib",
"./Construct": "Construct",
"./advertising": "advertising",
"./redbag/RedBagDataHelper": "RedBagDataHelper"
} ],
ReportLib: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f5d14MzOtpE7KUuIu8lUWfM", "ReportLib");
var i, n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ReportHttp = o.reportLib = o.REPORT_EVENT = void 0;
(function(t) {
t.LOGIN = "log_in";
t.REGISTER = "register";
t.SIGNOUT = "sign_out";
t.ONLINE_NUM = "online_num";
t.THIRDPARTY_BIND = "thirdparty_bind";
t.TABLE_START = "table_start";
t.TABLE_FINISH = "table_finish";
t.STAGE_GAME_FINISH = "stage_game_finish";
t.INGAME_CONSUME = "ingame_consume";
t.CLICK_EVENT = "click_event";
t.WATCH_ADVERTS = "watch_adverts";
t.TOKEN_RECEIVE = "token_receive";
t.MISSION_COMPLETE = "mission_complete";
t.RE_EXCHANGE = "rp_exchange";
t.TOKEN_CHANGE = "token_change";
})(i = o.REPORT_EVENT || (o.REPORT_EVENT = {}));
var r = t("./HttpLib"), a = t("./LoginLib"), s = t("./gameLib"), c = cc._decorator, l = c.ccclass, p = (c.property, 
function() {
function t() {
this._reportPath = "https://record.game.luckycatgame.com:9002/kafka_yuenan";
this._mode = "debug";
this._reportParamList = [];
}
t.prototype.start = function() {};
t.prototype.reportLogin = function() {
this.sendReport(i.LOGIN, {});
};
t.prototype.register = function() {
this.sendReport(i.REGISTER, {});
};
t.prototype.signOut = function() {
this.sendReport(i.SIGNOUT, {});
};
t.prototype.tableStart = function(t, e) {
void 0 === e && (e = 0);
var o = {
table_type: t,
bet_type: e
};
this.sendReport(i.TABLE_START, o);
};
t.prototype.tableFinish = function(t, e, o, n, r) {
void 0 === o && (o = null);
void 0 === n && (n = null);
void 0 === r && (r = 0);
var a = {
table_type: t,
win_lose: e,
increase_props_info: o,
reduce_props_info: n,
bet_type: r
};
this.sendReport(i.TABLE_FINISH, a);
};
t.prototype.stageGameFinish = function(t, e, o, n, r, a, s, c) {
void 0 === n && (n = []);
void 0 === r && (r = []);
void 0 === c && (c = 1);
var l = {
stage_chapter: t,
stage_step: e,
stage_difficulty: o,
increase_props_info: n,
reduce_props_info: r,
score_num: a,
win_lose: s,
is_first: c
};
this.sendReport(i.STAGE_GAME_FINISH, l);
};
t.prototype.ingameConsume = function() {
this.sendReport(i.INGAME_CONSUME, {});
};
t.prototype.clickEvent = function(t, e) {
var o = {
event_name: t,
status: e
};
this.sendReport(i.CLICK_EVENT, o);
};
t.prototype.watchAdverts = function(t, e) {
var o = {
adverts_name: t,
register_data: new Date().getFullYear,
status: e
};
this.sendReport(i.WATCH_ADVERTS, o);
};
t.prototype.tokenReceive = function(t, e, o) {
var n = {
current_num: t,
game_id: a.loginLib.appId,
reason: o,
send_from: a.loginLib.userId,
token_name: e
};
this.sendReport(i.TOKEN_RECEIVE, n);
};
t.prototype.missionComplete = function() {
this.sendReport(i.MISSION_COMPLETE, {});
};
t.prototype.rpExchange = function(t, e, o, n, r) {
var a = {
exchange_type: t,
props_id: e,
props_name: o,
props_num: n,
token_num: r
};
this.sendReport(i.RE_EXCHANGE, a);
};
t.prototype.tokenChange = function(t, e, o, n) {
var r = {
client_id: a.loginLib.deviceId,
client_type: "app",
current_num: t,
event_type: n,
product_id: 0,
reason: o,
reason_id: 1,
role_id: 1,
role_name: "Player",
token_id: 2005,
token_name: 2005,
token_num: e,
user_id: a.loginLib.userId
};
this.sendReport(i.TOKEN_CHANGE, r);
};
t.prototype.sendReport = function(t, e) {
var o = this;
void 0 === e && (e = {});
e.user_id = a.loginLib.userId;
e.client_id = a.loginLib.deviceId;
e.role_id = a.loginLib.userId;
e.role_name = "";
switch (cc.sys.os) {
case cc.sys.OS_IOS:
e.system_type = "IOS";
break;

case cc.sys.OS_ANDROID:
e.system_type = "ANDROID";
}
e.client_type = "APP";
e.package_id = a.loginLib.appId;
var i = new Date(), n = {
data: {
app_version: "1.0",
context: e,
event: t,
time: this.formateDate(i)
},
mode: this._mode,
type: "operation",
isSending: !0
}, r = cc.sys.localStorage.getItem("reportData");
r && (this._reportParamList = JSON.parse(r));
this._reportParamList.length >= 200 && this._reportParamList.shift();
for (var s = [], c = 0; c < this._reportParamList.length; c++) {
var l = this._reportParamList[c];
if (!l.isSending) {
l.isSending = !0;
s.push(l);
}
}
s.push(n);
this._reportParamList.push(n);
cc.sys.localStorage.setItem("reportData", JSON.stringify(this._reportParamList));
new h().sendReport(this._reportPath, s, function() {
s.forEach(function(t) {
var e = o._reportParamList.indexOf(t);
e >= 0 && o._reportParamList.splice(e, 1);
});
cc.sys.localStorage.setItem("reportData", JSON.stringify(o._reportParamList));
}, function() {
s.forEach(function(t) {
t.isSending = !1;
});
cc.sys.localStorage.setItem("reportData", JSON.stringify(o._reportParamList));
});
};
t.prototype.formateDate = function(t) {
var e = s.gameLib.formatDate(t, "yyyy-MM-ddTHH:mm:ss"), o = t.getTimezoneOffset() / 60 * -1;
if ((o *= 100) > 0) {
e += "+";
e += o < 1e3 ? "0" + o : o;
} else {
e += "-";
e += o > -1e3 ? "0" + o : o;
}
return e;
};
return t = n([ l ], t);
}());
o.default = p;
o.reportLib = new p();
var h = function() {
function t() {
this._param = [];
this._path = "";
}
t.prototype.sendReport = function(t, e, o, i) {
this._path = t;
this._param = e;
this._callFuns = o;
this._callFunf = i;
this.sendMessage();
};
t.prototype.sendMessage = function() {
var t = new r.HttpLib();
t.open(this.successCallback, this.failureCallback, this._path, this, r.HttpMethod.POST);
t.send(this._param);
};
t.prototype.successCallback = function(t) {
cc.log("success is " + t.toString());
0 === t.code && this._callFuns();
};
t.prototype.failureCallback = function(t, e, o) {
this._callFunf();
};
return t;
}();
o.ReportHttp = h;
cc._RF.pop();
}, {
"./HttpLib": "HttpLib",
"./LoginLib": "LoginLib",
"./gameLib": "gameLib"
} ],
StoreController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "80544LX7p9ERrXD4oasyD5k", "StoreController");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../commonLib/component/tableView/tableView"), a = t("../../../commonLib/lib/HttpLib"), s = t("../Construct"), c = t("../../../commonLib/lib/LoginLib"), l = cc._decorator, p = l.ccclass, h = l.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.type_tc = null;
e.all_lab = null;
e.redbag_tb = null;
e._storePath = a.HttpLib.BASE_PATH + "/smallgameapi/getGoodsList.php";
e._storeData = null;
e._goodsRed = [];
e._goodsOrange = [];
e._goodsType = 0;
return e;
}
e.prototype.start = function() {
this.initUI();
this.getData();
};
e.prototype.initUI = function() {
this.all_lab.string = s.construct.userInfo.property_num + "";
};
e.prototype.setData = function(t) {
0 == t ? this.redbag_tb.setData(this._goodsRed) : 1 == t && this.redbag_tb.setData(this._goodsOrange);
};
e.prototype.sortData = function() {
if (this._goodsRed.length > 0) {
for (var t = [], e = [], o = [], i = 0; i < this._goodsRed.length; i++) {
"activity" == (n = this._goodsRed[i]).activity_code ? e.push(n) : "normal" == n.activity_code ? t.push(n) : "newbee" == n.activity_code && o.push(n);
}
t = o.concat(e, t);
this._goodsRed = t;
}
if (this._goodsOrange.length > 0) {
for (t = [], e = [], o = [], i = 0; i < this._goodsOrange.length; i++) {
var n;
"activity" == (n = this._goodsOrange[i]).activity_code ? e.push(n) : "normal" == n.activity_code ? t.push(n) : "newbee" == n.activity_code && o.push(n);
}
t = o.concat(e, t);
this._goodsOrange = t;
}
};
e.prototype.getData = function() {
var t = new a.HttpLib();
t.open(this.successCallback, this.failureCallback, this._storePath, this, a.HttpMethod.POST);
t.setRequestHeader("cookie", "PHPSESSID=" + c.loginLib.loginToken);
t.send({
page: 1,
rows: 100
});
};
e.prototype.successCallback = function(t) {
var e = t;
if (0 == e.code) {
this._storeData = e.data.data;
s.construct.userInfo.property_num = e.data.userInfo.property_num;
this.initUI();
this._goodsRed = [];
this._goodsOrange = [];
for (var o = 0; o < this._storeData.length; o++) {
var i = this._storeData[o];
2007 == i.item_name || 2008 == i.item_name ? this._goodsRed.push(i) : this._goodsOrange.push(i);
}
this.sortData();
this.setData(this._goodsType);
}
};
e.prototype.failureCallback = function(t, e, o) {};
e.prototype.button_click = function() {};
e.prototype.changeType_click = function(t, e) {
if ("0" == e) {
if (1 == this._goodsType) {
this._goodsType = 0;
this.setData(this._goodsType);
}
} else if (0 == this._goodsType) {
this._goodsType = 1;
this.setData(this._goodsType);
}
};
e.prototype.refreshData = function() {
this.getData();
};
n([ h({
type: cc.ToggleContainer,
displayName: "类型选项",
tooltip: "类型选项"
}) ], e.prototype, "type_tc", void 0);
n([ h({
type: cc.Label,
displayName: "游戏币",
tooltip: "拥有游戏币数量"
}) ], e.prototype, "all_lab", void 0);
n([ h({
type: r.default,
displayName: "tableview",
tooltip: "tableview"
}) ], e.prototype, "redbag_tb", void 0);
return e = n([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../commonLib/component/tableView/tableView": "tableView",
"../../../commonLib/lib/HttpLib": "HttpLib",
"../../../commonLib/lib/LoginLib": "LoginLib",
"../Construct": "Construct"
} ],
StoreTableItemComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2a2d6eGDGtAXLgrjCgsvRkv", "StoreTableItemComponent");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../commonLib/component/tableView/tableViewItem"), a = t("../../../commonLib/lib/HttpLib"), s = t("../../../commonLib/lib/LoginLib"), c = t("./StoreController"), l = t("../../../commonLib/component/PopBox/messageBox"), p = t("../Construct"), h = t("../../../commonLib/component/addUI"), u = t("../../../commonLib/component/PopBox/popBox"), d = t("../../../commonLib/lib/ReportLib"), f = cc._decorator, m = f.ccclass, y = f.property, g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tag1 = null;
e.tag2 = null;
e.bindPhoneLayer = null;
e.redIcons = [];
e.orangeIcons = [];
e.typeNode = [];
e.storeController = null;
e._itemId = -1;
e._storePath = a.HttpLib.BASE_PATH + "/smallgameapi/exchange.php";
e._canPay = !0;
e._itemName = 0;
e._useAmount = 0;
return e;
}
e.prototype.start = function() {};
e.prototype.onDataChange = function(t) {
this.setData(t);
};
e.prototype.setData = function(t) {
var e = 1;
this.typeNode[0].active = !1;
this.typeNode[1].active = !1;
2007 != t.item_name && 2008 != t.item_name || (e = 0);
this._itemName = t.item_name;
this._itemId = t.item_id;
this._useAmount = t.use_amount;
this.typeNode[e].active = !0;
var o = this.typeNode[e].getChildByName("price_lab"), i = this.typeNode[e].getChildByName("priceGame_lab"), n = this.typeNode[e].getChildByName("gameMoneyTitle");
this.showTip(t.activity_code);
this.showIcon(this.typeNode[e], t.item_name);
this.typeNode[e].getChildByName("item" + t.item_name).active = !0;
if (0 == t.status) {
this._canPay = !1;
o.getComponent(cc.Label).string = "Received";
i.getComponent(cc.Label).string = "Please come again.";
n.active = !1;
} else {
this._canPay = !0;
o.getComponent(cc.Label).string = t.item_amount + "";
i.getComponent(cc.Label).string = t.use_amount + "";
n.active = !0;
}
};
e.prototype.showMessageBox = function() {
if ("" == p.construct.userInfo.phone) this.bindPhoneLayer.addUI(); else {
if (!this._canPay) {
u.default.popBox("Goods Received！");
return;
}
l.default.messageBox("Are you sure to exchange the goods?", this.payItem.bind(this), function() {});
}
};
e.prototype.payItem = function() {
var t = new a.HttpLib();
t.open(this.successCallback, this.failureCallback, this._storePath, this, a.HttpMethod.POST);
var e = {
item_id: this._itemId
};
t.setRequestHeader("cookie", "PHPSESSID=" + s.loginLib.loginToken);
t.send(e);
};
e.prototype.successCallback = function(t) {
var e = t;
if (0 == e.code) {
cc.log("get success!");
u.default.popBox("Successful！");
this.storeController.refreshData();
d.reportLib.rpExchange(0, this._itemId, this._itemName + "", 1, this._useAmount);
} else {
cc.log("兑换失败：" + e.msg);
u.default.popBox("Failure!");
}
};
e.prototype.failureCallback = function(t, e, o) {
u.default.popBox(e);
};
e.prototype.showIcon = function(t, e) {
t.getChildByName("item2008").active = !1;
t.getChildByName("item2007").active = !1;
t.getChildByName("item2011").active = !1;
t.getChildByName("item2012").active = !1;
t.getChildByName("item2013").active = !1;
t.getChildByName("item2014").active = !1;
t.getChildByName("item" + e).active = !0;
};
e.prototype.showTip = function(t) {
if ("activity" == t) {
this.tag1.active = !0;
this.tag2.active = !1;
} else if ("normal" == t) {
this.tag1.active = !1;
this.tag2.active = !1;
} else if ("newbee" == t) {
this.tag1.active = !1;
this.tag2.active = !0;
}
};
n([ y({
type: cc.Node,
displayName: "标签1",
tooltip: "不明标签1"
}) ], e.prototype, "tag1", void 0);
n([ y({
type: cc.Node,
displayName: "标签2",
tooltip: "不明标签2"
}) ], e.prototype, "tag2", void 0);
n([ y({
type: h.default,
displayName: "绑定手机号",
tooltip: "绑定手机号"
}) ], e.prototype, "bindPhoneLayer", void 0);
n([ y({
type: cc.Node,
displayName: "红包icon",
tooltip: "红包icon"
}) ], e.prototype, "redIcons", void 0);
n([ y({
type: cc.Node,
displayName: "电话卡icon",
tooltip: "电话卡icon"
}) ], e.prototype, "orangeIcons", void 0);
n([ y({
type: cc.Node,
displayName: "类型底板",
tooltip: "类型底板"
}) ], e.prototype, "typeNode", void 0);
n([ y({
type: c.default,
displayName: "商店类",
tooltip: "商店类"
}) ], e.prototype, "storeController", void 0);
return e = n([ m ], e);
}(r.default);
o.default = g;
cc._RF.pop();
}, {
"../../../commonLib/component/PopBox/messageBox": "messageBox",
"../../../commonLib/component/PopBox/popBox": "popBox",
"../../../commonLib/component/addUI": "addUI",
"../../../commonLib/component/tableView/tableViewItem": "tableViewItem",
"../../../commonLib/lib/HttpLib": "HttpLib",
"../../../commonLib/lib/LoginLib": "LoginLib",
"../../../commonLib/lib/ReportLib": "ReportLib",
"../Construct": "Construct",
"./StoreController": "StoreController"
} ],
ThemeSelect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "196c3Dz6TZJfb6FAW49hL7L", "ThemeSelect");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./gameData"), a = t("./gridManager"), s = t("./advertising"), c = t("../../commonLib/component/nodeOperation"), l = t("./gameMain"), p = cc._decorator, h = p.ccclass, u = p.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.themeItems = [];
e.themeItemCount = [];
e.themeShowSprite = null;
e.themeShowSF = [];
e.okBtn = null;
e.srcSelectIndex = null;
e.curSelectIndex = null;
return e;
}
e.prototype.onEnable = function() {
l.default.instance.pauseGame();
this.okBtn.interactable = !1;
this.curSelectIndex = r.loadThemeSelect();
this.srcSelectIndex = this.curSelectIndex;
this.themeItems[this.curSelectIndex].isChecked = !0;
for (var t = 0; t < this.themeItems.length; ++t) {
this.themeItems[t].interactable = r.gameData.archive && r.gameData.archive[t] && r.gameData.archive[t].length >= 20;
var e = this.themeItems[t].node.getChildByName("img_change_1");
if (this.themeItems[t].interactable) {
e.color = cc.Color.WHITE;
e.opacity = 255;
this.themeItemCount[t].node.parent.active = !1;
} else {
e.color = cc.color(94, 40, 17, 255);
e.opacity = 200;
this.themeItemCount[t].node.parent.active = !0;
r.gameData.archive[t] ? this.themeItemCount[t].string = r.gameData.archive[t].length + "/20" : this.themeItemCount[t].string = "0/20";
}
}
};
e.prototype.onDisable = function() {
l.default.instance.resumeGame();
};
e.prototype.选择主题 = function(t, e) {
for (var o = 0; o < this.themeItems.length; ++o) if (this.themeItems[o].isChecked) {
this.curSelectIndex = o;
this.themeShowSprite.spriteFrame = this.themeShowSF[this.curSelectIndex];
break;
}
this.okBtn.interactable = this.curSelectIndex != this.srcSelectIndex;
};
e.prototype.点击确定 = function() {
var t = this;
s.default.play(function() {
r.saveThemeSelect(t.curSelectIndex);
a.default.instance.updateTheme();
t.getComponent(c.default).closeSelf();
});
};
n([ u({
type: cc.Toggle,
displayName: "主题选项"
}) ], e.prototype, "themeItems", void 0);
n([ u({
type: cc.Label,
displayName: "主题碎片数"
}) ], e.prototype, "themeItemCount", void 0);
n([ u({
type: cc.Sprite,
displayName: "主题展示图"
}) ], e.prototype, "themeShowSprite", void 0);
n([ u({
type: cc.SpriteFrame,
displayName: "主题展示图集"
}) ], e.prototype, "themeShowSF", void 0);
n([ u({
type: cc.Button,
displayName: "确定按钮"
}) ], e.prototype, "okBtn", void 0);
return e = n([ h ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../commonLib/component/nodeOperation": "nodeOperation",
"./advertising": "advertising",
"./gameData": "gameData",
"./gameMain": "gameMain",
"./gridManager": "gridManager"
} ],
adapter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ddae2epnOZIv47RK2oca4yn", "adapter");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = (r.property, r.menu), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.onResized();
this.scheduleOnce(this.onResized, 0);
};
e.prototype.onEnable = function() {
cc.view.on("canvas-resize", this.onResized, this);
};
e.prototype.onDisable = function() {
cc.view.off("canvas-resize", this.onResized, this);
};
e.prototype.onResized = function() {
var t = cc.winSize;
if (t.width / this.node.width > t.height / this.node.height) {
this.node.scaleX = t.width / this.node.width;
this.node.scaleY = t.width / this.node.width;
} else {
this.node.scaleX = t.height / this.node.height;
this.node.scaleY = t.height / this.node.height;
}
};
return e = n([ a, s("适配/等比缩放适配") ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
addItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0b77dnN+hZAaY485W3GtB1Z", "addItem");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./advertising"), a = t("../../commonLib/component/nodeOperation"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.iconSFs = [];
e.icon = null;
e.numSFs = [];
e.numImg = null;
e.op = null;
e.id = null;
e.num = null;
e.callback = null;
e.destroyCallback = null;
return e;
}
e.prototype.onLoad = function() {
this.op = this.getComponent(a.default);
};
e.prototype.setData = function(t, e) {
this.id = t;
this.num = e;
this.icon.spriteFrame = this.iconSFs[t];
this.numImg.spriteFrame = this.numSFs[e - 1];
};
e.prototype.setCallback = function(t) {
this.callback = t;
};
e.prototype.setDestroyCallback = function(t) {
this.destroyCallback = t;
};
e.prototype.onDestroy = function() {
this.destroyCallback && this.destroyCallback();
};
e.prototype.点击观看广告 = function() {
var t = this;
r.default.play(function() {
t.callback && t.callback(t.id, t.num);
t.op.closeSelf();
});
};
n([ l({
type: cc.SpriteFrame,
displayName: "大图标集"
}) ], e.prototype, "iconSFs", void 0);
n([ l({
type: cc.Sprite,
displayName: "道具图标"
}) ], e.prototype, "icon", void 0);
n([ l({
type: cc.SpriteFrame,
displayName: "数量图片集"
}) ], e.prototype, "numSFs", void 0);
n([ l({
type: cc.Sprite,
displayName: "数量图"
}) ], e.prototype, "numImg", void 0);
return e = n([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../commonLib/component/nodeOperation": "nodeOperation",
"./advertising": "advertising"
} ],
addUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aabb4I/1aNJKYaXh7jJUDOF", "addUI");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ui = null;
e.isTop = !0;
return e;
}
o = e;
e.prototype.弹窗 = function(t, e) {
this.addUI(e);
};
e.prototype.addUI = function(t, e, i) {
void 0 === t && (t = null);
void 0 === e && (e = null);
void 0 === i && (i = null);
t ? o.addUI(t, e, i, this.isTop ? null : this.node) : this.ui && o.addUIByPrefab(this.ui, e, i, this.isTop ? null : this.node);
};
e.addUI = function(t, e, o, i) {
var n = this;
void 0 === e && (e = null);
void 0 === o && (o = null);
void 0 === i && (i = null);
cc.loader.loadRes("prefabs/" + t, cc.Prefab, function(t, i) {
t ? cc.log(t) : n.addUIByPrefab(i, e, o);
});
};
e.addUIByPrefab = function(t, e, o, i) {
void 0 === e && (e = null);
void 0 === o && (o = null);
void 0 === i && (i = null);
var n = cc.instantiate(t);
if (i) i.addChild(n); else {
var r = cc.director.getScene();
if (r) {
var a = r.getComponentInChildren(cc.Canvas);
if (a) {
n.x = 0;
n.y = 0;
a.node.addChild(n);
} else r.addChild(n);
}
}
if (e) {
e(n.getComponent(o || t.name));
}
};
var o;
n([ s({
type: cc.Prefab,
displayName: "要打开的UI",
tooltip: "可以在这里拖预设，也可以调用（弹窗）参数填路径，参数优先"
}) ], e.prototype, "ui", void 0);
n([ s({
displayName: "是否置顶弹窗"
}) ], e.prototype, "isTop", void 0);
return e = o = n([ a, c("扩展组件/弹窗") ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
advertising: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "26cd2IDhNxHIoXEJX3/A6SO", "advertising");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/component/addUI"), a = t("../../commonLib/lib/HttpLib"), s = t("../../commonLib/component/PopBox/popBox"), c = t("../../commonLib/lib/ReportLib"), l = cc._decorator, p = l.ccclass, h = (l.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.getUrl = a.HttpLib.BASE_PATH + "/smallgameapi/getRoundSet.php";
return e;
}
o = e;
e.prototype.setFinishCallback = function(t) {
o.callback = t;
};
e.prototype.onDestroy = function() {
o.callback && o.callback();
};
e.play = function(t) {
if (cc.sys.isNative) {
this.init();
this.callback = t;
var e = null;
switch (cc.sys.os) {
case cc.sys.OS_IOS:
e = jsb.reflection.callStaticMethod("AppController", "showAd:title:", "", "");
c.reportLib.watchAdverts("getRedbag", 0);
break;

case cc.sys.OS_ANDROID:
e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
c.reportLib.watchAdverts("getRedbag", 0);
}
e && cc.log(".reflection.callStaticMethod.ret = " + e.toString());
} else r.default.addUI("广告", function(e) {
e.setFinishCallback(t);
}, "advertising");
};
e.showInterstitialAd = function() {
if (cc.sys.isNative) {
this.init();
var t = null;
switch (cc.sys.os) {
case cc.sys.OS_IOS:
t = jsb.reflection.callStaticMethod("AppController", "showInterstitialAd:title:", "", "");
break;

case cc.sys.OS_ANDROID:
t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
}
t && cc.log(".reflection.callStaticMethod.ret = " + t.toString());
} else r.default.addUI("广告", function(t) {
t.setFinishCallback(finishCallback);
}, "advertising");
};
e.init = function() {
var t = this;
if (!this.isInit) {
this.isInit = !0;
window.didHideAd = function(e) {
c.reportLib.watchAdverts("getRedbag", 1);
t.callback && t.callback();
return "abcd";
};
window.adFailure = function(t) {
s.default.popBox(t);
};
}
};
var o;
e.callback = null;
e.isInit = !1;
return e = o = n([ p ], e);
}(cc.Component));
o.default = h;
cc._RF.pop();
}, {
"../../commonLib/component/PopBox/popBox": "popBox",
"../../commonLib/component/addUI": "addUI",
"../../commonLib/lib/HttpLib": "HttpLib",
"../../commonLib/lib/ReportLib": "ReportLib"
} ],
canvasAdapter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6be07d+u7xJ+oTTuMBkXQWI", "canvasAdapter");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = r.requireComponent, p = r.executeInEditMode, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._widget = null;
return e;
}
e.prototype.start = function() {
this.canvas || (this.canvas = this.getComponent(cc.Canvas));
this._widget = this.getComponent(cc.Widget);
this._widget.isAlignTop = !0;
this._widget.isAlignBottom = !0;
this._widget.isAlignLeft = !0;
this._widget.isAlignRight = !0;
this._widget.top = 0;
this._widget.bottom = 0;
this._widget.left = 0;
this._widget.right = 0;
this.onResized();
};
e.prototype.onEnable = function() {
this.onResized();
cc.view.on("canvas-resize", this.onResized, this);
};
e.prototype.onDisable = function() {
cc.view.off("canvas-resize", this.onResized, this);
};
e.prototype.onResized = function() {
if (this.canvas) {
var t = cc.view.getFrameSize(), e = cc.view.getDesignResolutionSize(), o = e.width / e.height;
if (t.width / t.height < o) {
this.canvas.fitWidth = !0;
this.canvas.fitHeight = !1;
} else {
this.canvas.fitWidth = !1;
this.canvas.fitHeight = !0;
}
}
};
n([ s({
serializable: !0
}) ], e.prototype, "_widget", void 0);
return e = n([ a, l(cc.Widget), p(), c("适配/画布适配") ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {} ],
comboAward: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fcd6bTXmvhNZ7umlFuMKiof", "comboAward");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/lib/gameLib"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.comboAwardLink = .5;
e.comboAwardBomb = .3;
e.comboAwardReset = .1;
e.comboAwardFreeze = .1;
e.sp = null;
e.sf = [];
e.particle = null;
e._awardID = null;
return e;
}
Object.defineProperty(e.prototype, "awardID", {
get: function() {
return this._awardID;
},
set: function(t) {
if (this._awardID != t) {
this._awardID = t;
this.sp.spriteFrame = this.sf[t];
}
},
enumerable: !0,
configurable: !0
});
e.prototype.onLoad = function() {
this.particle && this.particle.stopSystem();
};
e.prototype.randomComboAwardID = function() {
var t = this.comboAwardLink + this.comboAwardBomb + this.comboAwardReset + this.comboAwardFreeze, e = r.gameLib.GetRandomNum(1, 100 * t) / 100;
e <= this.comboAwardLink ? this.awardID = 0 : e <= this.comboAwardLink + this.comboAwardBomb ? this.awardID = 1 : e <= this.comboAwardLink + this.comboAwardBomb + this.comboAwardReset ? this.awardID = 2 : e <= t && (this.awardID = 3);
};
e.prototype.moveTo = function(t, e) {
var o = this;
if (t) {
var i = t.convertToWorldSpaceAR(cc.v2(t.x, t.y)), n = this.node.parent.convertToNodeSpaceAR(cc.v2(i.x, i.y));
n.y -= this.sp.node.anchorY * this.sp.node.height;
this.particle && this.particle.resetSystem();
cc.tween(this.node).to(1, {
x: n.x,
y: n.y
}, {
easing: "sineOut"
}).call(function() {
e && e(o);
o.particle && o.particle.stopSystem();
}).start();
}
};
n([ c({
displayName: "连击奖励查找概率",
step: .1
}) ], e.prototype, "comboAwardLink", void 0);
n([ c({
displayName: "连击奖励炸弹概率",
step: .1
}) ], e.prototype, "comboAwardBomb", void 0);
n([ c({
displayName: "连击奖励重排概率",
step: .1
}) ], e.prototype, "comboAwardReset", void 0);
n([ c({
displayName: "连击奖励冻结概率",
step: .1
}) ], e.prototype, "comboAwardFreeze", void 0);
n([ c({
type: cc.Sprite
}) ], e.prototype, "sp", void 0);
n([ c({
type: cc.SpriteFrame,
displayName: "连击奖励图标"
}) ], e.prototype, "sf", void 0);
n([ c({
type: cc.ParticleSystem,
displayName: "粒子效果"
}) ], e.prototype, "particle", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../commonLib/lib/gameLib": "gameLib"
} ],
comboText: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "488bdXX5SBAWrduN2GQ6AQp", "comboText");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/component/countDown"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cd = null;
e.combo = null;
e.animation = null;
e.changeAni = null;
e.showAni = null;
e.hideAni = null;
e.durationTime = 2;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.opacity = 0;
this.cd.setFinishCallback(function(e) {
t.playHideAni();
});
};
e.prototype.setCombo = function(t) {
this.combo.string = t.toString();
if (this.node.opacity && this.animation.currentClip != this.hideAni) this.animation.play(this.changeAni.name); else {
this.animation.play(this.showAni.name);
this.animation.sample(this.showAni.name);
}
this.cd.setTime(this.durationTime);
};
e.prototype.playHideAni = function() {
this.animation.play(this.hideAni.name);
};
n([ c({
type: r.default,
displayName: "倒计时"
}) ], e.prototype, "cd", void 0);
n([ c({
type: cc.Label,
displayName: "连击数字"
}) ], e.prototype, "combo", void 0);
n([ c({
type: cc.Animation,
displayName: "动画播放器"
}) ], e.prototype, "animation", void 0);
n([ c({
type: cc.AnimationClip,
displayName: "文字变动动画"
}) ], e.prototype, "changeAni", void 0);
n([ c({
type: cc.AnimationClip,
displayName: "文字显示动画"
}) ], e.prototype, "showAni", void 0);
n([ c({
type: cc.AnimationClip,
displayName: "文字隐藏动画"
}) ], e.prototype, "hideAni", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../commonLib/component/countDown": "countDown"
} ],
countDown: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e0571FE7hdOiIBGGMd3IxZL", "countDown");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isCountDown = !0;
e.isMinutes = !1;
e.curTime = 0;
e.timeLabel = null;
e.timeImg = [];
e.callbackEvents = [];
e.finishCallbackEvents = [];
e.beginTime = 0;
e.intTime = 0;
e.percentCallback = null;
e.finishCallback = null;
e.isPause = !1;
return e;
}
e.prototype.setTime = function(t) {
this.enabled = !0;
this.beginTime = t;
this.curTime = t;
this.intTime = Math.ceil(this.curTime);
this.onCallback();
};
e.prototype.resetTime = function() {
this.setTime(this.beginTime);
};
e.prototype.getTime = function() {
return this.curTime;
};
e.prototype.update = function(t) {
if (!this.isPause && (this.curTime > 0 || !this.isCountDown)) {
var e = this.intTime;
this.isCountDown ? this.curTime -= t : this.curTime += t;
if (this.curTime <= 0) {
this.curTime = 0;
this.enabled = !1;
}
var o = this.curTime / this.beginTime;
this.percentCallback && this.percentCallback(o);
for (var i = 0, n = this.timeImg; i < n.length; i++) {
var r = n[i];
if (r) {
null == r.MAXFillRange && (r.MAXFillRange = r.fillRange);
r.fillRange = r.MAXFillRange * o;
}
}
e = Math.ceil(this.curTime);
if (this.intTime != e) {
this.intTime = e;
this.onCallback();
}
}
};
e.prototype.setPercentCallback = function(t) {
this.percentCallback = t;
};
e.prototype.setFinishCallback = function(t) {
this.finishCallback = t;
};
e.prototype.onCallback = function() {
if (this.timeLabel) if (this.isMinutes) {
var t = Math.floor(this.intTime / 60), e = t < 10 ? "0" + t : t.toString(), o = this.intTime % 60, i = o < 10 ? "0" + o : o.toString();
this.timeLabel.string = e + ":" + i;
} else this.timeLabel.string = this.intTime.toString();
for (var n = 0, r = this.callbackEvents; n < r.length; n++) {
(c = r[n]).emit([ c.customEventData, this.intTime ]);
}
if (0 == this.intTime) {
this.finishCallback && this.finishCallback(this);
for (var a = 0, s = this.finishCallbackEvents; a < s.length; a++) {
var c;
(c = s[a]).emit([ c.customEventData, this.intTime ]);
}
}
};
e.prototype.pause = function() {
this.isPause = !0;
};
e.prototype.resume = function() {
this.isPause = !1;
};
n([ s({
displayName: "是否是倒计时"
}) ], e.prototype, "isCountDown", void 0);
n([ s({
displayName: "是否进位到分钟"
}) ], e.prototype, "isMinutes", void 0);
n([ s({
displayName: "开始计时秒数"
}) ], e.prototype, "curTime", void 0);
n([ s({
type: cc.Label,
displayName: "计时label"
}) ], e.prototype, "timeLabel", void 0);
n([ s({
type: cc.Sprite,
displayName: "倒计时进度条"
}) ], e.prototype, "timeImg", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "计时每秒回调"
}) ], e.prototype, "callbackEvents", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "计时结束回调"
}) ], e.prototype, "finishCallbackEvents", void 0);
return e = n([ a, c("扩展组件/倒计时") ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
cover: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a509fLywG1J5ZKHsZkuREJe", "cover");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/component/BlockInput"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.hideClip = null;
e.ani = null;
return e;
}
e.prototype.onLoad = function() {
this.ani = this.getComponent(cc.Animation);
};
e.prototype.playHideAni = function() {
var t = this.ani.play(this.hideClip.name);
r.blockInput(t.duration);
return t;
};
e.prototype.show = function() {
this.node.active = !0;
this.ani.setCurrentTime(0, this.hideClip.name);
this.ani.sample(this.hideClip.name);
};
n([ c({
type: cc.AnimationClip,
displayName: "隐藏动画"
}) ], e.prototype, "hideClip", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../commonLib/component/BlockInput": "BlockInput"
} ],
dragNode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6a858f0yJtCTpMt0gV2vkqW", "dragNode");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.savePOS = !0;
e.dragCenter = !1;
e.downEvents = [];
e.upEvents = [];
e.moveEvents = [];
e.clickEvents = [];
e._canMove = !0;
e.tarBeginPos = null;
e.touchBeginPos = null;
e.touchLocalPos = cc.Vec2.ZERO;
e.isMoved = !1;
return e;
}
e.prototype.onEnable = function() {
this.reset();
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
e.prototype.onDisable = function() {
this.reset();
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
Object.defineProperty(e.prototype, "canMove", {
get: function() {
return this._canMove;
},
set: function(t) {
if (this._canMove != t) {
this._canMove = t;
this.reset();
}
},
enumerable: !0,
configurable: !0
});
e.prototype._onTouchBegan = function(t) {
null == this.tarBeginPos && (this.tarBeginPos = this.node.position);
null == this.touchBeginPos && (this.touchBeginPos = t.touch.getLocation());
this.touchLocalPos = this.node.convertToNodeSpaceAR(this.touchBeginPos);
this.downEvents && this.downEvents.length && cc.Component.EventHandler.emitEvents(this.downEvents, t);
t.stopPropagation();
};
e.prototype._onTouchMove = function(t) {
if (this.canMove) {
var e = t.touch.getLocation();
if (this.touchBeginPos && (this.isMoved || Math.abs(this.touchBeginPos.x - e.x) > 10 || Math.abs(this.touchBeginPos.y - e.y) > 10)) {
this.isMoved = !0;
var o = this.node.parent.convertToNodeSpaceAR(e);
if (!this.dragCenter) {
o.x -= this.touchLocalPos.x;
o.y -= this.touchLocalPos.y;
}
this.node.setPosition(o);
this.moveEvents && this.moveEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.moveEvents, t);
t.stopPropagation();
}
}
};
e.prototype._onTouchEnded = function(t) {
this.isMoved && this.upEvents && this.upEvents.length ? cc.Component.EventHandler.emitEvents(this.upEvents, t) : this.touchBeginPos && !this.isMoved && this.clickEvents && this.clickEvents.length && cc.Component.EventHandler.emitEvents(this.clickEvents, t);
t.stopPropagation();
this.reset();
};
e.prototype._onTouchCancel = function(t) {
this.isMoved && this.upEvents && this.upEvents.length ? cc.Component.EventHandler.emitEvents(this.upEvents, t) : this.touchBeginPos && !this.isMoved && this.clickEvents && this.clickEvents.length && cc.Component.EventHandler.emitEvents(this.clickEvents, t);
t.stopPropagation();
this.reset();
};
e.prototype.reset = function() {
this.savePOS || !this.tarBeginPos || this.tarBeginPos.x == this.node.position.x && this.tarBeginPos.y == this.node.position.y || this.node.setPosition(this.tarBeginPos);
this.tarBeginPos = null;
this.touchBeginPos = null;
this.isMoved = !1;
};
n([ s({
displayName: "保存坐标",
tooltip: "是否保存拖拽后的坐标"
}) ], e.prototype, "savePOS", void 0);
n([ s({
displayName: "拖拽中心",
tooltip: "是否拖拽物体中心"
}) ], e.prototype, "dragCenter", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "按下监听",
tooltip: "按下方法监听，可设置多个"
}) ], e.prototype, "downEvents", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "抬起监听",
tooltip: "抬起方法监听，可设置多个"
}) ], e.prototype, "upEvents", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "移动监听",
tooltip: "移动方法监听，可设置多个"
}) ], e.prototype, "moveEvents", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "点击监听",
tooltip: "点击方法监听，可设置多个"
}) ], e.prototype, "clickEvents", void 0);
return e = n([ a, c("扩展组件/拖动") ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
gameAudioClip: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2bafcQOZcFDULBIUgQ6FFof", "gameAudioClip");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bgm = null;
e.removeGrid = null;
e.resetGridPos = null;
e.lightning = null;
e.freezeTime = null;
e.noLink = null;
e.btnClick = null;
e.btnCancel = null;
e.receiveItem = null;
e.openBox = null;
e.unfreezeGrid = null;
e.bombExplosion = null;
e.rebirthGrid = null;
e.lightningSelect = null;
e.gridSelect = null;
e.timeTip = null;
e.timeCountdown = null;
e.getComboAward = null;
e.comboAward = null;
e.clickFreeze = null;
e.freezeTimeAudioID = null;
e.lightningSelectAudioID = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.start = function() {
this.bgm && cc.audioEngine.playMusic(this.bgm, !0);
};
e.prototype.onDestroy = function() {
o.instance = null;
};
e.prototype.playRemoveGrid = function() {
this.removeGrid && cc.audioEngine.playEffect(this.removeGrid, !1);
};
e.playRemoveGrid = function() {
o.instance && o.instance.playRemoveGrid();
};
e.prototype.playResetGridPos = function() {
this.resetGridPos && cc.audioEngine.playEffect(this.resetGridPos, !1);
};
e.playResetGridPos = function() {
o.instance && o.instance.playResetGridPos();
};
e.prototype.playLightning = function() {
this.lightning && cc.audioEngine.playEffect(this.lightning, !1);
};
e.playLightning = function() {
o.instance && o.instance.playLightning();
};
e.prototype.playFreezeTime = function() {
if (this.freezeTime && !this.freezeTimeAudioID) {
this.freezeTimeAudioID = cc.audioEngine.playEffect(this.freezeTime, !1);
cc.audioEngine.pauseMusic();
}
};
e.playFreezeTime = function() {
o.instance && o.instance.playFreezeTime();
};
e.prototype.stopFreezeTime = function() {
if (this.freezeTimeAudioID) {
cc.audioEngine.stopEffect(this.freezeTimeAudioID);
this.freezeTimeAudioID = null;
cc.audioEngine.resumeMusic();
}
};
e.stopFreezeTime = function() {
o.instance && o.instance.stopFreezeTime();
};
e.prototype.playNoLink = function() {
this.noLink && cc.audioEngine.playEffect(this.noLink, !1);
};
e.playNoLink = function() {
o.instance && o.instance.playNoLink();
};
e.prototype.playBtnClick = function() {
this.btnClick && cc.audioEngine.playEffect(this.btnClick, !1);
};
e.playBtnClick = function() {
o.instance && o.instance.playBtnClick();
};
e.prototype.playBtnCancel = function() {
this.btnCancel && cc.audioEngine.playEffect(this.btnCancel, !1);
};
e.playBtnCancel = function() {
o.instance && o.instance.playBtnCancel();
};
e.prototype.playReceiveItem = function() {
this.receiveItem && cc.audioEngine.playEffect(this.receiveItem, !1);
};
e.playReceiveItem = function() {
o.instance && o.instance.playReceiveItem();
};
e.prototype.playOpenBox = function() {
this.openBox && cc.audioEngine.playEffect(this.openBox, !1);
};
e.playOpenBox = function() {
o.instance && o.instance.playOpenBox();
};
e.prototype.playUnfreezeGrid = function() {
this.unfreezeGrid && cc.audioEngine.playEffect(this.unfreezeGrid, !1);
};
e.playUnfreezeGrid = function() {
o.instance && o.instance.playUnfreezeGrid();
};
e.prototype.playBombExplosion = function() {
this.bombExplosion && cc.audioEngine.playEffect(this.bombExplosion, !1);
};
e.playBombExplosion = function() {
o.instance && o.instance.playBombExplosion();
};
e.prototype.playRebirthGrid = function() {
this.rebirthGrid && cc.audioEngine.playEffect(this.rebirthGrid, !1);
};
e.playRebirthGrid = function() {
o.instance && o.instance.playRebirthGrid();
};
e.prototype.playLightningSelect = function() {
this.lightningSelect && !this.lightningSelectAudioID && (this.lightningSelectAudioID = cc.audioEngine.playEffect(this.lightningSelect, !0));
};
e.playLightningSelect = function() {
o.instance && o.instance.playLightningSelect();
};
e.prototype.stopLightningSelect = function() {
if (this.lightningSelectAudioID) {
cc.audioEngine.stopEffect(this.lightningSelectAudioID);
this.lightningSelectAudioID = null;
}
};
e.stopLightningSelect = function() {
o.instance && o.instance.stopLightningSelect();
};
e.prototype.playGridSelect = function() {
this.gridSelect && cc.audioEngine.playEffect(this.gridSelect, !1);
};
e.playGridSelect = function() {
o.instance && o.instance.playGridSelect();
};
e.prototype.playTimeTip = function() {
this.timeTip && cc.audioEngine.playEffect(this.timeTip, !1);
};
e.playTimeTip = function() {
o.instance && o.instance.playTimeTip();
};
e.prototype.playTimeCountdown = function() {
this.timeCountdown && cc.audioEngine.playEffect(this.timeCountdown, !1);
};
e.playTimeCountdown = function() {
o.instance && o.instance.playTimeCountdown();
};
e.prototype.playGetComboAward = function() {
this.getComboAward && cc.audioEngine.playEffect(this.getComboAward, !1);
};
e.playGetComboAward = function() {
o.instance && o.instance.playGetComboAward();
};
e.prototype.playComboAward = function() {
this.comboAward && cc.audioEngine.playEffect(this.comboAward, !1);
};
e.playComboAward = function() {
o.instance && o.instance.playComboAward();
};
e.prototype.playClickFreeze = function() {
this.clickFreeze && cc.audioEngine.playEffect(this.clickFreeze, !1);
};
e.playClickFreeze = function() {
o.instance && o.instance.playClickFreeze();
};
var o;
e.instance = null;
n([ s({
type: cc.AudioClip,
displayName: "背景音乐",
tooltip: "游戏关卡使用的背景音乐"
}) ], e.prototype, "bgm", void 0);
n([ s({
type: cc.AudioClip,
displayName: "消除",
tooltip: "方块消除时播放的音效"
}) ], e.prototype, "removeGrid", void 0);
n([ s({
type: cc.AudioClip,
displayName: "重新排列",
tooltip: "使用道具“重排”或者关卡出现无解需要重新排列的时候播放的音效"
}) ], e.prototype, "resetGridPos", void 0);
n([ s({
type: cc.AudioClip,
displayName: "闪电",
tooltip: "使用道具“闪电”时播放的音效"
}) ], e.prototype, "lightning", void 0);
n([ s({
type: cc.AudioClip,
displayName: "时间冻结",
tooltip: "使用道具“时间冻结”时播放的音效"
}) ], e.prototype, "freezeTime", void 0);
n([ s({
type: cc.AudioClip,
displayName: "不可消除",
tooltip: "玩家先选中一个方块，然后选中第二个方块的时候，如果不能消除，则同时播放此音效"
}) ], e.prototype, "noLink", void 0);
n([ s({
type: cc.AudioClip,
displayName: "点击按钮",
tooltip: "点击游戏中的确定类按钮时播放的音效"
}) ], e.prototype, "btnClick", void 0);
n([ s({
type: cc.AudioClip,
displayName: "取消",
tooltip: "点击游戏中的取消或X类按钮时播放的音效"
}) ], e.prototype, "btnCancel", void 0);
n([ s({
type: cc.AudioClip,
displayName: "获得道具",
tooltip: "关卡结算时，当分数满足条件的时候会得到道具（道具图标上会挑勾），每得到一个道具，播放一次本音效"
}) ], e.prototype, "receiveItem", void 0);
n([ s({
type: cc.AudioClip,
displayName: "开箱子",
tooltip: "关卡结算时如果分数足够，可以获得钥匙道具来开启宝箱，宝箱开始时播放本音效"
}) ], e.prototype, "openBox", void 0);
n([ s({
type: cc.AudioClip,
displayName: "方块破冰",
tooltip: "如果消除了冰块旁边的方块，则冰块会解冻，解冻时播放本音效"
}) ], e.prototype, "unfreezeGrid", void 0);
n([ s({
type: cc.AudioClip,
displayName: "炸弹爆炸",
tooltip: "有些方块上会带有炸弹，如果倒计时结束，炸弹爆炸时播放本音效"
}) ], e.prototype, "bombExplosion", void 0);
n([ s({
type: cc.AudioClip,
displayName: "重生方块出现",
tooltip: "当重生方块出现时，播放本音效"
}) ], e.prototype, "rebirthGrid", void 0);
n([ s({
type: cc.AudioClip,
displayName: "闪电待机",
tooltip: "点击闪电按钮后，需要选择格子时等待音效"
}) ], e.prototype, "lightningSelect", void 0);
n([ s({
type: cc.AudioClip,
displayName: "选中格子音效",
tooltip: "格子被选中时要播放的音效"
}) ], e.prototype, "gridSelect", void 0);
n([ s({
type: cc.AudioClip,
displayName: "提醒时间快到了",
tooltip: "当关卡倒计时时间快到的时候播放"
}) ], e.prototype, "timeTip", void 0);
n([ s({
type: cc.AudioClip,
displayName: "倒计时音效",
tooltip: "当关卡倒计时剩余不多的时候播放的音效"
}) ], e.prototype, "timeCountdown", void 0);
n([ s({
type: cc.AudioClip,
displayName: "连击奖励",
tooltip: "当连击奖励飞到目标位置的时候播放"
}) ], e.prototype, "getComboAward", void 0);
n([ s({
type: cc.AudioClip,
displayName: "获得连击奖励",
tooltip: "当连击奖励达到一定数量可获得奖励时播放的声音"
}) ], e.prototype, "comboAward", void 0);
n([ s({
type: cc.AudioClip,
displayName: "点击冰冻",
tooltip: "点击冰冻格子时播放的音效"
}) ], e.prototype, "clickFreeze", void 0);
return e = o = n([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
gameData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "10d25lzIfVEJ6AM++3LsCza", "gameData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.setGridIcon = o.ThemeIconNames = o.loadThemeSelect = o.saveThemeSelect = o.loadGameData = o.saveGameData = o.resetGameData = o.curLevelProp = o.gameData = void 0;
var i = function() {
return function() {
this.curLevel = 1;
this.curTipCount = 0;
this.curLightningCount = 0;
this.curResetCount = 0;
this.curFreezeTimeCount = 0;
this.archive = {};
this.isFirst = !0;
};
}();
o.gameData = new i();
var n = function() {
function t() {
this._addProp = {};
this._usedProp = {};
}
t.prototype.reset = function() {
this._addProp = {};
this._usedProp = {};
};
t.prototype.addProp = function(t, e) {
void 0 === e && (e = 1);
this._addProp[t] ? this._addProp[t] += e : this._addProp[t] = e;
};
t.prototype.useProp = function(t) {
this._usedProp[t] ? ++this._usedProp[t] : this._usedProp[t] = 1;
};
t.prototype.getAddProp = function() {
var t = [];
for (var e in this._addProp) {
var o = this._addProp[e];
t.push({
props_id: Number(e),
num: o
});
}
return t;
};
t.prototype.getUseProp = function() {
var t = [];
for (var e in this._usedProp) {
var o = this._usedProp[e];
t.push({
props_id: Number(e),
num: o
});
}
return t;
};
return t;
}();
o.curLevelProp = new n();
o.resetGameData = function() {
o.gameData = new i();
a();
s();
p(0);
};
var r = "GAME_DATA";
function a() {
cc.sys.localStorage.setItem(r, JSON.stringify(o.gameData));
}
o.saveGameData = a;
function s() {
var t = cc.sys.localStorage.getItem(r);
t && (o.gameData = JSON.parse(t));
o.gameData.archive[0] = [];
for (var e = 0; e < 20; ++e) o.gameData.archive[0].push(e);
f();
}
o.loadGameData = s;
var c = null, l = "Theme_Select";
function p(t) {
c = t;
cc.sys.localStorage.setItem(l, t.toString());
}
o.saveThemeSelect = p;
function h() {
if (null == c) {
var t = cc.sys.localStorage.getItem(l);
c = t ? Number(t) : 0;
}
return c;
}
o.loadThemeSelect = h;
o.ThemeIconNames = [ "icona_", "iconb_", "iconc_", "icond_", "icone_", "iconf_" ];
var u = "texture/游戏界面/icons/";
o.setGridIcon = function(t, e, i) {
void 0 === i && (i = null);
if (e) {
null == i && (i = h());
var n = o.ThemeIconNames[i], r = t + 1, a = u + n + (r < 10 ? "0" + r : r);
e.spriteFrame = null;
2 == d ? e.spriteFrame = cc.loader.getRes(a, cc.SpriteFrame) : cc.loader.loadRes(a, cc.SpriteFrame, function(t, o) {
t ? cc.error(t.message) : e.spriteFrame = o;
});
}
};
var d = 0;
function f() {
if (0 == d) {
d = 1;
cc.loader.loadResDir(u, function(t) {
t ? cc.log(t.message) : d = 2;
});
}
}
cc._RF.pop();
}, {} ],
gameLib: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8a28afQeXtFgqTCC2vLy5Gt", "gameLib");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {
this.deviceGuid = "deviceGuid";
this._timeTemp = 0;
this.LS_GUID = "LS_GUID";
this.guid = null;
this.getDayCountForMonth = function(t, e) {
var o = !1;
t % 4 == 0 && (o = !0);
return 2 == e ? o ? 29 : 28 : e <= 7 ? e % 2 == 0 ? 30 : 31 : e % 2 == 0 ? 31 : 30;
};
this.getFixedNumString = function(t) {
t = Number(t) / 1e4;
return this.getToFixedNumString(t);
};
this.getToFixedNumString = function(t) {
var e = String(t);
if (-1 == e.indexOf(".")) return e + ".00";
var o = e.split(".");
return o[1].length >= 2 ? o[0] + "." + o[1].substring(0, 2) : o[0] + "." + o[1] + 0;
};
this.formatDate = function(t, e) {
if (void 0 == t && void 0 == e) {
t = new Date();
e = "yyyy-MM-dd HH:mm:ss";
} else if ("string" == typeof t) {
e = t;
t = new Date();
} else void 0 === e && (e = "yyyy-MM-dd HH:mm:ss");
var o = {
y: t.getFullYear() + "",
M: t.getMonth() + 1 + "",
d: t.getDate() + "",
H: t.getHours(),
m: t.getMinutes() + "",
s: t.getSeconds() + "",
q: Math.floor((t.getMonth() + 3) / 3) + "",
f: t.getMilliseconds() + ""
};
o.H > 12 ? o.h = o.H - 12 + "" : o.h = o.H + "";
o.H += "";
for (var i = "yMdHhmsqf", n = "", r = "", a = 0, s = 0; a < i.length; a++) if (!((s = e.indexOf(i[a])) < 0)) {
n = "";
for (;s < e.length && e[s] == i[a]; s++) n += i[a];
if (n.length > 0) {
if (n.length == o[i[a]].length) r = o[i[a]]; else if (n.length > o[i[a]].length) r = "f" == i[a] ? o[i[a]] + this.charString("0", n.length - o[i[a]].length) : this.charString("0", n.length - o[i[a]].length) + o[i[a]]; else switch (i[a]) {
case "y":
r = o[i[a]].substr(o[i[a]].length - n.length);
break;

case "f":
r = o[i[a]].substr(0, n.length);
break;

default:
r = o[i[a]];
}
e = e.replace(n, r);
}
}
return e;
};
this.charString = function(t, e) {
for (var o = ""; e--; ) o += t;
return o;
};
this.getUrlImage = function(t, e) {
void 0 === e && (e = null);
if (!t || "" == t) return null;
cc.loader.load({
url: t,
type: "png"
}, function(t, o) {
if (e) if (t) {
cc.error(t);
e(null);
} else e(o);
});
};
}
t.prototype.getOSString = function() {
if (!cc.sys.isBrowser) return "其他2";
switch (cc.sys.os) {
case cc.sys.OS_LINUX:
return "LINUX";

case cc.sys.OS_OSX:
return "MAC";

case cc.sys.OS_UNKNOWN:
return "UNKNOWN";

case cc.sys.OS_WINDOWS:
case cc.sys.OS_ANDROID:
return "ANDROID";

case cc.sys.OS_IOS:
return "IOS";

default:
return "其他1";
}
};
t.prototype.creatrBitInt = function(t, e, o, i) {
var n = t;
return [ n += e << i, i += o ];
};
t.prototype.rotatePos = function(t, e, o, i, n) {
return {
x: (t - o) * Math.cos(n) - (e - i) * Math.sin(n) + o,
y: (t - o) * Math.sin(n) + (e - i) * Math.cos(n) + i
};
};
t.prototype.GetRandomNum = function(t, e) {
var o = e - t, i = Math.random();
return t + Math.round(i * o);
};
t.prototype.removeArrayElement = function(t, e) {
if (t && t.length && e) for (var o = 0; o < t.length; ++o) if (t[o] == e) {
t.splice(o, 1);
return !0;
}
return !1;
};
t.prototype.getDisance = function(t, e, o, i) {
var n = function(t) {
return t * Math.PI / 180;
}, r = n(t), a = n(o), s = r - a, c = n(e) - n(i), l = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(r) * Math.cos(a) * Math.pow(Math.sin(c / 2), 2)));
return Math.floor(6378137 * l * 100) / 100;
};
t.prototype.rgb2hex = function(t, e, o) {
return 0 + (t << 16) + (e << 8) + o;
};
t.prototype.getTime = function(t) {
var e = Math.floor(t / 36e5), o = t % 36e5, i = Math.floor(o / 6e4), n = o % 6e4, r = Math.round(n / 1e3);
return e + ":" + (i < 10 ? "0" + i : i) + ":" + (r < 10 ? "0" + r : r);
};
t.prototype.getMidDate = function(t) {
var e = new Date().getTime() - t, o = "秒";
if (e / 31104e6 >= 1) {
e = Math.floor(e / 31104e6);
o = "年";
} else if (e / 2592e6 >= 1) {
e = Math.floor(e / 2592e6);
o = "月";
} else if (e / 864e5 >= 1) {
e = Math.floor(e / 864e5);
o = "日";
} else if (e / 36e5 >= 1) {
e = Math.floor(e / 36e5);
o = "小时";
} else if (e / 6e4 >= 1) {
e = Math.floor(e / 6e4);
o = "分钟";
} else if (e / 1e3 >= 1) {
e = Math.floor(e / 1e3);
o = "秒";
}
return e > 0 ? Math.abs(e) + o + "前" : 0 + o + "前";
};
t.prototype.getDHMBySecond = function(t) {
void 0 === t && (t = null);
var e = "";
e += this.getDayBySecond(t, !0);
e += this.getHourBySecond(null, !0);
return e += this.getMinutesBySecond(null, !0);
};
t.prototype.getYearBySecond = function(t) {
void 0 === t && (t = null);
var e = 0;
null != t && (this._timeTemp = t);
var o = "";
if (this._timeTemp / 31104e3 >= 1) {
o += (e = Math.floor(this._timeTemp / 31104e3)) + "年";
this._timeTemp -= 31104e3 * e;
}
return o;
};
t.prototype.getMonthBySecond = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = !1);
var o = 0;
null != t && (this._timeTemp = t);
var i = "";
e || (i += this.getYearBySecond());
if (this._timeTemp / 2592e3 >= 1) {
i += (o = Math.floor(this._timeTemp / 2592e3)) + "月";
this._timeTemp -= 2592e3 * o;
}
return i;
};
t.prototype.getDayBySecond = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = !1);
var o = 0;
null != t && (this._timeTemp = t);
var i = "";
e || (i += this.getMonthBySecond());
if (this._timeTemp / 86400 >= 1) {
i += (o = Math.floor(this._timeTemp / 86400)) + "天";
this._timeTemp -= 86400 * o;
}
return i;
};
t.prototype.getHourBySecond = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = !1);
var o = 0;
null != t && (this._timeTemp = t);
var i = "";
e || (i += this.getDayBySecond());
if (this._timeTemp / 3600 >= 1) {
i += (o = Math.floor(this._timeTemp / 3600)) + "小時";
this._timeTemp -= 3600 * o;
}
return i;
};
t.prototype.getMinutesBySecond = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = !1);
var o = 0;
null != t && (this._timeTemp = t);
var i = "";
e || (i += this.getHourBySecond());
if (this._timeTemp / 60 >= 1) {
i += (o = Math.floor(this._timeTemp / 60)) + "分";
this._timeTemp -= 60 * o;
}
return i;
};
t.prototype.getDateBySecond = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = !1);
null != t && (this._timeTemp = t);
var o = "";
e || (o += this.getMinutesBySecond());
this._timeTemp >= 1 && (o += this._timeTemp + "秒");
return o;
};
t.prototype.getWordByNum = function(t) {
var e = "", o = [ "零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ];
if (0 == Math.floor(t / 100)) {
var i = Math.floor(t / 10), n = t % 10;
e = 0 == i ? o[n] : 1 == i ? "十" + o[n] : o[i] + "十" + o[n];
}
return e;
};
t.prototype.stringLimit = function(t, e) {
void 0 === e && (e = 6);
if (t && t.length) {
for (var o = 0, i = 0, n = 0; n < t.length; n++) {
var r = t.charCodeAt(n);
if (r >= 0 && r <= 128) {
o += 1;
i < e && (i += 1);
} else {
o += 2;
i < e && (i += 2);
}
}
return o > 2 * e + 1 ? t.substr(0, i) + "..." : t;
}
};
t.prototype.getGUID = function() {
if (cc.sys.isNative) {
var t = null;
switch (cc.sys.os) {
case cc.sys.OS_IOS:
t = jsb.reflection.callStaticMethod("AppController", "getIMEI2:title:", "", "");
break;

case cc.sys.OS_ANDROID:
t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIMEI2", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "title", "hahahahha");
}
return t;
}
return this.getGUID_H5();
};
t.prototype.getGUID_H5 = function() {
if (!this.guid) {
this.guid = cc.sys.localStorage.getItem(this.LS_GUID);
if (!this.guid) {
this.guid = function() {
var t = new Date().getTime();
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
var o = (t + 16 * Math.random()) % 16 | 0;
t = Math.floor(t / 16);
return ("x" == e ? o : 3 & o | 8).toString(16);
});
}();
this.guid && cc.sys.localStorage.setItem(this.LS_GUID, this.guid);
}
}
return this.guid;
};
t.prototype.toUpperCaseRemoveSpace = function(t) {
if (!t) return null;
var e = t.replace(" ", "");
return e = e.toUpperCase();
};
t.prototype.isSAInBA = function(t, e) {
if (!(t && e && t.length && e.length)) return !1;
for (var o = 0, i = t; o < i.length; o++) {
for (var n = i[o], r = !1, a = 0, s = e; a < s.length; a++) {
if (n == s[a]) {
r = !0;
break;
}
}
if (0 == r) return !1;
}
return !0;
};
t.prototype.numberToChinese = function(t) {
var e = "个十百千万@#%亿^&~", o = "零一二三四五六七八九", i = (t + "").split(""), n = [];
if (i.length > 12) throw new Error("too big");
for (var r = 0, a = i.length - 1; r <= a; r++) {
(1 == a || 5 == a || 9 == a) && 0 == r ? "1" != i[r] && n.push(o.charAt(Number(i[r]))) : n.push(o.charAt(Number(i[r])));
r != a && n.push(e.charAt(a - r));
}
return n.join("").replace(/零([十百千万亿@#%^&~])/g, function(t, o, n) {
if (-1 != (n = e.indexOf(o))) {
if ("亿" == o) return o;
if ("万" == o) return o;
if ("0" == i[a - n]) return "零";
}
return "";
}).replace(/零+/g, "零").replace(/零([万亿])/g, function(t, e) {
return e;
}).replace(/亿[万千百]/g, "亿").replace(/[零]$/, "").replace(/[@#%^&~]/g, function(t) {
return {
"@": "十",
"#": "百",
"%": "千",
"^": "十",
"&": "百",
"~": "千"
}[t];
}).replace(/([亿万])([一-九])/g, function(t, o, n, r) {
return -1 != (r = e.indexOf(o)) && "0" == i[a - r] ? o + "零" + n : t;
});
};
t.prototype.findComboByArray = function(t, e) {
if (!t || !e || t >= e.length) return [];
for (var o = [], i = [], n = 0; n < t; ++n) i.push(n);
var r = function(t) {
if (t) {
for (var o = [], n = 0, a = i; n < a.length; n++) {
var s = a[n];
o.push(e[s]);
}
t.push(o);
var c = function(t, e, o) {
void 0 === o && (o = null);
var i = t.length - 1;
null != o || (o = i);
if (t[i] >= e.length) {
if (o <= 0) return !1;
++t[o - 1];
for (var n = o; n < t.length; ++n) t[n] = t[n - 1] + 1;
return c(t, e, o - 1);
}
return !0;
};
++i[i.length - 1];
c(i, e) && r(t);
}
};
r(o);
return o;
};
t.prototype.convertToSpacePos = function(t, e) {
var o = t.parent.convertToWorldSpaceAR(new cc.Vec2(t.position.x, t.position.y));
return e.parent.convertToNodeSpaceAR(o);
};
t.prototype.getChineseLabel2 = function(t) {
try {
var e = "";
if (t < 0) {
e = "-";
t = Math.abs(t);
}
return e + this.number_format(t, 2, ".", ",", "floor").toString();
} catch (t) {
cc.log("转换数字错误：" + t);
}
};
t.prototype.number_format = function(t, e, o, i, n) {
t = (t + "").replace(/[^0-9+-Ee.]/g, "");
n = n || "ceil";
var r = isFinite(+t) ? +t : 0, a = isFinite(+e) ? Math.abs(e) : 0, s = "undefined" == typeof i ? "," : i, c = "undefined" == typeof o ? "." : o, l = [];
l = (a ? function(t, e) {
var o = Math.pow(10, e);
return "" + parseFloat(Math[n](parseFloat((t * o).toFixed(2 * e))).toFixed(2 * e)) / o;
}(r, a) : "" + Math.round(r)).split(".");
for (var p = /(-?\d+)(\d{3})/; p.test(l[0]); ) l[0] = l[0].replace(p, "$1" + s + "$2");
var h = 0;
if ((l[1] || "").length < a && 0 != (l[1] || "").length) {
l[1] = l[1] || "";
h++;
l[1] += new Array(a - l[1].length + 1).join("0");
} else (l[1] || "").length >= a && h++;
return h ? l.join(c) : l;
};
t.prototype.isHasElementOne = function(t, e) {
for (var o = 0, i = t.length; o < i; o++) if (t[o] == e) return o;
};
t.prototype.isJSON = function(t) {
try {
return JSON.stringify(t).indexOf("{") > -1;
} catch (t) {
cc.log(t);
return !1;
}
};
t.prototype.byteArrayToBase64 = function(t) {
for (var e, o, i, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, a = []; r < t.length; ) {
o = t[r];
switch (i = r % 3) {
case 0:
a.push(n.charAt(o >> 2));
break;

case 1:
a.push(n.charAt((3 & e) << 4 | o >> 4));
break;

case 2:
a.push(n.charAt((15 & e) << 2 | o >> 6));
a.push(n.charAt(63 & o));
}
e = o;
r++;
}
if (0 == i) {
a.push(n.charAt((3 & e) << 4));
a.push("==");
} else if (1 == i) {
a.push(n.charAt((15 & e) << 2));
a.push("=");
}
return a.join("");
};
t.prototype.base64ToByteArray = function(t) {
t = t.replace(/\s|=/g, "");
for (var e, o, i = 0, n = []; i < t.length; ) {
e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(i));
switch (i % 4) {
case 0:
break;

case 1:
n.push(o << 2 | e >> 4);
break;

case 2:
n.push((15 & o) << 4 | e >> 2);
break;

case 3:
n.push((3 & o) << 6 | e);
}
o = e;
i++;
}
return n;
};
t.prototype.getUrlParams = function(t) {
var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), o = window.location.search.substr(1).match(e);
return null != o ? decodeURI(o[2]) : null;
};
t.prototype.CryptoJS_stringify = function(t) {
for (var e = t.words, o = t.sigBytes, i = new Int8Array(o), n = 0; n < o; n++) {
var r = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
i[n] = r;
}
return i;
};
t.prototype.json2Int8Array = function(t) {
var e = JSON.stringify(t), o = this.stringToByte(e);
return new Int8Array(o);
};
t.prototype.Int8Array2Json = function(t) {
var e = this.byteToString(t);
return JSON.parse(e);
};
t.prototype.stringToByte = function(t) {
var e, o, i = new Array();
e = t.length;
for (var n = 0; n < e; n++) if ((o = t.charCodeAt(n)) >= 65536 && o <= 1114111) {
i.push(o >> 18 & 7 | 240);
i.push(o >> 12 & 63 | 128);
i.push(o >> 6 & 63 | 128);
i.push(63 & o | 128);
} else if (o >= 2048 && o <= 65535) {
i.push(o >> 12 & 15 | 224);
i.push(o >> 6 & 63 | 128);
i.push(63 & o | 128);
} else if (o >= 128 && o <= 2047) {
i.push(o >> 6 & 31 | 192);
i.push(63 & o | 128);
} else i.push(255 & o);
return i;
};
t.prototype.byteToString = function(t) {
if ("string" == typeof t) return t;
for (var e = "", o = t, i = 0; i < o.length; i++) {
var n = o[i].toString(2), r = n.match(/^1+?(?=0)/);
if (r && 8 == n.length) {
for (var a = r[0].length, s = o[i].toString(2).slice(7 - a), c = 1; c < a; c++) s += o[c + i].toString(2).slice(2);
e += String.fromCharCode(parseInt(s, 2));
i += a - 1;
} else e += String.fromCharCode(o[i]);
}
return e;
};
t.prototype.getChineseLabel = function(t) {
try {
var e = "";
if (t < 0) {
e = "-";
t = Math.abs(t);
}
return t > 1e12 ? e + Math.floor(t / 1e6) / 100 + "兆" : t > 1e8 ? e + Math.floor(t / 1e6) / 100 + "亿" : t > 1e4 ? e + Math.floor(t / 100) / 100 + "万" : e + t.toString();
} catch (t) {
cc.log("转换数字错误：" + t);
}
};
t.prototype.getWeightedRandomAtom = function(t, e) {
if (t.length <= 0) return 0;
for (var o = 0, i = t; o < i.length; o++) {
a = i[o];
}
for (var n = 0, r = t; n < r.length; n++) {
var a;
if ((e -= a = r[n]) < 0) return a;
}
return 0;
};
t.prototype.writeObj = function(t) {
var e = {};
try {
var o = function(t, i) {
void 0 === i && (i = 0);
for (var n = "", r = "", a = 0; a < i; a++) r += " ";
for (var a in t) if (!e[a]) {
e[a] = !0;
var s = t[a];
if ("object" == typeof s) if (Array.isArray(s) && "object" != typeof s[0]) {
n += r + a + " = [ ";
for (var c = 0, l = s; c < l.length; c++) {
n += l[c] + ", ";
}
n += " ]\n";
} else n += r + a + " = [ \n" + o(s, i + 4) + r + "]\n"; else n += r + '"' + a + '" = ' + s + "\n";
}
return n;
}, i = o(t);
cc.log("打印出对象，内容为 ：\n" + i);
} catch (t) {
cc.log("打印出错：" + t);
}
};
t.prototype.ip2Int = function(t) {
var e = 0, o = t.split(".");
e = 256 * Number(o[0]) * 256 * 256 + 256 * Number(o[1]) * 256 + 256 * Number(o[2]) + Number(o[3]);
return e >>>= 0;
};
t.prototype.initClassMemberArray = function(t, e, o) {
for (var i = 0; ;++i) {
var n = o[e + i];
if (!n) break;
t.push(n);
}
};
t.prototype.saveForBrowser = function(t, e) {
var o = new Blob([ t ], {
type: "application/json"
});
this.downloadLink || (this.downloadLink = document.createElement("a"));
this.downloadLink.download = e;
this.downloadLink.innerHTML = "Download File";
if (null != window.webkitURL) this.downloadLink.href = window.webkitURL.createObjectURL(o); else {
this.downloadLink.href = window.URL.createObjectURL(o);
this.downloadLink.style.display = "none";
document.body.appendChild(this.downloadLink);
}
this.downloadLink.click();
};
t.prototype.chooseLocalPhoto = function(t) {
var e = this;
if (t) {
if (!this.elementSelectPhoto) {
this.elementSelectPhoto = document.createElement("input");
this.elementSelectPhoto.accept = "image/jpeg,image/jpg,image/png";
this.elementSelectPhoto.type = "file";
}
this.elementSelectPhoto.onchange = function() {
if (e.elementSelectPhoto.files && e.elementSelectPhoto.files[0]) {
var o = new FileReader();
o.onload = function(e) {
var o = e.target.result;
t(o);
};
o.readAsDataURL(e.elementSelectPhoto.files[0]);
}
};
this.elementSelectPhoto.click();
}
};
t.prototype.getSpriteFrameByBase64 = function(t, e) {
void 0 === e && (e = null);
if (!t || !t.length) return null;
var o = new Image();
o.src = t;
var i = new cc.Texture2D();
i.initWithElement(o);
i.handleLoadedTexture();
var n = new cc.SpriteFrame(i);
e && (n.textureLoaded() ? e(n) : n.once("load", function() {
e(n);
}));
return n;
};
return t;
}();
o.gameLib = new i();
cc._RF.pop();
}, {} ],
gameMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "53148qX5vtI+am5lbpo5vUJ", "gameMain");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./gridManager"), a = t("./comboText"), s = t("./level_parameter"), c = t("./gameAudioClip"), l = t("./comboAward"), p = t("./setting"), h = t("./cover"), u = t("./subject"), d = t("../../commonLib/component/countDown"), f = t("./gameData"), m = t("../../commonLib/component/addUI"), y = t("../../commonLib/lib/LoginLib"), g = t("./Construct"), v = t("./settlementParameter"), b = t("./advertising"), _ = cc._decorator, w = _.ccclass, P = _.property, C = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.level_parameter = null;
e.level = null;
e.score = null;
e.redPackets = null;
e.time = null;
e.timeImg = null;
e.comboText = null;
e.comboAwardPrefab = null;
e.comboAwardPosNode = null;
e.comboTime = 2;
e.comboAwardGap = 5;
e.tipButton = null;
e.bombButton = null;
e.realignmentButton = null;
e.freezeTimeButton = null;
e.tipLabel = null;
e.bombLabel = null;
e.realignmentLabel = null;
e.freezeTimeLabel = null;
e.gridManager = null;
e.gameOverNode = null;
e.skipLevelEdit = null;
e.settlement = null;
e.cover = null;
e.curCoverLevel = null;
e.subject = null;
e.freezeSpine = null;
e.timePorcessSP = null;
e.timePorcessSF = null;
e.timePorcessSF2 = null;
e.isGameOver = !1;
e.isCanCombo = !1;
e.curComboNum = 0;
e.curComboAward = null;
e.comboAwardNodePool = new cc.NodePool();
e.curComboAwardTween = null;
e.curScore = 0;
e.isPauseGame = !1;
e.isFreezeTime = !1;
e.timeImgFillStart = 0;
e.timeImgFillEnd = 1;
e.timeImgFillRange = 1;
return e;
}
o = e;
e.prototype.onLoad = function() {
var t = this;
o.instance = this;
y.loginLib.LoginGame(function() {
g.construct.userInfo.phone = y.loginLib.loginData.phone;
g.construct.userInfo.property_num = y.loginLib.loginData.userInfo.property_num;
cc.log("userinfo property_num is " + g.construct.userInfo.property_num);
try {
var e = y.loginLib.loginData.config, o = JSON.parse(e.config_set);
t.level_parameter.setData(o);
v.itemParameter.remoteItemParameter = JSON.parse(e.settlement);
v.itemParameter.remoteThemeParameter = JSON.parse(e.theme);
} catch (t) {
cc.error(t);
}
});
p.default.initVolume();
this.freezeSpine.node.active = !1;
this.freezeSpine.setCompleteListener(function(e) {
"BD_3" == e.animation.name && (t.freezeSpine.node.active = !1);
});
this.gridManager.initGrid();
};
e.prototype.start = function() {
f.loadGameData();
this.timeImgFillStart = this.timeImg.fillStart;
this.timeImgFillEnd = this.timeImg.fillRange;
this.timeImgFillRange = this.timeImgFillEnd - this.timeImgFillStart;
this.comboText.durationTime = this.comboTime;
this.gridManager.setLinkRemovedCallback(this.onLinkRemoved.bind(this));
this.gridManager.setGameOverCallback(this.gameOver.bind(this));
this.gridManager.setNextLevelCallback(this.nextLevel.bind(this));
this.gridManager.setBombSelectCallback(this.onBombSelect.bind(this));
this.gridManager.setComboCallback(this.onCombo.bind(this));
this.time.setPercentCallback(this.onTimePercentCallback.bind(this));
this.gridManager.setBombSelectMode(!1);
this.cover.node.active = !0;
this.subject.node.active = !1;
this.curCoverLevel.string = f.gameData.curLevel.toString();
};
e.prototype.onDestroy = function() {
this.comboAwardNodePool.clear();
};
e.prototype.点击开始游戏 = function() {
var t = this, e = this.cover.playHideAni();
this.scheduleOnce(function() {
t.cover.node.active = !1;
t.subject.node.active = !0;
var e = t.subject.playShowAni();
t.updateItemsCount();
t.scheduleOnce(function() {
t.gameStart();
}, e.duration + .1);
}, e.duration + .1);
};
e.prototype.gameStart = function() {
this.isGameOver = !1;
this.level.string = f.gameData.curLevel.toString();
this.gridManager.setBombSelectMode(!1);
this.resetScore();
this.unfreezeTime(!1);
var t = this.level_parameter.getLevelParameter(f.gameData.curLevel);
this.setTime(t.time);
this.gridManager.gameStart(t);
this.updateItemsCount();
};
e.prototype.gameOver = function(t) {
var e = this;
if (!this.isGameOver) {
this.showInterstitialAd();
f.gameData.isFirst = !1;
this.isGameOver = !0;
this.gameOverNode.addUI(null, function(o) {
o.setContinueCallback(e.continueGame.bind(e));
o.setRestartCallback(e.gameStart.bind(e));
o.setGoHomeCallback(e.goHome.bind(e));
o.show(t);
}, "gameOver");
this.unfreezeTime(!0);
this.time.pause();
}
};
e.prototype.continueGame = function() {
if (this.isGameOver) {
this.isGameOver = !1;
this.time.resetTime();
this.time.resume();
this.gridManager.clearAllBomb();
}
};
e.prototype.倒计时回调 = function(t, e) {
10 == e ? c.default.playTimeTip() : e < 10 && c.default.playTimeCountdown();
e <= 0 && this.gameOver(!0);
};
e.prototype.setTime = function(t) {
this.time.setTime(t);
this.time.resume();
};
e.prototype.resetCombo = function() {
this.isCanCombo = !1;
this.curComboNum = 0;
if (this.curComboAward) {
this.comboAwardNodePool.put(this.curComboAward.node);
this.curComboAward = null;
}
};
e.prototype.onCombo = function() {
this.unschedule(this.resetCombo);
if (this.isCanCombo) {
0 == this.curComboNum && this.createComboAward();
++this.curComboNum;
var t = this.curComboNum % this.comboAwardGap;
this.onComboAwardProgress(t / this.comboAwardGap);
if (0 == t) {
this.onComboAward();
c.default.playComboAward();
}
this.comboText.setCombo(this.curComboNum);
} else this.isCanCombo = !0;
this.scheduleOnce(this.resetCombo, this.comboTime);
return this.curComboNum;
};
e.prototype.onComboAwardProgress = function(t) {
var e = this;
void 0 === t && (t = 0);
if (this.curComboAward) {
if (this.curComboAwardTween) {
this.curComboAwardTween.stop();
this.curComboAwardTween = null;
}
0 == t && (t = 1);
this.curComboAwardTween = cc.tween(this.curComboAward.node).to(.25, {
scale: t
}, {
easing: "backOut"
}).call(function() {
e.curComboAwardTween = null;
}).start();
}
};
e.prototype.createComboAward = function() {
this.curComboAward && this.comboAwardNodePool.put(this.curComboAward.node);
var t = this.comboAwardNodePool.get();
t || (t = cc.instantiate(this.comboAwardPrefab));
t.scale = 0;
t.x = this.comboAwardPosNode.x;
t.y = this.comboAwardPosNode.y;
this.node.addChild(t);
this.curComboAward = t.getComponent(l.default);
this.curComboAward.randomComboAwardID();
return this.curComboAward;
};
e.prototype.onComboAward = function() {
var t = this, e = null;
switch (this.curComboAward.awardID) {
case 0:
e = this.tipButton;
break;

case 1:
e = this.bombButton;
break;

case 2:
e = this.realignmentButton;
break;

case 3:
e = this.freezeTimeButton;
}
if (e) {
var o = function(t, e) {
for (var i = 0, n = e.children; i < n.length; i++) {
var r = n[i];
return r.name == t ? r : o(t, r);
}
}, i = o("icon", e.node);
this.curComboAward.moveTo(i, function(e) {
var o = null;
switch (e.awardID) {
case 0:
++f.gameData.curTipCount;
o = t.tipLabel.node.parent;
break;

case 1:
++f.gameData.curLightningCount;
o = t.bombLabel.node.parent;
break;

case 2:
++f.gameData.curResetCount;
o = t.realignmentLabel.node.parent;
break;

case 3:
++f.gameData.curFreezeTimeCount;
o = t.freezeTimeLabel.node.parent;
}
f.curLevelProp.addProp(e.awardID);
o && cc.tween(o).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).start();
t.updateItemsCount();
c.default.playGetComboAward();
e.awardID = -1;
t.scheduleOnce(function() {
t.comboAwardNodePool.put(e.node);
}, 1);
});
this.curComboAward = null;
this.createComboAward();
}
};
e.prototype.onLinkRemoved = function(t) {
this.curScore += t;
this.score.string = this.curScore.toString();
};
e.prototype.resetScore = function() {
this.resetCombo();
this.curScore = 0;
this.score.string = "0";
};
e.prototype.showInterstitialAd = function() {
if (Math.random() <= y.loginLib.ad_probability) {
b.default.showInterstitialAd();
return !0;
}
return !1;
};
e.prototype.nextLevel = function(t) {
var e = this;
void 0 === t && (t = null);
this.showInterstitialAd();
var o = function() {
e.settlement.addUI(null, function(t) {
t.setNextlevelCallback(e.onClickNextLevel.bind(e));
t.setGoHomeCallback(e.goHome.bind(e));
t.setScore(e.curScore, e.time.getTime(), e.gridManager.getTotalGridCount());
t.show();
}, "settlement");
};
this.unfreezeTime(!0);
this.freezeTime(!1, 0);
t ? this.scheduleOnce(o, t) : o();
};
e.prototype.onClickNextLevel = function() {
this.gameStart();
};
e.prototype.addItem = function(t, e) {
var o = this;
m.default.addUI("addItem", function(i) {
o.pauseGame();
i.setDestroyCallback(function() {
o.resumeGame();
});
i.setData(t, e);
i.setCallback(function() {
switch (t) {
case 0:
f.gameData.curTipCount += e;
break;

case 1:
f.gameData.curLightningCount += e;
break;

case 2:
f.gameData.curResetCount += e;
break;

case 3:
f.gameData.curFreezeTimeCount += e;
}
f.curLevelProp.addProp(t, e);
o.updateItemsCount();
});
}, "addItem");
};
e.prototype.点击提示 = function() {
if (f.gameData.curTipCount > 0) {
--f.gameData.curTipCount;
f.curLevelProp.useProp(0);
this.updateItemsCount();
this.gridManager.autoLinkGrid();
} else this.addItem(0, 3);
};
e.prototype.onBombSelect = function(t) {
if (t) {
--f.gameData.curLightningCount;
f.curLevelProp.useProp(1);
this.updateItemsCount();
}
};
e.prototype.点击炸弹 = function() {
f.gameData.curLightningCount > 0 ? this.gridManager.setBombSelectMode(!0) : this.addItem(1, 1);
};
e.prototype.点击重排 = function() {
if (f.gameData.curResetCount > 0) {
--f.gameData.curResetCount;
f.curLevelProp.useProp(2);
this.updateItemsCount();
this.gridManager.randomGridsPos();
} else this.addItem(2, 1);
};
e.prototype.点击冻结时间 = function() {
if (f.gameData.curFreezeTimeCount > 0) {
--f.gameData.curFreezeTimeCount;
f.curLevelProp.useProp(3);
this.updateItemsCount();
this.freezeTime();
} else this.addItem(3, 1);
};
e.prototype.pauseGame = function() {
if (!this.isPauseGame) {
this.isPauseGame = !0;
this.time.pause();
this.gridManager.pauseGenerateGrid();
this.gridManager.pauseAllBomb();
cc.director.getScheduler().pauseTarget(this);
}
};
e.prototype.resumeGame = function() {
if (this.isPauseGame) {
this.isPauseGame = !1;
if (!this.isFreezeTime) {
this.time.resume();
this.gridManager.resumeGenerateGrid();
this.gridManager.resumeAllBomb();
}
cc.director.getScheduler().resumeTarget(this);
}
};
e.prototype.freezeTime = function(t, e) {
void 0 === t && (t = !0);
void 0 === e && (e = 7);
if (!this.isFreezeTime) {
this.isFreezeTime = !0;
this.time.pause();
this.gridManager.pauseGenerateGrid();
this.gridManager.pauseAllBomb();
if (t) {
c.default.playFreezeTime();
this.freezeSpine.node.active = !0;
this.freezeSpine.setAnimation(0, "BD_1", !1);
this.freezeSpine.addAnimation(0, "BD_2", !0);
this.timePorcessSP.spriteFrame = this.timePorcessSF2;
}
e && this.scheduleOnce(this.unfreezeTime, e);
this.freezeTimeButton.interactable = !1;
}
};
e.prototype.unfreezeTime = function(t) {
void 0 === t && (t = !0);
if (this.isFreezeTime) {
this.isFreezeTime = !1;
this.timePorcessSP.spriteFrame = this.timePorcessSF;
t = "boolean" != typeof t || t;
this.unschedule(this.unfreezeTime);
this.time.resume();
this.gridManager.resumeGenerateGrid();
this.gridManager.resumeAllBomb();
if (t) {
c.default.stopFreezeTime();
this.freezeSpine.setAnimation(0, "BD_3", !1);
} else this.freezeSpine.node.active = !1;
f.gameData.curFreezeTimeCount > 0 && (this.freezeTimeButton.interactable = !0);
}
};
e.prototype.updateItemsCount = function() {
this.tipLabel.string = f.gameData.curTipCount.toString();
this.bombLabel.string = f.gameData.curLightningCount.toString();
this.realignmentLabel.string = f.gameData.curResetCount.toString();
this.freezeTimeLabel.string = f.gameData.curFreezeTimeCount.toString();
};
e.prototype.onTimePercentCallback = function(t) {
this.timeImg.fillRange = (this.timeImgFillStart + this.timeImgFillRange) * t;
};
e.prototype.goHome = function() {
this.gridManager.clearAllGrids();
this.subject.node.active = !1;
this.curCoverLevel.string = f.gameData.curLevel.toString();
this.cover.show();
};
e.prototype.跳关 = function() {
if (this.skipLevelEdit) {
var t = Number(this.skipLevelEdit.string);
if (t) {
f.gameData.curLevel = t - 1;
this.nextLevel(0);
}
}
};
e.prototype.下一关 = function() {
this.curScore = 500;
this.nextLevel();
};
e.prototype.重置游戏记录 = function() {
f.resetGameData();
this.goHome();
};
var o;
e.instance = null;
n([ P({
type: s.default,
displayName: "关卡参数",
tooltip: "关卡计算公式参数"
}) ], e.prototype, "level_parameter", void 0);
n([ P({
type: cc.Label,
displayName: "关卡"
}) ], e.prototype, "level", void 0);
n([ P({
type: cc.Label,
displayName: "积分"
}) ], e.prototype, "score", void 0);
n([ P({
type: cc.Label,
displayName: "红包数"
}) ], e.prototype, "redPackets", void 0);
n([ P({
type: d.default,
displayName: "倒计时"
}) ], e.prototype, "time", void 0);
n([ P({
type: cc.Sprite,
displayName: "倒计时进度条"
}) ], e.prototype, "timeImg", void 0);
n([ P({
type: a.default,
displayName: "连击文字"
}) ], e.prototype, "comboText", void 0);
n([ P({
type: cc.Prefab,
displayName: "连击奖励"
}) ], e.prototype, "comboAwardPrefab", void 0);
n([ P({
type: cc.Node,
displayName: "连击奖励位置"
}) ], e.prototype, "comboAwardPosNode", void 0);
n([ P({
displayName: "连击间隔时间",
tooltip: "两次格子消除时间间隔不超过n(n:为连击间隔时间)秒，则视为连击"
}) ], e.prototype, "comboTime", void 0);
n([ P({
displayName: "连击奖励间隔"
}) ], e.prototype, "comboAwardGap", void 0);
n([ P({
type: cc.Button,
displayName: "提示按钮"
}) ], e.prototype, "tipButton", void 0);
n([ P({
type: cc.Button,
displayName: "炸弹按钮"
}) ], e.prototype, "bombButton", void 0);
n([ P({
type: cc.Button,
displayName: "重排按钮"
}) ], e.prototype, "realignmentButton", void 0);
n([ P({
type: cc.Button,
displayName: "冻结时间按钮"
}) ], e.prototype, "freezeTimeButton", void 0);
n([ P({
type: cc.Label,
displayName: "提示数量"
}) ], e.prototype, "tipLabel", void 0);
n([ P({
type: cc.Label,
displayName: "炸弹数量"
}) ], e.prototype, "bombLabel", void 0);
n([ P({
type: cc.Label,
displayName: "重排数量"
}) ], e.prototype, "realignmentLabel", void 0);
n([ P({
type: cc.Label,
displayName: "冻结时间数量"
}) ], e.prototype, "freezeTimeLabel", void 0);
n([ P(r.default) ], e.prototype, "gridManager", void 0);
n([ P(m.default) ], e.prototype, "gameOverNode", void 0);
n([ P({
type: cc.EditBox,
displayName: "跳关输入框"
}) ], e.prototype, "skipLevelEdit", void 0);
n([ P({
type: m.default,
displayName: "结算界面"
}) ], e.prototype, "settlement", void 0);
n([ P({
type: h.default,
displayName: "游戏封面"
}) ], e.prototype, "cover", void 0);
n([ P({
type: cc.Label,
displayName: "封面关卡数"
}) ], e.prototype, "curCoverLevel", void 0);
n([ P({
type: u.default,
displayName: "游戏主体"
}) ], e.prototype, "subject", void 0);
n([ P({
type: sp.Skeleton,
displayName: "冰冻特效"
}) ], e.prototype, "freezeSpine", void 0);
n([ P({
type: cc.Sprite,
displayName: "时间进度条"
}) ], e.prototype, "timePorcessSP", void 0);
n([ P({
type: cc.SpriteFrame,
displayName: "时间进度条图"
}) ], e.prototype, "timePorcessSF", void 0);
n([ P({
type: cc.SpriteFrame,
displayName: "时间进度条冰图"
}) ], e.prototype, "timePorcessSF2", void 0);
return e = o = n([ w ], e);
}(cc.Component);
o.default = C;
cc._RF.pop();
}, {
"../../commonLib/component/addUI": "addUI",
"../../commonLib/component/countDown": "countDown",
"../../commonLib/lib/LoginLib": "LoginLib",
"./Construct": "Construct",
"./advertising": "advertising",
"./comboAward": "comboAward",
"./comboText": "comboText",
"./cover": "cover",
"./gameAudioClip": "gameAudioClip",
"./gameData": "gameData",
"./gridManager": "gridManager",
"./level_parameter": "level_parameter",
"./setting": "setting",
"./settlementParameter": "settlementParameter",
"./subject": "subject"
} ],
gameOver: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cfe1cbHMs9PKoI4MV84tcW3", "gameOver");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/component/nodeOperation"), a = t("./advertising"), s = t("../../commonLib/lib/ReportLib"), c = t("./gameData"), l = cc._decorator, p = l.ccclass, h = l.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.timeImgs = [];
e.bombImgs = [];
e.op = null;
e.continueCallback = null;
e.restartCallback = null;
e.goHomeCallback = null;
return e;
}
e.prototype.onLoad = function() {
this.op = this.getComponent(r.default);
};
e.prototype.show = function(t) {
for (var e = 0, o = this.timeImgs; e < o.length; e++) {
o[e].node.active = t;
}
for (var i = 0, n = this.bombImgs; i < n.length; i++) {
n[i].node.active = !t;
}
this.node.active = !0;
s.reportLib.stageGameFinish(0, c.gameData.curLevel, 0, c.curLevelProp.getAddProp(), c.curLevelProp.getUseProp(), 0, 0, c.gameData.isFirst ? 1 : 0);
c.curLevelProp.reset();
};
e.prototype.setContinueCallback = function(t) {
this.continueCallback = t;
};
e.prototype.setRestartCallback = function(t) {
this.restartCallback = t;
};
e.prototype.setGoHomeCallback = function(t) {
this.goHomeCallback = t;
};
e.prototype.看广告继续 = function() {
var t = this;
a.default.play(function() {
t.op.closeSelf(function() {
t.continueCallback && t.continueCallback();
});
});
};
e.prototype.点击重新开始 = function() {
var t = this;
this.op.closeSelf(function() {
t.restartCallback && t.restartCallback();
});
};
e.prototype.点击主页 = function() {
this.goHomeCallback && this.goHomeCallback();
this.op.node.active = !1;
};
n([ h({
type: cc.Sprite,
displayName: "时间相关图"
}) ], e.prototype, "timeImgs", void 0);
n([ h({
type: cc.Sprite,
displayName: "炸弹相关图"
}) ], e.prototype, "bombImgs", void 0);
return e = n([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../commonLib/component/nodeOperation": "nodeOperation",
"../../commonLib/lib/ReportLib": "ReportLib",
"./advertising": "advertising",
"./gameData": "gameData"
} ],
gridManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "87742Ut/FhNv5FGGhDkdw2Y", "gridManager");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, a = t("./grid"), s = t("./linkGamePathFinding"), c = t("./gameAudioClip"), l = t("./linkLine"), p = t("./scoreAni"), h = t("../../commonLib/component/playAnimation"), u = t("../../commonLib/lib/gameLib"), d = cc._decorator, f = d.ccclass, m = d.property;
(function(t) {
t[t.UP = 0] = "UP";
t[t.DOWN = 1] = "DOWN";
t[t.LEFT = 2] = "LEFT";
t[t.RIGHT = 3] = "RIGHT";
})(r = o.GRID_MOVE_DIR || (o.GRID_MOVE_DIR = {}));
var y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gridPrefab = null;
e.graphics = null;
e.linkLine = null;
e.bombSelectNode = null;
e.spLightningBtn = null;
e.spLightning = null;
e.spLightningPool = new cc.NodePool();
e.spLightningHit = null;
e.spLightningHitPool = new cc.NodePool();
e.removeGridAni = null;
e.removeGridAniPool = new cc.NodePool();
e.unfreezePrefab = null;
e.unfreezeAniPool = new cc.NodePool();
e.metaMap = [];
e.maxX = 0;
e.maxY = 0;
e.gridSize = cc.Size.ZERO;
e.allGrids = [];
e.gridTypes = [ 1, 2, 3, 4 ];
e.pathFinding = new s.default();
e.bombTime = 60;
e.levelParameter = null;
e.isBombSelectMode = null;
e.isStartGenerateGrid = !1;
e.canLinkGrids = [];
e.gameOverCallback = null;
e.linkRemovedCallback = null;
e.comboCallback = null;
e.nextLevelCallback = null;
e.curSelectGrid = null;
e.scorePosNode = null;
e.scoreAni = null;
e.scoreAniPool = new cc.NodePool();
e.scoreAniDelay = 0;
e.isNextLevel = !1;
e.linkPrefab = null;
e.linkPool = new cc.NodePool();
e._initGrid = !1;
e.gridPool = new cc.NodePool();
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.spLightningBtn.node.active = !1;
};
e.prototype.start = function() {
this.graphics.node.zIndex = 1;
this.metaMap = [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 0, 0 ] ];
};
e.prototype.setMaxWH = function(t, e) {
t += 2;
e += 2;
this.metaMap = [];
for (var o = 0; o < e; ++o) {
for (var i = [], n = 0; n < t; ++n) 0 == n || 0 == o || n == t - 1 || o == e - 1 ? i.push(0) : i.push(1);
this.metaMap.push(i);
}
};
e.prototype.getTotalGridCount = function() {
return this.levelParameter ? this.levelParameter.totalGrid : 0;
};
e.prototype.gameStart = function(t) {
this.levelParameter = t;
this.setBombSelectMode(!1);
this.stopGenerateGrid();
this.setMaxWH(t.width, t.height);
this.clearCurSelectGrid();
this.clearAllGrids();
this.graphics.clear();
this.maxX = this.levelParameter.width + 2;
this.maxY = this.levelParameter.height + 2;
this.gridSize.width = this.node.width / this.maxX;
this.gridSize.height = this.node.height / this.maxY;
this.allGrids = [];
this.pathFinding.reset(this.maxX, this.maxY);
for (var e = 0; e < this.metaMap.length; ++e) for (var o = this.metaMap[e], i = 0; i < o.length; ++i) {
if (o[i]) {
this.addGrid(i, e).playGenerateAni();
}
}
this.gridTypes = [];
for (var n = 0; n < t.typeCount; ++n) this.gridTypes.push(n);
this.generateGridType();
this.setUnknownGrid(t.unknownGrid);
this.setBomb();
this.setFreezeGrid(t.freezeGridNum);
this.isAllGridBlock() && this.randomGridsPos();
};
e.prototype.generateGridType = function() {
for (var t = [], e = 0; e < this.allGrids.length / 2; ++e) {
var o = this.gridTypes[e % this.gridTypes.length];
t.push(o, o);
}
for (var i = function() {
var e = u.gameLib.GetRandomNum(0, t.length - 1), o = t[e];
t.splice(e, 1);
return o;
}, n = 0, r = this.allGrids; n < r.length; n++) {
var a = r[n];
a.id >= 0 && (a.id = i());
}
};
e.prototype.setBombSelectMode = function(t) {
if (this.isBombSelectMode != t) {
this.isBombSelectMode = t;
this.bombSelectNode.active = t;
t ? c.default.playLightningSelect() : c.default.stopLightningSelect();
this.clearCurSelectGrid();
this.spLightningBtn.node.active = t;
}
};
e.prototype.startGenerateGrid = function() {
if (!this.isStartGenerateGrid) {
this.isStartGenerateGrid = !0;
this.schedule(this.randomGenerateGrid, this.levelParameter.easterGridTime);
}
};
e.prototype.stopGenerateGrid = function() {
if (this.isStartGenerateGrid) {
this.isStartGenerateGrid = !1;
this.unschedule(this.randomGenerateGrid);
}
};
e.prototype.pauseGenerateGrid = function() {
this.unschedule(this.randomGenerateGrid);
};
e.prototype.resumeGenerateGrid = function() {
this.isStartGenerateGrid && this.schedule(this.randomGenerateGrid, this.levelParameter.easterGridTime);
};
e.prototype.pauseAllBomb = function() {
for (var t = 0, e = this.allGrids; t < e.length; t++) {
var o = e[t];
o.isBomb() && o.pauseBombTime(!0);
}
};
e.prototype.resumeAllBomb = function() {
for (var t = 0, e = this.allGrids; t < e.length; t++) {
var o = e[t];
o.isBomb() && o.pauseBombTime(!1);
}
};
e.prototype.clearAllBomb = function() {
this.levelParameter.bombCount = 0;
for (var t = 0, e = this.allGrids; t < e.length; t++) {
var o = e[t];
o.isBomb() && o.setBombTime(0);
}
};
e.prototype.randomGenerateGrid = function() {
var t = this.getNullSpace();
if (t && t.length >= this.levelParameter.easterGridCondition) {
var e = function() {
var e = u.gameLib.GetRandomNum(0, t.length - 1), o = t[e];
t.splice(e, 1);
return o;
}, o = e(), i = e(), n = this.gridTypes[u.gameLib.GetRandomNum(0, this.gridTypes.length - 1)], r = this.addGrid(o.x, o.y, n, !1, !1), a = this.addGrid(i.x, i.y, n, !1, !1);
r.playGenerateAni();
a.playGenerateAni();
c.default.playRebirthGrid();
this.isAllGridBlock() && this.randomGridsPos();
}
};
e.prototype.randomGridsBomb = function() {
for (var t = [], e = [], o = 0; o < this.allGrids.length; ++o) {
var i = this.allGrids[o];
t.push(i);
if (i.isBomb()) {
e.push(i.getBombTime());
i.setBombTime(0);
}
}
for (var n = function() {
var e = u.gameLib.GetRandomNum(0, t.length - 1), o = t[e];
t.splice(e, 1);
return o;
}, r = 0, a = e; r < a.length; r++) {
var s = a[r];
n().setBombTime(s);
}
};
e.prototype.randomGridsUnknown = function() {
for (var t = [], e = 0, o = 0; o < this.allGrids.length; ++o) {
var i = this.allGrids[o];
t.push(i);
if (i.hideMode) {
++e;
i.hideMode = !1;
}
}
var n = function() {
var e = u.gameLib.GetRandomNum(0, t.length - 1), o = t[e];
t.splice(e, 1);
return o;
};
for (o = 0; o < e; ++o) n().hideMode = !0;
};
e.prototype.randomGridsPos = function() {
var t = this, e = 0, o = function() {
if (!(++e > 11)) {
if (e > 10) for (var i = 0, n = t.allGrids; i < n.length; i++) {
(d = n[i]).freezing && t.unfreezeGrid(d.x, d.y);
}
for (var r = [], a = [], s = 0; s < t.allGrids.length; ++s) {
var c = t.allGrids[s];
if (c.id >= 0) {
r.push(c);
c.stopMove();
a.push(cc.v2(c.x, c.y));
}
}
for (var l = function() {
var t = u.gameLib.GetRandomNum(0, a.length - 1), e = a[t];
a.splice(t, 1);
return e;
}, p = 0, h = r; p < h.length; p++) {
var d = h[p], f = l();
d.x = f.x;
d.y = f.y;
}
var m = function(e, o) {
var i = t.getGrid(e, o);
return !(!i || !i.node.active || i.freezing);
};
(function() {
for (var t = 0, e = r; t < e.length; t++) {
var o = e[t];
if (o.freezing && !m(o.x + 1, o.y) && !m(o.x - 1, o.y) && !m(o.x, o.y + 1) && !m(o.x, o.y - 1)) return !0;
}
return !1;
})() && o();
}
};
o();
this.isAllGridBlock() ? this.randomGridsPos() : c.default.playResetGridPos();
};
e.prototype.isAllGridBlock = function() {
for (var t = this, e = function(e, o) {
for (var i = o; i < t.allGrids.length; ++i) {
var n = t.allGrids[i];
if (0 == n.freezing && 0 == e.freezing && e.id == n.id) {
var r = t.pathFinding.search(cc.v2(e.x, e.y), cc.v2(n.x, n.y));
if (r && r.length > 1) {
t.canLinkGrids = [ e, n ];
return !0;
}
}
}
return !1;
}, o = !0, i = 0; i < this.allGrids.length; ++i) {
var n = this.allGrids[i];
if (n.id >= 0) {
o = !1;
if (e(n, i + 1)) return !1;
}
}
return !o;
};
e.prototype.getScroeLine = function(t, e, o) {
for (var i = [ e ], n = function(t) {
if (t.equals(e) || t.equals(o)) return !1;
for (var n = 0, r = i; n < r.length; n++) {
if (r[n].equals(t)) return !1;
}
return !0;
}, r = function(t, e, o, r) {
if (o) if (r) for (var a = t.x; a <= e.x; ++a) {
var s = cc.v2(a, t.y);
n(s) && i.push(s);
} else for (var c = t.y; c <= e.y; ++c) {
s = cc.v2(t.x, c);
n(s) && i.push(s);
} else if (r) for (a = t.x; a >= e.x; --a) {
s = cc.v2(a, t.y);
n(s) && i.push(s);
} else for (c = t.y; c >= e.y; --c) {
s = cc.v2(t.x, c);
n(s) && i.push(s);
}
}, a = 0; a < t.length; ++a) {
var s = t[a], c = t[a + 1];
s && c && (s.x > c.x ? r(s, c, !1, !0) : s.x < c.x ? r(s, c, !0, !0) : s.y > c.y ? r(s, c, !1, !1) : s.y < c.y && r(s, c, !0, !1));
}
i.push(o);
return i;
};
e.prototype.setGameOverCallback = function(t) {
this.gameOverCallback = t;
};
e.prototype.setLinkRemovedCallback = function(t) {
this.linkRemovedCallback = t;
};
e.prototype.setComboCallback = function(t) {
this.comboCallback = t;
};
e.prototype.setNextLevelCallback = function(t) {
this.nextLevelCallback = t;
};
e.prototype.gameOver = function(t) {
this.setBombSelectMode(!1);
this.stopGenerateGrid();
for (var e = 0, o = this.allGrids; e < o.length; e++) {
o[e].pauseBombTime();
}
this.gameOverCallback && this.gameOverCallback(t);
};
e.prototype.onBomb = function(t) {
c.default.playBombExplosion();
this.gameOver(!1);
};
e.prototype.setGridAttribute = function(t, e, o) {
void 0 === o && (o = 0);
if (t && !(t <= 0)) {
for (var i = [], n = 0, r = this.allGrids; n < r.length; n++) {
var a = r[n], s = !1;
switch (e) {
case 0:
s = !a.isBomb();
break;

case 1:
s = !a.hideMode;
break;

case 2:
s = !a.freezing;
}
s && i.push(a);
}
for (var c = [], l = 0; l < t; ++l) if (i.length) {
var p = u.gameLib.GetRandomNum(0, i.length - 1);
switch (e) {
case 0:
i[p].setBombTime(o);
break;

case 1:
i[p].hideMode = !0;
break;

case 2:
i[p].freezing = !0;
}
c.push(i[p]);
i.splice(p, 1);
}
return c;
}
};
e.prototype.setBomb = function() {
switch (this.levelParameter.bombCondition) {
case 0:
return [];

case 1:
if (this.levelParameter.bombCount > 0) {
--this.levelParameter.bombCount;
return this.setGridAttribute(1, 0, this.levelParameter.bombTime);
}
return [];

case 2:
this.levelParameter.bombCondition = 0;
return this.setGridAttribute(this.levelParameter.bombCount, 0, this.levelParameter.bombTime);
}
};
e.prototype.setBombTest = function() {
this.setGridAttribute(1, 0, 3);
};
e.prototype.setUnknownGrid = function(t) {
return this.setGridAttribute(t, 1);
};
e.prototype.setFreezeGrid = function(t) {
return this.setGridAttribute(t, 2);
};
e.prototype.moveGrid = function(t) {
for (var e = function(e, o) {
void 0 === o && (o = !1);
var i = t == r.UP || t == r.DOWN;
o && (i = !i);
return i ? e.x : e.y;
}, o = {}, i = 0, n = this.allGrids; i < n.length; i++) {
var a = n[i];
null == o[e(a)] && (o[e(a)] = []);
o[e(a)].push(a);
}
for (var s in o) {
var c = o[s];
c.sort(function(t, o) {
return e(t, !0) - e(o, !0);
});
switch (t) {
case r.UP:
for (var l = this.maxY - 2, p = c.length - 1; p >= 0; --p) {
var h = c[p];
if (h.y == l) l--; else {
h.moveToY(l, this.pathFinding);
l--;
}
}
break;

case r.DOWN:
var u = 1;
for (p = 0; p < c.length; ++p) {
var d = c[p];
if (d.y == u) u++; else {
d.moveToY(u, this.pathFinding);
u++;
}
}
break;

case r.LEFT:
for (u = 1, p = 0; p < c.length; ++p) {
var f = c[p];
if (f.x == u) u++; else {
f.moveToX(u, this.pathFinding);
u++;
}
}
break;

case r.RIGHT:
for (l = this.maxX - 2, p = c.length - 1; p >= 0; --p) {
var m = c[p];
if (m.x == l) l--; else {
m.moveToX(l, this.pathFinding);
l--;
}
}
}
}
};
e.prototype.clearCurSelectGrid = function() {
if (this.curSelectGrid) {
this.curSelectGrid.isSelect = !1;
this.curSelectGrid = null;
}
};
e.prototype.onGridClick = function(t) {
if (this.bombSelectNode.active) this.onBombSelect(t); else if (t.freezing) c.default.playClickFreeze(); else if (!this.curSelectGrid || t == this.curSelectGrid || this.curSelectGrid.id != t.id || !this.linkGrid(this.curSelectGrid, t)) {
null != this.curSelectGrid ? c.default.playNoLink() : c.default.playGridSelect();
this.clearCurSelectGrid();
this.curSelectGrid = t;
this.curSelectGrid.isSelect = !0;
}
};
e.prototype.setBombSelectCallback = function(t) {
this.bombSelectCallback = t;
};
e.prototype.onBombSelect = function(t) {
var e = this;
if (t && t.id >= 0) {
this.setBombSelectMode(!1);
this.bombSelectCallback && this.bombSelectCallback(!0);
for (var o = [], i = 0, n = this.allGrids; i < n.length; i++) {
(m = n[i]).id == t.id && o.push(m);
}
for (var r = .25, a = u.gameLib.convertToSpacePos(this.spLightningBtn.node, this.graphics.node), s = function(t) {
var i = o[t], n = cc.v2(i.getX(), i.getY()), s = l.spLightningPool.get();
s || (s = cc.instantiate(l.spLightning));
l.graphics.node.addChild(s);
var c = s.getComponent(h.default), p = c.play();
p.duration > r && (r = p.duration);
l.scheduleOnce(function() {
e.spLightningPool.put(s);
}, p.duration);
s.x = a.x > n.x ? n.x + (a.x - n.x) / 2 : a.x + (n.x - a.x) / 2;
s.y = a.y > n.y ? n.y + (a.y - n.y) / 2 : a.y + (n.y - a.y) / 2;
var u = n.sub(a), d = Math.atan2(u.x, u.y) / Math.PI * 180;
s.angle = -d;
var f = n.sub(a).mag();
s.scaleY = f / s.height;
var m = l.spLightningHitPool.get();
m || (m = cc.instantiate(l.spLightningHit));
l.graphics.node.addChild(m);
c = m.getComponent(h.default);
m.x = n.x;
m.y = n.y;
m.active = !1;
l.scheduleOnce(function() {
m.active = !0;
var t = c.play();
e.scheduleOnce(function() {
e.spLightningHitPool.put(m);
}, t.duration);
}, p.duration);
}, l = this, p = 0; p < o.length; ++p) s(p);
for (var d = 0, f = o; d < f.length; d++) {
var m = f[d];
this.removeGrid(m);
}
this.spLightningBtn.node.active = !0;
this.scheduleOnce(function() {
e.spLightningBtn.node.active = !1;
}, r);
c.default.playLightning();
}
};
e.prototype.点击炸弹选择框 = function() {
this.setBombSelectMode(!1);
this.bombSelectCallback && this.bombSelectCallback(!1);
};
e.prototype.autoLinkGrid = function() {
return 2 == this.canLinkGrids.length && this.linkGrid(this.canLinkGrids[0], this.canLinkGrids[1]);
};
e.prototype.getScoreAni = function() {
var t = this.scoreAniPool.get();
t || (t = cc.instantiate(this.scoreAni));
this.graphics.node.addChild(t);
return t.getComponent(p.default);
};
e.prototype.linkGrid = function(t, e) {
var o = this, i = this.pathFinding.search(cc.v2(t.x, t.y), cc.v2(e.x, e.y));
if (i && i.length > 1) {
this.paintLine(i);
var n = this.getScroeLine(i, this.pathFinding.startPoint, this.pathFinding.endPoint), a = u.gameLib.convertToSpacePos(this.scorePosNode, this.graphics.node), s = this.gridSize.width / 2, l = this.gridSize.height / 2;
this.scoreAniDelay = 0;
for (var p = 0, h = n; p < h.length; p++) {
var d = h[p], f = this.getScoreAni();
f.setPos(d.x * this.gridSize.width + s, d.y * this.gridSize.height + l);
f.moveToTarget(this.scoreAniDelay, a, function(t) {
o.linkRemovedCallback && o.linkRemovedCallback(1);
cc.tween(o.scorePosNode).to(.15, {
scale: 1.1
}).to(.15, {
scale: 1
}).start();
}, function(t) {
o.scoreAniPool.put(t.node);
});
this.scoreAniDelay += .05;
}
this.comboCallback && this.comboCallback();
var m = t.isBomb(), y = e.isBomb();
this.removeGrid(t);
this.removeGrid(e);
c.default.playRemoveGrid();
if (this.isNextLevel) return !0;
switch (this.levelParameter.move) {
case 0:
break;

case 1:
this.moveGrid(r.UP);
break;

case 2:
this.moveGrid(r.DOWN);
break;

case 3:
this.moveGrid(r.LEFT);
break;

case 4:
this.moveGrid(r.RIGHT);
break;

case 5:
this.moveGrid(u.gameLib.GetRandomNum(r.UP, r.RIGHT));
}
this.isAllGridBlock() && this.randomGridsPos();
this.clearCurSelectGrid();
m && this.setBomb();
y && this.setBomb();
return !0;
}
return !1;
};
e.prototype.onNextLevel = function() {
if (0 == this.allGrids.length) {
var t = !this.isNextLevel;
this.isNextLevel = !0;
t && this.nextLevelCallback && this.nextLevelCallback(this.scoreAniDelay + 2);
} else this.isNextLevel = !1;
return this.isNextLevel;
};
e.prototype.getNullSpace = function() {
for (var t = [], e = 0; e < this.maxX - 2; ++e) for (var o = 0; o < this.maxY - 2; ++o) {
t[e] || (t[e] = []);
t[e][o] = cc.v2(e + 1, o + 1);
}
for (var i = 0, n = this.allGrids; i < n.length; i++) {
t[(c = n[i]).x - 1][c.y - 1] = null;
}
for (var r = [], a = 0, s = t; a < s.length; a++) for (var c, l = 0, p = c = s[a]; l < p.length; l++) {
var h = p[l];
h && r.push(h);
}
return r;
};
e.prototype.getGrid = function(t, e) {
for (var o = 0, i = this.allGrids; o < i.length; o++) {
var n = i[o];
if (null != n.id && n.id >= 0 && n.x == t && n.y == e) return n;
}
return null;
};
e.prototype.unfreezeGrid = function(t, e) {
var o = this, i = this.getGrid(t, e);
if (i && i.freezing) {
c.default.playUnfreezeGrid();
i.unfreeze();
var n = this.unfreezeAniPool.get();
n || (n = cc.instantiate(this.unfreezePrefab));
this.graphics.node.addChild(n);
n.x = i.getX();
n.y = i.getY();
var r = n.getComponent(h.default).play();
this.scheduleOnce(function() {
o.unfreezeAniPool.put(n);
}, r.duration);
}
};
e.prototype.removeGrid = function(t) {
var e = this;
this.pathFinding.remBlockPoint([ cc.v2(t.x, t.y) ]);
this.unfreezeGrid(t.x + 1, t.y);
this.unfreezeGrid(t.x - 1, t.y);
this.unfreezeGrid(t.x, t.y + 1);
this.unfreezeGrid(t.x, t.y - 1);
var o = function() {
var t = e.removeGridAniPool.get();
t || (t = cc.instantiate(e.removeGridAni));
e.graphics.node.addChild(t);
return t.getComponent(h.default);
}();
o.node.x = t.getX();
o.node.y = t.getY();
var i = o.play();
this.scheduleOnce(function() {
e.removeGridAniPool.put(o.node);
}, i.duration + .01);
t.reset();
var n = this.allGrids.indexOf(t);
this.allGrids.splice(n, 1);
this.gridPool.put(t.node);
var r = this.onNextLevel();
r || this.startGenerateGrid();
return r;
};
e.prototype.addGrid = function(t, e, o, i, n, r) {
void 0 === o && (o = 0);
void 0 === i && (i = !1);
void 0 === n && (n = !1);
void 0 === r && (r = 0);
this.pathFinding.addBlockPoint([ cc.v2(t, e) ]);
var s = this.createGrid();
this.node.addChild(s);
var c = s.getComponent(a.default);
this.allGrids.push(c);
c.setClickCallback(this.onGridClick.bind(this));
c.setBombCallback(this.onBomb.bind(this));
c.setBombTime(r);
c.stopAnimation();
c.resetTrun();
c.isSelect = !1;
c.size = this.gridSize;
c.x = t;
c.y = e;
c.id = o;
c.freezing = i;
c.hideMode = n;
return c;
};
e.prototype.getLinkLine = function() {
var t = this.linkPool.get();
t || (t = cc.instantiate(this.linkPrefab));
this.graphics.node.addChild(t);
return t.getComponent(l.default);
};
e.prototype.paintLine = function(t) {
if (t && t.length && t.length > 1) for (var e = this.gridSize.width / 2, o = this.gridSize.height / 2, i = .5, n = 1; n < t.length; ++n) {
var r = t[n - 1], a = t[n], s = this.getLinkLine();
s.node.x = a.x * this.gridSize.width + e;
s.node.y = a.y * this.gridSize.height + o;
if (r.x > a.x) {
s.node.width = (r.x - a.x) * this.gridSize.width;
s.node.angle = 180;
} else if (r.y < a.y) {
s.node.width = (a.y - r.y) * this.gridSize.height;
s.node.angle = 90;
} else if (r.y > a.y) {
s.node.width = (r.y - a.y) * this.gridSize.height;
s.node.angle = -90;
} else {
s.node.width = (a.x - r.x) * this.gridSize.width;
s.node.angle = 0;
}
s.setAni(i, .2, this.linkPool);
i += .2;
}
};
e.prototype.initGrid = function() {
if (!this._initGrid) {
this._initGrid = !0;
for (var t = 0; t < 70; ++t) {
var e = cc.instantiate(this.gridPrefab);
this.gridPool.put(e);
}
}
};
e.prototype.createGrid = function() {
var t = this.gridPool.get();
t || (t = cc.instantiate(this.gridPrefab));
t.name = "grid";
return t;
};
e.prototype.clearAllGrids = function() {
for (var t = 0; t < this.node.children.length; ++t) {
if ("grid" == (i = this.node.children[t]).name) {
this.gridPool.put(i);
--t;
}
}
for (var e = 0, o = this.allGrids; e < o.length; e++) {
var i;
(i = o[e]).reset();
}
this.allGrids = [];
this.pathFinding.removeAllBlock();
};
e.prototype.onDestroy = function() {
this.gridPool.clear();
this.removeGridAniPool.clear();
this.linkPool.clear();
this.scoreAniPool.clear();
this.spLightningHitPool.clear();
this.spLightningPool.clear();
this.unfreezeAniPool.clear();
};
e.prototype.updateTheme = function() {
for (var t = 0, e = this.allGrids; t < e.length; t++) {
e[t].updateIcon();
}
};
var o;
e.instance = null;
n([ m({
type: cc.Prefab,
displayName: "方块预设"
}) ], e.prototype, "gridPrefab", void 0);
n([ m({
type: cc.Graphics,
displayName: "画笔"
}) ], e.prototype, "graphics", void 0);
n([ m({
type: cc.Prefab,
displayName: "连线拖尾"
}) ], e.prototype, "linkLine", void 0);
n([ m({
type: cc.Node,
displayName: "炸弹选择框"
}) ], e.prototype, "bombSelectNode", void 0);
n([ m({
type: sp.Skeleton,
displayName: "闪电按钮特效"
}) ], e.prototype, "spLightningBtn", void 0);
n([ m({
type: cc.Prefab,
displayName: "闪电特效"
}) ], e.prototype, "spLightning", void 0);
n([ m({
type: cc.Prefab,
displayName: "闪电命中效果"
}) ], e.prototype, "spLightningHit", void 0);
n([ m({
type: cc.Prefab,
displayName: "格子消除特效"
}) ], e.prototype, "removeGridAni", void 0);
n([ m({
type: cc.Prefab,
displayName: "冰碎特效"
}) ], e.prototype, "unfreezePrefab", void 0);
n([ m({
type: cc.Node,
displayName: "积分位置"
}) ], e.prototype, "scorePosNode", void 0);
n([ m({
type: cc.Prefab,
displayName: "得分动画"
}) ], e.prototype, "scoreAni", void 0);
n([ m({
type: cc.Prefab,
displayName: "连线预设"
}) ], e.prototype, "linkPrefab", void 0);
return e = o = n([ f ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../commonLib/component/playAnimation": "playAnimation",
"../../commonLib/lib/gameLib": "gameLib",
"./gameAudioClip": "gameAudioClip",
"./grid": "grid",
"./linkGamePathFinding": "linkGamePathFinding",
"./linkLine": "linkLine",
"./scoreAni": "scoreAni"
} ],
grid: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ae78cJDjytOtJ+RGhgrmnUd", "grid");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/component/countDown"), a = t("./gameData"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.icon = null;
e.backGround = null;
e.hideIcon = null;
e.freezingIcon = null;
e.bombNode = null;
e.selectNode = null;
e.bombTime = null;
e.animation = null;
e.generateAni = null;
e.openGridClip = null;
e.closeGridClip = null;
e.button = null;
e._iconID = null;
e._x = null;
e._y = null;
e._size = null;
e._isSelect = null;
e._hideMode = null;
e._freezing = null;
e.curMoveTween = null;
e.bombCallback = null;
e.clickCallback = null;
return e;
}
Object.defineProperty(e.prototype, "id", {
get: function() {
return this._iconID;
},
set: function(t) {
if (this._iconID != t) {
this._iconID = t;
if (null != this._iconID && this._iconID >= 0) {
this.node.active = !0;
this.updateIcon();
} else this.node.active = !1;
}
},
enumerable: !0,
configurable: !0
});
e.prototype.updateIcon = function() {
a.setGridIcon(this._iconID, this.icon);
};
Object.defineProperty(e.prototype, "x", {
get: function() {
return this._x;
},
set: function(t) {
if (this._x != t) {
this._x = t;
this.node.x = this.getX();
}
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "y", {
get: function() {
return this._y;
},
set: function(t) {
if (this._y != t) {
this._y = t;
this.node.y = this.getY();
}
},
enumerable: !0,
configurable: !0
});
e.prototype.getX = function() {
return this._x * this.size.width + this.size.width / 2;
};
e.prototype.getY = function() {
return this._y * this.size.height + this.size.height / 2;
};
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._size;
},
set: function(t) {
if (this._size != t) {
this._size = t;
this.setScaleBySize(t);
}
},
enumerable: !0,
configurable: !0
});
e.prototype.setScaleBySize = function(t) {
if (t) {
this.node.scaleX = t.width / this.node.width;
this.node.scaleY = t.height / this.node.height;
}
};
Object.defineProperty(e.prototype, "isSelect", {
get: function() {
return this._isSelect;
},
set: function(t) {
if (this._isSelect != t) {
this._isSelect = t;
this.button.interactable = !this._isSelect;
this.selectNode.active = t;
this.hideMode && this.turnGrid(t);
if (this._isSelect) {
if (this.animation.currentClip.name == this.generateAni.name) {
var e = this.animation.getAnimationState(this.generateAni.name);
if (e.isPlaying) {
this.animation.setCurrentTime(e.duration, this.generateAni.name);
this.animation.sample(this.generateAni.name);
}
}
var o = this.animation.play("选中");
this.scheduleOnce(this.playSelectLoopAni, o.duration);
this.node.zIndex = 1;
} else {
this.node.zIndex = 0;
this.unschedule(this.playSelectLoopAni);
this.animation.stop("选中_待机");
}
}
},
enumerable: !0,
configurable: !0
});
e.prototype.unfreeze = function() {
this.freezing && (this.freezing = !1);
};
e.prototype.playSelectLoopAni = function() {
this.animation.play("选中_待机");
};
Object.defineProperty(e.prototype, "hideMode", {
get: function() {
return this._hideMode;
},
set: function(t) {
if (this._hideMode != t) {
this._hideMode = t;
this.hideIcon.node.active = t;
}
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "freezing", {
get: function() {
return this._freezing;
},
set: function(t) {
if (this._freezing != t) {
this._freezing = t;
t && (this.isSelect = !1);
this.freezingIcon.node.active = t;
}
},
enumerable: !0,
configurable: !0
});
e.prototype.start = function() {
null == this.hideMode && (this.hideMode = !1);
null == this.freezing && (this.freezing = !1);
};
e.prototype.reset = function() {
this.x = 0;
this.y = 0;
this.size = cc.Size.ZERO;
this.hideMode = !1;
this.freezing = !1;
this.isSelect = !1;
this.id = -1;
this.icon.node.scale = 1;
this.setBombCallback(null);
this.setClickCallback(null);
this.setBombTime(0);
this.resetTrun();
this.stopMove();
this.stopAnimation();
};
e.prototype.stopAnimation = function() {
if (this.animation && this.animation.currentClip) {
this.animation.setCurrentTime(this.animation.currentClip.duration, this.animation.currentClip.name);
this.animation.sample(this.animation.currentClip.name);
}
this.animation.stop();
};
e.prototype.setBombTime = function(t) {
if (t) {
this.bombTime.resume();
this.bombTime.setTime(t);
this.bombNode.active = !0;
this.bombNode.scale = 0;
cc.tween(this.bombNode).to(.25, {
scale: 1
}, {
easing: "backOut"
}).start();
} else this.bombNode.active = !1;
};
e.prototype.getBombTime = function() {
return this.bombNode.active ? this.bombTime.getTime() : 0;
};
e.prototype.isBomb = function() {
return this.bombNode.active;
};
e.prototype.pauseBombTime = function(t) {
void 0 === t && (t = !0);
t ? this.bombTime.pause() : this.bombTime.resume();
};
e.prototype.moveToX = function(t, e) {
void 0 === e && (e = null);
this.moveTo(t, this.y, e);
};
e.prototype.moveToY = function(t, e) {
void 0 === e && (e = null);
this.moveTo(this.x, t, e);
};
e.prototype.moveTo = function(t, e, o) {
var i = this;
void 0 === o && (o = null);
if (this.x != t || this.y != e) {
this.stopMove();
var n = Math.abs(this.x - t), r = Math.abs(this.y - e), a = Math.max(n, r);
if (o) {
o.remBlockPoint([ cc.v2(this.x, this.y) ]);
o.addBlockPoint([ cc.v2(t, e) ]);
}
this._x = t;
this._y = e;
var s = this.getX(), c = this.getY();
this.curMoveTween = cc.tween(this.node).to(.2 * a, {
x: s,
y: c
}, {
easing: "backOut"
}).call(function() {
i.curMoveTween = null;
}).start();
}
};
e.prototype.stopMove = function() {
if (this.curMoveTween) {
this.curMoveTween.stop();
this.curMoveTween = null;
this.node.x = this.getX();
this.node.y = this.getY();
}
};
e.prototype.turnGrid = function(t) {
var e = this.hideIcon.getComponent(cc.Animation);
t ? e.play(this.openGridClip.name) : e.play(this.closeGridClip.name);
};
e.prototype.playGenerateAni = function() {
this.animation.play(this.generateAni.name);
this.animation.sample(this.generateAni.name);
};
e.prototype.resetTrun = function() {
var t = this.hideIcon.getComponent(cc.Animation);
t.setCurrentTime(0, this.openGridClip.name);
t.sample(this.openGridClip.name);
};
e.prototype.点击格子 = function() {
this.clickCallback && this.clickCallback(this);
};
e.prototype.setBombCallback = function(t) {
this.bombCallback = t;
};
e.prototype.炸弹事件 = function(t, e) {
e <= 0 && this.bombCallback && this.bombCallback(this);
};
e.prototype.setClickCallback = function(t) {
this.clickCallback = t;
};
n([ l({
type: cc.Node,
displayName: "内容跟节点"
}) ], e.prototype, "content", void 0);
n([ l({
type: cc.Sprite,
displayName: "显示图标"
}) ], e.prototype, "icon", void 0);
n([ l({
type: cc.Sprite,
displayName: "底图"
}) ], e.prototype, "backGround", void 0);
n([ l({
type: cc.Sprite,
displayName: "隐藏标示"
}) ], e.prototype, "hideIcon", void 0);
n([ l({
type: cc.Sprite,
displayName: "冻结图标"
}) ], e.prototype, "freezingIcon", void 0);
n([ l({
type: cc.Node,
displayName: "炸弹节点"
}) ], e.prototype, "bombNode", void 0);
n([ l({
type: cc.Node,
displayName: "选中状态节点"
}) ], e.prototype, "selectNode", void 0);
n([ l({
type: r.default,
displayName: "炸弹倒计时"
}) ], e.prototype, "bombTime", void 0);
n([ l({
type: cc.Animation,
displayName: "动画播放器"
}) ], e.prototype, "animation", void 0);
n([ l({
type: cc.AnimationClip,
displayName: "生成动画"
}) ], e.prototype, "generateAni", void 0);
n([ l({
type: cc.AnimationClip,
displayName: "查看动画",
tooltip: "查看未知格子动画"
}) ], e.prototype, "openGridClip", void 0);
n([ l({
type: cc.AnimationClip,
displayName: "取消查看",
tooltip: "取消查看未知格子动画"
}) ], e.prototype, "closeGridClip", void 0);
n([ l({
type: cc.Button,
displayName: "点击按钮"
}) ], e.prototype, "button", void 0);
return e = n([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../commonLib/component/countDown": "countDown",
"./gameData": "gameData"
} ],
level_parameter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8cf6dD0QFRL975fhwKf4PFD", "level_parameter");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.level_parameter_result = void 0;
var r = t("../../commonLib/lib/gameLib"), a = cc._decorator, s = a.ccclass, c = a.property, l = function() {
function t() {
this.initial = 0;
this.step = 0;
this.steps = 0;
}
t.prototype.getValue = function(t) {
var e = Math.floor(t / this.step);
return this.initial + e * this.steps;
};
t.prototype.getValue_ = function(t) {
var e = Math.floor(t / this.step);
return this.initial - e * this.steps;
};
t.prototype.setData = function(t) {
for (var e in t) this[e] = t[e];
};
n([ c({
displayName: "初始值",
step: 1
}) ], t.prototype, "initial", void 0);
n([ c({
displayName: "步数",
step: 1
}) ], t.prototype, "step", void 0);
n([ c({
displayName: "步长",
step: 1
}) ], t.prototype, "steps", void 0);
return t = n([ s("parameter_base") ], t);
}(), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.reset = 0;
return e;
}
e.prototype.getValue = function(e) {
e %= this.reset;
return t.prototype.getValue.call(this, e);
};
e.prototype.getValue_ = function(e) {
e %= this.reset;
return t.prototype.getValue_.call(this, e);
};
n([ c({
displayName: "重置值",
step: 1
}) ], e.prototype, "reset", void 0);
return e = n([ s("parameter_rv") ], e);
}(l), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.threshold = 0;
return e;
}
e.prototype.getTime = function(t, e) {
var o = this.initial * e - Math.floor(t / this.step) * this.steps;
o < this.threshold && (o = this.threshold);
return o;
};
e.prototype.getValue = function(e) {
var o = t.prototype.getValue.call(this, e);
o > this.threshold && (o = this.threshold);
return o;
};
e.prototype.getValue_ = function(e) {
var o = t.prototype.getValue_.call(this, e);
o < this.threshold && (o = this.threshold);
return o;
};
n([ c({
displayName: "阈值",
step: 1
}) ], e.prototype, "threshold", void 0);
return e = n([ s("parameter_limit") ], e);
}(l), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.threshold = 0;
return e;
}
e.prototype.getValue = function(e) {
var o = t.prototype.getValue.call(this, e);
o > this.threshold && (o = this.threshold);
return o;
};
e.prototype.getValue_ = function(e) {
var o = t.prototype.getValue_.call(this, e);
o < this.threshold && (o = this.threshold);
return o;
};
e.prototype.getTypeNum = function(t, e) {
t %= this.reset;
var o = this.initial;
switch (e) {
case 40:
o += 1;
break;

case 54:
o += 2;
break;

case 70:
o += 3;
}
var i = o + Math.floor(t / this.step) * this.steps;
i > this.threshold && (i = this.threshold);
return i;
};
n([ c({
displayName: "阈值",
step: 1
}) ], e.prototype, "threshold", void 0);
return e = n([ s("parameter_rvl") ], e);
}(p), d = function() {
function t() {
this.once_num = null;
this.appear_type = null;
this.countdown = null;
}
t.prototype.setData = function(t) {
this.appear_type.setData(t.appear_type);
this.countdown.setData(t.countdown);
this.once_num.setData(t.once_num);
};
n([ c({
type: u,
displayName: "一次出现个数"
}) ], t.prototype, "once_num", void 0);
n([ c({
type: h,
displayName: "出现方式"
}) ], t.prototype, "appear_type", void 0);
n([ c({
type: u,
displayName: "倒计时"
}) ], t.prototype, "countdown", void 0);
return t = n([ s("parameter_bomb") ], t);
}(), f = function() {
function t() {
this.count = null;
this.condition = null;
}
t.prototype.setData = function(t) {
this.count.setData(t.trigger);
this.condition.setData(t.reflesh);
};
n([ c({
type: u,
displayName: "消掉多少块触发"
}) ], t.prototype, "count", void 0);
n([ c({
type: u,
displayName: "刷新时间",
step: 1
}) ], t.prototype, "condition", void 0);
return t = n([ s("parameter_easterGrid") ], t);
}(), m = function() {
return function() {};
}();
o.level_parameter_result = m;
var y = function() {
function t() {
this.width = null;
this.height = null;
this.typesNum = null;
this.time = null;
this.unknownGrid = null;
this.bomb = null;
this.move = null;
this.freezeGrid = null;
this.easterGrid = null;
this.freezeGridAddTime = 0;
this.unknownGridAddTime = 0;
this.bombGridAddTime = 0;
this.level = 0;
}
t.prototype.getLevelParameter = function(t) {
this.level = t - 1;
var e = new m();
e.width = this.getWidth();
e.height = this.getHeight();
e.totalGrid = e.width * e.height;
e.typeCount = this.getTypeCount();
e.bombCount = this.getBombCount();
e.bombCondition = this.getBombCondition();
e.bombTime = this.getBombTime();
e.time = this.time.getTime(this.level, e.totalGrid);
e.move = this.getMoveCondition();
e.unknownGrid = this.unknownGrid.getValue(this.level);
e.freezeGridNum = this.getFreezeGridNum();
e.easterGridCondition = this.getEasterGridCondition();
e.easterGridTime = this.getEasterGridTime();
var o = this.bombGridAddTime * e.bombCount + this.unknownGridAddTime * e.unknownGrid + this.freezeGridAddTime * e.freezeGridNum;
e.time += o;
cc.log("当前关卡：" + t + " -----------------------------------------------------");
cc.log("宽：" + e.width);
cc.log("高：" + e.height);
cc.log("格子总数：" + e.totalGrid);
cc.log("格子种类数：" + e.typeCount);
cc.log("炸弹数：" + e.bombCount);
cc.log("炸弹出现方式：" + e.bombCondition);
cc.log("炸弹时间：" + e.bombTime);
cc.log("位移条件：" + e.move);
cc.log("关卡时间：" + e.time + "(附加时间：" + o + ")");
cc.log("问号格子数：" + e.unknownGrid);
cc.log("冰冻格子数：" + e.freezeGridNum);
cc.log("重生格子数：" + e.easterGridCondition);
cc.log("重生格子间隔时间：" + e.easterGridTime);
return e;
};
t.prototype.setData = function(t) {
this.width.setData(t.width);
this.height.setData(t.height);
this.bomb.setData(t.bomb);
this.typesNum.setData(t.cube_type);
this.unknownGrid.setData(t.cube_unknown);
this.move.setData(t.displacement.direction);
this.freezeGrid.setData(t.frozen_cube);
this.time.setData(t.gate_time);
this.easterGrid.setData(t.reborn_cube);
};
t.prototype.getWidth = function() {
return this.width.getValue(this.level);
};
t.prototype.getHeight = function() {
return this.height.getValue(this.level);
};
t.prototype.getTypeCount = function() {
return this.typesNum.getTypeNum(this.level, this.getWidth() * this.getHeight());
};
t.prototype.getBombCount = function() {
return this.bomb.once_num.getValue(this.level);
};
t.prototype.getBombCondition = function() {
return this.bomb.appear_type.getValue(this.level);
};
t.prototype.getBombTime = function() {
return this.bomb.countdown.getValue_(this.level);
};
t.prototype.getFreezeGridNum = function() {
return this.freezeGrid.getValue(this.level);
};
t.prototype.getEasterGridCondition = function() {
return this.easterGrid.count.getValue_(this.level);
};
t.prototype.getEasterGridTime = function() {
return this.easterGrid.condition.getValue_(this.level);
};
t.prototype.getMoveCondition = function() {
var t = this.move.getValue(this.level);
return r.gameLib.GetRandomNum(0, t);
};
n([ c({
type: p,
displayName: "宽"
}) ], t.prototype, "width", void 0);
n([ c({
type: p,
displayName: "高"
}) ], t.prototype, "height", void 0);
n([ c({
type: u,
displayName: "方块种类增加"
}) ], t.prototype, "typesNum", void 0);
n([ c({
type: h,
displayName: "关卡时间"
}) ], t.prototype, "time", void 0);
n([ c({
type: u,
displayName: "未知方块"
}) ], t.prototype, "unknownGrid", void 0);
n([ c({
type: d,
displayName: "毁灭炸弹"
}) ], t.prototype, "bomb", void 0);
n([ c({
type: h,
displayName: "位移"
}) ], t.prototype, "move", void 0);
n([ c({
type: u,
displayName: "冰冻方块"
}) ], t.prototype, "freezeGrid", void 0);
n([ c({
type: f,
displayName: "重生方块"
}) ], t.prototype, "easterGrid", void 0);
n([ c({
displayName: "冰冻块附加时间"
}) ], t.prototype, "freezeGridAddTime", void 0);
n([ c({
displayName: "未知块附加时间"
}) ], t.prototype, "unknownGridAddTime", void 0);
n([ c({
displayName: "炸弹块附加时间"
}) ], t.prototype, "bombGridAddTime", void 0);
return t = n([ s("level_parameter") ], t);
}();
o.default = y;
cc._RF.pop();
}, {
"../../commonLib/lib/gameLib": "gameLib"
} ],
linkGamePathFinding: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dbf8fx3Ab9N9I5Au+GSbTdG", "linkGamePathFinding");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {
this.pathObj = {};
this.startPoint = cc.Vec2.ONE;
this.endPoint = cc.Vec2.ONE;
this.path = [];
this.mapArr = {};
this.m_row = 100;
this.m_col = 100;
this.findMax = 5e3;
this.m_line = [];
}
t.prototype.addBlockPoint = function(t) {
if (t && t.length) for (var e = 0, o = t; e < o.length; e++) {
var i = o[e], n = i.y + "*" + i.x;
if (null == this.pathObj[n]) {
this.pathObj[n] = 1;
break;
}
}
};
t.prototype.remBlockPoint = function(t) {
if (t && t.length) for (var e = 0, o = t; e < o.length; e++) {
var i = o[e], n = i.y + "*" + i.x;
if (null != this.pathObj[n]) {
delete this.pathObj[n];
this.pathObj[n] = null;
}
}
};
t.prototype.reset = function(t, e) {
this.m_row = t;
this.m_col = e;
this.removeAllBlock();
};
t.prototype.removeAllBlock = function() {
this.pathObj = {};
};
t.prototype.isBlock = function(t) {
var e = t.y + "*" + t.x;
return null != this.pathObj[e];
};
t.prototype.sortPath = function(t, e) {
for (var o = 0, i = this.m_line; o < i.length; o++) {
var n = i[o];
if (n && !n.check) {
if (t.equal(n.pos1)) {
n.check = !0;
e && this.path.push(cc.v2(t.row, t.col));
this.path.push(cc.v2(n.pos2.row, n.pos2.col));
this.sortPath(n.pos2, !1);
break;
}
if (t.equal(n.pos2)) {
n.check = !0;
e && this.path.push(cc.v2(t.row, t.col));
this.path.push(cc.v2(n.pos1.row, n.pos1.col));
this.sortPath(n.pos1, !1);
break;
}
}
}
};
t.prototype.search = function(t, e) {
this.startPoint = t;
this.endPoint = e;
this.m_line = [];
this.checkLink(new n(this.startPoint.x, this.startPoint.y), new n(this.endPoint.x, this.endPoint.y));
this.path = [];
this.sortPath(new n(this.startPoint.x, this.startPoint.y), !0);
return this.path;
};
t.prototype.isDirectLink = function(t, e) {
if (t.row == e.row && t.col == e.col) {
this.m_line = [];
return !1;
}
if (t.row == e.row) {
for (var o = (s = t.col - e.col) / Math.abs(s), i = t.row, n = 1; n < Math.abs(s); ++n) {
var a = t.col - n * o;
if (null != this.pathObj[a + "*" + i]) {
this.m_line = [];
return !1;
}
}
this.m_line.push(new r(t, e));
return !0;
}
if (t.col == e.col) {
var s;
for (o = (s = t.row - e.row) / Math.abs(s), a = t.col, n = 1; n < Math.abs(s); ++n) {
i = t.row - n * o;
if (null != this.pathObj[a + "*" + i]) {
this.m_line = [];
return !1;
}
}
this.m_line.push(new r(t, e));
return !0;
}
return !1;
};
t.prototype.isOneCornerLink = function(t, e) {
if (t.row == e.row && t.col == e.col) {
this.m_line = [];
return !1;
}
var o = new n(t.row, e.col);
if (this.isDirectLink(t, o) && this.isDirectLink(o, e) && null == this.pathObj[o.col + "*" + o.row]) return !0;
this.m_line = [];
var i = new n(e.row, t.col);
if (this.isDirectLink(t, i) && this.isDirectLink(i, e) && null == this.pathObj[i.col + "*" + i.row]) return !0;
this.m_line = [];
return !1;
};
t.prototype.isTwoCornerLink = function(t, e) {
var o = this, i = function(t, e, i, n) {
o.m_line = [];
o.m_line.push(new r(t, e));
o.m_line.push(new r(e, i));
o.m_line.push(new r(i, n));
};
if (t.row == e.row && t.col == e.col) {
this.m_line = [];
return !1;
}
if (t.row == e.row && (0 == t.row || t.row == this.m_row - 1)) {
var a = -1;
0 == t.row && (a = 1);
i(t, new n(t.row - a, t.col), new n(t.row - a, e.col), e);
return !0;
}
this.m_line = [];
if (t.col == e.col && (0 == t.col || t.col == this.m_col - 1)) {
a = -1;
0 == t.col && (a = 1);
i(t, new n(t.row, t.col - a), new n(e.row, e.col - a), e);
return !0;
}
this.m_line = [];
for (var s = t.row + 1; s <= this.m_row; ++s) if (s == this.m_row) {
if (s - 1 == t.row && null == this.pathObj[e.col + "*" + (s - 1)]) {
if (this.isDirectLink(e, new n(s - 1, e.col))) {
this.m_line = [];
i(t, new n(s, t.col), new n(s, e.col), e);
return !0;
}
}
this.m_line = [];
if (s - 1 == e.row && null == this.pathObj[e.col + "*" + (s - 1)]) {
if (this.isDirectLink(t, new n(s - 1, t.col))) {
this.m_line = [];
i(t, new n(s, t.col), new n(s, e.col), e);
return !0;
}
}
this.m_line = [];
if (null != this.pathObj[t.col + "*" + (s - 1)] || null != this.pathObj[e.col + "*" + (s - 1)]) break;
var c = this.isDirectLink(t, new n(s - 1, t.col)), l = this.isDirectLink(e, new n(s - 1, e.col));
if (c && l) {
this.m_line = [];
i(t, new n(s, t.col), new n(s, e.col), e);
return !0;
}
} else {
this.m_line = [];
var p = new n(s, t.col);
if (null != this.pathObj[p.col + "*" + p.row]) break;
c = this.isOneCornerLink(p, e), l = this.isDirectLink(t, p);
if (c && l) return !0;
}
this.m_line = [];
for (s = t.row - 1; s >= -1; --s) if (-1 == s) {
if (0 == t.row && null == this.pathObj[e.col + "*0"]) {
if (this.isDirectLink(e, new n(0, e.col))) {
this.m_line = [];
i(t, new n(s, t.col), new n(s, e.col), e);
return !0;
}
}
this.m_line = [];
if (0 == e.row && null == this.pathObj[t.col + "*0"]) {
if (this.isDirectLink(t, new n(0, t.col))) {
this.m_line = [];
i(t, new n(s, t.col), new n(s, e.col), e);
return !0;
}
}
this.m_line = [];
if (this.pathObj[t.col + "*0"] || null != this.pathObj[e.col + "*0"]) break;
c = this.isDirectLink(t, new n(0, t.col)), l = this.isDirectLink(e, new n(0, e.col));
if (c && l) {
this.m_line = [];
i(t, new n(s, t.col), new n(s, e.col), e);
return !0;
}
} else {
this.m_line = [];
p = new n(s, t.col);
if (null != this.pathObj[p.col + "*" + p.row]) break;
c = this.isOneCornerLink(p, e), l = this.isDirectLink(t, p);
if (c && l) return !0;
}
this.m_line = [];
for (var h = t.col - 1; h >= -1; --h) if (-1 == h) {
if (0 == t.col && null == this.pathObj["0*" + e.row]) {
if (this.isDirectLink(e, new n(e.row, 0))) {
this.m_line = [];
i(t, new n(t.row, h), new n(e.row, h), e);
return !0;
}
}
this.m_line = [];
if (0 == e.col && null == this.pathObj["0*" + t.row]) {
if (this.isDirectLink(t, new n(t.row, 0))) {
this.m_line = [];
i(t, new n(t.row, h), new n(e.row, h), e);
return !0;
}
}
this.m_line = [];
if (null != this.pathObj["0*" + t.row] || null != this.pathObj["0*" + e.row]) break;
c = this.isDirectLink(t, new n(t.row, 0)), l = this.isDirectLink(e, new n(e.row, 0));
if (c && l) {
this.m_line = [];
i(t, new n(t.row, h), new n(e.row, h), e);
return !0;
}
} else {
this.m_line = [];
p = new n(t.row, h);
if (null != this.pathObj[p.col + "*" + p.row]) break;
c = this.isOneCornerLink(p, e), l = this.isDirectLink(t, p);
if (c && l) return !0;
}
this.m_line = [];
for (h = t.col + 1; h <= this.m_col; ++h) if (h == this.m_col) {
if (this.m_col - 1 == t.col && null == this.pathObj[h - 1 + "*" + e.row]) {
if (this.isDirectLink(e, new n(e.row, h - 1))) {
this.m_line = [];
i(t, new n(t.row, h), new n(e.row, h), e);
return !0;
}
}
this.m_line = [];
if (this.m_col - 1 == e.col && null == this.pathObj[h - 1 + "*" + t.row]) {
if (this.isDirectLink(t, new n(t.row, h - 1))) {
this.m_line = [];
i(t, new n(t.row, h), new n(e.row, h), e);
return !0;
}
}
this.m_line = [];
if (null != this.pathObj[h - 1 + "*" + t.row] || null != this.pathObj[h - 1 + "*" + e.row]) break;
c = this.isDirectLink(t, new n(t.row, h - 1)), l = this.isDirectLink(e, new n(e.row, h - 1));
if (c && l) {
this.m_line = [];
i(t, new n(t.row, h), new n(e.row, h), e);
return !0;
}
} else {
this.m_line = [];
var u = (p = new n(t.row, h)).col + "*" + p.row;
if (null != this.pathObj[u]) break;
c = this.isOneCornerLink(p, e), l = this.isDirectLink(t, p);
if (c && l) return !0;
}
this.m_line = [];
return !1;
};
t.prototype.checkLink = function(t, e) {
var o = this.isDirectLink(t, e);
return o || ((o = this.isOneCornerLink(t, e)) ? o : (o = this.isTwoCornerLink(t, e)) || !1);
};
return t;
}();
o.default = i;
var n = function() {
function t(t, e) {
this.row = t;
this.col = e;
}
t.prototype.equal = function(t) {
return t.row == this.row && t.col == this.col;
};
return t;
}(), r = function() {
return function(t, e) {
this.check = !1;
this.pos1 = t;
this.pos2 = e;
};
}();
cc._RF.pop();
}, {} ],
linkLine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e1e88GJx05H2JDLWPXxIzJv", "linkLine");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.particle = null;
return e;
}
e.prototype.onLoad = function() {
this.particle.stopSystem();
};
e.prototype.setAni = function(t, e, o) {
var i = this;
cc.tween(this.node).delay(t).call(function() {
i.particle.resetSystem();
}).to(e, {
width: 0
}).call(function() {
i.particle.stopSystem();
}).delay(2).call(function() {
o.put(i.node);
}).start();
};
n([ s({
type: cc.ParticleSystem,
displayName: "粒子"
}) ], e.prototype, "particle", void 0);
return e = n([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
messageBox: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e3f7c7ZBY5DvLqGgimwTWgl", "messageBox");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../addUI"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = null;
e.closeBtn = null;
e.okBtn = null;
return e;
}
e;
e.prototype.okClick = function() {};
e.prototype.onCancel = function() {};
e.prototype.init = function() {};
e.prototype.setText = function(t) {
this.text.string = t;
};
e.prototype.setTextFlow = function(t) {
this.text.string = t;
};
e.prototype.setTitleText = function(t) {
this.tishiTitle.string = t;
};
e.prototype.setCloseBtnActive = function(t) {
this.closeBtn.node.active = t;
};
e.messageBoxTime = function(t, e) {
r.default.addUI("messageBox", function(o) {
o.setText(t);
o.okBtn.node.active = !1;
o.closeBtn.node.active = !1;
o.scheduleOnce(function() {
o.node.removeFromParent(!0);
o.node.destroy();
}, e);
});
};
e.messageBox = function(t, e, o, i, n) {
void 0 === e && (e = null);
void 0 === o && (o = null);
void 0 === i && (i = null);
void 0 === n && (n = !0);
r.default.addUI("messageBox", function(r) {
r.setText(t);
r.setCloseBtnActive(n);
e && (r.okClick = e);
o && (r.onCancel = o);
i && i(r);
}, "messageBox");
};
e.messageBox2 = function(t, e, o, i, n) {
void 0 === e && (e = null);
void 0 === o && (o = null);
void 0 === i && (i = null);
void 0 === n && (n = !0);
r.default.addUI("messageBox2", function(r) {
r.setText(t);
r.setCloseBtnActive(n);
e && (r.okClick = e);
o && (r.onCancel = o);
i && i(r);
}, "messageBox");
};
e.messageBoxDebug = function(t) {
0;
};
n([ c({
type: cc.Label,
displayName: "内容文字",
tooltip: "内容文字"
}) ], e.prototype, "text", void 0);
n([ c({
type: cc.Button,
displayName: "关闭按钮"
}) ], e.prototype, "closeBtn", void 0);
n([ c({
type: cc.Button,
displayName: "确认"
}) ], e.prototype, "okBtn", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../addUI": "addUI"
} ],
nodeOperation: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bbf39oejqVNcJ8abM7AjQOu", "nodeOperation");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./BlockInput"), a = cc._decorator, s = a.ccclass, c = a.property, l = a.menu, p = a.requireComponent, h = a.executeInEditMode, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._onActivePlayClip = null;
e._onInactivePlayClip = null;
e._ani = null;
return e;
}
o = e;
Object.defineProperty(e.prototype, "onActivePlayClip", {
get: function() {
return this._onActivePlayClip;
},
set: function(t) {
if (t) {
this._onActivePlayClip = t;
this._ani.addClip(this.onActivePlayClip);
} else {
this._ani.removeClip(this.onActivePlayClip);
this._onActivePlayClip = null;
}
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "onInactivePlayClip", {
get: function() {
return this._onInactivePlayClip;
},
set: function(t) {
if (t) {
this._onInactivePlayClip = t;
this._ani.addClip(this.onInactivePlayClip);
} else {
this._ani.removeClip(this.onInactivePlayClip);
this._onInactivePlayClip = null;
}
},
enumerable: !0,
configurable: !0
});
e.prototype.start = function() {
this._ani = this.getComponent(cc.Animation);
};
e.prototype.onEnable = function() {
if (this.onActivePlayClip && this._ani) {
this._ani.play(this.onActivePlayClip.name);
this._ani.setCurrentTime(0, this.onActivePlayClip.name);
this._ani.sample(this.onActivePlayClip.name);
}
};
e.removeNode = function(t) {
t.removeFromParent(!0);
t.destroy();
};
e.prototype.closeSelf = function(t) {
var e = this;
void 0 === t && (t = null);
if (this.onInactivePlayClip && this._ani) {
r.blockInput();
this._ani.once(cc.Animation.EventType.FINISHED, function(i, n) {
o.removeNode(e.node);
t && t();
r.unblockInput();
});
this._ani.play(this.onInactivePlayClip.name);
} else {
o.removeNode(this.node);
t && t();
}
};
e.prototype.关闭 = function() {
this.closeSelf();
};
e.prototype.hideSelf = function(t) {
var e = this;
void 0 === t && (t = null);
if (this.onInactivePlayClip && this._ani) {
r.blockInput();
this._ani.once(cc.Animation.EventType.FINISHED, function(o, i) {
e.node.active = !1;
t && t();
r.unblockInput();
});
this._ani.play(this.onInactivePlayClip.name);
} else {
this.node.active = !1;
t && t();
}
};
e.prototype.隐藏 = function() {
this.hideSelf();
};
e.prototype.showSelf = function() {
this.node.active = !0;
};
e.prototype.显示 = function() {
this.showSelf();
};
var o;
n([ c({
type: cc.AnimationClip,
displayName: "显示时播放动画"
}) ], e.prototype, "onActivePlayClip", null);
n([ c({
serializable: !0
}) ], e.prototype, "_onActivePlayClip", void 0);
n([ c({
type: cc.AnimationClip,
displayName: "隐藏时播放动画"
}) ], e.prototype, "onInactivePlayClip", null);
n([ c({
serializable: !0
}) ], e.prototype, "_onInactivePlayClip", void 0);
n([ c({
serializable: !0
}) ], e.prototype, "_ani", void 0);
return e = o = n([ s, p(cc.Animation), h(), l("扩展组件/UI操作及动画") ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./BlockInput": "BlockInput"
} ],
playAnimation: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9e61b45PhRApYlArKfaqiIa", "playAnimation");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = (r.requireComponent, r.menu), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._ani = null;
e.defaultClipName = "";
return e;
}
Object.defineProperty(e.prototype, "ani", {
get: function() {
return this._ani;
},
set: function(t) {
this._ani = t;
t && t.defaultClip && (this.defaultClipName = t.defaultClip.name);
},
enumerable: !0,
configurable: !0
});
e.prototype.start = function() {
this.ani || (this.ani = this.getComponent(cc.Animation));
};
e.prototype.play = function(t) {
void 0 === t && (t = null);
return this.ani.play(t || this.defaultClipName);
};
e.prototype.播放动画 = function(t, e) {
return this.ani.play(e || this.defaultClipName);
};
e.prototype.sample = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = null);
if (this.ani) {
e || (e = this.defaultClipName);
this.ani.setCurrentTime(t, e);
this.ani.sample(e);
}
};
e.prototype.isPlaying = function() {
if (this.ani && this.ani.currentClip) {
var t = this.ani.getAnimationState(this.ani.currentClip.name);
if (t) return t.isPlaying;
}
return !1;
};
n([ s({
type: cc.Animation,
displayName: "动画播放器"
}) ], e.prototype, "ani", null);
n([ s({
serializable: !0
}) ], e.prototype, "_ani", void 0);
n([ s({
displayName: "默认播放动画名称"
}) ], e.prototype, "defaultClipName", void 0);
return e = n([ a, c("扩展组件/播放动画") ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
playSound: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2af5bzdoxpKFINRRTJ+Jsxt", "playSound");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.audioClip = [];
e.defaultAudioClip = null;
return e;
}
o = e;
e.init = function() {
var t = cc.sys.localStorage.getItem("musicVolume"), e = cc.sys.localStorage.getItem("soundVolume");
o.musicVolume = t ? Number(t) : 1;
o.soundVolume = e ? Number(e) : 1;
cc.audioEngine.setEffectsVolume(o.soundVolume);
cc.audioEngine.setMusicVolume(o.musicVolume);
var i = cc.sys.localStorage.getItem("musicIsOpen"), n = cc.sys.localStorage.getItem("soundIsOpen");
i && "false" == i && o.musicOpened(!1);
n && "false" == n && o.soundOpened(!1);
};
e.prototype.播放音效 = function(t, e) {
e || !this.defaultAudioClip ? e && this.audioClip && this.audioClip.length && o.playSound(this.audioClip[Number(e)]) : o.playSound(this.defaultAudioClip);
};
e.playSound = function(t) {
return t ? cc.audioEngine.playEffect(t, !1) : null;
};
e.stopSound = function(t) {
cc.audioEngine.stopEffect(t);
};
e.playMusic = function(t, e) {
void 0 === e && (e = !0);
return t ? cc.audioEngine.playMusic(t, e) : null;
};
e.stopMusic = function() {
cc.audioEngine.stopMusic();
};
e.resumeMusic = function() {
cc.audioEngine.resumeMusic();
};
e.pauseMusic = function() {
cc.audioEngine.pauseMusic();
};
e.playSoundByPath = function(t, e) {
void 0 === e && (e = "");
var i = "/sounds/" + e + t;
cc.loader.loadRes(i, cc.AudioClip, function(t, e) {
t ? console.error(t.message) : e && o.playSound(e);
});
};
e.setMusicVolume = function(t) {
if (o.musicVolume != t) {
o.musicVolume = t;
cc.sys.localStorage.setItem("musicVolume", o.musicVolume.toString());
cc.audioEngine.setMusicVolume(o.musicVolume);
}
};
e.musicOpened = function(t) {
if (o.musicIsOpen != t) {
o.musicIsOpen = t;
cc.sys.localStorage.setItem("musicIsOpen", o.musicIsOpen.toString());
cc.audioEngine.setMusicVolume(t ? o.musicVolume : 0);
}
};
e.setSoundVolume = function(t) {
if (o.soundVolume != t) {
o.soundVolume = t;
cc.sys.localStorage.setItem("soundVolume", o.soundVolume.toString());
cc.audioEngine.setEffectsVolume(o.soundVolume);
}
};
e.soundOpened = function(t) {
if (o.soundIsOpen != t) {
o.soundIsOpen = t;
cc.sys.localStorage.setItem("soundIsOpen", o.soundIsOpen.toString());
cc.audioEngine.setEffectsVolume(t ? o.soundVolume : 0);
}
};
e.getSoundVolume = function() {
return o.soundVolume;
};
e.getMusicVolume = function() {
return o.musicVolume;
};
var o;
e.musicVolume = 1;
e.soundVolume = 1;
e.musicIsOpen = !0;
e.soundIsOpen = !0;
n([ s({
type: cc.AudioClip,
displayName: "要播放的音效"
}) ], e.prototype, "audioClip", void 0);
n([ s({
type: cc.AudioClip,
displayName: "默认要播放的音效"
}) ], e.prototype, "defaultAudioClip", void 0);
return e = o = n([ a, c("声音组件/音效") ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
popBox: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "19fa4cKgU9FrY8SDb4q02O7", "popBox");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../addUI"), a = t("../nodeOperation"), s = cc._decorator, c = s.ccclass, l = s.property, p = s.requireComponent, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = null;
e.popAnimation = null;
return e;
}
e.prototype.setText = function(t) {
this.text.string = t;
};
e.prototype.onLoad = function() {
this.popAnimation || (this.popAnimation = this.getComponent(cc.Animation));
this.popAnimation.on(cc.Animation.EventType.FINISHED, this.finishCallback, this);
};
e.prototype.finishCallback = function() {
a.default.removeNode(this.node);
};
e.popBox = function(t) {
r.default.addUI("popBox", function(e) {
e.setText(t);
});
};
n([ l({
type: cc.Label,
displayName: "提示文字"
}) ], e.prototype, "text", void 0);
n([ l({
type: cc.Animation,
displayName: "popbox动画"
}) ], e.prototype, "popAnimation", void 0);
return e = n([ c, p(cc.Animation) ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../addUI": "addUI",
"../nodeOperation": "nodeOperation"
} ],
pullToRefresh: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bb54cDm+P1NRb9svS3Z++QQ", "pullToRefresh");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isPullUp = !1;
e.pullDownNode = null;
e.releaseNode = null;
e.loadingNode = null;
e.scrollView = null;
e.callbackEvents = [];
e._curShowNode = null;
e._scrollMinY = 0;
return e;
}
e.prototype.start = function() {
this.pullDownNode && (this.pullDownNode.active = !1);
this.releaseNode && (this.releaseNode.active = !1);
this.loadingNode && (this.loadingNode.active = !1);
if (this.scrollView) {
var t = new cc.Component.EventHandler();
t.target = this.node;
t.component = "pullToRefresh";
t.handler = "onScrollEvent";
this.scrollView.scrollEvents.push(t);
}
};
e.prototype.setShowNode = function(t) {
if (this._curShowNode != t) {
this._curShowNode && (this._curShowNode.active = !1);
this._curShowNode = t;
if (this._curShowNode) {
this._curShowNode.active = !0;
if (this._curShowNode == this.loadingNode && this.callbackEvents && this.callbackEvents.length) for (var e = 0, o = this.callbackEvents; e < o.length; e++) {
var i = o[e];
i.emit([ i.customEventData, this ]);
}
}
}
};
e.prototype.finish = function() {
this.setShowNode(null);
this.scrollView.content.height <= this.scrollView.content.parent.height || (this.isPullUp ? this.scrollView.scrollToPercentVertical(0) : this.scrollView.scrollToPercentVertical(1));
};
e.prototype.onScrollEvent = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
if (this.isPullUp) {
if (this.scrollView.content.height <= this.scrollView.content.parent.height) return;
var o = this.scrollView.content.y - this.scrollView.content.height * this.scrollView.content.anchorY + this.scrollView.content.parent.height * this.scrollView.content.parent.anchorY;
if (this._curShowNode == this.loadingNode) {
if (this.scrollView.content.y < this._scrollMinY) {
this.scrollView.stopAutoScroll();
this.scrollView.content.y = this._scrollMinY;
}
return;
}
if (o > .001) {
if (o >= this.pullDownNode.height) {
o = this.pullDownNode.height;
if (this.scrollView.isAutoScrolling()) {
this._scrollMinY = this.loadingNode.height + this.scrollView.content.height * this.scrollView.content.anchorY - this.scrollView.content.parent.height * this.scrollView.content.parent.anchorY;
this.setShowNode(this.loadingNode);
} else this.setShowNode(this.releaseNode);
} else this.setShowNode(this.pullDownNode);
this._curShowNode && (this._curShowNode.y = o - this._curShowNode.height + this._curShowNode.height * this._curShowNode.anchorY - this._curShowNode.parent.height * this._curShowNode.parent.anchorY);
} else this.setShowNode(null);
} else {
o = this.scrollView.content.y - (1 - this.scrollView.content.anchorY) * this.scrollView.content.height - this.scrollView.content.parent.height * this.scrollView.content.parent.anchorY;
if (this._curShowNode == this.loadingNode) {
if (this.scrollView.content.y > this._scrollMinY) {
this.scrollView.stopAutoScroll();
this.scrollView.content.y = this._scrollMinY;
}
return;
}
if (o < -.001) {
if (o <= -this.pullDownNode.height) {
o = -this.pullDownNode.height;
if (this.scrollView.isAutoScrolling()) {
this._scrollMinY = -this.pullDownNode.height + (1 - this.scrollView.content.anchorY) * this.scrollView.content.height + this.scrollView.content.parent.height * this.scrollView.content.parent.anchorY;
this.setShowNode(this.loadingNode);
} else this.setShowNode(this.releaseNode);
} else this.setShowNode(this.pullDownNode);
this._curShowNode && (this._curShowNode.y = this._curShowNode.parent.height + o + (1 - this._curShowNode.anchorY) * this._curShowNode.height - this._curShowNode.parent.height * this._curShowNode.parent.anchorY);
} else this.setShowNode(null);
}
};
n([ s({
displayName: "是否上拉",
tooltip: "是否是上拉刷新（如果需要同时满足上拉和下拉刷新，请分别使用两个组件）"
}) ], e.prototype, "isPullUp", void 0);
n([ s({
type: cc.Node,
displayName: "下拉节点",
tooltip: "下拉时显示的节点"
}) ], e.prototype, "pullDownNode", void 0);
n([ s({
type: cc.Node,
displayName: "释放节点",
tooltip: "释放时显示的节点"
}) ], e.prototype, "releaseNode", void 0);
n([ s({
type: cc.Node,
displayName: "加载节点",
tooltip: "加载时显示的节点"
}) ], e.prototype, "loadingNode", void 0);
n([ s({
type: cc.ScrollView,
displayName: "滚动视图",
tooltip: "滚动视图"
}) ], e.prototype, "scrollView", void 0);
n([ s({
type: cc.Component.EventHandler,
displayName: "刷新事件",
tooltip: "下拉刷新的回调事件"
}) ], e.prototype, "callbackEvents", void 0);
return e = n([ a, c("扩展组件/下拉刷新") ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
scoreAni: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "873a9VsKpdPGruCS2LXQo8a", "scoreAni");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scoreImg = null;
e.particle = null;
return e;
}
e.prototype.onLoad = function() {
this.particle && this.particle.stopSystem();
};
e.prototype.setPos = function(t, e) {
this.node.x = t;
this.node.y = e;
};
e.prototype.moveToTarget = function(t, e, o, i) {
var n = this;
void 0 === o && (o = null);
void 0 === i && (i = null);
this.scoreImg.node.active = !0;
this.node.scale = 0;
cc.tween(this.node).to(.25, {
scale: 1
}).delay(.25 + t).call(function() {
n.particle && n.particle.resetSystem();
}).to(.75, {
x: e.x,
y: e.y
}, {
easing: "sineOut"
}).call(function() {
o && o(n);
n.particle && n.particle.stopSystem();
n.scoreImg.node.active = !1;
}).delay(.5).call(function() {
i && i(n);
}).start();
};
n([ s({
type: cc.Sprite,
displayName: "分数图标"
}) ], e.prototype, "scoreImg", void 0);
n([ s({
type: cc.ParticleSystem,
displayName: "粒子特效"
}) ], e.prototype, "particle", void 0);
return e = n([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
setting: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5b3b7/KrdhBHpOaR8SwVr6e", "setting");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./gameAudioClip"), a = t("../../commonLib/component/sliderEX"), s = t("./gameMain"), c = cc._decorator, l = c.ccclass, p = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.musicSlider = null;
e.soundSlider = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
this.musicSlider.progress = o.musicVolume;
this.soundSlider.progress = o.soundVolume;
};
e.prototype.onEnable = function() {
s.default.instance.pauseGame();
};
e.prototype.onDisable = function() {
s.default.instance.resumeGame();
};
e.prototype.设置音乐 = function() {
o.setMusicVolume(this.musicSlider.progress);
};
e.prototype.设置音效 = function() {
o.setSoundVolume(this.soundSlider.progress);
};
e.prototype.播放声效 = function() {
r.default.playBtnClick();
};
e.initVolume = function() {
var t = cc.sys.localStorage.getItem("musicVolume"), e = cc.sys.localStorage.getItem("soundVolume");
o.musicVolume = t ? Number(t) : 1;
o.soundVolume = e ? Number(e) : 1;
cc.audioEngine.setEffectsVolume(o.soundVolume);
cc.audioEngine.setMusicVolume(o.musicVolume);
};
e.setMusicVolume = function(t) {
if (o.musicVolume != t) {
o.musicVolume = t;
cc.sys.localStorage.setItem("musicVolume", o.musicVolume.toString());
cc.audioEngine.setMusicVolume(o.musicVolume);
}
};
e.setSoundVolume = function(t) {
if (o.soundVolume != t) {
o.soundVolume = t;
cc.sys.localStorage.setItem("soundVolume", o.soundVolume.toString());
cc.audioEngine.setEffectsVolume(o.soundVolume);
}
};
var o;
e.musicVolume = 1;
e.soundVolume = 1;
n([ p({
type: a.default,
displayName: "音乐"
}) ], e.prototype, "musicSlider", void 0);
n([ p({
type: a.default,
displayName: "音效"
}) ], e.prototype, "soundSlider", void 0);
return e = o = n([ l ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../commonLib/component/sliderEX": "sliderEX",
"./gameAudioClip": "gameAudioClip",
"./gameMain": "gameMain"
} ],
settlementParameter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "485a7ZY32pKFqKuJEARkUMK", "settlementParameter");
var i = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.itemParameter = void 0;
var n = cc._decorator, r = n.ccclass, a = n.property, s = function() {
function t() {
this.baseScore40 = 150;
this.baseScore54 = 200;
this.baseScore70 = 300;
this.tip = .2;
this.lightning = .4;
this.reset = .6;
this.freeze = .8;
this.key = .9;
}
t.remoteItemParameter = null;
t.remoteThemeParameter = null;
i([ a({
displayName: "基准分数40快"
}) ], t.prototype, "baseScore40", void 0);
i([ a({
displayName: "基准分数54快"
}) ], t.prototype, "baseScore54", void 0);
i([ a({
displayName: "基准分数70快"
}) ], t.prototype, "baseScore70", void 0);
i([ a({
displayName: "查找"
}) ], t.prototype, "tip", void 0);
i([ a({
displayName: "闪电"
}) ], t.prototype, "lightning", void 0);
i([ a({
displayName: "重排"
}) ], t.prototype, "reset", void 0);
i([ a({
displayName: "冻结"
}) ], t.prototype, "freeze", void 0);
i([ a({
displayName: "钥匙"
}) ], t.prototype, "key", void 0);
return t = i([ r("itemParameter") ], t);
}();
o.itemParameter = s;
cc._RF.pop();
}, {} ],
settlement: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b79822RUTJC0aWeho6ilynk", "settlement");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../commonLib/component/nodeOperation"), a = t("./settlementParameter"), s = t("../../commonLib/component/playAnimation"), c = t("../../commonLib/lib/gameLib"), l = t("./advertising"), p = t("./gameAudioClip"), h = t("./gameMain"), u = t("./gameData"), d = t("../../commonLib/component/addUI"), f = t("../../commonLib/lib/ReportLib"), m = cc._decorator, y = m.ccclass, g = m.property, v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemParameter = null;
e.themeProbability = [];
e.boxAward = [];
e.homeBtn = null;
e.starScore = null;
e.timeScore = null;
e.totalScoreLab = null;
e.tipScore = null;
e.tipMark = null;
e.resetScore = null;
e.resetMark = null;
e.lightningScore = null;
e.lightningMark = null;
e.keyScore = null;
e.keyMark = null;
e.freezeScore = null;
e.freezeMark = null;
e.nextLevelBtn = null;
e.noAdvertisingBtn = null;
e.advertisingBtn = null;
e.openBoxAni = null;
e.itemSpriteFrames = [];
e.nodeOperation = null;
e.addUI = null;
e.nextlevelCallback = null;
e.tipNeedScore = 200;
e.lightningNeedScore = 200;
e.resetNeedScore = 200;
e.freezeNeedScore = 200;
e.keyNeedScore = 200;
e.totalScore = 0;
e.goHomeCallback = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeOperation = this.getComponent(r.default);
this.addUI = this.getComponent(d.default);
this.nextLevelBtn.node.active = !1;
};
e.prototype.onEnable = function() {
if (a.itemParameter.remoteThemeParameter) {
this.themeProbability[0] = a.itemParameter.remoteThemeParameter.redbag;
this.themeProbability[1] = a.itemParameter.remoteThemeParameter.theme1;
this.themeProbability[2] = a.itemParameter.remoteThemeParameter.theme2;
this.themeProbability[3] = a.itemParameter.remoteThemeParameter.theme3;
this.themeProbability[4] = a.itemParameter.remoteThemeParameter.theme4;
this.themeProbability[5] = a.itemParameter.remoteThemeParameter.theme5;
this.themeProbability[6] = a.itemParameter.remoteThemeParameter.prop;
}
if (a.itemParameter.remoteItemParameter) {
this.itemParameter.tip = a.itemParameter.remoteItemParameter.search;
this.itemParameter.lightning = a.itemParameter.remoteItemParameter.lightning;
this.itemParameter.reset = a.itemParameter.remoteItemParameter.derangement;
this.itemParameter.freeze = a.itemParameter.remoteItemParameter.frozen;
this.itemParameter.key = a.itemParameter.remoteItemParameter.key;
}
};
e.prototype.setNextlevelCallback = function(t) {
this.nextlevelCallback = t;
};
e.prototype.setScore = function(t, e, o) {
e = Math.ceil(e);
this.starScore.string = t.toString();
this.timeScore.string = e.toString();
this.totalScore = t + e;
this.totalScoreLab.string = this.totalScore.toString();
var i = this.itemParameter.baseScore40;
o >= 70 ? i = this.itemParameter.baseScore70 : o >= 54 ? i = this.itemParameter.baseScore54 : o >= 40 && (i = this.itemParameter.baseScore40);
this.tipNeedScore = Math.ceil(i * this.itemParameter.tip);
this.tipScore.string = this.tipNeedScore.toString();
this.lightningNeedScore = Math.ceil(i * this.itemParameter.lightning);
this.lightningScore.string = this.lightningNeedScore.toString();
this.resetNeedScore = Math.ceil(i * this.itemParameter.reset);
this.resetScore.string = this.resetNeedScore.toString();
this.freezeNeedScore = Math.ceil(i * this.itemParameter.freeze);
this.freezeScore.string = this.freezeNeedScore.toString();
this.keyNeedScore = Math.ceil(i * this.itemParameter.key);
this.keyScore.string = this.keyNeedScore.toString();
this.tipMark.node.active = !1;
this.lightningMark.node.active = !1;
this.resetMark.node.active = !1;
this.freezeMark.node.active = !1;
this.keyMark.node.active = !1;
};
e.prototype.show = function() {
var t = this;
this.homeBtn.node.active = !1;
this.nextLevelBtn.node.active = !1;
this.node.active = !0;
this.scheduleOnce(function() {
t.playScoreAward();
}, .5);
};
e.prototype.showNextLevelBtn = function() {
if (!this.openBoxAni.isPlaying()) {
f.reportLib.stageGameFinish(0, u.gameData.curLevel, 0, u.curLevelProp.getAddProp(), u.curLevelProp.getUseProp(), this.totalScore, 1, u.gameData.isFirst ? 1 : 0);
u.curLevelProp.reset();
++u.gameData.curLevel;
u.gameData.isFirst = !0;
u.saveGameData();
this.nextLevelBtn.node.scale = 0;
this.nextLevelBtn.node.active = !0;
cc.tween(this.nextLevelBtn.node).delay(.25).to(.25, {
scale: 1
}, {
easing: "backOut"
}).start();
this.homeBtn.node.scale = 0;
this.homeBtn.node.active = !0;
cc.tween(this.homeBtn.node).delay(.25).to(.25, {
scale: 1
}, {
easing: "backOut"
}).start();
}
};
e.prototype.playScoreAward = function() {
var t = this, e = [ this.tipMark, this.lightningMark, this.resetMark, this.freezeMark, this.keyMark ], o = [ this.tipNeedScore, this.lightningNeedScore, this.resetNeedScore, this.freezeNeedScore, this.keyNeedScore ], i = function(n) {
var r = e[n], a = o[n];
if (r && t.totalScore >= a) {
switch (n) {
case 0:
++u.gameData.curTipCount;
break;

case 1:
++u.gameData.curLightningCount;
break;

case 2:
++u.gameData.curResetCount;
break;

case 3:
++u.gameData.curFreezeTimeCount;
}
u.curLevelProp.addProp(n);
r.node.scale = 0;
r.node.active = !0;
cc.tween(r.node).delay(.15).call(function() {
p.default.playReceiveItem();
}).to(.15, {
scale: 1
}, {
easing: "backOut"
}).call(function() {
if (r == t.keyMark) {
for (var e = 0; e < t.boxAward.length - 1; ++e) t.setOpenBoxAward(e);
var o = t.openBoxAni.play();
t.showRedPackets(o.duration + .25);
} else i(n + 1);
}).start();
} else t.showRedPackets(.25);
};
i(0);
};
e.prototype.showRedPackets = function(t) {
var e = this;
this.scheduleOnce(function() {
e.addUI.addUI(null, function(t) {
var o = t.onDestroy;
t.onDestroy = function() {
o && o();
e.showNextLevelBtn();
};
}, "RedPackets");
}, t);
};
e.prototype.setOpenBoxAward = function(t) {
var e = this, o = function() {
var o = e.boxAward[t].node.width, i = e.boxAward[t].node.height, n = h.default.instance.createComboAward();
switch (n.awardID) {
case 0:
++u.gameData.curTipCount;
break;

case 1:
++u.gameData.curLightningCount;
break;

case 2:
++u.gameData.curResetCount;
break;

case 3:
++u.gameData.curFreezeTimeCount;
}
u.curLevelProp.addProp(n.awardID);
e.boxAward[t].spriteFrame = e.itemSpriteFrames[n.awardID];
e.boxAward[t].node.width = o;
e.boxAward[t].node.height = i;
}, i = this.randomTheme();
if (0 == i) o(); else if (6 == i) o(); else {
var n = this.randomThemeItem(i);
if (n >= 0) {
u.gameData.archive[i] || (u.gameData.archive[i] = []);
u.gameData.archive[i].push(n);
u.setGridIcon(n, this.boxAward[t], i);
} else o();
}
};
e.prototype.点击下一局 = function() {
var t = this;
this.nodeOperation.closeSelf(function() {
t.nextlevelCallback && t.nextlevelCallback();
});
};
e.prototype.randomThemeItem = function(t) {
for (var e = [], o = 0; o < 20; ++o) e.push(o);
if (u.gameData.archive[t]) for (var i = 0, n = u.gameData.archive[t]; i < n.length; i++) {
var r = n[i];
for (o = 0; o < e.length; ++o) if (r == e[o]) {
e.splice(o, 1);
break;
}
}
return e.length ? e[c.gameLib.GetRandomNum(0, e.length - 1)] : -1;
};
e.prototype.randomTheme = function() {
for (var t = 0, e = 0, o = [], i = 0; i < this.themeProbability.length; ++i) (0 == i || !u.gameData.archive[i] || u.gameData.archive[i] && u.gameData.archive[i].length < 20) && o.push({
id: i,
pro: this.themeProbability[i]
});
for (var n = 0, r = o; n < r.length; n++) {
e += r[n].pro;
}
var a = e * Math.random(), s = 0;
for (i = 0; i < o.length; ++i) if (a <= (s += o[i].pro)) {
t = o[i].id;
break;
}
return t;
};
e.prototype.setGoHomeCallback = function(t) {
this.goHomeCallback = t;
};
e.prototype.播放广告 = function() {
var t = this;
l.default.play(function() {
var e = t.boxAward.length - 1;
t.setOpenBoxAward(e);
t.openBoxAni.play("开箱奖励2");
t.advertisingBtn.node.active = !1;
});
};
e.prototype.回到主页 = function() {
var t = this;
this.nodeOperation.closeSelf(function() {
t.goHomeCallback && t.goHomeCallback();
});
};
n([ g({
type: a.itemParameter,
displayName: "道具所需分数"
}) ], e.prototype, "itemParameter", void 0);
n([ g({
type: cc.Float,
displayName: "主题概率"
}) ], e.prototype, "themeProbability", void 0);
n([ g({
type: cc.Sprite,
displayName: "开箱奖励"
}) ], e.prototype, "boxAward", void 0);
n([ g({
type: cc.Button,
displayName: "主页按钮"
}) ], e.prototype, "homeBtn", void 0);
n([ g({
type: cc.Label,
displayName: "星星分数"
}) ], e.prototype, "starScore", void 0);
n([ g({
type: cc.Label,
displayName: "时间分数"
}) ], e.prototype, "timeScore", void 0);
n([ g({
type: cc.Label,
displayName: "总分数"
}) ], e.prototype, "totalScoreLab", void 0);
n([ g({
type: cc.Label,
displayName: "提示分"
}) ], e.prototype, "tipScore", void 0);
n([ g({
type: cc.Sprite,
displayName: "提示对勾"
}) ], e.prototype, "tipMark", void 0);
n([ g({
type: cc.Label,
displayName: "重排分"
}) ], e.prototype, "resetScore", void 0);
n([ g({
type: cc.Sprite,
displayName: "重排对勾"
}) ], e.prototype, "resetMark", void 0);
n([ g({
type: cc.Label,
displayName: "闪电分"
}) ], e.prototype, "lightningScore", void 0);
n([ g({
type: cc.Sprite,
displayName: "闪电对勾"
}) ], e.prototype, "lightningMark", void 0);
n([ g({
type: cc.Label,
displayName: "钥匙分"
}) ], e.prototype, "keyScore", void 0);
n([ g({
type: cc.Sprite,
displayName: "钥匙对勾"
}) ], e.prototype, "keyMark", void 0);
n([ g({
type: cc.Label,
displayName: "冰冻分"
}) ], e.prototype, "freezeScore", void 0);
n([ g({
type: cc.Sprite,
displayName: "冰冻对勾"
}) ], e.prototype, "freezeMark", void 0);
n([ g({
type: cc.Button,
displayName: "下一关按钮"
}) ], e.prototype, "nextLevelBtn", void 0);
n([ g({
type: cc.Button,
displayName: "不看广告按钮"
}) ], e.prototype, "noAdvertisingBtn", void 0);
n([ g({
type: cc.Button,
displayName: "看广告按钮"
}) ], e.prototype, "advertisingBtn", void 0);
n([ g({
type: s.default,
displayName: "开箱动画"
}) ], e.prototype, "openBoxAni", void 0);
n([ g({
type: cc.SpriteFrame,
displayName: "道具图标",
tooltip: "四个功能道具图标(提示，闪电，重排，冻结)"
}) ], e.prototype, "itemSpriteFrames", void 0);
return e = n([ y ], e);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../../commonLib/component/addUI": "addUI",
"../../commonLib/component/nodeOperation": "nodeOperation",
"../../commonLib/component/playAnimation": "playAnimation",
"../../commonLib/lib/ReportLib": "ReportLib",
"../../commonLib/lib/gameLib": "gameLib",
"./advertising": "advertising",
"./gameAudioClip": "gameAudioClip",
"./gameData": "gameData",
"./gameMain": "gameMain",
"./settlementParameter": "settlementParameter"
} ],
sliderEX: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "58af8cFEQJP5IZO3zhuz3mH", "sliderEX");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressSP = null;
return e;
}
e.prototype.onLoad = function() {
this.onProgress();
};
e.prototype._updateProgress = function(e) {
t.prototype._updateProgress.call(this, e);
this.onProgress();
};
e.prototype.onProgress = function() {
this.progressSP && (this.progressSP.fillRange = this.progress);
};
n([ s({
type: cc.Sprite,
displayName: "进度条"
}) ], e.prototype, "progressSP", void 0);
return e = n([ a ], e);
}(cc.Slider);
o.default = c;
cc._RF.pop();
}, {} ],
spineEvent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c48fchJEuxK/pK48HXEgEC9", "spineEvent");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.menu, l = r.requireComponent, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.callbackEvents = [];
e.skeleton = null;
e.endEventListener = null;
return e;
}
e.prototype.onLoad = function() {
this.skeleton = this.getComponent(sp.Skeleton);
this.skeleton.setEndListener(this.onEndEvent.bind(this));
};
e.prototype.onEndEvent = function() {
for (var t = 0, e = this.callbackEvents; t < e.length; t++) {
var o = e[t];
o.emit([ o.customEventData, this ]);
}
this.endEventListener && this.endEventListener(this);
};
e.prototype.setEndEventListener = function(t) {
this.endEventListener = t;
};
n([ s({
type: cc.Component.EventHandler,
displayName: "动画完成回调"
}) ], e.prototype, "callbackEvents", void 0);
return e = n([ a, l(sp.Skeleton), c("spine/事件监听") ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
subject: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "80c41hTcVZD5YV21s4RUknN", "subject");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.showClip = null;
e.ani = null;
return e;
}
e.prototype.onLoad = function() {
this.ani = this.getComponent(cc.Animation);
};
e.prototype.playShowAni = function() {
var t = this.ani.play(this.showClip.name);
this.ani.setCurrentTime(0, this.showClip.name);
this.ani.sample(this.showClip.name);
return t;
};
n([ s({
type: cc.AnimationClip,
displayName: "淡入动画"
}) ], e.prototype, "showClip", void 0);
return e = n([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
tableViewItemExample: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "03be8R7D5BNf6UAT8QcqZU5", "tableViewItemExample");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../tableViewItem"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lab = null;
return e;
}
e.prototype.onDataChange = function(t) {
this.lab && (this.lab.string = t);
};
n([ c({
type: cc.Label
}) ], e.prototype, "lab", void 0);
return e = n([ s ], e);
}(r.default);
o.default = l;
cc._RF.pop();
}, {
"../tableViewItem": "tableViewItem"
} ],
tableViewItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5f581rwpM5F9r+9pzROFLmR", "tableViewItem");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = r.requireComponent, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.aniShow = null;
e.ani = null;
e.parentTV = null;
e.itemIndex = 0;
return e;
}
e.prototype.onLoad = function() {
this.ani = this.getComponent(cc.Animation);
};
e.prototype.setParentTV = function(t) {
this.parentTV = t;
};
e.prototype.getParentTV = function() {
return this.parentTV;
};
e.prototype.playAni = function() {
if (this.ani && this.aniShow) {
this.ani.play(this.aniShow.name);
this.ani.sample(this.aniShow.name);
}
};
e.prototype.playShowAni = function() {
this.node.active = !0;
this.playAni();
};
e.prototype.onDataChange = function(t) {};
n([ s({
type: cc.AnimationClip,
displayName: "显示动画",
tooltip: "元素显示时要播放的动画"
}) ], e.prototype, "aniShow", void 0);
return e = n([ a, c(cc.Animation) ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
tableView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7b5a9fKlg5IxqmP0mdFctiL", "tableView");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./tableViewItem"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollView = null;
e.item = null;
e.itemAniGap = .25;
e.noTableView = !1;
e.itemCount = 0;
e.items = [];
e.baseItemsPos = [];
e.min = 0;
e.max = 0;
e.maxMoveLength = 0;
e.data = [];
e._nodePool = null;
return e;
}
e.prototype.setData = function(t, e) {
void 0 === e && (e = !1);
this.data = t;
this.data && this.data.length || (this.data = []);
this.unscheduleAllCallbacks();
if (this.noTableView) {
for (;this.scrollView.content.children.length; ) this._nodePool.put(this.scrollView.content.children[0]);
for (var o = 0, i = this.data; o < i.length; o++) {
var n = i[o], a = this._nodePool.get();
a || (a = cc.instantiate(this.item.node));
this.scrollView.content.addChild(a);
a.getComponent(r.default).onDataChange(n);
}
} else {
1 == this.scrollView.vertical ? this.scrollView.content.height = this.data.length * this.item.node.height : this.scrollView.content.width = this.data.length * this.item.node.width;
if (this.items) {
for (var s = 0; s < this.items.length; ++s) {
this.items[s].itemIndex = null;
this.items[s].node.active = s < this.data.length;
}
this.onScrollEvent();
}
}
if (e && this.data && this.data.length) for (s = 0; s < this.items.length && s < this.data.length; ++s) {
if ((n = this.items[s]).node.active) {
n.node.active = !1;
this.scheduleOnce(n.playShowAni.bind(n), s * this.itemAniGap);
}
}
};
e.prototype.start = function() {};
e.prototype.onDestroy = function() {
if (this._nodePool) {
this._nodePool.clear();
this._nodePool = null;
}
};
e.prototype.onLoad = function() {
if (this.noTableView) {
this._nodePool = new cc.NodePool();
this._nodePool.put(this.item.node);
} else {
this.item.node.active = !1;
this.item.node.parent = this.scrollView.content;
if (1 == this.scrollView.vertical) {
this.scrollView.content.anchorY = 1;
this.itemCount = Math.ceil(this.scrollView.node.height / this.item.node.height) + 1;
this.item.node.y = this.item.node.height - this.item.node.anchorY * this.item.node.height;
} else {
this.scrollView.content.anchorX = 0;
this.itemCount = Math.ceil(this.scrollView.node.width / this.item.node.width) + 1;
this.item.node.x = this.item.node.anchorX * this.item.node.width;
}
this.item.setParentTV(this);
this.items = [ this.item ];
this.baseItemsPos = [ this.item.node.getPosition() ];
for (var t = this.item.node.y, e = this.item.node.x, o = 1; o < this.itemCount; ++o) {
var i = cc.instantiate(this.item.node), n = i.getComponent(r.default);
i.parent = this.scrollView.content;
1 == this.scrollView.vertical ? i.y = t -= this.item.node.height : i.x = e += this.item.node.width;
this.baseItemsPos.push(i.getPosition());
this.items.push(n);
}
if (1 == this.scrollView.vertical) {
this.min = this.baseItemsPos[0].y + this.item.node.height;
this.max = this.baseItemsPos[this.baseItemsPos.length - 1].y;
} else {
this.min = this.baseItemsPos[0].x;
this.max = this.baseItemsPos[this.baseItemsPos.length - 1].x + this.item.node.width;
}
this.maxMoveLength = Math.abs(this.min - this.max);
var a = new cc.Component.EventHandler();
a.target = this.node;
a.component = "tableView";
a.handler = "onScrollEvent";
this.scrollView.scrollEvents.push(a);
if (this.data && this.data.length) {
this.setData(this.data);
this.scrollView.scrollToTop(.01);
this.scrollView.scrollToLeft(.01);
}
}
};
e.prototype.onScrollEvent = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
if (!this.noTableView) {
var o = 0;
o = 1 == this.scrollView.vertical ? this.scrollView.content.y - this.scrollView.node.anchorY * this.scrollView.node.height : this.scrollView.content.x + this.scrollView.node.anchorX * this.scrollView.node.width;
for (var i = 0; i < this.items.length; ++i) {
var n = 0, r = 0;
if (1 == this.scrollView.vertical) {
n = this.baseItemsPos[i].y + o;
r = Math.ceil((n - this.min) / this.maxMoveLength);
} else {
n = this.baseItemsPos[i].x + o + this.item.node.width;
r = Math.ceil((-n - this.min) / this.maxMoveLength);
}
var a = this.items[i], s = r * this.itemCount + i;
if (a.itemIndex != s) {
a.itemIndex = s;
1 == this.scrollView.vertical ? a.node.y = this.baseItemsPos[i].y - r * this.maxMoveLength : a.node.x = this.baseItemsPos[i].x + r * this.maxMoveLength;
a.node.active = s >= 0 && s < this.data.length;
a.node.active && a.onDataChange(this.data[s]);
}
}
}
};
n([ c({
type: cc.ScrollView,
displayName: "滚动视图",
tooltip: "滚动视图"
}) ], e.prototype, "scrollView", void 0);
n([ c({
type: r.default,
displayName: "内部ITEM",
tooltip: "内部ITEM"
}) ], e.prototype, "item", void 0);
n([ c({
displayName: "动画间隔",
tooltip: "各个元素显示动画的播放间隔"
}) ], e.prototype, "itemAniGap", void 0);
n([ c({
displayName: "不使用tableView",
tooltip: "tableView的循环利用item的功能不生效，当item宽高不相等的时候勾选此功能(注意：需要自行添加content的布局)"
}) ], e.prototype, "noTableView", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./tableViewItem": "tableViewItem"
} ],
tebleViewExample: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6bdaaxfUZlCDJz/uTFy1MvR", "tebleViewExample");
var i = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function i() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
};
}(), n = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../tableView"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tv = null;
return e;
}
e.prototype.start = function() {
if (this.tv) {
for (var t = [], e = 0; e < 100; ++e) t.push("index = " + e);
this.tv.setData(t);
}
};
n([ c({
type: r.default
}) ], e.prototype, "tv", void 0);
return e = n([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../tableView": "tableView"
} ]
}, {}, [ "AnimationEventComponent", "BlockInput", "NodeListener", "messageBox", "popBox", "adapter", "addUI", "canvasAdapter", "countDown", "dragNode", "nodeOperation", "playAnimation", "playSound", "pullToRefresh", "sliderEX", "spineEvent", "tableViewItemExample", "tebleViewExample", "tableView", "tableViewItem", "HttpLib", "LoginLib", "ReportLib", "gameLib", "Archive", "ArchiveItem", "Construct", "RedPackets", "ThemeSelect", "addItem", "advertising", "comboAward", "comboText", "cover", "gameAudioClip", "gameData", "gameMain", "gameOver", "grid", "gridManager", "level_parameter", "linkGamePathFinding", "linkLine", "BindPhoneController", "HistoryController", "HistoryTableItemComponent", "RedBagDataHelper", "StoreController", "StoreTableItemComponent", "scoreAni", "setting", "settlement", "settlementParameter", "subject" ]);