define("bundles/quiz-question-types/models/GradedFeedback",["require","exports","module","bundles/quiz-question-types/constants/QuestionFeedbackLevels"],function(require,exports,module){"use strict";function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var e=require("bundles/quiz-question-types/constants/QuestionFeedbackLevels"),s=function GradedFeedback(s){_classCallCheck(this,GradedFeedback);var t=s.definition;this.feedbackLevel=e.Graded,this.isCorrect=t.isCorrect};module.exports=s});