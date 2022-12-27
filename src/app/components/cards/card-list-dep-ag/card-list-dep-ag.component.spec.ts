import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListDepAgComponent } from './card-list-dep-ag.component';

describe('CardListDepAgComponent', () => {
  let component: CardListDepAgComponent;
  let fixture: ComponentFixture<CardListDepAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListDepAgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListDepAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
