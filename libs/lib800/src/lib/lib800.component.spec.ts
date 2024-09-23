import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib800Component } from './lib800.component';

describe('Lib800Component', () => {
  let component: Lib800Component;
  let fixture: ComponentFixture<Lib800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib800Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
