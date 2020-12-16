import Axios from "axios";

const url='https://api.nasa.gov/neo/rest/v1/neo/'

export const http=Axios.create({
    baseURL:url
})