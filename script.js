const seat = document.querySelectorAll(".seat");
const movieSelect = document.getElementById("movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total")




window.onload = () => {
    displayUI();
    let arr = JSON.parse(localStorage.getItem("Seats"))





movieSelect.addEventListener("change", () => {

    film.innerText = movieSelect.options[movieSelect.selectedIndex].
    text.slice(0, movieSelect.options[movieSelect.selectedIndex].text.length - 5);

    total.innerText = count.innerText * movieSelect.options[movieSelect.selectedIndex].value;

})

seat.forEach((item) => {


    item.addEventListener("click", (e) => {
        film.innerText = movieSelect.options[movieSelect.selectedIndex].
        text.slice(0, movieSelect.options[movieSelect.selectedIndex].text.length - 6);
        
        let temp = e.target.classList.value;

        if (temp == "seat") {
            e.target.classList.value = "seat selected"
            count.innerText++;
            arr.push(Array.from(seat).indexOf(e.target))
            total.innerText = count.innerText * movieSelect.options[movieSelect.selectedIndex].value;

        } else {
            if (temp == "seat occupied") {
                return;
            }
            else {
                e.target.classList.value = "seat"
                if (count.innerText > 0) count.innerText--;
                total.innerText = count.innerText * movieSelect.options[movieSelect.selectedIndex].value;
                arr.splice(arr.indexOf(Array.from(seat).indexOf(e.target)), 1);

            }
        }
        localStorage.setItem("Seats", JSON.stringify(arr));
    })

})
}

const displayUI = () => {
        
        let array = localStorage.getItem("Seats");
        array = JSON.parse(array);
        console.log(array);

        if (array!== null && array.length > 0) {
            seat.forEach((s, index) => {
                // selectedSeats.indexOf(index) == -1 ==> false
                // selectedSeats.indexOf(index) > -1 ==> true
                // occupied olmayanların indexi localstorge da varsa onları selected yap refresh sonrası veri basma kısmı
                if (array.indexOf(index) > -1) {
                    console.log(s);
                  s.classList.add('selected');
                  // seat.classList.toggle('occupied');
                }
            })
        }


    }
