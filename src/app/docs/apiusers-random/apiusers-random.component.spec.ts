import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIUsersRandomComponent } from './apiusers-random.component';

describe('APIUsersRandomComponent', () => {
  let component: APIUsersRandomComponent;
  let fixture: ComponentFixture<APIUsersRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIUsersRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIUsersRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
