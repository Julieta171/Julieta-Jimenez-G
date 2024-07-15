import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path:'peliculas',
    loadChildren: () => 
        import('./peliculas/features/product-shell/product.route'),
},

//Se creó una ruta para tomar los componentes (peliculas y arroje en la página a las peliculas)
//está modularizado.
{
    path:'**',
    redirectTo:'peliculas',
}
];
// si las rutas fallan no se puede elegir