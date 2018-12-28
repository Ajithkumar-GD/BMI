import React from 'react';
import styled from 'styled-components';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
             Height : '',
             Weight:'',
             a:'',
             c:'',
        };
        this.height=this.height.bind(this);
        this.weight=this.weight.bind(this);
        this.reset=this.reset.bind(this);
        this.calculate=this.calculate.bind(this);
    }
    height(e)
    {
        this.setState({Height:e.target.value});
    }
    weight(e)
    {
        this.setState({Weight:e.target.value});
    }
    calculate(){
        let b= (this.state.Weight)/(((this.state.Height)%100)*2)
        this.setState({a:b});
    }
    reset(){
        console.log('hi');
         this.setState({Height:'',Weight:'',a:''});
    }
   render(){
   const Header = styled.div`
           text-align:center;
           margin-top: 35px;
           color: #333333;
           font-size:16px;
           font-weight:bold;
        `;
    const Text = styled.div`
           margin: 15px auto;
           font-size:13px;
           font-weight:bold;
     `;
    const Box = styled.div`
            display:inline-block;
            width:130px;
            height:30px;
            border:1px solid red;
            margin:auto;
            margin-top:80px;
            &.Adjust {
                margin-top:83px;
            }
            `;
    const Button = styled.button`
        margin-top:45px;
    `;
    let c;
    if(this.state.a==0){
        c="";
    }
    else if(this.state.a <= 0.5 ){
       c="underweight";
    }else if(this.state.a <=1){
        c="Normalweight";
    }else {
        c= "OBESE"
    }

     return(
         <div>
            <Header>BMI Healthy Weight Calculator <br/>{c}</Header>
            <div className="Page">
            <div className="InterPage">
                  <Text>Body Mass Index (BMI) = {this.state.a}</Text>
                  <div>
                  <Box>Height(cm)</Box>
                  <input  type='number' value={this.state.Height} onChange={this.height} />
                  </div>
                  <div>
                  <Box style={{marginTop :'25px'}} >Weight(kg)</Box>
                  <input type='number' value={this.state.Weight} onChange={this.weight}/>
                  </div>
                  <button onClick={this.calculate}>Submit</button>
                 <Button onClick={this.reset}>Reset</Button>
             </div>
            </div>
         </div>
        );
   }
}
export default App;