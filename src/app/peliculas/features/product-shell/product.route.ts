//Aquí se agregan las rutas directo a las peliculas

import { Routes } from "@angular/router";

export default[
{path:'', loadComponent:() => import('../product-list/product-list.component')
    
}
]as Routes;
