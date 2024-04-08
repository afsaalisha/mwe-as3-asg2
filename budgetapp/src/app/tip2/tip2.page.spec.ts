import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tip2Page } from './tip2.page';

describe('Tip2Page', () => {
  let component: Tip2Page;
  let fixture: ComponentFixture<Tip2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
