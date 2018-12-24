
var a = {
	f: function () {
		console.log("fdsafds\"fsafd")
	},
	reg: /\w+/,
	name: 'a',
	n: 1,
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



console.log(a);


function init(o) {

	function hashCode(str) {
		var hash = 0;
		if (str.length == 0) return hash;
		for (i = 0; i < str.length; i++) {
			char = str.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash;
		}
		return hash;
	}

	var refs = {}

	var str = JSON.stringify(o, function (key, value) {

		if(value) {
			if(value.constructor == RegExp || value.constructor == Function) {
				// var id = Math.random().toString(36).slice(2, 10);
				var id = hashCode(value.constructor.prototype.toString.call(value))
				if(!refs.hasOwnProperty(id)) {
					refs[id] = value;
				}
				return "__" + id + "__";
			}
		}
		return value;
	})

	return str.replace(/"__([a-z0-9]+)__"/g, function(x, hash) {
		if(!refs.hasOwnProperty(hash)) {
			return x;
		}
		var v = refs[hash];
		if(v.constructor == RegExp) {
			return v;
		}
		if(v.constructor == Function) {
			return Function.prototype.toString.call(v);
		}
	});

}
console.log(init(a))
