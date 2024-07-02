import { useState } from "react";
import MyImage from "../../../image";
import { SingleHostage } from "../service";
import css from "./card.module.css"

export function HostageCard(props: SingleHostage) {
    const [moreInfo, setMoreInfoOpen] = useState(false)
    return <div className={css.Card}>
        <h3 style={{ cursor: "pointer" }} onClick={() => setMoreInfoOpen(!moreInfo)} >{props.name}</h3>
        <h4 >{props.age}</h4>
        <MyImage url={props.image} />
        {moreInfo ? <div>I would like to see more info</div> : null}
    </div>
}