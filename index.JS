console.log("hello,world");
const customers =.querySelector("#customers-container")

function buildDirectory(customerArray){
    for (let customer of customerArray){
        let pic = document.createElement("img");
        let customerDiv =  document.createElement("div");
        let name = document.createElement("h1");
        let location = document.createElement("p");
        let email = document.createElement("p");
        let birthday = document.createElement("p");
        let registered = document.createElement("p");

        pic.classList.add("faces");
        street.classList.add("street");
        email.classList.add("email");
        birthday.classList.add("birthday");

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);

            faces.src = `${customer.picture.large}`;
            email.innerText = `${customer.email}`
            name.innerText = `${capitalize(customer.name.first)} ${capitalize(customer.name.last)}`
            street.innerText = `${customer.location.street.number} ${customer.location.street.name}`
            location.innerText
        }



    }
}



buildDirectory(customers);

