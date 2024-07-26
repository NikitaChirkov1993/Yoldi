import style from "./HeaderNameImg.module.css";

const HeaderNameImg = () => {

    function headerName1() {
        const name1 = "Никита";
        const letter1 = name1.split("")[0];
        return { name1, letter1 }
    };
    const { name1, letter1 } = headerName1();

    return (
        <div className={style.header__info_right}>
            <p className={style.name}>{ name1 }</p>
            <div className={style.img}>
                <div className={style.imges}>{ letter1 }</div>
            </div>
        </div>
     );
}

export default HeaderNameImg;