export interface ContactsGetModel {
  count: number
  perPage: number
  currentPage: number
  totalPages: number
  results: ContactsModel[]
}

export interface ContactsModel {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  createdAt: string
  updatedAt: string
  __v: string
}

export interface GetContactById {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface ContactFormModel {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface SnackBarProperties {
  status: boolean
  message: string
}
