import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  Snackbar,
} from "@mui/material";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../yup/contactForm";
import { ContactForm, SnackBar } from "../../models";
import axios from "axios";
import { useState } from "react";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const About: NextPage<any> = () => {
  const [snackBar, setSnackBar] = useState<SnackBar>({
    status: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(contactSchema),
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar({
      status: false,
      message: "",
    });
  };

  const onSubmit = async (contact: ContactForm) => {
    const req = await axios
      .post(process.env.NEXT_PUBLIC_API!, contact)
      .then(function (response) {
        setSnackBar({ message: "New contact added", status: true });
        return response;
      })
      .catch(function (error) {
        setSnackBar({ message: error?.response?.data?.message, status: true });
        return error;
      });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      {snackBar.message && (
        <Snackbar
          open={snackBar.status}
          autoHideDuration={6000}
          message={snackBar.message}
          onClose={handleClose}
          action={action}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel htmlFor="first-name">First name</InputLabel>
          <Input
            id="first-name"
            {...register("firstName")}
            aria-describedby="my-helper-text"
          />
          <p>{errors.firstName?.message}</p>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="last-name">Last name</InputLabel>
          <Input
            id="last-name"
            {...register("lastName")}
            aria-describedby="my-helper-text"
          />
          <p>{errors.lastName?.message}</p>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            {...register("email")}
            aria-describedby="my-helper-text"
          />
          <p>{errors.email?.message}</p>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="phone">Phone</InputLabel>
          <Input
            id="phone"
            {...register("phone")}
            aria-describedby="my-helper-text"
          />
          <p>{errors.phone?.message}</p>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default About;
