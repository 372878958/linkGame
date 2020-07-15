window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AnimationEventComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de0caS9b8ZD5pXl5YfBwk6u", "AnimationEventComponent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
    var AnimationEventHandler = function() {
      function AnimationEventHandler() {
        this.clip = null;
        this.callbackEvents = [];
      }
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u8981\u76d1\u542c\u7684\u52a8\u753b"
      }) ], AnimationEventHandler.prototype, "clip", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u8981\u56de\u8c03\u7684\u51fd\u6570"
      }) ], AnimationEventHandler.prototype, "callbackEvents", void 0);
      AnimationEventHandler = __decorate([ ccclass("AnimationEventHandler") ], AnimationEventHandler);
      return AnimationEventHandler;
    }();
    var AnimationEventComponent = function(_super) {
      __extends(AnimationEventComponent, _super);
      function AnimationEventComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.callback = [];
        _this._animation = null;
        return _this;
      }
      AnimationEventComponent.prototype.onLoad = function() {
        this._animation = this.getComponent(cc.Animation);
      };
      AnimationEventComponent.prototype.onEnable = function() {
        this._animation && this._animation.on(cc.Animation.EventType.FINISHED, this.onFinished.bind(this));
      };
      AnimationEventComponent.prototype.onDisable = function() {
        this._animation && this._animation.off(cc.Animation.EventType.FINISHED, this.onFinished.bind(this));
      };
      AnimationEventComponent.prototype.onFinished = function(eventType, aniState) {
        for (var _i = 0, _a = this.callback; _i < _a.length; _i++) {
          var v = _a[_i];
          if (v.clip && v.clip.name == aniState.name) for (var _b = 0, _c = v.callbackEvents; _b < _c.length; _b++) {
            var w = _c[_b];
            w.emit([ w.customEventData ]);
          }
        }
      };
      __decorate([ property({
        type: AnimationEventHandler,
        displayName: "\u76d1\u542c"
      }) ], AnimationEventComponent.prototype, "callback", void 0);
      AnimationEventComponent = __decorate([ ccclass, requireComponent(cc.Animation), menu("\u6269\u5c55\u7ec4\u4ef6/\u52a8\u753b\u4e8b\u4ef6") ], AnimationEventComponent);
      return AnimationEventComponent;
    }(cc.Component);
    exports.default = AnimationEventComponent;
    cc._RF.pop();
  }, {} ],
  ArchiveItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed453pA0xFPxISCZuDqkmId", "ArchiveItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gameData_1 = require("./gameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ArchiveItem = function(_super) {
      __extends(ArchiveItem, _super);
      function ArchiveItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lockImg = null;
        _this.themeIconImg = null;
        _this.themeIconName = null;
        _this.progress = null;
        _this.progressLabel = null;
        _this.icons = [];
        _this.themeIcons = [];
        _this.themeNames = [];
        _this.id = null;
        _this.viewCallback = null;
        return _this;
      }
      ArchiveItem.prototype.setData = function(id) {
        if (this.id == id) return;
        this.id = id;
        this.lockImg.node.active = true;
        this.progress.progress = 0;
        this.progressLabel.string = "(0/20)";
        var archive = gameData_1.gameData.archive[id];
        if (archive) if (archive.length >= 20) {
          this.lockImg.node.active = false;
          this.progress.progress = 1;
          this.progressLabel.string = "(20/20)";
        } else {
          this.progress.progress = archive.length / 20;
          this.progressLabel.string = "(" + archive.length + "/20)";
        }
        this.themeIconImg.spriteFrame = this.themeIcons[this.id];
        this.themeIconName.spriteFrame = this.themeNames[this.id];
        for (var i = 0; i < this.icons.length; ++i) {
          this.icons[i].node.color = cc.color(94, 40, 17, 255);
          this.icons[i].node.parent.color = this.icons[i].node.color;
          gameData_1.setGridIcon(i, this.icons[i], this.id);
        }
        if (archive) for (var _i = 0, archive_1 = archive; _i < archive_1.length; _i++) {
          var v = archive_1[_i];
          if (this.icons[v]) {
            this.icons[v].node.color = cc.Color.WHITE;
            this.icons[v].node.parent.color = this.icons[v].node.color;
          }
        }
      };
      ArchiveItem.prototype.setViewCallback = function(viewCallback) {
        this.viewCallback = viewCallback;
      };
      ArchiveItem.prototype.\u70b9\u51fb\u67e5\u770b = function() {
        this.viewCallback && this.viewCallback(this.id);
      };
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u9501\u5934\u56fe\u6807"
      }) ], ArchiveItem.prototype, "lockImg", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u4e3b\u9898\u56fe\u6807"
      }) ], ArchiveItem.prototype, "themeIconImg", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u4e3b\u9898\u540d\u79f0"
      }) ], ArchiveItem.prototype, "themeIconName", void 0);
      __decorate([ property({
        type: cc.ProgressBar,
        displayName: "\u8fdb\u5ea6\u6761"
      }) ], ArchiveItem.prototype, "progress", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u8fdb\u5ea6\u6587\u5b57"
      }) ], ArchiveItem.prototype, "progressLabel", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u6240\u6709\u56fe\u6807"
      }) ], ArchiveItem.prototype, "icons", void 0);
      ArchiveItem = __decorate([ ccclass ], ArchiveItem);
      return ArchiveItem;
    }(cc.Component);
    exports.default = ArchiveItem;
    cc._RF.pop();
  }, {
    "./gameData": "gameData"
  } ],
  Archive: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fffbOSrNlDf77mYC3V4HpJ", "Archive");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ArchiveItem_1 = require("./ArchiveItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Archive = function(_super) {
      __extends(Archive, _super);
      function Archive() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.items = [];
        _this.themeIcons = [];
        _this.themeNames = [];
        _this.viewItem = null;
        _this.scrollView = null;
        return _this;
      }
      Archive.prototype.onLoad = function() {
        this.viewItem.themeIcons = this.themeIcons;
        this.viewItem.themeNames = this.themeNames;
        this.viewItem.node.active = false;
        for (var i = 0; i < this.items.length; ++i) {
          this.items[i].themeIcons = this.themeIcons;
          this.items[i].themeNames = this.themeNames;
          this.items[i].setData(i);
          this.items[i].setViewCallback(this.onViewItem.bind(this));
        }
      };
      Archive.prototype.onViewItem = function(id) {
        this.viewItem.setData(id);
        this.viewItem.node.active = true;
        this.scrollView.node.active = false;
      };
      Archive.prototype.\u5173\u95ed\u67e5\u770b\u4e3b\u9898 = function() {
        this.viewItem.node.active = false;
        this.scrollView.node.active = true;
      };
      __decorate([ property({
        type: ArchiveItem_1.default,
        displayName: "\u56fe\u9274\u4e3b\u9898Item"
      }) ], Archive.prototype, "items", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u4e3b\u9898\u56fe\u6807"
      }) ], Archive.prototype, "themeIcons", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u4e3b\u9898\u540d\u79f0"
      }) ], Archive.prototype, "themeNames", void 0);
      __decorate([ property({
        type: ArchiveItem_1.default,
        displayName: "\u67e5\u770b\u754c\u9762"
      }) ], Archive.prototype, "viewItem", void 0);
      __decorate([ property({
        type: cc.ScrollView,
        displayName: "\u6eda\u52a8\u89c6\u56fe"
      }) ], Archive.prototype, "scrollView", void 0);
      Archive = __decorate([ ccclass ], Archive);
      return Archive;
    }(cc.Component);
    exports.default = Archive;
    cc._RF.pop();
  }, {
    "./ArchiveItem": "ArchiveItem"
  } ],
  BlockInput: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbf36bd4zxG576OxibAm+iN", "BlockInput");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var blockNode = null;
    var blockInputEvents = null;
    var retain = 0;
    function blockInput(duration) {
      void 0 === duration && (duration = null);
      ++retain;
      if (null == blockNode) {
        blockNode = new cc.Node();
        blockInputEvents = blockNode.addComponent(cc.BlockInputEvents);
        var widget = blockNode.addComponent(cc.Widget);
        widget.top = 0;
        widget.bottom = 0;
        widget.left = 0;
        widget.right = 0;
        widget.isAlignTop = true;
        widget.isAlignBottom = true;
        widget.isAlignLeft = true;
        widget.isAlignRight = true;
        cc.game.addPersistRootNode(blockNode);
      }
      blockNode.active = true;
      duration && blockInputEvents.scheduleOnce(unblockInput, duration);
    }
    exports.blockInput = blockInput;
    function unblockInput() {
      --retain;
      retain < 0 && (retain = 0);
      0 == retain && (blockNode.active = false);
    }
    exports.unblockInput = unblockInput;
    cc._RF.pop();
  }, {} ],
  NodeListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f19b1/dpyZFHI/zAlCfXtkO", "NodeListener");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var EventMonitorType;
    (function(EventMonitorType) {
      EventMonitorType[EventMonitorType["\u9ed8\u8ba4"] = 0] = "\u9ed8\u8ba4";
      EventMonitorType[EventMonitorType["\u8282\u70b9\u9690\u85cf"] = 1] = "\u8282\u70b9\u9690\u85cf";
      EventMonitorType[EventMonitorType["\u8282\u70b9\u663e\u793a"] = 2] = "\u8282\u70b9\u663e\u793a";
      EventMonitorType[EventMonitorType["\u8282\u70b9\u7981\u7528"] = 3] = "\u8282\u70b9\u7981\u7528";
      EventMonitorType[EventMonitorType["\u8282\u70b9\u542f\u7528"] = 4] = "\u8282\u70b9\u542f\u7528";
      EventMonitorType[EventMonitorType["\u89e6\u6478\u5f00\u59cb"] = 5] = "\u89e6\u6478\u5f00\u59cb";
      EventMonitorType[EventMonitorType["\u89e6\u6478\u79fb\u52a8"] = 6] = "\u89e6\u6478\u79fb\u52a8";
      EventMonitorType[EventMonitorType["\u89e6\u6478\u7ed3\u675f"] = 7] = "\u89e6\u6478\u7ed3\u675f";
      EventMonitorType[EventMonitorType["\u89e6\u6478\u53d6\u6d88"] = 8] = "\u89e6\u6478\u53d6\u6d88";
      EventMonitorType[EventMonitorType["\u9f20\u6807\u6309\u4e0b"] = 9] = "\u9f20\u6807\u6309\u4e0b";
      EventMonitorType[EventMonitorType["\u9f20\u6807\u79fb\u52a8"] = 10] = "\u9f20\u6807\u79fb\u52a8";
      EventMonitorType[EventMonitorType["\u9f20\u6807\u79fb\u5165"] = 11] = "\u9f20\u6807\u79fb\u5165";
      EventMonitorType[EventMonitorType["\u9f20\u6807\u79fb\u51fa"] = 12] = "\u9f20\u6807\u79fb\u51fa";
      EventMonitorType[EventMonitorType["\u9f20\u6807\u62ac\u8d77"] = 13] = "\u9f20\u6807\u62ac\u8d77";
      EventMonitorType[EventMonitorType["\u9f20\u6807\u6eda\u8f6e\u6eda\u52a8"] = 14] = "\u9f20\u6807\u6eda\u8f6e\u6eda\u52a8";
      EventMonitorType[EventMonitorType["\u5750\u6807\u53d8\u5316"] = 15] = "\u5750\u6807\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u65cb\u8f6c\u53d8\u5316"] = 16] = "\u65cb\u8f6c\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u7f29\u653e\u53d8\u5316"] = 17] = "\u7f29\u653e\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u5c3a\u5bf8\u53d8\u5316"] = 18] = "\u5c3a\u5bf8\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u951a\u70b9\u53d8\u5316"] = 19] = "\u951a\u70b9\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u989c\u8272\u53d8\u5316"] = 20] = "\u989c\u8272\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u6dfb\u52a0\u5b50\u8282\u70b9"] = 21] = "\u6dfb\u52a0\u5b50\u8282\u70b9";
      EventMonitorType[EventMonitorType["\u5b50\u8282\u70b9\u88ab\u79fb\u9664"] = 22] = "\u5b50\u8282\u70b9\u88ab\u79fb\u9664";
      EventMonitorType[EventMonitorType["\u5b50\u8282\u70b9\u987a\u5e8f\u6539\u53d8"] = 23] = "\u5b50\u8282\u70b9\u987a\u5e8f\u6539\u53d8";
      EventMonitorType[EventMonitorType["\u7236\u8282\u70b9\u53d8\u5316"] = 24] = "\u7236\u8282\u70b9\u53d8\u5316";
      EventMonitorType[EventMonitorType["\u5c42\u7ea7\u53d8\u5316"] = 25] = "\u5c42\u7ea7\u53d8\u5316";
    })(EventMonitorType || (EventMonitorType = {}));
    cc.Enum(EventMonitorType);
    var NodeListener = function(_super) {
      __extends(NodeListener, _super);
      function NodeListener() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.eventType = EventMonitorType.\u9ed8\u8ba4;
        _this.callbackEvents = [];
        return _this;
      }
      NodeListener.prototype.start = function() {
        var _this = this;
        switch (this.eventType) {
         case EventMonitorType.\u8282\u70b9\u663e\u793a:
          this.node.on("active-in-hierarchy-changed", function() {
            _this.node.active && _this.onEvent();
          });
          break;

         case EventMonitorType.\u8282\u70b9\u9690\u85cf:
          this.node.on("active-in-hierarchy-changed", function() {
            _this.node.active || _this.onEvent();
          });
          break;

         case EventMonitorType.\u89e6\u6478\u5f00\u59cb:
          this.node.on(cc.Node.EventType.TOUCH_START, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u89e6\u6478\u79fb\u52a8:
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u89e6\u6478\u7ed3\u675f:
          this.node.on(cc.Node.EventType.TOUCH_END, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u89e6\u6478\u53d6\u6d88:
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u9f20\u6807\u6309\u4e0b:
          this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u9f20\u6807\u79fb\u52a8:
          this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u9f20\u6807\u79fb\u5165:
          this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u9f20\u6807\u79fb\u51fa:
          this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u9f20\u6807\u62ac\u8d77:
          this.node.on(cc.Node.EventType.MOUSE_UP, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u9f20\u6807\u6eda\u8f6e\u6eda\u52a8:
          this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u5750\u6807\u53d8\u5316:
          this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u65cb\u8f6c\u53d8\u5316:
          this.node.on(cc.Node.EventType.ROTATION_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u7f29\u653e\u53d8\u5316:
          this.node.on(cc.Node.EventType.SCALE_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u5c3a\u5bf8\u53d8\u5316:
          this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u951a\u70b9\u53d8\u5316:
          this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u989c\u8272\u53d8\u5316:
          this.node.on(cc.Node.EventType.COLOR_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u6dfb\u52a0\u5b50\u8282\u70b9:
          this.node.on(cc.Node.EventType.CHILD_ADDED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u5b50\u8282\u70b9\u88ab\u79fb\u9664:
          this.node.on(cc.Node.EventType.CHILD_REMOVED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u5b50\u8282\u70b9\u987a\u5e8f\u6539\u53d8:
          this.node.on(cc.Node.EventType.CHILD_REORDER, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u7236\u8282\u70b9\u53d8\u5316:
          this.node.on(cc.Node.EventType.GROUP_CHANGED, this.onEvent.bind(this));
          break;

         case EventMonitorType.\u5c42\u7ea7\u53d8\u5316:
          this.node.on(cc.Node.EventType.SIBLING_ORDER_CHANGED, this.onEvent.bind(this));
        }
      };
      NodeListener.prototype.onEvent = function() {
        if (this.callbackEvents && this.callbackEvents.length) for (var _i = 0, _a = this.callbackEvents; _i < _a.length; _i++) {
          var v = _a[_i];
          v.emit([ v.customEventData ]);
        }
      };
      NodeListener.prototype.onEnable = function() {
        this.eventType == EventMonitorType.\u8282\u70b9\u542f\u7528 && this.onEvent();
      };
      NodeListener.prototype.onDisable = function() {
        this.eventType == EventMonitorType.\u8282\u70b9\u7981\u7528 && this.onEvent();
      };
      __decorate([ property({
        type: EventMonitorType,
        displayName: "\u4e8b\u4ef6\u7c7b\u578b",
        tooltip: "\u9700\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\u7c7b\u578b"
      }) ], NodeListener.prototype, "eventType", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u64cd\u4f5c",
        tooltip: "\u76d1\u542c\u4e8b\u4ef6\u89e6\u53d1\u7684\u64cd\u4f5c"
      }) ], NodeListener.prototype, "callbackEvents", void 0);
      NodeListener = __decorate([ ccclass, menu("\u6269\u5c55\u7ec4\u4ef6/\u8282\u70b9\u4e8b\u4ef6\u76d1\u542c") ], NodeListener);
      return NodeListener;
    }(cc.Component);
    exports.default = NodeListener;
    cc._RF.pop();
  }, {} ],
  RedPackets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2826cD+wcNLKrZTUrSriraM", "RedPackets");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var advertising_1 = require("./advertising");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedPackets = function(_super) {
      __extends(RedPackets, _super);
      function RedPackets() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.openNode = null;
        _this.openedNode = null;
        _this.moneyLable = null;
        return _this;
      }
      RedPackets.prototype.onLoad = function() {
        this.openNode.active = true;
        this.openedNode.active = false;
      };
      RedPackets.prototype.\u5f00\u7ea2\u5305\u770b\u5e7f\u544a = function() {
        var _this = this;
        advertising_1.default.play(function() {
          _this.openNode.active = false;
          _this.openedNode.active = true;
        });
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5f00\u7ea2\u5305\u524d\u8282\u70b9",
        tooltip: "\u5f00\u7ea2\u5305\u4e4b\u524d\u8981\u663e\u793a\u7684\u8282\u70b9"
      }) ], RedPackets.prototype, "openNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5f00\u7ea2\u5305\u540e\u8282\u70b9",
        tooltip: "\u5f00\u7ea2\u5305\u4e4b\u540e\u8981\u663e\u793a\u7684\u8282\u70b9"
      }) ], RedPackets.prototype, "openedNode", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u7ea2\u5305\u94b1\u6570"
      }) ], RedPackets.prototype, "moneyLable", void 0);
      RedPackets = __decorate([ ccclass ], RedPackets);
      return RedPackets;
    }(cc.Component);
    exports.default = RedPackets;
    cc._RF.pop();
  }, {
    "./advertising": "advertising"
  } ],
  ThemeSelect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "196c3Dz6TZJfb6FAW49hL7L", "ThemeSelect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gameData_1 = require("./gameData");
    var gridManager_1 = require("./gridManager");
    var advertising_1 = require("./advertising");
    var nodeOperation_1 = require("../../commonLib/component/nodeOperation");
    var gameMain_1 = require("./gameMain");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ThemeSelect = function(_super) {
      __extends(ThemeSelect, _super);
      function ThemeSelect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.themeItems = [];
        _this.themeItemCount = [];
        _this.themeShowSprite = null;
        _this.themeShowSF = [];
        _this.okBtn = null;
        _this.srcSelectIndex = null;
        _this.curSelectIndex = null;
        return _this;
      }
      ThemeSelect.prototype.onEnable = function() {
        gameMain_1.default.instance.pauseGame();
        this.okBtn.interactable = false;
        this.curSelectIndex = gameData_1.loadThemeSelect();
        this.srcSelectIndex = this.curSelectIndex;
        this.themeItems[this.curSelectIndex].isChecked = true;
        for (var i = 0; i < this.themeItems.length; ++i) {
          this.themeItems[i].interactable = gameData_1.gameData.archive && gameData_1.gameData.archive[i] && gameData_1.gameData.archive[i].length >= 20;
          var child = this.themeItems[i].node.getChildByName("img_change_1");
          if (this.themeItems[i].interactable) {
            child.color = cc.Color.WHITE;
            child.opacity = 255;
            this.themeItemCount[i].node.parent.active = false;
          } else {
            child.color = cc.color(94, 40, 17, 255);
            child.opacity = 200;
            this.themeItemCount[i].node.parent.active = true;
            gameData_1.gameData.archive[i] ? this.themeItemCount[i].string = gameData_1.gameData.archive[i].length + "/20" : this.themeItemCount[i].string = "0/20";
          }
        }
      };
      ThemeSelect.prototype.onDisable = function() {
        gameMain_1.default.instance.resumeGame();
      };
      ThemeSelect.prototype.\u9009\u62e9\u4e3b\u9898 = function(event, customEventData) {
        for (var i = 0; i < this.themeItems.length; ++i) if (this.themeItems[i].isChecked) {
          this.curSelectIndex = i;
          this.themeShowSprite.spriteFrame = this.themeShowSF[this.curSelectIndex];
          break;
        }
        this.okBtn.interactable = this.curSelectIndex != this.srcSelectIndex;
      };
      ThemeSelect.prototype.\u70b9\u51fb\u786e\u5b9a = function() {
        var _this = this;
        advertising_1.default.play(function() {
          gameData_1.saveThemeSelect(_this.curSelectIndex);
          gridManager_1.default.instance.updateTheme();
          _this.getComponent(nodeOperation_1.default).closeSelf();
        });
      };
      __decorate([ property({
        type: cc.Toggle,
        displayName: "\u4e3b\u9898\u9009\u9879"
      }) ], ThemeSelect.prototype, "themeItems", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u4e3b\u9898\u788e\u7247\u6570"
      }) ], ThemeSelect.prototype, "themeItemCount", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u4e3b\u9898\u5c55\u793a\u56fe"
      }) ], ThemeSelect.prototype, "themeShowSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u4e3b\u9898\u5c55\u793a\u56fe\u96c6"
      }) ], ThemeSelect.prototype, "themeShowSF", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u786e\u5b9a\u6309\u94ae"
      }) ], ThemeSelect.prototype, "okBtn", void 0);
      ThemeSelect = __decorate([ ccclass ], ThemeSelect);
      return ThemeSelect;
    }(cc.Component);
    exports.default = ThemeSelect;
    cc._RF.pop();
  }, {
    "../../commonLib/component/nodeOperation": "nodeOperation",
    "./advertising": "advertising",
    "./gameData": "gameData",
    "./gameMain": "gameMain",
    "./gridManager": "gridManager"
  } ],
  adapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddae2epnOZIv47RK2oca4yn", "adapter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var adapter = function(_super) {
      __extends(adapter, _super);
      function adapter() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      adapter.prototype.start = function() {
        this.onResized();
        this.scheduleOnce(this.onResized, 0);
      };
      adapter.prototype.onEnable = function() {
        cc.view.on("canvas-resize", this.onResized, this);
      };
      adapter.prototype.onDisable = function() {
        cc.view.off("canvas-resize", this.onResized, this);
      };
      adapter.prototype.onResized = function() {
        var size = cc.winSize;
        var scaleX = size.width / this.node.width;
        var scaleY = size.height / this.node.height;
        if (scaleX > scaleY) {
          this.node.scaleX = size.width / this.node.width;
          this.node.scaleY = size.width / this.node.width;
        } else {
          this.node.scaleX = size.height / this.node.height;
          this.node.scaleY = size.height / this.node.height;
        }
      };
      adapter = __decorate([ ccclass, menu("\u9002\u914d/\u7b49\u6bd4\u7f29\u653e\u9002\u914d") ], adapter);
      return adapter;
    }(cc.Component);
    exports.default = adapter;
    cc._RF.pop();
  }, {} ],
  addItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b77dnN+hZAaY485W3GtB1Z", "addItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var advertising_1 = require("./advertising");
    var nodeOperation_1 = require("../../commonLib/component/nodeOperation");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var addItem = function(_super) {
      __extends(addItem, _super);
      function addItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.iconSFs = [];
        _this.icon = null;
        _this.numSFs = [];
        _this.numImg = null;
        _this.op = null;
        _this.id = null;
        _this.num = null;
        _this.callback = null;
        _this.destroyCallback = null;
        return _this;
      }
      addItem.prototype.onLoad = function() {
        this.op = this.getComponent(nodeOperation_1.default);
      };
      addItem.prototype.setData = function(id, num) {
        this.id = id;
        this.num = num;
        this.icon.spriteFrame = this.iconSFs[id];
        this.numImg.spriteFrame = this.numSFs[num - 1];
      };
      addItem.prototype.setCallback = function(callback) {
        this.callback = callback;
      };
      addItem.prototype.setDestroyCallback = function(callback) {
        this.destroyCallback = callback;
      };
      addItem.prototype.onDestroy = function() {
        this.destroyCallback && this.destroyCallback();
      };
      addItem.prototype.\u70b9\u51fb\u89c2\u770b\u5e7f\u544a = function() {
        var _this = this;
        advertising_1.default.play(function() {
          _this.callback && _this.callback(_this.id, _this.num);
          _this.op.closeSelf();
        });
      };
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u5927\u56fe\u6807\u96c6"
      }) ], addItem.prototype, "iconSFs", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u9053\u5177\u56fe\u6807"
      }) ], addItem.prototype, "icon", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u6570\u91cf\u56fe\u7247\u96c6"
      }) ], addItem.prototype, "numSFs", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u6570\u91cf\u56fe"
      }) ], addItem.prototype, "numImg", void 0);
      addItem = __decorate([ ccclass ], addItem);
      return addItem;
    }(cc.Component);
    exports.default = addItem;
    cc._RF.pop();
  }, {
    "../../commonLib/component/nodeOperation": "nodeOperation",
    "./advertising": "advertising"
  } ],
  addUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aabb4I/1aNJKYaXh7jJUDOF", "addUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var addUI = function(_super) {
      __extends(addUI, _super);
      function addUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this.isTop = true;
        return _this;
      }
      addUI_1 = addUI;
      addUI.prototype.\u5f39\u7a97 = function(event, path) {
        this.addUI(path);
      };
      addUI.prototype.addUI = function(path, loadCallBack, className) {
        void 0 === path && (path = null);
        void 0 === loadCallBack && (loadCallBack = null);
        void 0 === className && (className = null);
        path ? addUI_1.addUI(path, loadCallBack, className, this.isTop ? null : this.node) : this.ui && addUI_1.addUIByPrefab(this.ui, loadCallBack, className, this.isTop ? null : this.node);
      };
      addUI.addUI = function(url, loadCallBack, className, root) {
        var _this = this;
        void 0 === loadCallBack && (loadCallBack = null);
        void 0 === className && (className = null);
        void 0 === root && (root = null);
        cc.loader.loadRes("prefabs/" + url, cc.Prefab, function(error, res) {
          error ? cc.log(error) : _this.addUIByPrefab(res, loadCallBack, className);
        });
      };
      addUI.addUIByPrefab = function(res, loadCallBack, className, root) {
        void 0 === loadCallBack && (loadCallBack = null);
        void 0 === className && (className = null);
        void 0 === root && (root = null);
        var ui = cc.instantiate(res);
        if (root) root.addChild(ui); else {
          var scene = cc.director.getScene();
          if (scene) {
            var canvas = scene.getComponentInChildren(cc.Canvas);
            if (canvas) {
              ui.x = 0;
              ui.y = 0;
              canvas.node.addChild(ui);
            } else scene.addChild(ui);
          }
        }
        if (loadCallBack) {
          var com = ui.getComponent(className || res.name);
          loadCallBack(com);
        }
      };
      var addUI_1;
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u8981\u6253\u5f00\u7684UI",
        tooltip: "\u53ef\u4ee5\u5728\u8fd9\u91cc\u62d6\u9884\u8bbe\uff0c\u4e5f\u53ef\u4ee5\u8c03\u7528\uff08\u5f39\u7a97\uff09\u53c2\u6570\u586b\u8def\u5f84\uff0c\u53c2\u6570\u4f18\u5148"
      }) ], addUI.prototype, "ui", void 0);
      __decorate([ property({
        displayName: "\u662f\u5426\u7f6e\u9876\u5f39\u7a97"
      }) ], addUI.prototype, "isTop", void 0);
      addUI = addUI_1 = __decorate([ ccclass, menu("\u6269\u5c55\u7ec4\u4ef6/\u5f39\u7a97") ], addUI);
      return addUI;
    }(cc.Component);
    exports.default = addUI;
    cc._RF.pop();
  }, {} ],
  advertising: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26cd2IDhNxHIoXEJX3/A6SO", "advertising");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var addUI_1 = require("../../commonLib/component/addUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var advertising = function(_super) {
      __extends(advertising, _super);
      function advertising() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      advertising_1 = advertising;
      advertising.prototype.setFinishCallback = function(callback) {
        advertising_1.callback = callback;
      };
      advertising.prototype.onDestroy = function() {
        advertising_1.callback && advertising_1.callback();
      };
      advertising.play = function(finishCallback) {
        if (cc.sys.isNative) {
          this.init();
          this.callback = finishCallback;
          var ret = null;
          switch (cc.sys.os) {
           case cc.sys.OS_IOS:
            ret = jsb.reflection.callStaticMethod("AppController", "showAd:title:", "", "");
            break;

           case cc.sys.OS_ANDROID:
            ret = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
          }
          ret && cc.log(".reflection.callStaticMethod.ret = " + ret.toString());
        } else addUI_1.default.addUI("\u5e7f\u544a", function(ui) {
          ui.setFinishCallback(finishCallback);
        }, "advertising");
      };
      advertising.init = function() {
        var _this = this;
        if (!this.isInit) {
          this.isInit = true;
          window["didHideAd"] = function(str) {
            _this.callback && _this.callback();
            return "abcd";
          };
        }
      };
      var advertising_1;
      advertising.callback = null;
      advertising.isInit = false;
      advertising = advertising_1 = __decorate([ ccclass ], advertising);
      return advertising;
    }(cc.Component);
    exports.default = advertising;
    cc._RF.pop();
  }, {
    "../../commonLib/component/addUI": "addUI"
  } ],
  canvasAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6be07d+u7xJ+oTTuMBkXQWI", "canvasAdapter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
    var canvasAdapter = function(_super) {
      __extends(canvasAdapter, _super);
      function canvasAdapter() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._widget = null;
        return _this;
      }
      canvasAdapter.prototype.start = function() {
        this.canvas || (this.canvas = this.getComponent(cc.Canvas));
        this._widget = this.getComponent(cc.Widget);
        this._widget.isAlignTop = true;
        this._widget.isAlignBottom = true;
        this._widget.isAlignLeft = true;
        this._widget.isAlignRight = true;
        this._widget.top = 0;
        this._widget.bottom = 0;
        this._widget.left = 0;
        this._widget.right = 0;
        this.onResized();
      };
      canvasAdapter.prototype.onEnable = function() {
        this.onResized();
        cc.view.on("canvas-resize", this.onResized, this);
      };
      canvasAdapter.prototype.onDisable = function() {
        cc.view.off("canvas-resize", this.onResized, this);
      };
      canvasAdapter.prototype.onResized = function() {
        if (!this.canvas) return;
        var frameSize = cc.view.getFrameSize();
        var resolutionSize = cc.view.getDesignResolutionSize();
        var nomalScale = resolutionSize.width / resolutionSize.height;
        var newScale = frameSize.width / frameSize.height;
        if (newScale < nomalScale) {
          this.canvas.fitWidth = true;
          this.canvas.fitHeight = false;
        } else {
          this.canvas.fitWidth = false;
          this.canvas.fitHeight = true;
        }
      };
      __decorate([ property({
        serializable: true
      }) ], canvasAdapter.prototype, "_widget", void 0);
      canvasAdapter = __decorate([ ccclass, requireComponent(cc.Widget), executeInEditMode(), menu("\u9002\u914d/\u753b\u5e03\u9002\u914d") ], canvasAdapter);
      return canvasAdapter;
    }(cc.Component);
    exports.default = canvasAdapter;
    cc._RF.pop();
  }, {} ],
  comboAward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcd6bTXmvhNZ7umlFuMKiof", "comboAward");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gameLib_1 = require("../../commonLib/lib/gameLib");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var comboAward = function(_super) {
      __extends(comboAward, _super);
      function comboAward() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.comboAwardLink = .5;
        _this.comboAwardBomb = .3;
        _this.comboAwardReset = .1;
        _this.comboAwardFreeze = .1;
        _this.sp = null;
        _this.sf = [];
        _this.particle = null;
        _this._awardID = null;
        return _this;
      }
      Object.defineProperty(comboAward.prototype, "awardID", {
        get: function() {
          return this._awardID;
        },
        set: function(id) {
          if (this._awardID != id) {
            this._awardID = id;
            this.sp.spriteFrame = this.sf[id];
          }
        },
        enumerable: true,
        configurable: true
      });
      comboAward.prototype.onLoad = function() {
        this.particle && this.particle.stopSystem();
      };
      comboAward.prototype.randomComboAwardID = function() {
        var all = this.comboAwardLink + this.comboAwardBomb + this.comboAwardReset + this.comboAwardFreeze;
        var r = gameLib_1.gameLib.GetRandomNum(1, 100 * all) / 100;
        r <= this.comboAwardLink ? this.awardID = 0 : r <= this.comboAwardLink + this.comboAwardBomb ? this.awardID = 1 : r <= this.comboAwardLink + this.comboAwardBomb + this.comboAwardReset ? this.awardID = 2 : r <= all && (this.awardID = 3);
      };
      comboAward.prototype.moveTo = function(node, callback) {
        var _this = this;
        if (!node) return;
        var worldPos = node.convertToWorldSpaceAR(cc.v2(node.x, node.y));
        var pos = this.node.parent.convertToNodeSpaceAR(cc.v2(worldPos.x, worldPos.y));
        pos.y -= this.sp.node.anchorY * this.sp.node.height;
        this.particle && this.particle.resetSystem();
        cc.tween(this.node).to(1, {
          x: pos.x,
          y: pos.y
        }, {
          easing: "sineOut"
        }).call(function() {
          callback && callback(_this);
          _this.particle && _this.particle.stopSystem();
        }).start();
      };
      __decorate([ property({
        displayName: "\u8fde\u51fb\u5956\u52b1\u67e5\u627e\u6982\u7387",
        step: .1
      }) ], comboAward.prototype, "comboAwardLink", void 0);
      __decorate([ property({
        displayName: "\u8fde\u51fb\u5956\u52b1\u70b8\u5f39\u6982\u7387",
        step: .1
      }) ], comboAward.prototype, "comboAwardBomb", void 0);
      __decorate([ property({
        displayName: "\u8fde\u51fb\u5956\u52b1\u91cd\u6392\u6982\u7387",
        step: .1
      }) ], comboAward.prototype, "comboAwardReset", void 0);
      __decorate([ property({
        displayName: "\u8fde\u51fb\u5956\u52b1\u51bb\u7ed3\u6982\u7387",
        step: .1
      }) ], comboAward.prototype, "comboAwardFreeze", void 0);
      __decorate([ property({
        type: cc.Sprite
      }) ], comboAward.prototype, "sp", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u8fde\u51fb\u5956\u52b1\u56fe\u6807"
      }) ], comboAward.prototype, "sf", void 0);
      __decorate([ property({
        type: cc.ParticleSystem,
        displayName: "\u7c92\u5b50\u6548\u679c"
      }) ], comboAward.prototype, "particle", void 0);
      comboAward = __decorate([ ccclass ], comboAward);
      return comboAward;
    }(cc.Component);
    exports.default = comboAward;
    cc._RF.pop();
  }, {
    "../../commonLib/lib/gameLib": "gameLib"
  } ],
  comboText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "488bdXX5SBAWrduN2GQ6AQp", "comboText");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var countDown_1 = require("../../commonLib/component/countDown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var comboText = function(_super) {
      __extends(comboText, _super);
      function comboText() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cd = null;
        _this.combo = null;
        _this.animation = null;
        _this.changeAni = null;
        _this.showAni = null;
        _this.hideAni = null;
        _this.durationTime = 2;
        return _this;
      }
      comboText.prototype.onLoad = function() {
        var _this = this;
        this.node.opacity = 0;
        this.cd.setFinishCallback(function(cd) {
          _this.playHideAni();
        });
      };
      comboText.prototype.setCombo = function(num) {
        this.combo.string = num.toString();
        if (this.node.opacity && this.animation.currentClip != this.hideAni) this.animation.play(this.changeAni.name); else {
          this.animation.play(this.showAni.name);
          this.animation.sample(this.showAni.name);
        }
        this.cd.setTime(this.durationTime);
      };
      comboText.prototype.playHideAni = function() {
        this.animation.play(this.hideAni.name);
      };
      __decorate([ property({
        type: countDown_1.default,
        displayName: "\u5012\u8ba1\u65f6"
      }) ], comboText.prototype, "cd", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u8fde\u51fb\u6570\u5b57"
      }) ], comboText.prototype, "combo", void 0);
      __decorate([ property({
        type: cc.Animation,
        displayName: "\u52a8\u753b\u64ad\u653e\u5668"
      }) ], comboText.prototype, "animation", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u6587\u5b57\u53d8\u52a8\u52a8\u753b"
      }) ], comboText.prototype, "changeAni", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u6587\u5b57\u663e\u793a\u52a8\u753b"
      }) ], comboText.prototype, "showAni", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u6587\u5b57\u9690\u85cf\u52a8\u753b"
      }) ], comboText.prototype, "hideAni", void 0);
      comboText = __decorate([ ccclass ], comboText);
      return comboText;
    }(cc.Component);
    exports.default = comboText;
    cc._RF.pop();
  }, {
    "../../commonLib/component/countDown": "countDown"
  } ],
  countDown: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0571FE7hdOiIBGGMd3IxZL", "countDown");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var countDown = function(_super) {
      __extends(countDown, _super);
      function countDown() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isCountDown = true;
        _this.isMinutes = false;
        _this.curTime = 0;
        _this.timeLabel = null;
        _this.timeImg = [];
        _this.callbackEvents = [];
        _this.finishCallbackEvents = [];
        _this.beginTime = 0;
        _this.intTime = 0;
        _this.percentCallback = null;
        _this.finishCallback = null;
        _this.isPause = false;
        return _this;
      }
      countDown.prototype.setTime = function(time) {
        this.enabled = true;
        this.beginTime = time;
        this.curTime = time;
        this.intTime = Math.ceil(this.curTime);
        this.onCallback();
      };
      countDown.prototype.resetTime = function() {
        this.setTime(this.beginTime);
      };
      countDown.prototype.getTime = function() {
        return this.curTime;
      };
      countDown.prototype.update = function(timePass) {
        if (this.isPause) return;
        if (this.curTime > 0 || !this.isCountDown) {
          var intTime = this.intTime;
          this.isCountDown ? this.curTime -= timePass : this.curTime += timePass;
          if (this.curTime <= 0) {
            this.curTime = 0;
            this.enabled = false;
          }
          var per = this.curTime / this.beginTime;
          this.percentCallback && this.percentCallback(per);
          for (var _i = 0, _a = this.timeImg; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v) {
              var MAXFillRange = "MAXFillRange";
              null == v[MAXFillRange] && (v[MAXFillRange] = v.fillRange);
              v.fillRange = v[MAXFillRange] * per;
            }
          }
          intTime = Math.ceil(this.curTime);
          if (this.intTime != intTime) {
            this.intTime = intTime;
            this.onCallback();
          }
        }
      };
      countDown.prototype.setPercentCallback = function(callback) {
        this.percentCallback = callback;
      };
      countDown.prototype.setFinishCallback = function(callback) {
        this.finishCallback = callback;
      };
      countDown.prototype.onCallback = function() {
        if (this.timeLabel) if (this.isMinutes) {
          var min = Math.floor(this.intTime / 60);
          var minStr = min < 10 ? "0" + min : min.toString();
          var sec = this.intTime % 60;
          var secStr = sec < 10 ? "0" + sec : sec.toString();
          this.timeLabel.string = minStr + ":" + secStr;
        } else this.timeLabel.string = this.intTime.toString();
        for (var _i = 0, _a = this.callbackEvents; _i < _a.length; _i++) {
          var v = _a[_i];
          v.emit([ v.customEventData, this.intTime ]);
        }
        if (0 == this.intTime) {
          this.finishCallback && this.finishCallback(this);
          for (var _b = 0, _c = this.finishCallbackEvents; _b < _c.length; _b++) {
            var v = _c[_b];
            v.emit([ v.customEventData, this.intTime ]);
          }
        }
      };
      countDown.prototype.pause = function() {
        this.isPause = true;
      };
      countDown.prototype.resume = function() {
        this.isPause = false;
      };
      __decorate([ property({
        displayName: "\u662f\u5426\u662f\u5012\u8ba1\u65f6"
      }) ], countDown.prototype, "isCountDown", void 0);
      __decorate([ property({
        displayName: "\u662f\u5426\u8fdb\u4f4d\u5230\u5206\u949f"
      }) ], countDown.prototype, "isMinutes", void 0);
      __decorate([ property({
        displayName: "\u5f00\u59cb\u8ba1\u65f6\u79d2\u6570"
      }) ], countDown.prototype, "curTime", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u8ba1\u65f6label"
      }) ], countDown.prototype, "timeLabel", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u5012\u8ba1\u65f6\u8fdb\u5ea6\u6761"
      }) ], countDown.prototype, "timeImg", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u8ba1\u65f6\u6bcf\u79d2\u56de\u8c03"
      }) ], countDown.prototype, "callbackEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u8ba1\u65f6\u7ed3\u675f\u56de\u8c03"
      }) ], countDown.prototype, "finishCallbackEvents", void 0);
      countDown = __decorate([ ccclass, menu("\u6269\u5c55\u7ec4\u4ef6/\u5012\u8ba1\u65f6") ], countDown);
      return countDown;
    }(cc.Component);
    exports.default = countDown;
    cc._RF.pop();
  }, {} ],
  cover: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a509fLywG1J5ZKHsZkuREJe", "cover");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BlockInput_1 = require("../../commonLib/component/BlockInput");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cover = function(_super) {
      __extends(cover, _super);
      function cover() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.hideClip = null;
        _this.ani = null;
        return _this;
      }
      cover.prototype.onLoad = function() {
        this.ani = this.getComponent(cc.Animation);
      };
      cover.prototype.playHideAni = function() {
        var state = this.ani.play(this.hideClip.name);
        BlockInput_1.blockInput(state.duration);
        return state;
      };
      cover.prototype.show = function() {
        this.node.active = true;
        this.ani.setCurrentTime(0, this.hideClip.name);
        this.ani.sample(this.hideClip.name);
      };
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u9690\u85cf\u52a8\u753b"
      }) ], cover.prototype, "hideClip", void 0);
      cover = __decorate([ ccclass ], cover);
      return cover;
    }(cc.Component);
    exports.default = cover;
    cc._RF.pop();
  }, {
    "../../commonLib/component/BlockInput": "BlockInput"
  } ],
  dragNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a858f0yJtCTpMt0gV2vkqW", "dragNode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var dragNode = function(_super) {
      __extends(dragNode, _super);
      function dragNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.savePOS = true;
        _this.dragCenter = false;
        _this.downEvents = [];
        _this.upEvents = [];
        _this.moveEvents = [];
        _this.clickEvents = [];
        _this._canMove = true;
        _this.tarBeginPos = null;
        _this.touchBeginPos = null;
        _this.touchLocalPos = cc.Vec2.ZERO;
        _this.isMoved = false;
        return _this;
      }
      dragNode.prototype.onEnable = function() {
        this.reset();
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
      };
      dragNode.prototype.onDisable = function() {
        this.reset();
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
      };
      Object.defineProperty(dragNode.prototype, "canMove", {
        get: function() {
          return this._canMove;
        },
        set: function(b) {
          if (this._canMove != b) {
            this._canMove = b;
            this.reset();
          }
        },
        enumerable: true,
        configurable: true
      });
      dragNode.prototype._onTouchBegan = function(event) {
        null == this.tarBeginPos && (this.tarBeginPos = this.node.position);
        null == this.touchBeginPos && (this.touchBeginPos = event.touch.getLocation());
        this.touchLocalPos = this.node.convertToNodeSpaceAR(this.touchBeginPos);
        this.downEvents && this.downEvents.length && cc.Component.EventHandler.emitEvents(this.downEvents, event);
        event.stopPropagation();
      };
      dragNode.prototype._onTouchMove = function(event) {
        if (!this.canMove) return;
        var touch = event.touch;
        var lp = touch.getLocation();
        if (this.touchBeginPos && (this.isMoved || Math.abs(this.touchBeginPos.x - lp.x) > 10 || Math.abs(this.touchBeginPos.y - lp.y) > 10)) {
          this.isMoved = true;
          var pos = this.node.parent.convertToNodeSpaceAR(lp);
          if (!this.dragCenter) {
            pos.x -= this.touchLocalPos.x;
            pos.y -= this.touchLocalPos.y;
          }
          this.node.setPosition(pos);
          this.moveEvents && this.moveEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.moveEvents, event);
          event.stopPropagation();
        }
      };
      dragNode.prototype._onTouchEnded = function(event) {
        this.isMoved && this.upEvents && this.upEvents.length ? cc.Component.EventHandler.emitEvents(this.upEvents, event) : this.touchBeginPos && !this.isMoved && this.clickEvents && this.clickEvents.length && cc.Component.EventHandler.emitEvents(this.clickEvents, event);
        event.stopPropagation();
        this.reset();
      };
      dragNode.prototype._onTouchCancel = function(event) {
        this.isMoved && this.upEvents && this.upEvents.length ? cc.Component.EventHandler.emitEvents(this.upEvents, event) : this.touchBeginPos && !this.isMoved && this.clickEvents && this.clickEvents.length && cc.Component.EventHandler.emitEvents(this.clickEvents, event);
        event.stopPropagation();
        this.reset();
      };
      dragNode.prototype.reset = function() {
        this.savePOS || !this.tarBeginPos || this.tarBeginPos.x == this.node.position.x && this.tarBeginPos.y == this.node.position.y || this.node.setPosition(this.tarBeginPos);
        this.tarBeginPos = null;
        this.touchBeginPos = null;
        this.isMoved = false;
      };
      __decorate([ property({
        displayName: "\u4fdd\u5b58\u5750\u6807",
        tooltip: "\u662f\u5426\u4fdd\u5b58\u62d6\u62fd\u540e\u7684\u5750\u6807"
      }) ], dragNode.prototype, "savePOS", void 0);
      __decorate([ property({
        displayName: "\u62d6\u62fd\u4e2d\u5fc3",
        tooltip: "\u662f\u5426\u62d6\u62fd\u7269\u4f53\u4e2d\u5fc3"
      }) ], dragNode.prototype, "dragCenter", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u6309\u4e0b\u76d1\u542c",
        tooltip: "\u6309\u4e0b\u65b9\u6cd5\u76d1\u542c\uff0c\u53ef\u8bbe\u7f6e\u591a\u4e2a"
      }) ], dragNode.prototype, "downEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u62ac\u8d77\u76d1\u542c",
        tooltip: "\u62ac\u8d77\u65b9\u6cd5\u76d1\u542c\uff0c\u53ef\u8bbe\u7f6e\u591a\u4e2a"
      }) ], dragNode.prototype, "upEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u79fb\u52a8\u76d1\u542c",
        tooltip: "\u79fb\u52a8\u65b9\u6cd5\u76d1\u542c\uff0c\u53ef\u8bbe\u7f6e\u591a\u4e2a"
      }) ], dragNode.prototype, "moveEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u70b9\u51fb\u76d1\u542c",
        tooltip: "\u70b9\u51fb\u65b9\u6cd5\u76d1\u542c\uff0c\u53ef\u8bbe\u7f6e\u591a\u4e2a"
      }) ], dragNode.prototype, "clickEvents", void 0);
      dragNode = __decorate([ ccclass, menu("\u6269\u5c55\u7ec4\u4ef6/\u62d6\u52a8") ], dragNode);
      return dragNode;
    }(cc.Component);
    exports.default = dragNode;
    cc._RF.pop();
  }, {} ],
  gameAudioClip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bafcQOZcFDULBIUgQ6FFof", "gameAudioClip");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameAudioClip = function(_super) {
      __extends(gameAudioClip, _super);
      function gameAudioClip() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.removeGrid = null;
        _this.resetGridPos = null;
        _this.lightning = null;
        _this.freezeTime = null;
        _this.noLink = null;
        _this.btnClick = null;
        _this.btnCancel = null;
        _this.receiveItem = null;
        _this.openBox = null;
        _this.unfreezeGrid = null;
        _this.bombExplosion = null;
        _this.rebirthGrid = null;
        _this.lightningSelect = null;
        _this.gridSelect = null;
        _this.timeTip = null;
        _this.timeCountdown = null;
        _this.getComboAward = null;
        _this.comboAward = null;
        _this.clickFreeze = null;
        _this.freezeTimeAudioID = null;
        _this.lightningSelectAudioID = null;
        return _this;
      }
      gameAudioClip_1 = gameAudioClip;
      gameAudioClip.prototype.onLoad = function() {
        gameAudioClip_1.instance = this;
      };
      gameAudioClip.prototype.start = function() {
        this.bgm && cc.audioEngine.playMusic(this.bgm, true);
      };
      gameAudioClip.prototype.onDestroy = function() {
        gameAudioClip_1.instance = null;
      };
      gameAudioClip.prototype.playRemoveGrid = function() {
        this.removeGrid && cc.audioEngine.playEffect(this.removeGrid, false);
      };
      gameAudioClip.playRemoveGrid = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playRemoveGrid();
      };
      gameAudioClip.prototype.playResetGridPos = function() {
        this.resetGridPos && cc.audioEngine.playEffect(this.resetGridPos, false);
      };
      gameAudioClip.playResetGridPos = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playResetGridPos();
      };
      gameAudioClip.prototype.playLightning = function() {
        this.lightning && cc.audioEngine.playEffect(this.lightning, false);
      };
      gameAudioClip.playLightning = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playLightning();
      };
      gameAudioClip.prototype.playFreezeTime = function() {
        if (this.freezeTime && !this.freezeTimeAudioID) {
          this.freezeTimeAudioID = cc.audioEngine.playEffect(this.freezeTime, false);
          cc.audioEngine.pauseMusic();
        }
      };
      gameAudioClip.playFreezeTime = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playFreezeTime();
      };
      gameAudioClip.prototype.stopFreezeTime = function() {
        if (this.freezeTimeAudioID) {
          cc.audioEngine.stopEffect(this.freezeTimeAudioID);
          this.freezeTimeAudioID = null;
          cc.audioEngine.resumeMusic();
        }
      };
      gameAudioClip.stopFreezeTime = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.stopFreezeTime();
      };
      gameAudioClip.prototype.playNoLink = function() {
        this.noLink && cc.audioEngine.playEffect(this.noLink, false);
      };
      gameAudioClip.playNoLink = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playNoLink();
      };
      gameAudioClip.prototype.playBtnClick = function() {
        this.btnClick && cc.audioEngine.playEffect(this.btnClick, false);
      };
      gameAudioClip.playBtnClick = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playBtnClick();
      };
      gameAudioClip.prototype.playBtnCancel = function() {
        this.btnCancel && cc.audioEngine.playEffect(this.btnCancel, false);
      };
      gameAudioClip.playBtnCancel = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playBtnCancel();
      };
      gameAudioClip.prototype.playReceiveItem = function() {
        this.receiveItem && cc.audioEngine.playEffect(this.receiveItem, false);
      };
      gameAudioClip.playReceiveItem = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playReceiveItem();
      };
      gameAudioClip.prototype.playOpenBox = function() {
        this.openBox && cc.audioEngine.playEffect(this.openBox, false);
      };
      gameAudioClip.playOpenBox = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playOpenBox();
      };
      gameAudioClip.prototype.playUnfreezeGrid = function() {
        this.unfreezeGrid && cc.audioEngine.playEffect(this.unfreezeGrid, false);
      };
      gameAudioClip.playUnfreezeGrid = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playUnfreezeGrid();
      };
      gameAudioClip.prototype.playBombExplosion = function() {
        this.bombExplosion && cc.audioEngine.playEffect(this.bombExplosion, false);
      };
      gameAudioClip.playBombExplosion = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playBombExplosion();
      };
      gameAudioClip.prototype.playRebirthGrid = function() {
        this.rebirthGrid && cc.audioEngine.playEffect(this.rebirthGrid, false);
      };
      gameAudioClip.playRebirthGrid = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playRebirthGrid();
      };
      gameAudioClip.prototype.playLightningSelect = function() {
        this.lightningSelect && !this.lightningSelectAudioID && (this.lightningSelectAudioID = cc.audioEngine.playEffect(this.lightningSelect, true));
      };
      gameAudioClip.playLightningSelect = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playLightningSelect();
      };
      gameAudioClip.prototype.stopLightningSelect = function() {
        if (this.lightningSelectAudioID) {
          cc.audioEngine.stopEffect(this.lightningSelectAudioID);
          this.lightningSelectAudioID = null;
        }
      };
      gameAudioClip.stopLightningSelect = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.stopLightningSelect();
      };
      gameAudioClip.prototype.playGridSelect = function() {
        this.gridSelect && cc.audioEngine.playEffect(this.gridSelect, false);
      };
      gameAudioClip.playGridSelect = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playGridSelect();
      };
      gameAudioClip.prototype.playTimeTip = function() {
        this.timeTip && cc.audioEngine.playEffect(this.timeTip, false);
      };
      gameAudioClip.playTimeTip = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playTimeTip();
      };
      gameAudioClip.prototype.playTimeCountdown = function() {
        this.timeCountdown && cc.audioEngine.playEffect(this.timeCountdown, false);
      };
      gameAudioClip.playTimeCountdown = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playTimeCountdown();
      };
      gameAudioClip.prototype.playGetComboAward = function() {
        this.getComboAward && cc.audioEngine.playEffect(this.getComboAward, false);
      };
      gameAudioClip.playGetComboAward = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playGetComboAward();
      };
      gameAudioClip.prototype.playComboAward = function() {
        this.comboAward && cc.audioEngine.playEffect(this.comboAward, false);
      };
      gameAudioClip.playComboAward = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playComboAward();
      };
      gameAudioClip.prototype.playClickFreeze = function() {
        this.clickFreeze && cc.audioEngine.playEffect(this.clickFreeze, false);
      };
      gameAudioClip.playClickFreeze = function() {
        gameAudioClip_1.instance && gameAudioClip_1.instance.playClickFreeze();
      };
      var gameAudioClip_1;
      gameAudioClip.instance = null;
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u80cc\u666f\u97f3\u4e50",
        tooltip: "\u6e38\u620f\u5173\u5361\u4f7f\u7528\u7684\u80cc\u666f\u97f3\u4e50"
      }) ], gameAudioClip.prototype, "bgm", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u6d88\u9664",
        tooltip: "\u65b9\u5757\u6d88\u9664\u65f6\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "removeGrid", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u91cd\u65b0\u6392\u5217",
        tooltip: "\u4f7f\u7528\u9053\u5177\u201c\u91cd\u6392\u201d\u6216\u8005\u5173\u5361\u51fa\u73b0\u65e0\u89e3\u9700\u8981\u91cd\u65b0\u6392\u5217\u7684\u65f6\u5019\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "resetGridPos", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u95ea\u7535",
        tooltip: "\u4f7f\u7528\u9053\u5177\u201c\u95ea\u7535\u201d\u65f6\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "lightning", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u65f6\u95f4\u51bb\u7ed3",
        tooltip: "\u4f7f\u7528\u9053\u5177\u201c\u65f6\u95f4\u51bb\u7ed3\u201d\u65f6\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "freezeTime", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u4e0d\u53ef\u6d88\u9664",
        tooltip: "\u73a9\u5bb6\u5148\u9009\u4e2d\u4e00\u4e2a\u65b9\u5757\uff0c\u7136\u540e\u9009\u4e2d\u7b2c\u4e8c\u4e2a\u65b9\u5757\u7684\u65f6\u5019\uff0c\u5982\u679c\u4e0d\u80fd\u6d88\u9664\uff0c\u5219\u540c\u65f6\u64ad\u653e\u6b64\u97f3\u6548"
      }) ], gameAudioClip.prototype, "noLink", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u70b9\u51fb\u6309\u94ae",
        tooltip: "\u70b9\u51fb\u6e38\u620f\u4e2d\u7684\u786e\u5b9a\u7c7b\u6309\u94ae\u65f6\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "btnClick", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u53d6\u6d88",
        tooltip: "\u70b9\u51fb\u6e38\u620f\u4e2d\u7684\u53d6\u6d88\u6216X\u7c7b\u6309\u94ae\u65f6\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "btnCancel", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u83b7\u5f97\u9053\u5177",
        tooltip: "\u5173\u5361\u7ed3\u7b97\u65f6\uff0c\u5f53\u5206\u6570\u6ee1\u8db3\u6761\u4ef6\u7684\u65f6\u5019\u4f1a\u5f97\u5230\u9053\u5177\uff08\u9053\u5177\u56fe\u6807\u4e0a\u4f1a\u6311\u52fe\uff09\uff0c\u6bcf\u5f97\u5230\u4e00\u4e2a\u9053\u5177\uff0c\u64ad\u653e\u4e00\u6b21\u672c\u97f3\u6548"
      }) ], gameAudioClip.prototype, "receiveItem", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u5f00\u7bb1\u5b50",
        tooltip: "\u5173\u5361\u7ed3\u7b97\u65f6\u5982\u679c\u5206\u6570\u8db3\u591f\uff0c\u53ef\u4ee5\u83b7\u5f97\u94a5\u5319\u9053\u5177\u6765\u5f00\u542f\u5b9d\u7bb1\uff0c\u5b9d\u7bb1\u5f00\u59cb\u65f6\u64ad\u653e\u672c\u97f3\u6548"
      }) ], gameAudioClip.prototype, "openBox", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u65b9\u5757\u7834\u51b0",
        tooltip: "\u5982\u679c\u6d88\u9664\u4e86\u51b0\u5757\u65c1\u8fb9\u7684\u65b9\u5757\uff0c\u5219\u51b0\u5757\u4f1a\u89e3\u51bb\uff0c\u89e3\u51bb\u65f6\u64ad\u653e\u672c\u97f3\u6548"
      }) ], gameAudioClip.prototype, "unfreezeGrid", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u70b8\u5f39\u7206\u70b8",
        tooltip: "\u6709\u4e9b\u65b9\u5757\u4e0a\u4f1a\u5e26\u6709\u70b8\u5f39\uff0c\u5982\u679c\u5012\u8ba1\u65f6\u7ed3\u675f\uff0c\u70b8\u5f39\u7206\u70b8\u65f6\u64ad\u653e\u672c\u97f3\u6548"
      }) ], gameAudioClip.prototype, "bombExplosion", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u91cd\u751f\u65b9\u5757\u51fa\u73b0",
        tooltip: "\u5f53\u91cd\u751f\u65b9\u5757\u51fa\u73b0\u65f6\uff0c\u64ad\u653e\u672c\u97f3\u6548"
      }) ], gameAudioClip.prototype, "rebirthGrid", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u95ea\u7535\u5f85\u673a",
        tooltip: "\u70b9\u51fb\u95ea\u7535\u6309\u94ae\u540e\uff0c\u9700\u8981\u9009\u62e9\u683c\u5b50\u65f6\u7b49\u5f85\u97f3\u6548"
      }) ], gameAudioClip.prototype, "lightningSelect", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u9009\u4e2d\u683c\u5b50\u97f3\u6548",
        tooltip: "\u683c\u5b50\u88ab\u9009\u4e2d\u65f6\u8981\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "gridSelect", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u63d0\u9192\u65f6\u95f4\u5feb\u5230\u4e86",
        tooltip: "\u5f53\u5173\u5361\u5012\u8ba1\u65f6\u65f6\u95f4\u5feb\u5230\u7684\u65f6\u5019\u64ad\u653e"
      }) ], gameAudioClip.prototype, "timeTip", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u5012\u8ba1\u65f6\u97f3\u6548",
        tooltip: "\u5f53\u5173\u5361\u5012\u8ba1\u65f6\u5269\u4f59\u4e0d\u591a\u7684\u65f6\u5019\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "timeCountdown", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u8fde\u51fb\u5956\u52b1",
        tooltip: "\u5f53\u8fde\u51fb\u5956\u52b1\u98de\u5230\u76ee\u6807\u4f4d\u7f6e\u7684\u65f6\u5019\u64ad\u653e"
      }) ], gameAudioClip.prototype, "getComboAward", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u83b7\u5f97\u8fde\u51fb\u5956\u52b1",
        tooltip: "\u5f53\u8fde\u51fb\u5956\u52b1\u8fbe\u5230\u4e00\u5b9a\u6570\u91cf\u53ef\u83b7\u5f97\u5956\u52b1\u65f6\u64ad\u653e\u7684\u58f0\u97f3"
      }) ], gameAudioClip.prototype, "comboAward", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u70b9\u51fb\u51b0\u51bb",
        tooltip: "\u70b9\u51fb\u51b0\u51bb\u683c\u5b50\u65f6\u64ad\u653e\u7684\u97f3\u6548"
      }) ], gameAudioClip.prototype, "clickFreeze", void 0);
      gameAudioClip = gameAudioClip_1 = __decorate([ ccclass ], gameAudioClip);
      return gameAudioClip;
    }(cc.Component);
    exports.default = gameAudioClip;
    cc._RF.pop();
  }, {} ],
  gameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10d25lzIfVEJ6AM++3LsCza", "gameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _gameData = function() {
      function _gameData() {
        this.curLevel = 1;
        this.curTipCount = 0;
        this.curLightningCount = 0;
        this.curResetCount = 0;
        this.curFreezeTimeCount = 0;
        this.archive = {};
      }
      return _gameData;
    }();
    exports.gameData = new _gameData();
    function resetGameData() {
      exports.gameData = new _gameData();
      saveGameData();
      loadGameData();
      saveThemeSelect(0);
    }
    exports.resetGameData = resetGameData;
    var SAVE_DATA = "GAME_DATA";
    function saveGameData() {
      cc.sys.localStorage.setItem(SAVE_DATA, JSON.stringify(exports.gameData));
    }
    exports.saveGameData = saveGameData;
    function loadGameData() {
      var d = cc.sys.localStorage.getItem(SAVE_DATA);
      d && (exports.gameData = JSON.parse(d));
      var themeID = 0;
      exports.gameData.archive[themeID] = [];
      for (var i = 0; i < 20; ++i) exports.gameData.archive[themeID].push(i);
      loadIcons();
    }
    exports.loadGameData = loadGameData;
    var themeSelectIndex = null;
    var Theme_Select = "Theme_Select";
    function saveThemeSelect(index) {
      themeSelectIndex = index;
      cc.sys.localStorage.setItem(Theme_Select, index.toString());
    }
    exports.saveThemeSelect = saveThemeSelect;
    function loadThemeSelect() {
      if (null == themeSelectIndex) {
        var s = cc.sys.localStorage.getItem(Theme_Select);
        themeSelectIndex = s ? Number(s) : 0;
      }
      return themeSelectIndex;
    }
    exports.loadThemeSelect = loadThemeSelect;
    exports.ThemeIconNames = [ "icona_", "iconb_", "iconc_", "icond_", "icone_", "iconf_" ];
    var iconPath = "texture/\u6e38\u620f\u754c\u9762/icons/";
    function setGridIcon(id, sp, themeID) {
      void 0 === themeID && (themeID = null);
      if (!sp) return;
      null == themeID ? themeID = loadThemeSelect() : themeID;
      var iconName = exports.ThemeIconNames[themeID];
      var itemID = id + 1;
      var path = iconPath + iconName + (itemID < 10 ? "0" + itemID : itemID);
      sp.spriteFrame = null;
      2 == isLoadIcons ? sp.spriteFrame = cc.loader.getRes(path, cc.SpriteFrame) : cc.loader.loadRes(path, cc.SpriteFrame, function(eror, res) {
        eror ? cc.error(eror.message) : sp.spriteFrame = res;
      });
    }
    exports.setGridIcon = setGridIcon;
    var isLoadIcons = 0;
    function loadIcons() {
      if (0 == isLoadIcons) {
        isLoadIcons = 1;
        cc.loader.loadResDir(iconPath, function(error) {
          error ? cc.log(error.message) : isLoadIcons = 2;
        });
      }
    }
    cc._RF.pop();
  }, {} ],
  gameLib: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a28afQeXtFgqTCC2vLy5Gt", "gameLib");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _gameLib = function() {
      function _gameLib() {
        this.deviceGuid = "deviceGuid";
        this._timeTemp = 0;
        this.LS_GUID = "LS_GUID";
        this.guid = null;
        this.getDayCountForMonth = function(year, month) {
          var runYear = false;
          year % 4 == 0 && (runYear = true);
          return 2 == month ? runYear ? 29 : 28 : month <= 7 ? month % 2 == 0 ? 30 : 31 : month % 2 == 0 ? 31 : 30;
        };
        this.getFixedNumString = function(preNum) {
          preNum = Number(preNum) / 1e4;
          return this.getToFixedNumString(preNum);
        };
        this.getToFixedNumString = function(preNum) {
          var strNum = String(preNum);
          if (-1 == strNum.indexOf(".")) return strNum + ".00";
          var splitStrs = strNum.split(".");
          return splitStrs[1].length >= 2 ? splitStrs[0] + "." + splitStrs[1].substring(0, 2) : splitStrs[0] + "." + splitStrs[1] + 0;
        };
        this.formatDate = function(date, format) {
          if (void 0 == date && void 0 == format) {
            date = new Date();
            format = "yyyy-MM-dd HH:mm:ss";
          } else if ("string" == typeof date) {
            format = date;
            date = new Date();
          } else void 0 === format && (format = "yyyy-MM-dd HH:mm:ss");
          var map = {
            y: date.getFullYear() + "",
            M: date.getMonth() + 1 + "",
            d: date.getDate() + "",
            H: date.getHours(),
            m: date.getMinutes() + "",
            s: date.getSeconds() + "",
            q: Math.floor((date.getMonth() + 3) / 3) + "",
            f: date.getMilliseconds() + ""
          };
          map["H"] > 12 ? map["h"] = map["H"] - 12 + "" : map["h"] = map["H"] + "";
          map["H"] += "";
          var reg = "yMdHhmsqf";
          var all = "", str = "";
          for (var i = 0, n = 0; i < reg.length; i++) {
            n = format.indexOf(reg[i]);
            if (n < 0) continue;
            all = "";
            for (;n < format.length; n++) {
              if (format[n] != reg[i]) break;
              all += reg[i];
            }
            if (all.length > 0) {
              if (all.length == map[reg[i]].length) str = map[reg[i]]; else if (all.length > map[reg[i]].length) str = "f" == reg[i] ? map[reg[i]] + this.charString("0", all.length - map[reg[i]].length) : this.charString("0", all.length - map[reg[i]].length) + map[reg[i]]; else switch (reg[i]) {
               case "y":
                str = map[reg[i]].substr(map[reg[i]].length - all.length);
                break;

               case "f":
                str = map[reg[i]].substr(0, all.length);
                break;

               default:
                str = map[reg[i]];
              }
              format = format.replace(all, str);
            }
          }
          return format;
        };
        this.charString = function(char, count) {
          var str = "";
          while (count--) str += char;
          return str;
        };
        this.getUrlImage = function(url, onLoaded) {
          void 0 === onLoaded && (onLoaded = null);
          if (!url || "" == url) return null;
          cc.loader.load({
            url: url,
            type: "png"
          }, function(err, img) {
            if (onLoaded) if (err) {
              cc.error(err);
              onLoaded(null);
            } else onLoaded(img);
          });
        };
      }
      _gameLib.prototype.getOSString = function() {
        if (!cc.sys.isBrowser) return "\u5176\u4ed62";
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
          return "\u5176\u4ed61";
        }
      };
      _gameLib.prototype.creatrBitInt = function(int, num, bit, index) {
        var toint = int;
        toint += num << index;
        index += bit;
        return [ toint, index ];
      };
      _gameLib.prototype.rotatePos = function(x, y, rx0, ry0, a) {
        var x0 = (x - rx0) * Math.cos(a) - (y - ry0) * Math.sin(a) + rx0;
        var y0 = (x - rx0) * Math.sin(a) + (y - ry0) * Math.cos(a) + ry0;
        return {
          x: x0,
          y: y0
        };
      };
      _gameLib.prototype.GetRandomNum = function(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return Min + Math.round(Rand * Range);
      };
      _gameLib.prototype.removeArrayElement = function(array, element) {
        if (array && array.length && element) for (var i = 0; i < array.length; ++i) if (array[i] == element) {
          array.splice(i, 1);
          return true;
        }
        return false;
      };
      _gameLib.prototype.getDisance = function(lat1, lng1, lat2, lng2) {
        var toRad = function(d) {
          return d * Math.PI / 180;
        };
        var dis = 0;
        var radLat1 = toRad(lat1);
        var radLat2 = toRad(lat2);
        var deltaLat = radLat1 - radLat2;
        var deltaLng = toRad(lng1) - toRad(lng2);
        var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
        return Math.floor(6378137 * dis * 100) / 100;
      };
      _gameLib.prototype.rgb2hex = function(r, g, b) {
        return 0 + (r << 16) + (g << 8) + b;
      };
      _gameLib.prototype.getTime = function(time) {
        var hours = Math.floor(time / 36e5);
        var leave2 = time % 36e5;
        var minutes = Math.floor(leave2 / 6e4);
        var leave3 = leave2 % 6e4;
        var seconds = Math.round(leave3 / 1e3);
        return hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
      };
      _gameLib.prototype.getMidDate = function(time) {
        var date = new Date();
        var now = date.getTime();
        var mid = now - time;
        var str = "\u79d2";
        if (mid / 31104e6 >= 1) {
          mid = Math.floor(mid / 31104e6);
          str = "\u5e74";
        } else if (mid / 2592e6 >= 1) {
          mid = Math.floor(mid / 2592e6);
          str = "\u6708";
        } else if (mid / 864e5 >= 1) {
          mid = Math.floor(mid / 864e5);
          str = "\u65e5";
        } else if (mid / 36e5 >= 1) {
          mid = Math.floor(mid / 36e5);
          str = "\u5c0f\u65f6";
        } else if (mid / 6e4 >= 1) {
          mid = Math.floor(mid / 6e4);
          str = "\u5206\u949f";
        } else if (mid / 1e3 >= 1) {
          mid = Math.floor(mid / 1e3);
          str = "\u79d2";
        }
        return mid > 0 ? Math.abs(mid) + str + "\u524d" : 0 + str + "\u524d";
      };
      _gameLib.prototype.getDHMBySecond = function(second) {
        void 0 === second && (second = null);
        var str = "";
        str += this.getDayBySecond(second, true);
        str += this.getHourBySecond(null, true);
        str += this.getMinutesBySecond(null, true);
        return str;
      };
      _gameLib.prototype.getYearBySecond = function(second) {
        void 0 === second && (second = null);
        var splitTime = 0;
        null != second && (this._timeTemp = second);
        var str = "";
        if (this._timeTemp / 31104e3 >= 1) {
          splitTime = Math.floor(this._timeTemp / 31104e3);
          str += splitTime + "\u5e74";
          this._timeTemp -= 31104e3 * splitTime;
        }
        return str;
      };
      _gameLib.prototype.getMonthBySecond = function(second, only) {
        void 0 === second && (second = null);
        void 0 === only && (only = false);
        var splitTime = 0;
        null != second && (this._timeTemp = second);
        var str = "";
        only || (str += this.getYearBySecond());
        if (this._timeTemp / 2592e3 >= 1) {
          splitTime = Math.floor(this._timeTemp / 2592e3);
          str += splitTime + "\u6708";
          this._timeTemp -= 2592e3 * splitTime;
        }
        return str;
      };
      _gameLib.prototype.getDayBySecond = function(second, only) {
        void 0 === second && (second = null);
        void 0 === only && (only = false);
        var splitTime = 0;
        null != second && (this._timeTemp = second);
        var str = "";
        only || (str += this.getMonthBySecond());
        if (this._timeTemp / 86400 >= 1) {
          splitTime = Math.floor(this._timeTemp / 86400);
          str += splitTime + "\u5929";
          this._timeTemp -= 86400 * splitTime;
        }
        return str;
      };
      _gameLib.prototype.getHourBySecond = function(second, only) {
        void 0 === second && (second = null);
        void 0 === only && (only = false);
        var splitTime = 0;
        null != second && (this._timeTemp = second);
        var str = "";
        only || (str += this.getDayBySecond());
        if (this._timeTemp / 3600 >= 1) {
          splitTime = Math.floor(this._timeTemp / 3600);
          str += splitTime + "\u5c0f\u6642";
          this._timeTemp -= 3600 * splitTime;
        }
        return str;
      };
      _gameLib.prototype.getMinutesBySecond = function(second, only) {
        void 0 === second && (second = null);
        void 0 === only && (only = false);
        var splitTime = 0;
        null != second && (this._timeTemp = second);
        var str = "";
        only || (str += this.getHourBySecond());
        if (this._timeTemp / 60 >= 1) {
          splitTime = Math.floor(this._timeTemp / 60);
          str += splitTime + "\u5206";
          this._timeTemp -= 60 * splitTime;
        }
        return str;
      };
      _gameLib.prototype.getDateBySecond = function(second, only) {
        void 0 === second && (second = null);
        void 0 === only && (only = false);
        var splitTime = 0;
        null != second && (this._timeTemp = second);
        var str = "";
        only || (str += this.getMinutesBySecond());
        this._timeTemp >= 1 && (str += this._timeTemp + "\u79d2");
        return str;
      };
      _gameLib.prototype.getWordByNum = function(changeNum) {
        var str = "";
        var wordArr = [ "\u96f6", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341" ];
        if (0 == Math.floor(changeNum / 100)) {
          var decade = Math.floor(changeNum / 10);
          var unit = changeNum % 10;
          str = 0 == decade ? wordArr[unit] : 1 == decade ? "\u5341" + wordArr[unit] : wordArr[decade] + "\u5341" + wordArr[unit];
        }
        return str;
      };
      _gameLib.prototype.stringLimit = function(name, limit) {
        void 0 === limit && (limit = 6);
        if (!name || !name.length) return;
        var sum = 0;
        var num = 0;
        for (var i = 0; i < name.length; i++) {
          var a = name.charCodeAt(i);
          if (a >= 0 && a <= 128) {
            sum += 1;
            num < limit && (num += 1);
          } else {
            sum += 2;
            num < limit && (num += 2);
          }
        }
        if (sum > 2 * limit + 1) return name.substr(0, num) + "...";
        return name;
      };
      _gameLib.prototype.getGUID = function() {
        if (cc.sys.isNative) {
          var ret = null;
          switch (cc.sys.os) {
           case cc.sys.OS_IOS:
            ret = jsb.reflection.callStaticMethod("AppController", "getIMEI2:title:", "", "");
            break;

           case cc.sys.OS_ANDROID:
            ret = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIMEI2", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "title", "hahahahha");
          }
          return ret;
        }
        return this.getGUID_H5();
      };
      _gameLib.prototype.getGUID_H5 = function() {
        var generateGUID = function() {
          var d = new Date().getTime();
          var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (d + 16 * Math.random()) % 16 | 0;
            d = Math.floor(d / 16);
            return ("x" == c ? r : 3 & r | 8).toString(16);
          });
          return uuid;
        };
        if (!this.guid) {
          this.guid = cc.sys.localStorage.getItem(this.LS_GUID);
          if (!this.guid) {
            this.guid = generateGUID();
            this.guid && cc.sys.localStorage.setItem(this.LS_GUID, this.guid);
          }
        }
        return this.guid;
      };
      _gameLib.prototype.toUpperCaseRemoveSpace = function(str) {
        if (!str) return null;
        var ret = str.replace(" ", "");
        ret = ret.toUpperCase();
        return ret;
      };
      _gameLib.prototype.isSAInBA = function(smallArray, bigArray) {
        if (!smallArray || !bigArray || !smallArray.length || !bigArray.length) return false;
        for (var _i = 0, smallArray_1 = smallArray; _i < smallArray_1.length; _i++) {
          var v = smallArray_1[_i];
          var have = false;
          for (var _a = 0, bigArray_1 = bigArray; _a < bigArray_1.length; _a++) {
            var w = bigArray_1[_a];
            if (v == w) {
              have = true;
              break;
            }
          }
          if (false == have) return false;
        }
        return true;
      };
      _gameLib.prototype.numberToChinese = function(number) {
        var units = "\u4e2a\u5341\u767e\u5343\u4e07@#%\u4ebf^&~";
        var chars = "\u96f6\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d";
        var a = (number + "").split(""), s = [];
        if (a.length > 12) throw new Error("too big");
        for (var i = 0, j = a.length - 1; i <= j; i++) {
          (1 == j || 5 == j || 9 == j) && 0 == i ? "1" != a[i] && s.push(chars.charAt(Number(a[i]))) : s.push(chars.charAt(Number(a[i])));
          i != j && s.push(units.charAt(j - i));
        }
        return s.join("").replace(/\u96f6([\u5341\u767e\u5343\u4e07\u4ebf@#%^&~])/g, function(m, d, b) {
          b = units.indexOf(d);
          if (-1 != b) {
            if ("\u4ebf" == d) return d;
            if ("\u4e07" == d) return d;
            if ("0" == a[j - b]) return "\u96f6";
          }
          return "";
        }).replace(/\u96f6+/g, "\u96f6").replace(/\u96f6([\u4e07\u4ebf])/g, function(m, b) {
          return b;
        }).replace(/\u4ebf[\u4e07\u5343\u767e]/g, "\u4ebf").replace(/[\u96f6]$/, "").replace(/[@#%^&~]/g, function(m) {
          return {
            "@": "\u5341",
            "#": "\u767e",
            "%": "\u5343",
            "^": "\u5341",
            "&": "\u767e",
            "~": "\u5343"
          }[m];
        }).replace(/([\u4ebf\u4e07])([\u4e00-\u4e5d])/g, function(m, d, b, c) {
          c = units.indexOf(d);
          if (-1 != c && "0" == a[j - c]) return d + "\u96f6" + b;
          return m;
        });
      };
      _gameLib.prototype.findComboByArray = function(num, array) {
        if (!num || !array || num >= array.length) return [];
        var ret = [];
        var indexArray = [];
        for (var i = 0; i < num; ++i) indexArray.push(i);
        var find = function(retArray) {
          if (!retArray) return;
          var arrayTemp = [];
          for (var _i = 0, indexArray_1 = indexArray; _i < indexArray_1.length; _i++) {
            var v = indexArray_1[_i];
            arrayTemp.push(array[v]);
          }
          retArray.push(arrayTemp);
          var carry = function(indexArray, array, index) {
            void 0 === index && (index = null);
            var lastIndex = indexArray.length - 1;
            null != index ? index : index = lastIndex;
            if (indexArray[lastIndex] >= array.length) {
              if (index <= 0) return false;
              ++indexArray[index - 1];
              for (var i = index; i < indexArray.length; ++i) indexArray[i] = indexArray[i - 1] + 1;
              return carry(indexArray, array, index - 1);
            }
            return true;
          };
          ++indexArray[indexArray.length - 1];
          carry(indexArray, array) && find(retArray);
        };
        find(ret);
        return ret;
      };
      _gameLib.prototype.convertToSpacePos = function(tar, src) {
        var worldPos = tar.parent.convertToWorldSpaceAR(new cc.Vec2(tar.position.x, tar.position.y));
        return src.parent.convertToNodeSpaceAR(worldPos);
      };
      _gameLib.prototype.getChineseLabel2 = function(num) {
        try {
          var isF = "";
          if (num < 0) {
            isF = "-";
            num = Math.abs(num);
          }
          return isF + this.number_format(num, 2, ".", ",", "floor").toString();
        } catch (e) {
          cc.log("\u8f6c\u6362\u6570\u5b57\u9519\u8bef\uff1a" + e);
        }
        return;
      };
      _gameLib.prototype.number_format = function(number, decimals, dec_point, thousands_sep, roundtag) {
        number = (number + "").replace(/[^0-9+-Ee.]/g, "");
        roundtag = roundtag || "ceil";
        var n = isFinite(+number) ? +number : 0, prec = isFinite(+decimals) ? Math.abs(decimals) : 0, sep = "undefined" === typeof thousands_sep ? "," : thousands_sep, dec = "undefined" === typeof dec_point ? "." : dec_point, s = [], toFixedFix = function(n, prec) {
          var k = Math.pow(10, prec);
          return "" + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(2 * prec))).toFixed(2 * prec)) / k;
        };
        s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
        var re = /(-?\d+)(\d{3})/;
        while (re.test(s[0])) s[0] = s[0].replace(re, "$1" + sep + "$2");
        var num = 0;
        if ((s[1] || "").length < prec && 0 != (s[1] || "").length) {
          s[1] = s[1] || "";
          num++;
          s[1] += new Array(prec - s[1].length + 1).join("0");
        } else (s[1] || "").length >= prec && num++;
        return num ? s.join(dec) : s;
      };
      _gameLib.prototype.isHasElementOne = function(arr, value) {
        for (var i = 0, vlen = arr.length; i < vlen; i++) if (arr[i] == value) return i;
      };
      _gameLib.prototype.isJSON = function(obj) {
        try {
          var str = JSON.stringify(obj);
          return str.indexOf("{") > -1;
        } catch (e) {
          cc.log(e);
          return false;
        }
      };
      _gameLib.prototype.byteArrayToBase64 = function(array) {
        var base64hash = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var i = 0, prev, ascii, mod, result = [];
        while (i < array.length) {
          ascii = array[i];
          mod = i % 3;
          switch (mod) {
           case 0:
            result.push(base64hash.charAt(ascii >> 2));
            break;

           case 1:
            result.push(base64hash.charAt((3 & prev) << 4 | ascii >> 4));
            break;

           case 2:
            result.push(base64hash.charAt((15 & prev) << 2 | ascii >> 6));
            result.push(base64hash.charAt(63 & ascii));
          }
          prev = ascii;
          i++;
        }
        if (0 == mod) {
          result.push(base64hash.charAt((3 & prev) << 4));
          result.push("==");
        } else if (1 == mod) {
          result.push(base64hash.charAt((15 & prev) << 2));
          result.push("=");
        }
        return result.join("");
      };
      _gameLib.prototype.base64ToByteArray = function(s) {
        var base64hash = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        s = s.replace(/\s|=/g, "");
        var cur, prev, mod, i = 0, result = [];
        while (i < s.length) {
          cur = base64hash.indexOf(s.charAt(i));
          mod = i % 4;
          switch (mod) {
           case 0:
            break;

           case 1:
            result.push(prev << 2 | cur >> 4);
            break;

           case 2:
            result.push((15 & prev) << 4 | cur >> 2);
            break;

           case 3:
            result.push((3 & prev) << 6 | cur);
          }
          prev = cur;
          i++;
        }
        return result;
      };
      _gameLib.prototype.getUrlParams = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (null != r) return decodeURI(r[2]);
        return null;
      };
      _gameLib.prototype.CryptoJS_stringify = function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var u8 = new Int8Array(sigBytes);
        for (var i = 0; i < sigBytes; i++) {
          var byte = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          u8[i] = byte;
        }
        return u8;
      };
      _gameLib.prototype.json2Int8Array = function(json) {
        var str = JSON.stringify(json);
        var byte = this.stringToByte(str);
        var u8 = new Int8Array(byte);
        return u8;
      };
      _gameLib.prototype.Int8Array2Json = function(u8arr) {
        var str = this.byteToString(u8arr);
        var json = JSON.parse(str);
        return json;
      };
      _gameLib.prototype.stringToByte = function(str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
          c = str.charCodeAt(i);
          if (c >= 65536 && c <= 1114111) {
            bytes.push(c >> 18 & 7 | 240);
            bytes.push(c >> 12 & 63 | 128);
            bytes.push(c >> 6 & 63 | 128);
            bytes.push(63 & c | 128);
          } else if (c >= 2048 && c <= 65535) {
            bytes.push(c >> 12 & 15 | 224);
            bytes.push(c >> 6 & 63 | 128);
            bytes.push(63 & c | 128);
          } else if (c >= 128 && c <= 2047) {
            bytes.push(c >> 6 & 31 | 192);
            bytes.push(63 & c | 128);
          } else bytes.push(255 & c);
        }
        return bytes;
      };
      _gameLib.prototype.byteToString = function(arr) {
        if ("string" === typeof arr) return arr;
        var str = "", _arr = arr;
        for (var i = 0; i < _arr.length; i++) {
          var one = _arr[i].toString(2), v = one.match(/^1+?(?=0)/);
          if (v && 8 == one.length) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) store += _arr[st + i].toString(2).slice(2);
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
          } else str += String.fromCharCode(_arr[i]);
        }
        return str;
      };
      _gameLib.prototype.getChineseLabel = function(num) {
        try {
          var isF = "";
          if (num < 0) {
            isF = "-";
            num = Math.abs(num);
          }
          return num > 1e12 ? isF + Math.floor(num / 1e6) / 100 + "\u5146" : num > 1e8 ? isF + Math.floor(num / 1e6) / 100 + "\u4ebf" : num > 1e4 ? isF + Math.floor(num / 100) / 100 + "\u4e07" : isF + num.toString();
        } catch (e) {
          cc.log("\u8f6c\u6362\u6570\u5b57\u9519\u8bef\uff1a" + e);
        }
      };
      _gameLib.prototype.getWeightedRandomAtom = function(atomList, random) {
        if (atomList.length <= 0) return 0;
        var weightSum = 0;
        for (var _i = 0, atomList_1 = atomList; _i < atomList_1.length; _i++) {
          var atom = atomList_1[_i];
          weightSum += atom;
        }
        for (var _a = 0, atomList_2 = atomList; _a < atomList_2.length; _a++) {
          var atom = atomList_2[_a];
          random -= atom;
          if (random < 0) return atom;
        }
        return 0;
      };
      _gameLib.prototype.writeObj = function(obj) {
        var overObj = {};
        try {
          var fun_1 = function(json, kongnum) {
            void 0 === kongnum && (kongnum = 0);
            var str = "";
            var k = "";
            for (var i = 0; i < kongnum; i++) k += " ";
            for (var i in json) {
              if (overObj[i]) continue;
              overObj[i] = true;
              var property = json[i];
              if ("object" === typeof property) if (Array.isArray(property) && "object" != typeof property[0]) {
                str += k + i + " = [ ";
                for (var _i = 0, property_1 = property; _i < property_1.length; _i++) {
                  var i_1 = property_1[_i];
                  str += i_1 + ", ";
                }
                str += " ]\n";
              } else str += k + i + " = [ \n" + fun_1(property, kongnum + 4) + k + "]\n"; else str += k + '"' + i + '" = ' + property + "\n";
            }
            return str;
          };
          var description = fun_1(obj);
          cc.log("\u6253\u5370\u51fa\u5bf9\u8c61\uff0c\u5185\u5bb9\u4e3a \uff1a\n" + description);
        } catch (e) {
          cc.log("\u6253\u5370\u51fa\u9519\uff1a" + e);
        }
      };
      _gameLib.prototype.ip2Int = function(pip) {
        var num = 0;
        var nip = pip.split(".");
        num = 256 * Number(nip[0]) * 256 * 256 + 256 * Number(nip[1]) * 256 + 256 * Number(nip[2]) + Number(nip[3]);
        num >>>= 0;
        return num;
      };
      _gameLib.prototype.initClassMemberArray = function(array, memberName, obj) {
        for (var i = 0; true; ++i) {
          var v = obj[memberName + i];
          if (!v) break;
          array.push(v);
        }
      };
      _gameLib.prototype.saveForBrowser = function(textToWrite, fileNameToSaveAs) {
        var textFileAsBlob = new Blob([ textToWrite ], {
          type: "application/json"
        });
        this.downloadLink || (this.downloadLink = document.createElement("a"));
        this.downloadLink.download = fileNameToSaveAs;
        this.downloadLink.innerHTML = "Download File";
        if (null != window.webkitURL) this.downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob); else {
          this.downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          this.downloadLink.style.display = "none";
          document.body.appendChild(this.downloadLink);
        }
        this.downloadLink.click();
      };
      _gameLib.prototype.chooseLocalPhoto = function(callback) {
        var _this = this;
        if (!callback) return;
        if (!this.elementSelectPhoto) {
          this.elementSelectPhoto = document.createElement("input");
          this.elementSelectPhoto.accept = "image/jpeg,image/jpg,image/png";
          this.elementSelectPhoto.type = "file";
        }
        this.elementSelectPhoto.onchange = function() {
          if (_this.elementSelectPhoto.files && _this.elementSelectPhoto.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
              var imagUrl = e.target.result;
              callback(imagUrl);
            };
            reader.readAsDataURL(_this.elementSelectPhoto.files[0]);
          }
        };
        this.elementSelectPhoto.click();
      };
      _gameLib.prototype.getSpriteFrameByBase64 = function(base64, onLoaded) {
        void 0 === onLoaded && (onLoaded = null);
        if (!base64 || !base64.length) return null;
        var img = new Image();
        img.src = base64;
        var texture = new cc.Texture2D();
        texture.initWithElement(img);
        texture.handleLoadedTexture();
        var sf = new cc.SpriteFrame(texture);
        onLoaded && (sf.textureLoaded() ? onLoaded(sf) : sf.once("load", function() {
          onLoaded(sf);
        }));
        return sf;
      };
      return _gameLib;
    }();
    exports.gameLib = new _gameLib();
    cc._RF.pop();
  }, {} ],
  gameMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53148qX5vtI+am5lbpo5vUJ", "gameMain");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gridManager_1 = require("./gridManager");
    var comboText_1 = require("./comboText");
    var level_parameter_1 = require("./level_parameter");
    var gameAudioClip_1 = require("./gameAudioClip");
    var comboAward_1 = require("./comboAward");
    var setting_1 = require("./setting");
    var cover_1 = require("./cover");
    var subject_1 = require("./subject");
    var countDown_1 = require("../../commonLib/component/countDown");
    var gameData_1 = require("./gameData");
    var addUI_1 = require("../../commonLib/component/addUI");
    var gameLib_1 = require("../../commonLib/lib/gameLib");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameMain = function(_super) {
      __extends(gameMain, _super);
      function gameMain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.level_parameter = null;
        _this.level = null;
        _this.score = null;
        _this.redPackets = null;
        _this.time = null;
        _this.timeImg = null;
        _this.comboText = null;
        _this.comboAwardPrefab = null;
        _this.comboAwardPosNode = null;
        _this.comboTime = 2;
        _this.comboAwardGap = 5;
        _this.tipButton = null;
        _this.bombButton = null;
        _this.realignmentButton = null;
        _this.freezeTimeButton = null;
        _this.tipLabel = null;
        _this.bombLabel = null;
        _this.realignmentLabel = null;
        _this.freezeTimeLabel = null;
        _this.gridManager = null;
        _this.gameOverNode = null;
        _this.skipLevelEdit = null;
        _this.settlement = null;
        _this.cover = null;
        _this.curCoverLevel = null;
        _this.subject = null;
        _this.freezeSpine = null;
        _this.timePorcessSP = null;
        _this.timePorcessSF = null;
        _this.timePorcessSF2 = null;
        _this.isGameOver = false;
        _this.isCanCombo = false;
        _this.curComboNum = 0;
        _this.curComboAward = null;
        _this.comboAwardNodePool = new cc.NodePool();
        _this.curComboAwardTween = null;
        _this.curScore = 0;
        _this.isPauseGame = false;
        _this.isFreezeTime = false;
        _this.timeImgFillStart = 0;
        _this.timeImgFillEnd = 1;
        _this.timeImgFillRange = 1;
        return _this;
      }
      gameMain_1 = gameMain;
      gameMain.prototype.onLoad = function() {
        var _this = this;
        gameMain_1.instance = this;
        var guid = gameLib_1.gameLib.getGUID();
        console.error("GUID = " + guid);
        this.skipLevelEdit.string = "GUID = " + guid;
        setting_1.default.initVolume();
        this.freezeSpine.node.active = false;
        this.freezeSpine.setCompleteListener(function(te) {
          "BD_3" == te.animation.name && (_this.freezeSpine.node.active = false);
        });
        this.gridManager.initGrid();
      };
      gameMain.prototype.start = function() {
        gameData_1.loadGameData();
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
        this.gridManager.setBombSelectMode(false);
        this.cover.node.active = true;
        this.subject.node.active = false;
        this.curCoverLevel.string = gameData_1.gameData.curLevel.toString();
      };
      gameMain.prototype.onDestroy = function() {
        this.comboAwardNodePool.clear();
      };
      gameMain.prototype.\u70b9\u51fb\u5f00\u59cb\u6e38\u620f = function() {
        var _this = this;
        var state = this.cover.playHideAni();
        this.scheduleOnce(function() {
          _this.cover.node.active = false;
          _this.subject.node.active = true;
          var state = _this.subject.playShowAni();
          _this.updateItemsCount();
          _this.scheduleOnce(function() {
            _this.gameStart();
          }, state.duration + .1);
        }, state.duration + .1);
      };
      gameMain.prototype.gameStart = function() {
        this.isGameOver = false;
        this.level.string = gameData_1.gameData.curLevel.toString();
        this.gridManager.setBombSelectMode(false);
        this.resetScore();
        this.unfreezeTime(false);
        var parameter = this.level_parameter.getLevelParameter(gameData_1.gameData.curLevel);
        this.setTime(parameter.time);
        this.gridManager.gameStart(parameter);
        this.updateItemsCount();
      };
      gameMain.prototype.gameOver = function(isTime) {
        var _this = this;
        if (this.isGameOver) return;
        this.isGameOver = true;
        this.gameOverNode.addUI(null, function(ui) {
          ui.setContinueCallback(_this.continueGame.bind(_this));
          ui.setRestartCallback(_this.gameStart.bind(_this));
          ui.setGoHomeCallback(_this.goHome.bind(_this));
          ui.show(isTime);
        }, "gameOver");
        this.unfreezeTime(true);
        this.time.pause();
      };
      gameMain.prototype.continueGame = function() {
        if (!this.isGameOver) return;
        this.isGameOver = false;
        this.time.resetTime();
        this.time.resume();
        this.gridManager.clearAllBomb();
      };
      gameMain.prototype.\u5012\u8ba1\u65f6\u56de\u8c03 = function(event, time) {
        10 == time ? gameAudioClip_1.default.playTimeTip() : time < 10 && gameAudioClip_1.default.playTimeCountdown();
        time <= 0 && this.gameOver(true);
      };
      gameMain.prototype.setTime = function(time) {
        this.time.setTime(time);
        this.time.resume();
      };
      gameMain.prototype.resetCombo = function() {
        this.isCanCombo = false;
        this.curComboNum = 0;
        if (this.curComboAward) {
          this.comboAwardNodePool.put(this.curComboAward.node);
          this.curComboAward = null;
        }
      };
      gameMain.prototype.onCombo = function() {
        this.unschedule(this.resetCombo);
        if (this.isCanCombo) {
          0 == this.curComboNum && this.createComboAward();
          ++this.curComboNum;
          var progress = this.curComboNum % this.comboAwardGap;
          this.onComboAwardProgress(progress / this.comboAwardGap);
          if (0 == progress) {
            this.onComboAward();
            gameAudioClip_1.default.playComboAward();
          }
          this.comboText.setCombo(this.curComboNum);
        } else this.isCanCombo = true;
        this.scheduleOnce(this.resetCombo, this.comboTime);
        return this.curComboNum;
      };
      gameMain.prototype.onComboAwardProgress = function(progress) {
        var _this = this;
        void 0 === progress && (progress = 0);
        if (this.curComboAward) {
          if (this.curComboAwardTween) {
            this.curComboAwardTween.stop();
            this.curComboAwardTween = null;
          }
          0 == progress && (progress = 1);
          this.curComboAwardTween = cc.tween(this.curComboAward.node).to(.25, {
            scale: progress
          }, {
            easing: "backOut"
          }).call(function() {
            _this.curComboAwardTween = null;
          }).start();
        }
      };
      gameMain.prototype.createComboAward = function() {
        this.curComboAward && this.comboAwardNodePool.put(this.curComboAward.node);
        var node = this.comboAwardNodePool.get();
        node || (node = cc.instantiate(this.comboAwardPrefab));
        node.scale = 0;
        node.x = this.comboAwardPosNode.x;
        node.y = this.comboAwardPosNode.y;
        this.node.addChild(node);
        this.curComboAward = node.getComponent(comboAward_1.default);
        this.curComboAward.randomComboAwardID();
        return this.curComboAward;
      };
      gameMain.prototype.onComboAward = function() {
        var _this = this;
        var tarButton = null;
        switch (this.curComboAward.awardID) {
         case 0:
          tarButton = this.tipButton;
          break;

         case 1:
          tarButton = this.bombButton;
          break;

         case 2:
          tarButton = this.realignmentButton;
          break;

         case 3:
          tarButton = this.freezeTimeButton;
        }
        if (tarButton) {
          var getChildByName_1 = function(name, node) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
              var v = _a[_i];
              return v.name == name ? v : getChildByName_1(name, v);
            }
          };
          var child = getChildByName_1("icon", tarButton.node);
          this.curComboAward.moveTo(child, function(award) {
            var tweenNode = null;
            switch (award.awardID) {
             case 0:
              ++gameData_1.gameData.curTipCount;
              tweenNode = _this.tipLabel.node.parent;
              break;

             case 1:
              ++gameData_1.gameData.curLightningCount;
              tweenNode = _this.bombLabel.node.parent;
              break;

             case 2:
              ++gameData_1.gameData.curResetCount;
              tweenNode = _this.realignmentLabel.node.parent;
              break;

             case 3:
              ++gameData_1.gameData.curFreezeTimeCount;
              tweenNode = _this.freezeTimeLabel.node.parent;
            }
            tweenNode && cc.tween(tweenNode).to(.15, {
              scale: 1.2
            }).to(.15, {
              scale: 1
            }).start();
            _this.updateItemsCount();
            gameAudioClip_1.default.playGetComboAward();
            award.awardID = -1;
            _this.scheduleOnce(function() {
              _this.comboAwardNodePool.put(award.node);
            }, 1);
          });
          this.curComboAward = null;
          this.createComboAward();
        }
      };
      gameMain.prototype.onLinkRemoved = function(dis) {
        this.curScore += dis;
        this.score.string = this.curScore.toString();
      };
      gameMain.prototype.resetScore = function() {
        this.resetCombo();
        this.curScore = 0;
        this.score.string = "0";
      };
      gameMain.prototype.nextLevel = function(delayTime) {
        var _this = this;
        void 0 === delayTime && (delayTime = null);
        var showSettlement = function() {
          _this.settlement.addUI(null, function(ui) {
            ui.setNextlevelCallback(_this.onClickNextLevel.bind(_this));
            ui.setGoHomeCallback(_this.goHome.bind(_this));
            ui.setScore(_this.curScore, _this.time.getTime(), _this.gridManager.getTotalGridCount());
            ui.show();
          }, "settlement");
        };
        this.unfreezeTime(true);
        this.freezeTime(false, 0);
        delayTime ? this.scheduleOnce(showSettlement, delayTime) : showSettlement();
      };
      gameMain.prototype.onClickNextLevel = function() {
        this.gameStart();
      };
      gameMain.prototype.addItem = function(id, num) {
        var _this = this;
        addUI_1.default.addUI("addItem", function(ui) {
          _this.pauseGame();
          ui.setDestroyCallback(function() {
            _this.resumeGame();
          });
          ui.setData(id, num);
          ui.setCallback(function() {
            switch (id) {
             case 0:
              gameData_1.gameData.curTipCount += num;
              break;

             case 1:
              gameData_1.gameData.curLightningCount += num;
              break;

             case 2:
              gameData_1.gameData.curResetCount += num;
              break;

             case 3:
              gameData_1.gameData.curFreezeTimeCount += num;
            }
            _this.updateItemsCount();
          });
        }, "addItem");
      };
      gameMain.prototype.\u70b9\u51fb\u63d0\u793a = function() {
        if (gameData_1.gameData.curTipCount > 0) {
          --gameData_1.gameData.curTipCount;
          this.updateItemsCount();
          this.gridManager.autoLinkGrid();
        } else this.addItem(0, 3);
      };
      gameMain.prototype.onBombSelect = function(select) {
        if (select) {
          --gameData_1.gameData.curLightningCount;
          this.updateItemsCount();
        }
      };
      gameMain.prototype.\u70b9\u51fb\u70b8\u5f39 = function() {
        gameData_1.gameData.curLightningCount > 0 ? this.gridManager.setBombSelectMode(true) : this.addItem(1, 1);
      };
      gameMain.prototype.\u70b9\u51fb\u91cd\u6392 = function() {
        if (gameData_1.gameData.curResetCount > 0) {
          --gameData_1.gameData.curResetCount;
          this.updateItemsCount();
          this.gridManager.randomGridsPos();
        } else this.addItem(2, 1);
      };
      gameMain.prototype.\u70b9\u51fb\u51bb\u7ed3\u65f6\u95f4 = function() {
        if (gameData_1.gameData.curFreezeTimeCount > 0) {
          --gameData_1.gameData.curFreezeTimeCount;
          this.updateItemsCount();
          this.freezeTime();
        } else this.addItem(3, 1);
      };
      gameMain.prototype.pauseGame = function() {
        if (!this.isPauseGame) {
          this.isPauseGame = true;
          this.time.pause();
          this.gridManager.pauseGenerateGrid();
          this.gridManager.pauseAllBomb();
          cc.director.getScheduler().pauseTarget(this);
        }
      };
      gameMain.prototype.resumeGame = function() {
        if (this.isPauseGame) {
          this.isPauseGame = false;
          if (!this.isFreezeTime) {
            this.time.resume();
            this.gridManager.resumeGenerateGrid();
            this.gridManager.resumeAllBomb();
          }
          cc.director.getScheduler().resumeTarget(this);
        }
      };
      gameMain.prototype.freezeTime = function(playSound, time) {
        void 0 === playSound && (playSound = true);
        void 0 === time && (time = 7);
        if (!this.isFreezeTime) {
          this.isFreezeTime = true;
          this.time.pause();
          this.gridManager.pauseGenerateGrid();
          this.gridManager.pauseAllBomb();
          if (playSound) {
            gameAudioClip_1.default.playFreezeTime();
            this.freezeSpine.node.active = true;
            this.freezeSpine.setAnimation(0, "BD_1", false);
            this.freezeSpine.addAnimation(0, "BD_2", true);
            this.timePorcessSP.spriteFrame = this.timePorcessSF2;
          }
          time && this.scheduleOnce(this.unfreezeTime, time);
          this.freezeTimeButton.interactable = false;
        }
      };
      gameMain.prototype.unfreezeTime = function(playSound) {
        void 0 === playSound && (playSound = true);
        if (this.isFreezeTime) {
          this.isFreezeTime = false;
          this.timePorcessSP.spriteFrame = this.timePorcessSF;
          playSound = "boolean" != typeof playSound || playSound;
          this.unschedule(this.unfreezeTime);
          this.time.resume();
          this.gridManager.resumeGenerateGrid();
          this.gridManager.resumeAllBomb();
          if (playSound) {
            gameAudioClip_1.default.stopFreezeTime();
            this.freezeSpine.setAnimation(0, "BD_3", false);
          } else this.freezeSpine.node.active = false;
          gameData_1.gameData.curFreezeTimeCount > 0 && (this.freezeTimeButton.interactable = true);
        }
      };
      gameMain.prototype.updateItemsCount = function() {
        this.tipLabel.string = gameData_1.gameData.curTipCount.toString();
        this.bombLabel.string = gameData_1.gameData.curLightningCount.toString();
        this.realignmentLabel.string = gameData_1.gameData.curResetCount.toString();
        this.freezeTimeLabel.string = gameData_1.gameData.curFreezeTimeCount.toString();
      };
      gameMain.prototype.onTimePercentCallback = function(percent) {
        this.timeImg.fillRange = (this.timeImgFillStart + this.timeImgFillRange) * percent;
      };
      gameMain.prototype.goHome = function() {
        this.gridManager.clearAllGrids();
        this.subject.node.active = false;
        this.curCoverLevel.string = gameData_1.gameData.curLevel.toString();
        this.cover.show();
      };
      gameMain.prototype.\u8df3\u5173 = function() {
        if (this.skipLevelEdit) {
          var level = Number(this.skipLevelEdit.string);
          if (level) {
            gameData_1.gameData.curLevel = level - 1;
            this.nextLevel(0);
          }
        }
      };
      gameMain.prototype.\u4e0b\u4e00\u5173 = function() {
        this.curScore = 500;
        this.nextLevel();
      };
      gameMain.prototype.\u91cd\u7f6e\u6e38\u620f\u8bb0\u5f55 = function() {
        gameData_1.resetGameData();
        this.goHome();
      };
      var gameMain_1;
      gameMain.instance = null;
      __decorate([ property({
        type: level_parameter_1.default,
        displayName: "\u5173\u5361\u53c2\u6570",
        tooltip: "\u5173\u5361\u8ba1\u7b97\u516c\u5f0f\u53c2\u6570"
      }) ], gameMain.prototype, "level_parameter", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u5173\u5361"
      }) ], gameMain.prototype, "level", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u79ef\u5206"
      }) ], gameMain.prototype, "score", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u7ea2\u5305\u6570"
      }) ], gameMain.prototype, "redPackets", void 0);
      __decorate([ property({
        type: countDown_1.default,
        displayName: "\u5012\u8ba1\u65f6"
      }) ], gameMain.prototype, "time", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u5012\u8ba1\u65f6\u8fdb\u5ea6\u6761"
      }) ], gameMain.prototype, "timeImg", void 0);
      __decorate([ property({
        type: comboText_1.default,
        displayName: "\u8fde\u51fb\u6587\u5b57"
      }) ], gameMain.prototype, "comboText", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u8fde\u51fb\u5956\u52b1"
      }) ], gameMain.prototype, "comboAwardPrefab", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u8fde\u51fb\u5956\u52b1\u4f4d\u7f6e"
      }) ], gameMain.prototype, "comboAwardPosNode", void 0);
      __decorate([ property({
        displayName: "\u8fde\u51fb\u95f4\u9694\u65f6\u95f4",
        tooltip: "\u4e24\u6b21\u683c\u5b50\u6d88\u9664\u65f6\u95f4\u95f4\u9694\u4e0d\u8d85\u8fc7n(n:\u4e3a\u8fde\u51fb\u95f4\u9694\u65f6\u95f4)\u79d2\uff0c\u5219\u89c6\u4e3a\u8fde\u51fb"
      }) ], gameMain.prototype, "comboTime", void 0);
      __decorate([ property({
        displayName: "\u8fde\u51fb\u5956\u52b1\u95f4\u9694"
      }) ], gameMain.prototype, "comboAwardGap", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u63d0\u793a\u6309\u94ae"
      }) ], gameMain.prototype, "tipButton", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u70b8\u5f39\u6309\u94ae"
      }) ], gameMain.prototype, "bombButton", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u91cd\u6392\u6309\u94ae"
      }) ], gameMain.prototype, "realignmentButton", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u51bb\u7ed3\u65f6\u95f4\u6309\u94ae"
      }) ], gameMain.prototype, "freezeTimeButton", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u63d0\u793a\u6570\u91cf"
      }) ], gameMain.prototype, "tipLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u70b8\u5f39\u6570\u91cf"
      }) ], gameMain.prototype, "bombLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u91cd\u6392\u6570\u91cf"
      }) ], gameMain.prototype, "realignmentLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u51bb\u7ed3\u65f6\u95f4\u6570\u91cf"
      }) ], gameMain.prototype, "freezeTimeLabel", void 0);
      __decorate([ property(gridManager_1.default) ], gameMain.prototype, "gridManager", void 0);
      __decorate([ property(addUI_1.default) ], gameMain.prototype, "gameOverNode", void 0);
      __decorate([ property({
        type: cc.EditBox,
        displayName: "\u8df3\u5173\u8f93\u5165\u6846"
      }) ], gameMain.prototype, "skipLevelEdit", void 0);
      __decorate([ property({
        type: addUI_1.default,
        displayName: "\u7ed3\u7b97\u754c\u9762"
      }) ], gameMain.prototype, "settlement", void 0);
      __decorate([ property({
        type: cover_1.default,
        displayName: "\u6e38\u620f\u5c01\u9762"
      }) ], gameMain.prototype, "cover", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u5c01\u9762\u5173\u5361\u6570"
      }) ], gameMain.prototype, "curCoverLevel", void 0);
      __decorate([ property({
        type: subject_1.default,
        displayName: "\u6e38\u620f\u4e3b\u4f53"
      }) ], gameMain.prototype, "subject", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u51b0\u51bb\u7279\u6548"
      }) ], gameMain.prototype, "freezeSpine", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u65f6\u95f4\u8fdb\u5ea6\u6761"
      }) ], gameMain.prototype, "timePorcessSP", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u65f6\u95f4\u8fdb\u5ea6\u6761\u56fe"
      }) ], gameMain.prototype, "timePorcessSF", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u65f6\u95f4\u8fdb\u5ea6\u6761\u51b0\u56fe"
      }) ], gameMain.prototype, "timePorcessSF2", void 0);
      gameMain = gameMain_1 = __decorate([ ccclass ], gameMain);
      return gameMain;
    }(cc.Component);
    exports.default = gameMain;
    cc._RF.pop();
  }, {
    "../../commonLib/component/addUI": "addUI",
    "../../commonLib/component/countDown": "countDown",
    "../../commonLib/lib/gameLib": "gameLib",
    "./comboAward": "comboAward",
    "./comboText": "comboText",
    "./cover": "cover",
    "./gameAudioClip": "gameAudioClip",
    "./gameData": "gameData",
    "./gridManager": "gridManager",
    "./level_parameter": "level_parameter",
    "./setting": "setting",
    "./subject": "subject"
  } ],
  gameOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfe1cbHMs9PKoI4MV84tcW3", "gameOver");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var nodeOperation_1 = require("../../commonLib/component/nodeOperation");
    var advertising_1 = require("./advertising");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameOver = function(_super) {
      __extends(gameOver, _super);
      function gameOver() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeImgs = [];
        _this.bombImgs = [];
        _this.op = null;
        _this.continueCallback = null;
        _this.restartCallback = null;
        _this.goHomeCallback = null;
        return _this;
      }
      gameOver.prototype.onLoad = function() {
        this.op = this.getComponent(nodeOperation_1.default);
      };
      gameOver.prototype.show = function(isTime) {
        for (var _i = 0, _a = this.timeImgs; _i < _a.length; _i++) {
          var v = _a[_i];
          v.node.active = isTime;
        }
        for (var _b = 0, _c = this.bombImgs; _b < _c.length; _b++) {
          var v = _c[_b];
          v.node.active = !isTime;
        }
        this.node.active = true;
      };
      gameOver.prototype.setContinueCallback = function(callback) {
        this.continueCallback = callback;
      };
      gameOver.prototype.setRestartCallback = function(callback) {
        this.restartCallback = callback;
      };
      gameOver.prototype.setGoHomeCallback = function(callback) {
        this.goHomeCallback = callback;
      };
      gameOver.prototype.\u770b\u5e7f\u544a\u7ee7\u7eed = function() {
        var _this = this;
        advertising_1.default.play(function() {
          _this.op.closeSelf(function() {
            _this.continueCallback && _this.continueCallback();
          });
        });
      };
      gameOver.prototype.\u70b9\u51fb\u91cd\u65b0\u5f00\u59cb = function() {
        var _this = this;
        this.op.closeSelf(function() {
          _this.restartCallback && _this.restartCallback();
        });
      };
      gameOver.prototype.\u70b9\u51fb\u4e3b\u9875 = function() {
        this.goHomeCallback && this.goHomeCallback();
        this.op.node.active = false;
      };
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u65f6\u95f4\u76f8\u5173\u56fe"
      }) ], gameOver.prototype, "timeImgs", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u70b8\u5f39\u76f8\u5173\u56fe"
      }) ], gameOver.prototype, "bombImgs", void 0);
      gameOver = __decorate([ ccclass ], gameOver);
      return gameOver;
    }(cc.Component);
    exports.default = gameOver;
    cc._RF.pop();
  }, {
    "../../commonLib/component/nodeOperation": "nodeOperation",
    "./advertising": "advertising"
  } ],
  gridManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87742Ut/FhNv5FGGhDkdw2Y", "gridManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var grid_1 = require("./grid");
    var linkGamePathFinding_1 = require("./linkGamePathFinding");
    var gameAudioClip_1 = require("./gameAudioClip");
    var linkLine_1 = require("./linkLine");
    var scoreAni_1 = require("./scoreAni");
    var playAnimation_1 = require("../../commonLib/component/playAnimation");
    var gameLib_1 = require("../../commonLib/lib/gameLib");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GRID_MOVE_DIR;
    (function(GRID_MOVE_DIR) {
      GRID_MOVE_DIR[GRID_MOVE_DIR["UP"] = 0] = "UP";
      GRID_MOVE_DIR[GRID_MOVE_DIR["DOWN"] = 1] = "DOWN";
      GRID_MOVE_DIR[GRID_MOVE_DIR["LEFT"] = 2] = "LEFT";
      GRID_MOVE_DIR[GRID_MOVE_DIR["RIGHT"] = 3] = "RIGHT";
    })(GRID_MOVE_DIR = exports.GRID_MOVE_DIR || (exports.GRID_MOVE_DIR = {}));
    var gridManager = function(_super) {
      __extends(gridManager, _super);
      function gridManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gridPrefab = null;
        _this.graphics = null;
        _this.linkLine = null;
        _this.bombSelectNode = null;
        _this.spLightningBtn = null;
        _this.spLightning = null;
        _this.spLightningPool = new cc.NodePool();
        _this.spLightningHit = null;
        _this.spLightningHitPool = new cc.NodePool();
        _this.removeGridAni = null;
        _this.removeGridAniPool = new cc.NodePool();
        _this.unfreezePrefab = null;
        _this.unfreezeAniPool = new cc.NodePool();
        _this.metaMap = [];
        _this.maxX = 0;
        _this.maxY = 0;
        _this.gridSize = cc.Size.ZERO;
        _this.allGrids = [];
        _this.gridTypes = [ 1, 2, 3, 4 ];
        _this.pathFinding = new linkGamePathFinding_1.default();
        _this.bombTime = 60;
        _this.levelParameter = null;
        _this.isBombSelectMode = null;
        _this.isStartGenerateGrid = false;
        _this.canLinkGrids = [];
        _this.gameOverCallback = null;
        _this.linkRemovedCallback = null;
        _this.comboCallback = null;
        _this.nextLevelCallback = null;
        _this.curSelectGrid = null;
        _this.scorePosNode = null;
        _this.scoreAni = null;
        _this.scoreAniPool = new cc.NodePool();
        _this.scoreAniDelay = 0;
        _this.isNextLevel = false;
        _this.linkPrefab = null;
        _this.linkPool = new cc.NodePool();
        _this._initGrid = false;
        _this.gridPool = new cc.NodePool();
        return _this;
      }
      gridManager_1 = gridManager;
      gridManager.prototype.onLoad = function() {
        gridManager_1.instance = this;
        this.spLightningBtn.node.active = false;
      };
      gridManager.prototype.start = function() {
        this.graphics.node.zIndex = 1;
        this.metaMap = [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 1, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 0, 0 ] ];
      };
      gridManager.prototype.setMaxWH = function(w, h) {
        w += 2;
        h += 2;
        this.metaMap = [];
        for (var y = 0; y < h; ++y) {
          var row = [];
          for (var x = 0; x < w; ++x) 0 == x || 0 == y || x == w - 1 || y == h - 1 ? row.push(0) : row.push(1);
          this.metaMap.push(row);
        }
      };
      gridManager.prototype.getTotalGridCount = function() {
        if (this.levelParameter) return this.levelParameter.totalGrid;
        return 0;
      };
      gridManager.prototype.gameStart = function(parameter) {
        this.levelParameter = parameter;
        this.setBombSelectMode(false);
        this.stopGenerateGrid();
        this.setMaxWH(parameter.width, parameter.height);
        this.clearCurSelectGrid();
        this.clearAllGrids();
        this.graphics.clear();
        this.maxX = this.levelParameter.width + 2;
        this.maxY = this.levelParameter.height + 2;
        this.gridSize.width = this.node.width / this.maxX;
        this.gridSize.height = this.node.height / this.maxY;
        this.allGrids = [];
        this.pathFinding.reset(this.maxX, this.maxY);
        for (var y = 0; y < this.metaMap.length; ++y) {
          var array = this.metaMap[y];
          for (var x = 0; x < array.length; ++x) {
            var data = array[x];
            if (data) {
              var grid_2 = this.addGrid(x, y);
              grid_2.playGenerateAni();
            }
          }
        }
        this.gridTypes = [];
        for (var i = 0; i < parameter.typeCount; ++i) this.gridTypes.push(i);
        this.generateGridType();
        this.setUnknownGrid(parameter.unknownGrid);
        this.setBomb();
        this.setFreezeGrid(parameter.freezeGridNum);
        this.isAllGridBlock() && this.randomGridsPos();
      };
      gridManager.prototype.generateGridType = function() {
        var types = [];
        for (var i = 0; i < this.allGrids.length / 2; ++i) {
          var type = this.gridTypes[i % this.gridTypes.length];
          types.push(type, type);
        }
        var getType = function() {
          var i = gameLib_1.gameLib.GetRandomNum(0, types.length - 1);
          var type = types[i];
          types.splice(i, 1);
          return type;
        };
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.id >= 0 && (v.id = getType());
        }
      };
      gridManager.prototype.setBombSelectMode = function(b) {
        if (this.isBombSelectMode != b) {
          this.isBombSelectMode = b;
          this.bombSelectNode.active = b;
          b ? gameAudioClip_1.default.playLightningSelect() : gameAudioClip_1.default.stopLightningSelect();
          this.clearCurSelectGrid();
          this.spLightningBtn.node.active = b;
        }
      };
      gridManager.prototype.startGenerateGrid = function() {
        if (this.isStartGenerateGrid) return;
        this.isStartGenerateGrid = true;
        this.schedule(this.randomGenerateGrid, this.levelParameter.easterGridTime);
      };
      gridManager.prototype.stopGenerateGrid = function() {
        if (!this.isStartGenerateGrid) return;
        this.isStartGenerateGrid = false;
        this.unschedule(this.randomGenerateGrid);
      };
      gridManager.prototype.pauseGenerateGrid = function() {
        this.unschedule(this.randomGenerateGrid);
      };
      gridManager.prototype.resumeGenerateGrid = function() {
        this.isStartGenerateGrid && this.schedule(this.randomGenerateGrid, this.levelParameter.easterGridTime);
      };
      gridManager.prototype.pauseAllBomb = function() {
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.isBomb() && v.pauseBombTime(true);
        }
      };
      gridManager.prototype.resumeAllBomb = function() {
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.isBomb() && v.pauseBombTime(false);
        }
      };
      gridManager.prototype.clearAllBomb = function() {
        this.levelParameter.bombCount = 0;
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.isBomb() && v.setBombTime(0);
        }
      };
      gridManager.prototype.randomGenerateGrid = function() {
        var array = this.getNullSpace();
        if (array && array.length >= this.levelParameter.easterGridCondition) {
          var randPos = function() {
            var index = gameLib_1.gameLib.GetRandomNum(0, array.length - 1);
            var pos = array[index];
            array.splice(index, 1);
            return pos;
          };
          var pos1 = randPos();
          var pos2 = randPos();
          var type = this.gridTypes[gameLib_1.gameLib.GetRandomNum(0, this.gridTypes.length - 1)];
          var grid1 = this.addGrid(pos1.x, pos1.y, type, false, false);
          var grid2 = this.addGrid(pos2.x, pos2.y, type, false, false);
          grid1.playGenerateAni();
          grid2.playGenerateAni();
          gameAudioClip_1.default.playRebirthGrid();
          this.isAllGridBlock() && this.randomGridsPos();
        }
      };
      gridManager.prototype.randomGridsBomb = function() {
        var grids = [];
        var bombs = [];
        for (var i = 0; i < this.allGrids.length; ++i) {
          var grid_3 = this.allGrids[i];
          grids.push(grid_3);
          if (grid_3.isBomb()) {
            bombs.push(grid_3.getBombTime());
            grid_3.setBombTime(0);
          }
        }
        var getGrid = function() {
          var index = gameLib_1.gameLib.GetRandomNum(0, grids.length - 1);
          var grid = grids[index];
          grids.splice(index, 1);
          return grid;
        };
        for (var _i = 0, bombs_1 = bombs; _i < bombs_1.length; _i++) {
          var v = bombs_1[_i];
          getGrid().setBombTime(v);
        }
      };
      gridManager.prototype.randomGridsUnknown = function() {
        var grids = [];
        var unknownCount = 0;
        for (var i = 0; i < this.allGrids.length; ++i) {
          var grid_4 = this.allGrids[i];
          grids.push(grid_4);
          if (grid_4.hideMode) {
            ++unknownCount;
            grid_4.hideMode = false;
          }
        }
        var getGrid = function() {
          var index = gameLib_1.gameLib.GetRandomNum(0, grids.length - 1);
          var grid = grids[index];
          grids.splice(index, 1);
          return grid;
        };
        for (var i = 0; i < unknownCount; ++i) getGrid().hideMode = true;
      };
      gridManager.prototype.randomGridsPos = function() {
        var _this = this;
        var randCount = 0;
        var rand = function() {
          randCount++;
          if (randCount > 11) return;
          if (randCount > 10) for (var _i = 0, _a = _this.allGrids; _i < _a.length; _i++) {
            var v = _a[_i];
            v.freezing && _this.unfreezeGrid(v.x, v.y);
          }
          var grids = [];
          var POSs = [];
          for (var i = 0; i < _this.allGrids.length; ++i) {
            var grid_5 = _this.allGrids[i];
            if (grid_5.id >= 0) {
              grids.push(grid_5);
              grid_5.stopMove();
              POSs.push(cc.v2(grid_5.x, grid_5.y));
            }
          }
          var getPos = function() {
            var index = gameLib_1.gameLib.GetRandomNum(0, POSs.length - 1);
            var pos = POSs[index];
            POSs.splice(index, 1);
            return pos;
          };
          for (var _b = 0, grids_1 = grids; _b < grids_1.length; _b++) {
            var v = grids_1[_b];
            var pos = getPos();
            v.x = pos.x;
            v.y = pos.y;
          }
          var isNormalGrid = function(x, y) {
            var grid = _this.getGrid(x, y);
            if (grid && grid.node.active && !grid.freezing) return true;
            return false;
          };
          var isFreezeBlock = function() {
            for (var _i = 0, grids_2 = grids; _i < grids_2.length; _i++) {
              var v = grids_2[_i];
              if (v.freezing && !isNormalGrid(v.x + 1, v.y) && !isNormalGrid(v.x - 1, v.y) && !isNormalGrid(v.x, v.y + 1) && !isNormalGrid(v.x, v.y - 1)) return true;
            }
            return false;
          };
          isFreezeBlock() && rand();
        };
        rand();
        this.isAllGridBlock() ? this.randomGridsPos() : gameAudioClip_1.default.playResetGridPos();
      };
      gridManager.prototype.isAllGridBlock = function() {
        var _this = this;
        var find = function(src, beginIndex) {
          for (var i = beginIndex; i < _this.allGrids.length; ++i) {
            var tar = _this.allGrids[i];
            if (false == tar.freezing && false == src.freezing && src.id == tar.id) {
              var path = _this.pathFinding.search(cc.v2(src.x, src.y), cc.v2(tar.x, tar.y));
              if (path && path.length > 1) {
                _this.canLinkGrids = [ src, tar ];
                return true;
              }
            }
          }
          return false;
        };
        var isClear = true;
        for (var i = 0; i < this.allGrids.length; ++i) {
          var grid_6 = this.allGrids[i];
          if (grid_6.id >= 0) {
            isClear = false;
            if (find(grid_6, i + 1)) return false;
          }
        }
        if (isClear) return false;
        return true;
      };
      gridManager.prototype.getScroeLine = function(path, startPoint, endPoint) {
        var ret = [ startPoint ];
        var isCanPush = function(tar) {
          if (tar.equals(startPoint) || tar.equals(endPoint)) return false;
          for (var _i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
            var v = ret_1[_i];
            if (v.equals(tar)) return false;
          }
          return true;
        };
        var push = function(v1, v2, is1_2, isX) {
          if (is1_2) if (isX) for (var x = v1.x; x <= v2.x; ++x) {
            var v3 = cc.v2(x, v1.y);
            isCanPush(v3) && ret.push(v3);
          } else for (var y = v1.y; y <= v2.y; ++y) {
            var v3 = cc.v2(v1.x, y);
            isCanPush(v3) && ret.push(v3);
          } else if (isX) for (var x = v1.x; x >= v2.x; --x) {
            var v3 = cc.v2(x, v1.y);
            isCanPush(v3) && ret.push(v3);
          } else for (var y = v1.y; y >= v2.y; --y) {
            var v3 = cc.v2(v1.x, y);
            isCanPush(v3) && ret.push(v3);
          }
        };
        for (var i = 0; i < path.length; ++i) {
          var curPath = path[i];
          var nextPath = path[i + 1];
          curPath && nextPath && (curPath.x > nextPath.x ? push(curPath, nextPath, false, true) : curPath.x < nextPath.x ? push(curPath, nextPath, true, true) : curPath.y > nextPath.y ? push(curPath, nextPath, false, false) : curPath.y < nextPath.y && push(curPath, nextPath, true, false));
        }
        ret.push(endPoint);
        return ret;
      };
      gridManager.prototype.setGameOverCallback = function(callback) {
        this.gameOverCallback = callback;
      };
      gridManager.prototype.setLinkRemovedCallback = function(callback) {
        this.linkRemovedCallback = callback;
      };
      gridManager.prototype.setComboCallback = function(callback) {
        this.comboCallback = callback;
      };
      gridManager.prototype.setNextLevelCallback = function(callback) {
        this.nextLevelCallback = callback;
      };
      gridManager.prototype.gameOver = function(isTime) {
        this.setBombSelectMode(false);
        this.stopGenerateGrid();
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.pauseBombTime();
        }
        this.gameOverCallback && this.gameOverCallback(isTime);
      };
      gridManager.prototype.onBomb = function(grid) {
        gameAudioClip_1.default.playBombExplosion();
        this.gameOver(false);
      };
      gridManager.prototype.setGridAttribute = function(count, attribute, parameter) {
        void 0 === parameter && (parameter = 0);
        if (!count || count <= 0) return;
        var grids = [];
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          var isPush = false;
          switch (attribute) {
           case 0:
            isPush = !v.isBomb();
            break;

           case 1:
            isPush = !v.hideMode;
            break;

           case 2:
            isPush = !v.freezing;
          }
          isPush && grids.push(v);
        }
        var res = [];
        for (var i = 0; i < count; ++i) if (grids.length) {
          var index = gameLib_1.gameLib.GetRandomNum(0, grids.length - 1);
          switch (attribute) {
           case 0:
            grids[index].setBombTime(parameter);
            break;

           case 1:
            grids[index].hideMode = true;
            break;

           case 2:
            grids[index].freezing = true;
          }
          res.push(grids[index]);
          grids.splice(index, 1);
        }
        return res;
      };
      gridManager.prototype.setBomb = function() {
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
      gridManager.prototype.setBombTest = function() {
        this.setGridAttribute(1, 0, 3);
      };
      gridManager.prototype.setUnknownGrid = function(count) {
        return this.setGridAttribute(count, 1);
      };
      gridManager.prototype.setFreezeGrid = function(count) {
        return this.setGridAttribute(count, 2);
      };
      gridManager.prototype.moveGrid = function(dir) {
        var getX_Y = function(g, u) {
          void 0 === u && (u = false);
          var isX = dir == GRID_MOVE_DIR.UP || dir == GRID_MOVE_DIR.DOWN;
          u ? isX = !isX : isX;
          return isX ? g.x : g.y;
        };
        var map = {};
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          null == map[getX_Y(v)] && (map[getX_Y(v)] = []);
          map[getX_Y(v)].push(v);
        }
        for (var key in map) {
          var gridArray = map[key];
          gridArray.sort(function(a, b) {
            return getX_Y(a, true) - getX_Y(b, true);
          });
          switch (dir) {
           case GRID_MOVE_DIR.UP:
            var max = this.maxY - 2;
            for (var i = gridArray.length - 1; i >= 0; --i) {
              var grid_7 = gridArray[i];
              if (grid_7.y == max) max--; else {
                grid_7.moveToY(max, this.pathFinding);
                max--;
              }
            }
            break;

           case GRID_MOVE_DIR.DOWN:
            var min = 1;
            for (var i = 0; i < gridArray.length; ++i) {
              var grid_8 = gridArray[i];
              if (grid_8.y == min) min++; else {
                grid_8.moveToY(min, this.pathFinding);
                min++;
              }
            }
            break;

           case GRID_MOVE_DIR.LEFT:
            var min = 1;
            for (var i = 0; i < gridArray.length; ++i) {
              var grid_9 = gridArray[i];
              if (grid_9.x == min) min++; else {
                grid_9.moveToX(min, this.pathFinding);
                min++;
              }
            }
            break;

           case GRID_MOVE_DIR.RIGHT:
            var max = this.maxX - 2;
            for (var i = gridArray.length - 1; i >= 0; --i) {
              var grid_10 = gridArray[i];
              if (grid_10.x == max) max--; else {
                grid_10.moveToX(max, this.pathFinding);
                max--;
              }
            }
          }
        }
      };
      gridManager.prototype.clearCurSelectGrid = function() {
        if (this.curSelectGrid) {
          this.curSelectGrid.isSelect = false;
          this.curSelectGrid = null;
        }
      };
      gridManager.prototype.onGridClick = function(grid) {
        if (this.bombSelectNode.active) {
          this.onBombSelect(grid);
          return;
        }
        if (grid.freezing) {
          gameAudioClip_1.default.playClickFreeze();
          return;
        }
        if (this.curSelectGrid && grid != this.curSelectGrid && this.curSelectGrid.id == grid.id && this.linkGrid(this.curSelectGrid, grid)) return;
        null != this.curSelectGrid ? gameAudioClip_1.default.playNoLink() : gameAudioClip_1.default.playGridSelect();
        this.clearCurSelectGrid();
        this.curSelectGrid = grid;
        this.curSelectGrid.isSelect = true;
      };
      gridManager.prototype.setBombSelectCallback = function(callback) {
        this.bombSelectCallback = callback;
      };
      gridManager.prototype.onBombSelect = function(grid) {
        var _this = this;
        if (grid && grid.id >= 0) {
          this.setBombSelectMode(false);
          this.bombSelectCallback && this.bombSelectCallback(true);
          var grids = [];
          for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
            var v = _a[_i];
            v.id == grid.id && grids.push(v);
          }
          var duration = .25;
          var lightningBtnPos = gameLib_1.gameLib.convertToSpacePos(this.spLightningBtn.node, this.graphics.node);
          var _loop_1 = function(i) {
            var grid_11 = grids[i];
            var gridPos = cc.v2(grid_11.getX(), grid_11.getY());
            var lightningNode = this_1.spLightningPool.get();
            lightningNode || (lightningNode = cc.instantiate(this_1.spLightning));
            this_1.graphics.node.addChild(lightningNode);
            var ani = lightningNode.getComponent(playAnimation_1.default);
            var state = ani.play();
            state.duration > duration && (duration = state.duration);
            this_1.scheduleOnce(function() {
              _this.spLightningPool.put(lightningNode);
            }, state.duration);
            lightningNode.x = lightningBtnPos.x > gridPos.x ? gridPos.x + (lightningBtnPos.x - gridPos.x) / 2 : lightningBtnPos.x + (gridPos.x - lightningBtnPos.x) / 2;
            lightningNode.y = lightningBtnPos.y > gridPos.y ? gridPos.y + (lightningBtnPos.y - gridPos.y) / 2 : lightningBtnPos.y + (gridPos.y - lightningBtnPos.y) / 2;
            var deltaP = gridPos.sub(lightningBtnPos);
            var angle = Math.atan2(deltaP.x, deltaP.y) / Math.PI * 180;
            lightningNode.angle = -angle;
            var dis = gridPos.sub(lightningBtnPos).mag();
            lightningNode.scaleY = dis / lightningNode.height;
            var lightningHitNode = this_1.spLightningHitPool.get();
            lightningHitNode || (lightningHitNode = cc.instantiate(this_1.spLightningHit));
            this_1.graphics.node.addChild(lightningHitNode);
            ani = lightningHitNode.getComponent(playAnimation_1.default);
            lightningHitNode.x = gridPos.x;
            lightningHitNode.y = gridPos.y;
            lightningHitNode.active = false;
            this_1.scheduleOnce(function() {
              lightningHitNode.active = true;
              var state = ani.play();
              _this.scheduleOnce(function() {
                _this.spLightningHitPool.put(lightningHitNode);
              }, state.duration);
            }, state.duration);
          };
          var this_1 = this;
          for (var i = 0; i < grids.length; ++i) _loop_1(i);
          for (var _b = 0, grids_3 = grids; _b < grids_3.length; _b++) {
            var v = grids_3[_b];
            this.removeGrid(v);
          }
          this.spLightningBtn.node.active = true;
          this.scheduleOnce(function() {
            _this.spLightningBtn.node.active = false;
          }, duration);
          gameAudioClip_1.default.playLightning();
        }
      };
      gridManager.prototype.\u70b9\u51fb\u70b8\u5f39\u9009\u62e9\u6846 = function() {
        this.setBombSelectMode(false);
        this.bombSelectCallback && this.bombSelectCallback(false);
      };
      gridManager.prototype.autoLinkGrid = function() {
        if (2 == this.canLinkGrids.length) return this.linkGrid(this.canLinkGrids[0], this.canLinkGrids[1]);
        return false;
      };
      gridManager.prototype.getScoreAni = function() {
        var node = this.scoreAniPool.get();
        node || (node = cc.instantiate(this.scoreAni));
        this.graphics.node.addChild(node);
        var com = node.getComponent(scoreAni_1.default);
        return com;
      };
      gridManager.prototype.linkGrid = function(src, tar) {
        var _this = this;
        var path = this.pathFinding.search(cc.v2(src.x, src.y), cc.v2(tar.x, tar.y));
        if (path && path.length > 1) {
          this.paintLine(path);
          var scorePath = this.getScroeLine(path, this.pathFinding.startPoint, this.pathFinding.endPoint);
          var socrePos = gameLib_1.gameLib.convertToSpacePos(this.scorePosNode, this.graphics.node);
          var halfWidth = this.gridSize.width / 2;
          var halfHeight = this.gridSize.height / 2;
          this.scoreAniDelay = 0;
          for (var _i = 0, scorePath_1 = scorePath; _i < scorePath_1.length; _i++) {
            var v = scorePath_1[_i];
            var scoreAni_2 = this.getScoreAni();
            scoreAni_2.setPos(v.x * this.gridSize.width + halfWidth, v.y * this.gridSize.height + halfHeight);
            scoreAni_2.moveToTarget(this.scoreAniDelay, socrePos, function(obj) {
              _this.linkRemovedCallback && _this.linkRemovedCallback(1);
              cc.tween(_this.scorePosNode).to(.15, {
                scale: 1.1
              }).to(.15, {
                scale: 1
              }).start();
            }, function(obj) {
              _this.scoreAniPool.put(obj.node);
            });
            this.scoreAniDelay += .05;
          }
          this.comboCallback && this.comboCallback();
          var srcIsBomb = src.isBomb();
          var tarIsBomb = tar.isBomb();
          this.removeGrid(src);
          this.removeGrid(tar);
          gameAudioClip_1.default.playRemoveGrid();
          if (this.isNextLevel) return true;
          switch (this.levelParameter.move) {
           case 0:
            break;

           case 1:
            this.moveGrid(GRID_MOVE_DIR.UP);
            break;

           case 2:
            this.moveGrid(GRID_MOVE_DIR.DOWN);
            break;

           case 3:
            this.moveGrid(GRID_MOVE_DIR.LEFT);
            break;

           case 4:
            this.moveGrid(GRID_MOVE_DIR.RIGHT);
            break;

           case 5:
            this.moveGrid(gameLib_1.gameLib.GetRandomNum(GRID_MOVE_DIR.UP, GRID_MOVE_DIR.RIGHT));
          }
          this.isAllGridBlock() && this.randomGridsPos();
          this.clearCurSelectGrid();
          srcIsBomb && this.setBomb();
          tarIsBomb && this.setBomb();
          return true;
        }
        return false;
      };
      gridManager.prototype.onNextLevel = function() {
        if (0 == this.allGrids.length) {
          var callback = !this.isNextLevel;
          this.isNextLevel = true;
          callback && this.nextLevelCallback && this.nextLevelCallback(this.scoreAniDelay + 2);
        } else this.isNextLevel = false;
        return this.isNextLevel;
      };
      gridManager.prototype.getNullSpace = function() {
        var map = [];
        for (var x = 0; x < this.maxX - 2; ++x) for (var y = 0; y < this.maxY - 2; ++y) {
          map[x] || (map[x] = []);
          map[x][y] = cc.v2(x + 1, y + 1);
        }
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          map[v.x - 1][v.y - 1] = null;
        }
        var ret = [];
        for (var _b = 0, map_1 = map; _b < map_1.length; _b++) {
          var v = map_1[_b];
          for (var _c = 0, v_1 = v; _c < v_1.length; _c++) {
            var w = v_1[_c];
            w && ret.push(w);
          }
        }
        return ret;
      };
      gridManager.prototype.getGrid = function(x, y) {
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          if (null != v.id && v.id >= 0 && v.x == x && v.y == y) return v;
        }
        return null;
      };
      gridManager.prototype.unfreezeGrid = function(x, y) {
        var _this = this;
        var grid = this.getGrid(x, y);
        if (grid && grid.freezing) {
          gameAudioClip_1.default.playUnfreezeGrid();
          grid.unfreeze();
          var node_1 = this.unfreezeAniPool.get();
          node_1 || (node_1 = cc.instantiate(this.unfreezePrefab));
          this.graphics.node.addChild(node_1);
          node_1.x = grid.getX();
          node_1.y = grid.getY();
          var playAni = node_1.getComponent(playAnimation_1.default);
          var state = playAni.play();
          this.scheduleOnce(function() {
            _this.unfreezeAniPool.put(node_1);
          }, state.duration);
        }
      };
      gridManager.prototype.removeGrid = function(grid) {
        var _this = this;
        this.pathFinding.remBlockPoint([ cc.v2(grid.x, grid.y) ]);
        this.unfreezeGrid(grid.x + 1, grid.y);
        this.unfreezeGrid(grid.x - 1, grid.y);
        this.unfreezeGrid(grid.x, grid.y + 1);
        this.unfreezeGrid(grid.x, grid.y - 1);
        var getRemoveAni = function() {
          var node = _this.removeGridAniPool.get();
          node || (node = cc.instantiate(_this.removeGridAni));
          _this.graphics.node.addChild(node);
          var ani = node.getComponent(playAnimation_1.default);
          return ani;
        };
        var ani = getRemoveAni();
        ani.node.x = grid.getX();
        ani.node.y = grid.getY();
        var state = ani.play();
        this.scheduleOnce(function() {
          _this.removeGridAniPool.put(ani.node);
        }, state.duration + .01);
        grid.reset();
        var index = this.allGrids.indexOf(grid);
        this.allGrids.splice(index, 1);
        this.gridPool.put(grid.node);
        var isNextLevel = this.onNextLevel();
        isNextLevel || this.startGenerateGrid();
        return isNextLevel;
      };
      gridManager.prototype.addGrid = function(x, y, id, freezing, hideMode, bombTime) {
        void 0 === id && (id = 0);
        void 0 === freezing && (freezing = false);
        void 0 === hideMode && (hideMode = false);
        void 0 === bombTime && (bombTime = 0);
        this.pathFinding.addBlockPoint([ cc.v2(x, y) ]);
        var node = this.createGrid();
        this.node.addChild(node);
        var com = node.getComponent(grid_1.default);
        this.allGrids.push(com);
        com.setClickCallback(this.onGridClick.bind(this));
        com.setBombCallback(this.onBomb.bind(this));
        com.setBombTime(bombTime);
        com.stopAnimation();
        com.resetTrun();
        com.isSelect = false;
        com.size = this.gridSize;
        com.x = x;
        com.y = y;
        com.id = id;
        com.freezing = freezing;
        com.hideMode = hideMode;
        return com;
      };
      gridManager.prototype.getLinkLine = function() {
        var node = this.linkPool.get();
        node || (node = cc.instantiate(this.linkPrefab));
        this.graphics.node.addChild(node);
        var line = node.getComponent(linkLine_1.default);
        return line;
      };
      gridManager.prototype.paintLine = function(path) {
        if (path && path.length && path.length > 1) {
          var halfWidth = this.gridSize.width / 2;
          var halfHeight = this.gridSize.height / 2;
          var delay = .5;
          for (var i = 1; i < path.length; ++i) {
            var prePath = path[i - 1];
            var curPath = path[i];
            var linkLine_2 = this.getLinkLine();
            linkLine_2.node.x = curPath.x * this.gridSize.width + halfWidth;
            linkLine_2.node.y = curPath.y * this.gridSize.height + halfHeight;
            if (prePath.x > curPath.x) {
              linkLine_2.node.width = (prePath.x - curPath.x) * this.gridSize.width;
              linkLine_2.node.angle = 180;
            } else if (prePath.y < curPath.y) {
              linkLine_2.node.width = (curPath.y - prePath.y) * this.gridSize.height;
              linkLine_2.node.angle = 90;
            } else if (prePath.y > curPath.y) {
              linkLine_2.node.width = (prePath.y - curPath.y) * this.gridSize.height;
              linkLine_2.node.angle = -90;
            } else {
              linkLine_2.node.width = (curPath.x - prePath.x) * this.gridSize.width;
              linkLine_2.node.angle = 0;
            }
            var moveTime = .2;
            linkLine_2.setAni(delay, moveTime, this.linkPool);
            delay += moveTime;
          }
        }
      };
      gridManager.prototype.initGrid = function() {
        if (!this._initGrid) {
          this._initGrid = true;
          for (var i = 0; i < 70; ++i) {
            var node = cc.instantiate(this.gridPrefab);
            this.gridPool.put(node);
          }
        }
      };
      gridManager.prototype.createGrid = function() {
        var node = this.gridPool.get();
        node || (node = cc.instantiate(this.gridPrefab));
        node.name = "grid";
        return node;
      };
      gridManager.prototype.clearAllGrids = function() {
        for (var i = 0; i < this.node.children.length; ++i) {
          var v = this.node.children[i];
          if ("grid" == v.name) {
            this.gridPool.put(v);
            --i;
          }
        }
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.reset();
        }
        this.allGrids = [];
        this.pathFinding.removeAllBlock();
      };
      gridManager.prototype.onDestroy = function() {
        this.gridPool.clear();
        this.removeGridAniPool.clear();
        this.linkPool.clear();
        this.scoreAniPool.clear();
        this.spLightningHitPool.clear();
        this.spLightningPool.clear();
        this.unfreezeAniPool.clear();
      };
      gridManager.prototype.updateTheme = function() {
        for (var _i = 0, _a = this.allGrids; _i < _a.length; _i++) {
          var v = _a[_i];
          v.updateIcon();
        }
      };
      var gridManager_1;
      gridManager.instance = null;
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u65b9\u5757\u9884\u8bbe"
      }) ], gridManager.prototype, "gridPrefab", void 0);
      __decorate([ property({
        type: cc.Graphics,
        displayName: "\u753b\u7b14"
      }) ], gridManager.prototype, "graphics", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u8fde\u7ebf\u62d6\u5c3e"
      }) ], gridManager.prototype, "linkLine", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u70b8\u5f39\u9009\u62e9\u6846"
      }) ], gridManager.prototype, "bombSelectNode", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u95ea\u7535\u6309\u94ae\u7279\u6548"
      }) ], gridManager.prototype, "spLightningBtn", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u95ea\u7535\u7279\u6548"
      }) ], gridManager.prototype, "spLightning", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u95ea\u7535\u547d\u4e2d\u6548\u679c"
      }) ], gridManager.prototype, "spLightningHit", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u683c\u5b50\u6d88\u9664\u7279\u6548"
      }) ], gridManager.prototype, "removeGridAni", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u51b0\u788e\u7279\u6548"
      }) ], gridManager.prototype, "unfreezePrefab", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u79ef\u5206\u4f4d\u7f6e"
      }) ], gridManager.prototype, "scorePosNode", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u5f97\u5206\u52a8\u753b"
      }) ], gridManager.prototype, "scoreAni", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u8fde\u7ebf\u9884\u8bbe"
      }) ], gridManager.prototype, "linkPrefab", void 0);
      gridManager = gridManager_1 = __decorate([ ccclass ], gridManager);
      return gridManager;
    }(cc.Component);
    exports.default = gridManager;
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
  grid: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae78cJDjytOtJ+RGhgrmnUd", "grid");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var countDown_1 = require("../../commonLib/component/countDown");
    var gameData_1 = require("./gameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var grid = function(_super) {
      __extends(grid, _super);
      function grid() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.icon = null;
        _this.backGround = null;
        _this.hideIcon = null;
        _this.freezingIcon = null;
        _this.bombNode = null;
        _this.selectNode = null;
        _this.bombTime = null;
        _this.animation = null;
        _this.generateAni = null;
        _this.openGridClip = null;
        _this.closeGridClip = null;
        _this.button = null;
        _this._iconID = null;
        _this._x = null;
        _this._y = null;
        _this._size = null;
        _this._isSelect = null;
        _this._hideMode = null;
        _this._freezing = null;
        _this.curMoveTween = null;
        _this.bombCallback = null;
        _this.clickCallback = null;
        return _this;
      }
      Object.defineProperty(grid.prototype, "id", {
        get: function() {
          return this._iconID;
        },
        set: function(id) {
          if (this._iconID != id) {
            this._iconID = id;
            if (null != this._iconID && this._iconID >= 0) {
              this.node.active = true;
              this.updateIcon();
            } else this.node.active = false;
          }
        },
        enumerable: true,
        configurable: true
      });
      grid.prototype.updateIcon = function() {
        gameData_1.setGridIcon(this._iconID, this.icon);
      };
      Object.defineProperty(grid.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          if (this._x != x) {
            this._x = x;
            this.node.x = this.getX();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(grid.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          if (this._y != y) {
            this._y = y;
            this.node.y = this.getY();
          }
        },
        enumerable: true,
        configurable: true
      });
      grid.prototype.getX = function() {
        return this._x * this.size.width + this.size.width / 2;
      };
      grid.prototype.getY = function() {
        return this._y * this.size.height + this.size.height / 2;
      };
      Object.defineProperty(grid.prototype, "size", {
        get: function() {
          return this._size;
        },
        set: function(size) {
          if (this._size != size) {
            this._size = size;
            this.setScaleBySize(size);
          }
        },
        enumerable: true,
        configurable: true
      });
      grid.prototype.setScaleBySize = function(size) {
        if (size) {
          this.node.scaleX = size.width / this.node.width;
          this.node.scaleY = size.height / this.node.height;
        }
      };
      Object.defineProperty(grid.prototype, "isSelect", {
        get: function() {
          return this._isSelect;
        },
        set: function(select) {
          if (this._isSelect != select) {
            this._isSelect = select;
            this.button.interactable = !this._isSelect;
            this.selectNode.active = select;
            this.hideMode && this.turnGrid(select);
            if (this._isSelect) {
              if (this.animation.currentClip.name == this.generateAni.name) {
                var state = this.animation.getAnimationState(this.generateAni.name);
                if (state.isPlaying) {
                  this.animation.setCurrentTime(state.duration, this.generateAni.name);
                  this.animation.sample(this.generateAni.name);
                }
              }
              var s = this.animation.play("\u9009\u4e2d");
              this.scheduleOnce(this.playSelectLoopAni, s.duration);
              this.node.zIndex = 1;
            } else {
              this.node.zIndex = 0;
              this.unschedule(this.playSelectLoopAni);
              this.animation.stop("\u9009\u4e2d_\u5f85\u673a");
            }
          }
        },
        enumerable: true,
        configurable: true
      });
      grid.prototype.unfreeze = function() {
        this.freezing && (this.freezing = false);
      };
      grid.prototype.playSelectLoopAni = function() {
        this.animation.play("\u9009\u4e2d_\u5f85\u673a");
      };
      Object.defineProperty(grid.prototype, "hideMode", {
        get: function() {
          return this._hideMode;
        },
        set: function(b) {
          if (this._hideMode != b) {
            this._hideMode = b;
            this.hideIcon.node.active = b;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(grid.prototype, "freezing", {
        get: function() {
          return this._freezing;
        },
        set: function(b) {
          if (this._freezing != b) {
            this._freezing = b;
            b && (this.isSelect = false);
            this.freezingIcon.node.active = b;
          }
        },
        enumerable: true,
        configurable: true
      });
      grid.prototype.start = function() {
        null == this.hideMode && (this.hideMode = false);
        null == this.freezing && (this.freezing = false);
      };
      grid.prototype.reset = function() {
        this.x = 0;
        this.y = 0;
        this.size = cc.Size.ZERO;
        this.hideMode = false;
        this.freezing = false;
        this.isSelect = false;
        this.id = -1;
        this.icon.node.scale = 1;
        this.setBombCallback(null);
        this.setClickCallback(null);
        this.setBombTime(0);
        this.resetTrun();
        this.stopMove();
        this.stopAnimation();
      };
      grid.prototype.stopAnimation = function() {
        if (this.animation && this.animation.currentClip) {
          this.animation.setCurrentTime(this.animation.currentClip.duration, this.animation.currentClip.name);
          this.animation.sample(this.animation.currentClip.name);
        }
        this.animation.stop();
      };
      grid.prototype.setBombTime = function(time) {
        if (time) {
          this.bombTime.resume();
          this.bombTime.setTime(time);
          this.bombNode.active = true;
          this.bombNode.scale = 0;
          cc.tween(this.bombNode).to(.25, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
        } else this.bombNode.active = false;
      };
      grid.prototype.getBombTime = function() {
        if (this.bombNode.active) return this.bombTime.getTime();
        return 0;
      };
      grid.prototype.isBomb = function() {
        return this.bombNode.active;
      };
      grid.prototype.pauseBombTime = function(pause) {
        void 0 === pause && (pause = true);
        pause ? this.bombTime.pause() : this.bombTime.resume();
      };
      grid.prototype.moveToX = function(x, path) {
        void 0 === path && (path = null);
        this.moveTo(x, this.y, path);
      };
      grid.prototype.moveToY = function(y, path) {
        void 0 === path && (path = null);
        this.moveTo(this.x, y, path);
      };
      grid.prototype.moveTo = function(x, y, path) {
        var _this = this;
        void 0 === path && (path = null);
        if (this.x != x || this.y != y) {
          this.stopMove();
          var moveX = Math.abs(this.x - x);
          var moveY = Math.abs(this.y - y);
          var moveDis = Math.max(moveX, moveY);
          if (path) {
            path.remBlockPoint([ cc.v2(this.x, this.y) ]);
            path.addBlockPoint([ cc.v2(x, y) ]);
          }
          this._x = x;
          this._y = y;
          var uiX = this.getX();
          var uiY = this.getY();
          this.curMoveTween = cc.tween(this.node).to(.2 * moveDis, {
            x: uiX,
            y: uiY
          }, {
            easing: "backOut"
          }).call(function() {
            _this.curMoveTween = null;
          }).start();
        }
      };
      grid.prototype.stopMove = function() {
        if (this.curMoveTween) {
          this.curMoveTween.stop();
          this.curMoveTween = null;
          this.node.x = this.getX();
          this.node.y = this.getY();
        }
      };
      grid.prototype.turnGrid = function(isShow) {
        var ani = this.hideIcon.getComponent(cc.Animation);
        isShow ? ani.play(this.openGridClip.name) : ani.play(this.closeGridClip.name);
      };
      grid.prototype.playGenerateAni = function() {
        this.animation.play(this.generateAni.name);
        this.animation.sample(this.generateAni.name);
      };
      grid.prototype.resetTrun = function() {
        var ani = this.hideIcon.getComponent(cc.Animation);
        ani.setCurrentTime(0, this.openGridClip.name);
        ani.sample(this.openGridClip.name);
      };
      grid.prototype.\u70b9\u51fb\u683c\u5b50 = function() {
        this.clickCallback && this.clickCallback(this);
      };
      grid.prototype.setBombCallback = function(cb) {
        this.bombCallback = cb;
      };
      grid.prototype.\u70b8\u5f39\u4e8b\u4ef6 = function(event, time) {
        time <= 0 && this.bombCallback && this.bombCallback(this);
      };
      grid.prototype.setClickCallback = function(callback) {
        this.clickCallback = callback;
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5185\u5bb9\u8ddf\u8282\u70b9"
      }) ], grid.prototype, "content", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u663e\u793a\u56fe\u6807"
      }) ], grid.prototype, "icon", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u5e95\u56fe"
      }) ], grid.prototype, "backGround", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u9690\u85cf\u6807\u793a"
      }) ], grid.prototype, "hideIcon", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u51bb\u7ed3\u56fe\u6807"
      }) ], grid.prototype, "freezingIcon", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u70b8\u5f39\u8282\u70b9"
      }) ], grid.prototype, "bombNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u4e2d\u72b6\u6001\u8282\u70b9"
      }) ], grid.prototype, "selectNode", void 0);
      __decorate([ property({
        type: countDown_1.default,
        displayName: "\u70b8\u5f39\u5012\u8ba1\u65f6"
      }) ], grid.prototype, "bombTime", void 0);
      __decorate([ property({
        type: cc.Animation,
        displayName: "\u52a8\u753b\u64ad\u653e\u5668"
      }) ], grid.prototype, "animation", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u751f\u6210\u52a8\u753b"
      }) ], grid.prototype, "generateAni", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u67e5\u770b\u52a8\u753b",
        tooltip: "\u67e5\u770b\u672a\u77e5\u683c\u5b50\u52a8\u753b"
      }) ], grid.prototype, "openGridClip", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u53d6\u6d88\u67e5\u770b",
        tooltip: "\u53d6\u6d88\u67e5\u770b\u672a\u77e5\u683c\u5b50\u52a8\u753b"
      }) ], grid.prototype, "closeGridClip", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u70b9\u51fb\u6309\u94ae"
      }) ], grid.prototype, "button", void 0);
      grid = __decorate([ ccclass ], grid);
      return grid;
    }(cc.Component);
    exports.default = grid;
    cc._RF.pop();
  }, {
    "../../commonLib/component/countDown": "countDown",
    "./gameData": "gameData"
  } ],
  level_parameter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cf6dD0QFRL975fhwKf4PFD", "level_parameter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gameLib_1 = require("../../commonLib/lib/gameLib");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var parameter_base = function() {
      function parameter_base() {
        this.baseValue = 0;
        this.step = 0;
        this.stepCount = 0;
      }
      parameter_base.prototype.getValue = function(level) {
        var step = Math.floor(level / this.step);
        var totalCount = this.baseValue + step * this.stepCount;
        return totalCount;
      };
      parameter_base.prototype.getValue_ = function(level) {
        var step = Math.floor(level / this.step);
        var totalCount = this.baseValue - step * this.stepCount;
        return totalCount;
      };
      __decorate([ property({
        displayName: "\u521d\u59cb\u503c",
        step: 1
      }) ], parameter_base.prototype, "baseValue", void 0);
      __decorate([ property({
        displayName: "\u6b65\u6570",
        step: 1
      }) ], parameter_base.prototype, "step", void 0);
      __decorate([ property({
        displayName: "\u6b65\u957f",
        step: 1
      }) ], parameter_base.prototype, "stepCount", void 0);
      parameter_base = __decorate([ ccclass("parameter_base") ], parameter_base);
      return parameter_base;
    }();
    var parameter_rv = function(_super) {
      __extends(parameter_rv, _super);
      function parameter_rv() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.resetValue = 0;
        return _this;
      }
      parameter_rv.prototype.getValue = function(level) {
        level %= this.resetValue;
        return _super.prototype.getValue.call(this, level);
      };
      parameter_rv.prototype.getValue_ = function(level) {
        level %= this.resetValue;
        return _super.prototype.getValue_.call(this, level);
      };
      __decorate([ property({
        displayName: "\u91cd\u7f6e\u503c",
        step: 1
      }) ], parameter_rv.prototype, "resetValue", void 0);
      parameter_rv = __decorate([ ccclass("parameter_rv") ], parameter_rv);
      return parameter_rv;
    }(parameter_base);
    var parameter_limit = function(_super) {
      __extends(parameter_limit, _super);
      function parameter_limit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.limit = 0;
        return _this;
      }
      parameter_limit.prototype.getTime = function(level, gridTotalCount) {
        var baseValue = this.baseValue * gridTotalCount;
        var step = Math.floor(level / this.step);
        var time = baseValue - step * this.stepCount;
        time < this.limit && (time = this.limit);
        return time;
      };
      parameter_limit.prototype.getValue = function(level) {
        var totalCount = _super.prototype.getValue.call(this, level);
        totalCount > this.limit && (totalCount = this.limit);
        return totalCount;
      };
      parameter_limit.prototype.getValue_ = function(level) {
        var totalCount = _super.prototype.getValue_.call(this, level);
        totalCount < this.limit && (totalCount = this.limit);
        return totalCount;
      };
      __decorate([ property({
        displayName: "\u9608\u503c",
        step: 1
      }) ], parameter_limit.prototype, "limit", void 0);
      parameter_limit = __decorate([ ccclass("parameter_limit") ], parameter_limit);
      return parameter_limit;
    }(parameter_base);
    var parameter_rvl = function(_super) {
      __extends(parameter_rvl, _super);
      function parameter_rvl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.limit = 0;
        return _this;
      }
      parameter_rvl.prototype.getValue = function(level) {
        var v = _super.prototype.getValue.call(this, level);
        v > this.limit && (v = this.limit);
        return v;
      };
      parameter_rvl.prototype.getValue_ = function(level) {
        var v = _super.prototype.getValue_.call(this, level);
        v < this.limit && (v = this.limit);
        return v;
      };
      parameter_rvl.prototype.getTypeNum = function(level, gridTotalCount) {
        level %= this.resetValue;
        var baseValue = this.baseValue;
        switch (gridTotalCount) {
         case 40:
          baseValue += 1;
          break;

         case 54:
          baseValue += 2;
          break;

         case 70:
          baseValue += 3;
        }
        var step = Math.floor(level / this.step);
        var totalCount = baseValue + step * this.stepCount;
        totalCount > this.limit && (totalCount = this.limit);
        return totalCount;
      };
      __decorate([ property({
        displayName: "\u9608\u503c",
        step: 1
      }) ], parameter_rvl.prototype, "limit", void 0);
      parameter_rvl = __decorate([ ccclass("parameter_rvl") ], parameter_rvl);
      return parameter_rvl;
    }(parameter_rv);
    var parameter_bomb = function() {
      function parameter_bomb() {
        this.count = null;
        this.condition = null;
        this.time = null;
      }
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u4e00\u6b21\u51fa\u73b0\u4e2a\u6570"
      }) ], parameter_bomb.prototype, "count", void 0);
      __decorate([ property({
        type: parameter_limit,
        displayName: "\u51fa\u73b0\u65b9\u5f0f"
      }) ], parameter_bomb.prototype, "condition", void 0);
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u5012\u8ba1\u65f6"
      }) ], parameter_bomb.prototype, "time", void 0);
      parameter_bomb = __decorate([ ccclass("parameter_bomb") ], parameter_bomb);
      return parameter_bomb;
    }();
    var parameter_easterGrid = function() {
      function parameter_easterGrid() {
        this.count = null;
        this.condition = null;
      }
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u6d88\u6389\u591a\u5c11\u5757\u89e6\u53d1"
      }) ], parameter_easterGrid.prototype, "count", void 0);
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u5237\u65b0\u65f6\u95f4",
        step: 1
      }) ], parameter_easterGrid.prototype, "condition", void 0);
      parameter_easterGrid = __decorate([ ccclass("parameter_easterGrid") ], parameter_easterGrid);
      return parameter_easterGrid;
    }();
    var level_parameter_result = function() {
      function level_parameter_result() {}
      return level_parameter_result;
    }();
    exports.level_parameter_result = level_parameter_result;
    var level_parameter = function() {
      function level_parameter() {
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
      level_parameter.prototype.getLevelParameter = function(level) {
        this.level = level - 1;
        var ret = new level_parameter_result();
        ret.width = this.getWidth();
        ret.height = this.getHeight();
        ret.totalGrid = ret.width * ret.height;
        ret.typeCount = this.getTypeCount();
        ret.bombCount = this.getBombCount();
        ret.bombCondition = this.getBombCondition();
        ret.bombTime = this.getBombTime();
        ret.time = this.time.getTime(this.level, ret.totalGrid);
        ret.move = this.getMoveCondition();
        ret.unknownGrid = this.unknownGrid.getValue(this.level);
        ret.freezeGridNum = this.getFreezeGridNum();
        ret.easterGridCondition = this.getEasterGridCondition();
        ret.easterGridTime = this.getEasterGridTime();
        var addTime = this.bombGridAddTime * ret.bombCount + this.unknownGridAddTime * ret.unknownGrid + this.freezeGridAddTime * ret.freezeGridNum;
        ret.time += addTime;
        cc.log("\u5f53\u524d\u5173\u5361\uff1a" + level + " -----------------------------------------------------");
        cc.log("\u5bbd\uff1a" + ret.width);
        cc.log("\u9ad8\uff1a" + ret.height);
        cc.log("\u683c\u5b50\u603b\u6570\uff1a" + ret.totalGrid);
        cc.log("\u683c\u5b50\u79cd\u7c7b\u6570\uff1a" + ret.typeCount);
        cc.log("\u70b8\u5f39\u6570\uff1a" + ret.bombCount);
        cc.log("\u70b8\u5f39\u51fa\u73b0\u65b9\u5f0f\uff1a" + ret.bombCondition);
        cc.log("\u70b8\u5f39\u65f6\u95f4\uff1a" + ret.bombTime);
        cc.log("\u4f4d\u79fb\u6761\u4ef6\uff1a" + ret.move);
        cc.log("\u5173\u5361\u65f6\u95f4\uff1a" + ret.time + "(\u9644\u52a0\u65f6\u95f4\uff1a" + addTime + ")");
        cc.log("\u95ee\u53f7\u683c\u5b50\u6570\uff1a" + ret.unknownGrid);
        cc.log("\u51b0\u51bb\u683c\u5b50\u6570\uff1a" + ret.freezeGridNum);
        cc.log("\u91cd\u751f\u683c\u5b50\u6570\uff1a" + ret.easterGridCondition);
        cc.log("\u91cd\u751f\u683c\u5b50\u95f4\u9694\u65f6\u95f4\uff1a" + ret.easterGridTime);
        return ret;
      };
      level_parameter.prototype.getWidth = function() {
        return this.width.getValue(this.level);
      };
      level_parameter.prototype.getHeight = function() {
        return this.height.getValue(this.level);
      };
      level_parameter.prototype.getTypeCount = function() {
        return this.typesNum.getTypeNum(this.level, this.getWidth() * this.getHeight());
      };
      level_parameter.prototype.getBombCount = function() {
        return this.bomb.count.getValue(this.level);
      };
      level_parameter.prototype.getBombCondition = function() {
        return this.bomb.condition.getValue(this.level);
      };
      level_parameter.prototype.getBombTime = function() {
        return this.bomb.time.getValue_(this.level);
      };
      level_parameter.prototype.getFreezeGridNum = function() {
        return this.freezeGrid.getValue(this.level);
      };
      level_parameter.prototype.getEasterGridCondition = function() {
        return this.easterGrid.count.getValue_(this.level);
      };
      level_parameter.prototype.getEasterGridTime = function() {
        return this.easterGrid.condition.getValue_(this.level);
      };
      level_parameter.prototype.getMoveCondition = function() {
        var c = this.move.getValue(this.level);
        var r = gameLib_1.gameLib.GetRandomNum(0, c);
        return r;
      };
      __decorate([ property({
        type: parameter_rv,
        displayName: "\u5bbd"
      }) ], level_parameter.prototype, "width", void 0);
      __decorate([ property({
        type: parameter_rv,
        displayName: "\u9ad8"
      }) ], level_parameter.prototype, "height", void 0);
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u65b9\u5757\u79cd\u7c7b\u589e\u52a0"
      }) ], level_parameter.prototype, "typesNum", void 0);
      __decorate([ property({
        type: parameter_limit,
        displayName: "\u5173\u5361\u65f6\u95f4"
      }) ], level_parameter.prototype, "time", void 0);
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u672a\u77e5\u65b9\u5757"
      }) ], level_parameter.prototype, "unknownGrid", void 0);
      __decorate([ property({
        type: parameter_bomb,
        displayName: "\u6bc1\u706d\u70b8\u5f39"
      }) ], level_parameter.prototype, "bomb", void 0);
      __decorate([ property({
        type: parameter_limit,
        displayName: "\u4f4d\u79fb"
      }) ], level_parameter.prototype, "move", void 0);
      __decorate([ property({
        type: parameter_rvl,
        displayName: "\u51b0\u51bb\u65b9\u5757"
      }) ], level_parameter.prototype, "freezeGrid", void 0);
      __decorate([ property({
        type: parameter_easterGrid,
        displayName: "\u91cd\u751f\u65b9\u5757"
      }) ], level_parameter.prototype, "easterGrid", void 0);
      __decorate([ property({
        displayName: "\u51b0\u51bb\u5757\u9644\u52a0\u65f6\u95f4"
      }) ], level_parameter.prototype, "freezeGridAddTime", void 0);
      __decorate([ property({
        displayName: "\u672a\u77e5\u5757\u9644\u52a0\u65f6\u95f4"
      }) ], level_parameter.prototype, "unknownGridAddTime", void 0);
      __decorate([ property({
        displayName: "\u70b8\u5f39\u5757\u9644\u52a0\u65f6\u95f4"
      }) ], level_parameter.prototype, "bombGridAddTime", void 0);
      level_parameter = __decorate([ ccclass("level_parameter") ], level_parameter);
      return level_parameter;
    }();
    exports.default = level_parameter;
    cc._RF.pop();
  }, {
    "../../commonLib/lib/gameLib": "gameLib"
  } ],
  linkGamePathFinding: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbf8fx3Ab9N9I5Au+GSbTdG", "linkGamePathFinding");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var linkGamePathFinding = function() {
      function linkGamePathFinding() {
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
      linkGamePathFinding.prototype.addBlockPoint = function(point) {
        if (point && point.length) for (var _i = 0, point_5 = point; _i < point_5.length; _i++) {
          var v = point_5[_i];
          var id = v.y + "*" + v.x;
          if (null == this.pathObj[id]) {
            this.pathObj[id] = 1;
            break;
          }
        }
      };
      linkGamePathFinding.prototype.remBlockPoint = function(point) {
        if (point && point.length) for (var _i = 0, point_6 = point; _i < point_6.length; _i++) {
          var v = point_6[_i];
          var id = v.y + "*" + v.x;
          if (null != this.pathObj[id]) {
            delete this.pathObj[id];
            this.pathObj[id] = null;
          }
        }
      };
      linkGamePathFinding.prototype.reset = function(row, col) {
        this.m_row = row;
        this.m_col = col;
        this.removeAllBlock();
      };
      linkGamePathFinding.prototype.removeAllBlock = function() {
        this.pathObj = {};
      };
      linkGamePathFinding.prototype.isBlock = function(pos) {
        var id = pos.y + "*" + pos.x;
        return null != this.pathObj[id];
      };
      linkGamePathFinding.prototype.sortPath = function(pos, isBegin) {
        for (var _i = 0, _a = this.m_line; _i < _a.length; _i++) {
          var v = _a[_i];
          if (v && !v.check) {
            if (pos.equal(v.pos1)) {
              v.check = true;
              isBegin && this.path.push(cc.v2(pos.row, pos.col));
              this.path.push(cc.v2(v.pos2.row, v.pos2.col));
              this.sortPath(v.pos2, false);
              break;
            }
            if (pos.equal(v.pos2)) {
              v.check = true;
              isBegin && this.path.push(cc.v2(pos.row, pos.col));
              this.path.push(cc.v2(v.pos1.row, v.pos1.col));
              this.sortPath(v.pos1, false);
              break;
            }
          }
        }
      };
      linkGamePathFinding.prototype.search = function(start, end) {
        this.startPoint = start;
        this.endPoint = end;
        this.m_line = [];
        this.checkLink(new M_Point(this.startPoint.x, this.startPoint.y), new M_Point(this.endPoint.x, this.endPoint.y));
        this.path = [];
        this.sortPath(new M_Point(this.startPoint.x, this.startPoint.y), true);
        return this.path;
      };
      linkGamePathFinding.prototype.isDirectLink = function(_begin, _end) {
        if (_begin.row == _end.row && _begin.col == _end.col) {
          this.m_line = [];
          return false;
        }
        if (_begin.row == _end.row) {
          var steps = _begin.col - _end.col;
          var direction = steps / Math.abs(steps);
          var row = _begin.row;
          for (var i = 1; i < Math.abs(steps); ++i) {
            var col = _begin.col - i * direction;
            var sprite = this.pathObj[col + "*" + row];
            if (null != sprite) {
              this.m_line = [];
              return false;
            }
          }
          this.m_line.push(new M_Segment(_begin, _end));
          return true;
        }
        if (_begin.col == _end.col) {
          var steps = _begin.row - _end.row;
          var direction = steps / Math.abs(steps);
          var col = _begin.col;
          for (var i = 1; i < Math.abs(steps); ++i) {
            var row = _begin.row - i * direction;
            var sprite = this.pathObj[col + "*" + row];
            if (null != sprite) {
              this.m_line = [];
              return false;
            }
          }
          this.m_line.push(new M_Segment(_begin, _end));
          return true;
        }
        return false;
      };
      linkGamePathFinding.prototype.isOneCornerLink = function(_begin, _end) {
        if (_begin.row == _end.row && _begin.col == _end.col) {
          this.m_line = [];
          return false;
        }
        var point_1 = new M_Point(_begin.row, _end.col);
        var islink_1 = this.isDirectLink(_begin, point_1) && this.isDirectLink(point_1, _end);
        if (islink_1 && null == this.pathObj[point_1.col + "*" + point_1.row]) return true;
        this.m_line = [];
        var point_2 = new M_Point(_end.row, _begin.col);
        var islink_2 = this.isDirectLink(_begin, point_2) && this.isDirectLink(point_2, _end);
        if (islink_2 && null == this.pathObj[point_2.col + "*" + point_2.row]) return true;
        this.m_line = [];
        return false;
      };
      linkGamePathFinding.prototype.isTwoCornerLink = function(_begin, _end) {
        var _this = this;
        var setSegment = function(point_1, point_2, point_3, point_4) {
          _this.m_line = [];
          _this.m_line.push(new M_Segment(point_1, point_2));
          _this.m_line.push(new M_Segment(point_2, point_3));
          _this.m_line.push(new M_Segment(point_3, point_4));
        };
        if (_begin.row == _end.row && _begin.col == _end.col) {
          this.m_line = [];
          return false;
        }
        if (_begin.row == _end.row && (0 == _begin.row || _begin.row == this.m_row - 1)) {
          var addline = -1;
          0 == _begin.row && (addline = 1);
          var p_1 = new M_Point(_begin.row - addline, _begin.col);
          var p_2 = new M_Point(_begin.row - addline, _end.col);
          setSegment(_begin, p_1, p_2, _end);
          return true;
        }
        this.m_line = [];
        if (_begin.col == _end.col && (0 == _begin.col || _begin.col == this.m_col - 1)) {
          var addline = -1;
          0 == _begin.col && (addline = 1);
          var p_1 = new M_Point(_begin.row, _begin.col - addline);
          var p_2 = new M_Point(_end.row, _end.col - addline);
          setSegment(_begin, p_1, p_2, _end);
          return true;
        }
        this.m_line = [];
        for (var _row = _begin.row + 1; _row <= this.m_row; ++_row) if (_row == this.m_row) {
          if (_row - 1 == _begin.row && null == this.pathObj[_end.col + "*" + (_row - 1)]) {
            var link = this.isDirectLink(_end, new M_Point(_row - 1, _end.col));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_row, _begin.col);
              var p_2 = new M_Point(_row, _end.col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (_row - 1 == _end.row && null == this.pathObj[_end.col + "*" + (_row - 1)]) {
            var link = this.isDirectLink(_begin, new M_Point(_row - 1, _begin.col));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_row, _begin.col);
              var p_2 = new M_Point(_row, _end.col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (null != this.pathObj[_begin.col + "*" + (_row - 1)] || null != this.pathObj[_end.col + "*" + (_row - 1)]) break;
          var link_1 = this.isDirectLink(_begin, new M_Point(_row - 1, _begin.col));
          var link_2 = this.isDirectLink(_end, new M_Point(_row - 1, _end.col));
          if (link_1 && link_2) {
            this.m_line = [];
            var p_1 = new M_Point(_row, _begin.col);
            var p_2 = new M_Point(_row, _end.col);
            setSegment(_begin, p_1, p_2, _end);
            return true;
          }
        } else {
          this.m_line = [];
          var point_1 = new M_Point(_row, _begin.col);
          if (null != this.pathObj[point_1.col + "*" + point_1.row]) break;
          var link_1 = this.isOneCornerLink(point_1, _end);
          var link_2 = this.isDirectLink(_begin, point_1);
          if (link_1 && link_2) return true;
        }
        this.m_line = [];
        for (var _row = _begin.row - 1; _row >= -1; --_row) if (-1 == _row) {
          if (0 == _begin.row && null == this.pathObj[_end.col + "*0"]) {
            var link = this.isDirectLink(_end, new M_Point(0, _end.col));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_row, _begin.col);
              var p_2 = new M_Point(_row, _end.col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (0 == _end.row && null == this.pathObj[_begin.col + "*0"]) {
            var link = this.isDirectLink(_begin, new M_Point(0, _begin.col));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_row, _begin.col);
              var p_2 = new M_Point(_row, _end.col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (this.pathObj[_begin.col + "*0"] || null != this.pathObj[_end.col + "*0"]) break;
          var link_1 = this.isDirectLink(_begin, new M_Point(0, _begin.col));
          var link_2 = this.isDirectLink(_end, new M_Point(0, _end.col));
          if (link_1 && link_2) {
            this.m_line = [];
            var p_1 = new M_Point(_row, _begin.col);
            var p_2 = new M_Point(_row, _end.col);
            setSegment(_begin, p_1, p_2, _end);
            return true;
          }
        } else {
          this.m_line = [];
          var point_1 = new M_Point(_row, _begin.col);
          if (null != this.pathObj[point_1.col + "*" + point_1.row]) break;
          var link_1 = this.isOneCornerLink(point_1, _end);
          var link_2 = this.isDirectLink(_begin, point_1);
          if (link_1 && link_2) return true;
        }
        this.m_line = [];
        for (var _col = _begin.col - 1; _col >= -1; --_col) if (-1 == _col) {
          if (0 == _begin.col && null == this.pathObj["0*" + _end.row]) {
            var link = this.isDirectLink(_end, new M_Point(_end.row, 0));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_begin.row, _col);
              var p_2 = new M_Point(_end.row, _col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (0 == _end.col && null == this.pathObj["0*" + _begin.row]) {
            var link = this.isDirectLink(_begin, new M_Point(_begin.row, 0));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_begin.row, _col);
              var p_2 = new M_Point(_end.row, _col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (null != this.pathObj["0*" + _begin.row] || null != this.pathObj["0*" + _end.row]) break;
          var link_1 = this.isDirectLink(_begin, new M_Point(_begin.row, 0));
          var link_2 = this.isDirectLink(_end, new M_Point(_end.row, 0));
          if (link_1 && link_2) {
            this.m_line = [];
            var p_1 = new M_Point(_begin.row, _col);
            var p_2 = new M_Point(_end.row, _col);
            setSegment(_begin, p_1, p_2, _end);
            return true;
          }
        } else {
          this.m_line = [];
          var point_1 = new M_Point(_begin.row, _col);
          if (null != this.pathObj[point_1.col + "*" + point_1.row]) break;
          var link_1 = this.isOneCornerLink(point_1, _end);
          var link_2 = this.isDirectLink(_begin, point_1);
          if (link_1 && link_2) return true;
        }
        this.m_line = [];
        for (var _col = _begin.col + 1; _col <= this.m_col; ++_col) if (_col == this.m_col) {
          if (this.m_col - 1 == _begin.col && null == this.pathObj[_col - 1 + "*" + _end.row]) {
            var link = this.isDirectLink(_end, new M_Point(_end.row, _col - 1));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_begin.row, _col);
              var p_2 = new M_Point(_end.row, _col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (this.m_col - 1 == _end.col && null == this.pathObj[_col - 1 + "*" + _begin.row]) {
            var link = this.isDirectLink(_begin, new M_Point(_begin.row, _col - 1));
            if (link) {
              this.m_line = [];
              var p_1 = new M_Point(_begin.row, _col);
              var p_2 = new M_Point(_end.row, _col);
              setSegment(_begin, p_1, p_2, _end);
              return true;
            }
          }
          this.m_line = [];
          if (null != this.pathObj[_col - 1 + "*" + _begin.row] || null != this.pathObj[_col - 1 + "*" + _end.row]) break;
          var link_1 = this.isDirectLink(_begin, new M_Point(_begin.row, _col - 1));
          var link_2 = this.isDirectLink(_end, new M_Point(_end.row, _col - 1));
          if (link_1 && link_2) {
            this.m_line = [];
            var p_1 = new M_Point(_begin.row, _col);
            var p_2 = new M_Point(_end.row, _col);
            setSegment(_begin, p_1, p_2, _end);
            return true;
          }
        } else {
          this.m_line = [];
          var point_1 = new M_Point(_begin.row, _col);
          var id = point_1.col + "*" + point_1.row;
          if (null != this.pathObj[id]) break;
          var link_1 = this.isOneCornerLink(point_1, _end);
          var link_2 = this.isDirectLink(_begin, point_1);
          if (link_1 && link_2) return true;
        }
        this.m_line = [];
        return false;
      };
      linkGamePathFinding.prototype.checkLink = function(_begin, _end) {
        var islink = this.isDirectLink(_begin, _end);
        if (islink) return islink;
        islink = this.isOneCornerLink(_begin, _end);
        if (islink) return islink;
        islink = this.isTwoCornerLink(_begin, _end);
        if (islink) return islink;
        return false;
      };
      return linkGamePathFinding;
    }();
    exports.default = linkGamePathFinding;
    var M_Point = function() {
      function M_Point(row, col) {
        this.row = row;
        this.col = col;
      }
      M_Point.prototype.equal = function(point) {
        return point.row == this.row && point.col == this.col;
      };
      return M_Point;
    }();
    var M_Segment = function() {
      function M_Segment(v1, v2) {
        this.check = false;
        this.pos1 = v1;
        this.pos2 = v2;
      }
      return M_Segment;
    }();
    cc._RF.pop();
  }, {} ],
  linkLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1e88GJx05H2JDLWPXxIzJv", "linkLine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var linkLine = function(_super) {
      __extends(linkLine, _super);
      function linkLine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.particle = null;
        return _this;
      }
      linkLine.prototype.onLoad = function() {
        this.particle.stopSystem();
      };
      linkLine.prototype.setAni = function(delay, moveTime, pool) {
        var _this = this;
        cc.tween(this.node).delay(delay).call(function() {
          _this.particle.resetSystem();
        }).to(moveTime, {
          width: 0
        }).call(function() {
          _this.particle.stopSystem();
        }).delay(2).call(function() {
          pool.put(_this.node);
        }).start();
      };
      __decorate([ property({
        type: cc.ParticleSystem,
        displayName: "\u7c92\u5b50"
      }) ], linkLine.prototype, "particle", void 0);
      linkLine = __decorate([ ccclass ], linkLine);
      return linkLine;
    }(cc.Component);
    exports.default = linkLine;
    cc._RF.pop();
  }, {} ],
  nodeOperation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbf39oejqVNcJ8abM7AjQOu", "nodeOperation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BlockInput_1 = require("./BlockInput");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
    var nodeOperation = function(_super) {
      __extends(nodeOperation, _super);
      function nodeOperation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._onActivePlayClip = null;
        _this._onInactivePlayClip = null;
        _this._ani = null;
        return _this;
      }
      nodeOperation_1 = nodeOperation;
      Object.defineProperty(nodeOperation.prototype, "onActivePlayClip", {
        get: function() {
          return this._onActivePlayClip;
        },
        set: function(ani) {
          if (ani) {
            this._onActivePlayClip = ani;
            this._ani.addClip(this.onActivePlayClip);
          } else {
            this._ani.removeClip(this.onActivePlayClip);
            this._onActivePlayClip = null;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(nodeOperation.prototype, "onInactivePlayClip", {
        get: function() {
          return this._onInactivePlayClip;
        },
        set: function(ani) {
          if (ani) {
            this._onInactivePlayClip = ani;
            this._ani.addClip(this.onInactivePlayClip);
          } else {
            this._ani.removeClip(this.onInactivePlayClip);
            this._onInactivePlayClip = null;
          }
        },
        enumerable: true,
        configurable: true
      });
      nodeOperation.prototype.start = function() {
        this._ani = this.getComponent(cc.Animation);
      };
      nodeOperation.prototype.onEnable = function() {
        if ((true, this.onActivePlayClip) && this._ani) {
          this._ani.play(this.onActivePlayClip.name);
          this._ani.setCurrentTime(0, this.onActivePlayClip.name);
          this._ani.sample(this.onActivePlayClip.name);
        }
      };
      nodeOperation.removeNode = function(node) {
        node.removeFromParent(true);
        node.destroy();
      };
      nodeOperation.prototype.closeSelf = function(finishCallback) {
        var _this = this;
        void 0 === finishCallback && (finishCallback = null);
        if (this.onInactivePlayClip && this._ani) {
          BlockInput_1.blockInput();
          this._ani.once(cc.Animation.EventType.FINISHED, function(eventName, aniState) {
            nodeOperation_1.removeNode(_this.node);
            finishCallback && finishCallback();
            BlockInput_1.unblockInput();
          });
          this._ani.play(this.onInactivePlayClip.name);
        } else {
          nodeOperation_1.removeNode(this.node);
          finishCallback && finishCallback();
        }
      };
      nodeOperation.prototype.\u5173\u95ed = function() {
        this.closeSelf();
      };
      nodeOperation.prototype.hideSelf = function(finishCallback) {
        var _this = this;
        void 0 === finishCallback && (finishCallback = null);
        if (this.onInactivePlayClip && this._ani) {
          BlockInput_1.blockInput();
          this._ani.once(cc.Animation.EventType.FINISHED, function(eventName, aniState) {
            _this.node.active = false;
            finishCallback && finishCallback();
            BlockInput_1.unblockInput();
          });
          this._ani.play(this.onInactivePlayClip.name);
        } else {
          this.node.active = false;
          finishCallback && finishCallback();
        }
      };
      nodeOperation.prototype.\u9690\u85cf = function() {
        this.hideSelf();
      };
      nodeOperation.prototype.showSelf = function() {
        this.node.active = true;
      };
      nodeOperation.prototype.\u663e\u793a = function() {
        this.showSelf();
      };
      var nodeOperation_1;
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u663e\u793a\u65f6\u64ad\u653e\u52a8\u753b"
      }) ], nodeOperation.prototype, "onActivePlayClip", null);
      __decorate([ property({
        serializable: true
      }) ], nodeOperation.prototype, "_onActivePlayClip", void 0);
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u9690\u85cf\u65f6\u64ad\u653e\u52a8\u753b"
      }) ], nodeOperation.prototype, "onInactivePlayClip", null);
      __decorate([ property({
        serializable: true
      }) ], nodeOperation.prototype, "_onInactivePlayClip", void 0);
      __decorate([ property({
        serializable: true
      }) ], nodeOperation.prototype, "_ani", void 0);
      nodeOperation = nodeOperation_1 = __decorate([ ccclass, requireComponent(cc.Animation), executeInEditMode(), menu("\u6269\u5c55\u7ec4\u4ef6/UI\u64cd\u4f5c\u53ca\u52a8\u753b") ], nodeOperation);
      return nodeOperation;
    }(cc.Component);
    exports.default = nodeOperation;
    cc._RF.pop();
  }, {
    "./BlockInput": "BlockInput"
  } ],
  playAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e61b45PhRApYlArKfaqiIa", "playAnimation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
    var playAnimation = function(_super) {
      __extends(playAnimation, _super);
      function playAnimation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._ani = null;
        _this.defaultClipName = "";
        return _this;
      }
      Object.defineProperty(playAnimation.prototype, "ani", {
        get: function() {
          return this._ani;
        },
        set: function(ani) {
          this._ani = ani;
          ani && ani.defaultClip && (this.defaultClipName = ani.defaultClip.name);
        },
        enumerable: true,
        configurable: true
      });
      playAnimation.prototype.start = function() {
        this.ani || (this.ani = this.getComponent(cc.Animation));
      };
      playAnimation.prototype.play = function(name) {
        void 0 === name && (name = null);
        return this.ani.play(name || this.defaultClipName);
      };
      playAnimation.prototype.\u64ad\u653e\u52a8\u753b = function(a, clipName) {
        return this.ani.play(clipName || this.defaultClipName);
      };
      playAnimation.prototype.sample = function(time, name) {
        void 0 === time && (time = 0);
        void 0 === name && (name = null);
        if (!this.ani) return;
        name || (name = this.defaultClipName);
        this.ani.setCurrentTime(time, name);
        this.ani.sample(name);
      };
      playAnimation.prototype.isPlaying = function() {
        if (this.ani && this.ani.currentClip) {
          var state = this.ani.getAnimationState(this.ani.currentClip.name);
          if (state) return state.isPlaying;
        }
        return false;
      };
      __decorate([ property({
        type: cc.Animation,
        displayName: "\u52a8\u753b\u64ad\u653e\u5668"
      }) ], playAnimation.prototype, "ani", null);
      __decorate([ property({
        serializable: true
      }) ], playAnimation.prototype, "_ani", void 0);
      __decorate([ property({
        displayName: "\u9ed8\u8ba4\u64ad\u653e\u52a8\u753b\u540d\u79f0"
      }) ], playAnimation.prototype, "defaultClipName", void 0);
      playAnimation = __decorate([ ccclass, menu("\u6269\u5c55\u7ec4\u4ef6/\u64ad\u653e\u52a8\u753b") ], playAnimation);
      return playAnimation;
    }(cc.Component);
    exports.default = playAnimation;
    cc._RF.pop();
  }, {} ],
  playSound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2af5bzdoxpKFINRRTJ+Jsxt", "playSound");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var LS_musicVolume = "musicVolume";
    var LS_soundVolume = "soundVolume";
    var LS_musicIsOpen = "musicIsOpen";
    var LS_soundIsOpen = "soundIsOpen";
    var playSound = function(_super) {
      __extends(playSound, _super);
      function playSound() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audioClip = [];
        _this.defaultAudioClip = null;
        return _this;
      }
      playSound_1 = playSound;
      playSound.init = function() {
        var music = cc.sys.localStorage.getItem(LS_musicVolume);
        var sound = cc.sys.localStorage.getItem(LS_soundVolume);
        playSound_1.musicVolume = music ? Number(music) : 1;
        playSound_1.soundVolume = sound ? Number(sound) : 1;
        cc.audioEngine.setEffectsVolume(playSound_1.soundVolume);
        cc.audioEngine.setMusicVolume(playSound_1.musicVolume);
        var musicIsOpen = cc.sys.localStorage.getItem(LS_musicIsOpen);
        var soundIsOpen = cc.sys.localStorage.getItem(LS_soundIsOpen);
        musicIsOpen && "false" == musicIsOpen && playSound_1.musicOpened(false);
        soundIsOpen && "false" == soundIsOpen && playSound_1.soundOpened(false);
      };
      playSound.prototype.\u64ad\u653e\u97f3\u6548 = function(event, index) {
        if (!index && this.defaultAudioClip) {
          playSound_1.playSound(this.defaultAudioClip);
          return;
        }
        index && this.audioClip && this.audioClip.length && playSound_1.playSound(this.audioClip[Number(index)]);
      };
      playSound.playSound = function(audioClip) {
        if (audioClip) return cc.audioEngine.playEffect(audioClip, false);
        return null;
      };
      playSound.stopSound = function(soundID) {
        cc.audioEngine.stopEffect(soundID);
      };
      playSound.playMusic = function(audioClip, isLoop) {
        void 0 === isLoop && (isLoop = true);
        if (audioClip) return cc.audioEngine.playMusic(audioClip, isLoop);
        return null;
      };
      playSound.stopMusic = function() {
        cc.audioEngine.stopMusic();
      };
      playSound.resumeMusic = function() {
        cc.audioEngine.resumeMusic();
      };
      playSound.pauseMusic = function() {
        cc.audioEngine.pauseMusic();
      };
      playSound.playSoundByPath = function(path, gamePath) {
        void 0 === gamePath && (gamePath = "");
        var realUrl = "/sounds/" + gamePath + path;
        cc.loader.loadRes(realUrl, cc.AudioClip, function(error, audio) {
          error ? console.error(error.message) : audio && playSound_1.playSound(audio);
        });
      };
      playSound.setMusicVolume = function(volume) {
        if (playSound_1.musicVolume != volume) {
          playSound_1.musicVolume = volume;
          cc.sys.localStorage.setItem(LS_musicVolume, playSound_1.musicVolume.toString());
          cc.audioEngine.setMusicVolume(playSound_1.musicVolume);
        }
      };
      playSound.musicOpened = function(isOpen) {
        if (playSound_1.musicIsOpen != isOpen) {
          playSound_1.musicIsOpen = isOpen;
          cc.sys.localStorage.setItem(LS_musicIsOpen, playSound_1.musicIsOpen.toString());
          cc.audioEngine.setMusicVolume(isOpen ? playSound_1.musicVolume : 0);
        }
      };
      playSound.setSoundVolume = function(volume) {
        if (playSound_1.soundVolume != volume) {
          playSound_1.soundVolume = volume;
          cc.sys.localStorage.setItem(LS_soundVolume, playSound_1.soundVolume.toString());
          cc.audioEngine.setEffectsVolume(playSound_1.soundVolume);
        }
      };
      playSound.soundOpened = function(isOpen) {
        if (playSound_1.soundIsOpen != isOpen) {
          playSound_1.soundIsOpen = isOpen;
          cc.sys.localStorage.setItem(LS_soundIsOpen, playSound_1.soundIsOpen.toString());
          cc.audioEngine.setEffectsVolume(isOpen ? playSound_1.soundVolume : 0);
        }
      };
      playSound.getSoundVolume = function() {
        return playSound_1.soundVolume;
      };
      playSound.getMusicVolume = function() {
        return playSound_1.musicVolume;
      };
      var playSound_1;
      playSound.musicVolume = 1;
      playSound.soundVolume = 1;
      playSound.musicIsOpen = true;
      playSound.soundIsOpen = true;
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u8981\u64ad\u653e\u7684\u97f3\u6548"
      }) ], playSound.prototype, "audioClip", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u9ed8\u8ba4\u8981\u64ad\u653e\u7684\u97f3\u6548"
      }) ], playSound.prototype, "defaultAudioClip", void 0);
      playSound = playSound_1 = __decorate([ ccclass, menu("\u58f0\u97f3\u7ec4\u4ef6/\u97f3\u6548") ], playSound);
      return playSound;
    }(cc.Component);
    exports.default = playSound;
    cc._RF.pop();
  }, {} ],
  scoreAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "873a9VsKpdPGruCS2LXQo8a", "scoreAni");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var scoreAni = function(_super) {
      __extends(scoreAni, _super);
      function scoreAni() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scoreImg = null;
        _this.particle = null;
        return _this;
      }
      scoreAni.prototype.onLoad = function() {
        this.particle && this.particle.stopSystem();
      };
      scoreAni.prototype.setPos = function(x, y) {
        this.node.x = x;
        this.node.y = y;
      };
      scoreAni.prototype.moveToTarget = function(delay, tarPos, overCallback, finishCallback) {
        var _this = this;
        void 0 === overCallback && (overCallback = null);
        void 0 === finishCallback && (finishCallback = null);
        this.scoreImg.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(.25, {
          scale: 1
        }).delay(.25 + delay).call(function() {
          _this.particle && _this.particle.resetSystem();
        }).to(.75, {
          x: tarPos.x,
          y: tarPos.y
        }, {
          easing: "sineOut"
        }).call(function() {
          overCallback && overCallback(_this);
          _this.particle && _this.particle.stopSystem();
          _this.scoreImg.node.active = false;
        }).delay(.5).call(function() {
          finishCallback && finishCallback(_this);
        }).start();
      };
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u5206\u6570\u56fe\u6807"
      }) ], scoreAni.prototype, "scoreImg", void 0);
      __decorate([ property({
        type: cc.ParticleSystem,
        displayName: "\u7c92\u5b50\u7279\u6548"
      }) ], scoreAni.prototype, "particle", void 0);
      scoreAni = __decorate([ ccclass ], scoreAni);
      return scoreAni;
    }(cc.Component);
    exports.default = scoreAni;
    cc._RF.pop();
  }, {} ],
  setting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b3b7/KrdhBHpOaR8SwVr6e", "setting");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gameAudioClip_1 = require("./gameAudioClip");
    var sliderEX_1 = require("../../commonLib/component/sliderEX");
    var gameMain_1 = require("./gameMain");
    var LS_musicVolume = "musicVolume";
    var LS_soundVolume = "soundVolume";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var setting = function(_super) {
      __extends(setting, _super);
      function setting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.musicSlider = null;
        _this.soundSlider = null;
        return _this;
      }
      setting_1 = setting;
      setting.prototype.onLoad = function() {
        this.musicSlider.progress = setting_1.musicVolume;
        this.soundSlider.progress = setting_1.soundVolume;
      };
      setting.prototype.onEnable = function() {
        gameMain_1.default.instance.pauseGame();
      };
      setting.prototype.onDisable = function() {
        gameMain_1.default.instance.resumeGame();
      };
      setting.prototype.\u8bbe\u7f6e\u97f3\u4e50 = function() {
        setting_1.setMusicVolume(this.musicSlider.progress);
      };
      setting.prototype.\u8bbe\u7f6e\u97f3\u6548 = function() {
        setting_1.setSoundVolume(this.soundSlider.progress);
      };
      setting.prototype.\u64ad\u653e\u58f0\u6548 = function() {
        gameAudioClip_1.default.playBtnClick();
      };
      setting.initVolume = function() {
        var music = cc.sys.localStorage.getItem(LS_musicVolume);
        var sound = cc.sys.localStorage.getItem(LS_soundVolume);
        setting_1.musicVolume = music ? Number(music) : 1;
        setting_1.soundVolume = sound ? Number(sound) : 1;
        cc.audioEngine.setEffectsVolume(setting_1.soundVolume);
        cc.audioEngine.setMusicVolume(setting_1.musicVolume);
      };
      setting.setMusicVolume = function(volume) {
        if (setting_1.musicVolume != volume) {
          setting_1.musicVolume = volume;
          cc.sys.localStorage.setItem(LS_musicVolume, setting_1.musicVolume.toString());
          cc.audioEngine.setMusicVolume(setting_1.musicVolume);
        }
      };
      setting.setSoundVolume = function(volume) {
        if (setting_1.soundVolume != volume) {
          setting_1.soundVolume = volume;
          cc.sys.localStorage.setItem(LS_soundVolume, setting_1.soundVolume.toString());
          cc.audioEngine.setEffectsVolume(setting_1.soundVolume);
        }
      };
      var setting_1;
      setting.musicVolume = 1;
      setting.soundVolume = 1;
      __decorate([ property({
        type: sliderEX_1.default,
        displayName: "\u97f3\u4e50"
      }) ], setting.prototype, "musicSlider", void 0);
      __decorate([ property({
        type: sliderEX_1.default,
        displayName: "\u97f3\u6548"
      }) ], setting.prototype, "soundSlider", void 0);
      setting = setting_1 = __decorate([ ccclass ], setting);
      return setting;
    }(cc.Component);
    exports.default = setting;
    cc._RF.pop();
  }, {
    "../../commonLib/component/sliderEX": "sliderEX",
    "./gameAudioClip": "gameAudioClip",
    "./gameMain": "gameMain"
  } ],
  settlementParameter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "485a7ZY32pKFqKuJEARkUMK", "settlementParameter");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var itemParameter = function() {
      function itemParameter() {
        this.baseScore40 = 150;
        this.baseScore54 = 200;
        this.baseScore70 = 300;
        this.tip = .2;
        this.lightning = .4;
        this.reset = .6;
        this.freeze = .8;
        this.key = .9;
      }
      __decorate([ property({
        displayName: "\u57fa\u51c6\u5206\u657040\u5feb"
      }) ], itemParameter.prototype, "baseScore40", void 0);
      __decorate([ property({
        displayName: "\u57fa\u51c6\u5206\u657054\u5feb"
      }) ], itemParameter.prototype, "baseScore54", void 0);
      __decorate([ property({
        displayName: "\u57fa\u51c6\u5206\u657070\u5feb"
      }) ], itemParameter.prototype, "baseScore70", void 0);
      __decorate([ property({
        displayName: "\u67e5\u627e"
      }) ], itemParameter.prototype, "tip", void 0);
      __decorate([ property({
        displayName: "\u95ea\u7535"
      }) ], itemParameter.prototype, "lightning", void 0);
      __decorate([ property({
        displayName: "\u91cd\u6392"
      }) ], itemParameter.prototype, "reset", void 0);
      __decorate([ property({
        displayName: "\u51bb\u7ed3"
      }) ], itemParameter.prototype, "freeze", void 0);
      __decorate([ property({
        displayName: "\u94a5\u5319"
      }) ], itemParameter.prototype, "key", void 0);
      itemParameter = __decorate([ ccclass("itemParameter") ], itemParameter);
      return itemParameter;
    }();
    exports.itemParameter = itemParameter;
    cc._RF.pop();
  }, {} ],
  settlement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b79822RUTJC0aWeho6ilynk", "settlement");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var nodeOperation_1 = require("../../commonLib/component/nodeOperation");
    var settlementParameter_1 = require("./settlementParameter");
    var playAnimation_1 = require("../../commonLib/component/playAnimation");
    var gameLib_1 = require("../../commonLib/lib/gameLib");
    var advertising_1 = require("./advertising");
    var gameAudioClip_1 = require("./gameAudioClip");
    var gameMain_1 = require("./gameMain");
    var gameData_1 = require("./gameData");
    var addUI_1 = require("../../commonLib/component/addUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var settlement = function(_super) {
      __extends(settlement, _super);
      function settlement() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemParameter = null;
        _this.themeProbability = [];
        _this.boxAward = [];
        _this.homeBtn = null;
        _this.starScore = null;
        _this.timeScore = null;
        _this.totalScoreLab = null;
        _this.tipScore = null;
        _this.tipMark = null;
        _this.resetScore = null;
        _this.resetMark = null;
        _this.lightningScore = null;
        _this.lightningMark = null;
        _this.keyScore = null;
        _this.keyMark = null;
        _this.freezeScore = null;
        _this.freezeMark = null;
        _this.nextLevelBtn = null;
        _this.noAdvertisingBtn = null;
        _this.advertisingBtn = null;
        _this.openBoxAni = null;
        _this.itemSpriteFrames = [];
        _this.nodeOperation = null;
        _this.addUI = null;
        _this.nextlevelCallback = null;
        _this.tipNeedScore = 200;
        _this.lightningNeedScore = 200;
        _this.resetNeedScore = 200;
        _this.freezeNeedScore = 200;
        _this.keyNeedScore = 200;
        _this.totalScore = 0;
        _this.goHomeCallback = null;
        return _this;
      }
      settlement.prototype.onLoad = function() {
        this.nodeOperation = this.getComponent(nodeOperation_1.default);
        this.addUI = this.getComponent(addUI_1.default);
        this.nextLevelBtn.node.active = false;
      };
      settlement.prototype.setNextlevelCallback = function(nextlevelCallback) {
        this.nextlevelCallback = nextlevelCallback;
      };
      settlement.prototype.setScore = function(starScore, time, totalGridCount) {
        time = Math.ceil(time);
        this.starScore.string = starScore.toString();
        this.timeScore.string = time.toString();
        this.totalScore = starScore + time;
        this.totalScoreLab.string = this.totalScore.toString();
        var scoreBase = this.itemParameter.baseScore40;
        totalGridCount >= 70 ? scoreBase = this.itemParameter.baseScore70 : totalGridCount >= 54 ? scoreBase = this.itemParameter.baseScore54 : totalGridCount >= 40 && (scoreBase = this.itemParameter.baseScore40);
        this.tipNeedScore = Math.ceil(scoreBase * this.itemParameter.tip);
        this.tipScore.string = this.tipNeedScore.toString();
        this.lightningNeedScore = Math.ceil(scoreBase * this.itemParameter.lightning);
        this.lightningScore.string = this.lightningNeedScore.toString();
        this.resetNeedScore = Math.ceil(scoreBase * this.itemParameter.reset);
        this.resetScore.string = this.resetNeedScore.toString();
        this.freezeNeedScore = Math.ceil(scoreBase * this.itemParameter.freeze);
        this.freezeScore.string = this.freezeNeedScore.toString();
        this.keyNeedScore = Math.ceil(scoreBase * this.itemParameter.key);
        this.keyScore.string = this.keyNeedScore.toString();
        this.tipMark.node.active = false;
        this.lightningMark.node.active = false;
        this.resetMark.node.active = false;
        this.freezeMark.node.active = false;
        this.keyMark.node.active = false;
      };
      settlement.prototype.show = function() {
        var _this = this;
        this.homeBtn.node.active = false;
        this.nextLevelBtn.node.active = false;
        this.node.active = true;
        this.scheduleOnce(function() {
          _this.playScoreAward();
        }, .5);
      };
      settlement.prototype.showNextLevelBtn = function() {
        if (this.openBoxAni.isPlaying()) return;
        ++gameData_1.gameData.curLevel;
        gameData_1.saveGameData();
        var playTime = .25;
        this.nextLevelBtn.node.scale = 0;
        this.nextLevelBtn.node.active = true;
        cc.tween(this.nextLevelBtn.node).delay(playTime).to(playTime, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
        this.homeBtn.node.scale = 0;
        this.homeBtn.node.active = true;
        cc.tween(this.homeBtn.node).delay(playTime).to(playTime, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
      };
      settlement.prototype.playScoreAward = function() {
        var _this = this;
        var markArray = [ this.tipMark, this.lightningMark, this.resetMark, this.freezeMark, this.keyMark ];
        var scoreArray = [ this.tipNeedScore, this.lightningNeedScore, this.resetNeedScore, this.freezeNeedScore, this.keyNeedScore ];
        var playTime = .15;
        var playAni = function(i) {
          var mark = markArray[i];
          var score = scoreArray[i];
          if (mark && _this.totalScore >= score) {
            switch (i) {
             case 0:
              ++gameData_1.gameData.curTipCount;
              break;

             case 1:
              ++gameData_1.gameData.curLightningCount;
              break;

             case 2:
              ++gameData_1.gameData.curResetCount;
              break;

             case 3:
              ++gameData_1.gameData.curFreezeTimeCount;
            }
            mark.node.scale = 0;
            mark.node.active = true;
            cc.tween(mark.node).delay(playTime).call(function() {
              gameAudioClip_1.default.playReceiveItem();
            }).to(playTime, {
              scale: 1
            }, {
              easing: "backOut"
            }).call(function() {
              if (mark == _this.keyMark) {
                for (var i_1 = 0; i_1 < _this.boxAward.length - 1; ++i_1) _this.setOpenBoxAward(i_1);
                var state = _this.openBoxAni.play();
                _this.showRedPackets(state.duration + .25);
              } else playAni(i + 1);
            }).start();
          } else _this.showRedPackets(.25);
        };
        playAni(0);
      };
      settlement.prototype.showRedPackets = function(delay) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.addUI.addUI(null, function(ui) {
            var old = ui["onDestroy"];
            ui["onDestroy"] = function() {
              old && old();
              _this.showNextLevelBtn();
            };
          }, "RedPackets");
        }, delay);
      };
      settlement.prototype.setOpenBoxAward = function(index) {
        var _this = this;
        var randomItem = function() {
          var oldWidth = _this.boxAward[index].node.width;
          var oldHeight = _this.boxAward[index].node.height;
          var award = gameMain_1.default.instance.createComboAward();
          switch (award.awardID) {
           case 0:
            ++gameData_1.gameData.curTipCount;
            break;

           case 1:
            ++gameData_1.gameData.curLightningCount;
            break;

           case 2:
            ++gameData_1.gameData.curResetCount;
            break;

           case 3:
            ++gameData_1.gameData.curFreezeTimeCount;
          }
          _this.boxAward[index].spriteFrame = _this.itemSpriteFrames[award.awardID];
          _this.boxAward[index].node.width = oldWidth;
          _this.boxAward[index].node.height = oldHeight;
        };
        var theme = this.randomTheme();
        if (0 == theme) randomItem(); else if (6 == theme) randomItem(); else {
          var itemID = this.randomThemeItem(theme);
          if (itemID >= 0) {
            gameData_1.gameData.archive[theme] || (gameData_1.gameData.archive[theme] = []);
            gameData_1.gameData.archive[theme].push(itemID);
            gameData_1.setGridIcon(itemID, this.boxAward[index], theme);
          } else randomItem();
        }
      };
      settlement.prototype.\u70b9\u51fb\u4e0b\u4e00\u5c40 = function() {
        var _this = this;
        this.nodeOperation.closeSelf(function() {
          _this.nextlevelCallback && _this.nextlevelCallback();
        });
      };
      settlement.prototype.randomThemeItem = function(themeID) {
        var ids = [];
        for (var i = 0; i < 20; ++i) ids.push(i);
        if (gameData_1.gameData.archive[themeID]) for (var _i = 0, _a = gameData_1.gameData.archive[themeID]; _i < _a.length; _i++) {
          var v = _a[_i];
          for (var i = 0; i < ids.length; ++i) if (v == ids[i]) {
            ids.splice(i, 1);
            break;
          }
        }
        return ids.length ? ids[gameLib_1.gameLib.GetRandomNum(0, ids.length - 1)] : -1;
      };
      settlement.prototype.randomTheme = function() {
        var ret = 0;
        var all = 0;
        var ids = [];
        for (var i = 0; i < this.themeProbability.length; ++i) (0 == i || !gameData_1.gameData.archive[i] || gameData_1.gameData.archive[i] && gameData_1.gameData.archive[i].length < 20) && ids.push({
          id: i,
          pro: this.themeProbability[i]
        });
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
          var v = ids_1[_i];
          all += v.pro;
        }
        var rand = Math.random();
        var r = all * rand;
        var w = 0;
        for (var i = 0; i < ids.length; ++i) {
          w += ids[i].pro;
          if (r <= w) {
            ret = ids[i].id;
            break;
          }
        }
        return ret;
      };
      settlement.prototype.setGoHomeCallback = function(callback) {
        this.goHomeCallback = callback;
      };
      settlement.prototype.\u64ad\u653e\u5e7f\u544a = function() {
        var _this = this;
        advertising_1.default.play(function() {
          var i = _this.boxAward.length - 1;
          _this.setOpenBoxAward(i);
          _this.openBoxAni.play("\u5f00\u7bb1\u5956\u52b12");
          _this.advertisingBtn.node.active = false;
        });
      };
      settlement.prototype.\u56de\u5230\u4e3b\u9875 = function() {
        var _this = this;
        this.nodeOperation.closeSelf(function() {
          _this.goHomeCallback && _this.goHomeCallback();
        });
      };
      __decorate([ property({
        type: settlementParameter_1.itemParameter,
        displayName: "\u9053\u5177\u6240\u9700\u5206\u6570"
      }) ], settlement.prototype, "itemParameter", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u4e3b\u9898\u6982\u7387"
      }) ], settlement.prototype, "themeProbability", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u5f00\u7bb1\u5956\u52b1"
      }) ], settlement.prototype, "boxAward", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u4e3b\u9875\u6309\u94ae"
      }) ], settlement.prototype, "homeBtn", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u661f\u661f\u5206\u6570"
      }) ], settlement.prototype, "starScore", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u65f6\u95f4\u5206\u6570"
      }) ], settlement.prototype, "timeScore", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u603b\u5206\u6570"
      }) ], settlement.prototype, "totalScoreLab", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u63d0\u793a\u5206"
      }) ], settlement.prototype, "tipScore", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u63d0\u793a\u5bf9\u52fe"
      }) ], settlement.prototype, "tipMark", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u91cd\u6392\u5206"
      }) ], settlement.prototype, "resetScore", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u91cd\u6392\u5bf9\u52fe"
      }) ], settlement.prototype, "resetMark", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u95ea\u7535\u5206"
      }) ], settlement.prototype, "lightningScore", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u95ea\u7535\u5bf9\u52fe"
      }) ], settlement.prototype, "lightningMark", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u94a5\u5319\u5206"
      }) ], settlement.prototype, "keyScore", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u94a5\u5319\u5bf9\u52fe"
      }) ], settlement.prototype, "keyMark", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u51b0\u51bb\u5206"
      }) ], settlement.prototype, "freezeScore", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u51b0\u51bb\u5bf9\u52fe"
      }) ], settlement.prototype, "freezeMark", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u4e0b\u4e00\u5173\u6309\u94ae"
      }) ], settlement.prototype, "nextLevelBtn", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u4e0d\u770b\u5e7f\u544a\u6309\u94ae"
      }) ], settlement.prototype, "noAdvertisingBtn", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u770b\u5e7f\u544a\u6309\u94ae"
      }) ], settlement.prototype, "advertisingBtn", void 0);
      __decorate([ property({
        type: playAnimation_1.default,
        displayName: "\u5f00\u7bb1\u52a8\u753b"
      }) ], settlement.prototype, "openBoxAni", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u9053\u5177\u56fe\u6807",
        tooltip: "\u56db\u4e2a\u529f\u80fd\u9053\u5177\u56fe\u6807(\u63d0\u793a\uff0c\u95ea\u7535\uff0c\u91cd\u6392\uff0c\u51bb\u7ed3)"
      }) ], settlement.prototype, "itemSpriteFrames", void 0);
      settlement = __decorate([ ccclass ], settlement);
      return settlement;
    }(cc.Component);
    exports.default = settlement;
    cc._RF.pop();
  }, {
    "../../commonLib/component/addUI": "addUI",
    "../../commonLib/component/nodeOperation": "nodeOperation",
    "../../commonLib/component/playAnimation": "playAnimation",
    "../../commonLib/lib/gameLib": "gameLib",
    "./advertising": "advertising",
    "./gameAudioClip": "gameAudioClip",
    "./gameData": "gameData",
    "./gameMain": "gameMain",
    "./settlementParameter": "settlementParameter"
  } ],
  sliderEX: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58af8cFEQJP5IZO3zhuz3mH", "sliderEX");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var sliderEX = function(_super) {
      __extends(sliderEX, _super);
      function sliderEX() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.progressSP = null;
        return _this;
      }
      sliderEX.prototype.onLoad = function() {
        this.onProgress();
      };
      sliderEX.prototype._updateProgress = function(touch) {
        _super.prototype["_updateProgress"].call(this, touch);
        this.onProgress();
      };
      sliderEX.prototype.onProgress = function() {
        this.progressSP && (this.progressSP.fillRange = this.progress);
      };
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u8fdb\u5ea6\u6761"
      }) ], sliderEX.prototype, "progressSP", void 0);
      sliderEX = __decorate([ ccclass ], sliderEX);
      return sliderEX;
    }(cc.Slider);
    exports.default = sliderEX;
    cc._RF.pop();
  }, {} ],
  spineEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c48fchJEuxK/pK48HXEgEC9", "spineEvent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
    var spineEvent = function(_super) {
      __extends(spineEvent, _super);
      function spineEvent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.callbackEvents = [];
        _this.skeleton = null;
        _this.endEventListener = null;
        return _this;
      }
      spineEvent.prototype.onLoad = function() {
        this.skeleton = this.getComponent(sp.Skeleton);
        this.skeleton.setEndListener(this.onEndEvent.bind(this));
      };
      spineEvent.prototype.onEndEvent = function() {
        for (var _i = 0, _a = this.callbackEvents; _i < _a.length; _i++) {
          var v = _a[_i];
          v.emit([ v.customEventData, this ]);
        }
        this.endEventListener && this.endEventListener(this);
      };
      spineEvent.prototype.setEndEventListener = function(callback) {
        this.endEventListener = callback;
      };
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u52a8\u753b\u5b8c\u6210\u56de\u8c03"
      }) ], spineEvent.prototype, "callbackEvents", void 0);
      spineEvent = __decorate([ ccclass, requireComponent(sp.Skeleton), menu("spine/\u4e8b\u4ef6\u76d1\u542c") ], spineEvent);
      return spineEvent;
    }(cc.Component);
    exports.default = spineEvent;
    cc._RF.pop();
  }, {} ],
  subject: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80c41hTcVZD5YV21s4RUknN", "subject");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var subject = function(_super) {
      __extends(subject, _super);
      function subject() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.showClip = null;
        _this.ani = null;
        return _this;
      }
      subject.prototype.onLoad = function() {
        this.ani = this.getComponent(cc.Animation);
      };
      subject.prototype.playShowAni = function() {
        var state = this.ani.play(this.showClip.name);
        this.ani.setCurrentTime(0, this.showClip.name);
        this.ani.sample(this.showClip.name);
        return state;
      };
      __decorate([ property({
        type: cc.AnimationClip,
        displayName: "\u6de1\u5165\u52a8\u753b"
      }) ], subject.prototype, "showClip", void 0);
      subject = __decorate([ ccclass ], subject);
      return subject;
    }(cc.Component);
    exports.default = subject;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AnimationEventComponent", "BlockInput", "NodeListener", "adapter", "addUI", "canvasAdapter", "countDown", "dragNode", "nodeOperation", "playAnimation", "playSound", "sliderEX", "spineEvent", "gameLib", "Archive", "ArchiveItem", "RedPackets", "ThemeSelect", "addItem", "advertising", "comboAward", "comboText", "cover", "gameAudioClip", "gameData", "gameMain", "gameOver", "grid", "gridManager", "level_parameter", "linkGamePathFinding", "linkLine", "scoreAni", "setting", "settlement", "settlementParameter", "subject" ]);