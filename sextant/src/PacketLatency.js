import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');


class PacketLatency extends React.Component {
      constructor(props) {
        super(props);
        this.state = {timeStamp:"",hours:"",minutes:"",sec:""};
    }
 
    componentWillMount() {
        client.onopen = () => {
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
          //console.log(parseInt(message["data"]));
          var ts = new Date(parseInt(message["data"]));
          //console.log(ts.toLocaleTimeString());

          let currentDate = new Date();
          let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
          var curr = time.split(":");
          var currSec= Number(curr[0]) * 60 + Number(curr[1])*60 + Number(curr[2]);
          
          var ts_time = ts.toLocaleTimeString().split(":");
          var tsSec= Number(ts_time[0]) * 60 + Number(ts_time[1])*60 + Number(ts_time[2]);


          
          this.setState({sec: currSec-tsSec});

          
         // var date = new Date(parseInt(message["data"]));
         // console.log(date.getTime())
          this.setState({timeStamp: message["data"]});
          //console.log(this.state.timeStamp);          
        };
      }

      render() {
        return (
          <div className="card">   
          <div className="content">
               <h3>Packet Latency</h3>
        <p>{this.state.sec} seconds (TimeStamp : {this.state.timeStamp})</p>
          </div>
       </div>         
        );
      }
    }


export default PacketLatency;