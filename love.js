function calculateLove() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();

    const specialNames = [
        "odidi", "hope", "odianose", "odidi hope odianose",
        "ifeoma", "evelyn", "njokueze", "njokueze evelyn ifeoma "
    ];

    if (
        (specialNames.includes(name1) && specialNames.includes(name2)) || (specialNames.includes(name2) && specialNames.includes(name1))
    ) {
        document.getElementById("result").innerText = `${capitalizeFirstLetter(name1)} and ${capitalizeFirstLetter(name2)}'s love score is: 100%`;
    } else {
        const loveScore = Math.floor(Math.random() * 101);
        document.getElementById("result").innerText = `${capitalizeFirstLetter(name1)} and ${capitalizeFirstLetter(name2)}'s love score is ${loveScore}%`;
    }
}

function capitalizeFirstLetter(name) {
    return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}


//     if (name1 && name2) {
//         const loveScore = Math.floor(Math.random() * 101);
//         document.getElementById("result").innerText = `${name1} and ${name2}'s love score is ${loveScore}%`;
//         } else {
//             document.getElementById("result").innerText = "Please enter both names.";
//         }
// }