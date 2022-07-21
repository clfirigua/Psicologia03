import { roles } from "../components/checks.js";
import { getData } from "../services/crudservice.js";
const listaDatos = document.getElementById('listaDatos')




const menu = async(arr) =>{

    const userLocal = JSON.parse(localStorage.getItem('user'));
    const valores = await getData(userLocal.rol, 'roles');
    let a = []
    Object.entries(valores.data()).forEach((data)=>{

        for (let i = 0; i < roles.length; i++) {
            if(data[0] ==  roles[i].slug && data[1] == true ){
                a.push(roles[i]);
                
            //     $(listaDatos).append(`
            //     <li class="nav-item m-3 text-capitalize">
            //         <a class="nav-link " aria-current="page" href="${roles[i].ruta}">${roles[i].texto}</a>
            //     </li>
            // `)
            }
        }
    })
    a = roles.sort((a, b) => a.slug.localeCompare(b.slug))
    console.log(a)
    Object.entries(valores.data()).forEach((data)=>{
        
        for (let i = 0; i < a.length; i++) {
            if(a[i].slug==data[0] && data[1] == true ){                
                console.log(data[0]," ",data[1], " ",roles)
                $(listaDatos).append(`
                <li class="nav-item m-3 text-capitalize">
                    <a class="nav-link " aria-current="page" href="${a[i].ruta}">${a[i].texto}</a>
                </li>
            `)
            }
        }
    })
}

export{
    menu
}
