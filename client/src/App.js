import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegistro from './Componentes/LoginRegistro';
import Error from './Componentes/Error';
import Inicio from './Componentes/Administrador/Inicio';
import imagenes from "./assets/img/logo.png"

const App = () => {
  return (
    <div className="mx-auto bg-[#f4e7ce]">
            <nav className='bg-[#ffe5b1] flex justify-between lg:justify-start items-center h-[70px]'>
                <div className='logo p-2 -m-10'>
                    <img src={imagenes} width="200" alt='nada'/>
                </div>
                <div className='links lg:block hidden w-100 md:w-100 ml-20'>
                    <ul className='menu flex items-center justify-start gap-10'>
                        <li><a href='#' className='link'>Inicio</a></li>
                        <li><a href='#' className='link'>Cursos</a></li>
                        <li><a href='#' className='link'>Insumos</a></li>
                        <li><a href='#' className='link'>Modelados</a></li>
                        <li><a href='#' className='link'>Quien soy</a></li>
                    </ul>
                </div>
            </nav>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Inicio/> } />
          <Route path="/login" exact render={() => <LoginRegistro/> } />
          <Route path="/error" render={() => <Error/> } />
          <Route path="*" render={() => <Error/> } />          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
