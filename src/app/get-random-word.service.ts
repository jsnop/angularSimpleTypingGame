import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRandomWordService {

  constructor(private http: HttpClient) { }

  getRandomWord(): Observable<string> {
    return this.http.get<string>("https://random-word-api.herokuapp.com//word?number=1");
  }
}
