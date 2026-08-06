// Customer details

let customerName = "Ananya Yadav";


// Scenario 1: Welcome message

document.getElementById("welcomeMessage").innerHTML =
    "Welcome " + customerName +
    "! XYZ Bank wishes you a very Happy Diwali 🪔";


// Display customer name

document.getElementById("customerName").innerHTML =
    customerName;



// Scenario 2 and 3

function registerUser() {


    // Get customer ID entered by user

    let customerId =
        document.getElementById("customerIdInput").value;


    // Validate empty input

    if(customerId == "")
    {
        alert("Please enter Customer ID");
        return;
    }


    // Check Customer ID format
    // Only XYZ followed by numbers is allowed

    let pattern = /^XYZ[0-9]+$/;


    if(pattern.test(customerId))
    {

        // Hide steps

        document.getElementById("couponSteps").style.display = "none";


        // Generate coupon

        let couponCode = generateCoupon(customerId);


        document.getElementById("couponMessage").innerHTML =
        "Congratulations! Your Diwali coupon code is: "
        + couponCode;

    }

    else
    {

        document.getElementById("couponMessage").innerHTML =
        "Sorry! Invalid Customer ID. You are not eligible for Diwali coupon.";

    }

}



// Generate coupon using Customer ID

function generateCoupon(id) {


    let coupon = "DIWALI" + id;


    return coupon;

}