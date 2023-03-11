import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RethrowErrorComponent } from './rethrow-error.component';

describe('RethrowErrorComponent', () => {
  let component: RethrowErrorComponent;
  let fixture: ComponentFixture<RethrowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RethrowErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RethrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
