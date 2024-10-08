import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
})
export class CardPlayerComponent {
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    cover: '',
    url: '',
  };
  @Input() mode: 'small' | 'big' = 'small';
  customImg: string = '';
}
