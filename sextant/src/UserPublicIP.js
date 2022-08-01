import React from 'react';

let url ="";
class UserPublicIP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ip:""};
    }
    
    

    componentDidMount() {
        if(this.props.type_of_IP ==='IPv6')
        {
          url = "https://api64.ipify.org?format=json";
          console.log("I am IPv6");
        }
        else
        {
            if(this.props.type_of_IP ==='IPv4')
            {
                console.log("I am IPv4");
                url = "https://api.ipify.org?format=json" ;
            } 
        }  
        console.log("Url: " + url);
        fetch(url)
        .then(response => response.json())
            .then(ip => {
                console.log(ip);
                this.setState({ip: ip});
            })
            .catch(error => console.log(error))
    }
    
   render(){
       return(
         <div className="card">   
           <div className="content">
                <h3>{this.props.type_of_IP}</h3>
                <p>{this.state.ip['ip']}</p>
           </div>
        </div>            
    );
}
}
export default UserPublicIP;