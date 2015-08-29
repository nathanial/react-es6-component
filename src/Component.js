import _ from 'underscore';
import React from 'react';

class Component extends React.Component {

  constructor(props){
    super(props);
    this.autoBind();
  }

  autoBind() {
    const blacklist = ['constructor', 'render'];
    const methods = Object.getOwnPropertyNames(this.constructor.prototype)
                          .filter(prop => typeof this[prop] === 'function')
                          .filter(prop => !_.contains(blacklist, prop));

    if(methods.length > 0){
      _.bindAll(this, ...methods);
    }
  }
}

export default Component;
