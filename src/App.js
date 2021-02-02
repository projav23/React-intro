import './App.css';

function App(props) {
  console.log(props.list)
  return (
    <div>
      <Header titulo={props.title} />
      <Body description={props.description} lista={props.list}/>
      <Footer lista={props.list} />
    </div> 
    );
}

function Header(props) {
  return (
      <h1> {props.titulo}</h1>
  )
}

function Body(props){
  return (
  <p>{props.description}</p>,
  <List lista={props.lista} />
  )
}

function Footer(props){
  return(
  <List lista={props.lista} />
  )
}

function List(props){
  console.log(props.lista)
  return (
    <div>
      {props.lista.map(elem =>{
        return <li>{elem}</li>
      })}
  </div>
  )
}
export default App;
