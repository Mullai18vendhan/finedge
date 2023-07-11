
export default function About(){
    return(
        <section id="about">

            <h2 className='sub-h center'> About Us </h2>
            <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-2@l uk-text-center" data-uk-grid 
                style={{padding:'5% 7%'}}>
                    
                <div style={{paddingTop:'3%', textAlign:'left'}}>
                    <h2 className='sub-h' id='greeny' style={{margin:0,padding:0}}> Hello There! </h2>
                    <h4 style={{paddingTop:0, marginTop:'5%', textAlign:'left'}} id='blacky'>
                        <span style={{fontWeight:'700'}} id='greeny'> FinEdge </span> is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. 
                        Their vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
                    </h4>

                    <a href="#services">  <button>Our Services <span data-uk-icon="arrow-down"></span> </button>  </a> 
                </div>

                <div>
                    <img src='https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg' 
                        alt=''
                        style={{ width:'80%' }}
                    />
                </div>
            </div>

        </section>
    )
}