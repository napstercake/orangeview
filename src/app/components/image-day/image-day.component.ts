import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/service/core.service';
import { NotificationComponent } from '../../shared/notification/notification.component';


@Component({
  selector: 'app-image-day',
  templateUrl: './image-day.component.html',
  styleUrls: ['./image-day.component.css']
})
export class ImageDayComponent implements OnInit {

  constructor(
    private coreService :CoreService
  ) { 

    //let rt = 'HOOP!';
    //let notificationMessage = new NotificationComponent(rt);
    var notificationMessage = new NotificationComponent('titleHere');
  }

  ngOnInit() {
    /*this.coreService.getImageOfTheDay()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => console.log('some error here'),
        () => console.log('finished')
      );*/
  }

}
