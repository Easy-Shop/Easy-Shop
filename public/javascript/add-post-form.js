async function newFormHandler(event) {
  console.log("Works");
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const image_url = document
    .querySelector('input[name="post-image"]')
    .value.trim();
  const price = document.querySelector('input[name="post-price"]').value.trim();

  console.log(title);
  console.log(image_url);
  console.log(price);

  if (title && image_url && price) {
    const response = await fetch("api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        image_url,
        price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".post-form").addEventListener("submit", newFormHandler);
