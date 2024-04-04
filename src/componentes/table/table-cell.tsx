import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<'td'>{}

export function TableCell(props:TableCellProps){
    return(
        <td 
         className = {twMerge("py-3 px-4 text-sm  text-zinc-300", props.className)}{ ...props} />
        //unindo a classe q é passada para o componente
        //com as possíveis classes que podem existir dentro da props
         )
}
