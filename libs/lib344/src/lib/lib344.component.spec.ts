import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib344Component } from './lib344.component';

describe('Lib344Component', () => {
  let component: Lib344Component;
  let fixture: ComponentFixture<Lib344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib344Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
