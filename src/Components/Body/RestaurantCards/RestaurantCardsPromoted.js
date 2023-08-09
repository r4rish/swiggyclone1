const withPromoted = (RestaurantCards) => {
   const  promote = (props) => {
      return (
       <>
        <label>Promoted</label>
        <RestaurantCards {...props}/></>
      )
    }
    return promote;
  }

  export default withPromoted;