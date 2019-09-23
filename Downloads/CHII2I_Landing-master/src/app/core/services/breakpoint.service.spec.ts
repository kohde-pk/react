import { TestBed } from '@angular/core/testing';
import { NgZone } from '@angular/core';
import { BreakpointService } from './breakpoint.service';
import { MBreakpointConfig } from 'src/app/shared/models/Breakpoint';
import { IBreakpointConfig } from 'src/app/shared/interfaces/IBreakpoint';

describe('BreakpointService', () => {
  let service: BreakpointService;
  let fetchedBreakpoint: IBreakpointConfig;
  const mBreakpointConfigStub = {};
  const ngZoneStub = { runOutsideAngular: () => ({}), run: () => ({}) };
  const breakpoints: IBreakpointConfig = new MBreakpointConfig();

  TestBed.configureTestingModule({
    providers: [
      BreakpointService,
      { provide: NgZone, useValue: ngZoneStub },
      { provide: MBreakpointConfig, useValue: mBreakpointConfigStub }
    ]
  });
  beforeEach(() => {
    spyOn(BreakpointService.prototype, 'setBreakpoints');
    spyOn(BreakpointService.prototype, 'getBreakpoints').and.returnValue(breakpoints);
    service = TestBed.get(BreakpointService);
    service.setBreakpoints(breakpoints);
    fetchedBreakpoint = BreakpointService.prototype.getBreakpoints();
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('tracks that the setBreakpoints was called', () => {
    expect(BreakpointService.prototype.setBreakpoints).toHaveBeenCalled();
  });

  it('should not affect other functions', () => {
    expect(fetchedBreakpoint).toEqual(breakpoints);
  });
});
