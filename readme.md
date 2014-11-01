<h1 align="center">
otra vez
</h1>

A magic REPL. Watches your modules for changes and re-injects their contents into the REPL.

### Watch the screencast:
[![](https://photos-3.dropbox.com/t/1/AACA-Iz7vxQZhjtKHXVt41Z6yos-0YdI7qQ5ymyytfHBpw/12/3723930/png/32x32/3/_/1/2/Screenshot%202014-11-01%2012.43.21.png/Cw8kh0Ug4w6cxwCKaQv_zRGo0XG5SBhuy8tag5xfIcI?size=1280x960)](http://youtu.be/icKzuyLuSxc)

## Usage

```
otra [module.js]
```

If you pass a file argument, it's `require`d and imported into the REPL context. When the module changes, it's reimported.

Any `require`s within the REPL also watch the module for changes, and injects the new module into the variable you imported to. *It knows*.

## Licence
MIT
