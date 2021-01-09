import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {

  information=null;
  constructor(private activatedRoute:ActivatedRoute,private movieService:MovieService) { 


  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe(result=>{
      console.log('details: ',result);
      this.information=result;
    })
  }
  OpenWebsite(){
    window.open(this.information.Website,'_blank');
  }

}
