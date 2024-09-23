import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib610Component } from './lib610.component';

describe('Lib610Component', () => {
  let component: Lib610Component;
  let fixture: ComponentFixture<Lib610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib610Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
