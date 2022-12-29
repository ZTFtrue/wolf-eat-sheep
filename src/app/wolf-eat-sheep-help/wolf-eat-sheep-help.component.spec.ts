import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WolfEatSheepHelpComponent } from './wolf-eat-sheep-help.component';

describe('WolfEatSheepDialogComponent', () => {
  let component: WolfEatSheepHelpComponent;
  let fixture: ComponentFixture<WolfEatSheepHelpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WolfEatSheepHelpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfEatSheepHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
