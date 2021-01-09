import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { encode } from 'punycode';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


export enum searchtype{
  all='',
  movie='movie',
  episode='episode',
  series='series',
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) {}

  searchData(title:string,searchType:searchtype):Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?s=${encodeURI(title)}&type=${searchType}&apikey=b3990168`).pipe(
      map(results=>{
        console.log("RAW:",results);
        return results['Search'];
      })

    );
  }

  getDetails(id){
    return this.http.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=b3990168`);
  }

}
