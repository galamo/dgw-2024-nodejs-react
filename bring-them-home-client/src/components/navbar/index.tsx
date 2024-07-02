import MyHeader, { Colors } from "../header";
import BringThemHomeLogo from "../image";
import css from "./navbar.module.css"

export function Navbar() {
    return <div className={css.navBar}>
        <MyHeader text={"Bring Them Home"} color={Colors.Yellow} />
        <BringThemHomeLogo url="https://static1.squarespace.com/static/626b1d6da8041758967df200/t/638ac09290edf34f9411ff74/1651536985726/Flag.jpg?format=1500w" />
    </div>
}