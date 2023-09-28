import KisKepView from "./kisKepView.js"

class KisKepekView{
    
    #kepek=new Array()
    
    constructor(szuloElem, kepek){
        this.szuloElem=szuloElem
        this.#kepek=kepek

        for (let ix = 0; ix < this.#kepek.length; ix++)
            new KisKepView(this.szuloElem, this.#kepek[ix],ix)
    }
}

export default KisKepekView