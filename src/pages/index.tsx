import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'

const Home: NextPage = () => {
  return (
    <div >
      <Titulo titulo=""
        subtitulo={<span>
          Com um pequeno valor mensal, você <br />
          pode <strong> adotar um pet virtual </strong>
        </span>
        } />

      <Lista 
        pets ={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'slksjklaksakslkasaklnsklams',
            foto: 'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/f4e/43b/69a8a856e89a899cdad228af45.jpg'
          },
          {
            id: 2,
            nome: 'Scoob',
            historia: 'slksjklaksakslkasaklnsklams',
            foto: 'https://i2.wp.com/www.clubedosbichos.com.br/wp-content/uploads/2020/12/caes-pequenos-peludos-yorkshire.jpg'
          }
        ]}
      />
    </div>
  )
}

export default Home
