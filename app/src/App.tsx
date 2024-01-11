import './App.css';
import Navbar from './components/navbar';
import { Auth } from './components/auth';

export default function App() {

  return (
    <>
      <Navbar />
      <Auth />
      <div>
        <header className="text-3xl">Groove Grove</header>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris sed libero fringilla consequat. Nullam auctor diam sit amet velit fermentum, id blandit odio tincidunt. Quisque aliquet, elit nec malesuada dictum, nisi odio dictum tellus, ut vehicula ligula purus vel odio. Duis vel odio vel elit efficitur congue. Nullam vel sem et neque convallis tincidunt. Aliquam erat volutpat. Donec suscipit velit eu justo feugiat, vel dignissim odio vulputate.</p><br/>
        <p>Fusce auctor justo ac purus congue, a venenatis arcu tincidunt. Vivamus ultricies velit in luctus tincidunt. In id turpis at sapien sodales ultricies. Maecenas a neque ac mi euismod sodales. Pellentesque bibendum dolor a augue feugiat, vel accumsan sem lobortis. Sed efficitur, libero a tristique malesuada, lectus libero cursus tellus, eu facilisis risus sapien vitae ligula. Nulla facilisi. Duis elementum, justo et cursus ultrices, elit purus cursus elit, ut finibus elit purus quis lacus.</p><br/>
        <p>Integer sed justo in odio gravida bibendum a in turpis. Nam pellentesque, nunc ut fermentum lacinia, nisi libero luctus velit, id tincidunt eros tellus nec libero. Sed auctor sapien in nunc ullamcorper, id cursus odio bibendum. Aliquam pulvinar sapien a bibendum fermentum. Sed eu justo in sapien cursus ultricies. Sed id nisl vel odio condimentum tempor. Fusce euismod quam ut nulla efficitur dignissim. Nulla facilisi. Integer nec orci vel ante tristique tristique eget in nulla.</p>
      </div>
    </>
  )
}