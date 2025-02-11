export function logMethodInfo(origMethod: any, _context: ClassMethodDecoratorContext) {

    function replaceMethod(this: any, ...args: any[]) {
        console.log(`The method ${origMethod.name} was called`);        
        console.log(`Decorated constructor: ${_context.kind}`);
        console.log(`Decorated constructor name: ${_context.name as string}`);

        const result = origMethod.call(this, ...args);        
        return result;
    }
    return replaceMethod;
}