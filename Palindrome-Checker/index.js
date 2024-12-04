const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value.trim(); 
    if (value === "") {
        alert("Type something");
    } else {
        const reverse = reverseString(value);
        if (value === reverse) {
            alert("PALINDROME");
        } else {
            alert("Not today!");
        }
    }

    input.value = ""; 
}
