import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, searchtype } from 'src/app/services/movie.service'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results:Observable<any>;
  searchTerm='';
  type:searchtype=searchtype.all;

  constructor(private movieservice:MovieService) { 

  }

  ngOnInit() {
  }
  SearchChanged(){
    this.results=this.movieservice.searchData(this.searchTerm,this.type);
  }
}
