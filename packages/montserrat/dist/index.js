"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/Montserrat.tsx
var import_react = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["Montserrat"];
var drawPath = {
  Montserrat: "M555.74,1341.31L645.41,1323.12L717.29,1281.43L768.48,1221.55L799.7,1144.61L793.89,1094.58L769.57,1028.25L736.9,963.81L708.22,922.12L699.5,883.45L735.81,766.7L738.71,699.22L658.84,549.84L536.5,394.39L453.73,231.33L495.12,57.65L421.42,61.44L363.33,45.51L251.16,0L100.86,400.83L0.3,854.64L100.86,1217L555.74,1341.31z"
};

// src/Montserrat.tsx
var Montserrat = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect
}) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR;
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      version: "1.1",
      id: "svg2",
      x: "0px",
      y: "0px",
      viewBox: "-50 -20 2500 1400"
    },
    stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        key: index,
        onClick: () => onSelect(stateCode2),
        onMouseEnter: () => handleMouseEnter(stateCode2),
        onMouseLeave: () => handleMouseLeave(stateCode2),
        id: stateCode2,
        d: drawPath[stateCode2]
      }
    ))
  )));
};
var Montserrat_default = Montserrat;

// src/index.ts
var src_default = Montserrat_default;
