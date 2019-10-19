import Firebase from '../../Config/firebase/firebase'

const setData = (data) =>{
    return dispatch => {
        Firebase.firestore().collection("Value").doc().set(data);
        dispatch({
            type:'SendData'
        })
    }
}

const renderData = () =>{
    return dispatch =>{
        let array=[]
        Firebase.firestore().collection('Value').get()
        .then(res =>{
            res.forEach(val=>{
                let value = val.data()
                let obj = {
                    id:val.id,
                    value:value.data
                }
                console.log(obj);
                array.push(obj)
                dispatch({
                    type:'render',data:array,
                })
            })
        })
    }
}

const deleteData = (i,id)=>{
    return dispatch=>{
        Firebase.firestore().collection('Value').doc(id).delete();
        dispatch({
            type:'delete',index:i
        })
    }
}

export {
    setData,
    renderData,
    deleteData
}