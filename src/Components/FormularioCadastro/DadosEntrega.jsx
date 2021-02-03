import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function DadosEntrega () {
  return (
    <form>

      <Typography variant="h6" component="h6" align="center">Dados de Entrega</Typography>

      <TextField
        id='cep'
        label='cep'
        type='number'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField
        id='endereco'
        label='endereço'
        type='text'
        variant='outlined'
        margin='normal'
        required
        fullWidth
      />
      <TextField
        id='numero'
        label='número'
        type='number'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField
        id='estado'
        label='estado'
        type='text'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField
        id='cidade'
        label='cidade'
        type='text'
        variant='outlined'
        margin='normal'
        required
      />

      <Button type='submit' variant='contained' color='primary' fullWidth>Finalizar Cadastro</Button>
    </form>
  );
}

export default DadosEntrega;