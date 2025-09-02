window.onload = function() {
  let submissions = JSON.parse(localStorage.getItem("guests")) || [];
  const tableBody = document.querySelector("#dataTable tbody");
  const noDataMsg = document.getElementById("noData");

  if (submissions.length === 0) {
    noDataMsg.textContent = "No data available";
    document.getElementById("dataTable").style.display = "none";
  } else {
    submissions.forEach(guest => {
      let row = `<tr>
        <td>${guest.name}</td>
        <td>${guest.phone}</td>
        <td>${guest.email}</td>
        <td>${guest.aadhar}</td>
        <td>${guest.checkin}</td>
        <td>${guest.checkout}</td>
        <td>${guest.purpose}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
};
