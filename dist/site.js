document.querySelectorAll(".poster img").forEach((image) => {
  image.addEventListener("load", () => {
    image.closest(".poster")?.classList.add("is-loaded");
  }, { once: true });
});
