import Model from "../model/model.js"
import NagyKepView from "../view/nagyKepView.js"

class Controller{
    constructor(){

        const MODEL = new Model()
        const NAGYKEP = new NagyKepView($(".nagykep").eq(0), MODEL.id)
        $(window).on("bal", ()=>{
            MODEL.bal()
            console.log(MODEL.id);
            NAGYKEP.nagyKepBeallit(MODEL.id)
        })
        $(window).on("jobb", ()=>{
            MODEL.jobb()
            console.log(MODEL.id);
            NAGYKEP.nagyKepBeallit(MODEL.id)
        })
    }
}

export default Controller