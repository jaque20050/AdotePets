import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { userIndex } from '../data/hooks/pages/userindex'

const Home: NextPage = () => {

  const {

    ListaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar

  } = userIndex();

  return (
    <div >
      <Titulo titulo=""
        subtitulo={<span>
          Com um pequeno valor mensal, você <br />
          pode <strong> adotar um pet virtual </strong>
        </span>
        } />

      <Lista
        pets={ListaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog
        open={petSelecionado != null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Quantida Por Mês'}
              type={'number'}
              fullWidth
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button
            color={'secondary'}
            onClick={() => setPetSelecionado(null)}
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >
            Confimar Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
    </div>
  )
}

export default Home
