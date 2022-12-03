import React, { Component } from 'react'
import { connect } from 'react-redux'
import Burger from './Burger'
import BurgerTable from './BurgerTable'
import '../../assets/burger.css'

class ReactBurger extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center mt-2'>BÀI TẬP BURGER</h3>
        <div className='row'>
          <div className="col-7">
            <Burger />
          </div>
          <div className="col-5">
            <BurgerTable />
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
})


export default connect(mapStateToProps)(ReactBurger)