import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    let username = localStorage.getItem("userid");
    console.log(username)
    this.userService.getUserMovies(username).subscribe(
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

  addPost() {
    let userid = localStorage.getItem("userid");
    this.movies.reverse();
    this.movies.push(new Movie('', '', '', '', userid || "", true));
    this.movies.reverse();
  }

  editPost(movie: Movie) {
    movie.isEditable = true;
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

  savePost(movie: Movie) {
    if(movie.id == '') {
      console.log("Hello");
      this.userService.createMovie(movie).subscribe(
        response => {
          movie.isEditable = false;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("Hello");
      this.userService.saveMovie(movie).subscribe(
        response => {
          movie.isEditable = false;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
