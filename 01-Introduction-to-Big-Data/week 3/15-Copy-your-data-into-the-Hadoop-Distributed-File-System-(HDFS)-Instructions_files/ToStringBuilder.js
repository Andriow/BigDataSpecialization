define("bundles/ondemand/utils/ToStringBuilder",["require","exports","module"],function(require,exports,module){"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var t=function(){function Property(t,n){_classCallCheck(this,Property),this.name=t,this.value=n}return Property.prototype.toString=function toString(){return this.name+"="+this.value},Property}(),n=function(){function ToStringBuilder(t,n){if(_classCallCheck(this,ToStringBuilder),!t.constructor)throw new Error("ToStringBuilder can only be used on instances of user-defined classes");this.obj=t,this.typeName=n||t.constructor.name,this.properties=[]}return ToStringBuilder.toString=function toString(t,r){var e=Object.keys(t),n=new ToStringBuilder(t,r);return e.forEach(function(r){return n.add(r,t[r])}),n.toString()},ToStringBuilder.prototype.add=function add(n,r){return this.properties.push(new t(n,void 0===r?this.obj[n]:r)),this},ToStringBuilder.prototype.addProps=function addProps(){for(var e=this,n=arguments.length,r=Array(n),t=0;n>t;t++)r[t]=arguments[t];return r.map(function(t){return e.add(t)}),this},ToStringBuilder.prototype.toString=function toString(){return this.typeName+"["+this.properties.join(", ")+"]"},ToStringBuilder}();module.exports=n});