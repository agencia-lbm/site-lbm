import HeaderFilter from '../../components/HeaderFilter';
import Footer from '../../components/Footer';

import FilterProvider from '../../context/Filter';

import Filtro from './Filtro';
import Jobs from './Jobs';

export default function SobreNos() {
  return (
    <FilterProvider>
      <HeaderFilter />
      <Filtro />
      <Jobs />
      <Footer />
    </FilterProvider>
  );
}
