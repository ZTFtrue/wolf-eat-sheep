import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WolfEatSheepComponent } from './wolf-eat-sheep.component';

describe('WolfEatSheepComponent', () => {
  let component: WolfEatSheepComponent;
  let fixture: ComponentFixture<WolfEatSheepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfEatSheepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfEatSheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
