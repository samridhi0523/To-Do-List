import { GiCoffeeCup } from "react-icons/gi";
import styles from "./welcome.module.css"
export default function WelcomeMess(){
    return<p className={styles.para}>
        Nothing to do today<br></br>
        Enjoy your day <GiCoffeeCup />
    </p>
}