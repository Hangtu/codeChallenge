export interface ContactsGet {
    count: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    results: Contacts[];
}

export interface Contacts {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
    id: string;
}

export interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface SnackBar {
  status: boolean;
  message: string;
}