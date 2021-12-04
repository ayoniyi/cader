const Container = (props) => {
  return (
    <div className="container">
      <div className="containerContent">{props.children}</div>
    </div>
  )
}

export default Container
