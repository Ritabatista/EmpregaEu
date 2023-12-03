//importando axios
import axios from "axios";

//criar Apis personalizadas com AXIOS, create recebe pelo menos um objeto
//nesse caso o baseURL, é caminho que axios vai utilizar para buscar os dados 

const vagasAPI = axios.create({ baseURL: "http://localhost:8000/vagas/" });

async function getVagas(){
    //pegar todas vagas cadastradas na base

    const response = await vagasAPI.get('/')

    return response.data
}

//
export{
    getVagas
}