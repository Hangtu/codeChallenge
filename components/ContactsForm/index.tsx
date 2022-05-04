import React, { FC } from 'react'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../../yup/contactForm'
import { ContactFormModel } from '../../models'

interface ContactsFormComponentProps {
  onSubmit: (value: ContactFormModel, reset: () => void) => void
}

export const ContactsFormComponent: FC<ContactsFormComponentProps> = ({
  onSubmit,
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
        <InputLabel htmlFor="first-name">First name</InputLabel>
        <Input
          id="first-name"
          {...register('firstName')}
          aria-describedby="my-helper-text"
        />
        <p>{errors.firstName?.message}</p>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="last-name">Last name</InputLabel>
        <Input
          id="last-name"
          {...register('lastName')}
          aria-describedby="my-helper-text"
        />
        <p>{errors.lastName?.message}</p>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          {...register('email')}
          aria-describedby="my-helper-text"
        />
        <p>{errors.email?.message}</p>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <Input
          id="phone"
          {...register('phone')}
          aria-describedby="my-helper-text"
        />
        <p>{errors.phone?.message}</p>
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  )
}
