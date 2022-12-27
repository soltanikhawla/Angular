import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUpdateDepecheComponent } from './card-update-depeche.component';

describe('CardUpdateDepecheComponent', () => {
  let component: CardUpdateDepecheComponent;
  let fixture: ComponentFixture<CardUpdateDepecheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUpdateDepecheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUpdateDepecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
