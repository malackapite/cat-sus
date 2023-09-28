import Model from "../model/model.js"
import KisKepekView from "../view/kisKepekView.js"
import NagyKepView from "../view/nagyKepView.js"

class Controller{
    constructor(){

        const MODEL = new Model()
        const NAGYKEP = new NagyKepView($(".nagykep").eq(0), MODEL.kep)
        new KisKepekView($(".kiskep").eq(0), MODEL.kepek)
        $(window).on("bal", ()=>{
            MODEL.bal()
            NAGYKEP.nagyKepBeallit(MODEL.kep)
        })
        $(window).on("jobb", ()=>{
            MODEL.jobb()
            NAGYKEP.nagyKepBeallit(MODEL.kep)
        })
        $(window).on("kivalaszt", event=>{
            MODEL.id=event.detail
            NAGYKEP.nagyKepBeallit(MODEL.kep)
        })
    }
}

export default Controller