export let count = 0;

// export function increase() { //선언부의 처음에 export를 해주거나 
// 	count++;
// }
function increase() { 
	count++;
}

function getCount() {
	return count;
}

export { increase, getCount }; //마지막에 한번에 export 를 해줘도 됨
