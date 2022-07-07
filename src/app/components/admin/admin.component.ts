import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  deletePost(movie: Movie) {
    this.userService.deleteMovie(movie).subscribe(
      response => {
        location.reload()
      },
      error => {
        console.log(error)
      }
    )
  }

  retrieveData() {
    this.userService.getAllMovies().subscribe(
      response => {
        let res = JSON.parse(JSON.stringify(response))
        console.log(res)
        for (let item of res) {
          let movie = new Movie(item.id, item.title, item.category, item.description, item.userid, false);
          this.movies.push(movie);
        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
