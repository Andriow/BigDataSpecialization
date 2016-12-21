define("bundles/discussions/components/ModerationReasons",["require","exports","module","i18n!nls/discussions","react","css!bundles/discussions/components/__styles__/ModerationReasons.css"],function(require,exports,module){"use strict";function _defaults(e,r){for(var a=Object.getOwnPropertyNames(r),t=0;t<a.length;t++){var n=a[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n,o,t=require("i18n!nls/discussions"),e=require("react");require("css!bundles/discussions/components/__styles__/ModerationReasons.css");var r=(o=n=function(n){function ModerationReasons(){return _classCallCheck(this,ModerationReasons),_possibleConstructorReturn(this,n.apply(this,arguments))}return _inherits(ModerationReasons,n),ModerationReasons.prototype.render=function render(){return e.createElement("div",{className:"rc-ModerationReasons"},e.createElement("ul",{className:"c-radio-group"},e.createElement("li",null,e.createElement("input",{id:"honorCodeViolation",type:"radio",value:"honorCodeViolation",name:"reason",ref:"firstOption",onClick:this.props.handleSelect}),e.createElement("label",{htmlFor:"honorCodeViolation",className:"c-radio-label"},t("Removing an "),e.createElement("a",{target:"_blank",href:"https://learner.coursera.help/hc/articles/208280036"},t("Honor Code")),t(" violation (e.g., problem solutions)"))),e.createElement("li",null,e.createElement("input",{id:"inappropriate",type:"radio",value:"inappropriate",name:"reason",onClick:this.props.handleSelect}),e.createElement("label",{htmlFor:"inappropriate",className:"c-radio-label"},t("Removing "),e.createElement("a",{target:"_blank",href:"https://learner.coursera.help/hc/articles/209818863"},t("Inappropriate Content")),t(" violation (e.g., obscenities or mature content)"))),e.createElement("li",null,e.createElement("input",{id:"copyrightViolation",type:"radio",value:"copyrightViolation",name:"reason",onClick:this.props.handleSelect}),e.createElement("label",{htmlFor:"copyrightViolation",className:"c-radio-label"},t("Removing a copyright violation"))),e.createElement("li",null,e.createElement("input",{id:"spam",type:"radio",value:"spam",name:"reason",onClick:this.props.handleSelect}),e.createElement("label",{htmlFor:"spam",className:"c-radio-label"},t("Removing spam (e.g. unintelligible content or advertisements)"))),e.createElement("li",null,e.createElement("input",{id:"clarity",type:"radio",value:"clarity",name:"reason",onClick:this.props.handleSelect}),e.createElement("label",{htmlFor:"clarity",className:"c-radio-label"},t("Editing for clarity")))))},ModerationReasons}(e.Component),n.propTypes={handleSelect:e.PropTypes.func.isRequired},o);module.exports=r});