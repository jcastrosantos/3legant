import style from "./Title.module.css"

export function Title({children}){
    return <h4 className={style.h4}>{children}</h4>
}