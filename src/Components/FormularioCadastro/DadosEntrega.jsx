import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega ({ aoEnviar }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        aoEnviar({cep, endereco, numero, estado, cidade});
      }}
    >
      <TextField
        value={cep}
        onChange={e => setCep(e.target.value)}
        id='cep'
        label='cep'
        type='number'
        variant='outlined'
        margin='normal'
        // required
      />
      <TextField
        value={endereco}
        onChange={e => setEndereco(e.target.value)}
        id='endereco'
        label='endereço'
        type='text'
        variant='outlined'
        margin='normal'
        // required
        fullWidth
      />
      <TextField
        value={numero}
        onChange={e => setNumero(e.target.value)}
        id='numero'
        label='número'
        type='number'
        variant='outlined'
        margin='normal'
        // required
      />
      <TextField
        value={estado}
        onChange={e => setEstado(e.target.value)}
        id='estado'
        label='estado'
        type='text'
        variant='outlined'
        margin='normal'
        // required
      />
      <TextField
        value={cidade}
        onChange={e => setCidade(e.target.value)}
        id='cidade'
        label='cidade'
        type='text'
        variant='outlined'
        margin='normal'
        // required
      />

      <Button type='submit' variant='contained' color='primary' fullWidth>Finalizar Cadastro</Button>
    </form>
  );
}

export default DadosEntrega;