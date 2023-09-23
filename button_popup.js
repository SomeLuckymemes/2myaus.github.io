const scriptParent = document.currentScript.parentElement;
const popup = scriptParent.getElementsByClassName("social-popup")[0];

scriptParent.addEventListener("mouseleave", () => {
    scriptParent.classList.remove("popup-revealed");
});

scriptParent.onclick = (e) => {
    if(scriptParent.classList.contains("popup-revealed")) return;
    scriptParent.classList.add("popup-revealed");
}
