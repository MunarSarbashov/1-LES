// const vegetables=['apple','juzum','persik']
// const frite=['banana','pure','appelsin']
// vegetables.push(...frite,'tiger')
// console.log(vegetables);


// function convertUsd(rate, ...totals){
//     console.log(rate,totals);
//     return totals.map(total=>total/rate)
// }
// console.log(convertUsd(86,1000,5000,10000));


class Button {
	constructor(selector, p, bgcolor) {
		this.selector = selector;
		this.p = p;
		this.bgcolor = bgcolor;
	}

	hide() {
		this.hidden = true;
	}
}

class RoundedButton extends Button {
	constructor(borRadius, ...props) {
		super(...props);
		this.round = borRadius;
	}
}

let button = new Button("#btn", "12px 16px", "green");
let button2 = new RoundedButton("8px", "#btn2", "12px 16px", "blue");
// btn 1v
let btn = document.querySelector(button.selector);
btn.style.padding = button.p;
btn.style.background = button.bgcolor;
btn.style.border = 0;
// btn 2v
let btn2 = document.querySelector(button2.selector);
btn2.style.padding = button2.p;
btn2.style.background = button2.bgcolor;
btn2.style.border = 0;
btn2.style.borderRadius = button2.round;

// function getValue(p1) {
// 	return [p1, () => {}];
// }

// // console.log(getValue(0));

// const [num, changeNum] = getValue("Lorem");

// console.log("num: ", num);

let user = {
	name: "Admin",
	country: "Kyrgyzstan",
	age: 25,
	info: {
		login: "admin@ru",
		password: "admin123",
		//
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			phone: "+996 555 55-55-55",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496",
			},
		},
	},
};

let newUser = {
	userName: user.name,
	userPhone: user.info.address.phone,
};

let { userName, userPhone } = newUser;

console.log(userName, userPhone);

let names = ["Meerim", "MunarbeK"];
// ES 5

let lastEl = names[names.length - 1];

// ES 6
let lastEl2 = names.at(-1);
// startsWith('m')
let findSymK = names.filter(n => n.toLowerCase().endsWith("k"));
console.log("findSymK: ", findSymK);
// ??
// ? :

let isAdmin = false;

// console.log(isAdmin ? "Bul Admin " : "Bul User");

// if (isAdmin) {
// 	console.log("Bul Admin");
// } else {
// 	console.log("Bul User");
// }

let img;

console.log(img ?? "Toolor");

const array1 = [2, 100, 1, 6, 43];
const array2 = ["a", "b", "c", "d"];
const array3 = [false, true, null, undefined];

const all = [...array1, ...array2, ...array3];
const allES5 = [].concat(array1).concat(array2).concat(array3);

console.log(all);

