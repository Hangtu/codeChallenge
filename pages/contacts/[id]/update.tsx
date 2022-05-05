import { GetContactById, SnackBarProperties } from '../../../models'
import axios from 'axios'
import { FC, useState } from 'react'
import React from 'react'
import { ContactsFormComponent } from '../../../components/ContactsForm'
import { SnackBarComponent } from '../../../components/SnackBar'

interface DeleteContactPageProps {
  user: GetContactById
}

const DeleteContactPage: FC<DeleteContactPageProps> = ({ user }) => {
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

  const deleteContact = (): void => {
    console.log('Entro')
    axios
      .delete(`${process.env.NEXT_PUBLIC_API!}/${user.id}`)
      .then(function () {
        setSnackBar({ message: 'Contact Deleted', status: true })
      })
      .catch(function (error) {
        const err = error?.response?.data

        setSnackBar({ message: err.message, status: true })
      })
  }

  return (
    <>
      {snackBar?.message && (
        <SnackBarComponent
          payload={snackBar}
          handleClose={handleClose as never}
        />
      )}
      <ContactsFormComponent onSubmit={deleteContact} submitText={'Delete'} />
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

  console.log(data)

  return {
    props: {
      user: data,
    },
  }
}

export default DeleteContactPage
