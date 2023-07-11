
export default function Services(){

    return(
        
        <section id="services">
            <h2 className='sub-h center' style={{margin:0}}> Services </h2>
            <h5 className='sub-h center' id="greeny" style={{margin:0}}> by FinEdge. </h5>

            <div class="uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid style={{padding:'5% 7%'}}>
               
                <div id="s-1">
                    <div class="uk-card uk-card-body" style={{background:'black'}}>
                        <h3 id="whitish" style={{ fontWeight:'700',margin:0 }}> Free </h3>
                        <h5 style={{marginTop:'0.5%'}} id='greyish'> Best for Testing Use. </h5>
                        <h6 id="greyish"> <span id="greeny" style={{ fontSize:'2.5em', fontWeight:'bold'}}> ₹0 </span>/for life </h6>
                       
                        <hr />
                        <p style={{color:'white', fontWeight:'bold'}}> Features </p>

                        <ul style={{ listStyleType:'none', padding:0, color:'white' }}>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> 1k requests per month </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> 5 Concurrent requests </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> No Credit Card needed </li>
                        </ul>
                    </div>
                </div>

                <div id="s-2">
                    <div class="uk-card uk-card-body" style={{background:'black'}}>
                        <h3 id="basic" style={{ color:'#ffdbaa', fontWeight:'700',margin:0 }}> Basic </h3>
                        <h5 style={{marginTop:'0.5%'}} id='greyish'> Best for Personal Use. </h5>
                        <h6 id="greyish"> <span id="greeny" style={{ fontSize:'2.5em', fontWeight:'bold'}}> ₹599 </span> /per month </h6>

                        <hr />
                        <p style={{color:'white', fontWeight:'bold'}}> Features </p>

                        <ul style={{ listStyleType:'none', padding:0, color:'white' }}>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> All in Free </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> 5k requests per month </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> 50 Concurrent requests </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> Priority Support </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> Save 500 Customer Data </li>
                        </ul>
                    </div>
                </div>

                <div id="s-3">
                    <div class="uk-card uk-card-body" style={{background:'black'}}>
                        <h3 id="pro" style={{ fontWeight:'700',margin:0 }}> Premium </h3>
                        <h5 style={{marginTop:'0.5%'}} id='greyish'> Best for Businesses. </h5>
                        <h6 id="greyish"> <span id="greeny" style={{ fontSize:'2.5em', fontWeight:'bold'}}> ₹999 </span>/for life </h6>

                        <hr />
                        <p style={{color:'white', fontWeight:'bold'}}> Features </p>

                        <ul style={{ listStyleType:'none', padding:0, color:'white' }}>
                        <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> All in Free & Basic </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> 20k requests per month </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> 200 Concurrent requests </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> Save 5k Customer Data </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> Customer Integration </li>
                            <li> <span uk-icon='check' style={{paddingRight:'2%'}}/> Unique Customer Data </li>
                        </ul>
                    </div>
                </div>


             </div>

        </section>

    )

}