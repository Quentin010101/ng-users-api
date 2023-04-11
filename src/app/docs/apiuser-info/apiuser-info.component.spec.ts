import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIUserInfoComponent } from './apiuser-info.component';

describe('APIUserInfoComponent', () => {
  let component: APIUserInfoComponent;
  let fixture: ComponentFixture<APIUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
