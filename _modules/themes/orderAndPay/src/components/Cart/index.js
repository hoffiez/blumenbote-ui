"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _Buttons = require("../../styles/Buttons");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));

var _Confirm = require("../Confirm");

var _Modal = require("../Modal");

var _CouponControl = require("../../../../../components/CouponControl");

var _ProductForm = require("../ProductForm");

var _UpsellingPage = require("../UpsellingPage");

var _styles = require("./styles");

var _utils = require("../../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var CartUI = function CartUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _props$beforeElements, _props$beforeComponen, _cart$products, _cart$business, _orderState$options, _configs$driver_tip_t, _configs$driver_tip_u, _cart$business2, _cart$business3, _props$afterComponent, _props$afterElements;

  var cart = props.cart,
      changeQuantity = props.changeQuantity,
      getProductMax = props.getProductMax,
      offsetDisabled = props.offsetDisabled,
      removeProduct = props.removeProduct,
      onClickCheckout = props.onClickCheckout,
      isCheckout = props.isCheckout,
      isCartPending = props.isCartPending,
      isCartPopover = props.isCartPopover,
      isForceOpenCart = props.isForceOpenCart,
      isCartOnProductsList = props.isCartOnProductsList,
      isCustomMode = props.isCustomMode,
      handleGoBack = props.handleGoBack;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber;

  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
      _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
      validationFields = _useValidationFields2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirm = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openProduct = _useState4[0],
      setModalIsOpen = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      curProduct = _useState6[0],
      setCurProduct = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      openUpselling = _useState8[0],
      setOpenUpselling = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      canOpenUpselling = _useState10[0],
      setCanOpenUpselling = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isUpselling = _useState12[0],
      setIsUpselling = _useState12[1];

  var isCouponEnabled = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.coupon) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled;

  var handleDeleteClick = function handleDeleteClick(product) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: function handleOnAccept() {
        removeProduct(product, cart);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };

  var handleEditProduct = function handleEditProduct(product) {
    setCurProduct(product);
    setModalIsOpen(true);
  };

  var handleClickCheckout = function handleClickCheckout() {
    events.emit('go_to_page', {
      page: 'checkout',
      params: {
        cartUuid: cart.uuid
      }
    });
    events.emit('cart_popover_closed');
    onClickCheckout && onClickCheckout();
  };

  (0, _react.useEffect)(function () {
    events.emit('get_current_view');
    return function () {
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    };
  }, []);

  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      setModalIsOpen(false);
    }
  }; // const handleClearProducts = () => {
  //   setConfirm({
  //     open: true,
  //     content: t('QUESTION_DELETE_PRODUCTS', 'Are you sure that you want to delete all products?'),
  //     handleOnAccept: () => {
  //       clearCart(cart?.uuid)
  //       setConfirm({ ...confirm, open: false })
  //     }
  //   })
  // }


  var handleUpsellingPage = function handleUpsellingPage() {
    setOpenUpselling(false);
    setCanOpenUpselling(false);
    handleClickCheckout();
  };

  var checkOutBtnClick = function checkOutBtnClick() {
    if (isCustomMode) handleClickCheckout();else setOpenUpselling(true);
  };

  (0, _react.useEffect)(function () {
    if (isCustomMode) setIsUpselling(true);
  }, [isCustomMode]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isCheckout: isCheckout
  }, !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, {
    size: 20,
    onClick: function onClick() {
      return handleGoBack();
    }
  })), (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CartContainer, {
    className: "cart"
  }, !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('YOUR_CART', 'Your cart')), /*#__PURE__*/_react.default.createElement(_styles.CartSticky, {
    isCartOnProductsList: isCartOnProductsList
  }, (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0 && (cart === null || cart === void 0 ? void 0 : cart.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.code,
      isCartPending: isCartPending,
      isCartProduct: true,
      product: product,
      isCheckout: isCheckout,
      changeQuantity: changeQuantity,
      getProductMax: getProductMax,
      offsetDisabled: offsetDisabled,
      onDeleteProduct: handleDeleteClick,
      onEditProduct: handleEditProduct
    });
  })), (cart === null || cart === void 0 ? void 0 : cart.valid_products) && /*#__PURE__*/_react.default.createElement(_styles.OrderBill, {
    isCheckout: isCheckout
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, cart.business.tax_type === 1 ? parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) + (cart === null || cart === void 0 ? void 0 : cart.tax) || 0) : parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) || 0))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, (cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.discount_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0))), cart.business.tax_type !== 1 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.tax) || 0))), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.delivery_price))), (cart === null || cart === void 0 ? void 0 : cart.driver_tip) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ' ', (cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate) > 0 && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))), (cart === null || cart === void 0 ? void 0 : cart.service_fee) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service Fee'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.service_fee))))), isCouponEnabled && !isCartPending && (isCheckout || isCartPopover) && !(isCheckout && isCartPopover) && /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    businessId: cart.business_id,
    price: cart.total
  })), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, (cart === null || cart === void 0 ? void 0 : cart.total) >= 1 && parsePrice(cart === null || cart === void 0 ? void 0 : cart.total)))))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('PRODUCT', 'Product'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), (openUpselling || isUpselling) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UpsellingPageTitleWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_SOMETHING_ELSE', 'Do you want something else?')), /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    size: 26,
    onClick: function onClick() {
      return setIsUpselling(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    setIsUpselling: setIsUpselling,
    businessId: cart.business_id,
    isCustomMode: isCustomMode,
    cartProducts: cart.products,
    business: cart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  })), (onClickCheckout || isForceOpenCart) && !isCheckout && (cart === null || cart === void 0 ? void 0 : cart.valid_products) && /*#__PURE__*/_react.default.createElement(_styles.CheckoutAction, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address) ? 'secundary' : 'primary',
    onClick: checkOutBtnClick,
    disabled: openUpselling && !canOpenUpselling || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address)
  }, !(cart !== null && cart !== void 0 && cart.valid_address) ? t('OUT_OF_COVERAGE', 'Out of Coverage') : !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : !openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "60%",
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    hideCloseDefault: true,
    padding: "20px 0 0 0",
    customModal: true,
    isProductForm: true
  }, /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    isCartProduct: true,
    productCart: curProduct,
    businessSlug: cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.slug,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id,
    onSave: handlerProductAction,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    productName: curProduct.name
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('PRODUCT', 'Product'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var Cart = function Cart(props) {
  var cartProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CartUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Cart, cartProps);
};

exports.Cart = Cart;