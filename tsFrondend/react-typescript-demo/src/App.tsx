
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import ThemeContextProvidor from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import User from './components/state/User';
import Status from './components/Status';

function App() {

  return (
    <div className="App">
     
    </div>
  );
}

export default App;

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
