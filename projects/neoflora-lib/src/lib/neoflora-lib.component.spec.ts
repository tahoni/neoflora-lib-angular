import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeofloraLibComponent } from './neoflora-lib.component';

describe('NeofloraLibComponent', () => {
  let component: NeofloraLibComponent;
  let fixture: ComponentFixture<NeofloraLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeofloraLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeofloraLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
