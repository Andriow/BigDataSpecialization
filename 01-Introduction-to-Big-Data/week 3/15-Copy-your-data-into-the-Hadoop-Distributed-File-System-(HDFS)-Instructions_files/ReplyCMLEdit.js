define("bundles/discussions/components/repliesList/ReplyCMLEdit",["require","exports","module","i18n!nls/discussions","react","react-dom","bundles/cml/components/CMLOrFallbackEditor","bundles/cml/utils/CMLUtils","bundles/discussions/constants","bundles/discussions/utils/DiscussionsCMLUtils","bundles/cml/constants/CMLEditorPlugins","bundles/discussions/actions/DropdownActions","vendor/cnpm/fluxible.v0-4/addons/connectToStores","css!bundles/discussions/components/__styles__/NewThreadFormComponents"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var s=i[t],n=Object.getOwnPropertyDescriptor(o,s);n&&n.configurable&&void 0===e[s]&&Object.defineProperty(e,s,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n,o,i,t=require("i18n!nls/discussions"),e=require("react"),r=require("react-dom"),l=require("bundles/cml/components/CMLOrFallbackEditor"),u=require("bundles/cml/utils/CMLUtils"),c=require("bundles/discussions/constants"),s=require("bundles/discussions/utils/DiscussionsCMLUtils"),d=require("bundles/cml/constants/CMLEditorPlugins"),a=require("bundles/discussions/actions/DropdownActions"),p=a.hideReplyEditor,m=a.editReply,b=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores");require("css!bundles/discussions/components/__styles__/NewThreadFormComponents");var f=(o=n=function(n){function ReplyCMLEdit(r,a){_classCallCheck(this,ReplyCMLEdit);var o=_possibleConstructorReturn(this,n.call(this,r,a));i.call(o);var e=r.reply.content,t=e;if(!e||!e.typeName){var l="<co-content><text>"+(e||"")+"</text></co-content>";t=u.create(l,c.DTD_NAME)}return t.definition.dtdId=c.DTD_NAME,o.state={blocks:s.getDefaultBlocks(),initialValue:t.definition.value,cml:t,hasErrors:!1,submitError:!1,lengthError:!1,submitEnabled:!1},o}return _inherits(ReplyCMLEdit,n),ReplyCMLEdit.prototype.componentDidMount=function componentDidMount(){r.findDOMNode(this.refs.content.refs.editorWrapper.refs.editor).focus&&r.findDOMNode(this.refs.content.refs.editorWrapper.refs.editor).focus()},ReplyCMLEdit.prototype.hideEdit=function hideEdit(){this.context.executeAction(p,{reply:this.props.reply})},ReplyCMLEdit.prototype.render=function render(){var n=s.generateContentLengthWarning(this.state.cml),o=e.createElement("div",{className:"c-error-text c-form-error-message"},t("Something went wrong. Please reload the page and try again.")),i=this.props.reply.questionId;return e.createElement("div",{className:"rc-ReplyCML","data-rc":"ReplyCML"},e.createElement("div",{className:"editor-container"},e.createElement(l,{ref:"content",placeholder:t("Reply"),onChange:this.handleInputChange,cml:this.state.cml,changeDelay:100,blocks:this.state.blocks,imageUploadOptions:s.getImageUploadOptions(this.props.courseId,i),disabledPlugins:[d.ToolbarVisibility],title:t("Edit Reply")})),e.createElement("div",{className:"horizontal-box align-items-right"},e.createElement("div",{className:"flex-2"},n,this.state.submitError&&o),e.createElement("button",{className:"passive cancel",onClick:this.handleCancel},t("Cancel")),e.createElement("button",{ref:"submit",className:"secondary",onClick:this.handleSubmit,disabled:!this.state.submitEnabled||this.state.hasErrors},t("Save"))))},ReplyCMLEdit}(e.Component),n.propTypes={reply:e.PropTypes.object.isRequired,courseId:e.PropTypes.string},n.contextTypes={executeAction:e.PropTypes.func.isRequired},i=function _initialiseProps(){var e=this;this.handleSubmit=function(){if(e.state.hasErrors)return void e.refs.content.refs.editorWrapper.refs.editor.focus();e.setState({submitEnabled:!1}),e.context.executeAction(m,{reply:e.props.reply,content:e.state.cml,handleFailure:e.onSubmitError,onSuccess:e.onSubmitSuccess})},this.handleCancel=function(){e.hideEdit()},this.handleInputChange=function(t){e.setState({cml:t,hasErrors:!s.validateLength(t),submitEnabled:t.definition.value!==e.state.initialValue})},this.onSubmitError=function(t){e.setState({submitError:!0,submitEnabled:!0})},this.onSubmitSuccess=function(){}},o);module.exports=b(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId()}})(f)});