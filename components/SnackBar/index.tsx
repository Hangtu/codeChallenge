import React, { FC } from 'react'
import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SnackBarProperties } from '../../models'

interface SnackBarComponentProps {
  payload: SnackBarProperties
  handleClose: () => void
}

export const SnackBarComponent: FC<SnackBarComponentProps> = ({
  payload,
  handleClose,
}) => {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => handleClose()}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <Snackbar
      open={payload.status}
      autoHideDuration={6000}
      message={payload.message}
      onClose={() => handleClose()}
      action={action}
    />
  )
}
