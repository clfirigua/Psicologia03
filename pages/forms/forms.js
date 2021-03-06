import {menu} from "../../shared/menu.js"
import { addData,onGetData,deleteData, getData, updateData } from "../../services/crudservice.js";
import {validarSession} from "../../components/validador.js"

const btnModal = document.getElementById("btnModalSiguiente");
const nameForm = document.getElementById("nombreFormulario");

validarSession()
menu()

btnModal.addEventListener("click", async (e)=>{
    e.preventDefault();
    let data =  await addData({
        nombre:nameForm.value,
        preguntas:[],
        varemoMedicion:[],
    },"formularios");
    if(data.id){
        localStorage.setItem("idForm",data.id);
        window.location="../newForm/newForm.html";
    }

})