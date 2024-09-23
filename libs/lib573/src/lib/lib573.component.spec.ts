import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib573Component } from './lib573.component';

describe('Lib573Component', () => {
  let component: Lib573Component;
  let fixture: ComponentFixture<Lib573Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib573Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
