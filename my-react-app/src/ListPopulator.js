function ListPopulator(props) {
  const listitems = props.listitems;

  return (
    <ul>
      {listitems.map((listitem) => (
        <li key={listitem.id}>{listitem.description}</li>
      ))}
    </ul>
  );
}

export default ListPopulator;
