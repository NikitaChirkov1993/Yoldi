import style from "./styleMainAccount.module.css";

const MainAccount = () => {
    return (
        <main className={style.mainAccount}>
            <div className={style.block__imges}>
                <div className={style.block__img}></div>
            </div>
            <div className={style.mainAccount__container}>
                <h2 className={style.mainAccount__title}>Никита</h2>
                <div className={style.mainAccount__email}>123@gmail.com</div>
                <div className={style.mainAccount__text}>
                    Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент,
                    который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
                </div>
            </div>
        </main>
    );
};

export default MainAccount;
