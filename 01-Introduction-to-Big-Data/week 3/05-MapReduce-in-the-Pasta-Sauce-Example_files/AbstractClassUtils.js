define("bundles/ondemand/utils/AbstractClassUtils",["require","exports","module"],function(require,exports,module){"use strict";var t={ensureSubclassInstantiation:function ensureSubclassInstantiation(t,e){if(e.constructor===t)throw new Error(t.name+" should be subclassed. Do not instantiate it directly.")},abstractMethodCalled:function abstractMethodCalled(t,e){throw new Error("Method '"+t.constructor.name+"."+e+"()' unemplemented.")}};module.exports=t});