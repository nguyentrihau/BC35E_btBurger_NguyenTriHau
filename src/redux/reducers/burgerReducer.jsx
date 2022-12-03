
const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },
    total: 85
}
export const burgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'TANG_GIAM_BURGER': {
            const updateBurger = {...state.burger};
            let totalUpdate = state.total;
            const menuBread = {...state.menu};
            if(state.burger[action.payload] < 2 && action.amount === -1 ){
                alert('cannot be less than 1')
                return {...state}
            }
            updateBurger[action.payload] += action.amount;
            console.log(action.amount);
            totalUpdate += action.amount * menuBread[action.payload];
            // totalUpdate += action.amount * menuBread[action.payload];
            return {...state,burger:updateBurger,total:totalUpdate}
        }
        default : return {...state}
    }
}