export interface Student {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    createdAt: string,
    updatedAt: string
}

export interface Course {
    id: number,
    name: string,
    capacity: number,
    code: string,
    createdAt: string,
    updatedAt: string
}