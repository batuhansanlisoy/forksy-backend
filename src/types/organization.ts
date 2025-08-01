export interface Organization {
    id?: number,
    name: string,
    owner_name: string,
    email: string,
    phone: string,
    adress: string,
    city: string,
    country?: string,
    password: string,
    subscription_type?: "free" | "basic" | "pro",
    is_active?: boolean,
    created_at?: Date,
    updated_at?: Date
}