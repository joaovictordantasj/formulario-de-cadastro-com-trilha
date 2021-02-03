import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';


function DadosUsuario ({aoEnviar}) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        aoEnviar();
      }}
    >
      <Typography variant="h6" component="h6" align="center">Dados de Usuário</Typography>
      <TextField
        id='email'
        label='email'
        type='email'
        variant='outlined'
        margin='normal'
        required
        fullWidth
      />
      <TextField
        id='senha'
        label='senha'
        type='password'
        variant='outlined'
        margin='normal'
        required
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>Próximo</Button>
    </form>
  );
}

export default DadosUsuario;