const vm = require("vm");
const fs = require("fs");
const runner = (path, context) => {
    context = context || {};
    const data = fs.readFileSync(path);
    vm.runInNewContext(data, context, path);
    return context;
}

try {
    const { Starter } = runner('target/scala-2.12/scala-js-starter-fastopt.js', { globalThis, Starter: {} });
    console.log('Starter', Starter);
    console.log('Starter.someval', Starter.someval);
    console.log('Starter.greet(\'Human\')', Starter.greet('Human'));
} catch (e) {
    console.log('runner error', e);
}
