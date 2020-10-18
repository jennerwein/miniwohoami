module.exports.helligkeit = Brightness2;

// Bestimmung der Farbhelligkeit
// https://evileu.de/zum-schwarzen-pinguin/2018/06/25/kontrastfarbe-automatisch-berechnen-mit-jqueryjavascript/

//************rgb-Werte aus hex holen
function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16)
}

function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16)
}

function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16)
}

function cutHex(h) {
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h
}

//***********relative Helligkeit von r,g,b bestimmen
function Brightness(r, g, b) {
    return Math.sqrt(
        r * r * .241 +
        g * g * .691 +
        b * b * .068);
}

function Brightness2(HexColor) {
    return Brightness(hexToR(HexColor), hexToG(HexColor), hexToB(HexColor))
}