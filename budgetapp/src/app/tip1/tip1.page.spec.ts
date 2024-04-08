import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tip1Page } from './tip1.page';

describe('Tip1Page', () => {
  let component: Tip1Page;
  let fixture: ComponentFixture<Tip1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
