import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<'tr'>{}

export function TableRow(props:TableRowProps){
    return(
        <tr 
         className = {twMerge("border-b border-white/10", props.className)}{ ...props} />
        //unindo a classe q é passada para o componente
        //com as possíveis classes que podem existir dentro da props
         )
}
