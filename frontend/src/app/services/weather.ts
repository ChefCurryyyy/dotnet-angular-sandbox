import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiURL = 'http://localhost:5150/weatherforecast';

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.apiURL);
  }
}
