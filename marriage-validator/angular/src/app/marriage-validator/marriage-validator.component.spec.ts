import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageValidatorComponent } from './marriage-validator.component';

describe('MarriageValidatorComponent', () => {
  let component: MarriageValidatorComponent;
  let fixture: ComponentFixture<MarriageValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageValidatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarriageValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
