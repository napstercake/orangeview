import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/service/core.service';
import { NotificationComponent } from '../../shared/notification/notification.component';

@Component({
  selector: 'app-image-day',
  templateUrl: './image-day.component.html',
  styleUrls: ['./image-day.component.css']
})
export class ImageDayComponent implements OnInit {

  private photos = [];

  constructor(
    private coreService :CoreService
  ) { 
    console.log('some info around here!')
  }

  ngOnInit() {
    this.coreService.getImageOfTheDay().subscribe(
      (data) => this.photos = data.photos
    );
    
  }

}
