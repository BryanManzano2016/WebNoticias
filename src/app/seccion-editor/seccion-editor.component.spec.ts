import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEditorComponent } from './seccion-editor.component';

describe('SeccionEditorComponent', () => {
  let component: SeccionEditorComponent;
  let fixture: ComponentFixture<SeccionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
