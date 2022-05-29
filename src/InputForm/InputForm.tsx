import {useState, useEffect, useCallback} from "react";
import Button from '@mui/material/Button'
import {textFieldClasses} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
    );
}


interface InputFormProps {
    defaultValue?: string;
}

const storageFormKey = 'inputValue';

export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('Empty value')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !(displayError || !inputValue)

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('Username is too short')
            }

            if (messageLength > 20) {
                setErrorMessage('Username is too long')
            }

            setDisplayError(true)
        } else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
        }
    }, [inputValue])

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }

        setInputValue(valueToSet);
    }, [])

    return <div style={{display:"flex", flexDirection: "column"}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div style={{margin:"20px 0", color:"black"}}>User name:</div>
        <TextField id="filled-basic" onInput={handleInputChange} value={inputValue} type="text"/>
        <br/>
        <Button variant="contained" onClick={handleSubmit} disabled={!formReadyToSubmit}>Submit data</Button>
        <a href={"https://github.com/DagothKur/test-app"}>Link do repo</a>
    </div>
}