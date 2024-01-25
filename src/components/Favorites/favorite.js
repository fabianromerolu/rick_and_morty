import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card';


const Favorites = ({ favorites }) => {
return (
    <div>
      {favorites.map(
        ({ id, name, status, gender, species, origin, image, }) => {
          return (
            <div key={id}>
              <Card
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin }
                image={image}
              />
            </div>
            
          );
        }
      )}
    </div>
  )
}

// export default Favorites

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites
  }
};

export default connect(mapStateToProps,{})(Favorites);