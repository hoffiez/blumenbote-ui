"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodLocationIcon = exports.TruckIcon = exports.StorePickupIcon = exports.ArchiesOrderTypes = exports.HomeHero = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Modal = require("../../../../../components/Modal");

var _AddressForm = require("../AddressForm");

var _AddressList = require("../AddressList");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HomeHero = function HomeHero(props) {
  var _configState$configs, _configState$configs$, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _orderState$options2, _theme$defaultLanguag4, _props$afterComponent, _props$afterElements;

  var onFindBusiness = props.onFindBusiness;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var theme = (0, _styledComponents.useTheme)();
  var userCustomer = parseInt(window.localStorage.getItem('user-customer'));
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || []; // const configTypes = [1, 2, 3]

  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;

    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
      return;
    }

    setModals({
      listOpen: false,
      formOpen: false
    });
    onFindBusiness && onFindBusiness();
  };

  var handleAddressInput = function handleAddressInput() {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };

  (0, _react.useEffect)(function () {
    return function () {
      return setModals({
        listOpen: false,
        formOpen: false
      });
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.homeHero
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'All We need is Food.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SUBTITLE_HOME) || 'Let\'s start to order food now')), /*#__PURE__*/_react.default.createElement(ArchiesOrderTypes, {
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && configTypes.length > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && configTypes.length > 0) && 1,
    handleAddressInput: handleAddressInput
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ADDRESS) || 'Address'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.ADDRESSES) || 'Addresses'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer) ? null : userCustomer,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.HomeHero = HomeHero;

var ArchiesOrderTypeUI = function ArchiesOrderTypeUI(props) {
  var handleChangeOrderType = props.handleChangeOrderType,
      configTypes = props.configTypes,
      orderTypes = props.orderTypes,
      handleAddressInput = props.handleAddressInput;

  var handleOrderType = function handleOrderType(orderType) {
    if (configTypes && configTypes.includes(orderType.value)) {
      handleChangeOrderType(orderType.value);
    }

    handleAddressInput(); // if (orderType.value === configTypes[0]) {
    //   handleAddressInput()
    // }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.WrapOrderyType, null, orderTypes && orderTypes.map(function (orderType) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
      key: orderType.value,
      onClick: function onClick() {
        return handleOrderType(orderType);
      }
    }, orderType.icon, orderType.content);
  }), /*#__PURE__*/_react.default.createElement(_styles.FoodLocation, null, /*#__PURE__*/_react.default.createElement(FoodLocationIcon, null)));
};

var ArchiesOrderTypes = function ArchiesOrderTypes(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ArchiesOrderTypeUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      icon: /*#__PURE__*/_react.default.createElement(TruckIcon, null),
      content: /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery'))
    }, {
      value: 2,
      icon: /*#__PURE__*/_react.default.createElement(StorePickupIcon, null),
      content: /*#__PURE__*/_react.default.createElement("span", null, t('PICKUP', 'Pickup'))
    }]
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};

exports.ArchiesOrderTypes = ArchiesOrderTypes;

var StorePickupIcon = function StorePickupIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "shop-store-market-donut-drink"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M26,16a3,3,0,1,0-3-3A3,3,0,0,0,26,16Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,26,12Z"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "20",
    y: "47",
    width: "2",
    height: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M59,56H57V28.9A5.017,5.017,0,0,0,61,24a.808.808,0,0,0-.01-.16L59.26,13.51A2.978,2.978,0,0,0,56.31,11H49V5a3.009,3.009,0,0,0-3-3H18a3.009,3.009,0,0,0-3,3v6H7.69a2.978,2.978,0,0,0-2.95,2.51L3.01,23.84A.808.808,0,0,0,3,24a5.017,5.017,0,0,0,4,4.9V56H5a3,3,0,0,0,0,6H59a3,3,0,0,0,0-6ZM53,13h3.31a.989.989,0,0,1,.98.84L59,24.08A3,3,0,0,1,53,24Zm-4,8V13h2V24a3,3,0,0,1-6,0h1A3.009,3.009,0,0,0,49,21ZM17,5a1,1,0,0,1,1-1H46a1,1,0,0,1,1,1V21a1,1,0,0,1-1,1H18a1,1,0,0,1-1-1ZM43,24a3,3,0,0,1-6,0Zm-8,0a3,3,0,0,1-6,0Zm-8,0a3,3,0,0,1-6,0ZM13,13h2v8a3.009,3.009,0,0,0,3,3h1a3,3,0,0,1-6,0ZM12,27a5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,4.994,4.994,0,0,0,3,1.89V56H25V43a7,7,0,0,0-14,0V56H9V28.89A4.994,4.994,0,0,0,12,27ZM23,43V56H13V43a5,5,0,0,1,10,0ZM5,24.08,6.71,13.84A.989.989,0,0,1,7.69,13H11V24a3,3,0,0,1-6,.08ZM59,60H5a1,1,0,0,1,0-2H59a1,1,0,0,1,0,2Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M43.79,10.38A1,1,0,0,0,43,10H40V8h3V6H39a1,1,0,0,0-1,1v3H35a1,1,0,0,0-.79.38,1.022,1.022,0,0,0-.18.86l2,8A1,1,0,0,0,37,20h4a1,1,0,0,0,.97-.76l2-8A1.022,1.022,0,0,0,43.79,10.38ZM40.22,18H37.78l-1.5-6h5.44Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26,6a7,7,0,1,0,7,7A7.008,7.008,0,0,0,26,6Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,26,18Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M50,32H30a3.009,3.009,0,0,0-3,3V51a3.009,3.009,0,0,0,3,3H50a3.009,3.009,0,0,0,3-3V35A3.009,3.009,0,0,0,50,32Zm1,19a1,1,0,0,1-1,1H30a1,1,0,0,1-1-1V35a1,1,0,0,1,1-1H50a1,1,0,0,1,1,1Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M44.79,40.38A1,1,0,0,0,44,40H41V38h3V36H40a1,1,0,0,0-1,1v3H36a1,1,0,0,0-.79.38,1.022,1.022,0,0,0-.18.86l2,8A1,1,0,0,0,38,50h4a1,1,0,0,0,.97-.76l2-8A1.022,1.022,0,0,0,44.79,40.38ZM41.22,48H38.78l-1.5-6h5.44Z"
  })));
};

