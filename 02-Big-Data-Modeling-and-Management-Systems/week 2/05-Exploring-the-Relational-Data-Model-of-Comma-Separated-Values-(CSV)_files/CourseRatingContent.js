define("bundles/content-feedback/components/rating/CourseRatingContent",["require","exports","module","react","react-addons-css-transition-group","./CourseRatingIcons","./CourseRatingModal","bundles/content-feedback/components/FeedbackComplete","bundles/content-feedback/actions/CourseRatingActions","bundles/cml/utils/CMLUtils","js/lib/coursera.react-intl","vendor/cnpm/fluxible.v0-4/addons/connectToStores","react-bootstrap","bundles/content-feedback/models/RatingFeedback","i18n!nls/content-feedback"],function(require,exports,module){"use strict";function _defaults(e,r){for(var a=Object.getOwnPropertyNames(r),t=0;t<a.length;t++){var n=a[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var p=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},t,r,e=require("react"),g=require("react-addons-css-transition-group"),k=require("./CourseRatingIcons"),u=require("./CourseRatingModal"),l=require("bundles/content-feedback/components/FeedbackComplete"),v=require("bundles/content-feedback/actions/CourseRatingActions"),a=v.postMyCourseRating,s=require("bundles/cml/utils/CMLUtils"),d=require("js/lib/coursera.react-intl"),c=d.FormattedHTMLMessage,m=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),i=require("react-bootstrap"),b=i.Tooltip,f=i.OverlayTrigger,h=require("bundles/content-feedback/models/RatingFeedback"),n=require("i18n!nls/content-feedback"),o=(r=t=function(t){function CourseRatingContent(){var i,o,u;_classCallCheck(this,CourseRatingContent);for(var l=arguments.length,d=Array(l),r=0;l>r;r++)d[r]=arguments[r];return i=o=_possibleConstructorReturn(this,t.call.apply(t,[this].concat(d))),o.state={showModal:!1,showMessage:!1,message:""},o.handleClick=function(e){e.preventDefault(),o.context.track("click.rating"),o.setState({showModal:!0})},o.handleClose=function(){o.context.track("click.cancel"),o.setState({showModal:!1})},o.handleSubmit=function(t,r){var u=o.props.course,i=o.getCourseNameAndId(u),l=i.courseId,d=i.courseName;o.setState({showModal:!1,showMessage:!0,message:e.createElement(c,{message:n("Your review of <strong>{courseName}</strong> has been submitted."),courseName:d})}),o.context.executeAction(a,{courseId:l,value:t,active:!0,comment:r}),o.context.track("click.submit",{feedback_length:s.getLength(r),feedback_value:t})},o.handleClear=function(){var r=o.props.course,t=o.getCourseNameAndId(r),i=t.courseId,u=t.courseName;o.setState({showModal:!1,showMessage:!0,message:e.createElement(c,{message:n("Your review of <strong>{courseName}</strong> has been removed."),courseName:u})}),o.context.executeAction(a,{courseId:i,value:0,active:!1,comment:s.create("")}),o.context.track("click.clear")},o.handleMessageTimeout=function(){o.setState({showMessage:!1})},u=i,_possibleConstructorReturn(o,u)}return _inherits(CourseRatingContent,t),CourseRatingContent.prototype.getCourseNameAndId=function getCourseNameAndId(e){var t=!!e.get;return{courseId:t?e.get("id"):e.id,courseName:t?e.get("name"):e.name}},CourseRatingContent.prototype.render=function render(){var t=n("Rate this course"),o=e.createElement(b,null,t);if(!this.props.ratingFeedback)return e.createElement("div",null);return e.createElement("div",{className:"rc-CourseRatingContent"},e.createElement(f,{placement:"top",overlay:o},e.createElement("button",{ref:"icons",className:"c-course-rating-icons-container nostyle button-link",onClick:this.handleClick},e.createElement(k,{value:this.props.ratingFeedback.value}))),this.state.showModal&&e.createElement(u,p({},this.props,{onSubmit:this.handleSubmit,onClear:this.handleClear,onClose:this.handleClose})),e.createElement(g,{transitionName:"fade",transitionEnterTimeout:500,transitionLeaveTimeout:500},this.state.showMessage&&e.createElement(l,{key:"feedback-complete",onTimeout:this.handleMessageTimeout},this.state.message)))},CourseRatingContent}(e.Component),t.propTypes={course:e.PropTypes.object.isRequired,ratingFeedback:e.PropTypes.instanceOf(h)},t.contextTypes={executeAction:e.PropTypes.func.isRequired,track:e.PropTypes.func.isRequired},r);module.exports=m(o,["CourseRatingStore"],function(e,n){var t=e.CourseRatingStore;return{ratingFeedback:t.getMyRatingFeedback()}}),module.exports.BaseComp=o});