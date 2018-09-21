import React, { Component } from 'react';
import Image from './Image';
import Columns from './Columns';
import 'bulma/css/bulma.css';

class MyApp extends Component{
    render(){
        return(
            <div>
                <section className="sections">
                    <Columns class="columns">
                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg')} alt="Vivo V11"/>
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/appleXs.jpg')} alt="apple Xs"/>
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppoF7.png')} alt="oppo F7"/>
                        </Columns>
                        
                        <Columns class="column">
                            <Image src={require('./img/oppoF9.png')} alt="oppo F9"/>
                        </Columns>
                    </Columns>
                    
                </section>
            </div>
        );
    }
};

export default MyApp;