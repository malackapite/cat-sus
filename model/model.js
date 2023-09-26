import { KEPEKLISTA } from "./adat.js"

class Model{

    #keplista=[]
    #id

    constructor(){
        this.#keplista=KEPEKLISTA
        this.#id=0
    }

    jobb(){
        this.#id=this.#id+1>this.#keplista.length
        ?0
        :this.#id+1
    }

    bal(){
        this.#id=this.#id-1<0
        ?this.#keplista.length-1
        :this.#id-1
    }

    // get kepek(){
    //     return this.#keplista.slice()
    // }

    get id(){
        console.log(this.#keplista[this.#id]);
        return this.#keplista[this.#id]
    }
}

export default Model