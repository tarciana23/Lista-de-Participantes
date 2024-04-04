import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

//Recebe todos os atributos da tag html button
interface IconButtonProps extends ComponentProps<'button'>{
    transparent?:boolean
    //essa interrogação significa: opcional
}

export function IconButton({transparent, ...props}:IconButtonProps){
    return(
        <button
            {...props}
            className={twMerge(
                'border border/white/10 rounded-md p-1.5',
                transparent ? 'bg-black/20' : 'bg-white/10',
                props.disabled ? 'opacity-50' : null
            )}
        />
    )
}