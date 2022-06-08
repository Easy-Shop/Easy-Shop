async function formPost(event) {
  document.location.replace("/newpost");
}

document.querySelector(".add-post").addEventListener("click", formPost);
