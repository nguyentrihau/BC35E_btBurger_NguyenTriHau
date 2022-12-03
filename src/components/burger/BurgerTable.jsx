import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BurgerAction } from '../../redux/Action/BurgerAction';
class BurgerTable extends Component {
    renderTable = () => {
        const { menu,burger} = this.props.burgerReducer;
        let content = [];
        for (const name in burger) {
            // console.log(name);
                content.push(
                    <tr key={name}>
                        <td>{name}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>{
                                const action = BurgerAction(name,1);
                                this.props.dispatch(action);
                            }}>+</button>
                            <span> {burger[name]} </span>
                            <button className='btn btn-danger' onClick={()=>{
                                const action = BurgerAction(name,-1);
                                this.props.dispatch(action);
                            }}>-</button>
                        </td>
                        <td>{menu[name]}</td>
                        <td>{burger[name]*menu[name]}</td>
                    </tr>
                )
        }
        return content;
    }
    render() {
        return (
            <div className='mt-5 pt-4'>
                <h3 className='text-center text-danger'>Chọn thức ăn</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}></td>
                            <td>Tổng cộng</td>
                            <td>{this.props.burgerReducer.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burgerReducer: state.burgerReducer
})

export default connect(mapStateToProps)(BurgerTable)