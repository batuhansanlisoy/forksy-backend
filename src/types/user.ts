export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string; // hashed olacak
  organization_id?: number;
  created_at?: Date;
  updated_at?: Date;
}
