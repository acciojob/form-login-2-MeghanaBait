function getFormvalue() {
    event.preventDefault();

    let firstName = document.getElementsByName('First Name')[0].value;
    let lastName = document.getElementsByName('Last Name')[0].value;
    let phoneNumber = document.getElementsByName('Phone Number')[0].value;
    let emailID = document.getElementsByName('Email ID')[0].value;

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nPhone Number: " + phoneNumber + "\nEmail ID: " + emailID);
}
