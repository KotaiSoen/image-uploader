import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private httpClient: HttpClient) { }

  getData(payload: Object) {
    return this.httpClient.post('http://localhost:3000/uploads', payload)
  }
  
}
