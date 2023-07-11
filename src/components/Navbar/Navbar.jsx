import './nav.css';
import pay from './pay.jpg';

export default function Navbar(){
    return(
        <div className="uk-preserve-color">

            <div data-uk-sticky="start: 170; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; end: !.uk-section-primary;">

                <nav className="uk-navbar-container">
                    <div className="uk-container uk-container-expand">
                        <div data-uk-navbar>
                            <div id="navbar">

                                <a href='.'>
                                <h1 id='brand'> 
                                    <img src='https://img.icons8.com/ios-filled/50/000000/wallet.png'/>
                                 FinEdge. </h1>
                                 </a>

                                <div id='web-menu'>
                                    <ul className="uk-navbar-nav">
                                        <li className="uk-active"><a href="#"> Home </a></li>
                                        <li className="uk-active"><a href="#about"> About </a></li>
                                        <li className="uk-active"><a href="#services"> Services</a></li>
                                        <li className="uk-active"><a href="#contact"> Contact</a></li>
                                    </ul>
                                </div>

                                <div id='menu'>
                                <button id='menu-btn' class="uk-button" type="button"> <span data-uk-icon='menu'/> </button>
                                    <div data-uk-dropdown="mode: click">
                                        <ul class="uk-nav uk-dropdown-nav">
                                        <li className="uk-active"><a href="#"> Home </a></li>
                                        <li className="uk-active"><a href="#about"> About </a></li>
                                        <li className="uk-active"><a href="#services"> Services</a></li>
                                        <li className="uk-active"><a href="#contact"> Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                


                            </div>
                        </div>
                    </div>
                </nav>
            </div>

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

        </div>
    )
}