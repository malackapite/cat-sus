class KisKepView{
    
    #kep=new Array()
    #nth
    
    constructor(szuloElem, kep, nth){
        this.szuloElem=szuloElem
        this.#kep=kep
        this.#nth=nth
        this.#html()

        this.szuloElem.children("img:last-child").on("click",()=>{
            this.#esemenyLetrehozas()
        })
    }

    #html(){
        this.szuloElem.append(`<img class="smallSus" src="http://${this.#kep}" alt="cat sus">`)
    }

    #esemenyLetrehozas(){
        window.dispatchEvent(new CustomEvent("kivalaszt",{detail:this.#nth}))
    }
}

export default KisKepView