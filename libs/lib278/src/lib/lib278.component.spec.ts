import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib278Component } from './lib278.component';

describe('Lib278Component', () => {
  let component: Lib278Component;
  let fixture: ComponentFixture<Lib278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib278Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
