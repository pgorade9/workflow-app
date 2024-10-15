import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { corrIdResponse } from './models.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  getCorrelationIds(): Observable<corrIdResponse>{
    console.log("I reached get corr function")
            const res:Observable<corrIdResponse>= this.httpClient.get<corrIdResponse>('http://workflow-monitor:80/get-corrIds');
            return res;
        }

        getResponse() {return this.httpClient.request('GET', 'http://workflow-monitor:80');}
}
