# Get the Engine Version
```javascript
// Import the connect engine function
var connectEngine = require("../../dist/connect/connectEngine");
var { engineVersion } = require("../../dist/Global");
var { switchMap } = require("rxjs/operators");

// Define the configuration for your engine connection
const config = {
    host: "localhost",
    port: 9076,
    isSecure: false
};

// Call connectEngine with the config to produce an Observable for the Global handle
const eng$ = connectEngine(config);

const engVer$ = eng$.pipe(
    switchMap(h => engineVersion(h))
);

// Console out the engine version
engVer$.subscribe(console.info);
```