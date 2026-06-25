const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 150;

        if(count < target){
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 15);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});


const form = document.getElementById("formContato");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mensagem enviada com sucesso! 🌱");

    form.reset();

});
