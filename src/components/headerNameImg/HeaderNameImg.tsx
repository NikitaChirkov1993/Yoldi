import { log } from "console";
import style from "./styleHeaderNameImg.module.css"
import { join } from "path";

const HeaderNameImg = () => {

    function headerName() {
        const name = "Никита";
        const letter = name.split("")[0];
        return { name, letter }
    };
    const { name, letter } = headerName();

    return (
        <div className={style.header__info_right}>
            <p className={style.name}>{ name }</p>
            <div className={style.img}>
                <div className={style.imges}>{ letter }</div>
            </div>
        </div>
     );
}

export default HeaderNameImg;