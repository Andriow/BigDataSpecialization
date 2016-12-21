define("bundles/discussions/components/ListBody",["require","exports","module","react","i18n!nls/discussions","classnames","bundles/discussions/constants","css!./__styles__/ListBody"],function(require,exports,module){"use strict";function _defaults(e,o){for(var r=Object.getOwnPropertyNames(o),t=0;t<r.length;t++){var s=r[t],n=Object.getOwnPropertyDescriptor(o,s);n&&n.configurable&&void 0===e[s]&&Object.defineProperty(e,s,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var s,n,e=require("react"),o=require("i18n!nls/discussions"),r=require("classnames"),i=require("bundles/discussions/constants"),t=i.loadingStates;require("css!./__styles__/ListBody");var a=(n=s=function(s){function ListBody(){var n,t,o;_classCallCheck(this,ListBody);for(var r=arguments.length,i=Array(r),e=0;r>e;e++)i[e]=arguments[e];return n=t=_possibleConstructorReturn(this,s.call.apply(s,[this].concat(i))),t.state={transitionEnded:!1},o=n,_possibleConstructorReturn(t,o)}return _inherits(ListBody,s),ListBody.prototype.componentDidMount=function componentDidMount(){this.refs.body.addEventListener("transitionend",function(e){this.setState({transitionEnded:!0})}.bind(this))},ListBody.prototype.componentWillReceiveProps=function componentWillReceiveProps(e){this.setState({transitionEnded:!1})},ListBody.prototype.render=function render(){var s=void 0;s=this.props.loadingState===t.DONE&&this.props.children.length>0?e.createElement("ol",{className:"nostyle"},this.props.children):this.props.loadingState===t.DONE&&0===this.props.children.length?e.createElement("div",{className:"message color-hint-text"},this.props.emptyStatePlaceholderText):this.props.loadingState===t.ERROR?e.createElement("div",{className:"message color-hint-text"},o("There was a problem, please reload the page and try again.")):this.props.loadingState===t.LOADING?e.createElement("div",{className:"message"},e.createElement("i",{className:"cif-spinner cif-spin cif-2x"})):e.createElement("div",null);var n=r("rc-ListBody",{"c-list-expanded":this.props.loadingState===t.DONE&&this.props.children.length>0,"c-post-transition":this.state.transitionEnded}),i=r("c-pre-fossil",{"c-fossilized":this.props.fossilized});return e.createElement("div",{className:n,ref:"body"},e.createElement("div",{className:i}),s)},ListBody}(e.Component),s.propTypes={loadingState:e.PropTypes.string.isRequired,children:e.PropTypes.array,fossilized:e.PropTypes.bool,emptyStatePlaceholderText:e.PropTypes.string},s.defaultProps={children:[],fossilized:!1,emptyStatePlaceholderText:o("No Results")},n);module.exports=a});