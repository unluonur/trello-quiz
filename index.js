
var letters = "acdegilmnoprstuw";

var encode = function(s) {
	var h = 7;
	for(var i = 0; i < s.length; i++) {
		h = (h * 37 + letters.indexOf(s[i]));
	}
	return h;
};

var decode = function(code) {
	for(var i=0; i<letters.length; i++) {
		if((code-i)%37==0) {
			var c = (code - i)/37;
			if(c < 37) {
				return letters[i];
			}
			else {
				return decode(c)+letters[i];
			}
		}
	}
};

exports.encode = encode;
exports.decode = decode;
