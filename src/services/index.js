import { config } from "../services/config.js";

export const searchTickets = async () => {  

    try {
    const response = await fetch(config);
        const data = await response.json();
        return data;

    } catch (error) {
        return error;
    }
}