"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _IosMenu = _interopRequireDefault(require("@meronex/icons/ios/IosMenu"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _AiOutlineLogin = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineLogin"));

var _AiOutlineUserAdd = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineUserAdd"));

var _FaRegAddressCard = _interopRequireDefault(require("@meronex/icons/fa/FaRegAddressCard"));

var _FaRegListAlt = _interopRequireDefault(require("@meronex/icons/fa/FaRegListAlt"));

var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));

var _orderingComponents = require("ordering-components");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _LogoutButton = require("../../../../../components/LogoutButton");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SidebarMenu = function SidebarMenu(props) {
  var _props$beforeElements, _props$beforeComponen, _options$address2, _props$afterComponent, _props$afterElements;

  var auth = props.auth,
      isHideSignup = props.isHideSignup,
      userCustomer = props.userCustomer,
      isCustomerMode = props.isCustomerMode;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      options = _useOrder2[0].options;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    actionSidebar(false);
    setIsMenuOpen(false);
  };

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    document.getElementById('sidebar_menu').style.width = value ? width > 489 ? '340px' : '100vw' : '0';
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh';
      } else {
        document.getElementById('sidebar_menu').style.width = '340px';
      }
    }
  }, [width]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    auth: auth
  }, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    "aria-label": "menu",
    onClick: function onClick() {
      return actionSidebar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_IosMenu.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    id: "sidebar_menu"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuClose, {
    "aria-label": "close",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), userCustomer && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isCustomer: userCustomer
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: false
  }, /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: false
  }, "".concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      var _options$address;

      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address = options.address) !== null && _options$address !== void 0 && _options$address.location ? 'search' : 'home'
      });
    },
    style: {
      padding: '10px 16px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/search'
  }, options !== null && options !== void 0 && (_options$address2 = options.address) !== null && _options$address2 !== void 0 && _options$address2.location ? t('BUSINESSES', 'Businesses') : t('HOME', 'Home')))), /*#__PURE__*/_react.default.createElement(_styles.Navlinks, null, /*#__PURE__*/_react.default.createElement("a", {
    href: t('ARCHIES_MENU_LINK', 'https://archies.cluvi.co'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('ARCHIES_MENU_TEXT', 'Menu')), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/location",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/location' ? 'active' : ''
  }, t('ARCHIES_UBICATION_TEXT ', 'Ubicación'), " ")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/picoli",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/picoli' ? 'active' : ''
  }, t('ARCHIES_PICOLI_TEXT ', 'Picoli'))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/promotions",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/promotions' ? 'active' : ''
  }, t('ARCHIES_PROMOS_TEXT ', 'Promociones'))), /*#__PURE__*/_react.default.createElement("a", {
    href: t('ARCHIES_CONTACT_LINK', 'https://contacto.miexperienciaarchies.com.co'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('ARCHIES_CONTACT_TEXT ', 'Contacto'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/profile'
  }, /*#__PURE__*/_react.default.createElement(_FaRegAddressCard.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/profile'
  }, t('PROFILE', 'Profile'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/profile/orders'
  }, /*#__PURE__*/_react.default.createElement(_FaRegListAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/profile/orders'
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    onCustomClick: function onCustomClick() {
      return actionSidebar(false);
    }
  })), !auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/signin' || window.location.pathname === '/login'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineLogin.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/signin' || window.location.pathname === '/login'
  }, t('SIGN_IN', 'Sign in'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/signup'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineUserAdd.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/signup'
  }, t('SIGNUP', 'Sign up'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null)))))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.SidebarMenu = SidebarMenu;