"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesFaild = exports.addCategories = exports.fetchCategories = exports.coctailLoading = exports.addCoctail = exports.coctailFaild = exports.fetchCoctailById = exports.coctailsLoading = exports.addCoctails = exports.coctailsFaild = exports.fetchCoctailsByCategory = exports.fetchCoctailsByName = void 0;

var ActionTypes = _interopRequireWildcard(require("./ActionTypes"));

var _baseUrl = require("../shared/baseUrl");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fetchCoctailsByName = function fetchCoctailsByName(name) {
  return function (dispatch) {
    dispatch(coctailsLoading());
    return fetch(_baseUrl.baseUrl + "api/json/v1/1/search.php?s=" + name).then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (coctails) {
      return dispatch(addCoctails(coctails));
    })["catch"](function (error) {
      return dispatch(coctailsFaild(error.message));
    });
  };
};

exports.fetchCoctailsByName = fetchCoctailsByName;

var fetchCoctailsByCategory = function fetchCoctailsByCategory(category) {
  return function (dispatch) {
    dispatch(coctailsLoading());
    return fetch(_baseUrl.baseUrl + "api/json/v1/1/filter.php?c=" + category).then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (drinks) {
      return dispatch(addCoctails(drinks));
    })["catch"](function (error) {
      return dispatch(coctailsFaild(error.message));
    });
  };
};

exports.fetchCoctailsByCategory = fetchCoctailsByCategory;

var coctailsFaild = function coctailsFaild(errmess) {
  return {
    type: ActionTypes.COCTAILS_ERROR,
    payload: errmess
  };
};

exports.coctailsFaild = coctailsFaild;

var addCoctails = function addCoctails(coctails) {
  return {
    type: ActionTypes.ADD_COCTAILS,
    payload: coctails
  };
};

exports.addCoctails = addCoctails;

var coctailsLoading = function coctailsLoading() {
  return {
    type: ActionTypes.COCTAILS_LOADING
  };
};

exports.coctailsLoading = coctailsLoading;

var fetchCoctailById = function fetchCoctailById(Id) {
  return function (dispatch) {
    dispatch(coctailLoading());
    return fetch(_baseUrl.baseUrl + "api/json/v1/1/lookup.php?i=" + Id).then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (coctail) {
      return dispatch(addCoctail(coctail));
    })["catch"](function (error) {
      return dispatch(coctailFaild(error.message));
    });
  };
};

exports.fetchCoctailById = fetchCoctailById;

var coctailFaild = function coctailFaild(errmess) {
  return {};
};

exports.coctailFaild = coctailFaild;

var addCoctail = function addCoctail(coctail) {
  return {
    type: ActionTypes.ADD_COCTAIL,
    payload: coctail
  };
};

exports.addCoctail = addCoctail;

var coctailLoading = function coctailLoading() {
  return {
    type: ActionTypes.COCTAIL_LOADING
  };
};

exports.coctailLoading = coctailLoading;

var fetchCategories = function fetchCategories() {
  return function (dispatch) {
    return fetch(_baseUrl.baseUrl + "api/json/v1/1/list.php?c=list").then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (categories) {
      return dispatch(addCategories(categories));
    })["catch"](function (error) {
      return dispatch(coctailsFaild(error.message));
    });
  };
};

exports.fetchCategories = fetchCategories;

var addCategories = function addCategories(categories) {
  return {
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories
  };
};

exports.addCategories = addCategories;

var categoriesFaild = function categoriesFaild(errmess) {
  return {};
};

exports.categoriesFaild = categoriesFaild;