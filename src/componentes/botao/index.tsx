import React  from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{
    texto: string,
    type?: "button" | "submit" | "reset" | undefined
}> {
    render(): React.ReactNode {
        const {texto, type = "button"} = this.props;
        return(
            <button type={type} className={style.botao}>
                {texto}
            </button>
        )
    }
}

export default Botao;