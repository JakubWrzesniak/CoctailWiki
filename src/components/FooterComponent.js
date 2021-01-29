import React, {Component} from 'react';


class Footer extends Component {
    render(){
        return(
            <div className="footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-4">
                            <h5>Kontakt</h5>
                            <address>
                                <p>Email: <a href = "malito: jakub.wrzesniak@outlook.com">jakub.wrzesniak@outlook.com</a></p>
                                <p>Facebook: <a href = "https://www.facebook.com/jakub.wrzesniak.5">Jakub Wrzesniak</a></p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;