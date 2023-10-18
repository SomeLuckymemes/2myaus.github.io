
function updateColor(){
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if(prefersLight){
        document.body.classList.add("light");
    }
    else{
        document.body.classList.remove("light");
    }
}
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateColor);
updateColor();