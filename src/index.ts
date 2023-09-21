import axios from "axios";

export async function fetchData(
    baseUrl: string,
    endpoint: string,
): Promise<any> {
    const url = `${baseUrl}/${endpoint}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
}
