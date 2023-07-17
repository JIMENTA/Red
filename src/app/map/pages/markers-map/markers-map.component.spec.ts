import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersMapComponent } from './markers-map.component';

describe('MarkersMapComponent', () => {
  let component: MarkersMapComponent;
  let fixture: ComponentFixture<MarkersMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkersMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
