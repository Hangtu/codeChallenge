import React, { FC } from 'react'
import { Button, FormControl, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../../yup/contactForm'
import { ContactFormModel } from '../../models'

interface ContactsFormComponentProps {
  onSubmit: (value: ContactFormModel, reset: () => void) => void
  submitText: string
}

export const ContactsFormComponent: FC<ContactsFormComponentProps> = ({
  onSubmit,
  submitText,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormModel>({
    resolver: yupResolver(contactSchema),
  })

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <FormControl>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          {...register('firstName')}
        />
        <p>{errors.firstName?.message}</p>
      </FormControl>

      <FormControl>
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          {...register('lastName')}
        />
        <p>{errors.lastName?.message}</p>
      </FormControl>

      <FormControl>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
      </FormControl>

      <FormControl>
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          {...register('phone')}
        />
        <p>{errors.phone?.message}</p>
      </FormControl>

      <Button type="submit">{submitText}</Button>
    </form>
  )
}
