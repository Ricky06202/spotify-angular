import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTending: TrackModel[] = [];
  tracksRandom: TrackModel[] = [];

  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}
  ngOnInit(): void {
    const observer1$ = this.trackService
      .getAllTracks$()
      .subscribe((response) => {
        this.tracksTending = response.data;
        this.tracksRandom = response.data;
      });

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((observer) => observer.unsubscribe());
  }
}
