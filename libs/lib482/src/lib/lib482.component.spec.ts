import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib482Component } from './lib482.component';

describe('Lib482Component', () => {
  let component: Lib482Component;
  let fixture: ComponentFixture<Lib482Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib482Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
