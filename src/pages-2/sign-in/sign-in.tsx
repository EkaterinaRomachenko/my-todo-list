import React, { FC } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { SignInProps, INITIAL_STATE } from '../../shared-6/types/types';
import { InputField } from '../../shared-6/ui/InputFieild';
import { useForm } from 'react-hook-form';

type isLoggedInProps = {
  onEnter: () => void;
};

const SignIn: FC<isLoggedInProps> = ({ onEnter }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: INITIAL_STATE });

  const onSubmit = (data: SignInProps) => {
    if (data.username === 'ekaterinaromashchenko15@yandex.ru' && data.password === 'averina') {
      localStorage.setItem('loggedIn', 'true');
      onEnter();
    } else {
      return alert('Неправильный логин или пароль');
    }
    console.log(data);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{ color: 'var(--primary-color)', textTransform: 'uppercase' }}
      >
        my todo list
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <InputField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Логин"
            autoComplete="username"
            autoFocus
            {...register('username', { required: 'Это поле обязательно для заполнения' })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ''}
          />
          <InputField
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password', {
              required: 'Это поле обязательно для заполнения',
              minLength: { value: 6, message: 'Пароль должен содержать не менее 6 символов' },
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: 'var(--button-backgroundColor)',
              height: 50,
              borderRadius: '5px',
            }}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
