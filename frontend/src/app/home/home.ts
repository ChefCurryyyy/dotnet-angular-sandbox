import { Component, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { WeatherService, WeatherForecast} from '../services/weather';
import {of} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  weather = signal<WeatherForecast[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(private weatherService: WeatherService) {
    this.loadWeather();
  }

  loadWeather() {
    this.weatherService.getWeather().subscribe({
      next: data => {
        this.weather.set(data);
        this.isLoading.set(false);
      },
      error: err => {
        console.error('Error fetching weather', err);
        this.errorMessage.set('Could not fetch weather');
        this.isLoading.set(false);
      }
    })
  }

  protected readonly of = of;
}
