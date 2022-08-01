const devices = ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5','Device 6'];

function Exhibit(){
return(
    <div className="container">
        <h1>Welcome to the our smart assistant, manage everything here!</h1>
        <div className="cards">
            {devices.map(device =>(
            <div class="card">   
                <div class="content">
                    <h3>{device}</h3>
                    <p>Card details goes here, we will put various parameters here</p>
                </div>
            </div>
            ))}
        </div>        
    </div>
)
};


export default Exhibit;