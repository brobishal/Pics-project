// here all code is related to configuration of axios or
//  related to somehow getting unsplash to accept our request

import axios from 'axios';


// Axios.create is a handy feature within Axios used to create a new instance with a custom configuration.
//  With axios.create, we can generate a client for any API and reuse the configuration
//   for any calls using the same client, as we will see in the example below.
//create() method is going to create a instance of axios client with couple of default property 
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID xrl-meyxoQn1LRguAnQ83JHlLFK9CZbPS61GXzoqED8 ",
      }

}); 