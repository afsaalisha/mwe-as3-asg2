import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tip3Page } from './tip3.page';

describe('Tip3Page', () => {
  let component: Tip3Page;
  let fixture: ComponentFixture<Tip3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tip3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
