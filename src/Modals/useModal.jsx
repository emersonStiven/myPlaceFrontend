import {useState} from "react";

export const useModal = (initialState = false) =>{

    const[isOpen, setOpen] = useState(initialState)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return [isOpen, openModal, closeModal]
}