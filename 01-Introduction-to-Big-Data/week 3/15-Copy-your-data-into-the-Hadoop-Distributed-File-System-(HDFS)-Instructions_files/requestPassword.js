define("bundles/userModal/views/requestPassword",["require","exports","module","underscore","bundles/userModal/lib/instrumentation","bundles/userModal/views/requestPassword.html","bundles/userModal/views/userModalForm"],function(require,exports,module){"use strict";var _=require("underscore"),e=require("bundles/userModal/lib/instrumentation"),s=require("bundles/userModal/views/requestPassword.html"),t=require("bundles/userModal/views/userModalForm"),o=t.extend({name:"requestPassword",state:"request-password",template:s,customInitialize:function customInitialize(e){this.listenTo(this.model,"thirdPartyAuthRequestPassword",this.onRequestPassword)},onEnterState:function onEnterState(){this.listenTo(this.model,"facebookLoginFail",this.showError)},onExitState:function onExitState(){this.stopListening(this.model,"facebookLoginFail")},onSubmitClick:function onSubmitClick(o){var s=this.model.get("accountType");o.preventDefault(),e.requestPasswordSubmit(s);var t=_.defaults(this.serializeForm(),this.model.get("authData"));this.model.set("authData",t),this.model.tryFacebookLogin(t).fail(function(t){e.requestPasswordError(s,t)})},onRequestPassword:function onRequestPassword(s){this.model.set("accountType",s),e.requestPasswordView(s),this.model.show(this.state)}});module.exports=o});