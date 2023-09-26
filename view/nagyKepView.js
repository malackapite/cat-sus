class NagyKepView{
    #kep
    constructor(szuloElem, kep){
        this.szuloElem=szuloElem
        this.#kep=kep

        this.#html()
        this.balGombElem=$("#balGomb")
        this.jobbGombElem=$("#jobbGomb")

        this.balGombElem.on("click",()=>{
            this.#esemenyLetrehozas("bal")
        })
        this.jobbGombElem.on("click",()=>{
            this.#esemenyLetrehozas("jobb")
        })
    }

    #html(){
        this.szuloElem.append(`<input id="balGomb" type="button" value="<">
        <div><img id="bigSus" src="http://${this.#kep}" alt="cat sus"></div>
        <input id="jobbGomb" type="button" value=">">`)
    }

    nagyKepBeallit(kep){
        $("#bigSus").attr({src:"http://"+kep})
    }

    #esemenyLetrehozas(nev){
        window.dispatchEvent(new CustomEvent(nev))
    }
}

export default NagyKepView