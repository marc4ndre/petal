import { ProcessStatus } from '../enum/process-status.enum';
// import { ApiError } from './api-error.model';

export interface ProcessInterface {
  error: null | { };
  entity: null | string;
  action: null | string;
  status: ProcessStatus;
}
