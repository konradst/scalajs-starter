const vm = require("vm");
const fs = require("fs");
const runner = (path, context) => {
    const data = fs.readFileSync(path);
    if (context) {
        vm.runInNewContext(data, context, path);
        return context;
    } else {
        vm.runInThisContext(data, path);
        return globalThis;
    }
}

try {
    runner('target/scala-2.12/scala-js-starter-fastopt.js');
    console.log('globalThis.Starter', globalThis.Starter);
    console.log('globalThis.Starter.someval', globalThis.Starter.someval);
    console.log('globalThis.Starter.greet(\'Human\')', globalThis.Starter.greet('Human'));
    console.log('globalThis.StarterClassInstance.greet(\'Human\')', globalThis.StarterClassInstance.greet('Human'));
} catch (e) {
    console.log('globalThis.Starter error', e);
}
