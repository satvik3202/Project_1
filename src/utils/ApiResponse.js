class ApiResponse {
    constructor(statusCode, data, message="Success"){
        this.statusCode=statusCode;
        this.message=message
        this.success= statusCode <400     //statusCode has some ranges like 400-499 for client error message
    }
}
export {ApiResponse};