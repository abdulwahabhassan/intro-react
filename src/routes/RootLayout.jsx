import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';

function RootLayout() {
    return (<>
        <MainHeader />
        < Outlet /> {/*Tells React where to render the children/content of the Layout route */}
    </>)
}

export default RootLayout;