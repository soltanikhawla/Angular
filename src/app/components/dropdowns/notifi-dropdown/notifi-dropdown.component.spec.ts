import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiDropdownComponent } from './notifi-dropdown.component';

describe('NotifiDropdownComponent', () => {
  let component: NotifiDropdownComponent;
  let fixture: ComponentFixture<NotifiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
