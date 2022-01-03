import { useState } from 'react';
export const useSearcher = () => {

    const [value, setValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    
    const handleChange = (event: any ) => {
        setValue(event.target.value)
    }

    const handleOnSend = () => {
        setSearchValue(value)
    
    }

    return {
        handleChange,
        value,
        handleOnSend,
        searchValue
    }


}