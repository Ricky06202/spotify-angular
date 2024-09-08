import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: any[],
    title: string | null = null,
    sort: string = 'asc'
  ): TrackModel[] {
    if (title === null) return value;
    else {
      const tempList = value.sort((a, b) => {
        if (a[title] < b[title]) return -1;
        else if (a[title] > b[title]) return 1;
        else return 0;
      });
      return sort === 'asc' ? tempList : tempList.reverse();
    }
  }
}
