const next = document.getElementById("next");
const prev = document.getElementById("prev");
var question_number = document.querySelector('.question__number')
var question__text = document.querySelector('.question__text')
function loadQues(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true)
    var questionsNumberArr = [];
    var questionsTextArr = [];
    xhr.onload = function(){
        if(this.status == 200 && this.statusText== "OK"){
            var results = JSON.parse(this.responseText);
            function randomNum(){
                return Math.floor(Math.random() * 4)
            }
                results.forEach(result => {
                    
                    questionsNumberArr.push(result?.id)
                    questionsTextArr.push(result?.Question)
                    var index = 0;

                    // Prev and next event
                    next.addEventListener("click", nextNum)
                    prev.addEventListener("click", prevNum)


                    question_number.innerHTML =`Question ${questionsNumberArr[0]}`
                    question__text.innerHTML = `${questionsTextArr[0]}`

                    // This function moves to the next number
                    function nextNum(){
                        if(index == 4){
                            return;
                        }
                        else{
                            index++;
                            index %= questionsNumberArr.length;
                            question_number.innerHTML = `Question ${questionsNumberArr[index]}`
                            question__text.innerHTML = `${questionsTextArr[index]}`
                        }

                        
                    }

                    // The function moves to the previous number

                    function prevNum(){
                        if(index == 0){
                            return;
                        }
                        else{
                            index--;
                            index %= questionsNumberArr.length;
                            question__text.innerHTML = `${questionsTextArr[index]}`
                            question_number.innerHTML = `Question ${questionsNumberArr[index]}`
                        }
                    }


                });
        }
    }  
    xhr.send()
}
loadQues()