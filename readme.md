<h1 align="center">
otra vez
</h1>
<pre align="center">npm install -g otra-vez</pre>


A magic REPL. Watches your modules for changes and re-injects their contents into the REPL.

### Watch the screencast:
[![screencast thumbnail](http://img.youtube.com/vi/icKzuyLuSxc/0.jpg)](http://youtu.be/icKzuyLuSxc)

## Usage

```
otra [module.js]
```

If you pass a file argument, it's `require`d and imported into the REPL context. When the module changes, it's reimported.

Any `require`s within the REPL also watch the module for changes, and injects the new module into the variable you imported to. *It knows*.

## Licence
MIT