exports.StorePickupIcon = StorePickupIcon;

var TruckIcon = function TruckIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 462.522 462.522",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M432.958,222.262c-1.452-0.305-2.823-0.592-4.042-0.909c-13.821-3.594-20.129-5.564-24.793-14.569l-17.667-35.768 c-5.678-10.961-20.339-19.879-32.682-19.879h-31.453v-41.303c0-7.416-6.034-13.45-13.452-13.45l-219.07,0.22 c-7.218,0-12.661,5.736-12.661,13.343v12.208H21.018C9.429,122.156,0,131.584,0,143.174s9.429,21.018,21.018,21.018h56.119v20.145 H40.394c-11.589,0-21.018,9.429-21.018,21.018s9.429,21.018,21.018,21.018h36.743v20.145H59.77 c-11.589,0-21.018,9.429-21.018,21.018s9.429,21.018,21.018,21.018h17.367v21.07c0,7.416,6.034,13.45,13.45,13.45h22.788 c3.549,24.323,24.542,43.064,49.837,43.064c25.297,0,46.291-18.741,49.841-43.064h92.224c0.479,0,0.97-0.032,1.46-0.064 c3.522,24.354,24.528,43.128,49.845,43.128c25.297,0,46.291-18.741,49.841-43.064h32.732c12.885,0,23.368-10.482,23.368-23.366 v-39.648C462.522,228.465,444.73,224.732,432.958,222.262z M356.582,297.46c10.1,0,18.317,8.214,18.317,18.311 s-8.217,18.311-18.317,18.311c-10.096,0-18.31-8.214-18.31-18.311S346.486,297.46,356.582,297.46z M322.321,219.414v-48.77h24.036 c9.238,0,20.634,6.932,24.864,15.094l15.721,31.829c0.333,0.644,0.679,1.258,1.038,1.846H322.321z M181.529,315.77 c0,10.096-8.217,18.311-18.317,18.311c-10.096,0-18.309-8.214-18.309-18.311s8.213-18.311,18.309-18.311 C173.312,297.46,181.529,305.674,181.529,315.77z"
  }));
};

exports.TruckIcon = TruckIcon;

var FoodLocationIcon = function FoodLocationIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    id: "Capa_1",
    enableBackground: "new 0 0 515 512",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m368.688 368.203c-10.479-3.498-21.806 2.16-25.305 12.636-3.498 10.477 2.16 21.806 12.637 25.304 30.208 10.086 39.98 21.776 39.98 25.857 0 2.852-6.225 13.327-33.885 23.7-28.031 10.511-65.716 16.3-106.115 16.3s-78.084-5.789-106.115-16.3c-27.66-10.373-33.885-20.848-33.885-23.7 0-4.081 9.772-15.771 39.98-25.856 10.477-3.498 16.135-14.827 12.637-25.304-3.499-10.477-14.828-16.136-25.305-12.636-58.567 19.553-67.312 48.363-67.312 63.796 0 17.661 10.382 42.606 59.84 61.153 32.41 12.154 75.084 18.847 120.16 18.847s87.75-6.693 120.16-18.847c49.458-18.547 59.84-43.492 59.84-61.153 0-15.433-8.745-44.243-67.312-63.797zm-169.195-17.261 38.993 70.716c3.518 6.38 10.228 10.342 17.514 10.342s13.996-3.962 17.514-10.343l38.993-70.716c33.863-11.224 64.197-32.693 86.109-61.107 24.457-31.714 37.384-69.694 37.384-109.834 0-99.252-80.748-180-180-180s-180 80.748-180 180c0 40.14 12.927 78.12 37.384 109.835 21.912 28.414 52.246 49.883 86.109 61.107zm56.507-310.942c77.196 0 140 62.804 140 140 0 62.683-42.125 118.16-102.442 134.91-5.182 1.439-9.565 4.904-12.163 9.614l-25.395 46.056-25.396-46.056c-2.597-4.709-6.981-8.174-12.163-9.614-60.316-16.75-102.441-72.227-102.441-134.91 0-77.196 62.804-140 140-140zm-80 200h160c11.046 0 20-8.954 20-20 0-48.293-34.411-88.698-80-97.989v-22.011c0-11.046-8.954-20-20-20s-20 8.954-20 20v22.011c-45.589 9.291-80 49.697-80 97.989 0 11.046 8.954 20 20 20zm80-80c26.075 0 48.318 16.719 56.573 40h-113.146c8.255-23.281 30.498-40 56.573-40z"
  }))));
};

exports.FoodLocationIcon = FoodLocationIcon;