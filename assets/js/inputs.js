let myForm1 = document.getElementById("myForm1");
let inpName = document.getElementById("inpName");
let inpSurname = document.getElementById("inpSurname");
let inpAge = document.getElementById("inpAge");
let inpEmail = document.querySelector(".inpEmail");

myForm1.addEventListener("submit", function (event) {
	event.preventDefault();
	axios
		.post("https://655c83c825b76d9884fd6f17.mockapi.io/users", {
			name: inpName.value,
			surname: inpSurname.value,
			age: inpAge.value,
			email: inpEmail.value,
		})
		.then((res) => {
			console.log(res.data);
		});
});
let myForm2 = document.getElementById("myForm2");
let inpUsername = document.getElementById("inpUsername");
let inpEmail2 = document.querySelector(".inpEmail2");
let inpPassword = document.querySelector(".inpPassword");
let inpAdress = document.getElementById("inpAdress");
let inpCountry = document.getElementById("inpCountry");

myForm2.addEventListener("submit", function (event) {
	event.preventDefault();
	axios
		.post("https://655c83c825b76d9884fd6f17.mockapi.io/accounts", {
			username: inpUsername.value,
			email: inpEmail2.value,
			password: inpPassword.value,
			adress: inpAdress.value,
			country: inpCountry.value,
		})
		.then((res) => {
			console.log(res.data);
		});
});

let myForm3 = document.getElementById("myForm3");
let inpTitle = document.getElementById("inpTitle");
let inpPrice = document.querySelector(".inpPrice");
let inpDescription = document.getElementById("inpDescription");
let inpQuality = document.querySelector(".inpQuality");
let inpStock = document.querySelector(".inpStock");
let inpCountry2= document.getElementById("inpCountry2");
let inpCity = document.getElementById("inpCity");
let inpCategory = document.getElementById("inpCategory");
let inpDiscount = document.querySelector(".inpDiscount");
let inpCustomersCount = document.querySelector(".inpCustomersCount");




myForm3.addEventListener("submit", function (event) {
    event.preventDefault();

    axios.post("https://655c83c825b76d9884fd6f17.mockapi.io/accounts", {
        title: inpTitle.value,
        price: inpPrice.value,
        description: inpDescription.value,
        quality: inpQuality.value,
        stock: inpStock.value,
        country: inpCountry2.value,
        city: inpCity.value,
        discount: inpDiscount.value,
        category: inpCategory.value,
        customersCount: inpCustomersCount.value,
    })
        .then(res => {
            console.log(res.data);
        })

});