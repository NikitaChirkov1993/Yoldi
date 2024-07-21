import { FC, ReactNode } from 'react';

import style from "./ButtonHeader.module.css"

 export interface IFormFieldProps {
     children: string ;
  }

const ButtonHeader: FC<IFormFieldProps> = ({children,...props}) => {
    return (
        <button {...props} className={style.btn}>
            {children}
        </button>
     );
}

export default ButtonHeader;