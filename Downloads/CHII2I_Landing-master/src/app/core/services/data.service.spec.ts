import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { DataService } from './data.service';
describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    const httpClientStub = { get: () => ({ toPromise: () => ({}) }) };
    const papaStub = {};
    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: HttpClient, useValue: httpClientStub },
        { provide: Papa, useValue: papaStub }
      ]
    });
    service = TestBed.get(DataService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getLommCardStyles', () => {
    // it('makes expected calls', () => {
    //   const httpClientStub: HttpClient = TestBed.get(HttpClient);
    //   spyOn(httpClientStub, 'get');
    //   service.getLommCardStyles();
    //   expect(httpClientStub.get).toHaveBeenCalled();
    // });
  });
});
