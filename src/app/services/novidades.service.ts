import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Novidades } from '../models/novidades';

@Injectable({
  providedIn: 'root'
})
export class NovidadesService {

  url = "http://localhost:3000/Produtos"

  constructor(private httpClient: HttpClient) { }

  getNovidades(): Observable<Novidades[]>{
    return this.httpClient.get<Novidades[]>(this.url)
  }
}
