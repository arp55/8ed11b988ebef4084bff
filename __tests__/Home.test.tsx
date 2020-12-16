import { shallow } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import Home from '../screens/Home'

const store=createMockStore()()

const createTestProps=()=>({
    navigation:{
        navigate:jest.fn()
    }
})

describe('Home screen', () => {
    describe('rendering', () => {
        const props=createTestProps();
        
        const wrapper=shallow(
            <Provider store={store}>
                <Home {...props} />
            </Provider>
        )

        it('should render the screen',()=>{
            expect(wrapper.find('.home-wrapper')).toHaveLength(0)
        })
    })
    
})
