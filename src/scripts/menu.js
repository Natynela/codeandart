const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuToggle instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute(
      "aria-label",
      expanded ? menuToggle.dataset.openLabel : menuToggle.dataset.closeLabel,
    );
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", menuToggle.dataset.openLabel);
      navigation.classList.remove("is-open");
    }
  });
}
