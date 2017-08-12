import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDayComponent } from './image-day.component';

describe('ImageDayComponent', () => {
  let component: ImageDayComponent;
  let fixture: ComponentFixture<ImageDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
