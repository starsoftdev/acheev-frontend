



const ReviewView =  (props) => {

  const name = props.name

  return (
    <VerticalContentContainer>
      <Title>{name} Services</Title>
      <HorizontalContentContainer>
        {props.items.map(
          service=><Service key={service.id} name={name} service={service}
          />)}
      </HorizontalContentContainer>
    </VerticalContentContainer>
  )
}

export default ServiceView
