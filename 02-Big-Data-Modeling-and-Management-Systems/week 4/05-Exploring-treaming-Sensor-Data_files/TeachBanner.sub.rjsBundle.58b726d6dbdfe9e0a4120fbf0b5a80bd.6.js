define("nls/page",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/teach-course/lib/CourseUtils",["require","exports","module"],function(require,exports,module){var n={isLaunched:function isLaunched(n){return!!n.launchedAt&&n.launchedAt<=Date.now()},isPreEnrollmentEnabled:function isPreEnrollmentEnabled(n){return!this.isLaunched(n)&&"preEnrollmentEnabledAt"in n},isSessionsModeEnabled:function isSessionsModeEnabled(n){return"sessionsEnabledAt"in n&&n.sessionsEnabledAt<=Date.now()},isVerificationEnabled:function isVerificationEnabled(n){return n.verificationEnabledAt<=Date.now()}};module.exports=n});
define("pages/open-course/common/coursesApi",["require","exports","module","bundles/phoenix/lib/apiWrapper","pages/open-course/common/constants"],function(require,exports,module){var e=require("bundles/phoenix/lib/apiWrapper"),o=require("pages/open-course/common/constants"),s=e(o.coursesApi,{type:"rest"});module.exports=s});
define("pages/open-course/common/data/courseData",["require","exports","module","q","underscore","bundles/naptime/handleResponse","js/lib/memoize","pages/open-course/common/coursesApi"],function(require,exports,module){var e=require("q"),_=require("underscore"),r=require("bundles/naptime/handleResponse"),n=require("js/lib/memoize"),s=require("pages/open-course/common/coursesApi"),t=["instructorIds","partnerIds","_links"].join(","),o=["certificatePurchaseEnabledAt","partners.v1(squareLogo,rectangularLogo)","instructors.v1(fullName)","overridePartnerLogos","sessionsEnabledAt","domainTypes","premiumExperienceVariant","isRestrictedMembership"].join(","),i=function getCourse(r){if(!r.elements)throw new Error("Course data missing from response");var e=r.elements[0];return e.instructors=_(e.instructorIds).map(function(e){return r.getLinkedObject("instructors.v1",e)}),e.universities=_(e.partnerIds).map(function(e){return r.getLinkedObject("partners.v1",e)}),e};exports.fromSlug=n(function(n){if(!n)return e.reject("Missing courseSlug argument");return e(s.get("",{data:{q:"slug",slug:n&&n.toLowerCase(),includes:t,fields:o}})).then(r).then(i)}),exports.fromId=n(function(n){if(!n)return e.reject("Missing courseId argument");return e(s.get(n,{data:{includes:t,fields:o}})).then(r).then(i)})});
define("pages/open-course/common/membershipApi",["require","exports","module","bundles/phoenix/lib/apiWrapper","pages/open-course/common/constants"],function(require,exports,module){var e=require("bundles/phoenix/lib/apiWrapper"),o=require("pages/open-course/common/constants");module.exports=e(o.openCourseMembershipApi,{type:"rest"})});
define("pages/open-course/common/models/membership",["require","exports","module","backbone-associations","q","underscore","bundles/common/constants/CourseRoles","js/lib/user","pages/open-course/common/constants","pages/open-course/common/membershipApi"],function(require,exports,module){var Backbone=require("backbone-associations"),s=require("q"),_=require("underscore"),e=require("bundles/common/constants/CourseRoles"),t=require("js/lib/user"),o=require("pages/open-course/common/constants"),n=require("pages/open-course/common/membershipApi"),r=Backbone.AssociatedModel.extend({api:n,defaults:function defaults(){return{timestamp:Date.now()}},initialize:function initialize(e){if(!_(e).has("courseId"))throw new Error("You must instantiate a Membership with a courseId");this.get("userId")||this.set("userId",e.userId||t.get().id),_(e).has("id")||this.set("id",this.get("userId")+"~"+this.get("courseId"),{silent:!0})},hasTeachingRole:function hasTeachingRole(){return _(o.courseRolesWithTeachAccess).contains(this.get("courseRole").toUpperCase())},hasModerationRole:function hasModerationRole(){return _(o.courseRolesWithModeratorAccess).contains(this.get("courseRole").toUpperCase())},hasEnrolledRole:function hasEnrolledRole(){return!_([e.BROWSER,e.NOT_ENROLLED,e.PRE_ENROLLED_LEARNER]).contains(this.get("courseRole"))},hasPreEnrolled:function hasPreEnrolled(){return this.get("courseRole")===e.PRE_ENROLLED_LEARNER},enroll:function enroll(o){this.set("courseRole",o||e.LEARNER);var t={data:this.toJSON()};return s(this.api.post("",t))},unenroll:function unenroll(){return this.set("courseRole",e.NOT_ENROLLED),s(this.api["delete"](this.get("id")))}},e);module.exports=r});
define("pages/open-course/common/models/memberships",["require","exports","module","backbone","pages/open-course/common/models/membership"],function(require,exports,module){var Backbone=require("backbone"),e=require("pages/open-course/common/models/membership"),o=Backbone.Collection.extend({model:e,getEnrolled:function getEnrolled(){return this.filter(function(o){return o.get("courseRole")!==e.NOT_ENROLLED})}});module.exports=o});
define("pages/open-course/common/data/membershipsData",["require","exports","module","q","jsuri","pages/open-course/common/membershipApi"],function(require,exports,module){var e=require("q"),r=require("jsuri"),o=require("pages/open-course/common/membershipApi");module.exports=function(s){var a=(new r).addQueryParam("q","findByUser").addQueryParam("userId",s);return e(o.get(a.toString()))}});
define("pages/open-course/common/promises/memberships",["require","exports","module","pages/open-course/common/models/memberships","pages/open-course/common/data/membershipsData"],function(require,exports,module){var e=require("pages/open-course/common/models/memberships"),o=require("pages/open-course/common/data/membershipsData");module.exports=function(m,n){var s=o(m).then(function(o){return new e(o.elements)});return s.done(),s}});
define("bundles/teach-course/lib/TeachBannerUtils",["require","exports","module","q","js/lib/api","bundles/phoenix/template/models/userIdentity","bundles/teach-course/lib/CourseUtils","pages/open-course/common/data/courseData","pages/open-course/common/promises/memberships"],function(require,exports,module){var e=require("q"),r=require("js/lib/api"),n=r("/api/reports.v1",{type:"rest"}),s=require("bundles/phoenix/template/models/userIdentity"),o=require("bundles/teach-course/lib/CourseUtils"),a=require("pages/open-course/common/data/courseData"),u=require("pages/open-course/common/promises/memberships"),t="teachVisitedAt",i=10080,c={getBannerData:function getBannerData(){var e=this;return this.getTeachingCourse().spread(function(t,r){return[t,r,e.getLearnerCounts(t,r)]})},getVisitedTimestamp:function getVisitedTimestamp(){return localStorage[t]},setVisitedTimestamp:function setVisitedTimestamp(){localStorage[t]=Date.now()},shouldShow:function shouldShow(){var e=this.getVisitedTimestamp();if(e){var t=new Date(parseInt(e)),r=new Date(Date.now()),n=60*r.getHours()+r.getMinutes(),s=60*t.getHours()+t.getMinutes(),o=n-s;return o>i}return!0},getTeachingCourse:function getTeachingCourse(){var t=s.get("id");if(!t)return e.reject();return u(t).then(function(r){var t=r.find(function(e){return e.hasTeachingRole()});if(t&&"UNIVERSITY_ADMIN"!==t.get("courseRole")){var n=t.get("courseId");return[t,a.fromId(n)]}return e.reject()}).spread(function(r,t){return o.isLaunched(t)?[r,t]:e.reject()})},getLearnerCounts:function getLearnerCounts(r,t){var s=this;return e(n.get("Course~"+t.id+"~activity_learner_counts")).then(function(n){return s.validateLearnerCountsResponse(n)?n.elements[0].body:e.reject({membership:r,course:t})})},validateLearnerCountsResponse:function validateLearnerCountsResponse(e){return e.elements&&e.elements[0]&&e.elements[0].body&&e.elements[0].body.latest&&e.elements[0].body.latest.starter_ever_count&&e.elements[0].body.latest.active_learner_past_1w_count&&e.elements[0].body.latest.visitor_ever_count&&e.elements[0].body["1w_ago"]&&e.elements[0].body["1w_ago"].starter_ever_count},getWeeklyNewLearnerCount:function getWeeklyNewLearnerCount(e){return e.latest.starter_ever_count-e["1w_ago"].starter_ever_count},getWeeklyActiveLearnerCount:function getWeeklyActiveLearnerCount(e){return e.latest.active_learner_past_1w_count},getTotalLearnerCount:function getTotalLearnerCount(e){return e.latest.visitor_ever_count}};module.exports=c});
define("bundles/teach-course/components/TotalLearnerBanner",["require","exports","module","react","bundles/teach-course/lib/TeachBannerUtils","js/lib/coursera.react-intl"],function(require,exports,module){function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),r=0;r<a.length;r++){var t=a[r],n=Object.getOwnPropertyDescriptor(o,t);n&&n.configurable&&void 0===e[t]&&Object.defineProperty(e,t,n)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var t,r,e=require("react"),n=require("bundles/teach-course/lib/TeachBannerUtils"),o=require("js/lib/coursera.react-intl"),a=o.FormattedNumber,c=(r=t=function(r){function TotalLearnerBanner(){return _classCallCheck(this,TotalLearnerBanner),_possibleConstructorReturn(this,r.apply(this,arguments))}return _inherits(TotalLearnerBanner,r),TotalLearnerBanner.prototype.render=function render(){var r=this.props.course,o=r.name,t="/teach/"+r.slug,c=n.getTotalLearnerCount(this.props.learnerCounts);return e.createElement("div",{className:"rc-TotalLearnerBanner"},"A total of ",e.createElement("a",{href:t},e.createElement("strong",{className:"c-teach-banner-learner-count"},e.createElement(a,{value:c})," learners"))," are enrolled in ",e.createElement("span",{className:"c-teach-banner-course-name"},o),". View more on the ",e.createElement("a",{href:t},e.createElement("strong",null,"Course Dashboard.")))},TotalLearnerBanner}(e.Component),t.propTypes={course:e.PropTypes.object.isRequired,learnerCounts:e.PropTypes.object.isRequired},r);module.exports=c});
define("bundles/teach-course/components/WeeklyActiveLearnerBanner",["require","exports","module","react","bundles/teach-course/lib/TeachBannerUtils","js/lib/coursera.react-intl"],function(require,exports,module){function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),t=0;t<a.length;t++){var r=a[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var r,t,e=require("react"),n=require("bundles/teach-course/lib/TeachBannerUtils"),o=require("js/lib/coursera.react-intl"),a=o.FormattedNumber,c=(t=r=function(t){function WeeklyActiveLearnerBanner(){return _classCallCheck(this,WeeklyActiveLearnerBanner),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(WeeklyActiveLearnerBanner,t),WeeklyActiveLearnerBanner.prototype.render=function render(){var t=this.props.course,o=t.name,r="/teach/"+t.slug,c=n.getWeeklyActiveLearnerCount(this.props.learnerCounts);return e.createElement("div",{className:"rc-WeeklyActiveLearnerBanner"},e.createElement("a",{href:r},e.createElement("strong",{className:"c-teach-banner-learner-count"},e.createElement(a,{value:c})," learners"))," were active in ",e.createElement("span",{className:"c-teach-banner-course-name"},o)," in the past week. View more on the ",e.createElement("a",{href:r},e.createElement("strong",null,"Course Dashboard.")))},WeeklyActiveLearnerBanner}(e.Component),r.propTypes={course:e.PropTypes.object.isRequired,learnerCounts:e.PropTypes.object.isRequired},t);module.exports=c});
define("bundles/teach-course/components/WeeklyNewLearnerBanner",["require","exports","module","react","bundles/teach-course/lib/TeachBannerUtils","js/lib/coursera.react-intl"],function(require,exports,module){function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),r=0;r<a.length;r++){var t=a[r],n=Object.getOwnPropertyDescriptor(o,t);n&&n.configurable&&void 0===e[t]&&Object.defineProperty(e,t,n)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var t,r,e=require("react"),n=require("bundles/teach-course/lib/TeachBannerUtils"),o=require("js/lib/coursera.react-intl"),a=o.FormattedNumber,c=(r=t=function(r){function WeeklyNewLearnerBanner(){return _classCallCheck(this,WeeklyNewLearnerBanner),_possibleConstructorReturn(this,r.apply(this,arguments))}return _inherits(WeeklyNewLearnerBanner,r),WeeklyNewLearnerBanner.prototype.render=function render(){var r=this.props.course,o=r.name,t="/teach/"+r.slug,c=n.getWeeklyNewLearnerCount(this.props.learnerCounts);return e.createElement("div",{className:"rc-WeeklyNewLearnerBanner"},e.createElement("a",{href:t},e.createElement("strong",{className:"c-teach-banner-learner-count"},e.createElement(a,{value:c})," learners"))," enrolled in ",e.createElement("span",{className:"c-teach-banner-course-name"},o)," in the past week. View more on the ",e.createElement("a",{href:t},e.createElement("strong",null,"Course Dashboard.")))},WeeklyNewLearnerBanner}(e.Component),t.propTypes={course:e.PropTypes.object.isRequired,learnerCounts:e.PropTypes.object.isRequired},r);module.exports=c});

