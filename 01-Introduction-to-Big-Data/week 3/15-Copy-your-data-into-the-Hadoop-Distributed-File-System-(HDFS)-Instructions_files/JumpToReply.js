define("bundles/discussions/components/repliesList/JumpToReply",["require","exports","module","react","react-router","bundles/discussions/utils/discussionsUrl","bundles/discussions/lib/propTypes","i18n!nls/discussions"],function(require,exports,module){"use strict";function _defaults(e,s){for(var o=Object.getOwnPropertyNames(s),t=0;t<o.length;t++){var r=o[t],n=Object.getOwnPropertyDescriptor(s,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,r,e=require("react"),s=require("react-router"),o=s.Link,i=require("bundles/discussions/utils/discussionsUrl"),u=i.buildUrl,p=require("bundles/discussions/lib/propTypes"),c=p.replyPropType,n=require("i18n!nls/discussions"),l=(r=t=function(t){function JumpToReply(){return _classCallCheck(this,JumpToReply),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(JumpToReply,t),JumpToReply.prototype.render=function render(){var r=this.props,t=r.reply,s=r.forumLink,i=u(s,t.questionId,t.topLevelForumAnswerId,t.forumCommentId);return e.createElement("div",{className:"rc-JumpToReply align-self-end"},e.createElement(o,{to:i,title:n("Jump to post")},n("Jump to post")))},JumpToReply}(e.Component),t.propTypes={reply:c.isRequired,forumLink:e.PropTypes.string.isRequired},r);module.exports=l});