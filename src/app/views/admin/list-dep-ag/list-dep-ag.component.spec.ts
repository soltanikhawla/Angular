import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepAgComponent } from './list-dep-ag.component';

describe('ListDepAgComponent', () => {
  let component: ListDepAgComponent;
  let fixture: ComponentFixture<ListDepAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepAgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
