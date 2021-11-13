import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramsViewComponent } from './trams-view.component';

describe('TramsViewComponent', () => {
  let component: TramsViewComponent;
  let fixture: ComponentFixture<TramsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
