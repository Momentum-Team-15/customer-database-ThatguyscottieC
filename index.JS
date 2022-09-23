console.log("hello,world");

console.log(customers.dob);

const people = document.querySelector("#people");

function buildDirectory(customerArray) {
  for (let customer of customerArray) {
    let pic = document.createElement("img");
    let customerDiv = document.createElement("div");
    let name = document.createElement("h1");
    let location = document.createElement("p");
    let email = document.createElement("p");
    let birthday = document.createElement("p");
    let registered = document.createElement("p");
    let street = document.createElement("p");

    customerDiv.classList.add("test");

    pic.classList.add("faces");
    street.classList.add("street");
    email.classList.add("email");
    birthday.classList.add("birthday");

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    pic.src = `${customer.picture.large}`;
    email.innerText = `${customer.email}`;
    name.innerText = `${capitalize(customer.name.first)} ${capitalize(
      customer.name.last
    )}`;
    street.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    location.innerText = `${customer.location.city}, ${nameToAbbr(
      customer.location.state
    )}`;

    birthday.innerText = `DOB:${moment(customer.dob.date).format("MMM Do YY")}`;

    // birthday.innerText = `DOB: ${moment(customer.dob.date).format(
    //   "MMM Do YY"
    // )}`;
    registered.innerText = `Customer since: ${moment(
      customer.registered.date
    ).format("MMM Do YY")}`;

    customerDiv.appendChild(pic);
    customerDiv.appendChild(name);
    customerDiv.appendChild(email);
    customerDiv.appendChild(street);
    customerDiv.appendChild(location);
    customerDiv.appendChild(birthday);
    customerDiv.appendChild(registered);
    people.appendChild(customerDiv);
  }
}

buildDirectory(customers);
