export interface SubscribeRequest {
  firstName: string;
  lastName: string;
  patronymic?: string | undefined;
  phone: string;
  city?: string | undefined;
}
export interface SubscribeResponse {
  code: string;
}
