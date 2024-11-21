import {Button} from "@mui/material";

export const TestLogin =  () => {

    const username = "string"
    const password = "string"
    const longin = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        });
        console.log(response.ok)
    }
    return(<Button onClick={() =>longin()}>TEST THAT SHIT</Button>)
}