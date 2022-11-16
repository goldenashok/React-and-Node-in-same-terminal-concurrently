# React-and-Node-in-same-terminal-concurrently
React and Node js project running same terminal

"concurrently" module used to run more then project at the same time in the same terminal
```
npm install concurrently
```

commands
```
concurrently "command1 arg" "command2 arg"
```

Example
```
dev: concurrently \"npm start\" \"cd api && npm start\""
```
