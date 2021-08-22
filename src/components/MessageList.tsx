import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props{}

const Button: React.FC<Props> = () => {

    useEffect(() => {
        handleFetchMessages()
        return function cleanup() {
        }
    }, [])

    const handleFetchMessages = () => {
        
    }

    return (
        <React.Fragment>
                         
        </React.Fragment>
    )
}

export default Button