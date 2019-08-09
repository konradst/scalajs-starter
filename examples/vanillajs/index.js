const vm = require("vm");
const fs = require("fs");
const runner = (path, context) => {
    context = context || {};
    const data = fs.readFileSync(path);
    vm.runInNewContext(data, context, path);
    return context;
}

try {
    runner('target/scala-2.12/scala-js-starter-fastopt.js', { globalThis, Starter: {}, StarterClassInstance: {} });
    console.log('globalThis.Starter', globalThis.Starter);
    console.log('globalThis.Starter.someval', globalThis.Starter.someval);
    console.log('globalThis.Starter.greet(\'Human\')', globalThis.Starter.greet('Human'));
} catch (e) {
    console.log('globalThis.Starter error', e);
}

try {
    const { Starter } = runner('target/scala-2.12/scala-js-starter-fastopt.js', { globalThis, Starter: {}, StarterClassInstance: {} });
    console.log('Starter', Starter);
    console.log('Starter.someval', Starter.someval);
    console.log('Starter.greet(\'Human\')', Starter.greet('Human'));
} catch (e) {
    console.log('Starter error (this is intentional, uncomment Starter in @GlobalScope for unicorns and rainbows)', e);
}


try {
    const { StarterClassInstance } = runner('target/scala-2.12/scala-js-starter-fastopt.js', { globalThis, Starter: {}, StarterClassInstance: {} });
    console.log('StarterClassInstance', StarterClassInstance);
    console.log('StarterClassInstance.someval', StarterClassInstance.someval);
    console.log('StarterClassInstance.greet(\'Human\')', StarterClassInstance.greet('Human'));
} catch (e) {
    console.log('StarterClassInstance error (this is intentional, uncomment StarterClassInstance in @GlobalScope for unicorns and rainbows)', e);
}
