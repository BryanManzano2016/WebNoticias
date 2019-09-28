import { TestBed } from '@angular/core/testing';

import { CargarPreNoticiasService } from './cargar-pre-noticias.service';

describe('CargarPreNoticiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargarPreNoticiasService = TestBed.get(CargarPreNoticiasService);
    expect(service).toBeTruthy();
  });
});
