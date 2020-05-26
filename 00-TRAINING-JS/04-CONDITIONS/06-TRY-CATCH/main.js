try {
    let reward = prompt("Choose a weapon among those : Sword / Gun / Axe").toLocaleUpperCase();
    let damages;

    switch (reward) {
        case "SWORD":
            damages = "40 dps";
            break;
        case "GUN":
            damages = "100 dps";
            break;
        case "AXE":
            damages = "50 dps";
            break;
        default:
            throw new Error(`You can't take anything else...`);
    }
    alert(`You chose a(n) ${reward}, it will give you ${damages}`);
}
catch (error) {
    alert(error);
}
finally {
    alert(`This program is over.`)
}