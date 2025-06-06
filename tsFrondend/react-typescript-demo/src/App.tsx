import './App.css';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import ThemeContextProvidor from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import List from './components/generics/List';
import Greet from './components/Greet';
import Heading from './components/Heading';
import { CustomButton } from './components/html/Button';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import RandomNumber from './components/restriction/RandomNumber';
import User from './components/state/User';
import Status from './components/Status';
import Toast from './components/templateLiterals/Toast';

function App() {

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

// video 23 
{/* <CustomButton variant='primary'>Primary Button</CustomButton> */}

// video 22 
{/* <Toast position='left-top'/> */}

// video 21
{/* <RandomNumber value={10} isPosertive /> */}

// vedio 20 
      // <List 
      //   items={[1, 2, 3]} 
      //   onClick={(item) => console.log(item) }
      //   renderItem={(item) => <span>{item}</span>} />

// Video 19
{/* <Private isLoggedIn={true} Component={Profile}/> */}

// Video 15 
//  <UserContextProvider>
//         <User />
//       </UserContextProvider>

// video 14 
      // <ThemeContextProvidor>
      //   <Box/>
      // </ThemeContextProvidor>

// video 7
     {/* <Container styles={{border: "1px solid black", padding: "1rem"}} /> */}

//video 6
      // <Button handleClick={(event, id)=>{console.log("BUtton Clicked", event, id)}} />
      // <Input value="" handleChange={(event) => console.log(event)} />

// pre video 5 
  // const personName = {
  //   first: "bruce",
  //   last: "wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   }
  // ];

{/* <Greet name="James" messageCount={10} isLoggedIn={false}/>
<Person name={personName} />
<PersonList names={nameList} />
<Status status='loading'/>
<Oscar>
  <Heading> Oscar meets lenoardo devinchi</Heading>
</Oscar>
<Greet name="james" isLoggedIn={false}/> */}
