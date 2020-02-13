function filter() {
    const difficultyValue = document.querySelectorAll(".difficulty-form input")
    for (var i = 0; i < difficultyValue.length; i++) {
        if (difficultyValue[i].checked) {
            if (difficultyValue[i].value == "ECharacterDifficulty::VE_Easy") {
                console.log(1)

            } else if (difficultyValue[i].value == "ECharacterDifficulty::VE_Hard") {
                console.log(2)

            } else if (difficultyValue[i].value == "ECharacterDifficulty::VE_Intermediate") {
                console.log(3)

            } else if (difficultyValue[i].value == "allDifficulty") {
                console.log(4)

            }
        }
    }
    const genderValue = document.querySelectorAll(".gender-form input")
    for (var i = 0; i < genderValue.length; i++) {
        if (genderValue[i].checked) {
            if (genderValue[i].value == "EGender::VE_Male") {
                console.log(1)

            } else if (genderValue[i].value == "EGender::VE_Female") {
                console.log(2)

            } else if (genderValue[i].value == "all") {
                console.log(3)

            }
        }
    }
}
var inputs = document.querySelectorAll("input")
Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener('change', filter);
});