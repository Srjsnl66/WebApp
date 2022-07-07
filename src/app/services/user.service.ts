import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllMovies() {
    return this.webService.get('/api/movies');
  }

  getUserMovies(username: string | null) {
    return this.webService.get(`/api/movie/${username}`)
  }

  constructor(private webService: WebService) { }

  saveMovie(movie: any) {
    return this.webService.put('/api/movies', movie);
  }

  createMovie(movie: any) {
    return this.webService.post('/api/movies', movie);
  }

  deleteMovie(movie: any) {
    return this.webService.delete(`/api/movie/${movie.id}`);
  }
}
