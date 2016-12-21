define("bundles/quiz-common/components/QuestionCountLabel",["require","exports","module","react","bundles/quiz-question-types/models/AbstractQuestion","js/lib/coursera.react-intl","i18n!nls/quiz-common"],function(require,exports,module){"use strict";function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var n=s[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,e=require("react"),o=require("bundles/quiz-question-types/models/AbstractQuestion"),r=require("js/lib/coursera.react-intl"),s=r.FormattedMessage,i=require("i18n!nls/quiz-common"),u=(n=t=function(t){function QuestionCountLabel(){return _classCallCheck(this,QuestionCountLabel),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(QuestionCountLabel,t),QuestionCountLabel.prototype.render=function render(){var t=this.props.questions;return e.createElement(s,{message:i("{questionCount} {questionCount, plural, =1 {question} other {questions}}"),questionCount:t.length.toString()})},QuestionCountLabel}(e.Component),t.propTypes={questions:e.PropTypes.arrayOf(e.PropTypes.instanceOf(o)).isRequired},n);module.exports=u});