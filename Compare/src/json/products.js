function readJSON(fileName) {
    var raw = new XMLHttpRequest();
    raw.open("GET", fileName, false);
    raw.send();

    var productJSON = JSON.parse(raw.responseText);
    return productJSON;
}

export const productJSON = readJSON("products.json");