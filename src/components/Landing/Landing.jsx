import './nav.css';
import pay from './pay.jpg';

export default function Landing(){
    return(

            <div id='landing' className="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-2@l" data-uk-grid>

                <div id='land-left'>

                    <p style={{margin:0,color:'black', marginTop:'2%'}}> A simple payment solution for everyone <span style={{color:'green'}} data-uk-icon="heart"></span>.</p>

                    <h1 style={{marginTop:'2%', fontWeight:'600'}} className='land-h1'>
                         Make payments <br/> easier with 
                         <span style={{color:'#73F343'}}> FinEdge. </span> 
                    </h1>
                    
                    <p style={{ display:'flex', gap:'10px' }}>

                        <button style={{ display:'flex', gap:'10px', alignItems:'center' }}>
                            <span data-uk-icon="apple"></span>
                             <p style={{ textAlign:'left', margin:0 }}> <span style={{color:'grey'}}> Get on </span>
                                <br/> <span style={{ whiteSpace:'nowrap'}} > App Store  </span> 
                            </p> 
                        </button>

                        <button style={{ display:'flex', gap:'10px', alignItems:'center' }}>
                            <span data-uk-icon="android"></span>
                             <p style={{ textAlign:'left', margin:0 }}> <span style={{color:'grey'}}> Get on </span>
                                <br/> <span style={{ whiteSpace:'nowrap'}} > Play Store  </span> 
                            </p> 
                        </button>

                    </p>

                </div> 
                
                <div id='land-right'>
                    <img src={pay} alt='' />
                </div>
               
            </div>

    )
}