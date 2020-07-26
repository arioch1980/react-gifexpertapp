import React, {useState} from 'react';
import { AddCategory } from './components/AddCAtegory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';

//const categories =['One Punch', 'Samurai X', 'Dragon Ball'];

    const GifExpertApp = ( ) => {    
        const [categories, setCategories] = useState(['One Punch']);
      

        return (
            <>
                <h2>{ 'GifExpertApp' }</h2>
                
                <AddCategory setCategories={setCategories}></AddCategory>
                
                <hr></hr>
            
                <ol>
                    {
                        categories.map(category => ( 
                       
                            <GifGrid
                            key= {category}
                                category={category}
                            />
                       ))
                    }
                </ol>
                
            </>
        );
    }

    // GifExpertApp.propTypes = {
    //     //saludo: PropTypes.string.isRequired
    // }
    
    // GifExpertApp.defaultProps = {
      
    // }

export default GifExpertApp;