import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { environment } from '@environments/environment.development';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`);
  }
}
