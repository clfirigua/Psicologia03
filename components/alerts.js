import { deleteData } from "../services/crudservice.js"

//eliminar datos
const notConfirmar = (reference, id, collection) =>{

    Swal.fire({
        title: "Eliminar",
        text:`¿Esta seguro de eliminar la informacion referenciada? ${reference}`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            deleteData(id,collection)
            swal("Good job!", "You clicked the button!", "success");
        } else if (result.isDenied) {
            
        }
      })

    
}
export{
    notConfirmar
}