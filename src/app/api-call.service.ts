import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
//you need to have signedup for api call 
// link https://www.apixu.com/my/#
  constructor(private httpClient:HttpClient) { 
  }
  getWeather(loaction){
    return this.httpClient.get('https://api.apixu.com/v1/current.json?key=e57a3ec662af42da9a155332190908&q=Paris + location')

  }
}
