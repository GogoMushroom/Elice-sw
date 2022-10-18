var fruits = ["apple", "orange", "cherry"];

// case 1.
function myFunction(item, index) {
    document.write(index + ":" + item + "<br>");
}

fruits.forEach(myFunction);
document.write("<br>");

// case 2.
for (i = 0; i < 3; i++) {
    document.write(i + ":" + fruits[i] + "<br>");
}
document.write("<br>");

// case 3.
fruits.forEach((item, index) => document.write(index + ":" + item + "<br>"));
