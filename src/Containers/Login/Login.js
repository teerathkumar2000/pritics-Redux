import React from 'react'
import firebase from '../../Config/firebase/firebase'
import {connect} from 'react-redux'
import {setData,renderData,deleteData} from '../../Store/Action/Action'

class Login extends React.Component{
  constructor(){
    super();
    this.state={
      value:'',
    }
  }
  componentDidMount(){
    this.props.renderData()
  }

  btn = ()=>{
    let obj = {
      data:this.state.value
    }
    this.props.setData(obj)
  }
  render(){
    return(
      <div>
        <h1>Firebase Project</h1>
        <input type='text' onChange={(e)=>this.setState({value:e.target.value})} />
        <button onClick={()=>this.btn()}>Submit</button>

      <ul>
        {this.props.array ? this.props.array.map((val,i)=>{
          return <li key={i}>{val.value}<button onClick={()=>this.props.deleteData(i,val.id)}>Delete</button></li>
        }):'Here is Empty value'}
      </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state.name)
  return{
    array:state.name
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      setData : (data) => dispatch(setData(data)),
      renderData : () => dispatch(renderData()),
      deleteData: (i,id) => dispatch(deleteData(i,id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
