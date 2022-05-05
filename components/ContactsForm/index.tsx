import React, { FC } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../../yup/contactForm'
import { ContactFormModel, GetContactById } from '../../models'

interface ContactsFormComponentProps {
  onSubmit: (value: ContactFormModel, reset: () => void) => void
  submitText: string
  contact?: GetContactById
  disabled?: boolean
  wasDeleted?: boolean
}

export const ContactsFormComponent: FC<ContactsFormComponentProps> = ({
  onSubmit,
  submitText,
  contact,
  disabled,
  wasDeleted,
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
    <Box
      component="div"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
        <FormControl>
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            disabled={wasDeleted}
            id="first-name"
            label="First Name"
            variant="outlined"
            defaultValue={contact?.firstName || ''}
            {...register('firstName')}
          />
          <FormHelperText error>{errors?.firstName?.message}</FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            disabled={wasDeleted}
            id="last-name"
            label="Last Name"
            variant="outlined"
            defaultValue={contact?.lastName || ''}
            {...register('lastName')}
          />
          <FormHelperText error>{errors.lastName?.message}</FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            disabled={wasDeleted}
            id="email"
            label="Email"
            variant="outlined"
            defaultValue={contact?.email || ''}
            {...register('email')}
          />
          <FormHelperText error>{errors.email?.message}</FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            disabled={wasDeleted}
            id="phone"
            label="Phone"
            variant="outlined"
            defaultValue={contact?.phone || ''}
            {...register('phone')}
          />
          <FormHelperText error>{errors.phone?.message}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" disabled={wasDeleted}>
          {submitText}
        </Button>
      </form>
    </Box>
  )
}
