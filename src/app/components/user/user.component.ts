import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveData();
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
