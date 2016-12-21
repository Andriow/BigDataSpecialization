define("bundles/discussions/actions/ThreadDetailsActions",["require","exports","module","bundles/discussions/actions/ThreadSettingsActions","bundles/discussions/api/upvoteApi","bundles/discussions/api/followApi","bundles/discussions/api/threadDetailApi","bundles/discussions/constants","bundles/discussions/utils/unreadTracker"],function(require,exports,module){"use strict";var f=require("bundles/discussions/actions/ThreadSettingsActions"),u=f.addThread,o=require("bundles/discussions/api/upvoteApi"),h=o.upvote,r=o.cancelUpvote,a=require("bundles/discussions/api/followApi"),T=a.follow,I=a.unfollow,t=require("bundles/discussions/api/threadDetailApi"),d=t.getQuestion,c=t.getAnswersWithComments,p=t.getComments,l=t.savePost,s=require("bundles/discussions/constants"),n=require("bundles/discussions/utils/unreadTracker"),i=s.savingStates,e=s.loadingStates,A=s.answers.limitPerPage;exports.fetchThread=function(s,i){var t=i.questionId,r=i.contextId,a=i.userId,o=i.forumType,c=i.sort,p=i.page,l=s.getStore("ThreadDetailsStore").getQuestion(t)&&s.getStore("ThreadDetailsStore").getQuestion(t),f=s.getStore("ThreadsStore").getThreadsPage(),T=f.find(function(e){return e.questionId===t});!l||n.hasUnread(T)?!function(){var i=function setLoadingState(e){s.dispatch("QUESTION_LOADING_STATE",{questionId:t,loadingState:e})};i(e.LOADING),d({questionId:t,userId:a,contextId:r,forumType:o,sort:c,page:p}).then(function(a){s.dispatch("LOAD_QUESTION",{response:a,questionId:t,forumType:o}),i(e.DONE),s.executeAction(u,Object.assign(a.elements[0],{forumType:o})),n.markRead(t)}).fail(function(t){return i(e.ERROR)}).done()}():(s.executeAction(u,s.getStore("ThreadDetailsStore").getQuestion(t)),n.markRead(t))};var O=function fetchCommentPagesHelper(n,t){var o=t.questionId,s=t.answerId,a=t.userForumAnswerId,u=t.forumType,d=t.includeDeleted,i=t.startPage,r=t.endPage;return p({userForumAnswerId:a,forumType:u,includeDeleted:d,startPage:i,endPage:r}).then(function(e){return n.dispatch("LOAD_COMMENT_PAGES",{response:e,answerId:s,startPage:i,questionId:o})}).fail(function(t){n.dispatch("COMMENT_LOADING_STATE",{answerId:s,loadingState:e.ERROR})})};exports.fetchMultipleCommentPages=function(n,t){var i=t.questionId,s=t.answerId,o=t.userForumAnswerId,a=t.forumType,u=t.includeDeleted,d=t.startPage,r=t.endPage;n.dispatch("COMMENT_LOADING_STATE",{answerId:s,loadingState:e.LOADING}),n.executeAction(O,{questionId:i,answerId:s,userForumAnswerId:o,forumType:a,includeDeleted:u,startPage:d,endPage:r})},exports.fetchAnswers=function(o,t){var n=t.questionId,d=t.userId,r=t.contextId,s=t.sort,i=t.page,a=t.forumType,p=t.includeDeleted;o.dispatch("ANSWER_LOADING_STATE",{questionId:n,sort:s,page:i,loadingState:e.LOADING});var u=function setLoadingState(e){o.dispatch("ANSWER_LOADING_STATE",{questionId:n,sort:s,page:i,loadingState:e})};c({questionId:n,userId:d,contextId:r,forumType:a,sort:s,page:i,limit:A,includeDeleted:p}).then(function(t){u(e.DONE),o.dispatch("LOAD_ANSWERS_WITH_COMMENTS",{response:t,questionId:n,page:i,sort:s,forumType:a})}).fail(function(t){return u(e.ERROR)}).done()},exports.savePost=function(e,t){var o=t.options,a=t.question,u=t.forumType,s=t.parentPost,d=t.isFollowing;e.dispatch("SET_SAVING_STATE",{savingState:i.SAVING,id:s.id}),d?e.dispatch("FOLLOW",{question:a}):e.dispatch("UNFOLLOW",{question:a}),l(o,u).then(function(t){n.markRead(s.questionId),e.dispatch("RECEIVE_POST",{resp:t,data:o.data,parentPost:s,forumType:u}),e.dispatch("SET_SAVING_STATE",{savingState:i.SAVED,id:s.id})}).fail(function(t){return e.dispatch("SET_SAVING_STATE",{savingState:i.ERROR,id:s.id})}).done()},exports.upvote=function(t,n){var e=n.post;h(e).then(function(n){return t.dispatch("UPVOTE",{post:e})}).fail(function(n){return t.dispatch("UPVOTE_ERROR",{post:e})}).done()},exports.cancelUpvote=function(t,n){var e=n.post;r(e).then(function(n){return t.dispatch("CANCEL_UPVOTE",{post:e})}).fail(function(n){return t.dispatch("UPVOTE_ERROR",{post:e})}).done()},exports.follow=function(t,n){var e=n.question;T(e).then(function(n){return t.dispatch("FOLLOW",{question:e})}).fail(function(n){return t.dispatch("FOLLOW_ERROR",{question:e})}).done()},exports.unfollow=function(t,n){var e=n.question;I(e).then(function(n){return t.dispatch("UNFOLLOW",{question:e})}).fail(function(n){return t.dispatch("FOLLOW_ERROR",{question:e})}).done()}});