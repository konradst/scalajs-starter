eval(require('fs').readFileSync('target/scala-2.12/scala-js-starter-fastopt.js', 'utf8'));

// Scala object
try {
    console.log('Starter', Starter);
    console.log('Starter.someval', Starter.someval);
    console.log('Starter.greet(\'Human\')', Starter.greet('Human'));
} catch (e) {
    console.log('Starter error', e);
}

// Scala class
try {
    console.log('StarterClass', StarterClass);
    console.log('StarterClass().someval', StarterClass().someval);
    console.log('StarterClass().greet(\'Human\')', StarterClass().greet('Human'));    
} catch (e) {
    console.log('StarterClass error', e);
}
