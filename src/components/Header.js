import React, { Component } from 'react'

class Header extends Component {
  formatDate = (date) => {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
  render() {
    const date  = this.formatDate(new Date())
   
    return (
      <div style = {
           headerStyle.header
      }>
        
        <p style = {headerStyle.task} >Tasks</p>
        <h4> { date } </h4>
      </div>
    )
  }
}
const headerStyle = {
  header:{
    backgroundColor: '#D90062',
    color: '#fff',
    height: '66px',
    paddingLeft: '20px',
    paddingRight:'20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: '5px solid rgba(255, 255, 255, 1)',
    width: '100%'
},
task:{
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  padding: '10px',
  paddingLeft: '30px',
  paddingRight: '30px',
  marginLeft: '10px',
  marginRight: '40px',
  borderRadius: '25px',
  display: 'flex',
  justifyContent: 'center'
},
logo:{
  backgroundColor: 'white',
  width: '45px',
  height: '45px',
}

}


export default  Header;