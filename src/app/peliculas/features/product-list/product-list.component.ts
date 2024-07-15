

import { Component, inject } from '@angular/core';
//import { PeliculasService } from '../data-access/peliculas.service';
//import { PeliculasService } from '../product-access/peliculas.service';

//@Component({
  //selector: 'app-product-list',
  //standalone: true,
  //imports: [],
  //templateUrl: './product-list.component.html',
  //styles: ``,
  //providers:[PeliculasService]
//})
//export default class ProductListComponent {
   // private peliculasService= inject(PeliculasService);
   // constructor(){
    //  this.PeliculasService.getPeliculas().subscribe((peliculas)=>{
     //   console.log(peliculas);
     // });
    //}
//}
///////////////////////////////////////////////////

//Parte sin inyectar nada  antes de agregar la pagina fake antes de crear base y modificar service
//import { Component, inject } from '@angular/core';   


@Component({
  selector: 'app-product-list',
 standalone: true,
 imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  
})
export default class ProductListComponent {}
