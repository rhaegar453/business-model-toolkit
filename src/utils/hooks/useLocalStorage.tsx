import  { useState } from 'react';


const useLocalStorage=(key:string, initialValue:any)=>{
    const [storedValue, setStoredValue]=useState(()=>{
        try{
            const item=localStorage.getItem(key);
            return item?JSON.parse(item):initialValue;
        }
        catch(err){
            return initialValue
        }
    });

    const setValue=(value:any)=>{
        try{
            const valueToStore= value instanceof Function? value(storedValue):value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        }
        catch(err){
            console.warn(err);
        }
    }
    return [storedValue, setValue];
}

export default useLocalStorage;