import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CardDetailComponent } from './card-detail.component';
describe('CardDetailComponent', () => {
  let component: CardDetailComponent;
  let fixture: ComponentFixture<CardDetailComponent>;
  beforeEach(() => {
    const elementRefStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardDetailComponent],
      providers: [{ provide: ElementRef, useValue: elementRefStub }]
    });
    fixture = TestBed.createComponent(CardDetailComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('detailMode defaults to: false', () => {
    expect(component.detailMode).toEqual(false);
  });
});
