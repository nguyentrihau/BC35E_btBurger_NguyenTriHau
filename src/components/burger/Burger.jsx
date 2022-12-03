import React, { Component } from 'react'
import { connect } from 'react-redux'

class Burger extends Component {

    renderBreadMid = () => {
        const { burger } = this.props.burgerReducer;
        // console.log(burger);
        let content = [];
        for (const name in burger) {
            let breadMid = [];
            for (let i = 0; i < burger[name]; i++) {
                breadMid.push(<div key={i} className={name}></div>)
            }
            content.push(breadMid);
        }
        return content;
    }
    render() {
        return (
            <div>
                <h2 className='text-danger display-4'>Bài tập burger cybersoft</h2>
                <h3 className='text-danger display-5 '>Bánh burger của bạn</h3>
                <div className='breadTop'></div>
                {this.renderBreadMid()}
                <div className='breadBottom'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burgerReducer: state.burgerReducer
})

export default connect(mapStateToProps)(Burger)