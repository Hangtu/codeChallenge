import type { NextPage } from 'next'
import { ContactFormModel, SnackBarProperties } from '../../models'
import axios from 'axios'
import { FC, useState } from 'react'
import React from 'react'

import ContactsFormComponent from '../../components/ContactsForm'
import { SnackBarComponent } from '../../components/SnackBar'
import Head from 'next/head'

const Create: FC<NextPage> = () => {
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

  const createContact = (
    contact: ContactFormModel,
    reset: () => void
  ): void => {
    axios
      .post(process.env.NEXT_PUBLIC_API!, contact)
      .then(function () {
        setSnackBar({ message: 'New contact added', status: true })
        reset()
      })
      .catch(function (error) {
        const err = error?.response?.data
        if (err?.data?.errors?.phone) {
          setSnackBar({ message: err.data?.errors.phone[0], status: true })
        } else {
          setSnackBar({ message: err.message, status: true })
        }
      })
  }

  return (
    <>
      <Head>
        <title>Create</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {snackBar?.message && (
        <SnackBarComponent
          payload={snackBar}
          handleClose={handleClose as never}
        />
      )}
      <ContactsFormComponent onSubmit={createContact} submitText={'Create'} />
    </>
  )
}

export default Create
