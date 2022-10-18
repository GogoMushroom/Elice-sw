let count = 0;

function increase() {
	count++;
}

function getCount() {
	return count;
}

//module.exports.count = count;
// module.exports.getCount = getCount;
// module.exports.increase = increase;

this.getCount = getCount;
this.increase = increase; //this.로 보내도됨 

// console.log(module.exports === exports);

// exports = {};
//console.log(module.exports === exports);
//exports.increase = increase;
// exports = {increase, getCount} // 이런식으로 하면 안댐
//console.log(module);

//console.log(this === module.exports);
//console.log(module.exports === exports);

