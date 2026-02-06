
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inscription from './components/Inscription.jsx'
import LirePlus from './pages/LirePlus.jsx'
import HomeLayout from './components/layout/HomeLayout.jsx'
import HeaderTop from './components/layout/HeaderTop.jsx'
import HeaderBottom from './components/layout/HeaderBottom.jsx'
import FooterBottom from './components/layout/FooterBottom.jsx'
import FooterTop from './components/layout/FooterTop.jsx'
import Dashboard from './pages/Dashboard'
import ContentLayout from './components/layout/ContentLayout/ContentLayout.jsx'
import WorkersRequestForm from './components/layout/ContentLayout/WorkersRequestForm/WorkersRequestForm.jsx'
import MaterialsRequestForm from './components/layout/ContentLayout/MaterialsRequestForm/MaterialsRequestForm.jsx'
import HomePage from './pages/HomePage';


const App = () => {
	const root= createBrowserRouter(
	
	  [
		{
		  path: '/',
		  element: <HomeLayout header={<> <HeaderTop/>< HeaderBottom/>  </>} footer={<> <FooterTop/>< FooterBottom/>  </>} >
	
			<Home/>
			
			</HomeLayout >,
		},
		{
		  path: '/inscription',
		  element: <HomeLayout header={<HeaderTop/>} footer={<FooterBottom/>}><Inscription /></HomeLayout>,
		},
		{
		  path: '/lire_plus',
		  element: <LirePlus />,
		},
		 {
		  path:"/dashboard",
		  element:  <ContentLayout> <Dashboard/> </ContentLayout>,
		 },
		 {
			path:"/homepage",
			element:  <HomePage/> ,
		   },
		 {
			path: '/workers_request_form',
			element:  <ContentLayout> <WorkersRequestForm/> </ContentLayout>,
         },
		 {
			path: '/materials_request_form',
			element:  <ContentLayout> <MaterialsRequestForm/> </ContentLayout>,
         }
		
		
	  ]
	)

  return (
    <>
	<RouterProvider router={ root } />
      {/* <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          <Profil />
        </div>
      </div> */}

      
    </>
  );
};

export default App;
