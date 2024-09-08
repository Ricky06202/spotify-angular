import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import * as dataRaw from '@data/tracks.json';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css',
})
export class PlayListBodyComponent {
  tracks: TrackModel[] = [];
  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }
}
