export declare class MySDK {
    private baseUrl;
    constructor(baseUrl: string);
    fetchData(endpoint: string): Promise<any>;
}
