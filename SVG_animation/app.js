const logo = document.querySelectorAll("#logo path");
for (let i = 0; i < logo.length; i++) {

    // console.log(logo);
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}