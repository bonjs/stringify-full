
var a = {
	f: function () {
		console.log("fdsafds\"fsafd")
	},
	reg: /\w+/,
	name: 'a',
	aa: {
		name: 'aa',
		test: {
			name: 'test',
			hah: {
				name: 'hah'
			}
		}
	},
	bb: {
		name: 'bb'
	}
};


init(a);

function init(o, p, k) {

	if(o.constructor == Object) {
		p && k && Object.defineProperty(o, '__path', {
			configurable: true,
			writable: true,
			enumerable: false,
			value: (p.__path || '') + '/' + k
		});
		for(var k in o) {
			init(o[k], o, k);
		}
	}

}

console.log(a);

var typeObj = {}

var b = JSON.stringify(a, function (key, value) {

	if(value) {
		if(value.constructor == RegExp) {
			typeObj[this.__path || '' + '/'  + key] = value;
			return value;
		}
		if(value.constructor == Function) {
			typeObj[this.__path || '' + '/'  + key] = value;
			return value;
		}
	}
	return value;
})

console.log(b)




  /*
  var b = JSON.parse(a, function(x, y) {
	  if(typeof y == 'string' && /^function\s*\([^)]*\)\s*{[\s\S]*}$/.test(y)) {
		return eval('(' + y + ')');
	  }
	  return y;
	});
	*/