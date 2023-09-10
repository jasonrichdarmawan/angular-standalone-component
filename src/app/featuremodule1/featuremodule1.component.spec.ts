import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuremodule1Component } from './featuremodule1.component';

describe('Featuremodule1Component', () => {
  let component: Featuremodule1Component;
  let fixture: ComponentFixture<Featuremodule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Featuremodule1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featuremodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
