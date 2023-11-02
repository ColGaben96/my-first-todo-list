import data from './data.json';
import {useEffect, useState} from "react";

export function useLocalTempData(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
     setTimeout(() => {
         try {
             setItem(data);
             setLoading(false);
         } catch (error) {
             setError(error);
             setLoading(false);
         }
     }, 1000);
    });
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    return {
        item,
        saveItem,
        loading,
        error
    };
}