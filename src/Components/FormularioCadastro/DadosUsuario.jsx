import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';


function DadosUsuario ({aoEnviar}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={e => {setEmail(e.target.value)}}
        id='email'
        label='email'
        type='email'
        variant='outlined'
        margin='normal'
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={e => {setSenha(e.target.value)}}
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