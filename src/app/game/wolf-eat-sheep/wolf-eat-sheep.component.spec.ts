import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfEatSheepComponent } from './wolf-eat-sheep.component';

describe('WolfEatSheepComponent', () => {
  let component: WolfEatSheepComponent;
  let fixture: ComponentFixture<WolfEatSheepComponent>;

  beforeEach(async(() => {
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
