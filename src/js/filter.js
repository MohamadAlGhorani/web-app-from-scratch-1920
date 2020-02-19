import {
    renderData
} from "./render.js"

function filterDataByGender(data) {
    // const form = document.querySelector('.gender-form')

    // form.addEventListener('change', (event) => {
    const value = getActiveInputValueFromForm('.gender-form');
    const difficultyFormValue = getActiveInputValueFromForm('.difficulty-form');

    if (difficultyFormValue == 'all') {

        if (value == 'all') {
            return renderData(data);
        } else {
            return renderData(data.filter(item => {
                return item.gender === value;
            }));
        }

    } else {

        if (value == 'all') {
            return renderData(data.filter(item => {
                return item.difficulty === difficultyFormValue;
            }));
        } else {
            return renderData(data
                .filter(item => {
                    return item.gender === value;
                })
                .filter(item => {
                    return item.difficulty === difficultyFormValue;
                }));
        }

    }
    // })
}

function filterDataByDifficulty(data) {
    // const form = document.querySelector('.difficulty-form')

    // form.addEventListener('change', (event) => {
    const value = getActiveInputValueFromForm('.difficulty-form');
    const genderFormValue = getActiveInputValueFromForm('.gender-form');

    if (genderFormValue == 'all') {

        if (value == 'all') {
            return renderData(data);
        } else {
            return renderData(data.filter(item => {
                return item.difficulty === value;
            }));
        }

    } else {

        if (value == 'all') {
            return renderData(data.filter(item => {
                return item.gender === genderFormValue;
            }));
        } else {
            return renderData(data
                .filter(item => {
                    return item.difficulty === value;
                })
                .filter(item => {
                    return item.gender === genderFormValue;
                }));
        }

    }
    // })
}

function getActiveInputValueFromForm(formSelector) {
    const inputs = document.querySelectorAll(`${formSelector} input`);

    const activeInput = Array.from(inputs).find(input => {
        return input.checked;
    })

    return activeInput.value;
}

export {
    filterDataByDifficulty,
    filterDataByGender
}