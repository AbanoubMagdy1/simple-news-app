import { ChangeEvent, useState } from "react";

function useLocalStorage(key:string, value: string): [string, (evt: ChangeEvent<HTMLInputElement>) => void]{
    const [storedValue, setStoredValue] = useState(() => {
        return window.localStorage.getItem(key) || value;
    })

    function handleChange(evt: ChangeEvent<HTMLInputElement>){
        setStoredValue(evt.target.value)
        window.localStorage.setItem(key, evt.target.value)
    }

    return [storedValue, handleChange]
}

export default useLocalStorage;