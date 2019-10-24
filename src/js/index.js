"use strict";
import axios from 'axios';



document.querySelector('.search').addEventListener('keypress', () => {
    if(event.keyCode ===13 || event.which === 13){
        controlSearch();
    }
});

class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        try {
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.query}`);
            this.result = res.data;
        }
        catch (e) {
            alert(`Query failed with event: ${e}`)
        }
    }
}

let controlSearch = async () =>{
    let q = new Search(getInput());
    await q.getResults();
    console.log(q.result);
};

let getInput = () => {
    return document.querySelector('.search').value;
};

controlSearch();