import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WolfEatSheepDialogComponent } from './wolf-eat-sheep-dialog.component';

describe('WolfEatSheepDialogComponent', () => {
  let component: WolfEatSheepDialogComponent;
  let fixture: ComponentFixture<WolfEatSheepDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfEatSheepDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfEatSheepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
