import PacketLatency from './PacketLatency';
import UserPublicIP from './UserPublicIP';

function Exhibit(){
return(
    <div className="container">
        <h1>Welcome to the our smart assistant, manage everything here!</h1>
        <div className="cards">
         <UserPublicIP type_of_IP = "IPv4"/>
         <UserPublicIP type_of_IP = "IPv6"/>   
         <PacketLatency />      
        </div>        
    </div>
)
};


export default Exhibit;