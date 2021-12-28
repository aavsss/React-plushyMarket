import axios from "axios";

const fetchPlushies = async() => {
    const { data } = await axios.get('http://localhost:8080/api/v1/plushy');   
    return data;
};

export default fetchPlushies;