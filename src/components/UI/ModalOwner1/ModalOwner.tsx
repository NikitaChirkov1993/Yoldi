import style from "./ModalOwner.module.css";
const ModalOwner = ({ children, visible, setVisible }) => {
    const rootModalOwner = [style.modalOwner];
    if (visible) {
        rootModalOwner.push(style.active)
    }

    return (
        <div className={rootModalOwner.join(' ')} onClick={()=> setVisible(false) }>
            <div className={style.modalOwner__content} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
     );
}

export default ModalOwner;