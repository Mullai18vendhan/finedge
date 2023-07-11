

export default function Contact() {

    return(
        <section id="contact">

            <h2 className='sub-h center' style={{margin:0}}> Contact </h2>
            <h5 className='sub-h center' id="greeny" style={{margin:0}}> FinEdge. </h5>

            <form style={{ marginTop:'5%', padding:'0% 15% 5%' }}>
                <fieldset class="uk-fieldset">

                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Name" aria-label="Input" />
                    </div>

                    <div class="uk-margin">
                        <input class="uk-input" type="email" placeholder="Email" aria-label="Input" />
                    </div>

                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="Message" aria-label="Textarea"></textarea>
                    </div>

                    <div style={{width:'100%', textAlign:'right', marginTop:'3%'}}>
                        <button id="submit" style={{ padding:'1% 4%', borderColor:'#73F343', color:'#73F343' }}> Submit </button>
                    </div>

                </fieldset>
            </form>



        </section>
    )

}