define('css!bundles/teach-course/components/__styles__/TeachBanner',[],function(){})
define("bundles/teach-course/components/TeachBanner",["require","exports","module","jquery","react","./TotalLearnerBanner","./WeeklyActiveLearnerBanner","./WeeklyNewLearnerBanner","bundles/phoenix/template/models/userIdentity","bundles/teach-course/lib/TeachBannerUtils","css!./__styles__/TeachBanner"],function(require,exports,module){function _defaults(e,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var n=s[t],r=Object.getOwnPropertyDescriptor(a,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var $=require("jquery"),e=require("react"),a=require("./TotalLearnerBanner"),r=require("./WeeklyActiveLearnerBanner"),s=require("./WeeklyNewLearnerBanner"),i=require("bundles/phoenix/template/models/userIdentity"),t=require("bundles/teach-course/lib/TeachBannerUtils");require("css!./__styles__/TeachBanner");var n=[{key:"weeklyActiveLearner",component:r},{key:"weeklyNewLearner",component:s},{key:"totalLearner",component:a}],o=function(r){function TeachBanner(){var a,e,s;_classCallCheck(this,TeachBanner);for(var o=arguments.length,i=Array(o),n=0;o>n;n++)i[n]=arguments[n];return a=e=_possibleConstructorReturn(this,r.call.apply(r,[this].concat(i))),e.state={course:null,membership:null,learnerCounts:{},bannerIndex:-1,dismissed:!1},e.handleDismiss=function(){t.setVisitedTimestamp(),e.setState({dismissed:!0})},s=a,_possibleConstructorReturn(e,s)}return _inherits(TeachBanner,r),TeachBanner.prototype.componentDidMount=function componentDidMount(){var e=this;t.getBannerData().spread(function(t,r,a){var s=Math.round(Math.random()*(n.length-1));e.setState({course:r,membership:t,learnerCounts:a,bannerIndex:s})})["catch"](function(){}).done()},TeachBanner.prototype.renderBanner=function renderBanner(){var t=n[this.state.bannerIndex].component;return e.createElement(t,{course:this.state.course,learnerCounts:this.state.learnerCounts})},TeachBanner.prototype.render=function render(){if(!this.state.course||this.state.dismissed||!t.shouldShow())return e.createElement("div",null);return e.createElement("div",{className:"rc-TeachBanner bt3-alert bt3-alert-info bt3-alert-dismissable"},e.createElement("div",{className:"c-teach-banner-content"},e.createElement("button",{onClick:this.handleDismiss,className:"bt3-close","data-dismiss":"alert","aria-label":"Close"},e.createElement("span",{"aria-hidden":"true"},"×")),this.renderBanner()))},TeachBanner}(e.Component);module.exports=o});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-TeachBanner{position:absolute;z-index:10000;width:100%;}.rc-TeachBanner.bt3-alert-info{background-color:rgba(66,66,66,0.9);border-color:#424242;color:#fff;font-size:15px;text-align:center;margin-bottom:0;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,0.12),0 0 1px 0 rgba(0,0,0,0.24);box-shadow:0 1px 1px 0 rgba(0,0,0,0.12),0 0 1px 0 rgba(0,0,0,0.24);-webkit-border-radius:0;border-radius:0;}.rc-TeachBanner.bt3-alert-info a{color:#00dfe3;text-decoration:underline}.rc-TeachBanner.bt3-alert-info .bt3-close{opacity:1;-ms-filter:none;filter:none;color:#fff;font-weight:100;font-size:24px;top:-5px}.rc-TeachBanner .c-teach-banner-learner-count{font-size:16px}.rc-TeachBanner .c-teach-banner-course-name{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;max-width:300px;display:inline-block;margin-bottom:-5px}.rc-TeachBanner .c-teach-banner-content{width:1000px;margin:0 auto}');
