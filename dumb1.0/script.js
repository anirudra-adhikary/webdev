let cont = document.body.childNodes[1];

async function printWithDelay() {
    for(let i = 0; i < 10; i++) {

        for(let j=0;j<5;j++) {

            if(j != 0) {
                cont.children[j-1].style.background = "white";
            }
            if(j == 0) {
                cont.lastElementChild.style.background = "white";
            }
            cont.children[j].style.background = "red";

            await sleep(1000);
        }

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

printWithDelay();
