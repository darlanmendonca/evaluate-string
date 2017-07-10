### evaluate-strings

Convert strings to respective types.

```js
// Strings
evaluteString('john')
evaluteString('snow')
evaluteString('module')
evaluteString('window')
```

```js
// Numbers
evaluteString('5')
```

```js
// Booleans
evaluteString('false')
evaluteString('true')
```

```js
// Objects
evaluteString(`{id: 1, name: 'john snow'}`)
evaluteString(`{"id": 1, "name": "john snow"}`)
```

```js
// Arrays
evaluteString('[1, 2]')
evaluteString(`['a', 'b']`)
evaluteString(`[true, false]`)
evaluteString(`[{id: 1, name: 'john snow'}, {id: 1, name: 'john snow'}]`)
```