import "../css/styles.css";
import "babel-polyfill";
import {
    router
} from "./routie"

router.init();

(function () {
    if (!window.location.href.includes('#')) window.location = '/#home'

    document.querySelector('.arrow').addEventListener('click', () => {
        document.querySelector('#form').scrollIntoView({
            behavior: 'smooth'
        });
    });
})()