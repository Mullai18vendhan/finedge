import wallet from './wallet50.png';

export default function Footer(){

    return(
        <section id="footer">

            <div data-uk-grid style={{ padding:'5%' }}>

                <div className="uk-width-1-3@m">
                    <h1 id="greeny" style={{fontWeight:'bold', margin:0}}> 
                        <img src={wallet} alt='' style={{paddingRight:'1%'}}/>
                        FinEdge. <br />
                    </h1>
                    <p style={{fontSize:'0.8em', marginTop:0}}> &copy; since 2023. All rights reserved </p>
                    <p>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. 
                    </p>
                </div>

                <div className="uk-width-expand@m">
                <div class="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
                    

                    <div>
                        <h4 id="greyish" style={{fontWeight:700}}> Product </h4>
                        <ul class="uk-list">
                            <li id="whitish"> Overview </li>
                            <li id="whitish"> Features </li>
                            <li id="whitish"> Solutions </li>
                            <li id="whitish"> Pricing </li>
                        </ul>
                    </div>

                    <div>
                        <h4 id="greyish" style={{fontWeight:700}}> Company </h4>
                        <ul class="uk-list">
                            <li id="whitish"> About Us </li>
                            <li id="whitish"> Contact </li>
                            <li id="whitish"> Services </li>
                            <li id="whitish"> Blog </li>
                        </ul>
                    </div>

                    <div>
                        <h4 id="greyish" style={{fontWeight:700}}> Social </h4>
                        <ul class="uk-list">
                            <li id="whitish"> Twitter </li>
                            <li id="whitish"> Instagram </li>
                            <li id="whitish"> Threads </li>
                            <li id="whitish"> Facebook </li>
                        </ul>
                    </div>

                    <div>
                        <h4 id="greyish" style={{fontWeight:700}}> Legal </h4>
                        <ul class="uk-list">
                            <li id="whitish"> Terms </li>
                            <li id="whitish"> Privacy </li>
                            <li id="whitish"> Cookies </li>
                        </ul>
                    </div>
                </div>
            
            </div>    
            </div>


        </section>
    )

}