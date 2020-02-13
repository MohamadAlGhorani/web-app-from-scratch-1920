import "../css/styles.css";
import "babel-polyfill";
import {
    router
} from "./routie"
import {
    runApi
} from "./api"

runApi()
router.init()