"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethodInfo = logMethodInfo;
function logMethodInfo(origMethod, _context) {
    function replaceMethod(...args) {
        console.log(`The method ${origMethod.name} was called`);
        console.log(`Decorated constructor: ${_context.kind}`);
        console.log(`Decorated constructor name: ${_context.name}`);
        const result = origMethod.call(this, ...args);
        return result;
    }
    return replaceMethod;
}
//# sourceMappingURL=decorators.js.map