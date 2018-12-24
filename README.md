# stringify-full

### a tool which can stringify the Function and RegExp in the js object

.eg
~~~javascript

var o = {
  name: 'stringify-full',
  method: function() {
    console.log('this is a function');
  },
  reg: /\w+/
}
~~~

Now, I want to convert the object o into string, if we use JSON.stringify, it will lost the property method and reg

~~~javascript
{"name":"demo","reg":{}}
~~~

This is not what we want. Now we can use the tool stringify-full

~~~javascript
const stringify = require('stringify-full');
console.log(stringify(o));
~~~

output:
~~~javascript
{"name":"demo","method":function() {
    console.log('this is a function');
  },"reg":/\w+/
~~~
