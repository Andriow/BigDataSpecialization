define("bundles/userModal/views/authState",["require","exports","module","underscore","bundles/userModal/lib/instrumentation","bundles/thirdPartyAuth/lib","bundles/userModal/views/userModalForm"],function(require,exports,module){"use strict";var _=require("underscore"),o=require("bundles/userModal/lib/instrumentation"),t=require("bundles/thirdPartyAuth/lib"),e=require("bundles/userModal/views/userModalForm"),n=e.extend({onEnterState:function onEnterState(){e.prototype.onEnterState.call(this),t.facebook.init().then(this.onFacebookInit.bind(this)),this.listenTo(this.model,"facebookLoginFail",this.onFacebookError)},onExitState:function onExitState(){this.stopListening(this.model,"facebookLoginFail")},templateOptions:function templateOptions(){return{facebookEnabled:t.facebook.enabled}},onFacebookInit:function onFacebookInit(){_(this.events).extend({'click [data-js~="facebook-button"]':"onFacebookLogin"}),this.$$("facebook-button").prop("disabled",!1),this.$$("facebook-button-loading").hide(),this.delegateEvents()},onFacebookLogin:function onFacebookLogin(){"login"===this.state?o.thirdPartyLoginSubmit("facebook"):"signup"===this.state&&o.thirdPartySignupSubmit("facebook"),this.$$("facebook-button-loading").show(),this.model.tryFacebookLogin()},onFacebookError:function onFacebookError(o){this.$$("facebook-button-loading").hide(),this.showError(o)}});module.exports=n});