import React from 'react';
import styled from 'styled-components';

interface Props{
    onChangeProp?: (val: string) => void
    inputValue?: string
}

const Input: React.FC<Props> = (props) => {

    const { onChangeProp, inputValue } = props;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(value)
        if(onChangeProp){
            onChangeProp(value)
        }
    }

    return (
        <React.Fragment>
            <input 
                type="text" 
                placeholder="Send Message" 
                onChange={handleInputChange}
                value={inputValue} />
        </React.Fragment>
    )
}

export default Input