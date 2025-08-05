document.getElementById("attendanceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Optional: Get teacher name from localStorage
  const teacher = localStorage.getItem("teacherName") || "Unknown";

  const form = e.target;
  const formData = new FormData(form);
  formData.append("teacher", teacher); // Add teacher to form data

  // ✅ Your working Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbwlndK-ldzEHXve-k4-AbIMkej6vKfhoGibIcZKqHW1OtWf8rO-z_GQ5jWro2M2Ge1Emg/exec";

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("response").innerText = data;
    form.reset();
  })
  .catch(error => {
    document.getElementById("response").innerText = "Error saving attendance.";
    console.error("Error!", error.message);
  });
});
