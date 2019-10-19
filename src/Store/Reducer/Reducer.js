const initialState ={
    name:[{data:"Hello"}]
} 


const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'render':
            state.name = action.data;

            return{...state,name: action.data.concat()}
            break;
        case 'SendData' :
            return{...state}
            break;
        case 'delete':
        console.log(state.name);
        state.name.splice(action.index,1)
        return{
            ...state,
            name: state.name.concat()
        }

            
    }
}
export default Reducer