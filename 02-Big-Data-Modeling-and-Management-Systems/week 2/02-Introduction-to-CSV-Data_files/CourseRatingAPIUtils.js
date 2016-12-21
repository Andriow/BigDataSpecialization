define("bundles/content-feedback/utils/CourseRatingAPIUtils",["require","exports","module","q","underscore","bundles/content-feedback/api/myFeedbackAPI","bundles/content-feedback/api/feedbackAPI","bundles/content-feedback/api/courseFeedbackCountsAPI","bundles/content-feedback/api/courseFeedbackCommentCountsAPI","bundles/content-feedback/api/feedbackAdminAPI","bundles/content-feedback/constants/FeedbackTypes","bundles/content-feedback/constants/LearnerAudiences","jsuri"],function(require,exports,module){"use strict";var e=require("q"),_=require("underscore"),n=require("bundles/content-feedback/api/myFeedbackAPI"),d=require("bundles/content-feedback/api/feedbackAPI"),u=require("bundles/content-feedback/api/courseFeedbackCountsAPI"),c=require("bundles/content-feedback/api/courseFeedbackCommentCountsAPI"),o=require("bundles/content-feedback/api/feedbackAdminAPI"),t=require("bundles/content-feedback/constants/FeedbackTypes"),r=require("bundles/content-feedback/constants/LearnerAudiences"),a=require("jsuri"),s={getRatingStats:function getRatingStats(d){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.AllLearners,n=(new a).addQueryParam("q","course").addQueryParam("courseId",d).addQueryParam("feedbackSystem",t.Rating).addQueryParam("ratingValues","1,2,3,4,5").addQueryParam("countBy","ratingValue");return c.id===r.Completers.id&&n.addQueryParam("courseCompleted",!0),e(u.get(n.toString())).then(function(e){return e.elements[0].counts})},getReviewStats:function getReviewStats(n){var r=(new a).addQueryParam("q","course").addQueryParam("courseId",n).addQueryParam("feedbackSystem",t.Rating).addQueryParam("ratingValues","1,2,3,4,5").addQueryParam("categories","generic").addQueryParam("countBy","category");return e(c.get(r.toString())).then(function(e){return e.elements[0].counts})},getReviews:function getReviews(o,s,i,n){var u=10,c=(new a).addQueryParam("q","course").addQueryParam("courseId",o).addQueryParam("feedbackSystem",t.Rating).addQueryParam("ratingValues",-1===n?"1,2,3,4,5":n).addQueryParam("categories","generic").addQueryParam("start",i*u).addQueryParam("limit",u);return s.id===r.Completers.id&&c.addQueryParam("courseCompleted",!0),e(d.get(c.toString())).then(function(e){var a=e.elements,t=e.paging,n=t.total;return{feedbacks:a,totalCount:n}})},getFeedback:function getFeedback(t){var r=(new a).addQueryParam("q","course").addQueryParam("courseId",t);return e(n.get(r.toString())).then(function(e){return e.elements[0]})},multiGetStarFeedback:function multiGetStarFeedback(t){var r=20,d=_(t).chain().groupBy(function(a,e){return Math.floor(e/r)}).toArray().value(),u=_(d).map(function(t){var r=(new a).addQueryParam("q","byCourseAndFeedback").addQueryParam("courseIds",t.join(",")).addQueryParam("feedbackSystem","STAR");return e(n.get(r.toString())).then(function(e){return e.elements})});return e.all(u).then(function(e){return _(e).flatten()})},postFeedback:function postFeedback(r,d){var u=(new a).addQueryParam("action","submit").addQueryParam("courseId",r).addQueryParam("feedbackSystem",t.Rating);return e(n.post(u.toString(),{data:d.toObject()}))},deleteFeedback:function deleteFeedback(t){var n=(new a).addQueryParam("action","hide").addQueryParam("feedbackId",t);return e(o.post(n.toString()))}};module.exports=s});