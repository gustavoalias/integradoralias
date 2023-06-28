export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => window.alert(props.characterID)}>Agregar</button>
      </div>
   );
}
