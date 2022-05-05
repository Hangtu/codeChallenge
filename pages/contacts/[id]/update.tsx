import {
  ContactFormModel,
  DeleteUpdateFormProperties,
  GetContactById,
  SnackBarProperties,
} from '../../../models'
import axios from 'axios'
import { FC, useState } from 'react'
import React from 'react'
import { ContactsFormComponent } from '../../../components/ContactsForm'
import { SnackBarComponent } from '../../../components/SnackBar'
import Head from 'next/head'

const UpdatePage: FC<DeleteUpdateFormProperties> = ({ contact }) => {
  const [snackBar, setSnackBar] = useState<SnackBarProperties>({
    status: false,
    message: '',
  })

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackBar({
      status: false,
      message: '',
    })
  }

  const updateContact = (contactUpdated: ContactFormModel): void => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API!}/${contact.id}`, contactUpdated)
      .then(function () {
        setSnackBar({ message: 'Contact Updated', status: true })
      })
      .catch(function (error) {
        const err = error?.response?.data

        setSnackBar({ message: err.message, status: true })
      })
  }

  return (
    <>
      <Head>
        <title>Update</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {snackBar?.message && (
        <SnackBarComponent
          payload={snackBar}
          handleClose={handleClose as never}
        />
      )}
      <ContactsFormComponent
        onSubmit={updateContact}
        submitText={'Update'}
        contact={contact}
      />
    </>
  )
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const router = context.query

  const data: GetContactById = await axios
    .get(`${process.env.NEXT_PUBLIC_API!}/${router.id}`)
    .then((response) => {
      return response.data
    })

  return {
    props: {
      contact: data,
    },
  }
}

export default UpdatePage
