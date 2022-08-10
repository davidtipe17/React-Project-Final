import { config } from "./config";


export const searchTickets = async () => {  

    try {
    const response = await fetch(config.tickets);
        const data = await response.json();
        return data;

    } catch (error) {
        return error;
    }
}

export const searchUsers = async () => {  

    try {
    const response = await fetch(config.users);
        const data = await response.json();
        return data;

    } catch (error) {
        return error;

    }
}