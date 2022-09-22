console.log('hello,world')

const customerContainer = document.querySelector("#customer-Container")
function buildDirectory(customerArray) {
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div");
        let customerDiv.classList.add("customer");
        let name = document.createElement("h1");
        name.InnerText = `${customer.name.title} ${customer.name.first}${customer.name.last}`;
         customerDiv.appendChild(name);
        customerContainer.appendChild(customerDiv);
    }
}
