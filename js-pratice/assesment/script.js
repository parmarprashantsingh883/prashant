document.getElementById("guestForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const aadhar = document.getElementById("aadhar").value.trim();
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const purpose = document.getElementById("purpose").value.trim();

  // Reset errors
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  if (name === "") {
    document.getElementById("nameError").textContent = "Full Name is required";
    isValid = false;
  }
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits";
    isValid = false;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter valid email";
    isValid = false;
  }
  if (!/^\d{12}$/.test(aadhar)) {
    document.getElementById("aadharError").textContent = "Aadhar must be 12 digits";
    isValid = false;
  }
  if (checkin === "") {
    document.getElementById("checkinError").textContent = "Check-in date required";
    isValid = false;
  }
  if (checkout === "") {
    document.getElementById("checkoutError").textContent = "Check-out date required";
    isValid = false;
  }
  if (purpose === "") {
    document.getElementById("purposeError").textContent = "Purpose required";
    isValid = false;
  }

  if (isValid) {
    const guestData = { name, phone, email, aadhar, checkin, checkout, purpose };

    let submissions = JSON.parse(localStorage.getItem("guests")) || [];
    submissions.push(guestData);
    localStorage.setItem("guests", JSON.stringify(submissions));

    document.getElementById("guestForm").reset();
    document.getElementById("successMsg").textContent = "Data saved successfully!";
  }
});
