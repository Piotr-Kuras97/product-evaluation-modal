// empty page on start

const loading = document.querySelector(".loading")

setTimeout(()=> {
    loading.remove()
},3000)

// evalution 

const numberSelect = document.querySelectorAll(".select")
const nextStep = document.querySelector(".card__btn")
let rating;
let flag = true


numberSelect.forEach((item) => {
    item.addEventListener("click", () =>{
        for (let i = 0; i < numberSelect.length; i++){
            numberSelect[i].classList.remove("active")
            flag = !flag
        }

        if (flag){
            item.classList.add("active")
            nextStep.classList.add("active")
            rating = item.textContent.replaceAll(' ','');
            flag = false
            return flag, rating
        } else if (item.classList.contains("active")){
            item.classList.remove("active")
            nextStep.classList.remove("active")
            rating = 0;
            flag = true
            return flag, rating
        }
    })
})

// alert

nextStep.addEventListener("click", () => {
    if(nextStep.classList.contains("active") && rating > 0 && rating < 6){
        alert("Dziękujemy, że oceniłeś produkt na: " + rating)
    } else {
        alert("Error")
    }
})




