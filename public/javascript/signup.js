async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#signupUsername").value.trim();
  const email = document.querySelector("#signupEmail").value.trim();
  const password = document.querySelector("#signupPassword").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // redirects to the dashboard page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
