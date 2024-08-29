const share_icon = document.getElementById("icon-share-id");
const icons_share_div_element = document.getElementById("share-options-id");

console.log(share_icon);
share_icon.addEventListener("click", function () {
  icons_share_div_element.classList.toggle("hidden");
});
