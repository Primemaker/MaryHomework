import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css'],
})
export class DeletemovieComponent implements OnInit {
  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}
  // functions for movies
  onGetMovies() {
    console.log('From on GetMovies');

    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onDeleteMovie(item) {
    this.dbService.deleteMovie(item._id).subscribe((result) => {
      // this.onGetMovies();
      this.router.navigate(['/listmovies']);
    });
  }

  ngOnInit(): void {
    this.onGetMovies();
  }
}
