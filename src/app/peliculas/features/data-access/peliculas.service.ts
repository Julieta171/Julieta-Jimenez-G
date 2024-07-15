//metodos necesarios para consumir las peliculas

//import { Injectable } from "@angular/core";
//import { BaseHttpService } from './base-http.services';


//@Injectable()
//export class PeliculasService extends BaseHttpService {
   
   // getPeliculas(){
      //  return this.http.get('http://localhost:3000/peliculas');
    //}
//}

//Esto está bien hasta antes de agregar la extension  
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";



@Injectable()
export class PeliculasService{
  private http= inject(HttpClient);


    getPeliculas(){
        return this.http.get('http://localhost:3000/peliculas');
    }
}