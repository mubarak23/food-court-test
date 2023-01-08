export enum Role {
  Admin = 'admin',
  Customer = 'customer',
}

export interface IAuthenticate {
  readonly token: string;
}
