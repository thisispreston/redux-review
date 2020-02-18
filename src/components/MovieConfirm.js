import React from 'react'
import styles from './styles'
import { connect } from 'react-redux'

const MovieConfirm = props => {
  const confirmMovie = () => {
    props.history.push('/list')
  }

  console.log(props)

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${props.title} - ${props.westenscale}`}</p>
      <img src={props.poster} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { title, poster, westenscale } = state
  return {title, poster, westenscale}
}

export default connect(mapStateToProps)(MovieConfirm)
