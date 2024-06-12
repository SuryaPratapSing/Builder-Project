import './App.css';
import SideNav from './Components/SideNav';
import UpperNav from './Components/UpperNav';
import CourseInformation from './Components/CourseInformation';
import { Box } from '@mui/material';
import Theme1 from './Components/Theme1';
import Lesson from './Components/Lesson';

function App() {
  return (
    <>
    <UpperNav />
    <Box sx={{width:'100%', display:'flex'}}>
    <SideNav />
    <Box sx={{padding:'3vh' ,background:'#f5f5f5'}}>
      <CourseInformation />
      <Theme1 />
      <Lesson />
    </Box>
    </Box>
    
    </>
  );
}

export default App;
