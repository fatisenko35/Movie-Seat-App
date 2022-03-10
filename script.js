const seat = document.querySelectorAll(".seat");
const movieSelect = document.getElementById("movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total")

let value = movieSelect.options[movieSelect.selectedIndex].value;
let text = movieSelect.options[movieSelect.selectedIndex].text;


    movieSelect.addEventListener("change", () => {
        film.innerText = movieSelect.options[movieSelect.selectedIndex].text.slice(0, movieSelect.options[movieSelect.selectedIndex].text.length - 5)
        total.innerText = count.innerText * movieSelect.options[movieSelect.selectedIndex].value

    })

    seat.forEach((item) => {


        item.addEventListener("click", (e) => {
            film.innerText = movieSelect.options[movieSelect.selectedIndex].text.slice(0, movieSelect.options[movieSelect.selectedIndex].text.length - 6)
            let temp = e.target.classList.value;

            if (temp == "seat") {
                e.target.classList.value = "seat selected"
                count.innerText++;
                total.innerText = count.innerText * movieSelect.options[movieSelect.selectedIndex].value

            } else {
                if (temp == "seat occupied") {
                    return;
                }
                else {
                    e.target.classList.value = "seat"
                    if (count.innerText > 0) count.innerText--;
                    total.innerText = count.innerText * movieSelect.options[movieSelect.selectedIndex].value
                }
            }
        })

    })



