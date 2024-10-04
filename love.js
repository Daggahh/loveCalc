function calculateLove() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();

    if (name1 && name2) {
        const loveScore = Math.floor(Math.random() * 101);
        document.getElementById("result").innerText = `${capitalizeFirstLetter(name1)} and ${capitalizeFirstLetter(name2)}'s love score is ${loveScore}%`;
        } else {
            document.getElementById("result").innerText = "Please enter both names.";
        }
}


function capitalizeFirstLetter(name) {
    return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}